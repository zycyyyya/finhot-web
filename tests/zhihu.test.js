'use strict';

// 知乎数据源测试。全部使用本地替身，不访问外部接口、不写入仓库文件。

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const {
  MAX_ITEMS_PER_RUN,
  cleanExcerpt,
  cleanTitle,
  fetchZhihu,
  loadUsage,
  toItem,
} = require('../scripts/zhihu');

const SOURCE = {
  transport: 'zhihu',
  sourceName: '知乎',
  category: 'insights',
  tier: 'S3',
  tierLabel: '从业者观点',
  evidenceType: 'ugc_opinion',
  maxAgeDays: 30,
};

// ── 标题与摘录清洗 ────────────────────────────────────────────────────────────

assert.strictEqual(cleanTitle('分红险的预定利率是什么意思? - 知乎'), '分红险的预定利率是什么意思?');
assert.strictEqual(cleanTitle('保险避坑指南_知乎'), '保险避坑指南');
assert.strictEqual(cleanTitle('<em>高亮</em>标题  知乎'), '高亮标题');
assert.strictEqual(cleanTitle(''), '');
assert.strictEqual(cleanTitle(null), '');

const excerpt = cleanExcerpt('<em>分红</em>实现率 100%&nbsp;以上 &amp; <b>达标</b>');
assert.strictEqual(excerpt, '分红实现率 100% 以上 & 达标');
assert.strictEqual(cleanExcerpt('x'.repeat(500)).length, 240);

// ── 条目映射 ─────────────────────────────────────────────────────────────────

const nowIso = '2026-09-30T12:00:00.000Z';
const editSeconds = Math.floor(Date.parse('2026-09-25T00:00:00.000Z') / 1000);
const mapped = toItem({
  Title: '中邮人寿2026分红实现率分析 - 知乎',
  ContentType: 'Article',
  ContentID: '12345',
  ContentText: '<em>中邮人寿</em>2026 年分红实现率为 3.2%',
  Url: 'https://zhuanlan.zhihu.com/p/123?utm_medium=openapi_platform&utm_source=abc#frag',
  VoteUpCount: 12,
  CommentCount: 3,
  AuthorName: '某规划师',
  AuthorityLevel: '4',
  RankingScore: 0.9,
  EditTime: editSeconds,
}, nowIso);

assert.strictEqual(mapped.title, '中邮人寿2026分红实现率分析');
// utm 与 hash 必须清掉，但原始链接要留档，尊重平台的溯源参数。
assert.strictEqual(mapped.sourceUrl, 'https://zhuanlan.zhihu.com/p/123');
assert.ok(mapped.sourceUrlRaw.includes('utm_medium=openapi_platform'));
// EditTime 是"最后编辑时间"，不是首次发布，必须显式标注，避免被当成发布时刻表述。
assert.strictEqual(mapped.timeConfidence, 'edited');
assert.strictEqual(mapped.publishedAt, '2026-09-25T00:00:00.000Z');
assert.strictEqual(mapped.zhihuAuthority, '4');
assert.strictEqual(mapped.zhihuContentId, '12345');
assert.strictEqual(mapped.heat.voteUp, 12);
assert.strictEqual(mapped.summary, '中邮人寿2026 年分红实现率为 3.2%');

assert.strictEqual(toItem({ Title: '', Url: 'https://zhuanlan.zhihu.com/p/1' }, nowIso), null);
assert.strictEqual(toItem({ Title: '有效标题', Url: 'javascript:alert(1)' }, nowIso), null);
assert.strictEqual(toItem(null, nowIso), null);
// 缺少 EditTime 时保留条目，但时间标注为 unknown，且不拿它算时效分。
const noTime = toItem({ Title: '无编辑时间的回答', Url: 'https://www.zhihu.com/question/1' }, nowIso);
assert.strictEqual(noTime.publishedAt, null);
assert.strictEqual(noTime.timeConfidence, 'unknown');

// ── 替身接口 ─────────────────────────────────────────────────────────────────

const USAGE_FILE = path.join(os.tmpdir(), `finhot-zhihu-test-${process.pid}.json`);
function resetUsage() {
  try { fs.unlinkSync(USAGE_FILE); } catch { /* 不存在即可 */ }
}
function makeItem(n, query) {
  return {
    Title: `${query} 的回答 ${n} - 知乎`,
    ContentType: 'Answer',
    ContentID: String(n),
    ContentText: `正文 ${n}`,
    Url: `https://www.zhihu.com/question/${n}`,
    VoteUpCount: n,
    CommentCount: 0,
    AuthorName: '作者',
    AuthorityLevel: '3',
    EditTime: editSeconds,
  };
}
function stubFetch(handler) {
  const calls = [];
  const impl = async (url, options) => {
    const query = url.searchParams.get('Query');
    calls.push({ query, count: url.searchParams.get('Count'), headers: options.headers });
    return handler(query, calls.length);
  };
  impl.calls = calls;
  return impl;
}
function okResponse(items) {
  return { ok: true, status: 200, json: async () => ({ Code: 0, Message: 'success', Data: { HasMore: false, Items: items } }) };
}

(async () => {
  // 未配置 token：直接跳过，不算成功，也不写用量文件。
  resetUsage();
  const noToken = await fetchZhihu(SOURCE, { token: '', usageFile: USAGE_FILE, fetchImpl: stubFetch(() => okResponse([])) });
  assert.strictEqual(noToken.items.length, 0);
  assert.strictEqual(noToken.health.success, false);
  assert.strictEqual(noToken.health.usable, false);
  assert.strictEqual(noToken.usage, null);
  assert.match(noToken.health.errorSummary, /ZHIHU_API_TOKEN/);
  assert.strictEqual(fs.existsSync(USAGE_FILE), false, '未配置 token 时不应写用量文件');

  // 正常抓取：Count 固定为接口上限 10，鉴权头齐全，跨查询去重。
  resetUsage();
  const queries = ['保险 预定利率', '分红险 分红实现率', '保险 避坑'];
  const fetchImpl = stubFetch(query => okResponse([
    makeItem(`${query}-1`, query),
    makeItem(`${query}-2`, query),
    makeItem('dup', query), // 同一 URL 跨查询重复
  ]));
  const result = await fetchZhihu(SOURCE, { queries, token: 'tok-abc', usageFile: USAGE_FILE, fetchImpl });
  assert.strictEqual(fetchImpl.calls.length, queries.length);
  fetchImpl.calls.forEach(call => {
    assert.strictEqual(call.count, '10', 'Count 必须是接口上限 10');
    assert.match(call.headers.Authorization, /^Bearer tok-abc$/);
    assert.ok(Number(call.headers['X-Request-Timestamp']) > 0, 'X-Request-Timestamp 必填');
  });
  // 3 查询 × 3 条 = 9 条，其中 dup 只留 1 条 → 7 条
  assert.strictEqual(result.items.length, 7);
  assert.strictEqual(result.health.success, true);
  assert.strictEqual(result.health.usable, true);
  assert.strictEqual(result.usage.queriesThisRun, queries.length);
  assert.strictEqual(result.usage.calls, queries.length);
  assert.strictEqual(result.items[0].sourceName, undefined, 'sourceName 由 fetch.js 统一挂载');

  // 用量按北京时间自然日累计并落盘。
  const persisted = loadUsage(USAGE_FILE);
  assert.strictEqual(persisted.calls, queries.length);

  // 同日第二次运行：在已有计数上继续累加，而不是从 0 重来。
  resetUsage();
  await fetchZhihu(SOURCE, { queries: [queries[0]], token: 'tok-abc', usageFile: USAGE_FILE, fetchImpl: stubFetch(() => okResponse([])) });
  await fetchZhihu(SOURCE, { queries: [queries[0]], token: 'tok-abc', usageFile: USAGE_FILE, fetchImpl: stubFetch(() => okResponse([])) });
  assert.strictEqual(loadUsage(USAGE_FILE).calls, 2);

  // 单次运行上限：超过上限的查询不再发出。
  resetUsage();
  const capped = stubFetch(() => okResponse([]));
  const many = Array.from({ length: 10 }, (_, i) => `查询${i}`);
  await fetchZhihu(SOURCE, { queries: many, maxQueriesPerRun: 4, token: 'tok-abc', usageFile: USAGE_FILE, fetchImpl: capped });
  assert.strictEqual(capped.calls.length, 4, '应只发出 maxQueriesPerRun 次请求');

  // 每日配额：账本已满时一次请求都不发。
  resetUsage();
  fs.writeFileSync(USAGE_FILE, JSON.stringify({ date: new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Shanghai' }), calls: 999, today: {} }), 'utf8');
  const blocked = stubFetch(() => okResponse([]));
  const budgetResult = await fetchZhihu(SOURCE, { queries: many, dailyBudget: 10, token: 'tok-abc', usageFile: USAGE_FILE, fetchImpl: blocked });
  assert.strictEqual(blocked.calls.length, 0, '配额用尽时必须停止请求');
  assert.strictEqual(budgetResult.usage.budgetStopped, true);
  assert.strictEqual(budgetResult.items.length, 0);

  // 接口错误：记录到 attempts，不抛异常，也不泄露 token。
  resetUsage();
  const failing = await fetchZhihu(SOURCE, {
    queries: ['保险 预定利率'],
    token: 'super-secret-token',
    usageFile: USAGE_FILE,
    fetchImpl: stubFetch(() => ({ ok: true, status: 200, json: async () => ({ Code: 20001, Message: 'auth failed' }) })),
  });
  assert.strictEqual(failing.items.length, 0);
  assert.strictEqual(failing.health.success, false);
  assert.match(failing.health.errorSummary, /20001/);
  assert.ok(!failing.health.errorSummary.includes('super-secret-token'), '错误摘要不得包含凭据');
  assert.strictEqual(failing.health.attempts.length, 1);
  assert.strictEqual(failing.health.attempts[0].success, false);

  // 部分失败：成功的查询仍然可用，错误摘要带上失败比例。
  resetUsage();
  const partial = await fetchZhihu(SOURCE, {
    queries: ['保险 预定利率', '保险 避坑'],
    token: 'tok-abc',
    usageFile: USAGE_FILE,
    fetchImpl: stubFetch(query => (query === '保险 避坑'
      ? { ok: false, status: 500, json: async () => ({ Code: 90001, Message: 'internal error' }) }
      : okResponse([makeItem('1', query)]))),
  });
  assert.strictEqual(partial.items.length, 1);
  assert.strictEqual(partial.health.success, true);
  assert.match(partial.health.errorSummary, /1\/2 查询失败/);

  // 单次运行收录上限：即使查询很多，也不会把知乎内容一次灌满前端。
  resetUsage();
  const flood = await fetchZhihu(SOURCE, {
    queries: Array.from({ length: 12 }, (_, i) => `查询${i}`),
    maxQueriesPerRun: 12,
    token: 'tok-abc',
    usageFile: USAGE_FILE,
    fetchImpl: stubFetch(query => okResponse(Array.from({ length: 9 }, (_, i) => makeItem(`${query}-${i}`, query)))),
  });
  assert.strictEqual(flood.items.length, MAX_ITEMS_PER_RUN);

  // 收录结果按编辑时间倒序，最新的排前面。
  resetUsage();
  const ordered = await fetchZhihu(SOURCE, {
    queries: ['保险 预定利率'],
    token: 'tok-abc',
    usageFile: USAGE_FILE,
    fetchImpl: stubFetch(() => okResponse([
      { ...makeItem('old', '保险 预定利率'), EditTime: editSeconds - 86400 * 10 },
      { ...makeItem('new', '保险 预定利率'), EditTime: editSeconds },
    ])),
  });
  assert.strictEqual(ordered.items[0].title, '保险 预定利率 的回答 new');

  resetUsage();
  console.log('zhihu tests passed');
})().catch(error => {
  resetUsage();
  console.error(error);
  process.exit(1);
});
