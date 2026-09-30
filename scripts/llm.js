'use strict';
/**
 * 共享 LLM 客户端（OpenAI 兼容 /v1/chat/completions）。
 *
 * 多提供方可配置：
 * - 默认 SenseNova（token.sensenova.cn，deepseek-v4-flash），沿用 DEEPSEEK_API_KEY；
 * - 可用 FINHOT_LLM_BASE_URL + FINHOT_LLM_API_KEY + FINHOT_LLM_MODEL 切到任意兼容端点
 *   （实测过 LongCat：https://api.longcat.chat/openai/v1/chat/completions，
 *    模型 LongCat-2.5-Preview，额度到 2026-10-25）。
 * - callChatWithRetry 支持 fallback 配置：主渠道最终失败后用兜底渠道重试一次
 *   （LongCat 过期后自动回落 SenseNova，前提是 DEEPSEEK_API_KEY 还在）。
 *
 * 设计约束：LLM 任何失败都不允许中断主流程——调用方负责 try/catch 后回退启发式。
 * 注意推理类模型（LongCat）会把 token 花在 reasoning 上，maxTokens 要给足余量。
 */

const https = require('https');

const DEFAULT_HOST = 'token.sensenova.cn';
const DEFAULT_PATH = '/v1/chat/completions';
const DEFAULT_MODEL = 'deepseek-v4-flash';
const DEFAULT_TIMEOUT_MS = 90000;
const MAX_RESPONSE_BYTES = 200 * 1024;

function parseEndpoint(baseUrl) {
  if (!baseUrl) return { host: DEFAULT_HOST, path: DEFAULT_PATH };
  const url = new URL(baseUrl);
  return { host: url.host, path: url.pathname + url.search };
}

function httpsPost(host, path, data, apiKey, timeout) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(data);
    const req = https.request({
      hostname: host,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Length': Buffer.byteLength(body),
      },
      timeout: timeout || DEFAULT_TIMEOUT_MS,
    }, res => {
      let respBody = '';
      let receivedBytes = 0;
      res.setEncoding('utf8');
      res.on('data', chunk => {
        receivedBytes += Buffer.byteLength(chunk, 'utf8');
        if (receivedBytes > MAX_RESPONSE_BYTES) {
          res.destroy(new Error('LLM response too large'));
          return;
        }
        respBody += chunk;
      });
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(respBody);
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${respBody.substring(0, 100)}`));
        }
      });
      res.on('error', reject);
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('LLM timeout')); });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

/**
 * 单次对话调用。
 * options: { apiKey, baseUrl?, model?, temperature?, maxTokens?, timeoutMs?, fetchImpl? }
 * fetchImpl 用于测试注入：签名为 (messages, options) => Promise<string>，直接返回 content。
 */
async function callChat(messages, options) {
  const opts = options || {};
  if (!opts.apiKey) throw new Error('apiKey required');
  const effective = {
    ...opts,
    model: opts.model || DEFAULT_MODEL,
    temperature: Number.isFinite(opts.temperature) ? opts.temperature : 0.7,
    maxTokens: opts.maxTokens || 2000,
  };
  if (typeof effective.fetchImpl === 'function') return effective.fetchImpl(messages, effective);
  const endpoint = parseEndpoint(effective.baseUrl);
  const data = {
    model: effective.model,
    messages,
    temperature: effective.temperature,
    max_tokens: effective.maxTokens,
  };
  const raw = await httpsPost(endpoint.host, endpoint.path, data, effective.apiKey, effective.timeoutMs || DEFAULT_TIMEOUT_MS);
  const parsed = JSON.parse(raw);
  const content = parsed && parsed.choices && parsed.choices[0] && parsed.choices[0].message && parsed.choices[0].message.content;
  if (typeof content !== 'string') throw new Error('LLM response missing content');
  return content;
}

/**
 * 带 429 重试的 callChat；最终失败且配置了 fallback 时，用 fallback 配置再试一次。
 * fallback: { apiKey, baseUrl?, model? }（通常 = SenseNova 兜底）。
 */
async function callChatWithRetry(messages, options, label) {
  const opts = options || {};
  const delays = Array.isArray(opts.retryDelays) ? opts.retryDelays : [8000, 16000];
  for (let attempt = 0; attempt <= delays.length; attempt++) {
    try {
      return await callChat(messages, opts);
    } catch (error) {
      const rateLimited = /HTTP 429/i.test(error.message || '');
      if (!rateLimited || attempt === delays.length) {
        if (opts.fallback && opts.fallback.apiKey) {
          try {
            // fallback 配置覆盖主配置（可含自己的 fetchImpl，测试注入用）；不再递归 fallback。
            return await callChat(messages, { ...opts, ...opts.fallback, fallback: undefined });
          } catch (fallbackError) {
            throw new Error(`${error.message} | fallback failed: ${fallbackError.message}`);
          }
        }
        throw error;
      }
      const delay = delays[attempt];
      if (typeof console !== 'undefined') console.error(`[llm] ${label || 'call'} rate limited; retrying in ${delay / 1000}s`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  return '';
}

/**
 * 从环境解析模型配置：
 * - FINHOT_LLM_API_KEY / FINHOT_LLM_BASE_URL / FINHOT_LLM_MODEL 存在 → 主渠道为自定义端点；
 * - 否则主渠道 = SenseNova + DEEPSEEK_API_KEY。
 * - 主渠道不是 SenseNova 且 DEEPSEEK_API_KEY 存在时，自动把它设为兜底渠道。
 */
function resolveLLMConfig(env) {
  const e = env || process.env;
  const custom = Boolean(e.FINHOT_LLM_API_KEY);
  const primary = custom
    ? { apiKey: e.FINHOT_LLM_API_KEY, baseUrl: e.FINHOT_LLM_BASE_URL || '', model: e.FINHOT_LLM_MODEL || DEFAULT_MODEL }
    : { apiKey: e.DEEPSEEK_API_KEY || '', baseUrl: '', model: DEFAULT_MODEL };
  const fallback = custom && e.DEEPSEEK_API_KEY
    ? { apiKey: e.DEEPSEEK_API_KEY, baseUrl: '', model: DEFAULT_MODEL }
    : undefined;
  return { primary, fallback, configured: Boolean(primary.apiKey) };
}

/**
 * 从模型输出里安全提取 JSON：去 markdown 围栏、截取首个 { 到最后一个 }、
 * 解析失败时尝试补全未闭合的括号。失败返回 fallback。
 */
function extractJSON(raw, fallback) {
  if (typeof raw !== 'string') return fallback;
  let jsonStr = raw.replace(/```json\s*\n?/g, '').replace(/\n?\s*```/g, '').trim();
  const firstBrace = jsonStr.indexOf('{');
  const lastBrace = jsonStr.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
  }
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    let repaired = jsonStr;
    let openBraces = 0, openBrackets = 0;
    for (const ch of repaired) {
      if (ch === '{') openBraces++;
      else if (ch === '}') openBraces--;
      else if (ch === '[') openBrackets++;
      else if (ch === ']') openBrackets--;
    }
    while (openBrackets > 0) { repaired += ']'; openBrackets--; }
    while (openBraces > 0) { repaired += '}'; openBraces--; }
    try {
      return JSON.parse(repaired);
    } catch {
      return fallback;
    }
  }
}

/** 将 0-100 的模型输出收敛为合法整数分数；非法输出返回 null（由调用方回退）。 */
function coerceScore(value) {
  const n = Math.round(Number(value));
  if (!Number.isFinite(n)) return null;
  return Math.max(0, Math.min(100, n));
}

/** 简单并发池：tasks 是返回 Promise 的函数数组，limit 为并发上限。单个任务失败不中断其他任务。 */
async function runPool(tasks, limit) {
  const results = new Array(tasks.length);
  let cursor = 0;
  async function worker() {
    while (cursor < tasks.length) {
      const index = cursor++;
      try {
        results[index] = { ok: true, value: await tasks[index]() };
      } catch (error) {
        results[index] = { ok: false, error };
      }
    }
  }
  const workers = [];
  for (let i = 0; i < Math.min(limit, tasks.length); i++) workers.push(worker());
  await Promise.all(workers);
  return results;
}

module.exports = {
  DEFAULT_MODEL,
  callChat,
  callChatWithRetry,
  coerceScore,
  extractJSON,
  parseEndpoint,
  resolveLLMConfig,
  runPool,
};
