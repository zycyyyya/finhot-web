'use strict';

const crypto = require('crypto');
const {
  eventSimilarity,
  isNonEventTitle,
  normalizeTitle,
  normalizePublishedAt,
  withinEventWindow,
} = require('./core');

/** 事件聚类的相似度门槛。Jaccard 天然比包含度低，所以数值与旧实现不同。 */
const EVENT_SAME_CATEGORY_THRESHOLD = 0.50;
const EVENT_CROSS_CATEGORY_THRESHOLD = 0.60;

/** 每栏在"今日精选"里的最低占比（1/6）与最高占比（1/3），用于防止整栏缺失。 */
const SCENE_FLOOR_MIN_RATIO = 1 / 6;
const SCENE_FLOOR_MAX_RATIO = 1 / 3;

/**
 * 补充类证据（个人创作）在精选里的占比上限，与栏目下限同为 1/6。
 *
 * 为什么需要：知乎这类 UGC 内容在"从业价值"评分里天然占优——相关性拉满（保险关键词密集）、
 * 时效也在窗口前段，而证据轴本来就只有 0~8 分（没有监管文号/机构名/数字），罚得不够抵消。
 * 实测 6 条知乎内容全进精选、4 条挤进前十。它只占全部候选的 4%，却拿走近 1/4 的精选位。
 * 这不是说内容不好，而是它作为"补充源"不该盖过监管原文与财经媒体。分数与门槛都不动。
 */
const SUPPLEMENTARY_EVIDENCE_TYPES = new Set(['ugc_opinion']);
const SUPPLEMENTARY_FEATURED_RATIO = SCENE_FLOOR_MIN_RATIO;

const TRACKING_PARAMS = new Set(['from', 'spm', 'ref', 'refer', 'source', 'share', 'sharefrom']);
const TIER_RANK = { S0: 4, S1: 3, S2: 2, S3: 1 };
const CONFIDENCE_RANK = { high: 3, medium: 2, low: 1 };
const LEVELS = new Set(['high', 'medium', 'low', 'none']);
const DIRECTIONS = new Set(['上升', '下降', '平稳']);

function canonicalizeUrl(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  try {
    const url = new URL(value.trim());
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return '';
    url.hash = '';
    url.hostname = url.hostname.toLowerCase();
    const kept = [];
    for (const [key, val] of url.searchParams.entries()) {
      const lower = key.toLowerCase();
      if (lower.startsWith('utm_') || TRACKING_PARAMS.has(lower)) continue;
      kept.push([key, val]);
    }
    kept.sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]));
    url.search = '';
    kept.forEach(([key, val]) => url.searchParams.append(key, val));
    return url.toString();
  } catch {
    return '';
  }
}

function stableItemId(item) {
  const canonical = canonicalizeUrl(item && item.sourceUrl);
  if (!canonical) return '';
  return `news_${crypto.createHash('sha256').update(canonical).digest('hex').slice(0, 12)}`;
}

function hasAny(text, keywords) {
  const lower = (text || '').toLowerCase();
  return keywords.some(keyword => lower.includes(keyword.toLowerCase()));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

const SCENARIOS = {
  insurance: {
    label: '保险运营',
    strong: ['保险', '险企', '寿险', '财险', '健康险', '重疾', '医疗险', '养老', '年金', '分红险', '精算', '偿付能力', '保费', '理赔'],
    medium: ['利率', '银行', '财富管理', '资产配置', '监管', '合规'],
  },
  marketEducation: {
    label: '二级市场投教',
    strong: ['A股', '港股', '美股', '股票', '指数', 'ETF', '债券', '利率', '央行', '货币政策', '估值', '盈利', '财报', '市场', '行情', '波动'],
    medium: ['基金', '证券', '宏观', 'GDP', 'CPI', 'PMI', '汇率', '流动性'],
  },
  privateFundSales: {
    label: '私募销售运营',
    strong: ['私募', '基金', '资管', '量化', '对冲', 'FOF', '净值', '回撤', '仓位', '策略', '募集', '备案', '托管', '合格投资者'],
    medium: ['证券', 'ETF', '债券', '市场', '行情', '波动', '配置', '合规', '监管'],
  },
};

function scoreScenario(item, config) {
  const text = `${item.title || ''} ${item.summary || ''}`;
  const strongHits = config.strong.filter(keyword => hasAny(text, [keyword])).length;
  const mediumHits = config.medium.filter(keyword => hasAny(text, [keyword])).length;
  // 场景分只反映"这条内容与这个栏目的话题贴合度"。旧实现在这里也加了来源等级分
  // （S0 +12 / S2 +8 / 其他 +4），等于让官方身份参与栏目归属判断，已移除。
  const evidence = item.scoreBreakdown && Number.isFinite(item.scoreBreakdown.evidence) ? item.scoreBreakdown.evidence : 6;
  const impact = item.scoreBreakdown && Number.isFinite(item.scoreBreakdown.impact) ? item.scoreBreakdown.impact : 8;
  const recency = item.scoreBreakdown && Number.isFinite(item.scoreBreakdown.recency) ? item.scoreBreakdown.recency : 0;
  let score = strongHits * 22 + mediumHits * 9 + Math.round(evidence * 0.6) + Math.round(impact * 0.7) + Math.round(recency * 0.4);
  if (strongHits === 0) score = Math.min(score, mediumHits > 0 ? 54 : 25);
  if (strongHits === 0 && mediumHits === 0) score = Math.min(score, 20);
  score = clamp(score, 0, 100);
  const reasons = [];
  if (strongHits > 0) reasons.push(`命中${config.label}核心主题 ${strongHits} 项`);
  if (mediumHits > 0) reasons.push(`命中关联主题 ${mediumHits} 项`);
  if (evidence >= 14) reasons.push('含可核对要素');
  else if (impact >= 16) reasons.push('业务影响较高');
  if (reasons.length === 0) reasons.push('与该场景关联度较弱');
  return { score, reasons: reasons.slice(0, 3) };
}

function buildScenarioScores(item) {
  return Object.fromEntries(Object.entries(SCENARIOS).map(([key, config]) => [key, scoreScenario(item, config)]));
}

const PRIMARY_SCENES = new Set(['insurance', 'privateFundSales', 'marketEducation']);
const CONTENT_TAG_LABELS = {
  regulatory: '官方监管',
  products: '产品动态',
  industry: '行业动态',
  research: '深度研究',
  insights: '观点',
};

function scenarioScore(item, scene) {
  const value = item && item.scenarioScores && item.scenarioScores[scene];
  return value && Number.isFinite(value.score) ? value.score : 0;
}

function authorityRank(item) {
  return TIER_RANK[item && (item.sourceTier || item.tier)] || 0;
}

function businessRank(item, scene) {
  return scenarioScore(item, scene) * 1000
    + (Number(item && item.score) || 0) * 10
    + authorityRank(item);
}

/** 全局排序：先看从业价值总分，再看适配该场景的分数，最后才用来源等级做同分兜底。 */
function globalRank(item) {
  return (Number(item && item.score) || 0) * 10000
    + scenarioScore(item, item && item.primaryScene) * 100
    + authorityRank(item);
}

// === 栏目归属 ===
// 旧实现是"配额分配制"：先给保险切 15~24 条，再给私募切 25~40 条，剩下的全算投教。
// 结果一条资讯属于哪个栏目取决于当时池子里有多少条，而不是它本身最贴近哪个场景，
// 同一篇稿子会随池子大小在不同栏目之间跳来跳去。
// 现在改为取最高场景分（argmax），栏目归属直接反映内容本身。
function assignPrimaryScenes(items) {
  const source = Array.isArray(items) ? items : [];
  const sceneOrder = Object.keys(SCENARIOS);
  source.forEach(item => {
    const ranked = sceneOrder
      .map(scene => ({ scene, score: scenarioScore(item, scene) }))
      .sort((a, b) => b.score - a.score || sceneOrder.indexOf(a.scene) - sceneOrder.indexOf(b.scene));
    item.primaryScene = ranked[0].score > 0 ? ranked[0].scene : 'marketEducation';
  });
  return source;
}

function buildContentTags(item) {
  const tags = [];
  const categoryLabel = CONTENT_TAG_LABELS[item && item.category];
  if (categoryLabel) tags.push(categoryLabel);
  if (item && item.evidenceType === 'news_flash') tags.push('快讯');
  if (item && (item.sourceTier === 'S0' || item.tier === 'S0')) tags.push('权威源');
  return [...new Set(tags)];
}

function selectFeaturedItems(items, limit) {
  const source = Array.isArray(items) ? items : [];
  const total = Math.min(Number.isInteger(limit) && limit > 0 ? limit : 24, source.length);
  const sceneOrder = Object.keys(SCENARIOS);
  // 入选门槛按来源等级分档（S0 50 / S1 55 / S2 60 / S3 70，见 scoring.js）。
  // 等级只决定"能不能进精选"，不再进分数。够格条目不足时退回全量，避免首页开天窗。
  const gated = source.filter(item => item.passesTierGate !== false);
  const pool = gated.length >= total ? gated : source;
  // 每栏下限只用于防止首页整栏缺失，不再是硬配额：候选不够时名额直接让给全局高分条目，
  // 而不是塞一条低分稿子把栏目填满。
  const floor = Math.max(1, Math.min(
    Math.floor(total * SCENE_FLOOR_MAX_RATIO),
    Math.ceil(total * SCENE_FLOOR_MIN_RATIO),
  ));
  const supplementaryQuota = Math.max(1, Math.floor(total * SUPPLEMENTARY_FEATURED_RATIO));
  const selected = new Set();
  const sceneUsed = Object.fromEntries(sceneOrder.map(scene => [scene, 0]));
  let supplementaryUsed = 0;
  const isSupplementary = item => SUPPLEMENTARY_EVIDENCE_TYPES.has(item && item.evidenceType);
  const selectWith = enforceQuota => item => {
    if (!item || selected.has(item.id)) return false;
    if (isSupplementary(item)) {
      if (enforceQuota && supplementaryUsed >= supplementaryQuota) return false;
      supplementaryUsed += 1;
    }
    selected.add(item.id);
    return true;
  };
  const trySelect = selectWith(true);

  sceneOrder.forEach(scene => {
    pool
      .filter(item => item.primaryScene === scene)
      .sort((a, b) => businessRank(b, scene) - businessRank(a, scene))
      .forEach(item => {
        // 被占比上限挡下的条目不该白占一个下限名额，直接顺延给同栏的下一条。
        if (sceneUsed[scene] >= floor || selected.size >= total) return;
        if (trySelect(item)) sceneUsed[scene] += 1;
      });
  });

  pool
    .slice()
    .sort((a, b) => globalRank(b) - globalRank(a))
    .forEach(item => {
      if (selected.size < total) trySelect(item);
    });

  // 兜底：池子里几乎全是补充类内容时，配额会让精选开天窗。此时宁可按分数补齐。
  if (selected.size < total) {
    const relaxed = selectWith(false);
    pool
      .slice()
      .sort((a, b) => globalRank(b) - globalRank(a))
      .forEach(item => {
        if (selected.size < total) relaxed(item);
      });
  }

  source.forEach(item => {
    item.selectedForFeatured = selected.has(item.id);
    item.contentTags = buildContentTags(item);
  });
  return source;
}

function applyBusinessCuration(items, featuredLimit) {
  const source = assignPrimaryScenes(items);
  selectFeaturedItems(source, featuredLimit);
  return source;
}

function businessCurationStats(items) {
  const source = Array.isArray(items) ? items : [];
  const scenes = { insurance: 0, privateFundSales: 0, marketEducation: 0 };
  source.forEach(item => {
    if (PRIMARY_SCENES.has(item.primaryScene)) scenes[item.primaryScene] += 1;
  });
  return {
    scenes,
    featured: source.filter(item => item.selectedForFeatured).length,
    // 入选门槛的通过情况：让"这批货到底够不够格"在数据里可见，而不是只看精选条数。
    gate: {
      passed: source.filter(item => item.passesTierGate === true).length,
      total: source.length,
      byTier: source.reduce((acc, item) => {
        const tier = item.sourceTier || item.tier || 'S3';
        acc[tier] = acc[tier] || { total: 0, passed: 0 };
        acc[tier].total += 1;
        if (item.passesTierGate === true) acc[tier].passed += 1;
        return acc;
      }, {}),
    },
  };
}

function preferredMain(a, b) {
  const tier = (TIER_RANK[a.sourceTier || a.tier] || 0) - (TIER_RANK[b.sourceTier || b.tier] || 0);
  if (tier !== 0) return tier > 0 ? a : b;
  const confidence = (CONFIDENCE_RANK[a.confidence] || 0) - (CONFIDENCE_RANK[b.confidence] || 0);
  if (confidence !== 0) return confidence > 0 ? a : b;
  if ((a.score || 0) !== (b.score || 0)) return (a.score || 0) > (b.score || 0) ? a : b;
  const at = normalizePublishedAt(a.publishedAt) || '';
  const bt = normalizePublishedAt(b.publishedAt) || '';
  return at >= bt ? a : b;
}

// === 事件聚类 ===
// 修掉两个线上问题：
//  1) 旧相似度用 `交集 / min(|A|,|B|)`（包含度），短标题被长标题包含就会接近 1.0；
//  2) 没有时间窗，且对日频行情播报（"截至收盘…"）和多事件盘点（"晚间公告…"）照常聚类，
//     于是整个月的行情快讯被并成同一个事件（实测曾有 6 个事件顶到证据上限并横跨两个月）。
// 现在：非事件类标题直接不参与；成员必须落在同一时间窗内；相似度用 Jaccard + 严格主体锚点。
function clusterEvents(items, options) {
  const settings = options || {};
  const maxClusters = Number.isInteger(settings.maxClusters) && settings.maxClusters > 0 ? settings.maxClusters : 10;
  const prepared = items
    .filter(item => item && item.id && item.title && !isNonEventTitle(item.title))
    .map(item => ({ item }));
  const visited = new Set();
  const clusters = [];
  for (let index = 0; index < prepared.length; index += 1) {
    if (visited.has(index)) continue;
    const seed = prepared[index].item;
    const members = [seed];
    visited.add(index);
    for (let next = index + 1; next < prepared.length; next += 1) {
      if (visited.has(next)) continue;
      const candidate = prepared[next].item;
      if (!withinEventWindow(seed.publishedAt, candidate.publishedAt)) continue;
      const sameCategory = seed.category === candidate.category;
      const threshold = sameCategory ? EVENT_SAME_CATEGORY_THRESHOLD : EVENT_CROSS_CATEGORY_THRESHOLD;
      if (eventSimilarity(seed.title, candidate.title) >= threshold) {
        visited.add(next);
        members.push(candidate);
      }
    }
    if (members.length < 2) continue;
    const main = members.reduce(preferredMain);
    const relatedItemIds = members.map(item => item.id).filter(id => id !== main.id);
    const eventId = `event_${crypto.createHash('sha256').update(members.map(item => item.id).sort().join('|')).digest('hex').slice(0, 10)}`;
    clusters.push({
      eventId,
      title: (main.title || '').slice(0, 60),
      mainItemId: main.id,
      relatedItemIds,
      evidenceItemIds: [main.id, ...relatedItemIds].slice(0, 5),
    });
  }
  return clusters.slice(0, maxClusters);
}

function text(value, maxLength, fallback) {
  if (typeof value !== 'string') return fallback || '';
  return value.trim().slice(0, maxLength);
}

function evidence(value, validIds, fallbackIds) {
  const ids = Array.isArray(value) ? value.filter(id => typeof id === 'string' && validIds.has(id)) : [];
  const unique = [...new Set(ids)].slice(0, 5);
  return unique.length > 0 ? unique : (fallbackIds || []).filter(id => validIds.has(id)).slice(0, 3);
}

function normalizeList(value, maxItems, normalizeItem, fallback) {
  if (!Array.isArray(value)) return fallback;
  return value.slice(0, maxItems).map(normalizeItem).filter(Boolean);
}

function normalizeAIAnalysis(result, items, fallback, generatedBy, eventClusters) {
  const source = result && typeof result === 'object' ? result : {};
  const safeFallback = fallback && typeof fallback === 'object' ? fallback : {};
  const validIds = new Set(items.map(item => item.id));
  const isFailureText = value => typeof value === 'string' && /^(生成失败|解析失败|调用失败|error|failed)$/i.test(value.trim());
  const section = (key, isUsable) => {
    const candidate = source[key] && typeof source[key] === 'object' ? source[key] : null;
    return candidate && isUsable(candidate) ? candidate : (safeFallback[key] || {});
  };
  const hasValidSummary = value => typeof value.summary === 'string' && value.summary.trim() && !isFailureText(value.summary);
  const daily = section('dailySummary', value => Array.isArray(value.highlights) && value.highlights.length > 0);
  const event = section('eventChain', value => hasValidSummary(value) || (Array.isArray(value.chains) && value.chains.length > 0));
  const impact = section('industryImpact', value => value.quadrants && typeof value.quadrants === 'object' && Object.keys(value.quadrants).length > 0);
  const trends = section('weeklyTrends', value => hasValidSummary(value) || (Array.isArray(value.trends) && value.trends.length > 0));
  const insurance = section('insurancePlanner', value => hasValidSummary(value) || (Array.isArray(value.talkingPoints) && value.talkingPoints.length > 0));
  const pe = section('peOperations', value => hasValidSummary(value) || (Array.isArray(value.talkingPoints) && value.talkingPoints.length > 0));
  const outlook = section('marketOutlook', value => hasValidSummary(value) || (Array.isArray(value.outlooks) && value.outlooks.length > 0));
  const normalizeEvidenceObject = (entry, keys) => {
    if (!entry || typeof entry !== 'object') return null;
    const output = {};
    keys.forEach(([key, max]) => { output[key] = text(entry[key], max); });
    output.evidenceItemIds = evidence(entry.evidenceItemIds, validIds, []);
    if (generatedBy === 'llm' && output.evidenceItemIds.length === 0) return null;
    return output;
  };
  const quadrants = {};
  ['insurance', 'pe', 'banking', 'trust'].forEach(key => {
    const raw = impact.quadrants && impact.quadrants[key] && typeof impact.quadrants[key] === 'object' ? impact.quadrants[key] : {};
    quadrants[key] = {
      level: LEVELS.has(raw.level) ? raw.level : 'none',
      summary: text(raw.summary, 160, '暂无相关内容'),
      items: normalizeList(raw.items, 3, entry => normalizeEvidenceObject(entry, [['title', 80], ['impact', 240], ['suggestion', 240]]), []),
    };
  });
  return {
    schemaVersion: '2.0',
    generatedBy: generatedBy === 'llm' ? 'llm' : 'rules',
    eventClusters: Array.isArray(eventClusters) ? eventClusters.slice(0, 10) : clusterEvents(items),
    dailySummary: {
      highlights: normalizeList(daily.highlights, 4, entry => {
        if (typeof entry === 'string') {
          if (generatedBy === 'llm') return null;
          return { text: text(entry, 240), evidenceItemIds: [] };
        }
        return normalizeEvidenceObject(entry, [['text', 240]]);
      }, []),
    },
    eventChain: {
      summary: text(event.summary, 200, '暂无事件关联分析'),
      chains: normalizeList(event.chains, 5, entry => normalizeEvidenceObject(entry, [['title', 80], ['causalLink', 240]]), []).map((entry, index) => ({
        ...entry,
        nodes: Array.isArray(event.chains[index] && event.chains[index].nodes) ? event.chains[index].nodes.slice(0, 5).map(node => text(node, 100)).filter(Boolean) : [],
      })),
    },
    industryImpact: { quadrants },
    weeklyTrends: {
      summary: text(trends.summary, 200, '暂无趋势信号'),
      trends: normalizeList(trends.trends, 5, entry => {
        const normalized = normalizeEvidenceObject(entry, [['topic', 80], ['evidence', 240]]);
        if (!normalized) return null;
        normalized.direction = DIRECTIONS.has(entry.direction) ? entry.direction : '平稳';
        return normalized;
      }, []),
    },
    insurancePlanner: {
      summary: text(insurance.summary, 200, '暂无相关内容'),
      talkingPoints: normalizeList(insurance.talkingPoints, 4, entry => normalizeEvidenceObject(entry, [['topic', 80], ['point', 240], ['action', 240]]), []),
    },
    peOperations: {
      summary: text(pe.summary, 200, '暂无相关内容'),
      talkingPoints: normalizeList(pe.talkingPoints, 4, entry => normalizeEvidenceObject(entry, [['topic', 80], ['point', 240], ['action', 240]]), []),
    },
    marketOutlook: {
      summary: text(outlook.summary, 200, '暂无相关内容'),
      outlooks: normalizeList(outlook.outlooks, 4, entry => normalizeEvidenceObject(entry, [['topic', 80], ['content', 300]]), []),
    },
  };
}

module.exports = {
  applyBusinessCuration,
  assignPrimaryScenes,
  buildContentTags,
  buildScenarioScores,
  businessCurationStats,
  canonicalizeUrl,
  clusterEvents,
  normalizeAIAnalysis,
  selectFeaturedItems,
  stableItemId,
};
