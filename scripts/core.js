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
  MAX_REDIRECTS,
  MAX_RESPONSE_BYTES,
  VALID_CATEGORIES,
  assertDataQuality,
  beijingDateString,
  containsCorruptedText,
  deduplicateSimilarTitles,
  isSafeHttpUrl,
  normalizePublishedAt,
  normalizeTitle,
  titleSimilarity,
  titlesLikelyDuplicate,
  qualityErrors,
  sortAndLimit,
};
