'use strict';

// === 从业价值评分 ===
// 本轮改造修掉旧实现的两个概念错误：
//
//  1) 来源等级被当成加分项
//     旧：authority = S0?20 : S1?18 : S2?15 : S3?9
//     后果：一条毫无信息的证监会党建公告凭 S0 白拿 20 分；媒体写得很扎实的深度稿
//     因为 S2 先输 5 分。等级混淆了"该不该看"和"有多好看"。
//     现在：等级只决定入选门槛（TIER_GATES），不进分数。官方源门槛低即可。
//
//  2) depth 按摘要长度给分
//     旧：summaryLen > 180 ? 10 : summaryLen > 100 ? 8 : ...
//     后果：等于"长正文自动加分"，营销稿越长分越高。
//     现在：evidence 维度看"可核验要素"（机构名、监管文号、具体数字、明确日期），不看长度。

const { EVENT_SUBJECTS, isMarketTickTitle } = require('./core');

/**
 * 入选门槛（按来源等级分档）。分数达到本档门槛才进"今日精选"。
 * 官方一手源门槛低（同一件事官方原文更值得先看），快讯/观点线索门槛高。
 */
const TIER_GATES = Object.freeze({ S0: 50, S1: 55, S2: 60, S3: 70 });

function tierGateFor(tier) {
  return Object.prototype.hasOwnProperty.call(TIER_GATES, tier) ? TIER_GATES[tier] : TIER_GATES.S3;
}

/** 五轴权重之和为 100。全部只看内容，不含任何来源身份加分。 */
const AXIS_MAX = Object.freeze({
  relevance: 30,
  impact: 25,
  evidence: 20,
  recency: 15,
  actionability: 10,
});

const RELEVANCE_GROUPS = [
  { score: 30, keywords: ['保险', '险企', '险资', '寿险', '财险', '健康险', '重疾', '医疗险', '养老', '年金', '分红险', '增额终身寿', '万能险', '精算', '偿付能力', '保费', '理赔', '保单', '金监总局', '银保监'] },
  { score: 26, keywords: ['私募', '基金', '资管', '理财', '债券', 'ETF', '证券', '对冲', '量化', 'FOF', '净值'] },
  { score: 20, keywords: ['银行', '利率', '央行', '证监会', '降准', '降息', 'LPR', 'MLF', '监管', '期货', '汇率'] },
];

const IMPACT_GROUPS = [
  { score: 25, keywords: ['监管', '处罚', '法规', '通知', '批复', '偿付能力', '预定利率', '演示利率', '分红实现率', '分红水平', '结算利率', '降息', '降准', '停售', '下架'] },
  { score: 21, keywords: ['业绩', '保费', '赔付', '理赔', '拒赔', '并购', '增资', '资产配置', '股债', '投资收益率', '风险提示', '合规', '双录', '返佣', '销售误导', '健康告知'] },
  { score: 16, keywords: ['产品', '新基金', '理财产品', '年金', '养老', '策略', '仓位', '回撤', '募集', '分红险', '增额寿', '增额终身寿', '重疾险', '医疗险', '百万医疗', '定期寿险', '测评', '对比', '怎么选', '避坑', '展业'] },
];

const ACTIONABILITY_GROUPS = [
  { score: 10, keywords: ['风险提示', '合规', '客户', '配置', '理财', '年金', '养老', '产品', '展业', '沟通', '话术', '保单检视'] },
  { score: 8, keywords: ['利率', '保费', '赔付', '研报', '评级', '资金流向', '避坑', '理赔'] },
];

/** 监管文号与法规名称：可作为事实核对依据的强证据。 */
const REG_DOCUMENT_PATTERN = /(第[一二三四五六七八九十百零]+条|〔\s*\d{4}\s*〕|\[\s*\d{4}\s*\]|公告\s*20\d{2}\s*年第|20\d{2}\s*年第\s*\d+\s*号|征求意见稿|实施细则|管理办法|业务指引|监管规则|暂行办法|自律公约)/;
/** 具体数字：百分比、金额、基点。 */
const QUANTITY_PATTERN = /(\d+(?:\.\d+)?\s*%|\d+(?:\.\d+)?\s*(?:亿元|万元|万亿|亿|万|元|个基点|bp|BP))|(\d+(?:\.\d+)?\s*倍)/;
/** 明确日期。 */
const DATE_PATTERN = /(20\d{2}\s*年\s*\d{1,2}\s*月|\d{1,2}\s*月\s*\d{1,2}\s*日|上半年|下半年|一季度|二季度|三季度|四季度|前三季度|全年)/;

/**
 * 噪声硬上限。命中即把总分压到上限以内，与来源等级无关。
 *
 * 两条设计约束，都是实测踩出来的：
 *  1) 精度分层——单一命中即封顶 20 分，会误伤真正的干货。
 *     例：「返佣正式入刑」讲的是两高司法解释，正文却常带"福利/优惠"，一刀切成 20 分就把监管解读误杀了。
 *     所以高精度词组封顶 20，中精度单词只温和压制（封顶 50）。
 *  2) 作用域分层——"营销软文"是标题级特征，"文末有领取入口"不是。
 *     例：一篇《四大险种避坑指南》正文末尾写"资料免费领取"很常见，
 *     按正文判定会把整篇长文打成 20 分。所以文体与身份类规则只看标题，正文只做温和压制。
 */
const NOISE_RULES = [
  {
    cap: 20,
    scope: 'title',
    label: '营销与活动推广',
    patterns: [/开门红/, /限时特惠/, /限时优惠/, /钜惠/, /特惠/, /预约有礼/, /免费领取/, /扫码/, /加微信/, /添加微信/, /立即报名/, /报名/, /戳链接/, /复制口令/, /下单/, /拼团/, /团购/, /福利/, /抢购/, /仅剩/, /最后\d+天/, /微信号/],
  },  {
    cap: 50,
    scope: 'title',
    label: '疑似推广用语',
    patterns: [/直播/, /课程/, /训练营/, /招募/, /加盟/, /优惠/, /限时/],
  },
  {
    cap: 20,
    scope: 'title',
    label: '研报领取与引流',
    patterns: [/研报.{0,6}(领取|获取|下载|索取)/, /(资料|白皮书|干货).{0,6}(领取|下载|打包)/],
  },
  {
    cap: 60,
    scope: 'text',
    label: '正文含引流入口',
    // 正文出现"领取/私信"只做温和压制：长文末尾的常规 CTA 不代表内容本身是营销。
    patterns: [/免费领取/, /扫码/, /加微信/, /添加微信/, /点击领取/, /立即报名/, /回复.{0,4}关键词/, /后台回复/, /私信/, /添加.{0,4}(助手|顾问|客服)/],
  },
  {
    cap: 20,
    scope: 'title',
    label: '招聘与例行人事',
    patterns: [/招聘/, /诚聘/, /求职/, /换届/, /股东大会通知/, /任职资格核准/, /辞职/, /离任/, /聘任/, /讣告/],
  },
  {
    cap: 30,
    scope: 'title',
    label: '时间性盘点',
    patterns: [/晚间公告/, /早报/, /周报/, /日报/, /一周回顾/, /一周要闻/, /要闻回顾/, /今日看点/, /每日盘点/],
  },
  {
    cap: 50,
    scope: 'title',
    label: '主题性汇总',
    // 「XX大盘点/避坑指南」是知识性长文而非新闻流水账，只温和压制。
    patterns: [/盘点/, /汇总/, /十大/, /集锦/, /合集/],
  },
  {
    cap: 40,
    scope: 'title',
    label: '代理与维权案例引流',
    // 律所、理赔代理的"成功案例"确实含真实条款争议信息，不进精选但保留在全部动态。
    patterns: [/成功案例/, /案例分享.{0,6}(获赔|胜诉)/, /律师.{0,6}(代理|团队|提醒|建议)/, /代办理赔/, /理赔维权/, /帮客户.{0,6}(拿回|获赔)/, /我们帮/, /委托我们/],
  },
  {
    cap: 40,
    scope: 'title',
    label: '无规模的案例与合作PR',
    patterns: [/携手/, /签约仪式/, /授牌/, /揭牌/, /荣获/, /获奖/, /入选.{0,6}榜单/, /亮相/],
  },
  {
    cap: 45,
    scope: 'title',
    label: '选购向导购软文',
    // 保险垂直媒体（慧保天下一类）的主力内容形态之一：不是新闻，而是导购长文。
    // 这类标题在旧规则下能拿 60+ 分稳过 S2 门槛(60)，因为「保险/重疾/年金」
    // 本身就是行业词，相关性满分。
    //
    // 处置分级，而非一刀切丢弃：
    //   45 分 < S2 门槛(60) → 进不了精选，首页不再出现（这是用户要的）；
    //   但条目仍保留在「全部动态」，因为条款解读、费率对比确有参考价值。
    //
    // 注意：patterns 只是「选购向信号」，还需同时命中保险语境词才成立。
    // 否则「前十」「实测」「避雷」这些词在 AI/股市新闻里极常见，会造成误伤
    // （实测案例：财联社「美股市值前十公司」、华尔街见闻「3D实测却惨遭打脸」）。
    patterns: [
      /怎么选/, /如何选/, /该买哪/, /买哪个/, /买哪款/, /值不值/, /值不值钱/,
      /靠谱吗/, /能买吗/, /值得买吗/, /该不该买/, /该不该/, /买之前/, /买前必看/,
      /避坑/, /避雷/, /别再买/, /千万别买/, /千万别/, /误区/, /坑你/, /翻车/,
      /怎么买/, /挑选指南/, /选购指南/, /购买指南/, /产品对比/, /对比评测/, /深度测评/,
      /横评/, /榜单/, /排行/, /推荐榜/, /优选榜/, /测评/,
    ],
  },
  {
    cap: 40,
    scope: 'title',
    label: '企业品牌公关稿',
    // 慧保天下抓到的一批典型内容：企业名 + 褒扬性口号 + 活动/峰会通稿。
    // 例：「新华保险史上最大规模荣耀峰会…」「三十年长期主义华泰财险质量效益
    // 理念铺就价值型成长之路」「十年长护足迹亿万家庭的老有所护」。
    //
    // 同样需要保险语境限定：「谱写新篇章」「共话高质量发展」在证监会主席
    // 演讲稿、上市公司公告里也高频出现，不能一刀切。
    patterns: [
      /坚守.{0,6}长期主义/, /长期主义.{0,8}(构筑|筑就|铺就|护航|引领)/,
      /.{0,8}谱写.{0,8}(新篇章|新华章)/, /.{0,8}奏响.{0,8}(新乐章|最强音)/,
      /.{0,8}绘就.{0,8}(新图景|蓝图|新篇)/, /.{0,8}(荣耀|盛誉|殊荣).{0,6}峰会/,
      /.{0,8}(最大规模|史上首个|首届).{0,4}(峰会|盛典|大会)/,
      /赋能.{0,6}(代理人|客户|发展|增长|转型)/, /.{0,6}(蝶变|跃升)/,
      /践行.{0,6}(责任|使命|担当|初心)/, /彰显.{0,6}(实力|担当|温度)/,
      /共话.{0,8}(高质量发展|新机遇|新征程)/, /共绘.{0,8}(蓝图|新图景)/,
      /主题活动即将启幕/, /即将启幕/, /圆满举办/, /成功举办/, /顺利举办/,
      /助推.{0,6}(高质量发展|新篇章)/, /开启.{0,8}(新篇章|新征程)/,
      /高质量发展主题/, /以.{0,4}为.{0,4}(基石|底座|抓手)/,
      /筑就.{0,6}价值型成长之路/, /铺就.{0,6}价值型成长之路/,
      /助力.{0,6}(高质量发展|腾飞|新篇章)/, /暖心相伴/, /爱心.{0,4}行/,
      /亿万家庭/, /实地探访/, /.{0,6}足迹/, /齐聚/, /共话长护/,
      /大咖云集/, /论坛共话/, /共议/, /.{0,6}(万里行|中国行|环球行)/,
    ],
  },
];

/**
 * 保险/理财语境词：选购向软文与品牌公关稿必须落在本行业语境内才成立。
 * 用于避免「前十」「实测」「避雷」「翻车」在 AI、股市、科技新闻里的误伤。
 */
const INSURANCE_CONTEXT = [
  '保险', '险企', '寿险', '财险', '险资', '保费', '理赔', '保单', '重疾', '医疗险',
  '年金', '养老', '年金险', '增额', '终身寿', '分红险', '万能险', '投连', '惠民保',
  '百万医疗', '意外险', '定期寿险', '受益人', '投保', '被保人', '保额', '现价',
  '预定利率', '演示利率', '双录', '代理人', '银保', '个险', '团险', '长护险',
];

/**
 * 官方/权威主体：这些来源的「谱写新篇章」「高质量发展」是正式讲话与公告，
 * 不是营销软文，直接豁免。
 */
const OFFICIAL_SUBJECTS = [
  '证监会', '银保监', '金融监管总局', '金监总局', '央行', '人民银行', '国务院',
  '金融委', '外汇局', '统计局', '发改委', '财政部', '银保监', '保险业协会',
  '银行业协会', '基金业协会', '主席', '主席会议', '副主席', '监管主席',
];


/**
 * 报道性标记：出现任一即说明这篇是在报道，而不是在推销。
 * 用于豁免「选购向导购软文」规则——监管处罚通报、征求意见稿、财报数据解读
 * 都可能带「怎么选/对比」字样，属于服务性报道，不应被当成软文压制。
 */
const REPORTING_MARKERS = [
  '监管', '处罚', '罚款', '罚单', '约谈', '通报', '整改', '取缔', '立案',
  '政策', '新规', '通知', '办法', '规定', '条例', '征求意见', '实施细则', '指引',
  '发布会', '财报', '业绩', '数据', '统计', '报告', '披露', '试点', '会议',
  '银保监', '金监总局', '证监会', '央行', '金融监管总局', '行业协会',
];

/**
 * 判断某条 NOISE_RULE 是否应当生效。
 *
 * 「选购向导购软文」与「企业品牌公关稿」两个规则命中的是**通用措辞**，
 * 必须在保险/理财语境下才成立，否则会误伤财经新闻：
 *   - 「前十」「实测」「避雷」在股市与科技新闻里极常见；
 *   - 「谱写新篇章」「共话高质量发展」在证监会主席演讲稿里是正式表述。
 * 因此需要三重限定：保险语境 + 非官方主体 + 无报道性标记。
 */
function shouldApplySoftAdRule(label, title, bodyText) {
  if (label !== '选购向导购软文' && label !== '企业品牌公关稿') return true;
  // 官方主体的正式讲话与公告豁免。
  if (OFFICIAL_SUBJECTS.some(subject => bodyText.includes(subject))) return false;
  // 报道性标记说明这是报道而非推销：监管通报、征求意见、财报数据解读。
  if (REPORTING_MARKERS.some(marker => bodyText.includes(marker))) return false;
  // 必须落在保险/理财语境里，否则「实测」「避雷」等通用词会造成误伤。
  return INSURANCE_CONTEXT.some(context => bodyText.includes(context));
}

/**
 * 强引流信号：导购软文叠加了明确的索取动作，就不再是「参考性长文」，
 * 而是广告。这类直接丢弃，不进「全部动态」。
 */
const HARD_LEAD_PATTERNS = [
  /扫码/, /二维码/, /加\s*微信/, /添加微信/, /微信号/, /进群/, /加群/,
  /点击领取/, /免费领取/, /回复.{0,4}领取/, /领取资料/, /限时领取/,
  /名额有限/, /手慢无/, /立即咨询/, /马上咨询/, /电话咨询/, /预约.{0,4}咨询/,
  /立即购买/, /立即投保/, /抢先投保/, /免费试用/,
];

/**
 * 判断是否为需要彻底丢弃的引流型软文。
 * 单独一个选购向标题不足以定性（服务性长文仍有参考价值），
 * 但选购向 + 强引流 = 纯广告。
 */
function isHardLeadAd(title, summary) {
  const bodyText = `${title || ''} ${summary || ''}`;
  const isShopping = NOISE_RULES
    .filter(rule => rule.label === '选购向导购软文')
    .some(rule => rule.patterns.some(pattern => pattern.test(title || '')));
  if (!isShopping) return false;
  // 与降权规则共用同一套限定，避免「怎么买」这类通用问句在非保险语境被误丢。
  if (!shouldApplySoftAdRule('选购向导购软文', title || '', bodyText)) return false;
  return HARD_LEAD_PATTERNS.some(pattern => pattern.test(bodyText));
}

/** 「无口径收益宣传」：出现收益数字，却没有交代口径来源。 */
const RETURN_CLAIM_PATTERN = /(年化|收益率|收益|利率|结算|演示).{0,8}\d+(?:\.\d+)?\s*%/;
const RETURN_CALIBER_KEYWORDS = [
  '预定利率', '演示利率', '分红实现率', '结算利率', '综合投资收益率', '财务投资收益率',
  '监管', '批复', '公告', '文件', '办法', '通知', '口径', '保险条款', '合同约定',
];
/**
 * 融资类语境豁免。发债票面利率、资本补充债发行利率是市场事实，不是产品收益宣传，
 * 混在一起会把《18 家险企发债 600 亿，票面利率最低至 1.9%》这类行业稿误压成 30 分。
 */
const RETURN_CLAIM_EXEMPT = ['发债', '票面利率', '发行利率', '资本补充债', '融资', '增资', '债券发行'];

function hasAny(text, keywords) {
  const lower = (text || '').toLowerCase();
  return keywords.some(keyword => lower.includes(keyword.toLowerCase()));
}

function bestGroupScore(text, groups, fallback) {
  let score = fallback;
  for (const group of groups) {
    if (hasAny(text, group.keywords)) score = Math.max(score, group.score);
  }
  return score;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * 可核验要素：这条材料自身提供了多少可以拿去核对的东西。
 * 刻意不看长度——营销长文也可以一个字都核不了，一条 60 字的监管快讯也能带文号和数字。
 */
function scoreEvidence(text) {
  const breakdown = {};
  let score = 0;
  if (EVENT_SUBJECTS.some(subject => text.includes(subject))) {
    breakdown.namedSubject = 6;
    score += 6;
  }
  if (REG_DOCUMENT_PATTERN.test(text)) {
    breakdown.regDocument = 6;
    score += 6;
  }
  if (QUANTITY_PATTERN.test(text)) {
    breakdown.quantity = 5;
    score += 5;
  }
  if (DATE_PATTERN.test(text)) {
    breakdown.explicitDate = 3;
    score += 3;
  }
  return { score: Math.min(score, AXIS_MAX.evidence), breakdown };
}

/** 命中哪些噪声规则；返回命中的标签列表并给出总分上限。 */
function applyNoiseCaps(rawScore, title, summary) {
  const titleText = title || '';
  const bodyText = `${titleText} ${summary || ''}`;
  const matched = [];
  let cap = 100;
  for (const rule of NOISE_RULES) {
    const scopeText = rule.scope === 'title' ? titleText : bodyText;
    if (!rule.patterns.some(pattern => pattern.test(scopeText))) continue;
    // 选购向软文与企业公关稿需通过三重限定（保险语境 / 非官方主体 / 无报道标记）
    // 才会生效，避免误伤财经新闻里的通用措辞。
    if (!shouldApplySoftAdRule(rule.label, titleText, bodyText)) continue;
    matched.push(rule.label);
    cap = Math.min(cap, rule.cap);
  }
  // 收益类数字必须交代口径，否则按"无口径收益宣传"压制。融资语境（发债票面利率等）豁免。
  if (RETURN_CLAIM_PATTERN.test(bodyText)
    && !hasAny(bodyText, RETURN_CALIBER_KEYWORDS)
    && !hasAny(bodyText, RETURN_CLAIM_EXEMPT)) {
    matched.push('无口径收益宣传');
    cap = Math.min(cap, 30);
  }
  // 日频行情播报本身不是"事件"，也不构成从业价值。
  if (isMarketTickTitle(titleText)) {
    matched.push('行情播报');
    cap = Math.min(cap, 30);
  }
  return { score: Math.min(rawScore, cap), cap, matched };
}

/** 各等级的默认说明。UGC（知乎）走 evidenceType 覆盖，不能被叫成"快讯线索"。 */
const TIER_REASONS = Object.freeze({
  S0: '权威原始来源',
  S1: '官方转述来源',
  S2: '专业财经媒体跟进',
  S3: '快讯线索，需结合原文判断',
});

function buildWhy(scoreBreakdown, item, source) {
  const why = [];
  if (source.evidenceType === 'ugc_opinion') why.push('从业者实操视角，需自行判断');
  else if (TIER_REASONS[source.tier]) why.push(TIER_REASONS[source.tier]);
  if (scoreBreakdown.impact >= 21) why.push('对展业/配置/合规有直接影响');
  if (scoreBreakdown.actionability >= 8) why.push('可转化为客户沟通或投研关注');
  if (scoreBreakdown.evidence >= 14) why.push('含机构、文号或可核对数据');
  if (scoreBreakdown.recency >= 13) why.push('时效性高');
  return why.slice(0, 3);
}

// 置信度反映"这条材料自身能不能核对"，与来源等级无关。
// 旧实现是 `S0 → high`，等于把官方身份直接当成事实强度。
function confidenceFor(scoreBreakdown, source) {
  if (scoreBreakdown.evidence >= 14 && scoreBreakdown.relevance >= 26) return 'high';
  if (scoreBreakdown.evidence >= 8) return 'medium';
  if (source.tier === 'S0' && scoreBreakdown.evidence >= 6) return 'medium';
  return 'low';
}

/**
 * 时效分。两把尺子取高者：
 *
 *  1) 新闻尺（绝对小时刻度）——7 天窗口的 RSS 主源用它，行为与本轮改造前完全一致；
 *  2) 源自身窗口尺（相对刻度）——按源声明的 maxAgeDays 归一化。
 *
 * 为什么需要第二把：知乎的 EditTime 中位数在 30 天内，只有约 7% 落在 7 天内。
 * 若一律套绝对刻度，这个 30 天窗口的源会被判 0 分（最高只能到 85 分、常态 70 分），
 * 等于拿新闻源的尺子量观点源——分数低不是因为它没价值，而是因为尺子不对。
 * 注意这不是来源身份加分：它只把"新鲜"的判定对齐到源自己声明的有效期，内容一个字没动。
 */
const NEWS_RECENCY_BUCKETS = [
  { maxHours: 6, score: AXIS_MAX.recency },
  { maxHours: 24, score: 13 },
  { maxHours: 72, score: 10 },
  { maxHours: 168, score: 7 },
];
const SOURCE_WINDOW_FALLBACK_DAYS = 7;
/**
 * 相对刻度的分位点：窗口前 3.6% / 14% / 33% / 100%。
 * 用严格小于（而非小于等于）是为了让 7 天窗口源的分位点恰好落在 6h / 24h / 72h / 168h，
 * 与绝对刻度完全对齐——否则 6 小时整会从 13 分被抬到 15 分。
 */
const WINDOW_RECENCY_BUCKETS = [
  { maxRatio: 1 / 28, score: AXIS_MAX.recency },
  { maxRatio: 1 / 7, score: 13 },
  { maxRatio: 1 / 3, score: 10 },
  { maxRatio: 1, score: 7 },
];

function recencyScore(publishedTimestamp, source) {
  if (Number.isNaN(publishedTimestamp)) return 0;
  const ageHours = (Date.now() - publishedTimestamp) / 3600000;
  let score = 0;
  for (const bucket of NEWS_RECENCY_BUCKETS) {
    if (ageHours < bucket.maxHours) { score = bucket.score; break; }
  }
  const windowDays = source && Number.isFinite(source.maxAgeDays) && source.maxAgeDays > 0
    ? source.maxAgeDays
    : SOURCE_WINDOW_FALLBACK_DAYS;
  const ageRatio = ageHours / (windowDays * 24);
  for (const bucket of WINDOW_RECENCY_BUCKETS) {
    if (ageRatio < bucket.maxRatio) { score = Math.max(score, bucket.score); break; }
  }
  return score;
}

function scoreItem(item, source) {
  const src = source || {};
  const text = `${item.title || ''} ${item.summary || ''}`;
  const publishedTimestamp = item.publishedAt ? new Date(item.publishedAt).getTime() : NaN;
  const recency = recencyScore(publishedTimestamp, src);
  const relevance = bestGroupScore(text, RELEVANCE_GROUPS, src.category === 'regulatory' ? 20 : 12);
  const impact = bestGroupScore(text, IMPACT_GROUPS, 8);
  const actionability = bestGroupScore(text, ACTIONABILITY_GROUPS, 4);
  const evidence = scoreEvidence(text);
  const scoreBreakdown = {
    relevance,
    impact,
    evidence: evidence.score,
    recency,
    actionability,
  };
  const rawScore = Object.values(scoreBreakdown).reduce((sum, value) => sum + value, 0);
  // 必须分开传标题与正文：NOISE_RULES 里 scope 是 'title' 的规则只看标题，
  // 合并成一段文本会把"正文末尾的领取入口"误判成标题级营销稿。
  const capped = applyNoiseCaps(rawScore, item.title || '', item.summary || '');
  const tierGate = tierGateFor(src.tier);
  const score = clamp(Math.round(capped.score), 0, 100);
  return {
    score,
    rawScore,
    scoreLabel: '从业价值',
    scoreBreakdown,
    evidenceBreakdown: evidence.breakdown,
    noiseCaps: capped.matched,
    tierGate,
    passesTierGate: score >= tierGate,
    confidence: confidenceFor(scoreBreakdown, src),
    why: buildWhy(scoreBreakdown, item, src),
  };
}

module.exports = {
  AXIS_MAX,
  HARD_LEAD_PATTERNS,
  IMPACT_GROUPS,
  INSURANCE_CONTEXT,
  NEWS_RECENCY_BUCKETS,
  NOISE_RULES,
  OFFICIAL_SUBJECTS,
  RELEVANCE_GROUPS,
  REPORTING_MARKERS,
  SOURCE_WINDOW_FALLBACK_DAYS,
  TIER_GATES,
  TIER_REASONS,
  WINDOW_RECENCY_BUCKETS,
  applyNoiseCaps,
  bestGroupScore,
  buildWhy,
  confidenceFor,
  isHardLeadAd,
  recencyScore,
  scoreEvidence,
  scoreItem,
  shouldApplySoftAdRule,
  tierGateFor,
};
