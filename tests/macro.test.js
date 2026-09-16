'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const {
  formatMacroContext,
  publicMacro,
  refreshMacro,
} = require('../scripts/macro');

const root = path.resolve(__dirname, '..');
const now = new Date('2026-08-12T02:00:00Z');

function baseMacro() {
  return {
    schemaVersion: '1.0',
    updatedAt: '2026-08-11T00:00:00.000Z',
    indicators: [
      { key: 'lpr1y', name: 'LPR 1年期', value: '3.00%', numericValue: 3.00, note: '连续14个月持平', direction: 'flat', asOf: '2026-08-11', source: '中国货币网', mode: 'auto' },
      { key: 'lpr5y', name: 'LPR 5年期以上', value: '3.50%', numericValue: 3.50, note: '持平', direction: 'flat', asOf: '2026-08-11', source: '中国货币网', mode: 'auto' },
      { key: 'cn10y', name: '10年期国债', value: '1.71%', numericValue: 1.71, note: '人工核实', direction: 'down', asOf: '2026-08-11', source: '中国货币网', mode: 'manual' },
      { key: 'us10y', name: '美债 10年期', value: '4.70%', numericValue: 4.70, note: '高位震荡', direction: 'up', asOf: '2026-08-11', source: '美国财政部', mode: 'auto' },
      { key: 'usdcny', name: '美元兑人民币', value: '6.7442', numericValue: 6.7442, note: '42个月新高', direction: 'up', asOf: '2026-08-11', source: 'Frankfurter/ECB', mode: 'auto' },
      { key: 'gold', name: '现货黄金', value: '$4,393', numericValue: 4393, note: '周涨超 7%', direction: 'up', asOf: '2026-08-11', source: 'gold-api.com', mode: 'auto' },
    ],
  };
}

const okDeps = {
  now,
  getJson: async url => {
    if (url.includes('chinamoney')) {
      // LPR history carries the prior publication, so no local baseline is needed.
      return {
        records: [
          { '1Y': '3.00', '5Y': '3.50', showDateCN: '2026-07-20' },
          { '1Y': '3.00', '5Y': '3.50', showDateCN: '2026-06-20' },
        ],
      };
    }
    if (url.includes('frankfurter')) {
      // Range response: one entry per ECB trading day.
      return {
        rates: {
          '2026-08-10': { CNY: 6.7442 },
          '2026-08-11': { CNY: 6.7453 },
        },
      };
    }
    if (url.includes('gold-api')) {
      return { price: 4389.2, updatedAt: '2026-08-12T05:55:08Z' };
    }
    throw new Error(`unexpected json url: ${url}`);
  },
  getText: async url => {
    assert.ok(url.includes('home.treasury.gov'));
    return 'Date,"1 Mo","2 Yr","10 Yr","30 Yr"\n'
      + '08/11/2026,3.79,4.22,4.70,5.24\n'
      + '08/10/2026,3.80,4.20,4.68,5.20\n';
  },
};

(async () => {
  // Happy path: all auto indicators refresh, manual ones untouched
  const macro1 = baseMacro();
  const { macro: out1, report: report1 } = await refreshMacro(macro1, okDeps);
  const byKey1 = {};
  out1.indicators.forEach(ind => { byKey1[ind.key] = ind; });
  assert.strictEqual(byKey1.lpr1y.value, '3.00%');
  assert.strictEqual(byKey1.lpr1y.asOf, '2026-07-20');
  assert.strictEqual(byKey1.lpr5y.value, '3.50%');
  assert.strictEqual(byKey1.us10y.value, '4.70%');
  assert.strictEqual(byKey1.us10y.asOf, '2026-08-11');
  assert.strictEqual(byKey1.usdcny.value, '6.7453');
  assert.strictEqual(byKey1.usdcny.direction, 'up');
  assert.ok(byKey1.usdcny.note.includes('6.7442'));
  assert.strictEqual(byKey1.gold.value, '$4,389');
  assert.strictEqual(byKey1.gold.direction, 'down');
  assert.strictEqual(byKey1.cn10y.value, '1.71%');
  assert.strictEqual(byKey1.cn10y.note, '人工核实');
  assert.strictEqual(report1.errors.length, 0);
  assert.strictEqual(out1.updatedAt, now.toISOString());

  // Comparison notes name the actual baseline date instead of saying "较前期"
  assert.strictEqual(byKey1.us10y.note, '较8月10日 4.68% 上升');
  assert.strictEqual(byKey1.usdcny.note, '较8月10日 6.7442 上升');
  assert.strictEqual(byKey1.lpr1y.note, '较6月20日持平');
  // Gold has no upstream history, so the baseline rotates in from the previous run.
  assert.strictEqual(byKey1.gold.note, '较8月11日 $4,393 下降');
  assert.ok(!/较前期/.test(out1.indicators.map(ind => ind.note || '').join(' ')),
    'no indicator may fall back to the vague "较前期" wording');

  // A baseline older than the window is dropped rather than reworded
  const staleMacro = baseMacro();
  const staleIndicator = staleMacro.indicators.find(ind => ind.key === 'gold');
  staleIndicator.asOf = '2026-08-12'; // unchanged observation date, so the seeded baseline survives rotation
  staleIndicator.prevValue = '$4,000';
  staleIndicator.prevNumericValue = 4000;
  staleIndicator.prevAsOf = '2026-06-01'; // 72 days before the incoming observation
  const { macro: staleOut } = await refreshMacro(staleMacro, okDeps);
  const staleGold = staleOut.indicators.find(ind => ind.key === 'gold');
  assert.strictEqual(staleGold.note, '对比基准已超30天');
  assert.strictEqual(staleGold.prevAsOf, undefined);
  assert.strictEqual(staleGold.prevNumericValue, undefined);

  // Window boundary: a 30-day-old baseline still compares, 31 days does not.
  async function goldNoteWithBaseline(prevAsOf) {
    const seeded = baseMacro();
    const gold = seeded.indicators.find(ind => ind.key === 'gold');
    gold.asOf = '2026-08-12';
    gold.prevValue = '$4,000';
    gold.prevNumericValue = 4000;
    gold.prevAsOf = prevAsOf;
    const { macro } = await refreshMacro(seeded, okDeps);
    return macro.indicators.find(ind => ind.key === 'gold').note;
  }
  assert.strictEqual(await goldNoteWithBaseline('2026-07-13'), '较7月13日 $4,000 上升');
  assert.strictEqual(await goldNoteWithBaseline('2026-07-12'), '对比基准已超30天');

  // LPR is published monthly, so its window is wider than the 30-day default:
  // a 34-day gap is normal there and must still produce a dated comparison.
  const monthlyDeps = {
    ...okDeps,
    getJson: async url => {
      if (url.includes('chinamoney')) {
        // Only the current publication: forces the local rotated baseline to be used.
        return { records: [{ '1Y': '3.00', '5Y': '3.50', showDateCN: '2026-07-20' }] };
      }
      return okDeps.getJson(url);
    },
  };
  const monthlyMacro = baseMacro();
  const lprIndicator = monthlyMacro.indicators.find(ind => ind.key === 'lpr1y');
  lprIndicator.prevValue = '3.00%';
  lprIndicator.prevNumericValue = 3.0;
  lprIndicator.prevAsOf = '2026-06-16'; // 34 days before the 2026-07-20 publication
  const { macro: monthlyOut } = await refreshMacro(monthlyMacro, monthlyDeps);
  assert.strictEqual(monthlyOut.indicators.find(ind => ind.key === 'lpr1y').note, '较6月16日持平');

  // Out-of-range values are rejected and previous values kept
  const badDeps = {
    ...okDeps,
    getJson: async url => {
      if (url.includes('chinamoney')) return { records: [{ '1Y': '45.0', '5Y': '3.50', showDateCN: '2026-07-20' }] };
      if (url.includes('frankfurter')) return { rates: { '2026-08-11': { CNY: 99 } } };
      if (url.includes('gold-api')) return { price: 12, updatedAt: '2026-08-12T05:55:08Z' };
      throw new Error('unexpected');
    },
  };
  const macro2 = baseMacro();
  const { macro: out2, report: report2 } = await refreshMacro(macro2, badDeps);
  const byKey2 = {};
  out2.indicators.forEach(ind => { byKey2[ind.key] = ind; });
  assert.strictEqual(byKey2.lpr1y.value, '3.00%');
  assert.strictEqual(byKey2.usdcny.value, '6.7442');
  assert.strictEqual(byKey2.gold.value, '$4,393');
  assert.strictEqual(report2.refreshed.length, 1); // only treasury CSV survives
  assert.strictEqual(report2.errors.length, 3);

  // Network failure keeps every previous value and never throws
  const deadDeps = {
    now,
    getJson: async () => { throw new Error('ECONNRESET'); },
    getText: async () => { throw new Error('ECONNRESET'); },
  };
  const macro3 = baseMacro();
  const { macro: out3, report: report3 } = await refreshMacro(macro3, deadDeps);
  assert.deepStrictEqual(
    out3.indicators.map(ind => ind.value),
    baseMacro().indicators.map(ind => ind.value)
  );
  assert.strictEqual(report3.refreshed.length, 0);
  assert.strictEqual(report3.errors.length, 4);

  // Frontend projection keeps only safe fields
  const pub = publicMacro(out1);
  assert.strictEqual(pub.indicators.length, out1.indicators.length);
  assert.ok(pub.indicators.every(ind => Object.keys(ind).every(k =>
    ['key', 'name', 'value', 'note', 'direction', 'asOf', 'source', 'mode'].includes(k))));
  assert.strictEqual(publicMacro(null), null);

  // LLM context is compact and factual
  const context = formatMacroContext(out1);
  assert.ok(context.includes('LPR 1年期 3.00%（截至2026-07-20）'));
  assert.ok(context.includes('美债 10年期 4.70%（截至2026-08-11）'));
  assert.strictEqual(formatMacroContext(null), '');

  // Seeded macro.json stays well-formed and covers the eight board indicators
  const seeded = JSON.parse(fs.readFileSync(path.join(root, 'data', 'macro.json'), 'utf8'));
  assert.strictEqual(seeded.indicators.length, 8);
  assert.ok(seeded.indicators.every(ind => ind.key && ind.name && ind.value && ind.asOf && ind.source && ['auto', 'manual'].includes(ind.mode)));

  console.log('macro tests passed');
})().catch(error => {
  console.error(error);
  process.exit(1);
});
