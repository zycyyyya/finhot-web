// finhot auto-generated data - powered by RSSHub + financial sources + Zhihu OpenAPI
// Generated: 2026-10-07T06:34:40.532Z
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
  "date": "2026-10-07",
  "generatedAt": "2026-10-07T06:34:40.532Z",
  "lead": "今日新增 67 条，共 150 条精选资讯",
  "items": [
    {
      "title": "印度股市在印度储备银行近4年来首次加息后下跌",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3597318",
      "publishedAt": "2026-10-07T05:45:08.000Z",
      "fetchedAt": "2026-10-07T06:10:41.850Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_add98489850a",
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
      "eventId": "event_c451a076d7dd"
    },
    {
      "title": "Dalio：美国债务危机或三年内爆发",
      "sourceUrl": "https://wallstreetcn.com/charts/41959986",
      "publishedAt": "2026-10-07T05:42:42.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "Ray Dalio预测美国三年内或爆发债务危机，市场繁荣对债务融资的依赖加深，融资从股权转向债务，或冲击资产价格和利率。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cf7e1ebf884e",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "对冲基金协会警告英国央行：英国国债回购市场改革或损害流动性",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3597307",
      "publishedAt": "2026-10-07T05:32:12.000Z",
      "fetchedAt": "2026-10-07T06:10:41.898Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_4298d79d3d21",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 59,
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
          "score": 78,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 69,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
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
      "title": "澳大利亚股市收低；截至收盘澳大利亚S&P/ASX200指数下跌0.09%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3597306",
      "publishedAt": "2026-10-07T05:30:15.000Z",
      "fetchedAt": "2026-10-07T06:10:41.850Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_50dfd7ccc704",
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
      "title": "演员王星案，牵出跨境人口贩卖集团：一个人价格10万甚至20万",
      "sourceUrl": "https://www.cls.cn/detail/2498525",
      "publishedAt": "2026-10-07T05:23:05.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "由公安部和中央广播电视总台联合摄制的纪录片《缅北电诈覆灭纪实》于10月5日至7日，在央视综合频道18点档首播。纪录片全面展现了在党中央坚强领导下，我国公安机关会同有关部门开展打击缅北涉我犯罪专项工作，彻底铲除缅北“四大家族”等犯罪集团的艰苦历程和显著成就。\n纪录片《缅北电诈覆灭纪实》第三集《共筑天网》10月7日晚将播出，其中揭露了拐卖演员王星等人至境外电诈园区背后的跨境人口贩卖集团。\n2025年1",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6d057eabbbb8",
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
      "title": "阿塔尔宣布竞选法国总统，37岁的“马克龙门徒”能否打败极右翼？｜国际人物",
      "sourceUrl": "https://www.yicai.com/news/103384967.html",
      "publishedAt": "2026-10-07T05:18:51.000Z",
      "fetchedAt": "2026-10-07T06:05:18.733Z",
      "timeConfidence": "source",
      "summary": "阿塔尔曾被广泛认为是“年轻版”马克龙。在任期间，法国前总理阿塔尔曾是法兰西第五共和国建立以来最年轻的总理。日前，阿塔尔“卷土重来”，宣布作为中间派人士参加2027年法国总统选举，当前他只有37岁。“根据民调，当下法国政坛呈现‘左右对决’情势。”正在法国调研的对外经济贸易大学全球价值链研究院研究员、巴黎索邦大学博士生导师赵永升对第一财经记者表示，而中间派则拥有阿塔尔和同属于该派的55岁中右翼前总理菲",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4d5c1d19c113",
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
      "title": "蓝猫头鹰计划大举进军保险资本领域，首席执行官接受英国《金融时报》采访",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3597297",
      "publishedAt": "2026-10-07T04:58:15.000Z",
      "fetchedAt": "2026-10-07T06:10:41.850Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_1f95fa341088",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 63,
      "rawScore": 63,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 38,
          "reasons": [
            "命中保险运营核心主题 1 项"
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
      "title": "印度储备银行近四年来首次加息，暗示后续或将继续收紧",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3597296",
      "publishedAt": "2026-10-07T04:45:55.000Z",
      "fetchedAt": "2026-10-07T06:10:41.898Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_fd64b64d4e6d",
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
        "深度研究"
      ],
      "eventId": "event_c451a076d7dd"
    },
    {
      "title": "现货白银日内跌幅扩大至1%，报60.71美元/盎司",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015297671909248",
      "publishedAt": "2026-10-07T04:12:00.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "10月7日，现货白银日内跌幅扩大至1%，报60.71美元/盎司。（每日经济新闻）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b7ea28449bda",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 15,
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
      "attentionScore": 15,
      "llmScores": [
        13,
        17
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
      "title": "港股午盘：恒生指数跌0.53% 恒生科技指数跌0.91%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015295684841349",
      "publishedAt": "2026-10-07T04:09:59.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，港股午间收盘，恒生指数跌0.53%，恒生科技指数跌0.91%。明星科网股普跌，阿里巴巴跌3.05%，百度集团跌2.21%，美团、小米集团跌超1%。生物医药股普跌，和铂医药跌超7%，康希诺生物跌近6%，君实生物跌逾4%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_59dbea524f7c",
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
      "eventId": null
    },
    {
      "title": "谷歌AI基建主管谈：Agent重塑基建、光网络突破、终极物理瓶颈和未来10年的算力形态",
      "sourceUrl": "https://wallstreetcn.com/articles/3783104",
      "publishedAt": "2026-10-07T03:55:05.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "人类历史上规模最大的资本开支建设正在展开。从衡量系统真实性能的\"goodput\"指标，到光路交换网络、轨道数据中心，再到十年后的算力形态，谷歌AI基础设施负责人Amin Vahdat在近期一次深度对谈中，系统梳理了这场建设背后的技术逻辑与战略取舍。\n谷歌今年资本开支预计超过2000亿美元，大部分用于数据中心建设。Vahdat在接受Sequoia Capital合伙人Sonia Huang访谈时表示",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4e7ebca50687",
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
      "title": "中秋国庆消费升温，支付宝“碰一下”消费笔数同比增近40%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015249565945992",
      "publishedAt": "2026-10-07T03:23:04.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "中秋国庆假期文旅消费热度攀升。支付宝数据显示，双节期间“碰一下”消费笔数同比增长近40%。假期首四日，入境游客用支付宝“外卡内绑”和 Alipay+“外包内用”的消费额，同比增长近50%。长沙、重庆、福州、广州、杭州、上海、武汉、郑州八城联合支付宝发起“点亮城市”活动，吸引超100万人次打卡。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_937dfc4c7350",
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
      "title": "中国“人造太阳”加速！实验设备密集落地",
      "sourceUrl": "https://www.cls.cn/detail/2498486",
      "publishedAt": "2026-10-07T03:12:04.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月7日讯（记者 李煜 实习记者 胡雨倩） 近期，我国可控核聚变领域多项新动作密集落地，工程化建设不断取得进展，商业化探索步伐持续提速。\n从国家重大工程紧凑型聚变能实验装置（BEST）项目园区交付启用、聚变堆超导磁体核心部件实现批量化工程化发运，到民营聚变企业首次在自有装置上实现氢硼聚变反应，我国可控核聚变领域工程化建设与商业化探索并进。\n有业内人士认为，在政策、工程与资本的多重催",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ec48b84471c1",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 36,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 36,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
          ]
        }
      },
      "attentionScore": 36,
      "llmScores": [
        42,
        30
      ],
      "scoredBy": "llm",
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "香港主要地产股业绩收官 机构称板块已步入盈利上行周期",
      "sourceUrl": "https://www.cls.cn/detail/2498478",
      "publishedAt": "2026-10-07T03:03:05.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "财联社10月7日讯(编辑 胡家荣)随着新世界发展(00017.HK)最新财报出炉，除领展房产基金(将于11月公布中期业绩)外，香港主要地产股的业绩发布期已基本收官。\n综合新世界发展的财务数据与摩根大通的最新研报，香港地产板块在经历了漫长的调整后，正在显现出“核心经营企稳、账面减值出清、派息防御稳固”的结构性分化特征。\n该行明确指出：除非面临激进加息或宏观趋势意外逆转，香港地产股板块已正式步入盈利上",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6be5e9cf054e",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 73,
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 21,
        "evidence": 3,
        "recency": 15,
        "actionability": 8
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
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 85,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 45,
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
      "title": "“AI硬件第一股”IPO搁浅了",
      "sourceUrl": "https://wallstreetcn.com/articles/3783098",
      "publishedAt": "2026-10-07T02:57:14.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "智能戒指制造商Oura上市受挫，揭示出一个投资市场的老命题：叫自己\"平台\"，不等于被市场当平台估值。\nOura上月底试图赴美上市，却因无法在预期价格区间找到足够买家而被迫搁置计划。公司将此归咎于市场动荡，但主要股指彼时仍接近历史高位。据《华尔街日报》报道，此次IPO折戟的深层矛盾在于：Oura将自身定位为价值最高150亿美元的科技数据平台，而潜在投资者眼中看到的，不过是一款精致的健康消费品。\n这一",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1e7baaf09857",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "前8个月医保统筹基金收入约2.07万亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015210756165513",
      "publishedAt": "2026-10-07T02:43:35.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "国家医保局日前发布数据，2026年1月至8月，我国基本医疗保险（含生育保险）统筹基金总收入20727.72亿元，基本医疗保险（含生育保险）统筹基金总支出15504.14亿元，医保基金整体运行平稳。数据显示，在基本医疗保险（含生育保险）统筹基金收入方面，职工基本医疗保险（含生育保险）统筹基金收入12813.17亿元，城乡居民基本医疗保险统筹基金收入7914.55亿元。2026年前8个月，职工基本医疗",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2ce4c3b723ce",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 39,
          "reasons": [
            "命中保险运营核心主题 1 项"
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
      "attentionScore": 30,
      "llmScores": [
        25,
        35
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
      "title": "Anthropic扩大先进AI模型访问权限，允许特定机构开展网络安全测试",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015209455456387",
      "publishedAt": "2026-10-07T02:42:16.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "据报道，Anthropic正与美国政府合作，扩大其最先进AI模型的使用权限，允许一批经过筛选的机构测试这家初创公司的尖端网络能力。根据周二发布的声明，该公司将允许经过验证的机构使用其能力最强的模型，包括Claude Opus 5.5、Claude Sonnet 5.5、Claude Mythos 5.1，以及未来推出的新模型。声明称，获得权限的机构可以对旨在保护电网、银行和航班运行系统等关键基础设",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c9249e7b9656",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 32,
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
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
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
      "attentionScore": 32,
      "llmScores": [
        28,
        36
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
      "title": "美股三季报下周拉开帷幕：标普500每股收益预计增长27%，英伟达和美光两家公司将贡献1/3",
      "sourceUrl": "https://wallstreetcn.com/articles/3783100",
      "publishedAt": "2026-10-07T02:34:15.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "美股三季报季将于下周全面拉开帷幕。尽管标普500指数盈利增速可能创下2021年以来最高水平，但增长高度集中于少数科技和能源巨头，中小盘及多数行业的盈利动能却在减弱，指数与个股表现之间的分化进一步加剧。\n据高盛最新预测，标普500指数三季度每股收益同比增速有望达到27%，为2021年以来最高。不过，这一增速高度依赖少数公司：存储芯片制造商美光和英伟达两家公司预计合计贡献指数盈利增长的约三分之一，而标",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6f0c41dcae74",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
        "无口径收益宣传"
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
          "score": 86,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "title": "央行：9月末外汇储备报34002.51亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015180523425923",
      "publishedAt": "2026-10-07T02:12:50.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "10月7日消息，央行数据显示，9月末外汇储备报34002.51亿美元。（界面新闻）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f2a80898dd81",
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
        "观点",
        "快讯"
      ],
      "eventId": "event_2cf716748ce1"
    },
    {
      "title": "中国央行连续第23个月增持黄金",
      "sourceUrl": "https://wallstreetcn.com/articles/3783099",
      "publishedAt": "2026-10-07T02:10:18.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "中国9月末黄金储备为7747万盎司，环比增加74万盎司，8月末黄金储备为7673万盎司。中国央行已连续第23个月增持黄金。中国9月外汇储备34002.5亿美元，前值34383.3亿美元。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2f288323fb81",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 77,
      "rawScore": 77,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 21,
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
          "score": 72,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_2cf716748ce1"
    },
    {
      "title": "券商财富管理进阶到哪一步？“帮助客户赚钱”的转型目标出圈了",
      "sourceUrl": "https://www.cls.cn/detail/2498464",
      "publishedAt": "2026-10-07T02:01:26.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "财联社10月7日讯（记者 林坚）券商财富管理转型正在经历哪些变化？券商正在进行一次集中展示。\n在中国证券业协会指导与联合推动下，财联社近期特别推出了“守正创新 向实而行——证券业财富管理转型优秀实践”专题报道。专题最终将汇集近50家券商的转型布局与这几年的思考，目前已有18家券商董事长、总经理带来分享。\n财富管理有哪些新进展？思路发生了哪些变化？现在处于什么阶段？呈现出哪些差异化打法？记者进行了最",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bb0403c3a13e",
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
          "score": 23,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 23,
          "reasons": [
            "命中关联主题 1 项"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "港股IPO早播报：新兴市场手机巨头传音控股开启招股",
      "sourceUrl": "https://www.cls.cn/detail/2498443",
      "publishedAt": "2026-10-07T02:00:19.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "财联社10月7日讯 利弗莫尔证券数据显示，今日港股新股资讯包括：\n今起申购：\n传音控股（02636.HK）\n2026年10月7日至10月12日招股，拟全球发售 86,648,300 股 H 股，香港公开发售 8,664,900 股（86,649 手，可重新分配最大为 129,972 手），国际发售占 90%。发售价 35.30–38.80 港元，每手 100 股，一手入场费约 3,919.13 港",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3446c2998f5b",
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
          "score": 73,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
        "深度研究"
      ],
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "香港上半年证券业净利增21%达517亿港元 交易总额149万亿创历史新高",
      "sourceUrl": "https://www.cls.cn/detail/2498444",
      "publishedAt": "2026-10-07T02:00:14.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "财联社10月7日讯(编辑 胡家荣)根据香港证监会发布的最新行业报告，2026年上半年香港证券业整体净盈利同比增加21%至517亿港元，且交易总额创历史新高。\n证券经纪行交易总额较2025年下半年跃升24%，达到149.0万亿港元的历史纪录；活跃客户总数增长10%至约570万人。\n\n证券经纪行的交易活动增长强劲，客户参与度日益上升，使盈利较2025年下半年大幅增加，其中联交所参与者合计净盈利237亿",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d8c46356b414",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 73,
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 51,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
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
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "三星电机计划斥资近50亿美元在韩国和越南扩产半导体基板",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015165184921728",
      "publishedAt": "2026-10-07T01:57:14.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "据报道，三星电机计划到2028年在韩国和越南投资近50亿美元，用于半导体基板生产，进一步提升越南在人工智能服务器和高性能计算关键零部件生产中的地位。作为韩国三星集团旗下的电子元件子公司，三星电机上周公布了两项FC-BGA（倒装芯片球栅阵列）基板投资计划。该产品用于AI服务器、机器人和智能汽车芯片。其中一项投资规模为4.27万亿韩元（32亿美元），用于韩国世宗工厂，是公司迄今针对单一产品进行的最大规",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f05197cf72c8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "title": "AI算力初创公司Lambda拟在IPO前最后一轮融资中筹集40亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015161463361412",
      "publishedAt": "2026-10-07T01:53:27.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "据知情人士透露，英伟达支持的云计算公司Lambda正在进行其计划首次公开募股（IPO）前的最后一轮融资，拟筹集最多40亿美元。新一轮融资对Lambda的估值为145亿美元，该估值不包括此次拟筹集的资金。本轮IPO前融资由投资公司黑石集团（Blackstone）和Coatue Management领投。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c5764e932222",
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
          "score": 15,
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
      "eventId": "event_1ad2a684dd4f"
    },
    {
      "title": "派拉蒙天舞完成对华纳兄弟收购",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015159077293958",
      "publishedAt": "2026-10-07T01:51:01.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "经过数月的竞购角逐以及法律拉锯战，派拉蒙天舞公司10月6日宣布完成对华纳兄弟探索公司价值约1100亿美元的收购，打造出一家横跨好莱坞和新闻行业的全新超级传媒集团。这是美国传媒行业历史上规模最大的并购交易之一。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c3f50e9a7565",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "SpaceX据悉拟融资400亿美元用于购买英伟达芯片",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015155406245767",
      "publishedAt": "2026-10-07T01:47:17.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "媒体援引知情人士报道称，马斯克旗下的SpaceX正寻求融资400亿美元，用于购买英伟达芯片，凸显人工智能（AI）算力需求依然强劲。该报道称，SpaceX寻求约100亿美元银行贷款并计划发行300亿美元投资级债券，为芯片采购融资。阿波罗全球管理预计将牵头这笔交易，并协助向投资者出售SpaceX债券。交易预计于2027年完成。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_24c8f7758b3c",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "attentionScore": 30,
      "llmScores": [
        41,
        18
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": "event_4cbc155133f9"
    },
    {
      "title": "苹果将推出与LG联合研发的智能门铃、智能门锁与智能温控器‌",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015152620670850",
      "publishedAt": "2026-10-07T01:44:27.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "苹果公司即将推出的智能家居新品中，将包含一批与LG电子通过合作联合研发的智能门铃、智能温控器及其他配套配件。这批和LG联合开发的产品还将涵盖智能插芯门锁、室内安防摄像头、室外安防摄像头以及带泛光照明的摄像头，所有产品将使用LG品牌对外发售。苹果自家的全新设备，包括升级款HomePod mini和新款电视机顶盒，定于10月13日正式发布，而这批LG联名配件预计还需要数月时间才能正式面向消费者上市。（",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_bbb0f23e28ac",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 56,
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
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "美国反对浪潮加剧！甲骨文又一巨型数据中心或因“通不了电”搁浅",
      "sourceUrl": "https://wallstreetcn.com/articles/3783095",
      "publishedAt": "2026-10-07T01:44:00.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "甲骨文旗下数据中心建设危机持续蔓延。继新墨西哥州Jupiter项目宣布不可抗力后，位于威斯康星州的1.3GW超大型数据中心\"Project Lighthouse\"再度告急——不是因为选址或资金，而是因为电接不上来。\n根据数据中心研究机构Aterio发布的最新报告，Lighthouse项目的输电审批流程已被威斯康星州公共服务委员会（PSC）打回重来，法定审查时钟从零重启。这意味着甲骨文此前承诺的\"2",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_89b80ee0e95c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 21,
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
      "attentionScore": 21,
      "llmScores": [
        21,
        20
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
      "title": "349亿里近九成投向设备，国内存储巨头在补什么？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782804",
      "publishedAt": "2026-10-07T01:43:48.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "国内DRAM龙头在宣布G5量产后启动两项新项目，总投资349亿元，其中约305.8亿元与设备购置及安装直接相关。叠加此前345亿元募投计划，资本开支正在从单纯扩产延伸至工艺升级、良率爬坡和后道测试补强。G5意味着国内先进DRAM已经跨过工艺平台量产这道门槛，而349亿元项目则把下一阶段的问题摆到台前：量产之后如何继续提升良率、降低成本、推进下一代工艺，并避免后道测试成为新的瓶颈。更值得注意的是，3",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d0b0261f2e1b",
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
      "title": "美国能源信息署：预计2026年WTI原油价格为88.21美元/桶，布伦特原油价格96.32美元/桶",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015146953904260",
      "publishedAt": "2026-10-07T01:38:41.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "美国能源信息署短期能源报告显示，预计2026年WTI原油价格为88.21美元/桶，此前预期为84.65美元/桶，预计2027年WTI原油价格为79.74美元/桶，此前预期为69.74美元/桶。预计2026年布伦特原油价格96.32美元/桶，此前预计91美元/桶，预计2027年布伦特原油价格83.74美元/桶，此前预期为73.74美元/桶。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_d95f29fc5004",
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
      "title": "美股三大指数集体上涨，纳指、标普500指数收盘创新高",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015143888294016",
      "publishedAt": "2026-10-07T01:35:34.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，10月7日收盘，美股三大指数集体上涨，道指涨0.49%，纳指涨0.45%，标普500指数涨0.58%，纳指、标普500指数创收盘新高，大型科技股多数上涨，英伟达涨0.14%，特斯拉涨0.51%，苹果涨0.22%，亚马逊涨1.95%，谷歌涨0.35%，Mate跌0.41%。热门中概股多数上涨，拼多多涨0.64%，百度涨0.07%，京东涨0.53%，蔚来涨1.75%，小鹏集团涨1.7%，哔",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2f68e23702cf",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
        "行情播报"
      ],
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "日本东证指数升破历史最高收盘水平",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015135331520649",
      "publishedAt": "2026-10-07T01:26:52.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "受美股上涨带动，日本东证指数盘中上涨0.4%，至4201.34点，超过8月14日创下的4197.20点历史收盘纪录。日经225指数基本持平。隔夜标普500指数收盘创历史新高，得益于企业盈利韧性以及人工智能相关支出前景向好。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b047f316d516",
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
          "score": 86,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "港股开盘：恒生指数下跌0.45%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4015134352969603",
      "publishedAt": "2026-10-07T01:25:52.000Z",
      "fetchedAt": "2026-10-07T06:08:49.900Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，10月7日，港股开盘，恒生指数开盘下跌0.45%，恒生科技指数跌0.33%。明星科网股普跌，阿里巴巴跌1.39%，美团、京东集团跌近1%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_43d139b09e77",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
        "行情播报"
      ],
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "香港恒生指数低开0.45%，恒生科技指数低开0.33%",
      "sourceUrl": "https://wallstreetcn.com/articles/3783096",
      "publishedAt": "2026-10-07T01:24:48.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "生物医药股开盘走低，药明生物跌超3%，百济神州、信达生物跌超2%。比亚迪电子、阿里巴巴、京东健康跌超1%。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_86c3986be2f6",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 17,
      "rawScore": 69,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
      "passesTierGate": false,
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
          "score": 72,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "attentionScore": 17,
      "llmScores": [
        17,
        16
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
      "title": "世行：东亚与太平洋地区深度融入全球价值链，从AI相关活动激增中获益",
      "sourceUrl": "https://www.yicai.com/news/103384917.html",
      "publishedAt": "2026-10-07T01:23:48.000Z",
      "fetchedAt": "2026-10-07T06:05:18.733Z",
      "timeConfidence": "source",
      "summary": "在EAP范围内，预计2026年将有多个经济体的增速超过预期。世界银行（下称“世行”）发布的东亚与太平洋地区（EAP）最新经济半年报显示，预计EAP地区2026年的经济增速为4.5%，对全球逆风展现出韧性。\n\n世行称，该地区各经济体和各行业的增长仍不均衡，而人工智能（AI）应用的日益普及正催生新的机遇。\n\n同期，东盟与中日韩（10+3）宏观经济研究办公室（AMRO）也发布最新一期《东盟与中日韩区域经",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2844c800e13f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 52,
      "rawScore": 52,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "法国提出各类“削减赤字”方案，欧美国债抛售潮暂歇",
      "sourceUrl": "https://wallstreetcn.com/articles/3783094",
      "publishedAt": "2026-10-07T01:23:22.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "法国近期密集提出削减赤字方案，试图扭转不断恶化的财政状况，法国债市压力随之暂时缓解。法国10年期国债收益率周二下行约12个基点至4.75%附近，与德国同期国债的利差也有所收窄。\n法国政府计划通过削减支出、控制养老金开支等措施，将明年赤字率控制在GDP的5%以内；勒庞领导的国民联盟则提出“影子预算”，计划削减逾1400亿欧元支出，将明年赤字率降至3.7%，并在2032年前进一步降至2.2%。\n但这些",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d8f21d2525f4",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 82,
      "rawScore": 82,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 46,
          "reasons": [
            "命中保险运营核心主题 1 项",
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
      "title": "伪科普、加速包、双通道……第三方平台的“抢票”套路有哪些？小心别中招！",
      "sourceUrl": "https://mini.caixin.com/2026-10-07/102490970.html",
      "publishedAt": "2026-10-07T01:20:09.000Z",
      "fetchedAt": "2026-10-07T06:05:03.365Z",
      "timeConfidence": "source",
      "summary": "伪科普、加速包、双通道“抢票”、余票“实时监控”、“无票”变“有票”……第三方平台的这些“抢票”套路不仅有附加收费、捆绑销售、虚假营销、退票改签不便、个人信息泄露等风险，还可能造成经济损失，请旅客朋友注意识别与防范。\n套路一：故弄玄虚 发布“伪科普”短视频诱导旅客至第三方平台购票\n　　一些网络博主身着模仿铁路样式的制服，通过社交媒体发布伪科普短视频，宣称可以帮助旅客购票，能够提供所谓的“内部购票渠",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_51b4ef1a95b1",
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
      "title": "中东原油出口已恢复九成：油价为何仍在100美元？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782808",
      "publishedAt": "2026-10-07T01:19:24.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "近期，中东原油供应端已出现显著修复。过去一周，中东石油出口10日均值已达到2050万桶/日，为2025年水平的89%；其中原油出口1750万桶/日，恢复至战前水平98%，但成品油仅300万桶/日，为战前水平的58%。\n截至9月27日当周中东原油出口初值1670万桶/日，较前一周增加220万桶/日，达到正常水平约93%。若含暗船出口，波斯湾石油出口已恢复至2330万桶/日，与2025年平均持平；其中",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_79da7862942b",
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
      "title": "再借400亿美元，SpaceX要买英伟达芯片",
      "sourceUrl": "https://wallstreetcn.com/articles/3783093",
      "publishedAt": "2026-10-07T00:56:37.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "继6月完成250亿美元投资级债券发行后，SpaceX又计划筹集400亿美元，为大规模采购英伟达芯片提供资金，进一步押注AI基础设施建设。\n据英国《金融时报》近日报道援引知情人士，SpaceX计划通过约100亿美元银行贷款和300亿美元投资级债券筹集资金，以支付这笔巨额芯片订单。Apollo预计将主导交易，并向广泛的机构投资者分销债务；债券巨头Pimco也在参与谈判的少数贷款方之列。交易预计于202",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e25a794f159a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 31,
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
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 28,
          "reasons": [
            "命中关联主题 1 项"
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
      "attentionScore": 31,
      "llmScores": [
        21,
        40
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
      "title": "标普500创出新高，但几乎只有AI交易在涨",
      "sourceUrl": "https://wallstreetcn.com/articles/3783091",
      "publishedAt": "2026-10-07T00:53:17.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "标普500指数周二触及新高，但这场反弹的驱动力极为集中：少数押注人工智能的科技巨头几乎独力撑起整个市场，而医疗、银行、消费等其他板块正在下跌。市场广度的持续收窄，正在引发投资者对这轮涨势能否持续的疑虑。\n周二，标普500指数收盘创历史新高，为自8月13日以来首次刷新纪录。纳斯达克综合指数同步创下连续第二个交易日收盘新高。\"科技七雄\"（Magnificent Seven）合计市值收盘逼近25万亿美元",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_393009cd4e32",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 51,
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
          "score": 29,
          "reasons": [
            "命中关联主题 1 项",
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
      "attentionScore": 51,
      "llmScores": [
        49,
        52
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
      "title": "机构调研超600家公司！电子、半导体成主攻方向",
      "sourceUrl": "https://wallstreetcn.com/articles/3783092",
      "publishedAt": "2026-10-07T00:42:53.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "Wind数据显示，9月1日至9月30日，机构调研步履不停，在节前密集走访超600家上市公司，其中57家公司获50家以上机构青睐。\n\n\n\n\n从行业分布来看，电子、机械设备和医药生物等行业获机构投资者关注度较高，其中不乏外资机构的调研身影。从调研内容来看，上市公司业务进展、产能落地情况，以及海内外布局规划是机构追踪的热点。\n\n\n\n\n\n产品出货、产能情况受追问\n进入10月，上市公司三季报披露大幕即将开启",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0b8a51cd2f5d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 28,
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
      "attentionScore": 28,
      "llmScores": [
        34,
        22
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
      "title": "DRAM迎超级成长周期 传南亚科计划涨价 涨幅最高达20%",
      "sourceUrl": "https://www.cls.cn/detail/2498430",
      "publishedAt": "2026-10-07T00:29:57.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月7日讯 据台湾经济日报7日报道，中国台湾存储厂商南亚科近期陆续通知客户，将再度上调DRAM合约价格，最高涨幅可达20%。\n针对再度涨价的市场传闻，南亚科方面表示，针对客户报价相关事宜，不予置评。业内人士认为，随着南亚科启动新一轮合约价上调，涨价效应将逐步传导落地，有望抬升公司平均售价（ASP），改善盈利水平，推动整体经营持续向好。\n受益于存储行业高景气，南亚科今年业绩持续走高。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2ce356a1f2de",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 38,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
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
          "score": 73,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "attentionScore": 38,
      "llmScores": [
        31,
        45
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
      "title": "美股连创新高 税却越收不上来 美国国税局急眼了",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783090",
      "publishedAt": "2026-10-07T00:22:44.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "10月6日，标普500指数再次收于历史高点附近，今年以来已超过30次刷新收盘纪录。从2020年3月疫情低点算起，美股在六年半里上涨了约四倍。 美联储的数据显示，美国家庭持有的未实现资本利得已经超过30万亿美元——光是美国人炒股赚了还没交税的利润，就足以还掉四分之三的美债。 但国库并没有因为牛市而宽裕。2026财年，联邦财政赤字预计达到2.1万亿美元。更要命的是利息：前11个月光还债务利息就花了1.",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9f054758b41a",
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
      "title": "10月7日会员早报：英伟达逼近6万亿美元 EIA 连续上修油价预期",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783088",
      "publishedAt": "2026-10-06T23:40:33.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "1、【英伟达逼近6万亿美元】美国大型股指再创历史新高。受AI乐观情绪重燃提振，标普500指数在最新交易中盘中一度上涨0.8%，刷新纪录高位。领涨的依旧是AI概念龙头。全球市值最高的公司、芯片制造商英伟达股价续创新高，市值向6万亿美元关口逼近。英伟达曾在2025年10月成为全球首家市值突破5万亿美元的公司，其后一度回落。 2、【EIA 连续上修油价预期】美国能源信息署（EIA）在最新一期短期能源展望",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b40b6bade00a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "noiseCaps": [
        "时间性盘点"
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "港股早报 | IPO全年募资有望冲刺4800亿港元 OpenAI300亿美元融资获贝莱德等接洽",
      "sourceUrl": "https://www.cls.cn/detail/2498413",
      "publishedAt": "2026-10-06T23:16:43.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "热点聚焦\n1.根据相关报道，综合多家会计师事务所及市场人士观点来看，普遍预期四季度港股IPO势头有望持续，乐观情景下全年募资总额有望冲击创纪录的4800亿港元。\n2.知情人士称，包括MGX在内的多家阿联酋投资基金正在与OpenAI洽谈，可能参与这家人工智能巨头最新一轮300亿美元融资。其中一位知情人士表示，这些基金将组成一个财团参与OpenAI这轮融资。另一位人士称，这些阿联酋基金讨论的合计投资金",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fa70279e6d89",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "noiseCaps": [
        "时间性盘点"
      ],
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
          "score": 50,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
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
      "title": "新高！美股三大股指全线上扬，芯片股走强，纳指、标普500再破纪录，中概股普涨，油价小幅上涨",
      "sourceUrl": "https://www.yicai.com/news/103384862.html",
      "publishedAt": "2026-10-06T23:13:39.000Z",
      "fetchedAt": "2026-10-07T06:05:18.733Z",
      "timeConfidence": "source",
      "summary": "芯片股走强进一步推高了市场行情。*美股三大股指全线上扬，美债收益率回落；*芯片股涨势如潮，纳指再创新高；*国际油价小幅上涨，布油涨0.26%。&nbsp;6日美股三大股指全线上扬。权重科技股上涨，加之美国国债收益率下行，显著推高市场行情。截至收盘，道指涨253.38点，涨幅0.49%，报51521.28点；纳指涨122.48点，涨幅0.45%，报27599.79点；标普500指数涨44.99点，涨",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_399ff957635a",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项"
          ]
        },
        "privateFundSales": {
          "score": 36,
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
      "title": "石油与AI芯片进口推动，美国8月贸易逆差扩至1056亿美元，创17个月新高",
      "sourceUrl": "https://wallstreetcn.com/articles/3783089",
      "publishedAt": "2026-10-06T23:09:28.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "美国贸易逆差持续走扩，AI基建热潮与关税波动推动进口创纪录，拖累三季度GDP预期。\n10月6日周二，美国商务部公布数据显示，8月商品与服务贸易逆差环比扩大13.7%至1056亿美元，超出经济学家预期的1021亿美元，创2025年3月以来最高水平，彼时正值特朗普宣布所谓\"对等关税\"前夕的抢进口潮。\n\n贸易逆差扩大源于进口增速超过出口增速。美国8月份进口额达到创纪录的4208亿美元，较7月份增长4.3",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_68da3282ed1f",
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
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
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
      "title": "【早报】2026年诺贝尔物理学奖揭晓；国内航线燃油附加费将上调",
      "sourceUrl": "https://www.cls.cn/detail/2498419",
      "publishedAt": "2026-10-06T23:00:00.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "宏观新闻\n1、外交部发言人郭嘉昆昨日答记者问。路透社记者提问称，美国官员认为中国在2028年前“入侵”台湾的可能性正变得越来越低。郭嘉昆表示，台湾问题是中国内政，解决台湾问题完全是中国人自己的事，不容任何外部势力干涉。美方应落实中美元首会晤重要共识，恪守一个中国原则和中美三个联合公报，慎重处理台湾问题。\n2、据媒体报道，10月5日法国和德国向欧委会提交非正式文件，要求欧盟强化使用贸易防御措施，并推",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_522fbe4a81df",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "noiseCaps": [
        "时间性盘点"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "SpaceX计划筹集400亿美元资金以购买英伟达芯片 | 环球市场",
      "sourceUrl": "https://www.cls.cn/detail/2498416",
      "publishedAt": "2026-10-06T22:57:05.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "隔夜股市\n\n美东时间周二，美股三大指数集体收涨，道指涨0.49%，纳指涨0.45%，标普500指数涨0.58%，纳指、标普500指数创收盘新高。\n尽管市场担忧战争、高通胀以及债券市场带来的压力，但美股仍持续走高，一个关键因素是：企业持续实现盈利增长的能力。\n分析师预计，标普500指数成分股企业第三季度每股收益整体将同比增长近30%。如果这一预期最终实现，将意味着企业盈利连续第三个季度实现超过25%",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_626a091b5efb",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "noiseCaps": [
        "无口径收益宣传"
      ],
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
            "命中二级市场投教核心主题 5 项",
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
      "eventId": "event_4cbc155133f9"
    },
    {
      "title": "SpaceX为购买英伟达芯片而寻求融资400亿美元。 本次融资将由阿波罗牵头。（英国金融时报）",
      "sourceUrl": "https://wallstreetcn.com/livenews/3174667",
      "publishedAt": "2026-10-06T22:31:13.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "SpaceX为购买英伟达芯片而寻求融资400亿美元。\n\n本次融资将由阿波罗牵头。（英国金融时报）",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_aeba052c8015",
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
        "行业动态"
      ],
      "eventId": "event_4cbc155133f9"
    },
    {
      "title": "AI算力订单暴增至500亿美元！英伟达支持的Lambda拟融资40亿美元冲刺IPO",
      "sourceUrl": "https://www.cls.cn/detail/2498406",
      "publishedAt": "2026-10-06T22:02:58.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "财联社10月7日讯（编辑 牛占林）据知情人士透露，获英伟达支持的云计算初创公司Lambda正在筹集至多40亿美元资金，这将是该公司计划首次公开募股(IPO)前的最后一轮融资。\n此次融资将使Lambda的投前估值达到145亿美元， 本轮IPO前融资由黑石集团和Coatue Management领投。这两家投资机构近年来均积极布局AI和数据中心领域。\n据报道，Lambda公司管理层的目标是在2027年",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ab1185830942",
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
      "eventId": "event_1ad2a684dd4f"
    },
    {
      "title": "美股收盘：标普、纳指均创历史新高 市场焦点转向财报季",
      "sourceUrl": "https://www.cls.cn/detail/2498401",
      "publishedAt": "2026-10-06T21:20:57.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "财联社10月7日讯（编辑 牛占林）美东时间周二，美股三大指数集体收涨，其中纳指、标普500指数创收盘新高。随着原油价格趋于稳定、美国国债收益率回落，近期困扰投资者的一些担忧有所缓解，市场焦点也开始转向即将到来的第三季度财报季。\n“当油价趋于稳定或回落时，市场对能源推动型通胀的担忧就会减弱，从而带动美国国债收益率下降，并进一步推升股市。”Wealthspire Advisors高级副总裁Oliver",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e4a027f090b2",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项"
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
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "美国中期选举向民主党倾斜，黄金压制暂缓但有色与原油分化，中国国庆客流高位电影市场偏弱---1006宏观脱水",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783070",
      "publishedAt": "2026-10-06T19:17:57.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "美国中期选举格局进一步向民主党倾斜，众议院比参议院更明显偏向民主党。选举变量更多影响中期财政与政策不确定性，但短期交易主线仍围绕PCE、非农和CPI数据。国庆期间黄金震荡走平，但上涨行情重启有赖于加息预期见顶及信用叙事重新强化。铜价假期震荡走平，核心取决于全球制造业周期上行空间。原油受暗船转运压制但成品油紧缺提供支撑，低库存与下游瓶颈支撑油价难跌。中秋国庆假期形成全年最长出行窗口，全社会跨区域人员",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bb5234ac8fc1",
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
          "score": 78,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 2 项"
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
      "title": "美伊战争持续消耗全球石油库存 EIA再度上调油价预测",
      "sourceUrl": "https://www.cls.cn/detail/2498377",
      "publishedAt": "2026-10-06T18:52:44.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "财联社10月7日讯（编辑 牛占林）美国能源信息署(EIA)周二再次上调今年和明年的油价预测。该机构表示，随着全球石油库存快速下降，加之柴油市场持续趋紧，持续中的美伊战争正进一步推高油价。\nEIA在最新发布的《短期能源展望》报告中表示，沙特关键的东西管道遭到袭击，凸显出原油实物供应面临进一步中断的风险。 \n与此同时，柴油供应异常紧张正在推高原油需求，因为炼油商正寻求最大限度提高柴油产量。因此，全球石",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c581f1291d16",
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
      "eventId": null
    },
    {
      "title": "贝森特重弹“降债”老调，市场人士：愿景不是计划",
      "sourceUrl": "https://wallstreetcn.com/articles/3783085",
      "publishedAt": "2026-10-06T18:49:39.000Z",
      "fetchedAt": "2026-10-07T06:05:03.605Z",
      "timeConfidence": "source",
      "summary": "美国财长贝森特日前再度为特朗普政府的财政路线背书，称经济增长与支出约束双管齐下可压低债务率。但市场策略师和独立经济学家普遍认为，这不过是又一轮口头干预，难以改变美国财政的基本走向。\n贝森特于美东时间10月5日周一晚间表示，在继承拜登政府留下的“一大堆债务”后，特朗普政府正通过“约束支出并推动经济增长”加以应对，并称GDP持续增长超过3%将有助于扭转债务与GDP之比。他还指出，在一次性支付1800亿",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_756984c25811",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 15,
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
          "score": 55,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 55,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 15,
      "llmScores": [
        15,
        15
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
      "title": "Ciena股价今日为何大涨？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3596950",
      "publishedAt": "2026-10-06T18:22:09.000Z",
      "fetchedAt": "2026-10-06T18:33:27.431Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_b066a6170b74",
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
      "title": "Discovery Mining股票今日为何下跌？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3596945",
      "publishedAt": "2026-10-06T18:14:49.000Z",
      "fetchedAt": "2026-10-06T18:33:27.431Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_9b62a54344f9",
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
      "title": "Aritzia股价今日为何下跌？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3596941",
      "publishedAt": "2026-10-06T18:03:21.000Z",
      "fetchedAt": "2026-10-06T18:33:27.431Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_495d5cc05a7d",
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
      "title": "美联储宣布重组美国银行监管体系",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596938",
      "publishedAt": "2026-10-06T17:49:22.000Z",
      "fetchedAt": "2026-10-06T18:33:27.431Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_eea33c3288d6",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 68,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 6,
        "recency": 13,
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
          "score": 45,
          "reasons": [
            "命中关联主题 2 项",
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
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_62f38f1eea61"
    },
    {
      "title": "Lambda拟筹资最高400亿元，计划2027年上市",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3596934",
      "publishedAt": "2026-10-06T17:34:16.000Z",
      "fetchedAt": "2026-10-06T18:33:27.431Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_0dfdaeb2819b",
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
      "title": "派拉蒙完成对华纳兄弟探索收购 好莱坞巨头Skydance正式诞生",
      "sourceUrl": "https://www.cls.cn/detail/2498364",
      "publishedAt": "2026-10-06T17:24:08.000Z",
      "fetchedAt": "2026-10-07T06:07:57.687Z",
      "timeConfidence": "source",
      "summary": "财联社10月7日讯（编辑 牛占林）当地时间周二，派拉蒙天空之舞完成了对华纳兄弟探索公司(WBD)的1100亿美元巨额收购，合并后的新公司正式命名为“Skydance”，也意味着一家全新的好莱坞巨头就此诞生。\n此次交易将《碟中谍》《哈利·波特》和DC影业等电影制片厂，以及CBS、CNN、Paramount+和HBO Max等大型电视及流媒体网络整合到一起，打造一家横跨电影、电视和新闻业务的综合娱乐公",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5d1b069f836c",
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
      "title": "共和党斥AI危险论，民主党质疑“大厂”影响特朗普AI政策，要求披露监管框架修改过程",
      "sourceUrl": "https://wallstreetcn.com/articles/3783082",
      "publishedAt": "2026-10-06T17:04:06.000Z",
      "fetchedAt": "2026-10-06T18:28:21.749Z",
      "timeConfidence": "source",
      "summary": "美东时间10月6日周二公开的信函显示，美国民主党参议员沃伦（Elizabeth Warren）和布卢门撒尔（Richard Blumenthal）本周一致信美国财长贝森特、商务部长卢特尼克等特朗普政府高官，要求说明科技巨头是否通过游说影响了政府的AI监管政策，并披露相关监管框架及测试机制的具体内容。\n两名参议员在信中直指，特朗普政府正在“迎合大型科技公司CEO的利益”，而不是应对日益强大的AI系统",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_50b2b7a580dc",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "胡塞武装连击沙特，霍尔木兹油轮再遭袭，但沙特称重要输油管运力恢复超八成",
      "sourceUrl": "https://wallstreetcn.com/articles/3783078",
      "publishedAt": "2026-10-06T17:03:55.000Z",
      "fetchedAt": "2026-10-06T18:28:21.749Z",
      "timeConfidence": "source",
      "summary": "中东战火仍在持续，能源运输却出现了不同于战场形势的变化：一方面，也门胡塞武装连日对沙特发动袭击，霍尔木兹海峡又有油轮遭袭消息传出；另一方面，上月沙特曾停运的重要输油管已恢复八成以上最大输送能力，能源巨头壳牌也称，中东石油流量已恢复至约八成的伊朗战事前水平。\n当地时间10月6日周二，沙特民航局称，吉达和奈季兰两座机场前一晚遭胡塞武装袭击，造成3人受伤。据央视援引英国海上贸易行动办公室（UKMTO）6",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5ff8719678c9",
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
      "title": "美联储拟大改银行监管机制，副主席Bowman：重组区域架构并调整资产门槛",
      "sourceUrl": "https://wallstreetcn.com/articles/3783081",
      "publishedAt": "2026-10-06T17:02:15.000Z",
      "fetchedAt": "2026-10-06T18:28:21.749Z",
      "timeConfidence": "source",
      "summary": "美联储计划对其银行监管体系实施大规模重组，以强化华盛顿的问责权威，并将着手更新触发更严格监管规则的资产门槛标准。\n美联储监管副主席Michelle Bowman周二表示，此次重组将把现有的12个联储地区行监管职能整合为五个新地理区域，每个区域将设立专职\"区域负责人\"，统一负责辖区内全部监管工作。这一调整旨在改变此前权责分散的格局。\nBowman同时宣布，美联储今年晚些时候将审议更新银行资产门槛，以",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_04293e3315b1",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 56,
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
          "score": 48,
          "reasons": [
            "命中关联主题 2 项",
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
          "score": 39,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_62f38f1eea61",
      "attentionScore": 56,
      "llmScores": [
        42,
        70
      ],
      "scoredBy": "llm"
    },
    {
      "title": "谷歌推出Gemini Embedding 2多模态嵌入模型",
      "sourceUrl": "https://wallstreetcn.com/articles/3783080",
      "publishedAt": "2026-10-06T16:05:23.000Z",
      "fetchedAt": "2026-10-06T18:28:21.749Z",
      "timeConfidence": "source",
      "summary": "谷歌推出Gemini Embedding 2多模态嵌入模型。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b7b7bbf68ab0",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 56,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
          "score": 42,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 29,
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
      "title": "美国政府：将明年布油价格预期上调10美元",
      "sourceUrl": "https://wallstreetcn.com/articles/3783079",
      "publishedAt": "2026-10-06T16:03:09.000Z",
      "fetchedAt": "2026-10-06T18:28:21.749Z",
      "timeConfidence": "source",
      "summary": "美国能源信息署（STEO）发布短期能源（STEO）：预计2026年布伦特原油价格96美元/桶（此前预计91美元/桶），预计2027年84美元/桶（此前预计74美元/桶）。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8a2274a2d05e",
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
      "title": "Marvell大涨！上调2028年营收预期至200亿美元，数据中心需求强劲",
      "sourceUrl": "https://wallstreetcn.com/articles/3783076",
      "publishedAt": "2026-10-06T15:29:46.000Z",
      "fetchedAt": "2026-10-06T18:28:21.749Z",
      "timeConfidence": "source",
      "summary": "Marvell Technology在投资者日进一步上调长期业绩目标，预计2028财年总营收将达到约200亿美元，高于此前给出的180亿美元目标，也超过华尔街约182亿美元的预期。\n公司同时预计，2031财年营收将达到700亿至900亿美元。明显高于华尔街目前约468.5亿美元的预期。\n这一上调反映出Marvell对AI基础设施需求的判断更加乐观。公司称，数据中心芯片需求持续增长，尤其是定制芯片业",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_76ac1ce6e4d3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 37,
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
      "eventId": null,
      "attentionScore": 37,
      "llmScores": [
        31,
        42
      ],
      "scoredBy": "llm"
    },
    {
      "title": "城堡投资Rubner看好美股四季度走势",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3596845",
      "publishedAt": "2026-10-06T15:15:17.000Z",
      "fetchedAt": "2026-10-06T15:24:41.507Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_33fdf43777c8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 9,
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
      "eventId": "event_f101880ef7bc",
      "attentionScore": 9,
      "llmScores": [
        13,
        5
      ],
      "scoredBy": "llm"
    },
    {
      "title": "摩洛哥股市收低；截至收盘摩洛哥MASI自由流通指数下跌1.62%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596844",
      "publishedAt": "2026-10-06T15:10:13.000Z",
      "fetchedAt": "2026-10-06T15:24:41.507Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_4786bf9e5a36",
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
      "title": "美股异动 | 存储芯片概念股普跌 希捷科技(STX.US)跌逾7%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596835",
      "publishedAt": "2026-10-06T15:05:44.000Z",
      "fetchedAt": "2026-10-06T15:24:41.507Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_73a1f88dc387",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 12,
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
      "eventId": "event_f101880ef7bc",
      "attentionScore": 12,
      "llmScores": [
        12,
        12
      ],
      "scoredBy": "llm"
    },
    {
      "title": "曹操出行(02643)10月6日斥资45.47万港元回购3.65万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596831",
      "publishedAt": "2026-10-06T15:05:06.000Z",
      "fetchedAt": "2026-10-06T15:24:41.507Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_7d0d056cd693",
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
      "title": "太美医疗科技(02576)10月6日斥资7.32万港元回购1.52万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596832",
      "publishedAt": "2026-10-06T15:05:06.000Z",
      "fetchedAt": "2026-10-06T15:24:41.507Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_c9fe6d2f4433",
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
      "title": "挪威股市收低；截至收盘挪威OSE总回报指数下跌0.50%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596824",
      "publishedAt": "2026-10-06T14:56:08.000Z",
      "fetchedAt": "2026-10-06T15:24:41.507Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_a77eec0ce831",
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
      "title": "以色列股市收低；截至收盘特拉维夫TA35指数下跌0.59%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596823",
      "publishedAt": "2026-10-06T14:55:40.000Z",
      "fetchedAt": "2026-10-06T15:24:41.507Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_2622a09d9103",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "eventId": null
    },
    {
      "title": "希腊股市上涨；截至收盘Athens General Composite上涨1.75%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596822",
      "publishedAt": "2026-10-06T14:55:13.000Z",
      "fetchedAt": "2026-10-06T15:24:41.507Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_340fb8084e68",
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
      "title": "系统性发展电诈金主 果敢白家从兴起到末路",
      "sourceUrl": "https://china.caixin.com/2026-10-06/102490957.html",
      "publishedAt": "2026-10-06T14:34:46.000Z",
      "fetchedAt": "2026-10-07T06:05:03.365Z",
      "timeConfidence": "source",
      "summary": "纪录片披露，白家通过政商网络渗透、武装保护承诺、技术资源共享等手段，系统性地发展电诈金主。白家涉赌、诈等资金290余亿元，造成6名中国公民死亡、多名中国公民受伤\n       　　【财新网】“一个我们有房子，我们有兵，做诈骗必须要有房子，也必须要有保护，所以他就得依附我们。”缅北果敢原权贵人士白应苍被缉拿到中国后，讲述了利用手中权力发展跨境电诈的经过。他说，诈骗的诱惑太大了，很少有人控制得住，随便",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_40051ba58848",
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
      "title": "谷歌再度出手锁定核电资源：与星座能源签署长期协议",
      "sourceUrl": "https://www.cls.cn/detail/2498324",
      "publishedAt": "2026-10-06T14:02:08.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯（编辑 赵昊）谷歌和星座能源（Constellation Energy）在各自官网公布，两家公司达成长期战略清洁能源合作协议。\n受该消息影响，星座能源（股票代码：CEG）股价一度涨近15%报每股307.58美元，创今年5月以来的最高水平。\n\n新闻稿写道，作为长期电力协议的一部分，两家公司将会把890兆瓦（MW）的核电新容量接入PJM联合电网，以满足不断增长的用电需求并提高电网可靠",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fc8983cea46c",
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
      "title": "标普500指数创下8月以来的首个纪录新高",
      "sourceUrl": "https://wallstreetcn.com/livenews/3174480",
      "publishedAt": "2026-10-06T13:33:34.000Z",
      "fetchedAt": "2026-10-06T15:17:22.581Z",
      "timeConfidence": "source",
      "summary": "标普500指数上涨0.6%，创下8月以来的首个纪录新高。英伟达一度涨近2%，达243.37美元，股价创历史新高，总市值逼近6万亿美元。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_da476cce0926",
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
      "eventId": null
    },
    {
      "title": "港股公告精选｜力量发展金红石项目正式投产 康宁医院三季度门诊均次开支增约一成",
      "sourceUrl": "https://www.cls.cn/detail/2498301",
      "publishedAt": "2026-10-06T13:24:19.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯（编辑 冯轶）财联社为您带来今日港股重要公告\n康宁医院(02120.HK)：前9月住院平均每床日总开支为333元，同比下降1.2%；门诊均次总开支为298元，同比增长7.6%，三季度门诊均次总开支为303元，同比增长9.8%。\n龙资源(01712.HK)：旗下JOKISIVU金矿钻探发现高品位样段。\n力量发展(01277.HK)：金红石项目已于2026年10月1日正式投入生产。\n",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e46b4ae2feba",
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
        "深度研究"
      ],
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "AI进化速递丨智谱GLM-5.3上线Amazon",
      "sourceUrl": "https://www.yicai.com/news/103384808.html",
      "publishedAt": "2026-10-06T13:07:48.000Z",
      "fetchedAt": "2026-10-06T15:18:54.473Z",
      "timeConfidence": "source",
      "summary": "AI进化速递丨智谱GLM-5.3上线Amazon①智谱GLM-5.3上线Amazon Bedrock；②OpenAI在其智能体擅访澳数据后采取新防范措施；③OpenAI：全球API客户可选择为指定模型开启文本水印功能；④三星电机获近2900亿韩元AI服务器MLCC订单；⑤韩国计划明年启动35亿美元前沿AI模型开发项目。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3bf38fce97e9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 54,
      "rawScore": 54,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
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
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "“无糖饮料”含糖？星巴克回应被指虚假营销",
      "sourceUrl": "https://www.cls.cn/detail/2498300",
      "publishedAt": "2026-10-06T13:04:24.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "10月6日，据中新经纬消息，近日有消费者在美国西雅图地区发起诉讼，指控星巴克八款蛋白饮料虽标注“无糖（Sugar-Free）”，但实际上含有不同量的糖，涉嫌虚假宣传。\n界面新闻查询星巴克美国官网看到，一款16盎司的冰无糖香草蛋白拿铁，营养表中明确标注含糖量为9克；同规格热款无糖香草蛋白抹茶，总糖含量达到16克，更大杯型20盎司版本总糖甚至达到20克。产品配料表写有牛奶以及乳清分离蛋白（来源于牛奶）",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4f9ee6a83f99",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "title": "机构看好港股新股市场继续火热 月之暗面、可灵AI或成下一批重磅IPO",
      "sourceUrl": "https://www.cls.cn/detail/2498297",
      "publishedAt": "2026-10-06T12:56:21.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯（编辑 冯轶）今年以来，港股IPO活动明显回暖，并呈现加速态势。 而随着内地企业赴港上市步伐加快，以及人工智能等新兴科技公司加速推进资本化，市场对港股新股市场的后续表现依旧乐观。\nWind数据显示，今年前三季度港股共115家企业IPO挂牌，同比增长69.12%；募资总额达3855.66亿港元，同比增长105.18%，已超过去年全年募资总额。且在全球主要股票市场中，港股IPO融资额",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_928215186ac9",
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
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "美国8月贸易逆差超预期扩大，进口需求强劲攀升",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3596549",
      "publishedAt": "2026-10-06T12:52:05.000Z",
      "fetchedAt": "2026-10-06T15:24:41.596Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_af7eafc7829e",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "商务部新闻发言人就法德要求欧盟强化贸易防御等保护主义工具答记者问",
      "sourceUrl": "https://www.yicai.com/news/103384796.html",
      "publishedAt": "2026-10-06T12:24:55.000Z",
      "fetchedAt": "2026-10-06T15:18:54.473Z",
      "timeConfidence": "source",
      "summary": "中方始终认为，保护主义提升不了竞争力，脱钩断链只会损人不利己。问：据媒体报道，10月5日法国和德国向欧委会提交非正式文件，要求欧盟强化使用贸易防御措施，并推出多项保护主义新工具。请问中方对此有何评论？\n\n答：中方注意到有关报道。中方始终认为，相互依赖不是风险，利益交融不是威胁，开放合作才是发展的正道。保护主义提升不了竞争力，脱钩断链只会损人不利己。希望法国和德国作为全球重要经济体，能够坚持开放合作",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e864e9fce8d1",
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
      "title": "美股期货盘前续走强 英伟达、纳指有望再创新高 | 今夜看点",
      "sourceUrl": "https://www.cls.cn/detail/2498288",
      "publishedAt": "2026-10-06T12:22:48.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯（编辑 赵昊）周二（9月1日）美股盘前，受美债收益率和国际油价走低影响，三大股指期货集体走高。\n截至发稿，道琼斯指数期货涨0.67%，标普500指数期货涨0.5%，纳斯达克100指数期货涨0.65%，一度涨近0.7%刷新历史纪录。\n\n前一天，英伟达、纳斯达克综合指数和纳斯达克100指数均收于历史新高。分析师认为，得益于AI相关股票的带动，标普成分股第三季度盈利有望同比增长超30%",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_772779738221",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "noiseCaps": [
        "行情播报"
      ],
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "大V退场后，基金公司锁定哪些互联网流量？首批营销渠道名单曝光",
      "sourceUrl": "https://www.cls.cn/detail/2498291",
      "publishedAt": "2026-10-06T12:21:50.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯（记者 吴雨其）网络营销新规正式实施后，基金公司开始陆续公布自己的互联网营销渠道。\n财联社记者梳理发现，目前嘉实基金、易方达基金、招商基金、摩根基金、广发基金、大成基金、富国基金等多家公司已经发布相关公示，支付宝理财、微信理财通、天天基金、京东金融等基金代销入口，以及微信、小红书、抖音、B站、微博等内容平台均在名单中。\n从已经披露的名单看，各家公司选择的平台差异不小。\n嘉实基金的",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_514bfed80760",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
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
        "可转化为客户沟通或投研关注",
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
          "score": 22,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 35,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
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
      "title": "商务部：希望法德不要鼓动欧盟动辄使用保护主义工具，避免以错误方式走错误道路并最终反噬自己",
      "sourceUrl": "https://wallstreetcn.com/articles/3783074",
      "publishedAt": "2026-10-06T12:17:18.000Z",
      "fetchedAt": "2026-10-06T15:17:22.581Z",
      "timeConfidence": "source",
      "summary": "商务部新闻发言人就法德要求欧盟强化贸易防御等保护主义工具答记者问\n\n问：据媒体报道，10月5日法国和德国向欧委会提交非正式文件，要求欧盟强化使用贸易防御措施，并推出多项保护主义新工具。请问中方对此有何评论？\n答：中方注意到有关报道。中方始终认为，相互依赖不是风险，利益交融不是威胁，开放合作才是发展的正道。保护主义提升不了竞争力，脱钩断链只会损人不利己。希望法国和德国作为全球重要经济体，能够坚持开放",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_61302e4ef0bd",
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
      "title": "通胀已“大致达标”，日本央行为何仍不敢连续加息？",
      "sourceUrl": "https://wallstreetcn.com/articles/3783073",
      "publishedAt": "2026-10-06T11:49:21.000Z",
      "fetchedAt": "2026-10-06T15:17:22.581Z",
      "timeConfidence": "source",
      "summary": "日本央行正接近利率正常化进程中的一个关键节点。\n周二，据路透社援引三位知情人士消息，央行可能在本月发出信号，表明潜在通胀已大致触及2%的目标。这一表态象征意义大于实际政策动作，但它将显著强化市场对12月加息的定价——隔夜指数掉期已把这一概率推升至80%。\n知情人士称，日本央行已经开始在政策沟通中强调，需要将潜在通胀锚定在2%目标附近，以此作为判断后续加息节奏与时机的依据。东京消费者通胀与央行季度“",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bda3cd5dc60b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
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
        "可转化为客户沟通或投研关注",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项"
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "英国正在考虑对来自中国的电动汽车提高进口关税 外交部回应",
      "sourceUrl": "https://wallstreetcn.com/livenews/3174443",
      "publishedAt": "2026-10-06T11:45:28.000Z",
      "fetchedAt": "2026-10-06T15:17:22.581Z",
      "timeConfidence": "source",
      "summary": "10月6日外交部发言人郭嘉昆答记者问。《金融时报》记者：据报道，英国政府正在考虑对来自中国的电动汽车提高进口关税。中方对此有何评论？\n\n郭嘉昆：有关具体问题请询中方主管部门。经贸关系的本质是发挥各自比较优势，实现互利共赢。中国电动汽车产业的发展，为包括英国在内的全球消费者提供了有竞争力的选择，也为绿色低碳转型作出了积极贡献，是供不应求的优质产能。（外交部网站）",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9ea7172a71e7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 18,
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
      "eventId": null,
      "attentionScore": 18,
      "llmScores": [
        17,
        18
      ],
      "scoredBy": "llm"
    },
    {
      "title": "10月7日预计37个高速公路路段易发拥堵，58个服务区预计充电特别繁忙",
      "sourceUrl": "https://www.cls.cn/detail/2498263",
      "publishedAt": "2026-10-06T11:31:14.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "据交通运输部动态研判，10月7日，全国高速公路有37个路段易发拥堵，主要集中在江苏、河北、安徽、广东、山东等省份。如计划途经这些路段，请合理安排出行时间和路线。\n\n假期出行前，可通过 “中国路网”微信微博、“e路畅通”微信小程序、导航地图等多渠道获取路况，提前做好出行路线规划，尽量绕避流量大、易拥堵缓行路段。\n途经车流密集路段，请保持安全车距，严禁随意穿插变道。临近高速公路出口，提前靠右行驶；一旦",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3de47bbead40",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "摩根士丹利下调沙特阿拉伯2026年GDP预测，原因何在？",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3596289",
      "publishedAt": "2026-10-06T11:21:00.000Z",
      "fetchedAt": "2026-10-06T15:24:41.596Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_f68a3eed6a7c",
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
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "高盛上调台积电2028年资本开支至980亿美元，AI扩产周期拉长到2032年后",
      "sourceUrl": "https://wallstreetcn.com/articles/3783071",
      "publishedAt": "2026-10-06T11:06:12.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "AI需求持续扩张，正驱动台积电进入新一轮更大规模的资本投入周期。\n高盛在最新研究报告中大幅上调台积电2027年及2028年资本开支预测，分别至850亿美元和980亿美元，较此前预测的780亿美元和820亿美元显著提升。与此同时，高盛预计台积电在德克萨斯州的潜在新厂将于2032年后方才进入量产阶段，意味着本轮扩产周期的时间跨度远超市场此前预期。报告维持对台积电的\"买入\"评级，并将台股12个月目标价从",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c3725271840b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 51,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
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
      "eventId": null,
      "attentionScore": 51,
      "llmScores": [
        54,
        47
      ],
      "scoredBy": "llm"
    },
    {
      "title": "纽约证券业利润剑指 900 亿美元！高盛(GS.US)连破三次季度纪录，华尔街奖金将创历史新高",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596258",
      "publishedAt": "2026-10-06T11:05:47.000Z",
      "fetchedAt": "2026-10-06T11:19:04.488Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_8f1cec1e94b8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 56,
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
          "score": 23,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "连连数字(02598)10月6日斥资31.7万港元回购9.4万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596250",
      "publishedAt": "2026-10-06T11:05:11.000Z",
      "fetchedAt": "2026-10-06T11:19:04.488Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_aaca13f280d3",
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
      "title": "顺丰同城(09699)10月6日斥资89.6万港元回购10.64万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596247",
      "publishedAt": "2026-10-06T11:05:10.000Z",
      "fetchedAt": "2026-10-06T11:19:04.488Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_126ac623b9ed",
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
      "title": "心泰医疗(02291)10月6日斥资22.05万港元回购1.7万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596248",
      "publishedAt": "2026-10-06T11:05:10.000Z",
      "fetchedAt": "2026-10-06T11:19:04.488Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_152873abb9ab",
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
      "title": "名创优品(09896)10月6日斥资173.69万港元回购10万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3596244",
      "publishedAt": "2026-10-06T11:05:09.000Z",
      "fetchedAt": "2026-10-06T11:19:04.488Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_36b0c3aa7d97",
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
      "title": "继月之暗面后，智谱接入海外云厂商 中国AI模型商业化出海提速",
      "sourceUrl": "https://www.cls.cn/detail/2498254",
      "publishedAt": "2026-10-06T10:51:37.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月6日讯（记者 李明明）又一家中国AI大模型企业接入海外云厂商。  \n10月6日，亚马逊云科技（AWS）旗下大模型服务平台Amazon Bedrock官宣接入智谱GLM-5.3，AWS将基于模型调用量与智谱进行收入分成。\n《科创板日报》记者进一步独家获悉，除AWS外，智谱近期已与多家海外云厂商落地收入分成模式；国内方面，智谱已与阿里云百炼平台等头部云厂商签署类似分成协议，华为云已",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3be004dd3c9d",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "Constellation Energy美股盘前涨超5%，报道称谷歌与其达成890兆瓦的核电产能协议",
      "sourceUrl": "https://wallstreetcn.com/livenews/3174425",
      "publishedAt": "2026-10-06T10:33:47.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "Constellation Energy美股盘前拉升，现涨超5%，报道称谷歌与Constellation Energy宣布达成一项长期协议，将在20年内为伊利诺伊州、宾夕法尼亚州和新泽西州的PJM电网新增890兆瓦核电容量。该协议将创造约7,200个就业岗位，投资额达43亿美元。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_57097770eae2",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "eventId": null
    },
    {
      "title": "全球长端利率冲向新高：美债5.3%之后，美股还能撑多久？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783068",
      "publishedAt": "2026-10-06T10:21:39.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "随着全球长端利率持续飙升、债市抛售压力不断加剧，市场愈发担忧债市动荡将通过估值压缩、波动率抬升与流动性收紧等渠道向股市传导。美国10年期美债收益率一度升至5.3%以上，30年期逼近5.70%，正迈向6%；两者均创2002年以来新高。英国30年期收益率自1998年以来首次触及6%；法国10年期OAT接近5%，法德利差扩至150bp以上，为2011年欧债危机以来最高水平。全球长端利率普涨，主要由实际利",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_103f6c78f97b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 11,
        "recency": 13,
        "actionability": 8
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 5 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 36,
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
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "西班牙8月工业产出环比下降0.7%，同比增长1.5%",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3596066",
      "publishedAt": "2026-10-06T10:03:31.000Z",
      "fetchedAt": "2026-10-06T11:19:04.565Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_9d6f4197f741",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 15,
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
      "eventId": null,
      "attentionScore": 15,
      "llmScores": [
        15,
        15
      ],
      "scoredBy": "llm"
    },
    {
      "title": "2026年诺贝尔物理学奖揭晓",
      "sourceUrl": "https://wallstreetcn.com/articles/3783069",
      "publishedAt": "2026-10-06T09:49:27.000Z",
      "fetchedAt": "2026-10-06T15:17:22.582Z",
      "timeConfidence": "source",
      "summary": "Halzen‌获得诺贝尔物理学奖。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_df5ace029df0",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 56,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
          "score": 42,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 29,
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
      "eventId": "event_e28709d78af5"
    },
    {
      "title": "捷克9月通胀率升至2.5%，能源价格涨势为主因",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3596053",
      "publishedAt": "2026-10-06T09:47:22.000Z",
      "fetchedAt": "2026-10-06T11:19:04.565Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_657d5062b406",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "Altman深度访谈：人类灭绝风险非零、开源模型将引发网络安全海啸，算力竞赛不会停",
      "sourceUrl": "https://wallstreetcn.com/articles/3783067",
      "publishedAt": "2026-10-06T09:34:13.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "10月5日，OpenAI联合创始人兼CEO Sam Altman在接受《名利场》深度专访时，就人工智能的存在性风险、开源模型的网络安全威胁、监管边界以及AI基础设施竞赛等核心议题发表了迄今最为系统的表态。他承认AI导致人类文明终结的概率\"非零\"，同时警告开源大模型将引发\"网络安全海啸\"，并坚持认为算力投入与安全标准必须同步提升。\n在风险与监管问题上，Altman的立场颇为微妙：他一方面主动暂停了A",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_85f387ff3358",
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
          "score": 20,
          "reasons": [
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
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "OpenAI在其智能体擅访澳数据后采取新防范措施",
      "sourceUrl": "https://www.36kr.com/newsflashes/4014160822505345",
      "publishedAt": "2026-10-06T09:24:38.000Z",
      "fetchedAt": "2026-10-06T11:17:55.012Z",
      "timeConfidence": "source",
      "summary": "美国开放人工智能研究中心（OpenAI）首席战略官贾森·权6日在悉尼表示，OpenAI一个智能体未经授权访问澳大利亚国民医疗保险体系数据门户后，其公司已采取新防范监控措施，并已从事件中吸取教训。权当天接受澳议会下设人工智能联合特别委员会质询时说，该事件促使公司增设了监控机制：一旦模型以违规方式接入互联网，工作人员可立即介入终止训练；同时该公司支持澳大利亚针对同类事件建立强制报告制度。 (新华社)",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_46d1d800594c",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 61,
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 8,
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
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 37,
          "reasons": [
            "命中保险运营核心主题 1 项"
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
      "title": "“AI风险吹哨人”作证：AI巨头“极度无视风险”，AI接管人类文明的可能性约1/3",
      "sourceUrl": "https://wallstreetcn.com/articles/3783059",
      "publishedAt": "2026-10-06T09:23:33.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "Anthropic前研究员Jacob Coxon周一在纽约市议会听证会上作证称，按照目前的路径，人类失去对AI控制的可能性超过五成，结局可能是人类灭绝。他表示：\n\n\"考虑到其中的利害，这些公司极其鲁莽。\"\n\n同场作证的前谷歌DeepMind研究员Alex Turner估计，AI接管人类文明的概率\"大约是三分之一\"。前OpenAI研究员Daniel Kokotajlo则警告，科技公司即便保住了对AI",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e676628f36b2",
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
          "score": 20,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "欧元区建筑板块9月大幅萎缩，新订单连续54个月下滑",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3595951",
      "publishedAt": "2026-10-06T09:02:42.000Z",
      "fetchedAt": "2026-10-06T11:19:04.565Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_710e355f0588",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "专访华侨银行大中华区总裁王克：中企在东南亚布局不断深入，已形成区域性价值链 ｜慧眼中国环球论坛",
      "sourceUrl": "https://www.yicai.com/news/103384738.html",
      "publishedAt": "2026-10-06T09:01:38.000Z",
      "fetchedAt": "2026-10-06T11:15:44.833Z",
      "timeConfidence": "source",
      "summary": "中企在东南亚的发展正从单一的“建厂出海”转向“整合区域价值链、开拓本土消费市场与深度本地化经营”的全面升级。中国企业正在加速开拓东南亚市场。\n\n在近期由新加坡通商中国(Business China)主办的2026年慧眼中国环球论坛（FCGF）上，中国与东盟的贸易往来、投资流动与生产网络持续深化，以及双方在数字经济、绿色转型、AI 治理及标准协调等领域的合作潜力成为重要议题。\n\n会议期间，华侨银行大",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f5c77fa24ac7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 20,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "英国建筑业9月降幅收窄，PMI创八个月最小跌幅",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3595947",
      "publishedAt": "2026-10-06T09:00:16.000Z",
      "fetchedAt": "2026-10-06T11:19:04.565Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_f62339ae96f0",
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
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "国庆假期后首个交易日 20只基金将集中开启认购",
      "sourceUrl": "https://www.36kr.com/newsflashes/4014156616863877",
      "publishedAt": "2026-10-06T09:00:00.000Z",
      "fetchedAt": "2026-10-06T11:17:55.012Z",
      "timeConfidence": "source",
      "summary": "10月8日是假期后首个交易日，有20只基金将开启认购，形成10月首个发行小高峰。20只产品中包含被动指数型基金7只、偏股混合型基金5只、债券型基金3只、增强指数型基金3只，另有FOF基金和REITs各1只。从投资主题看，科技成长方向布局最为集中，涉及科创板芯片设计、科创创业人工智能、软件开发、机器人等多个细分领域。 (中证报)",
      "sourceName": "36氪",
      "category": "products",
      "tags": [
        "产品发布"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_9a1ef89b3d73",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 32,
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
          "score": 71,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "产品动态",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 32,
      "llmScores": [
        18,
        46
      ],
      "scoredBy": "llm"
    },
    {
      "title": "谁将胜出？债券风暴席卷欧美日，全球股市却逼近新高",
      "sourceUrl": "https://wallstreetcn.com/articles/3783064",
      "publishedAt": "2026-10-06T08:54:15.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "全球债券市场持续承压，但股票投资者选择了“无视”。在美债收益率触及二十年高位、欧洲债市跌至数十年低点之际，全球股市不仅未受拖累，反而逼近历史新高。这场债券与股票之间的分歧，正成为当前市场最核心的叙事。\n\n周二，美股期货小幅走高，标普500指数距创下8月以来首个历史新高仅一步之遥，纳斯达克100指数期货则进一步巩固于纪录高位。与此同时，此前遭抛售的美债和欧洲债券出现反弹，10年期美债收益率在触及20",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b16ddc8861c0",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 5 项"
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
      "title": "硬盘磁头成兵家必争之地：希捷、东芝竞购TDK业务",
      "sourceUrl": "https://www.cls.cn/detail/2498217",
      "publishedAt": "2026-10-06T08:53:53.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯（编辑 赵昊）最新消息显示，希捷科技和东芝都在争夺日本TDK公司旗下的硬盘磁头业务，两家公司都希望借此跟上AI数据中心存储设备不断增长的需求。\n知情人士透露，东芝于今年春季开始与从事机械硬盘零部件业务的TDK展开谈判，随后希捷在夏季提出了更高报价。知情人士表示，潜在的交易金额预计最高可达数十亿美元。\n受该消息影响，TDK在日股交易时段一度升约3.7%至每股3698日元，创7月7日",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_199423f7af26",
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
      "title": "AI生态如何应对“天价存储”？降规、分离负载和CXL内存池化",
      "sourceUrl": "https://wallstreetcn.com/articles/3783065",
      "publishedAt": "2026-10-06T08:46:50.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "内存短缺已成为本轮AI建设周期中最持久的结构性制约，而AI算力扩张的脚步不会等待新晶圆厂落地。面对这一矛盾，整个产业链正在探索三条绕道而行的路径——降低内存规格、拆解推理负载，以及通过CXL技术实现内存池化共享——并在此过程中催生出新的投资机会。\n摩根士丹利在最新研究报告中指出，英伟达CEO黄仁勋近期已明确表态，行业需要以全新思维应对内存瓶颈。这并非悲观信号，而是产业界对未来数年持续短缺的主动预判",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_21eaba669052",
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
      "title": "印度电信巨头Jio据悉寻求约1140亿美元IPO估值",
      "sourceUrl": "https://www.36kr.com/newsflashes/4014111082254216",
      "publishedAt": "2026-10-06T08:35:49.000Z",
      "fetchedAt": "2026-10-06T11:17:55.012Z",
      "timeConfidence": "source",
      "summary": "据报道，印度电信巨头Jio据悉在IPO中寻求约1140亿美元估值。Jio计划在10月19日当周启动IPO，并于10月30日前上市。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0ce0927b8e42",
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
      "eventId": "event_b95c20d585fa"
    },
    {
      "title": "港股收盘 | 三大指数集体收涨 地产和医药股联袂走强",
      "sourceUrl": "https://www.cls.cn/detail/2498214",
      "publishedAt": "2026-10-06T08:34:57.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯(编辑 胡家荣)港股三大指数集体收涨。截至收盘，恒生指数涨1%，报24280.56点；恒生科技指数涨0.94%，报4223.08点；国企指数涨0.96%，报8128.97点。\n今日市场\n从盘面来看，房地产、医药、AI应用股涨幅居前，而光通信、PCB、半导体股则集体走弱。\n利好政策密集落地 世茂集团涨近13%\n截至收盘，世茂集团(00813.HK)涨12.77%，远洋集团(0337",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a6787f1964f2",
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
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "东芝扩产HDD新闻爆出后，大摩反而更看涨而非看跌",
      "sourceUrl": "https://wallstreetcn.com/articles/3783062",
      "publishedAt": "2026-10-06T08:32:35.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "东芝宣布投资600亿日元扩建菲律宾硬盘工厂，此前令希捷（STX）和西部数据（WDC）单日重挫逾10%。然而，摩根士丹利在密集走访行业渠道后得出截然相反的结论：这不是论题的终结，而是买入机会。\n摩根士丹利分析师Erik W. Woodring团队渠道核查显示，东芝的扩产规模被市场严重高估——菲律宾工厂两年产能翻倍折算至年化增速约30%，与行业整体供给增速相当，远低于需求增速。更关键的是，渠道核查显示",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0f5254c246c1",
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
        "无口径收益宣传"
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
      "title": "不投资就加税！在特朗普关税威胁后，韩国\"基本确定\"参与阿拉斯加天然气项目",
      "sourceUrl": "https://wallstreetcn.com/articles/3783061",
      "publishedAt": "2026-10-06T08:29:50.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "美国副总统万斯最新表示，韩国参与阿拉斯加液化天然气（LNG）项目\"基本上会成行\"，为这一价值540亿美元的能源合作计划注入了新的确定性。\n万斯周一在前往阿拉斯加途中于安德鲁斯联合基地对记者表示，\"我认为这件事会发生。当然，一些细节还需要敲定，韩国方面也就此表过态。\"他同时强调，\"美国天然气需求强劲，我们有信心推动这件事落地。\"与此同时，据彭博报道，韩国已于上周向美国汇出24亿美元，作为双边贸易协议",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7e656c319e8d",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "一批北大和清华博士，从字节和腾讯拿到数百万年薪",
      "sourceUrl": "https://www.yicai.com/news/103384730.html",
      "publishedAt": "2026-10-06T08:29:18.000Z",
      "fetchedAt": "2026-10-06T11:15:44.833Z",
      "timeConfidence": "source",
      "summary": "顶尖高校的毕业生薪酬向上翻滚人工智能浪潮里，顶尖高校的毕业生薪酬向上翻滚。\n\n近日，数位熟悉北京大学博士就业情况的人士对第一财经记者透露，人工智能相关专业的博士生毕业后，第一年的薪资达到数百万人民币已经不鲜见，一些毕业生的打包薪资甚至可以更高。\n\n人工智能的能力越来越强，它也在高校毕业生之间制造分化，那些非顶尖的高校和毕业生们在这轮技术变革里承受压力。\n\n\n\n谁在竞逐高端人才\n\n近日，一家人工智能",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_76549ac23fb6",
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
      "title": "恒生指数、恒生科技指数均涨约1%，药品股、生物技术股上扬",
      "sourceUrl": "https://www.36kr.com/newsflashes/4014118896095369",
      "publishedAt": "2026-10-06T08:12:54.000Z",
      "fetchedAt": "2026-10-06T11:17:55.012Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，港股收涨，恒生指数涨1%，恒生科技指数涨0.94%。智谱涨逾7%，GLM-5.3上架AmazonBedrock。药品股、生物技术股上扬，康希诺生物涨超14%，百奥赛图-B涨超11%，再鼎医药涨超9%，英矽智能、中国生物制药、康方生物涨超4%，三生制药、和黄医药涨超3%，和铂医药-B涨约3%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_946c4821e445",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 62,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
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
      "title": "老铺黄金，打折降价！实探假期黄金市场",
      "sourceUrl": "https://wallstreetcn.com/articles/3783058",
      "publishedAt": "2026-10-06T07:55:48.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "国庆假期期间，中国证券报记者对北京地区黄金消费市场进行实地走访发现，多家黄金珠宝品牌推出优惠活动，其中最受关注的是“以旧换新”优惠。从销售情况看，多家门店反馈，节假日客流和消费情况整体好于平时。\n值得注意的是，记者走访了解到，老铺黄金已开启打折降价活动，部分款式在原价9折的基础上还可叠加VIP会员9.5折优惠。\n\n\n\n\n\n老铺黄金部分产品打折降价\n\n\n\n\n\n“门店部分商品有9折优惠，包括素金系列和",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c07e5681d9c3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 65,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 16,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 34,
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
      "title": "软银支持的DayOne数据中心拟在美国IPO募资至多50亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4014060799955080",
      "publishedAt": "2026-10-06T07:52:31.000Z",
      "fetchedAt": "2026-10-06T11:17:55.012Z",
      "timeConfidence": "source",
      "summary": "据知情人士透露，获软银支持的DayOne数据中心计划在美国首次公开募股（IPO）中募资至多50亿美元，DayOne计划最晚于今年年底在纳斯达克上市美国存托股票（ADS）。该公司已于周一向美国证券交易委员会（SEC）提交IPO招股说明书。根据该公司提交给SEC的文件，DayOne总部位于新加坡，今年上半年营收同比增长逾三倍，达到5.12亿美元；同期净亏损从1350万美元扩大至8190万美元。（财联社",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_3e65b224407f",
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
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
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
      "selectedForFeatured": true,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "警惕油市“定价错位”！高盛警告：若油价再涨，将引爆美债二次抛售",
      "sourceUrl": "https://wallstreetcn.com/articles/3783048",
      "publishedAt": "2026-10-06T07:46:34.000Z",
      "fetchedAt": "2026-10-06T15:17:22.582Z",
      "timeConfidence": "source",
      "summary": "石油期权市场正在押注一个单边结果：防范油价下跌，却几乎忽视油价再度飙升。更重要的是，原油定价的主线正从供应风险转向美债收益率。\n最新数据显示，油价回落并未缓解债券市场压力。自9月18日以来，WTI从约100美元跌至90.80美元附近，跌幅约9%，但10年期美债收益率却从约5.00%升至约5.32%。这意味着，如果油价重新上涨，美债市场承受冲击的起点已经更高。\n据高盛FICC与Equities co",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cc4d95d11eba",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "noiseCaps": [
        "无口径收益宣传"
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
      "title": "可灵AI拟启动港股上市，预计2027年初递表、融资至少10亿美元",
      "sourceUrl": "https://www.cls.cn/detail/2498195",
      "publishedAt": "2026-10-06T07:31:05.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月6日讯（记者 徐赐豪），快手旗下视频生成大模型可灵AI将上市提上日程。\n今日有市场消息称，可灵AI据悉计划计划在未来12个月内启动可灵AI在香港的上市程序，预计2027年年初向港交所递交上市申请，至少融资10亿美元。\n据知情人士消息，可灵AI已选择中金公司、高盛和瑞银作为其香港IPO的承销商。不过目前相关安排仍处于早期阶段，具体时间表、发行规模及估值水平可能随市场情况调整。\n针",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2f5875a3fa25",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 20,
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
      "eventId": "event_c68d651d4ff9",
      "attentionScore": 20,
      "llmScores": [
        17,
        22
      ],
      "scoredBy": "llm"
    },
    {
      "title": "安巴尼旗下Jio据称在IPO中寻求约1140亿美元估值。（彭博）",
      "sourceUrl": "https://wallstreetcn.com/livenews/3174349",
      "publishedAt": "2026-10-06T07:22:02.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "安巴尼旗下Jio据称在IPO中寻求约1140亿美元估值。（彭博）",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_85c2696805f8",
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
      "eventId": "event_b95c20d585fa"
    },
    {
      "title": "莫桑比克9月商业活动放缓，PMI指数下滑",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3595812",
      "publishedAt": "2026-10-06T07:20:18.000Z",
      "fetchedAt": "2026-10-06T11:19:04.565Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_ffac771c97c8",
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
          "score": 42,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "海上“印钞机”！ClarkSea连续四周冲高......",
      "sourceUrl": "https://wallstreetcn.com/articles/3783057",
      "publishedAt": "2026-10-06T07:20:12.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "航运界网消息，ClarkSea指数连续四周上涨，达到75658美元/天，再创历史新高，这轮行情不仅由正在狂飙的以VLCC为代表的油轮市场驱动，包括LNG船、干散货船、集装箱船、汽车船（PCTC)等多个细分市场同步处于“异常或强劲”水平。\n\n具体而言，截至10月2日，ClarkSea指数再次上涨14%，达到每天75658美元，连续第四周创下历史新高。该指数在一个月内飙升了73%，而今年截至目前均值同",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_494dcfbd1b77",
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
      "title": "ESMO年会催化港股生物医药股走强 逾30项国产药物研究将登台",
      "sourceUrl": "https://www.cls.cn/detail/2498184",
      "publishedAt": "2026-10-06T07:13:32.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯（编辑 冯轶）国庆假期期间，港股生物医药板块持续活跃，今日再度集体拉涨。与此同时，恒生生物科技指数也重新升至年内高点附近。\n截至发稿，维亚生物(01873.HK)涨近20%、康希诺生物(06185.HK)涨约13%，亚盛医药(06855.HK)等一批个股跟涨超7%以上。\n\n消息面上，周一，美股疫苗企业Vaxcyte因公布肺炎球菌疫苗后期临床试验积极数据大涨30%，随即带动炒作情绪",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_887a4354f2a2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 26,
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
          "score": 19,
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
      "eventId": "event_c68d651d4ff9",
      "attentionScore": 26,
      "llmScores": [
        22,
        29
      ],
      "scoredBy": "llm"
    },
    {
      "title": "高通回应华为专利协议：否认“韬芯片授权”说法",
      "sourceUrl": "https://www.yicai.com/news/103384708.html",
      "publishedAt": "2026-10-06T06:57:17.000Z",
      "fetchedAt": "2026-10-06T11:15:44.833Z",
      "timeConfidence": "source",
      "summary": "华为与高通已达成一项涵盖 5G、计算、AI 和网络等多领域专利交叉许可及高通收购华为部分美国非蜂窝通信专利的多年期广泛协议。华为与高通达成专利许可协议后，市场对协议具体内容的猜测正在增加。\n\n10月6日，高通方面对第一财经回应称，专利相关协议的具体条款属于保密内容，但外界称高通为该协议下“净支付方”的消息并不准确。同时，关于该协议涉及逻辑折叠芯片技术的说法也不属实。\n\n此外，高通确认，公司已同意收",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4ba51c5c546a",
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
      "title": "高通与华为达成专利许可协议后回应传言：并非净支付方，与“逻辑折叠芯片技术”无关",
      "sourceUrl": "https://wallstreetcn.com/articles/3783056",
      "publishedAt": "2026-10-06T06:56:07.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "10月5日，华为官方宣布，华为与高通达成一项为期多年、范围广泛的专利许可协议，内容包括双方在5G、计算、人工智能和网络等多个领域的专利组合交叉许可，以及高通收购华为在计算、AI、网络等技术领域的若干美国专利。该交易将在获得必要的监管批准后完成。\n由于双方并未披露协议金额、专利数量及具体商业安排，消息公布后，市场随即出现多种猜测，其中包括“高通将单方向华为支付费用”以及此次交易涉及“逻辑折叠芯片技术",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_241128e3ab64",
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
      "title": "沙特禁摄、禁发、禁传拦截导弹和无人机信息，中使馆发提醒",
      "sourceUrl": "https://www.cls.cn/detail/2498179",
      "publishedAt": "2026-10-06T06:45:40.000Z",
      "fetchedAt": "2026-10-06T15:21:26.216Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯，中国驻沙特大使馆发布“领事提醒”称：10月6日凌晨，沙特内政部用多语种发布紧急公告：拍摄、发布或传播与拦截导弹和无人机以及其坠落地点相关的信息，将使您面临法律追责。\n\n目前地区紧张局势升级，中国驻沙特使领馆提醒在沙中资机构和中国公民注意安全，严格遵守当地法律法规。如遇紧急情况，请及时报警并联系驻沙使领馆。\n沙特当地应急电话：报警999；交通意外993；救护车997；火警998。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_01e350b73364",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 63,
      "rawScore": 63,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "passesTierGate": false,
      "confidence": "medium",
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
      "title": "国家税务总局发布全国统一的税务行政处罚裁量基准",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013961237860224",
      "publishedAt": "2026-10-06T06:45:16.000Z",
      "fetchedAt": "2026-10-06T11:17:55.012Z",
      "timeConfidence": "source",
      "summary": "近日，国家税务总局发布《全国税务行政处罚裁量基准（2026年版）》，并将于11月1日起施行。这标志着税务行政处罚裁量基准实现全国范围统一。国家税务总局政策法规司有关负责人介绍，在充分吸收此前各区域实践成果的基础上，此次税务总局对9类66项税务行政处罚事项裁量阶次、适用条件、具体标准进行了全面优化，推动实现税务违法行为事项划分更加合理、裁量因素设置更加科学、裁量尺度把握更加精确，有利于统一税务执法标",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_4c0267f3ad4a",
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
      "title": "拆解美国通胀：关税见顶、能源高企，2027年能否迎来拐点？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782677",
      "publishedAt": "2026-10-06T06:36:14.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "当前美国通胀压力主要由三大暂时性冲击驱动——关税、能源反弹和AI建设热潮。拆解CPI结构可见：关税传导已接近尾声，对当前通胀的边际贡献明显减弱；能源价格仍处高位，构成短期主要推手；AI建设带来的价格压力则集中于少数科技商品和生产性投入领域，尚未广泛扩散。核心商品通胀压力已明显减弱。当前核心商品CPI同比增速为0.66%，三个月年化增速约1.97%，低于去年同期的2.45%，表明关税转嫁已非当前指数",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0ba8574abd7b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
        "无口径收益宣传"
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
          "score": 18,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 49,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
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
      "eventId": null
    },
    {
      "title": "希捷和东芝据悉竞购TDK硬盘磁头业务，交易金额或达数十亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013929954447236",
      "publishedAt": "2026-10-06T06:31:02.000Z",
      "fetchedAt": "2026-10-06T11:17:55.012Z",
      "timeConfidence": "source",
      "summary": "据报道，希捷和东芝正竞购TDK的硬盘磁头业务。知情人士透露，东芝今年春季率先与TDK展开谈判，希捷随后在夏季提出更高报价。这项收购的交易金额最高可能达到数十亿美元。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2eee0f8f0662",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "从资金链看政策空间",
      "sourceUrl": "https://opinion.caixin.com/2026-10-06/102490893.html",
      "publishedAt": "2026-10-06T06:26:35.000Z",
      "fetchedAt": "2026-10-06T11:14:44.771Z",
      "timeConfidence": "source",
      "summary": "未来总量工具仍有空间、潜力释放积极稳慎，新增政策效能更多来自政策内部的结构优化和政策之间的协同联动\n       　　2025年以来，政府年度预算安排的新增政府债务均接近12万亿元，存款准备金率自2025年5月下调后未再调整，LPR已连续16个月保持不变。三组现象指向政策空间的结构调整。\n　　当前政策空间既体现在财政、货币和产业政策各自的工具安排，也体现在政策之间的协同。沿着资金链看，政策空间正在",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1c3c15ddfff7",
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
      "title": "报道：DeepSeek将融资至少800亿元人民币，腾讯和宁德时代参与领投",
      "sourceUrl": "https://wallstreetcn.com/articles/3783055",
      "publishedAt": "2026-10-06T06:26:17.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "据媒体援引知情人士称，DeepSeek最新一轮融资接近锁定至少800亿元人民币（120亿美元）投资，大幅超过公司原定融资目标，为计划于2027年初进行的首次公开募股奠定基础。\n知情人士表示，宁德时代和腾讯是领投方之一，融资即将结束。DeepSeek最初寻求融资约500亿元人民币，但在最新AI模型成功发布后，投资者兴趣超出预期。根据已经签署的投资条款书，最终融资规模可能接近1000亿元人民币。\n持续",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d690c6bf2d73",
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
      "title": "中国AI双雄冲刺港股：月之暗面完成融资最早明年Q1上市 ，可灵AI拟募资至少10亿美元",
      "sourceUrl": "https://wallstreetcn.com/articles/3783054",
      "publishedAt": "2026-10-06T06:23:47.000Z",
      "fetchedAt": "2026-10-06T11:15:00.251Z",
      "timeConfidence": "source",
      "summary": "月之暗面与可灵AI相继筹备香港上市，合计拟募资规模最高可达60亿美元，成为AI浪潮推动港股融资创纪录的最新注脚。\n据彭博周二最新报道，月之暗面（Moonshot AI）已完成最后一轮私募融资，估值约500亿美元，计划最早于明年第一季度在香港上市，拟募资规模最高达50亿美元。与此同时，快手科技旗下AI视频生成服务商可灵AI也已选定中金公司、高盛和瑞银三家银行，筹备香港IPO，目标募资至少10亿美元，",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9b6d4ce3fae7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 41,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "全球纯燃油车新车销量占比首次跌破50%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013925315284872",
      "publishedAt": "2026-10-06T06:10:09.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "Mobility Global最新数据显示，2026年上半年，纯汽油车型占全球新车销量的49%，这是历史上纯汽油车销量占比首次跌破五成，且较2021年的73%大幅下降了24%。数据还显示，今年上半年，整体汽车市场规模收缩约5%，而纯汽油车销量的下滑幅度达到了大盘的两倍。业内人士将市场加速转变归因于油价。即受中东冲突影响，燃油价格大幅飙升，消费者开始寻求用车成本更低的车型。分地域来看，上半年中国汽油",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_ce5447007e5f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 42,
      "rawScore": 42,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 8,
        "recency": 10,
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
        "快讯线索，需结合原文判断"
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
      "title": "香港积金局：过去12个月MPF股票基金平均回报10.3%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595713",
      "publishedAt": "2026-10-06T06:05:07.000Z",
      "fetchedAt": "2026-10-06T06:27:17.820Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_d797734ec453",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 32,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 5,
        "recency": 10,
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
        "专业财经媒体跟进"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 13,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 44,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 35,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null,
      "attentionScore": 32,
      "llmScores": [
        23,
        40
      ],
      "scoredBy": "llm"
    },
    {
      "title": "港股异动 | 创想三维(03388)盘中涨近3% 新品节奏密集推进 旗舰K3已开启预售",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595715",
      "publishedAt": "2026-10-06T06:05:07.000Z",
      "fetchedAt": "2026-10-06T06:27:17.820Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_867bc075917e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 11,
        "recency": 10,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [
        "行情播报"
      ],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进"
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "AMD天价收购World Labs，AI教母李飞飞“起飞”还是“招安”",
      "sourceUrl": "https://opinion.caixin.com/2026-10-06/102490891.html",
      "publishedAt": "2026-10-06T05:29:03.000Z",
      "fetchedAt": "2026-10-06T06:26:07.203Z",
      "timeConfidence": "source",
      "summary": "这笔交易真正耐人寻味的，是背后隐藏的世界模型的技术困局、芯片厂商的算力焦虑以及硅谷资本大厂之间的暗中兜底\n       　　9月28日，AMD宣布将收购由AI“教母”李飞飞领导的AI模型及研究实验室World Labs。这项全股票交易的估值约为82亿美元，预计将在2026年底前完成，但仍须获得监管批准并满足其他惯常交割条件。\n　　交易完成后，World Labs团队将继续专注于推进AI模型研究；李",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c83bb99e52f3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 8,
        "recency": 10,
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
        "对展业/配置/合规有直接影响"
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
          "score": 71,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "title": "知名科普博主洪广玉被刑拘 曾参与大连樱桃种植户维权活动",
      "sourceUrl": "https://china.caixin.com/2026-10-06/102490886.html",
      "publishedAt": "2026-10-06T04:28:03.000Z",
      "fetchedAt": "2026-10-06T06:26:07.203Z",
      "timeConfidence": "source",
      "summary": "2022年开始，大连多名樱桃种植户因樱桃树死亡发起了维权行动，洪广玉曾帮助他们起草、修改举报材料，并在网上发言。法律文书显示，洪广玉涉嫌寻衅滋事罪，在9月19日被大连警方刑拘\n       　　【财新网】知名科普博主、北京科技报原记者洪广玉，近日被辽宁大连警方带走并刑拘，引发广泛关注。\n　　家属告诉财新，洪广玉是在福建厦门家中被带走的。拘留通知书显示，9月19日，洪广玉因涉嫌寻衅滋事罪被大连市公安",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b26a0499d957",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 54,
      "rawScore": 54,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 3,
        "recency": 10,
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
      "title": "清华经管学院顾问委员会扩容 黄仁勋、苏姿丰等成新增委员",
      "sourceUrl": "https://economy.caixin.com/2026-10-06/102490846.html",
      "publishedAt": "2026-10-06T00:31:11.000Z",
      "fetchedAt": "2026-10-06T06:26:07.203Z",
      "timeConfidence": "source",
      "summary": "清华经管学院顾问委员会成立于2000年10月，由时任院长和国务院总理朱镕基积极推进成立，2026年新增委员3人，新增接任委员5人\n       　　【财新网】清华大学经济管理学院顾问委员会最新扩容，英伟达创始人兼首席执行官黄仁勋（Jensen Huang），AMD董事会主席兼首席执行官苏姿丰（Lisa Su），瑞士百达集团高级管理合伙人百达铭（Marc Pictet）成为顾问委员会新增委员。\n　　",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_40275b2df711",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 37,
      "rawScore": 37,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 10,
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
        "专业财经媒体跟进"
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
      "score": 75,
      "rawScore": 75,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 6,
        "recency": 10,
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
          "score": 89,
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
      "attentionScore": 25,
      "llmScores": [
        26,
        23
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
      "insurance": 68,
      "privateFundSales": 2,
      "marketEducation": 80
    },
    "featured": 24,
    "gate": {
      "passed": 17,
      "total": 150,
      "byTier": {
        "S2": {
          "total": 93,
          "passed": 12
        },
        "S3": {
          "total": 56,
          "passed": 5
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
      "news_986ca26f7b13"
    ],
    "products": [
      "news_9a1ef89b3d73"
    ],
    "industry": [
      "news_add98489850a",
      "news_cf7e1ebf884e",
      "news_50dfd7ccc704",
      "news_4d5c1d19c113",
      "news_1f95fa341088",
      "news_4e7ebca50687",
      "news_1e7baaf09857",
      "news_6f0c41dcae74",
      "news_2f288323fb81",
      "news_89b80ee0e95c"
    ],
    "research": [
      "news_4298d79d3d21",
      "news_6d057eabbbb8",
      "news_fd64b64d4e6d",
      "news_ec48b84471c1",
      "news_6be5e9cf054e",
      "news_bb0403c3a13e",
      "news_3446c2998f5b",
      "news_d8c46356b414",
      "news_2ce356a1f2de",
      "news_fa70279e6d89"
    ],
    "insights": [
      "news_b7ea28449bda",
      "news_59dbea524f7c",
      "news_937dfc4c7350",
      "news_2ce4c3b723ce",
      "news_c9249e7b9656",
      "news_f2a80898dd81",
      "news_f05197cf72c8",
      "news_c5764e932222",
      "news_c3f50e9a7565",
      "news_24c8f7758b3c"
    ]
  },
  "flashes": [
    {
      "id": "news_add98489850a",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_cf7e1ebf884e",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_4298d79d3d21",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_50dfd7ccc704",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_6d057eabbbb8",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_4d5c1d19c113",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_1f95fa341088",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_fd64b64d4e6d",
      "dotClass": "flash-dot-blue"
    }
  ],
  "keywordIndex": {
    "保险": [
      "news_1f95fa341088",
      "news_2ce4c3b723ce",
      "news_46d1d800594c",
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
    "养老": [
      "news_d8f21d2525f4"
    ],
    "养老金": [
      "news_d8f21d2525f4"
    ],
    "重疾险": [
      "news_b88af30fc3f3"
    ],
    "寿险": [
      "news_5c5f98083245"
    ],
    "财险": [
      "news_90694c744974"
    ],
    "医疗险": [
      "news_90694c744974",
      "news_9f3b623176ea"
    ],
    "银行": [
      "news_add98489850a",
      "news_fd64b64d4e6d",
      "news_c9249e7b9656",
      "news_24c8f7758b3c",
      "news_2844c800e13f",
      "news_e25a794f159a",
      "news_393009cd4e32",
      "news_eea33c3288d6",
      "news_04293e3315b1",
      "news_f5c77fa24ac7",
      "news_9b6d4ce3fae7"
    ],
    "央行": [
      "news_4298d79d3d21",
      "news_f2a80898dd81",
      "news_2f288323fb81",
      "news_bda3cd5dc60b"
    ],
    "利率": [
      "news_cf7e1ebf884e",
      "news_bda3cd5dc60b",
      "news_103f6c78f97b",
      "news_b8359ae20a15"
    ],
    "LPR": [
      "news_1c3c15ddfff7"
    ],
    "加息": [
      "news_add98489850a",
      "news_fd64b64d4e6d",
      "news_6be5e9cf054e",
      "news_bb5234ac8fc1",
      "news_bda3cd5dc60b"
    ],
    "流动性": [
      "news_4298d79d3d21",
      "news_103f6c78f97b"
    ],
    "准备金": [
      "news_1c3c15ddfff7"
    ],
    "存款": [
      "news_1c3c15ddfff7"
    ],
    "理财": [
      "news_514bfed80760"
    ],
    "股票": [
      "news_9b62a54344f9",
      "news_fc8983cea46c",
      "news_928215186ac9",
      "news_772779738221",
      "news_b16ddc8861c0",
      "news_3e65b224407f",
      "news_d797734ec453",
      "news_c83bb99e52f3"
    ],
    "A股": [
      "news_b066a6170b74",
      "news_495d5cc05a7d"
    ],
    "港股": [
      "news_59dbea524f7c",
      "news_3446c2998f5b",
      "news_43d139b09e77",
      "news_fa70279e6d89",
      "news_e46b4ae2feba",
      "news_928215186ac9",
      "news_a6787f1964f2",
      "news_946c4821e445",
      "news_2f5875a3fa25",
      "news_887a4354f2a2",
      "news_9b6d4ce3fae7",
      "news_867bc075917e"
    ],
    "美股": [
      "news_6f0c41dcae74",
      "news_2f68e23702cf",
      "news_b047f316d516",
      "news_9f054758b41a",
      "news_399ff957635a",
      "news_626a091b5efb",
      "news_e4a027f090b2",
      "news_33fdf43777c8",
      "news_73a1f88dc387",
      "news_772779738221",
      "news_57097770eae2",
      "news_103f6c78f97b",
      "news_b16ddc8861c0",
      "news_887a4354f2a2"
    ],
    "大盘": [
      "news_ce5447007e5f"
    ],
    "指数": [
      "news_50dfd7ccc704",
      "news_59dbea524f7c",
      "news_6f0c41dcae74",
      "news_2f68e23702cf",
      "news_b047f316d516",
      "news_43d139b09e77",
      "news_86c3986be2f6",
      "news_393009cd4e32",
      "news_9f054758b41a",
      "news_b40b6bade00a",
      "news_399ff957635a",
      "news_626a091b5efb",
      "news_e4a027f090b2",
      "news_4786bf9e5a36",
      "news_a77eec0ce831",
      "news_2622a09d9103",
      "news_da476cce0926",
      "news_772779738221",
      "news_bda3cd5dc60b",
      "news_9a1ef89b3d73",
      "news_b16ddc8861c0",
      "news_a6787f1964f2",
      "news_946c4821e445",
      "news_ffac771c97c8",
      "news_494dcfbd1b77",
      "news_887a4354f2a2",
      "news_0ba8574abd7b"
    ],
    "对冲基金": [
      "news_4298d79d3d21"
    ],
    "量化": [
      "news_ec48b84471c1"
    ],
    "债券": [
      "news_24c8f7758b3c",
      "news_e25a794f159a",
      "news_626a091b5efb",
      "news_9a1ef89b3d73",
      "news_b16ddc8861c0",
      "news_cc4d95d11eba",
      "news_b8359ae20a15"
    ],
    "国债": [
      "news_cf7e1ebf884e",
      "news_4298d79d3d21",
      "news_d8f21d2525f4",
      "news_399ff957635a",
      "news_e4a027f090b2"
    ],
    "期货": [
      "news_772779738221",
      "news_b16ddc8861c0"
    ],
    "期权": [
      "news_cc4d95d11eba"
    ],
    "IPO": [
      "news_1e7baaf09857",
      "news_3446c2998f5b",
      "news_c5764e932222",
      "news_fa70279e6d89",
      "news_ab1185830942",
      "news_928215186ac9",
      "news_0ce0927b8e42",
      "news_3e65b224407f",
      "news_2f5875a3fa25",
      "news_85c2696805f8",
      "news_9b6d4ce3fae7"
    ],
    "上市": [
      "news_1e7baaf09857",
      "news_bbb0f23e28ac",
      "news_0b8a51cd2f5d",
      "news_0dfdaeb2819b",
      "news_928215186ac9",
      "news_0ce0927b8e42",
      "news_3e65b224407f",
      "news_2f5875a3fa25",
      "news_9b6d4ce3fae7"
    ],
    "增持": [
      "news_2f288323fb81"
    ],
    "回购": [
      "news_4298d79d3d21",
      "news_7d0d056cd693",
      "news_c9fe6d2f4433",
      "news_aaca13f280d3",
      "news_126ac623b9ed",
      "news_152873abb9ab",
      "news_36b0c3aa7d97"
    ],
    "券商": [
      "news_bb0403c3a13e"
    ],
    "经纪": [
      "news_d8c46356b414",
      "news_5c5f98083245",
      "news_9f3b623176ea"
    ],
    "投资者": [
      "news_1e7baaf09857",
      "news_24c8f7758b3c",
      "news_e25a794f159a",
      "news_393009cd4e32",
      "news_0b8a51cd2f5d",
      "news_e4a027f090b2",
      "news_76ac1ce6e4d3",
      "news_b16ddc8861c0",
      "news_d690c6bf2d73"
    ],
    "机构": [
      "news_6be5e9cf054e",
      "news_c9249e7b9656",
      "news_89b80ee0e95c",
      "news_e25a794f159a",
      "news_0b8a51cd2f5d",
      "news_ab1185830942",
      "news_c581f1291d16",
      "news_928215186ac9",
      "news_01e350b73364"
    ],
    "监管": [
      "news_eea33c3288d6",
      "news_50b2b7a580dc",
      "news_04293e3315b1",
      "news_85f387ff3358",
      "news_241128e3ab64",
      "news_c83bb99e52f3"
    ],
    "证监会": [
      "news_d8c46356b414",
      "news_986ca26f7b13"
    ],
    "港交所": [
      "news_2f5875a3fa25"
    ],
    "处罚": [
      "news_4c0267f3ad4a"
    ],
    "问责": [
      "news_04293e3315b1"
    ],
    "条款": [
      "news_2f288323fb81",
      "news_86c3986be2f6",
      "news_b7b7bbf68ab0",
      "news_8a2274a2d05e",
      "news_df5ace029df0",
      "news_4ba51c5c546a",
      "news_d690c6bf2d73",
      "news_90694c744974",
      "news_5c5f98083245"
    ],
    "通知": [
      "news_2ce356a1f2de",
      "news_b26a0499d957"
    ],
    "意见": [
      "news_2f288323fb81",
      "news_86c3986be2f6",
      "news_b7b7bbf68ab0",
      "news_8a2274a2d05e",
      "news_df5ace029df0"
    ],
    "规定": [
      "news_986ca26f7b13"
    ],
    "法规": [
      "news_01e350b73364",
      "news_4c0267f3ad4a"
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
      "news_4d5c1d19c113",
      "news_b7ea28449bda",
      "news_2844c800e13f",
      "news_51b4ef1a95b1",
      "news_2ce356a1f2de",
      "news_68da3282ed1f",
      "news_756984c25811",
      "news_e864e9fce8d1",
      "news_61302e4ef0bd",
      "news_f5c77fa24ac7",
      "news_40275b2df711",
      "news_b88af30fc3f3"
    ],
    "宏观经济": [
      "news_2844c800e13f"
    ],
    "GDP": [
      "news_d8f21d2525f4",
      "news_68da3282ed1f",
      "news_756984c25811",
      "news_f68a3eed6a7c"
    ],
    "CPI": [
      "news_bb5234ac8fc1",
      "news_0ba8574abd7b"
    ],
    "PMI": [
      "news_e676628f36b2",
      "news_f62339ae96f0",
      "news_ffac771c97c8"
    ],
    "产业政策": [
      "news_1c3c15ddfff7"
    ],
    "人民币": [
      "news_76549ac23fb6",
      "news_d690c6bf2d73"
    ],
    "外汇": [
      "news_f2a80898dd81",
      "news_2f288323fb81"
    ],
    "跨境": [
      "news_6d057eabbbb8",
      "news_40051ba58848"
    ],
    "美元": [
      "news_b7ea28449bda",
      "news_4e7ebca50687",
      "news_1e7baaf09857",
      "news_f2a80898dd81",
      "news_2f288323fb81",
      "news_f05197cf72c8",
      "news_c5764e932222",
      "news_c3f50e9a7565",
      "news_24c8f7758b3c",
      "news_d95f29fc5004",
      "news_79da7862942b",
      "news_e25a794f159a",
      "news_393009cd4e32",
      "news_9f054758b41a",
      "news_b40b6bade00a",
      "news_fa70279e6d89",
      "news_68da3282ed1f",
      "news_522fbe4a81df",
      "news_626a091b5efb",
      "news_aeba052c8015",
      "news_ab1185830942",
      "news_5d1b069f836c",
      "news_8a2274a2d05e",
      "news_76ac1ce6e4d3",
      "news_fc8983cea46c",
      "news_da476cce0926",
      "news_3bf38fce97e9",
      "news_c3725271840b",
      "news_8f1cec1e94b8",
      "news_57097770eae2",
      "news_199423f7af26",
      "news_0ce0927b8e42",
      "news_7e656c319e8d",
      "news_3e65b224407f",
      "news_cc4d95d11eba",
      "news_2f5875a3fa25",
      "news_85c2696805f8",
      "news_494dcfbd1b77",
      "news_2eee0f8f0662",
      "news_d690c6bf2d73",
      "news_9b6d4ce3fae7",
      "news_c83bb99e52f3"
    ],
    "欧元": [
      "news_d8f21d2525f4",
      "news_710e355f0588"
    ],
    "日元": [
      "news_199423f7af26",
      "news_0f5254c246c1"
    ],
    "通胀": [
      "news_626a091b5efb",
      "news_e4a027f090b2",
      "news_bda3cd5dc60b",
      "news_657d5062b406",
      "news_0ba8574abd7b"
    ],
    "房地产": [
      "news_a6787f1964f2"
    ],
    "地产": [
      "news_6be5e9cf054e",
      "news_a6787f1964f2"
    ],
    "消费": [
      "news_937dfc4c7350",
      "news_1e7baaf09857",
      "news_bbb0f23e28ac",
      "news_393009cd4e32",
      "news_4f9ee6a83f99",
      "news_bda3cd5dc60b",
      "news_9ea7172a71e7",
      "news_f5c77fa24ac7",
      "news_c07e5681d9c3",
      "news_ce5447007e5f"
    ],
    "投资": [
      "news_1e7baaf09857",
      "news_2f288323fb81",
      "news_f05197cf72c8",
      "news_c5764e932222",
      "news_24c8f7758b3c",
      "news_d0b0261f2e1b",
      "news_86c3986be2f6",
      "news_e25a794f159a",
      "news_393009cd4e32",
      "news_0b8a51cd2f5d",
      "news_fa70279e6d89",
      "news_ab1185830942",
      "news_e4a027f090b2",
      "news_b7b7bbf68ab0",
      "news_8a2274a2d05e",
      "news_76ac1ce6e4d3",
      "news_33fdf43777c8",
      "news_57097770eae2",
      "news_df5ace029df0",
      "news_f5c77fa24ac7",
      "news_9a1ef89b3d73",
      "news_b16ddc8861c0",
      "news_21eaba669052",
      "news_0f5254c246c1",
      "news_7e656c319e8d",
      "news_d690c6bf2d73"
    ],
    "出口": [
      "news_79da7862942b",
      "news_68da3282ed1f",
      "news_3de47bbead40"
    ],
    "进口": [
      "news_68da3282ed1f",
      "news_af7eafc7829e",
      "news_9ea7172a71e7"
    ],
    "贸易": [
      "news_4d5c1d19c113",
      "news_68da3282ed1f",
      "news_522fbe4a81df",
      "news_5ff8719678c9",
      "news_af7eafc7829e",
      "news_e864e9fce8d1",
      "news_61302e4ef0bd",
      "news_f5c77fa24ac7",
      "news_7e656c319e8d"
    ],
    "产业链": [
      "news_21eaba669052"
    ],
    "就业": [
      "news_57097770eae2",
      "news_76549ac23fb6"
    ],
    "收入": [
      "news_2ce4c3b723ce",
      "news_3be004dd3c9d"
    ],
    "黄金": [
      "news_2f288323fb81",
      "news_bb5234ac8fc1",
      "news_c07e5681d9c3"
    ],
    "金价": [
      "news_b88af30fc3f3"
    ],
    "原油": [
      "news_d95f29fc5004",
      "news_79da7862942b",
      "news_e4a027f090b2",
      "news_bb5234ac8fc1",
      "news_c581f1291d16",
      "news_8a2274a2d05e",
      "news_cc4d95d11eba"
    ],
    "工业": [
      "news_9d6f4197f741"
    ],
    "利润": [
      "news_9f054758b41a",
      "news_8f1cec1e94b8"
    ],
    "股市": [
      "news_add98489850a",
      "news_50dfd7ccc704",
      "news_626a091b5efb",
      "news_e4a027f090b2",
      "news_4786bf9e5a36",
      "news_a77eec0ce831",
      "news_2622a09d9103",
      "news_340fb8084e68",
      "news_928215186ac9",
      "news_103f6c78f97b",
      "news_b16ddc8861c0"
    ],
    "美联储": [
      "news_9f054758b41a",
      "news_eea33c3288d6",
      "news_04293e3315b1"
    ],
    "财报": [
      "news_6be5e9cf054e",
      "news_e4a027f090b2"
    ],
    "财富管理": [
      "news_bb0403c3a13e"
    ],
    "FOF": [
      "news_9a1ef89b3d73"
    ],
    "权益": [
      "news_b88af30fc3f3"
    ],
    "年化": [
      "news_0f5254c246c1",
      "news_0ba8574abd7b"
    ],
    "认购": [
      "news_9a1ef89b3d73"
    ]
  },
  "sourceHealth": {
    "generatedAt": "2026-10-07T06:34:40.532Z",
    "status": "healthy",
    "totalSources": 12,
    "successfulSources": 9,
    "usableSources": 8,
    "failedSources": 3,
    "staleSources": 1,
    "fetchLimitReachedSources": 0,
    "coverageRate": 0.6667,
    "freshestPublishedAt": "2026-10-07T06:06:16.000Z",
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
        "addedCount": 2,
        "durationMs": 704,
        "latestPublishedAt": "2026-10-07T03:53:38.000Z",
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
        "itemCount": 28,
        "rawItemCount": 28,
        "acceptedItemCount": 28,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 19,
        "durationMs": 236,
        "latestPublishedAt": "2026-10-07T05:42:42.000Z",
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
        "addedCount": 12,
        "durationMs": 15126,
        "latestPublishedAt": "2026-10-07T05:18:51.000Z",
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
        "durationMs": 85885,
        "latestPublishedAt": "2026-10-07T06:06:16.000Z",
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
        "itemCount": 30,
        "rawItemCount": 30,
        "acceptedItemCount": 30,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 14,
        "durationMs": 73067,
        "latestPublishedAt": "2026-10-07T05:23:05.000Z",
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
        "addedCount": 15,
        "durationMs": 52209,
        "latestPublishedAt": "2026-10-07T04:13:16.000Z",
        "usedEndpoint": "rsshub-balancer.virworks.moe"
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
        "durationMs": 57450,
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
        "durationMs": 54336,
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
        "addedCount": 3,
        "durationMs": 161,
        "latestPublishedAt": "2026-10-07T05:51:05.000Z",
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
        "addedCount": 2,
        "durationMs": 47,
        "latestPublishedAt": "2026-10-07T05:32:12.000Z",
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
        "latestPublishedAt": "2026-09-28T11:53:00.000Z",
        "usedEndpoint": null
      }
    ]
  },
  "historyStats": {
    "itemCount": 5000,
    "eventCount": 40,
    "retentionDays": 90
  },
  "macro": {
    "updatedAt": "2026-10-07T06:34:40.532Z",
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
        "value": "5.27%",
        "note": "较10月5日 5.31% 下降",
        "direction": "down",
        "asOf": "2026-10-06",
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
        "value": "6.7046",
        "note": "较10月5日 6.7046 持平",
        "direction": "flat",
        "asOf": "2026-10-06",
        "source": "Frankfurter/ECB",
        "mode": "auto"
      },
      {
        "key": "gold",
        "name": "现货黄金",
        "value": "$4,133",
        "note": "较10月6日 $4,169 下降",
        "direction": "down",
        "asOf": "2026-10-07",
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
        "eventId": "event_f101880ef7bc",
        "title": "美股四季度“逼空”信号浮现：CTA仓位大撤退，1.3万亿美元回购蓄势待发",
        "mainItemId": "news_103f6c78f97b",
        "relatedItemIds": [
          "news_73a1f88dc387",
          "news_33fdf43777c8",
          "news_e4a027f090b2"
        ],
        "evidenceItemIds": [
          "news_103f6c78f97b",
          "news_73a1f88dc387",
          "news_33fdf43777c8",
          "news_e4a027f090b2"
        ],
        "historicalEvidenceCount": 24,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-07T06:34:40.532Z",
        "status": "developing",
        "summary": "美股半数股票进入熊市，后市关键看美债波动率。",
        "latestProgress": "10月5日美股走高，财报季周四揭幕，贵金属原油同步上涨。"
      },
      {
        "eventId": "event_c68d651d4ff9",
        "title": "中国AI双雄冲刺港股：月之暗面完成融资最早明年Q1上市 ，可灵AI拟募资至少10亿美元",
        "mainItemId": "news_9b6d4ce3fae7",
        "relatedItemIds": [
          "news_e46b4ae2feba",
          "news_928215186ac9",
          "news_a6787f1964f2",
          "news_2f5875a3fa25"
        ],
        "evidenceItemIds": [
          "news_9b6d4ce3fae7",
          "news_e46b4ae2feba",
          "news_928215186ac9",
          "news_a6787f1964f2",
          "news_2f5875a3fa25"
        ],
        "historicalEvidenceCount": 28,
        "firstSeenAt": "2026-09-30T15:04:45.414Z",
        "lastSeenAt": "2026-10-07T06:34:40.532Z",
        "status": "developing",
        "summary": "国信证券：9月以来外资流出港股互联网规模靠前。",
        "latestProgress": "智谱港股涨超5%。"
      },
      {
        "eventId": "event_e28709d78af5",
        "title": "2026年诺贝尔物理学奖揭晓",
        "mainItemId": "news_df5ace029df0",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_df5ace029df0"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-06T15:25:45.517Z",
        "lastSeenAt": "2026-10-07T06:34:40.532Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_62f38f1eea61",
        "title": "美联储拟大改银行监管机制，副主席Bowman：重组区域架构并调整资产门槛",
        "mainItemId": "news_04293e3315b1",
        "relatedItemIds": [
          "news_eea33c3288d6"
        ],
        "evidenceItemIds": [
          "news_04293e3315b1",
          "news_eea33c3288d6"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-06T18:34:18.628Z",
        "lastSeenAt": "2026-10-07T06:34:40.532Z",
        "status": "developing",
        "summary": "美联储拟大改银行监管，副主席Bowman建议重组区域架构并调整资产门槛。",
        "latestProgress": "美联储宣布重组美国银行监管体系。"
      },
      {
        "eventId": "event_2cf716748ce1",
        "title": "中国央行连续第23个月增持黄金",
        "mainItemId": "news_2f288323fb81",
        "relatedItemIds": [
          "news_f2a80898dd81"
        ],
        "evidenceItemIds": [
          "news_2f288323fb81",
          "news_f2a80898dd81"
        ],
        "historicalEvidenceCount": 8,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-07T06:34:40.532Z",
        "status": "developing",
        "summary": "中国央行连续第23个月增持黄金",
        "latestProgress": "9月末外汇储备报34002.51亿美元"
      },
      {
        "eventId": "event_4cbc155133f9",
        "title": "SpaceX为购买英伟达芯片而寻求融资400亿美元。 本次融资将由阿波罗牵头。（英国金融时报）",
        "mainItemId": "news_aeba052c8015",
        "relatedItemIds": [
          "news_626a091b5efb",
          "news_24c8f7758b3c"
        ],
        "evidenceItemIds": [
          "news_aeba052c8015",
          "news_626a091b5efb",
          "news_24c8f7758b3c"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-07T06:34:40.532Z",
        "lastSeenAt": "2026-10-07T06:34:40.532Z",
        "status": "developing",
        "summary": "SpaceX拟融资400亿美元购买英伟达芯片，由阿波罗牵头。",
        "latestProgress": "SpaceX融资400亿美元购英伟达芯片的计划持续引发关注。"
      },
      {
        "eventId": "event_1ad2a684dd4f",
        "title": "AI算力订单暴增至500亿美元！英伟达支持的Lambda拟融资40亿美元冲刺IPO",
        "mainItemId": "news_ab1185830942",
        "relatedItemIds": [
          "news_c5764e932222"
        ],
        "evidenceItemIds": [
          "news_ab1185830942",
          "news_c5764e932222"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-07T06:34:40.532Z",
        "lastSeenAt": "2026-10-07T06:34:40.532Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_c451a076d7dd",
        "title": "印度银行股走高，押注印度储备银行加息，Nifty私人银行指数涨逾1%",
        "mainItemId": "news_add98489850a",
        "relatedItemIds": [
          "news_fd64b64d4e6d"
        ],
        "evidenceItemIds": [
          "news_add98489850a",
          "news_fd64b64d4e6d"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-07T06:34:40.532Z",
        "lastSeenAt": "2026-10-07T06:34:40.532Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_b95c20d585fa",
        "title": "安巴尼旗下Jio据称在IPO中寻求约1140亿美元估值。（彭博）",
        "mainItemId": "news_85c2696805f8",
        "relatedItemIds": [
          "news_0ce0927b8e42"
        ],
        "evidenceItemIds": [
          "news_85c2696805f8",
          "news_0ce0927b8e42"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-07T06:34:40.532Z",
        "lastSeenAt": "2026-10-07T06:34:40.532Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      }
    ],
    "dailySummary": {
      "highlights": [
        {
          "text": "[82] 法国提出各类“削减赤字”方案，欧美国债抛售潮暂歇 — 法国近期密集提出削减赤字方案，试图扭转不断恶化的财政状况，法国债市压力随之暂时缓解。法国10年期国债收益率周二下行约12",
          "evidenceItemIds": [
            "news_d8f21d2525f4"
          ]
        },
        {
          "text": "[79] 2026年10月定期寿险在哪里买比较好最靠谱?从保额测算到免责条款解读,奶爸保全流程服务位居第一 — 奶爸保小程序是2026年10月买定期寿险值得优先考虑的投保入口。 奶爸保持有全国性保险经纪牌照，成立9年，200多位顾问",
          "evidenceItemIds": [
            "news_5c5f98083245"
          ]
        },
        {
          "text": "[77] 中国央行连续第23个月增持黄金 — 中国9月末黄金储备为7747万盎司，环比增加74万盎司，8月末黄金储备为7673万盎司。中国央行已连续第23个月增持黄金",
          "evidenceItemIds": [
            "news_2f288323fb81"
          ]
        },
        {
          "text": "[75] 医疗险居然能“返保费”,还能保终身?复星联合医路相伴高端医疗险精英版详细拆解,3大优势1个坑,一次讲清! — 图源 | jimeng 作者：happy，前TOP100事业部总经理、国家认证管理咨询师、保险咨询师。 协助投保&从业咨",
          "evidenceItemIds": [
            "news_9f3b623176ea"
          ]
        }
      ]
    },
    "eventChain": {
      "summary": "基于标题主题相似度和来源层级识别 6 组关联事件；仅表示内容相关，不代表已确认因果",
      "chains": [
        {
          "title": "印度股市在印度储备银行近4年来首次加息后下跌",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_add98489850a",
            "news_fd64b64d4e6d"
          ],
          "nodes": [
            "印度股市在印度储备银行近4年来首次加息后下跌",
            "印度储备银行近四年来首次加息，暗示后续或将继续收紧"
          ]
        },
        {
          "title": "中国央行连续第23个月增持黄金",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_2f288323fb81",
            "news_4298d79d3d21",
            "news_f2a80898dd81"
          ],
          "nodes": [
            "中国央行连续第23个月增持黄金",
            "对冲基金协会警告英国央行：英国国债回购市场改革或损害流动性",
            "央行：9月末外汇储备报34002.51亿美元"
          ]
        },
        {
          "title": "新高！美股三大股指全线上扬，芯片股走强，纳指、标普500再破纪录，中概股普涨，油价小幅上涨",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_399ff957635a",
            "news_6f0c41dcae74"
          ],
          "nodes": [
            "新高！美股三大股指全线上扬，芯片股走强，纳指、标普500再破纪录，中概股普涨，油价小幅上涨",
            "美股三季报下周拉开帷幕：标普500每股收益预计增长27%，英伟达和美光两家公司将贡献1/3"
          ]
        },
        {
          "title": "中国AI双雄冲刺港股：月之暗面完成融资最早明年Q1上市 ，可灵AI拟募资至少10亿美元",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_9b6d4ce3fae7",
            "news_3446c2998f5b",
            "news_e46b4ae2feba",
            "news_928215186ac9",
            "news_a6787f1964f2"
          ],
          "nodes": [
            "中国AI双雄冲刺港股：月之暗面完成融资最早明年Q1上市 ，可灵AI拟募资至少10亿美元",
            "港股IPO早播报：新兴市场手机巨头传音控股开启招股",
            "港股公告精选｜力量发展金红石项目正式投产 康宁医院三季度门诊均次开支增约一成",
            "机构看好港股新股市场继续火热 月之暗面、可灵AI或成下一批重磅IPO",
            "港股收盘 | 三大指数集体收涨 地产和医药股联袂走强"
          ]
        },
        {
          "title": "全球长端利率冲向新高：美债5.3%之后，美股还能撑多久？",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_103f6c78f97b",
            "news_e4a027f090b2",
            "news_33fdf43777c8",
            "news_73a1f88dc387"
          ],
          "nodes": [
            "全球长端利率冲向新高：美债5.3%之后，美股还能撑多久？",
            "美股收盘：标普、纳指均创历史新高 市场焦点转向财报季",
            "城堡投资Rubner看好美股四季度走势",
            "美股异动 | 存储芯片概念股普跌 希捷科技(STX.US)跌逾7%"
          ]
        }
      ]
    },
    "industryImpact": {
      "quadrants": {
        "insurance": {
          "level": "high",
          "summary": "10 条保险相关资讯",
          "items": [
            {
              "title": "蓝猫头鹰计划大举进军保险资本领域，首席执行官接受英国《金融时报》采访",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_1f95fa341088"
              ]
            },
            {
              "title": "前8个月医保统筹基金收入约2.07万亿元",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_2ce4c3b723ce"
              ]
            },
            {
              "title": "法国提出各类“削减赤字”方案，欧美国债抛售潮暂歇",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "重点关注，纳入今日客户沟通议题",
              "evidenceItemIds": [
                "news_d8f21d2525f4"
              ]
            }
          ]
        },
        "pe": {
          "level": "high",
          "summary": "22 条基金/资管相关资讯",
          "items": [
            {
              "title": "对冲基金协会警告英国央行：英国国债回购市场改革或损害流动性",
              "impact": "市场表现影响，可用于投资人沟通",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_4298d79d3d21"
              ]
            },
            {
              "title": "中国“人造太阳”加速！实验设备密集落地",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_ec48b84471c1"
              ]
            },
            {
              "title": "香港主要地产股业绩收官 机构称板块已步入盈利上行周期",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_6be5e9cf054e"
              ]
            }
          ]
        },
        "banking": {
          "level": "high",
          "summary": "19 条银行/货币政策相关资讯",
          "items": [
            {
              "title": "印度股市在印度储备银行近4年来首次加息后下跌",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_add98489850a"
              ]
            },
            {
              "title": "Dalio：美国债务危机或三年内爆发",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_cf7e1ebf884e"
              ]
            },
            {
              "title": "对冲基金协会警告英国央行：英国国债回购市场改革或损害流动性",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_4298d79d3d21"
              ]
            }
          ]
        },
        "trust": {
          "level": "medium",
          "summary": "2 条信托/财富管理相关资讯",
          "items": [
            {
              "title": "券商财富管理进阶到哪一步？“帮助客户赚钱”的转型目标出圈了",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": [
                "news_bb0403c3a13e"
              ]
            },
            {
              "title": "国庆假期后首个交易日 20只基金将集中开启认购",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": [
                "news_9a1ef89b3d73"
              ]
            }
          ]
        }
      }
    },
    "weeklyTrends": {
      "summary": "今日 150 条资讯，覆盖 5 个分类、8 个信源",
      "trends": [
        {
          "topic": "行业动态活跃",
          "evidence": "今日 84 条行业动态资讯，行业层面信息充分，涉及多家机构/产品",
          "evidenceItemIds": [
            "news_add98489850a",
            "news_cf7e1ebf884e",
            "news_50dfd7ccc704"
          ],
          "direction": "平稳"
        },
        {
          "topic": "货币政策信号",
          "evidence": "出现 8 次货币政策相关关键词，关注利率/流动性走向",
          "evidenceItemIds": [
            "news_2f288323fb81",
            "news_b8359ae20a15",
            "news_bda3cd5dc60b"
          ],
          "direction": "上升"
        },
        {
          "topic": "保险行业关注度",
          "evidence": "出现 10 条保险相关资讯，覆盖监管/市场/产品多维度",
          "evidenceItemIds": [
            "news_d8f21d2525f4",
            "news_5c5f98083245",
            "news_9f3b623176ea"
          ],
          "direction": "上升"
        },
        {
          "topic": "市场行情波动",
          "evidence": "出现 50 条市场行情相关资讯，市场关注度提升",
          "evidenceItemIds": [
            "news_5c5f98083245",
            "news_2f288323fb81",
            "news_241128e3ab64"
          ],
          "direction": "上升"
        },
        {
          "topic": "房地产政策动向",
          "evidence": "出现 2 条地产相关资讯，政策边际变化值得关注",
          "evidenceItemIds": [
            "news_6be5e9cf054e",
            "news_a6787f1964f2"
          ],
          "direction": "平稳"
        }
      ]
    },
    "insurancePlanner": {
      "summary": "今日 10 条保险相关资讯，以下为规划师客户沟通参考",
      "talkingPoints": [
        {
          "topic": "蓝猫头鹰计划大举进军保险资本领域，首席执行官接受英国《金融时报》采访",
          "point": "保险科技/数字化转型进展，适合与高净值客户探讨行业前沿趋势",
          "action": "整理科技赋能案例，丰富客户沟通深度",
          "evidenceItemIds": [
            "news_1f95fa341088"
          ]
        },
        {
          "topic": "前8个月医保统筹基金收入约2.07万亿元",
          "point": "健康险领域变化，适合作为客户保单年检中的风险缺口沟通素材",
          "action": "梳理在售健康险产品矩阵，标记优势产品",
          "evidenceItemIds": [
            "news_2ce4c3b723ce"
          ]
        },
        {
          "topic": "法国提出各类“削减赤字”方案，欧美国债抛售潮暂歇",
          "point": "养老金/年金市场动态，可用于退休规划客户的需求唤醒沟通",
          "action": "整理目标客户名单，准备年金利益演示",
          "evidenceItemIds": [
            "news_d8f21d2525f4"
          ]
        },
        {
          "topic": "OpenAI在其智能体擅访澳数据后采取新防范措施",
          "point": "健康险领域变化，适合作为客户保单年检中的风险缺口沟通素材",
          "action": "梳理在售健康险产品矩阵，标记优势产品",
          "evidenceItemIds": [
            "news_46d1d800594c"
          ]
        }
      ]
    },
    "peOperations": {
      "summary": "今日 22 条基金/资管相关资讯，以下为运营参考",
      "talkingPoints": [
        {
          "topic": "对冲基金协会警告英国央行：英国国债回购市场改革或损害流动性",
          "point": "市场波动时期，需主动沟通投资策略和风控措施",
          "action": "准备投资者沟通话术，强调风控纪律和长期视角",
          "evidenceItemIds": [
            "news_4298d79d3d21"
          ]
        },
        {
          "topic": "中国“人造太阳”加速！实验设备密集落地",
          "point": "投资策略/工具创新，可作为投教内容和客户沟通差异化素材",
          "action": "研究新策略逻辑，评估与现有产品线的互补性",
          "evidenceItemIds": [
            "news_ec48b84471c1"
          ]
        },
        {
          "topic": "香港主要地产股业绩收官 机构称板块已步入盈利上行周期",
          "point": "基金/产品业绩数据，是投资人沟通和维护的重要参考",
          "action": "整理同类产品对比，准备业绩归因分析",
          "evidenceItemIds": [
            "news_6be5e9cf054e"
          ]
        },
        {
          "topic": "前8个月医保统筹基金收入约2.07万亿元",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_2ce4c3b723ce"
          ]
        }
      ]
    },
    "marketOutlook": {
      "summary": "今日 55 条宏观经济/政策相关资讯",
      "outlooks": [
        {
          "topic": "Dalio：美国债务危机或三年内爆发",
          "content": "财政政策发力影响基建投资和信用扩张节奏，关注配套政策的落地效果",
          "evidenceItemIds": [
            "news_cf7e1ebf884e"
          ]
        },
        {
          "topic": "对冲基金协会警告英国央行：英国国债回购市场改革或损害流动性",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_4298d79d3d21"
          ]
        },
        {
          "topic": "中秋国庆消费升温，支付宝“碰一下”消费笔数同比增近40%",
          "content": "宏观经济数据反映基本面修复节奏，是判断大类资产配置方向的底层参考",
          "evidenceItemIds": [
            "news_937dfc4c7350"
          ]
        },
        {
          "topic": "“AI硬件第一股”IPO搁浅了",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_1e7baaf09857"
          ]
        }
      ]
    }
  }
};
window.KEYWORD_INDEX = {
  "保险": [
    "news_1f95fa341088",
    "news_2ce4c3b723ce",
    "news_46d1d800594c",
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
  "养老": [
    "news_d8f21d2525f4"
  ],
  "养老金": [
    "news_d8f21d2525f4"
  ],
  "重疾险": [
    "news_b88af30fc3f3"
  ],
  "寿险": [
    "news_5c5f98083245"
  ],
  "财险": [
    "news_90694c744974"
  ],
  "医疗险": [
    "news_90694c744974",
    "news_9f3b623176ea"
  ],
  "银行": [
    "news_add98489850a",
    "news_fd64b64d4e6d",
    "news_c9249e7b9656",
    "news_24c8f7758b3c",
    "news_2844c800e13f",
    "news_e25a794f159a",
    "news_393009cd4e32",
    "news_eea33c3288d6",
    "news_04293e3315b1",
    "news_f5c77fa24ac7",
    "news_9b6d4ce3fae7"
  ],
  "央行": [
    "news_4298d79d3d21",
    "news_f2a80898dd81",
    "news_2f288323fb81",
    "news_bda3cd5dc60b"
  ],
  "利率": [
    "news_cf7e1ebf884e",
    "news_bda3cd5dc60b",
    "news_103f6c78f97b",
    "news_b8359ae20a15"
  ],
  "LPR": [
    "news_1c3c15ddfff7"
  ],
  "加息": [
    "news_add98489850a",
    "news_fd64b64d4e6d",
    "news_6be5e9cf054e",
    "news_bb5234ac8fc1",
    "news_bda3cd5dc60b"
  ],
  "流动性": [
    "news_4298d79d3d21",
    "news_103f6c78f97b"
  ],
  "准备金": [
    "news_1c3c15ddfff7"
  ],
  "存款": [
    "news_1c3c15ddfff7"
  ],
  "理财": [
    "news_514bfed80760"
  ],
  "股票": [
    "news_9b62a54344f9",
    "news_fc8983cea46c",
    "news_928215186ac9",
    "news_772779738221",
    "news_b16ddc8861c0",
    "news_3e65b224407f",
    "news_d797734ec453",
    "news_c83bb99e52f3"
  ],
  "A股": [
    "news_b066a6170b74",
    "news_495d5cc05a7d"
  ],
  "港股": [
    "news_59dbea524f7c",
    "news_3446c2998f5b",
    "news_43d139b09e77",
    "news_fa70279e6d89",
    "news_e46b4ae2feba",
    "news_928215186ac9",
    "news_a6787f1964f2",
    "news_946c4821e445",
    "news_2f5875a3fa25",
    "news_887a4354f2a2",
    "news_9b6d4ce3fae7",
    "news_867bc075917e"
  ],
  "美股": [
    "news_6f0c41dcae74",
    "news_2f68e23702cf",
    "news_b047f316d516",
    "news_9f054758b41a",
    "news_399ff957635a",
    "news_626a091b5efb",
    "news_e4a027f090b2",
    "news_33fdf43777c8",
    "news_73a1f88dc387",
    "news_772779738221",
    "news_57097770eae2",
    "news_103f6c78f97b",
    "news_b16ddc8861c0",
    "news_887a4354f2a2"
  ],
  "大盘": [
    "news_ce5447007e5f"
  ],
  "指数": [
    "news_50dfd7ccc704",
    "news_59dbea524f7c",
    "news_6f0c41dcae74",
    "news_2f68e23702cf",
    "news_b047f316d516",
    "news_43d139b09e77",
    "news_86c3986be2f6",
    "news_393009cd4e32",
    "news_9f054758b41a",
    "news_b40b6bade00a",
    "news_399ff957635a",
    "news_626a091b5efb",
    "news_e4a027f090b2",
    "news_4786bf9e5a36",
    "news_a77eec0ce831",
    "news_2622a09d9103",
    "news_da476cce0926",
    "news_772779738221",
    "news_bda3cd5dc60b",
    "news_9a1ef89b3d73",
    "news_b16ddc8861c0",
    "news_a6787f1964f2",
    "news_946c4821e445",
    "news_ffac771c97c8",
    "news_494dcfbd1b77",
    "news_887a4354f2a2",
    "news_0ba8574abd7b"
  ],
  "对冲基金": [
    "news_4298d79d3d21"
  ],
  "量化": [
    "news_ec48b84471c1"
  ],
  "债券": [
    "news_24c8f7758b3c",
    "news_e25a794f159a",
    "news_626a091b5efb",
    "news_9a1ef89b3d73",
    "news_b16ddc8861c0",
    "news_cc4d95d11eba",
    "news_b8359ae20a15"
  ],
  "国债": [
    "news_cf7e1ebf884e",
    "news_4298d79d3d21",
    "news_d8f21d2525f4",
    "news_399ff957635a",
    "news_e4a027f090b2"
  ],
  "期货": [
    "news_772779738221",
    "news_b16ddc8861c0"
  ],
  "期权": [
    "news_cc4d95d11eba"
  ],
  "IPO": [
    "news_1e7baaf09857",
    "news_3446c2998f5b",
    "news_c5764e932222",
    "news_fa70279e6d89",
    "news_ab1185830942",
    "news_928215186ac9",
    "news_0ce0927b8e42",
    "news_3e65b224407f",
    "news_2f5875a3fa25",
    "news_85c2696805f8",
    "news_9b6d4ce3fae7"
  ],
  "上市": [
    "news_1e7baaf09857",
    "news_bbb0f23e28ac",
    "news_0b8a51cd2f5d",
    "news_0dfdaeb2819b",
    "news_928215186ac9",
    "news_0ce0927b8e42",
    "news_3e65b224407f",
    "news_2f5875a3fa25",
    "news_9b6d4ce3fae7"
  ],
  "增持": [
    "news_2f288323fb81"
  ],
  "回购": [
    "news_4298d79d3d21",
    "news_7d0d056cd693",
    "news_c9fe6d2f4433",
    "news_aaca13f280d3",
    "news_126ac623b9ed",
    "news_152873abb9ab",
    "news_36b0c3aa7d97"
  ],
  "券商": [
    "news_bb0403c3a13e"
  ],
  "经纪": [
    "news_d8c46356b414",
    "news_5c5f98083245",
    "news_9f3b623176ea"
  ],
  "投资者": [
    "news_1e7baaf09857",
    "news_24c8f7758b3c",
    "news_e25a794f159a",
    "news_393009cd4e32",
    "news_0b8a51cd2f5d",
    "news_e4a027f090b2",
    "news_76ac1ce6e4d3",
    "news_b16ddc8861c0",
    "news_d690c6bf2d73"
  ],
  "机构": [
    "news_6be5e9cf054e",
    "news_c9249e7b9656",
    "news_89b80ee0e95c",
    "news_e25a794f159a",
    "news_0b8a51cd2f5d",
    "news_ab1185830942",
    "news_c581f1291d16",
    "news_928215186ac9",
    "news_01e350b73364"
  ],
  "监管": [
    "news_eea33c3288d6",
    "news_50b2b7a580dc",
    "news_04293e3315b1",
    "news_85f387ff3358",
    "news_241128e3ab64",
    "news_c83bb99e52f3"
  ],
  "证监会": [
    "news_d8c46356b414",
    "news_986ca26f7b13"
  ],
  "港交所": [
    "news_2f5875a3fa25"
  ],
  "处罚": [
    "news_4c0267f3ad4a"
  ],
  "问责": [
    "news_04293e3315b1"
  ],
  "条款": [
    "news_2f288323fb81",
    "news_86c3986be2f6",
    "news_b7b7bbf68ab0",
    "news_8a2274a2d05e",
    "news_df5ace029df0",
    "news_4ba51c5c546a",
    "news_d690c6bf2d73",
    "news_90694c744974",
    "news_5c5f98083245"
  ],
  "通知": [
    "news_2ce356a1f2de",
    "news_b26a0499d957"
  ],
  "意见": [
    "news_2f288323fb81",
    "news_86c3986be2f6",
    "news_b7b7bbf68ab0",
    "news_8a2274a2d05e",
    "news_df5ace029df0"
  ],
  "规定": [
    "news_986ca26f7b13"
  ],
  "法规": [
    "news_01e350b73364",
    "news_4c0267f3ad4a"
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
    "news_4d5c1d19c113",
    "news_b7ea28449bda",
    "news_2844c800e13f",
    "news_51b4ef1a95b1",
    "news_2ce356a1f2de",
    "news_68da3282ed1f",
    "news_756984c25811",
    "news_e864e9fce8d1",
    "news_61302e4ef0bd",
    "news_f5c77fa24ac7",
    "news_40275b2df711",
    "news_b88af30fc3f3"
  ],
  "宏观经济": [
    "news_2844c800e13f"
  ],
  "GDP": [
    "news_d8f21d2525f4",
    "news_68da3282ed1f",
    "news_756984c25811",
    "news_f68a3eed6a7c"
  ],
  "CPI": [
    "news_bb5234ac8fc1",
    "news_0ba8574abd7b"
  ],
  "PMI": [
    "news_e676628f36b2",
    "news_f62339ae96f0",
    "news_ffac771c97c8"
  ],
  "产业政策": [
    "news_1c3c15ddfff7"
  ],
  "人民币": [
    "news_76549ac23fb6",
    "news_d690c6bf2d73"
  ],
  "外汇": [
    "news_f2a80898dd81",
    "news_2f288323fb81"
  ],
  "跨境": [
    "news_6d057eabbbb8",
    "news_40051ba58848"
  ],
  "美元": [
    "news_b7ea28449bda",
    "news_4e7ebca50687",
    "news_1e7baaf09857",
    "news_f2a80898dd81",
    "news_2f288323fb81",
    "news_f05197cf72c8",
    "news_c5764e932222",
    "news_c3f50e9a7565",
    "news_24c8f7758b3c",
    "news_d95f29fc5004",
    "news_79da7862942b",
    "news_e25a794f159a",
    "news_393009cd4e32",
    "news_9f054758b41a",
    "news_b40b6bade00a",
    "news_fa70279e6d89",
    "news_68da3282ed1f",
    "news_522fbe4a81df",
    "news_626a091b5efb",
    "news_aeba052c8015",
    "news_ab1185830942",
    "news_5d1b069f836c",
    "news_8a2274a2d05e",
    "news_76ac1ce6e4d3",
    "news_fc8983cea46c",
    "news_da476cce0926",
    "news_3bf38fce97e9",
    "news_c3725271840b",
    "news_8f1cec1e94b8",
    "news_57097770eae2",
    "news_199423f7af26",
    "news_0ce0927b8e42",
    "news_7e656c319e8d",
    "news_3e65b224407f",
    "news_cc4d95d11eba",
    "news_2f5875a3fa25",
    "news_85c2696805f8",
    "news_494dcfbd1b77",
    "news_2eee0f8f0662",
    "news_d690c6bf2d73",
    "news_9b6d4ce3fae7",
    "news_c83bb99e52f3"
  ],
  "欧元": [
    "news_d8f21d2525f4",
    "news_710e355f0588"
  ],
  "日元": [
    "news_199423f7af26",
    "news_0f5254c246c1"
  ],
  "通胀": [
    "news_626a091b5efb",
    "news_e4a027f090b2",
    "news_bda3cd5dc60b",
    "news_657d5062b406",
    "news_0ba8574abd7b"
  ],
  "房地产": [
    "news_a6787f1964f2"
  ],
  "地产": [
    "news_6be5e9cf054e",
    "news_a6787f1964f2"
  ],
  "消费": [
    "news_937dfc4c7350",
    "news_1e7baaf09857",
    "news_bbb0f23e28ac",
    "news_393009cd4e32",
    "news_4f9ee6a83f99",
    "news_bda3cd5dc60b",
    "news_9ea7172a71e7",
    "news_f5c77fa24ac7",
    "news_c07e5681d9c3",
    "news_ce5447007e5f"
  ],
  "投资": [
    "news_1e7baaf09857",
    "news_2f288323fb81",
    "news_f05197cf72c8",
    "news_c5764e932222",
    "news_24c8f7758b3c",
    "news_d0b0261f2e1b",
    "news_86c3986be2f6",
    "news_e25a794f159a",
    "news_393009cd4e32",
    "news_0b8a51cd2f5d",
    "news_fa70279e6d89",
    "news_ab1185830942",
    "news_e4a027f090b2",
    "news_b7b7bbf68ab0",
    "news_8a2274a2d05e",
    "news_76ac1ce6e4d3",
    "news_33fdf43777c8",
    "news_57097770eae2",
    "news_df5ace029df0",
    "news_f5c77fa24ac7",
    "news_9a1ef89b3d73",
    "news_b16ddc8861c0",
    "news_21eaba669052",
    "news_0f5254c246c1",
    "news_7e656c319e8d",
    "news_d690c6bf2d73"
  ],
  "出口": [
    "news_79da7862942b",
    "news_68da3282ed1f",
    "news_3de47bbead40"
  ],
  "进口": [
    "news_68da3282ed1f",
    "news_af7eafc7829e",
    "news_9ea7172a71e7"
  ],
  "贸易": [
    "news_4d5c1d19c113",
    "news_68da3282ed1f",
    "news_522fbe4a81df",
    "news_5ff8719678c9",
    "news_af7eafc7829e",
    "news_e864e9fce8d1",
    "news_61302e4ef0bd",
    "news_f5c77fa24ac7",
    "news_7e656c319e8d"
  ],
  "产业链": [
    "news_21eaba669052"
  ],
  "就业": [
    "news_57097770eae2",
    "news_76549ac23fb6"
  ],
  "收入": [
    "news_2ce4c3b723ce",
    "news_3be004dd3c9d"
  ],
  "黄金": [
    "news_2f288323fb81",
    "news_bb5234ac8fc1",
    "news_c07e5681d9c3"
  ],
  "金价": [
    "news_b88af30fc3f3"
  ],
  "原油": [
    "news_d95f29fc5004",
    "news_79da7862942b",
    "news_e4a027f090b2",
    "news_bb5234ac8fc1",
    "news_c581f1291d16",
    "news_8a2274a2d05e",
    "news_cc4d95d11eba"
  ],
  "工业": [
    "news_9d6f4197f741"
  ],
  "利润": [
    "news_9f054758b41a",
    "news_8f1cec1e94b8"
  ],
  "股市": [
    "news_add98489850a",
    "news_50dfd7ccc704",
    "news_626a091b5efb",
    "news_e4a027f090b2",
    "news_4786bf9e5a36",
    "news_a77eec0ce831",
    "news_2622a09d9103",
    "news_340fb8084e68",
    "news_928215186ac9",
    "news_103f6c78f97b",
    "news_b16ddc8861c0"
  ],
  "美联储": [
    "news_9f054758b41a",
    "news_eea33c3288d6",
    "news_04293e3315b1"
  ],
  "财报": [
    "news_6be5e9cf054e",
    "news_e4a027f090b2"
  ],
  "财富管理": [
    "news_bb0403c3a13e"
  ],
  "FOF": [
    "news_9a1ef89b3d73"
  ],
  "权益": [
    "news_b88af30fc3f3"
  ],
  "年化": [
    "news_0f5254c246c1",
    "news_0ba8574abd7b"
  ],
  "认购": [
    "news_9a1ef89b3d73"
  ]
};
