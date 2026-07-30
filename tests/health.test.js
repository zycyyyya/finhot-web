'use strict';

const assert = require('assert');
const {
  assertPublicationGate,
  buildSourceHealth,
  publicationGateErrors,
  publicSourceHealth,
  resolveThresholds,
  sanitizeError,
  summarizeSourceHealth,
} = require('../scripts/health');

const redacted = sanitizeError('HTTP 401 https://example.com/feed?api_key=secret Bearer abc.def sk-abcdefghijk token=visible');
assert.strictEqual(redacted.includes('secret'), false);
assert.strictEqual(redacted.includes('abc.def'), false);
assert.strictEqual(redacted.includes('sk-abcdefghijk'), false);
assert.strictEqual(redacted.includes('visible'), false);
assert.ok(redacted.includes('https://example.com/feed'));

const freshItem = { publishedAt: '2026-07-30T08:00:00Z' };
const usable = buildSourceHealth(
  { sourceName: '测试源', route: '/test', category: 'industry', tier: 'S2' },
  { items: [freshItem], success: true, stale: false, usedEndpoint: 'https://rss.example.com/test?token=x', durationMs: 125, attempts: [{ endpoint: 'https://rss.example.com/test?key=x', success: true, itemCount: 1 }] },
);
assert.match(usable.sourceId, /^source_[a-f0-9]{10}$/);
assert.strictEqual(usable.usedEndpoint, 'rss.example.com');
assert.strictEqual(usable.usable, true);
assert.strictEqual(usable.attempts[0].endpoint, 'rss.example.com');

const stale = buildSourceHealth(
  { sourceName: '陈旧源', directUrl: 'https://old.example.com/feed', category: 'research', tier: 'S2' },
  { items: [freshItem], success: true, stale: true },
);
const failed = buildSourceHealth(
  { sourceName: '失败源', route: '/fail', category: 'regulatory', tier: 'S0' },
  { items: [], success: false, error: 'timeout' },
);
const summary = summarizeSourceHealth([usable, stale, failed], '2026-07-30T09:00:00Z');
assert.deepStrictEqual({
  total: summary.totalSources,
  successful: summary.successfulSources,
  usable: summary.usableSources,
  failed: summary.failedSources,
  stale: summary.staleSources,
  coverage: summary.coverageRate,
  status: summary.status,
}, { total: 3, successful: 2, usable: 1, failed: 1, stale: 1, coverage: 0.3333, status: 'degraded' });

const published = publicSourceHealth(summary, [usable]);
assert.strictEqual(published.sources[0].attempts, undefined);
assert.strictEqual(published.sources[0].errorSummary, undefined);

const gateBase = {
  summary: { ...summary, usableSources: 3, coverageRate: 0.6, freshestPublishedAt: '2026-07-30T08:00:00Z' },
  itemCount: 60,
  previousItemCount: 100,
  now: '2026-07-30T09:00:00Z',
};
assert.deepStrictEqual(publicationGateErrors(gateBase), []);
assert.doesNotThrow(() => assertPublicationGate(gateBase));
assert.ok(publicationGateErrors({ ...gateBase, itemCount: 39 }).some(error => error.includes('previous')));
assert.ok(publicationGateErrors({ ...gateBase, itemCount: 19 }).some(error => error.includes('valid items')));
assert.ok(publicationGateErrors({ ...gateBase, summary: { ...gateBase.summary, usableSources: 2 } }).some(error => error.includes('usable sources')));
assert.ok(publicationGateErrors({ ...gateBase, summary: { ...gateBase.summary, coverageRate: 0.29 } }).some(error => error.includes('coverage')));
assert.ok(publicationGateErrors({ ...gateBase, summary: { ...gateBase.summary, freshestPublishedAt: '2026-07-26T00:00:00Z' } }).some(error => error.includes('older')));
assert.throws(() => assertPublicationGate({ ...gateBase, itemCount: 0 }), /Publication gate failed/);

assert.deepStrictEqual(resolveThresholds({ minCoverageRate: 2 }).minCoverageRate, 0.30);
assert.deepStrictEqual(resolveThresholds({ minCoverageRate: 0.5 }).minCoverageRate, 0.5);

console.log('health tests passed');
