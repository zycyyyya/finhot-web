#!/usr/bin/env node
// finhot-web RSS Fetcher
// Pulls financial/insurance news from RSSHub mirrors, outputs data.js
// Usage: node scripts/fetch.js > data.js

const https = require('https');
const { parseStringPromise } = require('xml2js');

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const RSSHUB = 'https://rsshub.liumingye.cn';

const SOURCES = [
  { route: '/caixin/latest', sourceName: '财新网', category: 'industry', scoreBase: 60 },
  { route: '/wallstreetcn/news/global', sourceName: '华尔街见闻', category: 'industry', scoreBase: 55 },
  { route: '/yicai/news', sourceName: '第一财经', category: 'industry', scoreBase: 50 },
  { route: '/cls/depth', sourceName: '财联社', category: 'research', scoreBase: 55 },
  { route: '/36kr/newsflashes', sourceName: '36氪', category: 'insights', scoreBase: 45 },
  { route: '/szse/notice', sourceName: '深交所', category: 'regulatory', scoreBase: 60 },
];

const CATEGORY_TAGS = {
  regulatory: '监管政策',
  products: '产品发布',
  industry: '行业动态',
  research: '研究报告',
  insights: '技巧观点',
};

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

function isFinanceRelated(item) {
  const keywords = [
    '保险', '险企', '保费', '养老', '健康险', '寿险', '财险', '车险',
    '银行', '央行', '利率', 'LPR', 'MLF', '降准', '降息', '金融',
    '监管', '银保监', '金监总局', '证监会', '深交所', '上交所',
    '基金', '理财', '证券', '信托', '资管', '投资',
    '中国平安', '国寿', '太保', '人保', '新华保险', '泰康', '大家保险',
    '人民币', '汇率', 'GDP', 'CPI', 'PMI', '宏观',
  ];
  return keywords.some(k => item.title.includes(k) || (item.summary || '').includes(k));
}

async function main() {
  let allItems = [];

  for (const src of SOURCES) {
    console.error(`[fetching] ${src.sourceName}...`);
    const items = await fetchRSS(src.route);
    for (const item of items) {
      item.sourceName = src.sourceName;
      item.category = src.category;
      item.score = Math.min(95, src.scoreBase + Math.floor(Math.random() * 25));
      item.tags = [CATEGORY_TAGS[src.category]];
    }
    allItems.push(...items);
    console.error(`  got ${items.length} items`);
  }

  // Filter finance-related
  const filtered = allItems.filter(isFinanceRelated);

  // Sort by time desc
  filtered.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];

  const output = {
    date: dateStr,
    generatedAt: now.toISOString(),
    lead: filtered.length > 0
      ? `今日要点：共采集 ${filtered.length} 条金融保险相关资讯，按时间倒序排列。`
      : '今日暂无重大更新。',
    items: filtered.map((item, i) => ({
      id: String(i + 1),
      title: item.title,
      summary: item.summary,
      sourceName: item.sourceName,
      sourceUrl: item.sourceUrl,
      publishedAt: item.publishedAt,
      category: item.category,
      score: item.score,
      tags: item.tags,
    })),
    sections: {
      regulatory: filtered.filter(i => i.category === 'regulatory').map(i => ({
        title: i.title, sourceName: i.sourceName, publishedAt: formatTime(i.publishedAt),
      })),
      products: filtered.filter(i => i.category === 'products').map(i => ({
        title: i.title, sourceName: i.sourceName, publishedAt: formatTime(i.publishedAt),
      })),
      industry: filtered.filter(i => i.category === 'industry').map(i => ({
        title: i.title, sourceName: i.sourceName, publishedAt: formatTime(i.publishedAt),
      })),
      research: filtered.filter(i => i.category === 'research').map(i => ({
        title: i.title, sourceName: i.sourceName, publishedAt: formatTime(i.publishedAt),
      })),
      insights: filtered.filter(i => i.category === 'insights').map(i => ({
        title: i.title, sourceName: i.sourceName, publishedAt: formatTime(i.publishedAt),
      })),
    },
    flashes: filtered.slice(0, 5).map(i => ({
      title: i.title.length > 60 ? i.title.substring(0, 60) + '…' : i.title,
      dotClass: i.category === 'regulatory' ? 'flash-dot-green' : 'flash-dot-blue',
    })),
  };

  console.log(`// finhot auto-generated data — ${dateStr}`);
  console.log(`window.FINHOT_DATA = ${JSON.stringify(output, null, 2)};`);
}

function formatTime(iso) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
