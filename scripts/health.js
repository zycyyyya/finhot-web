'use strict';

const crypto = require('crypto');

const DEFAULT_THRESHOLDS = Object.freeze({
  minUsableSources: 3,
  minCoverageRate: 0.30,
  minItems: 20,
  minPreviousRatio: 0.40,
  maxNewestAgeHours: 72,
});

function adaptiveFetchWindow(acceptedCount, initialLimit, expandedLimit) {
  const accepted = Math.max(0, Math.round(safeNumber(acceptedCount, 0, { min: 0 })));
  const initial = Math.max(1, Math.round(safeNumber(initialLimit, 30, { min: 1 })));
  const expanded = Math.max(initial, Math.round(safeNumber(expandedLimit, 50, { min: initial })));
  const fetchLimitExpanded = accepted >= initial;
  const fetchLimit = fetchLimitExpanded ? expanded : initial;
  return {
    initialFetchLimit: initial,
    fetchLimit,
    fetchLimitExpanded,
    fetchLimitReached: accepted >= fetchLimit,
  };
}

function safeNumber(value, fallback, options) {
  const number = Number(value);
  const min = options && Number.isFinite(options.min) ? options.min : -Infinity;
  const max = options && Number.isFinite(options.max) ? options.max : Infinity;
  return Number.isFinite(number) && number >= min && number <= max ? number : fallback;
}

function resolveThresholds(overrides) {
  const values = overrides || {};
  return {
    minUsableSources: safeNumber(values.minUsableSources ?? process.env.FINHOT_MIN_USABLE_SOURCES, DEFAULT_THRESHOLDS.minUsableSources, { min: 1 }),
    minCoverageRate: safeNumber(values.minCoverageRate ?? process.env.FINHOT_MIN_COVERAGE_RATE, DEFAULT_THRESHOLDS.minCoverageRate, { min: 0, max: 1 }),
    minItems: safeNumber(values.minItems ?? process.env.FINHOT_MIN_ITEMS, DEFAULT_THRESHOLDS.minItems, { min: 1 }),
    minPreviousRatio: safeNumber(values.minPreviousRatio ?? process.env.FINHOT_MIN_PREVIOUS_RATIO, DEFAULT_THRESHOLDS.minPreviousRatio, { min: 0, max: 1 }),
    maxNewestAgeHours: safeNumber(values.maxNewestAgeHours ?? process.env.FINHOT_MAX_NEWEST_AGE_HOURS, DEFAULT_THRESHOLDS.maxNewestAgeHours, { min: 1 }),
  };
}

function sanitizeError(value, maxLength) {
  let text = value instanceof Error ? value.message : String(value || '');
  text = text
    .replace(/Bearer\s+[A-Za-z0-9._~+\/-]+/gi, 'Bearer [redacted]')
    .replace(/\bsk-[A-Za-z0-9_-]{8,}\b/g, '[redacted]')
    .replace(/\b(api[_-]?key|access[_-]?token|token|secret|authorization)\s*[:=]\s*[^\s,;]+/gi, '$1=[redacted]')
    .replace(/(https?:\/\/[^\s?#]+)(?:\?[^\s#]*)?(?:#[^\s]*)?/gi, '$1')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();
  const limit = safeNumber(maxLength, 240, { min: 40, max: 1000 });
  return text.length > limit ? `${text.slice(0, limit - 1)}…` : text;
}

function safeEndpoint(value) {
  if (!value) return null;
  try {
    return new URL(value).host.toLowerCase();
  } catch {
    return sanitizeError(value, 100) || null;
  }
}

function latestPublishedAt(items) {
  let latest = 0;
  for (const item of Array.isArray(items) ? items : []) {
    const timestamp = item && item.publishedAt ? new Date(item.publishedAt).getTime() : NaN;
    if (Number.isFinite(timestamp) && timestamp > latest) latest = timestamp;
  }
  return latest ? new Date(latest).toISOString() : null;
}

function buildSourceHealth(source, result) {
  const src = source || {};
  const details = result || {};
  const items = Array.isArray(details.items) ? details.items : [];
  const identity = `${src.sourceName || 'unknown'}|${src.route || src.directUrl || ''}|${src.category || ''}`;
  const sourceId = `source_${crypto.createHash('sha256').update(identity).digest('hex').slice(0, 10)}`;
  const newest = details.latestPublishedAt || latestPublishedAt(items);
  const attempts = Array.isArray(details.attempts) ? details.attempts.map(attempt => ({
    endpoint: safeEndpoint(attempt.endpoint),
    success: Boolean(attempt.success),
    stale: Boolean(attempt.stale),
    durationMs: Math.max(0, Math.round(safeNumber(attempt.durationMs, 0, { min: 0 }))),
    itemCount: Math.max(0, Math.round(safeNumber(attempt.itemCount, 0, { min: 0 }))),
    latestPublishedAt: attempt.latestPublishedAt || null,
    errorSummary: sanitizeError(attempt.errorSummary || attempt.error || ''),
  })) : [];
  const stale = Boolean(details.stale);
  const success = details.success !== undefined ? Boolean(details.success) : items.length > 0;
  return {
    sourceId,
    sourceName: src.sourceName || '未知来源',
    tier: src.tier || 'S3',
    category: src.category || 'industry',
    transport: src.directUrl ? 'direct-rss' : 'rsshub',
    success,
    usable: details.usable !== undefined ? Boolean(details.usable) : success && !stale && items.length > 0,
    stale,
    itemCount: items.length,
    rawItemCount: Math.max(items.length, Math.round(safeNumber(details.rawItemCount, items.length, { min: 0 }))),
    acceptedItemCount: Math.max(0, Math.round(safeNumber(details.acceptedItemCount, items.length, { min: 0 }))),
    initialFetchLimit: Math.max(1, Math.round(safeNumber(details.initialFetchLimit, details.fetchLimit || items.length || 1, { min: 1 }))),
    fetchLimit: Math.max(1, Math.round(safeNumber(details.fetchLimit, items.length || 1, { min: 1 }))),
    fetchLimitExpanded: Boolean(details.fetchLimitExpanded),
    fetchLimitReached: Boolean(details.fetchLimitReached),
    addedCount: Math.max(0, Math.round(safeNumber(details.addedCount, 0, { min: 0 }))),
    durationMs: Math.max(0, Math.round(safeNumber(details.durationMs, 0, { min: 0 }))),
    latestPublishedAt: newest,
    usedEndpoint: safeEndpoint(details.usedEndpoint),
    errorSummary: sanitizeError(details.errorSummary || details.error || ''),
    attempts,
  };
}

function summarizeSourceHealth(records, generatedAt) {
  const sources = Array.isArray(records) ? records : [];
  const totalSources = sources.length;
  const successfulSources = sources.filter(source => source.success).length;
  const usableSources = sources.filter(source => source.usable).length;
  const failedSources = sources.filter(source => !source.success).length;
  const staleSources = sources.filter(source => source.stale).length;
  const fetchLimitReachedSources = sources.filter(source => source.fetchLimitReached).length;
  const coverageRate = totalSources > 0 ? usableSources / totalSources : 0;
  const freshestPublishedAt = latestPublishedAt(sources.map(source => ({ publishedAt: source.latestPublishedAt })));
  const status = usableSources === 0 ? 'unavailable' : coverageRate >= 0.60 ? 'healthy' : 'degraded';
  return {
    generatedAt: generatedAt || new Date().toISOString(),
    status,
    totalSources,
    successfulSources,
    usableSources,
    failedSources,
    staleSources,
    fetchLimitReachedSources,
    coverageRate: Number(coverageRate.toFixed(4)),
    freshestPublishedAt,
  };
}

function publicationGateErrors(input) {
  const data = input || {};
  const thresholds = resolveThresholds(data.thresholds);
  const summary = data.summary || summarizeSourceHealth([]);
  const itemCount = Math.max(0, Math.round(safeNumber(data.itemCount, 0, { min: 0 })));
  const previousItemCount = Math.max(0, Math.round(safeNumber(data.previousItemCount, 0, { min: 0 })));
  const nowMs = data.now ? new Date(data.now).getTime() : Date.now();
  const freshest = data.freshestPublishedAt || summary.freshestPublishedAt;
  const freshestMs = freshest ? new Date(freshest).getTime() : NaN;
  const errors = [];

  if (summary.usableSources < thresholds.minUsableSources) {
    errors.push(`usable sources ${summary.usableSources} < ${thresholds.minUsableSources}`);
  }
  if (summary.coverageRate < thresholds.minCoverageRate) {
    errors.push(`source coverage ${summary.coverageRate.toFixed(2)} < ${thresholds.minCoverageRate.toFixed(2)}`);
  }
  if (itemCount < thresholds.minItems) {
    errors.push(`valid items ${itemCount} < ${thresholds.minItems}`);
  }
  if (previousItemCount >= thresholds.minItems && itemCount < Math.ceil(previousItemCount * thresholds.minPreviousRatio)) {
    errors.push(`item count ${itemCount} fell below ${Math.ceil(previousItemCount * thresholds.minPreviousRatio)} (${Math.round(thresholds.minPreviousRatio * 100)}% of previous ${previousItemCount})`);
  }
  if (!Number.isFinite(freshestMs)) {
    errors.push('freshest published time is missing');
  } else if (!Number.isFinite(nowMs) || nowMs - freshestMs > thresholds.maxNewestAgeHours * 3600000) {
    errors.push(`freshest item is older than ${thresholds.maxNewestAgeHours} hours`);
  }
  return errors;
}

function assertPublicationGate(input) {
  const errors = publicationGateErrors(input);
  if (errors.length > 0) {
    throw new Error(`Publication gate failed (${errors.length}): ${errors.join('; ')}`);
  }
}

function publicSourceHealth(summary, records) {
  return {
    ...summary,
    sources: (Array.isArray(records) ? records : []).map(source => ({
      sourceId: source.sourceId,
      sourceName: source.sourceName,
      tier: source.tier,
      category: source.category,
      transport: source.transport,
      success: source.success,
      usable: source.usable,
      stale: source.stale,
      itemCount: source.itemCount,
      rawItemCount: source.rawItemCount,
      acceptedItemCount: source.acceptedItemCount,
      initialFetchLimit: source.initialFetchLimit,
      fetchLimit: source.fetchLimit,
      fetchLimitExpanded: source.fetchLimitExpanded,
      fetchLimitReached: source.fetchLimitReached,
      addedCount: source.addedCount,
      durationMs: source.durationMs,
      latestPublishedAt: source.latestPublishedAt,
      usedEndpoint: source.usedEndpoint,
    })),
  };
}

module.exports = {
  DEFAULT_THRESHOLDS,
  adaptiveFetchWindow,
  assertPublicationGate,
  buildSourceHealth,
  publicationGateErrors,
  publicSourceHealth,
  resolveThresholds,
  sanitizeError,
  summarizeSourceHealth,
};
