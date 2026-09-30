'use strict';

const assert = require('assert');
const {
  callChat,
  callChatWithRetry,
  coerceScore,
  extractJSON,
  parseEndpoint,
  resolveLLMConfig,
  runPool,
} = require('../scripts/llm');

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
  assert.strictEqual(def.fallback, undefined);

  const none = resolveLLMConfig({});
  assert.strictEqual(none.configured, false);

  console.log('llm tests passed');
})().catch(error => { console.error(error); process.exit(1); });
