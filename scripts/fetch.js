#!/usr/bin/env node
// finhot-web Incremental RSS Fetcher
// Only adds NEW content 鈥?URL dedup, auto-expire old items, max 30 kept
// Usage: node scripts/fetch.js > data.js

const fs = require('fs');
const https = require('https');
const { parseStringPromise } = require('xml2js');

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const RSSHUB = 'https://rsshub.liumingye.cn';
const MAX_ITEMS = 35;        // max items to keep
const MAX_AGE_DAYS = 7;      // auto-expire after 7 days
const DATA_FILE = 'data.js'; // output file path

const SOURCES = [
  { route: '/caixin/latest',      sourceName: '璐㈡柊缃?,    category: 'industry',    tier: 'T1.5', scoreBase: 60 },
  { route: '/wallstreetcn/news/global', sourceName: '鍗庡皵琛楄闂?, category: 'industry', tier: 'T1.5', scoreBase: 55 },
  { route: '/yicai/news',         sourceName: '绗竴璐㈢粡',  category: 'industry',    tier: 'T1.5', scoreBase: 50 },
  { route: '/cls/telegraph',      sourceName: '璐㈣仈绀?,    category: 'industry',    tier: 'T2',   scoreBase: 50 },
  { route: '/cls/depth',          sourceName: '璐㈣仈绀?,    category: 'research',    tier: 'T2',   scoreBase: 55 },
  { route: '/36kr/newsflashes',   sourceName: '36姘?,     category: 'insights',    tier: 'T2',   scoreBase: 45 },
  { route: '/szse/notice',        sourceName: '娣变氦鎵€',    category: 'regulatory',  tier: 'T1',   scoreBase: 60 },
];

const CATEGORY_TAGS = {
  regulatory: '鐩戠鏀跨瓥', products: '浜у搧鍙戝竷', industry: '琛屼笟鍔ㄦ€?,
  research: '鐮旂┒鎶ュ憡', insights: '鎶€宸ц鐐?,
};

// === Existing data loader ===
function loadExisting() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    // Robust JSON extraction using brace-depth counting instead of regex
    const assignIdx = raw.indexOf('window.FINHOT_DATA');
    if (assignIdx === -1) return { items: [], existingUrls: new Set() };
    const eqIdx = raw.indexOf('=', assignIdx);
    if (eqIdx === -1) return { items: [], existingUrls: new Set() };
    let start = raw.indexOf('{', eqIdx);
    if (start === -1) return { items: [], existingUrls: new Set() };
    let depth = 0, end = start;
    for (; end < raw.length; end++) {
      if (raw[end] === '{') depth++;
      else if (raw[end] === '}') { depth--; if (depth === 0) { end++; break; } }
    }
    const jsonStr = raw.substring(start, end);
    const data = JSON.parse(jsonStr);
    const urls = new Set((data.items || []).map(i => i.sourceUrl).filter(Boolean));
    console.error([load] 已有  条记录);
    return { items: data.items || [], existingUrls: urls };
  } catch (e) {
    console.error([load] 无现有数据，从头开始: );
    return { items: [], existingUrls: new Set() };
  }
}

// === HTTP fetch ===
function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': UA } }, res => {
      let body = '';
      res.on('data', d => body += d);
      res.on('end', () => resolve(body));
      res.on('error', reject);
    }).on('error', reject);
  });
}

// === RSS parser ===
async function fetchRSS(route) {
  try {
    const xml = await fetch(`${RSSHUB}${route}`);
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

// === Content relevance filter ===
function isFinanceRelated(item) {
  const keywords = [
    '淇濋櫓', '闄╀紒', '淇濊垂', '鍏昏€?, '鍋ュ悍闄?, '瀵块櫓', '璐㈤櫓', '杞﹂櫓',
    '閾惰', '澶', '鍒╃巼', 'LPR', 'MLF', '闄嶅噯', '闄嶆伅', '閲戣瀺',
    '鐩戠', '閾朵繚鐩?, '閲戠洃鎬诲眬', '璇佺洃浼?, '娣变氦鎵€', '涓婁氦鎵€',
    '鍩洪噾', '鐞嗚储', '璇佸埜', '淇℃墭', '璧勭', '鎶曡祫',
    '涓浗骞冲畨', '鍥藉', '澶繚', '浜轰繚', '鏂板崕淇濋櫓', '娉板悍', '澶у淇濋櫓',
    '浜烘皯甯?, '姹囩巼', 'GDP', 'CPI', 'PMI', '瀹忚',
  ];
  const text = (item.title + ' ' + (item.summary || '')).toLowerCase();
  return keywords.some(k => text.includes(k));
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

// === Build sections with full metadata ===
function buildSections(items) {
  const secs = { regulatory: [], products: [], industry: [], research: [], insights: [] };
  for (const i of items) {
    const sec = secs[i.category];
    if (sec && sec.length < 6) {
      sec.push({ title: i.title, summary: i.summary || '', sourceName: i.sourceName, sourceUrl: i.sourceUrl, publishedAt: i.publishedAt });
    }
  }
  return secs;
}

// === Build flashes ===
function buildFlashes(items) {
  return items.slice(0, 8).map(i => ({
    title: i.title.length > 60 ? i.title.substring(0, 60) + '鈥? : i.title,
    dotClass: i.score >= 80 ? 'flash-dot-green' : 'flash-dot-blue',
  }));
}

function fmtTime(iso) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}鏈?{d.getDate()}鏃;
}

// === Main ===
async function main() {
  const existing = loadExisting();

  // Fetch new items
  let newItems = [];
  for (const src of SOURCES) {
    console.error(`[fetching] ${src.sourceName}...`);
    const items = await fetchRSS(src.route);
    let added = 0;
    for (const item of items) {
      if (!item.sourceUrl || existing.existingUrls.has(item.sourceUrl)) continue;
      if (!isFinanceRelated(item)) continue;
      item.sourceName = src.sourceName;
      item.category = src.category;
      item.tier = src.tier;
      item.score = scoreItem(item, src);
      item.tags = [CATEGORY_TAGS[src.category]];
      item.id = ''; // will be reassigned
      newItems.push(item);
      existing.existingUrls.add(item.sourceUrl);
      added++;
    }
    console.error(`  鏂板 ${added} 鏉?(璺宠繃 ${items.length - added} 鏉￠噸澶?`);
  }

  // Build combined list: new items on top, then existing
  const cutoff = Date.now() - MAX_AGE_DAYS * 86400000;
  const allItems = [
    ...newItems,
    ...existing.items.filter(i => new Date(i.publishedAt).getTime() > cutoff),
  ].slice(0, MAX_ITEMS);

  // Sort by time desc (timestamp comparison, handles edge cases)
  allItems.sort((a, b) => {
    const ta = new Date(a.publishedAt).getTime() || 0;
    const tb = new Date(b.publishedAt).getTime() || 0;
    return tb - ta;
  });

  // Reassign sequential IDs after sorting
  allItems.forEach((item, idx) => { item.id = String(idx + 1); });

  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const output = {
    date: dateStr,
    generatedAt: now.toISOString(),
    lead: newItems.length > 0
      ? `浠婃棩鏂板 ${newItems.length} 鏉★紝鍏?${allItems.length} 鏉＄簿閫夎祫璁痐
      : `鏆傛棤鏂板鍐呭锛屽綋鍓嶅叡 ${allItems.length} 鏉＄簿閫夎祫璁痐,
    items: allItems,
    sections: buildSections(allItems),
    flashes: buildFlashes(allItems),
  };

  const totalNew = newItems.length;
  console.error(`\n[done] 鏂板 ${totalNew} 鏉★紝鎬昏 ${allItems.length} 鏉);

  // Output data.js 鈥?CATEGORIES/CATEGORY_CONFIG FIRST (required by index.html)
  console.log(`// finhot auto-generated data 鈥?powered by RSSHub + neodata-financial-search`);
  console.log(`// Generated: ${now.toISOString()}`);
  console.log(`// AI scoring: info_value(30%) 脳 authority(25%) 脳 content_depth(20%) 脳 recency(25%) 脳 source_tier_weight\n`);
  console.log(`window.CATEGORIES = ${JSON.stringify([
    { slug: 'all', label: '鍏ㄩ儴' },
    { slug: 'regulatory', label: '鐩戠鏀跨瓥' },
    { slug: 'products', label: '浜у搧鍙戝竷' },
    { slug: 'industry', label: '琛屼笟鍔ㄦ€? },
    { slug: 'research', label: '鐮旂┒鎶ュ憡' },
    { slug: 'insights', label: '鎶€宸ц鐐? },
  ], null, 2)};\n`);
  console.log(`window.CATEGORY_CONFIG = ${JSON.stringify({
    regulatory: { slug: 'regulatory', label: '鐩戠鏀跨瓥', tagClass: 'tag-regulatory', accentClass: 'accent-regulatory' },
    products:   { slug: 'products',   label: '浜у搧鍙戝竷/鏇存柊', tagClass: 'tag-products',   accentClass: 'accent-products' },
    industry:   { slug: 'industry',   label: '琛屼笟鍔ㄦ€?,   tagClass: 'tag-industry',   accentClass: 'accent-industry' },
    research:   { slug: 'research',   label: '鐮旂┒鎶ュ憡',   tagClass: 'tag-research',   accentClass: 'accent-research' },
    insights:   { slug: 'insights',   label: '鎶€宸т笌瑙傜偣', tagClass: 'tag-insights',   accentClass: 'accent-insights' },
  }, null, 2)};\n`);
  console.log(`window.FINHOT_DATA = ${JSON.stringify(output, null, 2)};`);
}

main().catch(e => { console.error(e); process.exit(1); });

