#!/usr/bin/env node
// finhot-web Macro Indicator Refresh
// Refreshes auto indicators from official/free public endpoints and keeps
// manually verified values for indicators without a reliable public API.
// HARD RULES:
// - Never invent data. A failed or out-of-range refresh keeps the last value.
// - Refresh failures never throw and never block the data pipeline.
// Usage: node scripts/macro.js

'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');

const MACRO_FILE = path.resolve(__dirname, '..', 'data', 'macro.json');
const FETCH_TIMEOUT = 15000;
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

function httpGet(url, timeout) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: timeout || FETCH_TIMEOUT, headers: { 'User-Agent': UA } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        res.resume();
        const next = new URL(res.headers.location, url).toString();
        resolve(httpGet(next, timeout));
        return;
      }
      if (res.statusCode !== 200) {
        res.resume();
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
    req.on('timeout', () => req.destroy(new Error(`timeout for ${url}`)));
    req.on('error', reject);
  });
}

async function getJson(url) {
  return JSON.parse(await httpGet(url));
}

// 第二条取数通道：基于内置 fetch（undici）。
// 实测上金所对 Node 原生 https 的握手会直接 reset（curl 与 fetch 均正常）。
// 老的指标继续走 httpGet —— 它们已稳定运行，不动；需要 fetch 的走这条。
async function fetchText(url, timeout) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA },
    signal: AbortSignal.timeout(timeout || FETCH_TIMEOUT * 2),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

async function fetchJson(url, timeout) {
  return JSON.parse(await fetchText(url, timeout));
}

function inRange(value, min, max) {
  return Number.isFinite(value) && value >= min && value <= max;
}

// === Series extraction ===
// The board only ever showed a current value plus one comparison point, so a
// KPI had nothing to draw when opened. These helpers pull a short daily series
// out of the same responses the refreshers already fetch, in chronological order.
//
// Two hard rules, because a chart silently implies every point is real:
//   1. a missing observation is dropped, never interpolated or carried forward;
//   2. the caller caps the length, so a source that suddenly returns years of
//      history cannot bloat macro.json.
const SERIES_LIMIT = 7;

function tailOf(list, limit) {
  const cap = Number.isFinite(limit) && limit > 0 ? limit : SERIES_LIMIT;
  return list.slice(-cap);
}

// Eastmoney kline: `data.klines` is ["YYYY-MM-DD,price", ...] oldest first.
// 说明：曾用它做国内金价（secid=113.aum 沪金主连），但该域名在部分网络下会直接
// 断开 Node 的连接（curl 正常），最终改用上金所官网。保留这段说明以免后来者重复试。


function directionOf(next, prev, tolerance) {
  if (!Number.isFinite(prev)) return 'flat';
  const tol = Number.isFinite(tolerance) ? tolerance : 0.0001;
  if (next > prev + tol) return 'up';
  if (next < prev - tol) return 'down';
  return 'flat';
}

// === Comparison baseline ===
// The board reads "较8月15日 $4,388 下降". That sentence is only honest when the
// referenced observation is real and recent, so a comparison is built from:
//   1. the refresher's own payload, when upstream already carries the prior
//      observation (LPR history rows, treasury CSV rows);
//   2. the observation rotated in from the previous run and persisted in macro.json.
// A baseline older than the indicator window is dropped outright rather than
// reworded, so the note can never imply a freshness the data does not have.
const DEFAULT_BASELINE_WINDOW_DAYS = 30;
// LPR is published monthly, so its natural gap is 30-31 days and a 30-day cap
// would blank every comparison.
const MONTHLY_BASELINE_WINDOW_DAYS = 35;

function daysBetween(fromIso, toIso) {
  const from = Date.parse(`${fromIso}T00:00:00Z`);
  const to = Date.parse(`${toIso}T00:00:00Z`);
  if (Number.isNaN(from) || Number.isNaN(to)) return null;
  return Math.round((to - from) / 86400000);
}

function formatCnDate(iso, referenceIso) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
  if (!match) return '';
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const refYear = /^\d{4}/.test(referenceIso || '') ? Number(referenceIso.substring(0, 4)) : year;
  return year === refYear ? `${month}月${day}日` : `${year}年${month}月${day}日`;
}

function isoDate(date) {
  return date instanceof Date && !Number.isNaN(date.getTime())
    ? date.toISOString().substring(0, 10)
    : null;
}

function clearBaseline(indicator) {
  delete indicator.prevValue;
  delete indicator.prevNumericValue;
  delete indicator.prevAsOf;
}

function resolveBaseline(indicator, previous, formatValue) {
  // A source-provided prior observation is the freshest honest comparison.
  if (previous && Number.isFinite(previous.value)) {
    return {
      value: previous.value,
      label: formatValue(previous.value),
      asOf: previous.asOf || null,
    };
  }
  if (Number.isFinite(indicator.prevNumericValue) && indicator.prevAsOf) {
    return {
      value: indicator.prevNumericValue,
      label: indicator.prevValue || formatValue(indicator.prevNumericValue),
      asOf: indicator.prevAsOf,
    };
  }
  return null;
}

function comparisonText(baseline, direction, nextAsOf) {
  // The quoted figure always belongs to the baseline, so a flat month keeps it
  // too: "较7月20日 3.00% 持平" says what the current value is level with.
  const prefix = baseline.asOf
    ? `较${formatCnDate(baseline.asOf, nextAsOf)} ${baseline.label}`
    : `较前期 ${baseline.label}`;
  if (direction === 'up') return `${prefix} 上升`;
  if (direction === 'down') return `${prefix} 下降`;
  return `${prefix} 持平`;
}

function applyRefresh(indicator, next, formatValue, options) {
  const opts = options || {};
  const currentNumeric = Number.isFinite(indicator.numericValue) ? indicator.numericValue : null;
  const currentValue = indicator.value || null;
  const currentAsOf = indicator.asOf || null;
  const nextAsOf = opts.asOf || currentAsOf || isoDate(opts.now);

  // Rotate the baseline forward only when the observation date actually advances,
  // so a re-run on a non-trading day cannot erase an existing comparison.
  const advanced = Boolean(nextAsOf && currentAsOf && nextAsOf > currentAsOf);
  if (advanced && currentNumeric !== null && currentAsOf) {
    indicator.prevValue = currentValue;
    indicator.prevNumericValue = currentNumeric;
    indicator.prevAsOf = currentAsOf;
  }

  const windowDays = Number.isFinite(opts.baselineWindowDays)
    ? opts.baselineWindowDays
    : DEFAULT_BASELINE_WINDOW_DAYS;

  // Validate the baseline before deriving the direction, so the arrow and the
  // quoted figure always describe the same two observations.
  let baseline = resolveBaseline(indicator, opts.previous, formatValue);
  let baselineExpired = false;
  if (baseline && baseline.asOf) {
    const span = daysBetween(baseline.asOf, nextAsOf);
    if (span !== null && (span < 0 || span > windowDays)) {
      clearBaseline(indicator);
      baseline = null;
      baselineExpired = true;
    }
  }

  const direction = baseline ? directionOf(next, baseline.value, opts.tolerance) : 'flat';

  indicator.value = formatValue(next);
  indicator.numericValue = next;
  indicator.asOf = nextAsOf;
  indicator.direction = direction;
  // 序列只在本次真的抓到历史时覆盖；抓取失败的指标走不到这里，
  // 因此旧序列不会被失败的一轮抹掉。少于 2 点画不出线，宁可不写。
  if (Array.isArray(opts.series) && opts.series.length >= 2) {
    indicator.series = opts.series
      .filter(point => point && /^\d{4}-\d{2}-\d{2}$/.test(point.date || '') && Number.isFinite(point.value))
      .map(point => ({ date: point.date, value: point.value }));
  }
  if (baseline) {
    // Persist whichever baseline won, so an upstream gap on the next run can
    // still fall back to the last known observation instead of losing the comparison.
    indicator.prevValue = baseline.label;
    indicator.prevNumericValue = baseline.value;
    indicator.prevAsOf = baseline.asOf;
    indicator.note = comparisonText(baseline, direction, nextAsOf);
  } else if (baselineExpired) {
    // Kept short so it stays readable inside a single-line KPI card.
    indicator.note = `对比基准已超${windowDays}天`;
  } else {
    indicator.note = '首次采集，暂无对比';
  }
  return currentNumeric !== next;
}

function formatPercent(value) {
  return `${value.toFixed(2)}%`;
}

function formatFx(value) {
  return value.toFixed(4);
}

function formatGold(value) {
  return `$${Math.round(value).toLocaleString('en-US')}`;
}

// 国内金价按克计价，留两位。
function formatCnGold(value) {
  return `¥${value.toFixed(2)}`;
}

// === Refreshers: one per auto indicator group. Each returns { key: { value, asOf } }. ===

async function refreshLpr(deps) {
  const end = deps.now;
  const start = new Date(end.getTime() - 75 * 86400000);
  const fmt = d => d.toISOString().substring(0, 10);
  const url = 'https://www.chinamoney.com.cn/ags/ms/cm-u-bk-currency/LprHis'
    + `?lang=CN&strStartDate=${fmt(start)}&strEndDate=${fmt(end)}`;
  const json = await deps.getJson(url);
  const records = json && Array.isArray(json.records) ? json.records : [];
  if (records.length === 0) throw new Error('LPR records empty');
  const pick = record => (/^\d{4}-\d{2}-\d{2}$/.test(record.showDateCN || '') ? record.showDateCN : null);
  const latest = records[0];
  const prior = records[1] || null;
  const y1 = parseFloat(latest['1Y']);
  const y5 = parseFloat(latest['5Y']);
  if (!inRange(y1, 0.5, 10) || !inRange(y5, 0.5, 10)) throw new Error(`LPR out of range: ${latest['1Y']}/${latest['5Y']}`);
  const previousOf = field => {
    if (!prior) return null;
    const value = parseFloat(prior[field]);
    return Number.isFinite(value) ? { value, asOf: pick(prior) } : null;
  };
  return {
    lpr1y: { value: y1, asOf: pick(latest), previous: previousOf('1Y') },
    lpr5y: { value: y5, asOf: pick(latest), previous: previousOf('5Y') },
  };
}

async function refreshUs10y(deps) {
  const year = deps.now.getUTCFullYear();
  const csvUrl = 'https://home.treasury.gov/resource-center/data-chart-center/interest-rates/'
    + `daily-treasury-rates.csv/${year}/all?type=daily_treasury_yield_curve&field_tdr_date_value=${year}&page&_format=csv`;
  const csv = await deps.getText(csvUrl);
  const lines = csv.split(/\r?\n/).filter(line => line.trim());
  if (lines.length < 2) throw new Error('treasury csv empty');
  const header = lines[0].split(',').map(cell => cell.replace(/"/g, '').trim());
  const idx = header.findIndex(cell => /^10\s*Yr/i.test(cell));
  if (idx === -1) throw new Error('treasury csv missing 10 Yr column');
  const readRow = line => {
    const cells = line.split(',');
    const value = parseFloat(cells[idx]);
    const dateMatch = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec((cells[0] || '').trim());
    return {
      value,
      asOf: dateMatch ? `${dateMatch[3]}-${dateMatch[1]}-${dateMatch[2]}` : null,
    };
  };
  const latest = readRow(lines[1]);
  if (!inRange(latest.value, 0, 15)) throw new Error(`US10Y out of range: ${lines[1]}`);
  const prior = lines[2] ? readRow(lines[2]) : null;
  const previous = prior && Number.isFinite(prior.value) ? { value: prior.value, asOf: prior.asOf } : null;
  // Treasury CSV 是新日期在前，取够条数后翻转成时间正序，图上才不会左右倒置。
  const series = [];
  for (let i = 1; i < lines.length && series.length < SERIES_LIMIT; i++) {
    const row = readRow(lines[i]);
    if (Number.isFinite(row.value) && row.asOf) series.push({ date: row.asOf, value: row.value });
  }
  series.reverse();
  return { us10y: { value: latest.value, asOf: latest.asOf, series, previous } };
}

async function refreshUsdCny(deps) {
  const end = deps.now;
  const start = new Date(end.getTime() - 10 * 86400000);
  const fmt = d => d.toISOString().substring(0, 10);
  const url = `https://api.frankfurter.dev/v1/${fmt(start)}..${fmt(end)}?base=USD&symbols=CNY`;
  const json = await deps.getJson(url);
  const rates = json && json.rates ? json.rates : null;
  if (!rates) throw new Error('frankfurter series empty');
  const dates = Object.keys(rates).sort();
  if (dates.length === 0) throw new Error('frankfurter series has no observations');
  const latestDate = dates[dates.length - 1];
  const value = parseFloat(rates[latestDate].CNY);
  if (!inRange(value, 5, 10)) throw new Error(`USD/CNY out of range: ${value}`);
  const priorDate = dates.length >= 2 ? dates[dates.length - 2] : null;
  const priorValue = priorDate ? parseFloat(rates[priorDate].CNY) : NaN;
  const previous = Number.isFinite(priorValue) ? { value: priorValue, asOf: priorDate } : null;
  // frankfurter 本来就返回区间内每一天，之前只取了最后两天，历史白扔了。
  const series = dates
    .map(date => ({ date, value: parseFloat(rates[date] && rates[date].CNY) }))
    .filter(point => /^\d{4}-\d{2}-\d{2}$/.test(point.date) && Number.isFinite(point.value));
  return { usdcny: { value, asOf: latestDate, series: tailOf(series, SERIES_LIMIT), previous } };
}

async function refreshGold(deps) {
  const json = await deps.getJson('https://api.gold-api.com/price/XAU');
  const value = json ? parseFloat(json.price) : NaN;
  if (!inRange(value, 500, 10000)) throw new Error(`gold out of range: ${value}`);
  const asOf = typeof json.updatedAt === 'string' && /^\d{4}-\d{2}-\d{2}/.test(json.updatedAt)
    ? json.updatedAt.substring(0, 10)
    : undefined;
  return { gold: { value, asOf } };
}

// 国际油价：暂不上线。
// 曾用 FRED 的 DCOILBRENTEU（EIA 数据，无需 key，带完整历史），但发布滞后
// 3-5 个交易日 —— 实测 10/27 拿到的最新一点仍是 10/20（115.22），而当日实时
// 布伦特已是 109.90。作为「参考看板」，展示一周前的油价会误导决策，故移除。
//
// 若将来要恢复，注意取舍：
//   - 腾讯 qt.gtimg.cn/q=hf_OIL 有实时价（含 13:57 级别的盘中更新），但只给快照，
//     K 线接口对期货不接受常规 param 形式，拿不到历史；
//     没有历史的卡片刻意不可点，序列要靠每轮采集自存累积。
//   - 东财 push2his 的 secid=113.aum 一类接口在部分网络下会直接断开 Node 连接，
//     本地不可测，不宜作为唯一来源。

// 国内金价：上海黄金交易所 Au99.99 日行情，单位元/克，取收盘价。
// 与已有的 `gold`（现货黄金，美元/盎司）是两套口径，不能互相换算充数。
// 用上金所官网而不是聚合站：口径最正，且一次请求带回全部历史。
//
// 字段顺序 `[日期, 开盘, 收盘, 最低, 最高]` 是实测反推的，不是文档写死的：
// 官方页面只给了「开盘/收盘/最高/最低」的列名，JSON 里没有字段标识。
// 判定方法是拿同日的上期所黄金主力收盘价做基差 —— index 2 的基差稳定在
// ±2.3 元（7 个交易日），index 1 的基差在 -7.8~+10.1 元之间乱跳，差 6 倍。
// 下面仍保留「收盘价必须落在最低与最高之间」的校验，接口若改版会直接丢点而不是画错线。
const SGE_CNGOLD_URL = 'https://www.sge.com.cn/graph/Dailyhq?instid=Au99.99';

function parseSgeDaily(json, limit) {
  const rows = json && Array.isArray(json.time) ? json.time : [];
  const out = [];
  rows.forEach(row => {
    if (!Array.isArray(row) || row.length < 5) return;
    const date = String(row[0] || '').trim();
    const close = parseFloat(row[2]);
    const low = parseFloat(row[3]);
    const high = parseFloat(row[4]);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(close)) return;
    // 区间校验：收盘价必须落在当日最低与最高之间，否则说明列序变了，丢弃该点。
    if (Number.isFinite(low) && Number.isFinite(high) && (close < low || close > high)) return;
    out.push({ date, value: close });
  });
  return tailOf(out, limit);
}

async function refreshCnGold(deps) {
  const getJson2 = deps && typeof deps.fetchJson === 'function' ? deps.fetchJson : fetchJson;
  const json = await getJson2(SGE_CNGOLD_URL);
  const series = parseSgeDaily(json, SERIES_LIMIT);
  if (series.length === 0) throw new Error('cn gold series empty');
  const latest = series[series.length - 1];
  if (!inRange(latest.value, 200, 3000)) throw new Error(`cn gold out of range: ${latest.value}`);
  const prior = series.length >= 2 ? series[series.length - 2] : null;
  return {
    cngold: {
      value: latest.value,
      asOf: latest.date,
      series,
      previous: prior ? { value: prior.value, asOf: prior.date } : null,
    },
  };
}

const AUTO_REFRESHERS = [
  { keys: ['lpr1y', 'lpr5y'], run: refreshLpr, format: formatPercent, tolerance: 0.005, baselineWindowDays: MONTHLY_BASELINE_WINDOW_DAYS },
  { keys: ['us10y'], run: refreshUs10y, format: formatPercent, tolerance: 0.005 },
  { keys: ['usdcny'], run: refreshUsdCny, format: formatFx, tolerance: 0.0005 },
  { keys: ['gold'], run: refreshGold, format: formatGold, tolerance: 1 },
  // 国内金价带历史序列，卡片在前端可点开看走势；其余端点都是单一快照。
  { keys: ['cngold'], run: refreshCnGold, format: formatCnGold, tolerance: 0.05 },
];

function defaultDeps(now) {
  return { now: now || new Date(), getJson, getText: httpGet, fetchJson, fetchText };
}

async function refreshMacro(macro, deps) {
  const d = deps || defaultDeps();
  const byKey = {};
  (macro.indicators || []).forEach(ind => { byKey[ind.key] = ind; });
  const report = { refreshed: [], kept: [], errors: [] };
  for (const refresher of AUTO_REFRESHERS) {
    try {
      const results = await refresher.run(d);
      for (const key of refresher.keys) {
        const indicator = byKey[key];
        const next = results[key];
        if (!indicator || !next || !Number.isFinite(next.value)) {
          report.kept.push(key);
          continue;
        }
        applyRefresh(indicator, next.value, refresher.format, {
          asOf: next.asOf,
          tolerance: refresher.tolerance,
          previous: next.previous,
          series: next.series,
          baselineWindowDays: refresher.baselineWindowDays,
          now: d.now,
        });
        report.refreshed.push(key);
      }
    } catch (error) {
      refresher.keys.forEach(key => report.kept.push(key));
      report.errors.push(`${refresher.keys.join('/')}: ${error.message}`);
    }
  }
  macro.updatedAt = (d.now || new Date()).toISOString();
  return { macro, report };
}

function loadMacro(file) {
  return JSON.parse(fs.readFileSync(file || MACRO_FILE, 'utf8'));
}

function writeMacro(macro, file) {
  fs.writeFileSync(file || MACRO_FILE, JSON.stringify(macro, null, 2) + '\n', 'utf8');
}

// Frontend-safe projection: no internal refresh metadata leaks.
function publicMacro(macro) {
  if (!macro || !Array.isArray(macro.indicators)) return null;
  return {
    updatedAt: macro.updatedAt || null,
    indicators: macro.indicators.map(ind => ({
      key: ind.key,
      name: ind.name,
      value: ind.value,
      note: ind.note,
      direction: ['up', 'down', 'flat'].includes(ind.direction) ? ind.direction : 'flat',
      asOf: ind.asOf || null,
      source: ind.source || null,
      mode: ind.mode === 'auto' ? 'auto' : 'manual',
      // 序列同样走白名单：只放行日期和数值，且在这里再裁一次长度与合法性，
      // 防止 indicator.series 被其他路径写脏后原样流到前端。
      series: Array.isArray(ind.series)
        ? ind.series
          .filter(point => point && /^\d{4}-\d{2}-\d{2}$/.test(point.date || '') && Number.isFinite(point.value))
          .map(point => ({ date: point.date, value: point.value }))
          .slice(-SERIES_LIMIT)
        : [],
    })),
  };
}

// Compact, factual context line for the LLM daily-analysis prompt.
function formatMacroContext(macro) {
  if (!macro || !Array.isArray(macro.indicators)) return '';
  return macro.indicators
    .map(ind => `${ind.name} ${ind.value}（截至${ind.asOf || '未知'}）`)
    .join('；');
}

async function main() {
  const macro = loadMacro();
  const { report } = await refreshMacro(macro, defaultDeps());
  writeMacro(macro);
  console.error(`[macro] refreshed: ${report.refreshed.join(', ') || 'none'}`);
  if (report.kept.length) console.error(`[macro] kept previous: ${report.kept.join(', ')}`);
  report.errors.forEach(err => console.error(`[macro] error: ${err}`));
}

if (require.main === module) {
  main().catch(error => {
    // Never break the pipeline because macro refresh failed.
    console.error(`[macro] fatal, keeping previous macro.json: ${error.message}`);
  });
}

module.exports = {
  MACRO_FILE,
  SERIES_LIMIT,
  defaultDeps,
  formatMacroContext,
  loadMacro,
  parseSgeDaily,
  publicMacro,
  refreshMacro,
  writeMacro,
};
