'use strict';

// 事件匹配原语（scripts/core.js）单测
// 这套原语同时被 analysis.js 的事件聚类和 history.js 的事件归并使用，
// 所以这里锁死的是"跨月的行情快讯不会被并成一个事件"这个修复本身。

const assert = require('assert');
const {
  ANCHOR_FLOOR,
  EVENT_WINDOW_HOURS,
  bigramTokenSet,
  eventDateBucket,
  eventSimilarity,
  hoursBetween,
  isMarketTickTitle,
  isNonEventTitle,
  isRoundupTitle,
  jaccardSimilarity,
  primarySubject,
  sharedTopicCount,
  withinEventWindow,
} = require('../scripts/core');

// === bigram / Jaccard ===
assert.strictEqual(bigramTokenSet('').size, 0);
assert.strictEqual(bigramTokenSet(null).size, 0);
assert.strictEqual(bigramTokenSet('央行').size, 1);
assert.deepStrictEqual([...bigramTokenSet('央行降准')], ['央行', '行降', '降准']);
assert.strictEqual(jaccardSimilarity('央行宣布降准', '央行宣布降准'), 1);
assert.strictEqual(jaccardSimilarity('央行宣布降准', '美联储加息预期升温'), 0);
assert.strictEqual(jaccardSimilarity('', '央行'), 0);
// 共用动词（"宣布"）本身不构成同一事件，只能贡献一个 bigram。
assert.strictEqual(jaccardSimilarity('央行宣布降准', '美联储宣布加息'), 1 / 10);

// 关键回归：相似度不能因为一方被另一方包含就虚高。
{
  const short = '中国平安发布回购公告';
  const long = '中国平安发布回购公告 拟注销股份';
  const a = bigramTokenSet(short);
  const b = bigramTokenSet(long);
  let intersection = 0;
  a.forEach(token => { if (b.has(token)) intersection += 1; });
  const containment = intersection / Math.min(a.size, b.size);
  const jaccard = jaccardSimilarity(short, long);
  assert.strictEqual(jaccard, intersection / (a.size + b.size - intersection), 'Jaccard 分母必须是并集');
  assert.ok(containment >= jaccard, '包含度必然不小于 Jaccard');
  assert.ok(jaccard < containment, '本例中两者应当真的不同，否则回归没被覆盖');
  assert.ok(jaccard < 0.9, `Jaccard=${jaccard}，不该因为短标题被包含就接近 1.0`);
}

// === 主体提取 ===
assert.strictEqual(primarySubject('中国人民银行发布公告'), '中国人民银行', '必须取最长匹配，不能退成"中国银行"');
assert.strictEqual(primarySubject('中英人寿2026年分红实现率公布'), '中英人寿');
assert.strictEqual(primarySubject('美联储宣布维持利率不变'), '美联储');
assert.strictEqual(primarySubject('某某科技公司发布2026年半年报'), '某某科技公司');
assert.strictEqual(primarySubject('这是一段特别长而且没有任何机构名的标题'), '');
assert.strictEqual(primarySubject(''), '');
assert.strictEqual(primarySubject(null), '');

// === 主题词重合 ===
assert.strictEqual(sharedTopicCount('保险 利率 监管', '利率 监管'), 2);
assert.strictEqual(sharedTopicCount('央行降息', '私募备案'), 0);

// === 事件相似度 ===
// 同一主体 + 至少一个共同主题 → 提到锚点下限（"同一主体的持续报道"）。
{
  const anchored = eventSimilarity('央行宣布降息 保险', '央行宣布降准 保险');
  assert.ok(anchored >= ANCHOR_FLOOR, `锚定后应不低于 ${ANCHOR_FLOOR}，实际 ${anchored}`);
  assert.strictEqual(anchored, ANCHOR_FLOOR, '该例 Jaccard 更低，应恰好取锚点下限');
}
// 主体不同 → 只认 Jaccard。
{
  const notAnchored = eventSimilarity('央行宣布降息', '美联储宣布加息');
  assert.ok(notAnchored < ANCHOR_FLOOR);
}
// 主体相同但没有共同主题 → 不锚定（避免"中国平安回购"和"中国平安半年报"仅因同名公司就并组）。
{
  const sameSubjectNoTopic = eventSimilarity('中国平安发布回购公告', '中国平安发布半年报');
  assert.strictEqual(sharedTopicCount('中国平安发布回购公告', '中国平安发布半年报'), 0);
  assert.ok(sameSubjectNoTopic < 0.62, `应为纯 Jaccard，实际 ${sameSubjectNoTopic}`);
}
// 明确记录当前边界：主体相同且共享粗主题时，即使事情不同也会被判为同一事件。
// 这是刻意的取舍（上限 5 条成员 + 72 小时时间窗共同兜底），改动时请同步改这里。
{
  const coarse = eventSimilarity('中国平安发布回购公告 保险', '中国平安发布2026年半年报 保险');
  assert.strictEqual(coarse, ANCHOR_FLOOR);
}
assert.strictEqual(eventSimilarity('央行宣布降息', '央行宣布降息'), 1);

// === 非事件类标题 ===
assert.strictEqual(isMarketTickTitle('截至收盘，沪指涨0.5%'), true);
assert.strictEqual(isMarketTickTitle('恒指午间休盘小幅走低'), true);
assert.strictEqual(isMarketTickTitle('龙虎榜丨机构净买入'), true);
assert.strictEqual(isMarketTickTitle('央行宣布降息'), false);
assert.strictEqual(isRoundupTitle('晚间公告汇总'), true);
assert.strictEqual(isRoundupTitle('一周要闻回顾'), true);
assert.strictEqual(isRoundupTitle('央行宣布降息'), false);
assert.strictEqual(isNonEventTitle('截至收盘，沪指涨0.5%'), true);
assert.strictEqual(isNonEventTitle('早报：今日看点'), true);
assert.strictEqual(isNonEventTitle('央行宣布降息'), false);
assert.strictEqual(isNonEventTitle(null), false);
assert.strictEqual(isNonEventTitle(''), false);

// === 时间窗 ===
const base = '2026-09-30T10:00:00.000Z';
assert.strictEqual(hoursBetween(base, '2026-09-30T12:00:00.000Z'), 2);
assert.strictEqual(hoursBetween('2026-09-30T12:00:00.000Z', base), 2, '间隔应为绝对值');
assert.strictEqual(hoursBetween(base, null), null);
assert.strictEqual(hoursBetween(base, 'not-a-date'), null);

assert.strictEqual(withinEventWindow(base, '2026-09-30T12:00:00.000Z'), true);
assert.strictEqual(withinEventWindow(base, '2026-09-30T10:00:00.000Z'), true);
assert.strictEqual(withinEventWindow(base, '2026-10-05T10:00:00.000Z'), false);
// 缺时间的条目不阻断聚类，交给相似度把关。
assert.strictEqual(withinEventWindow(base, null), true);
assert.strictEqual(withinEventWindow(null, null), true);
// 可覆写窗口长度。
assert.strictEqual(withinEventWindow(base, '2026-10-05T10:00:00.000Z', 72), false);
assert.strictEqual(withinEventWindow(base, '2026-10-05T10:00:00.000Z', 120), true);
assert.strictEqual(withinEventWindow(base, '2026-10-01T10:00:00.000Z', 72), true);
assert.strictEqual(EVENT_WINDOW_HOURS, 72);

// === 日期桶 ===
assert.strictEqual(eventDateBucket('2026-09-30T23:00:00.000Z'), '2026-09-30');
assert.strictEqual(eventDateBucket('2026-09-30T23:00:00.000Z'), eventDateBucket('2026-09-30T01:00:00.000Z'));
assert.notStrictEqual(eventDateBucket('2026-09-30T10:00:00.000Z'), eventDateBucket('2026-10-01T10:00:00.000Z'));
assert.strictEqual(eventDateBucket(null), 'unknown');
assert.strictEqual(eventDateBucket('not-a-date'), 'unknown');
assert.strictEqual(eventDateBucket(''), 'unknown');

console.log('events tests passed');
