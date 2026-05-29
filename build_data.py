#!/usr/bin/env python3
"""finhot data pipeline: collect → score → dedup → generate data.js"""
import json, hashlib, re, sys
from datetime import datetime, timezone, timedelta

# ── config ──────────────────────────────────────────────────────────
NOW = datetime(2026, 5, 29, 11, 0, 0, tzinfo=timezone(timedelta(hours=8)))
JS_HEADER = """// finhot auto-generated data — powered by neodata-financial-search + westock-data + RSSHub
// Generated: {ts}
// AI scoring: info_value(30%) × authority(25%) × content_depth(20%) × recency(25%) × source_tier_weight
"""

# ── critical: pages depend on these — DO NOT SKIP ──────────────────
CATEGORIES_JS = """
window.CATEGORIES = [
  { slug: 'all', label: '全部' },
  { slug: 'regulatory', label: '监管政策' },
  { slug: 'products', label: '产品发布' },
  { slug: 'industry', label: '行业动态' },
  { slug: 'research', label: '研究报告' },
  { slug: 'insights', label: '技巧观点' }
];
"""

CATEGORY_CONFIG_JS = """
window.CATEGORY_CONFIG = {
  regulatory: { slug: 'regulatory', label: '监管政策', tagClass: 'tag-regulatory', accentClass: 'accent-regulatory' },
  products:   { slug: 'products',   label: '产品发布/更新', tagClass: 'tag-products',   accentClass: 'accent-products' },
  industry:   { slug: 'industry',   label: '行业动态',   tagClass: 'tag-industry',   accentClass: 'accent-industry' },
  research:   { slug: 'research',   label: '研究报告',   tagClass: 'tag-research',   accentClass: 'accent-research' },
  insights:   { slug: 'insights',   label: '技巧与观点', tagClass: 'tag-insights',   accentClass: 'accent-insights' }
};
"""

# ── source tier ─────────────────────────────────────────────────────
TIER_MAP = {
    # T1: regulatory / central bank / association
    "国家金融监管总局": 1.00, "金融监管总局": 1.00, "证监会": 1.00, "央行": 1.00,
    "中国人民银行": 1.00, "深交所": 1.00, "上交所": 1.00, "保险业协会": 1.00,
    "外汇管理局": 1.00, "国家外汇管理局": 1.00, "国务院": 1.00,
    # T1.5: premium financial media
    "财新网": 0.85, "财新": 0.85, "华尔街见闻": 0.85, "第一财经": 0.85,
    "上海证券报": 0.85, "证券时报": 0.85, "新华财经": 0.85, "经济参考报": 0.85,
    # T2: general biz media / broker / insurer
    "36氪": 0.70, "财联社": 0.70, "国泰海通": 0.70, "国泰海通证券": 0.70,
    "中信证券": 0.70, "中国平安": 0.70, "平安产险": 0.70, "平安人寿": 0.70,
    "中国人寿": 0.70, "中国太保": 0.70, "新华保险": 0.70, "中国人保": 0.70,
    "人保财险": 0.70, "泰康人寿": 0.70, "国寿财险": 0.70, "东吴证券": 0.70,
    "中泰证券": 0.70, "国盛证券": 0.70, "时代周报": 0.70, "理财周刊": 0.70,
}

def get_tier(src):
    for k, v in sorted(TIER_MAP.items(), key=lambda x: -len(x[0])):
        if k in src:
            return v, "T1" if v >= 1.0 else ("T1.5" if v >= 0.8 else "T2")
    return 0.70, "T2"

def score_item(item):
    tier_weight, tier_label = get_tier(item["sourceName"])
    t = (item["title"] + item.get("summary", "")).lower()
    # 1. info_value (30%)
    if any(kw in t for kw in ["整治","罚款","处罚","监管","政策","发布","联合印发","八部门","新规"]):
        info_val = 90
    elif any(kw in t for kw in ["产品","创新","合作","签约","获批","上市","ipo","融资","增资"]):
        info_val = 78
    elif any(kw in t for kw in ["研报","分析","点评","观点","走势","行情"]):
        info_val = 68
    else:
        info_val = 60
    # 2. authority (25%)
    authority = 92 if tier_label == "T1" else (78 if tier_label == "T1.5" else 62)
    # 3. content_depth (20%)
    depth = 55
    if any(m in t for m in ["数据","分析","亿元","万亿","同比","环比","专家","预计","展望"]):
        depth = 72
    slen = len(item.get("summary", ""))
    if slen > 150: depth = max(depth, 78)
    if slen > 300: depth = max(depth, 85)
    # 4. timeliness (25%)
    try:
        pub_dt = datetime.fromisoformat(item.get("publishedAt","").replace("Z","+00:00"))
        delta = NOW - pub_dt
        timeliness = 98 if delta.total_seconds() < 86400 else (85 if delta.total_seconds() < 259200 else (68 if delta.total_seconds() < 604800 else 50))
    except:
        timeliness = 70
    dim_score = info_val*0.30 + authority*0.25 + depth*0.20 + timeliness*0.25
    return int(dim_score * tier_weight), tier_label

def dedup(items):
    seen = {}
    out = []
    for item in items:
        key = re.sub(r'[【】《》\s\d.%]+', '', item['title'])[:30]
        h = hashlib.md5(key.encode()).hexdigest()
        if h in seen:
            t1, _ = get_tier(item['sourceName'])
            t2, _ = get_tier(seen[h]['sourceName'])
            if t1 > t2:
                out[out.index(seen[h])] = item
                seen[h] = item
        else:
            seen[h] = item
            out.append(item)
    return out

# ══════════ RAW DATA — populated by neodata + RSSHub ════════════════
# (Replace this section with programmatic collection in production)
raw = [
    {"title":"八部门联合印发整治方案，聚焦取缔非法跨境证券期货基金经营活动","summary":"证监会、工信部、公安部、央行、金融监管总局等八部门联合印发综合整治方案。","sourceName":"证监会","sourceUrl":"https://gu.qq.com/r?id=SN20260524220559a4c3fa05","publishedAt":"2026-05-22T14:05:00.000Z","category":"regulatory","tags":["监管政策","跨境金融","八部门"]},
    {"title":"2026年1-4月财险公司违规处罚数据分析：38家被罚超6400万元","summary":"新华财经统计，2026年前4月38家财险公司被罚超6400万元。平安财险、华安财险、太平洋财险等被罚金额居前。","sourceName":"新华财经","sourceUrl":"https://gu.qq.com/r?id=SN20260529073052a4ce7511","publishedAt":"2026-05-29T01:00:00.000Z","category":"regulatory","tags":["监管政策","行政处罚","财险合规"]},
    {"title":"国泰海通：26年4月寿险高基数下增速放缓，财险承压但责任险逆势增长","summary":"前4月保险行业保费27329亿同比5.3%。寿险+1.1%，财险-0.2%。责任险在报行合一政策下增速走扩至9.5%。","sourceName":"国泰海通证券","sourceUrl":"http://gu.qq.com/r?id=nesSN20260529113814b6193936&s=b","publishedAt":"2026-05-29T03:38:00.000Z","category":"research","tags":["研究报告","保费数据","寿险财险"]},
    {"title":"新华人寿临夏中支因违规被罚25万","summary":"因将保险产品预定利率与银行存款利率片面比较、虚列银保专员佣金套取费用，被警告并罚款25万元。","sourceName":"金融监管总局","sourceUrl":"http://gu.qq.com/r?id=nesSN2026052217510894ec066e","publishedAt":"2026-05-22T09:51:00.000Z","category":"regulatory","tags":["监管政策","行政处罚","新华保险"]},
    {"title":"平安产险联合中再产险签署低空保险平台合作协议","summary":"在世界无人机大会上发布行业首个用户行为定价保险「智飞保」，签署「再·擎」低空保险平台合作协议。","sourceName":"平安产险","sourceUrl":"https://gu.qq.com/r?id=SN20260524220559a4c3fa05","publishedAt":"2026-05-22T14:05:00.000Z","category":"products","tags":["产品发布","低空经济","保险创新"]},
    {"title":"保险业协会：推动险企提升跨市场跨周期投资管理能力","summary":"截至4月30日，114家险企具备262项投资管理能力，协会将加强行业自律推动能力提升。","sourceName":"保险业协会","sourceUrl":"https://gu.qq.com/r?id=SN20260524220559a4c3fa05","publishedAt":"2026-05-22T14:05:00.000Z","category":"industry","tags":["行业动态","投资管理","险企能力"]},
    {"title":"商业健康险支付创新药不足10%","summary":"财新报道，保险行业正推进商业医疗险标准条款、药品保障支付清单建设，加强与医药产业合作。","sourceName":"财新网","sourceUrl":"https://www.caixin.com/2026-05-29/102448744.html","publishedAt":"2026-05-28T23:36:40.000Z","category":"industry","tags":["行业动态","健康险","创新药"]},
    {"title":"证监会副主席刘浩凌：将系统谋划更多改革开放举措","summary":"深交所2026全球投资者大会上，刘浩凌首次公开亮相致辞，表示持续优化资本市场制度型开放。","sourceName":"财联社","sourceUrl":"https://www.cls.cn/detail/2383908","publishedAt":"2026-05-28T13:29:49.000Z","category":"regulatory","tags":["监管政策","资本市场","改革开放"]},
    {"title":"深交所理事长沙雁：受理首批创新企业IPO","summary":"深交所2026全球投资者大会开幕，已受理首批创新企业IPO，争取尽快形成典型案例。","sourceName":"财联社","sourceUrl":"https://www.cls.cn/detail/2383887","publishedAt":"2026-05-28T13:00:59.000Z","category":"regulatory","tags":["监管政策","IPO","创新企业"]},
    {"title":"富途一季度净利同比大降六成","summary":"受证监会处罚影响，计提21.33亿港元罚款拨备，净利润同比大降六成，内地客户资产占比降至17%。","sourceName":"第一财经","sourceUrl":"https://www.yicai.com/news/103206191.html","publishedAt":"2026-05-28T21:49:23.000Z","category":"industry","tags":["行业动态","跨境券商","富途"]},
    {"title":"监管部门报行合一推动险企回归风险定价与服务提升","summary":"监管部门强化报行合一压缩费用空间，推动险企从价格战回归风险定价与服务本源。","sourceName":"上海证券报","sourceUrl":"https://gu.qq.com/r?id=SN20260528153323975e26da","publishedAt":"2026-05-28T07:33:00.000Z","category":"regulatory","tags":["监管政策","报行合一","行业趋势"]},
    {"title":"美股PCE创3年新高，消费者储蓄见底","summary":"美国4月核心PCE创3年新高，储蓄率降至2022年低位。美联储内部对AI能否压低通胀产生分歧。","sourceName":"第一财经","sourceUrl":"https://www.yicai.com/news/103206254.html","publishedAt":"2026-05-28T23:21:32.000Z","category":"industry","tags":["宏观经济","美联储","通胀"]},
    {"title":"私募FOF等于稳健理财？起底券商资管营销术","summary":"在低利率环境下，私募FOF成为券商资管重点推广方向，但蕴含的风险远比想象复杂。","sourceName":"华尔街见闻","sourceUrl":"https://wallstreetcn.com/articles/3773402","publishedAt":"2026-05-29T00:49:01.000Z","category":"insights","tags":["技巧与观点","私募FOF","资管"]},
]

# ══════════ PROCESSING ═════════════════════════════════════════════
raw = dedup(raw)
scored = []
for idx, item in enumerate(raw):
    score, tier = score_item(item)
    item["id"] = str(idx + 1)
    item["score"] = score
    scored.append(item)

# filter by tier threshold
THRESHOLDS = {"T1": 55, "T1.5": 60, "T2": 70}
featured = [i for i in scored if i["score"] >= THRESHOLDS.get(i.pop("_tier", "T2"), 70)]
featured.sort(key=lambda x: x["publishedAt"], reverse=True)  # time desc only, not by score
for i, item in enumerate(featured):
    item["id"] = str(i + 1)

# build sections
sections = {k: [] for k in ["regulatory","products","industry","research","insights"]}
for item in featured:
    cat = item["category"]
    if cat in sections:
        sections[cat].append({k: item[k] for k in ["title","summary","sourceName","sourceUrl","publishedAt"]})

# lead
lead = "今日要点：" + "；".join([f"{item['title'][:25]}…" for item in featured[:3]]) + "（共" + str(len(featured)) + "条）"

# flashes
flashes = [{"title": item["title"], "dotClass": "flash-dot-green" if item["score"] >= 80 else "flash-dot-blue"} for item in featured[:8]]

# ══════════ OUTPUT ══════════════════════════════════════════════════
output = {
    "date": "2026-05-29",
    "generatedAt": "2026-05-29T11:00:00.000Z",
    "lead": lead,
    "items": featured,
    "sections": sections,
    "flashes": flashes,
}

js = JS_HEADER.format(ts="2026-05-29T11:00:00+08:00")
js += CATEGORIES_JS + "\n" + CATEGORY_CONFIG_JS + "\n"
js += "window.FINHOT_DATA = " + json.dumps(output, ensure_ascii=False, indent=2) + ";\n"

outpath = "C:/Users/EDY/WorkBuddy/2026-05-29-10-28-44/finhot-site/data.js"
with open(outpath, "w", encoding="utf-8") as f:
    f.write(js)

print(f"✅ data.js generated: {len(featured)} items (from {len(raw)} raw)")
for item in featured[:5]:
    print(f"  [{item['id']}] s={item['score']} {item['category']} | {item['title'][:45]}")
print("⚠️  IMPORTANT: data.js MUST include CATEGORIES and CATEGORY_CONFIG globals (above FINHOT_DATA)")
