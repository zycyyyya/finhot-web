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
    const scenarioKeys = ['insurance', 'marketEducation', 'privateFundSales'];
    if (!item.scenarioScores || scenarioKeys.some(key => {
      const value = item.scenarioScores[key];
      return !value || !Number.isFinite(value.score) || value.score < 0 || value.score > 100 || !Array.isArray(value.reasons);
    })) {
      errors.push(`${prefix}.scenarioScores: invalid or incomplete`);
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
  isSafeHttpUrl,
  normalizePublishedAt,
  normalizeTitle,
  qualityErrors,
  sortAndLimit,
};
