'use strict';

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { clusterEvents } = require('./analysis');
const {
  eventDateBucket,
  eventSimilarity,
  normalizeTitle,
  normalizePublishedAt,
  withinEventWindow,
} = require('./core');

const DATA_DIR = path.resolve(__dirname, '..', 'data');
const HISTORY_FILE = path.join(DATA_DIR, 'history.json');
const EVENTS_FILE = path.join(DATA_DIR, 'events.json');
const HISTORY_RETENTION_DAYS = 90;
const EVENT_RETENTION_DAYS = 120;
const MAX_HISTORY_ITEMS = 5000;
const MAX_EVENTS = 1000;
const MAX_EVENT_EVIDENCE = 50;
const EVENT_MATCH_HISTORY_ITEMS = 800;
/** 不同来源报道同一事件时，允许用标题匹配把新聚类并进已有事件的最低相似度。 */
const EVENT_MATCH_THRESHOLD = 0.60;
/**
 * 事件归组算法的版本号。
 *
 * v1 的巨型聚类（实测 6 个事件顶到 50 条证据上限、横跨两个月，如"以色列股市上涨"、
 * "恒指午间休盘"）是旧相似度算法 `交集 / min(|A|,|B|)` 的产物，而 events.json 的保留期是
 * 120 天。光换成新算法不够：旧事件会被 retainedEvents 原样续命，实测仍有 45 个 ≥10 条证据的
 * 巨型事件留在文件里、其中 6 个还挂在首页事件链上。
 *
 * 这类事件无法逐条判定真伪（证据本身就是错的），所以直接按版本号做一次淘汰：
 * 当前事件每轮都是重新聚类得出的，历史事件只负责沿用 eventId 与 firstSeenAt，
 * 因此丢弃它们只损失"事件连续性"，不会丢失任何当期事件。
 */
const EVENT_CLUSTER_VERSION = 2;

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

// === 事件匹配 ===
// 旧的 titleSimilarity 有两个致命问题：
//  1) 分母用 min(|A|,|B|)（包含度而非 Jaccard），短标题被长标题包含即接近 1.0；
//  2) "共同主题词 >= 2 就强制 0.60"，而同一栏目的任意两篇稿子几乎必然共享保险/监管这类粗主题，
//     于是不同日期、不同事件被反复并进同一个事件，证据列表一路涨到 50 条上限并横跨两个月。
// 现在改为共享的 eventSimilarity（Jaccard + 严格主体锚点），并在匹配已有事件时强制时间窗。
function eventMatchScore(cluster, event, clusterPublishedAt) {
  const evidence = new Set(cluster.evidenceItemIds || []);
  const overlap = (event.evidenceItemIds || []).filter(id => evidence.has(id)).length;
  if (overlap > 0) return 1 + overlap;
  // 标题匹配必须同时落在时间窗内，否则两个月前的"同名行情快讯"会被当成同一事件。
  if (!withinEventWindow(clusterPublishedAt, event.latestItemPublishedAt)) return 0;
  const similarity = eventSimilarity(cluster.title, event.title);
  return similarity >= EVENT_MATCH_THRESHOLD ? similarity : 0;
}

function preferredExistingEvent(cluster, events, clusterPublishedAt) {
  let best = null;
  let bestScore = 0;
  for (const event of events) {
    const score = eventMatchScore(cluster, event, clusterPublishedAt);
    if (score > bestScore && score >= EVENT_MATCH_THRESHOLD) {
      best = event;
      bestScore = score;
    }
  }
  return best;
}

// 事件身份里带上日期桶：标题完全相同的资讯在不同日期属于不同的发生，
// 不能靠规范化标题撞成同一个 eventId。
function newEventId(cluster, publishedAt) {
  const normalized = normalizeTitle(cluster.title || '');
  const seed = normalized
    ? `${normalized}@${eventDateBucket(publishedAt)}`
    : (cluster.evidenceItemIds || []).slice().sort().join('|');
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
        summary: event.summary || '',
        latestProgress: event.latestProgress || '',
      };
    });
}

function reconcileEvents(activeItems, historyItems, existingEvents, now, options) {
  const settings = options || {};
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
    if (!Number.isFinite(timestamp) || timestamp < eventCutoff) return false;
    // 旧版本算法产生的事件一律不续命，见 EVENT_CLUSTER_VERSION 说明。
    return event.clusterVersion === EVENT_CLUSTER_VERSION;
  });
  const clusters = clusterEvents([...combinedMap.values()], { maxClusters: MAX_EVENTS, pairJudge: settings.pairJudge });
  const activeClusters = clusters.filter(cluster => cluster.evidenceItemIds.some(id => activeIds.has(id)));
  const itemEventIds = new Map();
  const updatedById = new Map(retainedEvents.map(event => [event.eventId, { ...event }]));

  // 聚类的内容时间：取成员里最新的发布时间。用于匹配已有事件时的时间窗判断。
  const clusterPublishedAt = cluster => {
    const times = (cluster.evidenceItemIds || [])
      .map(id => {
        const item = combinedMap.get(id);
        return item && item.publishedAt ? new Date(item.publishedAt).getTime() : NaN;
      })
      .filter(Number.isFinite);
    return times.length > 0 ? new Date(Math.max(...times)).toISOString() : null;
  };

  for (const cluster of activeClusters) {
    const publishedAt = clusterPublishedAt(cluster) || (cluster.evidenceItemIds || [])
      .map(id => combinedMap.get(id))
      .filter(Boolean)
      .map(item => item.fetchedAt)
      .filter(Boolean)
      .sort()
      .pop() || null;
    const matched = preferredExistingEvent(cluster, retainedEvents, publishedAt);
    const eventId = matched ? matched.eventId : newEventId(cluster, publishedAt);
    const previous = updatedById.get(eventId);
    const evidenceItemIds = [...new Set([...(previous && previous.evidenceItemIds || []), ...cluster.evidenceItemIds])].slice(-MAX_EVENT_EVIDENCE);
    const event = {
      eventId,
      clusterVersion: EVENT_CLUSTER_VERSION,
      title: cluster.title,
      firstSeenAt: previous && previous.firstSeenAt ? previous.firstSeenAt : nowIso,
      lastSeenAt: nowIso,
      // 事件最后一条内容的发布时间（不是运行时间）。下次匹配时用它做时间窗判断。
      latestItemPublishedAt: publishedAt || (previous && previous.latestItemPublishedAt) || null,
      primaryItemId: cluster.mainItemId,
      evidenceItemIds,
      status: 'developing',
      // P1：综述/最新进展由 events-llm 在 full 模式生成；跨运行沿用旧值，避免 cached 模式丢牌。
      summary: (previous && previous.summary) || '',
      latestProgress: (previous && previous.latestProgress) || '',
    };
    updatedById.set(eventId, event);
    cluster.evidenceItemIds.forEach(id => itemEventIds.set(id, eventId));
  }

  // 只沿用仍然存在的事件 ID，避免历史条目挂到已被淘汰的旧事件上（前端拿到悬空的 eventId）。
  const liveEventIds = new Set(updatedById.keys());
  historyItems.forEach(item => {
    if (item.eventId && liveEventIds.has(item.eventId) && !itemEventIds.has(item.id)) {
      itemEventIds.set(item.id, item.eventId);
    }
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
  EVENT_CLUSTER_VERSION,
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
