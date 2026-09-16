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

function inRange(value, min, max) {
  return Number.isFinite(value) && value >= min && value <= max;
}

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
  const dateText = baseline.asOf ? formatCnDate(baseline.asOf, nextAsOf) : '';
  const prefix = dateText ? `较${dateText}` : '较前期';
  if (direction === 'up') return baseline.asOf ? `${prefix} ${baseline.label} 上升` : `较前期 ${baseline.label} 上升`;
  if (direction === 'down') return baseline.asOf ? `${prefix} ${baseline.label} 下降` : `较前期 ${baseline.label} 下降`;
  return baseline.asOf ? `${prefix}持平` : `与前期持平`;
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
  return { us10y: { value: latest.value, asOf: latest.asOf, previous } };
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
  return { usdcny: { value, asOf: latestDate, previous } };
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

const AUTO_REFRESHERS = [
  { keys: ['lpr1y', 'lpr5y'], run: refreshLpr, format: formatPercent, tolerance: 0.005, baselineWindowDays: MONTHLY_BASELINE_WINDOW_DAYS },
  { keys: ['us10y'], run: refreshUs10y, format: formatPercent, tolerance: 0.005 },
  { keys: ['usdcny'], run: refreshUsdCny, format: formatFx, tolerance: 0.0005 },
  { keys: ['gold'], run: refreshGold, format: formatGold, tolerance: 1 },
];

function defaultDeps(now) {
  return { now: now || new Date(), getJson, getText: httpGet };
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
  defaultDeps,
  formatMacroContext,
  loadMacro,
  publicMacro,
  refreshMacro,
  writeMacro,
};
