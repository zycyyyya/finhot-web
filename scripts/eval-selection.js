#!/usr/bin/env node
'use strict';
/**
 * P1 门槛扫描校准（AIHOT 方法 5 / SelectBench 的轻量版）。
 *
 * 对 data/gold.jsonl（人工标注的"该选 / 不该选"样本）跑评分，扫描门槛 40~90，
 * 输出每个门槛的查准率 / 查全率 / F1，并给出最大 F1 的建议门槛。
 *
 * 用法：
 *   node scripts/eval-selection.js            # 只跑启发式评分
 *   node scripts/eval-selection.js --llm      # 同时跑模型双次打分（需配置 LLM）
 *
 * gold.jsonl 每行：{"id","title","summary","category","tier","shouldSelect":true/false,"note"}
 * 标注口径：以"是否值得进 finhot 今日精选"为准，与来源等级无关。
 */

const fs = require('fs');
const path = require('path');
const { scoreItem } = require('./scoring');
const { applyLLMScores, resolveOptions, selectWithLLM } = require('./select-llm');
const { resolveLLMConfig } = require('./llm');

const GOLD_FILE = path.join(__dirname, '..', 'data', 'gold.jsonl');
const SWEEP_FROM = 40;
const SWEEP_TO = 90;
const SWEEP_STEP = 5;

function loadGold(file) {
  const raw = fs.readFileSync(file || GOLD_FILE, 'utf8');
  return raw.split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => { try { return JSON.parse(line); } catch { return null; } })
    .filter(Boolean);
}

/** 启发式评分：与 fetch.js enrichItem 同一入口。 */
function heuristicScore(entry) {
  const meta = scoreItem(
    { title: entry.title, summary: entry.summary || '', publishedAt: null },
    { tier: entry.tier || 'S2', category: entry.category || 'industry' },
  );
  return meta.score;
}

/**
 * 扫描门槛。entries: [{shouldSelect, score, pass?}]，predicate 为 (entry, t) => boolean。
 * 返回 [{threshold, precision, recall, f1, tp, fp, fn}]。
 */
function sweep(entries, predicate) {
  const rows = [];
  for (let t = SWEEP_FROM; t <= SWEEP_TO; t += SWEEP_STEP) {
    let tp = 0, fp = 0, fn = 0;
    for (const entry of entries) {
      const predicted = predicate(entry, t);
      if (predicted && entry.shouldSelect) tp += 1;
      else if (predicted && !entry.shouldSelect) fp += 1;
      else if (!predicted && entry.shouldSelect) fn += 1;
    }
    const precision = tp + fp > 0 ? tp / (tp + fp) : 0;
    const recall = tp + fn > 0 ? tp / (tp + fn) : 0;
    const f1 = precision + recall > 0 ? 2 * precision * recall / (precision + recall) : 0;
    rows.push({ threshold: t, precision, recall, f1, tp, fp, fn });
  }
  return rows;
}

function formatTable(rows) {
  const lines = [];
  lines.push('门槛  查准率  查全率   F1    TP  FP  FN');
  for (const r of rows) {
    lines.push(
      `${String(r.threshold).padStart(3)}  ${(r.precision * 100).toFixed(1).padStart(5)}% ${(r.recall * 100).toFixed(1).padStart(5)}% ${(r.f1 * 100).toFixed(1).padStart(5)}% ${String(r.tp).padStart(4)} ${String(r.fp).padStart(3)} ${String(r.fn).padStart(3)}`,
    );
  }
  return lines.join('\n');
}

function bestThreshold(rows) {
  return rows.reduce((best, r) => (r.f1 > best.f1 ? r : best), rows[0]);
}

async function runLLMScoring(gold) {
  const config = resolveLLMConfig(process.env);
  if (!config.configured) {
    console.log('[eval] 未配置 LLM（FINHOT_LLM_API_KEY 或 DEEPSEEK_API_KEY），跳过模型评分');
    return null;
  }
  const opts = { ...resolveOptions(), prefilterMinScore: 0, maxItemsPerRun: gold.length };
  const items = gold.map((g, i) => ({ id: g.id || `gold_${i}`, title: g.title, summary: g.summary || '', score: 100 }));
  const { results, failed } = await selectWithLLM(items, { ...opts, log: console.error });
  applyLLMScores(items, results, opts.gate);
  const byId = new Map(items.map(it => [it.id, it]));
  let scored = 0;
  for (const g of gold) {
    const it = byId.get(g.id || `gold_${gold.indexOf(g)}`);
    if (it && Array.isArray(it.llmScores)) {
      g.llmScores = it.llmScores;
      g.llmAvg = it.attentionScore;
      scored += 1;
    }
  }
  console.log(`[eval] 模型打分 ${scored}/${gold.length} 条成功，失败 ${failed}`);
  return scored;
}

async function main() {
  const useLLM = process.argv.includes('--llm');
  const gold = loadGold();
  const positives = gold.filter(g => g.shouldSelect).length;
  console.log(`gold 样本 ${gold.length} 条（该选 ${positives} / 不该选 ${gold.length - positives}）\n`);

  for (const g of gold) g.score = heuristicScore(g);
  const hRows = sweep(gold, (g, t) => g.score >= t);
  console.log('== 启发式评分（scoreItem）==');
  console.log(formatTable(hRows));
  const hBest = bestThreshold(hRows);
  console.log(`\n启发式建议门槛：${hBest.threshold}（F1 ${(hBest.f1 * 100).toFixed(1)}%）`);

  if (useLLM) {
    const scored = await runLLMScoring(gold);
    if (scored) {
      const llmRows = sweep(gold, (g, t) => Array.isArray(g.llmScores) && (g.llmAvg || 0) >= t);
      console.log('\n== 模型双次打分：平均分门槛（展示分 ≥ t）==');
      console.log(formatTable(llmRows));
      const lBest = bestThreshold(llmRows);
      console.log(`\n模型平均分建议门槛：${lBest.threshold}（F1 ${(lBest.f1 * 100).toFixed(1)}%）`);

      const bothRows = sweep(gold, (g, t) => Array.isArray(g.llmScores) && g.llmScores[0] >= t && g.llmScores[1] >= t);
      console.log('\n== 模型双次打分：双过门槛（两次都 ≥ t，即入选语义）==');
      console.log(formatTable(bothRows));
      const bBest = bestThreshold(bothRows);
      console.log(`\n模型双过建议门槛：${bBest.threshold}（F1 ${(bBest.f1 * 100).toFixed(1)}%）`);
    }
  }
}

if (require.main === module) {
  main().catch(error => { console.error(error); process.exit(1); });
}

module.exports = { GOLD_FILE, bestThreshold, formatTable, heuristicScore, loadGold, sweep };
