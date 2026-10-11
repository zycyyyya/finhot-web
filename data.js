// finhot auto-generated data - powered by RSSHub + financial sources + Zhihu OpenAPI
// Generated: 2026-10-11T06:22:36.641Z
// Practitioner value scoring: relevance(30) + impact(25) + evidence(20) + recency(15) + actionability(10)
// Source tier decides the selection gate only (S0 50 / S1 55 / S2 60 / S3 70), not the score.
// P1 model selection: full mode double-scores via LLM (both passes >= FINHOT_LLM_GATE, default 60; displayed = average); any failure falls back to heuristic.

window.CATEGORIES = [
  {
    "slug": "featured",
    "label": "今日精选"
  },
  {
    "slug": "insurance",
    "label": "保险"
  },
  {
    "slug": "privateFundSales",
    "label": "私募"
  },
  {
    "slug": "marketEducation",
    "label": "投教"
  },
  {
    "slug": "all",
    "label": "全部"
  }
];

window.CONTENT_FILTERS = [
  {
    "slug": "all",
    "label": "全部内容"
  },
  {
    "slug": "official",
    "label": "官方监管"
  },
  {
    "slug": "products",
    "label": "产品动态"
  },
  {
    "slug": "industry",
    "label": "行业动态"
  },
  {
    "slug": "research",
    "label": "深度研究"
  },
  {
    "slug": "flash",
    "label": "快讯"
  },
  {
    "slug": "insights",
    "label": "观点"
  },
  {
    "slug": "authoritative",
    "label": "仅看权威源"
  }
];

window.CATEGORY_CONFIG = {
  "regulatory": {
    "slug": "regulatory",
    "label": "监管政策",
    "tagClass": "tag-regulatory",
    "accentClass": "accent-regulatory"
  },
  "products": {
    "slug": "products",
    "label": "产品发布/更新",
    "tagClass": "tag-products",
    "accentClass": "accent-products"
  },
  "industry": {
    "slug": "industry",
    "label": "行业动态",
    "tagClass": "tag-industry",
    "accentClass": "accent-industry"
  },
  "research": {
    "slug": "research",
    "label": "研究报告",
    "tagClass": "tag-research",
    "accentClass": "accent-research"
  },
  "insights": {
    "slug": "insights",
    "label": "观点",
    "tagClass": "tag-insights",
    "accentClass": "accent-insights"
  }
};

window.FINHOT_DATA = {
  "date": "2026-10-11",
  "generatedAt": "2026-10-11T06:22:36.641Z",
  "lead": "今日新增 60 条，共 150 条精选资讯",
  "items": [
    {
      "title": "浙江印发市场监管领域经营主体信用评价实施办法",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020912829583496",
      "publishedAt": "2026-10-11T05:45:55.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，近日，浙江省市场监督管理局印发《市场监管领域经营主体信用评价实施办法（试行）》，自10月30日起实施。《实施办法》明确，市场监管领域信用评价以“通用+专业”为总体框架，在全覆盖开展各类经营主体通用信用评价基础上，紧扣不同行业经营特点与监管工作实际，在食品、特种设备、检验检测、知识产权等重点领域同步推行专业信用评价，进一步提升信用评价的科学性、适配性，增强监管服务综合效能。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f31708fd8501",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 3,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 35,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 48,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 44,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "三星明年存储产量的80%已被长协锁定",
      "sourceUrl": "https://wallstreetcn.com/articles/3783361",
      "publishedAt": "2026-10-11T05:11:42.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "三星电子明年约80%的存储芯片产能已通过长期供应协议提前锁定，科技巨头争抢剩余产能的格局折射出AI基础设施军备竞赛的白热化程度。\n据韩国经济日报本周稍早前报道，英伟达、谷歌、微软等全球科技巨头已与三星签署覆盖逾五年的芯片供应协议，尚未完成签约的企业正在暗中角力，争夺剩余约20%的产能。三星电子在二季度业绩电话会议上表示，\"几乎所有主要客户都在申请长协\"，并坦言\"难以响应所有需求\"。\n这一趋势已从存",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_12ed2f7f4bbc",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 72,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
        "evidence": 14,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "诺贝尔经济学奖明日揭晓，为什么获奖者总出自那几所学校？",
      "sourceUrl": "https://www.yicai.com/news/103388802.html",
      "publishedAt": "2026-10-11T04:58:47.000Z",
      "fetchedAt": "2026-10-11T05:53:17.939Z",
      "timeConfidence": "source",
      "summary": "追踪美国高校教师招聘网络数据来看，经济学是向上流动最难的学科之一。每年诺奖季，经济学奖都是压轴大戏。今年的奖项将在北京时间10月12日下午揭晓。\n\n翻开半个多世纪的诺贝尔奖花名册，有一个很少被注意到的反差。物理、化学、医学奖得主中，获奖时身处本学科诺奖得主最多前十高校的只占两三成，七成以上来自其外；经济学则恰好相反：近六成得主获奖时就在那十所名校之中。把视线拉长到整个职业生涯，差距更加明显。经济学",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c518799ae53c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [
        "无规模的案例与合作PR"
      ],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "前三季度韩国投资者净买入金额前15名的港股合计净买入约2.28亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020899347779462",
      "publishedAt": "2026-10-11T04:45:13.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "韩国证券存托结算院信息门户（SEIBro）数据显示，2026年前三季度（结算日1月1日至9月30日），韩国投资者净买入金额前15名的港股合计净买入约2.28亿美元，同期净买入前15名A股合计约7987万美元。其中，Global X中国半导体ETF净买入金额高居榜首，前三季度净买入金额为5257万美元。A股方面，前三季度，存储芯片龙头长鑫科技深受韩国投资者青睐，其净买入额占A股前15名合计的一半以上",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_728976608e50",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 14,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "high",
      "why": [
        "快讯线索，需结合原文判断",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 95,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 38,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": "event_44e7f67f045c"
    },
    {
      "title": "下周重磅日程：中美CPI、沃什讲话、Anthropic投资者日、台积电与ASML财报",
      "sourceUrl": "https://wallstreetcn.com/charts/41960000",
      "publishedAt": "2026-10-11T04:43:42.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "IMF与世界银行年会贯穿全周，沃什与会讲话、多国央行行长出席。数据端，美国9月CPI与中国CPI、PPI及进出口同日揭晓。AI链条上，Anthropic举办上市前投资者日，苹果举行智能家居发布会，台积电与ASML业绩验证产业链景气度，美股财报季拉开。此外，继续关注中东局势，特朗普改口称“可能”中选前对伊朗采取军事行动。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_31b2216a0a85",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 66,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 21,
        "evidence": 6,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "多地出台公积金提取新政，提取范围进一步放宽",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020895951884422",
      "publishedAt": "2026-10-11T04:18:43.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "近期，多地正式开始落地住房公积金惠民新政，提取范围进一步放宽。江苏南京、苏州等地已开始受理装修、物业费提取业务，辽宁沈阳也发布九项优化政策，采暖费等支出纳入提取范围。（央视新闻）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_743dafca0930",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 39,
      "rawScore": 39,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 12,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 12,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 12,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "中央汇金“打假”：公司不开展代客投资理财活动",
      "sourceUrl": "https://www.cls.cn/detail/2501446",
      "publishedAt": "2026-10-11T04:13:38.000Z",
      "fetchedAt": "2026-10-11T05:55:12.684Z",
      "timeConfidence": "source",
      "summary": "财联社10月11日讯，中央汇金投资有限责任公司近日在官网发布声明称，公司不开展代客投资理财活动。对于假冒公司或公司工作人员名义进行诈骗的单位或个人，将依法追究其法律责任。具体内容如下：\n关于谨防冒用我公司名义进行诈骗的声明\n2026-10-09\n近来，有不法分子冒用“中国投资有限责任公司”“中投公司”“中投国际有限责任公司”“中投国际”“中投海外直接投资有限责任公司”“中投海外”“中央汇金投资有限",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bb06192763dc",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 3,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "持股比例突破20%！新华保险增持国泰海通H股，年内险资举牌降温，转道押注硬科技IPO",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602925",
      "publishedAt": "2026-10-11T04:05:52.000Z",
      "fetchedAt": "2026-10-11T05:55:59.738Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_ee3acd077506",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 68,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 8,
        "evidence": 11,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 41,
          "reasons": [
            "命中保险运营核心主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 19,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 19,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_668e7c3605a8"
    },
    {
      "title": "四部门联手，对“速成车”说不",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020951833087877",
      "publishedAt": "2026-10-11T04:03:43.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "工信部等四部门10日公开发布关于进一步加强汽车产品创新设计和研发测试验证有关管理工作的通知（征求意见稿）。汽车产品创新设计技术指南围绕虚拟操纵件、门把手、新型人机交互系统、大角度座椅等方面提出具体测试验证要求。\n\n业内普遍认为，四部门发布的新规是对“速成车”说不！\n\n这几天，舆论广泛关注尊界V800刹车踏板支架断裂事件，讨论的焦点就是汽车尤其是“速成”新能源车的安全问题。尽管事件有待权威的调查结论",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_138a47b42045",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 68,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 6,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "中国农业地理｜大闸蟹价格回落，它爬出“包邮区”正去往云贵川​​​​​​​​​​​​​​",
      "sourceUrl": "https://www.yicai.com/news/103388798.html",
      "publishedAt": "2026-10-11T03:59:41.000Z",
      "fetchedAt": "2026-10-11T05:53:17.939Z",
      "timeConfidence": "source",
      "summary": "大闸蟹已突破单纯农产品销售范畴。大街小巷随处可见与大闸蟹相关的主题广告、购物场所举办品蟹美食节、蟹卡销售企业自主开办餐厅和酒店来揽客……这是第一财经记者日前在苏州阳澄湖地区所看到的情景。随着9月中下旬江苏兴化、阳澄湖等核心产区的大闸蟹陆续上市，一年一度的大闸蟹消费旺季拉开帷幕。第一财经记者近期通过实地调研了解到，大闸蟹经济所拉动的消费已不仅是农产品销售本身，还带动了旅游、住宿、零售、智能分拣、区块",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_65863b6231c1",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 18,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 0,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 17,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 17,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 17,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 18,
      "llmScores": [
        18,
        18
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "德银：美股7月下旬以来的“第五轮科技股反弹”已到顶，准备迎接“倒V反转”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783359",
      "publishedAt": "2026-10-11T03:46:15.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "自7月29日启动的这轮美股科技股反弹，在52个交易日内累计跑赢大盘18.1个百分点。但在德意志银行看来，这轮行情已经到顶。\n据追风交易台消息，10月9日，该行多资产策略团队Parag Thatte等分析师发布报告，将美股科技及大盘成长股（MCG &amp; Tech）评级从“超配”下调至“中性”。分析师写道：\n\n科技股的轮动已经走得很远，近期风险回报不再有吸引力。\n\n\n倒V型反转将临？\n德银追踪了",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9592ebe5735c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 68,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 16,
        "evidence": 9,
        "recency": 15,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 31,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 66,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 53,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "世卫：俄不明原因肺炎事件无持续传播证据",
      "sourceUrl": "https://wallstreetcn.com/livenews/3176634",
      "publishedAt": "2026-10-11T03:45:44.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "世界卫生组织10日在其官网发布公报说，关于俄罗斯伊尔库茨克西伯利亚与远东防鼠疫研究所一名工作人员患病死亡事件，根据俄方通报，世卫组织尚未发现与这一事件相关的持续传播证据，但目前尚未确认导致致命疾病的病原体。\n据俄方通报，伊尔库茨克西伯利亚与远东防鼠疫研究所一名28岁女性工作人员2日因“不明原因肺炎”死亡。\n\n世卫组织表示，据俄方卫生部门通报，伊尔库茨克州近期没有报告鼠疫病例，已依据相关卫生法律全面",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b11a90350756",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 6,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "经济日报：培育赛事经济新增长极",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020798228090759",
      "publishedAt": "2026-10-11T03:42:18.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "经济日报刊文称，盘活赛事经济、放大赛事红利，关键在于贴合大众需求、补齐产业短板，把赛场热度转化为可持续的民生红利和经济增量。赛事好不好，最终要看大众爱不爱看、愿不愿参与。要兼顾不同人群的需求，搭起多层次的赛事舞台。既要深耕高端赛场，聚力打造具有国际影响力的顶级赛事IP，提升职业赛事专业化、国际化水平，擦亮中国体育赛事名片；也要扎根市井烟火，持续培育村超、村BA、城市马拉松等亲民赛事，积极布局滑板、",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5100611aea50",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 39,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [
        "时间性盘点"
      ],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 12,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 12,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 12,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "下周外盘看点丨美国CPI如何影响美联储加息，美股财报季开幕",
      "sourceUrl": "https://www.yicai.com/news/103388788.html",
      "publishedAt": "2026-10-11T03:31:48.000Z",
      "fetchedAt": "2026-10-11T05:53:17.939Z",
      "timeConfidence": "source",
      "summary": "IMF年会在泰国举行。本周国际市场风云变幻，中东局势依然紧张，AI板块波动加剧。美股全线上扬，道指周涨0.93%，纳指周涨0.64%，标普500指数周涨1.15%。欧洲三大股指涨跌互现，英国富时100指数周涨0.86%，德国DAX 30指数周跌0.57%，法国CAC 40指数周跌1.19%。\n\n下周看点颇多，最大焦点将是美国通胀数据，投资者普遍预期美联储在今年年底或将再度加息。欧洲方面，欧元区9月",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c58f0c74ae4b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 50,
      "rawScore": 50,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 11,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 19,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 5 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 37,
          "reasons": [
            "命中关联主题 2 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_6ab2a13609c6"
    },
    {
      "title": "美国AI算力租赁有多贵？“现货价格”是长协的2倍，是云厂商回报门槛的4倍",
      "sourceUrl": "https://wallstreetcn.com/articles/3783358",
      "publishedAt": "2026-10-11T03:30:36.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "美国AI算力租赁市场正在呈现明显的“短贵长便宜”特征。\n10月10日，根据高盛互联网分析师Eric Sheridan在SpaceX季度预览报告中的图表，一吉瓦算力的年化收入，短期现货租赁约为400亿至500亿美元，长期合同约为200亿至300亿美元，而超大规模云厂商（hyperscaler）自建产能的盈亏平衡门槛仅约120亿美元。\n但高盛分析，谷歌等超大规模云厂商以高昂溢价租用算力，根本原因是自建",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5350bb984c44",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 49,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 14,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 42,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 29,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 49,
      "llmScores": [
        50,
        48
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "美股点金丨持币观望！货币基金净流入创六年新高，反弹能走多远",
      "sourceUrl": "https://www.yicai.com/news/103388790.html",
      "publishedAt": "2026-10-11T03:17:39.000Z",
      "fetchedAt": "2026-10-11T05:53:17.939Z",
      "timeConfidence": "source",
      "summary": "财报季开启，纳指周线四连阳能否延续。美股本周先抑后扬，美债收益率持续高位运行，9月FOMC会议纪要释放偏鹰派信号，尾盘科技股企稳助力三大股指收复周内失地，不过资金流向回归谨慎，避险情绪推高货币基金买盘。下周美股新财报季将拉开帷幕，人工智能对业绩的提振或对风险偏好产生影响，同时中东局势和美债收益率走势将继续扰动投资者神经。\n\n\n\n物价压力不容忽视\n\n本周公布的主要数据继续显示经济韧性的同时物价压力高",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8265af5f0ba7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 76,
      "rawScore": 76,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 21,
        "evidence": 6,
        "recency": 15,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 78,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 47,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "国家发改委再次召开民企座谈会，及时谋划更多政策工具",
      "sourceUrl": "https://www.yicai.com/news/103388789.html",
      "publishedAt": "2026-10-11T03:17:11.000Z",
      "fetchedAt": "2026-10-11T05:53:17.939Z",
      "timeConfidence": "source",
      "summary": "加大逆周期调节力度，强化存量政策和增量政策协同发力。四季度是全年收官之季，也是巩固经济回升向好的关键窗口期，一系列增量政策有望密集落地。\n\n国家发改委主任郑栅洁在10月10日召开的今年第9场民营企业座谈会上，强调及时谋划更多带动性强的政策工具、工作抓手，努力完成全年目标任务。同日，中国证监会也召开座谈会，研究储备增量政策工具。\n\n9月28日国务院常务会议要求“推出一批务实管用的增量政策”之后，居民",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4e517219ffc7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 47,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 9,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "attentionScore": 47,
      "llmScores": [
        34,
        59
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "太一量生完成超10亿元融资",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020790464106632",
      "publishedAt": "2026-10-11T03:12:26.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，10月10日，太一量生（上海）量子科技有限公司宣布完成新一轮融资。成立8个月余，公司累计融资超10亿元人民币。本轮融资中，锦秋基金、沄柏资本、鸿瑞达投资、成都高新愿景基金、临港前沿投资等新投资方进入，华控基金、恒旭资本、博远资本、高脉投资、雅瑞资本等老股东持续加注。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0c282eeba530",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 19,
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 8,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 39,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
          ]
        }
      },
      "attentionScore": 19,
      "llmScores": [
        19,
        18
      ],
      "scoredBy": "llm",
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "研而优则“私”，券商投研名将奔私增多，行业正经历怎样的人才分流？",
      "sourceUrl": "https://www.cls.cn/detail/2501433",
      "publishedAt": "2026-10-11T02:54:53.000Z",
      "fetchedAt": "2026-10-11T05:55:12.684Z",
      "timeConfidence": "source",
      "summary": "财联社10月11日讯（记者 林坚）最近券商人才“奔私”的案例又多了起来。\n波克私募官方最新发布消息，原华泰证券研究所策略首席兼金工首席何康博士正式加盟，出任波克私募首席投资官。中基协公示信息显示，何康已于9月17日完成基金从业资格登记，从业机构为上海波克私募基金管理合伙企业。不仅如此，转投私募的首席分析师还有华泰金工首席林晓明，已于今年6月加盟思瑞投资任首席经济学家。\n\n波克私募发布消息称，原华泰",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_308bc7086bb8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 70,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 9,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 40,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 97,
          "reasons": [
            "命中私募销售运营核心主题 3 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "全球原油和成品油库存已经告急！高盛模型测算“油价中的风险溢价逼近历史最高”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783356",
      "publishedAt": "2026-10-11T02:49:25.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "全球石油市场的缓冲垫正在消失。七个月的战时消耗之后，全球最大独立石油贸易商的掌门人宣告西方库存已无油可抽，高盛重建定价模型后发现，9月份油价中隐含的风险溢价高达每桶22美元，为有记录以来第二高水平。\nVitol首席执行官Russell Hardy本周在伦敦能源情报论坛上表示，\"西方已经没有更多库存可以消耗\"，并警告若霍尔木兹海峡航运中断，油价存在冲至每桶200美元的情景。与此同时，高盛大宗商品团队",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_dabc6be9146f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 39,
      "rawScore": 39,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 12,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 34,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 21,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "人社部：尽可能让灵活就业人员参加职工养老保险",
      "sourceUrl": "https://www.caixin.com/2026-10-11/102492218.html",
      "publishedAt": "2026-10-11T02:45:53.000Z",
      "fetchedAt": "2026-10-11T05:52:45.816Z",
      "timeConfidence": "source",
      "summary": "建立完善用工方、平台企业、劳动者共同筹资、分担的参保机制\n    \n     \n     2026年8月22日，江苏连云港市连云区，关爱新就业群体活动。多层次社会保障体系在不断完善。图：视觉中国\n    \n   \n       　　【财新网】截至今年9月底，中国基本养老、失业、工伤保险的参保人数分别达到10.79亿人、2.51亿人、3.27亿人。力争“十五五”时期基本养老保险参保率稳定在95%以上",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_250ce855559b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 43,
      "rawScore": 79,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 8,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 66,
          "reasons": [
            "命中保险运营核心主题 2 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 43,
      "llmScores": [
        40,
        45
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "俄罗斯死亡鼠疫研究人员，肺炎原因依旧“不明”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783350",
      "publishedAt": "2026-10-11T02:44:26.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "俄罗斯官方2026年10月8日表示，已向世界卫生组织通报伊尔库茨克西伯利亚与远东防鼠疫研究所一名工作人员患病死亡的相关情况，未出现第二例病例，相关预防性措施已解除。\n中国相关部门也已关注此事。外交部发言人郭嘉昆在10月6日的例行记者会上表示：“中俄双方在包括鼠疫在内的传染病防控领域保持密切交流合作。”\n这起引发全球关注的疑似鼠疫感染事件，似乎已经落幕。然而，对患者的死亡原因，目前的说法仍是“不明原",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2110ac4ba467",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 48,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "需求持续回暖，9月中国物流业景气指数发布",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020782160941186",
      "publishedAt": "2026-10-11T02:43:59.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "中国物流与采购联合会今天（11日）发布9月份中国物流业景气指数。指数继续保持在扩张区间，较上月有所回升，物流需求持续回暖，企业经营韧性不断显现。9月份，中国物流业景气指数为51.5%，较上月回升0.6个百分点，连续5个月处在扩张区间。新订单指数为51.2%，环比回升0.4个百分点，连续7个月回升。12个分项指数中，有10个分项指数环比回升。从三季度以来的数据变化看，物流业务需求增长，微观经营趋稳，",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_41d5928a8838",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 47,
      "rawScore": 47,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 39,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "经销商联谊会“批量”解散？茅台方面回应",
      "sourceUrl": "https://wallstreetcn.com/livenews/3176626",
      "publishedAt": "2026-10-11T02:42:26.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "近日，酒圈盛传各地茅台经销商联谊会“批量”解散的传闻，经过一段时间的发酵后，相关方终于对外进行了回应。\n\n10月10日，多家媒体报道称，从贵州茅台酒销售公司市场工作人员获悉，按照社会组织规范化建设、运行相关要求，目前各省区经销商联谊会、传承人工作部已停止日常工作。\n但相关人士表示，上述机构停止日常运营，不会影响区域市场业务。各省区茅台酒销售、品牌落地等常规市场工作依旧正常有序推进。此次调整，是茅台",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0a77000b44bd",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 42,
      "rawScore": 42,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 36,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 23,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "“只剩一笔交易”的美股牛市",
      "sourceUrl": "https://wallstreetcn.com/articles/3783355",
      "publishedAt": "2026-10-11T02:40:04.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "美股正站在一个令人不安的高点：指数创历史新高，但支撑它的只有一个主题。\n高盛对冲基金覆盖业务负责人Tony Pasquariello在最新客户报告中坦承，当前美股涨势\"基本上只是一笔大交易\"——人工智能。他维持看多美股的主基调，但措辞明显趋于谨慎，不再愿意断言未来5%的方向向上。与此同时，高盛数据显示，标普500成分股中约有六分之一已较高点回撤逾50%，而指数本身距历史高点仅一步之遥。\n这一分裂格",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_28e5a7e399fd",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 78,
      "rawScore": 78,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 11,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 77,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 90,
          "reasons": [
            "命中私募销售运营核心主题 3 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "国信证券：高股息夯实配置价值 盈利修复打开银行上涨空间",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602914",
      "publishedAt": "2026-10-11T02:35:06.000Z",
      "fetchedAt": "2026-10-11T05:55:59.738Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_89bd2765f7f4",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 59,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 0,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 21,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 43,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 30,
          "reasons": [
            "命中关联主题 2 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "马斯克向印度首富“道歉”：我太眼拙了，没认出您的真实身份",
      "sourceUrl": "https://www.cls.cn/detail/2501428",
      "publishedAt": "2026-10-11T02:27:54.000Z",
      "fetchedAt": "2026-10-11T05:55:12.684Z",
      "timeConfidence": "source",
      "summary": "根据美国彭博社等媒体先前的报道，马斯克一直渴望让他的卫星通讯产品“星链”进入印度市场，但却始终未能如愿。马斯克因此认为，是垄断了印度电信领域的行业寡头在联合阻挠他，并由此将矛头指向了安巴尼和信实工业。\n毕竟，信实工业旗下有着印度最大的移动网络运营商：信实Jio Infocomm。\n“亲爱的安巴尼总理，请恕我之前眼拙，竟没意识到您才是印度真正的掌权人。”马斯克在他于10日发布的帖文中讽刺道。“想必你",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_382dfd2283fe",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 59,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 6,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 43,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 30,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "“义新欧”中欧班列进出口集装箱量突破20万标箱",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020786179068034",
      "publishedAt": "2026-10-11T02:23:04.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "据义乌海关，截至10月7日，今年“义新欧”进出口集装箱量已突破20万标箱。作为全国中欧班列集结中心之一，“义新欧”中欧班列已开通27条稳定运行线路，辐射亚欧大陆50余个国家和地区的160余座城市。（央视新闻）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_25d57bd46f4a",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 47,
      "rawScore": 47,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "外资撤离韩国股市，AI热潮降温引发大规模资金外流",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602909",
      "publishedAt": "2026-10-11T02:23:04.000Z",
      "fetchedAt": "2026-10-11T05:55:59.738Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_9f6172b30fab",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 6,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "美伊战争以来最大规模超级油轮船队！中国开始增加原油进口了？",
      "sourceUrl": "https://wallstreetcn.com/articles/3783354",
      "publishedAt": "2026-10-11T02:16:26.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "10月10日，据彭博汇编的油轮追踪数据，目前共有约96艘超级油轮正驶往中国，预计在未来90天内抵港。这是自今年2月底以来的最高水平，也是连续第三周录得周度数据上升。\n据报道，美伊冲突爆发初期，中国作为全球最大原油进口国，显著削减了原油采购量。彼时，连接波斯湾与国际市场的霍尔木兹海峡实际上已被封锁，全球原油流通受到严重干扰。\n而此番船队规模的扩张，是市场观察中国进口动向的重要信号。\n但数字的回升并不",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8d374ad46b6c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 42,
      "rawScore": 42,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 36,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 23,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "长鑫科技登顶！ETF成加仓主渠道，前三季度韩国投资者A股、港股“扫货”名单来了",
      "sourceUrl": "https://wallstreetcn.com/livenews/3176621",
      "publishedAt": "2026-10-11T02:13:33.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "韩国证券存托结算院信息门户（SEIBro）数据显示，2026年前三季度（结算日1月1日至9月30日），韩国投资者净买入金额前15名的港股合计净买入约2.28亿美元，同期净买入前15名A股合计约7987万美元。其中，Global X中国半导体ETF净买入金额高居榜首，前三季度净买入金额为5257万美元。\nA股方面，前三季度，存储芯片龙头长鑫科技深受韩国投资者青睐，其净买入额占A股前15名合计的一半以",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_41ba52ba0f9f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 14,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "high",
      "why": [
        "专业财经媒体跟进",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 95,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 38,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_44e7f67f045c"
    },
    {
      "title": "太仓口岸出口汽车首次突破100万辆",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020785232531587",
      "publishedAt": "2026-10-11T02:10:06.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "据南京海关，今年前9个月，长江流域最大的汽车出口枢纽太仓口岸出口汽车108万辆，历史首次突破百万辆，同比增长超八成。出口市场覆盖全球168个国家和地区。其中，9月份出口约16万辆，创单月出口历史新高，其中，新能源汽车出口同比增长1.1倍。（央视新闻）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a0a493d87736",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 44,
      "rawScore": 44,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 5,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 37,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "浙商证券：新质生产力最新指引几何?",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602904",
      "publishedAt": "2026-10-11T02:05:05.000Z",
      "fetchedAt": "2026-10-11T05:55:59.738Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_f9d6ccb0e56d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 0,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 12,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 21,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 21,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "9月我国共新开15条国际航空货运航线",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020783367753607",
      "publishedAt": "2026-10-11T01:57:13.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "据中国物流与采购联合会航空物流分会，9月份全国共新开15条国际航空货运航线，每周往返航班量达到42个，我国国际航空货运网络加快织密。\n\n从航线布局看，这15条新航线包含亚洲航线9条、欧洲航线4条、北美洲航线2条。共有9家航空公司参与运营，其中8家为国内航司。承运货物以跨境电商、生鲜冷链及农产品、机电电子产品、高端制造产品、日用消费品为主。\n\n据中物联航空物流分会统计，截至9月30日，2026年全国",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_10dcad8dac19",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 18,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 3,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 19,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 19,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 19,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 18,
      "llmScores": [
        17,
        18
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "人民日报：一辆汽车的刹车踏板，绝不应在驾驶中出现“断裂”！安全是汽车工业不可逾越的红线，追求“速成车”无法在市场竞争中行得远",
      "sourceUrl": "https://wallstreetcn.com/livenews/3176614",
      "publishedAt": "2026-10-11T01:54:06.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "人民日报发文称，工信部等四部门10日公开发布关于进一步加强汽车产品创新设计和研发测试验证有关管理工作的通知（征求意见稿）。汽车产品创新设计技术指南围绕虚拟操纵件、门把手、新型人机交互系统、大角度座椅等方面提出具体测试验证要求。\n\n业内普遍认为，四部门发布的新规是对“速成车”说不！\n这几天，舆论广泛关注尊界V800刹车踏板支架断裂事件，讨论的焦点就是汽车尤其是“速成”新能源车的安全问题。尽管事件有待",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ae39e2f94017",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 6,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6
      },
      "noiseCaps": [
        "时间性盘点"
      ],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "人民日报：一辆汽车的刹车踏板，绝不应该在驾驶中出现“断裂”",
      "sourceUrl": "https://www.cls.cn/detail/2501423",
      "publishedAt": "2026-10-11T01:53:17.000Z",
      "fetchedAt": "2026-10-11T05:55:12.684Z",
      "timeConfidence": "source",
      "summary": "工信部等四部门10日公开发布关于进一步加强汽车产品创新设计和研发测试验证有关管理工作的通知（征求意见稿）。汽车产品创新设计技术指南围绕虚拟操纵件、门把手、新型人机交互系统、大角度座椅等方面提出具体测试验证要求。\n业内普遍认为，四部门发布的新规是对“速成车”说不！\n这几天，舆论广泛关注尊界V800刹车踏板支架断裂事件，讨论的焦点就是汽车尤其是“速成”新能源车的安全问题。尽管事件有待权威的调查结论，但",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9c97a7a5b9f7",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 6,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6
      },
      "noiseCaps": [
        "时间性盘点"
      ],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "铜价接近历史高点！瑞银继续唱多：“依旧最看涨”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783349",
      "publishedAt": "2026-10-11T01:48:44.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "伦敦铜期货周五收盘价接近历史高点，多家华尔街机构相继发出警告：全球铜供应持续萎缩，价格或将再度上行。\n瑞银美国股票顾问销售团队成员Théa Ziegler在周五的报告中写道：“铜依旧是我们最高确信度的大宗商品主题之一。”她指出，电气化与数据中心建设带来的需求增长预计将持续超越供给增速，铜价的结构性支撑并未动摇。\n\n电气化、数据中心建设以及持续的供给约束，将继续支撑铜的长期建设性前景。对投资者而言，",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8845f54c7c04",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 6,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 38,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "中汽协：支持强化汽车产品创新设计与研发测试验证管理，推动产业可持续健康发展",
      "sourceUrl": "https://www.36kr.com/newsflashes/4020787067473794",
      "publishedAt": "2026-10-11T01:41:56.000Z",
      "fetchedAt": "2026-10-11T05:55:13.494Z",
      "timeConfidence": "source",
      "summary": "据中国汽车工业协会，10月10日，工业和信息化部会同公安部、生态环境部、市场监管总局等部门，研究起草了《关于进一步加强汽车产品创新设计和研发测试验证有关管理工作的通知（征求意见稿）》，聚焦整治不合理创新设计、健全研发测试验证管理体系，通过提高汽车产品准入管理要求，压实企业产品安全主体责任。中国汽车工业协会对此举措坚决支持，并面向全行业发出倡议，全面提升我国汽车产品安全水平。\n\n当前，我国汽车产业电",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_ac4de161294d",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 79,
      "rawScore": 79,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 9,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 38,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 51,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 47,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "化工产业出海记：中国化工有多强？ 为何日本格外焦虑？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783263",
      "publishedAt": "2026-10-11T01:38:03.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "日本的焦虑并不来自\"中国产品更便宜\"，而来自\"中国的成本优势在结构上不可复制\"。中国的石脑油进口依赖度是 17%，日本是 60% 以上，韩国是 77%。真正构成护城河的是\"原油加工＋本土石化＋煤化工\"三条并行路径的存在，其中煤化工实际上是一张以油气价格为行权条件的看跌期权。日本化工的退出是永久性的，不是周期性的。行将关停的装置多数已运行 40 年以上；欧洲化工资本开支已从 2022 年约 79 亿",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_20437ddd1b2b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 11,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "特朗普要求乌克兰不能打俄炼油厂，“泽连斯基最好立刻停手，乌克兰该换个新总统”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783348",
      "publishedAt": "2026-10-11T01:37:39.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "美俄达成柴油协议，特朗普公开向泽连斯基施压，乌克兰转而寻求欧洲支持。\n当地时间10月10日，特朗普公开表态，乌克兰不得攻击俄罗斯炼油厂，并直接点名泽连斯基：“最好立刻停手。”他更进一步建议乌克兰换掉现任总统，称“这样他们就能达成协议了”。\n此前一天，美国财政部宣布放松对俄罗斯柴油贸易的制裁，特朗普随即宣布美俄就俄向美国及全球市场供应柴油达成一致。泽连斯基对此强烈反弹，称感到“被背叛”。乌克兰随即转",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4ac8af6a94b0",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 48,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 39,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "黄仁勋要“亲自下场”？英伟达洽谈收购“美国DeepSeek”Reflection AI",
      "sourceUrl": "https://wallstreetcn.com/articles/3783347",
      "publishedAt": "2026-10-11T01:29:56.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "英伟达正寻求进一步掌控美国开源AI赛道的核心资产。\n据英国《金融时报》最新报道，英伟达正与美国AI初创公司Reflection AI洽谈收购或深化投资事宜，知情人士透露，双方谈判仍处于早期阶段，交易可能在未来数周内达成，但也存在破裂风险。Reflection AI被视为“美国版DeepSeek”，其最新估值在今年3月的融资轮中达到250亿美元。\n此次交易若成功落地，将是英伟达近期大规模AI投资浪潮",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_92712b6ff397",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 23,
      "rawScore": 50,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 11,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 19,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 41,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 19,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "attentionScore": 23,
      "llmScores": [
        20,
        26
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_c15d7de81979"
    },
    {
      "title": "159bp！法国债市危机愈演愈烈：是否重演2011欧债风暴？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783186",
      "publishedAt": "2026-10-11T01:10:45.000Z",
      "fetchedAt": "2026-10-11T05:53:01.478Z",
      "timeConfidence": "source",
      "summary": "近期，法国债市危机持续恶化，已成为欧洲金融市场的风暴眼。10年期法债与德债利差（OAT-Bund）一度扩大至159bp，创2011/12年欧债危机以来最宽水平，随后因法国极右翼政党释放财政纪律信号而快速收窄至约130bp，仍远高于年初水平。表面来看，市场压力有所缓解，但法国财政危机解除言之过早。根据法国政府公布的最新预算草案，2026年赤字率预计达5.4%，2027年目标为5.0%，但达标难度较大",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ab5d1ece3de5",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 50,
      "rawScore": 50,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 11,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 19,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 41,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 28,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "小摩：中国券商机构业务具韧性抵消零售放缓 首选中金公司(03908)",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602882",
      "publishedAt": "2026-10-11T01:05:05.000Z",
      "fetchedAt": "2026-10-11T05:55:59.738Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_995c58cacbee",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 6,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "AI周报|Manus母公司融资5亿美元；谷歌发布Gemini工作智能体",
      "sourceUrl": "https://www.yicai.com/news/103388780.html",
      "publishedAt": "2026-10-11T01:02:36.000Z",
      "fetchedAt": "2026-10-11T05:53:17.939Z",
      "timeConfidence": "source",
      "summary": "Manus正在重新明确产品定位与市场方向，但环境已经变化，需要面对的竞争更激烈了。谷歌发布Gemini工作智能体\n\n当地时间10月8日，谷歌云发布GeminiAgent，将其定位为面向企业工作的通用智能代理。用户只需在统一提示框中提出目标，Agent便可规划任务、调用工具、连接企业业务系统，并将结果交付到文档、邮箱和开发环境中。除了充当个人助理，Gemini智能体还可以用作团队成员。它可以在团队中",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c155fb5bb20c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 8,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [
        "时间性盘点"
      ],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 44,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 31,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "下周关注丨9月CPI等数据将公布，这些投资机会最靠谱",
      "sourceUrl": "https://www.yicai.com/news/103388775.html",
      "publishedAt": "2026-10-11T00:48:31.000Z",
      "fetchedAt": "2026-10-11T05:53:17.939Z",
      "timeConfidence": "source",
      "summary": "成品油将迎来调价窗口、下周将举办广交会等多个活动……【重磅新闻】\n\n9月CPI等数据将公布\n\n10月14日，9月CPI、PPI数据将公布。此外，9月金融数据或将在下周公布。\n\n成品油将迎来调价窗口\n\n根据“十个工作日”原则，本轮调价窗口为10月15日24时。据金联创测算，截至10月9日第五个工作日，参考原油品种均价为97.01美元/桶，变化率为-4.65%，国内汽柴油零售价预计下调270元/吨。\n",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8dc3cf14dcc8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 47,
      "rawScore": 47,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "中汽协：摒弃重形式、轻安全的非理性创新模式",
      "sourceUrl": "https://www.cls.cn/detail/2501406",
      "publishedAt": "2026-10-11T00:26:10.000Z",
      "fetchedAt": "2026-10-11T05:55:12.684Z",
      "timeConfidence": "source",
      "summary": "财联社10月11日讯，据中国汽车工业协会，10月10日，工业和信息化部会同公安部、生态环境部、市场监管总局等部门，研究起草了《关于进一步加强汽车产品创新设计和研发测试验证有关管理工作的通知（征求意见稿）》，聚焦整治不合理创新设计、健全研发测试验证管理体系，通过提高汽车产品准入管理要求，压实企业产品安全主体责任。中国汽车工业协会对此举措坚决支持，并面向全行业发出倡议，全面提升我国汽车产品安全水平。\n",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_00c49027dfd7",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 79,
      "rawScore": 79,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 9,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 38,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 51,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 47,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "财新闻｜最新！全国各地最低工资标准公布",
      "sourceUrl": "https://mini.caixin.com/2026-10-11/102492192.html",
      "publishedAt": "2026-10-11T00:19:45.000Z",
      "fetchedAt": "2026-10-11T05:52:45.816Z",
      "timeConfidence": "source",
      "summary": "特朗普：“乌克兰应该换个总统”；俄罗斯宣布部分解除柴油出口禁令；沙特利雅得机场遭袭造成12人死亡309人受伤\n    \n     \n     近日，人社部网站发布全国各省、自治区、直辖市最低工资标准情况（截至2026年10月1日）。图：视觉中国\n    \n   \n       \n\n特朗普：“乌克兰应该换个总统” \n美国总统特朗普10日表示“乌克兰应该换个总统”，暗示乌总统泽连斯基在结束俄乌冲突方面",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3154aefd4308",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 48,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "【商圈】幕后操盘Anthropic 卡米·克拉克游走资本与道德之间",
      "sourceUrl": "https://database.caixin.com/2026-10-11/102492191.html",
      "publishedAt": "2026-10-11T00:08:00.000Z",
      "fetchedAt": "2026-10-11T05:52:45.816Z",
      "timeConfidence": "source",
      "summary": "Anthropic正以两万亿美元目标估值冲刺IPO，但克拉克的隐秘角色与争议过往，正让这家标榜安全伦理的AI巨头面临前所未有的治理与信任拷问\n       \n　　【财新数据专稿】在新德里举行的印度人工智能影响力峰会上，各家科技巨头的掌门人陆续步入会场。按照印度主办方的明确要求，每位受邀参会的跨国企业领袖只允许携带一名随行人员入场。绝大多数首席执行官选择了技术主管或者负责政府关系的副总裁，Anthr",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1017a548af7a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 6,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 38,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "【早报】证监会召开重磅座谈会，吴清发声；沙特利雅得机场遭袭造成12人死亡309人受伤",
      "sourceUrl": "https://www.cls.cn/detail/2501397",
      "publishedAt": "2026-10-10T23:00:00.000Z",
      "fetchedAt": "2026-10-11T05:55:12.684Z",
      "timeConfidence": "source",
      "summary": "宏观新闻\n1、昨日，证监会主席吴清在北京召开座谈会，与部分上市公司负责人、证券基金机构专家深入交流，就当前资本市场和金融形势充分听取意见建议。吴清表示，上市公司和行业机构是市场的重要主体，希望大家积极建言献策，共同把资本市场建设好，更好回报广大投资者，为中国式现代化建设积极贡献力量。\n2、国家发展改革委主任郑栅洁10日主持召开民营企业座谈会。郑栅洁表示，将加强宏观政策取向一致性评估，强化存量政策和",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5746404e0296",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 6,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [
        "时间性盘点"
      ],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 64,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 3 项"
          ]
        },
        "privateFundSales": {
          "score": 55,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 2 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "英伟达加码布局开放AI模型！据悉正洽谈收购Reflection AI",
      "sourceUrl": "https://www.cls.cn/detail/2501395",
      "publishedAt": "2026-10-10T22:05:02.000Z",
      "fetchedAt": "2026-10-11T05:55:12.684Z",
      "timeConfidence": "source",
      "summary": "财联社10月11日讯（编辑 牛占林）据媒体报道，英伟达正与美国开放权重模型开发商、人工智能初创公司Reflection AI进行初步谈判，探讨收购该公司或进一步加大投资的可能性。\n知情人士透露，目前双方重点讨论的方案之一是所谓的“人才收购”， 按照这一模式，英伟达将聘用Reflection的员工，并获得相关技术的许可使用权，而不必完整收购该公司，从而有望绕开监管审查。去年12月，英伟达收购半导体设",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0fc9bb0620eb",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 71,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_c15d7de81979"
    },
    {
      "title": "俄罗斯股市收低；截至收盘MOEX Russia Index基本持平",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602817",
      "publishedAt": "2026-10-10T21:20:13.000Z",
      "fetchedAt": "2026-10-11T05:55:59.738Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_90e5eae908a8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 43,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 6,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [
        "行情播报"
      ],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "环球下周看点： 美股Q3财报季拉开帷幕 CPI牵动美联储加息预期",
      "sourceUrl": "https://www.cls.cn/detail/2501386",
      "publishedAt": "2026-10-10T17:42:29.000Z",
      "fetchedAt": "2026-10-11T05:55:12.684Z",
      "timeConfidence": "source",
      "summary": "财联社10月11日讯（编辑 牛占林）展望下周，美股第三季度财报季正式拉开帷幕，美国大型银行将率先公布业绩，历史高位附近的美股将迎来考验。与此同时，美国9月消费者价格指数(CPI)即将公布，在能源价格上涨、美债收益率持续走高的背景下，这份通胀报告可能重新牵动市场对美联储加息路径的判断。\n美股本周延续强势，标普500指数再创收盘新高，年内涨幅已超过14%。但指数屡创新高的背后，市场面临的压力并未消失：",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d2cfa2203826",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 21,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 21,
        "evidence": 14,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 21,
      "llmScores": [
        20,
        21
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_6ab2a13609c6"
    },
    {
      "title": "欧中贸易关系进入关键时刻，布鲁塞尔推动再平衡",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602799",
      "publishedAt": "2026-10-10T16:52:37.000Z",
      "fetchedAt": "2026-10-10T17:25:14.260Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_c4ef3a6925df",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 37,
      "rawScore": 37,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "花400元买一年安心？2027居民医保开缴 灵活就业人员保障加码",
      "sourceUrl": "https://www.cls.cn/detail/2501375",
      "publishedAt": "2026-10-10T15:20:48.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月10日讯（记者 史士云）“一位48岁的自由职业女性，医保买得时断时续。有一次正处在脱保期，她突发中毒，需要马上手术。同一间重症病房里，病情相当的病友花了超12万元，因为参加医保，绝大部分报销，个人只承担了5万多元。而该女性由于没参保，12余万元全部由自己扛。出院后，她专程到街道办理手续，直言医保不能忘，续保不能断。”这是“七一勋章”获得者、重庆两江新区观音桥街道“老马工作室负责",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3d400cd5935f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "期待继续与上海深化合作、共赢未来！朱忠明会见来沪出席上海市市长国际企业家咨询会议的企业家代表",
      "sourceUrl": "https://www.yicai.com/news/103388738.html",
      "publishedAt": "2026-10-10T15:08:56.000Z",
      "fetchedAt": "2026-10-10T17:23:04.754Z",
      "timeConfidence": "source",
      "summary": "进一步加大在沪投资布局，积极助力上海产业转型升级，深度参与上海绿色低碳、城市建设、生物医药等领域发展。上海市市长朱忠明今天（10月10日）分别会见了来沪出席第38次上海市市长国际企业家咨询会议的法国施耐德电气集团董事长赵国华、瑞士诺华集团董事会主席乔恩礼、泰国正大集团董事长谢吉人、美国直观医疗公司董事会执行主席古迦睿。\n\n进一步加大在沪投资布局，积极助力上海产业转型升级，深度参与上海绿色低碳、城市",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e2e11ddb3008",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 46,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "上海市政府常务会议传达学习贯彻习近平总书记重要贺信精神，研究部署信用修复、中小企业高质量发展等工作",
      "sourceUrl": "https://www.yicai.com/news/103388737.html",
      "publishedAt": "2026-10-10T15:07:16.000Z",
      "fetchedAt": "2026-10-10T17:23:04.754Z",
      "timeConfidence": "source",
      "summary": "进一步释放乘数效应，着力把世赛标准转化为育人资源，打造技能人才“上海高地”。上海市委副书记、市长朱忠明今天（10月10日）主持召开市政府常务会议，传达学习贯彻习近平总书记致第48届世界技能大赛贺信精神；研究部署优化上海市信用修复制度、推动中小企业高质量发展等工作。\n\n进一步释放乘数效应，着力把世赛标准转化为育人资源，打造技能人才“上海高地”\n\n会议指出，要切实把思想和行动统一到习近平总书记重要贺信",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4c1a422ad9a3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "为上海推进现代化建设和高质量发展提供更多先进经验！陈吉宁会见来沪参加上海市市长国际企业家咨询会议的企业家代表",
      "sourceUrl": "https://www.yicai.com/news/103388722.html",
      "publishedAt": "2026-10-10T15:06:20.000Z",
      "fetchedAt": "2026-10-10T17:23:04.754Z",
      "timeConfidence": "source",
      "summary": "陈吉宁指出，企业家是国际经贸合作的重要建设者，也是营商环境的直接感知者。今天（10月10日），市委书记陈吉宁分别会见了来沪参加第38次上海市市长国际企业家咨询会议的上海市市长国际企业家咨询会议主席、美国铁狮门公司首席执行官徐瑞柏，巴西淡水河谷公司董事会主席欧立言，德国西门子股份公司董事会主席、总裁兼首席执行官博乐仁。\n\n希望更好把握发展机遇，持续加大在沪投资布局力度，把更多新业务、新技术、新项目落",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_59902c35dae2",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 46,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "消费者AI智能体或颠覆网购格局——谁将是最终赢家？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602789",
      "publishedAt": "2026-10-10T14:41:00.000Z",
      "fetchedAt": "2026-10-10T17:25:14.260Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_62adc55a19f8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 37,
      "rawScore": 37,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "标普500的平静，全靠十只股票和一个AI信仰？",
      "sourceUrl": "https://www.cls.cn/detail/2501354",
      "publishedAt": "2026-10-10T14:22:10.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（编辑 李莹）3月底至今，十只股票扛起标普500七成涨幅，面对AI行情投资者不怕下跌只怕踏空，美股的平静几乎完全押在一个AI信仰上。\n野村证券近日发布报告指出，个股分化和期权卖盘共同压住了标普500指数波动，踏空焦虑可能迫使资金继续加仓推高美股。\n如果只看标普500指数，过去两个月的美股称得上“无聊”。自8月初以来，指数累计小幅上涨，波动率处于一年来的低位。翻开成分股名单，情况",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b4a5c5b204de",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 5 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 43,
          "reasons": [
            "命中关联主题 3 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "“上涨十月”遇冷：比特币反弹乏力 分析师警告仍有下行空间",
      "sourceUrl": "https://www.cls.cn/detail/2501364",
      "publishedAt": "2026-10-10T13:55:21.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（编辑 夏军雄）加密货币市场周五迎来喘息之机，市场总市值上涨2.1%，至2.89万亿美元。不过，此次反弹仅挽回了部分损失。一周前，加密货币市场总市值仍在3万亿美元以上，当时比特币价格一度突破87,000美元。\n尽管市场有所回升，交易员仍然感到不安。加密货币恐惧与贪婪指数降至56，处于中性水平，低于10月2日的71。当时，市场情绪明显处于“贪婪”区间。\n华尔街同样感到紧张。美国现",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cb0bb7d1f375",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 51,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 14,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 19,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 63,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 28,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "法国债券压力或将可控，欧洲整体风险仍属有限",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602779",
      "publishedAt": "2026-10-10T13:31:27.000Z",
      "fetchedAt": "2026-10-10T14:35:54.024Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_05e66344097d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 57,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 6,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 37,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "制动系统极限工况，拟被写进新车准入",
      "sourceUrl": "https://www.yicai.com/news/103388715.html",
      "publishedAt": "2026-10-10T13:28:38.000Z",
      "fetchedAt": "2026-10-10T14:31:41.376Z",
      "timeConfidence": "source",
      "summary": "官方定调：车企禁止将消费者当小白鼠。10月10日，工信部、公安部、生态环境部、市场监管总局联合发布《关于进一步加强汽车产品创新设计和研发测试验证有关管理工作的通知》（征求意见稿）。其中，关于制动系统等结构、全隐藏式门把手、“零重力”座椅、电吸门、语音交互、手势交互、异形方向盘、辅助驾驶等验证均被明确点名提及。根据《通知》（意见稿），自2027年1月1日起，对于涉及创新设计的新申报车型，车企应当增填",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b055a8da7d95",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 77,
      "rawScore": 77,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 9,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 46,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "AI进化速递丨腾讯云开源内部自用TeamAI工具",
      "sourceUrl": "https://www.yicai.com/news/103388714.html",
      "publishedAt": "2026-10-10T13:11:28.000Z",
      "fetchedAt": "2026-10-10T14:31:41.376Z",
      "timeConfidence": "source",
      "summary": "Meta与多家伙伴合作推出PAP协议……①腾讯云开源内部自用TeamAI工具，支持跨Agent共享Skill；②我国将开展适应人工智能发展促就业行动；③Meta与多家伙伴合作推出PAP协议：规范个人智能体与企业服务交互方式；④Claude管理智能体新增动态工作流，单次最多并行调度1000个AI Agents。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_487e2600d4f2",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 37,
      "rawScore": 37,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "A股第一份三季报出炉：沃华医药单季净利环比转跌，年内分红1.52亿元超前三季净利",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602776",
      "publishedAt": "2026-10-10T13:05:46.000Z",
      "fetchedAt": "2026-10-10T14:35:54.024Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_3cc7bb01f717",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 24,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 11,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 18,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 40,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 18,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_a3c5d0364922",
      "attentionScore": 24,
      "llmScores": [
        26,
        22
      ],
      "scoredBy": "llm"
    },
    {
      "title": "证监会召开座谈会：发展壮大耐心资 推动加大分红回购力度 优化发行上市制度",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602775",
      "publishedAt": "2026-10-10T13:05:06.000Z",
      "fetchedAt": "2026-10-10T14:35:54.024Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_3e5740b71ca6",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 51,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 6,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "这次证监会专家座谈会内容有何不同？历次会后，A股怎么走？",
      "sourceUrl": "https://www.cls.cn/detail/2501350",
      "publishedAt": "2026-10-10T13:04:34.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（记者 林坚）正值国庆节假期后的调休日，证监会主席吴清最新主持召开座谈会，引发市场的高度关注。\n这次座谈会聚焦了哪些事项？又释放了哪些信号？透露接下来年内哪些监管主线？整体来看，稳市机制被提到建议首位，这也可看出，核心在于于市场“稳”的研判未改，资金入市的定调明确，强监管的主线继续推进，对于回报投资者的监管态度依然坚定。\n与会专家提出的具体建议包括，持续加强稳市机制建设，进一步",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_95ed093d93d7",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 71,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 72,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 46,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "四部门“通知”终结“速成车”乱象！环境验证不少于一年",
      "sourceUrl": "https://www.cls.cn/detail/2501345",
      "publishedAt": "2026-10-10T12:22:25.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（记者 张屹鹏）面对激烈的竞争环境，和技术快速迭代下大量“速成车”涌入市场的行业乱象，监管部门祭出重拳，从汽车产品创新设计验证测试源头予以“纠偏”。\n10月10日，工业和信息化部、公安部、生态环境部、市场监管总局联合下发“关于进一步加强汽车产品创新设计和研发测试验证有关管理工作的通知”（征求意见稿）（下称“通知”）。与此前涉及整车及零部件的相关管理不同，此次“通知”主要聚集于产",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_183e9919e2c7",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 77,
      "rawScore": 77,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 9,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 46,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "汇丰在华公募布局生变，两家公募变更主要股东，汇丰或一进一退",
      "sourceUrl": "https://www.cls.cn/detail/2501343",
      "publishedAt": "2026-10-10T12:21:39.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（记者 吴雨其）10月8日，证监会分别发布汇丰晋信基金变更主要股东、实际控制人反馈意见，以及恒生前海基金变更主要股东反馈意见。\n两份文件中，汇丰环球投资管理（英国）有限公司均以股权受让方身份出现，恒生前海基金的申请还涉及世纪证券。\n作为中外合资基金，汇丰晋信基金由山西信托和汇丰环球投资管理（英国）有限公司共同出资设立。其中，山西信托持股51%，为第一大股东，汇丰环球持股49%。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fafa477b9331",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 65,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 14,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "high",
      "why": [
        "快讯线索，需结合原文判断",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 19,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 37,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 72,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "法国国债利差攀升，欧洲股市涨势是否将受阻？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602767",
      "publishedAt": "2026-10-10T12:18:32.000Z",
      "fetchedAt": "2026-10-10T14:35:54.024Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_cadcfd6cdc32",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 43,
      "rawScore": 43,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 6,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 15,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "四部委征求意见稿：禁止隐藏式车门把手，关键功能保留实体操纵件",
      "sourceUrl": "https://wallstreetcn.com/articles/3783341",
      "publishedAt": "2026-10-10T12:13:11.000Z",
      "fetchedAt": "2026-10-10T14:31:25.165Z",
      "timeConfidence": "source",
      "summary": "10月10日，中国工业和信息化部、公安部、生态环境部、市场监管总局联合发布征求意见稿，拟对汽车产品创新设计和研发测试验证实施全面强化管理。\n征求意见稿明确提出，禁止配备全隐藏式车门把手；灯光、雨刮、除霜除雾等关键驾驶安全功能在采用虚拟操纵件的同时，必须保留实体操纵件；折叠显示屏、柔性显示屏被明确禁止；行车时不得使用\"零重力\"座椅、旋转座椅或座椅放倒成床等功能。\n在时间节点上，自2027年1月1日起",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fa7d0740c8ad",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 77,
      "rawScore": 77,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 9,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 46,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "渣打银行高管：人民币国际化进入2.0阶段，商业价值加速显现",
      "sourceUrl": "https://finance.caixin.com/2026-10-10/102492182.html",
      "publishedAt": "2026-10-10T12:07:13.000Z",
      "fetchedAt": "2026-10-10T14:31:09.269Z",
      "timeConfidence": "source",
      "summary": "融资成本优势，可能是当前企业扩大人民币使用的重要驱动力之一\n    \n     \n     央行数据显示，截至2026年一季度末，主要离岸市场人民币存款余额约1.8万亿元，较上年末增加1261亿元，处于历史高位；其中香港10352亿元。图：视觉中国\n    \n   \n       　　【财新网】“人民币正在更广泛地展现自身的商业价值。从结算货币看，中国跨境收付（含贸易和跨境投资）中，已有超过50%",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5e010f9df09e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 36,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 14,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 28,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 63,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 28,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null,
      "attentionScore": 36,
      "llmScores": [
        37,
        34
      ],
      "scoredBy": "llm"
    },
    {
      "title": "大闸蟹价格崩盘？母蟹一周直降15元，有养殖户“停笼”不贱卖",
      "sourceUrl": "https://www.cls.cn/detail/2501334",
      "publishedAt": "2026-10-10T12:05:42.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "秋风起，蟹脚痒。又到了每年的大闸蟹季节，但今年的蟹农恐怕不太开心。\n自9月下旬以来，大闸蟹陆续上市，但价格却一路走低。\n大闸蟹崩了？母蟹价格不到一周直降15元\n“螃蟹行情太伤人了”，“大闸蟹价格崩盘了”，“今年的行情真是跌到谷底”……近日，短视频平台上有不少卖蟹人吐槽今年行情。\n蓝鲸新闻记者从多位大闸蟹商户处了解到，今年不同品类的大闸蟹价格都有下降，“中秋前勉强还能卖上一点价格，发了几天货，但是节",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_66c1916bcf11",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 42,
      "rawScore": 42,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 5,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 36,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 23,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "id": "news_85272c0b9438",
      "title": "3小时获赔6500元国寿骑手保跑出理赔加速度",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261010/6170.html",
      "publishedAt": "2026-10-10T12:03:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "为万千“城市奔跑者”织密筑牢多层次保险防护网",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 19,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 83,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 11,
        "recency": 13,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 71,
          "reasons": [
            "命中保险运营核心主题 2 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 19,
      "llmScores": [
        17,
        20
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "title": "特朗普首次整体制裁国际刑事法院 该院院长称不会屈服",
      "sourceUrl": "https://international.caixin.com/2026-10-10/102492177.html",
      "publishedAt": "2026-10-10T11:48:41.000Z",
      "fetchedAt": "2026-10-10T14:31:09.269Z",
      "timeConfidence": "source",
      "summary": "赤根智子表示，所有人现在都必须作出选择：是选择一个强权即公理的世界，还是选择一个以法治为基础、受害者仍能获得正义的未来\n    \n     \n     资料图：荷兰海牙国际刑事法院，赤根智子步入法庭。图：视觉中国\n    \n   \n       　　【财新网】特朗普政府首次对国际刑事法院（ICC）整个机构实施制裁。当地时间10月9日，美国财政部海外资产控制办公室（OFAC）将位于荷兰海牙的ICC列",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0c64ee933edf",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 46,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "海外研选 | 伯恩斯坦拆解AI基建成本：每GW投资最高395亿美元",
      "sourceUrl": "https://www.cls.cn/detail/2501306",
      "publishedAt": "2026-10-10T11:34:48.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（编辑 夏军雄）伯恩斯坦10月5日发布的研报显示，采用不同AI加速器架构，建设1GW数据中心所需的资本开支约为346亿至395亿美元。其中，英伟达Vera Rubin架构的建设成本最高，OpenAI自研ASIC架构Jalapeno则相对较低。\n\n尽管不同AI芯片和服务器系统的价格差异显著，但换算至相同供电规模后，数据中心整体建设成本的差距明显缩小。\n伯恩斯坦将英伟达Rubin ",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2c4bfea5e498",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 49,
      "rawScore": 49,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 13,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "重庆都市圈建设“十五五”规划出炉，目标GDP超3.6万亿",
      "sourceUrl": "https://www.yicai.com/news/103388677.html",
      "publishedAt": "2026-10-10T11:26:33.000Z",
      "fetchedAt": "2026-10-10T14:31:41.376Z",
      "timeConfidence": "source",
      "summary": "成都都市圈和重庆都市圈未来5年GDP将超过7.5万亿元。10月10日，重庆市政府网站发布了《重庆都市圈建设“十五五”实施方案》（下称“方案”）。方案提出，到2030年，重庆都市圈地区生产总值达3.6万亿元以上，城镇人口达2000万人以上。\n\n过去5年，国家实施了建设成渝地区双城经济圈战略，目标将其打造成为带动全国高质量发展的重要增长极和新的动力源。在此基础上，国家“十五五”规划纲要又提出，提升成渝",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1857c67fdbac",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 25,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "发改委：推动“十五五”规划 “六张网”建设实施方案等重大工程项目尽早开工",
      "sourceUrl": "https://www.cls.cn/detail/2501307",
      "publishedAt": "2026-10-10T11:23:55.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯，今日，国家发展改革委主任郑栅洁主持召开民营企业座谈会，围绕准确把握三季度经济形势、积极应对国际供需情况变化，与来自石油化工、天然气供应、农业机械、人工智能应用等领域的盛虹控股、东明石化、新奥集团、吉峰三农、晶泰科技等企业负责人深入交流，听取意见建议。\n会上，企业负责人分别介绍了前三季度生产经营情况，并结合国际形势变化和国内外市场情况，提出促进行业发展、完善宏观政策的意见建议。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_48caeda1921f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 46,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 25,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_c6aba8e259ef"
    },
    {
      "title": "楼市新政后买家心态转变：从“等一等”到“当天定”",
      "sourceUrl": "https://www.yicai.com/news/103388674.html",
      "publishedAt": "2026-10-10T11:18:04.000Z",
      "fetchedAt": "2026-10-10T14:31:41.376Z",
      "timeConfidence": "source",
      "summary": "有真实自住需求的购房者已经在出手了。“有不少客户直接说，就是冲着现房来的。”位于上海闵行区的保利光合TOD项目销售经理告诉记者，中秋、国庆双节期间成交的25套房源中，有近一半是当天首访当天下定，“首访转化率比我们预期的要高。”在8月中下旬“沪八条”持续释放自住需求的基础上，9月底的上海现房销售细则靴子落地，打消市场观望情绪，购房者的置业决策也随之变得更加确定。一线营销人的真实体验描摹着新政之下这一",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0ec360b8067c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 43,
      "rawScore": 43,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 33,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "中国证监会召开资本市场和金融形势专家座谈会",
      "sourceUrl": "https://wallstreetcn.com/articles/3783337",
      "publishedAt": "2026-10-10T11:16:51.000Z",
      "fetchedAt": "2026-10-10T14:31:25.165Z",
      "timeConfidence": "source",
      "summary": "10月10日，中国证监会党委书记、主席吴清在北京召开座谈会，与部分上市公司负责人、证券基金机构专家深入交流，就当前资本市场和金融形势充分听取意见建议。座谈会上，大家一致认为，我国宏观经济稳中向好，产业结构转型持续深化，资本市场运行总体稳健，多层次市场功能有效发挥，虽然面临一些风险挑战，但高质量发展的态势不会改变，对经济运行和资本市场充满信心。同时，与会专家对更好推动资本市场平稳健康发展提出了具体建",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5732044bc513",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 65,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 3 项"
          ]
        },
        "privateFundSales": {
          "score": 56,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 2 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "id": "news_779c28374ab4",
      "title": "严禁以附代主成立产品管理委员会财险公司产品开发规则全面升级",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/yc/20261010/6169.html",
      "publishedAt": "2026-10-10T11:11:00.000Z",
      "sourceName": "慧保天下",
      "category": "regulatory",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "一份“升级版”产品开发规则",
      "contentTags": [
        "官方监管"
      ],
      "scoreDetails": {},
      "score": 69,
      "original": {
        "huibaoxianCategory": "政策解读"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 69,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 0,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 38,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "title": "财联社创投通：一级市场本周53起融资、总额约73.11亿元，Manus完成超5亿美元新一轮融资",
      "sourceUrl": "https://www.cls.cn/detail/2501308",
      "publishedAt": "2026-10-10T11:09:38.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月10日讯 据财联社创投通数据显示，本周（10.3-10.9）国内统计口径内共发生53起投融资事件，已披露的融资总额合计约73.11亿元。\n热门领域\n从投资事件数量来看，先进制造、医疗健康、人工智能、集成电路等领域较活跃；从融资总额来看，人工智能披露的融资总额最多，约36.60亿元。Manus母公司蝴蝶效应完成由博裕投资、IDG资本领投，腾讯、红杉中国、真格基金继续加持的超5亿美",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1cc4d49ead4e",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 59,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 47,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "国家发改委：推动“十五五”规划、“六张网”建设实施方案等明确的重大工程项目尽早开工建设",
      "sourceUrl": "https://wallstreetcn.com/livenews/3176542",
      "publishedAt": "2026-10-10T11:04:00.000Z",
      "fetchedAt": "2026-10-10T14:31:25.165Z",
      "timeConfidence": "source",
      "summary": "国家发展改革委主任郑栅洁10日主持召开民营企业座谈会，围绕准确把握三季度经济形势、积极应对国际供需情况变化，与来自石油化工、天然气供应、农业机械、人工智能应用等领域的盛虹控股、东明石化、新奥集团、吉峰三农、晶泰科技等企业负责人深入交流，听取意见建议。\n郑栅洁表示，四季度是全年收官之季，也是巩固经济回升向好的关键窗口期，国家发展改革委将认真贯彻落实党中央和国务院决策部署，加大逆周期调节力度，加强宏观",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_11aeb2f2c9d5",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 46,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 25,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_c6aba8e259ef"
    },
    {
      "title": "分众传媒收购新潮传媒获反垄断审查通过 附6项限制性条件",
      "sourceUrl": "https://www.cls.cn/detail/2501299",
      "publishedAt": "2026-10-10T10:51:18.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（记者 沈娇娇）今日，市场监管总局官网发布公告，经依法审查，附加限制性条件批准分众传媒收购新潮传媒股权案。\n梯媒行业“老大”吞并“老二”，在经历了一年多的反垄断审查之后，经历提交补充材料、延长进一步审查期限等事宜，终于在今日迎来进展。\n具体来看，分众传媒在中国境内电梯媒体广告市场的市场份额为50%-55%，新潮传媒的市场份额为5%-10%，集中后实体的合计市场份额为55%-60",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cdf1df98c5ae",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 70,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 46,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_a6f1a5a5635d"
    },
    {
      "title": "新式浮动费率基金迎来扩围，进一步强化管理人与基民长期利益绑定",
      "sourceUrl": "https://www.cls.cn/detail/2501298",
      "publishedAt": "2026-10-10T10:50:19.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（记者 吴雨其）运行一年多后，新模式浮动费率基金迎来新一轮扩围。\n财联社记者从行业人士处获悉，监管部门近日发布一期题为《优化新模式浮动费率产品注册安排 纵深推进公募基金改革》的机构监管通报（以下简称《通报》），对新模式浮动费率产品注册安排作出优化。\n此次调整主要涉及三个方面：一是扩大参与机构范围，由头部基金管理人拓展至主动权益类基金管理规模居前的中型基金管理人，头部机构延续60",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_94f66a916478",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 77,
      "rawScore": 77,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 3,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 56,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "新质生产力顶层文件落地，1.46万亿科创债有待再发力，城投迎产投转型窗口",
      "sourceUrl": "https://www.cls.cn/detail/2501263",
      "publishedAt": "2026-10-10T10:49:40.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（编辑 李响）距\"新质生产力\"首次提出刚好三年，中共中央、国务院于10月9日印发《关于发展新质生产力的意见》（下称《意见》），以七部分、十九条重点举措，将这一概念从理论论述正式固化为全国统一落地的\"施工图\"。\n其中《意见》第十六条\"加大金融创新产品供给\"中提到，鼓励银行开发符合新质生产力特点的贷款产品，丰富科技创新债券产品体系，发展覆盖科技创新全链条的保险产品，探索科技租赁等业",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5a386ae1df58",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 73,
      "rawScore": 83,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 14,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "high",
      "why": [
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 55,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 46,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 33,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null,
      "attentionScore": 73,
      "llmScores": [
        79,
        67
      ],
      "scoredBy": "llm"
    },
    {
      "title": "市场监管总局：经营者集中简易案件平均审查时间从39.9天缩至18.6天",
      "sourceUrl": "https://www.yicai.com/news/103388625.html",
      "publishedAt": "2026-10-10T10:34:24.000Z",
      "fetchedAt": "2026-10-10T10:35:25.900Z",
      "timeConfidence": "source",
      "summary": "经营者集中简易案件审查制度是落实《反垄断法》分类分级审查要求的重要举措。为解决经营者集中审查中“案件越来越多、企业希望更快获批，但行政资源有限、重点案件又必须审慎审查”的矛盾，市场监管总局创设并实施经营者集中简易案件审查制度，以“繁简分流”破题。\n\n“简易案件平均审查时间从2014年的39.9天缩短至今年以来的18.6天，大幅降低了企业投资并购的制度性交易成本。”10月10日，市场监管总局反垄断二",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c72888513c4b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 36,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 43,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null,
      "attentionScore": 36,
      "llmScores": [
        38,
        33
      ],
      "scoredBy": "llm"
    },
    {
      "title": "深圳公积金拟新增“装修住房提取”",
      "sourceUrl": "https://wallstreetcn.com/livenews/3176541",
      "publishedAt": "2026-10-10T10:27:07.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "据深圳市住房和建设局消息，为持续加大对住房公积金缴存职工住房消费的支持力度，深圳市住房公积金中心起草了《关于支持装修住房提取住房公积金等有关事项的通知（征求意见稿）》，公开向社会各界征求意见。值得关注的是，《通知》明确职工家庭可就其在本市拥有的一套住房，申请提取公积金用于装修，提取额度不超过25万元。可就其在本市拥有的一套住房，申请提取公积金支付物业费，每月提取额度上限为550元。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_03b5ace88963",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 65,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 11,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "regDocument": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "野村警告：美股指数“严重失真”，十只股票贡献标普七成涨幅，警惕柴油带来新冲击",
      "sourceUrl": "https://wallstreetcn.com/articles/3783332",
      "publishedAt": "2026-10-10T10:23:15.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "美股表面平静之下，一场滚动式熊市正在悄然蔓延。\n野村证券跨资产策略师Charlie McElligott在10月8日的报告中警告，标普500指数近两个月几乎原地踏步，但85%的成分股已陷入技术性调整，指数的\"平静\"不过是极度集中的市场结构所制造的幻觉。\nMcElligott指出，仅十只股票就贡献了标普500自3月30日以来23%涨幅的70%，其中英伟达一家独占13%。与此同时，欧洲柴油短缺正通过利",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ff0e3a8d634b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 73,
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 14,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "high",
      "why": [
        "专业财经媒体跟进",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 64,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "张忆东：港股10月大概率反弹，先抑后扬，把握两条主线",
      "sourceUrl": "https://wallstreetcn.com/articles/3783331",
      "publishedAt": "2026-10-10T10:21:27.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "10月5日，海通国际首席经济学家张忆东发布策略周报，分享了对港美股、美债和欧债的看法。近期该团队的预警已多次应验。\n张忆东团队于5月6日率先在业内发布《夏日寒风》预警，7月份全球股市如期大跌。8月16日，该团队发布《秋季行情将从跌深反弹转向震荡分化》，在市场短期反弹后前瞻性提示全球主要股市的秋季行情将面临短期震荡风险，指出美债10年期收益率已突破近三年高位，未来数周不排除进一步向4.8%—4.9%",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0f071e7c111d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 59,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 14,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 64,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "新华保险举牌国泰海通H股，持股比例升至20.24%",
      "sourceUrl": "https://www.cls.cn/detail/2501283",
      "publishedAt": "2026-10-10T10:19:43.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯，新华保险10月9日在保险业协会官网披露，公司于9月29日通过二级市场集中竞价方式增持国泰海通H股995.96万股，约占其已发行H股股本的0.28%，触发举牌。\n本次增持由新华资产实施，权益变动后，新华保险及一致行动人合计持有国泰海通H股约7.1亿股，持股比例由19.96%升至20.24%。\n\n这已是新华保险近期的第二次举牌。9月22日，新华保险增持中航科工H股1687.6万股",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_eab302ba1e3f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 69,
      "rawScore": 69,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 8,
        "evidence": 14,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "high",
      "why": [
        "快讯线索，需结合原文判断",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 41,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 41,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 28,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_668e7c3605a8"
    },
    {
      "title": "第三批摊余成本法债基上报， 16家中小基金公司“抢滩”热门产品",
      "sourceUrl": "https://wallstreetcn.com/articles/3783333",
      "publishedAt": "2026-10-10T10:01:57.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "8 月 14 日摊余成本法债基重新“开闸”后，中小公募机构的申报热情持续高涨。\n因为 摊余成本法债基确实具备独特的市场热度。\n同样是买债券，普通债基的净值随债券市价涨跌，市场一波动净值就上下起伏。摊余成本法债基则以买入成本记账，把票息和折溢价摊销到持有期的每一天，净值几乎是一条平稳向上的曲线。但产品必须封闭持有到期、中途不能卖出。\n10 月 8 日、9 日，第三批 16 家中小基金公司集中上报。\n",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_79e92a1f81ac",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 47,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 3,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 18,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 93,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 89,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "命中关联主题 3 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null,
      "attentionScore": 47,
      "llmScores": [
        58,
        36
      ],
      "scoredBy": "llm"
    },
    {
      "title": "保险资管产品Q3业绩反转！医药、红利逆势领跑，部分科技主题回撤逾30%，机构研判后市三大方向",
      "sourceUrl": "https://www.cls.cn/detail/2501183",
      "publishedAt": "2026-10-10T09:58:31.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（编辑 王蔚）三季度收官，保险资管产品交出了怎样的成绩单？财联社据Wind（或为不完全数据）统计，在有区间回报数据的1892只产品中，1103只实现正收益，占比58.3%。\n与上半年科技成长\"一枝独秀\"不同，三季度固收类重新扛起\"压舱石\"作用，权益类大面积回撤，风格出现明显再平衡。\n面向四季度的保险资管操作策略，多家券商的研报给出三大方向：高股息资产筑牢底仓；科技成长聚焦\"业绩",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e9908ce872db",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 82,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 8,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [
        "无口径收益宣传"
      ],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 47,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 91,
          "reasons": [
            "命中私募销售运营核心主题 3 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "采购目录价上限超3100亿元！这家公司一口气订了250架飞机",
      "sourceUrl": "https://www.yicai.com/news/103388615.html",
      "publishedAt": "2026-10-10T09:53:51.000Z",
      "fetchedAt": "2026-10-10T10:35:25.900Z",
      "timeConfidence": "source",
      "summary": "Avolon继续提前锁定飞机制造商产能，是渤海租赁扩大飞机租赁业务的一项重要举措。全球飞机租赁巨头再下一笔大单。\n\n10月9日，渤海租赁旗下Avolon与空客、波音签署协议，拟合计采购250架新一代飞机。按飞机目录价格计算，已确定订单的总额上限超3100亿元人民币；若将另外100架空客飞机的购买选择权全部计入，潜在订单总额上限约4200亿元人民币。\n\n这笔订单在飞机租赁行业具有较强的标志性。这不仅",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_697a7c73c4ce",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "内蒙古：全区所有水泥熟料生产线11月起实施共5个月实行错峰生产",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019878749360259",
      "publishedAt": "2026-10-10T09:52:07.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，内蒙古自治区工业和信息化厅发布关于做好2026-2027年水泥常态化错峰生产工作的通知，通知称，全区所有水泥熟料生产线都应进行错峰生产。2026年11月1日零时至2027年3月31日24时共5个月实行错峰生产。错峰停窑从起始日零时至终止日二十四时为一个周期（含烘窑时间）。按照“推动全国水泥错峰生产地域和时间常态化”要求，采暖季错峰为刚性要求，所有水泥熟料生产线应当严格执行，不得自行变通",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_de1f1fce7d26",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 57,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "昔日武汉“抗疫市长”周先旺 22年“捞”了6050万余元",
      "sourceUrl": "https://china.caixin.com/2026-10-10/102492156.html",
      "publishedAt": "2026-10-10T09:46:47.000Z",
      "fetchedAt": "2026-10-10T10:34:52.572Z",
      "timeConfidence": "source",
      "summary": "从乡镇干部升迁至副省级，在新冠疫情初期任武汉市长。法院查明他利用职务上的便利，以及职权或者地位形成的便利条件，为有关单位和个人在工程承揽、企业经营、行政审批等事项上提供帮助\n       　　【财新网】武汉原市长周先旺案一审落槌。10月10日，河南省商丘中院对周先旺以受贿罪判处有期徒刑14年，并处罚金500万元；对追缴在案的周先旺犯罪所得财物及孳息上缴国库，不足部分继续追缴。同日下午，商丘中院微信",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4b05ec801783",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "东软集团等在珠海横琴成立科技公司",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019773356511113",
      "publishedAt": "2026-10-10T09:43:43.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，天眼查信息显示，近日，珠海横琴思芮信息科技有限公司成立，法定代表人为孟浩，注册资本210万元人民币，经营范围含数字文化创意内容应用服务、动漫游戏开发、软件开发、数据处理和存储支持服务、图文设计制作等。股东信息显示，该公司由上海思芮信息科技有限公司全资持股。股权穿透显示，上海思芮信息科技有限公司由A股上市公司东软集团持股57%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_653e918d58e0",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 13,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 11,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 18,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 40,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 18,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 13,
      "llmScores": [
        14,
        12
      ],
      "scoredBy": "llm"
    },
    {
      "title": "广东华润银行深圳分行被罚110万元，涉超授信额度签发银行承兑汇票等",
      "sourceUrl": "https://www.cls.cn/detail/2501236",
      "publishedAt": "2026-10-10T09:42:36.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯 深圳金融监管局金融今日发布一张罚单，剑指广东华润银行深圳分行及相关责任人。\n罚单显示，广东华润银行深圳分行的主要违法违规行为：银行承兑汇票贸易背景真实性审查不严，超授信额度签发银行承兑汇票。\n针对上述违规行为，深圳金融监管局对广东华润银行深圳分行罚款110万元；对李雅静、彭罡睿给予警告，对李智隽、丁学海、王楷分别禁止从事银行业工作4年、6年、7年。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a3ef785d4c0a",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 50,
      "rawScore": 76,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 14,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 49,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 40,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null,
      "attentionScore": 50,
      "llmScores": [
        62,
        38
      ],
      "scoredBy": "llm"
    },
    {
      "title": "中央明确！发展新型研究型大学",
      "sourceUrl": "https://www.yicai.com/news/103388607.html",
      "publishedAt": "2026-10-10T09:40:30.000Z",
      "fetchedAt": "2026-10-10T10:35:25.900Z",
      "timeConfidence": "source",
      "summary": "“双一流”高校三年累计增加本科招生6.2万人。高水平研究型大学在一体推进教育科技人才发展过程中发挥重要作用。\n\n10月9日，中共中央、国务院印发《关于发展新质生产力的意见》（下称《意见》）。《意见》提到，以国家战略需求为导向，优化国家科研机构、高水平研究型大学、科技领军企业定位和布局。逐步建立激发创新活力、知识价值导向、管理规范有效、保障激励兼顾的高等学校、科研院所薪酬制度，同步推进国家科研机构、",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6898c48b872e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "双汇子公司销售抗生素超标猪肉产品 合计被罚款近7000万元",
      "sourceUrl": "https://www.caixin.com/2026-10-10/102492152.html",
      "publishedAt": "2026-10-10T09:39:33.000Z",
      "fetchedAt": "2026-10-10T10:34:52.572Z",
      "timeConfidence": "source",
      "summary": "双汇发展预计，处罚将导致公司2026年度归母净利润减少6380.66万元\n       　　【财新网】10月9日晚间，河南双汇投资发展股份有限公司（000859.SZ，下称“双汇发展”）发布关于收到《行政处罚决定书》的公告。公告披露，双汇发展与公司董事、高管理人员，以及旗下子公司共收到三份《行政处罚决定书》；公司合计被罚款6914.72万元；包括董事长、总裁、副总裁、总工程师在内的高层合计被罚款5",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fafdcae1e95a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 68,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 8,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "纽约联储银行：特朗普关税导致67类商品价格上扬",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019856171143297",
      "publishedAt": "2026-10-10T09:36:53.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "美国纽约联邦储备银行的研究显示，如果总统特朗普没有对进口商品征收关税，许多日常用品的价格原本会有所降低，却因为关税而上扬了。报告显示，截至今年2月，特朗普的关税使67类商品的价格水平提高了2.9个百分点。如果没有关税，这些商品的价格原本会下跌近1%。报告指出，平均关税率每增加一个百分点，消费物价会在一年后上扬约0.25个百分点，且关税带来的价格上涨压力将持续到2027年。这些商品价格的上涨，约三分",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_35487187d310",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 56,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 11,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 27,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 18,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 18,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "固态电池概念持续升温，多家上市公司提示风险，专家称已有企业实现2C放电",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602732",
      "publishedAt": "2026-10-10T09:36:51.000Z",
      "fetchedAt": "2026-10-10T10:39:07.195Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6a0d0b59dc82",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 37,
      "rawScore": 37,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "LED芯片板块三季报将现口径调整：华灿光电跟进黄金废料新规调整，头部企业发力高端",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602733",
      "publishedAt": "2026-10-10T09:36:51.000Z",
      "fetchedAt": "2026-10-10T10:39:07.195Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_2b21b66dccb1",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 37,
      "rawScore": 37,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "字节、腾讯紧跟Meta Muse 急推个人AI智能体",
      "sourceUrl": "https://www.caixin.com/2026-10-10/102492147.html",
      "publishedAt": "2026-10-10T09:35:21.000Z",
      "fetchedAt": "2026-10-10T10:34:52.572Z",
      "timeConfidence": "source",
      "summary": "字节跳动和腾讯此前把智能体产品方向放到消费级应用上，但路径和Muse这样的独立智能体应用差别很大\n       　　【财新网】Meta发布个人智能体Muse后，引起国内科技巨头迅速跟进。10月9日，财新从字节内部人士处了解到，字节跳动已在国庆假期前加紧推动个人智能体产品研发。\n　　该项目起始于字节跳动在今年4月开启的新项目，代号“Spell”，是在2025年豆包手机助手个人智能体（personal",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b5d4a131f82f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 54,
      "rawScore": 54,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 3,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 18,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 18,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 18,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "Anthropic如果值20万亿美元，那将撕裂社会",
      "sourceUrl": "https://wallstreetcn.com/charts/41959998",
      "publishedAt": "2026-10-10T09:33:44.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "半导体研究机构SemiAnalysis创始人Dylan认为，Anthropic若达到20万亿美元估值，意味着AI的能力已强大到导致人类全面失业，而由此产生的巨额财富将极度集中在极少数股东和供应链手中，这种极端的财富分配不均必将引发民众反抗与社会动荡，最终彻底撕裂现有的社会结构。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8a06c374465f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 42,
      "rawScore": 42,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 5,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 36,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "美股Q3财报季下周拉开帷幕！德银：三大核心动力或带来惊喜",
      "sourceUrl": "https://www.cls.cn/detail/2501252",
      "publishedAt": "2026-10-10T09:30:12.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（编辑 刘蕊）随着美股第三财报季即将于下周拉开帷幕，华尔街各投行也纷纷发表对这一财报季的展望。\n在人工智能的强劲推动下，华尔街普遍预计美股又将迎来一个强劲财报季，然而在这之中，德意志银行的财报季预期可能最为乐观：德银预测标普500成分股第三季度盈利同比增速将达到34%的历史高位，远高于当前市场一致预期的26.7%。\n德银认为，推动美股企业盈利继续大幅增长的多重驱动因素依然稳固。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_61bbc83b2fb2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 32,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 14,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 28,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 28,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_f101880ef7bc",
      "attentionScore": 32,
      "llmScores": [
        30,
        34
      ],
      "scoredBy": "llm"
    },
    {
      "title": "美国对中、美、加拿大及德国公司的芯片输电零件产品进行337调查",
      "sourceUrl": "https://www.caixin.com/2026-10-10/102492142.html",
      "publishedAt": "2026-10-10T09:29:37.000Z",
      "fetchedAt": "2026-10-10T10:34:52.572Z",
      "timeConfidence": "source",
      "summary": "立讯精密、英飞凌、富士康、广达电脑和台达电子等成为调查对象\n    \n     \n     10月9日，美国国际贸易委员会（ITC）宣布，对特定垂直电力传输系统及其组成部分和下游计算机系统启动337调查。图：邓敏/中新社/视觉中国\n    \n   \n       　　【财新网】美国对算力基建产品发起贸易调查。10月9日，美国国际贸易委员会（ITC）宣布，对特定垂直电力传输系统及其组成部分和下游计算",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_94b0f39a8ee0",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 9,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "畅通促消费新思路 银联融活长假经济",
      "sourceUrl": "https://www.yicai.com/news/103388603.html",
      "publishedAt": "2026-10-10T09:27:19.000Z",
      "fetchedAt": "2026-10-10T10:35:25.900Z",
      "timeConfidence": "source",
      "summary": "2026年国庆假期，面对居民出行集中释放、消费需求日趋多元的特点，中国银联紧扣国家“扩内需、促消费”的战略部署，充分发挥支付产业“枢纽”与“连接器”的作用，统筹境内外资源，联合产业各方，以支付服务为切入点，将金融普惠的触角延伸至文旅出行、民生消费、以旧换新、跨境购物等实体经济的关键脉络之中，以一系列扎实有效的举措，为国庆假期消费市场的升温注入了强劲动能。\n\n拓场景、强联动，二次元票根串联文旅消费新",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_af4d21fdda7d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 37,
      "rawScore": 37,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 11,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 33,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "多部门：拟规范汽车采用虚拟操纵件替代传统物理按键的产品",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019852933173128",
      "publishedAt": "2026-10-10T09:25:51.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，工业和信息化部等四部门联合发布了关于进一步加强汽车产品创新设计和研发测试验证有关管理工作的通知（征求意见稿），征求意见稿提出，采用虚拟操纵件（触摸按键、压感按键等）替代传统物理按键的产品，除应满足《机动车运行安全技术条件》（GB 7258）、《汽车操纵件、指示器及信号装置的标志》（GB 4094）等要求外，还应完成触控可靠性、防误触性能、反馈清晰度等评估验证。涉及关键驾驶安全的功能（灯",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_fbe577a953a2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 41,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 6,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 41,
      "llmScores": [
        51,
        30
      ],
      "scoredBy": "llm"
    },
    {
      "title": "多部门：汽车生产企业不得作虚假、夸大或引人误解的宣传",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019852174921607",
      "publishedAt": "2026-10-10T09:25:05.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，工业和信息化部等四部门联合发布了关于进一步加强汽车产品创新设计和研发测试验证有关管理工作的通知（征求意见稿），拟规范营销宣传活动。汽车生产企业应当真实客观开展营销宣传活动，如实宣传产品创新设计的使用边界、限制条件和研发测试验证等情况，不得作虚假、夸大或引人误解的宣传，不得使用违反道路交通法规的场景来宣传产品功能，不得诱导驾驶人忽视安全驾驶责任，确保消费者正确理解和使用汽车产品创新设计相",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b06f1a8d4c70",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 66,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 6,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "石油危机已演变成航运危机！专家警告：国际油价被严重低估",
      "sourceUrl": "https://www.cls.cn/detail/2501229",
      "publishedAt": "2026-10-10T09:20:56.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（编辑 卞纯）能源研究与咨询公司Energy Aspects的创始人兼市场情报主管Amrita Sen周五在接受媒体采访时表示，原油期货价格与中东地区的现实状况严重脱节，部分实物原油的价格应该接近每桶150美元。\nSen指出，面对中东地区激烈的敌对行动，市场反应却出奇平淡。目前，与伊朗结盟的胡塞武装正在袭击沙特能源及其它基础设施。\n\n“（原油）期货价格很难反映出真实的基本面，部",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_89b12adbeceb",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 42,
      "rawScore": 54,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 38,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 25,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null,
      "attentionScore": 42,
      "llmScores": [
        39,
        44
      ],
      "scoredBy": "llm"
    },
    {
      "title": "大模型助力，肺癌基因检测费用有望从万元降至数百元",
      "sourceUrl": "https://www.yicai.com/news/103388593.html",
      "publishedAt": "2026-10-10T09:20:23.000Z",
      "fetchedAt": "2026-10-10T10:35:25.900Z",
      "timeConfidence": "source",
      "summary": "传统基因检测局限多。肺癌是中国发病率与死亡率最高的恶性肿瘤，基因检测是靶向治疗的前提。尽管有多款靶向药可供患者选择，但受检测可及性、经济条件约束，不少患者难以完成必要基因检测，错失精准靶向治疗时机。\n\n10月10日，肺癌病理基因多模态大模型DeepGEM&nbsp;2.0正式对外发布，试图改变这一局面。\n\n该大模型由中国工程院院士钟南山团队联合金域医学开发，可以实现最快1分钟内完成“看图识基因”，",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_52e86599e52a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "土耳其禁止15岁以下儿童使用社交媒体账号",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019806501212288",
      "publishedAt": "2026-10-10T09:13:25.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "根据官方公报发布的一项规定，土耳其已禁止社交媒体平台向15岁以下儿童提供服务。社交媒体公司将被要求在用户创建账号时，通过土耳其电子政务系统使用年龄验证令牌来验证用户的年龄。新规规定，一经查实用户未满 15 周岁，平台必须屏蔽其账号申请。该规定将于11月1日生效，此前土耳其议会于4月通过了一项法案。现有账户的年龄验证预计将于2027年3月31日前完成，所有被发现未满15岁用户的账号都将被关闭。（新浪",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_3daaf46c37a4",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "债市再观察：化债尾声，利率中枢的最后一层保护垫正在被抽走？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783102",
      "publishedAt": "2026-10-10T09:11:47.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "6万亿置换债发行进度已达98%，2028年前需消化的隐性债务从14.3万亿降至2.3万亿。本轮化债的主体部分已经结束——但债市的位置，才刚刚进入最难定价的阶段。化债收官带来的不是利率继续下行的确定性，而是信用债定价锚的强制切换。当2027年6月退平台大限到来、区县级平台政府信用纽带被彻底切断，AA评级内部将出现本轮周期中最剧烈的一次分化。四季度10年期国债运行区间1.58%-1.72%、城投利差仍",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8f72fd40b804",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 57,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 8,
        "recency": 13,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 25,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 38,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "加强汽车产品创新设计等方面管理 四部门征求意见",
      "sourceUrl": "https://wallstreetcn.com/livenews/3176535",
      "publishedAt": "2026-10-10T09:08:33.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "据央视新闻，记者从工业和信息化部了解到，征求意见稿针对部分生产企业跟风推出新产品、测试验证不充分等问题，提出了多方面的要求。\n在创新设计准入管理方面，通知明确，自2027年1月1日起，涉及创新设计的新申报产品，应增加填报创新设计技术参数，并按照《汽车产品创新设计技术指南》加强安全环保评估；未按要求测试验证、测试验证不充分或提供虚假材料的，不予公告。已取得公告的产品，应在2027年7月1日前补充报送",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cfb3290f7503",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 69,
      "rawScore": 69,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 9,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "regDocument": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "腾讯入股墨奇智能",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019769731469447",
      "publishedAt": "2026-10-10T09:05:59.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，天眼查App显示，近日，上海墨奇万象智能技术有限公司发生工商变更，新增腾讯旗下上海启善投资有限公司为股东，同时，注册资本由约154.2万元人民币增至约162.2万元人民币。该公司成立于2025年8月，法定代表人为高文礼，经营范围含技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广等，现由高文礼、深圳市墨菲投资合伙企业（有限合伙）及上述新增股东等共同持股。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e89d9b8567b7",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "第七批国采再度曝出有药品串通投标，这家上市公司实控人面临被公诉",
      "sourceUrl": "https://www.yicai.com/news/103388576.html",
      "publishedAt": "2026-10-10T09:02:23.000Z",
      "fetchedAt": "2026-10-10T10:35:25.900Z",
      "timeConfidence": "source",
      "summary": "涉嫌参与集采药品醋酸奥曲肽注射液围标。圣诺生物（688117.SH）10月10日深夜发布的一则收到起诉书公告，揭开了国家第七批药品集采另一起串通投标案件。圣诺生物的全资子公司圣诺制药以及实际控制人兼董事长文永均是这起案件的主角。根据公告，2024年6月28日，南京市公安局指定雨花台分局立案，根据雨花台分局的《起诉意见书》，圣诺制药涉嫌参与国家第七批集采药品醋酸奥曲肽注射液围标，该案现已侦查终结，目",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f12d76b6797a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "受贿6050万余元 湖北省政协原副主席周先旺一审被判14年",
      "sourceUrl": "https://www.yicai.com/news/103388588.html",
      "publishedAt": "2026-10-10T09:01:52.000Z",
      "fetchedAt": "2026-10-10T10:35:25.900Z",
      "timeConfidence": "source",
      "summary": "受贿6050万余元 湖北省政协原副主席周先旺一审被判14年2026年10月10日，河南省商丘市中级人民法院一审公开宣判湖北省政协原党组成员、副主席周先旺受贿一案，对被告人周先旺以受贿罪判处有期徒刑十四年，并处罚金人民币五百万元；对追缴在案的周先旺犯罪所得财物及孳息依法上缴国库，不足部分继续追缴。经审理查明：2003年上半年至2025年5月，被告人周先旺利用担任湖北省恩施土家族苗族自治州委副书记、州",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_23e90c7f40b4",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "连续两月上调！预焙阳极价格触及三年新高，成本与需求共振促行业盈利修复",
      "sourceUrl": "https://www.cls.cn/detail/2501237",
      "publishedAt": "2026-10-10T09:01:10.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（记者 方彦博）进入四季度，国内预焙阳极市场景气度强势回暖。在成本支撑与需求共振下，预焙阳极价格连续两月上涨，触及近三年以来的新高，行业盈利空间有望迎来实质性修复。\n财联社记者近日从产业链获悉，山东某大型电解铝厂2026年10月预焙阳极采购基准价较9月上调400元/吨，执行现汇价格6130元/吨。这也是自8月份涨价100元/吨以来的连续第二个月上调。目前，山东地区预焙阳极市场价",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7d04095c7d45",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 60,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 25,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "欧盟轮值主席国提议将2028-2034年欧盟预算削减至1.6万亿欧元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019798572503170",
      "publishedAt": "2026-10-10T08:57:24.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "文件显示，欧盟轮值主席国提议将2028-2034年欧盟预算从欧盟委员会提出的2万亿欧元削减8%至1.6万亿欧元。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_531488b5a760",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 42,
      "rawScore": 42,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 5,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "巴西起诉壳牌子公司，索赔上亿美元洪灾损失",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019793730359173",
      "publishedAt": "2026-10-10T08:49:26.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "巴西检察部门10月9日对国际能源巨头壳牌集团在巴西的子公司提起诉讼，要求该公司就2024年巴西南部洪灾相关损失赔偿1.08亿美元，理由是壳牌应对排放温室气体、加剧气候变化所致损失承担责任。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8e033337288d",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "日本企业破产持续攀升：“早苗经济学”的政策两难",
      "sourceUrl": "https://opinion.caixin.com/2026-10-10/102492137.html",
      "publishedAt": "2026-10-10T08:48:47.000Z",
      "fetchedAt": "2026-10-10T10:34:52.572Z",
      "timeConfidence": "source",
      "summary": "当宏观层面的投资增长难以充分转化为中小企业的盈利改善和普通家庭的购买力提升，仅靠财政刺激与战略产业投资，恐怕难以破解日本经济长期积累的结构性难题\n    \n     \n     当地时间2026年5月22日，日本福冈，城市中心商业街区景观。图：视觉中国\n    \n   \n       　　据新华社10月8日援引日本东京商工调查公司（TSR）当天公布的数据报道，2026财年上半年（4月至9月），日本",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5a76537a99eb",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 46,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "财政部副部长廖岷会见高盛集团总裁温泽恩",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019812401418118",
      "publishedAt": "2026-10-10T08:44:38.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，2026年10月9日下午，财政部副部长廖岷在北京会见高盛集团总裁兼首席运营官温泽恩，双方就中美经贸关系和中美宏观经济形势等议题交换意见。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_479ca676c9a7",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 46,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 25,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "未经批准含有“金融控股”等字样 三家企业被要求整改",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019790429097860",
      "publishedAt": "2026-10-10T08:44:06.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "西藏金融监管局日前发布公示，金融是特许经营行业，必须持牌经营。根据《国务院关于实施金融控股公司准入管理的决定》（国发〔2020〕4号）等有关规定，未经批准不得登记为金融控股公司，不得在公司名称中使用“金融控股”“金融集团”“金控”等字样。西藏金融监管局会同市场监管部门对辖内涉金融经营主体进行全面摸排，经综合研判。认定西藏辖内存在3家名称未经批准含有“金融控股”“金融集团”“金控”等字样的经营主体，",
      "sourceName": "36氪",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_27886f9d572b",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 36,
      "rawScore": 74,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 12,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "regDocument": 6
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 39,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 52,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 48,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "官方监管",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 36,
      "llmScores": [
        39,
        33
      ],
      "scoredBy": "llm"
    },
    {
      "title": "海外研选日报1010 | 美银：美国中期选举或引发美股逾10%波动",
      "sourceUrl": "https://www.cls.cn/detail/2501224",
      "publishedAt": "2026-10-10T08:38:38.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "编者按：财联社每天整理各大投行针对全球宏观、公司和产业、商品等各个纬度的最新研究观点，为投资者投资决策提供全方位的支持。\n市场\n美银：美国中期选举或引发美股逾10%波动 资金涌向现金\n美国银行策略师迈克尔·哈特内特10月8日发布研报指出，美国中期选举可能成为未来数月美股最大催化剂。预测市场显示，民主党横扫参众两院的概率为64%，共和党保住参院、民主党夺取众院的概率为28%，共和党横扫的概率为9%。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1ad06cb1a588",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 16,
        "evidence": 14,
        "recency": 13,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [
        "时间性盘点"
      ],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 33,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 99,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 64,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "“芯片大佬”Pat Gelsinger：从存储、光互联、电气到网络架构，当下是硬件创新的黄金时代",
      "sourceUrl": "https://wallstreetcn.com/articles/3783326",
      "publishedAt": "2026-10-10T08:35:34.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "&nbsp;\n在AI重塑全球算力版图的当下，前英特尔CEO Pat Gelsinger一针见血地指出：AI让芯片设计变得简单，但制造、内存与能源的物理瓶颈正引发一场史无前例的硬件复兴。\n10月9日，硅谷创投机构a16z 播出一期深度访谈节目。在对谈中，Playground Global普通合伙人、前英特尔CEO Pat Gelsinger与a16z的Raghu Raghuram、Guido App",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_37c80e8c3254",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "海航控股旗下北京新华顺航商贸公司增资至22亿",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019768693034886",
      "publishedAt": "2026-10-10T08:30:50.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，天眼查App显示，近日，北京新华顺航商贸有限公司发生工商变更，新增海南航空控股股份有限公司为股东，同时，注册资本由30万元人民币增至约22亿元人民币，增幅约733333%。该公司成立于2010年7月，法定代表人为王新，经营范围为销售日用品、电子产品、装饰材料、五金交电、办公设备、服装鞋帽，家居装饰，现由中国新华航空集团有限公司及上述新增股东共同持股。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e7af647e187c",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
        "evidence": 8,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "前三季基金业绩揭榜: 半导体吃肉、原油喝汤、医药复兴",
      "sourceUrl": "https://wallstreetcn.com/articles/3783324",
      "publishedAt": "2026-10-10T08:27:27.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "2026年前三季度，A股市场在半导体国产替代与AI算力浪潮的双重驱动下走出结构性行情，由此，公募基金业绩榜单（前三季）也随之呈现鲜明的\"科技+资源\"双主线格局。\n根据官方公布的净值和收益水平，今年前三季度的主动权益基金中，易方达旗下的杨宗昌、汇安基金陈思余、诺安基金左少逸、财通基金金梓才等发挥较为出色，领涨全市场；\n被动指数端，半导体材料设备主题ETF霸榜；QDII阵营则上演原油与半导体的\"双雄对",
      "sourceName": "华尔街见闻",
      "category": "products",
      "tags": [
        "产品发布"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_62f3d9934de1",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 73,
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 21,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 5 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 96,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "命中关联主题 3 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "产品动态"
      ],
      "eventId": null
    },
    {
      "title": "梅赛德斯-奔驰美国公司召回30064辆汽车",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019766446395522",
      "publishedAt": "2026-10-10T08:25:42.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "梅赛德斯-奔驰美国公司正在召回30064辆汽车，涉及2022至2025款S级及迈巴赫多款车型。根据美国国家公路交通安全管理局（NHTSA）的召回通知，问题出在前制动软管——软管可能破裂并泄漏制动液，导致制动距离延长，增加碰撞风险。经销商将为车主免费更换前制动软管。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c3a68f77fe10",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 22,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 6,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 22,
      "llmScores": [
        25,
        19
      ],
      "scoredBy": "llm"
    },
    {
      "title": "市场监管总局谈“美团收购麦芽田股权案”：将依法推进本案后续审查",
      "sourceUrl": "https://www.36kr.com/newsflashes/4019792552611716",
      "publishedAt": "2026-10-10T08:24:26.000Z",
      "fetchedAt": "2026-10-10T10:37:46.219Z",
      "timeConfidence": "source",
      "summary": "市场监管总局召开“经营者集中简易案件审查制度成效”专题新闻发布会。会上，在介绍“美团收购麦芽田股权案”公开听证情况时，市场监管总局反垄断二司副司长谢方表示，市场监管总局将坚持发展与规范并重，依法推进本案后续审查。前不久，市场监管总局就美团收购麦芽田股权案举行了公开听证。据悉，这是我国经营者集中审查中的首次公开听证。市场监管总局反垄断二司副司长谢方介绍，美团收购麦芽田股权案是平台领域首起未达国务院规",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8b83d29b677d",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 45,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 0,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 32,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 45,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 41,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 45,
      "llmScores": [
        50,
        40
      ],
      "scoredBy": "llm"
    },
    {
      "title": "巴拿马爆发7.7级强震 运河未受影响暂无死亡报告",
      "sourceUrl": "https://international.caixin.com/2026-10-10/102492124.html",
      "publishedAt": "2026-10-10T08:24:05.000Z",
      "fetchedAt": "2026-10-10T10:34:52.572Z",
      "timeConfidence": "source",
      "summary": "截至目前，驻巴拿马中资机构及当地华侨华人无人员伤亡报告\n    \n     \n     当地时间2026年10月9日，巴拿马佩诺诺梅，地震过后，救援人员转移一辆受损汽车。图：视觉中国\n    \n   \n       　　【财新网】当地时间10月9日下午16时左右，巴拿马南部太平洋沿岸地区爆发7.7级强震，震源深度仅约10至12.6公里，属于破坏力较强的浅源地震。该国南部还接连遭遇一场6.6级强震以",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6b8776985e58",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "特斯拉欧洲改称“TAD”，辅助驾驶的边界仍待审批厘清",
      "sourceUrl": "https://wallstreetcn.com/articles/3783327",
      "publishedAt": "2026-10-10T08:23:37.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "特斯拉坚守了十年的“FSD”，在欧洲还是更名了。\n当地时间10月9日，特斯拉德国、比利时和丹麦官网已将原称“完全自动驾驶（监督版）”的功能改称“Tesla Assisted Driving”（TAD，特斯拉辅助驾驶）。\n名称换了，车辆并未因此获得在欧盟全境使用该功能的许可。特斯拉官网仍注明，功能只能在取得监管批准的市场启用。\n这次更名有明确的监管背景。德国联邦交通部10月6日发表声明称，交通部长比",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_452e3d1e0e0a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 71,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 9,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 46,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "市场监管总局附条件批准分众传媒收购新潮传媒股权案",
      "sourceUrl": "https://www.yicai.com/news/103388565.html",
      "publishedAt": "2026-10-10T08:08:24.000Z",
      "fetchedAt": "2026-10-10T10:35:25.900Z",
      "timeConfidence": "source",
      "summary": "市场监管总局附条件批准分众传媒收购新潮传媒股权案。10月10日，市场监管总局发布公告，附加限制性条件批准分众传媒信息技术股份有限公司（以下简称分众传媒）收购成都新潮传媒集团股份有限公司（以下简称新潮传媒）股权案。该案是我国广告业领域第一起以附加限制性条件批准的经营者集中案件。本案的附条件批准，是反垄断执法在广告传媒这一重要民生服务领域的进一步深化，也体现了市场监管总局对传统服务行业竞争秩序的高度关",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b6523d0d3e2d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 65,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 43,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "分众传媒收购新潮通过反垄断审查：带有六项限制性条件，有效期5年",
      "sourceUrl": "https://wallstreetcn.com/livenews/3176529",
      "publishedAt": "2026-10-10T08:07:56.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "10月10日，市场监管总局发布公告，经依法审查，附加限制性条件批准分众传媒信息技术股份有限公司收购成都新潮传媒集团股份有限公司新潮股权案。此次获批，标志着备受市场关注的梯媒行业整合取得重要进展。\n公告还显示，根据申报方提交的附加限制性条件承诺方案，市场监管总局决定附加限制性条件批准此项集中，要求集中双方和集中后实体履行如下义务：\n\n（一）继续履行现有客户合同及其所有商业条款，除非客户因自身原因实质",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_68bbe6548e2d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 71,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 3,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 43,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_a6f1a5a5635d"
    },
    {
      "title": "附属公司业绩预增190倍催热投资情绪，东岳集团（00189）盼来拐点？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602704",
      "publishedAt": "2026-10-10T08:05:07.000Z",
      "fetchedAt": "2026-10-10T10:39:07.195Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_f36caf37a48e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 55,
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
        "evidence": 5,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "氨纶价格小幅上涨 供需边际缺口显现 行业景气度望提升",
      "sourceUrl": "https://www.cls.cn/detail/2501201",
      "publishedAt": "2026-10-10T08:01:57.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（记者 肖良华）金九银十，氨纶开启涨价周期了？近日，华纤信息网一则“晓星氨纶全规格产品上调1000元”的消息在业内流传，引发市场猜想。\n“晓星的确涨了1000元，我们最近涨的没这么多，只有三、五百块。”新乡化纤（000949.SZ）相关负责人对财联社记者表示，最近下游需求还可以，但就旺季而言，并不算旺。\n华峰化学（002064.SZ）相关负责人则透露，最近没有收到涨价通知。\n卓",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_59b014ebb3f4",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 38,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 8,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null,
      "attentionScore": 38,
      "llmScores": [
        40,
        36
      ],
      "scoredBy": "llm"
    },
    {
      "title": "【基金观察】节后公募发行潮：赛道工具与均衡产品同台竞技",
      "sourceUrl": "https://database.caixin.com/2026-10-10/102492113.html",
      "publishedAt": "2026-10-10T07:45:05.000Z",
      "fetchedAt": "2026-10-10T10:34:52.572Z",
      "timeConfidence": "source",
      "summary": "一方面，多只创业板专精赛道ETF集中落地，以标准化工具形态精准布局硬科技；另一方面，明星基金经理均衡价值风格主动权益产品占比也不小\n    \n     \n     10月8日节后首日20只基金同步上新，拉开发行序幕，10月12日单日50只基金集中发售，涵盖指数工具、主动权益、主题赛道等多品类。图：视觉中国",
      "sourceName": "财新网",
      "category": "products",
      "tags": [
        "产品发布"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8fb430f01922",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 68,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 3,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 18,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 71,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 49,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "产品动态"
      ],
      "eventId": null
    },
    {
      "title": "花旗：法国财政风险或令欧央行12月后暂停加息，欧元料跌破1.10",
      "sourceUrl": "https://wallstreetcn.com/articles/3783323",
      "publishedAt": "2026-10-10T07:39:15.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "花旗在最新报告中提出了一种不同于市场主流预期的判断：法国公共财政风险可能制约欧洲央行进一步收紧货币政策。如果财政压力持续加剧，欧央行可能在12月加息后暂停行动；若金融压力提前蔓延至欧元区其他国家，暂停加息的时间还可能更早。欧元兑美元也可能因此跌破1.10。\n花旗利率策略师指出，欧央行利率预期与法国、德国国债收益率之差之间的关系已经逆转，反映出市场对进一步收紧货币政策的态度正在发生变化。随着法国财政",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6dde80b2692e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 41,
      "rawScore": 63,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 16,
        "evidence": 6,
        "recency": 13,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 29,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 51,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_f2c5dabe4a30",
      "attentionScore": 41,
      "llmScores": [
        39,
        43
      ],
      "scoredBy": "llm"
    },
    {
      "title": "火线评论｜辱骂王皓三人被拘，饭圈何以至此？",
      "sourceUrl": "https://opinion.caixin.com/2026-10-10/102492109.html",
      "publishedAt": "2026-10-10T07:18:24.000Z",
      "fetchedAt": "2026-10-10T10:34:52.572Z",
      "timeConfidence": "source",
      "summary": "经纪公司、品牌方和看似中立的平台等相关方面结成完整利益链。在饭圈这个复杂行动系统内，既包含了真诚的爱，也有紧密的剥削，既包含温暖的支持，也有冰冷的任务\n       　　【财新网】/火线评论\n　　为了自己的“爱豆”，一些狂热的粉丝围堵辱骂乒乓球教练员王皓，甚至还高喊其他运动员名字“上一单”，干预教练组的专业排兵布阵决策。当事一方报警之后，10月10日，北京石景山警方确认杨某某等20人聚集参与公然侮",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c9ac4e7af54b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "靠定增赚了数百亿的人，又把钱拍在了桌面上",
      "sourceUrl": "https://wallstreetcn.com/articles/3783322",
      "publishedAt": "2026-10-10T07:08:52.000Z",
      "fetchedAt": "2026-10-10T10:35:15.622Z",
      "timeConfidence": "source",
      "summary": "大腕出手，志在必得。\n10月8日晚，新材料龙头中材科技发布定增公告：以51.40元/股向15名对象定向增发8718.19万股，合计募资44.81亿元。\n消息一出，最引人注目的名字，不是易方达，不是国寿养老，而是——葛卫东。\n这位私募大佬，以全场最高报价强势入局，最终获配1361.87万股，斥资约7亿元，一举跻身公司第五大股东。\n他曾在沐熙股份、兆易创新等科技股上分别斩获上百亿元浮盈，但最终却把最新",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ddac9349b94e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 83,
      "rawScore": 83,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 14,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "high",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 46,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 46,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "国宝人寿偿付能力持续下滑，四川国资增资近31亿救场！成立8年仅2年盈利",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3602671",
      "publishedAt": "2026-10-10T07:05:39.000Z",
      "fetchedAt": "2026-10-10T10:39:07.195Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_2a4925288be6",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 77,
      "rawScore": 77,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 25,
        "evidence": 5,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5
      },
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 48,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 48,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "美债收益率难压长期看涨趋势！业内专家：金价一年后突破“5000大关”",
      "sourceUrl": "https://www.cls.cn/detail/2501167",
      "publishedAt": "2026-10-10T07:02:11.000Z",
      "fetchedAt": "2026-10-10T17:24:14.828Z",
      "timeConfidence": "source",
      "summary": "财联社10月10日讯（编辑 黄君芝）自今年初春以来，黄金价格走势艰难。不断攀升的债券收益率和持续高企的通胀，推高了市场对鹰派利率的预期，使得这种贵金属难以获得持续上涨动力。\n不过，尽管面临挑战，长期市场情绪依然看涨，从未动摇。本周在意大利索伦托举行的伦敦金银市场协会（LBMA）年度全球贵金属大会上，这种态度得到了充分体现。与会代表和更广泛的投资界人士都听到了一个明确的信息：不要将短期疲软与长期疲软",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ca85d8072074",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 58,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 3,
        "recency": 13,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 22,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 79,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
          ]
        },
        "privateFundSales": {
          "score": 31,
          "reasons": [
            "命中关联主题 2 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "id": "news_14db8fd17684",
      "title": "三十年长期主义华泰财险质量效益理念铺就价值型成长之路",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261009/6168.html",
      "publishedAt": "2026-10-09T11:19:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "向非车险要增量，向细分市场要深度，向专业能力要效益",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 14,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 52,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 8,
        "evidence": 0,
        "recency": 10,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 32,
          "reasons": [
            "命中保险运营核心主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 32,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 19,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "eventId": null,
      "timeConfidence": "source",
      "attentionScore": 14,
      "llmScores": [
        15,
        13
      ],
      "scoredBy": "llm"
    },
    {
      "title": "中国证监会就《公开募集证券投资基金运作管理办法（征求意见稿）》及配套规则公开征求意见",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c100028/c7663393/content.shtml",
      "publishedAt": "2026-10-09T00:59:43.000Z",
      "fetchedAt": "2026-10-09T11:22:27.827Z",
      "timeConfidence": "source",
      "summary": "为落实《推动公募基金高质量发展行动方案》，规范公募基金投资运作，支持权益类基金发展，提高公募基金运作灵活度，根据《中华人民共和国证券投资基金法》（以下简称《证券投资基金法》）等有关法律法规，中国证监会对《公开募集证券投资基金运作管理办法》（证监会令第104号）及配套规则进行了修订，形成《公开募集证券投资基金运作管理办法（征求意见稿）》（以下简称《运作办法》）《关于实施＜公开募集证券投资基金运作管理",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_0f3e71a2648c",
      "tier": "S0",
      "sourceTier": "S0",
      "sourceTierLabel": "权威原始源",
      "score": 77,
      "rawScore": 77,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 12,
        "recency": 10,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "regDocument": 6
      },
      "noiseCaps": [],
      "tierGate": 50,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "权威原始来源",
        "对展业/配置/合规有直接影响"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 47,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 82,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "官方监管",
        "权威源"
      ],
      "eventId": null
    },
    {
      "title": "前9月18家险企发债600亿补充资本,票面利率最低至“1字头”",
      "sourceUrl": "https://zhuanlan.zhihu.com/p/2088729739213149119",
      "sourceUrlRaw": "https://zhuanlan.zhihu.com/p/2088729739213149119?utm_medium=openapi_platform&utm_source=cf621feb3f2d",
      "publishedAt": "2026-09-30T12:49:03.000Z",
      "fetchedAt": "2026-09-30T13:29:48.304Z",
      "timeConfidence": "edited",
      "summary": "根据Wind数据，今年前三季度，保险公司发债共596.1亿元。其中，永续债的发行规模为399.4亿元，资本补充债券196.7亿元。 今年前三季度，保险公司发债呈现以下特点：与2025年同期相比，发行规模进一步扩大，发债节奏加快；发行主体方面，中小险企占比提升；从发行成本来看，票面利率有所调降，低于2%的有3家；永续债为险企发债主力，占比近七成。 发债“补血”节奏加快 和2025年前三季度相比，今年前三季度，保险公司发债的进度有所加快。 Wind数据显示，2025年前三季度，保",
      "zhihuContentId": "1175063789793711959",
      "zhihuContentType": "Article",
      "zhihuAuthority": "2",
      "authorName": "中保新知",
      "heat": {
        "voteUp": 0,
        "comment": 0,
        "rankingScore": 1.6642243
      },
      "sourceName": "知乎",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "ugc_opinion",
      "discoveredVia": "Zhihu OpenAPI",
      "id": "news_b8359ae20a15",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "从业者观点",
      "score": 61,
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 8,
        "evidence": 8,
        "recency": 7,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "从业者实操视角，需自行判断",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 67,
          "reasons": [
            "命中保险运营核心主题 2 项",
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 58,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 23,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点"
      ],
      "eventId": null,
      "attentionScore": 55,
      "llmScores": [
        55,
        55
      ],
      "scoredBy": "llm"
    },
    {
      "title": "众安尊享e生中高端医疗险2026:接受超适应症用药,既往症豁免,0免赔",
      "sourceUrl": "https://zhuanlan.zhihu.com/p/2088688439143183142",
      "sourceUrlRaw": "https://zhuanlan.zhihu.com/p/2088688439143183142?utm_medium=openapi_platform&utm_source=cf621feb3f2d",
      "publishedAt": "2026-09-30T09:58:09.000Z",
      "fetchedAt": "2026-09-30T13:29:48.304Z",
      "timeConfidence": "edited",
      "summary": "Hi，是新朋友吗？ 喜欢点个关注，可获取保险产品深度解读与配置逻辑！ 文 | 吴南生 第 469 篇分享 今天和大家分享一款众安财险承保的中端医疗险：众安尊享e生中高端医疗险2026。这款产品的核心优势是外购药/特药接受超适应症用药，保单第4年度起豁免既往症，支持核保复议，可选0免赔。 产品更新迭代，和尊享e生中高端2025对比，调整如下： 1.接受超适应症用药，写进合同条款；(重点，有利于我们) 2.新增康复住院医疗，不限疾病； 3.新增可选指定疾病及意外门急诊责任； 4.",
      "zhihuContentId": "-6002738494198686586",
      "zhihuContentType": "Article",
      "zhihuAuthority": "2",
      "authorName": "小小吴测评",
      "heat": {
        "voteUp": 0,
        "comment": 0,
        "rankingScore": 1.8473839
      },
      "sourceName": "知乎",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "ugc_opinion",
      "discoveredVia": "Zhihu OpenAPI",
      "id": "news_90694c744974",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "从业者观点",
      "score": 64,
      "rawScore": 69,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 6,
        "recency": 7,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "从业者实操视角，需自行判断",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 84,
          "reasons": [
            "命中保险运营核心主题 3 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 18,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 27,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "观点"
      ],
      "eventId": null,
      "attentionScore": 64,
      "llmScores": [
        65,
        63
      ],
      "scoredBy": "llm"
    },
    {
      "title": "真诚咨询:十年前购买的20年重疾险,目前经济压力较大,退保损失较大,还有必要继续缴费吗?",
      "sourceUrl": "https://www.zhihu.com/question/1954869528371655672/answer/2088654637356299538",
      "sourceUrlRaw": "https://www.zhihu.com/question/1954869528371655672/answer/2088654637356299538?utm_medium=openapi_platform&utm_source=cf621feb3f2d",
      "publishedAt": "2026-09-30T07:41:10.000Z",
      "fetchedAt": "2026-09-30T13:29:48.304Z",
      "timeConfidence": "edited",
      "summary": "已经交完10年，刚好是20年缴费期的一半，现在退保损失会比较大，不建议直接退。可以优先看看保单自带的几种权益，尽量保住这份保障： 第一，减额交清。如果实在交不起后续保费，可以申请减额交清，不再继续交钱，保额会按现金价值相应降低，合同继续有效，保障还在，只是保额缩水。适合不想彻底失去重疾保障的情况。 第二，保单贷款。可以用保单现金价值做贷款临时周转，用来应付当下的经济压力。注意贷款会产生利息，后续需要归还，不要只贷不还，不然会影响保单效力。重疾如果不带身故责任，现金价值比较低，",
      "zhihuContentId": "-4411763462161702272",
      "zhihuContentType": "Answer",
      "zhihuAuthority": "2",
      "authorName": "张阳",
      "heat": {
        "voteUp": 1,
        "comment": 0,
        "rankingScore": 1.5251998
      },
      "sourceName": "知乎",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "ugc_opinion",
      "discoveredVia": "Zhihu OpenAPI",
      "id": "news_b88af30fc3f3",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "从业者观点",
      "score": 66,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 0,
        "recency": 7,
        "actionability": 8
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "从业者实操视角，需自行判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 62,
          "reasons": [
            "命中保险运营核心主题 2 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 18,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 18,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点"
      ],
      "eventId": null,
      "attentionScore": 37,
      "llmScores": [
        50,
        24
      ],
      "scoredBy": "llm"
    },
    {
      "title": "在保险公司干了10年,明天930落地,我劝你先别急着买保险",
      "sourceUrl": "https://zhuanlan.zhihu.com/p/2088413063808663789",
      "sourceUrlRaw": "https://zhuanlan.zhihu.com/p/2088413063808663789?utm_medium=openapi_platform&utm_source=cf621feb3f2d",
      "publishedAt": "2026-09-29T15:41:15.000Z",
      "fetchedAt": "2026-09-30T13:29:48.304Z",
      "timeConfidence": "edited",
      "summary": "不是不让你买，是别在节骨眼上被人催着买 账号：睿见随笔|栏目：保险避坑实录|2026年9月29日 摘要：明天9月30日，保险营销新规落地。朋友圈又开始刷\"最后一天\"\"错过再等一年\"。我在保险公司干了10年，见过这些话术怎么来的。不解读政策，只说三句实话：别在节骨眼上被催着买，新规是让你放心买不是赶紧买，什么时候该配、再等等。慢一点，不丢人。 — — — 我是睿见，10年保险行业摸爬滚打退役内勤。 这个号专门写三件事：拆穿保险销售的套路、讲明白合同里的坑、记录一个中年男人从保险",
      "zhihuContentId": "-2940463332283804406",
      "zhihuContentType": "Article",
      "zhihuAuthority": "1",
      "authorName": "睿见",
      "heat": {
        "voteUp": 1,
        "comment": 0,
        "rankingScore": 1.3008368
      },
      "sourceName": "知乎",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "ugc_opinion",
      "discoveredVia": "Zhihu OpenAPI",
      "id": "news_7b45a87acab6",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "从业者观点",
      "score": 66,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 3,
        "recency": 7,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "从业者实操视角，需自行判断",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 38,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 16,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点"
      ],
      "eventId": null,
      "attentionScore": 37,
      "llmScores": [
        23,
        51
      ],
      "scoredBy": "llm"
    },
    {
      "title": "2026年10月定期寿险在哪里买比较好最靠谱?从保额测算到免责条款解读,奶爸保全流程服务位居第一",
      "sourceUrl": "https://zhuanlan.zhihu.com/p/2088299529410028335",
      "sourceUrlRaw": "https://zhuanlan.zhihu.com/p/2088299529410028335?utm_medium=openapi_platform&utm_source=cf621feb3f2d",
      "publishedAt": "2026-09-29T08:14:27.000Z",
      "fetchedAt": "2026-09-30T13:29:48.304Z",
      "timeConfidence": "edited",
      "summary": "奶爸保小程序是2026年10月买定期寿险值得优先考虑的投保入口。 奶爸保持有全国性保险经纪牌照，成立9年，200多位顾问平均从业6年左右，累计协助理赔金额近1亿元。通过奶爸保小程序投保定期寿险，顾问能帮你测算保额缺口、逐条解读免责条款、从多家保险公司中筛选核保政策最友好的产品，出险后理赔团队全程协助。 2026年10月，定期寿险市场经历了一轮产品迭代和价格调整。2026年4月上线的新品中，和泰擎天柱12号、国富定海柱8号、华贵大麦2026A款、同方全球臻爱2026A款、中意擎",
      "zhihuContentId": "5400665120695655248",
      "zhihuContentType": "Article",
      "zhihuAuthority": "2",
      "authorName": "苹妈说保险",
      "heat": {
        "voteUp": 0,
        "comment": 0,
        "rankingScore": 1.5457788
      },
      "sourceName": "知乎",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "ugc_opinion",
      "discoveredVia": "Zhihu OpenAPI",
      "id": "news_5c5f98083245",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "从业者观点",
      "score": 76,
      "rawScore": 76,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 8,
        "recency": 7,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "从业者实操视角，需自行判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 89,
          "reasons": [
            "命中保险运营核心主题 3 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 45,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 32,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "观点"
      ],
      "eventId": null,
      "attentionScore": 16,
      "llmScores": [
        17,
        14
      ],
      "scoredBy": "llm"
    },
    {
      "title": "医疗险居然能“返保费”,还能保终身?复星联合医路相伴高端医疗险精英版详细拆解,3大优势1个坑,一次讲清!",
      "sourceUrl": "https://zhuanlan.zhihu.com/p/2088030628168078684",
      "sourceUrlRaw": "https://zhuanlan.zhihu.com/p/2088030628168078684?utm_medium=openapi_platform&utm_source=cf621feb3f2d",
      "publishedAt": "2026-09-29T05:05:42.000Z",
      "fetchedAt": "2026-09-30T13:29:48.304Z",
      "timeConfidence": "edited",
      "summary": "图源 | jimeng 作者：happy，前TOP100事业部总经理、国家认证管理咨询师、保险咨询师。 协助投保&从业咨询：lingyangzhixun - 第365篇原创 - 我是「Happy」，致力于带你“避坑”的保险经纪顾问。 今天要来聊聊一款医疗险； 这款医疗险，有太多和其他医疗险不一样的地方。 我们知道医疗险都是一年期的，其价格会跟着被保人的年龄增长； 不管是保证续保医疗险还是不保证续保医疗险，每年的价格都是会变化的； 并且， 医疗险的费率都是可以再次调整的； 如果",
      "zhihuContentId": "-71012152678177924",
      "zhihuContentType": "Article",
      "zhihuAuthority": "4",
      "authorName": "happy说",
      "heat": {
        "voteUp": 0,
        "comment": 0,
        "rankingScore": 2.1693184
      },
      "sourceName": "知乎",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "ugc_opinion",
      "discoveredVia": "Zhihu OpenAPI",
      "id": "news_9f3b623176ea",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "从业者观点",
      "score": 72,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 6,
        "recency": 7,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "从业者实操视角，需自行判断",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 88,
          "reasons": [
            "命中保险运营核心主题 3 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "观点"
      ],
      "eventId": null,
      "attentionScore": 27,
      "llmScores": [
        25,
        28
      ],
      "scoredBy": "llm"
    },
    {
      "title": "湖北证监局原党委书记、局长王广幼被开除党籍",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c100028/c7661513/content.shtml",
      "publishedAt": "2026-09-27T23:15:26.000Z",
      "fetchedAt": "2026-09-30T13:29:47.549Z",
      "timeConfidence": "source",
      "summary": "中央纪委国家监委网站讯 据中央纪委国家监委驻中国证券监督管理委员会纪检监察组、湖北省纪委监委消息：日前，经中央纪委国家监委批准，中央纪委国家监委驻中国证券监督管理委员会纪检监察组与湖北省监委对湖北证监局原党委书记、局长王广幼严重违纪违法问题进行了纪律审查和监察调查。\n经查，王广幼身为党员领导干部，丧失理想信念，背弃初心使命，严重违反中央八项规定精神，多次收受管理服务对象礼品、礼金，违规接受宴请和旅",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_986ca26f7b13",
      "tier": "S0",
      "sourceTier": "S0",
      "sourceTierLabel": "权威原始源",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 0,
        "recency": 7,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 50,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "权威原始来源"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 9,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 18,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 18,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "官方监管",
        "权威源"
      ],
      "eventId": null,
      "attentionScore": 51,
      "llmScores": [
        53,
        48
      ],
      "scoredBy": "llm"
    }
  ],
  "curationStats": {
    "scenes": {
      "insurance": 73,
      "privateFundSales": 7,
      "marketEducation": 70
    },
    "featured": 24,
    "gate": {
      "passed": 39,
      "total": 150,
      "byTier": {
        "S3": {
          "total": 61,
          "passed": 12
        },
        "S2": {
          "total": 87,
          "passed": 26
        },
        "S0": {
          "total": 2,
          "passed": 1
        }
      }
    }
  },
  "sections": {
    "regulatory": [
      "news_779c28374ab4",
      "news_27886f9d572b",
      "news_0f3e71a2648c",
      "news_986ca26f7b13"
    ],
    "products": [
      "news_62f3d9934de1",
      "news_8fb430f01922"
    ],
    "industry": [
      "news_12ed2f7f4bbc",
      "news_c518799ae53c",
      "news_31b2216a0a85",
      "news_ee3acd077506",
      "news_65863b6231c1",
      "news_9592ebe5735c",
      "news_b11a90350756",
      "news_c58f0c74ae4b",
      "news_5350bb984c44",
      "news_8265af5f0ba7"
    ],
    "research": [
      "news_bb06192763dc",
      "news_308bc7086bb8",
      "news_382dfd2283fe",
      "news_9c97a7a5b9f7",
      "news_00c49027dfd7",
      "news_5746404e0296",
      "news_0fc9bb0620eb",
      "news_d2cfa2203826",
      "news_3d400cd5935f",
      "news_b4a5c5b204de"
    ],
    "insights": [
      "news_f31708fd8501",
      "news_728976608e50",
      "news_743dafca0930",
      "news_138a47b42045",
      "news_5100611aea50",
      "news_0c282eeba530",
      "news_41d5928a8838",
      "news_25d57bd46f4a",
      "news_a0a493d87736",
      "news_10dcad8dac19"
    ]
  },
  "flashes": [
    {
      "id": "news_f31708fd8501",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_12ed2f7f4bbc",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_c518799ae53c",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_728976608e50",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_31b2216a0a85",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_743dafca0930",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_bb06192763dc",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_ee3acd077506",
      "dotClass": "flash-dot-blue"
    }
  ],
  "keywordIndex": {
    "保险": [
      "news_ee3acd077506",
      "news_250ce855559b",
      "news_85272c0b9438",
      "news_5a386ae1df58",
      "news_eab302ba1e3f",
      "news_e9908ce872db",
      "news_b8359ae20a15",
      "news_90694c744974",
      "news_7b45a87acab6",
      "news_5c5f98083245",
      "news_9f3b623176ea"
    ],
    "险企": [
      "news_b8359ae20a15"
    ],
    "保费": [
      "news_b88af30fc3f3",
      "news_9f3b623176ea"
    ],
    "理赔": [
      "news_85272c0b9438",
      "news_5c5f98083245"
    ],
    "偿付能力": [
      "news_2a4925288be6"
    ],
    "保额": [
      "news_b88af30fc3f3",
      "news_5c5f98083245"
    ],
    "保单": [
      "news_90694c744974",
      "news_b88af30fc3f3"
    ],
    "保险业": [
      "news_eab302ba1e3f"
    ],
    "保险公司": [
      "news_b8359ae20a15",
      "news_7b45a87acab6",
      "news_5c5f98083245"
    ],
    "保险产品": [
      "news_5a386ae1df58",
      "news_90694c744974"
    ],
    "保险销售": [
      "news_7b45a87acab6"
    ],
    "养老": [
      "news_250ce855559b",
      "news_ddac9349b94e"
    ],
    "重疾险": [
      "news_b88af30fc3f3"
    ],
    "寿险": [
      "news_5c5f98083245"
    ],
    "车险": [
      "news_14db8fd17684"
    ],
    "财险": [
      "news_779c28374ab4",
      "news_14db8fd17684",
      "news_90694c744974"
    ],
    "医疗险": [
      "news_90694c744974",
      "news_9f3b623176ea"
    ],
    "国寿": [
      "news_85272c0b9438",
      "news_ddac9349b94e"
    ],
    "新华保险": [
      "news_ee3acd077506",
      "news_eab302ba1e3f"
    ],
    "银行": [
      "news_31b2216a0a85",
      "news_9592ebe5735c",
      "news_89bd2765f7f4",
      "news_d2cfa2203826",
      "news_5e010f9df09e",
      "news_5a386ae1df58",
      "news_a3ef785d4c0a",
      "news_35487187d310",
      "news_61bbc83b2fb2",
      "news_1ad06cb1a588"
    ],
    "央行": [
      "news_31b2216a0a85",
      "news_5e010f9df09e",
      "news_6dde80b2692e"
    ],
    "利率": [
      "news_8f72fd40b804",
      "news_6dde80b2692e",
      "news_ca85d8072074",
      "news_b8359ae20a15"
    ],
    "加息": [
      "news_c58f0c74ae4b",
      "news_d2cfa2203826",
      "news_6dde80b2692e"
    ],
    "存款": [
      "news_5e010f9df09e"
    ],
    "理财": [
      "news_bb06192763dc"
    ],
    "股票": [
      "news_8845f54c7c04",
      "news_b4a5c5b204de",
      "news_ff0e3a8d634b"
    ],
    "A股": [
      "news_728976608e50",
      "news_41ba52ba0f9f",
      "news_3cc7bb01f717",
      "news_95ed093d93d7",
      "news_653e918d58e0",
      "news_62f3d9934de1"
    ],
    "港股": [
      "news_728976608e50",
      "news_41ba52ba0f9f",
      "news_0f071e7c111d"
    ],
    "美股": [
      "news_31b2216a0a85",
      "news_9592ebe5735c",
      "news_c58f0c74ae4b",
      "news_8265af5f0ba7",
      "news_28e5a7e399fd",
      "news_d2cfa2203826",
      "news_b4a5c5b204de",
      "news_ff0e3a8d634b",
      "news_0f071e7c111d",
      "news_61bbc83b2fb2",
      "news_1ad06cb1a588"
    ],
    "大盘": [
      "news_9592ebe5735c"
    ],
    "指数": [
      "news_c58f0c74ae4b",
      "news_41d5928a8838",
      "news_28e5a7e399fd",
      "news_d2cfa2203826",
      "news_b4a5c5b204de",
      "news_cb0bb7d1f375",
      "news_ff0e3a8d634b",
      "news_62f3d9934de1",
      "news_8fb430f01922"
    ],
    "ETF": [
      "news_728976608e50",
      "news_41ba52ba0f9f",
      "news_62f3d9934de1",
      "news_8fb430f01922"
    ],
    "公募基金": [
      "news_94f66a916478",
      "news_62f3d9934de1",
      "news_0f3e71a2648c"
    ],
    "私募基金": [
      "news_308bc7086bb8"
    ],
    "对冲基金": [
      "news_28e5a7e399fd"
    ],
    "债券": [
      "news_05e66344097d",
      "news_5a386ae1df58",
      "news_79e92a1f81ac",
      "news_ca85d8072074",
      "news_b8359ae20a15"
    ],
    "国债": [
      "news_ab5d1ece3de5",
      "news_05e66344097d",
      "news_cadcfd6cdc32",
      "news_8f72fd40b804",
      "news_6dde80b2692e"
    ],
    "信用债": [
      "news_8f72fd40b804"
    ],
    "期货": [
      "news_8845f54c7c04",
      "news_89b12adbeceb"
    ],
    "期权": [
      "news_20437ddd1b2b",
      "news_b4a5c5b204de"
    ],
    "IPO": [
      "news_ee3acd077506",
      "news_1017a548af7a"
    ],
    "上市": [
      "news_31b2216a0a85",
      "news_65863b6231c1",
      "news_5746404e0296",
      "news_3e5740b71ca6",
      "news_66c1916bcf11",
      "news_5732044bc513",
      "news_653e918d58e0",
      "news_6a0d0b59dc82",
      "news_f12d76b6797a"
    ],
    "定增": [
      "news_ddac9349b94e"
    ],
    "增持": [
      "news_ee3acd077506",
      "news_eab302ba1e3f"
    ],
    "回购": [
      "news_3e5740b71ca6"
    ],
    "券商": [
      "news_308bc7086bb8",
      "news_995c58cacbee",
      "news_e9908ce872db"
    ],
    "投行": [
      "news_61bbc83b2fb2",
      "news_1ad06cb1a588"
    ],
    "经纪": [
      "news_c9ac4e7af54b",
      "news_5c5f98083245",
      "news_9f3b623176ea"
    ],
    "投资者": [
      "news_728976608e50",
      "news_31b2216a0a85",
      "news_c58f0c74ae4b",
      "news_8265af5f0ba7",
      "news_41ba52ba0f9f",
      "news_8845f54c7c04",
      "news_5746404e0296",
      "news_b4a5c5b204de",
      "news_95ed093d93d7",
      "news_1ad06cb1a588"
    ],
    "机构": [
      "news_308bc7086bb8",
      "news_0a77000b44bd",
      "news_8845f54c7c04",
      "news_995c58cacbee",
      "news_5746404e0296",
      "news_0c64ee933edf",
      "news_5732044bc513",
      "news_94f66a916478",
      "news_79e92a1f81ac",
      "news_e9908ce872db",
      "news_6898c48b872e",
      "news_8a06c374465f",
      "news_37c80e8c3254",
      "news_6b8776985e58"
    ],
    "监管": [
      "news_f31708fd8501",
      "news_ac4de161294d",
      "news_00c49027dfd7",
      "news_0fc9bb0620eb",
      "news_b055a8da7d95",
      "news_95ed093d93d7",
      "news_183e9919e2c7",
      "news_fa7d0740c8ad",
      "news_cdf1df98c5ae",
      "news_94f66a916478",
      "news_c72888513c4b",
      "news_a3ef785d4c0a",
      "news_27886f9d572b",
      "news_8b83d29b677d",
      "news_452e3d1e0e0a",
      "news_b6523d0d3e2d",
      "news_68bbe6548e2d"
    ],
    "金融监管": [
      "news_a3ef785d4c0a",
      "news_27886f9d572b"
    ],
    "证监会": [
      "news_4e517219ffc7",
      "news_5746404e0296",
      "news_3e5740b71ca6",
      "news_95ed093d93d7",
      "news_fafa477b9331",
      "news_5732044bc513",
      "news_0f3e71a2648c",
      "news_986ca26f7b13"
    ],
    "处罚": [
      "news_4b05ec801783",
      "news_fafdcae1e95a",
      "news_23e90c7f40b4"
    ],
    "罚单": [
      "news_a3ef785d4c0a"
    ],
    "整改": [
      "news_27886f9d572b"
    ],
    "通报": [
      "news_b11a90350756",
      "news_2110ac4ba467",
      "news_94f66a916478"
    ],
    "条款": [
      "news_68bbe6548e2d",
      "news_90694c744974",
      "news_5c5f98083245"
    ],
    "办法": [
      "news_f31708fd8501",
      "news_0f3e71a2648c"
    ],
    "通知": [
      "news_138a47b42045",
      "news_ae39e2f94017",
      "news_9c97a7a5b9f7",
      "news_ac4de161294d",
      "news_00c49027dfd7",
      "news_b055a8da7d95",
      "news_183e9919e2c7",
      "news_03b5ace88963",
      "news_de1f1fce7d26",
      "news_fbe577a953a2",
      "news_b06f1a8d4c70",
      "news_cfb3290f7503",
      "news_c3a68f77fe10",
      "news_59b014ebb3f4"
    ],
    "指引": [
      "news_f9d6ccb0e56d"
    ],
    "意见": [
      "news_138a47b42045",
      "news_ae39e2f94017",
      "news_9c97a7a5b9f7",
      "news_ac4de161294d",
      "news_00c49027dfd7",
      "news_5746404e0296",
      "news_b055a8da7d95",
      "news_183e9919e2c7",
      "news_fafa477b9331",
      "news_fa7d0740c8ad",
      "news_48caeda1921f",
      "news_5732044bc513",
      "news_11aeb2f2c9d5",
      "news_5a386ae1df58",
      "news_03b5ace88963",
      "news_6898c48b872e",
      "news_fbe577a953a2",
      "news_b06f1a8d4c70",
      "news_cfb3290f7503",
      "news_f12d76b6797a",
      "news_479ca676c9a7",
      "news_0f3e71a2648c"
    ],
    "规定": [
      "news_3daaf46c37a4",
      "news_27886f9d572b",
      "news_986ca26f7b13"
    ],
    "法规": [
      "news_b06f1a8d4c70",
      "news_0f3e71a2648c"
    ],
    "解读": [
      "news_90694c744974",
      "news_7b45a87acab6",
      "news_5c5f98083245"
    ],
    "牌照": [
      "news_5c5f98083245"
    ],
    "经济": [
      "news_12ed2f7f4bbc",
      "news_c518799ae53c",
      "news_65863b6231c1",
      "news_5100611aea50",
      "news_8265af5f0ba7",
      "news_4e517219ffc7",
      "news_308bc7086bb8",
      "news_1857c67fdbac",
      "news_48caeda1921f",
      "news_5732044bc513",
      "news_11aeb2f2c9d5",
      "news_0f071e7c111d",
      "news_af4d21fdda7d",
      "news_52e86599e52a",
      "news_5a76537a99eb",
      "news_479ca676c9a7",
      "news_b88af30fc3f3"
    ],
    "宏观经济": [
      "news_5732044bc513",
      "news_479ca676c9a7"
    ],
    "经济运行": [
      "news_5732044bc513"
    ],
    "高质量发展": [
      "news_4c1a422ad9a3",
      "news_59902c35dae2",
      "news_1857c67fdbac",
      "news_5732044bc513",
      "news_0f3e71a2648c"
    ],
    "GDP": [
      "news_1857c67fdbac"
    ],
    "CPI": [
      "news_31b2216a0a85",
      "news_c58f0c74ae4b",
      "news_8dc3cf14dcc8",
      "news_d2cfa2203826"
    ],
    "PPI": [
      "news_31b2216a0a85",
      "news_8dc3cf14dcc8"
    ],
    "货币政策": [
      "news_6dde80b2692e"
    ],
    "逆周期": [
      "news_4e517219ffc7",
      "news_11aeb2f2c9d5"
    ],
    "人民币": [
      "news_0c282eeba530",
      "news_5e010f9df09e",
      "news_697a7c73c4ce",
      "news_653e918d58e0",
      "news_e89d9b8567b7",
      "news_23e90c7f40b4",
      "news_e7af647e187c"
    ],
    "跨境": [
      "news_10dcad8dac19",
      "news_5e010f9df09e",
      "news_af4d21fdda7d"
    ],
    "离岸": [
      "news_5e010f9df09e"
    ],
    "美元": [
      "news_728976608e50",
      "news_5350bb984c44",
      "news_dabc6be9146f",
      "news_41ba52ba0f9f",
      "news_92712b6ff397",
      "news_c155fb5bb20c",
      "news_8dc3cf14dcc8",
      "news_1017a548af7a",
      "news_cb0bb7d1f375",
      "news_2c4bfea5e498",
      "news_1cc4d49ead4e",
      "news_8a06c374465f",
      "news_89b12adbeceb",
      "news_8e033337288d",
      "news_6dde80b2692e"
    ],
    "欧元": [
      "news_c58f0c74ae4b",
      "news_531488b5a760",
      "news_6dde80b2692e"
    ],
    "通胀": [
      "news_c58f0c74ae4b",
      "news_d2cfa2203826",
      "news_ca85d8072074"
    ],
    "楼市": [
      "news_0ec360b8067c"
    ],
    "住房": [
      "news_743dafca0930",
      "news_03b5ace88963"
    ],
    "消费": [
      "news_65863b6231c1",
      "news_10dcad8dac19",
      "news_d2cfa2203826",
      "news_62adc55a19f8",
      "news_b055a8da7d95",
      "news_03b5ace88963",
      "news_35487187d310",
      "news_b5d4a131f82f",
      "news_af4d21fdda7d",
      "news_b06f1a8d4c70"
    ],
    "投资": [
      "news_728976608e50",
      "news_31b2216a0a85",
      "news_bb06192763dc",
      "news_c58f0c74ae4b",
      "news_8265af5f0ba7",
      "news_0c282eeba530",
      "news_308bc7086bb8",
      "news_41ba52ba0f9f",
      "news_8845f54c7c04",
      "news_92712b6ff397",
      "news_8dc3cf14dcc8",
      "news_5746404e0296",
      "news_0fc9bb0620eb",
      "news_e2e11ddb3008",
      "news_59902c35dae2",
      "news_b4a5c5b204de",
      "news_95ed093d93d7",
      "news_fafa477b9331",
      "news_5e010f9df09e",
      "news_2c4bfea5e498",
      "news_1cc4d49ead4e",
      "news_c72888513c4b",
      "news_fafdcae1e95a",
      "news_e89d9b8567b7",
      "news_5a76537a99eb",
      "news_1ad06cb1a588",
      "news_f36caf37a48e",
      "news_ca85d8072074",
      "news_0f3e71a2648c"
    ],
    "出口": [
      "news_31b2216a0a85",
      "news_25d57bd46f4a",
      "news_a0a493d87736",
      "news_3154aefd4308"
    ],
    "进口": [
      "news_8d374ad46b6c",
      "news_20437ddd1b2b",
      "news_35487187d310"
    ],
    "进出口": [
      "news_31b2216a0a85",
      "news_25d57bd46f4a"
    ],
    "贸易": [
      "news_dabc6be9146f",
      "news_4ac8af6a94b0",
      "news_c4ef3a6925df",
      "news_5e010f9df09e",
      "news_a3ef785d4c0a",
      "news_94b0f39a8ee0"
    ],
    "产业链": [
      "news_31b2216a0a85",
      "news_7d04095c7d45"
    ],
    "供应链": [
      "news_8a06c374465f"
    ],
    "就业": [
      "news_250ce855559b",
      "news_3d400cd5935f",
      "news_487e2600d4f2"
    ],
    "失业": [
      "news_250ce855559b",
      "news_8a06c374465f"
    ],
    "收入": [
      "news_5350bb984c44"
    ],
    "黄金": [
      "news_2b21b66dccb1",
      "news_37c80e8c3254",
      "news_ca85d8072074"
    ],
    "金价": [
      "news_ca85d8072074",
      "news_b88af30fc3f3"
    ],
    "原油": [
      "news_dabc6be9146f",
      "news_8d374ad46b6c",
      "news_20437ddd1b2b",
      "news_8dc3cf14dcc8",
      "news_89b12adbeceb",
      "news_62f3d9934de1"
    ],
    "大宗商品": [
      "news_dabc6be9146f",
      "news_8845f54c7c04"
    ],
    "工业": [
      "news_382dfd2283fe",
      "news_ae39e2f94017",
      "news_ac4de161294d",
      "news_00c49027dfd7",
      "news_183e9919e2c7",
      "news_fa7d0740c8ad",
      "news_de1f1fce7d26",
      "news_fbe577a953a2",
      "news_b06f1a8d4c70",
      "news_cfb3290f7503"
    ],
    "利润": [
      "news_fafdcae1e95a"
    ],
    "股市": [
      "news_9f6172b30fab",
      "news_90e5eae908a8",
      "news_cadcfd6cdc32",
      "news_0f071e7c111d",
      "news_62f3d9934de1"
    ],
    "美联储": [
      "news_c58f0c74ae4b",
      "news_d2cfa2203826"
    ],
    "财报": [
      "news_31b2216a0a85",
      "news_c58f0c74ae4b",
      "news_8265af5f0ba7",
      "news_d2cfa2203826",
      "news_61bbc83b2fb2"
    ],
    "欧央行": [
      "news_6dde80b2692e"
    ],
    "信托": [
      "news_fafa477b9331"
    ],
    "资管": [
      "news_fafa477b9331",
      "news_e9908ce872db"
    ],
    "净值": [
      "news_79e92a1f81ac",
      "news_62f3d9934de1"
    ],
    "固收": [
      "news_e9908ce872db"
    ],
    "权益": [
      "news_94f66a916478",
      "news_eab302ba1e3f",
      "news_e9908ce872db",
      "news_62f3d9934de1",
      "news_8fb430f01922",
      "news_0f3e71a2648c",
      "news_b88af30fc3f3"
    ],
    "多资产": [
      "news_9592ebe5735c"
    ],
    "年化": [
      "news_5350bb984c44"
    ],
    "募集": [
      "news_0f3e71a2648c"
    ]
  },
  "sourceHealth": {
    "generatedAt": "2026-10-11T06:22:36.641Z",
    "status": "healthy",
    "totalSources": 12,
    "successfulSources": 10,
    "usableSources": 10,
    "failedSources": 2,
    "staleSources": 0,
    "fetchLimitReachedSources": 0,
    "coverageRate": 0.8333,
    "freshestPublishedAt": "2026-10-11T05:45:55.000Z",
    "sources": [
      {
        "sourceId": "source_a6a2153c0b",
        "sourceName": "财新网",
        "tier": "S2",
        "category": "industry",
        "transport": "rsshub",
        "success": true,
        "usable": true,
        "stale": false,
        "itemCount": 20,
        "rawItemCount": 20,
        "acceptedItemCount": 20,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 3,
        "durationMs": 24135,
        "latestPublishedAt": "2026-10-11T05:35:52.000Z",
        "usedEndpoint": "rsshub.rssforever.com"
      },
      {
        "sourceId": "source_6a677efcc2",
        "sourceName": "华尔街见闻",
        "tier": "S2",
        "category": "industry",
        "transport": "rsshub",
        "success": true,
        "usable": true,
        "stale": false,
        "itemCount": 39,
        "rawItemCount": 39,
        "acceptedItemCount": 39,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 18,
        "durationMs": 15657,
        "latestPublishedAt": "2026-10-11T05:11:42.000Z",
        "usedEndpoint": "rsshub.rssforever.com"
      },
      {
        "sourceId": "source_71b645ddf5",
        "sourceName": "第一财经",
        "tier": "S2",
        "category": "industry",
        "transport": "rsshub",
        "success": true,
        "usable": true,
        "stale": false,
        "itemCount": 30,
        "rawItemCount": 30,
        "acceptedItemCount": 30,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 7,
        "durationMs": 16455,
        "latestPublishedAt": "2026-10-11T04:58:47.000Z",
        "usedEndpoint": "rsshub.rssforever.com"
      },
      {
        "sourceId": "source_dae28d24f5",
        "sourceName": "财联社",
        "tier": "S3",
        "category": "industry",
        "transport": "rsshub",
        "success": false,
        "usable": false,
        "stale": false,
        "itemCount": 0,
        "rawItemCount": 0,
        "acceptedItemCount": 0,
        "initialFetchLimit": 1,
        "fetchLimit": 1,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 0,
        "durationMs": 57016,
        "latestPublishedAt": null,
        "usedEndpoint": null
      },
      {
        "sourceId": "source_7b954bfc72",
        "sourceName": "财联社",
        "tier": "S2",
        "category": "research",
        "transport": "rsshub",
        "success": true,
        "usable": true,
        "stale": false,
        "itemCount": 32,
        "rawItemCount": 32,
        "acceptedItemCount": 32,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 8,
        "durationMs": 57727,
        "latestPublishedAt": "2026-10-11T04:13:38.000Z",
        "usedEndpoint": "rsshub-balancer.virworks.moe"
      },
      {
        "sourceId": "source_4087f16353",
        "sourceName": "36氪",
        "tier": "S3",
        "category": "insights",
        "transport": "rsshub",
        "success": true,
        "usable": true,
        "stale": false,
        "itemCount": 20,
        "rawItemCount": 20,
        "acceptedItemCount": 20,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 11,
        "durationMs": 807,
        "latestPublishedAt": "2026-10-11T05:45:55.000Z",
        "usedEndpoint": "rsshub.rssforever.com"
      },
      {
        "sourceId": "source_0ac92ff106",
        "sourceName": "深交所",
        "tier": "S0",
        "category": "regulatory",
        "transport": "rsshub",
        "success": true,
        "usable": true,
        "stale": false,
        "itemCount": 20,
        "rawItemCount": 20,
        "acceptedItemCount": 20,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 0,
        "durationMs": 5202,
        "latestPublishedAt": "2026-10-08T16:00:00.000Z",
        "usedEndpoint": "rsshub.rssforever.com"
      },
      {
        "sourceId": "source_adf9a67b7f",
        "sourceName": "证监会",
        "tier": "S0",
        "category": "regulatory",
        "transport": "rsshub",
        "success": true,
        "usable": true,
        "stale": false,
        "itemCount": 18,
        "rawItemCount": 18,
        "acceptedItemCount": 18,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 0,
        "durationMs": 40971,
        "latestPublishedAt": "2026-10-10T02:18:09.000Z",
        "usedEndpoint": "rsshub.rssforever.com"
      },
      {
        "sourceId": "source_0936db37cf",
        "sourceName": "英为财情",
        "tier": "S2",
        "category": "industry",
        "transport": "direct-rss",
        "success": true,
        "usable": true,
        "stale": false,
        "itemCount": 10,
        "rawItemCount": 10,
        "acceptedItemCount": 10,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 6,
        "durationMs": 67,
        "latestPublishedAt": "2026-10-11T04:05:52.000Z",
        "usedEndpoint": "cn.investing.com"
      },
      {
        "sourceId": "source_9eb00b3a63",
        "sourceName": "英为财情",
        "tier": "S2",
        "category": "research",
        "transport": "direct-rss",
        "success": true,
        "usable": true,
        "stale": false,
        "itemCount": 10,
        "rawItemCount": 10,
        "acceptedItemCount": 10,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 7,
        "durationMs": 49,
        "latestPublishedAt": "2026-10-09T14:26:31.000Z",
        "usedEndpoint": "cn.investing.com"
      },
      {
        "sourceId": "source_6ba7262a6f",
        "sourceName": "知乎",
        "tier": "S3",
        "category": "insights",
        "transport": "zhihu",
        "success": false,
        "usable": false,
        "stale": false,
        "itemCount": 0,
        "rawItemCount": 0,
        "acceptedItemCount": 0,
        "initialFetchLimit": 1,
        "fetchLimit": 1,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 0,
        "durationMs": 0,
        "latestPublishedAt": null,
        "usedEndpoint": null
      },
      {
        "sourceId": "source_55f3d5f609",
        "sourceName": "慧保天下",
        "tier": "S2",
        "category": "industry",
        "transport": "scraper",
        "success": true,
        "usable": true,
        "stale": false,
        "itemCount": 52,
        "rawItemCount": 52,
        "acceptedItemCount": 52,
        "initialFetchLimit": 52,
        "fetchLimit": 52,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 0,
        "durationMs": 0,
        "latestPublishedAt": "2026-10-10T12:03:00.000Z",
        "usedEndpoint": null
      }
    ]
  },
  "historyStats": {
    "itemCount": 5000,
    "eventCount": 71,
    "retentionDays": 90
  },
  "macro": {
    "updatedAt": "2026-10-11T06:22:36.641Z",
    "indicators": [
      {
        "key": "lpr1y",
        "name": "LPR 1年期",
        "value": "3.00%",
        "note": "较8月20日 3.00% 持平",
        "direction": "flat",
        "asOf": "2026-09-20",
        "source": "中国货币网",
        "mode": "auto"
      },
      {
        "key": "lpr5y",
        "name": "LPR 5年期以上",
        "value": "3.50%",
        "note": "较8月20日 3.50% 持平",
        "direction": "flat",
        "asOf": "2026-09-20",
        "source": "中国货币网",
        "mode": "auto"
      },
      {
        "key": "cn10y",
        "name": "10年期国债",
        "value": "1.71%",
        "note": "周内下破 1.70%",
        "direction": "down",
        "asOf": "2026-08-11",
        "source": "中国货币网",
        "mode": "manual"
      },
      {
        "key": "deposit3y",
        "name": "五大行3年定存",
        "value": "1.25%",
        "note": "挂牌利率下行",
        "direction": "down",
        "asOf": "2026-08-11",
        "source": "五大行官网",
        "mode": "manual"
      },
      {
        "key": "us10y",
        "name": "美债 10年期",
        "value": "5.24%",
        "note": "较10月8日 5.22% 上升",
        "direction": "up",
        "asOf": "2026-10-09",
        "source": "美国财政部",
        "mode": "auto"
      },
      {
        "key": "fedRate",
        "name": "联邦基金利率",
        "value": "3.50-3.75%",
        "note": "9:3 投票现分歧",
        "direction": "flat",
        "asOf": "2026-08-11",
        "source": "美联储",
        "mode": "manual"
      },
      {
        "key": "usdcny",
        "name": "美元兑人民币",
        "value": "6.6921",
        "note": "较10月8日 6.7023 下降",
        "direction": "down",
        "asOf": "2026-10-09",
        "source": "Frankfurter/ECB",
        "mode": "auto"
      },
      {
        "key": "gold",
        "name": "现货黄金",
        "value": "$4,196",
        "note": "较10月10日 $4,196 持平",
        "direction": "flat",
        "asOf": "2026-10-11",
        "source": "gold-api.com",
        "mode": "auto"
      }
    ]
  },
  "aiAnalysis": {
    "schemaVersion": "2.0",
    "generatedBy": "llm",
    "eventClusters": [
      {
        "eventId": "event_a3c5d0364922",
        "title": "A股第一份三季报出炉：沃华医药单季净利环比转跌，年内分红1.52亿元超前三季净利",
        "mainItemId": "news_3cc7bb01f717",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_3cc7bb01f717"
        ],
        "historicalEvidenceCount": 34,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-11T06:22:36.641Z",
        "status": "developing",
        "summary": "沃华医药发布A股首份三季报，单季净利环比下滑，年内分红超前三季净利。",
        "latestProgress": "据10月10日报道，沃华医药三季报显示单季净利环比转跌，年内分红1.52亿元高于前三季净利。"
      },
      {
        "eventId": "event_f101880ef7bc",
        "title": "【华尔街原声】RBC：市场波动蔓延至美股只是时间问题",
        "mainItemId": "news_ff0e3a8d634b",
        "relatedItemIds": [
          "news_61bbc83b2fb2",
          "news_9592ebe5735c",
          "news_28e5a7e399fd",
          "news_8265af5f0ba7"
        ],
        "evidenceItemIds": [
          "news_ff0e3a8d634b",
          "news_61bbc83b2fb2",
          "news_9592ebe5735c",
          "news_28e5a7e399fd",
          "news_8265af5f0ba7"
        ],
        "historicalEvidenceCount": 40,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-11T06:22:36.641Z",
        "status": "developing",
        "summary": "多家机构警示美股风险，财报季临近，市场波动或蔓延，牛市存疑。",
        "latestProgress": "德银称科技股反弹或见顶，警惕倒V反转，投资者持币观望。"
      },
      {
        "eventId": "event_c68d651d4ff9",
        "title": "张忆东：港股10月大概率反弹，先抑后扬，把握两条主线",
        "mainItemId": "news_0f071e7c111d",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_0f071e7c111d"
        ],
        "historicalEvidenceCount": 43,
        "firstSeenAt": "2026-09-30T15:04:45.414Z",
        "lastSeenAt": "2026-10-11T06:22:36.641Z",
        "status": "developing",
        "summary": "张忆东预计港股10月先抑后扬，大概率反弹，建议把握两条主线。",
        "latestProgress": "张忆东最新观点：港股10月反弹概率大，操作上先抑后扬。"
      },
      {
        "eventId": "event_668e7c3605a8",
        "title": "新华保险举牌国泰海通 持有H股比例至20%",
        "mainItemId": "news_eab302ba1e3f",
        "relatedItemIds": [
          "news_ee3acd077506"
        ],
        "evidenceItemIds": [
          "news_eab302ba1e3f",
          "news_ee3acd077506"
        ],
        "historicalEvidenceCount": 2,
        "firstSeenAt": "2026-10-10T06:26:11.207Z",
        "lastSeenAt": "2026-10-11T06:22:36.641Z",
        "status": "developing",
        "summary": "新华保险举牌国泰海通，H股持股比例升至20%以上",
        "latestProgress": "持股破20%，新华保险增持国泰海通H股；险资举牌降温转投硬科技IPO"
      },
      {
        "eventId": "event_f2c5dabe4a30",
        "title": "花旗：法国财政风险或令欧央行12月后暂停加息，欧元料跌破1.10",
        "mainItemId": "news_6dde80b2692e",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_6dde80b2692e"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-10T10:39:53.006Z",
        "lastSeenAt": "2026-10-11T06:22:36.641Z",
        "status": "developing",
        "summary": "花旗警告法国财政风险或致欧央行12月后暂停加息，欧元料跌破1.10。",
        "latestProgress": "花旗最新预计欧央行12月后暂停加息，欧元或跌破1.10。"
      },
      {
        "eventId": "event_c6aba8e259ef",
        "title": "国家发改委：推动“十五五”规划、“六张网”建设实施方案等明确的重大工程项目尽早开工建设",
        "mainItemId": "news_11aeb2f2c9d5",
        "relatedItemIds": [
          "news_48caeda1921f"
        ],
        "evidenceItemIds": [
          "news_11aeb2f2c9d5",
          "news_48caeda1921f"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-10T17:26:01.101Z",
        "lastSeenAt": "2026-10-11T06:22:36.641Z",
        "status": "developing",
        "summary": "发改委推动“十五五”规划、“六张网”等重大工程尽早开工。",
        "latestProgress": "明确相关实施方案，加快重大工程项目前期工作并推动落地。"
      },
      {
        "eventId": "event_6ab2a13609c6",
        "title": "下周外盘看点丨美国CPI如何影响美联储加息，美股财报季开幕",
        "mainItemId": "news_c58f0c74ae4b",
        "relatedItemIds": [
          "news_d2cfa2203826"
        ],
        "evidenceItemIds": [
          "news_c58f0c74ae4b",
          "news_d2cfa2203826"
        ],
        "historicalEvidenceCount": 7,
        "firstSeenAt": "2026-10-08T06:40:59.994Z",
        "lastSeenAt": "2026-10-11T06:22:36.641Z",
        "status": "developing",
        "summary": "美国下周CPI数据将成关键，或决定美联储10月是否加息。",
        "latestProgress": "据10月9日报道，下周CPI将决定美联储10月是否加息。"
      },
      {
        "eventId": "event_44e7f67f045c",
        "title": "长鑫科技登顶！ETF成加仓主渠道，前三季度韩国投资者A股、港股“扫货”名单来了",
        "mainItemId": "news_41ba52ba0f9f",
        "relatedItemIds": [
          "news_728976608e50"
        ],
        "evidenceItemIds": [
          "news_41ba52ba0f9f",
          "news_728976608e50"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-11T06:22:36.641Z",
        "lastSeenAt": "2026-10-11T06:22:36.641Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_c15d7de81979",
        "title": "黄仁勋要“亲自下场”？英伟达洽谈收购“美国DeepSeek”Reflection AI",
        "mainItemId": "news_92712b6ff397",
        "relatedItemIds": [
          "news_0fc9bb0620eb"
        ],
        "evidenceItemIds": [
          "news_92712b6ff397",
          "news_0fc9bb0620eb"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-11T06:22:36.641Z",
        "lastSeenAt": "2026-10-11T06:22:36.641Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_a6f1a5a5635d",
        "title": "分众收购新潮获反垄断审查通过",
        "mainItemId": "news_cdf1df98c5ae",
        "relatedItemIds": [
          "news_68bbe6548e2d"
        ],
        "evidenceItemIds": [
          "news_cdf1df98c5ae",
          "news_68bbe6548e2d"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-11T06:22:36.641Z",
        "lastSeenAt": "2026-10-11T06:22:36.641Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      }
    ],
    "dailySummary": {
      "highlights": [
        {
          "text": "[83] 靠定增赚了数百亿的人，又把钱拍在了桌面上 — 大腕出手，志在必得。\n10月8日晚，新材料龙头中材科技发布定增公告：以51.40元/股向15名对象定向增发8718.19",
          "evidenceItemIds": [
            "news_ddac9349b94e"
          ]
        },
        {
          "text": "[79] 中汽协：支持强化汽车产品创新设计与研发测试验证管理，推动产业可持续健康发展 — 据中国汽车工业协会，10月10日，工业和信息化部会同公安部、生态环境部、市场监管总局等部门，研究起草了《关于进一步加强汽",
          "evidenceItemIds": [
            "news_ac4de161294d"
          ]
        },
        {
          "text": "[79] 中汽协：摒弃重形式、轻安全的非理性创新模式 — 财联社10月11日讯，据中国汽车工业协会，10月10日，工业和信息化部会同公安部、生态环境部、市场监管总局等部门，研究起",
          "evidenceItemIds": [
            "news_00c49027dfd7"
          ]
        },
        {
          "text": "[78] “只剩一笔交易”的美股牛市 — 美股正站在一个令人不安的高点：指数创历史新高，但支撑它的只有一个主题。\n高盛对冲基金覆盖业务负责人Tony Pasqua",
          "evidenceItemIds": [
            "news_28e5a7e399fd"
          ]
        }
      ]
    },
    "eventChain": {
      "summary": "基于标题主题相似度和来源层级识别 5 组关联事件；仅表示内容相关，不代表已确认因果",
      "chains": [
        {
          "title": "长鑫科技登顶！ETF成加仓主渠道，前三季度韩国投资者A股、港股“扫货”名单来了",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_41ba52ba0f9f",
            "news_728976608e50"
          ],
          "nodes": [
            "长鑫科技登顶！ETF成加仓主渠道，前三季度韩国投资者A股、港股“扫货”名单来了",
            "前三季度韩国投资者净买入金额前15名的港股合计净买入约2.28亿美元"
          ]
        },
        {
          "title": "持股比例突破20%！新华保险增持国泰海通H股，年内险资举牌降温，转道押注硬科技IPO",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_ee3acd077506",
            "news_eab302ba1e3f"
          ],
          "nodes": [
            "持股比例突破20%！新华保险增持国泰海通H股，年内险资举牌降温，转道押注硬科技IPO",
            "新华保险举牌国泰海通H股，持股比例升至20.24%"
          ]
        },
        {
          "title": "野村警告：美股指数“严重失真”，十只股票贡献标普七成涨幅，警惕柴油带来新冲击",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_ff0e3a8d634b",
            "news_9592ebe5735c",
            "news_8265af5f0ba7",
            "news_28e5a7e399fd",
            "news_61bbc83b2fb2"
          ],
          "nodes": [
            "野村警告：美股指数“严重失真”，十只股票贡献标普七成涨幅，警惕柴油带来新冲击",
            "德银：美股7月下旬以来的“第五轮科技股反弹”已到顶，准备迎接“倒V反转”",
            "美股点金丨持币观望！货币基金净流入创六年新高，反弹能走多远",
            "“只剩一笔交易”的美股牛市",
            "美股Q3财报季下周拉开帷幕！德银：三大核心动力或带来惊喜"
          ]
        },
        {
          "title": "下周外盘看点丨美国CPI如何影响美联储加息，美股财报季开幕",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_c58f0c74ae4b",
            "news_d2cfa2203826"
          ],
          "nodes": [
            "下周外盘看点丨美国CPI如何影响美联储加息，美股财报季开幕",
            "环球下周看点： 美股Q3财报季拉开帷幕 CPI牵动美联储加息预期"
          ]
        },
        {
          "title": "国家发改委：推动“十五五”规划、“六张网”建设实施方案等明确的重大工程项目尽早开工建设",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_11aeb2f2c9d5",
            "news_48caeda1921f"
          ],
          "nodes": [
            "国家发改委：推动“十五五”规划、“六张网”建设实施方案等明确的重大工程项目尽早开工建设",
            "发改委：推动“十五五”规划 “六张网”建设实施方案等重大工程项目尽早开工"
          ]
        }
      ]
    },
    "industryImpact": {
      "quadrants": {
        "insurance": {
          "level": "high",
          "summary": "14 条保险相关资讯",
          "items": [
            {
              "title": "持股比例突破20%！新华保险增持国泰海通H股，年内险资举牌降温，转道押注硬科技IPO",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_ee3acd077506"
              ]
            },
            {
              "title": "人社部：尽可能让灵活就业人员参加职工养老保险",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_250ce855559b"
              ]
            },
            {
              "title": "3小时获赔6500元国寿骑手保跑出理赔加速度",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_85272c0b9438"
              ]
            }
          ]
        },
        "pe": {
          "level": "high",
          "summary": "26 条基金/资管相关资讯",
          "items": [
            {
              "title": "前三季度韩国投资者净买入金额前15名的港股合计净买入约2.28亿美元",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_728976608e50"
              ]
            },
            {
              "title": "美股点金丨持币观望！货币基金净流入创六年新高，反弹能走多远",
              "impact": "市场表现影响，可用于投资人沟通",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_8265af5f0ba7"
              ]
            },
            {
              "title": "太一量生完成超10亿元融资",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_0c282eeba530"
              ]
            }
          ]
        },
        "banking": {
          "level": "high",
          "summary": "14 条银行/货币政策相关资讯",
          "items": [
            {
              "title": "下周重磅日程：中美CPI、沃什讲话、Anthropic投资者日、台积电与ASML财报",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_31b2216a0a85"
              ]
            },
            {
              "title": "德银：美股7月下旬以来的“第五轮科技股反弹”已到顶，准备迎接“倒V反转”",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_9592ebe5735c"
              ]
            },
            {
              "title": "国信证券：高股息夯实配置价值 盈利修复打开银行上涨空间",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_89bd2765f7f4"
              ]
            }
          ]
        },
        "trust": {
          "level": "medium",
          "summary": "2 条信托/财富管理相关资讯",
          "items": [
            {
              "title": "汇丰在华公募布局生变，两家公募变更主要股东，汇丰或一进一退",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": [
                "news_fafa477b9331"
              ]
            },
            {
              "title": "保险资管产品Q3业绩反转！医药、红利逆势领跑，部分科技主题回撤逾30%，机构研判后市三大方向",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": [
                "news_e9908ce872db"
              ]
            }
          ]
        }
      }
    },
    "weeklyTrends": {
      "summary": "今日 150 条资讯，覆盖 5 个分类、9 个信源",
      "trends": [
        {
          "topic": "监管政策密集度上升",
          "evidence": "今日 4 条监管类资讯，监管层信号集中释放，关注政策落地节奏",
          "evidenceItemIds": [
            "news_779c28374ab4",
            "news_27886f9d572b",
            "news_0f3e71a2648c"
          ],
          "direction": "上升"
        },
        {
          "topic": "行业动态活跃",
          "evidence": "今日 84 条行业动态资讯，行业层面信息充分，涉及多家机构/产品",
          "evidenceItemIds": [
            "news_12ed2f7f4bbc",
            "news_c518799ae53c",
            "news_31b2216a0a85"
          ],
          "direction": "平稳"
        },
        {
          "topic": "货币政策信号",
          "evidence": "出现 6 次货币政策相关关键词，关注利率/流动性走向",
          "evidenceItemIds": [
            "news_31b2216a0a85",
            "news_b8359ae20a15",
            "news_ca85d8072074"
          ],
          "direction": "上升"
        },
        {
          "topic": "保险行业关注度",
          "evidence": "出现 14 条保险相关资讯，覆盖监管/市场/产品多维度",
          "evidenceItemIds": [
            "news_ddac9349b94e",
            "news_2a4925288be6",
            "news_5c5f98083245"
          ],
          "direction": "上升"
        },
        {
          "topic": "市场行情波动",
          "evidence": "出现 60 条市场行情相关资讯，市场关注度提升",
          "evidenceItemIds": [
            "news_ac4de161294d",
            "news_00c49027dfd7",
            "news_b055a8da7d95"
          ],
          "direction": "上升"
        }
      ]
    },
    "insurancePlanner": {
      "summary": "今日 16 条保险相关资讯，以下为规划师客户沟通参考",
      "talkingPoints": [
        {
          "topic": "持股比例突破20%！新华保险增持国泰海通H股，年内险资举牌降温，转道押注硬科技IPO",
          "point": "保险科技/数字化转型进展，适合与高净值客户探讨行业前沿趋势",
          "action": "整理科技赋能案例，丰富客户沟通深度",
          "evidenceItemIds": [
            "news_ee3acd077506"
          ]
        },
        {
          "topic": "人社部：尽可能让灵活就业人员参加职工养老保险",
          "point": "养老金/年金市场动态，可用于退休规划客户的需求唤醒沟通",
          "action": "整理目标客户名单，准备年金利益演示",
          "evidenceItemIds": [
            "news_250ce855559b"
          ]
        },
        {
          "topic": "3小时获赔6500元国寿骑手保跑出理赔加速度",
          "point": "保险科技/数字化转型进展，适合与高净值客户探讨行业前沿趋势",
          "action": "整理科技赋能案例，丰富客户沟通深度",
          "evidenceItemIds": [
            "news_85272c0b9438"
          ]
        },
        {
          "topic": "严禁以附代主成立产品管理委员会财险公司产品开发规则全面升级",
          "point": "保险科技/数字化转型进展，适合与高净值客户探讨行业前沿趋势",
          "action": "整理科技赋能案例，丰富客户沟通深度",
          "evidenceItemIds": [
            "news_779c28374ab4"
          ]
        }
      ]
    },
    "peOperations": {
      "summary": "今日 27 条基金/资管相关资讯，以下为运营参考",
      "talkingPoints": [
        {
          "topic": "前三季度韩国投资者净买入金额前15名的港股合计净买入约2.28亿美元",
          "point": "投资策略/工具创新，可作为投教内容和客户沟通差异化素材",
          "action": "研究新策略逻辑，评估与现有产品线的互补性",
          "evidenceItemIds": [
            "news_728976608e50"
          ]
        },
        {
          "topic": "中央汇金“打假”：公司不开展代客投资理财活动",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_bb06192763dc"
          ]
        },
        {
          "topic": "美股点金丨持币观望！货币基金净流入创六年新高，反弹能走多远",
          "point": "基金/产品业绩数据，是投资人沟通和维护的重要参考",
          "action": "整理同类产品对比，准备业绩归因分析",
          "evidenceItemIds": [
            "news_8265af5f0ba7"
          ]
        },
        {
          "topic": "太一量生完成超10亿元融资",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_0c282eeba530"
          ]
        }
      ]
    },
    "marketOutlook": {
      "summary": "今日 54 条宏观经济/政策相关资讯",
      "outlooks": [
        {
          "topic": "前三季度韩国投资者净买入金额前15名的港股合计净买入约2.28亿美元",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_728976608e50"
          ]
        },
        {
          "topic": "下周重磅日程：中美CPI、沃什讲话、Anthropic投资者日、台积电与ASML财报",
          "content": "通胀数据影响货币政策节奏和实际利率水平，关注对债券久期策略的传导",
          "evidenceItemIds": [
            "news_31b2216a0a85"
          ]
        },
        {
          "topic": "中央汇金“打假”：公司不开展代客投资理财活动",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_bb06192763dc"
          ]
        },
        {
          "topic": "中国农业地理｜大闸蟹价格回落，它爬出“包邮区”正去往云贵川​​​​​​​​​​​​​​",
          "content": "宏观经济数据反映基本面修复节奏，是判断大类资产配置方向的底层参考",
          "evidenceItemIds": [
            "news_65863b6231c1"
          ]
        }
      ]
    }
  }
};
window.KEYWORD_INDEX = {
  "保险": [
    "news_ee3acd077506",
    "news_250ce855559b",
    "news_85272c0b9438",
    "news_5a386ae1df58",
    "news_eab302ba1e3f",
    "news_e9908ce872db",
    "news_b8359ae20a15",
    "news_90694c744974",
    "news_7b45a87acab6",
    "news_5c5f98083245",
    "news_9f3b623176ea"
  ],
  "险企": [
    "news_b8359ae20a15"
  ],
  "保费": [
    "news_b88af30fc3f3",
    "news_9f3b623176ea"
  ],
  "理赔": [
    "news_85272c0b9438",
    "news_5c5f98083245"
  ],
  "偿付能力": [
    "news_2a4925288be6"
  ],
  "保额": [
    "news_b88af30fc3f3",
    "news_5c5f98083245"
  ],
  "保单": [
    "news_90694c744974",
    "news_b88af30fc3f3"
  ],
  "保险业": [
    "news_eab302ba1e3f"
  ],
  "保险公司": [
    "news_b8359ae20a15",
    "news_7b45a87acab6",
    "news_5c5f98083245"
  ],
  "保险产品": [
    "news_5a386ae1df58",
    "news_90694c744974"
  ],
  "保险销售": [
    "news_7b45a87acab6"
  ],
  "养老": [
    "news_250ce855559b",
    "news_ddac9349b94e"
  ],
  "重疾险": [
    "news_b88af30fc3f3"
  ],
  "寿险": [
    "news_5c5f98083245"
  ],
  "车险": [
    "news_14db8fd17684"
  ],
  "财险": [
    "news_779c28374ab4",
    "news_14db8fd17684",
    "news_90694c744974"
  ],
  "医疗险": [
    "news_90694c744974",
    "news_9f3b623176ea"
  ],
  "国寿": [
    "news_85272c0b9438",
    "news_ddac9349b94e"
  ],
  "新华保险": [
    "news_ee3acd077506",
    "news_eab302ba1e3f"
  ],
  "银行": [
    "news_31b2216a0a85",
    "news_9592ebe5735c",
    "news_89bd2765f7f4",
    "news_d2cfa2203826",
    "news_5e010f9df09e",
    "news_5a386ae1df58",
    "news_a3ef785d4c0a",
    "news_35487187d310",
    "news_61bbc83b2fb2",
    "news_1ad06cb1a588"
  ],
  "央行": [
    "news_31b2216a0a85",
    "news_5e010f9df09e",
    "news_6dde80b2692e"
  ],
  "利率": [
    "news_8f72fd40b804",
    "news_6dde80b2692e",
    "news_ca85d8072074",
    "news_b8359ae20a15"
  ],
  "加息": [
    "news_c58f0c74ae4b",
    "news_d2cfa2203826",
    "news_6dde80b2692e"
  ],
  "存款": [
    "news_5e010f9df09e"
  ],
  "理财": [
    "news_bb06192763dc"
  ],
  "股票": [
    "news_8845f54c7c04",
    "news_b4a5c5b204de",
    "news_ff0e3a8d634b"
  ],
  "A股": [
    "news_728976608e50",
    "news_41ba52ba0f9f",
    "news_3cc7bb01f717",
    "news_95ed093d93d7",
    "news_653e918d58e0",
    "news_62f3d9934de1"
  ],
  "港股": [
    "news_728976608e50",
    "news_41ba52ba0f9f",
    "news_0f071e7c111d"
  ],
  "美股": [
    "news_31b2216a0a85",
    "news_9592ebe5735c",
    "news_c58f0c74ae4b",
    "news_8265af5f0ba7",
    "news_28e5a7e399fd",
    "news_d2cfa2203826",
    "news_b4a5c5b204de",
    "news_ff0e3a8d634b",
    "news_0f071e7c111d",
    "news_61bbc83b2fb2",
    "news_1ad06cb1a588"
  ],
  "大盘": [
    "news_9592ebe5735c"
  ],
  "指数": [
    "news_c58f0c74ae4b",
    "news_41d5928a8838",
    "news_28e5a7e399fd",
    "news_d2cfa2203826",
    "news_b4a5c5b204de",
    "news_cb0bb7d1f375",
    "news_ff0e3a8d634b",
    "news_62f3d9934de1",
    "news_8fb430f01922"
  ],
  "ETF": [
    "news_728976608e50",
    "news_41ba52ba0f9f",
    "news_62f3d9934de1",
    "news_8fb430f01922"
  ],
  "公募基金": [
    "news_94f66a916478",
    "news_62f3d9934de1",
    "news_0f3e71a2648c"
  ],
  "私募基金": [
    "news_308bc7086bb8"
  ],
  "对冲基金": [
    "news_28e5a7e399fd"
  ],
  "债券": [
    "news_05e66344097d",
    "news_5a386ae1df58",
    "news_79e92a1f81ac",
    "news_ca85d8072074",
    "news_b8359ae20a15"
  ],
  "国债": [
    "news_ab5d1ece3de5",
    "news_05e66344097d",
    "news_cadcfd6cdc32",
    "news_8f72fd40b804",
    "news_6dde80b2692e"
  ],
  "信用债": [
    "news_8f72fd40b804"
  ],
  "期货": [
    "news_8845f54c7c04",
    "news_89b12adbeceb"
  ],
  "期权": [
    "news_20437ddd1b2b",
    "news_b4a5c5b204de"
  ],
  "IPO": [
    "news_ee3acd077506",
    "news_1017a548af7a"
  ],
  "上市": [
    "news_31b2216a0a85",
    "news_65863b6231c1",
    "news_5746404e0296",
    "news_3e5740b71ca6",
    "news_66c1916bcf11",
    "news_5732044bc513",
    "news_653e918d58e0",
    "news_6a0d0b59dc82",
    "news_f12d76b6797a"
  ],
  "定增": [
    "news_ddac9349b94e"
  ],
  "增持": [
    "news_ee3acd077506",
    "news_eab302ba1e3f"
  ],
  "回购": [
    "news_3e5740b71ca6"
  ],
  "券商": [
    "news_308bc7086bb8",
    "news_995c58cacbee",
    "news_e9908ce872db"
  ],
  "投行": [
    "news_61bbc83b2fb2",
    "news_1ad06cb1a588"
  ],
  "经纪": [
    "news_c9ac4e7af54b",
    "news_5c5f98083245",
    "news_9f3b623176ea"
  ],
  "投资者": [
    "news_728976608e50",
    "news_31b2216a0a85",
    "news_c58f0c74ae4b",
    "news_8265af5f0ba7",
    "news_41ba52ba0f9f",
    "news_8845f54c7c04",
    "news_5746404e0296",
    "news_b4a5c5b204de",
    "news_95ed093d93d7",
    "news_1ad06cb1a588"
  ],
  "机构": [
    "news_308bc7086bb8",
    "news_0a77000b44bd",
    "news_8845f54c7c04",
    "news_995c58cacbee",
    "news_5746404e0296",
    "news_0c64ee933edf",
    "news_5732044bc513",
    "news_94f66a916478",
    "news_79e92a1f81ac",
    "news_e9908ce872db",
    "news_6898c48b872e",
    "news_8a06c374465f",
    "news_37c80e8c3254",
    "news_6b8776985e58"
  ],
  "监管": [
    "news_f31708fd8501",
    "news_ac4de161294d",
    "news_00c49027dfd7",
    "news_0fc9bb0620eb",
    "news_b055a8da7d95",
    "news_95ed093d93d7",
    "news_183e9919e2c7",
    "news_fa7d0740c8ad",
    "news_cdf1df98c5ae",
    "news_94f66a916478",
    "news_c72888513c4b",
    "news_a3ef785d4c0a",
    "news_27886f9d572b",
    "news_8b83d29b677d",
    "news_452e3d1e0e0a",
    "news_b6523d0d3e2d",
    "news_68bbe6548e2d"
  ],
  "金融监管": [
    "news_a3ef785d4c0a",
    "news_27886f9d572b"
  ],
  "证监会": [
    "news_4e517219ffc7",
    "news_5746404e0296",
    "news_3e5740b71ca6",
    "news_95ed093d93d7",
    "news_fafa477b9331",
    "news_5732044bc513",
    "news_0f3e71a2648c",
    "news_986ca26f7b13"
  ],
  "处罚": [
    "news_4b05ec801783",
    "news_fafdcae1e95a",
    "news_23e90c7f40b4"
  ],
  "罚单": [
    "news_a3ef785d4c0a"
  ],
  "整改": [
    "news_27886f9d572b"
  ],
  "通报": [
    "news_b11a90350756",
    "news_2110ac4ba467",
    "news_94f66a916478"
  ],
  "条款": [
    "news_68bbe6548e2d",
    "news_90694c744974",
    "news_5c5f98083245"
  ],
  "办法": [
    "news_f31708fd8501",
    "news_0f3e71a2648c"
  ],
  "通知": [
    "news_138a47b42045",
    "news_ae39e2f94017",
    "news_9c97a7a5b9f7",
    "news_ac4de161294d",
    "news_00c49027dfd7",
    "news_b055a8da7d95",
    "news_183e9919e2c7",
    "news_03b5ace88963",
    "news_de1f1fce7d26",
    "news_fbe577a953a2",
    "news_b06f1a8d4c70",
    "news_cfb3290f7503",
    "news_c3a68f77fe10",
    "news_59b014ebb3f4"
  ],
  "指引": [
    "news_f9d6ccb0e56d"
  ],
  "意见": [
    "news_138a47b42045",
    "news_ae39e2f94017",
    "news_9c97a7a5b9f7",
    "news_ac4de161294d",
    "news_00c49027dfd7",
    "news_5746404e0296",
    "news_b055a8da7d95",
    "news_183e9919e2c7",
    "news_fafa477b9331",
    "news_fa7d0740c8ad",
    "news_48caeda1921f",
    "news_5732044bc513",
    "news_11aeb2f2c9d5",
    "news_5a386ae1df58",
    "news_03b5ace88963",
    "news_6898c48b872e",
    "news_fbe577a953a2",
    "news_b06f1a8d4c70",
    "news_cfb3290f7503",
    "news_f12d76b6797a",
    "news_479ca676c9a7",
    "news_0f3e71a2648c"
  ],
  "规定": [
    "news_3daaf46c37a4",
    "news_27886f9d572b",
    "news_986ca26f7b13"
  ],
  "法规": [
    "news_b06f1a8d4c70",
    "news_0f3e71a2648c"
  ],
  "解读": [
    "news_90694c744974",
    "news_7b45a87acab6",
    "news_5c5f98083245"
  ],
  "牌照": [
    "news_5c5f98083245"
  ],
  "经济": [
    "news_12ed2f7f4bbc",
    "news_c518799ae53c",
    "news_65863b6231c1",
    "news_5100611aea50",
    "news_8265af5f0ba7",
    "news_4e517219ffc7",
    "news_308bc7086bb8",
    "news_1857c67fdbac",
    "news_48caeda1921f",
    "news_5732044bc513",
    "news_11aeb2f2c9d5",
    "news_0f071e7c111d",
    "news_af4d21fdda7d",
    "news_52e86599e52a",
    "news_5a76537a99eb",
    "news_479ca676c9a7",
    "news_b88af30fc3f3"
  ],
  "宏观经济": [
    "news_5732044bc513",
    "news_479ca676c9a7"
  ],
  "经济运行": [
    "news_5732044bc513"
  ],
  "高质量发展": [
    "news_4c1a422ad9a3",
    "news_59902c35dae2",
    "news_1857c67fdbac",
    "news_5732044bc513",
    "news_0f3e71a2648c"
  ],
  "GDP": [
    "news_1857c67fdbac"
  ],
  "CPI": [
    "news_31b2216a0a85",
    "news_c58f0c74ae4b",
    "news_8dc3cf14dcc8",
    "news_d2cfa2203826"
  ],
  "PPI": [
    "news_31b2216a0a85",
    "news_8dc3cf14dcc8"
  ],
  "货币政策": [
    "news_6dde80b2692e"
  ],
  "逆周期": [
    "news_4e517219ffc7",
    "news_11aeb2f2c9d5"
  ],
  "人民币": [
    "news_0c282eeba530",
    "news_5e010f9df09e",
    "news_697a7c73c4ce",
    "news_653e918d58e0",
    "news_e89d9b8567b7",
    "news_23e90c7f40b4",
    "news_e7af647e187c"
  ],
  "跨境": [
    "news_10dcad8dac19",
    "news_5e010f9df09e",
    "news_af4d21fdda7d"
  ],
  "离岸": [
    "news_5e010f9df09e"
  ],
  "美元": [
    "news_728976608e50",
    "news_5350bb984c44",
    "news_dabc6be9146f",
    "news_41ba52ba0f9f",
    "news_92712b6ff397",
    "news_c155fb5bb20c",
    "news_8dc3cf14dcc8",
    "news_1017a548af7a",
    "news_cb0bb7d1f375",
    "news_2c4bfea5e498",
    "news_1cc4d49ead4e",
    "news_8a06c374465f",
    "news_89b12adbeceb",
    "news_8e033337288d",
    "news_6dde80b2692e"
  ],
  "欧元": [
    "news_c58f0c74ae4b",
    "news_531488b5a760",
    "news_6dde80b2692e"
  ],
  "通胀": [
    "news_c58f0c74ae4b",
    "news_d2cfa2203826",
    "news_ca85d8072074"
  ],
  "楼市": [
    "news_0ec360b8067c"
  ],
  "住房": [
    "news_743dafca0930",
    "news_03b5ace88963"
  ],
  "消费": [
    "news_65863b6231c1",
    "news_10dcad8dac19",
    "news_d2cfa2203826",
    "news_62adc55a19f8",
    "news_b055a8da7d95",
    "news_03b5ace88963",
    "news_35487187d310",
    "news_b5d4a131f82f",
    "news_af4d21fdda7d",
    "news_b06f1a8d4c70"
  ],
  "投资": [
    "news_728976608e50",
    "news_31b2216a0a85",
    "news_bb06192763dc",
    "news_c58f0c74ae4b",
    "news_8265af5f0ba7",
    "news_0c282eeba530",
    "news_308bc7086bb8",
    "news_41ba52ba0f9f",
    "news_8845f54c7c04",
    "news_92712b6ff397",
    "news_8dc3cf14dcc8",
    "news_5746404e0296",
    "news_0fc9bb0620eb",
    "news_e2e11ddb3008",
    "news_59902c35dae2",
    "news_b4a5c5b204de",
    "news_95ed093d93d7",
    "news_fafa477b9331",
    "news_5e010f9df09e",
    "news_2c4bfea5e498",
    "news_1cc4d49ead4e",
    "news_c72888513c4b",
    "news_fafdcae1e95a",
    "news_e89d9b8567b7",
    "news_5a76537a99eb",
    "news_1ad06cb1a588",
    "news_f36caf37a48e",
    "news_ca85d8072074",
    "news_0f3e71a2648c"
  ],
  "出口": [
    "news_31b2216a0a85",
    "news_25d57bd46f4a",
    "news_a0a493d87736",
    "news_3154aefd4308"
  ],
  "进口": [
    "news_8d374ad46b6c",
    "news_20437ddd1b2b",
    "news_35487187d310"
  ],
  "进出口": [
    "news_31b2216a0a85",
    "news_25d57bd46f4a"
  ],
  "贸易": [
    "news_dabc6be9146f",
    "news_4ac8af6a94b0",
    "news_c4ef3a6925df",
    "news_5e010f9df09e",
    "news_a3ef785d4c0a",
    "news_94b0f39a8ee0"
  ],
  "产业链": [
    "news_31b2216a0a85",
    "news_7d04095c7d45"
  ],
  "供应链": [
    "news_8a06c374465f"
  ],
  "就业": [
    "news_250ce855559b",
    "news_3d400cd5935f",
    "news_487e2600d4f2"
  ],
  "失业": [
    "news_250ce855559b",
    "news_8a06c374465f"
  ],
  "收入": [
    "news_5350bb984c44"
  ],
  "黄金": [
    "news_2b21b66dccb1",
    "news_37c80e8c3254",
    "news_ca85d8072074"
  ],
  "金价": [
    "news_ca85d8072074",
    "news_b88af30fc3f3"
  ],
  "原油": [
    "news_dabc6be9146f",
    "news_8d374ad46b6c",
    "news_20437ddd1b2b",
    "news_8dc3cf14dcc8",
    "news_89b12adbeceb",
    "news_62f3d9934de1"
  ],
  "大宗商品": [
    "news_dabc6be9146f",
    "news_8845f54c7c04"
  ],
  "工业": [
    "news_382dfd2283fe",
    "news_ae39e2f94017",
    "news_ac4de161294d",
    "news_00c49027dfd7",
    "news_183e9919e2c7",
    "news_fa7d0740c8ad",
    "news_de1f1fce7d26",
    "news_fbe577a953a2",
    "news_b06f1a8d4c70",
    "news_cfb3290f7503"
  ],
  "利润": [
    "news_fafdcae1e95a"
  ],
  "股市": [
    "news_9f6172b30fab",
    "news_90e5eae908a8",
    "news_cadcfd6cdc32",
    "news_0f071e7c111d",
    "news_62f3d9934de1"
  ],
  "美联储": [
    "news_c58f0c74ae4b",
    "news_d2cfa2203826"
  ],
  "财报": [
    "news_31b2216a0a85",
    "news_c58f0c74ae4b",
    "news_8265af5f0ba7",
    "news_d2cfa2203826",
    "news_61bbc83b2fb2"
  ],
  "欧央行": [
    "news_6dde80b2692e"
  ],
  "信托": [
    "news_fafa477b9331"
  ],
  "资管": [
    "news_fafa477b9331",
    "news_e9908ce872db"
  ],
  "净值": [
    "news_79e92a1f81ac",
    "news_62f3d9934de1"
  ],
  "固收": [
    "news_e9908ce872db"
  ],
  "权益": [
    "news_94f66a916478",
    "news_eab302ba1e3f",
    "news_e9908ce872db",
    "news_62f3d9934de1",
    "news_8fb430f01922",
    "news_0f3e71a2648c",
    "news_b88af30fc3f3"
  ],
  "多资产": [
    "news_9592ebe5735c"
  ],
  "年化": [
    "news_5350bb984c44"
  ],
  "募集": [
    "news_0f3e71a2648c"
  ]
};
