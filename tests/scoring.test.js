'use strict';

// 从业价值评分（scripts/scoring.js）单测
// 重点盯住三条不变量：
//   1) 来源等级只决定门槛，绝不影响分数；
//   2) 五个维度之和恒为 100，且不存在 authority / depth 这两个被删掉的轴；
//   3) 噪声规则的作用域（title / text）必须真的分开。

const assert = require('assert');
const {
  AXIS_MAX,
  NOISE_RULES,
  TIER_GATES,
  applyNoiseCaps,
  buildWhy,
  confidenceFor,
  isHardLeadAd,
  recencyScore,
  scoreEvidence,
  scoreItem,
  tierGateFor,
} = require('../scripts/scoring');

const hoursAgo = hours => new Date(Date.now() - hours * 3600000).toISOString();

// === 轴权重 ===
assert.strictEqual(
  Object.values(AXIS_MAX).reduce((sum, value) => sum + value, 0),
  100,
  '五轴权重之和必须是 100',
);
assert.deepStrictEqual(
  Object.keys(AXIS_MAX),
  ['relevance', 'impact', 'evidence', 'recency', 'actionability'],
);

// === 可核验要素 ===
const richEvidence = scoreEvidence('中国人民银行公告2026年第3号：下调存款准备金率0.5%');
assert.strictEqual(richEvidence.score, 17);
assert.deepStrictEqual(richEvidence.breakdown, { namedSubject: 6, regDocument: 6, quantity: 5 });

const dateEvidence = scoreEvidence('央行宣布降准 2026年9月1日起执行');
assert.strictEqual(dateEvidence.score, 9);
assert.deepStrictEqual(dateEvidence.breakdown, { namedSubject: 6, explicitDate: 3 });

assert.strictEqual(scoreEvidence('一文读懂什么是分红险？').score, 0);
assert.deepStrictEqual(scoreEvidence('一文读懂什么是分红险？').breakdown, {});
// 四个要素全中刚好 20 分，不允许突破该轴上限。
assert.ok(scoreEvidence('中国人民银行公告2026年第3号 2026年9月1日 下调0.5% 第5条').score <= AXIS_MAX.evidence);

// === 噪声上限：作用域必须分开 ===
const titleScopedNoise = applyNoiseCaps(100, '限时特惠 开门红 预约有礼', '');
assert.strictEqual(titleScopedNoise.cap, 20);
assert.ok(titleScopedNoise.matched.includes('营销与活动推广'));

// 正文里出现"资料免费领取"很常见，不能按标题级营销稿一刀切成 20 分。
const bodyOnlyCta = applyNoiseCaps(100, '四大险种条款逐条拆解', '文末资料免费领取，私信我');
assert.strictEqual(bodyOnlyCta.cap, 60);
assert.deepStrictEqual(bodyOnlyCta.matched, ['正文含引流入口']);

const roundup = applyNoiseCaps(100, '2026年二季度保险资金运用情况盘点', '');
assert.strictEqual(roundup.cap, 50);
assert.ok(roundup.matched.includes('主题性汇总'));

const returnClaim = applyNoiseCaps(100, '年化收益7.2%的产品推荐', '');
assert.strictEqual(returnClaim.cap, 30);
assert.ok(returnClaim.matched.includes('无口径收益宣传'));

// 交代了口径就不该被压制。
const returnWithCaliber = applyNoiseCaps(100, '分红险演示利率上限3.5%，监管明确口径', '');
assert.strictEqual(returnWithCaliber.cap, 100);
assert.deepStrictEqual(returnWithCaliber.matched, []);

const marketTick = applyNoiseCaps(100, '截至收盘，沪指涨0.5%', '');
assert.strictEqual(marketTick.cap, 30);
assert.deepStrictEqual(marketTick.matched, ['行情播报']);

// 口径关键词出现在正文也算交代了口径。
assert.strictEqual(
  applyNoiseCaps(100, '某产品收益亮眼', '监管批复的结算利率为3.5%').cap,
  100,
);

for (const rule of NOISE_RULES) {
  assert.ok(['title', 'text'].includes(rule.scope), `噪声规则 ${rule.label} 的 scope 非法`);
  assert.ok(rule.cap >= 1 && rule.cap <= 100, `噪声规则 ${rule.label} 的 cap 越界`);
  assert.ok(rule.patterns.length > 0 && rule.patterns.every(p => p instanceof RegExp));
}

// === 门槛 ===
assert.deepStrictEqual(TIER_GATES, { S0: 50, S1: 55, S2: 60, S3: 70 });
assert.strictEqual(tierGateFor('S0'), 50);
assert.strictEqual(tierGateFor('S3'), 70);
assert.strictEqual(tierGateFor('S9'), 70, '未知等级回退到最严门槛');
assert.strictEqual(tierGateFor(undefined), 70);

// === 时效：7 天窗口的源必须与旧的绝对刻度完全一致（向后兼容） ===
const legacyRecency = hours => (hours < 6 ? 15 : hours < 24 ? 13 : hours < 72 ? 10 : hours < 168 ? 7 : 0);
const sevenDaySource = { maxAgeDays: 7 };
for (const hours of [0, 1, 5.9, 6, 12, 23.9, 24, 40, 71.9, 72, 100, 167.9, 168, 500]) {
  assert.strictEqual(
    recencyScore(new Date(Date.now() - hours * 3600000).getTime(), sevenDaySource),
    legacyRecency(hours),
    `7 天窗口源在 ${hours}h 处的时效分应保持旧行为`,
  );
}
// 未声明窗口的源按 7 天处理。
assert.strictEqual(
  recencyScore(new Date(Date.now() - 5 * 3600000).getTime(), {}),
  recencyScore(new Date(Date.now() - 5 * 3600000).getTime(), sevenDaySource),
);

// === 时效：30 天窗口的源按源自身窗口归一化，不会因为"不是今天发的"就判 0 ===
const thirtyDaySource = { maxAgeDays: 30 };
assert.strictEqual(recencyScore(new Date(Date.now() - 6 * 3600000).getTime(), thirtyDaySource), 15);
assert.strictEqual(recencyScore(new Date(Date.now() - 72 * 3600000).getTime(), thirtyDaySource), 13);
assert.strictEqual(recencyScore(new Date(Date.now() - 200 * 3600000).getTime(), thirtyDaySource), 10);
assert.strictEqual(recencyScore(new Date(Date.now() - 500 * 3600000).getTime(), thirtyDaySource), 7);
assert.strictEqual(recencyScore(new Date(Date.now() - 800 * 3600000).getTime(), thirtyDaySource), 0);
// 绝对刻度更宽松时取绝对刻度（两把尺子取高者）。
assert.strictEqual(recencyScore(new Date(Date.now() - 6 * 3600000).getTime(), { maxAgeDays: 90 }), 15);
assert.strictEqual(recencyScore(NaN, thirtyDaySource), 0, '时间缺失不得获得时效分');

// === scoreItem 不变量 ===
const regulatoryItem = {
  title: '金监总局公告2026年第5号：分红险演示利率上限调整为3.5%',
  summary: '监管部门明确分红险演示利率口径',
  publishedAt: hoursAgo(1),
};
const asS0 = scoreItem(regulatoryItem, { tier: 'S0', category: 'regulatory', maxAgeDays: 7 });
const asS3 = scoreItem(regulatoryItem, { tier: 'S3', category: 'regulatory', maxAgeDays: 7 });

assert.deepStrictEqual(
  Object.keys(asS0.scoreBreakdown).sort(),
  ['actionability', 'evidence', 'impact', 'recency', 'relevance'],
  '评分轴必须是这五个，authority / depth 已被删除',
);
assert.ok(!('authority' in asS0.scoreBreakdown));
assert.ok(!('depth' in asS0.scoreBreakdown));
assert.strictEqual(asS0.rawScore, 95);
assert.strictEqual(asS0.score, 95);
assert.strictEqual(asS0.tierGate, 50);
assert.strictEqual(asS0.passesTierGate, true);
assert.strictEqual(asS0.confidence, 'high');
assert.deepStrictEqual(asS0.why, [
  '权威原始来源',
  '对展业/配置/合规有直接影响',
  '可转化为客户沟通或投研关注',
]);

// 换等级不动分数，只动门槛——这正是本轮改造的核心。
assert.strictEqual(asS3.score, asS0.score, '来源等级不得影响分数');
assert.strictEqual(asS3.rawScore, asS0.rawScore);
assert.deepStrictEqual(asS3.scoreBreakdown, asS0.scoreBreakdown);
assert.strictEqual(asS3.tierGate, 70);
assert.notStrictEqual(asS3.why[0], asS0.why[0], 'why 的说明文案应随等级变化');

// passesTierGate 必须严格等于 score >= tierGate。
for (const tier of ['S0', 'S1', 'S2', 'S3']) {
  const meta = scoreItem(regulatoryItem, { tier, category: 'regulatory' });
  assert.strictEqual(meta.passesTierGate, meta.score >= meta.tierGate);
}

// 无信息量的条目：分数低到过不了任何门槛。
const emptyItem = scoreItem({ title: '公司公告', summary: '', publishedAt: null }, { tier: 'S3', category: 'industry' });
assert.strictEqual(emptyItem.score, 24, '相关性兜底 12 + 影响 8 + 可行动性 4 + 证据 0 + 时效 0');
assert.strictEqual(emptyItem.passesTierGate, false);
assert.strictEqual(emptyItem.confidence, 'low');

// === 置信度：反映"能不能核对"，不是"是不是官方" ===
assert.strictEqual(confidenceFor({ evidence: 2, relevance: 30 }, { tier: 'S0' }), 'low', 'S0 身份不得直接给 high');
assert.strictEqual(confidenceFor({ evidence: 6, relevance: 20 }, { tier: 'S0' }), 'medium');
assert.strictEqual(confidenceFor({ evidence: 8, relevance: 10 }, { tier: 'S3' }), 'medium');
assert.strictEqual(confidenceFor({ evidence: 14, relevance: 30 }, { tier: 'S3' }), 'high');
assert.strictEqual(confidenceFor({ evidence: 14, relevance: 25 }, { tier: 'S0' }), 'medium');

// === why 的文案：UGC 不能被叫成"快讯线索" ===
const ugcSource = { tier: 'S3', category: 'insights', evidenceType: 'ugc_opinion', maxAgeDays: 30 };
const ugcMeta = scoreItem({
  title: '分红险的预定利率、演示利率、分红实现率分别是什么意思？',
  summary: '一文讲清三个利率口径的差别',
  publishedAt: hoursAgo(24),
}, ugcSource);
assert.strictEqual(ugcMeta.why[0], '从业者实操视角，需自行判断');
assert.ok(!ugcMeta.why.includes('快讯线索，需结合原文判断'));
assert.ok(buildWhy(ugcMeta.scoreBreakdown, {}, ugcSource).includes('从业者实操视角，需自行判断'));

const flashMeta = scoreItem({
  title: '某券商研报提示债券市场波动风险',
  summary: '',
  publishedAt: hoursAgo(2),
}, { tier: 'S3', category: 'industry', evidenceType: 'news_flash' });
assert.strictEqual(flashMeta.why[0], '快讯线索，需结合原文判断');

// why 最多三条。
assert.ok(scoreItem(regulatoryItem, { tier: 'S0', category: 'regulatory' }).why.length <= 3);

// === 导购软文与企业公关稿 ===
// 背景：慧保天下是保险垂直媒体，专写「重疾险怎么选」「企业品牌公关稿」。
// 这类内容的词汇就是行业词，相关性天然满分，旧规则下能拿 60+ 分稳过 S2 门槛，
// 于是进了首页精选。压到门槛以下即可下架，但条目仍保留在「全部动态」。

const softAdCap = applyNoiseCaps(90, '重疾险怎么选？', '条款对比');
const prCap = applyNoiseCaps(90, '新华保险史上最大规模荣耀峰会赋能代理人升级', '企业动态');
assert.ok(softAdCap.matched.includes('选购向导购软文'));
assert.ok(prCap.matched.includes('企业品牌公关稿'));
// 压到 45/40，低于 S2 门槛 60 —— 关键不变量：软文必须过不了门槛。
assert.ok(softAdCap.score < TIER_GATES.S2, '选购向软文必须低于 S2 门槛');
assert.ok(prCap.score < TIER_GATES.S2, '企业公关稿必须低于 S2 门槛');

// 报道性内容豁免：监管通报、征求意见、财报数据解读同样会带「怎么选」字样。
assert.ok(!applyNoiseCaps(90, '重疾险怎么选？', '<p>金监总局发布通知，行业整改</p>').matched.includes('选购向导购软文'));
assert.ok(!applyNoiseCaps(90, '监管通报多家险企违规销售', '<p>处罚决定书</p>').matched.includes('企业品牌公关稿'));

// 官方主体豁免：证监会主席演讲稿里的「谱写新篇章」是正式表述，不是营销。
assert.ok(!applyNoiseCaps(90, '奋力谱写资本市场高质量发展新篇章——吴清主席主题演讲', '<p>金融街论坛</p>').matched.includes('企业品牌公关稿'));

// 通用措辞不得误伤财经新闻：这些词在股市/科技新闻里极常见。
const nonInsuranceNews = [
  ['美股市值前十公司仅苹果上涨 大型科技股普遍承压', '盘面'],
  ['小扎打赢AI翻身仗？3D实测却惨遭打脸', '模型评测'],
  ['10月16日投资避雷针：高盛发布研报称储能增长难抵供应过剩', '提示风险'],
  ['国产车企自主四强齐聚 方盒子进入大厂混战', '行业'],
  ['OpenAI现场翻车 发布个人AI助手迎战Meta', '发布会'],
];
nonInsuranceNews.forEach(([title, summary]) => {
  const caps = applyNoiseCaps(90, title, summary);
  assert.ok(
    !caps.matched.includes('选购向导购软文') && !caps.matched.includes('企业品牌公关稿'),
    `通用措辞不得误伤: ${title}`,
  );
});

// 真实软文必须被识别（来自线上 5000 条历史存档的实测样本）。
const realAdTitles = [
  '2026年分红险测评:市场TOP2分红型增额寿险PK',
  '养老年金该怎么买?',
  '保险界四大金刚(重疾险、寿险、医疗险、意外险),保险应该怎么买?',
  '三十年长期主义华泰财险质量效益理念铺就价值型成长之路',
  '新华保险史上最大规模荣耀峰会保险服务投资三端密集新动作赋能代理人升级',
  '十年长护足迹亿万家庭的老有所护',
];
realAdTitles.forEach(title => {
  const caps = applyNoiseCaps(90, title, '保险年金养老');
  assert.ok(
    caps.matched.includes('选购向导购软文') || caps.matched.includes('企业品牌公关稿'),
    `真实软文必须被识别: ${title}`,
  );
});

// 硬引流：选购向 + 引流动作 = 纯广告，直接丢弃。
assert.strictEqual(isHardLeadAd('重疾险怎么选？', '<p>扫码进群领取资料</p>'), true);
assert.strictEqual(isHardLeadAd('重疾险怎么选？', '<p>条款对比分析</p>'), false);
// 非保险语境不丢（避免把「避雷」类财经快讯误杀）。
assert.strictEqual(isHardLeadAd('投资避雷针：市场风险提示', '<p>扫码关注获取报告</p>'), false);

console.log('scoring tests passed');
