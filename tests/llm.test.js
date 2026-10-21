'use strict';

const assert = require('assert');
const {
  RateLimitOpenError,
  callChat,
  callChatWithRetry,
  coerceScore,
  createRateLimitGuard,
  extractJSON,
  isRateLimitError,
  parseEndpoint,
  resolveLLMConfig,
  runPool,
} = require('../scripts/llm');

// === isRateLimitError ===
// SenseNova 免费端点的真实返回体（callChat 会加上 `HTTP 429: ` 前缀）
assert.strictEqual(
  isRateLimitError(new Error('HTTP 429: {"error":{"message":"inference exceeds tpm/rpm limit","code":"429003"}}')),
  true, 'SenseNova tpm/rpm 限流应识别',
);
assert.strictEqual(
  isRateLimitError(new Error('HTTP 429: too many requests')),
  true, '标准 429 应识别',
);
assert.strictEqual(
  isRateLimitError(new Error('{"error":{"type":"rate_limit_error"}}')),
  true, '仅凭 type 字段也要识别（自定义端点措辞不保证带状态码）',
);
assert.strictEqual(isRateLimitError(new Error('LLM timeout')), false, '超时不算限流');
assert.strictEqual(isRateLimitError(new Error('HTTP 500: boom')), false);

// === createRateLimitGuard ===
const guardTest = createRateLimitGuard({ threshold: 3, windowSize: 5 });
assert.strictEqual(guardTest.open, false, '初始不熔断');
guardTest.recordRateLimit();
assert.strictEqual(guardTest.open, false, '1/3 不熔断');
guardTest.recordRateLimit();
guardTest.recordSuccess();
assert.strictEqual(guardTest.count429(), 2, '成功不清零计数，只滑动');
guardTest.recordRateLimit();
assert.strictEqual(guardTest.open, true, `窗口内 429 达 3 次应熔断（实际 ${guardTest.count429()}）`);
assert.strictEqual(guardTest.total, 3, 'total 记录累计 429 总数');

const windowTest = createRateLimitGuard({ threshold: 3, windowSize: 5 });
windowTest.recordRateLimit();
windowTest.recordSuccess();
windowTest.recordRateLimit();
windowTest.recordSuccess();
windowTest.recordRateLimit();
assert.strictEqual(windowTest.count429(), 3);
assert.strictEqual(windowTest.open, true, '成功穿插不应稀释阈值（这正是用滑动窗口而非连续计数的原因）');

// 窗口容量是硬约束：容量 3 时第 4 次 push 就把最早的 429 挤出，阈值不再累计。
const capTest = createRateLimitGuard({ threshold: 3, windowSize: 3 });
for (const outcome of ['429', 'ok', '429', 'ok', '429']) {
  if (outcome === '429') capTest.recordRateLimit();
  else capTest.recordSuccess();
}
assert.strictEqual(capTest.count429(), 2, `窗口只留最近 3 次（实际 ${capTest.count429()}）`);
assert.strictEqual(capTest.total, 3, 'total 仍记累计值，不受窗口容量影响');
assert.strictEqual(capTest.open, false, '窗口容量不足时不应误熔断');

const sliding = createRateLimitGuard({ threshold: 2, windowSize: 2 });
sliding.recordRateLimit();
sliding.recordRateLimit();
assert.strictEqual(sliding.open, true);
sliding.recordSuccess();
sliding.recordSuccess();
assert.strictEqual(sliding.count429(), 0, '旧 429 应被挤出窗口');
assert.strictEqual(sliding.open, true, '已熔断不因窗口滑出而自动恢复（批次语义）');
sliding.trip();
assert.strictEqual(sliding.open, true, 'trip() 可手动触发');

// === parseEndpoint ===
assert.deepStrictEqual(parseEndpoint(''), { host: 'token.sensenova.cn', path: '/v1/chat/completions' });
assert.deepStrictEqual(parseEndpoint(undefined), { host: 'token.sensenova.cn', path: '/v1/chat/completions' });
assert.deepStrictEqual(parseEndpoint('https://api.longcat.chat/openai/v1/chat/completions'), { host: 'api.longcat.chat', path: '/openai/v1/chat/completions' });

// === extractJSON ===
assert.deepStrictEqual(extractJSON('```json\n{"a":1}\n```', null), { a: 1 });
assert.deepStrictEqual(extractJSON('前缀 {"a":1} 后缀', null), { a: 1 });
assert.deepStrictEqual(extractJSON('{"a":1', null), { a: 1 }, '截断的 JSON 补全括号');
assert.strictEqual(extractJSON('完全不是JSON', 'fallback'), 'fallback');

// === coerceScore ===
assert.strictEqual(coerceScore('85'), 85);
assert.strictEqual(coerceScore(85.6), 86);
assert.strictEqual(coerceScore(150), 100, '超界收敛');
assert.strictEqual(coerceScore(-5), 0);
assert.strictEqual(coerceScore('abc'), null);

// === callChat：fetchImpl 注入 ===
(async () => {
  const r1 = await callChat([{ role: 'user', content: 'hi' }], {
    apiKey: 'k',
    fetchImpl: async (messages, opts) => {
      assert.strictEqual(opts.model, 'deepseek-v4-flash', '默认模型');
      return '{"attentionScore": 60}';
    },
  });
  assert.strictEqual(r1, '{"attentionScore": 60}');

  const r2 = await callChat([{ role: 'user', content: 'hi' }], {
    apiKey: 'k',
    baseUrl: 'https://api.longcat.chat/openai/v1/chat/completions',
    model: 'LongCat-2.5-Preview',
    fetchImpl: async (messages, opts) => {
      assert.strictEqual(opts.model, 'LongCat-2.5-Preview');
      return 'ok';
    },
  });
  assert.strictEqual(r2, 'ok');

  await assert.rejects(() => callChat([{ role: 'user', content: 'x' }], {}), /apiKey required/);

  // === callChatWithRetry：429 重试后成功 ===
  let attempts = 0;
  const retried = await callChatWithRetry([{ role: 'user', content: 'x' }], {
    apiKey: 'k',
    retryDelays: [1, 1],
    fetchImpl: async () => {
      attempts += 1;
      if (attempts === 1) throw new Error('HTTP 429: too many');
      return 'done';
    },
  }, 'test');
  assert.strictEqual(retried, 'done');
  assert.strictEqual(attempts, 2);

  // === callChatWithRetry：失败时用 fallback 渠道重试一次 ===
  const fb = await callChatWithRetry([{ role: 'user', content: 'x' }], {
    apiKey: 'k',
    fetchImpl: async () => { throw new Error('HTTP 500: boom'); },
    fallback: { apiKey: 'fallback-key', fetchImpl: async () => 'fallback-ok' },
  }, 'test');
  assert.strictEqual(fb, 'fallback-ok', '主渠道失败应落到 fallback');

  // === callChatWithRetry：guard 已熔断时不发任何请求 ===
  const preTripped = createRateLimitGuard({ threshold: 1, windowSize: 1 });
  preTripped.recordRateLimit();
  let touched = false;
  await assert.rejects(
    () => callChatWithRetry([{ role: 'user', content: 'x' }], {
      apiKey: 'k',
      guard: preTripped,
      fetchImpl: async () => { touched = true; return 'nope'; },
    }, 'test'),
    error => error instanceof RateLimitOpenError && error.code === 'RATE_LIMIT_OPEN',
    '熔断后应抛 RateLimitOpenError',
  );
  assert.strictEqual(touched, false, '熔断后不应再调用 fetchImpl');

  // === callChatWithRetry：429 把窗口打满时立刻抛哨兵错误，不继续退避 ===
  const blow = createRateLimitGuard({ threshold: 2, windowSize: 4 });
  let blowCalls = 0;
  const t0 = Date.now();
  await assert.rejects(
    () => callChatWithRetry([{ role: 'user', content: 'x' }], {
      apiKey: 'k',
      guard: blow,
      retryDelays: [50, 50, 50],
      fetchImpl: async () => { blowCalls += 1; throw new Error('HTTP 429: tpm/rpm limit'); },
    }, 'test'),
    error => error.code === 'RATE_LIMIT_OPEN',
  );
  assert.strictEqual(blowCalls, 2, `达到阈值即中止，不应重试满 4 次（实际 ${blowCalls}）`);
  assert.ok(Date.now() - t0 < 500, '不应把退避时间睡满');

  // === callChatWithRetry：未达阈值时仍正常重试成功 ===
  const g2 = createRateLimitGuard({ threshold: 5, windowSize: 10 });
  let okCalls = 0;
  const okv = await callChatWithRetry([{ role: 'user', content: 'x' }], {
    apiKey: 'k',
    guard: g2,
    retryDelays: [1, 1],
    fetchImpl: async () => { okCalls += 1; if (okCalls === 1) throw new Error('HTTP 429: tpm/rpm limit'); return 'done'; },
  }, 'test');
  assert.strictEqual(okv, 'done');
  assert.strictEqual(okCalls, 2);
  assert.strictEqual(g2.open, false, '一次 429 不该熔断');

  // === 关键不变量：熔断只针对主渠道，绝不能跳过 fallback ===
  // fallback 是另一家供应商的独立配额，不共享限流窗口。
  // 早期实现熔断打开就直接 throw，导致「主渠道限流」退化成「全渠道放弃」。
  const gFb = createRateLimitGuard({ threshold: 2, windowSize: 4 });
  let fbPrimary = 0;
  let fbFallback = 0;
  const viaFallback = await callChatWithRetry([{ role: 'user', content: 'x' }], {
    apiKey: 'pk',
    guard: gFb,
    retryDelays: [1, 1],
    fetchImpl: async () => { fbPrimary += 1; throw new Error('HTTP 429: tpm/rpm limit'); },
    fallback: { apiKey: 'fbk', model: 'backup-model', fetchImpl: async () => { fbFallback += 1; return 'FALLBACK_OK'; } },
  }, 'test');
  assert.strictEqual(viaFallback, 'FALLBACK_OK', '熔断触发后应切到备用渠道');
  assert.strictEqual(fbFallback, 1, '备用渠道应被调用一次');
  assert.strictEqual(gFb.open, true, '主渠道熔断状态仍然记录');
  assert.strictEqual(fbPrimary, 2, '主渠道在熔断前只应打到阈值');

  // 熔断在「入口」就已打开时（上一批遗留），仍要放行 fallback
  const gPre = createRateLimitGuard({ threshold: 1, windowSize: 1 });
  gPre.recordRateLimit();
  let prePrimary = 0;
  let preFallback = 0;
  const pre = await callChatWithRetry([{ role: 'user', content: 'x' }], {
    apiKey: 'pk',
    guard: gPre,
    fetchImpl: async () => { prePrimary += 1; return 'PRIMARY'; },
    fallback: { apiKey: 'fbk', fetchImpl: async () => { preFallback += 1; return 'FALLBACK_OK'; } },
  }, 'test');
  assert.strictEqual(pre, 'FALLBACK_OK');
  assert.strictEqual(prePrimary, 0, '熔断已开时不应再打主渠道');
  assert.strictEqual(preFallback, 1);

  // fallback 自身失败：抛错要带上主渠道原因，便于排查
  await assert.rejects(
    () => callChatWithRetry([{ role: 'user', content: 'x' }], {
      apiKey: 'pk',
      guard: createRateLimitGuard({ threshold: 1, windowSize: 1 }),
      fetchImpl: async () => { throw new Error('HTTP 429: primary limited'); },
      fallback: { apiKey: 'fbk', fetchImpl: async () => { throw new Error('HTTP 500: backup down'); } },
    }, 'test'),
    /primary limited \| fallback: HTTP 500/,
    '两渠道都失败时应合并错误信息且标明渠道',
  );

  // fallback 不应被主渠道的 guard 连坐：主渠道熔断后 fallback 成功不应让 guard 记成功
  const gIsolate = createRateLimitGuard({ threshold: 2, windowSize: 4 });
  await callChatWithRetry([{ role: 'user', content: 'x' }], {
    apiKey: 'pk',
    guard: gIsolate,
    retryDelays: [1, 1],
    fetchImpl: async () => { throw new Error('HTTP 429: tpm/rpm limit'); },
    fallback: { apiKey: 'fbk', fetchImpl: async () => 'FB' },
  }, 'test');
  assert.strictEqual(gIsolate.count429(), 2, 'fallback 成功不应冲淡主渠道的 429 计数');

  // === 三级渠道链：前两家都限流时必须能走到第三家 ===
  const three = await callChatWithRetry([{ role: 'user', content: 'x' }], {
    apiKey: 'k1',
    channels: [
      { name: 'primary-c', apiKey: 'k1', baseUrl: '', model: 'm1' },
      { name: 'stepfun', apiKey: 'k2', baseUrl: '', model: 'm2' },
      { name: 'sensenova', apiKey: 'k3', baseUrl: '', model: 'm3' },
    ],
    guard: createRateLimitGuard({ threshold: 2, windowSize: 4 }),
    retryDelays: [1, 1],
    fetchImpl: async (messages, o) => {
      if (o.model === 'm1') throw new Error('HTTP 429: primary limited');
      if (o.model === 'm2') throw new Error('HTTP 429: stepfun limited');
      return 'THIRD_OK';
    },
  }, 'test');
  assert.strictEqual(three, 'THIRD_OK', '两级限流后应落到第三级渠道');

  // 整条链全挂：错误信息要包含每一家，便于判断该续哪个额度
  await assert.rejects(
    () => callChatWithRetry([{ role: 'user', content: 'x' }], {
      apiKey: 'k1',
      channels: [
        { name: 'primary-c', apiKey: 'k1', model: 'm1' },
        { name: 'stepfun', apiKey: 'k2', model: 'm2' },
      ],
      retryDelays: [1, 1],
      fetchImpl: async () => { throw new Error('HTTP 429: all limited'); },
    }, 'test'),
    /stepfun: HTTP 429/,
    '错误信息应标明每级渠道',
  );

  // 单渠道且限流时不应因为「有链」就误以为有备用
  await assert.rejects(
    () => callChatWithRetry([{ role: 'user', content: 'x' }], {
      apiKey: 'k1',
      channels: [{ name: 'only', apiKey: 'k1', model: 'm1' }],
      guard: createRateLimitGuard({ threshold: 1, windowSize: 1 }),
      fetchImpl: async () => { throw new Error('HTTP 429: only limited'); },
    }, 'test'),
    error => error.code === 'RATE_LIMIT_OPEN' || /429/.test(error.message),
    '单渠道限流应报限流而非「no channel available」',
  );

  // === runPool：并发执行且互不影响 ===
  const order = [];
  const tasks = [1, 2, 3, 4, 5].map(n => async () => {
    await new Promise(res => setTimeout(res, 10 - n));
    order.push(n);
    if (n === 3) throw new Error('x');
    return n * 10;
  });
  const results = await runPool(tasks, 3);
  assert.deepStrictEqual(results.map(r => (r.ok ? r.value : 'ERR')), [10, 20, 'ERR', 40, 50]);

  // === resolveLLMConfig ===
  const custom = resolveLLMConfig({
    FINHOT_LLM_API_KEY: 'ak-longcat',
    FINHOT_LLM_BASE_URL: 'https://api.longcat.chat/openai/v1/chat/completions',
    FINHOT_LLM_MODEL: 'LongCat-2.5-Preview',
    DEEPSEEK_API_KEY: 'sk-sensenova',
  });
  assert.strictEqual(custom.primary.apiKey, 'ak-longcat');
  assert.strictEqual(custom.primary.model, 'LongCat-2.5-Preview');
  assert.ok(custom.fallback, '自定义渠道应自动挂 SenseNova 兜底');
  assert.strictEqual(custom.fallback.apiKey, 'sk-sensenova');

  const def = resolveLLMConfig({ DEEPSEEK_API_KEY: 'sk-sensenova' });
  assert.strictEqual(def.primary.apiKey, 'sk-sensenova');
  assert.strictEqual(def.primary.baseUrl, '');
  assert.strictEqual(def.primary.name, 'sensenova', '未配自定义端点时 SenseNova 是主渠道');
  assert.strictEqual(def.fallback, undefined);
  assert.strictEqual(def.channels.length, 1, '单渠道');
  assert.strictEqual(def.maxTokens, undefined, '非推理渠道不特殊放大 maxTokens');

  const none = resolveLLMConfig({});
  assert.strictEqual(none.configured, false);
  assert.strictEqual(none.channels.length, 0);

  // === 渠道链：配了就用，按custom → stepfun → sensenova 排序 ===
  const chain = resolveLLMConfig({
    FINHOT_LLM_API_KEY: 'ak-custom',
    FINHOT_LLM_BASE_URL: 'https://api.longcat.chat/openai/v1/chat/completions',
    FINHOT_LLM_MODEL: 'LongCat-2.5-Preview',
    STEPFUN_API_KEY: 'sk-stepfun',
    FINHOT_LLM_STEPFUN_BASE_URL: 'https://api.stepfun.com/v1/chat/completions',
    FINHOT_LLM_STEPFUN_MODEL: 'step-3.7-flash',
    DEEPSEEK_API_KEY: 'sk-sensenova',
  });
  assert.deepStrictEqual(chain.channels.map(c => c.name), ['custom', 'stepfun', 'sensenova']);
  assert.strictEqual(chain.primary.name, 'custom', '链首=显式指定的 custom');
  assert.strictEqual(chain.fallback.name, 'stepfun', '保留旧字段：第二个渠道当 fallback');
  assert.strictEqual(chain.channels[1].baseUrl, 'https://api.stepfun.com/v1/chat/completions');
  assert.strictEqual(chain.channels[1].model, 'step-3.7-flash');
  assert.strictEqual(chain.channels[2].apiKey, 'sk-sensenova', 'SenseNova 垫底');

  // StepFun 作为主渠道时必须放大 maxTokens（推理模型会吃光 800/4000）
  const stepFirst = resolveLLMConfig({
    STEPFUN_API_KEY: 'sk-stepfun',
    FINHOT_LLM_STEPFUN_BASE_URL: 'https://api.stepfun.com/step_plan/v1/chat/completions',
    FINHOT_LLM_STEPFUN_MODEL: 'step-3.7-flash',
    DEEPSEEK_API_KEY: 'sk-sensenova',
  });
  assert.strictEqual(stepFirst.primary.name, 'stepfun');
  assert.strictEqual(stepFirst.maxTokens, 16000, 'StepFun 主渠道 maxTokens 应为 16000');

  // Step Plan 端点与按量端点路径不同，必须由env 整串传入，代码不猜
  assert.strictEqual(
    stepFirst.channels[0].baseUrl,
    'https://api.stepfun.com/step_plan/v1/chat/completions',
    '端点原样保留，不做拼接',
  );

  // 只配 StepFun 没有 baseUrl 时不该凭空造端点
  const bareStep = resolveLLMConfig({ STEPFUN_API_KEY: 'sk-stepfun' });
  assert.strictEqual(bareStep.channels[0].baseUrl, '', '未给baseUrl 就留空，由 DEFAULT 兜底');
  assert.strictEqual(bareStep.maxTokens, 16000, '按渠道名判断而非 baseUrl');

  console.log('llm tests passed');
})().catch(error => { console.error(error); process.exit(1); });
