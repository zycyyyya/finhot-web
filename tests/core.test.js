'use strict';

const assert = require('assert');
const {
  beijingDateString,
  containsCorruptedText,
  deduplicateSimilarTitles,
  isSafeHttpUrl,
  limitWithSourceReserve,
  normalizePublishedAt,
  repairTimezoneSkew,
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

// === normalizePublishedAt：时区无关性 ===
// 根因：国内源的时间串是不带时区的北京时间（如慧保天下 `2026-10-21 19:56`）。
// new Date() 对无时区串的解析依赖运行时 TZ：
//   TZ=UTC（CI runner）→ 19:56Z，比真实时间快 8 小时
//   TZ=Asia/Shanghai（本机）→ 11:56Z，正确
// 结果是同一条新闻两次采集时间戳差 8 小时 → 排序错乱、相对时间显示异常。
// 修复：显式按 +08:00 解释无时区串，输出必须与运行时 TZ 无关。
assert.strictEqual(
  normalizePublishedAt('2026-10-21 19:56'),
  '2026-10-21T11:56:00.000Z',
  '无时区串按北京时间解释（19:56 CST = 11:56 UTC）',
);
assert.strictEqual(
  normalizePublishedAt('2026-10-21 19:56:30'),
  '2026-10-21T11:56:30.000Z',
  '带秒的无时区串',
);
assert.strictEqual(
  normalizePublishedAt('2026-10-21T19:56'),
  '2026-10-21T11:56:00.000Z',
  'ISO 形式但无时区，同样按北京时间',
);
// 带时区标识的串必须原样按标准解析，不被 +08:00 规则干扰
assert.strictEqual(
  normalizePublishedAt('2026-10-21T19:56:00+08:00'),
  '2026-10-21T11:56:00.000Z',
  '带 +08:00 偏移的串按标准解析',
);
assert.strictEqual(
  normalizePublishedAt('2026-10-21T19:56:00Z'),
  '2026-10-21T19:56:00.000Z',
  '带 Z 的串不受影响',
);
// RFC822（RSS pubDate 常见格式）走标准解析
assert.strictEqual(
  normalizePublishedAt('Tue, 21 Oct 2026 04:53:25 +0000'),
  '2026-10-21T04:53:25.000Z',
  'RFC822 格式',
);

// === repairTimezoneSkew：修复 CI 误采的历史时间戳 ===
// 真实样本（线上 data.js）：URL 日期 20261020，存储值 2026-10-20T17:59Z
// （北京时间 17:59 被当UTC 存，多 8 小时），正确值应为 09:59Z
{
  const bad = {
    publishedAt: '2026-10-20T17:59:00.000Z',
    sourceUrl: 'http://www.huibaoxian.com.cn//htm/yc/20261020/6194.html',
  };
  const r = repairTimezoneSkew(bad);
  assert.strictEqual(r.timeFixed, true, '应识别为误采并修正');
  assert.strictEqual(r.publishedAt, '2026-10-20T09:59:00.000Z', '回退 8 小时');
}

// 正确的条目不能被误改（本地采集的 11:56Z 是对的）
{
  const good = {
    publishedAt: '2026-10-21T11:56:00.000Z',
    sourceUrl: 'http://www.huibaoxian.com.cn//htm/pc/20261021/6196.html',
  };
  const r = repairTimezoneSkew(good);
  assert.strictEqual(r.timeFixed, false, '正确时间戳不应被修改');
  assert.strictEqual(r.publishedAt, good.publishedAt);
}

// URL 里没有日期 → 不动
{
  const r = repairTimezoneSkew({ publishedAt: '2026-10-20T17:59:00.000Z', sourceUrl: 'https://example.com/news/1' });
  assert.strictEqual(r.timeFixed, false, '无 URL 日期时不动');
  assert.strictEqual(r.publishedAt, '2026-10-20T17:59:00.000Z');
}

// 修正后仍对不上 URL 日期 → 不动（宁可漏修不可错修）
{
  const r = repairTimezoneSkew({
    publishedAt: '2026-10-15T10:00:00.000Z',
    sourceUrl: 'http://www.huibaoxian.com.cn//htm/yc/20261020/6194.html',
  });
  assert.strictEqual(r.timeFixed, false, '对不上就不改');
  assert.strictEqual(r.publishedAt, '2026-10-15T10:00:00.000Z');
}

// 缺字段要安全
assert.strictEqual(repairTimezoneSkew(null).timeFixed, false);
assert.strictEqual(repairTimezoneSkew({}).timeFixed, false);
assert.strictEqual(repairTimezoneSkew({ publishedAt: 'bad-date' }).timeFixed, false);

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

// === limitWithSourceReserve：截断时给每个来源留底 ===
// 纯按时间截断会让时效窗口长的来源（知乎 30 天）被窗口短的新闻源整体挤出 150 条上限。
const reservePool = [];
for (let index = 0; index < 10; index += 1) {
  reservePool.push({
    id: `news_fresh_${index}`,
    sourceName: '快讯源',
    publishedAt: new Date(Date.UTC(2026, 6, 30, 12, 0, index)).toISOString(),
  });
}
for (let index = 0; index < 3; index += 1) {
  reservePool.push({
    id: `news_slow_${index}`,
    sourceName: '长窗口源',
    publishedAt: new Date(Date.UTC(2026, 6, 10, 0, 0, index)).toISOString(),
  });
}
const reserved = limitWithSourceReserve(reservePool, 4, 2);
assert.strictEqual(reserved.length, 4);
assert.strictEqual(reserved.filter(item => item.sourceName === '长窗口源').length, 2, '长窗口源必须有留底名额');
assert.strictEqual(reserved.filter(item => item.sourceName === '快讯源').length, 2, '剩余名额按时间补齐');
assert.deepStrictEqual(reserved.map(item => item.id), ['news_fresh_9', 'news_fresh_8', 'news_slow_2', 'news_slow_1']);
// 留底名额会被压缩到 floor(上限 / 来源数)，保证留底总数不超上限。
const tight = limitWithSourceReserve(reservePool, 3, 2);
assert.strictEqual(tight.length, 3);
assert.strictEqual(tight.filter(item => item.sourceName === '长窗口源').length, 1, '上限 3、2 个来源时每个来源最多留 1 条');
assert.strictEqual(tight.filter(item => item.sourceName === '快讯源').length, 2);
// 池子不超上限时原样返回（仍按时间排序）。
assert.deepStrictEqual(
  limitWithSourceReserve(reservePool, 100, 2).map(item => item.id),
  sortAndLimit(reservePool, 100).map(item => item.id),
);
// 留底为 0 时退化成 sortAndLimit。
assert.deepStrictEqual(
  limitWithSourceReserve(reservePool, 4, 0).map(item => item.id),
  sortAndLimit(reservePool, 4).map(item => item.id),
);

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
