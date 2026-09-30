'use strict';

// === 知乎搜索数据源 ===
// 用途：给保险栏目补充"从业者视角"内容——产品实测、避坑经验、展业方法、客户沟通。
// 这类内容媒体源基本不产，但对保险规划师是刚需，所以单独作为一个数据源接入。
//
// 接口：GET https://developer.zhihu.com/api/v1/content/zhihu_search
//   鉴权：Authorization: Bearer <Access Secret> + X-Request-Timestamp（秒级 Unix 时间戳）
//   参数：Query（必填）、Count（默认 10，上限 10）
//   限制：不支持翻页（HasMore 固定 false），所以覆盖面只能靠多查询词堆
//
// 两个必须处理的坑：
//   1) Count 上限只有 10 且不能翻页；
//   2) EditTime 是"最后编辑时间"不是首次发布时间。热心作者会持续更新测评文，
//      所以它是可用的新鲜度代理，但绝不能当成发布时刻来表述。

const fs = require('fs');
const path = require('path');
const { canonicalizeUrl } = require('./analysis');
const { beijingDateString, normalizePublishedAt, normalizeTitle } = require('./core');
const { buildSourceHealth, sanitizeError } = require('./health');

const ENDPOINT = 'https://developer.zhihu.com/api/v1/content/zhihu_search';
const API_HOST = 'developer.zhihu.com';
const SEARCH_COUNT = 10; // 接口上限，写死避免误传
const REQUEST_TIMEOUT_MS = 20000;
const USER_AGENT = 'finhot-web/2.5 (+https://github.com/zycyyyya/finhot-web)';
const DATA_DIR = path.resolve(__dirname, '..', 'data');
const USAGE_FILE = path.join(DATA_DIR, 'zhihu-usage.json');

/** 单次运行最多发多少个查询。4 次定时 × 40 = 160 次/天，远低于 5000 的配额。 */
const DEFAULT_MAX_QUERIES_PER_RUN = 40;
/** 每日调用硬上限：即使有人手动反复触发也不会打穿配额。 */
const DEFAULT_DAILY_BUDGET = 800;
/** 单次运行最多收录多少条，避免知乎内容挤掉 RSS 主源。 */
const MAX_ITEMS_PER_RUN = 40;
/** 摘录长度。知乎 ContentText 中位约 1000 字，这里截断到可展示且够打分的长度。 */
const EXCERPT_MAX_LENGTH = 240;

/** 保险向查询词表。设计原则：覆盖定价口径、产品类型、展业合规、理赔避坑、公司行业、养老财富。 */
const ZHIHU_QUERIES = [
  // 定价与利率口径
  '保险 预定利率', '预定利率研究值', '分红险 演示利率', '分红险 分红实现率', '利差损 保险',
  // 产品类型
  '增额终身寿险', '年金险 收益', '快返年金', '养老年金 怎么选', '个人养老金 保险',
  '分红型年金险', '万能险 结算利率', '投连险 风险', '重疾险 怎么选', '百万医疗险 对比',
  '中高端医疗险', '惠民保 值得买吗', '定期寿险 保额',
  // 展业与合规
  '保险 双录 要求', '保险 返佣 合规', '保险 销售误导', '保险 客户异议 处理',
  '保险 健康告知 技巧', '保险经纪人 展业', '保险 需求分析 流程', '保单检视 怎么做',
  // 理赔与避坑
  '保险 拒赔 原因', '保险 理赔 纠纷', '保险 退保 损失', '保险 避坑',
  '保险 销售话术 套路', '保险 增额寿 停售',
  // 公司与行业
  '保险公司 偿付能力', '险企 投资收益率', '保险公司 增资', '香港保险 分红',
  // 养老与财富
  '个人养老金 抵税', '商业养老年金', '保险 资产配置',
];

function positiveInt(value, fallback) {
  const number = Number(value);
  return Number.isInteger(number) && number > 0 ? number : fallback;
}

/** 用量文件可覆写：单测用临时路径，避免污染仓库里的真实计数。 */
function resolveUsageFile(override) {
  return override || process.env.FINHOT_ZHIHU_USAGE_FILE || USAGE_FILE;
}

function loadUsage(file) {
  try {
    const parsed = JSON.parse(fs.readFileSync(resolveUsageFile(file), 'utf8'));
    if (parsed && typeof parsed === 'object') return parsed;
  } catch {
    // 首次运行或文件损坏，从零开始计数
  }
  return { date: '', calls: 0, today: {} };
}

function saveUsage(usage, file) {
  const target = resolveUsageFile(file);
  try {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, `${JSON.stringify(usage, null, 2)}\n`, 'utf8');
  } catch {
    // 计数写失败不影响主流程；配额保护退化为"每次运行上限"
  }
}

/** 按北京时间自然日累计调用次数，返回可写的用量对象。 */
function usageForToday(usage, today) {
  const current = usage && usage.date === today ? usage : { date: today, calls: 0, today: {} };
  return {
    date: today,
    calls: Number.isFinite(current.calls) ? current.calls : 0,
    today: current.today && typeof current.today === 'object' ? { ...current.today } : {},
  };
}

/** 去掉知乎标题的站点后缀。 */
function cleanTitle(raw) {
  return String(raw || '')
    .replace(/<[^>]*>/g, '')
    .replace(/\s*-\s*知乎\s*$/u, '')
    .replace(/\s*_\s*知乎\s*$/u, '')
    .replace(/\s*知乎\s*$/u, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** 清洗摘录：去标签、去高亮残留、压空白。 */
function cleanExcerpt(raw) {
  return String(raw || '')
    .replace(/<em>|<\/em>/gi, '')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, EXCERPT_MAX_LENGTH);
}

function finiteNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

/** 把知乎返回条目映射成站点内部结构；不合格返回 null。 */
function toItem(raw, nowIso) {
  if (!raw || typeof raw !== 'object') return null;
  const title = cleanTitle(raw.Title);
  const sourceUrl = canonicalizeUrl(raw.Url);
  if (!title || title.length < 4 || !sourceUrl) return null;
  const excerpt = cleanExcerpt(raw.ContentText);
  if (containsBadText(title) || containsBadText(excerpt)) return null;
  const editSeconds = finiteNumber(raw.EditTime);
  const publishedAt = editSeconds > 0 ? normalizePublishedAt(new Date(editSeconds * 1000).toISOString()) : null;
  return {
    title,
    sourceUrl,
    sourceUrlRaw: typeof raw.Url === 'string' ? raw.Url : '',
    publishedAt,
    fetchedAt: nowIso,
    // 知乎给的是最后编辑时间，不是首次发布。用 'edited' 标注，避免被当成发布时刻表述。
    timeConfidence: publishedAt ? 'edited' : 'unknown',
    summary: excerpt,
    // 以下为知乎特有元数据，供展示与审计使用；不参与来源身份加分。
    zhihuContentId: String(raw.ContentID || ''),
    zhihuContentType: String(raw.ContentType || ''),
    zhihuAuthority: String(raw.AuthorityLevel || ''),
    authorName: String(raw.AuthorName || '').slice(0, 40),
    heat: {
      voteUp: finiteNumber(raw.VoteUpCount),
      comment: finiteNumber(raw.CommentCount),
      rankingScore: finiteNumber(raw.RankingScore),
    },
  };
}

function containsBadText(value) {
  return typeof value === 'string' && (value.includes('\uFFFD') || /�{2,}/.test(value));
}

async function requestQuery(query, token, options) {
  const url = new URL(ENDPOINT);
  url.searchParams.set('Query', query);
  url.searchParams.set('Count', String(SEARCH_COUNT));
  const fetchImpl = (options && options.fetchImpl) || globalThis.fetch;
  const response = await fetchImpl(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Request-Timestamp': String(Math.floor(Date.now() / 1000)),
      'Content-Type': 'application/json',
      'User-Agent': USER_AGENT,
      Accept: 'application/json',
    },
    signal: typeof AbortSignal !== 'undefined' && AbortSignal.timeout
      ? AbortSignal.timeout(REQUEST_TIMEOUT_MS)
      : undefined,
  });
  const body = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}${body && body.Message ? ` ${body.Message}` : ''}`);
  }
  if (!body || body.Code !== 0) {
    throw new Error(`api Code=${body && body.Code} ${body && body.Message ? body.Message : ''}`.trim());
  }
  const data = body.Data;
  return data && Array.isArray(data.Items) ? data.Items : [];
}

/**
 * 拉取知乎保险向内容。
 * 调用预算由两层保护：单次运行上限 + 每日累计上限（写盘可审计）。
 */
async function fetchZhihu(source, options) {
  const settings = options || {};
  const now = settings.now instanceof Date ? settings.now : new Date();
  const nowIso = now.toISOString();
  const startedAt = Date.now();
  const src = source || {};
  const token = settings.token || process.env.ZHIHU_API_TOKEN || '';
  const maxQueriesPerRun = positiveInt(
    settings.maxQueriesPerRun ?? process.env.FINHOT_ZHIHU_MAX_QUERIES,
    DEFAULT_MAX_QUERIES_PER_RUN,
  );
  const dailyBudget = positiveInt(
    settings.dailyBudget ?? process.env.FINHOT_ZHIHU_DAILY_BUDGET,
    DEFAULT_DAILY_BUDGET,
  );
  const queries = Array.isArray(settings.queries) && settings.queries.length > 0 ? settings.queries : ZHIHU_QUERIES;

  const emptyHealth = extra => buildSourceHealth(src, {
    items: [],
    success: false,
    usable: false,
    stale: false,
    durationMs: Date.now() - startedAt,
    errorSummary: extra,
    attempts: [],
  });

  // 没有 token 就直说，不静默降级。这不影响发布门：来源覆盖率阈值是 0.30。
  if (!token) {
    console.error('[zhihu] ZHIHU_API_TOKEN 未配置，跳过该数据源');
    return { items: [], health: emptyHealth('ZHIHU_API_TOKEN not configured'), usage: null };
  }

  const today = beijingDateString(now);
  const usageFile = settings.usageFile || process.env.FINHOT_ZHIHU_USAGE_FILE;
  const usage = usageForToday(loadUsage(usageFile), today);
  const remainingBudget = Math.max(0, dailyBudget - usage.calls);
  const plannedQueries = Math.min(queries.length, maxQueriesPerRun, remainingBudget);

  const collected = [];
  const seenUrls = new Set();
  const seenTitles = new Set();
  const attempts = [];
  let successCount = 0;
  let errorCount = 0;
  let rawItemCount = 0;
  let lastError = '';
  let budgetStopped = plannedQueries < Math.min(queries.length, maxQueriesPerRun);

  for (const query of queries.slice(0, plannedQueries)) {
    const attemptStartedAt = Date.now();
    try {
      const rawItems = await requestQuery(query, token, settings);
      usage.calls += 1;
      usage.today[query] = (usage.today[query] || 0) + rawItems.length;
      successCount += 1;
      rawItemCount += rawItems.length;
      let accepted = 0;
      for (const raw of rawItems) {
        const item = toItem(raw, nowIso);
        if (!item) continue;
        if (seenUrls.has(item.sourceUrl)) continue;
        const titleKey = normalizeTitle(item.title);
        if (titleKey && seenTitles.has(titleKey)) continue;
        seenUrls.add(item.sourceUrl);
        if (titleKey) seenTitles.add(titleKey);
        collected.push(item);
        accepted += 1;
      }
      attempts.push({
        endpoint: API_HOST,
        success: true,
        stale: false,
        durationMs: Date.now() - attemptStartedAt,
        itemCount: accepted,
      });
      // 轻量节流，避免短时间打满接口。
      await new Promise(resolve => setTimeout(resolve, 120));
    } catch (error) {
      usage.calls += 1;
      errorCount += 1;
      lastError = sanitizeError(error);
      attempts.push({
        endpoint: API_HOST,
        success: false,
        stale: false,
        durationMs: Date.now() - attemptStartedAt,
        itemCount: 0,
        errorSummary: `${query}: ${lastError}`,
      });
      console.error(`[zhihu] 查询失败 "${query}": ${lastError}`);
    }
  }

  saveUsage(usage, usageFile);

  // 取最新的一批，避免首次接入把大量历史内容推进前端。
  const items = collected
    .slice()
    .sort((a, b) => {
      const at = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
      const bt = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
      return bt - at;
    })
    .slice(0, MAX_ITEMS_PER_RUN);

  const usable = items.length > 0;
  const errorSummary = successCount === 0
    ? (lastError || 'all queries failed')
    : (errorCount > 0 ? `${errorCount}/${plannedQueries} 查询失败: ${lastError}` : '');

  console.error(`[zhihu] ${successCount}/${plannedQueries} 查询成功，原始 ${rawItemCount} 条 → 去重后 ${collected.length} 条 → 本次收录 ${items.length} 条；今日累计调用 ${usage.calls}/${dailyBudget}`);

  return {
    items,
    usage: {
      date: usage.date,
      calls: usage.calls,
      dailyBudget,
      queriesThisRun: plannedQueries,
      budgetStopped,
      rawItemCount,
      dedupedItemCount: collected.length,
    },
    health: buildSourceHealth(src, {
      items,
      success: successCount > 0,
      usable,
      stale: false,
      durationMs: Date.now() - startedAt,
      latestPublishedAt: items.length > 0 ? items[0].publishedAt : null,
      usedEndpoint: API_HOST,
      rawItemCount,
      acceptedItemCount: items.length,
      errorSummary,
      attempts,
    }),
  };
}

module.exports = {
  DEFAULT_DAILY_BUDGET,
  DEFAULT_MAX_QUERIES_PER_RUN,
  ENDPOINT,
  MAX_ITEMS_PER_RUN,
  USAGE_FILE,
  ZHIHU_QUERIES,
  cleanExcerpt,
  cleanTitle,
  fetchZhihu,
  loadUsage,
  requestQuery,
  saveUsage,
  toItem,
  usageForToday,
};
