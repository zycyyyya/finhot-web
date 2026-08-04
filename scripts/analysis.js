'use strict';

const crypto = require('crypto');
const { normalizeTitle, normalizePublishedAt } = require('./core');

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
  const authority = item.sourceTier === 'S0' || item.tier === 'S0' ? 12 : item.sourceTier === 'S2' || item.tier === 'S2' ? 8 : 4;
  const impact = item.scoreBreakdown && Number.isFinite(item.scoreBreakdown.impact) ? item.scoreBreakdown.impact : 8;
  const recency = item.scoreBreakdown && Number.isFinite(item.scoreBreakdown.recency) ? item.scoreBreakdown.recency : 0;
  let score = strongHits * 22 + mediumHits * 9 + authority + Math.round(impact * 0.7) + Math.round(recency * 0.4);
  if (strongHits === 0) score = Math.min(score, mediumHits > 0 ? 54 : 25);
  if (strongHits === 0 && mediumHits === 0) score = Math.min(score, 20);
  score = clamp(score, 0, 100);
  const reasons = [];
  if (strongHits > 0) reasons.push(`命中${config.label}核心主题 ${strongHits} 项`);
  if (mediumHits > 0) reasons.push(`命中关联主题 ${mediumHits} 项`);
  if (authority >= 12) reasons.push('权威原始来源');
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

function sortedCandidates(items, scene, threshold, excludedIds) {
  return items
    .filter(item => item && item.id && !excludedIds.has(item.id) && scenarioScore(item, scene) >= threshold)
    .sort((a, b) => businessRank(b, scene) - businessRank(a, scene));
}

function assignPrimaryScenes(items) {
  const source = Array.isArray(items) ? items : [];
  const assignedIds = new Set();
  const insuranceTarget = Math.min(24, Math.max(15, Math.ceil(source.length * 0.14)));
  const privateFundTarget = Math.min(40, Math.max(25, Math.ceil(source.length * 0.22)));

  sortedCandidates(source, 'insurance', 30, assignedIds)
    .slice(0, insuranceTarget)
    .forEach(item => {
      item.primaryScene = 'insurance';
      assignedIds.add(item.id);
    });

  sortedCandidates(source, 'privateFundSales', 30, assignedIds)
    .slice(0, privateFundTarget)
    .forEach(item => {
      item.primaryScene = 'privateFundSales';
      assignedIds.add(item.id);
    });

  source.forEach(item => {
    if (!assignedIds.has(item.id)) item.primaryScene = 'marketEducation';
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
  const quotas = {
    insurance: Math.min(6, total),
    privateFundSales: Math.min(7, Math.max(0, total - Math.min(6, total))),
  };
  quotas.marketEducation = Math.max(0, total - quotas.insurance - quotas.privateFundSales);
  const selected = new Set();

  Object.entries(quotas).forEach(([scene, quota]) => {
    source
      .filter(item => item.primaryScene === scene)
      .sort((a, b) => businessRank(b, scene) - businessRank(a, scene))
      .slice(0, quota)
      .forEach(item => selected.add(item.id));
  });

  source
    .filter(item => !selected.has(item.id))
    .sort((a, b) => (
      (Number(b.score) || 0) * 100 + businessRank(b, b.primaryScene)
    ) - (
      (Number(a.score) || 0) * 100 + businessRank(a, a.primaryScene)
    ))
    .slice(0, Math.max(0, total - selected.size))
    .forEach(item => selected.add(item.id));

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
  };
}

function eventTokens(item) {
  const text = `${item.title || ''} ${item.summary || ''}`.toLowerCase();
  const tokens = new Set();
  const normalized = normalizeTitle(item.title || '');
  for (let i = 0; i < normalized.length - 1; i += 1) tokens.add(normalized.slice(i, i + 2));
  const topics = ['保险', '私募', '基金', '证券', '银行', '央行', '利率', '债券', 'ETF', '监管', '处罚', '政策', '房地产', '人工智能', '养老', '量化', '汇率', 'A股', '港股', '美股'];
  topics.forEach(topic => { if (text.includes(topic.toLowerCase())) tokens.add(`topic:${topic}`); });
  return tokens;
}

function similarity(a, b) {
  if (!a.size || !b.size) return 0;
  let intersection = 0;
  a.forEach(token => { if (b.has(token)) intersection += 1; });
  return intersection / Math.min(a.size, b.size);
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

function clusterEvents(items, options) {
  const settings = options || {};
  const maxClusters = Number.isInteger(settings.maxClusters) && settings.maxClusters > 0 ? settings.maxClusters : 10;
  const prepared = items.filter(item => item && item.id && item.title).map(item => ({ item, tokens: eventTokens(item) }));
  const visited = new Set();
  const clusters = [];
  for (let index = 0; index < prepared.length; index += 1) {
    if (visited.has(index)) continue;
    const members = [prepared[index].item];
    visited.add(index);
    for (let next = index + 1; next < prepared.length; next += 1) {
      if (visited.has(next)) continue;
      const score = similarity(prepared[index].tokens, prepared[next].tokens);
      const sameCategory = prepared[index].item.category === prepared[next].item.category;
      if (score >= (sameCategory ? 0.42 : 0.56)) {
        visited.add(next);
        members.push(prepared[next].item);
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
