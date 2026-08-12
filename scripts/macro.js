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

function applyRefresh(indicator, next, formatValue, options) {
  const opts = options || {};
  const prev = Number.isFinite(indicator.numericValue) ? indicator.numericValue : null;
  indicator.value = formatValue(next);
  indicator.numericValue = next;
  indicator.direction = directionOf(next, prev, opts.tolerance);
  indicator.asOf = opts.asOf || indicator.asOf;
  if (prev !== null && indicator.direction !== 'flat') {
    const arrow = indicator.direction === 'up' ? '上升' : '下降';
    indicator.note = `较前期 ${formatValue(prev)} ${arrow}`;
  } else if (prev !== null) {
    indicator.note = '与前期持平';
  }
  return prev !== next;
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
  const latest = records[0];
  const y1 = parseFloat(latest['1Y']);
  const y5 = parseFloat(latest['5Y']);
  if (!inRange(y1, 0.5, 10) || !inRange(y5, 0.5, 10)) throw new Error(`LPR out of range: ${latest['1Y']}/${latest['5Y']}`);
  const asOf = /^\d{4}-\d{2}-\d{2}$/.test(latest.showDateCN || '') ? latest.showDateCN : undefined;
  return { lpr1y: { value: y1, asOf }, lpr5y: { value: y5, asOf } };
}

async function refreshUs10y(deps) {
  const year = deps.now.getUTCFullYear();
  const url = 'https://home.treasury.gov/resource-center/data-chart-center/interest-rates/'
    + `daily-treasury-rates.csv/${year}/all?type=daily_treasury_yield_curve&field_tdr_date_value=${year}&page&_format=csv`;
  const csv = await deps.getText(url);
  const lines = csv.split(/\r?\n/).filter(line => line.trim());
  if (lines.length < 2) throw new Error('treasury csv empty');
  const header = lines[0].split(',').map(cell => cell.replace(/"/g, '').trim());
  const idx = header.findIndex(cell => /^10\s*Yr/i.test(cell));
  if (idx === -1) throw new Error('treasury csv missing 10 Yr column');
  const row = lines[1].split(',');
  const value = parseFloat(row[idx]);
  if (!inRange(value, 0, 15)) throw new Error(`US10Y out of range: ${row[idx]}`);
  const dateMatch = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec((row[0] || '').trim());
  const asOf = dateMatch ? `${dateMatch[3]}-${dateMatch[1]}-${dateMatch[2]}` : undefined;
  return { us10y: { value, asOf } };
}

async function refreshUsdCny(deps) {
  const json = await deps.getJson('https://api.frankfurter.dev/v1/latest?base=USD&symbols=CNY');
  const value = json && json.rates ? parseFloat(json.rates.CNY) : NaN;
  if (!inRange(value, 5, 10)) throw new Error(`USD/CNY out of range: ${value}`);
  const asOf = /^\d{4}-\d{2}-\d{2}$/.test(json.date || '') ? json.date : undefined;
  return { usdcny: { value, asOf } };
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
  { keys: ['lpr1y', 'lpr5y'], run: refreshLpr, format: formatPercent, tolerance: 0.005 },
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
        applyRefresh(indicator, next.value, refresher.format, { asOf: next.asOf, tolerance: refresher.tolerance });
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
