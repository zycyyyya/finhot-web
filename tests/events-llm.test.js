'use strict';

const assert = require('assert');
const {
  buildJudgeMessages,
  candidatePairs,
  judgeEventPairs,
  parseDecisions,
  summarizeEvents,
} = require('../scripts/events-llm');
const { clusterEvents } = require('../scripts/analysis');
const { eventPairKey } = require('../scripts/core');

// === parseDecisions ===
assert.deepStrictEqual(parseDecisions('{"decisions":["SAME_OCCURRENCE","UNRELATED"]}', 2), ['SAME_OCCURRENCE', 'UNRELATED']);
assert.deepStrictEqual(parseDecisions('{"decisions":["SAME_OCCURRENCE"]}', 3), ['SAME_OCCURRENCE', null, null], '长度不足补 null');
assert.deepStrictEqual(parseDecisions('{"decisions":["BAD_LABEL","ROUNDUP"]}', 2), [null, 'ROUNDUP'], '非法标签为 null');
assert.deepStrictEqual(parseDecisions('垃圾', 2), [null, null]);

// === buildJudgeMessages ===
const jm = buildJudgeMessages([{ a: '标题甲', b: '标题乙' }]);
assert.strictEqual(jm.length, 2);
assert.ok(jm[1].content.includes('标题甲'));
assert.ok(jm[1].content.includes('标题乙'));

// === candidatePairs：时间窗 + minSim + 上限 ===
const now = Date.now();
const mk = (title, hoursAgo, category) => ({
  id: title, title, category: category || 'industry',
  publishedAt: new Date(now - hoursAgo * 3600000).toISOString(),
});
{
  const items = [
    mk('央行宣布降准五十个基点', 2),
    mk('央行降准落地 明日生效', 3),       // 窗内、相似 → 候选
    mk('葡萄牙阿连特茹葡萄酒丰收节开幕', 4), // 窗内、与谁都不共享主体/主题 → 排除
    mk('央行宣布降准五十个基点', 100),      // 窗外 → 排除
  ];
  const pairs = candidatePairs(items, { minSim: 0.3, maxPairs: 10 });
  assert.strictEqual(pairs.length, 1, '只有窗内相似的一对');
  assert.ok(pairs[0].a.includes('央行') && pairs[0].b.includes('央行'));
}
{
  const items = [mk('截至收盘沪指上涨', 1), mk('截至收盘沪指上涨副本', 2)];
  const pairs = candidatePairs(items, { minSim: 0.1, maxPairs: 10 });
  assert.strictEqual(pairs.length, 0, '行情播报模板不参与候选对');
}

(async () => {
  // === judgeEventPairs：判定表按键可查 ===
  const items = [
    mk('央行宣布降准五十个基点', 2),
    mk('央行降准落地 明日生效', 3),
  ];
  const { judgeMap } = await judgeEventPairs(items, {
    apiKey: 'k',
    fetchImpl: async () => '{"decisions":["SAME_OCCURRENCE"]}',
    log: () => {},
  });
  assert.strictEqual(judgeMap.get(eventPairKey('央行宣布降准五十个基点', '央行降准落地 明日生效')), 'SAME_OCCURRENCE');
  assert.strictEqual(judgeMap.get(eventPairKey('央行降准落地 明日生效', '央行宣布降准五十个基点')), 'SAME_OCCURRENCE', '对键与顺序无关');

  // === clusterEvents 使用判定表 ===
  const pool = [
    { id: 'i1', title: '央行宣布降准五十个基点', category: 'industry', publishedAt: new Date(now - 2 * 3600000).toISOString() },
    { id: 'i2', title: '降准落地：央行下调存款准备金率', category: 'industry', publishedAt: new Date(now - 3 * 3600000).toISOString() },
  ];
  // 启发式本身已能合并（同主体锚点）
  const heuristic = clusterEvents(pool, { maxClusters: 10 });
  const llmMap = new Map([[eventPairKey(pool[0].title, pool[1].title), 'SAME_OCCURRENCE']]);
  const judged = clusterEvents(pool, { maxClusters: 10, pairJudge: llmMap });
  assert.ok(judged.length >= 1, '判定表路径正常出簇');

  // UNRELATED 判定应阻止启发式合并：构造一对高相似但判定无关的标题（同主体词+高 Jaccard）
  const pool2 = [
    { id: 'j1', title: '中国平安发布2026年半年报', category: 'industry', publishedAt: new Date(now - 2 * 3600000).toISOString() },
    { id: 'j2', title: '中国平安发布回购进展公告', category: 'industry', publishedAt: new Date(now - 3 * 3600000).toISOString() },
  ];
  const merged = clusterEvents(pool2, { maxClusters: 10 });
  const splitMap = new Map([[eventPairKey(pool2[0].title, pool2[1].title), 'UNRELATED']]);
  const split = clusterEvents(pool2, { maxClusters: 10, pairJudge: splitMap });
  const countOf = clusters => clusters.reduce((n, c) => n + c.evidenceItemIds.length, 0);
  assert.ok(countOf(split) <= countOf(merged), 'UNRELATED 不应产生更多合并');

  // === summarizeEvents ===
  const events = [
    { eventId: 'e1', title: '央行降准', evidenceItemIds: ['i1', 'i2'] },
    { eventId: 'e2', title: '无成员事件', evidenceItemIds: [] },
  ];
  const itemById = new Map(pool.map(p => [p.id, p]));
  const { summaries } = await summarizeEvents(events, itemById, {
    apiKey: 'k',
    fetchImpl: async () => '{"summary":"央行下调存款准备金率0.5个百分点","latestProgress":"明日生效"}',
    log: () => {},
  });
  assert.strictEqual(summaries.get('e1').summary, '央行下调存款准备金率0.5个百分点');
  assert.strictEqual(summaries.get('e1').latestProgress, '明日生效');
  assert.ok(!summaries.has('e2'), '无成员事件不生成');

  console.log('events-llm tests passed');
})().catch(error => { console.error(error); process.exit(1); });
