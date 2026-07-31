'use strict';

const assert = require('assert');
const {
  MAX_HISTORY_ITEMS,
  mergeHistory,
  projectActiveEventClusters,
  reconcileEvents,
  titleFingerprint,
} = require('../scripts/history');

const now = new Date('2026-07-30T12:00:00Z');
const activeItems = [
  { id: 'news_rate_001', title: '央行发布降息政策通知', sourceUrl: 'https://example.com/1', sourceName: '权威源', category: 'regulatory', sourceTier: 'S0', publishedAt: '2026-07-30T08:00:00Z' },
  { id: 'news_rate_002', title: '央行降息政策影响债券市场', sourceUrl: 'https://example.com/2', sourceName: '财经源', category: 'regulatory', sourceTier: 'S2', publishedAt: '2026-07-30T09:00:00Z' },
];
const historicalItems = [
  { id: 'news_rate_old', title: '央行降息预期升温影响债市', sourceUrl: 'https://example.com/old', sourceName: '历史源', category: 'regulatory', sourceTier: 'S2', publishedAt: '2026-07-29T09:00:00Z', firstSeenAt: '2026-07-29T10:00:00Z', lastSeenAt: '2026-07-29T10:00:00Z', eventId: 'event_existing' },
  { id: 'news_expired', title: '过期历史新闻', sourceUrl: 'https://example.com/expired', sourceName: '历史源', category: 'industry', sourceTier: 'S2', publishedAt: '2026-03-01T00:00:00Z', firstSeenAt: '2026-03-01T00:00:00Z', lastSeenAt: '2026-03-01T00:00:00Z' },
];
const existingEvents = [{
  eventId: 'event_existing',
  title: '央行降息预期升温影响债市',
  firstSeenAt: '2026-07-29T10:00:00Z',
  lastSeenAt: '2026-07-29T10:00:00Z',
  primaryItemId: 'news_rate_old',
  evidenceItemIds: ['news_rate_old'],
  status: 'developing',
}];

const state = reconcileEvents(activeItems, historicalItems, existingEvents, now);
assert.ok(state.events.some(event => event.eventId === 'event_existing'));
assert.strictEqual(state.itemEventIds.get('news_rate_001'), 'event_existing');
assert.ok(state.activeEventClusters.some(event => event.eventId === 'event_existing'));
assert.ok(state.activeEventClusters[0].historicalEvidenceCount >= 1);
assert.ok(state.activeEventClusters[0].evidenceItemIds.every(id => activeItems.some(item => item.id === id)));
const frontendProjection = projectActiveEventClusters(state.events, [activeItems[0]]);
assert.ok(frontendProjection[0].evidenceItemIds.every(id => id === activeItems[0].id));

const history = mergeHistory(historicalItems, activeItems, state.itemEventIds, now);
assert.ok(history.some(item => item.id === 'news_rate_001' && item.eventId === 'event_existing'));
assert.ok(history.some(item => item.id === 'news_rate_old'));
assert.strictEqual(history.some(item => item.id === 'news_expired'), false);
assert.ok(history.length <= MAX_HISTORY_ITEMS);
assert.match(titleFingerprint(activeItems[0]), /^[a-f0-9]{16}$/);

const repeated = reconcileEvents(activeItems, history, state.events, new Date('2026-07-31T12:00:00Z'));
assert.strictEqual(repeated.itemEventIds.get('news_rate_001'), 'event_existing');
assert.strictEqual(repeated.events.filter(event => event.eventId === 'event_existing').length, 1);

console.log('history tests passed');
