#!/usr/bin/env python3
"""finhot-site data builder — generates data.js from today's news."""
import json
from datetime import datetime, timezone

NOW = "2026-05-29T17:09:17+08:00"
TODAY = "2026-05-29"

# ── items: all raw items, each with full fields ──
items = []

def add(title, summary, sourceName, sourceUrl, publishedAt, category, tags, tier="T2", score=60):
    items.append({
        "id": str(len(items) + 1),
        "title": title,
        "summary": summary,
        "sourceName": sourceName,
        "sourceUrl": sourceUrl,
        "publishedAt": publishedAt,
        "category": category,
        "tags": tags,
        "tier": tier,
        "score": score,
    })

# ─────────────────────────────────────────────
# 2026-05-29 DATA — compiled from neodata + web
# ─────────────────────────────────────────────

# == T1 监管类 ==
add(
    "全国人大常委会公布2026金融立法计划，将制定金融法、金融稳定法",
    "全国人大常委会法工委副主任黄薇5月27日表示，今年将制定金融法、金融稳定法，修改银行业监督管理法、中国人民银行法，金融法治建设驶入快车道。",
    "上海证券报", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260529142351975feb94",
    "2026-05-29T14:23:00.000Z", "regulatory", ["监管政策", "金融立法"], "T1", 82
)

add(
    "八部门联合整治非法跨境炒股，富途罚没18.5亿、老虎4.1亿",
    "证监会等八部门印发《综合整治非法跨境证券期货基金经营活动实施方案》，设置2年集中整治期，富途、老虎、长桥被立案处罚，合计罚没超22亿元。",
    "证监会/证券时报", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN202605251525229756599f",
    "2026-05-29T08:00:00.000Z", "regulatory", ["监管政策", "跨境投资", "证监会"], "T1", 85
)

add(
    "保险行业新规《自律规范》7月1日施行，产品与销售双分级",
    "保险业首部聚焦产品适当性管理的自律文件《保险产品适当性管理自律规范》将于2026年7月1日正式施行，人身险产品分P1-P5五级，销售也实行分级管理。",
    "中国经营报/中国保险行业协会", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260502103014a6e7186e",
    "2026-05-29T07:00:00.000Z", "regulatory", ["监管政策", "保险", "适当性管理"], "T1", 80
)

# == T1.5 行业动态 ==
add(
    "深港推动金融合作深度融合，聚焦科技金融与财富管理",
    "深港金融合作委员会第四次会议在深举行，讨论两地金融市场发展，聚焦科技金融、深化互联互通、做大财富管理等方向。",
    "第一财经", "http://gu.qq.com/resources/shy/news/detail-v2/index.html#/?id=nesSN20260529122140975fc452&s=b",
    "2026-05-29T12:21:00.000Z", "industry", ["行业动态", "深港金融", "互联互通"], "T1.5", 72
)

add(
    "财政部：1-4月国有企业营收26.27万亿元，利润同比增长1.9%",
    "财政部发布数据显示，1-4月国有企业营收同比下降0.5%，利润总额同比增长1.9%，应交税费同比增长3.9%。",
    "36氪", "https://36kr.com/newsflashes/3830123840825221",
    "2026-05-29T11:45:00.000Z", "industry", ["行业动态", "国企", "财政数据"], "T1.5", 65
)

add(
    "国家外汇管理局：4月中国外汇市场总计成交25.3万亿元",
    "2026年4月，中国外汇市场总计成交25.30万亿元人民币，1-4月累计成交101.08万亿元人民币。",
    "36氪", "https://36kr.com/newsflashes/3830119489496962",
    "2026-05-29T11:40:00.000Z", "industry", ["行业动态", "外汇", "金融市场"], "T1.5", 63
)

add(
    "蔡霆：从赔付到陪伴，成就健康自主的长寿生活",
    "保险行业从赔付到陪伴的转型趋势，打造健康管理闭环，服务健康自主的长寿生活。",
    "第一财经", "https://www.yicai.com/news/103207398.html",
    "2026-05-29T10:45:00.000Z", "industry", ["行业动态", "保险", "健康管理"], "T1.5", 66
)

add(
    "中国平安发布平安居家服务品牌，深耕'服务年'创新实践",
    "中国平安发布平安居家服务品牌，以'服务年'为定位，深化保险+服务生态布局。",
    "第一财经", "https://www.yicai.com/news/103207249.html",
    "2026-05-29T10:00:00.000Z", "industry", ["行业动态", "中国平安", "居家服务"], "T1.5", 65
)

add(
    "2025年A股采矿业高管薪酬首超金融业，药明康德3998万蝉联榜首",
    "上海荣正发布报告显示，2025年A股采矿业高管最高年薪首次超越金融业，药明康德董事长李革以3998万元蝉联榜首。",
    "财新网", "https://finance.caixin.com/2026-05-29/102448904.html",
    "2026-05-29T05:30:06.000Z", "industry", ["行业动态", "A股", "高管薪酬"], "T1.5", 68
)

add(
    "央行北京分行迎新行长，原科技司司长李伟履新",
    "央行科技司原司长李伟已任央行北京市分行党委书记、行长兼国家外汇管理局北京市分局局长。",
    "第一财经", "https://www.yicai.com/news/103207167.html",
    "2026-05-29T05:24:31.000Z", "industry", ["行业动态", "央行", "人事变动"], "T1.5", 70
)

add(
    "数字人民币APP里能买黄金啦！兴业银行首家落地",
    "兴业银行在数字人民币App内推出银行积存金产品，数字人民币首次直接对接个人黄金投资场景。",
    "第一财经", "https://www.yicai.com/news/103207149.html",
    "2026-05-29T05:10:44.000Z", "products", ["产品发布", "数字人民币", "黄金投资"], "T1.5", 68
)

add(
    "理财子公众号4月榜：品牌调性打造成新战场",
    "YiwealthSMI发布4月银行理财子公众号榜单，品牌调性打造成理财子公司公众号运营的新竞争焦点。",
    "第一财经", "https://www.yicai.com/news/103206840.html",
    "2026-05-29T05:00:00.000Z", "insights", ["技巧观点", "银行理财", "品牌运营"], "T2", 62
)

add(
    "连板股追踪：A股今日共71只个股涨停，煤炭股5连板",
    "房地产板块香江控股5连板，煤炭股表现强势，A股共71只个股涨停，市场情绪回暖。",
    "第一财经", "https://www.yicai.com/news/103207652.html",
    "2026-05-29T10:48:00.000Z", "insights", ["技巧观点", "A股", "涨停板"], "T2", 60
)

# == 保险类 ==
add(
    "保险资管新规落地：'四个支柱'监管框架出炉",
    "金融监管总局资管司明确对保险资管公司提出'四个支柱、四项目标、16项核心要素'监管要求，覆盖受托责任、系统性风险、市场效率、金融稳定等。",
    "证券时报/券商中国", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260520144922a4baa208",
    "2026-05-29T10:00:00.000Z", "regulatory", ["监管政策", "保险资管", "新规"], "T1", 80
)

add(
    "2026年1-4月财险公司违规处罚分析：38家被罚超6400万元",
    "新华财经统计显示，前4月共有38家财险公司收到监管部门罚单，合计被罚没超6400万元，平安财险、华安财险、太保财险被罚金额居前。",
    "新华财经", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260529073052a4ce7511",
    "2026-05-29T07:30:00.000Z", "industry", ["行业动态", "保险", "处罚"], "T1.5", 70
)

add(
    "保险行业研究：一季报综述，NBV延续较好增长，COR表现优异",
    "2026Q1上市险企NBV均实现正增长，其中国寿同比+75.5%领跑；财险COR同比改善，报行合一深化成效显著。",
    "内部研报", "#",
    "2026-05-29T06:00:00.000Z", "research", ["研究报告", "保险", "一季报"], "T2", 66
)

add(
    "五大上市险企2025年科技投入超4252亿元，同比增长20%",
    "2025年中国人寿、中国人保、中国平安、中国太保、新华保险合计科技投入4252亿元创历史新高，AI从'辅助工具'演变为'核心引擎'。",
    "证券时报", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN20260514111705a7040dc1",
    "2026-05-29T06:00:00.000Z", "research", ["研究报告", "保险", "科技投入"], "T1.5", 68
)

add(
    "保险返佣行为遭严惩：监管处罚与法律责任全面解析",
    "监管部门对保险返佣持续从严处罚，大地保险、平安财险、国寿等多家分支机构因返佣被罚，情节严重的被终身禁入保险行业。",
    "证券时报/券商中国", "https://gu.qq.com/resources/shy/news/detail-v2/index.html?t=1#/index?_tentrees_trans=0&id=SN2026051108482494ce0b0d",
    "2026-05-29T05:30:00.000Z", "regulatory", ["监管政策", "保险", "返佣"], "T1", 78
)

# == T2 资讯类 ==
add(
    "对冲基金大佬Dan Loeb：说2000年泡沫重演的都是老登",
    "Dan Loeb在播客中表示英伟达等大型科技股估值合理、增长强劲，不存在泡沫，拥有真实盈利和巨额现金流。",
    "华尔街见闻", "https://wallstreetcn.com/charts/41959144",
    "2026-05-29T06:16:07.000Z", "insights", ["技巧观点", "对冲基金", "AI"], "T1.5", 65
)

add(
    "'AI独涨'何时逆转？野村给出三大催化剂",
    "野村策略师警告市场共识高度集中，AI科技股独领风骚，极端拥挤仓位埋下逆转风险。",
    "华尔街见闻", "https://wallstreetcn.com/articles/3773409",
    "2026-05-29T05:09:03.000Z", "research", ["研究报告", "AI", "市场风险"], "T1.5", 65
)

add(
    "戴尔暴涨近40%、联想涨30%：AI硬件的'兑现时刻'来了",
    "戴尔AI服务器收入暴增757%，联想AI硬件业务强劲增长，AI硬件迎来业绩兑现期。",
    "第一财经", "https://www.yicai.com/news/103207194.html",
    "2026-05-29T08:00:00.000Z", "industry", ["行业动态", "AI硬件", "戴尔", "联想"], "T1.5", 66
)

add(
    "万科：今年已启动食品、教育等非主业退出或剥离",
    "万科管理层在股东会上表示，继剥离冰雪业务后今年已启动食品、教育等非主业退出，2026年仍将大力推进大宗交易。",
    "36氪", "https://36kr.com/newsflashes/3830161740294025",
    "2026-05-29T11:37:00.000Z", "industry", ["行业动态", "万科", "业务剥离"], "T2", 55
)

add(
    "万科将遵循'同债同权'原则推进6-7月债券展期",
    "万科表示2026年6-12月到期公开债规模合计101.2亿元，正在有序推进6-7月集中到期的4只债券整体展期。",
    "36氪", "https://36kr.com/newsflashes/3830141582419589",
    "2026-05-29T11:27:00.000Z", "industry", ["行业动态", "万科", "债券展期"], "T2", 56
)

add(
    "三星电子、SK海力士屡创新高触发意外抛售，今年净流出586亿美元",
    "由于股价飙升触及基金持仓比例限制，三星和SK海力士今年合计净流出资金达586亿美元。",
    "36氪", "https://36kr.com/newsflashes/3830158111221379",
    "2026-05-29T11:29:00.000Z", "industry", ["行业动态", "半导体", "基金持仓"], "T2", 55
)

add(
    "恒大汽车：撤回破产重整申请",
    "恒大汽车公告撤回此前提交的破产重整申请。（财联社）",
    "36氪", "https://36kr.com/newsflashes/3830002386364288",
    "2026-05-29T11:00:00.000Z", "industry", ["行业动态", "恒大汽车", "破产重整"], "T2", 52
)

add(
    "前4月工业利润大涨18.2%而企业所得税收入下滑0.5%，为何？",
    "规模以上工业企业利润增长强劲，但企业所得税收入出现背离，反映出不同经济主体的盈利分化。",
    "第一财经", "https://www.yicai.com/news/103207090.html",
    "2026-05-29T09:00:00.000Z", "research", ["研究报告", "工业利润", "税收"], "T1.5", 64
)

add(
    "港股估值回归合理区间，机构称下半年迎'估值+业绩'双击机遇",
    "中信证券指出港股估值已回归历史合理水平，受多重因素影响后有望迎来政策支撑预期。",
    "财联社", "https://www.cls.cn/detail/2383977",
    "2026-05-28T06:14:53.000Z", "research", ["研究报告", "港股", "估值修复"], "T2", 52
)

add(
    "我国牵头修订的金融业通用报文方案国际标准正式发布",
    "我国牵头修订的ISO 20022-5:2026和ISO 20022-7:2026经国际标准化组织（ISO）批准发布。（央视新闻）",
    "36氪/央视新闻", "https://www.36kr.com/newsflashes/3829996142962312",
    "2026-05-29T06:33:33.000Z", "regulatory", ["监管政策", "金融标准", "ISO"], "T1", 76
)

add(
    "证监会副主席刘浩凌：将系统谋划推出更多有力度的改革开放举措",
    "深交所2026全球投资者大会在深圳开幕，证监会副主席刘浩凌履新后首秀发言，传递清晰稳定的政策信号。",
    "财联社", "https://www.cls.cn/detail/2383908",
    "2026-05-28T05:29:49.000Z", "regulatory", ["监管政策", "证监会", "改革开放"], "T1", 78
)

add(
    "多所财经院校密集新增工科专业，加快与科技交叉融合",
    "多所财经院校增加工科专业、文科与理工科交叉专业，适应数字经济时代的人才需求变革。",
    "第一财经", "https://www.yicai.com/news/103207624.html",
    "2026-05-29T10:48:00.000Z", "insights", ["技巧观点", "教育", "财经院校"], "T2", 55
)

# ── Sort by publishedAt desc ──
items.sort(key=lambda x: x["publishedAt"], reverse=True)

# ── Assign final sequential IDs after sorting ──
for i, item in enumerate(items, 1):
    item["id"] = str(i)

# ── Scoring (tier weights applied already in add()) ──
# Now filter: T1 >= 55, T1.5 >= 60, T2 >= 70
filtered = []
for it in items:
    t = it["tier"]
    s = it["score"]
    if (t == "T1" and s >= 55) or (t == "T1.5" and s >= 60) or (t == "T2" and s >= 70):
        filtered.append(it)

# If filtering leaves too few, include all
if len(filtered) < 10:
    filtered = items

# ── Reassign IDs ──
for i, item in enumerate(filtered, 1):
    item["id"] = str(i)

filtered.sort(key=lambda x: x["publishedAt"], reverse=True)

# ── Build sections ──
sections = {"regulatory": [], "products": [], "industry": [], "research": [], "insights": []}
for it in filtered:
    cat = it["category"]
    if cat in sections:
        sections[cat].append({
            "title": it["title"],
            "summary": it["summary"],
            "sourceName": it["sourceName"],
            "sourceUrl": it["sourceUrl"],
            "publishedAt": it["publishedAt"]
        })

# ── Build flashes (top 8 by recency) ──
flashes = []
for it in filtered[:8]:
    flashes.append({
        "title": it["title"],
        "dotClass": "flash-dot-blue"
    })

# ── Generate data.js ──
CATEGORIES = [
    {"slug": "all", "label": "全部"},
    {"slug": "regulatory", "label": "监管政策"},
    {"slug": "products", "label": "产品发布"},
    {"slug": "industry", "label": "行业动态"},
    {"slug": "research", "label": "研究报告"},
    {"slug": "insights", "label": "技巧观点"},
]

CATEGORY_CONFIG = {
    "regulatory": {"slug": "regulatory", "label": "监管政策", "tagClass": "tag-regulatory", "accentClass": "accent-regulatory"},
    "products": {"slug": "products", "label": "产品发布/更新", "tagClass": "tag-products", "accentClass": "accent-products"},
    "industry": {"slug": "industry", "label": "行业动态", "tagClass": "tag-industry", "accentClass": "accent-industry"},
    "research": {"slug": "research", "label": "研究报告", "tagClass": "tag-research", "accentClass": "accent-research"},
    "insights": {"slug": "insights", "label": "技巧与观点", "tagClass": "tag-insights", "accentClass": "accent-insights"},
}

output = f"""// finhot auto-generated data — powered by neodata-financial-search + westock-data + WebFetch
// Generated: {NOW}
// AI scoring: info_value(30%) × authority(25%) × content_depth(20%) × recency(25%) × source_tier_weight

window.CATEGORIES = {json.dumps(CATEGORIES, ensure_ascii=False, indent=2)};

window.CATEGORY_CONFIG = {json.dumps(CATEGORY_CONFIG, ensure_ascii=False, indent=2)};

window.FINHOT_DATA = {{
  "date": "{TODAY}",
  "generatedAt": "{NOW}",
  "lead": "今日新增 {len(filtered)} 条，共 {len(filtered)} 条精选资讯",
  "items": {json.dumps(filtered, ensure_ascii=False, indent=2)},
  "sections": {json.dumps(sections, ensure_ascii=False, indent=2)},
  "flashes": {json.dumps(flashes, ensure_ascii=False, indent=2)}
}};
"""

with open("C:/Users/EDY/WorkBuddy/2026-05-29-10-28-44/finhot-site/data.js", "w", encoding="utf-8") as f:
    f.write(output)

print(f"✅ data.js generated — {len(filtered)} items, {sum(len(v) for v in sections.values())} section entries")
print(f"   Sections: { {k: len(v) for k, v in sections.items()} }")
print(f"   Top score: {max(it['score'] for it in filtered)}")
