'use strict';

const assert = require('assert');
const {
  beijingDateString,
  containsCorruptedText,
  deduplicateSimilarTitles,
  isSafeHttpUrl,
  normalizePublishedAt,
  normalizeTitle,
  qualityErrors,
  sortAndLimit,
  titleSimilarity,
  titlesLikelyDuplicate,
} = require('../scripts/core');

assert.strictEqual(isSafeHttpUrl('https://example.com/a'), true);
assert.strictEqual(isSafeHttpUrl('http://example.com'), true);
assert.strictEqual(isSafeHttpUrl('javascript:alert(1)'), false);
assert.strictEqual(isSafeHttpUrl('data:text/html,test'), false);
assert.strictEqual(isSafeHttpUrl('file:///tmp/a'), false);

assert.strictEqual(normalizePublishedAt('2026-07-30T08:00:00Z'), '2026-07-30T08:00:00.000Z');
assert.strictEqual(normalizePublishedAt('not-a-date'), null);
assert.strictEqual(normalizePublishedAt(null), null);

assert.strictEqual(containsCorruptedText('盘前��读'), true);
assert.strictEqual(containsCorruptedText('正常文本'), false);
assert.strictEqual(normalizeTitle('央行通知：科技金融（全文）'), '央行通知科技金融全文');
assert.notStrictEqual(
  normalizeTitle('中国人民银行发布科技金融通知甲'),
  normalizeTitle('中国人民银行发布科技金融通知乙'),
);
assert.ok(titleSimilarity(
  '苹果在印度年度销售额首次突破100亿美元',
  '苹果在印度的年销售额首次突破100亿美元。',
) >= 0.9);
assert.strictEqual(
  titlesLikelyDuplicate(
    '苹果在印度年度销售额首次突破100亿美元',
    '苹果在印度的年销售额首次突破100亿美元。',
  ),
  true,
);
assert.strictEqual(
  titlesLikelyDuplicate(
    '商务部：上半年服务进出口同比增长8.3%',
    '商务部：上半年服务进出口同比增长8.5%',
  ),
  false,
);
assert.strictEqual(
  titlesLikelyDuplicate(
    'A股三大指数集体上涨，创业板领涨',
    'A股三大指数集体下跌，创业板领跌',
  ),
  false,
);
assert.strictEqual(
  titlesLikelyDuplicate(
    '苹果在印度销售额首次突破100亿美元',
    '苹果在印度销售额首次突破100亿美元，计划继续扩建零售门店',
  ),
  false,
);

const deduplicated = deduplicateSimilarTitles([
  {
    title: '苹果在印度年度销售额首次突破100亿美元',
    sourceName: '36氪',
    sourceTier: 'S3',
    evidenceType: 'news_flash',
    score: 51,
    summary: '苹果在印度年度销售额首次突破100亿美元。（新浪财经）',
    publishedAt: '2026-08-04T07:26:43Z',
  },
  {
    title: '苹果在印度的年销售额首次突破100亿美元。',
    sourceName: '华尔街见闻',
    sourceTier: 'S2',
    evidenceType: 'financial_media',
    score: 57,
    summary: '苹果在印度的年销售额首次突破100亿美元。',
    publishedAt: '2026-08-04T07:25:05Z',
  },
]);
assert.strictEqual(deduplicated.length, 1);
assert.strictEqual(deduplicated[0].sourceName, '华尔街见闻');

const sorted = sortAndLimit([
  { title: 'old', publishedAt: '2026-07-28T00:00:00Z' },
  { title: 'unknown', publishedAt: null },
  { title: 'new', publishedAt: '2026-07-30T00:00:00Z' },
  { title: 'middle', publishedAt: '2026-07-29T00:00:00Z' },
], 2);
assert.deepStrictEqual(sorted.map(item => item.title), ['new', 'middle']);

assert.strictEqual(beijingDateString(new Date('2026-07-30T16:30:00Z')), '2026-07-31');

const validItem = {
  id: 'news_a1b2c3d4e5f6',
  title: '中国人民银行发布金融数据通知',
  sourceUrl: 'https://example.com/news/1',
  category: 'regulatory',
  publishedAt: '2026-07-30T08:00:00Z',
  summary: '正常摘要',
  scenarioScores: {
    insurance: { score: 10, reasons: ['弱相关'] },
    marketEducation: { score: 80, reasons: ['核心主题'] },
    privateFundSales: { score: 60, reasons: ['关联主题'] },
  },
  primaryScene: 'marketEducation',
  selectedForFeatured: true,
  contentTags: ['官方监管'],
};
assert.deepStrictEqual(qualityErrors([validItem]), []);
assert.ok(qualityErrors([{ ...validItem, sourceUrl: 'javascript:alert(1)' }]).some(e => e.includes('sourceUrl')));
assert.ok(qualityErrors([{ ...validItem, title: '盘前��读' }]).some(e => e.includes('corrupted')));
assert.ok(qualityErrors([validItem, { ...validItem }]).some(e => e.includes('duplicate URL')));
assert.ok(qualityErrors([{ ...validItem, id: '1' }]).some(e => e.includes('stable ID')));
assert.ok(qualityErrors([validItem, { ...validItem, sourceUrl: 'https://example.com/news/2' }]).some(e => e.includes('duplicate stable ID')));
assert.ok(qualityErrors([
  validItem,
  {
    ...validItem,
    id: 'news_b1c2d3e4f5a6',
    title: '中国人民银行发布的金融数据通知。',
    sourceUrl: 'https://example.com/news/2',
  },
]).some(e => e.includes('near-duplicate title')));
assert.ok(qualityErrors([{ ...validItem, scenarioScores: null }]).some(e => e.includes('scenarioScores')));
assert.ok(qualityErrors([{ ...validItem, primaryScene: 'regulatory' }]).some(e => e.includes('primaryScene')));
assert.ok(qualityErrors([{ ...validItem, selectedForFeatured: 'yes' }]).some(e => e.includes('selectedForFeatured')));
assert.ok(qualityErrors([{ ...validItem, contentTags: null }]).some(e => e.includes('contentTags')));

console.log('core tests passed');
