'use strict';
/**
 * P1 模型事件归组（AIHOT 方法 3）+ 事件综述/最新进展（方法 4 的轻量版）。
 *
 * 启发式聚类（Jaccard + 72h 窗 + 主体锚点）负责"明显不像的分开"；
 * 模型只处理边界对：pairwise 判定 SAME_OCCURRENCE / SAME_STORY / UNRELATED / ROUNDUP，
 * 判定结果作为"预计算表"注入 clusterEvents，替换该对的启发式相似度。
 * 这样 history.js / analysis.js 不需要 async，LLM 调用全部发生在 fetch.js 侧。
 *
 * 软降级：判定调用失败的对子不在表里 → 该对回落启发式；整体失败 = 纯启发式聚类。
 */

const { callChatWithRetry, extractJSON, runPool } = require('./llm');
const { eventPairKey, eventSimilarity, isNonEventTitle, withinEventWindow } = require('./core');

const DEFAULTS = {
  // 只把启发式相似度落在 [minSim, 1) 的对子送模型（太低的基本无关，浪费调用）。
  minSim: 0.3,
  maxPairs: 120,
  batchSize: 6,
  concurrency: 3,
  temperature: 0.2,
  maxEventSummaries: 12,
  siteName: 'finhot',
};

const JUDGE_SYSTEM = `你是金融保险资讯的事件归组判定器。对每一对标题，判定它们之间的关系，只能是以下四类之一：
- SAME_OCCURRENCE：同一具体事件（同一动作、同一主体、同一时间窗），只是措辞或详略不同
- SAME_STORY：同一条新闻线/同一主题的后续进展，值得挂在同一事件链下，但不是同一次发生
- UNRELATED：无关
- ROUNDUP：其中至少一个是多事件盘点/汇总（本身就包含多个事件）
只返回合法 JSON，不要 Markdown。顶层是 "decisions" 数组，长度与输入对数一致，每项是对应输入对的标签字符串。`;

function buildJudgeMessages(pairs) {
  const list = pairs.map((p, i) => `${i + 1}. A: ${p.a}\n   B: ${p.b}`).join('\n');
  return [
    { role: 'system', content: JUDGE_SYSTEM },
    { role: 'user', content: `逐对判定以下 ${pairs.length} 组标题：\n${list}` },
  ];
}

/** 解析批量判定输出；返回与输入等长的决策数组（解析失败的位置为 null）。 */
function parseDecisions(raw, count) {
  const parsed = extractJSON(raw, null);
  const arr = parsed && Array.isArray(parsed.decisions) ? parsed.decisions : null;
  if (!arr) return new Array(count).fill(null);
  return Array.from({ length: count }, (_, i) => {
    const v = arr[i];
    return ['SAME_OCCURRENCE', 'SAME_STORY', 'UNRELATED', 'ROUNDUP'].includes(v) ? v : null;
  });
}

/**
 * 生成候选对（72h 时间窗内、启发式相似度 ≥ minSim 的全部对子，按相似度降序截断）。
 * items 需要 title / publishedAt。
 */
function candidatePairs(items, options) {
  const opts = { ...DEFAULTS, ...(options || {}) };
  const usable = items.filter(i => i && i.title && !isNonEventTitle(i.title));
  const pairs = [];
  for (let i = 0; i < usable.length; i++) {
    for (let j = i + 1; j < usable.length; j++) {
      if (!withinEventWindow(usable[i].publishedAt, usable[j].publishedAt, 72)) continue;
      const sim = eventSimilarity(usable[i].title, usable[j].title);
      if (sim < opts.minSim) continue;
      pairs.push({ a: usable[i].title, b: usable[j].title, sim });
    }
  }
  pairs.sort((x, y) => y.sim - x.sim);
  return pairs.slice(0, opts.maxPairs);
}

/**
 * 批量判定候选对。返回 Map<pairKey, decision>（pairKey 用 core.eventPairKey）。
 * options: { apiKey, maxPairs?, batchSize?, concurrency?, temperature?, fetchImpl?, log? }
 */
async function judgeEventPairs(items, options) {
  const opts = { ...DEFAULTS, ...(options || {}) };
  const pairs = candidatePairs(items, opts);
  if (pairs.length === 0) return { judgeMap: new Map(), judged: 0, attempted: 0, failed: 0 };

  const judgeMap = new Map();
  let failed = 0;
  const batches = [];
  for (let i = 0; i < pairs.length; i += opts.batchSize) batches.push(pairs.slice(i, i + opts.batchSize));

  const callOpts = {
    apiKey: opts.apiKey,
    baseUrl: opts.baseUrl,
    model: opts.model,
    fallback: opts.fallback,
    temperature: opts.temperature,
    // 6 对一批的判定 + 推理模型的思考余量。
    maxTokens: 6000,
    fetchImpl: opts.fetchImpl,
  };
  const tasks = batches.map((batch, bi) => async () => {
    const raw = await callChatWithRetry(buildJudgeMessages(batch), callOpts, `event-judge batch ${bi + 1}`);
    const decisions = parseDecisions(raw, batch.length);
    batch.forEach((pair, i) => {
      if (decisions[i] === null) { failed += 1; return; }
      judgeMap.set(eventPairKey(pair.a, pair.b), decisions[i]);
    });
  });
  await runPool(tasks, opts.concurrency);

  const log = opts.log || (() => {});
  log(`[llm-events] 判定 ${judgeMap.size}/${pairs.length} 对（${batches.length} 次调用，失败对 ${failed}）`);
  return { judgeMap, judged: judgeMap.size, attempted: pairs.length, failed };
}

const SUMMARY_SYSTEM = '你是金融保险资讯编辑。基于同一事件的多条报道，写一句不超过 40 字的综述，和一句不超过 40 字的最新进展（以时间最新的报道为准）。只返回合法 JSON，不要 Markdown。';

/**
 * 为事件生成综述 + 最新进展（每次调用一个事件）。
 * events: [{eventId, title, evidenceItemIds}]，itemById: Map<id, item>。
 * 返回 Map<eventId, {summary, latestProgress}>。
 */
async function summarizeEvents(events, itemById, options) {
  const opts = { ...DEFAULTS, ...(options || {}) };
  const picked = (events || [])
    .filter(e => e && Array.isArray(e.evidenceItemIds) && e.evidenceItemIds.length >= 1)
    .slice(0, opts.maxEventSummaries);
  if (picked.length === 0) return { summaries: new Map(), attempted: 0, failed: 0 };

  const summaries = new Map();
  let failed = 0;
  const callOpts = {
    apiKey: opts.apiKey,
    baseUrl: opts.baseUrl,
    model: opts.model,
    fallback: opts.fallback,
    temperature: 0.3,
    maxTokens: 3000,
    fetchImpl: opts.fetchImpl,
  };
  const tasks = picked.map(event => async () => {
    const members = event.evidenceItemIds
      .map(id => itemById.get(id))
      .filter(Boolean)
      .sort((a, b) => String(a.publishedAt || '').localeCompare(String(b.publishedAt || '')))
      .slice(-8);
    if (members.length === 0) return;
    const lines = members.map(m => `- [${(m.publishedAt || '').slice(0, 10)}] ${m.title}`).join('\n');
    const raw = await callChatWithRetry([
      { role: 'system', content: SUMMARY_SYSTEM },
      { role: 'user', content: `事件：${event.title}\n报道：\n${lines}\n\n返回 {"summary": "...", "latestProgress": "..."}` },
    ], callOpts, `event-summary ${event.eventId}`);
    const parsed = extractJSON(raw, null);
    if (!parsed || typeof parsed.summary !== 'string') { failed += 1; return; }
    summaries.set(event.eventId, {
      summary: parsed.summary.slice(0, 80),
      latestProgress: typeof parsed.latestProgress === 'string' ? parsed.latestProgress.slice(0, 80) : '',
    });
  });
  await runPool(tasks, opts.concurrency);

  const log = opts.log || (() => {});
  log(`[llm-events] 综述 ${summaries.size}/${picked.length} 个事件（失败 ${failed}）`);
  return { summaries, attempted: picked.length, failed };
}

module.exports = {
  DEFAULTS,
  JUDGE_SYSTEM,
  buildJudgeMessages,
  candidatePairs,
  judgeEventPairs,
  parseDecisions,
  summarizeEvents,
};
