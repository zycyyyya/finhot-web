'use strict';

const assert = require('assert');
const {
  EVENT_CLUSTER_VERSION,
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
  clusterVersion: EVENT_CLUSTER_VERSION,
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

// === 旧版本事件不续命 ===
// v1 的巨型聚类由已被替换的相似度算法产生，events.json 却保留 120 天。
// 因此没有版本号的历史事件必须直接淘汰，否则它们会一直挂在首页事件链上。
const legacyEvents = [{ ...existingEvents[0], eventId: 'event_legacy', clusterVersion: undefined }];
const migrated = reconcileEvents(activeItems, historicalItems, legacyEvents, now);
assert.strictEqual(
  migrated.events.some(event => event.eventId === 'event_legacy'),
  false,
  '缺少 clusterVersion 的历史事件不得被沿用',
);
assert.ok(
  ![...migrated.itemEventIds.values()].includes('event_legacy'),
  '被淘汰事件的 ID 不得继续挂在条目上',
);
// 当期事件仍然是重新聚类出来的：news_rate_old 与当天的两条落在同一时间窗内，会重新并入新事件。
assert.strictEqual(migrated.itemEventIds.get('news_rate_old'), migrated.itemEventIds.get('news_rate_001'));
// 当前事件都带版本号。
assert.ok(migrated.events.every(event => event.clusterVersion === EVENT_CLUSTER_VERSION));
assert.ok(migrated.events.some(event => event.evidenceItemIds.includes('news_rate_001')));

console.log('history tests passed');
