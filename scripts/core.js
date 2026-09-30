'use strict';

const VALID_CATEGORIES = new Set(['regulatory', 'products', 'industry', 'research', 'insights']);
const MAX_RESPONSE_BYTES = 2 * 1024 * 1024;
const MAX_REDIRECTS = 5;

function isSafeHttpUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function normalizePublishedAt(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toISOString();
}

function containsCorruptedText(value) {
  if (typeof value !== 'string') return false;
  return value.includes('\uFFFD') || /�{1,}|���/.test(value);
}

function normalizeTitle(value) {
  if (typeof value !== 'string') return '';
  return Array.from(value.normalize('NFKC').toLowerCase())
    .filter(char => /[\p{L}\p{N}]/u.test(char))
    .join('');
}

/**
 * 无序对键：用于"预计算的模型 pairwise 判定表"（events-llm.js → clusterEvents）。
 * 与顺序无关，与 eventSimilarity 使用同一套 normalizeTitle，保证判定表能命中。
 */
function eventPairKey(titleA, titleB) {
  const parts = [normalizeTitle(titleA || ''), normalizeTitle(titleB || '')].sort();
  return `${parts[0]}||${parts[1]}`;
}

function titleBigrams(value) {
  const normalized = normalizeTitle(value);
  const counts = new Map();
  for (let index = 0; index < normalized.length - 1; index += 1) {
    const token = normalized.slice(index, index + 2);
    counts.set(token, (counts.get(token) || 0) + 1);
  }
  return { normalized, counts };
}

function numericSignature(value) {
  return String(value || '')
    .normalize('NFKC')
    .match(/\d+(?:\.\d+)?%?/g) || [];
}

function hasDirectionalConflict(left, right) {
  const pairs = [
    [['上涨', '上升', '增长', '增加', '走高', '新高'], ['下跌', '下降', '减少', '走低', '新低']],
    [['盈利', '扭亏', '增盈'], ['亏损', '转亏', '减盈']],
    [['放宽', '上调', '加息'], ['收紧', '下调', '降息']],
  ];
  return pairs.some(([positive, negative]) => (
    positive.some(word => left.includes(word)) && negative.some(word => right.includes(word))
  ) || (
    negative.some(word => left.includes(word)) && positive.some(word => right.includes(word))
  ));
}

function bigramSimilarity(left, right) {
  const a = titleBigrams(left);
  const b = titleBigrams(right);
  if (!a.normalized || !b.normalized) return 0;
  if (a.normalized === b.normalized) return 1;
  if (a.normalized.length < 8 || b.normalized.length < 8) return 0;

  let overlap = 0;
  for (const [token, count] of a.counts) {
    overlap += Math.min(count, b.counts.get(token) || 0);
  }
  const total = [...a.counts.values()].reduce((sum, count) => sum + count, 0)
    + [...b.counts.values()].reduce((sum, count) => sum + count, 0);
  return total > 0 ? (2 * overlap) / total : 0;
}

function editSimilarity(left, right) {
  const a = normalizeTitle(left);
  const b = normalizeTitle(right);
  if (!a || !b) return 0;
  if (a === b) return 1;
  let previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let row = 1; row <= a.length; row += 1) {
    const current = [row];
    for (let column = 1; column <= b.length; column += 1) {
      const substitution = previous[column - 1] + (a[row - 1] === b[column - 1] ? 0 : 1);
      current[column] = Math.min(previous[column] + 1, current[column - 1] + 1, substitution);
    }
    previous = current;
  }
  return 1 - previous[b.length] / Math.max(a.length, b.length);
}

function titleSimilarity(left, right) {
  return Math.max(bigramSimilarity(left, right), editSimilarity(left, right));
}

// === 事件匹配原语（shared by analysis.js / history.js） ===
// 背景：旧实现用 `交集 / min(|A|,|B|)`（包含度）当相似度，短标题被长标题包含即接近 1.0；
// 又用「共同主题词 >= 2 就强制 0.60」当提权，而同一栏目的任意两篇稿件几乎必然共享
// 保险/监管这类粗主题，于是不同日期、不同事件的稿件被并成同一个事件。
// 现在改为：真正的 Jaccard + 严格锚点（必须共享具体主体，而不只是粗主题）+ 时间窗。

/** 同一事件允许的最大时间跨度（小时）。跨越它的两条资讯不可能是"同一次发生"。 */
const EVENT_WINDOW_HOURS = 72;

/** 主体词表：监管机构、金融机构、险企、海外市场与主要指数。用于事件主体的严格锚定。 */
const EVENT_SUBJECTS = [
  // 监管与自律组织
  '中国人民银行', '央行', '证监会', '金监总局', '金融监管总局', '银保监', '外管局', '发改委', '财政部',
  '深交所', '上交所', '北交所', '港交所', '基金业协会', '保险业协会', '交易商协会', '金融监管',
  // 险企
  '中国平安', '平安人寿', '中国人寿', '国寿', '中国太保', '太保', '中国人保', '人保', '新华保险',
  '泰康', '太平人寿', '友邦', '中意人寿', '中英人寿', '中邮人寿', '陆家嘴国泰', '复星保德信',
  '华泰人寿', '大家保险', '阳光保险', '中华联合', '大地保险', '众安', '弘康', '信泰', '复星联合',
  // 证券与银行
  '中信证券', '中金公司', '华泰证券', '天风证券', '招商银行', '兰州银行', '工商银行', '建设银行',
  '农业银行', '中国银行', '泸州老窖', '高测股份', '欣旺达', '万邦医药', '近岸蛋白',
  // 海外央行与市场
  '美联储', '欧洲央行', '欧央行', '日本央行', '英格兰银行',
  '以色列', '瑞典', '西班牙', '沙特', '德国', '法国', '英国', '美国', '俄罗斯', '印度', '韩国', '日本',
  // 市场与指数
  'A股', '港股', '美股', '恒指', '恒生科技指数', '沪深300', '中证500', '中证1000',
  '纳斯达克', '标普500', '道琼斯', '北向资金', '南向资金',
];

/** 主题词：只作为辅助信号，不再单独提权（旧实现就是在这里出的事）。 */
const EVENT_TOPIC_MARKERS = [
  '保险', '私募', '基金', '证券', '银行', '央行', '利率', '降息', '降准', '加息', '债券', 'ETF',
  '监管', '处罚', '政策', '房地产', '人工智能', '养老', '量化', '汇率', 'A股', '港股', '美股',
];

/**
 * 日频行情播报：同一模板每天刷新，只有数字不同。
 * 它们是错误聚类的最大来源（"截至收盘…上涨0.02%"这类），直接不参与事件归组。
 */
const MARKET_TICK_PATTERNS = [
  /截至收盘/, /午间休盘/, /盘前/, /尾盘/, /盘中/, /开盘涨跌/, /涨跌幅/,
  /连板股追踪/, /龙虎榜丨/, /两市双双/, /沪深两市/, /题材股/, /个股涨停/, /指数上涨/, /指数下跌/, /指数收/,
];

/** 时间性盘点与汇总：本身就是多事件打包，没有单一焦点。 */
const ROUNDUP_PATTERNS = [
  /晚间公告/, /早报/, /周报/, /日报/, /一周回顾/, /一周要闻/, /要闻回顾/, /今日看点/, /每日盘点/,
];

function matchesAny(patterns, value) {
  const text = typeof value === 'string' ? value : '';
  if (!text) return false;
  return patterns.some(pattern => pattern.test(text));
}

function isMarketTickTitle(value) {
  return matchesAny(MARKET_TICK_PATTERNS, value);
}

function isRoundupTitle(value) {
  return matchesAny(ROUNDUP_PATTERNS, value);
}

/** 非事件类标题：行情播报 + 时间性盘点。用于事件聚类排除。 */
function isNonEventTitle(value) {
  return isMarketTickTitle(value) || isRoundupTitle(value);
}

/** 标题的 bigram 集合（保留数字，因为数字是事件身份的一部分）。 */
function bigramTokenSet(value) {
  const normalized = normalizeTitle(value);
  const tokens = new Set();
  for (let index = 0; index < normalized.length - 1; index += 1) tokens.add(normalized.slice(index, index + 2));
  return tokens;
}

/** 真正的 Jaccard：交集 / 并集。不会因为一方较短就虚高。 */
function jaccardSimilarity(left, right) {
  const a = left instanceof Set ? left : bigramTokenSet(left);
  const b = right instanceof Set ? right : bigramTokenSet(right);
  if (!a.size || !b.size) return 0;
  let intersection = 0;
  a.forEach(token => { if (b.has(token)) intersection += 1; });
  if (intersection === 0) return 0;
  return intersection / (a.size + b.size - intersection);
}

/** 提取标题主体：优先命中词表（取最长匹配），否则取动作词/标点之前的首个短语。 */
function primarySubject(value) {
  const title = typeof value === 'string' ? value.trim() : '';
  if (!title) return '';
  const matched = EVENT_SUBJECTS.filter(subject => title.includes(subject)).sort((a, b) => b.length - a.length);
  if (matched.length > 0) return matched[0];
  // 回退：主体通常出现在标题最前面，止于首个标点、动作词或时间标记
  const head = title.split(/[：:，,。；;、（）()\[\]【】|｜/\\-]/)[0] || '';
  const cut = head.split(/(发布|宣布|推出|获批|核准|增资|减持|回购|净利|营收|业绩|上半年|下半年|一季度|前三季度|全年|盘中|涨停|跌停)/)[0] || '';
  const candidate = cut.replace(/[0-9０-９%％.,，、]+$/g, '').trim();
  return candidate.length >= 2 && candidate.length <= 12 ? candidate : '';
}

/** 两条标题共享的主题词数量。 */
function sharedTopicCount(left, right) {
  const a = String(left || '');
  const b = String(right || '');
  return EVENT_TOPIC_MARKERS.filter(marker => a.includes(marker) && b.includes(marker)).length;
}

/**
 * 事件相似度（0–1）。
 * 1) 共享具体主体 + 至少一个共同主题 → 视为同一主体的持续报道，提到锚点下限；
 * 2) 否则用 Jaccard，并要求达到调用方给定的门槛才算同一事件。
 */
const ANCHOR_FLOOR = 0.62;

function eventSimilarity(left, right) {
  const jaccard = jaccardSimilarity(left, right);
  const subjectA = primarySubject(left);
  const subjectB = primarySubject(right);
  if (subjectA && subjectA === subjectB && sharedTopicCount(left, right) >= 1) {
    return Math.max(jaccard, ANCHOR_FLOOR);
  }
  return jaccard;
}

/** 两条时间戳的小时间隔；任一方缺失或非法时返回 null。 */
function hoursBetween(leftIso, rightIso) {
  if (!leftIso || !rightIso) return null;
  const left = new Date(leftIso).getTime();
  const right = new Date(rightIso).getTime();
  if (!Number.isFinite(left) || !Number.isFinite(right)) return null;
  return Math.abs(left - right) / 3600000;
}

/** 是否落在同一事件允许的时间窗内。任一方时间缺失时不阻断（交由相似度把关）。 */
function withinEventWindow(leftIso, rightIso, hours) {
  const gap = hoursBetween(leftIso, rightIso);
  if (gap === null) return true;
  const limit = Number.isFinite(hours) && hours > 0 ? hours : EVENT_WINDOW_HOURS;
  return gap <= limit;
}

/** 事件身份里带上的日期桶，避免"同标题不同日期"撞成同一个 eventId。 */
function eventDateBucket(iso) {
  if (!iso) return 'unknown';
  const timestamp = new Date(iso).getTime();
  if (!Number.isFinite(timestamp)) return 'unknown';
  return new Date(timestamp).toISOString().slice(0, 10);
}

function dedupTitleSignature(value) {
  return normalizeTitle(value)
    .replaceAll('年度', '年')
    .replaceAll('的', '');
}

function titlesLikelyDuplicate(left, right) {
  const a = normalizeTitle(left);
  const b = normalizeTitle(right);
  if (a.length < 8 || b.length < 8) return false;
  if (a === b) return true;

  const lengthRatio = Math.min(a.length, b.length) / Math.max(a.length, b.length);
  if (lengthRatio < 0.88) return false;
  if (numericSignature(left).join('|') !== numericSignature(right).join('|')) return false;
  if (hasDirectionalConflict(a, b)) return false;
  if (dedupTitleSignature(left) === dedupTitleSignature(right)) return true;
  return editSimilarity(left, right) >= 0.94 && bigramSimilarity(left, right) >= 0.86;
}

function itemPreferenceScore(item) {
  const tierRank = { S0: 4, S1: 3, S2: 2, S3: 1 };
  const evidenceRank = {
    official_notice: 4,
    structured_data: 3,
    financial_media: 2,
    news_flash: 1,
  };
  const tier = item && (item.sourceTier || item.tier);
  const summaryLength = String(item && item.summary || '').trim().length;
  const score = Number(item && item.score) || 0;
  return (tierRank[tier] || 0) * 100000
    + (evidenceRank[item && item.evidenceType] || 0) * 10000
    + score * 100
    + Math.min(summaryLength, 500);
}

function preferredDuplicate(left, right) {
  const scoreDifference = itemPreferenceScore(right) - itemPreferenceScore(left);
  if (scoreDifference !== 0) return scoreDifference > 0 ? right : left;
  return publishedTime(right) > publishedTime(left) ? right : left;
}

function deduplicateSimilarTitles(items) {
  const result = [];
  for (const item of Array.isArray(items) ? items : []) {
    const duplicateIndex = result.findIndex(existing => titlesLikelyDuplicate(existing.title, item && item.title));
    if (duplicateIndex === -1) {
      result.push(item);
      continue;
    }
    result[duplicateIndex] = preferredDuplicate(result[duplicateIndex], item);
  }
  return result;
}

function publishedTime(item) {
  const value = item && item.publishedAt;
  if (!value) return 0;
  const timestamp = new Date(value).getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function sortAndLimit(items, maxItems) {
  return items
    .slice()
    .sort((a, b) => publishedTime(b) - publishedTime(a))
    .slice(0, maxItems);
}

/**
 * 按发布时间截断，但保证每个来源至少留 `minPerSource` 条。
 *
 * 为什么需要：`maxItems`（前端 MAX_ITEMS = 150）是展示上限，纯按发布时间截断时，
 * 时效窗口长的来源会被窗口短的新闻源整体挤出——实测知乎 40 条内容只有 3 条留在前端，
 * 等于这个数据源白接。这不是给某个来源加分：分数、门槛、排序全部不变，
 * 只保证"产出过有效内容的来源一定被看到几条"。
 *
 * 留底名额会被压缩到 `floor(maxItems / 来源数)`，保证留底总数不超上限——
 * 否则"每个来源留几条"会被最后那次截断随机吃掉，保证就落空了。
 */
function limitWithSourceReserve(items, maxItems, minPerSource) {
  const source = Array.isArray(items) ? items : [];
  const ranked = source.slice().sort((a, b) => publishedTime(b) - publishedTime(a));
  const limit = Number.isInteger(maxItems) && maxItems > 0 ? maxItems : ranked.length;
  if (limit >= ranked.length) return ranked;
  const reserve = Number.isInteger(minPerSource) && minPerSource > 0 ? minPerSource : 0;
  if (reserve === 0) return ranked.slice(0, limit);

  const groups = new Map();
  source.forEach(item => {
    const key = item && typeof item.sourceName === 'string' ? item.sourceName : '';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  // 名额预算：留底总数不能超过上限本身，否则"每个来源留几条"会被最后的截断吃掉。
  const perSourceReserve = Math.min(reserve, Math.floor(limit / groups.size));
  if (perSourceReserve === 0) return ranked.slice(0, limit);
  const token = item => (item && item.id) || (item && item.sourceUrl) || '';
  const kept = new Set();
  // 每个来源的留底名额给该来源**最新**的几条，而不是数组里最靠前的几条。
  [...groups.keys()].sort().forEach(key => {
    groups.get(key)
      .slice()
      .sort((a, b) => publishedTime(b) - publishedTime(a))
      .slice(0, perSourceReserve)
      .forEach(item => kept.add(token(item)));
  });
  for (const item of ranked) {
    if (kept.size >= limit) break;
    kept.add(token(item));
  }
  return ranked.filter(item => kept.has(token(item))).slice(0, limit);
}

function qualityErrors(items) {
  const errors = [];
  const seenUrls = new Set();
  const seenIds = new Set();
  const seenTitles = [];

  items.forEach((item, index) => {
    const prefix = `items[${index}]`;
    if (!item || typeof item !== 'object') {
      errors.push(`${prefix}: must be an object`);
      return;
    }
    if (typeof item.title !== 'string' || item.title.trim().length < 4) {
      errors.push(`${prefix}.title: missing or too short`);
    }
    if (typeof item.id !== 'string' || !/^news_[a-f0-9]{12}$/.test(item.id)) {
      errors.push(`${prefix}.id: invalid stable ID`);
    } else if (seenIds.has(item.id)) {
      errors.push(`${prefix}.id: duplicate stable ID`);
    } else {
      seenIds.add(item.id);
    }
    if (!isSafeHttpUrl(item.sourceUrl)) {
      errors.push(`${prefix}.sourceUrl: unsafe or invalid URL`);
    } else if (seenUrls.has(item.sourceUrl)) {
      errors.push(`${prefix}.sourceUrl: duplicate URL`);
    } else {
      seenUrls.add(item.sourceUrl);
    }
    if (!VALID_CATEGORIES.has(item.category)) {
      errors.push(`${prefix}.category: invalid category`);
    }
    if (item.publishedAt !== null && item.publishedAt !== undefined && !normalizePublishedAt(item.publishedAt)) {
      errors.push(`${prefix}.publishedAt: invalid date`);
    }
    if (containsCorruptedText(item.title) || containsCorruptedText(item.summary || '')) {
      errors.push(`${prefix}: corrupted replacement characters detected`);
    }
    if (seenTitles.some(title => titlesLikelyDuplicate(title, item.title))) {
      errors.push(`${prefix}.title: near-duplicate title`);
    } else {
      seenTitles.push(item.title);
    }
    const scenarioKeys = ['insurance', 'marketEducation', 'privateFundSales'];
    if (!item.scenarioScores || scenarioKeys.some(key => {
      const value = item.scenarioScores[key];
      return !value || !Number.isFinite(value.score) || value.score < 0 || value.score > 100 || !Array.isArray(value.reasons);
    })) {
      errors.push(`${prefix}.scenarioScores: invalid or incomplete`);
    }
    if (!scenarioKeys.includes(item.primaryScene)) {
      errors.push(`${prefix}.primaryScene: invalid or missing`);
    }
    if (typeof item.selectedForFeatured !== 'boolean') {
      errors.push(`${prefix}.selectedForFeatured: must be boolean`);
    }
    if (!Array.isArray(item.contentTags) || item.contentTags.some(tag => typeof tag !== 'string')) {
      errors.push(`${prefix}.contentTags: must be a string array`);
    }
  });

  return errors;
}

function assertDataQuality(items) {
  if (!Array.isArray(items)) throw new Error('Output items must be an array');
  const errors = qualityErrors(items);
  if (errors.length > 0) {
    const preview = errors.slice(0, 10).join('; ');
    throw new Error(`Data quality gate failed (${errors.length}): ${preview}`);
  }
}

function beijingDateString(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date || new Date());
  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

module.exports = {
  ANCHOR_FLOOR,
  EVENT_SUBJECTS,
  EVENT_TOPIC_MARKERS,
  EVENT_WINDOW_HOURS,
  MAX_REDIRECTS,
  MAX_RESPONSE_BYTES,
  VALID_CATEGORIES,
  assertDataQuality,
  beijingDateString,
  bigramTokenSet,
  containsCorruptedText,
  deduplicateSimilarTitles,
  eventDateBucket,
  eventPairKey,
  eventSimilarity,
  hoursBetween,
  isMarketTickTitle,
  isNonEventTitle,
  isRoundupTitle,
  isSafeHttpUrl,
  jaccardSimilarity,
  limitWithSourceReserve,
  normalizePublishedAt,
  normalizeTitle,
  primarySubject,
  qualityErrors,
  sharedTopicCount,
  sortAndLimit,
  titleSimilarity,
  titlesLikelyDuplicate,
  withinEventWindow,
};
