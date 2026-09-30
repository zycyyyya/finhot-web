'use strict';

const assert = require('assert');
const fs = require('fs');
const {
  DEFAULTS,
  applyLLMScores,
  buildMessages,
  loadPromptTemplate,
  parseScore,
  resolveOptions,
  restoreStoredLLMScore,
  scoreItemTwice,
  selectWithLLM,
} = require('../scripts/select-llm');

// === loadPromptTemplate ===
const template = loadPromptTemplate('finhot');
assert.ok(template.includes('finhot'), '{{siteName}} 应被替换');
assert.ok(!template.includes('{{siteName}}'), '不应残留占位符');
assert.ok(template.includes('attentionScore'), '模板应包含输出契约');

// === buildMessages ===
const msgs = buildMessages(template, { title: '央行降准0.5个百分点', summary: '央行公告' });
assert.strictEqual(msgs.length, 2);
assert.strictEqual(msgs[0].role, 'system');
assert.strictEqual(msgs[1].role, 'user');
assert.ok(msgs[1].content.includes('央行降准0.5个百分点'));
assert.ok(msgs[1].content.includes('央行公告'));

// === parseScore ===
assert.strictEqual(parseScore('{"attentionScore": 72}'), 72);
assert.strictEqual(parseScore('```json\n{"attentionScore": 65}\n```'), 65);
assert.strictEqual(parseScore('{"attentionScore": "abc"}'), null);
assert.strictEqual(parseScore('不是json'), null);

(async () => {
  // === scoreItemTwice：正常与失败 ===
  const good = await scoreItemTwice(
    { id: 'a', title: 't', summary: 's' },
    template,
    { apiKey: 'k', fetchImpl: async () => '{"attentionScore": 70}' },
  );
  assert.deepStrictEqual(good, { a: 70, b: 70, avg: 70 });

  const bad = await scoreItemTwice(
    { id: 'a', title: 't', summary: 's' },
    template,
    { apiKey: 'k', fetchImpl: async () => '垃圾输出' },
  );
  assert.strictEqual(bad, null, '解析失败应返回 null（回退启发式）');

  // === selectWithLLM：预筛、上限、失败软降级 ===
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push({ id: `n${i}`, title: `标题${i}`, summary: 's', score: 40 + i });
  }
  let calls = 0;
  const sel = await selectWithLLM(items, {
    apiKey: 'k',
    prefilterMinScore: 45,
    maxItemsPerRun: 3,
    fetchImpl: async (messages) => {
      calls += 1;
      // 按标题确定性失败：n7 永远失败，不受并发交错影响。
      if (messages[1].content.includes('标题7')) return 'bad';
      return '{"attentionScore": 60}';
    },
    log: () => {},
  });
  assert.strictEqual(sel.attempted, 3, '预筛(>=45)后 5 条，再被 maxItemsPerRun=3 截断');
  assert.strictEqual(sel.results.size, 2, '1 次失败被软降级');
  assert.strictEqual(calls, 5, '成功条目各 2 次 + 失败条目第 1 次即返回（不再浪费第 2 次）');
  assert.strictEqual(sel.results.get('n9').avg, 60);
  assert.ok(!sel.results.has('n7'));

  // === applyLLMScores ===
  const pool = [
    { id: 'n5', score: 50, passesTierGate: false },
    { id: 'n6', score: 49, passesTierGate: false },
    { id: 'n9', score: 10, passesTierGate: false },
  ];
  const results = new Map([
    ['n5', { a: 55, b: 45, avg: 50 }],
    ['n6', { a: 62, b: 58, avg: 60 }],
  ]);
  const applied = applyLLMScores(pool, results, 50);
  assert.strictEqual(applied, 2);
  const p5 = pool.find(p => p.id === 'n5');
  const p6 = pool.find(p => p.id === 'n6');
  const p9 = pool.find(p => p.id === 'n9');
  assert.strictEqual(p5.score, 50);
  assert.strictEqual(p5.scoredBy, 'llm');
  assert.deepStrictEqual(p5.llmScores, [55, 45]);
  assert.strictEqual(p5.passesTierGate, false, '一次 45 < 50 → 不过');
  assert.strictEqual(p6.passesTierGate, true, '两次都 ≥ 50 → 过');
  assert.strictEqual(p9.scoredBy, undefined, '未评分的条目不动');

  // === restoreStoredLLMScore ===
  const cached = { id: 'c1', score: 12, scoredBy: 'llm', llmScores: [66, 54] };
  assert.strictEqual(restoreStoredLLMScore(cached, 50), true);
  assert.strictEqual(cached.score, 60, '恢复为两次平均');
  assert.strictEqual(cached.passesTierGate, true);
  const broken = { id: 'c2', score: 12, scoredBy: 'llm', llmScores: [66] };
  assert.strictEqual(restoreStoredLLMScore(broken, 50), false, '缺分值不恢复');
  const plain = { id: 'c3', score: 12 };
  assert.strictEqual(restoreStoredLLMScore(plain, 50), false);

  // === resolveOptions：env 覆盖 ===
  const opts = resolveOptions({
    DEEPSEEK_API_KEY: 'sk-x',
    FINHOT_LLM_GATE: '55',
    FINHOT_LLM_MAX_ITEMS: '9',
  });
  assert.strictEqual(opts.gate, 55);
  assert.strictEqual(opts.maxItemsPerRun, 9);
  assert.strictEqual(opts.apiKey, 'sk-x');
  assert.strictEqual(opts.configured, true);

  const custom = resolveOptions({
    FINHOT_LLM_API_KEY: 'ak-y',
    FINHOT_LLM_BASE_URL: 'https://api.longcat.chat/openai/v1/chat/completions',
    FINHOT_LLM_MODEL: 'LongCat-2.5-Preview',
    DEEPSEEK_API_KEY: 'sk-x',
  });
  assert.strictEqual(custom.apiKey, 'ak-y');
  assert.strictEqual(custom.model, 'LongCat-2.5-Preview');
  assert.ok(custom.fallback, '自定义渠道自动挂 SenseNova 兜底');

  const none = resolveOptions({});
  assert.strictEqual(none.configured, false);

  console.log('select-llm tests passed');
})().catch(error => { console.error(error); process.exit(1); });
