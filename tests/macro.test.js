'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const {
  formatMacroContext,
  parseSgeDaily,
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
      { key: 'cngold', name: '国内金价', value: '¥889.40', numericValue: 889.4, note: '高位震荡', direction: 'up', asOf: '2026-08-11', source: '上海黄金交易所', mode: 'auto' },
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
  // 第二条取数通道（内置 fetch），只服务 brent 与 cngold。
  // 打桩同时把所有指标的历史序列固定下来，测试不依赖网络。
  fetchText: async url => {
    assert.ok(url.includes('fred.stlouisfed.org'), `unexpected fetch url: ${url}`);
    // 含一个缺失观测（"."）与一个周末空行，验证它们会被跳过而不是算成 0。
    return 'observation_date,DCOILBRENTEU\n'
      + '2026-08-05,79.40\n'
      + '2026-08-06,.\n'
      + '2026-08-07,80.10\n'
      + '2026-08-10,81.50\n'
      + '2026-08-11,82.30\n';
  },
  fetchJson: async url => {
    assert.ok(url.includes('sge.com.cn'), `unexpected fetch url: ${url}`);
    // 列序：[日期, 开, 收, 低, 高]，取 index 2 作为收盘价。
    return {
      time: [
        ['2026-08-06', 875.0, 876.2, 872.0, 879.0],
        ['2026-08-07', 877.5, 880.4, 874.0, 883.0],
        ['2026-08-10', 882.0, 885.1, 879.0, 888.0],
        ['2026-08-11', 886.0, 889.4, 882.0, 892.0],
      ],
    };
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

  // === Series: 国内金价带回历史，可点开折线图 ===
  assert.strictEqual(byKey1.cngold.value, '¥889.40');
  assert.strictEqual(byKey1.cngold.asOf, '2026-08-11');
  // 取的是收盘价（index 2），不是开盘价（index 1）
  assert.deepStrictEqual(byKey1.cngold.series.map(p => p.value), [876.2, 880.4, 885.1, 889.4]);

  // 美债与汇率的历史本来就在响应里，一并接上
  assert.deepStrictEqual(byKey1.us10y.series.map(p => p.date), ['2026-08-10', '2026-08-11']);
  assert.ok(!byKey1.gold.series, 'gold has no upstream history, so no series');

  assert.strictEqual(report1.errors.length, 0);
  assert.strictEqual(out1.updatedAt, now.toISOString());

  // Comparison notes name the actual baseline date instead of saying "较前期"
  assert.strictEqual(byKey1.us10y.note, '较8月10日 4.68% 上升');
  assert.strictEqual(byKey1.usdcny.note, '较8月10日 6.7442 上升');
  // Flat months quote the baseline figure too, so every card reads the same way.
  assert.strictEqual(byKey1.lpr1y.note, '较6月20日 3.00% 持平');
  assert.strictEqual(byKey1.lpr5y.note, '较6月20日 3.50% 持平');
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
  assert.strictEqual(monthlyOut.indicators.find(ind => ind.key === 'lpr1y').note, '较6月16日 3.00% 持平');

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
  // 只有 treasury / cngold 两组通过区间校验，其余超范围被拒
  assert.strictEqual(report2.refreshed.length, 2);
  assert.strictEqual(report2.errors.length, 3);

  // Network failure keeps every previous value and never throws
  const deadDeps = {
    now,
    getJson: async () => { throw new Error('ECONNRESET'); },
    getText: async () => { throw new Error('ECONNRESET'); },
    // 新指标走 fetch 通道，这里必须一并打桩，否则「全源失败」的用例会真的
    // 发出网络请求 —— 既拖慢测试，也让结果随网络波动。
    fetchJson: async () => { throw new Error('ECONNRESET'); },
    fetchText: async () => { throw new Error('ECONNRESET'); },
  };
  const macro3 = baseMacro();
  const { macro: out3, report: report3 } = await refreshMacro(macro3, deadDeps);
  assert.deepStrictEqual(
    out3.indicators.map(ind => ind.value),
    baseMacro().indicators.map(ind => ind.value)
  );
  assert.strictEqual(report3.refreshed.length, 0);
  // 每个 refresher 记一条错误：lpr / us10y / usdcny / gold / cngold
  assert.strictEqual(report3.errors.length, 5);

  // Frontend projection keeps only safe fields
  const pub = publicMacro(out1);
  assert.strictEqual(pub.indicators.length, out1.indicators.length);
  assert.ok(pub.indicators.every(ind => Object.keys(ind).every(k =>
    ['key', 'name', 'value', 'note', 'direction', 'asOf', 'source', 'mode', 'series'].includes(k))));
  assert.strictEqual(publicMacro(null), null);

  // LLM context is compact and factual
  const context = formatMacroContext(out1);
  assert.ok(context.includes('LPR 1年期 3.00%（截至2026-07-20）'));
  assert.ok(context.includes('美债 10年期 4.70%（截至2026-08-11）'));
  assert.strictEqual(formatMacroContext(null), '');

  // Seeded macro.json stays well-formed and covers the nine board indicators
  const seeded = JSON.parse(fs.readFileSync(path.join(root, 'data', 'macro.json'), 'utf8'));
  assert.strictEqual(seeded.indicators.length, 9);
  assert.ok(seeded.indicators.every(ind => ind.key && ind.name && ind.value && ind.asOf && ind.source && ['auto', 'manual'].includes(ind.mode)));

  // === 序列解析器：坏数据必须被丢掉，不能被插值或前值填充 ===
  // 上金所：[日期, 开, 收, 低, 高]，取 index 2
  assert.deepStrictEqual(
    parseSgeDaily({ time: [['2026-01-05', 870, 875.5, 868, 878]] }, 7),
    [{ date: '2026-01-05', value: 875.5 }]);
  // 收盘价落在 [低, 高] 之外 → 说明列序变了，丢弃而不是画错线
  assert.deepStrictEqual(
    parseSgeDaily({ time: [['2026-01-05', 870, 999, 868, 878]] }, 7), []);
  // 列数不足、日期非法、结构异常都要安全返回
  assert.deepStrictEqual(parseSgeDaily({ time: [['2026-01-05', 870]] }, 7), []);
  assert.deepStrictEqual(parseSgeDaily({ time: [['05/01/2026', 870, 875, 868, 878]] }, 7), []);
  assert.deepStrictEqual(parseSgeDaily(null, 7), []);
  assert.deepStrictEqual(parseSgeDaily({}, 7), []);

  // === publicMacro 对 series 同样做白名单裁剪 ===
  const dirty = baseMacro();
  dirty.indicators[0].series = [
    { date: '2026-01-01', value: 1 },
    { date: 'bad-date', value: 2 },
    { date: '2026-01-02', value: NaN },
    { date: '2026-01-03', value: 3 },
    { date: '2026-01-04', value: 4 },
    { date: '2026-01-05', value: 5 },
    { date: '2026-01-06', value: 6 },
    { date: '2026-01-07', value: 7 },
    { date: '2026-01-08', value: 8 },
    { date: '2026-01-09', value: 9 },
  ];
  const dirtyPub = publicMacro(dirty);
  const lprSeries = dirtyPub.indicators.find(i => i.key === 'lpr1y').series;
  assert.ok(lprSeries.length <= 7, 'series must be capped at SERIES_LIMIT');
  // 10 个点里剔掉坏日期与 NaN 后剩 8 个，再取末 7 个 → 从 01-03 开始
  assert.deepStrictEqual(lprSeries.map(p => p.date),
    ['2026-01-03', '2026-01-04', '2026-01-05', '2026-01-06', '2026-01-07', '2026-01-08', '2026-01-09']);
  assert.ok(lprSeries.every(p => Object.keys(p).sort().join() === 'date,value'));
  // 没有 series 的指标补空数组，前端不必判空
  assert.deepStrictEqual(dirtyPub.indicators.find(i => i.key === 'gold').series, []);

  // === macro-view.js 静态契约 ===
  const view = fs.readFileSync(path.join(root, 'scripts', 'macro-view.js'), 'utf8');
  assert.ok(view.includes('function buildChart('), 'macro-view must render an inline sparkline');
  assert.ok(view.includes("class=\"macro-detail-chart\""), 'sparkline must be inline SVG, not a CDN chart lib');
  assert.ok(!/https?:\/\/[^\s'"]*\.js/.test(view), 'macro-view must not pull a chart library from a CDN');
  assert.ok(view.includes('macro-kpi-expandable'), 'only series-bearing cards may look clickable');
  assert.ok(view.includes("role=\"button\"") && view.includes("tabindex=\"0\""),
    'expandable KPI cards must stay keyboard reachable');
  assert.ok(view.includes('series.length >= 2'), 'a single point cannot form a line');
  assert.ok(view.includes("event.key === 'Escape'"), 'overlay must close on Escape');
  assert.ok(view.includes('__macroSeries'), 'series must live on the element, not a stale closure');

  // === 布局契约：可点开的卡片必须排在后面，且网格是 3 列 ===
  // 可点卡片聚在下排是产品要求；这里锁住实现方式是「改 DOM 顺序」而不是 CSS order，
  // 因为 order 会让视觉顺序与 Tab 焦点顺序错位。
  assert.ok(view.includes('snapshotList.concat(expandableList)'),
    'expandable cards must be grouped last in DOM order, not just visually');

  const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
  assert.ok(!/\.macro-kpi-expandable\s*\{[^}]*\border\s*:\s*-?\d/.test(css),
    'ordering must not rely on CSS order — it desyncs Tab focus order from the visual order');
  const gridBlock = css.slice(css.indexOf('.macro-kpi-grid {'));
  assert.ok(/repeat\(3, minmax\(0, 1fr\)\)/.test(gridBlock.slice(0, 400)),
    'macro KPI grid must be 3 columns so the six cards land as 3 + 3');
  assert.ok(/\.macro-kpi-expandable::before\s*\{[^}]*background:\s*var\(--accent-blue\)/.test(css),
    'expandable cards need a visible marker, not only cursor:pointer');

  // === 精度契约：显示位数必须跟着数据走 ===
  // 曾经统一按 2 位小数格式化：汇率日变动 0.0013 被抹成 0.00，
  // 表格整列显示「持平」、图上标签全是 6.67——趋势是真的在跌，但看起来是平的。
  assert.ok(view.includes('function decimalsOf('),
    'display precision must be derived from the data, not hardcoded');
  assert.ok(view.includes('Math.min(digits, 4)'),
    'display precision must cap at 4 decimals so table columns stay aligned');
  // 注意断言的是调用处而不是函数签名：签名里本来就有 series，
  // 只断言签名的话，调用处漏传 series 也照样通过。
  assert.ok(/var unit = unitOf\(indicator,\s*series\)/.test(view),
    'the caller must pass the series, otherwise precision falls back to the bare value');
  assert.ok(!/digits:\s*\d\s*\}/.test(view),
    'unitOf must not hardcode a decimal count');

  console.log('macro tests passed');
})().catch(error => {
  console.error(error);
  process.exit(1);
});
