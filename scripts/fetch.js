#!/usr/bin/env node
// finhot-web Incremental RSS Fetcher
// Only adds NEW content - URL dedup, title dedup, auto-expire old items, max 150 kept
// Usage: node scripts/fetch.js > data.js

const fs = require('fs');
const https = require('https');
const http = require('http');
const { parseStringPromise } = require('xml2js');

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
const RSSHUB = 'https://rsshub.liumingye.cn';
const MAX_ITEMS = 150;
const MAX_AGE_DAYS = 7;
const DATA_FILE = 'data.js';
const FETCH_TIMEOUT = 15000; // 15s per request
const MAX_RETRIES = 3;

const SOURCES = [
  { route: '/caixin/latest',            sourceName: '\u8d22\u65b0\u7f51',    category: 'industry',    tier: 'S2', evidenceType: 'financial_media' },
  { route: '/wallstreetcn/news/global', sourceName: '\u534e\u5c14\u8857\u89c1\u95fb', category: 'industry', tier: 'S2', evidenceType: 'financial_media' },
  { route: '/yicai/news',               sourceName: '\u7b2c\u4e00\u8d22\u7ecf',  category: 'industry',    tier: 'S2', evidenceType: 'financial_media' },
  { route: '/cls/telegraph',            sourceName: '\u8d22\u8054\u793e',    category: 'industry',    tier: 'S3', evidenceType: 'news_flash' },
  { route: '/cls/depth',                sourceName: '\u8d22\u8054\u793e',    category: 'research',    tier: 'S2', evidenceType: 'financial_media' },
  { route: '/36kr/newsflashes',         sourceName: '36\u6c2a',     category: 'insights',    tier: 'S3', evidenceType: 'news_flash' },
  { route: '/szse/notice',              sourceName: '\u6df1\u4ea4\u6240',    category: 'regulatory',  tier: 'S0', evidenceType: 'official_notice' },
  // Direct RSS — 英为财情 (Investing.com)
  // 替换为市场资讯+技术分析，提升内容深度
  { directUrl: 'https://cn.investing.com/rss/news_25.rss',             sourceName: '\u82f1\u4e3a\u8d22\u60c5', category: 'industry',  tier: 'S2', evidenceType: 'financial_media' },
  { directUrl: 'https://cn.investing.com/rss/stock_Technical.rss',     sourceName: '\u82f1\u4e3a\u8d22\u60c5', category: 'research',   tier: 'S2', evidenceType: 'analysis' },
];

const TIER_LABELS = {
  S0: '\u6743\u5a01\u539f\u59cb\u6e90',
  S1: '\u7ed3\u6784\u5316\u6570\u636e\u6e90',
  S2: '\u4e13\u4e1a\u8d22\u7ecf\u5a92\u4f53',
  S3: '\u5feb\u8baf/\u89c2\u70b9\u7ebf\u7d22',
};

const CATEGORY_TAGS = {
  regulatory: '\u76d1\u7ba1\u653f\u7b56', products: '\u4ea7\u54c1\u53d1\u5e03', industry: '\u884c\u4e1a\u52a8\u6001',
  research: '\u7814\u7a76\u62a5\u544a', insights: '\u89c2\u70b9',
};

function sourceForItem(item) {
  return SOURCES.find(src => src.sourceName === item.sourceName) || {
    sourceName: item.sourceName || '\u672a\u77e5\u6765\u6e90',
    category: item.category || 'industry',
    tier: item.sourceTier || item.tier || 'S3',
    evidenceType: item.evidenceType || 'unknown',
  };
}

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
function httpGet(url, timeout, opts) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const options = Object.assign({ headers: { 'User-Agent': UA }, timeout: timeout || FETCH_TIMEOUT }, opts || {});
    const req = mod.get(url, options, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        httpGet(res.headers.location, timeout, opts).then(resolve, reject);
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
async function fetchWithRetry(url, retries, opts) {
  let lastErr;
  for (let i = 0; i < (retries || MAX_RETRIES); i++) {
    try {
      return await httpGet(url, FETCH_TIMEOUT, opts);
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
    return items.filter(i => i.title && i.link).slice(0, 12).map(i => ({
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

// === Direct RSS fetcher (not via RSSHub) ===
// Supports investing.com / other standalone RSS endpoints
// Uses rejectUnauthorized: false for environments with TLS issues
async function fetchDirectRSS(directUrl) {
  try {
    const xml = await fetchWithRetry(directUrl, MAX_RETRIES, { rejectUnauthorized: false });
    const data = await parseStringPromise(xml, { explicitArray: false });
    const channel = data.rss?.channel;
    if (!channel?.item) return [];
    const items = Array.isArray(channel.item) ? channel.item : [channel.item];
    return items.filter(i => i.title && i.link).slice(0, 12).map(i => ({
      title: (i.title || '').replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim(),
      sourceUrl: i.link || '',
      publishedAt: i.pubDate ? new Date(i.pubDate).toISOString() : new Date().toISOString(),
      summary: (i.description || '').replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim().substring(0, 200),
    }));
  } catch (e) {
    console.error(`[direct fetch error] ${directUrl}: ${e.message}`);
    return [];
  }
}

// === Content relevance filter ===
// Domain keyword taxonomy — organized by sector for easy audit & expansion
// All keywords sourced from real financial insurance domain usage patterns
const FINANCE_KEYWORD_MAP = {
  insurance: [
    // 保险通用
    '保险', '险企', '保费', '赔付', '理赔', '精算', '偿付能力', '保额', '保单', '再保险',
    '保险业', '保险法', '保险公司', '保险产品', '保险销售', '保险中介', '互联网保险',
    // 人身险
    '养老', '养老金', '年金', '个人养老金', '第三支柱', '退休',
    '健康险', '重疾险', '寿险', '终身寿险', '增额终身寿', '分红险', '万能险', '投连险',
    '百万医疗', '惠民保',
    // 财产险
    '车险', '财险', '责任险', '意外险', '医疗险', '农业保险', '信用保险',
    // 险企品牌
    '中国平安', '国寿', '太保', '人保', '新华保险', '泰康', '大家保险', '友邦',
    '太平人寿', '阳光保险', '中华联合', '大地保险',
  ],
  banking: [
    '银行', '央行', '商业银行', '城商行', '农商行', '村镇银行', '民营银行',
    '利率', '贷款利率', '存款利率', 'LPR', 'MLF', 'SLF', '逆回购', '降准', '降息', '加息',
    '流动性', '准备金', '净息差', '拨备',
    '房贷', '按揭', '消费贷', '经营贷', '信用贷',
    '存款', '大额存单', '结构性存款', '通知存款',
    '理财', '理财产品', '净值化', '破净',
  ],
  securities: [
    '股票', 'A股', '港股', '美股', '大盘', '指数', '沪深300', '中证500', '中证1000',
    'ETF', 'LOF', '公募基金', '私募基金', '对冲基金', '量化',
    '债券', '国债', '信用债', '可转债', '公司债', '城投债', '地方债', '利率债',
    '期货', '期权', '衍生品', '融资融券',
    'IPO', '上市', '退市', '打新', '定增', '减持', '增持', '回购',
    '券商', '投行', '自营', '经纪', '做市',
    '投资者', '散户', '机构', '北向资金', '南向资金',
  ],
  regulation: [
    '监管', '金融监管', '银保监', '金监总局', '证监会', '央行', '金融委',
    '深交所', '上交所', '北交所', '新三板', '港交所', '交易商协会', '基金业协会',
    '合规', '处罚', '罚单', '问责', '整改', '取缔', '约谈', '通报',
    '条款', '办法', '通知', '指引', '意见', '规定', '条例', '法规', '解读',
    '牌照', '资质', '返佣', '飞单', '误导销售',
  ],
  macro: [
    '经济', '宏观经济', '经济运行', '稳增长', '保就业', '高质量发展',
    'GDP', 'CPI', 'PPI', 'PMI', 'M2', '社融', '信贷', '外贸',
    '货币政策', '财政政策', '产业政策', '宏观调控', '逆周期', '跨周期',
    '汇率', '人民币', '外汇', '跨境', '离岸', '在岸', '美元', '欧元', '日元',
    '通胀', '通缩', '滞胀', '衰退', '复苏',
    '房地产', '地产', '楼市', '住房', '保障房', '收储', '限购', '限贷',
    '消费', '投资', '出口', '进口', '进出口', '贸易', '产业链', '供应链',
    '就业', '失业', '收入', '居民杠杆', '共同富裕',
    // 全球市场 / 大宗商品
    '黄金', '金价', '原油', '大宗商品', '工业', '利润', '股市', '美联储', '财报', '欧央行',
  ],
  trust_wealth: [
    '信托', '家族信托', '资产配置', '财富管理', '私人银行',
    '资管', '净值', 'FOF', 'MOM', 'CTA',
    '非标', '标品', '固收', '现金管理', '权益', '另类', '多资产',
    '净值型', '预期收益', '业绩基准', '年化', 'IRR', '夏普',
    '募集', '认购', '赎回', '开放日', '封闭期', '锁定期',
  ],
};

// Flatten all keywords and deduplicate
const ALL_FINANCE_KEYWORDS = [...new Set(
  Object.values(FINANCE_KEYWORD_MAP).flat()
)];

function isFinanceRelated(item) {
  const text = (item.title + ' ' + (item.summary || '')).toLowerCase();
  return ALL_FINANCE_KEYWORDS.some(k => text.includes(k.toLowerCase()));
}

// === Content quality filter ===
function isLowQuality(item) {
  const t = item.title || '';
  const s = item.summary || '';
  // Too short: reject if both title and summary are too brief
  if (t.length < 8 && s.length < 20) return true;
  // Bare title only (summary empty but title ok): allow (analysis RSS often has no description)
  if (t.length < 4) return true;
  // Marketing / promo patterns
  const promoPatterns = ['\u76f4\u64ad', '\u8bfe\u7a0b', '\u62a5\u540d', '\u6d3b\u52a8\u62a5\u540d', '\u5fae\u4fe1\u53f7', '\u626b\u7801', '\u70b9\u51fb\u67e5\u770b\u66f4\u591a'];
  if (promoPatterns.some(p => t.includes(p) || s.includes(p))) return true;
  // Video-only / live stream
  if (/<video|<iframe|<embed/i.test(s)) return true;
  return false;
}

// === Source-specific noise filter ===
// Filters out administrative/boilerplate content from specific sources
// that passes general relevance checks but has zero practitioner value
function isSourceNoise(item) {
  const t = item.title || '';
  // 深交所：排除上市/退市类行政公告（对私募从业者无参考价值）
  if (item.sourceName === '\u6df1\u4ea4\u6240') {
    if (/\u4e0a\u5e02\u4ea4\u6613|\u7ec8\u6b62\u4e0a\u5e02/.test(t)) return true;
  }
  return false;
}

function hasAny(text, keywords) {
  const lower = (text || '').toLowerCase();
  return keywords.some(k => lower.includes(k.toLowerCase()));
}

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

function scoreByKeywords(text, groups, fallback) {
  let score = fallback;
  for (const group of groups) {
    if (hasAny(text, group.keywords)) score = Math.max(score, group.score);
  }
  return score;
}

function buildWhy(scoreBreakdown, item, source) {
  const why = [];
  if (source.tier === 'S0') why.push('\u6743\u5a01\u539f\u59cb\u6765\u6e90');
  if (source.tier === 'S2') why.push('\u4e13\u4e1a\u8d22\u7ecf\u5a92\u4f53\u8ddf\u8fdb');
  if (source.tier === 'S3') why.push('\u5feb\u8baf\u7ebf\u7d22\uff0c\u9700\u7ed3\u5408\u539f\u6587\u5224\u65ad');
  if (scoreBreakdown.impact >= 16) why.push('\u5bf9\u5c55\u4e1a/\u914d\u7f6e/\u5408\u89c4\u6709\u76f4\u63a5\u5f71\u54cd');
  if (scoreBreakdown.actionability >= 8) why.push('\u53ef\u8f6c\u5316\u4e3a\u5ba2\u6237\u6c9f\u901a\u6216\u6295\u7814\u5173\u6ce8');
  if (scoreBreakdown.recency >= 13) why.push('\u65f6\u6548\u6027\u9ad8');
  if ((item.summary || '').length > 150) why.push('\u6458\u8981\u4fe1\u606f\u8f83\u5b8c\u6574');
  return why.slice(0, 3);
}

function confidenceFor(source, scoreBreakdown) {
  if (source.tier === 'S0') return 'high';
  if (scoreBreakdown.authority >= 16 && scoreBreakdown.depth >= 7) return 'medium';
  return 'low';
}

// === Practitioner value scoring ===
function scoreItem(item, source) {
  const text = `${item.title || ''} ${item.summary || ''}`;
  const ageHours = (Date.now() - new Date(item.publishedAt).getTime()) / 3600000;
  const recency = ageHours < 6 ? 15 : ageHours < 24 ? 13 : ageHours < 72 ? 10 : ageHours < 168 ? 7 : 4;
  const authority = source.tier === 'S0' ? 20 : source.tier === 'S1' ? 18 : source.tier === 'S2' ? 15 : 9;
  const summaryLen = (item.summary || '').length;
  const depth = source.tier === 'S0' ? 8 : summaryLen > 180 ? 10 : summaryLen > 100 ? 8 : summaryLen > 40 ? 6 : 3;
  const relevance = scoreByKeywords(text, [
    { score: 25, keywords: ['\u4fdd\u9669', '\u9669\u4f01', '\u9669\u8d44', '\u5bff\u9669', '\u8d22\u9669', '\u5065\u5eb7\u9669', '\u91d1\u76d1\u603b\u5c40', '\u507f\u4ed8', '\u7cbe\u7b97'] },
    { score: 22, keywords: ['\u57fa\u91d1', '\u79c1\u52df', '\u8d44\u7ba1', '\u7406\u8d22', '\u503a\u5238', 'ETF', '\u8bc1\u5238'] },
    { score: 18, keywords: ['\u94f6\u884c', '\u5229\u7387', '\u592e\u884c', '\u8bc1\u76d1\u4f1a', '\u964d\u51c6', '\u964d\u606f', 'LPR', 'MLF'] },
  ], source.category === 'regulatory' ? 18 : 12);
  const impact = scoreByKeywords(text, [
    { score: 20, keywords: ['\u76d1\u7ba1', '\u5904\u7f5a', '\u6cd5\u89c4', '\u901a\u77e5', '\u6279\u590d', '\u507f\u4ed8\u80fd\u529b', '\u964d\u606f', '\u964d\u51c6'] },
    { score: 17, keywords: ['\u4e1a\u7ee9', '\u4fdd\u8d39', '\u8d54\u4ed8', '\u5e76\u8d2d', '\u589e\u8d44', '\u8d44\u4ea7\u914d\u7f6e', '\u80a1\u503a'] },
    { score: 14, keywords: ['\u4ea7\u54c1', '\u65b0\u57fa\u91d1', '\u7406\u8d22\u4ea7\u54c1', '\u5e74\u91d1', '\u517b\u8001'] },
  ], 8);
  const actionability = scoreByKeywords(text, [
    { score: 10, keywords: ['\u98ce\u9669\u63d0\u793a', '\u5408\u89c4', '\u5ba2\u6237', '\u914d\u7f6e', '\u7406\u8d22', '\u5e74\u91d1', '\u517b\u8001', '\u4ea7\u54c1'] },
    { score: 8, keywords: ['\u5229\u7387', '\u4fdd\u8d39', '\u507f\u4ed8', '\u7814\u62a5', '\u8bc4\u7ea7', '\u8d44\u91d1\u6d41\u5411'] },
  ], 4);
  const scoreBreakdown = {
    relevance,
    authority,
    impact,
    recency,
    depth,
    actionability,
  };
  let score = Object.values(scoreBreakdown).reduce((sum, val) => sum + val, 0);
  if (source.tier === 'S3') score = Math.min(score, 75);
  if (source.tier !== 'S0' && hasAny(text, ['\u76d1\u7ba1', '\u5904\u7f5a', '\u6cd5\u89c4', '\u6279\u590d'])) score = Math.min(score, 82);
  score = clamp(Math.round(score), 0, 100);
  return {
    score,
    scoreLabel: '\u4ece\u4e1a\u4ef7\u503c',
    scoreBreakdown,
    confidence: confidenceFor(source, scoreBreakdown),
    why: buildWhy(scoreBreakdown, item, source),
  };
}

function enrichItem(item) {
  const src = sourceForItem(item);
  item.category = item.category || src.category;
  item.tier = src.tier;
  item.sourceTier = src.tier;
  item.sourceTierLabel = TIER_LABELS[src.tier] || '';
  item.evidenceType = item.evidenceType || src.evidenceType;
  item.discoveredVia = item.discoveredVia || 'RSSHub';
  if (!item.scoreBreakdown || !item.why) {
    const scoreMeta = scoreItem(item, src);
    item.score = scoreMeta.score;
    item.scoreLabel = scoreMeta.scoreLabel;
    item.scoreBreakdown = scoreMeta.scoreBreakdown;
    item.confidence = scoreMeta.confidence;
    item.why = scoreMeta.why;
  }
  return item;
}

// === Build sections (store IDs only to reduce data size) ===
function buildSections(items) {
  const secs = { regulatory: [], products: [], industry: [], research: [], insights: [] };
  for (const i of items) {
    const sec = secs[i.category];
    if (sec && sec.length < 10) {
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

// === Keyword index builder ===
// Inverted index: domain keyword → [item IDs]; auto-generated each fetch
// Based on the FINANCE_KEYWORD_MAP taxonomy — covers insurance/banking/securities/regulation/macro/wealth
function buildKeywordIndex(items) {
  const index = {};

  ALL_FINANCE_KEYWORDS.forEach(kw => {
    const kl = kw.toLowerCase();
    items.forEach(item => {
      const text = (item.title + ' ' + (item.summary || '') + ' ' + (item.sourceName || '')).toLowerCase();
      if (text.includes(kl)) {
        if (!index[kw]) index[kw] = [];
        if (!index[kw].includes(item.id)) index[kw].push(item.id);
      }
    });
  });

  return index;
}

// === AI Analysis Generator ===
// Uses SenseNova API when LLM_API_KEY env var is set; falls back to rule-based
const LLM_API_HOST = 'token.sensenova.cn';
const LLM_API_PATH = '/v1/chat/completions';
const LLM_TIMEOUT_MS = 60000;

function httpsPost(host, path, data, apiKey, timeout) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(data);
    const req = https.request({
      hostname: host,
      path: path,
      method: 'POST',
      rejectUnauthorized: false, // Required for some environments
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
        'Content-Length': Buffer.byteLength(body),
      },
      timeout: timeout || LLM_TIMEOUT_MS,
    }, res => {
      let respBody = '';
      res.on('data', d => respBody += d);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(respBody);
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${respBody.substring(0, 100)}`));
        }
      });
      res.on('error', reject);
    });
    req.on('timeout', () => { req.destroy(); reject(new Error('LLM timeout')); });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function callLLM(messages, apiKey, maxTokens) {
  const raw = await httpsPost(LLM_API_HOST, LLM_API_PATH, {
    model: 'deepseek-v4-flash',
    messages,
    temperature: 0.7,
    max_tokens: maxTokens || 3500,
  }, apiKey, LLM_TIMEOUT_MS);
  const data = JSON.parse(raw);
  return data.choices[0].message.content;
}

// Safe JSON extraction: strips markdown fences, finds first { last }, attempts repair on failure
function extractJSON(raw, fallback) {
  let jsonStr = raw.replace(/```json\s*\n?/g, '').replace(/\n?\s*```/g, '').trim();
  const firstBrace = jsonStr.indexOf('{');
  const lastBrace = jsonStr.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    jsonStr = jsonStr.substring(firstBrace, lastBrace + 1);
  }
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    // Attempt repair: truncation mitigation — close unclosed braces/brackets
    let repaired = jsonStr;
    let openBraces = 0, openBrackets = 0;
    for (const ch of repaired) {
      if (ch === '{') openBraces++;
      else if (ch === '}') openBraces--;
      else if (ch === '[') openBrackets++;
      else if (ch === ']') openBrackets--;
    }
    while (openBrackets > 0) { repaired += ']'; openBrackets--; }
    while (openBraces > 0) { repaired += '}'; openBraces--; }
    try {
      return JSON.parse(repaired);
    } catch {
      return fallback;
    }
  }
}

async function generateAIAnalysisWithLLM(items, apiKey) {
  const topItems = [...items]
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 20);

  const articlesText = topItems.map((item, i) =>
    `[${i+1}] 标题: ${item.title}\n来源: ${item.sourceName}\n日期: ${(item.publishedAt || '').substring(0, 10)}\n分类: ${item.category}\n评分: ${item.score}\n摘要: ${(item.summary || '').substring(0, 80)}`
  ).join('\n\n');

  // Weekly timeline: top 30 by score to keep context lean
  const weeklyContext = items
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 30)
    .map(i => `[${(i.publishedAt || '').substring(0, 10)}] ${i.title}`)
    .join('\n');

  // === Call 1: Lightweight — summaries, chains, matrix, trends (max_tokens: 2000) ===
  console.error('[llm] call 1/2: summary + trends...');
  const raw1 = await callLLM([
    { role: 'system', content: '你是金融保险资讯分析师。回答必须是合法的JSON格式，不要包含markdown标记或额外文字。' },
    { role: 'user', content: `高分资讯（前20条）：\n${articlesText}\n\n=====\n近7天时间线（前30条）：\n${weeklyContext}\n\n=====\n生成JSON（topic≤48字，每板块2-3项，紧凑输出）：\n{\n  "dailySummary": { "highlights": ["核心1", "核心2", "核心3"] },\n  "eventChain": { "summary": "概述", "chains": [{ "title": "链标题", "nodes": ["A", "B"], "causalLink": "因果逻辑" }] },\n  "industryImpact": {\n    "quadrants": {\n      "insurance": { "level": "high|medium|low|none", "summary": "概述", "items": [{ "title": "新闻标题", "impact": "影响描述", "suggestion": "建议" }] },\n      "pe": { "level": "high|medium|low|none", "summary": "概述", "items": [{ "title": "新闻标题", "impact": "影响描述", "suggestion": "建议" }] },\n      "banking": { "level": "high|medium|low|none", "summary": "概述", "items": [{ "title": "新闻标题", "impact": "影响描述", "suggestion": "建议" }] },\n      "trust": { "level": "high|medium|low|none", "summary": "概述", "items": [{ "title": "新闻标题", "impact": "影响描述", "suggestion": "建议" }] }\n    }\n  },\n  "weeklyTrends": { "summary": "概述", "trends": [{ "topic": "主题", "direction": "上升|下降|平稳", "evidence": "证据" }] }\n}\n注意：industryImpact下各quadrant的items必须是对象数组，每个对象含title/impact/suggestion三个字符串字段，不可返回纯字符串。` },
  ], apiKey, 2000);

  const parsed1 = extractJSON(raw1, { dailySummary: { highlights: [] }, eventChain: { summary: '生成失败', chains: [] }, industryImpact: { quadrants: {} }, weeklyTrends: { summary: '生成失败', trends: [] } });

  // === Call 2: Talking points — insurance, PE, market (max_tokens: 1500) ===
  console.error('[llm] call 2/2: talking points...');
  const raw2 = await callLLM([
    { role: 'system', content: '你是金融保险资讯分析师，擅长将新闻转化为可直接使用的客户沟通话术。回答必须是合法的JSON格式，不要包含markdown标记或额外文字。' },
    { role: 'user', content: `高分资讯：\n${articlesText}\n\n=====\n生成JSON（topic≤48字，每板块2-3条）：\n{\n  "insurancePlanner": { "summary": "概述", "talkingPoints": [{ "topic": "话题", "point": "沟通要点", "action": "建议行动" }] },\n  "peOperations": { "summary": "概述", "talkingPoints": [{ "topic": "话题", "point": "运营参考", "action": "建议行动" }] },\n  "marketOutlook": { "summary": "概述", "outlooks": [{ "topic": "话题", "content": "市场展望" }] }\n}\n要求：话术直接可用于客户沟通场景，action具体可执行，无相关内容则数组为空。` },
  ], apiKey, 1500);

  const parsed2 = extractJSON(raw2, { insurancePlanner: { summary: '生成失败', talkingPoints: [] }, peOperations: { summary: '生成失败', talkingPoints: [] }, marketOutlook: { summary: '生成失败', outlooks: [] } });

  return {
    dailySummary: parsed1.dailySummary || { highlights: [] },
    eventChain: parsed1.eventChain || { summary: '暂无', chains: [] },
    industryImpact: parsed1.industryImpact || { quadrants: { insurance: { level: 'none', summary: '暂无', items: [] }, pe: { level: 'none', summary: '暂无', items: [] }, banking: { level: 'none', summary: '暂无', items: [] }, trust: { level: 'none', summary: '暂无', items: [] } } },
    weeklyTrends: parsed1.weeklyTrends || { summary: '暂无趋势信号', trends: [] },
    insurancePlanner: parsed2.insurancePlanner || { summary: '暂无相关内容', talkingPoints: [] },
    peOperations: parsed2.peOperations || { summary: '暂无相关内容', talkingPoints: [] },
    marketOutlook: parsed2.marketOutlook || { summary: '暂无相关内容', outlooks: [] },
  };
}

async function generateAIAnalysisWithFallback(items) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (apiKey) {
    try {
      console.error('[llm] generating AI analysis with SenseNova API...');
      const result = await generateAIAnalysisWithLLM(items, apiKey);
      console.error('[llm] AI analysis generated successfully');
      return result;
    } catch (e) {
      console.error(`[llm] LLM all calls failed: ${e.message}, falling back to rule-based`);
    }
  } else {
    console.error('[llm] DEEPSEEK_API_KEY not set, using rule-based analysis');
  }
  return generateAIAnalysis(items);
}

function hasText(text, keywords) {
  const lower = (text || '').toLowerCase();
  return keywords.some(k => lower.includes(k.toLowerCase()));
}

function pickTemplate(templates, item) {
  const text = `${item.title || ''} ${item.summary || ''}`;
  for (const t of templates) {
    if (t.match && hasText(text, t.match)) return { point: t.point, action: t.action };
  }
  return { point: templates[templates.length - 1].point, action: templates[templates.length - 1].action };
}

function generateInsuranceAnalysis(items) {
  const insuranceItems = items.filter(i =>
    hasText(i.title + ' ' + (i.summary || ''), ['保险', '险企', '保费', '养老', '健康险', '寿险', '年金', '车险', '财险', '理赔', '精算', '偿付'])
  );
  if (insuranceItems.length === 0) {
    return { summary: '今日暂无专项保险资讯', talkingPoints: [] };
  }
  const templates = [
    { match: ['养老', '年金', '退休'], point: '养老金/年金市场动态，可用于退休规划客户的需求唤醒沟通', action: '整理目标客户名单，准备年金利益演示' },
    { match: ['健康险', '医疗', '重疾', '护理'], point: '健康险领域变化，适合作为客户保单年检中的风险缺口沟通素材', action: '梳理在售健康险产品矩阵，标记优势产品' },
    { match: ['利率', '降息', 'LPR', '定价', '费率'], point: '利率环境变动直接影响保险产品定价和客户购买决策', action: '测算利率变动对在售产品IRR/保额的影响' },
    { match: ['监管', '新规', '办法', '通知', '合规', '偿付能力'], point: '监管政策更新，需评估对产品设计、销售流程和客户沟通的合规影响', action: '研读新规要点，更新合规培训材料' },
    { match: ['保费', '业绩', '增长', '市场'], point: '保险行业经营数据发布，可作为与客户沟通时增强行业信心的素材', action: '摘取关键数据，制作简洁的行业趋势卡片' },
    { match: ['科技', '创新', '数字化', 'AI'], point: '保险科技/数字化转型进展，适合与高净值客户探讨行业前沿趋势', action: '整理科技赋能案例，丰富客户沟通深度' },
  ];
  const talkingPoints = insuranceItems.slice(0, 4).map(item => {
    const tpl = pickTemplate(templates, item);
    return {
      topic: (item.title || '').substring(0, 48),
      point: tpl.point,
      action: tpl.action,
    };
  });
  return {
    summary: `今日 ${insuranceItems.length} 条保险相关资讯，以下为规划师客户沟通参考`,
    talkingPoints,
  };
}

function generatePEAnalysis(items) {
  const peItems = items.filter(i =>
    hasText(i.title + ' ' + (i.summary || ''), ['基金', '私募', '资管', '证券', 'ETF', '债券', '理财', '信托', '仓位', '净值', '量化', '对冲', 'FOF'])
  );
  if (peItems.length === 0) {
    return { summary: '今日暂无专项私募/基金资讯', talkingPoints: [] };
  }
  const templates = [
    { match: ['监管', '合规', '新规', '备案', '托管', '募集'], point: '监管动态影响产品发行和运营流程，需同步更新合规手册', action: '梳理监管要点对现有产品的影响，准备合规简报' },
    { match: ['市场', '行情', '震荡', '波动', '回撤', '仓位'], point: '市场波动时期，需主动沟通投资策略和风控措施', action: '准备投资者沟通话术，强调风控纪律和长期视角' },
    { match: ['ETF', '指数', '量化', '策略'], point: '投资策略/工具创新，可作为投教内容和客户沟通差异化素材', action: '研究新策略逻辑，评估与现有产品线的互补性' },
    { match: ['业绩', '净值', '收益', '分红', '排名'], point: '基金/产品业绩数据，是投资人沟通和维护的重要参考', action: '整理同类产品对比，准备业绩归因分析' },
    { match: ['债券', '利率债', '信用债', '久期'], point: '债券市场变化影响固收类产品表现，需评估组合风险暴露', action: '更新固收策略展望，调整投资建议中的资产配置比例' },
    { match: ['资金', '发行', '募集', '规模'], point: '基金发行和资金流向反映市场情绪，影响渠道策略', action: '关注资金流向变化，调整渠道推广节奏和重点' },
  ];
  const talkingPoints = peItems.slice(0, 4).map(item => {
    const tpl = pickTemplate(templates, item);
    return {
      topic: (item.title || '').substring(0, 48),
      point: tpl.point,
      action: tpl.action,
    };
  });
  return {
    summary: `今日 ${peItems.length} 条基金/资管相关资讯，以下为运营参考`,
    talkingPoints,
  };
}

function generateMarketOutlook(items) {
  const macroItems = items.filter(i =>
    hasText(i.title + ' ' + (i.summary || ''), ['央行', '利率', '降准', '降息', 'LPR', 'MLF', 'GDP', 'CPI', 'PMI', '汇率', '人民币', '货币政策', '财政', '经济数据', '通胀', '出口', '消费', '投资', '房地产'])
  );
  if (macroItems.length === 0 && items.length === 0) {
    return { summary: '暂无数据，待明日更新', outlooks: [] };
  }
  if (macroItems.length === 0) {
    return {
      summary: '今日宏观政策类资讯较少，以下基于精选资讯的整体市场判断',
      outlooks: [{
        topic: '资讯概览',
        content: '今日资讯聚焦行业微观动态，宏观层面信号不多，建议结合近期政策主线做趋势判断',
      }],
    };
  }
  const outlooks = macroItems.slice(0, 4).map(item => {
    const text = `${item.title || ''} ${item.summary || ''}`;
    let content = '该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响';
    if (hasText(text, ['降准', '降息', 'LPR'])) {
      content = '货币政策宽松信号，流动性充裕预期利好债市和权益市场估值，关注进一步宽松空间';
    } else if (hasText(text, ['GDP', '经济', '增长', '复苏', 'PMI'])) {
      content = '宏观经济数据反映基本面修复节奏，是判断大类资产配置方向的底层参考';
    } else if (hasText(text, ['汇率', '人民币', '外汇'])) {
      content = '汇率波动影响跨境资本流动和出口导向型企业盈利，关注对相关持仓的影响';
    } else if (hasText(text, ['通胀', 'CPI', 'PPI'])) {
      content = '通胀数据影响货币政策节奏和实际利率水平，关注对债券久期策略的传导';
    } else if (hasText(text, ['房地产', '地产'])) {
      content = '房地产行业政策走向影响信用风险定价和银行资产质量，持续关注边际变化';
    } else if (hasText(text, ['财政', '专项债', '发债'])) {
      content = '财政政策发力影响基建投资和信用扩张节奏，关注配套政策的落地效果';
    }
    return { topic: (item.title || '').substring(0, 48), content };
  });
  return {
    summary: `今日 ${macroItems.length} 条宏观经济/政策相关资讯`,
    outlooks,
  };
}

// === Rule-based fallback: daily highlights ===
function generateDailyHighlights(items) {
  if (items.length === 0) return { highlights: ['暂无资讯数据'] };
  const sorted = [...items].sort((a, b) => (b.score || 0) - (a.score || 0));
  const highlights = sorted.slice(0, 4).map(item =>
    `[${item.score}] ${item.title} — ${(item.summary || '').substring(0, 60)}`
  );
  return { highlights };
}

// === Rule-based fallback: event chains ===
function generateEventChains(items) {
  if (items.length < 3) return { summary: '暂无足够数据进行关联分析', chains: [] };
  // Group by source, pick top-2 sources with most items
  const sourceCount = {};
  for (const i of items) {
    sourceCount[i.sourceName] = (sourceCount[i.sourceName] || 0) + 1;
  }
  const topSources = Object.entries(sourceCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([name]) => name);

  const chains = [];
  for (const src of topSources) {
    const srcItems = items.filter(i => i.sourceName === src).slice(0, 5);
    if (srcItems.length < 2) continue;
    chains.push({
      title: `${src}连续报道`,
      nodes: srcItems.map(i => i.title.substring(0, 40)),
      causalLink: '同一信源当日连续性报道，反映该领域密集动态',
    });
  }
  // Cross-source chain: regulatory or macro clustering
  const regulatoryItems = items.filter(i => i.category === 'regulatory').slice(0, 3);
  const macroItems = items.filter(i => i.category === 'industry' && hasText(i.title + ' ' + (i.summary || ''), ['央行', '降息', '利率', 'LPR', 'MLF', 'GDP', 'CPI'])).slice(0, 3);
  if (regulatoryItems.length >= 2) {
    chains.push({
      title: '监管政策密集发布',
      nodes: regulatoryItems.map(i => i.title.substring(0, 40)),
      causalLink: '多源同步报道监管动态，政策信号集中释放',
    });
  }
  if (macroItems.length >= 2) {
    chains.push({
      title: '宏观经济数据/政策跟踪',
      nodes: macroItems.map(i => i.title.substring(0, 40)),
      causalLink: '宏观基本面信号集中披露，市场关注度上升',
    });
  }
  return {
    summary: `基于 ${items.length} 条资讯自动识别 ${chains.length} 条事件链`,
    chains,
  };
}

// === Rule-based fallback: industry impact quadrants ===
function generateIndustryImpact(items) {
  const quadrants = {
    insurance: { level: 'none', summary: '暂无保险相关资讯', items: [] },
    pe: { level: 'none', summary: '暂无私募/基金相关资讯', items: [] },
    banking: { level: 'none', summary: '暂无银行/利率相关资讯', items: [] },
    trust: { level: 'none', summary: '暂无信托/财富管理相关资讯', items: [] },
  };

  // Insurance
  const insItems = items.filter(i => hasText(i.title + ' ' + (i.summary || ''), ['保险', '险企', '保费', '养老', '年金', '寿险', '健康险', '偿付能力']));
  if (insItems.length > 0) {
    const maxScore = Math.max(...insItems.map(i => i.score || 0));
    quadrants.insurance = {
      level: insItems.length >= 5 ? 'high' : insItems.length >= 2 ? 'medium' : 'low',
      summary: `${insItems.length} 条保险相关资讯`,
      items: insItems.slice(0, 3).map(i => ({
        title: (i.title || '').substring(0, 48),
        impact: hasText(i.title + ' ' + (i.summary || ''), ['监管', '新规', '处罚', '偿付能力']) ? '监管层面影响，需评估合规应对' : '行业动态，适合客户沟通素材',
        suggestion: i.score >= 80 ? '重点关注，纳入今日客户沟通议题' : '持续跟踪，视客户情况选择性沟通',
      })),
    };
  }

  // PE / Fund
  const peItems = items.filter(i => hasText(i.title + ' ' + (i.summary || ''), ['基金', '私募', '资管', '证券', 'ETF', '债券', '量化', '对冲', 'FOF']));
  if (peItems.length > 0) {
    quadrants.pe = {
      level: peItems.length >= 5 ? 'high' : peItems.length >= 2 ? 'medium' : 'low',
      summary: `${peItems.length} 条基金/资管相关资讯`,
      items: peItems.slice(0, 3).map(i => ({
        title: (i.title || '').substring(0, 48),
        impact: hasText(i.title + ' ' + (i.summary || ''), ['监管', '合规', '备案']) ? '监管合规层面影响，需更新运营流程' : hasText(i.title + ' ' + (i.summary || ''), ['市场', '行情', '波动', '收益', '净值']) ? '市场表现影响，可用于投资人沟通' : '行业生态变化，关注中长期趋势',
        suggestion: i.score >= 80 ? '优先阅读原文，评估影响范围' : '简要了解，视情况纳入周报',
      })),
    };
  }

  // Banking
  const bankItems = items.filter(i => hasText(i.title + ' ' + (i.summary || ''), ['银行', '央行', '利率', '降准', '降息', 'LPR', 'MLF', '流动性']));
  if (bankItems.length > 0) {
    quadrants.banking = {
      level: bankItems.length >= 4 ? 'high' : bankItems.length >= 2 ? 'medium' : 'low',
      summary: `${bankItems.length} 条银行/货币政策相关资讯`,
      items: bankItems.slice(0, 3).map(i => ({
        title: (i.title || '').substring(0, 48),
        impact: hasText(i.title + ' ' + (i.summary || ''), ['降息', '降准', 'LPR']) ? '货币政策信号，影响资产定价和配置策略' : '银行经营动态，关注对信用风险的传导',
        suggestion: hasText(i.title + ' ' + (i.summary || ''), ['降息', '降准']) ? '评估利率变动对固收类产品的影响，及时调整建议' : '持续跟踪，关注对行业整体信用环境的边际影响',
      })),
    };
  }

  // Trust / Wealth
  const trustItems = items.filter(i => hasText(i.title + ' ' + (i.summary || ''), ['信托', '家族信托', '财富管理', '资产配置', '资管', 'FOF']));
  if (trustItems.length > 0) {
    quadrants.trust = {
      level: trustItems.length >= 3 ? 'high' : trustItems.length >= 1 ? 'medium' : 'low',
      summary: `${trustItems.length} 条信托/财富管理相关资讯`,
      items: trustItems.slice(0, 3).map(i => ({
        title: (i.title || '').substring(0, 48),
        impact: hasText(i.title + ' ' + (i.summary || ''), ['监管', '新规', '办法']) ? '监管政策调整，需重新评估合规方案' : '行业发展动态，关注业务机会',
        suggestion: '视相关内容与自身业务关联度决定优先级',
      })),
    };
  }

  return { quadrants };
}

// === Rule-based fallback: weekly trends ===
function generateWeeklyTrends(items) {
  if (items.length === 0) return { summary: '暂无数据', trends: [] };

  // Category distribution
  const catCount = {};
  for (const i of items) { catCount[i.category] = (catCount[i.category] || 0) + 1; }

  // Keyword frequency across all items
  const keywordHits = {};
  const TREND_KEYWORDS = {
    regulatory: ['监管', '处罚', '新规', '合规', '整顿', '通知'],
    monetary: ['降息', '降准', 'LPR', 'MLF', '利率', '央行', '流动性'],
    insurance: ['保险', '险企', '保费', '养老', '年金', '健康险', '偿付能力'],
    market: ['市场', '股市', 'A股', '行情', '震荡', '波动', '上涨', '下跌'],
    realestate: ['房地产', '地产', '楼市', '住房', '限购'],
  };
  for (const [topic, keywords] of Object.entries(TREND_KEYWORDS)) {
    let count = 0;
    for (const i of items) {
      if (hasText(i.title + ' ' + (i.summary || ''), keywords)) count++;
    }
    if (count > 0) keywordHits[topic] = count;
  }

  // Build trend items
  const trends = [];

  // Category-based trend
  if (catCount.regulatory && catCount.regulatory >= 3) {
    trends.push({
      topic: '监管政策密集度上升',
      direction: '上升',
      evidence: `今日 ${catCount.regulatory} 条监管类资讯，监管层信号集中释放，关注政策落地节奏`,
    });
  }
  if (catCount.industry && catCount.industry >= 6) {
    trends.push({
      topic: '行业动态活跃',
      direction: '平稳',
      evidence: `今日 ${catCount.industry} 条行业动态资讯，行业层面信息充分，涉及多家机构/产品`,
    });
  }

  // Keyword-based trends
  if (keywordHits.monetary && keywordHits.monetary >= 2) {
    trends.push({
      topic: '货币政策信号',
      direction: keywordHits.monetary >= 4 ? '上升' : '平稳',
      evidence: `出现 ${keywordHits.monetary} 次货币政策相关关键词，关注利率/流动性走向`,
    });
  }
  if (keywordHits.insurance && keywordHits.insurance >= 3) {
    trends.push({
      topic: '保险行业关注度',
      direction: keywordHits.insurance >= 6 ? '上升' : '平稳',
      evidence: `出现 ${keywordHits.insurance} 条保险相关资讯，覆盖监管/市场/产品多维度`,
    });
  }
  if (keywordHits.market && keywordHits.market >= 4) {
    trends.push({
      topic: '市场行情波动',
      direction: '上升',
      evidence: `出现 ${keywordHits.market} 条市场行情相关资讯，市场关注度提升`,
    });
  }
  if (keywordHits.realestate && keywordHits.realestate >= 2) {
    trends.push({
      topic: '房地产政策动向',
      direction: '平稳',
      evidence: `出现 ${keywordHits.realestate} 条地产相关资讯，政策边际变化值得关注`,
    });
  }

  // Source diversity trend
  const uniqueSources = new Set(items.map(i => i.sourceName)).size;
  if (uniqueSources >= 5) {
    trends.push({
      topic: '信源覆盖度',
      direction: '平稳',
      evidence: `覆盖 ${uniqueSources} 个信源，信息维度较全面`,
    });
  }

  return {
    summary: `今日 ${items.length} 条资讯，覆盖 ${Object.keys(catCount).length} 个分类、${uniqueSources} 个信源`,
    trends: trends.length > 0 ? trends.slice(0, 5) : [{ topic: '资讯结构稳定', direction: '平稳', evidence: '今日资讯未形成明显趋势信号，建议结合多日数据做趋势判断' }],
  };
}

function generateAIAnalysis(items) {
  return {
    dailySummary: generateDailyHighlights(items),
    eventChain: generateEventChains(items),
    industryImpact: generateIndustryImpact(items),
    weeklyTrends: generateWeeklyTrends(items),
    insurancePlanner: generateInsuranceAnalysis(items),
    peOperations: generatePEAnalysis(items),
    marketOutlook: generateMarketOutlook(items),
  };
}

// === Main ===
async function main() {
  const existing = loadExisting();
  const cutoff = Date.now() - MAX_AGE_DAYS * 86400000;

  let newItems = [];
  for (const src of SOURCES) {
    console.error(`[fetching] ${src.sourceName}...`);
    const items = src.directUrl ? await fetchDirectRSS(src.directUrl) : await fetchRSS(src.route);
    let added = 0;
    for (const item of items) {
      if (!item.sourceUrl || existing.existingUrls.has(item.sourceUrl)) continue;
      // Title dedup: check normalized title prefix
      const titleHash = normalizeTitle(item.title);
      if (titleHash.length >= 6 && existing.titleSet.has(titleHash)) continue;
      // Age check: skip items older than MAX_AGE_DAYS (applies to all sources, not just cache)
      if (new Date(item.publishedAt).getTime() < cutoff) continue;
      if (!isFinanceRelated(item)) continue;
      if (isLowQuality(item)) continue;
      // Set source metadata before source-specific filters
      item.sourceName = src.sourceName;
      if (isSourceNoise(item)) continue;
      item.category = src.category;
      item.tags = [CATEGORY_TAGS[src.category]];
      item.evidenceType = src.evidenceType;
      item.discoveredVia = src.directUrl ? 'Investing.com' : 'RSSHub';
      item.id = '';
      enrichItem(item);
      newItems.push(item);
      existing.existingUrls.add(item.sourceUrl);
      existing.titleSet.add(titleHash);
      added++;
    }
    console.error(`  +${added} new (${items.length - added} skipped as dup/filtered)`);
  }
  // Merge new + existing, filtering out source-specific noise from cache
  const allItems = [
    ...newItems,
    ...existing.items.filter(i => {
      if (new Date(i.publishedAt).getTime() <= cutoff) return false;
      if (isSourceNoise(i)) return false;
      return true;
    }),
  ].slice(0, MAX_ITEMS);

  allItems.sort((a, b) => {
    const ta = new Date(a.publishedAt).getTime() || 0;
    const tb = new Date(b.publishedAt).getTime() || 0;
    return tb - ta;
  });

  allItems.forEach(enrichItem);
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
    keywordIndex: buildKeywordIndex(allItems),
    aiAnalysis: await generateAIAnalysisWithFallback(allItems),
  };

  console.error(`\n[done] +${newItems.length} new, total ${allItems.length}`);

  console.log(`// finhot auto-generated data - powered by RSSHub + financial sources`);
  console.log(`// Generated: ${now.toISOString()}`);
  console.log(`// Practitioner value scoring: relevance(25) + authority(20) + impact(20) + recency(15) + depth(10) + actionability(10)\n`);
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
  // Extract keywordIndex for convenient global access
  console.log(`window.KEYWORD_INDEX = ${JSON.stringify(output.keywordIndex, null, 2)};`);
}

main().catch(e => { console.error(e); process.exit(1); });
