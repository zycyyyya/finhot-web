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
// 各渠道的默认模型。不能统一回落到 DEFAULT_MODEL——那是 SenseNova 的模型名，
// 发给 StepFun 会直接「模型不存在」。渠道没给 model 时用这里对应的值。
const CHANNEL_DEFAULT_MODELS = {
  custom: DEFAULT_MODEL,
  stepfun: 'step-3.7-flash',
  sensenova: DEFAULT_MODEL,
};
const DEFAULT_TIMEOUT_MS = 90000;
const MAX_RESPONSE_BYTES = 200 * 1024;

// SenseNova 等免费端点返回体形如：
//   {"error":{"message":"inference exceeds tpm/rpm limit","type":"rate_limit_error","code":"429003"}}
// callChat 会把它包成 `HTTP 429: {...}`，但自定义端点的措辞不保证带状态码前缀，
// 所以三个特征都判一遍，避免限流被当成普通失败而跳过重试。
function isRateLimitError(error) {
  const message = (error && error.message) || '';
  return /HTTP 429/i.test(message)
    || /rate_limit_error/i.test(message)
    || /429003/i.test(message)
    || /\b(tpm|rpm)\b.*limit/i.test(message);
}

/** 熔断后抛出的哨兵错误：调用方据此区分「限流中止」与「条目自身失败」。 */
class RateLimitOpenError extends Error {
  constructor(guard) {
    super(`rate limit circuit open after ${guard.total} 429s (window ${guard.count429}/${guard.window.length})`);
    this.name = 'RateLimitOpenError';
    this.code = 'RATE_LIMIT_OPEN';
    this.total = guard.total;
  }
}

/**
 * 批次级限流熔断器。
 *
 * 为什么必须有：每条新闻独立重试时，240 次请求各自重试 2 次 = 720 次请求，
 * 重试风暴本身会加剧 RPM 限流；更糟的是每条要空转 8s+16s 才放弃，
 * 120 条 ÷ 并发 4 = 30 波 × 24s ≈ 12 分钟纯 sleep，且一条都评不出来。
 *
 * 判据用「滑动窗口内 429 占比」而不是「连续 429 次数」：并发 4 时成功与429
 * 交错是常态，连续计数可能一直打不满阈值而永不熔断。
 *
 * 一旦 open 就不再自动闭合——单次CI 运行是批次语义，宁可整体回退启发式。
 *
 * options: { threshold = 12, windowSize = 30 }
 */
function createRateLimitGuard(options) {
  const opts = options || {};
  const threshold = Number.isFinite(opts.threshold) && opts.threshold > 0 ? opts.threshold : 12;
  const windowSize = Number.isFinite(opts.windowSize) && opts.windowSize > 0 ? opts.windowSize : 30;
  const window = [];
  let total = 0;
  let open = false;

  function count429() {
    let n = 0;
    for (const outcome of window) if (outcome === '429') n += 1;
    return n;
  }

  return {
    threshold,
    windowSize,
    window,
    get open() { return open; },
    get total() { return total; },
    count429,
    recordRateLimit() {
      total += 1;
      window.push('429');
      if (window.length > windowSize) window.shift();
      if (count429() >= threshold) open = true;
      return open;
    },
    recordSuccess() {
      window.push('ok');
      if (window.length > windowSize) window.shift();
    },
    /** 手动触发（如阶段总时限到期），不再发起任何请求。 */
    trip() { open = true; },
  };
}

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
 *
 * options 额外支持：
 * - retryDelays: 退避数组，默认 [8000, 16000]
 * - guard: createRateLimitGuard() 的实例。熔断打开时立刻抛 RateLimitOpenError，
 *   不再 sleep、不再重试——这是把「12 分钟空转」压到「几秒内降级」的关键。
 *   每次成功会调guard.recordSuccess()，每次 429 调 recordRateLimit()。
 *
 * 熔断的语义边界（重要）：熔断只针对**主渠道**。fallback 走的是另一家供应商的
 * 独立配额，不共享限流窗口，因此熔断打开时必须放行 fallback —— 否则「主渠道限流」
 * 会退化成「全渠道放弃」，明明有备用额度却不用。
 */
async function callChatWithRetry(messages, options, label) {
  const opts = options || {};
  const delays = Array.isArray(opts.retryDelays) ? opts.retryDelays : [8000, 16000];
  const guard = opts.guard || null;
  const chain = Array.isArray(opts.channels) && opts.channels.length
    ? opts.channels
    : [opts].concat(opts.fallback ? [opts.fallback] : []);
  const hasFallback = chain.length > 1;

  /**
   * 沿渠道链逐个尝试，直到某个渠道成功。
   *
   * 关键语义：**熔断只针对当前渠道**。每家供应商配额独立，换到下一个渠道时
   * 必须清掉 guard，否则上一家的限流会把有独立额度的下一家一起误杀。
   * 已试过的渠道记入 tried，失败原因累积到 errors 里便于排查。
   */
  async function tryChannelChain(primaryError, labelSuffix) {
    const list = Array.isArray(opts.channels) && opts.channels.length
      ? opts.channels
      : [opts].concat(opts.fallback ? [opts.fallback] : []);
    const errors = [];
    if (primaryError) errors.push(String(primaryError.message || primaryError));

    for (let i = 0; i < list.length; i++) {
      const channel = list[i];
      if (i === 0 && primaryError) {
        // 链首就是当前主渠道，已经在重试循环里试过了，不重复发请求。
        continue;
      }
      if (!channel || !channel.apiKey) continue;
      try {
        const r = await callChat(messages, {
          ...opts, ...channel, channels: undefined, fallback: undefined, guard: undefined,
        });
        if (typeof console !== 'undefined' && label) {
          console.error(`[llm] ${label} 已切换到备用渠道 ${channel.name}${labelSuffix || ''}`);
        }
        return r;
      } catch (error) {
        // 老式 fallback 对象可能没有 name，标成 fallback 而不是 undefined。
        errors.push(`${channel.name || 'fallback'}: ${error.message}`);
      }
    }
    throw new Error(errors.join(' | ') || 'no channel available');
  }

  // 入口先看熔断：主渠道已经打满就别再发了。但有备用渠道就直奔fallback，
  // 不要因为主渠道限流而让整条链路直接失败。
  if (guard && guard.open) {
    if (hasFallback) return tryChannelChain(new RateLimitOpenError(guard), '（熔断）');
    throw new RateLimitOpenError(guard);
  }

  for (let attempt = 0; attempt <= delays.length; attempt++) {
    try {
      const result = await callChat(messages, opts);
      if (guard) guard.recordSuccess();
      return result;
    } catch (error) {
      const rateLimited = isRateLimitError(error);

      if (rateLimited && guard) {
        guard.recordRateLimit();
        // 熔断刚被这一条触发：不要睡。有 fallback 就切过去，两者都没有才冒泡。
        if (guard.open) {
          if (hasFallback) return tryChannelChain(error);
          throw new RateLimitOpenError(guard);
        }
      }

      if (!rateLimited || attempt === delays.length) {
        if (hasFallback) return tryChannelChain(error);
        throw error;
      }
      const delay = delays[attempt];
      if (typeof console !== 'undefined') console.error(`[llm] ${label || 'call'} rate limited; retrying in ${delay / 1000}s`);
      await new Promise(resolve => setTimeout(resolve, delay));
      // sleep 期间别的worker 可能已把熔断打开：让位给 fallback 再决定是否中止。
      if (guard && guard.open && !hasFallback) throw new RateLimitOpenError(guard);
    }
  }
  return '';
}

/**
 * 解析单个 secret 里可能塞的多项配置。
 *
 * 背景：GitHub 的 secret 只能一个一格，但 StepFun 需要 key + baseUrl + model 三个值。
 * 用户很容易把三行一起塞进 `STEPFUN_API_KEY`（实测真这么填过）。若原样拿去当
 * Authorization，整个多行串会被当成 key →必然 401，且报错极难定位。
 *
 * 支持两种写法，大小写不敏感，按 `=` 或 `:` 或纯分行分隔：
 *   多行：
 *     sk-xxxx
 *     https://api.stepfun.com/v1/chat/completions
 *     step-3.7-flash
 *   带标签：
 *     STEPFUN_API_KEY=sk-xxxx
 *     STEPFUN_BASE_URL=https://...
 *     STEPFUN_MODEL=step-3.7-flash
 *   带标签+冒号：
 *     api_key: sk-xxxx
 *     base_url: https://...
 *     model: step-3.7-flash
 *
 * 返回 { apiKey, baseUrl, model, malformed }。单行纯 key 时 malformed=false，
 * 原样返回 apiKey（不猜后面还有没有别的值）。
 */
function parseCombinedSecret(raw) {
  const out = { apiKey: '', baseUrl: '', model: '', malformed: false };
  if (typeof raw !== 'string') return out;
  const text = raw.trim();
  if (!text) return out;

  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

  // 带标签的写法：任一行含分隔符且左侧是已知键名。
  // 标签允许带前缀（STEPFUN_API_KEY / FINHOT_LLM_STEPFUN_BASE_URL），
  // 所以先剥掉所有已知渠道前缀再比对，否则大写全名匹配不上会静默退化成「整行当 key」。
  const LABEL_RE = /^(?:stepfun_|finhot_llm_stepfun_|_)?(api[_-]?key|key|base[_-]?url|url|model|name)\s*[=:]\s*(.+)$/i;
  const labelled = [];
  for (const line of lines) {
    const m = line.match(LABEL_RE);
    if (m) labelled.push([m[1].toLowerCase().replace(/[_-]/g, ''), m[2].trim()]);
  }
  if (labelled.length > 0) {
    for (const [k, v] of labelled) {
      if (k === 'apikey' || k === 'key') out.apiKey = v;
      else if (k === 'baseurl' || k === 'url') out.baseUrl = v;
      else if (k === 'model' || k === 'name') out.model = v;
    }
    return out;
  }

  // 分行写法：key / baseUrl / model各占一行
  if (lines.length === 1) {
    // 单行：可能整串就是 key；若长得像 URL 也不动（避免误判撕掉后缀）
    out.apiKey = lines[0];
    return out;
  }
  if (lines.length === 2) {
    out.apiKey = lines[0];
    out.baseUrl = lines[1];
    return out;
  }
  out.apiKey = lines[0];
  out.baseUrl = lines[1];
  out.model = lines[2];
  // 三行以上：后面还有内容但我们只认前三个，必须告警，否则静默丢配置
  if (lines.length > 3) out.malformed = true;
  return out;
}

/**
 * 从环境解析模型配置，构建**有序渠道链**。
 *
 * 为什么是链而不是「主 + fallback」两个槽：真实可用的小模型端点有多个
 * （SenseNova / StepFun / LongCat），任一家限流或欠费都不该让整轮停摆。
 * 单fallback 槽在 StepFun 过期时会直接退化成单点依赖。
 *
 * 渠道顺序 = 配了就用的优先， SenseNova 垫底（免费、额度小但一直可用）。
 * 每家的配额独立，所以熔断只管当前渠道，换渠道时不携带 guard。
 *
 * 渠道字段：{ name, apiKey, baseUrl, model }
 * StepFun 注意有两个端点，走哪个取决于 Key 的类型：
 *   - 按量付费 Key → https://api.stepfun.com/v1
 *   - Step Plan订阅 Key → https://api.stepfun.com/step_plan/v1
 * 端点整串由FINHOT_LLM_STEPFUN_BASE_URL 指定，不要在代码里猜。
 */
function resolveLLMConfig(env) {
  const e = env || process.env;
  const channels = [];

  const push = (name, apiKey, baseUrl, model) => {
    if (apiKey) {
      channels.push({
        name,
        apiKey,
        baseUrl: baseUrl || '',
        // 按渠道回落默认模型，绝不跨渠道复用上一个渠道的模型名。
        model: model || CHANNEL_DEFAULT_MODELS[name] || DEFAULT_MODEL,
      });
    }
  };

  // 独立环境变量（推荐，语义最清晰）
  let stepfunKey = e.STEPFUN_API_KEY || '';
  let stepfunBase = e.FINHOT_LLM_STEPFUN_BASE_URL || '';
  let stepfunModel = e.FINHOT_LLM_STEPFUN_MODEL || '';

  // 组合 secret 兜底：GitHub 一格secret 里塞了 key/baseUrl/model 多行时也能识别。
  // 注意不能写成 `if (!stepfunKey)`——组合 secret 本身就存在 STEPFUN_API_KEY 里，
  // 那个条件永远不成立，解析器形同虚设。判据是「含换行或带标签」而非「是否为空」。
  const combined = parseCombinedSecret(e.STEPFUN_API_KEY);
  const looksCombined = combined.baseUrl || combined.model
    || (combined.apiKey !== (e.STEPFUN_API_KEY || '').trim());
  if (combined.apiKey && looksCombined) {
    stepfunKey = combined.apiKey;
    stepfunBase = stepfunBase || combined.baseUrl;
    stepfunModel = stepfunModel || combined.model;
    if (combined.malformed && typeof console !== 'undefined') {
      console.error('[llm] STEPFUN_API_KEY 含 4 行以上，只识别前 3 行（key/baseUrl/model），建议拆成独立 secret');
    }
  }

  // 自定义通用端点（保留旧语义，作为显式指定的首选渠道）
  push('custom', e.FINHOT_LLM_API_KEY, e.FINHOT_LLM_BASE_URL, e.FINHOT_LLM_MODEL);
  // StepFun 阶跃星辰：baseUrl 需显式给全（含/v1 或 /step_plan/v1）
  push('stepfun', stepfunKey, stepfunBase, stepfunModel);
  // SenseNova 免费端点兜底：模型固定，不需baseUrl
  push('sensenova', e.DEEPSEEK_API_KEY, '', '');

  if (channels.length === 0) {
    return { channels: [], primary: undefined, fallback: undefined, configured: false };
  }

  // primary = 链首；fallback = 链中第二个（保留旧字段名，向后兼容既有调用方与测试）
  const [primary, fallback] = channels;
  const maxTokens = primary.name === 'stepfun' ? 16000 : undefined;
  return {
    channels,
    primary,
    fallback: channels.length > 1 ? channels[1] : undefined,
    configured: true,
    // StepFun 的推理模型会把 token 花在 reasoning 上，max_tokens 必须给足，
    // 否则 content 为空 / finish_reason=length（实测 8000 会截断，16000 才稳）。
    maxTokens,
  };
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
  RateLimitOpenError,
  callChat,
  callChatWithRetry,
  coerceScore,
  createRateLimitGuard,
  extractJSON,
  isRateLimitError,
  parseCombinedSecret,
  parseEndpoint,
  resolveLLMConfig,
  runPool,
};
