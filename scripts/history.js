'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { clusterEvents } = require('./analysis');
const { normalizeTitle, normalizePublishedAt } = require('./core');

const DATA_DIR = path.resolve(__dirname, '..', 'data');
const HISTORY_FILE = path.join(DATA_DIR, 'history.json');
const EVENTS_FILE = path.join(DATA_DIR, 'events.json');
const HISTORY_RETENTION_DAYS = 90;
const EVENT_RETENTION_DAYS = 120;
const MAX_HISTORY_ITEMS = 5000;
const MAX_EVENTS = 1000;
const MAX_EVENT_EVIDENCE = 50;
const EVENT_MATCH_HISTORY_ITEMS = 800;

function loadJson(file, fallback) {
  try {
    const value = JSON.parse(fs.readFileSync(file, 'utf8'));
    return value && typeof value === 'object' ? value : fallback;
  } catch {
    return fallback;
  }
}

function loadHistory() {
  const data = loadJson(HISTORY_FILE, { schemaVersion: '1.0', items: [] });
  return Array.isArray(data.items) ? data.items : [];
}

function loadEvents() {
  const data = loadJson(EVENTS_FILE, { schemaVersion: '1.0', events: [] });
  return Array.isArray(data.events) ? data.events : [];
}

function itemTimestamp(item) {
  const value = item.lastSeenAt || item.publishedAt || item.fetchedAt;
  const timestamp = value ? new Date(value).getTime() : NaN;
  return Number.isFinite(timestamp) ? timestamp : 0;
}

function titleFingerprint(item) {
  const normalized = normalizeTitle(item && item.title ? item.title : '');
  return normalized ? crypto.createHash('sha256').update(normalized).digest('hex').slice(0, 16) : '';
}

function compactHistoryItem(item, nowIso, eventId) {
  return {
    id: item.id,
    title: String(item.title || '').slice(0, 240),
    sourceUrl: item.sourceUrl,
    sourceName: String(item.sourceName || '').slice(0, 80),
    category: item.category || 'industry',
    sourceTier: item.sourceTier || item.tier || 'S3',
    evidenceType: item.evidenceType || 'unknown',
    publishedAt: normalizePublishedAt(item.publishedAt),
    fetchedAt: normalizePublishedAt(item.fetchedAt),
    firstSeenAt: normalizePublishedAt(item.firstSeenAt) || nowIso,
    lastSeenAt: nowIso,
    fingerprint: item.fingerprint || titleFingerprint(item),
    eventId: eventId || item.eventId || null,
  };
}

function eventTokens(title) {
  const text = String(title || '').toLowerCase();
  const normalized = normalizeTitle(title || '');
  const tokens = new Set();
  for (let index = 0; index < normalized.length - 1; index += 1) tokens.add(normalized.slice(index, index + 2));
  const topics = ['保险', '私募', '基金', '证券', '银行', '央行', '利率', '降息', '降准', '债券', 'ETF', '监管', '处罚', '政策', '房地产', '人工智能', '养老', '量化', '汇率', 'A股', '港股', '美股'];
  topics.forEach(topic => { if (text.includes(topic.toLowerCase())) tokens.add(`topic:${topic}`); });
  return tokens;
}

function titleSimilarity(a, b) {
  const left = eventTokens(a);
  const right = eventTokens(b);
  if (!left.size || !right.size) return 0;
  let intersection = 0;
  let topicIntersection = 0;
  left.forEach(token => {
    if (!right.has(token)) return;
    intersection += 1;
    if (token.startsWith('topic:')) topicIntersection += 1;
  });
  const lexical = intersection / Math.min(left.size, right.size);
  return topicIntersection >= 2 ? Math.max(lexical, 0.60) : lexical;
}

function preferredExistingEvent(cluster, events) {
  const evidence = new Set(cluster.evidenceItemIds || []);
  let best = null;
  let bestScore = 0;
  for (const event of events) {
    const overlap = (event.evidenceItemIds || []).filter(id => evidence.has(id)).length;
    const score = overlap > 0 ? 1 + overlap : titleSimilarity(cluster.title, event.title);
    if (score > bestScore && score >= 0.52) {
      best = event;
      bestScore = score;
    }
  }
  return best;
}

function newEventId(cluster) {
  const seed = normalizeTitle(cluster.title || '') || (cluster.evidenceItemIds || []).slice().sort().join('|');
  return `event_${crypto.createHash('sha256').update(seed).digest('hex').slice(0, 12)}`;
}

function projectActiveEventClusters(events, activeItems) {
  const activeIds = new Set(activeItems.map(item => item.id));
  return events
    .filter(event => event.evidenceItemIds.some(id => activeIds.has(id)))
    .slice(0, 10)
    .map(event => {
      const activeEvidence = event.evidenceItemIds.filter(id => activeIds.has(id)).slice(0, 5);
      const mainItemId = activeIds.has(event.primaryItemId) ? event.primaryItemId : activeEvidence[0];
      return {
        eventId: event.eventId,
        title: event.title,
        mainItemId,
        relatedItemIds: activeEvidence.filter(id => id !== mainItemId),
        evidenceItemIds: activeEvidence,
        historicalEvidenceCount: Math.max(0, event.evidenceItemIds.length - activeEvidence.length),
        firstSeenAt: event.firstSeenAt,
        lastSeenAt: event.lastSeenAt,
        status: event.status,
      };
    });
}

function reconcileEvents(activeItems, historyItems, existingEvents, now) {
  const nowDate = now instanceof Date ? now : new Date(now || Date.now());
  const nowIso = nowDate.toISOString();
  const eventCutoff = nowDate.getTime() - EVENT_RETENTION_DAYS * 86400000;
  const activeIds = new Set(activeItems.map(item => item.id));
  const combinedMap = new Map();
  activeItems.forEach(item => combinedMap.set(item.id, item));
  [...historyItems]
    .sort((a, b) => itemTimestamp(b) - itemTimestamp(a))
    .slice(0, EVENT_MATCH_HISTORY_ITEMS)
    .forEach(item => { if (item.id && !combinedMap.has(item.id)) combinedMap.set(item.id, item); });

  const retainedEvents = existingEvents.filter(event => {
    const timestamp = event.lastSeenAt ? new Date(event.lastSeenAt).getTime() : NaN;
    return Number.isFinite(timestamp) && timestamp >= eventCutoff;
  });
  const clusters = clusterEvents([...combinedMap.values()], { maxClusters: MAX_EVENTS });
  const activeClusters = clusters.filter(cluster => cluster.evidenceItemIds.some(id => activeIds.has(id)));
  const itemEventIds = new Map();
  const updatedById = new Map(retainedEvents.map(event => [event.eventId, { ...event }]));

  for (const cluster of activeClusters) {
    const matched = preferredExistingEvent(cluster, retainedEvents);
    const eventId = matched ? matched.eventId : newEventId(cluster);
    const previous = updatedById.get(eventId);
    const evidenceItemIds = [...new Set([...(previous && previous.evidenceItemIds || []), ...cluster.evidenceItemIds])].slice(-MAX_EVENT_EVIDENCE);
    const event = {
      eventId,
      title: cluster.title,
      firstSeenAt: previous && previous.firstSeenAt ? previous.firstSeenAt : nowIso,
      lastSeenAt: nowIso,
      primaryItemId: cluster.mainItemId,
      evidenceItemIds,
      status: 'developing',
    };
    updatedById.set(eventId, event);
    cluster.evidenceItemIds.forEach(id => itemEventIds.set(id, eventId));
  }

  historyItems.forEach(item => {
    if (item.eventId && !itemEventIds.has(item.id)) itemEventIds.set(item.id, item.eventId);
  });

  const events = [...updatedById.values()]
    .sort((a, b) => new Date(b.lastSeenAt).getTime() - new Date(a.lastSeenAt).getTime())
    .slice(0, MAX_EVENTS);
  const activeEventClusters = projectActiveEventClusters(events, activeItems);

  return { events, itemEventIds, activeEventClusters };
}

function mergeHistory(existingItems, activeItems, itemEventIds, now) {
  const nowDate = now instanceof Date ? now : new Date(now || Date.now());
  const nowIso = nowDate.toISOString();
  const cutoff = nowDate.getTime() - HISTORY_RETENTION_DAYS * 86400000;
  const byId = new Map();
  existingItems.forEach(item => {
    if (item && item.id && itemTimestamp(item) >= cutoff) byId.set(item.id, item);
  });
  activeItems.forEach(item => {
    const previous = byId.get(item.id);
    const compact = compactHistoryItem({ ...item, firstSeenAt: previous && previous.firstSeenAt }, nowIso, itemEventIds.get(item.id));
    byId.set(item.id, compact);
  });
  return [...byId.values()]
    .map(item => ({ ...item, eventId: itemEventIds.get(item.id) || item.eventId || null }))
    .filter(item => itemTimestamp(item) >= cutoff)
    .sort((a, b) => itemTimestamp(b) - itemTimestamp(a))
    .slice(0, MAX_HISTORY_ITEMS);
}

function writeHistoryFiles(historyItems, events, generatedAt) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(HISTORY_FILE, `${JSON.stringify({
    schemaVersion: '1.0',
    generatedAt,
    retentionDays: HISTORY_RETENTION_DAYS,
    maxItems: MAX_HISTORY_ITEMS,
    items: historyItems,
  }, null, 2)}\n`, 'utf8');
  fs.writeFileSync(EVENTS_FILE, `${JSON.stringify({
    schemaVersion: '1.0',
    generatedAt,
    retentionDays: EVENT_RETENTION_DAYS,
    maxEvents: MAX_EVENTS,
    events,
  }, null, 2)}\n`, 'utf8');
}

module.exports = {
  EVENTS_FILE,
  HISTORY_FILE,
  HISTORY_RETENTION_DAYS,
  MAX_HISTORY_ITEMS,
  compactHistoryItem,
  loadEvents,
  loadHistory,
  mergeHistory,
  projectActiveEventClusters,
  reconcileEvents,
  titleFingerprint,
  writeHistoryFiles,
};
