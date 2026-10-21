'use strict';
/**
 * P1 双次独立打分（AIHOT 方法 1）。
 *
 * 对启发式预筛过的候选条目，用同一份金融评分提示词（prompts/selection-score.md）
 * 独立采样两次（temperature > 0），两次都 ≥ 门槛才进精选，展示分为两次的平均分。
 *
 * 软降级是硬约束：任何条目打分失败都回退启发式分（scoredBy 保持 'heuristic'），
 * 整个 LLM 阶段失败也不影响发布门。full 模式且配置了 DEEPSEEK_API_KEY 才运行；
 * cached 模式 / 无 key 时只恢复条目上已缓存的 LLM 分。
 */

const fs = require('fs');
const path = require('path');
const {
  RateLimitOpenError,
  callChatWithRetry,
  coerceScore,
  createRateLimitGuard,
  extractJSON,
  resolveLLMConfig,
  runPool,
} = require('./llm');

const PROMPT_FILE = path.join(__dirname, '..', 'prompts', 'selection-score.md');

const DEFAULTS = {
  siteName: 'finhot',
  // 启发式分低于该值的条目不送模型（控成本；启发式 45 以下的内容几乎不可能值得精选）。
  prefilterMinScore: 45,
  // 模型入选门槛：两次独立分都必须 ≥ gate。
  // 依据 data/gold.jsonl 门槛扫描（2026-09-30，31 条）：45-50 F1 最高（75.0%）、查准 90%，
  // 60 以上查全率崩到 28%。样本少，后续随 gold 扩充再校准。
  gate: 50,
  // 单次运行最多送模型评分的条目数（×2 次调用）。
  maxItemsPerRun: 120,
  // LLM 并发上限。
  concurrency: 4,
  // 独立性来源：同一提示词高温采样两次。
  temperature: 0.8,
  // 限流熔断：滑动窗口 30 次调用里 429 达到 12 次就中止整个 LLM 阶段。
  // 免费端点（SenseNova）是 RPM/TPM 限流，240 次请求必然触顶；
  // 没有熔断时每条各自重试 2 次= 720 次请求，纯 sleep 就12 分钟且零产出。
  rateLimitThreshold: 12,
  rateLimitWindow: 30,
  // 429 退避（毫秒）。免费端点是 RPM/TPM 配额限流，等8s/16s 并不会让配额回来，
  // 只会把熔断前的空转拉长——真正起作用的是 threshold。所以退避给短值，
  // 让熔断尽快触发；已验证调低后熔断总耗时从 32s 降到约 8s。
  retryDelays: [1500, 3000],
  // 阶段总时限（毫秒）。即使没触发熔断（比如模型慢但没限流），
  // 也不允许单项评分阶段无限占用CI 运行时长，超时后剩余条目回退启发式。
  stageBudgetMs: 8 * 60 * 1000,
};

function envNumber(env, name, fallback) {
  const v = Number(env[name]);
  return Number.isFinite(v) && v > 0 ? v : fallback;
}

function loadPromptTemplate(siteName) {
  const raw = fs.readFileSync(PROMPT_FILE, 'utf8');
  return raw.split('{{siteName}}').join(siteName || DEFAULTS.siteName);
}

function buildMessages(template, item) {
  const body = [
    `标题：${item.title || ''}`,
    `正文：${(item.summary || '').slice(0, 600)}`,
  ].join('\n');
  return [
    { role: 'system', content: template },
    { role: 'user', content: body },
  ];
}

/** 解析单次模型输出为 0-100 整数；非法输出返回 null。 */
function parseScore(raw) {
  const parsed = extractJSON(raw, null);
  if (!parsed || typeof parsed !== 'object') return null;
  return coerceScore(parsed.attentionScore);
}

/**
 * 对单个条目做双次独立打分。任一一次失败返回 null（调用方回退启发式）。
 */
async function scoreItemTwice(item, template, options) {
  const callOpts = {
    apiKey: options.apiKey,
    baseUrl: options.baseUrl,
    model: options.model,
    fallback: options.fallback,
    // 有序渠道链（多供应商轮换），比单fallback 槽更能抵御单家限流。
    channels: options.channels,
    temperature: options.temperature,
    // 推理模型会消耗大量 reasoning token（实测 800 会被思考吃光导致 content 为空），
    // 给足余量；StepFun 的 16000 由 resolveLLMConfig 按渠道名给出。
    maxTokens: options.maxTokens || 4000,
    fetchImpl: options.fetchImpl,
    // 阶段共享的熔断器：限流时让整个阶段一起停下，而不是这条继续空转重试。
    guard: options.guard,
    retryDelays: options.retryDelays,
  };
  const first = await callChatWithRetry(buildMessages(template, item), callOpts, `score ${item.id} #1`);
  const a = parseScore(first);
  if (a === null) return null;
  const second = await callChatWithRetry(buildMessages(template, item), callOpts, `score ${item.id} #2`);
  const b = parseScore(second);
  if (b === null) return null;
  return { a, b, avg: Math.round((a + b) / 2) };
}

/**
 * 主入口：对 items 做双次独立打分。
 * options: { apiKey, gate?, prefilterMinScore?, maxItemsPerRun?, concurrency?, temperature?,
 *            fetchImpl?, log?, guard?, rateLimitThreshold?, rateLimitWindow?, stageBudgetMs? }
 * 返回 { results: Map<itemId, {a,b,avg}>, attempted, failed, skipped, aborted, abortReason }。
 * 不修改 items —— 由 applyLLMScores 统一落字段，便于测试与回退。
 *
 * aborted：因限流熔断或阶段超时提前收手的条目数。这些条目保持启发式分，
 * 与评分失败的条目同等对待——软降级是硬约束，绝不因外部限流阻断发布。
 */
async function selectWithLLM(items, options) {
  const opts = { ...DEFAULTS, ...(options || {}) };
  const template = loadPromptTemplate(opts.siteName);
  const candidates = items
    .filter(item => Number(item.score) >= opts.prefilterMinScore)
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, opts.maxItemsPerRun);

  const log = opts.log || (() => {});
  const guard = opts.guard || createRateLimitGuard({
    threshold: opts.rateLimitThreshold,
    windowSize: opts.rateLimitWindow,
  });

  const results = new Map();
  let failed = 0;
  let aborted = 0;
  let abortReason = '';
  const startedAt = Date.now();
  const budgetMs = Number.isFinite(opts.stageBudgetMs) ? opts.stageBudgetMs : 0;

  const tasks = candidates.map(item => async () => {
    if (guard.open) {
      aborted += 1;
      if (!abortReason) abortReason = 'rate-limited';
      return;
    }
    // 阶段总时限：拿到预算耗尽后不再发起新条目，已在途的允许收尾。
    if (budgetMs > 0 && Date.now() - startedAt >= budgetMs) {
      aborted += 1;
      if (!abortReason) abortReason = 'stage-budget-exceeded';
      return;
    }
    let r;
    try {
      r = await scoreItemTwice(item, template, { ...opts, guard });
    } catch (error) {
      // 熔断哨兵错误：整段中止，不算条目自身失败。
      if (error instanceof RateLimitOpenError || error.code === 'RATE_LIMIT_OPEN') {
        aborted += 1;
        if (!abortReason) abortReason = 'rate-limited';
        return;
      }
      failed += 1;
      return;
    }
    if (r === null) { failed += 1; return; }
    results.set(item.id, r);
  });
  await runPool(tasks, opts.concurrency);

  if (guard.open && !abortReason) abortReason = 'rate-limited';
  const elapsed = Date.now() - startedAt;
  log(`[llm-select] 候选 ${candidates.length} 条，成功 ${results.size}，失败 ${failed}，`
    + `预筛跳过 ${items.length - candidates.length} 条`);
  if (abortReason) {
    log(`[llm-select] 提前中止（${abortReason}）：${aborted} 条未评分，回退启发式分`
      + `｜429 计数 ${guard.count429()}/${guard.window.length}，累计 ${guard.total} 次`
      + `｜耗时 ${(elapsed / 1000).toFixed(1)}s`);
  } else {
    log(`[llm-select] 耗时 ${(elapsed / 1000).toFixed(1)}s`);
  }
  return {
    results,
    attempted: candidates.length,
    failed,
    skipped: items.length - candidates.length,
    aborted,
    abortReason,
  };
}

/** 把 LLM 结果落到条目上：展示分 = 两次平均，入选 = 两次都过门槛。 */
function applyLLMScores(items, results, gate) {
  const g = Number.isFinite(gate) ? gate : DEFAULTS.gate;
  let applied = 0;
  for (const item of items) {
    const r = results && results.get(item.id);
    if (!r) continue;
    item.attentionScore = r.avg;
    item.llmScores = [r.a, r.b];
    item.scoredBy = 'llm';
    item.score = r.avg;
    item.passesTierGate = r.a >= g && r.b >= g;
    applied += 1;
  }
  return applied;
}

/**
 * cached 模式 / 无 key：enrichItem 已用启发式重算了 score，这里把条目上缓存的
 * LLM 分恢复回来（字段随 data.js / history.json 持久化）。
 */
function restoreStoredLLMScore(item, gate) {
  const g = Number.isFinite(gate) ? gate : DEFAULTS.gate;
  if (item.scoredBy !== 'llm' || !Array.isArray(item.llmScores) || item.llmScores.length !== 2) return false;
  const [a, b] = item.llmScores.map(Number);
  if (!Number.isFinite(a) || !Number.isFinite(b)) return false;
  item.attentionScore = Math.round((a + b) / 2);
  item.score = item.attentionScore;
  item.passesTierGate = a >= g && b >= g;
  return true;
}

function resolveOptions(env) {
  const e = env || process.env;
  const config = resolveLLMConfig(e);
  const primary = config.primary || {};
  return {
    gate: envNumber(e, 'FINHOT_LLM_GATE', DEFAULTS.gate),
    prefilterMinScore: envNumber(e, 'FINHOT_LLM_PREFILTER_MIN', DEFAULTS.prefilterMinScore),
    maxItemsPerRun: envNumber(e, 'FINHOT_LLM_MAX_ITEMS', DEFAULTS.maxItemsPerRun),
    concurrency: envNumber(e, 'FINHOT_LLM_CONCURRENCY', DEFAULTS.concurrency),
    rateLimitThreshold: envNumber(e, 'FINHOT_LLM_RL_THRESHOLD', DEFAULTS.rateLimitThreshold),
    rateLimitWindow: envNumber(e, 'FINHOT_LLM_RL_WINDOW', DEFAULTS.rateLimitWindow),
    retryDelays: Array.isArray(DEFAULTS.retryDelays) ? DEFAULTS.retryDelays.slice() : undefined,
    stageBudgetMs: envNumber(e, 'FINHOT_LLM_STAGE_BUDGET_MS', DEFAULTS.stageBudgetMs),
    temperature: DEFAULTS.temperature,
    // 无任何渠道配置时 primary 为 undefined，这里给空对象占位，
    // 避免 resolveOptions 在「一个 key 都没配」的场景直接崩 TypeError。
    apiKey: primary.apiKey,
    baseUrl: primary.baseUrl,
    model: primary.model,
    fallback: config.fallback,
    // 完整渠道链 + 按渠道校准过的 maxTokens。
    channels: config.channels,
    maxTokens: config.maxTokens,
    configured: config.configured,
  };
}

module.exports = {
  DEFAULTS,
  PROMPT_FILE,
  applyLLMScores,
  buildMessages,
  loadPromptTemplate,
  parseScore,
  resolveOptions,
  restoreStoredLLMScore,
  scoreItemTwice,
  selectWithLLM,
};