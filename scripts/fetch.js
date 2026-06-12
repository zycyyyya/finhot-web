#!/usr/bin/env node
// finhot-web Incremental RSS Fetcher
// Only adds NEW content - URL dedup, title dedup, auto-expire old items, max 35 kept
// Usage: node scripts/fetch.js > data.js

const fs = require('fs');
const https = require('https');
const http = require('http');
const { parseStringPromise } = require('xml2js');

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const RSSHUB = 'https://rsshub.liumingye.cn';
const MAX_ITEMS = 35;
const MAX_AGE_DAYS = 7;
const DATA_FILE = 'data.js';
const FETCH_TIMEOUT = 15000; // 15s per request
const MAX_RETRIES = 3;

const SOURCES = [
  { route: '/caixin/latest',            sourceName: '\u8d22\u65b0\u7f51',    category: 'industry',    tier: 'T1.5', scoreBase: 60 },
  { route: '/wallstreetcn/news/global', sourceName: '\u534e\u5c14\u8857\u89c1\u95fb', category: 'industry', tier: 'T1.5', scoreBase: 55 },
  { route: '/yicai/news',               sourceName: '\u7b2c\u4e00\u8d22\u7ecf',  category: 'industry',    tier: 'T1.5', scoreBase: 50 },
  { route: '/cls/telegraph',            sourceName: '\u8d22\u8054\u793e',    category: 'industry',    tier: 'T2',   scoreBase: 50 },
  { route: '/cls/depth',                sourceName: '\u8d22\u8054\u793e',    category: 'research',    tier: 'T2',   scoreBase: 55 },
  { route: '/36kr/newsflashes',         sourceName: '36\u6c2a',     category: 'insights',    tier: 'T2',   scoreBase: 45 },
  { route: '/szse/notice',              sourceName: '\u6df1\u4ea4\u6240',    category: 'regulatory',  tier: 'T1',   scoreBase: 60 },
];

const CATEGORY_TAGS = {
  regulatory: '\u76d1\u7ba1\u653f\u7b56', products: '\u4ea7\u54c1\u53d1\u5e03', industry: '\u884c\u4e1a\u52a8\u6001',
  research: '\u7814\u7a76\u62a5\u544a', insights: '\u89c2\u70b9',
};

// === Title dedup helpers ===
function normalizeTitle(t) {
  return (t || '').replace(/[\s\u3000|｜\-—:：·,.，。!！?？\u200b]/g, '').substring(0, 16);
}

function buildTitleSet(items) {
  const s = new Set();
  for (const i of items) {
    const n = normalizeTitle(i.title);
    if (n.length >= 6) s.add(n);
  }
  return s;
}

// === Existing data loader ===
function loadExisting() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const assignIdx = raw.indexOf('window.FINHOT_DATA');
    if (assignIdx === -1) return { items: [], existingUrls: new Set(), titleSet: new Set() };
    const eqIdx = raw.indexOf('=', assignIdx);
    if (eqIdx === -1) return { items: [], existingUrls: new Set(), titleSet: new Set() };
    let start = raw.indexOf('{', eqIdx);
    if (start === -1) return { items: [], existingUrls: new Set(), titleSet: new Set() };
    let depth = 0, end = start;
    for (; end < raw.length; end++) {
      if (raw[end] === '{') depth++;
      else if (raw[end] === '}') { depth--; if (depth === 0) { end++; break; } }
    }
    const jsonStr = raw.substring(start, end);
    const data = JSON.parse(jsonStr);
    const items = data.items || [];
    const urls = new Set(items.map(i => i.sourceUrl).filter(Boolean));
    const titleSet = buildTitleSet(items);
    console.error(`[load] already ${items.length} records, ${titleSet.size} title hashes`);
    return { items, existingUrls: urls, titleSet };
  } catch (e) {
    console.error(`[load] no existing data, starting fresh: ${e.message}`);
    return { items: [], existingUrls: new Set(), titleSet: new Set() };
  }
}

// === HTTP fetch with timeout ===
function httpGet(url, timeout) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': UA }, timeout: timeout || FETCH_TIMEOUT }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        httpGet(res.headers.location, timeout).then(resolve, reject);
        return;
      }
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => resolve(body));
      res.on('error', reject);
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
    req.on('error', reject);
  });
}

// === HTTP fetch with retry ===
async function fetchWithRetry(url, retries) {
  let lastErr;
  for (let i = 0; i < (retries || MAX_RETRIES); i++) {
    try {
      return await httpGet(url);
    } catch (e) {
      lastErr = e;
      if (i < retries - 1) await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
  throw lastErr;
}

// === RSS parser ===
async function fetchRSS(route) {
  try {
    const xml = await fetchWithRetry(`${RSSHUB}${route}`, MAX_RETRIES);
    const data = await parseStringPromise(xml, { explicitArray: false });
    const channel = data.rss?.channel;
    if (!channel?.item) return [];
    const items = Array.isArray(channel.item) ? channel.item : [channel.item];
    return items.filter(i => i.title && i.link).slice(0, 8).map(i => ({
      title: (i.title || '').replace(/<[^>]*>/g, '').trim(),
      sourceUrl: i.link || '',
      publishedAt: i.pubDate ? new Date(i.pubDate).toISOString() : new Date().toISOString(),
      summary: (i.description || '').replace(/<[^>]*>/g, '').trim().substring(0, 200),
    }));
  } catch (e) {
    console.error(`[fetch error] ${route}: ${e.message}`);
    return [];
  }
}

// === Content relevance filter (tightened) ===
function isFinanceRelated(item) {
  const keywords = [
    '\u4fdd\u9669', '\u9669\u4f01', '\u4fdd\u8d39', '\u517b\u8001', '\u5065\u5eb7\u9669', '\u5bff\u9669', '\u8d22\u9669', '\u8f66\u9669',
    '\u94f6\u884c', '\u592e\u884c', '\u5229\u7387', 'LPR', 'MLF', '\u964d\u51c6', '\u964d\u606f', '\u91d1\u878d',
    '\u76d1\u7ba1', '\u94f6\u4fdd\u76d1', '\u91d1\u76d1\u603b\u5c40', '\u8bc1\u76d1\u4f1a', '\u6df1\u4ea4\u6240', '\u4e0a\u4ea4\u6240',
    '\u57fa\u91d1', '\u7406\u8d22', '\u8bc1\u5238', '\u4fe1\u6258', '\u8d44\u7ba1',
    '\u4e2d\u56fd\u5e73\u5b89', '\u56fd\u5bff', '\u592a\u4fdd', '\u4eba\u4fdd', '\u65b0\u534e\u4fdd\u9669', '\u6cf0\u5eb7', '\u5927\u5bb6\u4fdd\u9669',
    '\u4eba\u6c11\u5e01', '\u6c47\u7387', 'GDP', 'CPI', 'PMI',
    'ETF', '\u80a1\u7968', '\u503a\u5238', '\u56fd\u503a', '\u623f\u5730\u4ea7',
  ];
  const text = (item.title + ' ' + (item.summary || '')).toLowerCase();
  return keywords.some(k => text.includes(k.toLowerCase()));
}

// === Content quality filter ===
function isLowQuality(item) {
  const t = item.title || '';
  const s = item.summary || '';
  // Truncated or too short
  if (t.length < 8 || s.length < 20) return true;
  // Marketing / promo patterns
  const promoPatterns = ['\u76f4\u64ad', '\u8bfe\u7a0b', '\u62a5\u540d', '\u6d3b\u52a8\u62a5\u540d', '\u5fae\u4fe1\u53f7', '\u626b\u7801', '\u70b9\u51fb\u67e5\u770b\u66f4\u591a'];
  if (promoPatterns.some(p => t.includes(p) || s.includes(p))) return true;
  // Video-only / live stream
  if (/<video|<iframe|<embed/i.test(s)) return true;
  return false;
}

// === Simple AI scoring (local heuristic) ===
function scoreItem(item, source) {
  const ageHours = (Date.now() - new Date(item.publishedAt).getTime()) / 3600000;
  const timeliness = ageHours < 6 ? 98 : ageHours < 24 ? 88 : ageHours < 72 ? 75 : ageHours < 168 ? 60 : 45;
  const authority = source.tier === 'T1' ? 95 : source.tier === 'T1.5' ? 78 : 62;
  const depth = (item.summary || '').length > 150 ? 82 : (item.summary || '').length > 80 ? 68 : 52;
  const infoVal = item.title.length > 20 ? 78 : 62;
  const dimScore = infoVal * 0.30 + authority * 0.25 + depth * 0.20 + timeliness * 0.25;
  const tierWeight = source.tier === 'T1' ? 1.0 : source.tier === 'T1.5' ? 0.85 : 0.70;
  return Math.round(dimScore * tierWeight);
}

// === Build sections (store IDs only to reduce data size) ===
function buildSections(items) {
  const secs = { regulatory: [], products: [], industry: [], research: [], insights: [] };
  for (const i of items) {
    const sec = secs[i.category];
    if (sec && sec.length < 6) {
      sec.push(i.id);
    }
  }
  return secs;
}

// === Build flashes (store IDs only) ===
function buildFlashes(items) {
  return items.slice(0, 8).map(i => ({
    id: i.id,
    dotClass: i.score >= 80 ? 'flash-dot-green' : 'flash-dot-blue',
  }));
}

// === Main ===
async function main() {
  const existing = loadExisting();

  let newItems = [];
  for (const src of SOURCES) {
    console.error(`[fetching] ${src.sourceName}...`);
    const items = await fetchRSS(src.route);
    let added = 0;
    for (const item of items) {
      if (!item.sourceUrl || existing.existingUrls.has(item.sourceUrl)) continue;
      // Title dedup: check normalized title prefix
      const titleHash = normalizeTitle(item.title);
      if (titleHash.length >= 6 && existing.titleSet.has(titleHash)) continue;
      if (!isFinanceRelated(item)) continue;
      if (isLowQuality(item)) continue;
      item.sourceName = src.sourceName;
      item.category = src.category;
      item.tier = src.tier;
      item.score = scoreItem(item, src);
      item.tags = [CATEGORY_TAGS[src.category]];
      item.id = '';
      newItems.push(item);
      existing.existingUrls.add(item.sourceUrl);
      existing.titleSet.add(titleHash);
      added++;
    }
    console.error(`  +${added} new (${items.length - added} skipped as dup/filtered)`);
  }

  const cutoff = Date.now() - MAX_AGE_DAYS * 86400000;
  const allItems = [
    ...newItems,
    ...existing.items.filter(i => new Date(i.publishedAt).getTime() > cutoff),
  ].slice(0, MAX_ITEMS);

  allItems.sort((a, b) => {
    const ta = new Date(a.publishedAt).getTime() || 0;
    const tb = new Date(b.publishedAt).getTime() || 0;
    return tb - ta;
  });

  allItems.forEach((item, idx) => { item.id = String(idx + 1); });

  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const output = {
    date: dateStr,
    generatedAt: now.toISOString(),
    lead: newItems.length > 0
      ? `\u4eca\u65e5\u65b0\u589e ${newItems.length} \u6761\uff0c\u5171 ${allItems.length} \u6761\u7cbe\u9009\u8d44\u8baf`
      : `\u6682\u65e0\u65b0\u589e\uff0c\u5f53\u524d\u5171 ${allItems.length} \u6761\u7cbe\u9009\u8d44\u8baf`,
    items: allItems,
    sections: buildSections(allItems),
    flashes: buildFlashes(allItems),
  };

  console.error(`\n[done] +${newItems.length} new, total ${allItems.length}`);

  console.log(`// finhot auto-generated data - powered by RSSHub + financial sources`);
  console.log(`// Generated: ${now.toISOString()}`);
  console.log(`// AI scoring: info_value(30%) x authority(25%) x content_depth(20%) x recency(25%) x source_tier_weight\n`);
  console.log(`window.CATEGORIES = ${JSON.stringify([
    { slug: 'all', label: '\u5168\u90e8' },
    { slug: 'featured', label: '\u7cbe\u9009' },
    { slug: 'regulatory', label: '\u76d1\u7ba1\u653f\u7b56' },
    { slug: 'products', label: '\u4ea7\u54c1\u53d1\u5e03' },
    { slug: 'industry', label: '\u884c\u4e1a\u52a8\u6001' },
    { slug: 'research', label: '\u7814\u7a76\u62a5\u544a' },
    { slug: 'insights', label: '\u89c2\u70b9' },
  ], null, 2)};\n`);
  console.log(`window.CATEGORY_CONFIG = ${JSON.stringify({
    regulatory: { slug: 'regulatory', label: '\u76d1\u7ba1\u653f\u7b56', tagClass: 'tag-regulatory', accentClass: 'accent-regulatory' },
    products:   { slug: 'products',   label: '\u4ea7\u54c1\u53d1\u5e03/\u66f4\u65b0', tagClass: 'tag-products',   accentClass: 'accent-products' },
    industry:   { slug: 'industry',   label: '\u884c\u4e1a\u52a8\u6001',   tagClass: 'tag-industry',   accentClass: 'accent-industry' },
    research:   { slug: 'research',   label: '\u7814\u7a76\u62a5\u544a',   tagClass: 'tag-research',   accentClass: 'accent-research' },
    insights:   { slug: 'insights',   label: '\u89c2\u70b9', tagClass: 'tag-insights',   accentClass: 'accent-insights' },
  }, null, 2)};\n`);
  console.log(`window.FINHOT_DATA = ${JSON.stringify(output, null, 2)};`);
}

main().catch(e => { console.error(e); process.exit(1); });
