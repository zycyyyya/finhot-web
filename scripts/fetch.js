#!/usr/bin/env node
// finhot-web Incremental RSS Fetcher
// Only adds NEW content — URL dedup, auto-expire old items, max 30 kept
// Usage: node scripts/fetch.js > data.js

const fs = require('fs');
const https = require('https');
const { parseStringPromise } = require('xml2js');

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const RSSHUB = 'https://rsshub.liumingye.cn';
const MAX_ITEMS = 30;        // max items to keep
const MAX_AGE_DAYS = 7;      // auto-expire after 7 days
const DATA_FILE = 'data.js'; // output file path

const SOURCES = [
  { route: '/caixin/latest',      sourceName: '财新网',    category: 'industry',    tier: 'T1.5', scoreBase: 60 },
  { route: '/wallstreetcn/news/global', sourceName: '华尔街见闻', category: 'industry', tier: 'T1.5', scoreBase: 55 },
  { route: '/yicai/news',         sourceName: '第一财经',  category: 'industry',    tier: 'T1.5', scoreBase: 50 },
  { route: '/cls/depth',          sourceName: '财联社',    category: 'research',    tier: 'T2',   scoreBase: 55 },
  { route: '/36kr/newsflashes',   sourceName: '36氪',     category: 'insights',    tier: 'T2',   scoreBase: 45 },
  { route: '/szse/notice',        sourceName: '深交所',    category: 'regulatory',  tier: 'T1',   scoreBase: 60 },
];

const CATEGORY_TAGS = {
  regulatory: '监管政策', products: '产品发布', industry: '行业动态',
  research: '研究报告', insights: '技巧观点',
};

// === Existing data loader ===
function loadExisting() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    const match = raw.match(/window\.FINHOT_DATA\s*=\s*({[\s\S]*?});/);
    if (!match) return { items: [], existingUrls: new Set() };
    const data = JSON.parse(match[1]);
    const urls = new Set((data.items || []).map(i => i.sourceUrl).filter(Boolean));
    console.error(`[load] 已有 ${urls.size} 条记录`);
    return { items: data.items || [], existingUrls: urls };
  } catch (e) {
    console.error(`[load] 无现有数据，从头开始`);
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
    '保险', '险企', '保费', '养老', '健康险', '寿险', '财险', '车险',
    '银行', '央行', '利率', 'LPR', 'MLF', '降准', '降息', '金融',
    '监管', '银保监', '金监总局', '证监会', '深交所', '上交所',
    '基金', '理财', '证券', '信托', '资管', '投资',
    '中国平安', '国寿', '太保', '人保', '新华保险', '泰康', '大家保险',
    '人民币', '汇率', 'GDP', 'CPI', 'PMI', '宏观',
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

// === Build sections ===
function buildSections(items) {
  const secs = { regulatory: [], products: [], industry: [], research: [], insights: [] };
  for (const i of items) {
    const sec = secs[i.category];
    if (sec && sec.length < 5) {
      sec.push({ title: i.title, sourceName: i.sourceName, publishedAt: fmtTime(i.publishedAt) });
    }
  }
  return secs;
}

// === Build flashes ===
function buildFlashes(items) {
  return items.slice(0, 5).map(i => ({
    title: i.title.length > 60 ? i.title.substring(0, 60) + '…' : i.title,
    dotClass: i.category === 'regulatory' ? 'flash-dot-green' : 'flash-dot-blue',
  }));
}

function fmtTime(iso) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}月${d.getDate()}日`;
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
    console.error(`  新增 ${added} 条 (跳过 ${items.length - added} 条重复)`);
  }

  // Build combined list: new items on top, then existing
  const cutoff = Date.now() - MAX_AGE_DAYS * 86400000;
  const allItems = [
    ...newItems,
    ...existing.items.filter(i => new Date(i.publishedAt).getTime() > cutoff),
  ].slice(0, MAX_ITEMS);

  // Reassign IDs
  allItems.forEach((item, idx) => { item.id = String(idx + 1); });

  // Sort by time desc
  allItems.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const output = {
    date: dateStr,
    generatedAt: now.toISOString(),
    lead: newItems.length > 0
      ? `今日新增 ${newItems.length} 条，共 ${allItems.length} 条精选资讯`
      : `暂无新增内容，当前共 ${allItems.length} 条精选资讯`,
    items: allItems,
    sections: buildSections(allItems),
    flashes: buildFlashes(allItems),
  };

  const totalNew = newItems.length;
  console.error(`\n[done] 新增 ${totalNew} 条，总计 ${allItems.length} 条`);

  // Output data.js
  console.log(`// finhot incremental data — ${dateStr}`);
  console.log(`// 新增 ${totalNew} 条 | 总计 ${allItems.length} 条 | 7天自动过期`);
  console.log(`window.FINHOT_DATA = ${JSON.stringify(output, null, 2)};`);
  console.log('');
  console.log(`window.CATEGORIES = ${JSON.stringify([
    { slug: 'all', label: '全部' },
    { slug: 'regulatory', label: '监管政策' },
    { slug: 'products', label: '产品发布' },
    { slug: 'industry', label: '行业动态' },
    { slug: 'research', label: '研究报告' },
    { slug: 'insights', label: '技巧观点' },
  ])};`);
  console.log(`window.CATEGORY_CONFIG = ${JSON.stringify({
    regulatory: { label: '监管政策', tagClass: 'tag-regulatory', accentClass: 'accent-regulatory' },
    products: { label: '产品发布', tagClass: 'tag-products', accentClass: 'accent-products' },
    industry: { label: '行业动态', tagClass: 'tag-industry', accentClass: 'accent-industry' },
    research: { label: '研究报告', tagClass: 'tag-research', accentClass: 'accent-research' },
    insights: { label: '技巧观点', tagClass: 'tag-insights', accentClass: 'accent-insights' },
  })};`);
}

main().catch(e => { console.error(e); process.exit(1); });
