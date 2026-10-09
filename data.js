// finhot auto-generated data - powered by RSSHub + financial sources + Zhihu OpenAPI
// Generated: 2026-10-09T06:44:52.975Z
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
  "date": "2026-10-09",
  "generatedAt": "2026-10-09T06:44:52.975Z",
  "lead": "今日新增 91 条，共 150 条精选资讯",
  "items": [
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
      "score": 57,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 34,
          "reasons": [
            "命中保险运营核心主题 1 项"
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
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "eventId": null
    },
    {
      "title": "A股三大指数全线翻红",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018243525300103",
      "publishedAt": "2026-10-09T06:08:41.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，A股三大指数全线翻红，科创50指数跌幅缩窄至0.06%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_ef1c4497f1b9",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
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
          "score": 63,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 19,
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
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "中国铁建、中国国新在北京成立新企业管理合伙企业，出资额17.5亿",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018242849656962",
      "publishedAt": "2026-10-09T06:08:00.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，天眼查App显示，近日，铁建远航（北京）企业管理合伙企业（有限合伙）成立，执行事务合伙人为中铁建锦鲲资产管理有限公司，出资额17.5亿元人民币，经营范围包括企业管理、企业管理咨询。合伙人信息显示，该合伙企业由中国国新旗下国新远航（北京）投资有限公司、中国铁道建筑集团有限公司、中铁建锦鲲资产管理有限公司共同出资，出资比例分别为80%、19.99%、0.01%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_4faaf3dc4ba1",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "A股三大指数，全部翻红",
      "sourceUrl": "https://www.cls.cn/detail/2500349",
      "publishedAt": "2026-10-09T06:07:26.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "【三大指数全部翻红】财联社10月9日电，指数午后回升，核心指数全部翻红，上证指数此前一度跌近1.5%，深成指一度跌超2.5%，创业板指一度跌超3%，科创50指数一度跌超4%。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_806edb4e8b95",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 32,
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
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 64,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "attentionScore": 32,
      "llmScores": [
        38,
        26
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "苹果据悉因需求疲软削减iPhone 18 Pro订单",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018241087492230",
      "publishedAt": "2026-10-09T06:06:12.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "据报道，由于内存芯片成本飙升，苹果公司被迫提价导致消费者需求下降。苹果公司已告知部分供应商削减其新推出的iPhone 18 Pro和iPhone 18 Pro Max的零部件产量。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_d57141c563c5",
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
      "title": "OpenAI营收预期差引发恐慌，算力硬件概念股全线回调",
      "sourceUrl": "https://www.yicai.com/news/103387484.html",
      "publishedAt": "2026-10-09T06:04:06.000Z",
      "fetchedAt": "2026-10-09T06:15:07.000Z",
      "timeConfidence": "source",
      "summary": "A股算力硬件板块遭遇深度调整，产业基本面并未出现松动迹象。10月9日，A股算力硬件板块遭遇深度调整。科创50指数盘中跌近4%，半导体指数（882121.WI）跌超4%，算力硬件、半导体、军工等方向跌幅居前，其中MLCC（多层瓷介电容器）、PCB（印制电路板）、CPO（共封装光学）等AI硬件方向领跌。\n\n截至午盘，风华高科（000636.SZ）、金安国纪（002636.SZ）等多只个股跌停；昀冢科技",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ba5ada35561a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
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
          "score": 64,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "中美贸易停战为何重要",
      "sourceUrl": "https://opinion.caixin.com/2026-10-09/102491587.html",
      "publishedAt": "2026-10-09T06:01:34.000Z",
      "fetchedAt": "2026-10-09T06:14:47.156Z",
      "timeConfidence": "source",
      "summary": "在规则驱动的贸易体系逐渐失效的世界里，通过互相制约形成微妙均衡可能是能期望的最佳状态\n       　　2026年9月，中国国家主席习近平应美国总统特朗普邀请对美国进行国事访问，两国元首就中美建设性战略稳定关系及重大国际地区问题深入交换意见，达成八点成果共识。其中，在中美经贸磋商方面的成果之一是延期吉隆坡经贸磋商成果。2025年10月中美元首在韩国釜山会晤前，双方在吉隆坡就解决各自关切的经贸问题达",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7a90d4cafe4b",
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
      "title": "海南国庆假期接待游客475.4万人次，旅游总花费68.75亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018228236685447",
      "publishedAt": "2026-10-09T05:59:55.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "2026年国庆假期，海南接待游客475.40万人次，较2025年增长13.1%，较2024年增长15.0%；游客总花费68.75亿元，较2025年增长14.7%，较2024年增长19.8%；入境游客3.29万人次，较2025年增长18.4%，较2024年增长88.6%。据海口海关统计，假期7天共监管离岛免税购物金额8.55亿元、参与购物人数12.3万人次，日均销售额突破1亿元。据海口出入境边防检查",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_af99ecae9c2f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 33,
      "rawScore": 69,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
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
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 36,
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
          "score": 36,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 33,
      "llmScores": [
        25,
        40
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
      "title": "销量退潮，保时捷押注更贵的生意",
      "sourceUrl": "https://wallstreetcn.com/articles/3783255",
      "publishedAt": "2026-10-09T05:55:01.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "四年前，保时捷在法兰克福证券交易所风光上市，创下了当年欧洲IPO市值纪录。跑车品牌的溢价，加上SUV的销量规模，带来了丰厚的利润，撑起了它的高估值。\n如今，支撑这门生意的条件变了——中国市场持续回落，高端纯电动车需求增长慢于预期，产品战略重整和美国关税又增加了成本。2025年，保时捷集团销售回报率降至1.1%，远低于上市当年的18.0%。\n当地时间10月7日的资本市场日上，保时捷发布面向2035年",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_557b03f36eb3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 23,
      "rawScore": 81,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
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
      "passesTierGate": false,
      "confidence": "high",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 78,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 43,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 23,
      "llmScores": [
        26,
        20
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
      "title": "江淮汽车退出与汇通控股合资公司",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018222920028038",
      "publishedAt": "2026-10-09T05:54:36.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，天眼查App显示，近日，江淮汇通库尔特（合肥）有限公司发生工商变更，企业名称变更为汇通金美汽车部件（合肥）有限公司，原股东合肥江淮汽车有限公司退出，赵虎卸任法定代表人，由丁绍成接任，同时，该公司注册资本由6200万元人民币减至2418万元人民币。该公司成立于2014年8月，经营范围含汽车零部件、高分子材料及其他汽车内外装饰部件、模具的研发、生产、加工、销售及售后服务等，现由合肥汇通控股",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_6e10f0ddc667",
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
      "title": "持续33年的投资消费辩论，该破局了",
      "sourceUrl": "https://opinion.caixin.com/2026-10-09/102491585.html",
      "publishedAt": "2026-10-09T05:50:57.000Z",
      "fetchedAt": "2026-10-09T06:14:47.156Z",
      "timeConfidence": "source",
      "summary": "不是投资压倒消费，也不是消费压倒投资，而是换一种问法：什么样的制度规则，能让储蓄自动流向最有效率的投资，让投资的果实自动流向最广大的消费者？\n       　　自1993年以来，中国经济学界围绕\"投资驱动和经济失衡\"的争论一直没有停止。一方认为投资是增长的引擎、消费只是结果；另一方则认为中国必须改变投资多消费少，重新激发经济活力。事实上，储蓄与投资都只是人类行为的结果，真正决定增长绩效的，是让投资",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f3a7d1fa1ea1",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "澳大利亚Maas集团股价持续下跌，Firmus放弃50亿美元IPO计划",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3601173",
      "publishedAt": "2026-10-09T05:50:04.000Z",
      "fetchedAt": "2026-10-09T06:18:15.923Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6c1bf89b3c38",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "《世界能源统计年鉴2026》：太阳能贡献七成增量",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018204987674498",
      "publishedAt": "2026-10-09T05:36:20.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "毕马威发布《世界能源统计年鉴2026》，《年鉴》显示，2025年全球能源供应总量首次突破600艾焦，可再生能源首次在非经济衰退时期成为能源供应总量增长的最大来源，其中太阳能发电贡献了增量的71%，太阳能发电量占总发电量的比重首次超越风电，几乎与核电持平，这标志着结构性转变：能源系统正从清洁能源补充化石燃料，转向清洁能源日益替代化石燃料的格局。但与此同时，化石燃料的绝对用量仍在扩张，并保持了主导地位",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_9a7e7dc8bf80",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "澳大利亚股市上涨；截至收盘澳大利亚S&P/ASX200指数上涨0.64%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3601157",
      "publishedAt": "2026-10-09T05:35:14.000Z",
      "fetchedAt": "2026-10-09T06:18:15.923Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_54ccc5070f56",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
          "score": 37,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 15,
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
      "title": "“重眸科技”宣布完成多轮次近亿元融资",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018198518583431",
      "publishedAt": "2026-10-09T05:29:44.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，“重眸科技”近日宣布完成多轮次近亿元融资，由民银国际、亦庄种子基金、远翼投资联合投资，资金将用于0.5米分辨率遥感相机批量投产、标准化产能建设以及更高分辨率遥感相机产品研发。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_191cfb794341",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 20,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 0,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {},
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
          "score": 17,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 26,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 39,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 20,
      "llmScores": [
        22,
        17
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
      "title": "减量提质持续落地，年内超400家农村中小银行批复合并，省级农商行成整合主力",
      "sourceUrl": "https://www.cls.cn/detail/2500229",
      "publishedAt": "2026-10-09T05:27:15.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（编辑 王蔚） 今年以来，农村中小银行\"减量\"继续提速。\n财联社据企业预警通数据，截至10月9日，全国已有451家农村中小银行公告合并解散，较2025年同期的288家多增约57%。\n退出主体高度集中于县域，其中农商行114家、农村合作银行5家、村镇银行280家，三类合计399家，占全部退出机构的88.5%。\n与以往以\"村改支\"为主不同，本轮退出中，省级农商银行的组建成为最大推手。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_50205cde77f2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 72,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
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
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "人形机器人Figure 02退役记：最后一个任务，是跳进炼钢炉",
      "sourceUrl": "https://wallstreetcn.com/articles/3783249",
      "publishedAt": "2026-10-09T05:26:46.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "一台人形机器人，最后一次“出场”，是在75吨电弧炉（一种用电把金属熔化的工业炉）里。\n美国当地时间9月30日，美国人形机器人公司Figure AI发布了一段颇具《终结者2：审判日》（Terminator 2: Judgment Day）风格的视频，引起了网友们的关注和探讨。\n\n画面中，多台 Figure 02站在熔炉边缘，探头看向翻滚的钢水，随后后退、助跑，通过各种姿势跃入熔炉；还有一台机器人则被",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_337581ccc97f",
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
      "title": "谭谈：央行为什么发布关于人民币汇率的政策立场",
      "sourceUrl": "https://wallstreetcn.com/articles/3783248",
      "publishedAt": "2026-10-09T05:26:40.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "10月8日下午，中国人民银行发布关于人民币汇率的政策立场。\n这是央行对汇率问题的系统性阐述。“政策立场”这个词，是指以国家名义发布的官方文本，在对外表述中，代表的是官方态度。\n要理解它，需要放在国际背景下看。最近一段时间，个别国家鼓噪人民币汇率低估，甚至要以非市场化的方式强迫人民币升值。\n中国此时发布政策立场，为厘清这个问题提供了明确依据。\n归结起来，是三个关切。要通俗理解这些关切，需要先看懂：国",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_78689efa326d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 56,
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
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 70,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项"
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
      "eventId": "event_2cf716748ce1"
    },
    {
      "title": "加大AI豪赌！软银拟向海湾地区投资者筹集1000亿美元",
      "sourceUrl": "https://wallstreetcn.com/articles/3783251",
      "publishedAt": "2026-10-09T05:24:50.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "软银创始人孙正义正寻求从海湾地区投资者募集高达1000亿美元资金，以进一步押注人工智能赛道。此举将成为这位日本亿万富翁迄今规模最大的AI融资行动之一。\n据英国《金融时报》9日援引多位知情人士透露，孙正义近几周已与包括阿联酋在内的海湾地区高层人士就上述潜在融资事宜展开磋商。据悉，所募资金将用于设立一只基金，收购企业并借助AI及其他先进技术改善其运营。软银旗下机器人与实体AI业务Roze预计将在这一过",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_89abea5a1473",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 72,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
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
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 33,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 68,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "中国信通院规划所发布《面向词元（Token）服务的智算基础设施发展研究报告（2026年）》",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018199831679107",
      "publishedAt": "2026-10-09T05:24:14.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "近日，在第十六届智慧城市与智能经济博览会上，中国信通院产业与规划研究所正式发布《面向词元（Token）服务的智算基础设施发展研究报告（2026年）》。报告作为智算基础设施系列研究的延续与深化，聚焦面向词元（Token）服务的智算基础设施，围绕态势特征、政策导向、区域布局、技术突破、产业生态5个关键环节，阐述最新发展趋势与典型实践，致力于为行业企业及相关机构提供决策参考。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_da04a3d44969",
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
      "title": "软银寻求从海湾投资者筹资最高1000亿美元以推进AI扩张计划",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3601156",
      "publishedAt": "2026-10-09T05:18:39.000Z",
      "fetchedAt": "2026-10-09T06:18:15.923Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6a0eabe1426e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "日本实际家庭消费连续9个月同比下滑",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018187477307266",
      "publishedAt": "2026-10-09T05:18:31.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "日本总务省9日公布的调查结果显示，日本家庭消费持续疲软，8月实际家庭消费支出连续第9个月同比下滑。数据显示，8月日本两人及以上家庭月平均消费支出同比下降3.1%。在消费支出的10个大类中，有9类支出同比下降。具体来看，当月食品支出下降1.4%；教育支出降幅较大，下降12.3%；水电燃气等支出下降5.2%，连续6个月下滑；服装、鞋类、家具及家居用品等支出也出现下滑。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_80ea977fb887",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "给保代单独立规，细化41项禁止行为，全流程打击违规入股",
      "sourceUrl": "https://www.cls.cn/detail/2500287",
      "publishedAt": "2026-10-09T05:16:30.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（记者 林坚）保荐代表人执业行为将迎来全面规范性管理。记者获悉，中证协最新起草了《保荐代表人执业行为规范》，并向行业征求意见中，这是保荐代表人执业行为首次被单独成文的自律规范。\n《规范》分总则、基本执业要求、廉洁从业基本规范、保荐机构的管理责任、自律管理与附则六章，合计三十一条。此前，保代的履职要求散见于《证券法》《证券发行上市保荐业务管理办法》及《证券公司保荐业务规则》等文件之",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_435c3d7896e1",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 9,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "regDocument": 6,
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
          "score": 26,
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
      "title": "绿城中国时任主席张亚东，涉嫌收贿2000万港元被起诉",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018186189115526",
      "publishedAt": "2026-10-09T05:10:21.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，香港特区廉政公署公告称，今早落案起诉绿城中国控股有限公司时任主席张亚东，控告其涉嫌从一名大连房地产开发商股东收受贿款2000万港元，致使绿城中国以4.4亿人民币购入当地一个房地产项目。公告指出，张亚东被控一项串谋使代理人接受利益罪名，涉嫌于2020年1月至2023年3月期间，与一名中间人、一名大连房地产开发商股东及被告的儿子等人串谋，收受该名股东贿款2000万港元，致使绿城中国取得该房",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5019f8261d3a",
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
      "title": "多只宽基ETF早盘突然放量，中小盘ETF成交额已超昨日全天",
      "sourceUrl": "https://wallstreetcn.com/livenews/3176024",
      "publishedAt": "2026-10-09T05:08:12.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "10月9日早盘，市场集体下挫，创业板指跌破3000点。盘中，华夏科创50ETF、易方达创业板ETF、南方中证1000ETF、华泰柏瑞沪深300ETF等核心宽基ETF显著放量。一批市场核心宽基ETF交投显著放大。值得注意的是，南方中证1000ETF、南方中证500ETF等多只中小盘宽基ETF半日成交额已超过昨日全天成交量，机构资金的博弈在早盘就已经展开。（中国基金报）",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ec31c569593a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "passesTierGate": true,
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
          "score": 70,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 57,
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
      "title": "华泰证券恒生科指纳入预测：市值组与增长组各新增10只 海致科技(02706)收入劲增有望纳入",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3601134",
      "publishedAt": "2026-10-09T05:05:05.000Z",
      "fetchedAt": "2026-10-09T06:18:15.923Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_4de090f7da0d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 29,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 25,
          "reasons": [
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
      "attentionScore": 29,
      "llmScores": [
        36,
        21
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
      "title": "软银寻求海湾资本，扩大AI布局",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018156951081093",
      "publishedAt": "2026-10-09T05:04:23.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "据报道，日本软银集团创始人孙正义正寻求向中东海湾地区投资者募集高达1000亿美元的资金，以进一步扩大其在人工智能领域的巨额赌注。根据媒体最新报道，孙正义近几周已与包括阿拉伯联合酋长国（UAE）在内的海湾地区高层人士进行了深入讨论。知情人士透露，软银计划利用这笔募集到的新资金设立一个全新基金。该基金的运作模式将不同于以往：软银将直接收购传统或科技公司，随后利用尖端AI技术彻底重塑和翻新这些公司的业务",
      "sourceName": "36氪",
      "category": "products",
      "tags": [
        "产品发布"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_395ab1ad7783",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 72,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 11,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
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
          "score": 33,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 68,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "产品动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "比亚迪：当前闪充车型订单需求旺盛，公司首要目标是加快二代刀片电池产能爬坡",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018155631628160",
      "publishedAt": "2026-10-09T04:53:07.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，比亚迪在互动平台表示，公司产品定价会综合市场竞争、用户需求、长期品牌战略、产能释放节奏等多维度因素统筹考量。当前闪充车型订单需求旺盛，公司首要目标是加快二代刀片电池产能爬坡，全力提升交付能力，保障消费者购车体验。产品相关价格信息请以官方发布为准。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f83949f9ba93",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 29,
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
          "score": 17,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 39,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 26,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 29,
      "llmScores": [
        34,
        24
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "券商回购并注销动作密集了，股价维护还有待显效",
      "sourceUrl": "https://www.cls.cn/detail/2500265",
      "publishedAt": "2026-10-09T04:52:04.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（记者高艳云）多家券商纷纷发布回购“成绩单”。10月8日，中泰证券、红塔证券、华创云信披露回购进展，已回购支付金额分别为2417.84万元、706.73万元和8155.76万元。此前，国联民生、华安证券已分别完成1亿元、2亿元的股份回购。上述回购合计耗资3.39亿元。\n注销式回购正成为行业新趋势，国金证券称将耗资1.5亿元回购的1739.96万股进行注销；近期回购注销的券商还包括",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_dfd932fb5d96",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 41,
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
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "attentionScore": 41,
      "llmScores": [
        39,
        43
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "英国大学生申领贷款将需达到最低标准",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018140072005768",
      "publishedAt": "2026-10-09T04:38:17.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "据知情人士消息，英国政府正在酝酿新方案，要求大学生达到最低入学标准，方可申领政府助学贷款。部长们将在数周内公布限制助学贷款申领资格的相关计划。政策重点将放在英语能力上，官员考虑将普通中等教育证书（GCSE）英语科目合格设为贷款申领门槛。英国亦可能就更低标准开展咨询，允许采用其他英语资质证明。英国教育部证实，将会研究设置助学贷款最低英语要求的 “多种备选方案”。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b5cc2b260b51",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
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
      "title": "港股年内募资3856亿港元，389宗项目候场，每四家就有一家来自A股",
      "sourceUrl": "https://www.cls.cn/detail/2500254",
      "publishedAt": "2026-10-09T04:31:20.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（记者 陈俊兰）距离全年收官还有一个季度，香港新股市场的轮廓已经清晰。\nWind数据显示，截至10月8日，年内已有115家企业在港完成首次公开发行，除岚图汽车未披露募资金额外，其余114家合计募资约3855.66亿港元。这一规模距离2010年创下的4495亿港元历史峰值，仅剩639亿港元左右的差距。\n从市场表现来看，今年港股IPO呈现出较为鲜明的结构性特征：一方面，A+H上市持续",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fa376e493170",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 51,
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
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "medium",
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
          "score": 86,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "attentionScore": 51,
      "llmScores": [
        50,
        52
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "今年破净券商为何这样多？20只破净创十年新高，还有的破净又破发",
      "sourceUrl": "https://www.cls.cn/detail/2500253",
      "publishedAt": "2026-10-09T04:29:36.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（记者 王晨）当华泰证券、国泰海通的股价跌破每股净资产，市场很难再把“破净”当成中小券商的专利。\n截至10月8日收盘，A股共有20只券商股破净。这个数字创下了近十年新高。要知道，就在2025年末，破净的券商股还只有4只；即便是在2022年券商股最惨淡的时刻，破净数量也不过15只。\n短短九个多月，破净名单从4只扩张到20只，扩张了整整四倍。更让市场意外的是破净名单。财联社记者梳理发",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bb9af5db3e02",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 70,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 35,
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
      "title": "PIMCO高管：10年期美债收益率有触及6%的风险",
      "sourceUrl": "https://www.36kr.com/newsflashes/4018127371636614",
      "publishedAt": "2026-10-09T04:19:19.000Z",
      "fetchedAt": "2026-10-09T06:16:10.373Z",
      "timeConfidence": "source",
      "summary": "太平洋资产管理公司集团首席投资官丹·伊瓦辛（Dan Ivascyn）警告称，受高油价、通胀顽固以及庞大公共债务规模等三重宏观压力影响，美国10年期国债收益率存在触及6%的风险。技术性抛盘与对冲基金的被迫清仓进一步加剧了市场的剧烈震荡，使得收益率在短期内面临进一步攀升的可能。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e8b408c4dae5",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 11,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [
        "无口径收益宣传"
      ],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
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
          "score": 59,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 72,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "四季度7款新车将上市 比亚迪打响全年“收官战”",
      "sourceUrl": "https://www.cls.cn/detail/2500251",
      "publishedAt": "2026-10-09T04:18:59.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（记者 徐昊）面对持续承压的市场，比亚迪已然开启年末收官冲刺。\n据财联社记者不完全统计，比亚迪将在四季度集中投放七款新车，产品价格覆盖十万元以下代步车型至百万级纯电超跑，实现主流细分市场覆盖。\n此前已开启预售的王朝网大汉，将打响此轮“收官战”的第一枪。作为比亚迪的基本盘，定位中高端纯电轿车的大汉EV将于10月13日正式上市，预售价格为24.99万至29.99万元，主攻家用及商务出",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_abf2d0a5bbbc",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 61,
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "【午报】创业板跌2.61%失守3000点，算力硬件股持续调整，锂电板块逆势走强",
      "sourceUrl": "https://www.cls.cn/detail/2500252",
      "publishedAt": "2026-10-09T04:18:54.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "一、【早盘盘面回顾】\n财联社10月9日讯，市场早盘集体下挫，创业板指跌破3000点。沪深两市半日成交额1.17万亿，较上个交易日放量628亿。全市场超4300只个股下跌。盘面上，锂电池概念盘中逆势走强，力王股份30CM二连板，时代万恒5连板，紫竹高科4连板，领湃科技2连板，天赐材料、金圆股份涨停；农业金健米业、万向德农涨停；大消费国芳集团、丽人丽妆涨停；有机硅概念表现活跃，晨光新材涨停，东岳硅材2",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_95114d23eb6b",
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
          "score": 26,
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
      "title": "日租金从万元跌至不足千元：国庆假期机器人告别\"表演经济\"",
      "sourceUrl": "https://www.cls.cn/detail/2500250",
      "publishedAt": "2026-10-09T04:16:57.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月9日讯（记者 李佳怡）这个国庆假期，景区里除了“人人人人”，还多了一批机器人“员工”。\n它们不再只是在舞台上翻跟头、跳舞的“表演嘉宾”，而是开始排班上岗、卖货收款、巡检安防、夜间演出。据不完全统计，已有近30家具身智能及机器人企业进入文旅、零售和消费服务场景，国庆期间在岗规模达到数千台。\n与此同时，机器人租赁的“抢租潮”也已经消失，日租金从2025年初的万元级跌至不足千元。告别",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_547933529eef",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "AI要钱、欧美政府也要钱！全球“资本争夺战”打响，债券风暴才“刚刚开始”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783240",
      "publishedAt": "2026-10-09T04:10:07.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "过去两年，市场最拥挤的叙事是AI：算力、芯片、数据中心、云服务，所有资产都在围绕人工智能重估。但现在，一个更底层的问题开始浮出水面：AI不只要算力，它还要钱；而且要的是天量、长期、低容错的资本。\n与此同时，美国政府、欧洲政府、日本政府，也都在要钱。财政赤字高企、债务滚动再融资、利息支出飙升，正在把全球债券市场推向一个新的阶段：资本不再廉价，也不再充裕。\n这意味着，过去十几年建立在“低利率、充裕流动",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d5456b738dd3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 63,
      "rawScore": 63,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
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
          "score": 82,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
          ]
        },
        "privateFundSales": {
          "score": 34,
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
      "title": "绿城前董事会主席张亚东被香港廉署起诉，涉嫌受贿2000万港元",
      "sourceUrl": "https://www.yicai.com/news/103387374.html",
      "publishedAt": "2026-10-09T04:06:50.000Z",
      "fetchedAt": "2026-10-09T06:15:07.000Z",
      "timeConfidence": "source",
      "summary": "张亚东曾在绿城七年。10月9日，香港廉政公署对外披露，在今早落案起诉绿城中国（03900.HK）时任主席张亚东，控告他涉嫌收受贿款，并使得绿城中国收购了大连一个房地产项目。案件今日在东区裁判法院提讯。香港廉政公署表示，现年58岁的张亚东被控一项串谋使代理人接受利益罪名，违反《防止贿赂条例》第9(1)(a)条及《刑事罪行条例》第159A条。控罪指，被告张亚东涉嫌于2020年1月至2023年3月期间，",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1d306a1ce4f8",
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
      "title": "对话秦海岩：“十五五”电氢协同提速，电解槽订单加速向头部集中",
      "sourceUrl": "https://www.cls.cn/detail/2500240",
      "publishedAt": "2026-10-09T03:59:35.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（记者郭松峤）“随着《新型电力系统建设‘十五五’规划》相关研究的深入，新型电网直接投资超5万亿元的预期正在重塑能源产业格局。如何打破电力与化工的行业壁垒，将‘电+分子’耦合系统打造为新型电力系统的‘必需拼图’，已成为行业破局的关键。”世界风能协会副主席、中国可再生能源学会风能专业委员会秘书长秦海岩对财联社记者表示。\n今年，随着国家层面明确促进电热、电氢协同联动，以及《电力装备行业",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c4977a4b7915",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "最高4.1%！美联储放鹰外资银行境内美元存款利率持续上行",
      "sourceUrl": "https://www.cls.cn/detail/2500239",
      "publishedAt": "2026-10-09T03:58:25.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（记者 彭科峰）美联储的一举一动，都对全球金融机构的行为产生影响。\n昨日中午，大众银行深圳分行发布公告称，该行最新美元定存产品最高利率达4.1%。据记者初步搜索发现，除大众银行之外，近期已经有多家银行机构在华推介高息美元定存，年利率也基本都在4%以上，年初同类产品利率多低于3%。\n在业内人士看来，在美联储近期鹰派趋势明显的背景下，美元利率呈现上行趋势。但对于普通投资者而言，仍需警",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d8d07bfcbe78",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 75,
      "rawScore": 75,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 16,
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
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 43,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_62f38f1eea61"
    },
    {
      "title": "【华尔街原声】分析人士：美债收益率并非可靠先行指标",
      "sourceUrl": "https://database.caixin.com/2026-10-09/102491489.html",
      "publishedAt": "2026-10-09T03:53:36.000Z",
      "fetchedAt": "2026-10-09T06:14:47.156Z",
      "timeConfidence": "source",
      "summary": "AI热潮不同于互联网泡沫，私人部门去杠杆化或推动美国利率长期下行",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_70ea145258c6",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 57,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 6,
        "recency": 15,
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
      "title": "SpaceX布局低频段频谱资源，挑战美国无线通信“三巨头”",
      "sourceUrl": "https://www.yicai.com/news/103387355.html",
      "publishedAt": "2026-10-09T03:49:53.000Z",
      "fetchedAt": "2026-10-09T06:15:07.000Z",
      "timeConfidence": "source",
      "summary": "大多数现有、未经改装的手机已经支持800 MHz频段，消费者无需购买专用卫星电话。当地时间周四，SpaceX在社交媒体上宣布已达成协议，将收购一组覆盖全美的低频段频谱资源，这将让星链有望成为美国主要的移动运营商。对此，SpaceX创始人埃隆·马斯克发文称：“意义重大”。\n\n\n\n此次交易涉及一组800MHz低频段频谱牌照。对于签订协议的财务条款，SpaceX暂未进行公开披露。据了解，相比于中高频段，",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_12220e9d0f3d",
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
      "title": "澳洲最大IPO遭遇重大挫折！英伟达支持的Firmus推迟上市",
      "sourceUrl": "https://www.cls.cn/detail/2500213",
      "publishedAt": "2026-10-09T03:34:22.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（编辑 马兰）英伟达支持的数据中心服务商Firmus，成为最新一家推迟IPO的科技公司，这可能给人工智能怀疑论者提供新的论据。\nFirmus在一份声明中表示，该公司现在将寻求从私人市场筹集资金，并考虑其他公开和私人市场选择。董事会认为，继续推进IPO不符合公司及其股东的最佳利益。\n据知情人士透露，就在该公司宣布收到的认购意向远超发行规模、估值有望达到300亿美元的消息几天后，一些",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_08ac44a50955",
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
          "score": 61,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "国家气候中心：超强厄尔尼诺已经形成",
      "sourceUrl": "https://www.cls.cn/detail/2500210",
      "publishedAt": "2026-10-09T03:19:03.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯，国家气候中心监测显示，2026年9月已正式形成一次超强厄尔尼诺事件。国家气候中心预计，未来三个月赤道中东太平洋海表温度将继续升高，在秋末冬初达到峰值，此次厄尔尼诺事件将成为有系统性监测以来最强厄尔尼诺事件。\n一、关键区海温持续攀升，9月达到超强标准\n2026年5月以来，赤道中东太平洋进入厄尔尼诺状态，5—9月关键区海温指数呈现快速增暖持续趋势。Niño3.4区海温指数三个月滑动",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e69c8686f1a2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
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
      "title": "大模型价格战：OpenAI和Anthropic掀桌了，国产模型面临最强压力？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783238",
      "publishedAt": "2026-10-09T03:11:50.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "Anthropic 发布 Claude Haiku 5.5，把 10 万 token 以内请求的输入价定为每百万 0.10 美元，正好和OpenAI两周前推出的 GPT-6 Luna 分毫不差，也比自己的上一代 Haiku 4.5 便宜九成。港股两家纯模型公司应声重挫，MiniMax 盘中跌幅扩大到 10%，智谱跌 6%。这不是一次普通的降价。它意味着过去两年由中国厂商焊死的那条\"性价比斩杀线\"，",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_750fb01cb11f",
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
          "score": 19,
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
      "title": "英国“暴利税”预期引发汇丰渣打遭抛售 机构称核心基本面韧性犹存",
      "sourceUrl": "https://www.cls.cn/detail/2500193",
      "publishedAt": "2026-10-09T03:11:20.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯(编辑 胡家荣)近期汇丰控股(00005.HK)与渣打集团(02888.HK)在二级市场上遭遇持续抛售。从9月初以来的表现来看，汇丰和渣打累计跌幅分别为11.43%、5.03%。\n根据近期报道，受地缘局势冲突推升政府借贷成本影响，英国财政面临严峻的赤字压力，财政大臣计划于10月28日正式公布新一届政府的首份财政预算案。在此背景下，市场对英国政府可能在预算案中向银行业开征“暴利税”",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e88b03c302ad",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 61,
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "含机构、文号或可核对数据",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 29,
          "reasons": [
            "命中关联主题 1 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "ASML：六个月前，我们以为增长停滞了，然后订单爆炸了",
      "sourceUrl": "https://wallstreetcn.com/charts/41959991",
      "publishedAt": "2026-10-09T03:04:47.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "ASML总裁兼CEO Christophe Fouquet表示六个月前，看2026、2027年时还认为市场健康但整体持平，去年7月甚至无法确认增长。\n\n过去六个月，AI机会突然确认，将带动两到五年基建投资，催生机器人、医疗、能源等芯片需求。\n\n行业从怀疑转为追赶积压订单，增长停滞变订单爆炸，AI基建上行周期或延续至2027、2028年甚至更久。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b16b26abd090",
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
      "title": "探明智能制造发展路径，《2026AI+高端制造产业应用图谱》即将亮相",
      "sourceUrl": "https://www.yicai.com/news/103387268.html",
      "publishedAt": "2026-10-09T02:58:13.000Z",
      "fetchedAt": "2026-10-09T06:15:07.000Z",
      "timeConfidence": "source",
      "summary": "在不断迭代的前沿技术与政策的双重赋能下，人工智能与高端制造融合持续加速。当前，产业智能化转型已成为培育新质生产力、推进新型工业化的核心引擎。\n\n2026中国国际工业博览会期间，《2026AI+高端制造产业应用图谱》（以下简称“图谱”）将作为重要产业成果，将于10月12日下午在“工业具身·智造无界”2026工业具身智能产业创新高峰论坛上正式发布。\n\n在更高效、更精准的亮眼数据背后，AI与高端制造的融",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1c7155063ded",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
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
      "noiseCaps": [
        "无规模的案例与合作PR"
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "4票同意、5票反对！硕世生物董事会否决控股股东换届提案",
      "sourceUrl": "https://www.cls.cn/detail/2500156",
      "publishedAt": "2026-10-09T02:45:44.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（记者 卢阿峰）控股股东亲自递函，要求召开临时股东会推进董事会换届，结果却被上市公司董事会否决。硕世生物（688399.SH）围绕控股权及公司治理的争议仍在延烧。\n10月9日，公司披露第三届董事会第十八次会议决议公告，控股股东绍兴闰康生物医药股权投资合伙企业（有限合伙）（以下简称“闰康生物”）提请召开临时股东会的议案，最终以4票同意、5票反对未获通过。反对董事认为，闰康生物相关文",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_704788bb2cc6",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 20,
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
      "noiseCaps": [
        "招聘与例行人事"
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
      "title": "伊朗敌对政策升级，警告将封锁“未授权”运输航线",
      "sourceUrl": "https://www.cls.cn/detail/2500138",
      "publishedAt": "2026-10-09T02:37:00.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（编辑 刘靖怡）据消息人士爆料，在伊朗发出最新警告，称将封锁未经其“授权”的航线后，油轮在试图通过霍尔木兹海峡时将面临更高的被袭击风险。\n上周，在这条关键水道上发生的油轮袭击事件数量达到了自美伊战争爆发以来的最大数字，试图通过的船只数量降至两个多月来的最低点。\n一位与德黑兰关系密切的地区高级官员透露，伊朗已警告各个国家及地区，任何开辟石油出口替代航线的尝试都将被视为敌对行为。\n该",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d770cde5c8a2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "滚动更新丨科创50指数跌幅扩大至4%，成份股中仅9只个股上涨",
      "sourceUrl": "https://www.yicai.com/news/103387190.html",
      "publishedAt": "2026-10-09T02:33:23.000Z",
      "fetchedAt": "2026-10-09T06:15:07.000Z",
      "timeConfidence": "source",
      "summary": "创业板指跌超3%，鼎泰高科、润泽科技、菲利华、香农芯创、铜冠铜箔、三环集团均下挫9%左右。10:31 科创50指数跌幅扩大至4%，现报1397.68点。成份股中仅9只个股上涨。\n\n10:27 创业板指跌超3%，鼎泰高科、润泽科技、菲利华、香农芯创、铜冠铜箔、三环集团均下挫9%左右。\n\n\n\n10:18 A股中际旭创盘中跌超5%，报743.67元；H股中际旭创跌超6%。\n\n10:12 上证指数跌幅扩大",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_efab3f953b1f",
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
          "score": 63,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 19,
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
      "title": "东鹏控股率先落地“5A质感”战略，推动瓷砖行业转向价值新生态",
      "sourceUrl": "https://www.yicai.com/news/103387182.html",
      "publishedAt": "2026-10-09T02:28:42.000Z",
      "fetchedAt": "2026-10-09T06:15:07.000Z",
      "timeConfidence": "source",
      "summary": "中国瓷砖行业正处于向智能化、绿色化、品质化转型升级的关键路口。面对房地产市场变化、人们住上“好房子”的诉求提升、行业竞争加剧、上游成本增加、跨界者涌入的复杂环境，行业亟需一套标准化的品质范式引领产业跃迁。近期，中国建陶行业头部企业东鹏控股发挥表率作用，正式发布“5A质感”战略。\n\n去年12月起实施的GB/T 45817-2025《消费品质量分级 陶瓷砖》，首次将陶瓷砖划分为AAAAA（行业前 5%",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_dd09087b9a64",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "【华尔街原声】华尔街知名空头转向：现在可以买入债券了",
      "sourceUrl": "https://database.caixin.com/2026-10-09/102491463.html",
      "publishedAt": "2026-10-09T02:28:08.000Z",
      "fetchedAt": "2026-10-09T06:14:47.156Z",
      "timeConfidence": "source",
      "summary": "美债收益率已回归合理水平，但低评级企业的再融资风险值得警惕",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b521e90ba43f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 38,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 0,
        "recency": 15,
        "actionability": 8
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
      "attentionScore": 38,
      "llmScores": [
        30,
        46
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
      "title": "新车放量叠加出海逻辑利好预期 小米和比亚迪领跑新能源汽车股",
      "sourceUrl": "https://www.cls.cn/detail/2500131",
      "publishedAt": "2026-10-09T02:26:21.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯(编辑 胡家荣)受新车放量催化与基本面预期修复支撑，部分港股新能源汽车股走强。\n截至发稿，小米集团-W(01810.HK)涨6.59%、比亚迪股份(01211.HK)涨3.16%、理想汽车-W(02015.HK)涨2.84%、零跑汽车(09863.HK)涨2.53%。\n\n消息方面，摩根大通在关于中国车企全球化趋势的深度观察中指出，中国汽车出海逻辑已迎来质的转变——由前期的“单纯追",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_69f5a6576335",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 53,
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
          "score": 20,
          "reasons": [
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
      "title": "距中期选举不到一个月：这些美股板块将成多空核心“博弈场”？",
      "sourceUrl": "https://www.cls.cn/detail/2500123",
      "publishedAt": "2026-10-09T02:23:34.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（编辑 潇湘）随着美国中期选举最后一个月的竞选活动进入白热化阶段，AI监管以及政府在医疗保健和国防方面的支出，正逐渐成为美股投资者的主要关注点。\n民调显示，民主党此番极有可能赢得众议院控制权，并在关键的参议院席位竞选中目前也占据优势。只要能够拿下国会任一院的控制权，民主党就将掌握相关委员会的主导权，从而有能力推动立法议程并发起调查。\n历史表明，无论选举结果如何，中期选举通常都不太",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c24c9213fcdc",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 73,
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
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
        "对展业/配置/合规有直接影响",
        "时效性高"
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
          "score": 38,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "专家释疑：大学毕业生如何享受创业减税优惠政策？",
      "sourceUrl": "https://www.yicai.com/news/103387128.html",
      "publishedAt": "2026-10-09T02:22:19.000Z",
      "fetchedAt": "2026-10-09T06:15:07.000Z",
      "timeConfidence": "source",
      "summary": "应届大学毕业生可享受每年最高2.4万元减税优惠政策今年选择自主创业的高校毕业生不少需要进行纳税申报，税务部门发现大学毕业生创业的税收优惠政策咨询量明显上升。为了支持大学生创业就业，国家出台了一项税收优惠政策。根据财政部等发布的《关于进一步支持重点群体创业就业有关税收政策的公告》（下称《公告》），自2023年1月1日至2027年12月31日，持《就业创业证》的毕业年度内高校毕业生从事个体经营的，自办",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d698c2fc8e73",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 50,
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
      "noiseCaps": [
        "疑似推广用语"
      ],
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "长鑫科技大跌7.79% 全球科技股同频调整",
      "sourceUrl": "https://www.caixin.com/2026-10-09/102491458.html",
      "publishedAt": "2026-10-09T02:17:45.000Z",
      "fetchedAt": "2026-10-09T06:14:47.156Z",
      "timeConfidence": "source",
      "summary": "前期股价积累较大涨幅，叠加标杆企业业绩不及预期、宏观环境扰动加剧，获利了结压力上升\n       　　【财新网】十一长假结束后的首个交易日，长鑫科技（688825.SH）创下上市以来最大跌幅。10月8日，长鑫科技收盘下跌7.79%，报50.52元/股，总市值降至约3.4万亿元，单日市值减少约2900亿元。\n　　东方财富Choice数据显示，10月8日长鑫科技主力资金净流出30.20亿元，在A股个股",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_57239d47837a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 66,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 60,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "债市公告精选|富力地产部分债券本息偿付延后；华夏控股下属子公司与多家公司签署重整投资协议",
      "sourceUrl": "https://www.cls.cn/detail/2500127",
      "publishedAt": "2026-10-09T02:16:35.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "【富力地产：三只公司债启用豁免期条款本息偿付日延至2026年11月17日】\n广州富力地产股份有限公司（简称“富力地产”）公告，因流动性紧张，对“H16富力5”、“H18富力8”、“H18富力1”三只公司债券启用30个工作日豁免期条款，将原定于2026年9月30日的本息偿付日延后至2026年11月17日；豁免期内不设罚息，按票面利率7.00%继续付息；三只债券余额合计91.48亿元，受托管理人为招商",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_24dc282a446a",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 65,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 8,
        "recency": 15,
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
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 70,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 48,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项"
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
      "title": "日元重回贬值通道、逼近160：日央行加息预期退潮？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782806",
      "publishedAt": "2026-10-09T02:15:52.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "近期日元重回贬值通道，美元兑日元重新回升至158附近，并重新逼近160这一关键政策敏感位。核心变化在于日本央行在9月会议及后续沟通中未能兑现市场此前定价的激进鹰派预期，10月连续加息概率显著降温，由此前超40%降至目前的10%左右。在10月1日日本央行公布9月会议意见摘要后，市场开始重估日本央行的加息节奏：尽管9月日本央行将利率上调25bp至1.25%，但7比2的投票结果显示理事会内部对进一步紧缩",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c40eb932210e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 14,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [
        "无口径收益宣传"
      ],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 29,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 86,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "江淮汽车盘中再次跌停，封单11万手",
      "sourceUrl": "https://wallstreetcn.com/articles/3783239",
      "publishedAt": "2026-10-09T02:04:56.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "江淮汽车盘中再次跌停，封单11万手。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f8c64173ff73",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 63,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
        "evidence": 5,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "quantity": 5
      },
      "noiseCaps": [
        "行情播报"
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
          "score": 46,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 33,
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
      "title": "美联储鹰风阵阵？“华尔街神算子”：未来六个月美通胀大概率降温！",
      "sourceUrl": "https://www.cls.cn/detail/2500098",
      "publishedAt": "2026-10-09T01:59:52.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（编辑 黄君芝）美国通胀一直牵动着市场神经，不过根据有“华尔街神算子”之称、美国投资机构Fundstrat Global Advisors联合创始人兼研究主管Tom Lee的说法，缓解可能即将到来。\n他在接受最新采访时说道：“我认为这种可能性非常高。通货膨胀将会下降。”\nLee认为，未来六个月对通货膨胀至关重要。\n不过Lee同时强调，如果物价真的下降，“这并非美联储加息的结果，而",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_10b9316eb6bb",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 26,
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
      "title": "A股三大股指早盘齐跌，创业板跌超1%失守3000点，算力硬件、生物医药集体下挫，恒科指涨超2%，科网股反弹",
      "sourceUrl": "https://wallstreetcn.com/articles/3783237",
      "publishedAt": "2026-10-09T01:55:21.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "10月9日，A股早盘低开，三大股指盘初集体下跌，深成指、创业板均跌超1%，创业板更是跌破3000点，为2025年11月以来新低，贵金属、油气、电池产业链等活跃，算力硬件、芯片半导体等科技股集体下挫，覆铜板、电路板等概念股陷入调整，生物医药板块大跌，CRO、创新药等集体承压。\n港股高开高走，恒指、恒科指盘初双双涨超1%，权重科网股集体反弹，美团、阿里、腾讯纷纷上涨，芯片股承压，华虹宏力、兆易创新、澜",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_aa9ec3af7c1e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 25,
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
          "score": 64,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "attentionScore": 25,
      "llmScores": [
        20,
        29
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "对美间接出口的规模测算与结构释义",
      "sourceUrl": "https://opinion.caixin.com/2026-10-09/102491442.html",
      "publishedAt": "2026-10-09T01:49:11.000Z",
      "fetchedAt": "2026-10-09T06:14:47.156Z",
      "timeConfidence": "source",
      "summary": "间接出口的快速增长背后，既有贸易路径的改变，更反映中国出口结构的转换，而不可以简单解释为对美国市场的进一步集中\n       　　随着全球供应链重构，中国产品经第三方经济体进入美国市场的现象受到关注，相关讨论也从东盟延伸至更广泛的贸易伙伴。TRACE（Trade Reconstruction And Connectivity Evaluation）框架可以分解相关产品内含的中国增加值，测算表明20",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8581e9392ee9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "OpenAI被曝年化收入不及预期，多只美股半导体股集体下挫",
      "sourceUrl": "https://www.yicai.com/news/103387067.html",
      "publishedAt": "2026-10-09T01:46:09.000Z",
      "fetchedAt": "2026-10-09T06:15:07.000Z",
      "timeConfidence": "source",
      "summary": "多只半导体股与OpenAI的合作或股权绑定关系颇深。当地时间10月8日，多只美股半导体股集体下挫。英伟达（NVDA.O）跌2.94%，市值一夜之间蒸发超1600亿美元。台积电（TSM.N）跌3.01%，AMD（AMD.O）跌3.9%，博通（AVGO.O）跌4.35%，英特尔（INTC.O）跌5.34%。当日纳斯达克指数跌超1%。\n\n\n\n部分半导体股回吐了此前几日的涨幅。消息面上，OpenAI的年化",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_343b43269cbc",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 35,
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
          "score": 64,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "attentionScore": 35,
      "llmScores": [
        33,
        36
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "OpenAI预计到2026年底年化收入将达到700亿美元",
      "sourceUrl": "https://wallstreetcn.com/livenews/3175954",
      "publishedAt": "2026-10-09T01:43:22.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "知情人士透露，受企业级业务增长的有力推动，ChatGPT母公司OpenAI预计到今年底其年化收入将达到或超过700亿美元。知情人士表示，截至9月底，该公司的年化收入约为500亿美元。（彭博）\n注：10月8日英国《金融时报》报道，OpenAI在最新投资者文件中显示，截至9月底的年化收入”接近500亿美元”，远低于上月末市场广泛引用的700亿美元预期。周四该报道发布后，科技股领跌标普500指数，纳斯达",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_99e4aab42a38",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
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
          "score": 64,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "A股四大指数集体低开，江淮汽车再度跌停",
      "sourceUrl": "https://www.yicai.com/news/103387026.html",
      "publishedAt": "2026-10-09T01:36:13.000Z",
      "fetchedAt": "2026-10-09T06:15:07.000Z",
      "timeConfidence": "source",
      "summary": "盘面上，光芯片、覆铜板、玻纤板块调整。10月9日，A股四大指数集体低开，上证指数跌0.21%，深成指跌0.51%，创业板指跌0.5%，科创综指跌0.77%。\n\n\n\n盘面上，光芯片、覆铜板、玻纤板块调整。海运、油气、黄金板块走强。市场逾3000股下跌。\n\n存储芯片、半导体板块低开，沃格光电、生益科技、深科技等多股跌幅居前。\n\n\n\n个股方面，江淮汽车开盘继续跌停。尊界通报刹车踏板支架断裂，称将进一步优",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2fa6c74e8339",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 20,
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
          "score": 86,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "attentionScore": 20,
      "llmScores": [
        15,
        25
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "今日开盘：两市双双低开 沪指跌幅0.21%",
      "sourceUrl": "https://finance.caixin.com/2026-10-09/102491433.html",
      "publishedAt": "2026-10-09T01:29:53.000Z",
      "fetchedAt": "2026-10-09T06:14:47.156Z",
      "timeConfidence": "source",
      "summary": "沪指开盘报3804.09点，跌幅0.21%；深成指报12557.02点，跌幅0.51%\n       财新网10月09日电: 沪指开盘报3804.09点，跌幅0.21%。\n深成指报12557.02点，跌幅0.51%；创业板指报3021.33点，跌幅0.50%；中小板指报7758.55点，跌幅0.60%。\n盘面上，交通运输领涨，美容护理、银行、纺织服饰、房地产、农林牧渔等板块涨幅居前，电子领跌，通信",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_50d5ca9dec4d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 8,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [
        "行情播报"
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
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "科技股承压拖累大盘，避险资金挖掘低位与高股息资产",
      "sourceUrl": "https://www.cls.cn/detail/2500072",
      "publishedAt": "2026-10-09T01:18:42.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "导读：①科技成长板块持续调整，长期资金抱团格局松动，何时企稳仍是后市关注的重点；②固态电池板块走强，受益于十五五新型电池产业规划，明确 2030 年全固态电池规模化应用目标，产业链具备政策红利；③银行股走出独立行情，多只标的日内创下历史新高，成为大盘重要支撑。\n昨日市场震荡调整，三大指数集体冲高回落，科创50跌近5%，全市场超3700只个股收绿，市场整体赚钱效应偏弱，短期场内资金避险情绪快速升温。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_41112b1757a2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 81,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
          ]
        },
        "privateFundSales": {
          "score": 33,
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
      "title": "油市供应又生变：飓风直逼墨西哥湾 近三分之二石油生产关停",
      "sourceUrl": "https://www.cls.cn/detail/2500058",
      "publishedAt": "2026-10-09T01:00:45.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（编辑 卞纯）在美国零售汽油和柴油价格上涨持续挤压消费者及企业利润的当下，油市供应面临新威胁：一场飓风正逼近墨西哥湾，迫使在该地区运营的油企减产，并撤离工作人员。\n眼下，飓风“伊萨亚斯”（Isaias）正在迅速增强，预计将于周五晚些时候或周六凌晨在墨西哥湾东北沿岸登陆。\n雪佛龙和壳牌等大型油企已开始关闭部分石油生产设施。雪佛龙表示，已启动墨西哥湾四座设施的停产关闭程序，并正在疏散",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b70231632d0a",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "美债死循环瓦解、看涨期权激增，转折点要来？",
      "sourceUrl": "https://www.cls.cn/detail/2500055",
      "publishedAt": "2026-10-09T01:00:11.000Z",
      "fetchedAt": "2026-10-09T06:15:42.240Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（编辑 潇湘）近来饱受抛售冲击的美国国债市场，终于有望迎来一些利好消息。\n前加剧本轮抛售潮的一系列市场技术性异象正逐渐式微，不少华尔街人士也开始预期美债收益率的上行势头将走向强弩之末。\n近几周美债收益率的急剧飙升其实已波及了其他市场，拉长了另外两类热门固收品种——抵押贷款支持证券和美国国债期货的存续期限。通常，债务工具的久期越长，投资者暴露于利率波动的风险敞口就越大。\n为此，不少",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a087d95f2636",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 66,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 9,
        "recency": 15,
        "actionability": 8
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
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 92,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 44,
          "reasons": [
            "命中关联主题 3 项"
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
      "title": "SpaceX、博通、甲骨文密集天量发债！美国债市“挤爆了”，“集中度越来越高，最终都受AI周期影响”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783234",
      "publishedAt": "2026-10-09T00:58:19.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "AI军备竞赛正在将美国债市推向临界点。SpaceX、博通、甲骨文在不到一周内合计寻求逾1500亿美元融资，叠加此前已在路演的博通-Anthropic600亿美元债务，AI生态系统的借贷狂潮已令公开债券市场趋于饱和，迫使越来越多的交易转入私募信贷和表外特殊目的载体（SPV）。\n\n这场融资浪潮正在重塑整个信用市场的风险定价。据彭博数据，今年超级大额科技债（单笔250亿美元以上）已达9笔，创历史纪录，科",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_304e207cbabe",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 19,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 63,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 59,
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
      "title": "【市场动态】美国CBO负责人质疑贝森特理论 称单靠经济增长难以解决高债务问题",
      "sourceUrl": "https://database.caixin.com/2026-10-09/102491423.html",
      "publishedAt": "2026-10-09T00:50:27.000Z",
      "fetchedAt": "2026-10-09T06:14:47.156Z",
      "timeConfidence": "source",
      "summary": "美国国会预算办公室(CBO)负责人Phillip Swagel警告称，把加快经济增长作为遏制联邦债务的解决方案恐怕效果不佳\n       　　【彭博10月9日电】美国国会预算办公室(CBO)负责人Phillip Swagel警告称，把加快经济增长作为遏制联邦债务的解决方案恐怕效果不佳，这个结论与美国财政部长贝森特大相径庭。\n　　Swagel周四在明尼阿波利斯的一场活动上表示：“经济增长会有所帮助，",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_236c7b91d365",
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
      "title": "1.5万颗“太空基站”，SpaceX想把全球移动网络搬上天？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783175",
      "publishedAt": "2026-10-09T00:49:34.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "FCC批准SpaceX部署最多1.5万颗手机直连卫星，意味着DTC正从应急补盲走向独立网络建设。SpaceX通过频谱、星座与Starship逐步补齐能力，目标指向全球移动通信的一层低轨基础网络。中国侧也已从星载基站、核心网验证推进到普通5G手机直连和批量组网。产业投资需区分SpaceX链与国产链：前者看海外订单和新增价值量，后者看千帆、星网及运营商体系何时从试验进入规模采购。最终验证仍落在单星容量",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a2e69d1fddeb",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "巨资拿下低频频段，SpaceX进军手机运营商，美国电信股全线重挫",
      "sourceUrl": "https://wallstreetcn.com/articles/3783231",
      "publishedAt": "2026-10-09T00:43:18.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "SpaceX宣布收购低频无线频谱，正式宣告进军美国移动运营商市场，此举令现有电信巨头股价承压，行业竞争格局面临深刻重塑。\nSpaceX周四宣布，已与投资公司Grain Management LLC达成协议，收购一批覆盖全美的800MHz低频段频谱许可证，并计划将其与旗下Starlink卫星网络整合，打造独立的移动运营商业务。SpaceX在官网声明中表示，这一频谱\"填补了Starlink Mobil",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_53cd1c3b5a7a",
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
          "score": 25,
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
      "title": "【市场动态】中国融资利率“洼地”吸引全球发行人 熊猫债资金出境规模创新高",
      "sourceUrl": "https://database.caixin.com/2026-10-09/102491420.html",
      "publishedAt": "2026-10-09T00:41:20.000Z",
      "fetchedAt": "2026-10-09T06:14:47.156Z",
      "timeConfidence": "source",
      "summary": "中国的低利率环境，为境外发行人提供了全球少有的低成本融资渠道\n    \n     \n     彭博汇编的数据显示，今年以来发行的熊猫债中，超过40%明确将募集所得汇出境外使用，涉及金额不超过1",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fa742bf48170",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 16,
        "evidence": 5,
        "recency": 15,
        "actionability": 8
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
          "score": 64,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "eventId": null
    },
    {
      "title": "法债是第一个牺牲品，接着是美债？全球感受“日本加息”的效果了吗？",
      "sourceUrl": "https://wallstreetcn.com/articles/3783232",
      "publishedAt": "2026-10-09T00:39:56.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "法债抛售愈演愈烈，10年期法国国债收益率一度逼近5%，为2002年以来最高，借贷成本已高于希腊和意大利。与此同时，美债收益率攀升至5.28%的数十年高位，即便通胀数据走软也未能阻断抛售。\n两场风暴，背后或许都有日本的影子。彭博专栏作家Gearoid Reidy在10月9日的文章中分析称：\n\n两年前，当日本踏上政策正常化之路时，人们问的是日本是否准备好迎接“有利率的世界”。也许我们本该问的是：世界是",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ea99b199d235",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 14,
        "recency": 15,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [
        "无口径收益宣传"
      ],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 29,
          "reasons": [
            "命中关联主题 1 项",
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
          "score": 20,
          "reasons": [
            "含可核对要素"
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
      "title": "特朗普“画不动”原油K线了",
      "sourceUrl": "https://wallstreetcn.com/articles/3783230",
      "publishedAt": "2026-10-09T00:24:15.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "原油市场对特朗普言论的敏感度正在系统性衰减。曾经一句威胁伊朗的推文就能让油价单日暴涨7%，如今同类表态却几乎激不起任何波澜。据彭博对价格走势的分析，随着美伊冲突持续拖延，特朗普的言论对全球原油市场的影响力已显著减弱。\n今年4月1日，特朗普在电视讲话中扬言将对伊朗发动打击，令其“回到石器时代”，油价随即在亚洲早盘飙升，最终收涨逾7%，突破每桶109美元。然而到了10月1日，特朗普再度警告伊朗\"签署停",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_009971dcd272",
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
      "title": "费城半导体 vs 韩股：谁错了？",
      "sourceUrl": "https://wallstreetcn.com/charts/41959990",
      "publishedAt": "2026-10-09T00:14:43.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "韩国股指Kospi近期破位下跌，其与美国费城半导体指数SOX出现较大的短期背离。\n\n尤其值得注意的是，投资者最近大量买入了SOX相关资产。\n\n美国芯片股“红的发烫”，韩国却丧失动能，谁错了？",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8687ff3e142a",
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
          "score": 37,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 15,
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
      "title": "没有App、14个人、免费用：Instinct如何撑起百亿美元估值",
      "sourceUrl": "https://wallstreetcn.com/articles/3783198",
      "publishedAt": "2026-10-09T00:14:08.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "作者&nbsp;| 林克、郑好\n2021年春天，在硅谷流行的语音社交平台Clubhouse邀请码在eBay上卖到上百美元。5年后，同一件事发生在名为Instinct的个人Agent身上。&nbsp;\n作为AI助理，Instinct只通过短信和电话替用户订酒店、改签航班、比价下单，它的邀请码同样在eBay上被炒到上百美元，每位用户只有5个邀请名额。&nbsp;\n硅谷对这种稀缺感的反应一如既往，投资人",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_316076f8a494",
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
          "score": 11,
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
      "title": "盘前必读丨美股半导体、存储板块重挫；多家A股公司三季报预增",
      "sourceUrl": "https://www.yicai.com/news/103386879.html",
      "publishedAt": "2026-10-09T00:07:49.000Z",
      "fetchedAt": "2026-10-09T06:15:07.000Z",
      "timeConfidence": "source",
      "summary": "机构认为，科技仍在寻底，能否企稳看三季报表现及美债拐点。【财经日历】\n\n美国10月一年期通胀率\n\n首尔证券交易所休市一日\n\n上证光伏科创领先指数正式发布\n\n\n\n►►中国人民银行发布关于人民币汇率的政策立场文件，首次全面、系统阐述人民币汇率的政策立场。文件指出，中国实施以市场供求为基础、参考一篮子货币进行调节、有管理的浮动汇率制度，坚持让市场在汇率形成中发挥决定性作用。文件强调，中国贸易发展根源于产",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6acfd3d89166",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "命中关联主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 33,
          "reasons": [
            "命中关联主题 2 项"
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
      "title": "人工智能时代，电信运营商是多了一条增长曲线，还是徒增了一轮资本开支？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782757",
      "publishedAt": "2026-10-09T00:05:19.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "2026年上半年，三大运营商表观利润普遍承压，但税制调整和成本确认节奏放大了同比波动。传统业务仍保持稳定，现金流和总资本开支约束支撑红利逻辑；AI已进入收入表，但算力投资增速明显快于相关收入。下一阶段的核心变量，是AI能否在不削弱DPS和自由现金流的前提下形成可持续ROIC。一、发生了什么？——利润表承压，红利底盘仍稳1. 表观利润下滑，可比经营并未同步恶化：2026年上半年，三大运营商的报表利润",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_09fc0f204dc9",
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
          "score": 35,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 22,
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
      "title": "国庆假期上海新房成交量同比翻倍增长，9月二手房成交量创6年新高",
      "sourceUrl": "https://wallstreetcn.com/livenews/3175918",
      "publishedAt": "2026-10-09T00:04:47.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "在“沪八条”政策及商品住房销售改革细则相继落地的多重作用下，上海楼市把“金九”的回暖态势延续到了国庆假期。\n根据中指研究院数据，9月，上海全市新建商品住宅成交117.9万平方米，同比增长22.1%。二手房市场同步保持活跃，当月二手房（含商业）累计网签23581套，同比上涨15.7%，创下近六年同期新高。自今年3月起，上海二手房成交量已连续第7个月站稳2.3万套以上，市场回暖势头直观可见。\n\n这一热",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4ed651776cf3",
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
      "title": "咖啡配卷饼？星巴克寻求收购Chipotle，若成功将成“餐饮业最大并购”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783227",
      "publishedAt": "2026-10-09T00:04:43.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "星巴克正在探索收购墨西哥卷饼连锁品牌Chipotle Mexican Grill的可能性，此举若成真，将成为餐饮行业有史以来规模最大的并购交易。\n据英国《金融时报》周四报道，知情人士透露，星巴克近几个月来已与顾问合作，就收购市值约410亿美元的Chipotle制定方案。消息披露后，星巴克股价盘中一度下跌6.7%，收盘跌幅收窄至0.4%；Chipotle股价则大涨6.2%。\n知情人士同时警告，如此体",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_38fcb9433ca9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 61,
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
      "title": "欧盟高官来华磋商，中方呼吁平等对话，对华施压无助缓解中欧经贸分歧",
      "sourceUrl": "https://wallstreetcn.com/articles/3783228",
      "publishedAt": "2026-10-09T00:04:41.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "“欧盟和中国展开关键贸易谈判”，法国国际广播电台等媒体8日这样报道欧盟委员会贸易和经济安全委员谢夫乔维奇的中国之行。当天，中国商务部部长王文涛在京会见谢夫乔维奇。欧洲舆论反复强调两点：欧盟对华贸易逆差已扩大至每天约10亿欧元，中国混合动力汽车在欧洲市场销量猛增，欧盟希望就这些问题与中方谈判。连日来，欧洲在对华经贸议题上既有热切期待，也有鼓动施压的声音。法国和德国5日向欧委会提交非正式文件，要求赋予",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_934f3131a7e4",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 48,
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
          "score": 27,
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
      "title": "美国预算赤字飙升至近2万亿美元，占GDP比例将超6%，高利率、减税加剧赤字恶化",
      "sourceUrl": "https://wallstreetcn.com/articles/3783229",
      "publishedAt": "2026-10-09T00:04:18.000Z",
      "fetchedAt": "2026-10-09T06:14:51.942Z",
      "timeConfidence": "source",
      "summary": "美国国会预算办公室（CBO）数据显示，截至9月30日的2026财年，美国联邦预算赤字升至1.993万亿美元，同比增长12%，为2021年以来最高水平。与此同时，联邦支出达7.4万亿美元，增长6%；财政收入为5.4万亿美元，仅增长3%。\n据《华尔街日报》最新报道，美国赤字占GDP的比例预计将超过6%，高于2025财年的5.8%。这一水平在历史上通常只出现在经济衰退或战争时期，而当前美国经济已处于扩张",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2afa81af5999",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 63,
      "rawScore": 63,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 14,
        "recency": 13,
        "actionability": 8
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
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
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
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 19,
          "reasons": [
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_b6b6148b7537"
    },
    {
      "title": "纳指、标普两连阴，OpenAI利空令芯片股重挫，原油大涨，特朗普称中期选举前不攻击伊朗",
      "sourceUrl": "https://www.yicai.com/news/103386858.html",
      "publishedAt": "2026-10-08T23:37:52.000Z",
      "fetchedAt": "2026-10-09T06:15:07.001Z",
      "timeConfidence": "source",
      "summary": "费城半导体指数跌超3.3%。*美股三大股指涨跌互现，道指微涨0.1%；\n\n*中长期美债收益率回落，10年期美债报5.22%；\n\n*百事可乐涨近4%，公司宣布将推进更多成本削减措施。\n\n周四美股涨跌互现，截至收盘，道琼斯工业平均指数上涨51.77点，涨幅0.1%，报51231.64点。纳斯达克指数下跌1.25%，报27193.34点；标普500指数下跌0.47%，报7765.36点。\n\n\n\n市场概述",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_df489b4da818",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 48,
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
          "score": 84,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
          ]
        },
        "privateFundSales": {
          "score": 27,
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
      "title": "Vistra股价今日为何下滑？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3600654",
      "publishedAt": "2026-10-08T18:35:08.000Z",
      "fetchedAt": "2026-10-08T18:55:53.451Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_b9deae4fe29e",
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
          "score": 11,
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
      "title": "星巴克与Chipotle潜在合并：重大机遇还是代价高昂的分心之举？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3600650",
      "publishedAt": "2026-10-08T18:21:46.000Z",
      "fetchedAt": "2026-10-08T18:55:53.451Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_8ed8d9daba03",
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
      "title": "Nvidia支持的数据中心公司Firmus Grid据报推迟澳大利亚IPO",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3600634",
      "publishedAt": "2026-10-08T17:37:11.000Z",
      "fetchedAt": "2026-10-08T18:55:53.451Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_5eb08cdf304f",
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
      "title": "Revolut首席执行官：更倾向于在美国进行主要上市",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3600628",
      "publishedAt": "2026-10-08T17:26:04.000Z",
      "fetchedAt": "2026-10-08T18:55:53.451Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_367e935c3466",
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
      "title": "英伟达承诺5年投入10亿美元助力美国“超级智能”，深度参与“创世纪计划”",
      "sourceUrl": "https://www.cls.cn/detail/2499917",
      "publishedAt": "2026-10-08T17:11:32.000Z",
      "fetchedAt": "2026-10-08T18:55:27.567Z",
      "timeConfidence": "source",
      "summary": "财联社10月9日讯（编辑 李莹）英伟达近日再度加码与美国政府的科研合作，承诺五年内投入10亿美元资源，深度参与特朗普政府力推的“创世纪计划”，量子计算、医疗健康和能源安全等领域将成为投入重点。\n据媒体报道，英伟达当地时间10月8日宣布，将在未来五年内提供价值10亿美元的资源，用于提升美国在量子计算、医疗健康和能源安全等关键领域的“超级智能”研发能力。\n英伟达在白宫于华盛顿举办的“科学：新黄金时代”",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2a369b13283f",
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
          "score": 19,
          "reasons": [
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 19,
          "reasons": [
            "含可核对要素"
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
      "title": "沃什将于下周五在IMF讲话",
      "sourceUrl": "https://wallstreetcn.com/livenews/3175758",
      "publishedAt": "2026-10-08T16:17:10.000Z",
      "fetchedAt": "2026-10-08T18:54:03.035Z",
      "timeConfidence": "source",
      "summary": "据国际货币基金组织（IMF）曼谷年会日程：美联储主席沃什将于当地时间10月16日在IMF发表讲话。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_20d6694dacc7",
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
          "score": 25,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 38,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "获博裕、IDG领投超5亿美元，估值破260亿的Manus如何接招Agent新战局？",
      "sourceUrl": "https://www.cls.cn/detail/2499905",
      "publishedAt": "2026-10-08T16:07:19.000Z",
      "fetchedAt": "2026-10-08T18:55:27.567Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月8日讯（记者 徐赐豪）距离2.0版本发布仅10天，Manus又公布了一个重磅消息。\nManus母公司蝴蝶效应今日（8日）通过其官方公众号宣布近日完成超过5亿美元新一轮融资，由博裕投资、IDG资本领投，老股东腾讯、红杉中国、真格基金继续加持。\n这也是Manus恢复独立运营后首次对外披露融资。\n就在9月29日，Manus推出2.0版本，同时上线了个人Agent产品Cue，还宣布正在",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cb81a91f3f39",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 73,
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
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
      "passesTierGate": true,
      "confidence": "medium",
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
          "score": 52,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 43,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
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
      "title": "纽约联储报告：若无特朗普关税，许多日常商品价格本应下降",
      "sourceUrl": "https://www.cls.cn/detail/2499890",
      "publishedAt": "2026-10-08T15:46:36.000Z",
      "fetchedAt": "2026-10-08T18:55:27.567Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（编辑 赵昊）纽约联储在最新的一份报告中表示，如果没有特朗普实施的关税政策，许多日常商品的价格本应在去年和今年年初就出现下降。\n纽约联储的一组研究人员在报告中写道，截至今年2月，受关税影响，67类商品的价格整体高出2.9个百分点。研究团队发现，如果没有这些关税，他们所研究商品的价格本应下降近1%。\n研究团队表示，平均关税每上升1个百分点，一年后消费品价格就会因此上涨约0.25%。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_35573692f3f5",
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
      "title": "壹快评｜高速充电难为黄金周添新“堵”，集中放假制度该如何完善",
      "sourceUrl": "https://www.yicai.com/news/103386783.html",
      "publishedAt": "2026-10-08T15:37:08.000Z",
      "fetchedAt": "2026-10-08T15:42:43.581Z",
      "timeConfidence": "source",
      "summary": "随着民众诉求升级和经济形态变化，“如何放假”的答案需要更新了。刚刚过去的十一黄金周，又交出一份飘红的消费数据。10月1日至6日，商务部重点监测的78个步行街（商圈）客流量、营业额同比分别增长2.5%、4.7%。但硬币的另一面，几乎每次黄金周都被吐槽的问题也再次发生。除了抢票、堵车、涨价、“看人头”等“传统节目”，今年又增加了一个高速充电难问题。虽然这个问题不是首次出现，但因为这次更加严重，并且是在",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9f77832ed59e",
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
      "title": "保时捷计划将顶级车型均价提升约 20%",
      "sourceUrl": "https://www.yicai.com/news/103386769.html",
      "publishedAt": "2026-10-08T15:35:50.000Z",
      "fetchedAt": "2026-10-08T15:42:43.581Z",
      "timeConfidence": "source",
      "summary": "保时捷当前的重点是降低成本。德国时间10月7日，保时捷发布了“Sportwagenschmiede 35”战略。\n\n“最终目标是进一步强化我们独特的跑车品牌——覆盖所有车型系列，并在利润率尤为丰厚的细分市场推出更多极具吸引力的新车型。该战略将分三个阶段为保时捷显著提升效率、生产力和盈利能力奠定基础。当前的重点是降低成本，增强公司的财务稳健性。”保时捷全球CEO骆明楷（Michael Leiters",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3da643e189b0",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "中文在线终止A股定增融资计划|速读公告",
      "sourceUrl": "https://www.cls.cn/detail/2499878",
      "publishedAt": "2026-10-08T15:34:17.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（记者 王彦琳）中文在线（300364.SZ）今日盘前发布公告，宣布终止发行H股股票。或受此消息影响，公司股价今日大跌12.75%。\n公司称，此次终止港交所上市是基于市场环境与公司自身发展规划的综合考量，此次终止H股上市，不会对公司经营活动和持续发展造成重大影响，不存在损害公司及全体股东特别是中小股东利益的情形。\n2025年12月，公司披露拟发行H股股票并申请在港交所主板挂牌上市",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2a0dee8c9362",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 24,
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
          "score": 85,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "eventId": "event_a3c5d0364922",
      "attentionScore": 24,
      "llmScores": [
        29,
        18
      ],
      "scoredBy": "llm"
    },
    {
      "title": "上市券商竞速“出海”：17家排队加码，跨境业务成业绩新引擎",
      "sourceUrl": "https://www.yicai.com/news/103386511.html",
      "publishedAt": "2026-10-08T15:15:31.000Z",
      "fetchedAt": "2026-10-08T15:42:43.581Z",
      "timeConfidence": "source",
      "summary": "在机构看来，跨境业务已成为券商继自营、财富管理之后的核心增长曲线。上市券商布局海外业务的节奏持续加快。\n\n近日，国联民生（601456.SH）公告，已收到中国证监会《关于国联民生证券股份有限公司向香港子公司增资有关意见的复函》，对其向全资子公司国联证券（香港）有限公司（下称“国联香港”）增资不超过20亿元无异议。本次增资事项尚需完成境外投资项目备案手续后方可实施。\n\n据第一财经梳理，2025年至今",
      "sourceName": "第一财经",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_debf822b7352",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 43,
      "rawScore": 75,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 21,
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
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 36,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 36,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 58,
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
        "官方监管"
      ],
      "eventId": null,
      "attentionScore": 43,
      "llmScores": [
        35,
        50
      ],
      "scoredBy": "llm"
    },
    {
      "title": "摩洛哥股市收低；截至收盘摩洛哥MASI自由流通指数下跌0.88%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3600514",
      "publishedAt": "2026-10-08T15:15:13.000Z",
      "fetchedAt": "2026-10-08T15:44:55.956Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_409c0e1df02c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "title": "电动汽车美冷欧热：美国前9月销量同比下降30.7%",
      "sourceUrl": "https://www.cls.cn/detail/2499857",
      "publishedAt": "2026-10-08T15:11:54.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（编辑 李莹）美国联邦电动汽车税收抵免已于去年9月底到期。尽管油价维持高位，今年至今美国电动汽车需求依旧疲软，消费者转向混动车与二手电动汽车；欧洲依托严格尾气排放法规、平价车型供给充足等因素，电动汽车市场渗透率持续攀升。\n据媒体当地时间10月8日报道，汽车数据研究机构Motor Intelligence的数据显示，今年前9个月，美国电动汽车销量同比下降30.7%，仅占汽车总销量的",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d287a23cea53",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 68,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 53,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "美股异动 | 传星巴克考虑收购 奇波雷墨西哥烧烤(CMG.US)股价一度飙升8.6%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3600497",
      "publishedAt": "2026-10-08T15:06:05.000Z",
      "fetchedAt": "2026-10-08T15:44:55.956Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_f3f4ef808a38",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 48,
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
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "美股异动 | 生物科技板块普跌 默沙东(MRK.US)跌逾2%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3600496",
      "publishedAt": "2026-10-08T15:06:04.000Z",
      "fetchedAt": "2026-10-08T15:44:55.956Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_db31ca2186d8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 48,
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
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "行云科技(300209.SZ)发预盈，预计前三季度归母净利润2.4亿元至2.9亿元，同比扭亏为盈",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3600493",
      "publishedAt": "2026-10-08T15:05:09.000Z",
      "fetchedAt": "2026-10-08T15:44:55.956Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_a3a42c24fd56",
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
      "eventId": "event_462c374e92e3"
    },
    {
      "title": "AI基建热潮外溢至银行业：华尔街六大行四季度或发债410亿美元",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3600491",
      "publishedAt": "2026-10-08T15:05:08.000Z",
      "fetchedAt": "2026-10-08T15:44:55.956Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_ad899d34be6c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 25,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "美国上周首申人数降至19.7万人，连续四周接近57年低位",
      "sourceUrl": "https://wallstreetcn.com/articles/3783213",
      "publishedAt": "2026-10-08T15:05:02.000Z",
      "fetchedAt": "2026-10-08T15:42:28.529Z",
      "timeConfidence": "source",
      "summary": "美国劳动力市场延续低失业金申请态势，但就业增长动能持续减弱，“低招聘、低裁员”的结构性特征愈发凸显。\n美国劳工部周四公布数据显示，截至10月3日当周，美国首次申请失业救济人数环比下降2000人，至季调后19.7万人，低于市场预期的20万人，并连续四周维持在57年低点附近。与此同时，上周五公布的9月非农就业仅增加2.9万人，远低于市场预期，显示招聘需求明显降温。\n这两组数据的背离，揭示出当前就业市场",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f46d782d3ed3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 19,
          "reasons": [
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "特朗普8月证券交易流水出炉：大手笔押中Meta智能体行情",
      "sourceUrl": "https://www.cls.cn/detail/2499863",
      "publishedAt": "2026-10-08T15:03:17.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（编辑 史正丞）当地时间周四一大早，美国政府伦理办公室挂出美国总统特朗普的8月证券交易报告。在8月的517笔交易中，不乏大手笔押中Meta智能体行情的绝妙布局，也有买入奈飞、麦当劳后被套牢的结果。\n\n由于信披文件仅要求披露交易金额的区间，因此外界只能大致了解每笔交易的规模。据统计，这517笔交易总金额在7430万美元至2.73亿美元之间，其中涉及买入方向的金额至少为4420万美元",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_46fbcb79bb8a",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 22,
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
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 37,
          "reasons": [
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
      "eventId": null,
      "attentionScore": 22,
      "llmScores": [
        28,
        15
      ],
      "scoredBy": "llm"
    },
    {
      "title": "美元升至18个月高位 欧洲财政风险成新一轮涨势推手",
      "sourceUrl": "https://www.cls.cn/detail/2499858",
      "publishedAt": "2026-10-08T15:02:50.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（编辑 夏军雄）美元近期升至18个月高位，最新一轮涨势受到欧洲政治不确定性及财政风险的推动，促使部分投资者更加坚定地押注美元进一步升值。\n分析人士指出，美国利率维持高位且可能继续上升、经济增长保持韧性，以及通胀风险持续存在，仍在为美元提供支撑。不过，欧洲面临的挑战正成为未来几个月影响美元走势的重要因素，其中最突出的是法国庞大的财政赤字，以及由此引发的市场压力可能进一步向意大利乃至",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a1a7fb37e523",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 58,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 8
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
      "title": "美国暂停多家科技公司参与一项移民计划，万斯：对微软需停多久就持续多久",
      "sourceUrl": "https://wallstreetcn.com/articles/3783215",
      "publishedAt": "2026-10-08T14:57:34.000Z",
      "fetchedAt": "2026-10-08T15:42:28.529Z",
      "timeConfidence": "source",
      "summary": "美国副总统万斯谈及获取基于雇用的绿卡，称：暂停来自微软的PERM Program。微软滥用签证制度，同时减少美国员工。不想损害微软，但必须雇用美国员工。谈及暂停微软永久劳工认证计划，万斯说“需要多久就持续多久”。希望Adobe等科技公司停止欺骗美国工人。美国就涉嫌J-1签证欺诈行为调查九所美国大学，其中包括哈佛、耶鲁、斯坦福、布朗。\n持续更新中风险提示及免责条款\n          \n      ",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_05c5ce6a7334",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
        "evidence": 6,
        "recency": 13,
        "actionability": 10
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
      "title": "周星驰旗下上市公司剥离内地影院资产 售价1港元",
      "sourceUrl": "https://www.caixin.com/2026-10-08/102491342.html",
      "publishedAt": "2026-10-08T14:49:51.000Z",
      "fetchedAt": "2026-10-08T15:42:23.923Z",
      "timeConfidence": "source",
      "summary": "比高集团旗下已经仅剩一家位于杭州的电影院，已于9月25日停业\n    \n     \n     2010年5月27日，香港，周星驰出席比高集团记者会。图：视觉中国\n    \n   \n       　　【财新网】据港交所公告，周星驰控股的上市公司比高集团（08220.HK）在10月6日以1港元售价卖出旗下一家公司，该公司主要在中国内地经营电影院。\n　　该交易是港股典型的以1港元为名义代价处置负债资产。",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9a98d020debe",
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
      "title": "英伟达承诺投入10亿美元，用于建设美国在包括量子计算、医疗保健和能源安全等领域的超级智能研发能力",
      "sourceUrl": "https://wallstreetcn.com/articles/3783214",
      "publishedAt": "2026-10-08T14:38:18.000Z",
      "fetchedAt": "2026-10-08T15:42:28.529Z",
      "timeConfidence": "source",
      "summary": "英伟达承诺投入10亿美元，用于建设美国在包括量子计算、医疗保健和能源安全等领域的超级智能研发能力。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0905e2d3e512",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
        "evidence": 11,
        "recency": 13,
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
          "score": 49,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 36,
          "reasons": [
            "命中关联主题 1 项",
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
      "title": "涉嫌走私含锗镜片 波长光电及其董事长等四人被起诉|速读公告",
      "sourceUrl": "https://www.cls.cn/detail/2499848",
      "publishedAt": "2026-10-08T14:24:22.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（记者 武超）自2023年8月中国对镓、锗相关物项实施出口管制以来，相关企业的出口合规问题持续受到关注。主营精密光学元件的波长光电（301421.SZ）及其董事长等四人，因涉嫌走私含锗镜片被提起公诉。\n公司今日晚间发布公告称，近日收到了上海市人民检察院第三分院出具的《起诉书》。经上海海关缉私局侦查终结，上海海关缉私局以公司及其董事长黄胜弟、时任公司国际业务部（南京）总监吴红霞及时",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_629a2044bbff",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 59,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
        "evidence": 3,
        "recency": 13,
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
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
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
          "score": 20,
          "reasons": [
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
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "价格暴降90%，多项测试超GPT-6 Luna！Anthropic最便宜模型来了",
      "sourceUrl": "https://wallstreetcn.com/articles/3783207",
      "publishedAt": "2026-10-08T13:55:21.000Z",
      "fetchedAt": "2026-10-08T15:42:28.529Z",
      "timeConfidence": "source",
      "summary": "同志们，Anthropic 又来卷价格了。这次轮到 Claude 家族里最便宜的 Haiku。\n10月7日，Anthropic 正式发布 Claude Haiku 5.5 ，号称自家迄今速度最快、能力最强、价格最低的小模型。\n最夸张的是价格，每百万输入Token 最低只要 0.1美元，相比上代直接降价90%。\n\n性能也没落下。按照 Anthropic 公布的测试结果，Haiku 5.5 在计算机操",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7fa682fd0083",
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
      "title": "Muse、Gemini智能体激战正酣 分析师却仍押注芯片股“躺赢”？",
      "sourceUrl": "https://www.cls.cn/detail/2499825",
      "publishedAt": "2026-10-08T13:50:17.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（编辑 赵昊）华尔街专业人士表示，尽管Meta旗下的Muse似乎已经在顶级AI智能体方面抢占了先机， 但对于股票投资者而言，芯片制造商仍然是押注这场竞赛的最佳方式。\nAI智能体能够处理预订、管理财务等多步骤任务。上月，Meta推出了个人AI助手Muse，迅速获得大量下载和好评，推动Meta股价在9月迎来强劲表现，当月上涨26.80%，创下近四年来的最佳单月表现。\n\n随后，Open",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d1749f891ba5",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 65,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
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
          "score": 60,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "花旗：中国GDP增速恐需“保4” 政策拐点可能已临近",
      "sourceUrl": "https://finance.caixin.com/2026-10-08/102491329.html",
      "publishedAt": "2026-10-08T13:42:33.000Z",
      "fetchedAt": "2026-10-08T15:42:23.923Z",
      "timeConfidence": "source",
      "summary": "该行预计，出口引擎放缓、房地产拖累加深、长期偏弱的市场信心引发加速去杠杆，2027年挑战加剧\n    \n     \n     花旗预计，全球AI资本开支增速将于2026 年见顶，达到106%，2027年预期回落至 56%；与此同时，对利率与价格敏感的非AI品类贸易正面临高利率环境以及能源不确定性，倘若全球经济韧性消退，外需将承压。图：视觉中国\n    \n   \n       　　【财新网】花旗证券",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_667e78e7b70a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 5,
        "recency": 13,
        "actionability": 8
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
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 23,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 76,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 32,
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
      "title": "避免激怒白宫，欧盟出招：拟通过对大型企业征税变相收科技税",
      "sourceUrl": "https://www.yicai.com/news/103386713.html",
      "publishedAt": "2026-10-08T13:38:28.000Z",
      "fetchedAt": "2026-10-08T15:42:43.581Z",
      "timeConfidence": "source",
      "summary": "欧盟考虑对所有大型企业征收广泛税款，以避免单独针对美国大型科技公司。要如何既不激怒白宫，又能实施数字服务税？面临巨大财政压力的欧盟打起了美国巨头的算盘。\n\n据报道，六位知情官员透露，在美方威胁要对实施数字服务税的国家进行报复后，欧盟委员会正在研究新的方法，以便在不单独针对苹果、Meta和谷歌等科技巨头的情况下，从中获取更多收入。\n\n具体而言，欧盟委员会考虑对所有大型企业征收广泛税款，以避免单独针对",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_70b09a98989b",
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
      "title": "张雪昔日东家浙阿波罗冲刺北交所，六成收入源自代工",
      "sourceUrl": "https://wallstreetcn.com/articles/3783212",
      "publishedAt": "2026-10-08T13:38:20.000Z",
      "fetchedAt": "2026-10-08T15:42:28.529Z",
      "timeConfidence": "source",
      "summary": "张雪机车在国际赛场夺冠走红后，其创始人张雪曾经的老东家走到了资本市场的聚光灯下。 近日，浙江阿波罗运动科技股份有限公司（下称“浙阿波罗”）向北交所发起上市冲刺。 浙阿波罗主要产品涵盖电动两轮车、燃油越野摩托车及全地形车，长期以面向欧美客户的ODM代工业务为主。 报告期内，浙阿波罗的业绩保持高速增长，2025年收入、归母净利润分别为5.88亿元、0.67亿元，分别同比增长了52.49%、55.21%",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_14a48593d11a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
        "evidence": 11,
        "recency": 13,
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
          "score": 49,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 36,
          "reasons": [
            "命中关联主题 1 项",
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
      "title": "达利欧警告：美债收益率高企 美股缓冲空间正在缩小",
      "sourceUrl": "https://www.cls.cn/detail/2499819",
      "publishedAt": "2026-10-08T13:38:11.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（编辑 夏军雄）当地时间周四（10月8日），知名投资者、桥水基金创始人瑞·达利欧（Ray Dalio）警告称，尽管企业盈利持续增长，但随着美债收益率上升，以及企业现金流可能走弱，美股正面临越来越大的压力。\n达利欧周四参加了于新加坡举行的米尔肯研究院亚洲峰会，他在接受媒体采访时表示，迄今为止，尽管全球债券市场持续遭遇抛售，但股市总体仍表现出较强韧性，原因在于企业盈利增长使股票相对于",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a37d225b50d5",
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
          "score": 56,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 2 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "【家庭财富】百年美股的聪与明：长期主义缘何知易行难",
      "sourceUrl": "https://database.caixin.com/2026-10-08/102491319.html",
      "publishedAt": "2026-10-08T13:36:54.000Z",
      "fetchedAt": "2026-10-08T15:42:23.923Z",
      "timeConfidence": "source",
      "summary": "对于今天的中国家庭而言，美股百年启示我们，复利是普通人财富最重要的朋友，但前提是你得陪它走完周期\n    \n     \n     从美联储加息至10月7日，美股三大指数中道琼斯工业指数下跌0.5%（2026年内涨幅6.5%）；标普500指数加息以来上涨3.3%（2026年内涨幅14%）；纳斯达克指数强劲上涨6.0%（2026年内涨幅18.5%）。图：视觉中国",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_023c548a3017",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 19,
          "reasons": [
            "含可核对要素"
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
      "title": "ETF管理人位次再次重排，背后是当下A股新格局",
      "sourceUrl": "https://www.cls.cn/detail/2499818",
      "publishedAt": "2026-10-08T13:31:46.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（记者 周晓雅）钱在进，规模在缩，在过去的9月ETF市场上演。\nWind数据显示，9月全市场ETF合计净流入1801.18亿元，但截至9月30日，ETF总规模为4.92万亿元，较8月末的4.95万亿元反而缩水260.12亿元。不过，在整个三季度，ETF规模依旧保持整体增长的势头，较二季度末的4.74万亿元增长了1876.84亿元。\n规模跟资金反向变动的背后，9月权益市场整体回调，",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b9eb50c5908e",
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
          "score": 85,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 37,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "深市两家电子元件“新军”营收增速双双超五成，如何看业绩突围？",
      "sourceUrl": "https://www.cls.cn/detail/2499816",
      "publishedAt": "2026-10-08T13:31:06.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月7日讯（记者 林坚）2026年政府工作报告将“加快高水平科技自立自强”列为今年十大工作任务之一。记者梳理深市新上市公司半年报时注意到，一批电子元件企业正以技术积累和研发投入回应这一命题。\n以广合科技与嘉立创为例，两家公司分别从高端印制电路板（PCB）与一站式电子元件智造服务两个维度，体现深市电子元件新上市公司的“新”成长特色。\n一是以长周期工艺积累换取高端算力PCB的稀缺供给；二是以数",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_82ee3d7abc84",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 53,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "优衣库欧美收入首次卖赢大中华区，不过内地开始企稳了",
      "sourceUrl": "https://wallstreetcn.com/articles/3783211",
      "publishedAt": "2026-10-08T13:30:02.000Z",
      "fetchedAt": "2026-10-08T15:42:28.529Z",
      "timeConfidence": "source",
      "summary": "优衣库母公司迅销集团再创历史新高，但支撑这份成绩单的全球市场格局已经发生变化。10月8日，迅销集团发布截至2026年8月底的全年业绩。期内集团收入同比增长16.6%至3.96万亿日元，营业利润增长约32%至7431亿日元，归母净利润增长25.3%至5425亿日元，连续第五年刷新业绩纪录。其中，优衣库海外业务收入增长26.2%至2.41万亿日元，事业利润增长44.1%至4398亿日元，成为集团业绩增",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f8d77bece06f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 58,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 34,
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
      "title": "让数千万人走出算法之困，新就业形态迎首部专属规章",
      "sourceUrl": "https://www.yicai.com/news/103386701.html",
      "publishedAt": "2026-10-08T13:29:34.000Z",
      "fetchedAt": "2026-10-08T15:42:43.581Z",
      "timeConfidence": "source",
      "summary": "停止派单、封禁账号等涉及劳动者重大利益的决定不得由算法自动作出，必须经人工审核。外卖骑手、网约车司机、网络主播等数千万新就业形态劳动者，迎来首部专属权益规章。\n\n10月8日，人力资源社会保障部（下称“人社部”）发布《新就业形态劳动者权益保障办法（征求意见稿）》，向社会公开征求意见。这是我国首部专门针对新就业形态劳动者权益保障的综合性部门规章，为平台用工立定新规，为算法划定边界，为劳动者权益提供制度",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e967928e5556",
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
        "regDocument": 6,
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
      "title": "特朗普“喊话”难再撼动油市，交易员转而紧盯实际供应流向",
      "sourceUrl": "https://wallstreetcn.com/articles/3783210",
      "publishedAt": "2026-10-08T13:29:25.000Z",
      "fetchedAt": "2026-10-08T15:42:28.529Z",
      "timeConfidence": "source",
      "summary": "美伊冲突持续七个月后，原油市场对特朗普言论的敏感度已大幅下降，交易员的注意力正从白宫声明转向实物货物流向等供应指标。\n随着冲突拖延，特朗普每一轮表态对油价的冲击力度持续衰减。10月1日，特朗普警告伊朗若不签署停火协议将\"不复存在\"，油价几乎纹丝不动——而4月1日他发出类似威胁时，布伦特原油单日涨幅一度超过7%，收于每桶109美元上方。这一对比鲜明地揭示出市场情绪的根本性转变。\n\n市场情绪的退潮正在",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_61cfd5a0ac51",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "港股公告精选｜迅销上一财年盈利同比增超两成 威胜控股子公司中标40亿元海外订单",
      "sourceUrl": "https://www.cls.cn/detail/2499785",
      "publishedAt": "2026-10-08T13:29:05.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（编辑 冯轶）财联社为您带来今日港股重要公告\nFAST RETAIL-DRS(06288.HK)：发布截至2026年8月31日止年度全年业绩，该集团取得收益39633.89亿日圆，同比增长16.6%；净利润5425.16亿日圆，同比增长25.3%。\n威胜控股(03393.HK)：附属公司惟远能源新增中标海外业务合约总金额超人民币40亿元，主要涵盖数据中心关键基础设施及相关解决方案",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6652e1f22db1",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 72,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "年化最高1.92%，部分外资银行开始跟进发售大额存单，原因何在？",
      "sourceUrl": "https://www.cls.cn/detail/2499811",
      "publishedAt": "2026-10-08T13:26:11.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（记者 彭科峰）中资银行你争我抢，部分外资银行也悄然跟进发行大额存单。\n今日晚间，永丰银行（中国）有限公司（下称永丰中国）发布公告称，该行面向全国发售三年期大额存单，年化利率1.92%。记者查询发现，汇丰银行（中国）有限公司也于10月份发行了多款人民币大额存单。在业内人士看来，此举或受到下半年国内银行重启大额存单、人民币持续升值等因素的影响。\n年化最高1.92%，部分外资银行跟进",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_10900ba22b43",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 34,
          "reasons": [
            "命中关联主题 2 项"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "特朗普8月豪掷数千万美元：买入Meta高达2500万美元，投资SpaceX债务",
      "sourceUrl": "https://wallstreetcn.com/articles/3783209",
      "publishedAt": "2026-10-08T13:23:23.000Z",
      "fetchedAt": "2026-10-08T15:42:28.529Z",
      "timeConfidence": "source",
      "summary": "特朗普在任期间持续进行大规模个人证券交易，最新披露再次暴露出其投资活动与政策行动之间存在值得关注的时间重合。\n10月8日，据CNBC对特朗普8月财务披露文件的分析，他当月共进行517笔证券交易，涉及买卖金额合计约7430万至2.733亿美元。虽然交易笔数较6月和7月明显下降，但投资组合依然十分活跃。\n其中最引人关注的是两笔交易：8月21日，特朗普买入500万至2500万美元的Meta股票，为当月最",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_76a93e51f9ed",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 69,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "新华传媒：股票交易严重异常波动 可能申请停牌核查",
      "sourceUrl": "https://wallstreetcn.com/livenews/3175652",
      "publishedAt": "2026-10-08T13:23:02.000Z",
      "fetchedAt": "2026-10-08T15:42:28.529Z",
      "timeConfidence": "source",
      "summary": "新华传媒公告，公司股票于2026年9月21日至2026年10月8日连续8个交易日涨停，连续8个交易日内日收盘价格涨幅偏离值累计达到117.06%，根据《上海证券交易所交易规则》的有关规定，属于股票交易严重异常波动的情形。公司基本面未发生重大变化，但近期公司股票价格严重脱离公司基本面，投资者参与交易可能面临较大风险，如公司股价进一步异常上涨，公司可能申请停牌核查。\n截至本公告日，本次重大资产重组涉及",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_62f9c30e609e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 69,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 34,
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
      "title": "AI落地瓶颈在人才？Anthropic斥资1亿美元推出“Claude前沿学院”",
      "sourceUrl": "https://www.cls.cn/detail/2499768",
      "publishedAt": "2026-10-08T13:22:48.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（编辑 李莹）Claude开发商Anthropic近日宣布推出培训认证项目，按照自家工程师的标准，为企业培养能够推动AI落地的部署人才，首批学员来自埃森哲、摩根士丹利等机构。\nAnthropic于当地时间10月2日宣布推出“Claude前沿学院”（Claude Frontier Academy），承诺投入1亿美元，目标是在2027年底前培养1万名“前沿部署工程师”（Frontie",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_910a1769cca6",
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
      "title": "新业态劳动者权益如何保障？首个部门规章征意见",
      "sourceUrl": "https://www.caixin.com/2026-10-08/102491309.html",
      "publishedAt": "2026-10-08T13:17:10.000Z",
      "fetchedAt": "2026-10-08T15:42:23.923Z",
      "timeConfidence": "source",
      "summary": "聚焦基本劳动权益、劳动规则、企业用工形式、纠纷解决、法律责任等方面展开；对“算法”予以专项规制，分类规范平台企业、平台用工合作企业责任\n    \n     \n     人社部称，总的考虑是，拓宽劳动法律制度保障范围，适应新就业形态劳动者就业方式，明确企业与劳动者之间的权利义务，合理确定企业用工责任，完善劳动标准体系，健全权益保障制度机制。图：视觉中国\n    \n   \n       　　【财新网】",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a2f49deea6ae",
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
      "title": "一财社论：针对不同企业主体采取更有效清欠措施",
      "sourceUrl": "https://www.yicai.com/news/103386667.html",
      "publishedAt": "2026-10-08T13:13:30.000Z",
      "fetchedAt": "2026-10-08T15:42:43.581Z",
      "timeConfidence": "source",
      "summary": "“合力破解”的关键在于完善多元化问题解决渠道。10月8日，最高人民法院与全国工商联联合发布了第二批民营经济领域纠纷多元化解决典型案例。这批典型案例体现出发挥调解在解决拖欠企业账款问题中的重要作用，引导民营企业通过自愿和合法原则进行调解。\n\n虽然这批案例着重于民营经济领域和调解两个要素，但确是通过完善多元化渠道建设促进拖欠企业账款问题解决的重要途径。\n\n我国高度重视拖欠企业账款问题。2024年10月",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_44c3d421156b",
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
      "title": "3.9%！WTO上调今年货物贸易增长预测，AI投资是助推",
      "sourceUrl": "https://www.yicai.com/news/103386648.html",
      "publishedAt": "2026-10-08T13:02:29.000Z",
      "fetchedAt": "2026-10-08T15:42:43.581Z",
      "timeConfidence": "source",
      "summary": "2026年上半年全球贸易表现出超预期的韧性。8日，世贸组织（WTO）发布最新一期《全球贸易展望与统计》报告，预计2026年货物贸易量将增长3.9%，大大高于3月份预测的1.9%，同时2027年的增幅将达4.1%。\n\nWTO解释道，尽管中东冲突造成了干扰，但2026年上半年全球贸易表现出超预期的韧性；这得益于供应链的适应能力以及人工智能（AI）领域的大力投资对货物贸易的强劲推动。\n\n不过，这种韧性并",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1505940923f2",
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
      "title": "世贸组织上调2026年全球货物贸易增长预期",
      "sourceUrl": "https://wallstreetcn.com/livenews/3175643",
      "publishedAt": "2026-10-08T13:01:42.000Z",
      "fetchedAt": "2026-10-08T15:42:28.530Z",
      "timeConfidence": "source",
      "summary": "世界贸易组织8日发布最新全球贸易展望报告说，由于供应链调整以及人工智能领域投资强劲，预计2026年全球货物贸易将增长3.9%，高于3月预测的1.9%，2027年有望增长4.1%。\n\n报告同时显示，由于中东战事对运输和国际旅行带来影响，2026年全球服务贸易预计增长3.3%，低于3月预测的4.8%，2027年将增长6.4%。\n世贸组织总干事伊维拉表示，面对冲击，一体化的世界经济和基于规则的贸易体系为",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e6bdcddc9353",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 51,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "passesTierGate": true,
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
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 36,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null,
      "attentionScore": 51,
      "llmScores": [
        52,
        50
      ],
      "scoredBy": "llm"
    },
    {
      "title": "AI进化速递丨OpenAI面向全球所有ChatGPT用户全面上线GPT-6",
      "sourceUrl": "https://www.yicai.com/news/103386658.html",
      "publishedAt": "2026-10-08T13:00:07.000Z",
      "fetchedAt": "2026-10-08T15:42:43.581Z",
      "timeConfidence": "source",
      "summary": "AI进化速递丨OpenAI面向全球所有ChatGPT用户全面上线GPT-6①OpenAI面向全球所有ChatGPT用户全面上线GPT-6；②厘清智能完成数亿元融资，蚂蚁集团连续两轮加码；③博通计划为OpenAI定制芯片项目融资逾500亿美元；④优必选与一汽-大众达成战略合作。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1d66dfced2e9",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "高盛高层将迎巨额特别奖金，总额料超5亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4017178448564357",
      "publishedAt": "2026-10-08T12:57:04.000Z",
      "fetchedAt": "2026-10-08T15:43:26.793Z",
      "timeConfidence": "source",
      "summary": "高盛集团最高层管理人员即将获得一笔特别奖金，其规模将跻身该公司历来最大笔此类奖励之列。根据文件以及知情人士透露，约20名高管有望获得一批将在本月晚些时候最终确定的股权奖励，按当前股价计算，总价值超过5亿美元。首席执行官苏德巍（David Solomon）有望获得其中最大一份，价值超过1亿美元。其他受益者包括被视为其潜在接班人的总裁John Waldron，以及高盛最重要业务线的负责人Ashok V",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a1832e2b6176",
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
      "title": "动力煤重回千元！最差的盈利环境，为什么可能对应火电最好的拐点？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782628",
      "publishedAt": "2026-10-08T12:56:04.000Z",
      "fetchedAt": "2026-10-08T15:42:28.530Z",
      "timeConfidence": "source",
      "summary": "过去几年，火电研究主要围绕煤价、电价和利用小时展开：煤价决定燃料成本，电价决定度电收入，利用小时决定固定资产的利用效率。进入2026年，这套框架仍然有效，但已经不足以解释行业变化。今年火电同时承受年度长协电价下降、动力煤价格上涨以及新能源出力增加带来的利用小时压力，二季度盈利明显承压；与此同时，多数企业仍保持正利润，广东、江苏月度和现货电价持续高于年度长协，容量电价、现货交易、资本开支回落也在改变",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8520f23376f4",
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
          "score": 35,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 13,
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
      "title": "东岳硅材：预计前三季度归母净利润为5.47亿元-5.67亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4017227933700229",
      "publishedAt": "2026-10-08T12:55:34.000Z",
      "fetchedAt": "2026-10-08T15:43:26.793Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，东岳硅材公告，预计前三季度归母净利润为5.47亿元-5.67亿元。2026年前三季度，受市场环境及行业供需格局改善影响，公司主要产品价格上涨。原材料方面，工业硅采购价格同比下降，甲醇、一氯甲烷价格同比上涨，整体单位生产成本有所下降，综合毛利率提升。2025年第三季度受“7・20”火灾事故影响，公司当期亏损3933.74万元，使得前三季度归母净利润为285.67万元，本期利润指标与上年同",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b55da487804d",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 16,
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
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 30,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 65,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "selectedForFeatured": true,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "中文在线：终止2026年度向特定对象发行A股股票事项",
      "sourceUrl": "https://www.36kr.com/newsflashes/4017170596909186",
      "publishedAt": "2026-10-08T12:53:58.000Z",
      "fetchedAt": "2026-10-08T15:43:26.793Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，中文在线公告，公司于2026年10月8日召开董事会审议通过议案，同意终止2026年度向特定对象发行A股股票事项。截至公告披露日，公司尚未召开股东会审议相关议案，亦未向深交所提交申请文件。公司表示，终止原因为综合考量目前市场环境等多种因素，该事项不会对日常生产经营造成重大不利影响。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e3822054ff89",
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
          "score": 82,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
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
        "观点",
        "快讯"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "多国主权债券继续“啼血” 谷歌、Wolfspeed异动拉涨 | 今夜看点",
      "sourceUrl": "https://www.cls.cn/detail/2499776",
      "publishedAt": "2026-10-08T12:52:54.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（编辑 史正丞）面对油价拉升和多国国债收益率持续走高的压力，即将开盘的美股市场出现承压走弱的迹象。\n截至发稿，纳斯达克100指数期货（2612合约）跌0.67%，标普500指数期货跌0.42%，道指期货跌0.71%。纳指本周前两天曾连续刷新历史新高，标普500指数也在周二首次收盘站上7800点。\n\n（纳指日线图，来源：TradingView）\n多只热门题材股盘前走弱。截至发稿，周",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e1126a4aa03e",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 37,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
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
      "title": "“去宁德化”言易行难，摩根大通：技术差距收窄不等于竞争优势消失，宁德仍是首选",
      "sourceUrl": "https://wallstreetcn.com/articles/3783205",
      "publishedAt": "2026-10-08T12:52:37.000Z",
      "fetchedAt": "2026-10-08T15:42:28.530Z",
      "timeConfidence": "source",
      "summary": "宁德时代股价在9月遭遇\"去宁德化\"交易重创，但摩根大通发布的一份长达60页的深度研究报告认为，市场对这一叙事存在严重误判。报告指出，投资者过度聚焦于技术差距收窄，却低估了规模、执行力、质量、消费者信任与财务韧性的战略价值——而这些恰恰是宁德时代结构性领先的核心所在。\n据摩根大通报告，宁德时代A/H股9月单月下跌19%，同期二线供应商Sunwoda大涨28%、Gotion上涨11%、CALB上涨2%",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a609e266ee0a",
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
      "title": "热门中概股美股盘前多数下跌，爱奇艺跌超2%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4017224310198407",
      "publishedAt": "2026-10-08T12:51:53.000Z",
      "fetchedAt": "2026-10-08T15:43:26.793Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，热门中概股美股盘前多数下跌，截至发稿，爱奇艺跌超2%，百度、蔚来跌超1%，京东跌0.76%，哔哩哔哩跌0.67%，拼多多跌0.52%，小鹏集团跌0.2%，阿里巴巴涨0.85%，理想汽车涨0.45%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_92f1b12fbb1e",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "noiseCaps": [
        "行情播报"
      ],
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
      "eventId": null
    },
    {
      "title": "美国上周首次申请失业救济人数小幅下降至19.7万",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3600180",
      "publishedAt": "2026-10-08T12:50:00.000Z",
      "fetchedAt": "2026-10-08T15:44:56.031Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_4a0581c5a11d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 48,
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "三季度债券承销放榜！前五家机构市占率超3成，中信证券单季承销5755亿稳坐头把交椅",
      "sourceUrl": "https://www.cls.cn/detail/2499588",
      "publishedAt": "2026-10-08T12:48:08.000Z",
      "fetchedAt": "2026-10-08T15:43:26.406Z",
      "timeConfidence": "source",
      "summary": "财联社10月8日讯（编辑 李响）2026年前三季度债券承销\"季考\"成绩单近日出炉。\n财联社据Wind数据统计，2026年三季度全市场债券承销总规模约6.70万亿元（注：地方债均摊，国债承销排名通常由财政部公布，不在Wind统计口径范围内，下同），行业头部集中态势进一步强化。中信证券以5755.46亿元承销额、8.59%的市场份额蝉联全市场榜首，国泰海通证券、中信建投证券、中金公司、华泰证券分列二至",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6580da63b57c",
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
          "score": 72,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 46,
          "reasons": [
            "命中关联主题 3 项",
            "含可核对要素"
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
      "title": "沃达丰上调英国业务部门成本节约目标",
      "sourceUrl": "https://www.36kr.com/newsflashes/4017174014463881",
      "publishedAt": "2026-10-08T12:47:32.000Z",
      "fetchedAt": "2026-10-08T15:43:26.793Z",
      "timeConfidence": "source",
      "summary": "这家英国电信集团周四公布，目前预计，在截至2032年3月的财年，VodafoneThree每年可实现10亿英镑（折合13.2亿美元）的成本节约；此前设定的目标是到2030财年节约7亿英镑。沃达丰同时表示，2025财年至2032财年期间，该部门经调整的租赁后息税折旧摊销前利润（电信行业核心盈利指标），将实现每年中高个位数百分比的增长。集团还提出目标：以2025财年为基准，到2032财年，将Vodaf",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5f57352ea750",
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
          "score": 41,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 19,
          "reasons": [
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
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 8,
        "evidence": 8,
        "recency": 10,
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
          "score": 68,
          "reasons": [
            "命中保险运营核心主题 2 项",
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 59,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": true,
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
      "score": 72,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 6,
        "recency": 10,
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
          "score": 85,
          "reasons": [
            "命中保险运营核心主题 3 项",
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
          "score": 28,
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
      "attentionScore": 69,
      "llmScores": [
        65,
        73
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
      "score": 69,
      "rawScore": 69,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 0,
        "recency": 10,
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
          "score": 63,
          "reasons": [
            "命中保险运营核心主题 2 项",
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
      "score": 69,
      "rawScore": 69,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 3,
        "recency": 10,
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
          "score": 39,
          "reasons": [
            "命中保险运营核心主题 1 项",
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
      "score": 79,
      "rawScore": 79,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 8,
        "recency": 10,
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
          "score": 90,
          "reasons": [
            "命中保险运营核心主题 3 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 46,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 33,
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
      "score": 36,
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
      "passesTierGate": false,
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
      "attentionScore": 36,
      "llmScores": [
        14,
        58
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
      "insurance": 55,
      "privateFundSales": 7,
      "marketEducation": 88
    },
    "featured": 24,
    "gate": {
      "passed": 22,
      "total": 150,
      "byTier": {
        "S2": {
          "total": 84,
          "passed": 14
        },
        "S3": {
          "total": 65,
          "passed": 8
        },
        "S0": {
          "total": 1,
          "passed": 0
        }
      }
    }
  },
  "sections": {
    "regulatory": [
      "news_debf822b7352",
      "news_986ca26f7b13"
    ],
    "products": [
      "news_395ab1ad7783"
    ],
    "industry": [
      "news_14db8fd17684",
      "news_ba5ada35561a",
      "news_7a90d4cafe4b",
      "news_557b03f36eb3",
      "news_f3a7d1fa1ea1",
      "news_6c1bf89b3c38",
      "news_54ccc5070f56",
      "news_337581ccc97f",
      "news_78689efa326d",
      "news_89abea5a1473"
    ],
    "research": [
      "news_806edb4e8b95",
      "news_50205cde77f2",
      "news_435c3d7896e1",
      "news_dfd932fb5d96",
      "news_fa376e493170",
      "news_bb9af5db3e02",
      "news_abf2d0a5bbbc",
      "news_95114d23eb6b",
      "news_547933529eef",
      "news_c4977a4b7915"
    ],
    "insights": [
      "news_ef1c4497f1b9",
      "news_4faaf3dc4ba1",
      "news_d57141c563c5",
      "news_af99ecae9c2f",
      "news_6e10f0ddc667",
      "news_9a7e7dc8bf80",
      "news_191cfb794341",
      "news_da04a3d44969",
      "news_80ea977fb887",
      "news_5019f8261d3a"
    ]
  },
  "flashes": [
    {
      "id": "news_14db8fd17684",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_ef1c4497f1b9",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_4faaf3dc4ba1",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_806edb4e8b95",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_d57141c563c5",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_ba5ada35561a",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_7a90d4cafe4b",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_af99ecae9c2f",
      "dotClass": "flash-dot-blue"
    }
  ],
  "keywordIndex": {
    "保险": [
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
      "news_5c5f98083245"
    ],
    "保额": [
      "news_b88af30fc3f3",
      "news_5c5f98083245"
    ],
    "保单": [
      "news_90694c744974",
      "news_b88af30fc3f3"
    ],
    "保险公司": [
      "news_b8359ae20a15",
      "news_7b45a87acab6",
      "news_5c5f98083245"
    ],
    "保险产品": [
      "news_90694c744974"
    ],
    "保险销售": [
      "news_7b45a87acab6"
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
      "news_14db8fd17684",
      "news_90694c744974"
    ],
    "医疗险": [
      "news_90694c744974",
      "news_9f3b623176ea"
    ],
    "银行": [
      "news_50205cde77f2",
      "news_78689efa326d",
      "news_d8d07bfcbe78",
      "news_e88b03c302ad",
      "news_50d5ca9dec4d",
      "news_41112b1757a2",
      "news_6acfd3d89166",
      "news_ad899d34be6c",
      "news_10900ba22b43"
    ],
    "央行": [
      "news_78689efa326d",
      "news_c40eb932210e"
    ],
    "农商行": [
      "news_50205cde77f2"
    ],
    "村镇银行": [
      "news_50205cde77f2"
    ],
    "利率": [
      "news_d5456b738dd3",
      "news_d8d07bfcbe78",
      "news_70ea145258c6",
      "news_24dc282a446a",
      "news_c40eb932210e",
      "news_a087d95f2636",
      "news_fa742bf48170",
      "news_ea99b199d235",
      "news_2afa81af5999",
      "news_a1a7fb37e523",
      "news_667e78e7b70a",
      "news_10900ba22b43",
      "news_b55da487804d",
      "news_b8359ae20a15"
    ],
    "存款利率": [
      "news_d8d07bfcbe78"
    ],
    "加息": [
      "news_c40eb932210e",
      "news_10b9316eb6bb",
      "news_ea99b199d235",
      "news_023c548a3017"
    ],
    "流动性": [
      "news_24dc282a446a"
    ],
    "存款": [
      "news_d8d07bfcbe78"
    ],
    "大额存单": [
      "news_10900ba22b43"
    ],
    "理财": [
      "news_d1749f891ba5"
    ],
    "破净": [
      "news_bb9af5db3e02"
    ],
    "股票": [
      "news_2a0dee8c9362",
      "news_d1749f891ba5",
      "news_a37d225b50d5",
      "news_76a93e51f9ed",
      "news_62f9c30e609e",
      "news_e3822054ff89"
    ],
    "A股": [
      "news_ef1c4497f1b9",
      "news_806edb4e8b95",
      "news_ba5ada35561a",
      "news_fa376e493170",
      "news_bb9af5db3e02",
      "news_efab3f953b1f",
      "news_57239d47837a",
      "news_aa9ec3af7c1e",
      "news_2fa6c74e8339",
      "news_6acfd3d89166",
      "news_b9deae4fe29e",
      "news_2a0dee8c9362",
      "news_d1749f891ba5",
      "news_b9eb50c5908e",
      "news_76a93e51f9ed",
      "news_e3822054ff89"
    ],
    "港股": [
      "news_fa376e493170",
      "news_750fb01cb11f",
      "news_69f5a6576335",
      "news_aa9ec3af7c1e",
      "news_9a98d020debe",
      "news_6652e1f22db1"
    ],
    "美股": [
      "news_c24c9213fcdc",
      "news_343b43269cbc",
      "news_6acfd3d89166",
      "news_df489b4da818",
      "news_f3f4ef808a38",
      "news_db31ca2186d8",
      "news_a37d225b50d5",
      "news_023c548a3017",
      "news_e1126a4aa03e",
      "news_92f1b12fbb1e"
    ],
    "大盘": [
      "news_41112b1757a2"
    ],
    "指数": [
      "news_ef1c4497f1b9",
      "news_806edb4e8b95",
      "news_ba5ada35561a",
      "news_54ccc5070f56",
      "news_e69c8686f1a2",
      "news_efab3f953b1f",
      "news_343b43269cbc",
      "news_99e4aab42a38",
      "news_2fa6c74e8339",
      "news_41112b1757a2",
      "news_8687ff3e142a",
      "news_6acfd3d89166",
      "news_df489b4da818",
      "news_409c0e1df02c",
      "news_023c548a3017",
      "news_e1126a4aa03e"
    ],
    "沪深300": [
      "news_ec31c569593a"
    ],
    "中证500": [
      "news_ec31c569593a"
    ],
    "中证1000": [
      "news_ec31c569593a"
    ],
    "ETF": [
      "news_ec31c569593a",
      "news_b9eb50c5908e"
    ],
    "对冲基金": [
      "news_e8b408c4dae5"
    ],
    "债券": [
      "news_d5456b738dd3",
      "news_b521e90ba43f",
      "news_24dc282a446a",
      "news_304e207cbabe",
      "news_a37d225b50d5",
      "news_e1126a4aa03e",
      "news_6580da63b57c",
      "news_b8359ae20a15"
    ],
    "国债": [
      "news_e8b408c4dae5",
      "news_a087d95f2636",
      "news_304e207cbabe",
      "news_ea99b199d235",
      "news_e1126a4aa03e",
      "news_6580da63b57c"
    ],
    "公司债": [
      "news_24dc282a446a"
    ],
    "地方债": [
      "news_6580da63b57c"
    ],
    "期货": [
      "news_a087d95f2636",
      "news_e1126a4aa03e"
    ],
    "期权": [
      "news_a087d95f2636"
    ],
    "IPO": [
      "news_557b03f36eb3",
      "news_6c1bf89b3c38",
      "news_fa376e493170",
      "news_08ac44a50955",
      "news_38fcb9433ca9",
      "news_8ed8d9daba03",
      "news_5eb08cdf304f"
    ],
    "上市": [
      "news_557b03f36eb3",
      "news_435c3d7896e1",
      "news_fa376e493170",
      "news_abf2d0a5bbbc",
      "news_08ac44a50955",
      "news_704788bb2cc6",
      "news_57239d47837a",
      "news_367e935c3466",
      "news_2a0dee8c9362",
      "news_debf822b7352",
      "news_9a98d020debe",
      "news_14a48593d11a",
      "news_82ee3d7abc84"
    ],
    "定增": [
      "news_f3a7d1fa1ea1",
      "news_2a0dee8c9362"
    ],
    "回购": [
      "news_dfd932fb5d96"
    ],
    "券商": [
      "news_dfd932fb5d96",
      "news_bb9af5db3e02",
      "news_debf822b7352"
    ],
    "自营": [
      "news_debf822b7352"
    ],
    "经纪": [
      "news_5c5f98083245",
      "news_9f3b623176ea"
    ],
    "投资者": [
      "news_89abea5a1473",
      "news_6a0eabe1426e",
      "news_395ab1ad7783",
      "news_d8d07bfcbe78",
      "news_c24c9213fcdc",
      "news_99e4aab42a38",
      "news_a087d95f2636",
      "news_8687ff3e142a",
      "news_a1a7fb37e523",
      "news_d1749f891ba5",
      "news_a37d225b50d5",
      "news_62f9c30e609e",
      "news_a609e266ee0a"
    ],
    "机构": [
      "news_50205cde77f2",
      "news_da04a3d44969",
      "news_435c3d7896e1",
      "news_ec31c569593a",
      "news_d8d07bfcbe78",
      "news_e88b03c302ad",
      "news_10b9316eb6bb",
      "news_6acfd3d89166",
      "news_debf822b7352",
      "news_d287a23cea53",
      "news_910a1769cca6",
      "news_6580da63b57c"
    ],
    "监管": [
      "news_af99ecae9c2f",
      "news_c24c9213fcdc"
    ],
    "证监会": [
      "news_debf822b7352",
      "news_986ca26f7b13"
    ],
    "深交所": [
      "news_e3822054ff89"
    ],
    "北交所": [
      "news_14a48593d11a"
    ],
    "港交所": [
      "news_2a0dee8c9362",
      "news_9a98d020debe"
    ],
    "合规": [
      "news_629a2044bbff"
    ],
    "通报": [
      "news_2fa6c74e8339",
      "news_a609e266ee0a"
    ],
    "条款": [
      "news_12220e9d0f3d",
      "news_24dc282a446a",
      "news_f8c64173ff73",
      "news_05c5ce6a7334",
      "news_0905e2d3e512",
      "news_90694c744974",
      "news_5c5f98083245"
    ],
    "办法": [
      "news_435c3d7896e1",
      "news_e967928e5556"
    ],
    "意见": [
      "news_7a90d4cafe4b",
      "news_435c3d7896e1",
      "news_c40eb932210e",
      "news_f8c64173ff73",
      "news_debf822b7352",
      "news_0905e2d3e512",
      "news_e967928e5556",
      "news_a2f49deea6ae"
    ],
    "规定": [
      "news_62f9c30e609e",
      "news_986ca26f7b13"
    ],
    "条例": [
      "news_1d306a1ce4f8"
    ],
    "法规": [
      "news_d287a23cea53"
    ],
    "解读": [
      "news_90694c744974",
      "news_7b45a87acab6",
      "news_5c5f98083245"
    ],
    "牌照": [
      "news_12220e9d0f3d",
      "news_5c5f98083245"
    ],
    "资质": [
      "news_b5cc2b260b51"
    ],
    "经济": [
      "news_f3a7d1fa1ea1",
      "news_9a7e7dc8bf80",
      "news_da04a3d44969",
      "news_547933529eef",
      "news_8581e9392ee9",
      "news_236c7b91d365",
      "news_934f3131a7e4",
      "news_2afa81af5999",
      "news_9f77832ed59e",
      "news_a1a7fb37e523",
      "news_667e78e7b70a",
      "news_44c3d421156b",
      "news_e6bdcddc9353",
      "news_b88af30fc3f3"
    ],
    "GDP": [
      "news_2afa81af5999",
      "news_667e78e7b70a"
    ],
    "信贷": [
      "news_304e207cbabe"
    ],
    "汇率": [
      "news_78689efa326d",
      "news_6acfd3d89166"
    ],
    "人民币": [
      "news_4faaf3dc4ba1",
      "news_6e10f0ddc667",
      "news_78689efa326d",
      "news_5019f8261d3a",
      "news_6acfd3d89166",
      "news_6652e1f22db1",
      "news_10900ba22b43"
    ],
    "跨境": [
      "news_debf822b7352"
    ],
    "美元": [
      "news_7a90d4cafe4b",
      "news_6c1bf89b3c38",
      "news_89abea5a1473",
      "news_6a0eabe1426e",
      "news_395ab1ad7783",
      "news_d8d07bfcbe78",
      "news_08ac44a50955",
      "news_750fb01cb11f",
      "news_c40eb932210e",
      "news_343b43269cbc",
      "news_99e4aab42a38",
      "news_304e207cbabe",
      "news_009971dcd272",
      "news_316076f8a494",
      "news_38fcb9433ca9",
      "news_2afa81af5999",
      "news_2a369b13283f",
      "news_cb81a91f3f39",
      "news_ad899d34be6c",
      "news_46fbcb79bb8a",
      "news_a1a7fb37e523",
      "news_0905e2d3e512",
      "news_7fa682fd0083",
      "news_61cfd5a0ac51",
      "news_76a93e51f9ed",
      "news_910a1769cca6",
      "news_1d66dfced2e9",
      "news_a1832e2b6176",
      "news_5f57352ea750"
    ],
    "欧元": [
      "news_934f3131a7e4"
    ],
    "日元": [
      "news_c40eb932210e",
      "news_f8d77bece06f"
    ],
    "通胀": [
      "news_e8b408c4dae5",
      "news_10b9316eb6bb",
      "news_ea99b199d235",
      "news_6acfd3d89166",
      "news_a1a7fb37e523"
    ],
    "衰退": [
      "news_9a7e7dc8bf80",
      "news_2afa81af5999"
    ],
    "房地产": [
      "news_5019f8261d3a",
      "news_1d306a1ce4f8",
      "news_dd09087b9a64",
      "news_50d5ca9dec4d",
      "news_667e78e7b70a"
    ],
    "地产": [
      "news_5019f8261d3a",
      "news_1d306a1ce4f8",
      "news_dd09087b9a64",
      "news_24dc282a446a",
      "news_50d5ca9dec4d",
      "news_667e78e7b70a"
    ],
    "楼市": [
      "news_4ed651776cf3"
    ],
    "住房": [
      "news_4ed651776cf3"
    ],
    "消费": [
      "news_d57141c563c5",
      "news_f3a7d1fa1ea1",
      "news_80ea977fb887",
      "news_f83949f9ba93",
      "news_95114d23eb6b",
      "news_547933529eef",
      "news_12220e9d0f3d",
      "news_dd09087b9a64",
      "news_b70231632d0a",
      "news_35573692f3f5",
      "news_9f77832ed59e",
      "news_d287a23cea53",
      "news_a609e266ee0a"
    ],
    "投资": [
      "news_4faaf3dc4ba1",
      "news_f3a7d1fa1ea1",
      "news_191cfb794341",
      "news_89abea5a1473",
      "news_6a0eabe1426e",
      "news_395ab1ad7783",
      "news_e8b408c4dae5",
      "news_c4977a4b7915",
      "news_d8d07bfcbe78",
      "news_b16b26abd090",
      "news_704788bb2cc6",
      "news_c24c9213fcdc",
      "news_24dc282a446a",
      "news_f8c64173ff73",
      "news_10b9316eb6bb",
      "news_99e4aab42a38",
      "news_a087d95f2636",
      "news_a2e69d1fddeb",
      "news_53cd1c3b5a7a",
      "news_8687ff3e142a",
      "news_316076f8a494",
      "news_09fc0f204dc9",
      "news_cb81a91f3f39",
      "news_debf822b7352",
      "news_a1a7fb37e523",
      "news_0905e2d3e512",
      "news_d1749f891ba5",
      "news_a37d225b50d5",
      "news_76a93e51f9ed",
      "news_62f9c30e609e",
      "news_1505940923f2",
      "news_e6bdcddc9353",
      "news_a609e266ee0a"
    ],
    "出口": [
      "news_d770cde5c8a2",
      "news_8581e9392ee9",
      "news_629a2044bbff",
      "news_667e78e7b70a"
    ],
    "贸易": [
      "news_7a90d4cafe4b",
      "news_8581e9392ee9",
      "news_6acfd3d89166",
      "news_934f3131a7e4",
      "news_667e78e7b70a",
      "news_1505940923f2",
      "news_e6bdcddc9353"
    ],
    "产业链": [
      "news_aa9ec3af7c1e",
      "news_41112b1757a2"
    ],
    "供应链": [
      "news_8581e9392ee9",
      "news_1505940923f2",
      "news_e6bdcddc9353"
    ],
    "就业": [
      "news_d698c2fc8e73",
      "news_f46d782d3ed3",
      "news_e967928e5556",
      "news_a2f49deea6ae"
    ],
    "失业": [
      "news_f46d782d3ed3",
      "news_4a0581c5a11d"
    ],
    "收入": [
      "news_4de090f7da0d",
      "news_343b43269cbc",
      "news_99e4aab42a38",
      "news_09fc0f204dc9",
      "news_2afa81af5999",
      "news_70b09a98989b",
      "news_14a48593d11a",
      "news_f8d77bece06f",
      "news_8520f23376f4"
    ],
    "黄金": [
      "news_2fa6c74e8339",
      "news_2a369b13283f",
      "news_9f77832ed59e"
    ],
    "金价": [
      "news_b88af30fc3f3"
    ],
    "原油": [
      "news_009971dcd272",
      "news_df489b4da818",
      "news_61cfd5a0ac51"
    ],
    "工业": [
      "news_337581ccc97f",
      "news_1c7155063ded",
      "news_df489b4da818",
      "news_14a48593d11a",
      "news_023c548a3017",
      "news_b55da487804d"
    ],
    "利润": [
      "news_557b03f36eb3",
      "news_b70231632d0a",
      "news_09fc0f204dc9",
      "news_3da643e189b0",
      "news_a3a42c24fd56",
      "news_14a48593d11a",
      "news_f8d77bece06f",
      "news_6652e1f22db1",
      "news_8520f23376f4",
      "news_b55da487804d",
      "news_5f57352ea750"
    ],
    "股市": [
      "news_54ccc5070f56",
      "news_fa376e493170",
      "news_409c0e1df02c",
      "news_a37d225b50d5",
      "news_e1126a4aa03e"
    ],
    "美联储": [
      "news_d8d07bfcbe78",
      "news_10b9316eb6bb",
      "news_20d6694dacc7",
      "news_023c548a3017"
    ],
    "财富管理": [
      "news_debf822b7352"
    ],
    "固收": [
      "news_a087d95f2636"
    ],
    "权益": [
      "news_b9eb50c5908e",
      "news_e967928e5556",
      "news_a2f49deea6ae",
      "news_b88af30fc3f3"
    ],
    "年化": [
      "news_343b43269cbc",
      "news_99e4aab42a38",
      "news_10900ba22b43"
    ],
    "募集": [
      "news_89abea5a1473",
      "news_395ab1ad7783",
      "news_fa742bf48170"
    ],
    "认购": [
      "news_08ac44a50955"
    ]
  },
  "sourceHealth": {
    "generatedAt": "2026-10-09T06:44:52.975Z",
    "status": "healthy",
    "totalSources": 12,
    "successfulSources": 9,
    "usableSources": 8,
    "failedSources": 3,
    "staleSources": 1,
    "fetchLimitReachedSources": 0,
    "coverageRate": 0.6667,
    "freshestPublishedAt": "2026-10-09T11:19:00.000Z",
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
        "addedCount": 9,
        "durationMs": 3479,
        "latestPublishedAt": "2026-10-09T06:01:34.000Z",
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
        "itemCount": 31,
        "rawItemCount": 31,
        "acceptedItemCount": 31,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 24,
        "durationMs": 4777,
        "latestPublishedAt": "2026-10-09T06:04:25.000Z",
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
        "addedCount": 11,
        "durationMs": 15052,
        "latestPublishedAt": "2026-10-09T06:04:06.000Z",
        "usedEndpoint": "rsshub.rssforever.com"
      },
      {
        "sourceId": "source_dae28d24f5",
        "sourceName": "财联社",
        "tier": "S3",
        "category": "industry",
        "transport": "rsshub",
        "success": true,
        "usable": false,
        "stale": false,
        "itemCount": 0,
        "rawItemCount": 20,
        "acceptedItemCount": 0,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 0,
        "durationMs": 7819,
        "latestPublishedAt": "2026-10-09T06:14:06.000Z",
        "usedEndpoint": "rsshub-balancer.virworks.moe"
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
        "itemCount": 33,
        "rawItemCount": 33,
        "acceptedItemCount": 33,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 23,
        "durationMs": 27416,
        "latestPublishedAt": "2026-10-09T06:07:26.000Z",
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
        "addedCount": 14,
        "durationMs": 28127,
        "latestPublishedAt": "2026-10-09T06:08:41.000Z",
        "usedEndpoint": "rsshub.rssforever.com"
      },
      {
        "sourceId": "source_0ac92ff106",
        "sourceName": "深交所",
        "tier": "S0",
        "category": "regulatory",
        "transport": "rsshub",
        "success": false,
        "usable": false,
        "stale": true,
        "itemCount": 0,
        "rawItemCount": 0,
        "acceptedItemCount": 0,
        "initialFetchLimit": 1,
        "fetchLimit": 1,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 0,
        "durationMs": 25982,
        "latestPublishedAt": null,
        "usedEndpoint": null
      },
      {
        "sourceId": "source_adf9a67b7f",
        "sourceName": "证监会",
        "tier": "S0",
        "category": "regulatory",
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
        "durationMs": 99406,
        "latestPublishedAt": null,
        "usedEndpoint": null
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
        "addedCount": 4,
        "durationMs": 157,
        "latestPublishedAt": "2026-10-09T06:00:38.000Z",
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
        "addedCount": 5,
        "durationMs": 50,
        "latestPublishedAt": "2026-10-09T00:00:07.000Z",
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
        "addedCount": 1,
        "durationMs": 0,
        "latestPublishedAt": "2026-10-09T11:19:00.000Z",
        "usedEndpoint": null
      }
    ]
  },
  "historyStats": {
    "itemCount": 5000,
    "eventCount": 52,
    "retentionDays": 90
  },
  "macro": {
    "updatedAt": "2026-10-09T06:44:52.975Z",
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
        "value": "5.22%",
        "note": "较10月7日 5.28% 下降",
        "direction": "down",
        "asOf": "2026-10-08",
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
        "value": "6.7023",
        "note": "较10月7日 6.7046 下降",
        "direction": "down",
        "asOf": "2026-10-08",
        "source": "Frankfurter/ECB",
        "mode": "auto"
      },
      {
        "key": "gold",
        "name": "现货黄金",
        "value": "$4,194",
        "note": "较10月8日 $4,129 上升",
        "direction": "up",
        "asOf": "2026-10-09",
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
        "title": "A股四大指数集体低开，江淮汽车再度跌停",
        "mainItemId": "news_2fa6c74e8339",
        "relatedItemIds": [
          "news_2a0dee8c9362",
          "news_b9eb50c5908e",
          "news_e3822054ff89",
          "news_aa9ec3af7c1e",
          "news_ef1c4497f1b9"
        ],
        "evidenceItemIds": [
          "news_2a0dee8c9362",
          "news_b9eb50c5908e",
          "news_e3822054ff89",
          "news_aa9ec3af7c1e",
          "news_ef1c4497f1b9"
        ],
        "historicalEvidenceCount": 24,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-09T06:44:52.975Z",
        "status": "developing",
        "summary": "连续地量引发关注，券商集体研判A股节后行情走势。",
        "latestProgress": "10月8日A股开盘分化，动物疫苗、石化板块走强，风格切换。"
      },
      {
        "eventId": "event_f101880ef7bc",
        "title": "【家庭财富】百年美股的聪与明：长期主义缘何知易行难",
        "mainItemId": "news_023c548a3017",
        "relatedItemIds": [
          "news_a37d225b50d5",
          "news_f3f4ef808a38",
          "news_db31ca2186d8",
          "news_343b43269cbc"
        ],
        "evidenceItemIds": [
          "news_023c548a3017",
          "news_a37d225b50d5",
          "news_f3f4ef808a38",
          "news_db31ca2186d8",
          "news_343b43269cbc"
        ],
        "historicalEvidenceCount": 32,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-09T06:44:52.975Z",
        "status": "developing",
        "summary": "美股长期主义理念与现实博弈并存，生物科技、消费及半导体板块异动频繁。",
        "latestProgress": "OpenAI收入不及预期引发半导体股下挫，中期选举前板块多空博弈升温。"
      },
      {
        "eventId": "event_c68d651d4ff9",
        "title": "中文在线放弃港股IPO，28亿AIGC扩张计划遭遇追问",
        "mainItemId": "news_6652e1f22db1",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_6652e1f22db1"
        ],
        "historicalEvidenceCount": 39,
        "firstSeenAt": "2026-09-30T15:04:45.414Z",
        "lastSeenAt": "2026-10-09T06:44:52.975Z",
        "status": "developing",
        "summary": "国信证券：9月以来外资流出港股互联网规模靠前",
        "latestProgress": "截至10月7日暂无该事件后续报道"
      },
      {
        "eventId": "event_2cf716748ce1",
        "title": "对冲基金协会警告英国央行：英国国债回购市场改革或损害流动性",
        "mainItemId": "news_78689efa326d",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_78689efa326d"
        ],
        "historicalEvidenceCount": 26,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-09T06:44:52.975Z",
        "status": "developing",
        "summary": "对冲基金协会警告英国央行，国债回购市场改革或损害流动性。",
        "latestProgress": "截至目前无后续相关报道，该警告仍为最新进展。"
      },
      {
        "eventId": "event_462c374e92e3",
        "title": "行云科技：预计2026年前三季度净利润2.4亿元-2.9亿元，同比扭亏为盈",
        "mainItemId": "news_a3a42c24fd56",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_a3a42c24fd56"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-08T15:45:42.144Z",
        "lastSeenAt": "2026-10-09T06:44:52.975Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_62f38f1eea61",
        "title": "美联储会议纪要：加息理由存在分歧，年内或将再上调利率一次",
        "mainItemId": "news_d8d07bfcbe78",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_d8d07bfcbe78"
        ],
        "historicalEvidenceCount": 3,
        "firstSeenAt": "2026-10-06T18:34:18.628Z",
        "lastSeenAt": "2026-10-09T06:44:52.975Z",
        "status": "developing",
        "summary": "美联储纪要显示加息存分歧，年内或再加一次。",
        "latestProgress": "外资行境内美元存款利率上行至最高4.1%。"
      },
      {
        "eventId": "event_b6b6148b7537",
        "title": "美国预算赤字飙升至近2万亿美元，占GDP比例将超6%，高利率、减税加剧赤字恶化",
        "mainItemId": "news_2afa81af5999",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_2afa81af5999"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-09T06:44:52.975Z",
        "lastSeenAt": "2026-10-09T06:44:52.975Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      }
    ],
    "dailySummary": {
      "highlights": [
        {
          "text": "[79] 2026年10月定期寿险在哪里买比较好最靠谱?从保额测算到免责条款解读,奶爸保全流程服务位居第一 — 奶爸保小程序是2026年10月买定期寿险值得优先考虑的投保入口。 奶爸保持有全国性保险经纪牌照，成立9年，200多位顾问",
          "evidenceItemIds": [
            "news_5c5f98083245"
          ]
        },
        {
          "text": "[75] 最高4.1%！美联储放鹰外资银行境内美元存款利率持续上行 — 财联社10月9日讯（记者 彭科峰）美联储的一举一动，都对全球金融机构的行为产生影响。\n昨日中午，大众银行深圳分行发布公告",
          "evidenceItemIds": [
            "news_d8d07bfcbe78"
          ]
        },
        {
          "text": "[73] 距中期选举不到一个月：这些美股板块将成多空核心“博弈场”？ — 财联社10月9日讯（编辑 潇湘）随着美国中期选举最后一个月的竞选活动进入白热化阶段，AI监管以及政府在医疗保健和国防方面",
          "evidenceItemIds": [
            "news_c24c9213fcdc"
          ]
        },
        {
          "text": "[73] 获博裕、IDG领投超5亿美元，估值破260亿的Manus如何接招Agent新战局？ — 《科创板日报》10月8日讯（记者 徐赐豪）距离2.0版本发布仅10天，Manus又公布了一个重磅消息。\nManus母公司",
          "evidenceItemIds": [
            "news_cb81a91f3f39"
          ]
        }
      ]
    },
    "eventChain": {
      "summary": "基于标题主题相似度和来源层级识别 3 组关联事件；仅表示内容相关，不代表已确认因果",
      "chains": [
        {
          "title": "A股三大股指早盘齐跌，创业板跌超1%失守3000点，算力硬件、生物医药集体下挫，恒科指涨超2%，科网股反弹",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_aa9ec3af7c1e",
            "news_ef1c4497f1b9",
            "news_806edb4e8b95",
            "news_fa376e493170",
            "news_2fa6c74e8339"
          ],
          "nodes": [
            "A股三大股指早盘齐跌，创业板跌超1%失守3000点，算力硬件、生物医药集体下挫，恒科指涨超2%，科网股反弹",
            "A股三大指数全线翻红",
            "A股三大指数，全部翻红",
            "港股年内募资3856亿港元，389宗项目候场，每四家就有一家来自A股",
            "A股四大指数集体低开，江淮汽车再度跌停"
          ]
        },
        {
          "title": "谭谈：央行为什么发布关于人民币汇率的政策立场",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_78689efa326d",
            "news_c40eb932210e"
          ],
          "nodes": [
            "谭谈：央行为什么发布关于人民币汇率的政策立场",
            "日元重回贬值通道、逼近160：日央行加息预期退潮？"
          ]
        },
        {
          "title": "【家庭财富】百年美股的聪与明：长期主义缘何知易行难",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_023c548a3017",
            "news_c24c9213fcdc",
            "news_343b43269cbc",
            "news_f3f4ef808a38",
            "news_db31ca2186d8"
          ],
          "nodes": [
            "【家庭财富】百年美股的聪与明：长期主义缘何知易行难",
            "距中期选举不到一个月：这些美股板块将成多空核心“博弈场”？",
            "OpenAI被曝年化收入不及预期，多只美股半导体股集体下挫",
            "美股异动 | 传星巴克考虑收购 奇波雷墨西哥烧烤(CMG.US)股价一度飙升8.6%",
            "美股异动 | 生物科技板块普跌 默沙东(MRK.US)跌逾2%"
          ]
        }
      ]
    },
    "industryImpact": {
      "quadrants": {
        "insurance": {
          "level": "high",
          "summary": "6 条保险相关资讯",
          "items": [
            {
              "title": "前9月18家险企发债600亿补充资本,票面利率最低至“1字头”",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_b8359ae20a15"
              ]
            },
            {
              "title": "众安尊享e生中高端医疗险2026:接受超适应症用药,既往症豁免,0免赔",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_90694c744974"
              ]
            },
            {
              "title": "真诚咨询:十年前购买的20年重疾险,目前经济压力较大,退保损失较大,还有必要继续缴费吗?",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_b88af30fc3f3"
              ]
            }
          ]
        },
        "pe": {
          "level": "high",
          "summary": "30 条基金/资管相关资讯",
          "items": [
            {
              "title": "销量退潮，保时捷押注更贵的生意",
              "impact": "市场表现影响，可用于投资人沟通",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_557b03f36eb3"
              ]
            },
            {
              "title": "“重眸科技”宣布完成多轮次近亿元融资",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_191cfb794341"
              ]
            },
            {
              "title": "加大AI豪赌！软银拟向海湾地区投资者筹集1000亿美元",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_89abea5a1473"
              ]
            }
          ]
        },
        "banking": {
          "level": "high",
          "summary": "21 条银行/货币政策相关资讯",
          "items": [
            {
              "title": "减量提质持续落地，年内超400家农村中小银行批复合并，省级农商行成整合主力",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_50205cde77f2"
              ]
            },
            {
              "title": "谭谈：央行为什么发布关于人民币汇率的政策立场",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_78689efa326d"
              ]
            },
            {
              "title": "AI要钱、欧美政府也要钱！全球“资本争夺战”打响，债券风暴才“刚刚开始”",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_d5456b738dd3"
              ]
            }
          ]
        },
        "trust": {
          "level": "medium",
          "summary": "1 条信托/财富管理相关资讯",
          "items": [
            {
              "title": "上市券商竞速“出海”：17家排队加码，跨境业务成业绩新引擎",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": [
                "news_debf822b7352"
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
          "topic": "行业动态活跃",
          "evidence": "今日 82 条行业动态资讯，行业层面信息充分，涉及多家机构/产品",
          "evidenceItemIds": [
            "news_14db8fd17684",
            "news_ba5ada35561a",
            "news_7a90d4cafe4b"
          ],
          "direction": "平稳"
        },
        {
          "topic": "货币政策信号",
          "evidence": "出现 15 次货币政策相关关键词，关注利率/流动性走向",
          "evidenceItemIds": [
            "news_d8d07bfcbe78",
            "news_b55da487804d",
            "news_a087d95f2636"
          ],
          "direction": "上升"
        },
        {
          "topic": "保险行业关注度",
          "evidence": "出现 6 条保险相关资讯，覆盖监管/市场/产品多维度",
          "evidenceItemIds": [
            "news_5c5f98083245",
            "news_90694c744974",
            "news_b88af30fc3f3"
          ],
          "direction": "上升"
        },
        {
          "topic": "市场行情波动",
          "evidence": "出现 72 条市场行情相关资讯，市场关注度提升",
          "evidenceItemIds": [
            "news_5c5f98083245",
            "news_d287a23cea53",
            "news_0905e2d3e512"
          ],
          "direction": "上升"
        },
        {
          "topic": "房地产政策动向",
          "evidence": "出现 7 条地产相关资讯，政策边际变化值得关注",
          "evidenceItemIds": [
            "news_24dc282a446a",
            "news_667e78e7b70a",
            "news_5019f8261d3a"
          ],
          "direction": "平稳"
        }
      ]
    },
    "insurancePlanner": {
      "summary": "近期保险类资讯聚焦定期寿险选购渠道、中端医疗险产品特点、长期重疾险续缴决策及营销新规落地，建议结合客户实际需求与保单权益提供理性建议。",
      "talkingPoints": [
        {
          "topic": "定期寿险购买渠道与理赔服务",
          "point": "知乎资讯推荐奶爸保小程序作为定期寿险投保入口，强调其全国性经纪牌照、9年经营历史、顾问经验及累计理赔协助金额。沟通时需客观介绍平台资质，避免过度承诺，引导客户关注保额测算与免责条款。",
          "action": "可参考该信息为客户梳理定期寿险选购要点，包括保额匹配负债与收入、免责条款解读，并提醒通过正规持牌渠道投保。",
          "evidenceItemIds": [
            "news_5c5f98083245"
          ]
        },
        {
          "topic": "重疾险退保决策与保单权益",
          "point": "针对已缴费10年的20年期重疾险，专业建议不建议直接退保，可优先使用减额交清等保单自带权益。沟通时应协助客户分析经济压力与保障损失，寻找替代方案。",
          "action": "遇到客户咨询退保时，提供减额交清、保单贷款、调整保额等选项，并计算不同方案的保障成本，不承诺收益。",
          "evidenceItemIds": [
            "news_b88af30fc3f3"
          ]
        },
        {
          "topic": "保险营销新规下避免冲动投保",
          "point": "有行业人士提醒新规落地前勿被催促购买，强调理性决策。可作为与客户沟通时的风险提示，避免制造紧迫感。",
          "action": "在销售沟通中遵循新规要求，不炒作停售或政策调整，向客户清晰说明产品条款和退保影响。",
          "evidenceItemIds": [
            "news_7b45a87acab6"
          ]
        }
      ]
    },
    "peOperations": {
      "summary": "今日 31 条基金/资管相关资讯，以下为运营参考",
      "talkingPoints": [
        {
          "topic": "销量退潮，保时捷押注更贵的生意",
          "point": "市场波动时期，需主动沟通投资策略和风控措施",
          "action": "准备投资者沟通话术，强调风控纪律和长期视角",
          "evidenceItemIds": [
            "news_557b03f36eb3"
          ]
        },
        {
          "topic": "“重眸科技”宣布完成多轮次近亿元融资",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_191cfb794341"
          ]
        },
        {
          "topic": "加大AI豪赌！软银拟向海湾地区投资者筹集1000亿美元",
          "point": "监管动态影响产品发行和运营流程，需同步更新合规手册",
          "action": "梳理监管要点对现有产品的影响，准备合规简报",
          "evidenceItemIds": [
            "news_89abea5a1473"
          ]
        },
        {
          "topic": "给保代单独立规，细化41项禁止行为，全流程打击违规入股",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_435c3d7896e1"
          ]
        }
      ]
    },
    "marketOutlook": {
      "summary": "今日 69 条宏观经济/政策相关资讯",
      "outlooks": [
        {
          "topic": "中国铁建、中国国新在北京成立新企业管理合伙企业，出资额17.5亿",
          "content": "汇率波动影响跨境资本流动和出口导向型企业盈利，关注对相关持仓的影响",
          "evidenceItemIds": [
            "news_4faaf3dc4ba1"
          ]
        },
        {
          "topic": "苹果据悉因需求疲软削减iPhone 18 Pro订单",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_d57141c563c5"
          ]
        },
        {
          "topic": "江淮汽车退出与汇通控股合资公司",
          "content": "汇率波动影响跨境资本流动和出口导向型企业盈利，关注对相关持仓的影响",
          "evidenceItemIds": [
            "news_6e10f0ddc667"
          ]
        },
        {
          "topic": "持续33年的投资消费辩论，该破局了",
          "content": "宏观经济数据反映基本面修复节奏，是判断大类资产配置方向的底层参考",
          "evidenceItemIds": [
            "news_f3a7d1fa1ea1"
          ]
        }
      ]
    }
  }
};
window.KEYWORD_INDEX = {
  "保险": [
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
    "news_5c5f98083245"
  ],
  "保额": [
    "news_b88af30fc3f3",
    "news_5c5f98083245"
  ],
  "保单": [
    "news_90694c744974",
    "news_b88af30fc3f3"
  ],
  "保险公司": [
    "news_b8359ae20a15",
    "news_7b45a87acab6",
    "news_5c5f98083245"
  ],
  "保险产品": [
    "news_90694c744974"
  ],
  "保险销售": [
    "news_7b45a87acab6"
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
    "news_14db8fd17684",
    "news_90694c744974"
  ],
  "医疗险": [
    "news_90694c744974",
    "news_9f3b623176ea"
  ],
  "银行": [
    "news_50205cde77f2",
    "news_78689efa326d",
    "news_d8d07bfcbe78",
    "news_e88b03c302ad",
    "news_50d5ca9dec4d",
    "news_41112b1757a2",
    "news_6acfd3d89166",
    "news_ad899d34be6c",
    "news_10900ba22b43"
  ],
  "央行": [
    "news_78689efa326d",
    "news_c40eb932210e"
  ],
  "农商行": [
    "news_50205cde77f2"
  ],
  "村镇银行": [
    "news_50205cde77f2"
  ],
  "利率": [
    "news_d5456b738dd3",
    "news_d8d07bfcbe78",
    "news_70ea145258c6",
    "news_24dc282a446a",
    "news_c40eb932210e",
    "news_a087d95f2636",
    "news_fa742bf48170",
    "news_ea99b199d235",
    "news_2afa81af5999",
    "news_a1a7fb37e523",
    "news_667e78e7b70a",
    "news_10900ba22b43",
    "news_b55da487804d",
    "news_b8359ae20a15"
  ],
  "存款利率": [
    "news_d8d07bfcbe78"
  ],
  "加息": [
    "news_c40eb932210e",
    "news_10b9316eb6bb",
    "news_ea99b199d235",
    "news_023c548a3017"
  ],
  "流动性": [
    "news_24dc282a446a"
  ],
  "存款": [
    "news_d8d07bfcbe78"
  ],
  "大额存单": [
    "news_10900ba22b43"
  ],
  "理财": [
    "news_d1749f891ba5"
  ],
  "破净": [
    "news_bb9af5db3e02"
  ],
  "股票": [
    "news_2a0dee8c9362",
    "news_d1749f891ba5",
    "news_a37d225b50d5",
    "news_76a93e51f9ed",
    "news_62f9c30e609e",
    "news_e3822054ff89"
  ],
  "A股": [
    "news_ef1c4497f1b9",
    "news_806edb4e8b95",
    "news_ba5ada35561a",
    "news_fa376e493170",
    "news_bb9af5db3e02",
    "news_efab3f953b1f",
    "news_57239d47837a",
    "news_aa9ec3af7c1e",
    "news_2fa6c74e8339",
    "news_6acfd3d89166",
    "news_b9deae4fe29e",
    "news_2a0dee8c9362",
    "news_d1749f891ba5",
    "news_b9eb50c5908e",
    "news_76a93e51f9ed",
    "news_e3822054ff89"
  ],
  "港股": [
    "news_fa376e493170",
    "news_750fb01cb11f",
    "news_69f5a6576335",
    "news_aa9ec3af7c1e",
    "news_9a98d020debe",
    "news_6652e1f22db1"
  ],
  "美股": [
    "news_c24c9213fcdc",
    "news_343b43269cbc",
    "news_6acfd3d89166",
    "news_df489b4da818",
    "news_f3f4ef808a38",
    "news_db31ca2186d8",
    "news_a37d225b50d5",
    "news_023c548a3017",
    "news_e1126a4aa03e",
    "news_92f1b12fbb1e"
  ],
  "大盘": [
    "news_41112b1757a2"
  ],
  "指数": [
    "news_ef1c4497f1b9",
    "news_806edb4e8b95",
    "news_ba5ada35561a",
    "news_54ccc5070f56",
    "news_e69c8686f1a2",
    "news_efab3f953b1f",
    "news_343b43269cbc",
    "news_99e4aab42a38",
    "news_2fa6c74e8339",
    "news_41112b1757a2",
    "news_8687ff3e142a",
    "news_6acfd3d89166",
    "news_df489b4da818",
    "news_409c0e1df02c",
    "news_023c548a3017",
    "news_e1126a4aa03e"
  ],
  "沪深300": [
    "news_ec31c569593a"
  ],
  "中证500": [
    "news_ec31c569593a"
  ],
  "中证1000": [
    "news_ec31c569593a"
  ],
  "ETF": [
    "news_ec31c569593a",
    "news_b9eb50c5908e"
  ],
  "对冲基金": [
    "news_e8b408c4dae5"
  ],
  "债券": [
    "news_d5456b738dd3",
    "news_b521e90ba43f",
    "news_24dc282a446a",
    "news_304e207cbabe",
    "news_a37d225b50d5",
    "news_e1126a4aa03e",
    "news_6580da63b57c",
    "news_b8359ae20a15"
  ],
  "国债": [
    "news_e8b408c4dae5",
    "news_a087d95f2636",
    "news_304e207cbabe",
    "news_ea99b199d235",
    "news_e1126a4aa03e",
    "news_6580da63b57c"
  ],
  "公司债": [
    "news_24dc282a446a"
  ],
  "地方债": [
    "news_6580da63b57c"
  ],
  "期货": [
    "news_a087d95f2636",
    "news_e1126a4aa03e"
  ],
  "期权": [
    "news_a087d95f2636"
  ],
  "IPO": [
    "news_557b03f36eb3",
    "news_6c1bf89b3c38",
    "news_fa376e493170",
    "news_08ac44a50955",
    "news_38fcb9433ca9",
    "news_8ed8d9daba03",
    "news_5eb08cdf304f"
  ],
  "上市": [
    "news_557b03f36eb3",
    "news_435c3d7896e1",
    "news_fa376e493170",
    "news_abf2d0a5bbbc",
    "news_08ac44a50955",
    "news_704788bb2cc6",
    "news_57239d47837a",
    "news_367e935c3466",
    "news_2a0dee8c9362",
    "news_debf822b7352",
    "news_9a98d020debe",
    "news_14a48593d11a",
    "news_82ee3d7abc84"
  ],
  "定增": [
    "news_f3a7d1fa1ea1",
    "news_2a0dee8c9362"
  ],
  "回购": [
    "news_dfd932fb5d96"
  ],
  "券商": [
    "news_dfd932fb5d96",
    "news_bb9af5db3e02",
    "news_debf822b7352"
  ],
  "自营": [
    "news_debf822b7352"
  ],
  "经纪": [
    "news_5c5f98083245",
    "news_9f3b623176ea"
  ],
  "投资者": [
    "news_89abea5a1473",
    "news_6a0eabe1426e",
    "news_395ab1ad7783",
    "news_d8d07bfcbe78",
    "news_c24c9213fcdc",
    "news_99e4aab42a38",
    "news_a087d95f2636",
    "news_8687ff3e142a",
    "news_a1a7fb37e523",
    "news_d1749f891ba5",
    "news_a37d225b50d5",
    "news_62f9c30e609e",
    "news_a609e266ee0a"
  ],
  "机构": [
    "news_50205cde77f2",
    "news_da04a3d44969",
    "news_435c3d7896e1",
    "news_ec31c569593a",
    "news_d8d07bfcbe78",
    "news_e88b03c302ad",
    "news_10b9316eb6bb",
    "news_6acfd3d89166",
    "news_debf822b7352",
    "news_d287a23cea53",
    "news_910a1769cca6",
    "news_6580da63b57c"
  ],
  "监管": [
    "news_af99ecae9c2f",
    "news_c24c9213fcdc"
  ],
  "证监会": [
    "news_debf822b7352",
    "news_986ca26f7b13"
  ],
  "深交所": [
    "news_e3822054ff89"
  ],
  "北交所": [
    "news_14a48593d11a"
  ],
  "港交所": [
    "news_2a0dee8c9362",
    "news_9a98d020debe"
  ],
  "合规": [
    "news_629a2044bbff"
  ],
  "通报": [
    "news_2fa6c74e8339",
    "news_a609e266ee0a"
  ],
  "条款": [
    "news_12220e9d0f3d",
    "news_24dc282a446a",
    "news_f8c64173ff73",
    "news_05c5ce6a7334",
    "news_0905e2d3e512",
    "news_90694c744974",
    "news_5c5f98083245"
  ],
  "办法": [
    "news_435c3d7896e1",
    "news_e967928e5556"
  ],
  "意见": [
    "news_7a90d4cafe4b",
    "news_435c3d7896e1",
    "news_c40eb932210e",
    "news_f8c64173ff73",
    "news_debf822b7352",
    "news_0905e2d3e512",
    "news_e967928e5556",
    "news_a2f49deea6ae"
  ],
  "规定": [
    "news_62f9c30e609e",
    "news_986ca26f7b13"
  ],
  "条例": [
    "news_1d306a1ce4f8"
  ],
  "法规": [
    "news_d287a23cea53"
  ],
  "解读": [
    "news_90694c744974",
    "news_7b45a87acab6",
    "news_5c5f98083245"
  ],
  "牌照": [
    "news_12220e9d0f3d",
    "news_5c5f98083245"
  ],
  "资质": [
    "news_b5cc2b260b51"
  ],
  "经济": [
    "news_f3a7d1fa1ea1",
    "news_9a7e7dc8bf80",
    "news_da04a3d44969",
    "news_547933529eef",
    "news_8581e9392ee9",
    "news_236c7b91d365",
    "news_934f3131a7e4",
    "news_2afa81af5999",
    "news_9f77832ed59e",
    "news_a1a7fb37e523",
    "news_667e78e7b70a",
    "news_44c3d421156b",
    "news_e6bdcddc9353",
    "news_b88af30fc3f3"
  ],
  "GDP": [
    "news_2afa81af5999",
    "news_667e78e7b70a"
  ],
  "信贷": [
    "news_304e207cbabe"
  ],
  "汇率": [
    "news_78689efa326d",
    "news_6acfd3d89166"
  ],
  "人民币": [
    "news_4faaf3dc4ba1",
    "news_6e10f0ddc667",
    "news_78689efa326d",
    "news_5019f8261d3a",
    "news_6acfd3d89166",
    "news_6652e1f22db1",
    "news_10900ba22b43"
  ],
  "跨境": [
    "news_debf822b7352"
  ],
  "美元": [
    "news_7a90d4cafe4b",
    "news_6c1bf89b3c38",
    "news_89abea5a1473",
    "news_6a0eabe1426e",
    "news_395ab1ad7783",
    "news_d8d07bfcbe78",
    "news_08ac44a50955",
    "news_750fb01cb11f",
    "news_c40eb932210e",
    "news_343b43269cbc",
    "news_99e4aab42a38",
    "news_304e207cbabe",
    "news_009971dcd272",
    "news_316076f8a494",
    "news_38fcb9433ca9",
    "news_2afa81af5999",
    "news_2a369b13283f",
    "news_cb81a91f3f39",
    "news_ad899d34be6c",
    "news_46fbcb79bb8a",
    "news_a1a7fb37e523",
    "news_0905e2d3e512",
    "news_7fa682fd0083",
    "news_61cfd5a0ac51",
    "news_76a93e51f9ed",
    "news_910a1769cca6",
    "news_1d66dfced2e9",
    "news_a1832e2b6176",
    "news_5f57352ea750"
  ],
  "欧元": [
    "news_934f3131a7e4"
  ],
  "日元": [
    "news_c40eb932210e",
    "news_f8d77bece06f"
  ],
  "通胀": [
    "news_e8b408c4dae5",
    "news_10b9316eb6bb",
    "news_ea99b199d235",
    "news_6acfd3d89166",
    "news_a1a7fb37e523"
  ],
  "衰退": [
    "news_9a7e7dc8bf80",
    "news_2afa81af5999"
  ],
  "房地产": [
    "news_5019f8261d3a",
    "news_1d306a1ce4f8",
    "news_dd09087b9a64",
    "news_50d5ca9dec4d",
    "news_667e78e7b70a"
  ],
  "地产": [
    "news_5019f8261d3a",
    "news_1d306a1ce4f8",
    "news_dd09087b9a64",
    "news_24dc282a446a",
    "news_50d5ca9dec4d",
    "news_667e78e7b70a"
  ],
  "楼市": [
    "news_4ed651776cf3"
  ],
  "住房": [
    "news_4ed651776cf3"
  ],
  "消费": [
    "news_d57141c563c5",
    "news_f3a7d1fa1ea1",
    "news_80ea977fb887",
    "news_f83949f9ba93",
    "news_95114d23eb6b",
    "news_547933529eef",
    "news_12220e9d0f3d",
    "news_dd09087b9a64",
    "news_b70231632d0a",
    "news_35573692f3f5",
    "news_9f77832ed59e",
    "news_d287a23cea53",
    "news_a609e266ee0a"
  ],
  "投资": [
    "news_4faaf3dc4ba1",
    "news_f3a7d1fa1ea1",
    "news_191cfb794341",
    "news_89abea5a1473",
    "news_6a0eabe1426e",
    "news_395ab1ad7783",
    "news_e8b408c4dae5",
    "news_c4977a4b7915",
    "news_d8d07bfcbe78",
    "news_b16b26abd090",
    "news_704788bb2cc6",
    "news_c24c9213fcdc",
    "news_24dc282a446a",
    "news_f8c64173ff73",
    "news_10b9316eb6bb",
    "news_99e4aab42a38",
    "news_a087d95f2636",
    "news_a2e69d1fddeb",
    "news_53cd1c3b5a7a",
    "news_8687ff3e142a",
    "news_316076f8a494",
    "news_09fc0f204dc9",
    "news_cb81a91f3f39",
    "news_debf822b7352",
    "news_a1a7fb37e523",
    "news_0905e2d3e512",
    "news_d1749f891ba5",
    "news_a37d225b50d5",
    "news_76a93e51f9ed",
    "news_62f9c30e609e",
    "news_1505940923f2",
    "news_e6bdcddc9353",
    "news_a609e266ee0a"
  ],
  "出口": [
    "news_d770cde5c8a2",
    "news_8581e9392ee9",
    "news_629a2044bbff",
    "news_667e78e7b70a"
  ],
  "贸易": [
    "news_7a90d4cafe4b",
    "news_8581e9392ee9",
    "news_6acfd3d89166",
    "news_934f3131a7e4",
    "news_667e78e7b70a",
    "news_1505940923f2",
    "news_e6bdcddc9353"
  ],
  "产业链": [
    "news_aa9ec3af7c1e",
    "news_41112b1757a2"
  ],
  "供应链": [
    "news_8581e9392ee9",
    "news_1505940923f2",
    "news_e6bdcddc9353"
  ],
  "就业": [
    "news_d698c2fc8e73",
    "news_f46d782d3ed3",
    "news_e967928e5556",
    "news_a2f49deea6ae"
  ],
  "失业": [
    "news_f46d782d3ed3",
    "news_4a0581c5a11d"
  ],
  "收入": [
    "news_4de090f7da0d",
    "news_343b43269cbc",
    "news_99e4aab42a38",
    "news_09fc0f204dc9",
    "news_2afa81af5999",
    "news_70b09a98989b",
    "news_14a48593d11a",
    "news_f8d77bece06f",
    "news_8520f23376f4"
  ],
  "黄金": [
    "news_2fa6c74e8339",
    "news_2a369b13283f",
    "news_9f77832ed59e"
  ],
  "金价": [
    "news_b88af30fc3f3"
  ],
  "原油": [
    "news_009971dcd272",
    "news_df489b4da818",
    "news_61cfd5a0ac51"
  ],
  "工业": [
    "news_337581ccc97f",
    "news_1c7155063ded",
    "news_df489b4da818",
    "news_14a48593d11a",
    "news_023c548a3017",
    "news_b55da487804d"
  ],
  "利润": [
    "news_557b03f36eb3",
    "news_b70231632d0a",
    "news_09fc0f204dc9",
    "news_3da643e189b0",
    "news_a3a42c24fd56",
    "news_14a48593d11a",
    "news_f8d77bece06f",
    "news_6652e1f22db1",
    "news_8520f23376f4",
    "news_b55da487804d",
    "news_5f57352ea750"
  ],
  "股市": [
    "news_54ccc5070f56",
    "news_fa376e493170",
    "news_409c0e1df02c",
    "news_a37d225b50d5",
    "news_e1126a4aa03e"
  ],
  "美联储": [
    "news_d8d07bfcbe78",
    "news_10b9316eb6bb",
    "news_20d6694dacc7",
    "news_023c548a3017"
  ],
  "财富管理": [
    "news_debf822b7352"
  ],
  "固收": [
    "news_a087d95f2636"
  ],
  "权益": [
    "news_b9eb50c5908e",
    "news_e967928e5556",
    "news_a2f49deea6ae",
    "news_b88af30fc3f3"
  ],
  "年化": [
    "news_343b43269cbc",
    "news_99e4aab42a38",
    "news_10900ba22b43"
  ],
  "募集": [
    "news_89abea5a1473",
    "news_395ab1ad7783",
    "news_fa742bf48170"
  ],
  "认购": [
    "news_08ac44a50955"
  ]
};
