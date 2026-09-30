'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { bestThreshold, formatTable, heuristicScore, loadGold, sweep } = require('../scripts/eval-selection');

// === loadGold ===
const tmp = path.join(require('os').tmpdir(), `gold-test-${Date.now()}.jsonl`);
fs.writeFileSync(tmp, [
  JSON.stringify({ id: 'a', title: '监管发布新办法', shouldSelect: true }),
  JSON.stringify({ id: 'b', title: '营销软文', shouldSelect: false }),
  '',
].join('\n'));
const gold = loadGold(tmp);
assert.strictEqual(gold.length, 2);
assert.strictEqual(gold[0].shouldSelect, true);
fs.unlinkSync(tmp);

// 真实 gold 文件可读且标签分布合理
const real = loadGold();
assert.ok(real.length >= 30, 'gold 种子集应至少有 30 条');
assert.ok(real.every(g => typeof g.shouldSelect === 'boolean' && g.title));
assert.ok(real.some(g => g.shouldSelect) && real.some(g => !g.shouldSelect));

// === heuristicScore：监管原文高于营销软文 ===
const reg = heuristicScore({ title: '金融监管总局发布《保险公司偿付能力监管办法》', summary: '正式发文，明确核心偿付能力充足率要求。', tier: 'S0', category: 'regulatory' });
const ad = heuristicScore({ title: '开门红限时特惠 预约有礼 点击查看', summary: '抢购倒计时', tier: 'S3', category: 'insights' });
assert.ok(reg > ad, `监管(${reg}) 应高于营销(${ad})`);

// === sweep ===
const entries = [
  { shouldSelect: true, score: 80 },
  { shouldSelect: true, score: 60 },
  { shouldSelect: false, score: 70 },
  { shouldSelect: false, score: 30 },
];
const rows = sweep(entries, (e, t) => e.score >= t);
const r75 = rows.find(r => r.threshold === 75);
assert.deepStrictEqual([r75.tp, r75.fp, r75.fn], [1, 0, 1]);
const r55 = rows.find(r => r.threshold === 55);
assert.deepStrictEqual([r55.tp, r55.fp, r55.fn], [2, 1, 0]);
assert.strictEqual(r55.precision, 2 / 3);
assert.strictEqual(r55.recall, 1);

// === bestThreshold / formatTable ===
const best = bestThreshold(rows);
assert.ok(best.f1 >= rows.find(r => r.threshold === 75).f1);
const table = formatTable(rows);
assert.ok(table.includes('门槛'));
assert.ok(table.includes('F1'));

console.log('eval-selection tests passed');
