'use strict';

// === 慧保天下数据源 ===
// 保险垂直新媒体，覆盖政策解读、公司动态、行业动态、人物、互联网+
// 直接抓取官网 HTML，无反爬，结构规律
//
// 列表页：http://www.huibaoxian.com.cn//htm/{cat}/list_6_{page}.html
// 详情页：http://www.huibaoxian.com.cn//htm/{cat}/YYYYMMDD/{id}.html
// 栏目：kb(行业动态) yc(政策解读) pc(公司动态) cj(人物) qc(互联网+)

const https = require('https');
const http = require('http');
const { canonicalizeUrl } = require('./analysis');
const { normalizePublishedAt, normalizeTitle } = require('./core');
const { buildSourceHealth, sanitizeError } = require('./health');

const BASE_URL = 'http://www.huibaoxian.com.cn';
const REQUEST_TIMEOUT_MS = 15000;
const MAX_RETRIES = 2;
const MAX_ITEMS_PER_CATEGORY = 12; // 每栏目最多收录条数
const MAX_PAGES_PER_CATEGORY = 2;  // 每栏目最多抓几页

const CATEGORIES = [
  { code: 'kb', name: '行业动态', mapped: 'industry' },
  { code: 'yc', name: '政策解读', mapped: 'regulatory' },
  { code: 'pc', name: '公司动态', mapped: 'industry' },
  { code: 'cj', name: '人物',     mapped: 'insights' },
  { code: 'qc', name: '互联网+',  mapped: 'insights' },
];

/** 标题级营销/广告过滤关键词 */
const AD_TITLE_PATTERNS = [
  /扫码[领取关注]/,
  /限时.*抢购/,
  /免费领取/,
  /福利.*送/,
  /点击.*领取/,
  /文末.*入口/,
  /预约.*咨询/,
  /立即.*购买/,
  /爆款.*推荐/,
  /抄作业/,
  /闭眼入/,
  /薅羊毛/,
  /必买.*\d+款/,
  /这本.*工具书.*告诉你答案/,  // 图书推广
  /这本.*不可多得.*书/,         // 图书推广
  /必读.*推荐.*书/,             // 课程/图书推广
  /扫描.*二维码/,               // 引流
];

function isAdByTitle(title) {
  if (!title) return false;
  const t = title.toLowerCase();
  return AD_TITLE_PATTERNS.some(p => p.test(t));
}

function fetchText(url, retries = MAX_RETRIES) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https:') ? https : http;
    const req = client.get(url, { timeout: REQUEST_TIMEOUT_MS }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchText(res.headers.location, retries).then(resolve, reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => resolve(data));
    });
    req.on('error', (err) => {
      if (retries > 0) {
        setTimeout(() => fetchText(url, retries - 1).then(resolve, reject), 1000);
      } else {
        reject(err);
      }
    });
    req.on('timeout', () => {
      req.destroy();
      if (retries > 0) {
        setTimeout(() => fetchText(url, retries - 1).then(resolve, reject), 1000);
      } else {
        reject(new Error('timeout'));
      }
    });
  });
}

/** 从列表页 HTML 提取文章条目 */
function parseListPage(html, categoryCode) {
  const items = [];
  // 匹配 <dl> ... </dl> 块
  const dlRegex = /<dl[\s\S]*?<\/dl>/gi;
  let dlMatch;
  while ((dlMatch = dlRegex.exec(html)) !== null) {
    const block = dlMatch[0];
    // 提取标题链接（先去掉 <b> 标签简化匹配）
    const simplifiedBlock = block.replace(/<b>/gi, '').replace(/<\/b>/gi, '');
    const linkMatch = simplifiedBlock.match(/<h3>.*?<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/i);
    if (!linkMatch) continue;
    let link = linkMatch[1];
    const title = linkMatch[2].trim();
    if (!title || isAdByTitle(title)) continue;

    // 补全链接
    if (link.startsWith('//')) link = 'http:' + link;
    else if (link.startsWith('/')) link = BASE_URL + link;
    else if (!link.startsWith('http')) link = BASE_URL + '/' + link;

    // 提取日期（从链接路径解析）
    const dateMatch = link.match(/\/htm\/[a-z]+\/(\d{4})(\d{2})(\d{2})\//);
    const dateStr = dateMatch ? `${dateMatch[1]}-${dateMatch[2]}-${dateMatch[3]}` : '';

    // 提取摘要
    const summaryMatch = block.match(/<dd[\s\S]*?<p>([\s\S]*?)<\/p>/i);
    const summary = summaryMatch ? stripHtml(summaryMatch[1]).trim() : '';

    items.push({ link, title, dateStr, summary, categoryCode });
  }
  return items;
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

/** 从详情页 HTML 提取正文 */
function parseArticlePage(html) {
  // 标题（备用）
  const titleMatch = html.match(/<div\s+class="hl_c_title"[\s\S]*?<h2>([\s\S]*?)<\/h2>/i);
  const title = titleMatch ? stripHtml(titleMatch[1].replace(/<i[^>]*>[\s\S]*?<\/i>/gi, '')).trim() : '';

  // 发布时间
  const timeMatch = html.match(/<div\s+class="hl_c_twid"[\s\S]*?(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2})/);
  const publishedAt = timeMatch ? timeMatch[1] : '';

  // 导语/摘要
  const summaryMatch = html.match(/<div\s+class="hl_c_wcid"[\s\S]*?>([\s\S]*?)<\/div>/i);
  const summary = summaryMatch ? stripHtml(summaryMatch[1]).trim() : '';

  // 正文
  const bodyMatch = html.match(/<div\s+class="hl_body"[\s\S]*?>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div\s+class="content_right"/i);
  let content = '';
  if (bodyMatch) {
    content = stripHtml(bodyMatch[1]);
  } else {
    // 降级：直接找 hl_body
    const fallback = html.match(/<div\s+class="hl_body"[\s\S]*?>([\s\S]*?)<\/div>/i);
    if (fallback) content = stripHtml(fallback[1]);
  }

  return { title, publishedAt, summary, content };
}

async function fetchCategory(cat, maxItems, maxPages) {
  const results = [];
  let page = 1;
  let consecutiveEmpty = 0;

  while (results.length < maxItems && page <= maxPages && consecutiveEmpty < 2) {
    const listUrl = page === 1
      ? `${BASE_URL}/htm/${cat.code}/`
      : `${BASE_URL}/htm/${cat.code}/list_6_${page}.html`;

    try {
      const html = await fetchText(listUrl);
      const entries = parseListPage(html, cat.code);
      if (entries.length === 0) {
        consecutiveEmpty++;
      } else {
        consecutiveEmpty = 0;
        for (const entry of entries) {
          if (results.length >= maxItems) break;
          try {
            const detail = await fetchText(entry.link);
            const parsed = parseArticlePage(detail);
            const publishedAt = parsed.publishedAt || entry.dateStr;
            const normDate = normalizePublishedAt(publishedAt ? new Date(publishedAt) : new Date());

            results.push({
              id: `huibaoxian_${entry.link.match(/(\d+)\.html$/)?.[1] || Math.random().toString(36).slice(2)}`,
              title: normalizeTitle(parsed.title || entry.title),
              link: canonicalizeUrl(entry.link),
              publishedAt: normDate,
              sourceName: '慧保天下',
              category: cat.mapped,
              tier: 'S2',
              evidenceType: 'financial_media',
              excerpt: (parsed.summary || entry.summary || parsed.content || '').slice(0, 280),
              contentTags: [],
              scoreDetails: {},
              score: 0,
              original: { huibaoxianCategory: cat.name },
            });
          } catch (detailErr) {
            // 详情页失败不阻塞，用列表页信息兜底
            results.push({
              id: `huibaoxian_${entry.link.match(/(\d+)\.html$/)?.[1] || Math.random().toString(36).slice(2)}`,
              title: normalizeTitle(entry.title),
              link: canonicalizeUrl(entry.link),
              publishedAt: normalizePublishedAt(entry.dateStr ? new Date(entry.dateStr) : new Date()),
              sourceName: '慧保天下',
              category: cat.mapped,
              tier: 'S2',
              evidenceType: 'financial_media',
              excerpt: entry.summary.slice(0, 280),
              contentTags: [],
              scoreDetails: {},
              score: 0,
              original: { huibaoxianCategory: cat.name, detailError: sanitizeError(detailErr) },
            });
          }
        }
      }
    } catch (err) {
      consecutiveEmpty++;
    }
    page++;
  }

  return results;
}

async function fetchHuibaoxian(options = {}) {
  const maxItems = options.maxItemsPerCategory || MAX_ITEMS_PER_CATEGORY;
  const maxPages = options.maxPagesPerCategory || MAX_PAGES_PER_CATEGORY;
  const allItems = [];
  const errors = [];

  for (const cat of CATEGORIES) {
    try {
      const items = await fetchCategory(cat, maxItems, maxPages);
      allItems.push(...items);
    } catch (err) {
      errors.push(sanitizeError(err));
    }
  }

  // 去重
  const seen = new Set();
  const unique = [];
  for (const item of allItems) {
    if (!seen.has(item.link)) {
      seen.add(item.link);
      unique.push(item);
    }
  }

  const health = buildSourceHealth(
    { sourceName: '慧保天下', tier: 'S2', category: 'industry', transport: 'scraper' },
    {
      items: unique,
      rawItemCount: allItems.length,
      acceptedItemCount: unique.length,
      success: errors.length === 0,
      errorSummary: errors.join('; '),
    }
  );
  return { items: unique, health };
}

module.exports = {
  fetchHuibaoxian,
  AD_TITLE_PATTERNS,
  isAdByTitle,
  parseListPage,
  parseArticlePage,
};
