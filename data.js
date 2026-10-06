// finhot auto-generated data - powered by RSSHub + financial sources + Zhihu OpenAPI
// Generated: 2026-10-06T06:53:31.570Z
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
  "date": "2026-10-06",
  "generatedAt": "2026-10-06T06:53:31.570Z",
  "lead": "今日新增 71 条，共 150 条精选资讯",
  "items": [
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
      "score": 58,
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
          "score": 46,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 37,
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
      "eventId": null
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
      "title": "港股异动 | 三环集团(06951)午后涨超6% 机构指国内MLCC原厂有望加速导入国际供应链",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595711",
      "publishedAt": "2026-10-06T06:05:06.000Z",
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
      "id": "news_ac13f7363e37",
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
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "小摩：香港地产业步入盈利上升周期 最看好中区写字楼",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595712",
      "publishedAt": "2026-10-06T06:05:06.000Z",
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
      "id": "news_f5bc394b10ae",
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
          "score": 12,
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
      "title": "台湾股市上涨；截至收盘台湾加权指数上涨0.08%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595708",
      "publishedAt": "2026-10-06T06:00:16.000Z",
      "fetchedAt": "2026-10-06T06:27:17.821Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6e33bbea2385",
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
      "title": "印度银行股走高，押注印度储备银行加息，Nifty私人银行指数涨逾1%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595707",
      "publishedAt": "2026-10-06T05:53:55.000Z",
      "fetchedAt": "2026-10-06T06:27:17.821Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_5ac9a222900b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 58,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
      "title": "三星、SK海力士股价下跌，市场对第三季度财报保持谨慎",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595704",
      "publishedAt": "2026-10-06T05:52:10.000Z",
      "fetchedAt": "2026-10-06T06:27:17.821Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_f00697d8a5da",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "三星电机获近2900亿韩元AI服务器MLCC订单",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013920306712451",
      "publishedAt": "2026-10-06T05:45:06.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "三星电机在提交的监管文件中披露，公司当天与一家全球大型企业签订AI服务器用多层陶瓷电容器（MLCC）供货合同，合同金额约2856.11亿韩元（约合2.10亿美元），合同期限为2027年1月1日至12月31日。（21经济网）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_228ee79b52ee",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "passesTierGate": false,
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
          "score": 38,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 30,
      "llmScores": [
        27,
        32
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
      "title": "a16z深度报告：AI付费市场，已出现不需要登上大众流量榜的生意",
      "sourceUrl": "https://wallstreetcn.com/articles/3783052",
      "publishedAt": "2026-10-06T05:44:23.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "消费者AI市场正在形成一个清晰的双轨结构：流量繁荣与付费集中同时存在，而真正的商业价值藏在后者。\na16z最新一期Top 100消费者AI应用追踪报告显示，只有7家公司同时进入网页流量、移动月活和消费支出三张榜单，有29家支出排名前50的厂商根本不在任何流量榜上。\n\n\n\n付费端呈现出极端的幂律特征。前1%的付费用户贡献了19.5%的可观察消费，高于底部50%用户合计的16.6%；这批重度用户平均每",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_dc1288689075",
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
          "score": 38,
          "reasons": [
            "命中关联主题 1 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "积重难返！法国站到了“欧债风暴中心”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783053",
      "publishedAt": "2026-10-06T05:27:24.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "法国央行行长Emmanuel Moulin警告，法国若不整顿公共财政，恐将被不断上升的利率\"逐步扼杀\"。\n上周，法债抛售加剧并蔓延至整个欧洲，10年期国债收益率一度逼近5%，为2002年以来最高，法国的借贷成本已高于希腊和意大利。\n衡量法债风险溢价的法德10年期国债利差，上周扩大32个基点至141个基点。德意志银行的Jim Reid称，这是彭博自1990年有数据以来最大的单周扩大，这段时期涵盖了两",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a21a655970c6",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 11,
        "recency": 15,
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
          "score": 37,
          "reasons": [
            "命中关联主题 2 项"
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
      "title": "一老板花90万买4条机器狗不满表现，具微科技：已通过协商妥善处理",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013830431461257",
      "publishedAt": "2026-10-06T05:23:38.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "10月6日，具微科技发布关于近期网传舆情声明称，有关公司与客户的产品采购事项目前已通过协商妥善处理。具微科技在声明中表示，支持客户围绕产品开展二次开发与应用创新，也坚持开放合作应建立在清晰的授权范围、核心技术保护和负责任的产品应用基础之上。对于涉及特定地区、敏感应用场景的项目，具微科技需结合最终用途、技术开放程度及相关合规要求，审慎明确合作条件与责任边界。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_d61d1f44074c",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 66,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
          "score": 35,
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
          "score": 35,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
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
      "title": "韩国计划明年启动35亿美元前沿AI模型开发项目",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013828946546563",
      "publishedAt": "2026-10-06T05:00:26.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "韩国科学技术信息通信部表示，韩国计划从2027年3月起启动一项耗资4.7万亿韩元（约合35亿美元）的前沿人工智能模型研发项目，以期在尖端人工智能竞赛中占据一席之地。该部门表示，计划在国会于12月批准2027年预算后，通过公开招标的方式选定一家牵头开发商，中标者最早可能在2月公布。政府计划将国家股权投资与私人资金相结合，并将计算芯片、数据和人才集中投入到该项目中。项目将向多种主体开放，包括单一企业、",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8fa0c67d5636",
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
        "观点",
        "快讯"
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
      "score": 18,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
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
      "title": "月之暗面据悉完成IPO前融资 最新估值约500亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013804614537347",
      "publishedAt": "2026-10-06T04:19:50.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "据知情人士透露，月之暗面已经完成最后一轮私募融资，估值约500亿美元，并正推进明年第一季度在香港进行首次公开募股（IPO）。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_00e7e2f530e8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 61,
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
          "score": 39,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 39,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
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
      "title": "港股午盘：恒生指数涨0.78%，恒生科技指数涨0.87%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013877105397892",
      "publishedAt": "2026-10-06T04:06:56.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，港股午间收盘，恒生指数涨0.78%，恒生科技指数涨0.87%。明星科网股普涨，阿里巴巴涨2.75%，百度集团涨3.6%，小米集团涨近2%。智谱涨逾8%，GLM-5.3上架AmazonBedrock。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_7054b55b2c1b",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 24,
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
      "attentionScore": 24,
      "llmScores": [
        22,
        26
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
      "title": "美债持续承压，30年期本月破6%“在所难免”？",
      "sourceUrl": "https://wallstreetcn.com/articles/3783051",
      "publishedAt": "2026-10-06T04:06:09.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "美国国债市场抛售浪潮持续蔓延，长端收益率刷新逾二十年高位，多重压力叠加令债市前景愈发严峻。\n10年期与30年期美债收益率周一分别攀升至5.34%和5.7%，均创2002年以来最高水平。与此同时，当日公布的美国服务业数据显示，价格压力指标升至四年高位，进一步强化了市场对通胀持续高企、美联储或再度加息的预期，为债市再添利空。\n\nBMO全球资产管理公司固定收益主管Earl Davis在接受彭博电视采访时",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_026fb51d2488",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "title": "快手可灵AI计划最早明年赴港上市，至少融资10亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013802251865993",
      "publishedAt": "2026-10-06T03:57:57.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "据了解，快手旗下视频生成大模型可灵AI计划最早明年赴港上市，至少融资10亿美元。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_7e6b32c74436",
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
      "title": "韩国9月外储为4405.6亿美元 环比减少17.2亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013798052679814",
      "publishedAt": "2026-10-06T03:36:23.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "韩国银行（央行）6日发布的统计数据显示，截至9月底，韩国外汇储备额为4405.6亿美元，较8月底的4422.8亿美元减少17.2亿美元，为近四个月来首次下降。韩国央行方面表示，金融机构外币存款减少、向韩美战略投资公社委托资产管理，以及以其他货币计价的外汇资产折算成美元后的金额减少，是外储规模下降的主要原因。韩国外储此前连续三个月增加，其中8月环比增加143.3亿美元，创下历史最大单月增幅。（21经",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_d3f4db166f25",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 58,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
      "title": "智谱股价涨超5%，AWS Bedrock接入GLM-5.3并按调用量分成",
      "sourceUrl": "https://www.yicai.com/news/103384666.html",
      "publishedAt": "2026-10-06T03:28:03.000Z",
      "fetchedAt": "2026-10-06T06:26:15.670Z",
      "timeConfidence": "source",
      "summary": "云平台可以帮助模型公司无需自行在海外搭建完整销售网络。10月6日，智谱（2513.HK）股价盘中涨超7%。截至10:39，智谱股价702港元，涨5.56%，总市值3423亿港元。\n\n消息面上，亚马逊云科技（AWS）旗下大模型服务平台Amazon Bedrock宣布接入智谱GLM-5.3，符合条件的企业客户可通过Bedrock直接调用这一开放权重模型。\n\n另外，AWS将基于模型调用量与智谱进行收入分",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9b58ae7f0546",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
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
      "title": "谷歌与Constellation接近达成十亿美元核电采购协议",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013783028912005",
      "publishedAt": "2026-10-06T03:18:06.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "据报道，知情人士透露，谷歌接近与Constellation达成一项多年期协议，合同总金额预计将达到或超过10亿美元，最早可能于本周宣布。亚马逊公司上周刚刚与Constellation达成类似协议，购买690兆瓦电力，其中包括通过升级美国马里兰州卡尔弗特克利夫斯（Calvert Cliffs）核电站获得的新增电力产能。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_ec7e8c0b5d10",
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
      "eventId": "event_16e58ed62828"
    },
    {
      "title": "8.2万亿美元AI盛宴背后，银行业悄然涌入亚洲GPU融资赛道",
      "sourceUrl": "https://wallstreetcn.com/articles/3783050",
      "publishedAt": "2026-10-06T03:17:57.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "银行开始涉足亚洲GPU融资，这一领域此前主要由风险偏好更高的私募信贷基金主导，AI竞赛下一阶段的资金池由此显著扩大。\n近几个月，国际大行在GMI Cloud、Zankore和PaleBlueDot AI三家AI基础设施提供商合计约38亿美元的GPU贷款中扮演了关键角色。据知情人士透露，花旗、摩根大通、巴克莱、德意志银行、桑坦德银行和日本三井住友银行目前都在评估与GPU挂钩的贷款。\n这笔资金至关重要",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c12199ca18d7",
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
          "score": 28,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 28,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 63,
          "reasons": [
            "命中私募销售运营核心主题 2 项"
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
      "title": "现货金银齐跌，白银跌幅扩大至1%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013805979684996",
      "publishedAt": "2026-10-06T02:54:35.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，10月6日，现货黄金失守4110美元/盎司，短线跌幅10余美元，日内跌幅0.74%。现货白银日内跌幅达1.00%，现报60.42美元/盎司。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_41e0c0ae6b38",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 23,
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
      "attentionScore": 23,
      "llmScores": [
        17,
        29
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
      "title": "劳斯莱斯CEO：中国市场对劳斯莱斯至关重要",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013781004210055",
      "publishedAt": "2026-10-06T02:53:11.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "中国超大规模市场的吸引力，让全球品牌纷至沓来。过去多年，中国稳居劳斯莱斯汽车全球第二大市场。劳斯莱斯首席执行官克里斯·布朗里奇表示，中国市场对劳斯莱斯至关重要，为服务好中国客户，劳斯莱斯不断在此投资。克里斯·布朗里奇指出，劳斯莱斯持续在中国投资，因为这是对一个非常重要的市场的长期投资。劳斯莱斯在这里有大量客户，也有强劲的消费需求。（央视财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a33014563e0f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 12,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
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
      "attentionScore": 12,
      "llmScores": [
        12,
        12
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
      "title": "特斯拉连续八个月蝉联韩国进口车销量冠军",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013777848635264",
      "publishedAt": "2026-10-06T02:45:05.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "特斯拉在9月份连续第八个月成为韩国销量最高的进口乘用车品牌。据韩国汽车进口商和分销商协会（KAIDA）统计，上个月韩国新注册进口乘用车总数为34904辆，同比增长6.3%。特斯拉以12372辆的销量领跑市场，自2月以来一直稳居榜首。宝马以6066辆位居第二，紧随其后的是梅赛德斯奔驰（5477辆）和比亚迪（2614辆）。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_68da7c1512a2",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "高盛上调台积电12个月目标价至3300元台币 并提高资本支出预测",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013774767640448",
      "publishedAt": "2026-10-06T02:36:32.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "高盛将台积电12个月目标价从3100元台币上调至3300元台币，预示约28%的上涨空间（10月5日收盘价为2575元台币‌）。高盛预计随着人工智能对GPU、网络芯片和服务器CPU的需求不断增长，台积电明年的增长势头将保持强劲。高盛分析师在报告中写道，“尤其值得注意的是，AI智能体带动CPU需求增强，这是过去一年出现的一项关键变化”。高盛预计，台积电2026年和2027年以美元计的营收将分别同比增长",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b325f61521b6",
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
      "title": "GLM-5.3上架Amazon 智谱打开海外收入分成通道",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013771940892808",
      "publishedAt": "2026-10-06T02:25:47.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "今日，亚马逊云科技（AWS）旗下大模型服务平台Amazon Bedrock官宣接入智谱GLM-5.3，AWS基于模型调用量与智谱进行收入分成。据了解，除了AWS外，智谱近期与多家海外云厂商落地收入分成模式。此前智谱透露计划通过海外云平台收入分成增加一条具有规模潜力的商业路径。国内方面，智谱也已与阿里云百炼平台等头部云厂商签署类似分成协议，华为云已上架GLM-5.3，并就类似合作达成意向，形成贯通国",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f14d43a4c734",
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
      "title": "谷歌与Constellation酝酿十亿美元核电协议，科技巨头抢购清洁电力大幕正式开启",
      "sourceUrl": "https://wallstreetcn.com/articles/3783049",
      "publishedAt": "2026-10-06T02:19:42.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "据知情人士透露，谷歌母公司Alphabet接近与美国最大核反应堆运营商Constellation Energy达成一项多年期核电采购协议，将向后者支付至少10亿美元，最快本周宣布。\n上周，亚马逊刚与Constellation签下类似协议。若谷歌协议如期宣布，Constellation将在两周内接连与两家科技巨头签约。\nConstellation和谷歌周一均拒绝置评，协议涉及的核电规模和地点尚不清楚",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a311c20ba4e5",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 20,
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
      "noiseCaps": [
        "营销与活动推广"
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
        "行业动态"
      ],
      "eventId": "event_16e58ed62828"
    },
    {
      "title": "多家阿联酋基金以及贝莱德据悉商谈参与OpenAI最新一轮300亿美元融资",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013736805503113",
      "publishedAt": "2026-10-06T02:15:25.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "知情人士称，包括MGX在内的多家阿联酋投资基金正在与OpenAI洽谈，可能参与这家人工智能巨头最新一轮300亿美元融资。其中一位知情人士表示，这些基金将组成一个财团参与OpenAI这轮融资。另一位人士称，这些阿联酋基金讨论的合计投资金额最高达到100亿美元。知情人士表示，贝莱德也在商谈参与这轮融资。融资仍在进行中，具体条款可能发生变化。因涉及未公开信息，这些知情人士要求匿名。（智通财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_02cab4aa599f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 24,
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
          "score": 37,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
          ]
        }
      },
      "attentionScore": 24,
      "llmScores": [
        21,
        26
      ],
      "scoredBy": "llm",
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": "event_7ce297194a26"
    },
    {
      "title": "欧洲财政压力正成为美债抛售的新导火索",
      "sourceUrl": "https://wallstreetcn.com/articles/3783047",
      "publishedAt": "2026-10-06T02:06:06.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "法国债务危机与西班牙政治动荡叠加美国自身结构性赤字问题，正推动全球债券市场进入新一轮动荡周期。\n美国10年期国债收益率周一盘中一度攀升至5.349%，创24年来新高，30年期收益率亦触及5.703%。与此同时，法国10年期国债收益率升至2002年以来最高水平，与德国国债的利差扩大至欧债危机以来最宽。欧元兑美元今年已累计下跌约5%，并连续四周走低。\n分析人士指出，欧洲财政恶化与政治不稳定，正在与美国",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cd6937f446da",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "eventId": null
    },
    {
      "title": "澳大利亚消费者信心大幅下滑，利率与油价压力持续加剧",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3595543",
      "publishedAt": "2026-10-06T02:04:27.000Z",
      "fetchedAt": "2026-10-06T06:27:17.874Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_c7b11a8ed54f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 51,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 21,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 34,
          "reasons": [
            "命中二级市场投教核心主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 12,
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
      "title": "美债期货细则暗藏玄机：30年期收益率逼近6%或引发连锁调仓压力",
      "sourceUrl": "https://wallstreetcn.com/articles/3783043",
      "publishedAt": "2026-10-06T01:45:29.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "30年期美债收益率逼近6%，可能触发国债期货\"最便宜可交割券\"（CTD）切换，迫使资产管理机构卖出期货，进一步加剧长端收益率上行。\n周一，30年期美债收益率升至5.70%，为2002年以来最高。据彭博分析，若该收益率升至6%附近，长期国债期货的CTD可能由当前的2045年到期国债切换至2050年到期国债。\n持仓数据显示，资产管理机构近几周已在削减长期和超长期国债期货净多头。\n交割规则如何放大抛压\n",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_37014145d8d6",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "title": "Lucid继续执行库存削减计划，第三季度交付3806辆汽车",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013723328254082",
      "publishedAt": "2026-10-06T01:36:15.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "当地时间10月5日，美国电动汽车制造商Lucid Group公布截至2026年9月30日第三季度的产量和交付数据。该公司第三季度生产2954辆汽车，交付3806辆汽车。交付量超过产量，公司继续执行计划中的库存削减，将现有车辆库存转化为客户交付，这是此前宣布的2026年1.4亿美元现金流改善运营重置计划的一部分。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_02505c35186c",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 59,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "passesTierGate": false,
      "confidence": "medium",
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
      "title": "香港恒生指数开盘涨1％，恒生科技指数涨1.02％",
      "sourceUrl": "https://wallstreetcn.com/articles/3783046",
      "publishedAt": "2026-10-06T01:27:00.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "阿里巴巴涨2.94%，百度集团、美团涨近2%。零跑汽车、吉利汽车、奇瑞汽车涨超2%。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8dfaa3e7c03b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 19,
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
      "attentionScore": 19,
      "llmScores": [
        18,
        20
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_4dd732015bad"
    },
    {
      "title": "港股开盘：恒生指数开涨1%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4013719454224256",
      "publishedAt": "2026-10-06T01:26:34.000Z",
      "fetchedAt": "2026-10-06T06:26:56.581Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，10月6日，港股开盘，恒生指数开涨1%，恒生科技指数开涨1.02%。明星科网股普涨，阿里巴巴涨2.94%，百度集团、美团涨近2%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_d3774d842c2c",
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
      "eventId": "event_4dd732015bad"
    },
    {
      "title": "当40万亿险资遇上低利率，A股的定价规则开始变了",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3781681",
      "publishedAt": "2026-10-06T01:25:39.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "低利率正在迫使保险资金重新定义股票在资产负债表中的角色。2026年保险资金运用规模突破40万亿元，股票配置比例继续抬升，但更值得关注的是结构变化：银行、电力、煤炭等稳定现金流资产持续获增配，电子、通信、新能源等成长方向也进入配置池。红利开始承担部分稳定收益功能，成长负责补足长期回报，险资正在改变的不只是资金流向，也可能是A股对“好资产”的定价标准。一、发生了什么？——险资已经从“加股票”走到了“重",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_21bfd6078a4b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 74,
      "rawScore": 74,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 8,
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
          "score": 59,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "命中关联主题 2 项"
          ]
        },
        "marketEducation": {
          "score": 85,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "四季度，投资主线来了！多家公募最新研判",
      "sourceUrl": "https://wallstreetcn.com/articles/3783042",
      "publishedAt": "2026-10-06T00:45:48.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "三季度以来，A股市场经历了一轮显著的震荡与结构再平衡，四季度的市场投资主线正成为各方关注的焦点。\n\n\n\n\n\n\n\n\n\n近日，万家基金、摩根资产管理、汇丰晋信基金、博时基金、国联安基金等多家基金公司发布最新的四季度投资策略。公募机构普遍认为，三季度的市场调整主要源于交易拥挤度消化与资金再平衡，并非核心产业逻辑的反转。面对即将到来的四季度，市场有望在估值修复与行情扩散中震荡上行。\n\n\n\n\n\n\n在配置思路",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_42a6f1de05a5",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 28,
      "rawScore": 76,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 9,
        "recency": 15,
        "actionability": 10
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 93,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "命中关联主题 3 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 28,
      "llmScores": [
        24,
        31
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
      "title": "欧洲正在用性命下注：今年的厄尔尼诺会带来暖冬",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783039",
      "publishedAt": "2026-10-06T00:17:06.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "截至9月底，欧盟地下储气库的填充率是70.87%，创2011年有记录以来最低。同时核心国家德国只有57%，往年这个时候，应该在85%以上。 更要命的是，居然没人急。欧盟委员会没有下令冲刺法定的90%储气目标，反而建议各国把目标降到80%。德国在9月底做出的最大动作，是命令国有企业SEFE在12月中旬前额外囤8太瓦时天然气——这一体量不到德国年消费量的1%，杯水车薪。 这不是疏忽，而是赌注：欧洲在赌",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_604efe266591",
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
      "title": "台积电抢英特尔市场、磋商与马斯克Terafab合作，股价创历史新高",
      "sourceUrl": "https://wallstreetcn.com/articles/3783037",
      "publishedAt": "2026-10-06T00:16:43.000Z",
      "fetchedAt": "2026-10-06T06:26:08.147Z",
      "timeConfidence": "source",
      "summary": "台积电与马斯克旗下Terafab超级晶圆厂的潜在合作正成为半导体行业最受瞩目的交易。业内人士估计双方合作概率超过八成，市场已率先作出反应。\n周一，台积电美股（TSM）盘中触及487.44美元的历史高点，收盘涨约2.8%，报485.80美元、也收创历史新高，市值史上首次触及约2.5万亿美元，今年内累计涨幅超过60%。\n\n本次台积电股价走高的推手来自马斯克本人。他在社交媒体平台X上亲自证实，与台积电正",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_839916b1572e",
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
          "score": 62,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
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
      "title": "创纪录AI芯片融资启动分销：420亿高级债靠博通信用背书，180亿次级债要等Anthropic IPO",
      "sourceUrl": "https://wallstreetcn.com/articles/3783041",
      "publishedAt": "2026-10-06T00:15:48.000Z",
      "fetchedAt": "2026-10-06T06:26:08.148Z",
      "timeConfidence": "source",
      "summary": "一笔600亿美元的AI芯片融资据称进入银团分销环节，美国银行、花旗和摩根士丹利开始向其他银行转手部分债务。这是迄今规模最大的芯片融资交易，也标志着银行从\"承诺出资\"转向\"分销风险\"的关键一步。\n美东时间10月5日周一，媒体援引知情人士消息称，约420亿美元由博通担保的高级担保贷款已率先启动银团分销，凭借博通A-级信用评级，未来可进入私募配售或投资级债券市场；另有180亿美元无博通担保的次级债务稍后",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_85802a74d14d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 44,
      "rawScore": 69,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "passesTierGate": false,
      "confidence": "high",
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
          "score": 63,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 59,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 44,
      "llmScores": [
        43,
        44
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
      "title": "纳指再创收盘新高，硬盘股反弹、PTC大涨逾33%，国际油价跌近2%",
      "sourceUrl": "https://www.yicai.com/news/103384612.html",
      "publishedAt": "2026-10-05T23:05:47.000Z",
      "fetchedAt": "2026-10-06T06:26:15.670Z",
      "timeConfidence": "source",
      "summary": "市场对本月继续加息的预期仍明显低于一周前。当地时间周一（10月5日），美股三大指数集体收涨。国际油价回落，科技股多数走高，推动纳指刷新收盘纪录。企业并购消息也提振市场情绪，工业软件公司PTC和物流企业RXO分别大涨逾33%和22%。\n\n截至收盘，道指涨90.94点，涨幅0.18%，报51267.90点；纳指涨286.45点，涨幅1.05%，报27477.31点；标普500指数涨51.23点，涨幅0",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b3b45501c66d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 34,
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
      "tierGate": 60,
      "passesTierGate": false,
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
          "score": 94,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "attentionScore": 34,
      "llmScores": [
        30,
        37
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
      "title": "华尔街见闻早餐FM-Radio | 2026年10月6日",
      "sourceUrl": "https://wallstreetcn.com/articles/3783038",
      "publishedAt": "2026-10-05T23:01:04.000Z",
      "fetchedAt": "2026-10-06T06:26:08.148Z",
      "timeConfidence": "source",
      "summary": "华见早安之声\n请各位听众升级为见闻最新版APP，以便成功收听以下音频。\n\n要闻精选\n\n华为与高通达成多年期专利交叉授权，覆盖5G、计算、AI与网络等多领域，高通还将收购华为部分美国专利。\n美国9月ISM服务业PMI降至54.9，但价格指数冲上74.0创四年新高，服务业扩张放缓的同时成本压力回升。\n2026年诺贝尔生理学或医学奖揭晓，戴塞洛斯、黑格曼与纳格尔因光遗传学发现获奖，平分1200万瑞典克朗",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_98f336c10212",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 28,
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
          "score": 19,
          "reasons": [
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 28,
      "llmScores": [
        23,
        32
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_99b6c1e3a191"
    },
    {
      "title": "42%溢价、五年才与资本成本打平，施耐德电气创纪录230亿买PTC，股价重挫",
      "sourceUrl": "https://wallstreetcn.com/articles/3783036",
      "publishedAt": "2026-10-05T22:03:05.000Z",
      "fetchedAt": "2026-10-06T06:26:08.148Z",
      "timeConfidence": "source",
      "summary": "法国工业巨头施耐德电气（Schneider Electric SE）宣布以约226亿美元收购美国工业软件公司PTC Inc.，创下公司史上最大规模并购纪录，标志着欧洲工业企业在AI浪潮中加速押注的新阶段。\n此次收购以全现金方式完成，收购价格较PTC最近收盘价溢价逾40%。施耐德电气首席执行官Olivier Blum表示，此次交易将打造\"业内最完整的软件与AI强力组合\"，PTC首席执行官Neil B",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a3fbc72e2b31",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "报道：OpenAI正与阿联酋基金、贝莱德洽谈300亿美元融资轮",
      "sourceUrl": "https://wallstreetcn.com/articles/3783035",
      "publishedAt": "2026-10-05T20:49:53.000Z",
      "fetchedAt": "2026-10-06T06:26:08.148Z",
      "timeConfidence": "source",
      "summary": "媒体援引知情人士报道称，OpenAI正与包括阿布扎比MGX在内的多家阿联酋投资基金进行谈判，以协助锚定ChatGPT开发商一笔300亿美元的融资轮。这些基金将组成银团参与本轮投资，阿联酋基金已讨论合计投入高达100亿美元。贝莱德也在讨论与该银团一同参与本轮融资。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_45692583a3f3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 22,
      "rawScore": 75,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 21,
        "evidence": 5,
        "recency": 13,
        "actionability": 10
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
          "score": 54,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 54,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 22,
      "llmScores": [
        31,
        13
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_7ce297194a26"
    },
    {
      "title": "Spacex收涨7.6%，收创6月份以来新高，帮助马斯克“恢复”万亿美元富豪头衔",
      "sourceUrl": "https://wallstreetcn.com/articles/3783033",
      "publishedAt": "2026-10-05T20:46:02.000Z",
      "fetchedAt": "2026-10-06T06:26:08.148Z",
      "timeConfidence": "source",
      "summary": "SpaceX股价周一大涨近8%，推动马斯克净资产重新突破万亿美元大关。摩根士丹利分析师前一日发布看多报告，称该股价格\"低估\"，叠加公司近期多项里程碑式飞行任务，共同催动此轮涨势。\n周一收盘，SpaceX股价报171.09美元，创6月中旬以来新高。据福布斯实时富豪榜，马斯克当日净资产增加约306亿美元，总财富升至约1.03万亿美元，位居富豪榜首。\n\n这是马斯克继今年6月SpaceX首次公开募股后，再",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e7eadeb9b8ea",
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
      "title": "10月6日会员早报：美国9月服务业价格指数创四年多新高 欧佩克+维持11月产量目标不变",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783032",
      "publishedAt": "2026-10-05T20:45:48.000Z",
      "fetchedAt": "2026-10-06T06:26:08.148Z",
      "timeConfidence": "source",
      "summary": "1、【美国9月服务业价格指数创四年多新高】当地时间10月5日周一，美国供应管理协会（ISM）公布的数据显示，美国9月ISM服务业PMI录得54.9，低于8月的55.4，在连续两个月上升后回落，也低于市场预期的55.2。尽管整体指数走弱，衡量企业投入成本的价格指数却从72.6升至74.0，高于市场预期的73，创下2022年7月以来最高。2、【欧佩克+维持11月产量目标不变】欧佩克+七个核心成员国决定",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_62d655ca7463",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "Option Care Health股价盘后暴涨22%，麦肯锡与CD&R拟逾50亿美元收购",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595307",
      "publishedAt": "2026-10-05T20:14:47.000Z",
      "fetchedAt": "2026-10-05T20:39:54.662Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_7b36737715ed",
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
      "title": "Meta、微软设法减少员工对Claude依赖：Meta内部使用人数减半，微软预算砍掉三分之一",
      "sourceUrl": "https://wallstreetcn.com/articles/3783031",
      "publishedAt": "2026-10-05T20:09:19.000Z",
      "fetchedAt": "2026-10-05T20:35:50.534Z",
      "timeConfidence": "source",
      "summary": "Meta和微软正努力减少员工对Claude的使用，Anthropic营收前景承压。\n10月5日，据The Information报道，Meta和微软正大幅压缩对Anthropic旗下Claude AI的内部使用，转而推动员工采用各自自研工具。\n这一转变直接冲击Anthropic的核心营收结构，该公司在近期IPO招股书中披露，两大客户合计贡献约25%的收入。\n微软此前预计在Claude上的内部年支出",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9fe2d8dfe510",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 51,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "title": "OpenAI遭商标侵权诉讼，\"Astra\"名称引发法律纠纷",
      "sourceUrl": "https://wallstreetcn.com/articles/3783030",
      "publishedAt": "2026-10-05T19:32:18.000Z",
      "fetchedAt": "2026-10-05T20:35:50.534Z",
      "timeConfidence": "source",
      "summary": "OpenAI再度面临商标诉讼。一家名为TradeSun的AI软件公司指控OpenAI在其最新大语言模型中擅自使用\"Astra\"商标，要求法院责令OpenAI下架相关产品名称并赔偿利润。\n据彭博报道，TradeSun已于周一在加利福尼亚州北区联邦地区法院提起诉讼。该公司自2021年起以Astra为品牌销售软件产品，并于2022年获得联邦商标注册，注册范围涵盖AI软件服务。\nTradeSun认为，Op",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cbe0e5737b46",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "美印贸易谈判陷入僵局，印财长：“已到平台期”，让步空间极为有限",
      "sourceUrl": "https://wallstreetcn.com/articles/3783027",
      "publishedAt": "2026-10-05T19:32:04.000Z",
      "fetchedAt": "2026-10-05T20:35:50.534Z",
      "timeConfidence": "source",
      "summary": "美印两国官员相继发出信号，双边贸易协议谈判陷入僵局，达成协议的难度正在上升。\n印度财政部长Nirmala Sitharaman周一表示，谈判\"已到平台期\"，双方进一步让步的空间极为有限。此前，美国贸易代表Jamieson Greer上周五曾表示谈判处于\"最后阶段\"，但距离最终达成协议并不\"迫在眉睫\"。\n这一僵局对市场的直接影响在于，原本被寄予厚望的美印贸易协议时间表再度蒙上不确定性，涉及关税优惠安",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bf22577db20c",
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
      "title": "Telos公司赢得1,350万美元空军合同，股价大涨逾7.5%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595273",
      "publishedAt": "2026-10-05T19:25:28.000Z",
      "fetchedAt": "2026-10-05T20:39:54.662Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_3395149b9bf4",
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
      "title": "今年只有科技富豪在赚钱：AI热潮推动身家暴增8450亿美元，马斯克独占近四成",
      "sourceUrl": "https://wallstreetcn.com/articles/3783029",
      "publishedAt": "2026-10-05T19:22:40.000Z",
      "fetchedAt": "2026-10-05T20:35:50.534Z",
      "timeConfidence": "source",
      "summary": "人工智能热潮正在以前所未有的速度改写全球财富格局。\n根据彭博亿万富翁指数，全球最富有的500人中，约100位科技行业亿万富翁今年前九个月合计财富增加8450亿美元，创下同期历史最高纪录。与此同时，非科技领域富豪同期财富合计缩水620亿美元。\n这场财富盛宴高度向顶端集中。马斯克一人前九个月便新增财富3100亿美元，约占指数总增量的40%，并在旗下SpaceX与xAI合并上市后短暂成为全球首位身价突破",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_33978d24de40",
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
      "title": "欧元汇率创17个月新低 法国债市危机引发“传染”担忧",
      "sourceUrl": "https://www.cls.cn/detail/2498053",
      "publishedAt": "2026-10-05T19:10:21.000Z",
      "fetchedAt": "2026-10-05T20:38:24.933Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯（编辑 牛占林）欧元汇率持续走弱，成为又一个值得警惕的信号，市场越来越担心法国债务状况可能威胁整个欧元区的稳定，令政策制定者面临更大压力。\n周一欧盘交易时段，欧元兑美元汇率一度跌破1.12美元，触及1.1161美元，创下17个月以来新低；与此同时，欧元兑英镑、瑞郎和日元也大幅走弱。\n分析师表示，法国正处于当前欧洲金融市场担忧的核心，该国政府正寻求推动一项不受欢迎的2027年预算方",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8d9b7e99f147",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 53,
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
      "eventId": null,
      "attentionScore": 53,
      "llmScores": [
        61,
        45
      ],
      "scoredBy": "llm"
    },
    {
      "title": "沙特阿美CEO警告：全球石油供应“安全垫”已低得令人担忧",
      "sourceUrl": "https://www.cls.cn/detail/2498036",
      "publishedAt": "2026-10-05T17:05:37.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "财联社10月6日讯（编辑 牛占林）随着霍尔木兹海峡原油运输量回升，波斯湾产油国纷纷争夺市场份额。沙特阿美将11月运往欧洲的原油售价上调，但面向亚洲买家的原油售价折价幅度扩大至六年来最大。\n据沙特阿美公布的价格表显示，沙特阿美将11月面向亚洲买家的阿拉伯轻质原油官方售价设定为较迪拜/阿曼基准价每桶低5美元，而10月的折价幅度为每桶2美元。\n此次降价表明，作为全球最大石油出口商，沙特阿美可能正试图扩大",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ab0dae74f46b",
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
      "title": "美股周一走高，财报季将于周四拉开帷幕",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3595235",
      "publishedAt": "2026-10-05T16:54:27.000Z",
      "fetchedAt": "2026-10-05T17:15:35.830Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6edfe4751ab8",
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
          "score": 59,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
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
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "英国股市上涨；截至收盘Investing.com 英国 100上涨0.31%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595211",
      "publishedAt": "2026-10-05T16:10:15.000Z",
      "fetchedAt": "2026-10-05T17:15:35.830Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_1241a6ceadc5",
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
      "title": "瑞典股市收低；截至收盘瑞典OMX斯德哥尔摩30指数下跌0.09%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595210",
      "publishedAt": "2026-10-05T16:09:14.000Z",
      "fetchedAt": "2026-10-05T17:15:35.830Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_12fa17a9b134",
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
      "title": "西班牙股市上涨；截至收盘西班牙IBEX35指数上涨1.12%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595209",
      "publishedAt": "2026-10-05T16:08:47.000Z",
      "fetchedAt": "2026-10-05T17:15:35.830Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6a863bd782d5",
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
      "title": "葡萄牙股市收低；截至收盘PSI下跌0.66%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3595208",
      "publishedAt": "2026-10-05T16:08:21.000Z",
      "fetchedAt": "2026-10-05T17:15:35.830Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_1a4186f612b3",
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
      "title": "美国30年期国债收益率涨至5.69%，创2002年以来新高。",
      "sourceUrl": "https://wallstreetcn.com/livenews/3174168",
      "publishedAt": "2026-10-05T16:03:18.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "美国30年期国债收益率涨至5.69%，创2002年以来新高。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8acd20ebb81c",
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
      "title": "价格指数创四年新高！美国9月ISM服务业扩张放缓，与制造业均显通胀压力再抬头",
      "sourceUrl": "https://wallstreetcn.com/articles/3783025",
      "publishedAt": "2026-10-05T14:28:03.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "最新先行指标显示，过去一个月，美国服务业扩张步伐有所放缓，行业企业和制造业一样面临成本压力升温。\n当地时间10月5日周一，美国供应管理协会（ISM）公布的数据显示，美国9月ISM服务业PMI录得54.9，低于8月的55.4，在连续两个月上升后回落，也低于市场预期的55.2。不过，该指数已连续27个月处于50荣枯线以上，显示服务企业活动仍保持扩张。\n更值得关注的是价格分项指数。9月ISM服务业价格指",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0798fd39abe0",
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
      "title": "全球股市分化AI盈利对冲成关键，美国国会控制权将重估政策预期，中国生产分化消费磨底政策加码---1005宏观脱水",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783023",
      "publishedAt": "2026-10-05T14:26:18.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "纳指与全球主要市场走出罕见分化，长端美债收益率升破5%为分母端压力来源，资产差异在分子端，即谁具备盈利上修对冲。AI资产拥有分子对冲，道指、港股与欧洲缺乏盈利支撑被折现率单独压制。往后看分化能否收敛取决于美债收益率能否回落及纳指上涨能否扩散至市场广度。 10月大类资产维持权益优于债券优于商品的判断。中期选举前美股偏强美债承压，A股拥挤度回落但盈利待验证，商品整体低配黄金保留对冲。 中国生产端景气分",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_81af44f3817f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 6 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 58,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
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
      "title": "视线｜与墓穴为邻 菲律宾逾万贫民寄居公墓",
      "sourceUrl": "https://photos.caixin.com/2026-10-05/102490807.html",
      "publishedAt": "2026-10-05T14:10:54.000Z",
      "fetchedAt": "2026-10-05T17:13:01.302Z",
      "timeConfidence": "source",
      "summary": "2010年4月3日，菲律宾纳沃塔斯市（Navotas）市政公墓内，几名菲律宾儿童正走过一座横跨在堆满垃圾过道上的小桥，从一个陵墓区走向另一个陵墓区，这里正是他们生活的地方。图： NOEL CELIS／视觉中国\n    \n   \n       　　【财新网】世界人居日，这个由联合国设立的纪念日定在每年10月第一个星期一，聚焦全球城市住房议题。几乎同时，马尼拉市政府宣布投入5000万比索用于住房建设，",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d03360c84d43",
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
      "title": "台积电股价一度涨超1.7%，再创新高，总市值达2.5万亿美元。",
      "sourceUrl": "https://wallstreetcn.com/livenews/3174129",
      "publishedAt": "2026-10-05T13:45:18.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "台积电股价一度涨超1.7%，再创新高，总市值达2.5万亿美元。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_270b20fc7b2f",
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
      "title": "港股公告精选｜百威亚太重组及计提或影响三季度利润 江波龙H股稳定期结束",
      "sourceUrl": "https://www.cls.cn/detail/2497977",
      "publishedAt": "2026-10-05T13:15:07.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（编辑 冯轶）财联社为您带来今日港股重要公告\n百威亚太(01876.HK)：内部重组产生5200万美元税项开支，另就印度应收款计提3000万美元拨备。\n\n公告称，上述事项将对截至2026年9月30日止3个月的股权持有人应占溢利产生负面影响。\n\n石药集团(01093.HK)：8项最新临床试验进展将于2026年欧洲肿瘤内科学会(ESMO)年会上发布。\n四环医药(00460.HK)：水",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_222f6d738031",
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
      "title": "港股风向标｜恒指反弹站回24000点上方 情绪面跟随海外市场改善",
      "sourceUrl": "https://www.cls.cn/detail/2497974",
      "publishedAt": "2026-10-05T13:10:31.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（编辑 冯轶）今日港股短线反弹，三大指数集体收涨。截至收盘，恒生指数涨0.28%，国企指数涨0.26%；恒生科技指数涨0.62%。\n【恒指反弹站回24000点上方 短线跟随海外市场波动】\n盘面上，今日大型科网股表现平平，整体涨跌不一。阿里巴巴涨近1%，腾讯、美团收涨，小米跌超1%。\n\n其他方向上，AI产业链成为反弹主角，半导体、芯片、光通信、PCB等硬件概念集体走强，且应用概念也",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1474788dda27",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 22,
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
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_c68d651d4ff9",
      "attentionScore": 22,
      "llmScores": [
        20,
        23
      ],
      "scoredBy": "llm"
    },
    {
      "title": "AI进化速递丨华为与高通宣布达成广泛专利许可协议",
      "sourceUrl": "https://www.yicai.com/news/103384546.html",
      "publishedAt": "2026-10-05T13:00:07.000Z",
      "fetchedAt": "2026-10-05T17:13:42.240Z",
      "timeConfidence": "source",
      "summary": "华为与高通宣布达成广泛专利许可协议，覆盖 5G、AI、计算及网络技术领域……①华为与高通宣布达成广泛专利许可协议，覆盖 5G、AI、计算及网络技术领域；②鸿海：预计第四季度与人工智能相关的业务将继续增长；③德国电信：预计到2030年，AI和自动化将节省约25亿欧元间接成本。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e689c676b03b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 23,
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
        "行业动态"
      ],
      "eventId": "event_934053bb00e3",
      "attentionScore": 23,
      "llmScores": [
        27,
        18
      ],
      "scoredBy": "llm"
    },
    {
      "title": "券商发债直追2万亿，头部三家破千亿，资本优势孵化业绩优势",
      "sourceUrl": "https://www.cls.cn/detail/2497970",
      "publishedAt": "2026-10-05T12:56:28.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（记者高艳云）券商年内加速扩表。今年前三季度，券商发债规模合计1.69万亿元，同比增长32.97%。截至10月5日，证券公司债及短期融资券存量余额达3.63万亿元，较上年同期增加6991.38亿元，增幅23.82%。\n年内券商境内发债市场呈现出前所未有的“冰火两重天”格局。一方面，千亿级发债扩容至三家（国泰海通、中信证券、中信建投），头部十强合计揽下58.62%市场份额；另一方面",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_be2d8ce1744e",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 40,
      "rawScore": 78,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "confidence": "high",
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
          "score": 59,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 46,
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
      "attentionScore": 40,
      "llmScores": [
        44,
        36
      ],
      "scoredBy": "llm"
    },
    {
      "title": "现房销售新政叠加房贷贴息落地，多地国庆楼市表现亮眼",
      "sourceUrl": "https://www.cls.cn/detail/2497972",
      "publishedAt": "2026-10-05T12:55:17.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "“828新政”叠加10月1日起居民购房贷款贴息正式生效，多地国庆楼市表现亮眼。\n据湖北省住建部门数据，在政策礼包密集落地，展销活动全省铺开背景下，湖北金秋购房季成色十足。10月1日至3日，武汉新建商品房销售额同比增长逾一成；十堰市销售面积、销售额同比增幅均达13%左右，荆州、孝感、随州等地成交同比稳步增长。\n\n图片来源：微信公众号“湖北住建”\n为进一步降低置业门槛、激活购房意愿，湖北多地推出政策礼",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f8410f653bea",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 41,
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
      "eventId": "event_c94a63e01b8e",
      "attentionScore": 41,
      "llmScores": [
        46,
        36
      ],
      "scoredBy": "llm"
    },
    {
      "title": "前三季度公募分红总量缩水竟达三成，曾经的分红奶牛为何减量？",
      "sourceUrl": "https://www.cls.cn/detail/2497963",
      "publishedAt": "2026-10-05T12:54:30.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（记者 封其娟）上半年失守的分红主力之位，下半年又从权益流转到债基手中，但不容忽视的是，分红增量已基本由权益端接管。\n公募年内分红总额较去年同期缩减514.32亿元，减幅近30%。据Choice统计，今年前三季度2553只产品（多份额分开统计，下同）分红总额为1220.33亿元；而2025年同期，2812只产品分红总额为1734.65亿元。\n公募分红总额的回落主要来自债基端收缩。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1109f307029a",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 59,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "title": "欧元跌至17个月低位，法国和西班牙政治风险搅动市场",
      "sourceUrl": "https://wallstreetcn.com/articles/3783024",
      "publishedAt": "2026-10-05T12:52:13.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "欧元兑美元周一跌至17个月来最低水平，法国财政困局与西班牙政局突变的双重冲击令投资者加速撤离欧元区资产，欧洲主权债市场压力进一步升温。\n西班牙总理桑切斯周一宣布提前大选，住房危机引发的全国抗议成为导火索，令这一欧元区近年来经济表现相对亮眼的经济体骤添政治不确定性。\n与此同时，法国预算草案未能说服市场，巴克莱与荷兰国际集团（ING）的经济学家均认为，该计划不足以从根本上解决法国结构性财政问题。\n欧元",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fc43d1c7e6c2",
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
      "title": "中国航协回应“东航空姐下跪道歉事件”",
      "sourceUrl": "https://www.cls.cn/detail/2497969",
      "publishedAt": "2026-10-05T12:50:58.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "中国航协微信公众号今日发布《依法维护乘务权益共建客舱服务秩序》，全文如下：\n近期，我会会员航空公司—中国东方航空，在客舱服务环节中，因餐车偶发触碰旅客，当班乘务员、乘务长多次向旅客致歉并开展服务补救，该旅客仍对当班乘务员进行言语攻击与威胁。事件发生之后，东方航空协同相关方对事件过程进行全面复盘取证，并对当事乘务员开展心理疏导与关怀支持。目前，东方航空已完成证据固定并正式报案。\n2026年7月1日施",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d2f26c4757f7",
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
      "title": "美股三大期指几无变动 油市多空消息轮番来袭|今夜看点",
      "sourceUrl": "https://www.cls.cn/detail/2497962",
      "publishedAt": "2026-10-05T12:36:24.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（编辑 卞纯）周一（10月5日），美股三大期指几无变动。投资者密切关注美债收益率以及国际油价，并静待美联储本周将公布的会议纪要，以寻找该央行下一步利率动向的线索。\n截至发稿，标普500指数期货涨0.01%，道指期货涨0.05%，纳斯达克100指数期货跌0.12%。\n\n上周五，受非农意外疲软和能源价格回落影响，美股三大指数集体收涨，纳指盘中一度刷新历史纪录。截至收盘，道琼斯指数涨0",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7818135fe424",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 19,
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
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "巴西股指期货，大选首轮投票后大涨8.3%",
      "sourceUrl": "https://www.cls.cn/detail/2497960",
      "publishedAt": "2026-10-05T12:34:17.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "据新华社，当地时间4日晚，巴西总统选举首轮投票结果出炉。前总统博索纳罗之子、自由党候选人弗拉维奥·博索纳罗以约47%的得票率领跑首轮投票，现任总统、劳工党候选人卢拉以约45%的得票率位居第二，两人得票率均大幅领先其他候选人。\n巴西高等选举法院宣布，由于参选候选人中无人得票超过半数，得票最多的两人弗拉维奥·博索纳罗和卢拉将于10月25日进行第二轮角逐。\n巴西股指期货在大选首轮投票后大涨8.3%。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5935c79887bd",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "title": "华尔街AI招聘从“造模型”转向“部署落地”，新型工程师成最抢手人才",
      "sourceUrl": "https://wallstreetcn.com/articles/3783016",
      "publishedAt": "2026-10-05T12:24:12.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "人工智能正在华尔街掀起新一轮人才争夺战，而这场争夺的焦点已从模型构建者转向能够将AI直接嵌入业务的复合型工程师。\n10月4日，据企业招聘数据公司Draup独家提供给CNBC的分析显示，今年摩根大通、花旗集团、Capital One等银行发布的AI相关职位同比激增49%，达到139,819个。\n其中，“Agent编排工程师”（agent orchestration）相关职位引用量今年暴增1,721%",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_091da59e2da9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 20,
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
      "noiseCaps": [
        "招聘与例行人事"
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
      "title": "沙特阿美CEO警告：全球石油库存已“薄得可怕”，补库需两年，海湾出口回暖也压不住百元油价",
      "sourceUrl": "https://wallstreetcn.com/articles/3783022",
      "publishedAt": "2026-10-05T12:21:41.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "全球石油市场正面临战时最严峻的供应韧性危机。\n10月5日，据英国《金融时报》消息，沙特阿美首席执行官Amin Nasser公开警告，全球商业石油库存已降至\"令人恐惧的薄弱\"水平，即便中东冲突结束，补充库存至正常水平也需长达两年时间。与此同时，布伦特原油价格在9月底已升至每桶逾113美元，较2026年初累计涨幅达75%。\nNasser在伦敦能源情报论坛发表伊朗战争以来首次公开演讲，披露美国、以色列与",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9ed9e4e7cc2d",
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
      "title": "银行撤退、债券折价，AI建设潮的钱不好借了",
      "sourceUrl": "https://wallstreetcn.com/articles/3783018",
      "publishedAt": "2026-10-05T12:18:52.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "AI数据中心融资市场正在经历一场显著的信用收紧。债券投资者要求更高折价和更优厚条款，部分主要银行开始对项目贷款更加挑剔，叠加宏观利率压力与AI行业自身风险，这场建设热潮的融资成本正在快速攀升。\n据科技媒体The information报道，最新的标志性案例来自CleanSpark。这家正在为Meta Platforms开发数据中心的比特币矿企，本月早些时候以98.5美分的价格发行了23亿美元债券—",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d652bc9acc58",
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
          "score": 32,
          "reasons": [
            "命中关联主题 2 项"
          ]
        },
        "marketEducation": {
          "score": 89,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 1 项"
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "复刻“半导体时刻”：AI制药版的“瓶颈交易”正在成形，谁是下一个“卖铲人”？",
      "sourceUrl": "https://wallstreetcn.com/articles/3783019",
      "publishedAt": "2026-10-05T11:51:12.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "AI正在重塑药物发现的底层逻辑，一场类似半导体行业\"瓶颈交易\"的机会正在制药供应链中悄然成形。\n10月4日，顶级美元基金Altimeter Capital合伙人Freda Duan近日发文指出，AI制药赛道（AIDD）的\"瓶颈交易\"正在成形，其结构与此前半导体领域从GPU延伸至HBM、网络、电力的链式行情高度相似。\n\n前沿AI实验室的集体入场是最显著的信号。Anthropic组建了专属生命科学研究",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f5a9fd7eb32e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 54,
      "rawScore": 54,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 44,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 44,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
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
      "title": "现房销售新政叠加房贷贴息落地，国庆期间多地楼市表现亮眼",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012632104636296",
      "publishedAt": "2026-10-05T10:00:09.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "“828新政”叠加10月1日起居民购房贷款贴息正式生效，多地国庆楼市表现亮眼。据湖北省住建部门数据，在政策礼包密集落地，展销活动全省铺开背景下，湖北金秋购房季成色十足。10月1日至3日，武汉新建商品房销售额同比增长逾一成；十堰市销售面积、销售额同比增幅均达13%左右，荆州、孝感、随州等地成交同比稳步增长。广东楼市同样暖意浓浓。据官微“佛山住建”10月4日消息，国庆黄金周期间，佛山五区售楼部到访、咨",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8523619ea358",
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
      "eventId": "event_c94a63e01b8e"
    },
    {
      "title": "欧元兑美元跌至17个月低点",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012618614804358",
      "publishedAt": "2026-10-05T09:45:25.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "受高能源价格和法国债务问题担忧影响，欧元周一兑美元跌至去年5月以来最低水平。欧元兑美元在周一早盘交易中下跌0.6%至1.12美元，今年以来累计下跌4.8%，自上周初以来下跌超过1.6%。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5ce9de32f09f",
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
      "title": "2026年诺贝尔生理学或医学奖揭晓",
      "sourceUrl": "https://wallstreetcn.com/articles/3783017",
      "publishedAt": "2026-10-05T09:33:39.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "当地时间10月5日，瑞典卡罗琳医学院宣布，将2026年诺贝尔生理学或医学奖授予卡尔·戴塞洛斯（Karl Deisseroth）、彼得·黑格曼（Peter Hegemann）、格奥尔格·纳格尔（Georg Nagel）三位科学家，以表彰他们在光门控离子通道和光遗传学方面的发现。\n\n\n\n风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8224a9505621",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 17,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
      "eventId": null,
      "attentionScore": 17,
      "llmScores": [
        17,
        16
      ],
      "scoredBy": "llm"
    },
    {
      "title": "德国电信：预计到2030年，AI和自动化将节省25亿欧元间接成本",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012625330917504",
      "publishedAt": "2026-10-05T09:24:22.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "德国电信公司表示，相较于2023年，该公司预计到2027年，AI和自动化将在美国以外地区产生约11亿欧元的总成本节约；预计到2030年节省约25亿欧元的间接成本。同时，该公司计划将2027年额外节省资金的一部分投资于德国的数字基础设施和光纤网络。此外，德国电信还计划到2030年，将来自美国以外公司业务的AI相关收入提高到约8亿欧元。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_39dfbb6530c0",
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
      "title": "土耳其9月通胀率超预期下滑",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3594375",
      "publishedAt": "2026-10-05T09:16:37.000Z",
      "fetchedAt": "2026-10-05T17:15:35.876Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_0683c44c3301",
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
      "title": "美国CCC级利差升破1000bp！危险信号已现，信贷警报离股市还有多远？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782730",
      "publishedAt": "2026-10-05T09:09:31.000Z",
      "fetchedAt": "2026-10-05T20:35:50.534Z",
      "timeConfidence": "source",
      "summary": "当前美国信用市场已出现一个非常值得重视的变化：杠杆信贷市场最薄弱的环节已与整体走势脱节，利差大幅走阔，市场对尾部风险的定价明显提高，风险正从单纯的利率冲击向低质量企业信用端传导。\n9月底，美国CCC级公司债信用利差突破1000bp，达到2023年3月区域性银行危机以来新高，远高于9月初的860bp。这反映出投资者对最低评级投机级发行人违约与再融资风险的补偿要求显著提高。今年以来CCC级利差已走阔约",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5ba0a3f60dd8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 56,
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
          "score": 37,
          "reasons": [
            "命中关联主题 2 项",
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
      "attentionScore": 56,
      "llmScores": [
        51,
        61
      ],
      "scoredBy": "llm"
    },
    {
      "title": "日本8月份服务业扩张速度从五个月高位回落",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012581884055683",
      "publishedAt": "2026-10-05T09:07:05.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "周一公布的一项商业调查显示，由于商业活动和新订单增长放缓，加之地震造成的干扰抑制了需求，日本服务业在9月份的扩张步伐有所减弱。标普全球的调查显示，日本9月服务业采购经理人指数（PMI）终值从8月份的五个月高点52.5降至51.3，低于51.6的初值。PMI指数以50为荣枯分界线，高于50表明行业扩张，低于50则表明收缩。标普全球市场情报公司经济副总监Annabel Fiddes表示：“PMI调查数",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_fd4697c05549",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 68,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项"
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
      "title": "“重置之神”Tibo：我们又进入了“新AI时代”，市场还未理解这三大趋势",
      "sourceUrl": "https://wallstreetcn.com/articles/3783012",
      "publishedAt": "2026-10-05T08:57:53.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "在一口气发布20多项新产品后，OpenAI核心高管Tibo向市场抛出了一份关于“新AI时代”的未来指引：当模型能力在一年内再跃升10倍，整个互联网的流量入口、交互逻辑和商业分发都将被Agent（智能体）彻底重构。\n在刚刚结束的OpenAI DevDay（开发者大会）上，OpenAI一口气发布了20多项新产品。大会落幕后的数小时，领导ChatGPT、Codex以及最新个人智能体平台“Dots”的核心",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0fac8a126c77",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 56,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 5,
        "recency": 13,
        "actionability": 10
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
          "score": 19,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 41,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "全球大模型第一股，大涨",
      "sourceUrl": "https://www.cls.cn/detail/2497893",
      "publishedAt": "2026-10-05T08:45:43.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "今日，智谱港股股价持续上涨。截至收盘，报665港元/股，上涨6.15%，最新市值为3242亿港元。\n\n资料显示，智谱被视为“全球大模型第一股”。近期，智谱旗下GLM系列模型接连获得海外认可。AI编程工具Cursor近日宣布上线GLM-5.3及GLM-5.3-Flash，并表示GLM-5.3在Max推理设置下，取得其自有编程评测CursorBench 4.0中开放权重模型的最高分。官方榜单显示，该模",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_170dbe839ae0",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 34,
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
        "深度研究"
      ],
      "eventId": null,
      "attentionScore": 34,
      "llmScores": [
        46,
        22
      ],
      "scoredBy": "llm"
    },
    {
      "title": "港股收盘 | 三大指数集体收涨 算力硬件产业链领跑",
      "sourceUrl": "https://www.cls.cn/detail/2497884",
      "publishedAt": "2026-10-05T08:37:11.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（编辑 胡家荣）今日港股三大指数呈现分化震荡格局。截至收盘，恒生指数涨0.28%，报收24040.34点；恒生科技指数涨0.62%，报收4183.68点；国企指数涨0.26%，报收8051.67点。\n盘面上，市场结构性行情鲜明。受AI硬件算力需求持续外溢提振，PCB、光通信、人工智能及存储芯片等个股全线走强；而受油价上涨与政策预期消化影响，航空、家电以及房地产股出现阶段性回调。\n",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_799f47c6bd0f",
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
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "据报道，沙特东西向输油管道在再次遭袭后暂停运营。布伦特原油5分钟内上涨近1美元/桶，报102.31美元/桶",
      "sourceUrl": "https://wallstreetcn.com/articles/3783015",
      "publishedAt": "2026-10-05T08:37:01.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "据报道，沙特东西向输油管道在再次遭袭后暂停运营。布伦特原油5分钟内上涨近1美元/桶，报102.31美元/桶。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0693b8368fbd",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "法国9月服务业PMI重返扩张区间，但需求依然疲软",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3594315",
      "publishedAt": "2026-10-05T08:22:44.000Z",
      "fetchedAt": "2026-10-05T17:15:35.876Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_bbf4b7129a37",
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
      "title": "沙特阿美CEO：目前原油商业库存已降至不到60亿桶",
      "sourceUrl": "https://wallstreetcn.com/livenews/3174075",
      "publishedAt": "2026-10-05T08:19:23.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "沙特阿美CEO表示，全球在危机爆发时持有近100亿桶石油库存，目前已损失近30亿桶原油供应，相当于原本经霍尔木兹海峡运输的原油和油品总量约一半。库存已释放超过10亿桶缓解供应损失，其中大部分来自陆上商业库存，这是“最后的重大工具”。目前商业库存已降至不到60亿桶，且绝大部分实际无法动用。\n沙特阿美正研究额外原油出口路线及更多海外储存设施，以应对短期供应中断。卫星影像和航运日志等公开数据正越来越多地",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_480595a781df",
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
      "title": "欧元区PMI创41个月新高，但价格压力加剧欧洲央行维持紧缩政策预期",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3594310",
      "publishedAt": "2026-10-05T08:16:17.000Z",
      "fetchedAt": "2026-10-05T17:15:35.876Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_018f465155c5",
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
          "score": 46,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "title": "恒指收盘涨0.28%，恒生科技指数涨0.62%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012700841545858",
      "publishedAt": "2026-10-05T08:10:22.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，恒指收盘涨0.28%，恒生科技指数涨0.62%；硬件设备板块领涨，建滔积层板涨超11%，剑桥科技涨超7%，江波龙涨超4%；半导体板块走强，傅里叶涨超22%，澜起科技涨超5%，华虹宏力涨超4%；软件服务板块涨幅居前，商米科技涨超10%，智谱涨超6%，海清智元涨超5%；造纸与包装、钢铁、汽车与零配件板块领跌，首佳科技跌超9%，嘉耀控股跌近5%，零跑汽车跌超1%；南向资金净买入68.64亿港",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a9fcce83faa9",
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
      "eventId": "event_4dd732015bad"
    },
    {
      "title": "沙特对亚洲原油售价降至六年最低，11月售价较基准低5美元",
      "sourceUrl": "https://wallstreetcn.com/articles/3783007",
      "publishedAt": "2026-10-05T07:59:08.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "全球最大原油出口国正积极争夺亚洲市场份额，沙特阿美将对亚洲买家的阿拉伯轻质原油官方售价下调至六年低点，此举出乎市场预料。\n近期沙特阿美宣布，11月份对亚洲买家的阿拉伯轻质原油定价较区域基准价折让5美元/桶，较10月份2美元/桶的折扣幅度大幅扩大。这一价格调整远超市场预期，据彭博此前调查，市场原本预计沙特将上调亚洲售价约5美元/桶。\n与对亚洲的大幅降价形成对比，沙特阿美同步将对欧洲买家的11月售价上",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0b031305d24b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 52,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
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
      "eventId": null,
      "attentionScore": 52,
      "llmScores": [
        47,
        56
      ],
      "scoredBy": "llm"
    },
    {
      "title": "法国9月服务业PMI终值51.2，综合PMI终值51.1",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012683508813960",
      "publishedAt": "2026-10-05T07:52:44.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "法国9月服务业PMI终值51.2，预期51.4，初值51.4；9月综合PMI终值51.1，预期51.2，初值51.2。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c11e6f1642ff",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "意大利9月综合PMI为51",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012681301348487",
      "publishedAt": "2026-10-05T07:50:30.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "意大利9月综合PMI为51，预期为53.3，前值为53.6。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_00e341a20d38",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "涨价利好催化全球半导体情绪回潮 港股芯片股再度反弹走强",
      "sourceUrl": "https://www.cls.cn/detail/2497860",
      "publishedAt": "2026-10-05T07:46:19.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（编辑 冯轶）受海外半导体板块情绪回潮及产业链新一轮涨价带动，今日港股芯片股整体逆势走强，再度反弹。\n截至发稿，傅里叶(03625.HK)涨超20%，澜起科技(06809.HK)涨近5%，华虹宏力(01347.HK)等一批个股涨逾3%。\n\n短线来看，近期海外半导体板块多头情绪回潮。上周五，英伟达收涨1.34%刷新了5月14日创下的盘中纪录，再度向6万亿美元市值发起冲击。此外，美股",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_37ea638a41c1",
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
      "title": "天陇铁路“第一长隧”安化隧道顺利贯通",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012674798636934",
      "publishedAt": "2026-10-05T07:43:53.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "从中国铁建股份有限公司了解到，10月5日，天陇铁路“第一长隧”安化隧道顺利贯通。标志着甘肃省首条自主投资建设的区域性干线铁路取得重要进展，为天陇铁路按期建成通车奠定坚实基础。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a026baca78f4",
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
      "title": "重庆出手整治“摩托落地签”",
      "sourceUrl": "https://www.cls.cn/detail/2497868",
      "publishedAt": "2026-10-05T07:41:28.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "据央视新闻，今天（5日），针对总台稍早报道的重庆摩托车商拍“落地签”项目存在骑手脱把、占道、炸街、在直行车道上蛇形穿行等隐患，以及重庆江滩公园周边旅拍项目暴露出的游客临江拍摄安全隐患等问题，重庆市启动专项整治及规范工作。南岸区、两江新区将相关问题全面“落图纳管”，纳入集中整治。\n目前——\n南岸区针对“摩托落地签”问题，已明确固定停靠区域、经营时段、经营行为规范，并对经营团队进行了约谈。同时，每日夜",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_372750cb0dfd",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "需求疲软致南非经济9月份出现收缩",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3594265",
      "publishedAt": "2026-10-05T07:41:20.000Z",
      "fetchedAt": "2026-10-05T17:15:35.876Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_8b78ec2534b8",
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
      "title": "法国施耐德电气确认以226亿美元收购美国软件公司PTC",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012583622791045",
      "publishedAt": "2026-10-05T07:40:58.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "据报道，法国施耐德电气表示，已同意以收购美国软件公司PTC，该交易对PTC的股权估值约为226亿美元。报道称，该交易将通过股权融资和发行新债相结合的方式提供资金，预计将于2027年第三季度完成。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_47631f9a0be2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 19,
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
      "eventId": null,
      "attentionScore": 19,
      "llmScores": [
        24,
        14
      ],
      "scoredBy": "llm"
    },
    {
      "title": "鸿海9月销售额1.16万亿元台币，同比增长38.4％",
      "sourceUrl": "https://wallstreetcn.com/articles/3783011",
      "publishedAt": "2026-10-05T07:32:46.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "鸿海9月销售额1.16万亿元台币，同比增长38.4％。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6241618180d8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 61,
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
        "evidence": 5,
        "recency": 13,
        "actionability": 10
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "日本服务业板块9月增长放缓，PMI数据显示扩张势头减弱",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3594247",
      "publishedAt": "2026-10-05T07:32:37.000Z",
      "fetchedAt": "2026-10-05T17:15:35.876Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_be1aa12b9a0d",
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
      "title": "3年期年化2%利率再现江湖！本轮大额存单重启发行潮仍在扩散，中小银行利率续刷新高",
      "sourceUrl": "https://www.cls.cn/detail/2497856",
      "publishedAt": "2026-10-05T07:28:42.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（记者 彭科峰）自下半年中国银行等国有大行相继重启发行以来，“大额存单重启潮”非但没有结束，且利率还在不断攀高。\n财联社记者发现，10月1日以来，已有邯郸银行、锡商银行等多家地方银行上新长期限大额存单，且利率相比此前首轮重启发行的存单有明显提升，3年期最高年化达2%。\n在业内人士看来，国有大行重启长期限大额存单后，“带头效应”显著，一些地方银行不得不改变上半年下架长期限存款产品的",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e71163be7067",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 82,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 14,
        "recency": 13,
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
          "score": 49,
          "reasons": [
            "命中关联主题 2 项",
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
      "title": "香港立法会将合并辩论首个五年规划及新一份施政报告",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012622210519168",
      "publishedAt": "2026-10-05T07:25:10.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "香港特区立法会将于10月7日—9日上午9时在立法会综合大楼会议厅举行会议。在会议上，议员将就《香港特别行政区经济和社会发展第一个五年规划（2026—2030年）》（《香港第一个五年规划》）议案及《行政长官2026年施政报告》议案进行合并辩论。有关《香港第一个五年规划》的政府议案将由政务司司长提出；陈振英将提出“致谢议案”，议案的内容为：“本会感谢行政长官发表施政报告。”议员亦会就不同政策范畴向政府",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0b07dd23b370",
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
      "title": "国际油价承压下跌！利空又传来：中东原油出口量已超战前水平",
      "sourceUrl": "https://www.cls.cn/detail/2497865",
      "publishedAt": "2026-10-05T07:24:37.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（编辑 卞纯）周一公布的航运数据显示，尽管仍有船只在穿越霍尔木兹海峡时遭到袭击，但在9月最后一周7天中，有4天中东原油出口量超过了战前水平。\n船舶追踪机构Kpler的初步数据显示，中东地区原油出口量在9月24日以及9月27日至29日超过了战前水平，升至每日1950万桶至2250万桶之间。\n而在2025年3月至今年2月期间（美以伊冲突爆发前），中东地区原油出口量平均为每日1800万",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b76d3d5e882d",
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
      "title": "从价格战废墟里爬出来，中国清洁电器开始赚全球的钱",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782350",
      "publishedAt": "2026-10-05T06:55:51.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "过去三年，清洁电器经历了一次“成长股祛魅”。行业从高速增量转入中速增长后，SKU、投流和渠道补贴仍按高增长时期的节奏扩张，结果是收入增长却留不下利润。2026年以来，国内需求仍偏弱，海外渗透和品牌替代继续推进，头部份额却快速集中，部分龙头销售费用率率先下降，行业开始从“规模优先”切换到“增长质量优先”。与此同时，龙头品牌的国际化扩张已初现端倪，或有机会复制美的等企业的出海淘金之路。一、发生了什么？",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_09f8edc49b5e",
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
      "title": "盘点|硬科技补链提速：从“整机替代”到“模块攻坚” 9月共299家科创板公司获机构调研",
      "sourceUrl": "https://www.cls.cn/detail/2497854",
      "publishedAt": "2026-10-05T06:49:43.000Z",
      "fetchedAt": "2026-10-05T17:14:41.177Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月5日讯（记者 黄修眉） 财联社星矿数据统计显示，9月1日至30日，共299家科创板公司获机构调研，半导体、通用设备、光学光电子、电子化学品、自动化设备为最受关注的五大细分领域。\n具体到个股，奥比中光、沃尔德、安集科技、海目星、晶晨股份分别有246家、234家、195家、193家、133家机构对其进行调研，为最受机构关注的五家公司。\n\n▍设备与零部件国产化加速 从整机往“毛细血管",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ed0013861041",
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
      "noiseCaps": [
        "主题性汇总"
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
      "title": "今年以来我国投资结构优化持续推进",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012564665208709",
      "publishedAt": "2026-10-05T06:47:38.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "从国家统计局获悉，今年以来，我国新质生产力领域投资延续年初以来的良好增长态势，技术进步、产业升级等相关投资增速加快，重点领域投资较快增长，投资结构优化持续推进。数据显示，新兴产业快速成长，新质生产力领域投资活跃，高技术产业投资增速持续加快。1至8月份，高技术产业投资同比增长5.2%，增速比1至7月份加快0.2个百分点，拉动全部投资增长0.5个百分点。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_60706bfd6c91",
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
      "title": "华为与高通宣布达成广泛专利许可协议",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012615202787462",
      "publishedAt": "2026-10-05T06:43:15.000Z",
      "fetchedAt": "2026-10-05T17:14:42.206Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，华为与高通宣布达成一项为期多年、范围广泛的专利许可协议，内容包括双方在5G、计算、人工智能和网络等多个领域的专利组合交叉许可，以及高通将收购华为部分美国专利。该交易将在获得必要的监管批准后完成。该协议体现了两家公司对知识产权保护的共同承诺，以及对符合公平、合理和非歧视原则的许可实践的坚持。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_020f0d9aa27d",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 40,
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
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": "event_934053bb00e3",
      "attentionScore": 40,
      "llmScores": [
        26,
        53
      ],
      "scoredBy": "llm"
    },
    {
      "title": "碰撞前10米辅助驾驶“消失”，接管窗口再引争议",
      "sourceUrl": "https://www.yicai.com/news/103384473.html",
      "publishedAt": "2026-10-05T06:40:49.000Z",
      "fetchedAt": "2026-10-05T17:13:42.240Z",
      "timeConfidence": "source",
      "summary": "辅助驾驶第一责任人仍是驾驶员。十一黄金周期间，开启辅助驾驶出行的车主越来越多，但潜在的隐患也随之而来。近日，在沪昆高速安顺段，一名司机在高速上使用“导航辅助驾驶”（NOA）行车，但却在临近前方大货车约10米位置时，遭遇NOA突然退出交由驾驶人接管，而此时车速为120km/h。司机直呼：“与前车尾部仅约10米的距离，根本来不及制动。”最终，小车直接追尾撞上了大货车。由此，辅助驾驶系统的接管窗口再次引",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c6a016de6989",
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
      "title": "巴西大选首轮投票极右翼前总统之子领先 80岁卢拉连任遇险关",
      "sourceUrl": "https://international.caixin.com/2026-10-05/102490778.html",
      "publishedAt": "2026-10-05T06:29:12.000Z",
      "fetchedAt": "2026-10-05T17:13:01.302Z",
      "timeConfidence": "source",
      "summary": "两人将据巴西选举规则在10月25日的第二轮投票中一对一角逐该国总统职位\n       　　【财新网】当地时间10月4日，在拉美第一大经济体巴西的总统选举首轮投票中，现任温和左翼总统卢拉和极右翼前总统雅伊尔·博索纳罗之子的弗拉维奥·博索纳罗（下称弗拉维奥）的得票率均未过半。\n　　两人将据巴西选举规则在10月25日的第二轮投票中一对一角逐该国总统职位。\n　　作为自由党候选人的弗拉维奥在第一轮投票中以微",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_771422506a38",
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
      "title": "“高美债收益率+强美元”考验新兴市场",
      "sourceUrl": "https://wallstreetcn.com/articles/3782998",
      "publishedAt": "2026-10-05T06:04:31.000Z",
      "fetchedAt": "2026-10-05T17:13:17.122Z",
      "timeConfidence": "source",
      "summary": "摩根士丹利认为，在美债收益率大幅上行、美元走强的背景下，新兴市场固定收益与外汇资产虽承压，但有望实现有序调整而非剧烈抛售；不过点差已无便宜可言，投资者需等待估值超调后再加仓。\n美国国债收益率急剧攀升、美联储预计还将再加息两次、美元走强、油价持续高企——这一组合通常足以令新兴市场资产大幅跑输。然而今年的实际情况出人意料：回报虽有所走弱，但调整过程异常有序，新兴市场资产在多个维度依然跑赢。\n摩根士丹利",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2369d9f6936d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 6,
        "recency": 10,
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
        "专业财经媒体跟进"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 14,
          "reasons": [
            "与该场景关联度较弱"
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "阿克苏诺贝尔将东南亚业务13.5亿美元售予立邦涂料",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012468808192129",
      "publishedAt": "2026-10-05T05:37:07.000Z",
      "fetchedAt": "2026-10-05T05:49:28.251Z",
      "timeConfidence": "source",
      "summary": "阿克苏诺贝尔周一宣布，已同意以13.5亿美元将其东南亚装饰漆业务出售给立邦涂料，从而完成对其亚洲装饰漆业务组合的评估。这家荷兰涂料公司表示，此次出售涵盖了在越南、印尼、马来西亚、泰国、新加坡、巴布亚新几内亚和澳大利亚的装饰漆业务；公司预计，在扣除税款及向少数股东支付相关款项后，将获得约10亿美元的净现金收益。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e45b38541e3d",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 39,
      "rawScore": 39,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 5,
        "recency": 10,
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
        "快讯线索，需结合原文判断"
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
      "title": "澳大利亚股市上涨；截至收盘澳大利亚S&P/ASX200指数上涨0.05%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3594115",
      "publishedAt": "2026-10-05T05:30:14.000Z",
      "fetchedAt": "2026-10-05T05:49:34.810Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6d244e905300",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 39,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 5,
        "recency": 10,
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
      "title": "澳大利亚调查迪拜航空副驾驶与澳关联",
      "sourceUrl": "https://www.cls.cn/detail/2497841",
      "publishedAt": "2026-10-05T05:28:21.000Z",
      "fetchedAt": "2026-10-05T05:49:27.169Z",
      "timeConfidence": "source",
      "summary": "澳大利亚警方发言人4日说，该国一个由多机构人员组成的反恐小组正调查迪拜航空FZ1073航班副驾驶与澳大利亚的关联。这名副驾驶日前在该航班驾驶舱内袭击机长，有消息称他曾在澳大利亚留学。\n这名警方发言人表示，这个联合反恐小组成员来自澳联邦警方、维多利亚州警方和澳大利亚安全情报局。\n据悉，这名副驾驶是29岁阿曼籍男子哈马姆·哈马米。两名了解澳方调查情况的消息人士说，哈马米曾在维多利亚州首府墨尔本的一所大",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_29f1d8f2f3d9",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 34,
      "rawScore": 34,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 10,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 10,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 10,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 10,
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
      "title": "中国台湾股市、台积电盘中创下历史新高",
      "sourceUrl": "https://wallstreetcn.com/livenews/3174043",
      "publishedAt": "2026-10-05T05:28:02.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "中国台湾股市一度上涨2.7%，创下49,770.66点的历史新高。半导体巨头台积电一度大涨3.2%，创下历史新高。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f3a5557fe5ff",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 39,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 5,
        "recency": 10,
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
      "title": "智谱港股涨超5%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012540697301125",
      "publishedAt": "2026-10-05T05:27:28.000Z",
      "fetchedAt": "2026-10-05T05:49:28.251Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，智谱港股涨超5%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_9bd9c11b4dea",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 45,
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
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断"
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
      "attentionScore": 14,
      "llmScores": [
        15,
        12
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "泰国交易所计划引入双重股权结构，以吸引更多企业上市",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3594114",
      "publishedAt": "2026-10-05T05:19:00.000Z",
      "fetchedAt": "2026-10-05T05:49:34.810Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_0590dc476937",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 34,
      "rawScore": 34,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
          "score": 10,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 10,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 10,
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
      "title": "上半年熊猫债外资发行人募资占比首超中资",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012383246209157",
      "publishedAt": "2026-10-05T04:52:10.000Z",
      "fetchedAt": "2026-10-05T05:49:28.251Z",
      "timeConfidence": "source",
      "summary": "国家外汇管理局日前发布的《2026年上半年中国国际收支报告》显示，上半年，熊猫债外资发行人募资规模上升。外资发行人募资规模占熊猫债市场总募资规模的54%，首次超过中资背景发行人募资规模。近年来，熊猫债发行主体结构逐步变化，从早期国际机构试点、境外中资机构主导，逐渐演变为境外中资和外资主体共同参与。从募集资金在境内外使用看，外资发行人募集资金拟用于境外的规模为587亿元人民币，占外资募资规模的68%",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b568b2ba8ea5",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 65,
      "rawScore": 50,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
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
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断"
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
          "score": 51,
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
        "观点",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 65,
      "llmScores": [
        65,
        64
      ],
      "scoredBy": "llm"
    },
    {
      "title": "就业数据疲软提振期货，一只AI基础设施股单日涨幅达11.60%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3594107",
      "publishedAt": "2026-10-05T04:29:45.000Z",
      "fetchedAt": "2026-10-05T05:49:34.810Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_9afbc3ac06ca",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 16,
      "rawScore": 47,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
      "eventId": null,
      "attentionScore": 16,
      "llmScores": [
        12,
        19
      ],
      "scoredBy": "llm"
    },
    {
      "title": "9月份60张证监罚单创出新高，CIO被认定不适当人选更属罕见",
      "sourceUrl": "https://www.cls.cn/detail/2497838",
      "publishedAt": "2026-10-05T04:15:57.000Z",
      "fetchedAt": "2026-10-05T05:49:27.169Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（记者 林坚）监管对券商“长牙带刺”的态势延续。随着第三季度刚刚结束，今年以来，监管针对券商的罚单有了不少新变化。\n首先是罚单数量比同期多了不少。据记者结合Wind、易董等数据统计，今年证监系统（证监会及各地证监局、交易所）对券商及分支机构、从业人员合计开出超260张罚单，涉及超50家券商，较2025年前三季度明显放量，尤其是9月，单月约60张创年内新高。\n数量居前的券商有天风证",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d522752b5638",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 68,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 9,
        "recency": 10,
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "恒指午间休盘跌0.08%，恒生科技指数涨0.27%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012455820054656",
      "publishedAt": "2026-10-05T04:01:07.000Z",
      "fetchedAt": "2026-10-05T05:49:28.251Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，恒指午间休盘跌0.08%，恒生科技指数涨0.27%；硬件设备、半导体、可选消费零售板块领涨，傅里叶涨超13%，海光芯正涨超5%，阿里巴巴涨近1%；企业服务、建材、交通运输板块跌幅居前，中科集团控股跌超6%，秦港股份跌超3%，华新建材跌超1%；南向资金净买入68.64亿港元。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_691c9b8fc6f8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断"
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
      "title": "国庆前三日内地访客超73万 陈茂波称香港中长期动能稳固",
      "sourceUrl": "https://www.cls.cn/detail/2497830",
      "publishedAt": "2026-10-05T03:52:12.000Z",
      "fetchedAt": "2026-10-05T05:49:27.169Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（编辑 胡家荣）香港特区政府财政司司长陈茂波日前发表网志指出，尽管近期受美国长期债息攀升至24年高位等外部因素扰动，全球资本市场短期情绪有所波动，但香港经济中长期向上发展的动能与趋势依然坚挺。\n陈茂波表示，得益于“一国两制”、普通法制度、高度透明与国际化优势，香港正成为全球经贸伙伴与主权资本的优先配置地。今年前三季度港股交投持续活跃，IPO集资额同比翻倍并已超过去年全年水平；此外",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e2db44d660e6",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 54,
      "rawScore": 54,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 14,
        "recency": 10,
        "actionability": 10
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
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 18,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 84,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 45,
          "reasons": [
            "命中关联主题 3 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 27,
      "llmScores": [
        31,
        23
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
      "title": "Firmus拟将约半数IPO股份分配给现有股东，Nvidia或借机增持",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3594103",
      "publishedAt": "2026-10-05T03:51:36.000Z",
      "fetchedAt": "2026-10-05T05:49:34.810Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6017a479b3ca",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 34,
      "rawScore": 34,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
          "score": 10,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 10,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 10,
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
      "title": "我国推进7项天然气国际标准成功立项",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012386168852360",
      "publishedAt": "2026-10-05T03:49:04.000Z",
      "fetchedAt": "2026-10-05T05:49:28.251Z",
      "timeConfidence": "source",
      "summary": "从国家市场监督管理总局获悉，国际标准化组织日前批准由我国牵头的7项天然气国际标准全部立项。据了解，本批标准涵盖页岩气勘探开发、天然气碳足迹核算、天然气储层岩心取样、天然气水合物测试等产业链上游关键领域，将有利于构建全球统一的天然气技术规则，推动清洁低碳、安全高效的全球能源体系建设。其中，3项页岩气检测标准将为非常规油气开发提供统一技术依据，补齐页岩气储量评估与工程安全规范短板。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_69bf6fb8d854",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 34,
      "rawScore": 34,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 10,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 10,
          "reasons": [
            "与该场景关联度较弱"
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "一半的股票已进入熊市！美股走到“十字路口”，关键看美债波动率",
      "sourceUrl": "https://wallstreetcn.com/articles/3782997",
      "publishedAt": "2026-10-05T03:19:27.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "美股指数徘徊于历史高位附近，但市场内部已悄然分裂。\n摩根士丹利首席股票策略师Mike Wilson在最新报告中发出警告：当前美股市场的广度与指数价格之间存在约12%的背离缺口，这一分歧必须以某种方式弥合——要么指数回调向下与市场广度“会师”，要么债券波动率降温、个股补涨推动指数继续走高。两条路，方向截然相反，而最终裁决者只有一个：美债市场。\n目前，罗素3000成分股中已有51%从6月高点下跌超过2",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_12894a198cdd",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 11,
        "recency": 10,
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
        "专业财经媒体跟进"
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
            "命中二级市场投教核心主题 6 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 71,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 3 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 50,
      "llmScores": [
        58,
        41
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "陶冬：美债，温水煮青蛙式的风险｜国庆大咖谈",
      "sourceUrl": "https://www.yicai.com/news/103384450.html",
      "publishedAt": "2026-10-05T03:16:06.000Z",
      "fetchedAt": "2026-10-05T05:47:38.017Z",
      "timeConfidence": "source",
      "summary": "十月加息机会大幅下降，明年三月之前还有两次机会。美国债市跌跌不休，连弱过预期的就业和通胀数据也无法扭转债券投资者的悲观情绪。十年期国债收益率升至2002年以来罕见的高位，全世界国债市场、信用债市场一起震荡。美国最新核心PCE显示通胀回落，九月新增就业低于市场预期，多名联储高官也对十月加息泼冷水，期货市场把十月加息的概率定价到18%，但是市场对资金成本高涨警戒心并未改变。股市一直对加息反应温和，但是",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c0586ec589d8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 59,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 11,
        "recency": 10,
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
          "score": 61,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 35,
          "reasons": [
            "命中关联主题 2 项"
          ]
        }
      },
      "attentionScore": 47,
      "llmScores": [
        49,
        44
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "截至二季度末资产管理产品总规模突破88万亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012379296829312",
      "publishedAt": "2026-10-05T03:13:03.000Z",
      "fetchedAt": "2026-10-05T05:49:28.251Z",
      "timeConfidence": "source",
      "summary": "中国基金业协会最新发布的数据显示，截至2026年二季度末，基金管理公司及其子公司、证券公司及其子公司、期货公司及其资管子公司、私募基金管理机构资产管理产品总规模达88.37万亿元。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_3b82f54d9418",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 50,
      "rawScore": 76,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 14,
        "recency": 10,
        "actionability": 10
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
          "score": 41,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 98,
          "reasons": [
            "命中私募销售运营核心主题 3 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 50,
      "llmScores": [
        48,
        51
      ],
      "scoredBy": "llm",
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "最新披露：迪拜航空袭击者原计划杀死机长，驾机撞向摩天大楼",
      "sourceUrl": "https://wallstreetcn.com/articles/3783002",
      "publishedAt": "2026-10-05T03:03:14.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "新华社消息，据以色列媒体4日报道，以色列方面的初步调查显示，在迪拜航空公司客机驾驶舱中袭击机长的副驾驶系单独作案。\n以色列第12频道电视台援引消息人士的话说，以安全机构在事发后立即启动调查，目前调查仍在进行。调查人员认为，涉事副驾驶是“独狼式”作案。\n另据媒体报道，这名副驾驶为29岁的阿曼籍男子哈马姆·哈马米。他原计划杀死机长，并驾驶飞机撞向以色列特拉维夫的摩天大楼。\n迪拜航空机长与内塔尼亚胡通话",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0ae339c361ec",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 6,
        "recency": 10,
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
        "专业财经媒体跟进"
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
      "title": "AI估值的“困境”：根本不怕安全问题、而是怕……",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782994",
      "publishedAt": "2026-10-05T02:59:10.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "2026年，AI模型一直在更新，产品一直在迭代，收入一直在涨。但有一件事耐人寻味：头部公司手里最强的模型，总是因为安全原因不全面发布。Anthropic压着Mythos，OpenAI的Astra发布前暂停了两周训练，发布后又集中披露了六起模型异常行为。模型在往前走，但最前沿的那一步，永远被一道安全闸门挡着。\n市场对此的反应不是恐慌，而是安心。因为闸门本身就在传递一个信号：前面还有东西。那些被披露出",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_76bef4761615",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 48,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 0,
        "recency": 10,
        "actionability": 10
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 15,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 59,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 24,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 19,
      "llmScores": [
        14,
        24
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
      "title": "全球创新密集“首秀”，外资在华布局同步提速｜进博会倒计时30天",
      "sourceUrl": "https://www.yicai.com/news/103384444.html",
      "publishedAt": "2026-10-05T02:57:33.000Z",
      "fetchedAt": "2026-10-05T05:47:38.017Z",
      "timeConfidence": "source",
      "summary": "外资在华布局近年来持续向“微笑曲线”的两端延伸。“进博会是中国推进高水平开放、共享发展机遇的重要窗口，也是连接全球创新资源与中国市场需求、深化伙伴合作、共创价值的重要桥梁。”汉高大中华区总裁安娜如此定义这场迎来倒计时30天的盛会。\n\n这样的判断，是众多跨国企业的共识。\n\n11月5日，第九届中国国际进口博览会（下称“进博会”）将在上海国家会展中心如期举办。截至目前，已有来自99个国家和地区的1200",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4afebb00e51b",
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
      "title": "一汽丰田发布针对“大降价”等有关不实言论的声明",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012355874492551",
      "publishedAt": "2026-10-05T02:51:43.000Z",
      "fetchedAt": "2026-10-05T05:49:28.251Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，一汽丰田官方微博发布针对近期网络上出现的有关一汽丰田不实言论的声明： 近期，中国第一汽车集团有限公司与广州汽车工业集团有限公司签署战略合作框架协议，引发行业及消费者广泛关注。目前全系车型产销、迭代规划均按计划有序推进，后续将依托集团合作的更大资源优势，持续创新，回馈广大用户信任。 针对部分网络账号散布的“一汽丰田或将彻底退出历史舞台”“丰田大降价”等不实言论，我司保留法律追责权利。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_da85d7c59133",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 34,
      "rawScore": 34,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 10,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 10,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 10,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 10,
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
      "eventId": "event_82892481dbf7"
    },
    {
      "title": "一汽丰田发布声明：“一汽丰田或将彻底退出历史舞台”“丰田大降价”等均为不实言论",
      "sourceUrl": "https://www.cls.cn/detail/2497823",
      "publishedAt": "2026-10-05T02:39:26.000Z",
      "fetchedAt": "2026-10-05T05:49:27.169Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯，今日，一汽丰田官方微信公众号发布声明：\n近期，中国第一汽车集团有限公司与广州汽车工业集团有限公司签署战略合作框架协议，引发行业及消费者广泛关注。\n一汽丰田深耕国内市场23年，拥有成熟的产品矩阵、完备的产销售后体系和千万用户保有规模。目前全系车型产销、迭代规划均按计划有序推进，后续将依托集团合作的更大资源优势，持续创新，回馈广大用户信任。\n针对部分网络账号散布的“一汽丰田或将彻底",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2b339de4aafc",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 51,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注"
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_82892481dbf7"
    },
    {
      "title": "供需缺口或延续至2027年！PCB关键材料紧缺蔓延",
      "sourceUrl": "https://www.cls.cn/detail/2497814",
      "publishedAt": "2026-10-05T02:39:23.000Z",
      "fetchedAt": "2026-10-05T05:49:27.169Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（编辑 胡家荣）在AI基础设施建设提速的强力催化下，港股PCB产业链多只标的显著走强。\n截至发稿，建滔积层板(01888.HK)涨8.50%，建滔集团(00148.HK)涨7.92%，广合科技(01989.HK)涨7.03%。\n\n市场资金加速流入的核心原因，在于AI服务器与高速网络需求爆发引发的上游原材料严重短缺，推动行业进入新一轮量价齐升周期。\n有报道指出，自2025年下半年以",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_28c9ff6786c8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 32,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 14,
        "recency": 10,
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
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 18,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 62,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 27,
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
      "eventId": null,
      "attentionScore": 32,
      "llmScores": [
        38,
        26
      ],
      "scoredBy": "llm"
    },
    {
      "title": "亚洲股市因美国就业数据疲软提振、日本股市大涨",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3594090",
      "publishedAt": "2026-10-05T02:36:29.000Z",
      "fetchedAt": "2026-10-05T05:49:34.811Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_b54b790f48ad",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 6,
        "recency": 10,
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
        "专业财经媒体跟进"
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
      "title": "美以伊最新局势：伊朗军方称将提升导弹射程；美布什号航母抵达普吉岛休整，财长称“黄金时代”没到怪伊朗",
      "sourceUrl": "https://wallstreetcn.com/articles/3783001",
      "publishedAt": "2026-10-05T02:19:51.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "美财长：“黄金时代”未到是因伊朗战事\n在美国“阿克西奥斯新闻网（Axios）”10月3日发布的对美国财长贝森特的专访中，针对美国民众对生活成本不断飙升的强烈不满，Axios联合创始人迈克·艾伦质问道，政府曾许诺的美国“黄金时代”去哪了？贝森特回应称“‘黄金时代’暂时被伊朗战事所掩盖了”。\n贝森特还将民众困境归咎于前任拜登政府遗留的高通胀，并认为长期物价上涨属正常，他称美国终将挺过伊朗战事的难关。\n",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d104bc3eb06d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 43,
      "rawScore": 43,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 10,
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
        "专业财经媒体跟进"
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
      "title": "9月中国大宗商品价格指数环比上涨4.1%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012339503714180",
      "publishedAt": "2026-10-05T02:02:48.000Z",
      "fetchedAt": "2026-10-05T05:49:28.251Z",
      "timeConfidence": "source",
      "summary": "中国物流与采购联合会今天（5日）公布9月份中国大宗商品价格指数。从指数运行情况看，随着传统生产建设旺季到来，重大项目加快落地，以及制造业生产和市场需求持续改善，大宗商品市场景气水平进一步提升，为四季度经济平稳运行奠定良好基础。专家表示，9月份大宗商品价格指数明显上涨，既有传统生产旺季到来、国内外市场需求改善形成的支撑，也有国际市场价格扰动、部分商品供应偏紧带来的成本推动。巩固大宗商品市场平稳向好运",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_3bd101f99202",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "光通信的深层博弈：3.2T有望成为分水岭！",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782933",
      "publishedAt": "2026-10-05T01:41:16.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "摩根士丹利10月1日发布的一份华盛顿政策调研纪要，把市场此前最担心光通信的一件事讲得比预期温和：美国若要限制外国制造的光模块，工具更可能是 FCC 的受管制清单（Covered List），代际更可能从 3.2T 起步，最早 10 月有动作，同时给「物料清单（BOM）中 65% 价值来自美国公司」的产品留出进口空间。\n我们认为值得市场校准预期的领域较多：首先，是光模块的博弈，并非华盛顿或者美国产业",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5129c4ebc676",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 51,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 14,
        "recency": 10,
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
      "confidence": "medium",
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
          "score": 45,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 32,
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
      "attentionScore": 51,
      "llmScores": [
        58,
        43
      ],
      "scoredBy": "llm"
    },
    {
      "title": "日经225指数盘中重返70000点上方，日内涨超2.5%",
      "sourceUrl": "https://wallstreetcn.com/articles/3782996",
      "publishedAt": "2026-10-05T01:37:22.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "日经225指数盘中重返70000点上方，日内涨超2.5%。\nMSCI亚太指数上涨1%至279.06点。菲律宾股指高开0.8%。中国台湾证交所加权股价指数上涨2%至49,465.19点。\n富时中国A50指数期货盘初涨0.22%，上一个交易日夜盘收涨0.14%。恒指低开0.04%，报23963.41点；恒生科技指数跌0.47%。网易、美团、小米集团、京东跌超1%。\n更多消息，持续更新中风险提示及免责条",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2f99cd6a1915",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 21,
        "evidence": 11,
        "recency": 10,
        "actionability": 10
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "大西洋观察｜法律与秩序：新时代的选战话术",
      "sourceUrl": "https://international.caixin.com/2026-10-05/102490768.html",
      "publishedAt": "2026-10-05T00:50:52.000Z",
      "fetchedAt": "2026-10-05T05:47:05.005Z",
      "timeConfidence": "source",
      "summary": "今天的“法律与秩序”，犹如30年前的“傻瓜，问题是经济”，将成为左右共持的选举策略\n       　　【财新网】不管是10月4日在南美最大经济体巴西举行的全国大选，还是即将在10月27日即将在以色列举行的议会选举，抑或是在南非长期执政的非国大而言，一个能统一左右政治光谱的话题，就是在应对国家安全和公共安全问题上的日趋一致。\n　　在巴西大选中，强硬治安政策被认为是右翼弗拉维奥·博索纳罗对抗左翼阵营、",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e763dc7bc52b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 57,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 9,
        "recency": 10,
        "actionability": 10
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
          "score": 42,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
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
      "score": 37,
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
      "score": 16,
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
      "passesTierGate": false,
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
      "score": 51,
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
      "insurance": 65,
      "privateFundSales": 5,
      "marketEducation": 80
    },
    "featured": 24,
    "gate": {
      "passed": 13,
      "total": 150,
      "byTier": {
        "S3": {
          "total": 65,
          "passed": 3
        },
        "S2": {
          "total": 84,
          "passed": 10
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
    "products": [],
    "industry": [
      "news_d797734ec453",
      "news_867bc075917e",
      "news_ac13f7363e37",
      "news_f5bc394b10ae",
      "news_6e33bbea2385",
      "news_5ac9a222900b",
      "news_f00697d8a5da",
      "news_dc1288689075",
      "news_c83bb99e52f3",
      "news_a21a655970c6"
    ],
    "research": [
      "news_c7b11a8ed54f",
      "news_8d9b7e99f147",
      "news_ab0dae74f46b",
      "news_222f6d738031",
      "news_1474788dda27",
      "news_be2d8ce1744e",
      "news_f8410f653bea",
      "news_1109f307029a",
      "news_d2f26c4757f7",
      "news_7818135fe424"
    ],
    "insights": [
      "news_ce5447007e5f",
      "news_228ee79b52ee",
      "news_d61d1f44074c",
      "news_8fa0c67d5636",
      "news_00e7e2f530e8",
      "news_7054b55b2c1b",
      "news_7e6b32c74436",
      "news_d3f4db166f25",
      "news_ec7e8c0b5d10",
      "news_41e0c0ae6b38"
    ]
  },
  "flashes": [
    {
      "id": "news_ce5447007e5f",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_d797734ec453",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_867bc075917e",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_ac13f7363e37",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_f5bc394b10ae",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_6e33bbea2385",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_5ac9a222900b",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_f00697d8a5da",
      "dotClass": "flash-dot-blue"
    }
  ],
  "keywordIndex": {
    "保险": [
      "news_21bfd6078a4b",
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
    "财险": [
      "news_90694c744974"
    ],
    "医疗险": [
      "news_90694c744974",
      "news_9f3b623176ea"
    ],
    "银行": [
      "news_5ac9a222900b",
      "news_a21a655970c6",
      "news_d3f4db166f25",
      "news_c12199ca18d7",
      "news_21bfd6078a4b",
      "news_85802a74d14d",
      "news_091da59e2da9",
      "news_d652bc9acc58",
      "news_5ba0a3f60dd8",
      "news_e71163be7067"
    ],
    "央行": [
      "news_a21a655970c6",
      "news_d3f4db166f25",
      "news_7818135fe424",
      "news_018f465155c5"
    ],
    "利率": [
      "news_a21a655970c6",
      "news_c7b11a8ed54f",
      "news_21bfd6078a4b",
      "news_7818135fe424",
      "news_d652bc9acc58",
      "news_5ba0a3f60dd8",
      "news_e71163be7067",
      "news_b8359ae20a15"
    ],
    "加息": [
      "news_5ac9a222900b",
      "news_026fb51d2488",
      "news_b3b45501c66d",
      "news_2369d9f6936d",
      "news_c0586ec589d8"
    ],
    "拨备": [
      "news_222f6d738031"
    ],
    "房贷": [
      "news_f8410f653bea",
      "news_8523619ea358"
    ],
    "存款": [
      "news_d3f4db166f25",
      "news_e71163be7067"
    ],
    "大额存单": [
      "news_e71163be7067"
    ],
    "股票": [
      "news_d797734ec453",
      "news_c83bb99e52f3",
      "news_21bfd6078a4b",
      "news_12894a198cdd"
    ],
    "A股": [
      "news_21bfd6078a4b",
      "news_42a6f1de05a5",
      "news_81af44f3817f"
    ],
    "港股": [
      "news_867bc075917e",
      "news_ac13f7363e37",
      "news_7054b55b2c1b",
      "news_d3774d842c2c",
      "news_81af44f3817f",
      "news_222f6d738031",
      "news_1474788dda27",
      "news_170dbe839ae0",
      "news_799f47c6bd0f",
      "news_37ea638a41c1",
      "news_9bd9c11b4dea",
      "news_691c9b8fc6f8",
      "news_e2db44d660e6",
      "news_28c9ff6786c8"
    ],
    "美股": [
      "news_839916b1572e",
      "news_b3b45501c66d",
      "news_6edfe4751ab8",
      "news_81af44f3817f",
      "news_7818135fe424",
      "news_37ea638a41c1",
      "news_12894a198cdd"
    ],
    "大盘": [
      "news_ce5447007e5f"
    ],
    "指数": [
      "news_6e33bbea2385",
      "news_5ac9a222900b",
      "news_7054b55b2c1b",
      "news_8dfaa3e7c03b",
      "news_d3774d842c2c",
      "news_b3b45501c66d",
      "news_98f336c10212",
      "news_62d655ca7463",
      "news_33978d24de40",
      "news_12fa17a9b134",
      "news_6a863bd782d5",
      "news_0798fd39abe0",
      "news_1474788dda27",
      "news_7818135fe424",
      "news_fd4697c05549",
      "news_799f47c6bd0f",
      "news_a9fcce83faa9",
      "news_6d244e905300",
      "news_691c9b8fc6f8",
      "news_12894a198cdd",
      "news_3bd101f99202",
      "news_2f99cd6a1915"
    ],
    "私募基金": [
      "news_3b82f54d9418"
    ],
    "债券": [
      "news_cd6937f446da",
      "news_85802a74d14d",
      "news_81af44f3817f",
      "news_d652bc9acc58",
      "news_12894a198cdd",
      "news_c0586ec589d8",
      "news_b8359ae20a15"
    ],
    "国债": [
      "news_a21a655970c6",
      "news_026fb51d2488",
      "news_cd6937f446da",
      "news_37014145d8d6",
      "news_8d9b7e99f147",
      "news_8acd20ebb81c",
      "news_5ce9de32f09f",
      "news_2369d9f6936d",
      "news_c0586ec589d8"
    ],
    "信用债": [
      "news_c0586ec589d8"
    ],
    "公司债": [
      "news_be2d8ce1744e",
      "news_5ba0a3f60dd8"
    ],
    "期货": [
      "news_37014145d8d6",
      "news_7818135fe424",
      "news_5935c79887bd",
      "news_9afbc3ac06ca",
      "news_c0586ec589d8",
      "news_3b82f54d9418",
      "news_2f99cd6a1915"
    ],
    "IPO": [
      "news_00e7e2f530e8",
      "news_85802a74d14d",
      "news_9fe2d8dfe510",
      "news_e2db44d660e6",
      "news_6017a479b3ca"
    ],
    "上市": [
      "news_7e6b32c74436",
      "news_33978d24de40",
      "news_0590dc476937"
    ],
    "增持": [
      "news_6017a479b3ca"
    ],
    "券商": [
      "news_be2d8ce1744e",
      "news_d522752b5638"
    ],
    "经纪": [
      "news_5c5f98083245",
      "news_9f3b623176ea"
    ],
    "投资者": [
      "news_fc43d1c7e6c2",
      "news_7818135fe424",
      "news_d652bc9acc58",
      "news_5ba0a3f60dd8",
      "news_2369d9f6936d",
      "news_c0586ec589d8"
    ],
    "机构": [
      "news_ac13f7363e37",
      "news_d3f4db166f25",
      "news_37014145d8d6",
      "news_42a6f1de05a5",
      "news_b76d3d5e882d",
      "news_ed0013861041",
      "news_29f1d8f2f3d9",
      "news_b568b2ba8ea5",
      "news_d522752b5638",
      "news_3b82f54d9418",
      "news_0ae339c361ec"
    ],
    "南向资金": [
      "news_a9fcce83faa9",
      "news_691c9b8fc6f8"
    ],
    "监管": [
      "news_228ee79b52ee",
      "news_c83bb99e52f3",
      "news_020f0d9aa27d",
      "news_d522752b5638"
    ],
    "证监会": [
      "news_d522752b5638",
      "news_986ca26f7b13"
    ],
    "基金业协会": [
      "news_3b82f54d9418"
    ],
    "合规": [
      "news_d61d1f44074c"
    ],
    "罚单": [
      "news_d522752b5638"
    ],
    "约谈": [
      "news_372750cb0dfd"
    ],
    "条款": [
      "news_02cab4aa599f",
      "news_8dfaa3e7c03b",
      "news_45692583a3f3",
      "news_d652bc9acc58",
      "news_8224a9505621",
      "news_0693b8368fbd",
      "news_6241618180d8",
      "news_90694c744974",
      "news_5c5f98083245"
    ],
    "通知": [
      "news_b26a0499d957"
    ],
    "指引": [
      "news_0fac8a126c77"
    ],
    "意见": [
      "news_8dfaa3e7c03b",
      "news_0693b8368fbd",
      "news_6241618180d8"
    ],
    "规定": [
      "news_986ca26f7b13"
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
      "news_228ee79b52ee",
      "news_40275b2df711",
      "news_fc43d1c7e6c2",
      "news_fd4697c05549",
      "news_8b78ec2534b8",
      "news_0b07dd23b370",
      "news_771422506a38",
      "news_e2db44d660e6",
      "news_3bd101f99202",
      "news_e763dc7bc52b",
      "news_b88af30fc3f3"
    ],
    "PMI": [
      "news_98f336c10212",
      "news_62d655ca7463",
      "news_0798fd39abe0",
      "news_fd4697c05549",
      "news_bbf4b7129a37",
      "news_018f465155c5",
      "news_c11e6f1642ff",
      "news_00e341a20d38",
      "news_be1aa12b9a0d"
    ],
    "信贷": [
      "news_c12199ca18d7",
      "news_5ba0a3f60dd8"
    ],
    "汇率": [
      "news_8d9b7e99f147"
    ],
    "人民币": [
      "news_b568b2ba8ea5"
    ],
    "外汇": [
      "news_d3f4db166f25",
      "news_2369d9f6936d",
      "news_b568b2ba8ea5"
    ],
    "美元": [
      "news_228ee79b52ee",
      "news_c83bb99e52f3",
      "news_8fa0c67d5636",
      "news_00e7e2f530e8",
      "news_7e6b32c74436",
      "news_d3f4db166f25",
      "news_ec7e8c0b5d10",
      "news_c12199ca18d7",
      "news_41e0c0ae6b38",
      "news_b325f61521b6",
      "news_a311c20ba4e5",
      "news_02cab4aa599f",
      "news_cd6937f446da",
      "news_02505c35186c",
      "news_839916b1572e",
      "news_85802a74d14d",
      "news_a3fbc72e2b31",
      "news_45692583a3f3",
      "news_e7eadeb9b8ea",
      "news_7b36737715ed",
      "news_3395149b9bf4",
      "news_33978d24de40",
      "news_8d9b7e99f147",
      "news_ab0dae74f46b",
      "news_270b20fc7b2f",
      "news_222f6d738031",
      "news_fc43d1c7e6c2",
      "news_9ed9e4e7cc2d",
      "news_d652bc9acc58",
      "news_f5a9fd7eb32e",
      "news_5ce9de32f09f",
      "news_0693b8368fbd",
      "news_0b031305d24b",
      "news_37ea638a41c1",
      "news_47631f9a0be2",
      "news_2369d9f6936d",
      "news_e45b38541e3d"
    ],
    "欧元": [
      "news_cd6937f446da",
      "news_8d9b7e99f147",
      "news_e689c676b03b",
      "news_fc43d1c7e6c2",
      "news_5ce9de32f09f",
      "news_39dfbb6530c0",
      "news_018f465155c5"
    ],
    "日元": [
      "news_8d9b7e99f147"
    ],
    "通胀": [
      "news_026fb51d2488",
      "news_0798fd39abe0",
      "news_0683c44c3301",
      "news_c0586ec589d8",
      "news_d104bc3eb06d"
    ],
    "房地产": [
      "news_799f47c6bd0f"
    ],
    "地产": [
      "news_f5bc394b10ae",
      "news_799f47c6bd0f"
    ],
    "楼市": [
      "news_f8410f653bea",
      "news_8523619ea358"
    ],
    "住房": [
      "news_d03360c84d43",
      "news_fc43d1c7e6c2"
    ],
    "消费": [
      "news_ce5447007e5f",
      "news_dc1288689075",
      "news_a33014563e0f",
      "news_c7b11a8ed54f",
      "news_604efe266591",
      "news_81af44f3817f",
      "news_691c9b8fc6f8",
      "news_da85d7c59133",
      "news_2b339de4aafc"
    ],
    "投资": [
      "news_8fa0c67d5636",
      "news_d3f4db166f25",
      "news_a33014563e0f",
      "news_02cab4aa599f",
      "news_8dfaa3e7c03b",
      "news_42a6f1de05a5",
      "news_85802a74d14d",
      "news_45692583a3f3",
      "news_fc43d1c7e6c2",
      "news_7818135fe424",
      "news_d652bc9acc58",
      "news_8224a9505621",
      "news_39dfbb6530c0",
      "news_5ba0a3f60dd8",
      "news_0693b8368fbd",
      "news_a026baca78f4",
      "news_6241618180d8",
      "news_60706bfd6c91",
      "news_2369d9f6936d",
      "news_c0586ec589d8"
    ],
    "出口": [
      "news_ab0dae74f46b",
      "news_9ed9e4e7cc2d",
      "news_480595a781df",
      "news_0b031305d24b",
      "news_b76d3d5e882d"
    ],
    "进口": [
      "news_68da7c1512a2",
      "news_4afebb00e51b",
      "news_5129c4ebc676"
    ],
    "贸易": [
      "news_bf22577db20c"
    ],
    "产业链": [
      "news_1474788dda27",
      "news_799f47c6bd0f",
      "news_37ea638a41c1",
      "news_69bf6fb8d854",
      "news_28c9ff6786c8"
    ],
    "供应链": [
      "news_ac13f7363e37",
      "news_f5a9fd7eb32e"
    ],
    "就业": [
      "news_9afbc3ac06ca",
      "news_c0586ec589d8",
      "news_b54b790f48ad"
    ],
    "收入": [
      "news_9b58ae7f0546",
      "news_f14d43a4c734",
      "news_9fe2d8dfe510",
      "news_39dfbb6530c0",
      "news_09f8edc49b5e",
      "news_76bef4761615"
    ],
    "黄金": [
      "news_41e0c0ae6b38",
      "news_81af44f3817f",
      "news_8523619ea358",
      "news_c6a016de6989",
      "news_d104bc3eb06d"
    ],
    "金价": [
      "news_b88af30fc3f3"
    ],
    "原油": [
      "news_ab0dae74f46b",
      "news_9ed9e4e7cc2d",
      "news_0693b8368fbd",
      "news_480595a781df",
      "news_0b031305d24b",
      "news_b76d3d5e882d"
    ],
    "大宗商品": [
      "news_3bd101f99202"
    ],
    "工业": [
      "news_b3b45501c66d",
      "news_a3fbc72e2b31",
      "news_da85d7c59133",
      "news_2b339de4aafc"
    ],
    "利润": [
      "news_cbe0e5737b46",
      "news_222f6d738031",
      "news_09f8edc49b5e"
    ],
    "股市": [
      "news_6e33bbea2385",
      "news_42a6f1de05a5",
      "news_1241a6ceadc5",
      "news_12fa17a9b134",
      "news_6a863bd782d5",
      "news_1a4186f612b3",
      "news_81af44f3817f",
      "news_5ba0a3f60dd8",
      "news_6d244e905300",
      "news_f3a5557fe5ff",
      "news_12894a198cdd",
      "news_c0586ec589d8",
      "news_b54b790f48ad"
    ],
    "美联储": [
      "news_026fb51d2488",
      "news_7818135fe424",
      "news_2369d9f6936d"
    ],
    "财报": [
      "news_f00697d8a5da",
      "news_6edfe4751ab8"
    ],
    "私人银行": [
      "news_5ac9a222900b"
    ],
    "资管": [
      "news_3b82f54d9418"
    ],
    "权益": [
      "news_81af44f3817f",
      "news_1109f307029a",
      "news_d2f26c4757f7",
      "news_b88af30fc3f3"
    ],
    "年化": [
      "news_e71163be7067"
    ],
    "募集": [
      "news_b568b2ba8ea5"
    ]
  },
  "sourceHealth": {
    "generatedAt": "2026-10-06T06:53:31.570Z",
    "status": "healthy",
    "totalSources": 12,
    "successfulSources": 9,
    "usableSources": 8,
    "failedSources": 3,
    "staleSources": 1,
    "fetchLimitReachedSources": 1,
    "coverageRate": 0.6667,
    "freshestPublishedAt": "2026-10-06T06:19:55.000Z",
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
        "durationMs": 3126,
        "latestPublishedAt": "2026-10-06T05:29:03.000Z",
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
        "itemCount": 27,
        "rawItemCount": 27,
        "acceptedItemCount": 27,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 18,
        "durationMs": 941,
        "latestPublishedAt": "2026-10-06T05:44:23.000Z",
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
        "itemCount": 50,
        "rawItemCount": 50,
        "acceptedItemCount": 50,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": true,
        "addedCount": 25,
        "durationMs": 7517,
        "latestPublishedAt": "2026-10-06T04:27:34.000Z",
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
        "durationMs": 7419,
        "latestPublishedAt": "2026-10-06T06:19:55.000Z",
        "usedEndpoint": "rsshub-balancer.virworks.moe"
      },
      {
        "sourceId": "source_7b954bfc72",
        "sourceName": "财联社",
        "tier": "S2",
        "category": "research",
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
        "durationMs": 28243,
        "latestPublishedAt": null,
        "usedEndpoint": null
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
        "addedCount": 17,
        "durationMs": 5242,
        "latestPublishedAt": "2026-10-06T06:10:09.000Z",
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
        "durationMs": 17149,
        "latestPublishedAt": null,
        "usedEndpoint": null
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
        "durationMs": 3989,
        "latestPublishedAt": "2026-09-27T23:15:26.000Z",
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
        "addedCount": 7,
        "durationMs": 100,
        "latestPublishedAt": "2026-10-06T06:05:07.000Z",
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
        "addedCount": 1,
        "durationMs": 52,
        "latestPublishedAt": "2026-10-06T02:04:27.000Z",
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
    "eventCount": 34,
    "retentionDays": 90
  },
  "macro": {
    "updatedAt": "2026-10-06T06:53:31.570Z",
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
        "value": "5.31%",
        "note": "较10月2日 5.28% 上升",
        "direction": "up",
        "asOf": "2026-10-05",
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
        "note": "较10月2日 6.7046 持平",
        "direction": "flat",
        "asOf": "2026-10-05",
        "source": "Frankfurter/ECB",
        "mode": "auto"
      },
      {
        "key": "gold",
        "name": "现货黄金",
        "value": "$4,133",
        "note": "较10月5日 $4,140 下降",
        "direction": "down",
        "asOf": "2026-10-06",
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
        "title": "晓数点｜一图速览9月A股月报",
        "mainItemId": "news_21bfd6078a4b",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_21bfd6078a4b"
        ],
        "historicalEvidenceCount": 10,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-06T06:53:31.570Z",
        "status": "developing",
        "summary": "9月A股月报发布，一图速览市场概况与关键数据。",
        "latestProgress": "40万亿险资遇低利率，A股定价规则开始改变。"
      },
      {
        "eventId": "event_f101880ef7bc",
        "title": "一半的股票已进入熊市！美股走到“十字路口”，关键看美债波动率",
        "mainItemId": "news_12894a198cdd",
        "relatedItemIds": [
          "news_7818135fe424",
          "news_6edfe4751ab8"
        ],
        "evidenceItemIds": [
          "news_7818135fe424",
          "news_6edfe4751ab8",
          "news_12894a198cdd"
        ],
        "historicalEvidenceCount": 20,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-06T06:53:31.570Z",
        "status": "developing",
        "summary": "美股半数股票进入熊市，后市关键看美债波动率。",
        "latestProgress": "10月5日美股走高，财报季周四揭幕，贵金属原油同步上涨。"
      },
      {
        "eventId": "event_c68d651d4ff9",
        "title": "智通港股投资日志|10月5日",
        "mainItemId": "news_9bd9c11b4dea",
        "relatedItemIds": [
          "news_222f6d738031",
          "news_1474788dda27",
          "news_799f47c6bd0f",
          "news_37ea638a41c1"
        ],
        "evidenceItemIds": [
          "news_9bd9c11b4dea",
          "news_222f6d738031",
          "news_1474788dda27",
          "news_799f47c6bd0f",
          "news_37ea638a41c1"
        ],
        "historicalEvidenceCount": 19,
        "firstSeenAt": "2026-09-30T15:04:45.414Z",
        "lastSeenAt": "2026-10-06T06:53:31.570Z",
        "status": "developing",
        "summary": "国信证券：9月以来外资流出港股互联网规模靠前。",
        "latestProgress": "智谱港股涨超5%。"
      },
      {
        "eventId": "event_99b6c1e3a191",
        "title": "华尔街见闻早餐FM-Radio | 2026年10月5日",
        "mainItemId": "news_98f336c10212",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_98f336c10212"
        ],
        "historicalEvidenceCount": 3,
        "firstSeenAt": "2026-10-03T09:57:49.973Z",
        "lastSeenAt": "2026-10-06T06:53:31.570Z",
        "status": "developing",
        "summary": "华尔街见闻早餐FM-Radio持续每日更新财经资讯。",
        "latestProgress": "10月6日版早餐FM-Radio已发布。"
      },
      {
        "eventId": "event_934053bb00e3",
        "title": "AI进化速递丨华为与高通宣布达成广泛专利许可协议",
        "mainItemId": "news_e689c676b03b",
        "relatedItemIds": [
          "news_020f0d9aa27d"
        ],
        "evidenceItemIds": [
          "news_e689c676b03b",
          "news_020f0d9aa27d"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-05T17:16:10.682Z",
        "lastSeenAt": "2026-10-06T06:53:31.570Z",
        "status": "developing",
        "summary": "华为与高通宣布达成广泛专利许可协议。",
        "latestProgress": "华为与高通宣布达成广泛专利许可协议。"
      },
      {
        "eventId": "event_c94a63e01b8e",
        "title": "现房销售新政叠加房贷贴息落地，国庆期间多地楼市表现亮眼",
        "mainItemId": "news_8523619ea358",
        "relatedItemIds": [
          "news_f8410f653bea"
        ],
        "evidenceItemIds": [
          "news_f8410f653bea",
          "news_8523619ea358"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-05T17:16:10.682Z",
        "lastSeenAt": "2026-10-06T06:53:31.570Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_82892481dbf7",
        "title": "一汽丰田发布声明：“一汽丰田或将彻底退出历史舞台”“丰田大降价”等均为不实言论",
        "mainItemId": "news_2b339de4aafc",
        "relatedItemIds": [
          "news_da85d7c59133"
        ],
        "evidenceItemIds": [
          "news_2b339de4aafc",
          "news_da85d7c59133"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-05T06:18:08.041Z",
        "lastSeenAt": "2026-10-06T06:53:31.570Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_16e58ed62828",
        "title": "谷歌与Constellation酝酿十亿美元核电协议，科技巨头抢购清洁电力大幕正式开启",
        "mainItemId": "news_a311c20ba4e5",
        "relatedItemIds": [
          "news_ec7e8c0b5d10"
        ],
        "evidenceItemIds": [
          "news_a311c20ba4e5",
          "news_ec7e8c0b5d10"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-06T06:53:31.570Z",
        "lastSeenAt": "2026-10-06T06:53:31.570Z",
        "status": "developing",
        "summary": "谷歌与Constellation酝酿十亿美元核电协议，科技巨头抢购清洁电力。",
        "latestProgress": "双方接近达成十亿美元核电采购协议。"
      },
      {
        "eventId": "event_4dd732015bad",
        "title": "香港恒生指数开盘涨1％，恒生科技指数涨1.02％",
        "mainItemId": "news_8dfaa3e7c03b",
        "relatedItemIds": [
          "news_d3774d842c2c",
          "news_a9fcce83faa9"
        ],
        "evidenceItemIds": [
          "news_8dfaa3e7c03b",
          "news_d3774d842c2c",
          "news_a9fcce83faa9"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-06T06:53:31.570Z",
        "lastSeenAt": "2026-10-06T06:53:31.570Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_7ce297194a26",
        "title": "报道：OpenAI正与阿联酋基金、贝莱德洽谈300亿美元融资轮",
        "mainItemId": "news_45692583a3f3",
        "relatedItemIds": [
          "news_02cab4aa599f"
        ],
        "evidenceItemIds": [
          "news_45692583a3f3",
          "news_02cab4aa599f"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-06T06:53:31.570Z",
        "lastSeenAt": "2026-10-06T06:53:31.570Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      }
    ],
    "dailySummary": {
      "highlights": [
        {
          "text": "[75] 医疗险居然能“返保费”,还能保终身?复星联合医路相伴高端医疗险精英版详细拆解,3大优势1个坑,一次讲清! — 图源 | jimeng 作者：happy，前TOP100事业部总经理、国家认证管理咨询师、保险咨询师。 协助投保&从业咨",
          "evidenceItemIds": [
            "news_9f3b623176ea"
          ]
        },
        {
          "text": "[74] 当40万亿险资遇上低利率，A股的定价规则开始变了 — 低利率正在迫使保险资金重新定义股票在资产负债表中的角色。2026年保险资金运用规模突破40万亿元，股票配置比例继续抬升，",
          "evidenceItemIds": [
            "news_21bfd6078a4b"
          ]
        },
        {
          "text": "[72] AMD天价收购World Labs，AI教母李飞飞“起飞”还是“招安” — 这笔交易真正耐人寻味的，是背后隐藏的世界模型的技术困局、芯片厂商的算力焦虑以及硅谷资本大厂之间的暗中兜底",
          "evidenceItemIds": [
            "news_c83bb99e52f3"
          ]
        },
        {
          "text": "[72] 众安尊享e生中高端医疗险2026:接受超适应症用药,既往症豁免,0免赔 — Hi，是新朋友吗？ 喜欢点个关注，可获取保险产品深度解读与配置逻辑！ 文 | 吴南生 第 469 篇分享 今天和大家分享",
          "evidenceItemIds": [
            "news_90694c744974"
          ]
        }
      ]
    },
    "eventChain": {
      "summary": "基于标题主题相似度和来源层级识别 4 组关联事件；仅表示内容相关，不代表已确认因果",
      "chains": [
        {
          "title": "港股异动 | 三环集团(06951)午后涨超6% 机构指国内MLCC原厂有望加速导入国际供应链",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_ac13f7363e37",
            "news_d3774d842c2c",
            "news_222f6d738031",
            "news_1474788dda27",
            "news_799f47c6bd0f"
          ],
          "nodes": [
            "港股异动 | 三环集团(06951)午后涨超6% 机构指国内MLCC原厂有望加速导入国际供应链",
            "港股开盘：恒生指数开涨1%",
            "港股公告精选｜百威亚太重组及计提或影响三季度利润 江波龙H股稳定期结束",
            "港股风向标｜恒指反弹站回24000点上方 情绪面跟随海外市场改善",
            "港股收盘 | 三大指数集体收涨 算力硬件产业链领跑"
          ]
        },
        {
          "title": "一半的股票已进入熊市！美股走到“十字路口”，关键看美债波动率",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_12894a198cdd",
            "news_6edfe4751ab8",
            "news_7818135fe424"
          ],
          "nodes": [
            "一半的股票已进入熊市！美股走到“十字路口”，关键看美债波动率",
            "美股周一走高，财报季将于周四拉开帷幕",
            "美股三大期指几无变动 油市多空消息轮番来袭|今夜看点"
          ]
        },
        {
          "title": "AI进化速递丨华为与高通宣布达成广泛专利许可协议",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_e689c676b03b",
            "news_020f0d9aa27d"
          ],
          "nodes": [
            "AI进化速递丨华为与高通宣布达成广泛专利许可协议",
            "华为与高通宣布达成广泛专利许可协议"
          ]
        },
        {
          "title": "现房销售新政叠加房贷贴息落地，国庆期间多地楼市表现亮眼",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_8523619ea358",
            "news_f8410f653bea"
          ],
          "nodes": [
            "现房销售新政叠加房贷贴息落地，国庆期间多地楼市表现亮眼",
            "现房销售新政叠加房贷贴息落地，多地国庆楼市表现亮眼"
          ]
        }
      ]
    },
    "industryImpact": {
      "quadrants": {
        "insurance": {
          "level": "high",
          "summary": "7 条保险相关资讯",
          "items": [
            {
              "title": "当40万亿险资遇上低利率，A股的定价规则开始变了",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_21bfd6078a4b"
              ]
            },
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
            }
          ]
        },
        "pe": {
          "level": "high",
          "summary": "17 条基金/资管相关资讯",
          "items": [
            {
              "title": "香港积金局：过去12个月MPF股票基金平均回报10.3%",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_d797734ec453"
              ]
            },
            {
              "title": "月之暗面据悉完成IPO前融资 最新估值约500亿美元",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_00e7e2f530e8"
              ]
            },
            {
              "title": "8.2万亿美元AI盛宴背后，银行业悄然涌入亚洲GPU融资赛道",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_c12199ca18d7"
              ]
            }
          ]
        },
        "banking": {
          "level": "high",
          "summary": "14 条银行/货币政策相关资讯",
          "items": [
            {
              "title": "印度银行股走高，押注印度储备银行加息，Nifty私人银行指数涨逾1%",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_5ac9a222900b"
              ]
            },
            {
              "title": "积重难返！法国站到了“欧债风暴中心”",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_a21a655970c6"
              ]
            },
            {
              "title": "韩国9月外储为4405.6亿美元 环比减少17.2亿美元",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_d3f4db166f25"
              ]
            }
          ]
        },
        "trust": {
          "level": "medium",
          "summary": "1 条信托/财富管理相关资讯",
          "items": [
            {
              "title": "截至二季度末资产管理产品总规模突破88万亿元",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": [
                "news_3b82f54d9418"
              ]
            }
          ]
        }
      }
    },
    "weeklyTrends": {
      "summary": "今日 150 条资讯，覆盖 4 个分类、8 个信源",
      "trends": [
        {
          "topic": "行业动态活跃",
          "evidence": "今日 78 条行业动态资讯，行业层面信息充分，涉及多家机构/产品",
          "evidenceItemIds": [
            "news_d797734ec453",
            "news_867bc075917e",
            "news_ac13f7363e37"
          ],
          "direction": "平稳"
        },
        {
          "topic": "货币政策信号",
          "evidence": "出现 10 次货币政策相关关键词，关注利率/流动性走向",
          "evidenceItemIds": [
            "news_21bfd6078a4b",
            "news_b8359ae20a15",
            "news_7818135fe424"
          ],
          "direction": "上升"
        },
        {
          "topic": "保险行业关注度",
          "evidence": "出现 7 条保险相关资讯，覆盖监管/市场/产品多维度",
          "evidenceItemIds": [
            "news_9f3b623176ea",
            "news_21bfd6078a4b",
            "news_90694c744974"
          ],
          "direction": "上升"
        },
        {
          "topic": "市场行情波动",
          "evidence": "出现 61 条市场行情相关资讯，市场关注度提升",
          "evidenceItemIds": [
            "news_21bfd6078a4b",
            "news_12894a198cdd",
            "news_b568b2ba8ea5"
          ],
          "direction": "上升"
        },
        {
          "topic": "房地产政策动向",
          "evidence": "出现 6 条地产相关资讯，政策边际变化值得关注",
          "evidenceItemIds": [
            "news_799f47c6bd0f",
            "news_d03360c84d43",
            "news_8523619ea358"
          ],
          "direction": "平稳"
        }
      ]
    },
    "insurancePlanner": {
      "summary": "今日 7 条保险相关资讯，以下为规划师客户沟通参考",
      "talkingPoints": [
        {
          "topic": "当40万亿险资遇上低利率，A股的定价规则开始变了",
          "point": "利率环境变动直接影响保险产品定价和客户购买决策",
          "action": "测算利率变动对在售产品IRR/保额的影响",
          "evidenceItemIds": [
            "news_21bfd6078a4b"
          ]
        },
        {
          "topic": "前9月18家险企发债600亿补充资本,票面利率最低至“1字头”",
          "point": "利率环境变动直接影响保险产品定价和客户购买决策",
          "action": "测算利率变动对在售产品IRR/保额的影响",
          "evidenceItemIds": [
            "news_b8359ae20a15"
          ]
        },
        {
          "topic": "众安尊享e生中高端医疗险2026:接受超适应症用药,既往症豁免,0免赔",
          "point": "健康险领域变化，适合作为客户保单年检中的风险缺口沟通素材",
          "action": "梳理在售健康险产品矩阵，标记优势产品",
          "evidenceItemIds": [
            "news_90694c744974"
          ]
        },
        {
          "topic": "真诚咨询:十年前购买的20年重疾险,目前经济压力较大,退保损失较大,还有必要继续缴费吗?",
          "point": "健康险领域变化，适合作为客户保单年检中的风险缺口沟通素材",
          "action": "梳理在售健康险产品矩阵，标记优势产品",
          "evidenceItemIds": [
            "news_b88af30fc3f3"
          ]
        }
      ]
    },
    "peOperations": {
      "summary": "今日 17 条基金/资管相关资讯，以下为运营参考",
      "talkingPoints": [
        {
          "topic": "香港积金局：过去12个月MPF股票基金平均回报10.3%",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_d797734ec453"
          ]
        },
        {
          "topic": "月之暗面据悉完成IPO前融资 最新估值约500亿美元",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_00e7e2f530e8"
          ]
        },
        {
          "topic": "8.2万亿美元AI盛宴背后，银行业悄然涌入亚洲GPU融资赛道",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_c12199ca18d7"
          ]
        },
        {
          "topic": "多家阿联酋基金以及贝莱德据悉商谈参与OpenAI最新一轮300亿美元融资",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_02cab4aa599f"
          ]
        }
      ]
    },
    "marketOutlook": {
      "summary": "今日 55 条宏观经济/政策相关资讯",
      "outlooks": [
        {
          "topic": "全球纯燃油车新车销量占比首次跌破50%",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_ce5447007e5f"
          ]
        },
        {
          "topic": "a16z深度报告：AI付费市场，已出现不需要登上大众流量榜的生意",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_dc1288689075"
          ]
        },
        {
          "topic": "积重难返！法国站到了“欧债风暴中心”",
          "content": "财政政策发力影响基建投资和信用扩张节奏，关注配套政策的落地效果",
          "evidenceItemIds": [
            "news_a21a655970c6"
          ]
        },
        {
          "topic": "韩国计划明年启动35亿美元前沿AI模型开发项目",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_8fa0c67d5636"
          ]
        }
      ]
    }
  }
};
window.KEYWORD_INDEX = {
  "保险": [
    "news_21bfd6078a4b",
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
  "财险": [
    "news_90694c744974"
  ],
  "医疗险": [
    "news_90694c744974",
    "news_9f3b623176ea"
  ],
  "银行": [
    "news_5ac9a222900b",
    "news_a21a655970c6",
    "news_d3f4db166f25",
    "news_c12199ca18d7",
    "news_21bfd6078a4b",
    "news_85802a74d14d",
    "news_091da59e2da9",
    "news_d652bc9acc58",
    "news_5ba0a3f60dd8",
    "news_e71163be7067"
  ],
  "央行": [
    "news_a21a655970c6",
    "news_d3f4db166f25",
    "news_7818135fe424",
    "news_018f465155c5"
  ],
  "利率": [
    "news_a21a655970c6",
    "news_c7b11a8ed54f",
    "news_21bfd6078a4b",
    "news_7818135fe424",
    "news_d652bc9acc58",
    "news_5ba0a3f60dd8",
    "news_e71163be7067",
    "news_b8359ae20a15"
  ],
  "加息": [
    "news_5ac9a222900b",
    "news_026fb51d2488",
    "news_b3b45501c66d",
    "news_2369d9f6936d",
    "news_c0586ec589d8"
  ],
  "拨备": [
    "news_222f6d738031"
  ],
  "房贷": [
    "news_f8410f653bea",
    "news_8523619ea358"
  ],
  "存款": [
    "news_d3f4db166f25",
    "news_e71163be7067"
  ],
  "大额存单": [
    "news_e71163be7067"
  ],
  "股票": [
    "news_d797734ec453",
    "news_c83bb99e52f3",
    "news_21bfd6078a4b",
    "news_12894a198cdd"
  ],
  "A股": [
    "news_21bfd6078a4b",
    "news_42a6f1de05a5",
    "news_81af44f3817f"
  ],
  "港股": [
    "news_867bc075917e",
    "news_ac13f7363e37",
    "news_7054b55b2c1b",
    "news_d3774d842c2c",
    "news_81af44f3817f",
    "news_222f6d738031",
    "news_1474788dda27",
    "news_170dbe839ae0",
    "news_799f47c6bd0f",
    "news_37ea638a41c1",
    "news_9bd9c11b4dea",
    "news_691c9b8fc6f8",
    "news_e2db44d660e6",
    "news_28c9ff6786c8"
  ],
  "美股": [
    "news_839916b1572e",
    "news_b3b45501c66d",
    "news_6edfe4751ab8",
    "news_81af44f3817f",
    "news_7818135fe424",
    "news_37ea638a41c1",
    "news_12894a198cdd"
  ],
  "大盘": [
    "news_ce5447007e5f"
  ],
  "指数": [
    "news_6e33bbea2385",
    "news_5ac9a222900b",
    "news_7054b55b2c1b",
    "news_8dfaa3e7c03b",
    "news_d3774d842c2c",
    "news_b3b45501c66d",
    "news_98f336c10212",
    "news_62d655ca7463",
    "news_33978d24de40",
    "news_12fa17a9b134",
    "news_6a863bd782d5",
    "news_0798fd39abe0",
    "news_1474788dda27",
    "news_7818135fe424",
    "news_fd4697c05549",
    "news_799f47c6bd0f",
    "news_a9fcce83faa9",
    "news_6d244e905300",
    "news_691c9b8fc6f8",
    "news_12894a198cdd",
    "news_3bd101f99202",
    "news_2f99cd6a1915"
  ],
  "私募基金": [
    "news_3b82f54d9418"
  ],
  "债券": [
    "news_cd6937f446da",
    "news_85802a74d14d",
    "news_81af44f3817f",
    "news_d652bc9acc58",
    "news_12894a198cdd",
    "news_c0586ec589d8",
    "news_b8359ae20a15"
  ],
  "国债": [
    "news_a21a655970c6",
    "news_026fb51d2488",
    "news_cd6937f446da",
    "news_37014145d8d6",
    "news_8d9b7e99f147",
    "news_8acd20ebb81c",
    "news_5ce9de32f09f",
    "news_2369d9f6936d",
    "news_c0586ec589d8"
  ],
  "信用债": [
    "news_c0586ec589d8"
  ],
  "公司债": [
    "news_be2d8ce1744e",
    "news_5ba0a3f60dd8"
  ],
  "期货": [
    "news_37014145d8d6",
    "news_7818135fe424",
    "news_5935c79887bd",
    "news_9afbc3ac06ca",
    "news_c0586ec589d8",
    "news_3b82f54d9418",
    "news_2f99cd6a1915"
  ],
  "IPO": [
    "news_00e7e2f530e8",
    "news_85802a74d14d",
    "news_9fe2d8dfe510",
    "news_e2db44d660e6",
    "news_6017a479b3ca"
  ],
  "上市": [
    "news_7e6b32c74436",
    "news_33978d24de40",
    "news_0590dc476937"
  ],
  "增持": [
    "news_6017a479b3ca"
  ],
  "券商": [
    "news_be2d8ce1744e",
    "news_d522752b5638"
  ],
  "经纪": [
    "news_5c5f98083245",
    "news_9f3b623176ea"
  ],
  "投资者": [
    "news_fc43d1c7e6c2",
    "news_7818135fe424",
    "news_d652bc9acc58",
    "news_5ba0a3f60dd8",
    "news_2369d9f6936d",
    "news_c0586ec589d8"
  ],
  "机构": [
    "news_ac13f7363e37",
    "news_d3f4db166f25",
    "news_37014145d8d6",
    "news_42a6f1de05a5",
    "news_b76d3d5e882d",
    "news_ed0013861041",
    "news_29f1d8f2f3d9",
    "news_b568b2ba8ea5",
    "news_d522752b5638",
    "news_3b82f54d9418",
    "news_0ae339c361ec"
  ],
  "南向资金": [
    "news_a9fcce83faa9",
    "news_691c9b8fc6f8"
  ],
  "监管": [
    "news_228ee79b52ee",
    "news_c83bb99e52f3",
    "news_020f0d9aa27d",
    "news_d522752b5638"
  ],
  "证监会": [
    "news_d522752b5638",
    "news_986ca26f7b13"
  ],
  "基金业协会": [
    "news_3b82f54d9418"
  ],
  "合规": [
    "news_d61d1f44074c"
  ],
  "罚单": [
    "news_d522752b5638"
  ],
  "约谈": [
    "news_372750cb0dfd"
  ],
  "条款": [
    "news_02cab4aa599f",
    "news_8dfaa3e7c03b",
    "news_45692583a3f3",
    "news_d652bc9acc58",
    "news_8224a9505621",
    "news_0693b8368fbd",
    "news_6241618180d8",
    "news_90694c744974",
    "news_5c5f98083245"
  ],
  "通知": [
    "news_b26a0499d957"
  ],
  "指引": [
    "news_0fac8a126c77"
  ],
  "意见": [
    "news_8dfaa3e7c03b",
    "news_0693b8368fbd",
    "news_6241618180d8"
  ],
  "规定": [
    "news_986ca26f7b13"
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
    "news_228ee79b52ee",
    "news_40275b2df711",
    "news_fc43d1c7e6c2",
    "news_fd4697c05549",
    "news_8b78ec2534b8",
    "news_0b07dd23b370",
    "news_771422506a38",
    "news_e2db44d660e6",
    "news_3bd101f99202",
    "news_e763dc7bc52b",
    "news_b88af30fc3f3"
  ],
  "PMI": [
    "news_98f336c10212",
    "news_62d655ca7463",
    "news_0798fd39abe0",
    "news_fd4697c05549",
    "news_bbf4b7129a37",
    "news_018f465155c5",
    "news_c11e6f1642ff",
    "news_00e341a20d38",
    "news_be1aa12b9a0d"
  ],
  "信贷": [
    "news_c12199ca18d7",
    "news_5ba0a3f60dd8"
  ],
  "汇率": [
    "news_8d9b7e99f147"
  ],
  "人民币": [
    "news_b568b2ba8ea5"
  ],
  "外汇": [
    "news_d3f4db166f25",
    "news_2369d9f6936d",
    "news_b568b2ba8ea5"
  ],
  "美元": [
    "news_228ee79b52ee",
    "news_c83bb99e52f3",
    "news_8fa0c67d5636",
    "news_00e7e2f530e8",
    "news_7e6b32c74436",
    "news_d3f4db166f25",
    "news_ec7e8c0b5d10",
    "news_c12199ca18d7",
    "news_41e0c0ae6b38",
    "news_b325f61521b6",
    "news_a311c20ba4e5",
    "news_02cab4aa599f",
    "news_cd6937f446da",
    "news_02505c35186c",
    "news_839916b1572e",
    "news_85802a74d14d",
    "news_a3fbc72e2b31",
    "news_45692583a3f3",
    "news_e7eadeb9b8ea",
    "news_7b36737715ed",
    "news_3395149b9bf4",
    "news_33978d24de40",
    "news_8d9b7e99f147",
    "news_ab0dae74f46b",
    "news_270b20fc7b2f",
    "news_222f6d738031",
    "news_fc43d1c7e6c2",
    "news_9ed9e4e7cc2d",
    "news_d652bc9acc58",
    "news_f5a9fd7eb32e",
    "news_5ce9de32f09f",
    "news_0693b8368fbd",
    "news_0b031305d24b",
    "news_37ea638a41c1",
    "news_47631f9a0be2",
    "news_2369d9f6936d",
    "news_e45b38541e3d"
  ],
  "欧元": [
    "news_cd6937f446da",
    "news_8d9b7e99f147",
    "news_e689c676b03b",
    "news_fc43d1c7e6c2",
    "news_5ce9de32f09f",
    "news_39dfbb6530c0",
    "news_018f465155c5"
  ],
  "日元": [
    "news_8d9b7e99f147"
  ],
  "通胀": [
    "news_026fb51d2488",
    "news_0798fd39abe0",
    "news_0683c44c3301",
    "news_c0586ec589d8",
    "news_d104bc3eb06d"
  ],
  "房地产": [
    "news_799f47c6bd0f"
  ],
  "地产": [
    "news_f5bc394b10ae",
    "news_799f47c6bd0f"
  ],
  "楼市": [
    "news_f8410f653bea",
    "news_8523619ea358"
  ],
  "住房": [
    "news_d03360c84d43",
    "news_fc43d1c7e6c2"
  ],
  "消费": [
    "news_ce5447007e5f",
    "news_dc1288689075",
    "news_a33014563e0f",
    "news_c7b11a8ed54f",
    "news_604efe266591",
    "news_81af44f3817f",
    "news_691c9b8fc6f8",
    "news_da85d7c59133",
    "news_2b339de4aafc"
  ],
  "投资": [
    "news_8fa0c67d5636",
    "news_d3f4db166f25",
    "news_a33014563e0f",
    "news_02cab4aa599f",
    "news_8dfaa3e7c03b",
    "news_42a6f1de05a5",
    "news_85802a74d14d",
    "news_45692583a3f3",
    "news_fc43d1c7e6c2",
    "news_7818135fe424",
    "news_d652bc9acc58",
    "news_8224a9505621",
    "news_39dfbb6530c0",
    "news_5ba0a3f60dd8",
    "news_0693b8368fbd",
    "news_a026baca78f4",
    "news_6241618180d8",
    "news_60706bfd6c91",
    "news_2369d9f6936d",
    "news_c0586ec589d8"
  ],
  "出口": [
    "news_ab0dae74f46b",
    "news_9ed9e4e7cc2d",
    "news_480595a781df",
    "news_0b031305d24b",
    "news_b76d3d5e882d"
  ],
  "进口": [
    "news_68da7c1512a2",
    "news_4afebb00e51b",
    "news_5129c4ebc676"
  ],
  "贸易": [
    "news_bf22577db20c"
  ],
  "产业链": [
    "news_1474788dda27",
    "news_799f47c6bd0f",
    "news_37ea638a41c1",
    "news_69bf6fb8d854",
    "news_28c9ff6786c8"
  ],
  "供应链": [
    "news_ac13f7363e37",
    "news_f5a9fd7eb32e"
  ],
  "就业": [
    "news_9afbc3ac06ca",
    "news_c0586ec589d8",
    "news_b54b790f48ad"
  ],
  "收入": [
    "news_9b58ae7f0546",
    "news_f14d43a4c734",
    "news_9fe2d8dfe510",
    "news_39dfbb6530c0",
    "news_09f8edc49b5e",
    "news_76bef4761615"
  ],
  "黄金": [
    "news_41e0c0ae6b38",
    "news_81af44f3817f",
    "news_8523619ea358",
    "news_c6a016de6989",
    "news_d104bc3eb06d"
  ],
  "金价": [
    "news_b88af30fc3f3"
  ],
  "原油": [
    "news_ab0dae74f46b",
    "news_9ed9e4e7cc2d",
    "news_0693b8368fbd",
    "news_480595a781df",
    "news_0b031305d24b",
    "news_b76d3d5e882d"
  ],
  "大宗商品": [
    "news_3bd101f99202"
  ],
  "工业": [
    "news_b3b45501c66d",
    "news_a3fbc72e2b31",
    "news_da85d7c59133",
    "news_2b339de4aafc"
  ],
  "利润": [
    "news_cbe0e5737b46",
    "news_222f6d738031",
    "news_09f8edc49b5e"
  ],
  "股市": [
    "news_6e33bbea2385",
    "news_42a6f1de05a5",
    "news_1241a6ceadc5",
    "news_12fa17a9b134",
    "news_6a863bd782d5",
    "news_1a4186f612b3",
    "news_81af44f3817f",
    "news_5ba0a3f60dd8",
    "news_6d244e905300",
    "news_f3a5557fe5ff",
    "news_12894a198cdd",
    "news_c0586ec589d8",
    "news_b54b790f48ad"
  ],
  "美联储": [
    "news_026fb51d2488",
    "news_7818135fe424",
    "news_2369d9f6936d"
  ],
  "财报": [
    "news_f00697d8a5da",
    "news_6edfe4751ab8"
  ],
  "私人银行": [
    "news_5ac9a222900b"
  ],
  "资管": [
    "news_3b82f54d9418"
  ],
  "权益": [
    "news_81af44f3817f",
    "news_1109f307029a",
    "news_d2f26c4757f7",
    "news_b88af30fc3f3"
  ],
  "年化": [
    "news_e71163be7067"
  ],
  "募集": [
    "news_b568b2ba8ea5"
  ]
};
