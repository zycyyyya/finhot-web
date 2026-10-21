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

  // === selectWithLLM：全量 429 时必须快速熔断，而不是逐条重试空转 ===
  // 复现 CI 卡顿场景：120 条 × 2 次 = 240 次请求打免费端点，全部 429。
  const floodItems = [];
  for (let i = 0; i < 120; i++) {
    floodItems.push({ id: `f${i}`, title: `标题${i}`, summary: 's', score: 40 + (i % 30) });
  }
  let floodCalls = 0;
  const floodStart = Date.now();
  const floodLogs = [];
  const flood = await selectWithLLM(floodItems, {
    apiKey: 'k',
    prefilterMinScore: 45,
    maxItemsPerRun: 120,
    concurrency: 4,
    rateLimitThreshold: 8,
    rateLimitWindow: 20,
    retryDelays: [10, 20],
    fetchImpl: async () => { floodCalls += 1; throw new Error('HTTP 429: {"code":"429003"}'); },
    log: line => floodLogs.push(line),
  });
  const floodElapsed = Date.now() - floodStart;
  assert.strictEqual(flood.results.size, 0, '全限流时不应有成功评分');
  assert.strictEqual(flood.abortReason, 'rate-limited', '应判定为限流中止');
  assert.ok(flood.aborted > 0, '应有条目标记为未评分');
  assert.ok(floodCalls <= 24,
    `熔断后请求数应远小于 240（实际 ${floodCalls}）`);
  assert.ok(floodElapsed < 8000,
    `全限流时应在数秒内收手，而不是空转 12 分钟（实际 ${floodElapsed}ms）`);
  assert.ok(floodLogs.some(l => l.includes('提前中止')), '应输出中止原因日志');
  assert.ok(floodLogs.some(l => l.includes('429 计数')), '日志应带 429 计数便于排查');

  // === selectWithLLM：阶段时限到期后收手 ===
  const slowItems = [];
  for (let i = 0; i < 30; i++) {
    slowItems.push({ id: `s${i}`, title: `标题${i}`, summary: 's', score: 60 });
  }
  let slowTicks = 0;
  const budget = await selectWithLLM(slowItems, {
    apiKey: 'k',
    prefilterMinScore: 45,
    concurrency: 1,
    stageBudgetMs: 40,
    fetchImpl: async () => {
      slowTicks += 1;
      await new Promise(r => setTimeout(r, 10));
      return '{"attentionScore": 60}';
    },
    log: () => {},
  });
  assert.ok(slowTicks < 30, `时限到期后应停止发起新请求（实际发起 ${slowTicks}）`);
  assert.strictEqual(budget.abortReason, 'stage-budget-exceeded');
  assert.ok(budget.aborted > 0);

  // === selectWithLLM：部分成功时中止，仍保留已拿到的分 ===
  const mixedItems = [];
  for (let i = 0; i < 40; i++) {
    mixedItems.push({ id: `m${i}`, title: `标题${i}`, summary: 's', score: 60 });
  }
  let mixedCalls = 0;
  const mixed = await selectWithLLM(mixedItems, {
    apiKey: 'k',
    prefilterMinScore: 45,
    concurrency: 1,
    rateLimitThreshold: 3,
    rateLimitWindow: 10,
    retryDelays: [1],
    fetchImpl: async () => {
      mixedCalls += 1;
      // 前 5 次成功（每条 2 次 = 前 2 条拿满分），之后全 429。
      if (mixedCalls <= 5) return '{"attentionScore": 70}';
      throw new Error('HTTP 429: inference exceeds tpm/rpm limit');
    },
    log: () => {},
  });
  assert.ok(mixed.results.size > 0, '中止前已成功的条目应保留模型分');
  assert.strictEqual(mixed.abortReason, 'rate-limited');

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

  const tuned = resolveOptions({
    DEEPSEEK_API_KEY: 'sk-x',
    FINHOT_LLM_RL_THRESHOLD: '5',
    FINHOT_LLM_RL_WINDOW: '11',
    FINHOT_LLM_STAGE_BUDGET_MS: '60000',
  });
  assert.strictEqual(tuned.rateLimitThreshold, 5);
  assert.strictEqual(tuned.rateLimitWindow, 11);
  assert.strictEqual(tuned.stageBudgetMs, 60000);

  // 未配置 env 时应回落到 DEFAULTS 的熔断阈值，而非 undefined
  const bare = resolveOptions({ DEEPSEEK_API_KEY: 'sk-x' });
  assert.strictEqual(bare.rateLimitThreshold, DEFAULTS.rateLimitThreshold);
  assert.ok(DEFAULTS.stageBudgetMs > 0, '阶段总时限必须有默认值');

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
