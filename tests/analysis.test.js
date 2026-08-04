'use strict';

const assert = require('assert');
const {
  applyBusinessCuration,
  buildContentTags,
  buildScenarioScores,
  businessCurationStats,
  canonicalizeUrl,
  clusterEvents,
  normalizeAIAnalysis,
  stableItemId,
} = require('../scripts/analysis');

assert.strictEqual(
  canonicalizeUrl('HTTPS://Example.com/a?utm_source=x&b=2&a=1#top'),
  'https://example.com/a?a=1&b=2',
);
assert.strictEqual(canonicalizeUrl('javascript:alert(1)'), '');
assert.strictEqual(
  stableItemId({ sourceUrl: 'https://example.com/a?utm_source=x' }),
  stableItemId({ sourceUrl: 'https://example.com/a' }),
);
assert.match(stableItemId({ sourceUrl: 'https://example.com/a' }), /^news_[a-f0-9]{12}$/);

const insuranceScores = buildScenarioScores({
  title: '保险公司分红险产品与偿付能力新规',
  summary: '寿险和年金产品调整',
  sourceTier: 'S0',
  scoreBreakdown: { impact: 20, recency: 15 },
});
assert.ok(insuranceScores.insurance.score >= 80);
assert.ok(insuranceScores.marketEducation.score < insuranceScores.insurance.score);
assert.ok(buildScenarioScores({ title: '某科技公司发布手机', summary: '' }).insurance.score <= 20);
assert.deepStrictEqual(
  buildContentTags({ category: 'regulatory', sourceTier: 'S0', evidenceType: 'official_notice' }),
  ['官方监管', '权威源'],
);

const curatedItems = [];
for (let index = 0; index < 30; index += 1) {
  curatedItems.push({
    id: `news_c${String(index).padStart(11, '0')}`,
    title: `测试资讯 ${index}`,
    category: index % 5 === 0 ? 'research' : 'industry',
    sourceTier: index % 7 === 0 ? 'S0' : 'S2',
    evidenceType: index % 6 === 0 ? 'news_flash' : 'financial_media',
    score: 90 - index,
    scenarioScores: {
      insurance: { score: index < 8 ? 80 - index : 20, reasons: [] },
      privateFundSales: { score: index >= 8 && index < 18 ? 75 - index : 25, reasons: [] },
      marketEducation: { score: 60, reasons: [] },
    },
  });
}
applyBusinessCuration(curatedItems, 12);
const curatedStats = businessCurationStats(curatedItems);
assert.strictEqual(Object.values(curatedStats.scenes).reduce((sum, count) => sum + count, 0), curatedItems.length);
assert.strictEqual(curatedStats.featured, 12);
assert.ok(curatedStats.scenes.insurance >= 4);
assert.ok(curatedStats.scenes.privateFundSales >= 6);
assert.ok(curatedItems.every(item => ['insurance', 'privateFundSales', 'marketEducation'].includes(item.primaryScene)));
assert.ok(curatedItems.every(item => Array.isArray(item.contentTags) && typeof item.selectedForFeatured === 'boolean'));

const items = [
  { id: 'news_a00000000001', title: '央行发布降息政策通知', summary: '利率政策调整', category: 'regulatory', sourceTier: 'S0', confidence: 'high', score: 92, publishedAt: '2026-07-30T08:00:00Z' },
  { id: 'news_a00000000002', title: '央行降息政策影响债券市场', summary: '利率政策影响', category: 'regulatory', sourceTier: 'S2', confidence: 'medium', score: 83, publishedAt: '2026-07-30T09:00:00Z' },
  { id: 'news_a00000000003', title: '手机厂商推出新品', summary: '消费电子', category: 'industry', sourceTier: 'S2', confidence: 'medium', score: 30, publishedAt: '2026-07-30T10:00:00Z' },
];
const clusters = clusterEvents(items);
assert.ok(clusters.length >= 1);
assert.strictEqual(clusters[0].mainItemId, 'news_a00000000001');
assert.ok(clusters[0].evidenceItemIds.includes('news_a00000000002'));

const fallback = {
  dailySummary: { highlights: [{ text: '规则摘要', evidenceItemIds: ['news_a00000000001'] }] },
  eventChain: { summary: '规则', chains: [] },
  industryImpact: { quadrants: {} },
  weeklyTrends: { summary: '规则', trends: [] },
  insurancePlanner: { summary: '规则', talkingPoints: [] },
  peOperations: { summary: '规则', talkingPoints: [] },
  marketOutlook: { summary: '规则', outlooks: [] },
};
const normalized = normalizeAIAnalysis({
  dailySummary: { highlights: [{ text: '模型摘要', evidenceItemIds: ['bad', 'news_a00000000001'] }] },
  eventChain: { summary: '模型', chains: [{ title: '政策传导', nodes: ['政策', '市场'], causalLink: '待验证', evidenceItemIds: ['news_a00000000001', 'bad'] }] },
  industryImpact: { quadrants: { insurance: { level: 'invalid', items: [{ title: '影响', impact: '说明', suggestion: '建议', evidenceItemIds: ['news_a00000000002'] }] } } },
  weeklyTrends: { trends: [{ topic: '利率', direction: '错误', evidence: '两条资讯', evidenceItemIds: ['news_a00000000001'] }] },
}, items, fallback, 'llm');
assert.strictEqual(normalized.schemaVersion, '2.0');
assert.strictEqual(normalized.generatedBy, 'llm');
assert.deepStrictEqual(normalized.dailySummary.highlights[0].evidenceItemIds, ['news_a00000000001']);
assert.strictEqual(normalized.industryImpact.quadrants.insurance.level, 'none');
assert.strictEqual(normalized.weeklyTrends.trends[0].direction, '平稳');
assert.ok(normalized.eventClusters.length >= 1);

const customClusters = [{ eventId: 'event_stable', mainItemId: 'news_a00000000001', relatedItemIds: ['news_a00000000002'], evidenceItemIds: ['news_a00000000001', 'news_a00000000002'] }];
const customClusterAnalysis = normalizeAIAnalysis({}, items, fallback, 'rules', customClusters);
assert.strictEqual(customClusterAnalysis.eventClusters[0].eventId, 'event_stable');

const noEvidence = normalizeAIAnalysis({
  dailySummary: { highlights: [{ text: '无来源结论', evidenceItemIds: ['invalid'] }] },
  eventChain: { summary: '无来源', chains: [{ title: '无来源', causalLink: '无来源', evidenceItemIds: [] }] },
}, items, fallback, 'llm');
assert.deepStrictEqual(noEvidence.dailySummary.highlights, []);
assert.deepStrictEqual(noEvidence.eventChain.chains, []);

const partialParseFailure = normalizeAIAnalysis({
  dailySummary: { highlights: [] },
  eventChain: { summary: '生成失败', chains: [] },
  industryImpact: { quadrants: {} },
  weeklyTrends: { summary: '生成失败', trends: [] },
  insurancePlanner: { summary: '模型保险摘要', talkingPoints: [] },
}, items, fallback, 'llm');
assert.strictEqual(partialParseFailure.eventChain.summary, '规则');
assert.strictEqual(partialParseFailure.weeklyTrends.summary, '规则');
assert.strictEqual(partialParseFailure.insurancePlanner.summary, '模型保险摘要');
assert.strictEqual(partialParseFailure.generatedBy, 'llm');

const cachedFailure = normalizeAIAnalysis({
  generatedBy: 'cached',
  sourceGeneratedBy: 'llm',
  weeklyTrends: { summary: '生成失败', trends: [] },
}, items, fallback, 'llm');
assert.strictEqual(cachedFailure.weeklyTrends.summary, '规则');

console.log('analysis tests passed');
