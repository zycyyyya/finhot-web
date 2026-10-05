// finhot auto-generated data - powered by RSSHub + financial sources + Zhihu OpenAPI
// Generated: 2026-10-05T06:18:08.041Z
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
  "date": "2026-10-05",
  "generatedAt": "2026-10-05T06:18:08.041Z",
  "lead": "今日新增 56 条，共 150 条精选资讯",
  "items": [
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
      "score": 14,
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
          "score": 19,
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
      "score": 55,
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
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
          "score": 53,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
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
      "score": 27,
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
          "score": 86,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 47,
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
      "score": 50,
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 6 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 73,
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
      "eventId": null
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
      "score": 47,
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
      "attentionScore": 47,
      "llmScores": [
        49,
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
      "score": 57,
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
          "score": 43,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 100,
          "reasons": [
            "命中私募销售运营核心主题 3 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 57,
      "llmScores": [
        64,
        50
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
      "score": 19,
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
          "score": 61,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
          "score": 83,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
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
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "passesTierGate": true,
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
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
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
          "score": 50,
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
      "title": "恒指开盘跌0.04%，恒生科技指数跌0.47%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012301870141315",
      "publishedAt": "2026-10-05T01:24:31.000Z",
      "fetchedAt": "2026-10-05T05:49:28.251Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，恒指开盘跌0.04%，恒生科技指数跌0.47%；家电、软件服务板块跌幅居前，美的、网易跌超1%；煤炭、传媒板块领涨，深演智能涨超5%，中煤能源涨超3%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_1cda9f707d09",
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
      "title": "壹快评｜二十四道拐宣布免费，爱国主义教育基地不该“擦边收费”",
      "sourceUrl": "https://www.yicai.com/news/103384313.html",
      "publishedAt": "2026-10-05T01:13:17.000Z",
      "fetchedAt": "2026-10-05T05:47:38.017Z",
      "timeConfidence": "source",
      "summary": "爱国主义教育基地的底色应是“红色”，而不是“金色”。近日，有网民质疑贵州晴隆二十四道拐抗战公路“被圈起来收费”问题，引发广泛关注。10月2日，晴隆县文体广电旅游局发布通报，解释门票费只对应展览馆及观景台，抗战公路可免费游览。4日，晴隆县政府又发通报，称经过专题研究，决定展览馆及观景台也免收门票，和抗战公路一起免费开放。这一决定可称明智，但并非“大方”。因为通报中的展览馆及观景台原本就不该收费，现在",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0702a345eab5",
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
      "title": "英伟达重金力捧！“美版DeepSeek”即将发布开源模型",
      "sourceUrl": "https://wallstreetcn.com/articles/3782993",
      "publishedAt": "2026-10-05T01:09:43.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "获得英伟达8亿美元投资的AI初创公司Reflection，正准备发布其首款开放权重模型。\n据Axios 10月4日报道，Reflection的首款模型预计发布初期能力仍将落后于美国最顶尖的前沿模型，但有望与中国领先的开放权重模型直接竞争。\n据报道，消息人士表示，该模型具备足够强大的智能能力，可帮助企业以低成本构建专有AI系统——在某些情况下，将能力稍弱的开放模型与企业自身高质量数据结合，最终效果甚",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b6658ec56fdc",
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
      "title": "商务部：国庆假期前四天全国消费市场平稳有序",
      "sourceUrl": "https://www.36kr.com/newsflashes/4012258696859778",
      "publishedAt": "2026-10-05T01:00:00.000Z",
      "fetchedAt": "2026-10-05T05:49:28.251Z",
      "timeConfidence": "source",
      "summary": "从商务部了解到，国庆假期过半，全国消费市场平稳有序，生活必需品货足价稳。商务部商务大数据显示，国庆假期前三天，商务部重点监测的78个步行街（商圈）客流量、营业额同比分别增长3.4%、5.3%。消费品以旧换新带动销售额196.3亿元，惠及348.3万人次。其中，汽车以旧换新4.6万辆，带动新车销售额74.5亿元；家电以旧换新151.1万台，带动销售额65亿元；数码和智能产品购新170.9万件，带动销",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_7acb513d9587",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 58,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 5,
        "recency": 15,
        "actionability": 10
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "日本9月服务业PMI不及预期，私营部门增长放缓",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3594056",
      "publishedAt": "2026-10-05T00:52:53.000Z",
      "fetchedAt": "2026-10-05T05:49:34.981Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_191645d6e1cb",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 19,
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
      "attentionScore": 19,
      "llmScores": [
        18,
        19
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
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
          "score": 44,
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
      "title": "黄金、白银、美股期指、油价、比特币，全线上涨",
      "sourceUrl": "https://www.cls.cn/detail/2497787",
      "publishedAt": "2026-10-05T00:13:03.000Z",
      "fetchedAt": "2026-10-05T05:49:27.169Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯，今日，国际原油、金银、比特币、美股期指同步走高。\n截至北京时间6:30，国际油价继续上行，布伦特原油期货上涨0.58%，逼近103美元/桶；纽约原油期货小幅收涨0.12%。\n现货黄金站稳4140美元/盎司上方，现货白银上涨0.7%。\n\n美股股指期货全线飘红，纳指期货以0.31%涨幅领涨；\n\n比特币快速拉升，日内大涨超2%，突破8.6万美元/枚。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e3e94b1c4834",
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
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "以色列交通部：收紧对赴以航班外国机组人员限制",
      "sourceUrl": "https://www.cls.cn/detail/2497780",
      "publishedAt": "2026-10-04T23:49:43.000Z",
      "fetchedAt": "2026-10-05T05:49:27.169Z",
      "timeConfidence": "source",
      "summary": "总台记者当地时间4日获悉，以色列方面消息称，鉴于近期发生的阿曼籍副驾驶袭击迪拜航空客机机长事件，以色列交通部日前向外国航空运营商发出通知，严禁拥有伊朗、伊拉克、黎巴嫩、阿曼、巴基斯坦、卡塔尔和沙特等27国单一或双重国籍的机组人员执飞或搭乘赴以航班。\n9月30日，迪拜航空FZ1073航班从阿联酋迪拜飞往特拉维夫途中发生安全事件。据阿联酋方面消息，该航班副驾驶涉嫌在驾驶舱内持刀刺伤机长，导致飞机突然急",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_58810d93b1be",
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
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "港股早报 | 美股三大指数全线收高 G7同意联手释放1亿桶能源储备",
      "sourceUrl": "https://www.cls.cn/detail/2497776",
      "publishedAt": "2026-10-04T23:11:00.000Z",
      "fetchedAt": "2026-10-05T05:49:27.169Z",
      "timeConfidence": "source",
      "summary": "热点聚焦\n1.七国集团(G7)领导人在上周五举行会议后表示，鉴于燃料市场持续承压，各国将在国际能源署(IEA)的协调下释放1亿桶原油和柴油。G7表示，各国将立即开始通过IEA协调释放1亿桶能源，为期4个月。并且在最初20天内，各国将“大规模”释放柴油储备，但并未明确1亿桶中原油和柴油各占多少。联合声明特别提到，包括美国在内的国家需“避免在G7国家之间实施能源及能源产品出口限制，并呼吁所有能源生产国",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e7c0cc5484a9",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 11,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "港股本周要闻前瞻｜港股国庆假期继续开市 美联储公布货币政策会议纪要",
      "sourceUrl": "https://www.cls.cn/detail/2497746",
      "publishedAt": "2026-10-04T23:05:17.000Z",
      "fetchedAt": "2026-10-05T05:49:27.169Z",
      "timeConfidence": "source",
      "summary": "财联社10月5日讯（编辑 冯轶）财联社为您带来本周港股要闻：\n海外宏观\n周一(10月5日)：美国将公布9月标普全球服务业及综合PMI终值、9月ISM非制造业PMI。\n周二(10月6日)：美国8月贸易帐、9月全球供应链压力指数及ADP就业人数周度变动公布。\n周三(10月7日)：美国将公布9月纽约联储一年期通胀预期。\n周四(10月8日)：美国公布至10月3日当周初请失业金人数；美联储公布9月货币政策会",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bb61cda7a982",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 27,
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
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "attentionScore": 27,
      "llmScores": [
        26,
        28
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
      "title": "华尔街见闻早餐FM-Radio | 2026年10月5日",
      "sourceUrl": "https://wallstreetcn.com/articles/3782961",
      "publishedAt": "2026-10-04T23:00:11.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "华见早安之声\n请各位听众升级为见闻最新版APP，以便成功收听以下音频。\n\n要闻精选\n\nG7决定释放1亿桶紧急油储，立即行动、持续四个月，前20天先大规模投放柴油。特朗普称不会实施柴油出口禁令。\n中东战火恐升级：周五报道称沙特考虑大举反击胡塞武装，获美情报支持；也门胡塞武装称周六袭击并击中油企沙特阿美目标；也门政府周日宣布启动大规模军事行动，以收复胡塞武装近期控制地区。\n特朗普称与伊战事将“很快结束",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_da00dec8ad17",
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
      "eventId": "event_99b6c1e3a191"
    },
    {
      "title": "【早报】特朗普宣布成立“超级智能特别工作组”",
      "sourceUrl": "https://www.cls.cn/detail/2497778",
      "publishedAt": "2026-10-04T23:00:00.000Z",
      "fetchedAt": "2026-10-05T05:49:27.169Z",
      "timeConfidence": "source",
      "summary": "宏观新闻\n1、9月30日至10月1日，G20贸易部长会议在美国威斯康星州密尔沃基举行。据了解，会议就反对粮食武器化议题达成联合声明，未就应对产能过剩、消除强迫劳动、调整最惠国待遇原则议题形成成果文件。商务部新闻发言人就此事表示，会议期间，中方始终秉持开放合作的态度，建设性参与各项议题讨论，并同成员密切沟通，充分发挥了促谈促合作用。同时，中方始终坚持原则，坚决维护自身和发展中国家的共同利益，并努力促",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_06e858972172",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 52,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 9,
        "recency": 13,
        "actionability": 10
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
      "title": "10年期美债逼近5.3%！贝森特黔驴技穷，Zervos能否找到新解法？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782715",
      "publishedAt": "2026-10-04T22:28:04.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "9月以来，美债市场持续承压，10年期美债收益率升至5.27%，创2007年以来新高，距离此前5.30%的高点仅一步之遥；30年期收益率同步升至5.5%以上。面对美债被持续抛售，美财政部此前已连续扩大长债回购。9月10日和24日宣布的两次最高60亿美元回购计划，实际回购规模仅52亿美元和41亿美元。但市场并不买账，两次出手均未能压制长端利率，反而因干预信誉问题推高期限溢价。当前贝森特已将TGA部分资",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_179bbcdc09c7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "eventId": null
    },
    {
      "title": "中国央行结构性降息与债市盘整，中国9月PMI重回扩张---W40国内宏观脱水",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782989",
      "publishedAt": "2026-10-04T22:17:15.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "央行PSL降息25bp至1.5%并扩容支持领域，选择结构性降息而非总量宽松，宽信用信号意义大于流动性传导。债市短期受止盈情绪与PMI超预期影响或面临盘整，但中期多头格局未改。\n9月三大PMI指数重回扩张区间，生产强于需求、价格回升与就业偏弱并存。债市短期或承压，但中期仍有支撑，超长债行情下半场仍有空间。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1035aecf181c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 73,
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 3 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_2cf716748ce1"
    },
    {
      "title": "智通港股投资日志|10月5日",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593999",
      "publishedAt": "2026-10-04T16:05:10.000Z",
      "fetchedAt": "2026-10-04T16:55:52.772Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_9a91c69e9266",
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
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "推理支出2026年首超训练：\"Token工厂\"崛起 AI基础设施投资逻辑生变",
      "sourceUrl": "https://www.cls.cn/detail/2497741",
      "publishedAt": "2026-10-04T14:59:52.000Z",
      "fetchedAt": "2026-10-04T16:55:12.662Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月4日讯（记者 王耐）2026年，AI基础设施投资逻辑正在发生一次根本性的转身。\n来看最近的一组数据。Gartner最新预测显示，随着代理式AI提升计算强度，市场重心正从训练向推理转移。预计2026年全球推理支出将达233亿美元，首次超过190亿美元的训练支出，占AI IaaS总支出的55%；该比例在2027年将升至59%。\n中国信通院发布的《词元（Token）经济发展研究报告（",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3020b010d504",
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
      "title": "云深处、博睿康等企业回复问询 47家公司因财报更新审核状态变为“中止”｜科创板IPO周报",
      "sourceUrl": "https://www.cls.cn/detail/2497739",
      "publishedAt": "2026-10-04T14:47:41.000Z",
      "fetchedAt": "2026-10-04T16:55:12.662Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月4日讯（记者 王楚凡） 本周（9月28日至10月4日），共有63家企业更新科创板IPO审核进展。\n其中，云深处等16家企业状态变更为“已问询”，株洲科能、华盛雷达等47家企业因发行上市申请文件中记载的财务资料已过有效期，需要补充提交而中止流程。\n\n▍云深处、博睿康等企业更新问询回复\n云深处专注于四足机器人、轮足机器人等具身智能机器人的研发、制造与产业化，是“杭州六小龙”之一，控",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_40e66590509c",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "三季度光伏股价图鉴：指数跑输沪深300，个股涨跌幅差距接近百点",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593993",
      "publishedAt": "2026-10-04T14:36:26.000Z",
      "fetchedAt": "2026-10-04T16:55:52.772Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_305c61e31b92",
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
      "title": "美国9月非农遇冷但韧性仍存，中美能源竞争有度合作并行---W40海外宏观脱水",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782988",
      "publishedAt": "2026-10-04T12:51:40.000Z",
      "fetchedAt": "2026-10-05T05:47:21.098Z",
      "timeConfidence": "source",
      "summary": "9月新增非农2.9万不及预期，7至8月合计下修6万，失业率升至4.2%，薪资增速持续回落。就业增长广度收窄但韧性仍存，市场对10月连续加息担忧缓解。通胀仍是比就业更重要的货币政策因素。 中美能源资源禀赋与能源战略差异是构建建设性战略稳定关系的基础，双方竞争有度，产业联系与市场需求构筑坚韧合作基础，未来仍应以合作为主。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_af155742b624",
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
          "score": 71,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项"
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
      "title": "沙特阿拉伯股市上涨；截至收盘沙特阿拉伯TASI指数上涨1.09%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593981",
      "publishedAt": "2026-10-04T12:45:14.000Z",
      "fetchedAt": "2026-10-04T14:14:33.694Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_03cab9deab9f",
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
      "title": "特朗普宣布成立“超级智能特别工作组”",
      "sourceUrl": "https://wallstreetcn.com/livenews/3173963",
      "publishedAt": "2026-10-04T12:31:00.000Z",
      "fetchedAt": "2026-10-04T16:53:39.941Z",
      "timeConfidence": "source",
      "summary": "当地时间10月4日，美国总统特朗普宣布成立“超级智能特别工作组”（Super Intelligence Force，SIF），负责协调美国联邦政府在超级智能领域的相关工作。特朗普表示，该工作组将协调联邦政府与消费者、公共利益团体、宗教组织、关键基础设施提供商以及超级智能企业之间的沟通与合作。\n特朗普宣布，工作组将由美国国家情报总监杰伊·克莱顿、美国联邦贸易委员会主席安德鲁·弗格森、美国国防部首席技",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b861c054e12d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 52,
      "rawScore": 52,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
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
      "title": "名创优品(09896)10月2日斥资23.68万美元回购10.74万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593975",
      "publishedAt": "2026-10-04T12:05:10.000Z",
      "fetchedAt": "2026-10-04T14:14:33.694Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_cba5a0d2e6cd",
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
      "title": "订单排到2027年！又一行业，爆单了",
      "sourceUrl": "https://www.cls.cn/detail/2497712",
      "publishedAt": "2026-10-04T12:04:11.000Z",
      "fetchedAt": "2026-10-04T16:55:12.662Z",
      "timeConfidence": "source",
      "summary": "沙发、地毯、大床一应俱全，空调、地暖随时调控温度，淋浴间、卫生间、厨房全部配齐，从生产到搭建完工仅需3个月，即可拎包入住。这不是普通的酒店客房，而是一顶帐篷。\n订单每年增长近30% 酒店式帐篷走红海外\n近年来，全球精致露营、户外度假热潮持续升温，新型预制式帐篷房走红海外。国产帐篷房凭借创新设计与过硬品质，斩获海外大额订单，成为我国户外用品出口的新增长点。\n\n在江苏常州一家户外用品企业，记者看到了一",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c63367770a69",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "7.5%房贷利率有多可怕？美国博主算账：贷款50万美元，3年还12.6万，本金只少1.5万",
      "sourceUrl": "https://wallstreetcn.com/charts/41959979",
      "publishedAt": "2026-10-04T12:03:25.000Z",
      "fetchedAt": "2026-10-04T14:09:58.726Z",
      "timeConfidence": "source",
      "summary": "美国按揭贷款利率本周急剧攀升，创下四年来最大单周涨幅，债券市场抛售浪潮正以最直接的方式冲击普通美国家庭的购房梦。美国博主算账，贷款50万美元，3年还12.6万，其中11万多是利息，本金只少1.5万。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2679482aa2ad",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 31,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
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
          "score": 84,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
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
      "eventId": "event_cba1a5ffd9bc",
      "attentionScore": 31,
      "llmScores": [
        19,
        43
      ],
      "scoredBy": "llm"
    },
    {
      "title": "别等“金九银十”买车了！国庆北京车市实探：专属优惠少见，首销权益更香",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593970",
      "publishedAt": "2026-10-04T11:35:52.000Z",
      "fetchedAt": "2026-10-04T14:14:33.694Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_0e5747bbb9ed",
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
      "noiseCaps": [
        "疑似推广用语"
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
      "title": "百威亚太(01876)：内部重组产生5200万美元税项开支 另就印度应收款计提3000万美元拨备",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593968",
      "publishedAt": "2026-10-04T11:35:10.000Z",
      "fetchedAt": "2026-10-04T14:14:33.694Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_1371736991a2",
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
      "title": "一向力挺AI的孙正义突然警告：超级智能可能“极其危险”",
      "sourceUrl": "https://wallstreetcn.com/articles/3782987",
      "publishedAt": "2026-10-04T11:32:45.000Z",
      "fetchedAt": "2026-10-04T14:09:58.726Z",
      "timeConfidence": "source",
      "summary": "软银集团创始人孙正义长期以来是人工智能最坚定的鼓吹者之一，但这位日本亿万富翁近日发出罕见警示——随着AI能力急速膨胀，超级智能一旦落入错误之手，可能变得\"极其危险\"。\n周日，孙正义在京都\"社会中的科学与技术\"论坛（STS Forum）场边活动上发表讲话时表示，AI能力的指数级跃升使各国建立互信、携手驾驭这一技术变得刻不容缓。他警告称，人类已\"没有任何余地\"再让国与国之间相互对抗，因为强大AI模型所",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_84634f0efb53",
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
      "title": "油价逼近100美元，OPEC+仍按兵不动：11月产量配额维持不变",
      "sourceUrl": "https://wallstreetcn.com/articles/3782986",
      "publishedAt": "2026-10-04T11:25:16.000Z",
      "fetchedAt": "2026-10-04T14:09:58.726Z",
      "timeConfidence": "source",
      "summary": "石油市场供需紧张之际，OPEC+选择维持现状。\n在周日的视频会议上，OPEC+主要成员国就11月份维持石油产量配额不变达成原则性协议。与此同时，国际油价期货正逼近每桶100美元关口，柴油零售价格亦创下历史新高，七国集团（G7）已宣布释放紧急战略储备以应对市场压力。\n此次按兵不动的背后，是中东持续冲突对OPEC+成员国产量造成的实质性冲击。伊朗战争已导致波斯湾地区大范围减产，沙特阿拉伯、伊拉克、科威",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c0f0c768ce55",
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
      "title": "金茂源环保(06805)10月2日斥资142.58万港元回购49万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593964",
      "publishedAt": "2026-10-04T11:05:17.000Z",
      "fetchedAt": "2026-10-04T14:14:33.694Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_9df482b34778",
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
      "title": "天星医疗(01609)10月2日斥资20.33万港元回购2550股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593963",
      "publishedAt": "2026-10-04T11:05:16.000Z",
      "fetchedAt": "2026-10-04T14:14:33.694Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_ba7f925ed3f6",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 16,
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
      "eventId": null,
      "attentionScore": 16,
      "llmScores": [
        19,
        12
      ],
      "scoredBy": "llm"
    },
    {
      "title": "为废除冬令时，特朗普把参议员手机号挂到网上",
      "sourceUrl": "https://www.cls.cn/detail/2497706",
      "publishedAt": "2026-10-04T10:59:18.000Z",
      "fetchedAt": "2026-10-04T16:55:12.662Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（编辑 史正丞）为了阻止4周后即将来临的“冬令时”，美国总统特朗普正在展开一场舆论攻势。\n按照现行安排，美国大部分地区将在当地时间11月1日凌晨2点，将时钟拨回至凌晨1点，恢复标准时间，俗称“冬令时”。对于中国投资者而言，这意味着从11月2日起，美股常规交易时段对应的北京时间将调整为22:30至次日5:00。\n在美国总统特朗普看来，这种在每年春天将时钟拨快一个小时，又在秋季拨慢一",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1895a7a38b57",
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
      "title": "机构调研：磷酸铁锂景气度延续到2027年",
      "sourceUrl": "https://www.36kr.com/newsflashes/4011307663102080",
      "publishedAt": "2026-10-04T10:38:00.000Z",
      "fetchedAt": "2026-10-04T16:55:30.163Z",
      "timeConfidence": "source",
      "summary": "9月以来，锂电产业链上市公司密集召开业绩说明会、接待机构调研。万润新能表示，称三季度保持满产，预计行业高景气将延续至四季度和明年。湖南裕能表示下半年主要产品特别是高端产品供不应求，2027年行业需求预计将保持较快增速。（上证报）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_364069f7052a",
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
      "title": "伦敦支付基础设施公司OpenPayd计划年底前在纳斯达克上市",
      "sourceUrl": "https://www.36kr.com/newsflashes/4011304470384513",
      "publishedAt": "2026-10-04T10:18:39.000Z",
      "fetchedAt": "2026-10-04T10:37:06.708Z",
      "timeConfidence": "source",
      "summary": "伦敦支付基础设施公司OpenPayd计划年底前在纳斯达克上市，以资助其美国市场扩张和收购计划。该公司首席执行官Iana Dimitrova表示，OpenPayd目标是在2027年4月前在美国推出服务，并正在考虑通过收购获取牌照和技术。OpenPayd正就与Titan Acquisition Corp．的拟议合并接受美国证券交易委员会审查，目前处于最后阶段。Dimitrova表示，除非出现重大外部干",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5f6c4b9e0821",
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
          "score": 47,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "6280亿美元表外承诺纳入估值后，Meta股票“贵了”35%？",
      "sourceUrl": "https://wallstreetcn.com/articles/3782985",
      "publishedAt": "2026-10-04T10:18:33.000Z",
      "fetchedAt": "2026-10-04T10:34:26.115Z",
      "timeConfidence": "source",
      "summary": "Meta约6280亿美元的表外负债长期隐匿于财报脚注，当这一数字被纳入企业价值计算后，整个超大规模科技股的估值框架正面临重构。\n投行Needham分析师Laura Martin于10月2日发布研报指出，若将Meta的表外承诺计入企业价值（EV），其估值倍数将上调35%，股票对股东而言远比传统指标所呈现的更为昂贵。\nMartin随后在CNBC公开表态：\"Meta表内债务和租赁合计约1000亿美元，表",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_197c914f2379",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项"
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "付鹏：一场跨越十余年的宏观交易——从新西兰看小型开放经济体【付鹏说5】",
      "sourceUrl": "https://wallstreetcn.com/premium/articles/3782435?layout=wscn-layout",
      "publishedAt": "2026-10-04T10:00:48.000Z",
      "fetchedAt": "2026-10-04T14:09:58.726Z",
      "timeConfidence": "source",
      "summary": "《付鹏说·第七季》全新升级上线！立即订阅  一场跨越十余年的宏观交易——从新西兰看小型开放经济体 交易桌前看天下，付鹏说来评财经。本期视频录制2026年9月24日。 前段时间我去新西兰滑了一趟雪。很多人会猜，是不是又在关注新西兰了？其实不必额外关注，因为新西兰这轮反馈已经走了十多年，虽然后面可能还要再走几年，这一轮大周期才算真正走完。我借这个机会把它讲一讲，因为这是一个最基本的模型，而我们用人生中",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a2e64dd9f185",
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
          "score": 22,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "OpenAI员工长文：AI 时代的文明岔路",
      "sourceUrl": "https://wallstreetcn.com/articles/3782983",
      "publishedAt": "2026-10-04T09:24:35.000Z",
      "fetchedAt": "2026-10-04T10:34:26.115Z",
      "timeConfidence": "source",
      "summary": "美国当地时间10月1日，OpenAI“智能时代”平台发布新文章《The Eternal Complement》，作者为赫曼斯·阿西尔瓦坦（Hemanth Asirvatham）和埃利奥特·莫克西（Elliott Mokski）。\n这是两人“下一个经济”系列的第一篇文章，文章讨论的核心问题是：当AI的推理、创造和发现能力不断增强，甚至走向超级智能之后，文明真正稀缺的资源会变成什么？\n\n两位作者并没有",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_11ade009890e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 19,
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
      "attentionScore": 19,
      "llmScores": [
        24,
        13
      ],
      "scoredBy": "llm"
    },
    {
      "title": "贝森特解释“坐庄论”：庄家也不是每局都赢，但我有内幕！",
      "sourceUrl": "https://wallstreetcn.com/charts/41959978",
      "publishedAt": "2026-10-04T09:18:02.000Z",
      "fetchedAt": "2026-10-04T10:34:26.115Z",
      "timeConfidence": "source",
      "summary": "美国财政部长贝森特解释说，“我是庄家”意味着财政部拥有更优的信息，而不是说他控制债券市场。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c1a8f794f556",
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
          "score": 59,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "高榕、五源、经纬、砺思接连募资，一级市场风向变了！",
      "sourceUrl": "https://www.cls.cn/detail/2497693",
      "publishedAt": "2026-10-04T09:13:20.000Z",
      "fetchedAt": "2026-10-04T10:37:06.345Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月4日讯（记者 余诗琪）一级市场的募资端，近期又出现了一批新的动作。\n《科创板日报》记者注意到，高榕、五源资本、经纬创投、砺思资本先后推进或完成新基金募集，数十亿元级的新基金重新出现。\n比募资规模更值得注意的是，新进入这些基金的LP正在发生变化：矿业、化工、农牧、消费等传统实业资金，开始更频繁地出现在科技投资机构的出资人名单中。\n一边是过去相对谨慎的实业资金开始靠近投资；一边是已",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2fd1fb8e120f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 45,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
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
          "score": 18,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 49,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null,
      "attentionScore": 45,
      "llmScores": [
        55,
        34
      ],
      "scoredBy": "llm"
    },
    {
      "title": "Truist比较Meta Muse与OpenAI Dots：Meta先赢在分发，OpenAI更偏企业和复杂任务",
      "sourceUrl": "https://www.36kr.com/newsflashes/4011299198898310",
      "publishedAt": "2026-10-04T09:10:19.000Z",
      "fetchedAt": "2026-10-04T10:37:06.708Z",
      "timeConfidence": "source",
      "summary": "Truist Securities认为，Meta正在新兴AI Agent市场取得早期优势，但这种优势主要来自其庞大的消费者用户基础和广告生态，而不是底层模型能力本身。相比之下，OpenAI和Google在开放式推理等能力上可能更强，但在产品定位和分发方式上，与Meta走的是不同路线。Meta的Muse和OpenAI新推出的Dots分别从两个方向切入市场。Muse首先面向普通消费者，并开始向小企业扩",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_64cbf928d754",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 17,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 0,
        "recency": 13,
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
          "score": 16,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 38,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 25,
          "reasons": [
            "命中关联主题 1 项",
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
      "attentionScore": 17,
      "llmScores": [
        16,
        17
      ],
      "scoredBy": "llm"
    },
    {
      "title": "大空头对大空头：OpenAI是市场最大风险",
      "sourceUrl": "https://wallstreetcn.com/charts/41959977",
      "publishedAt": "2026-10-04T08:56:58.000Z",
      "fetchedAt": "2026-10-04T10:34:26.115Z",
      "timeConfidence": "source",
      "summary": "电影《大空头》原型之一，以成功预测2008年金融危机而闻名的Steve Eisman认为，关于服务器折旧年限（如从3-4年延长至5-6年）的讨论过于学术化。\n\n因为若AI繁荣，实际业务增长将远超会计细节的影响；若OpenAI等巨头失败引发行业倒退，大跌也是源于业务本身而非折旧政策。\n\n核心逻辑在于：决定市场走向的是AI的成败，而非会计账面调整。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c285ea85f841",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 69,
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
          "score": 38,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 25,
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
      "title": "国庆假期前三日，港珠澳大桥出入境客流超31万人次",
      "sourceUrl": "https://www.36kr.com/newsflashes/4011291910213765",
      "publishedAt": "2026-10-04T08:49:32.000Z",
      "fetchedAt": "2026-10-04T10:37:06.708Z",
      "timeConfidence": "source",
      "summary": "国庆假期前三日，据港珠澳大桥边检站数据统计，经港珠澳大桥珠海公路口岸出入境客流超31万人次，车流超7万辆次。作为“港车北上”“澳车北上”“粤车南下”唯一指定通道，经大桥跨境车流持续高位运行。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a4775f924433",
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
      "title": "美国国家情报总监出任白宫AI事务主管",
      "sourceUrl": "https://www.36kr.com/newsflashes/4011224384917638",
      "publishedAt": "2026-10-04T08:16:16.000Z",
      "fetchedAt": "2026-10-04T10:37:06.708Z",
      "timeConfidence": "source",
      "summary": "据美国方面10月3日消息，美国总统特朗普已任命国家情报总监杰伊·克莱顿为白宫人工智能事务主管。据悉，克莱顿将领导“超级智能工作组”，在120天内提交一份有关人工智能风险和机遇的报告。根据特朗普9月29日签署的一项行政令，联邦行政部门和机构将把“人工智能”改称为“超级智能”。克莱顿表示，成立工作组旨在保护公众利益，以及保持美国在人工智能领域的领先地位。工作组成员包括副总统万斯、国防部长赫格塞思、财政",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_ded24100599a",
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
      "title": "贵州晴隆：即日起二十四道拐观景台、展览馆景区免收门票",
      "sourceUrl": "https://www.cls.cn/detail/2497680",
      "publishedAt": "2026-10-04T08:07:34.000Z",
      "fetchedAt": "2026-10-04T10:37:06.345Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯，据贵州晴隆县人民政府网站，10月4日，贵州晴隆县人民政府发布关于二十四道拐景区服务管理相关情况的通报：\n近期，关于我县二十四道拐景区收费问题引发社会关注，我们高度重视，诚恳接受网友和游客的监督。10月3日，县人民政府认真吸纳网友和游客意见建议，组织相关部门专题研究，决定从即日起，二十四道拐观景台、展览馆景区免收门票，面向社会公众免费开放，并将公众关注的有关问题说明如下：\n二十四",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4c7246f9af2e",
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
      "title": "黄仁勋拍卖“原味皮衣”",
      "sourceUrl": "https://wallstreetcn.com/charts/41959976",
      "publishedAt": "2026-10-04T08:01:45.000Z",
      "fetchedAt": "2026-10-04T10:34:26.116Z",
      "timeConfidence": "source",
      "summary": "AI时代，英伟达CEO穿过的皮衣，也成了“奢侈品”。\n\n9月28日，黄仁勋在纽约出席美韩协会晚宴并获颁奖项，现场换上一件全新的Tom Ford皮衣并签名拍卖，还笑称这件皮衣“值500万美元”，并点名三星、SK集团“一把手”李在镕、崔泰源等在场富豪。\n\n据报道，这件皮衣最终以13.2万美元，约合人民币88.5万元成交。\n\n而就在今年7月，黄仁勋另一件亲穿签名皮衣曾在苏富比拍出96万美元，约合650万",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_499c7f2a2f33",
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
      "title": "都在接DeepSeek、WorkBuddy，券商AI最终靠什么拉开差距？",
      "sourceUrl": "https://www.cls.cn/detail/2497673",
      "publishedAt": "2026-10-04T07:47:43.000Z",
      "fetchedAt": "2026-10-04T10:37:06.345Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（记者 陈俊兰）近两个月，券商最密集的动作是“入驻”。\n9月2日，腾讯WorkBuddy开放平台正式上线，广发证券成为首家入驻该生态专区的券商机构，双方联合发布“广发证券”Buddy应用专区，首批上线12项自研Skill与9项专家能力；9月7日，阿里千问开放平台上线十余款金融智能体，其中国泰海通“灵犀”、兴业证券智能投资助手、东吴“秀财”、中金财富4款为券商智能体；9月下旬，中信",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c372069cd4ad",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 42,
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
          "score": 22,
          "reasons": [
            "命中关联主题 1 项"
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
        "深度研究"
      ],
      "eventId": null,
      "attentionScore": 42,
      "llmScores": [
        41,
        43
      ],
      "scoredBy": "llm"
    },
    {
      "title": "国信证券：9月以来外资流出港股互联网规模靠前",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593932",
      "publishedAt": "2026-10-04T07:35:11.000Z",
      "fetchedAt": "2026-10-04T10:38:30.385Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_d073bec14996",
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
          "score": 46,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
        "行业动态"
      ],
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "多个新盘开盘即售罄！上海楼市捷报频传，房企调转定价策略",
      "sourceUrl": "https://wallstreetcn.com/articles/3782980",
      "publishedAt": "2026-10-04T07:10:06.000Z",
      "fetchedAt": "2026-10-04T10:34:26.116Z",
      "timeConfidence": "source",
      "summary": "售楼处售罄的捷报接连传来，上海楼市正上演一场激烈的抢房行情。\n9月28日，绿城・悦海棠正式选房，距离开盘还有一个多小时，现场队伍早已排成长龙。281套房源，吸引1364组客户认购，认购率冲到485%。摇号结束，房源一扫而空，这是2026年上海诞生的又一个“千人摇”新盘。\n这并非孤例。9月25日中秋当天，嘉定象屿金茂满嘉二批次推出135套房源，开盘即全部售罄，认购率361%，认购仅一小时便触发积分，",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_728fe859e130",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 43,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 52,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
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
      "title": "白宫成立“超级智能”工作组，计划120天拿出AI监管方案",
      "sourceUrl": "https://wallstreetcn.com/articles/3782979",
      "publishedAt": "2026-10-04T06:37:54.000Z",
      "fetchedAt": "2026-10-04T10:34:26.116Z",
      "timeConfidence": "source",
      "summary": "美国白宫成立\"超级智能\"工作组，确立美国政府在人工智能监管中的角色定位，标志着特朗普政府在AI治理上迈出实质性一步。\n10月3日，据《华尔街日报》报道，美国国家情报总监Jay Clayton将出任\"超级智能\"工作组负责人，实际上担任特朗普的AI事务总协调人。\n报道指出，工作组须在120天内就AI风险与机遇提交报告，并就联邦政府的职责边界提出建议。Clayton表示，若美国在AI领域落后于其他国家，",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a742a9175bdc",
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
      "title": "10月A股解禁规模超3100亿元，5股解禁比例超70%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4011105424428936",
      "publishedAt": "2026-10-04T06:00:00.000Z",
      "fetchedAt": "2026-10-04T10:37:06.708Z",
      "timeConfidence": "source",
      "summary": "10月，A股市场有138家上市公司的限售股份将迎来上市流通。据统计，以9月30日收盘价计算（下同），10月解禁总市值超3100亿元。其中，共有13股解禁股份占总股本比例超过50%。具体来看，解禁比例超50%的个股为泰凯英、天元智能、长江能科、中船特气、西安奕材、奥美森、颀中科技、陕西能源、光大同创、森泰股份、百瑞吉、首药控股、禾元生物。其中，泰凯英以73.64%的解禁比例居首，天元智能、长江能科、",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_32db98e8f039",
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
        "观点",
        "快讯"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "港股IPO周报：九章云极等多家公司递表 欢创科技挂牌首周累涨约九成",
      "sourceUrl": "https://www.cls.cn/detail/2497657",
      "publishedAt": "2026-10-04T05:56:43.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（编辑 冯轶）财联社为您带来每周港股新股资讯。\n\n据利弗莫尔证券显示，本周(9月28日-10月4日)有4家公司及一只私募开放式基金向港交所递表，另有两家公司通过聆讯，一家公司招股，及5只新股上市。\n\n先看递表，本周有4家公司及一只私募开放式基金递交上市申请：\n1）9月28日，力诺药包(301188.SZ)向港交所主板递交上市申请书，招商证券国际、力高金融集团为其联席保荐人。\n据弗",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ac23a9433889",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
          "score": 56,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "中国银行成功协助韩国产业银行发行30亿元点心债",
      "sourceUrl": "https://www.36kr.com/newsflashes/4011084021845890",
      "publishedAt": "2026-10-04T05:52:26.000Z",
      "fetchedAt": "2026-10-04T06:00:05.797Z",
      "timeConfidence": "source",
      "summary": "近日，中国银行作为联席主承销商及账簿管理人，成功协助韩国产业银行发行3年期30亿元离岸人民币债券（点心债），票面利率1.69%。本次发行创下韩国产业银行最大规模离岸人民币公募债券发行纪录。中国银行表示，此次业务的成功落地，既有效帮助发行人锁定了低成本境外融资，也为中韩两国金融机构在离岸人民币债券市场的合作树立了新标杆，对丰富离岸市场发行主体结构、纵深推进人民币国际使用具有积极示范效应。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2d363e33c0cf",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 66,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 11,
        "recency": 13,
        "actionability": 8
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
          "score": 36,
          "reasons": [
            "命中关联主题 2 项"
          ]
        },
        "marketEducation": {
          "score": 84,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "券商热衷拿哪些新牌照？年内全梳理，业务逻辑是第一驱动力",
      "sourceUrl": "https://www.cls.cn/detail/2497656",
      "publishedAt": "2026-10-04T05:50:48.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（记者 林坚）对券商来说，无论是获取新业务牌照，还是调整自身现有业务牌照结构，都是提升经营能力的有效方式。经财联社梳理发现，进入2026年以来，券商对业务牌照的规划已经发生了不少新的变化。\n最新一个案例是东北证券。今年4月，东北证券拟将全资子公司东证融汇开展的资产证券化业务（ABS），全面整合至公司投行管理总部，同时减少东证融汇相应业务范围，确保母子公司业务清晰区分、避免同业竞争",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_654e05c4aff9",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 51,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 3,
        "recency": 10,
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
        "快讯线索，需结合原文判断"
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
      "attentionScore": 28,
      "llmScores": [
        30,
        25
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
      "title": "贝森特驳斥“AI末日论”：纯属危言耸听 AI实验室须自担责任",
      "sourceUrl": "https://www.cls.cn/detail/2497659",
      "publishedAt": "2026-10-04T05:50:43.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（编辑 卞纯）针对AI行业的一些知名人士关于该技术给人类带来“生存风险”的表态，美国财长贝森特周六批评并警告称，这纯属危言耸听且毫无助益，并呼吁AI行业进行自我监管并拿出解决方案。\n在一场节目中，贝森特将那些希望政府对AI设置护栏的首席执行官比作一个令人厌恶的电影角色——《沉默的羔羊》中臭名昭著的连环杀手汉尼拔。\n\n“这有点像汉尼拔·莱克特说的：‘在我再次杀人之前阻止我，’”贝森",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a23a300b06a0",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 19,
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
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null,
      "attentionScore": 19,
      "llmScores": [
        15,
        23
      ],
      "scoredBy": "llm"
    },
    {
      "title": "年薪6.6万美元起，我在数据中心当“AI保姆”",
      "sourceUrl": "https://wallstreetcn.com/articles/3782978",
      "publishedAt": "2026-10-04T05:46:17.000Z",
      "fetchedAt": "2026-10-04T05:58:43.975Z",
      "timeConfidence": "source",
      "summary": "Digital Realty阿什本数据中心首席工程师詹姆斯·沃迪。图片经由AI处理\n詹姆斯·沃迪（James Waddy）每天要走三万步。\n他的工作地点位于弗吉尼亚州阿什本一座超过9万平方米的数据中心里。每天，他都要检查空气处理设备、服务器机房、管道、电缆和屋顶冷凝器，有时还得闻一闻有没有焦味，摸一摸管道有没有异常，再看看鸟有没有把设备啄坏。\n这些听起来和AI并没有太大关系，但这里恰恰是AI算力最",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_30dd58d48df9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "前9月广州海关监管广州国际港中欧班列进出口货物2.73万标箱",
      "sourceUrl": "https://www.36kr.com/newsflashes/4011089325346696",
      "publishedAt": "2026-10-04T05:36:46.000Z",
      "fetchedAt": "2026-10-04T06:00:05.797Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，据广东发布消息，今年前9个月，广州海关监管广州国际港中欧班列277列、进出口货物2.73万标箱，同比分别增长11.2%、28.6%。这个国庆假期（10月1日至7日），广州国际港计划开行中欧班列5列，搭载货物550标箱，货值近1.53亿元人民币。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a6987b5ed706",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 29,
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
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 29,
      "llmScores": [
        28,
        30
      ],
      "scoredBy": "llm"
    },
    {
      "title": "Meta Muse爆红后遇留存瓶颈：打开率低于主流应用，长期变现面临考验",
      "sourceUrl": "https://wallstreetcn.com/articles/3782976",
      "publishedAt": "2026-10-04T05:26:50.000Z",
      "fetchedAt": "2026-10-04T05:58:43.975Z",
      "timeConfidence": "source",
      "summary": "Meta Platforms旗下AI智能体Muse上线以来下载势头强劲，但用户留存与变现能力的双重瓶颈正引发市场关注。法国巴黎银行对其长期货币化路径持审慎态度，揭示出消费级AI应用从获客到留存这一普遍性转化难题。\n据法国巴黎银行援引第三方数据，Muse自9月推出以来累计下载量已超过560万次，一度登顶苹果应用商店排行榜，上线初期在美国市场的下载表现甚至超过ChatGPT和Sora。然而，该行分析师",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ab98aa5bc4f7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
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
      "attentionScore": 29,
      "llmScores": [
        33,
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
      "title": "美银：“AI交易”是当前美债市场“最后一道防线”",
      "sourceUrl": "https://wallstreetcn.com/articles/3782975",
      "publishedAt": "2026-10-04T04:41:20.000Z",
      "fetchedAt": "2026-10-04T05:58:43.975Z",
      "timeConfidence": "source",
      "summary": "美国银行警告，AI叙事正在充当宏观风险的\"缓冲垫\"，一旦这一叙事出现裂痕，所有被压制的宏观风险将同步放大，股市将面临真正的冲击。\n美银股票衍生品团队在最新报告中指出，在注意力资源相对有限的市场环境下，宏观风险\"难以与AI增长叙事争夺市场关注\"。\nAI带来的错失恐惧（FOMO）情绪推动投资者在每次下跌时积极抄底，形成所谓的\"AI看跌期权\"效应，有效压制了股市波动。\n与此同时，Meta旗下AI智能助手",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0d91046211fd",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 48,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 23,
          "reasons": [
            "命中关联主题 1 项"
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "下周重磅日程：美伊与也门局势牵动油价、美联储纪要定价加息预期、诺贝尔奖揭晓",
      "sourceUrl": "https://wallstreetcn.com/charts/41959974",
      "publishedAt": "2026-10-04T04:15:10.000Z",
      "fetchedAt": "2026-10-04T05:58:43.975Z",
      "timeConfidence": "source",
      "summary": "下周美联储会议纪要定调12月加息预期；10年期、30年期美债合计逾610亿美元拍卖同步施压利率。美伊局势持续升温，叠加胡塞武装与沙特冲突，G7拟释放石油储备对冲供给风险，油价波动加剧。植田和男发言或为日元走势定调。世界AI峰会召开，AMD苏姿丰访韩，算力期货、英特尔涨价等AI产业链信号密集释放。诺贝尔奖五天连发，A股节后重开。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8cbf5ca3fc2f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 63,
      "rawScore": 63,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 11,
        "recency": 10,
        "actionability": 8
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
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 83,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
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
        "行业动态"
      ],
      "eventId": "event_270c3bff1a30"
    },
    {
      "title": "布局四季度，公募最新调研路径曝光，明星基金经理纷纷奔赴一线",
      "sourceUrl": "https://www.cls.cn/detail/2497647",
      "publishedAt": "2026-10-04T04:12:59.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（记者 陈永辉）9月A股在震荡中收官，公募机构密集调研上市公司，为四季度布局寻找线索。公募排排网数据显示，9月共有158家公募机构参与A股调研，累计覆盖428只个股，调研总频次达3230次。电子行业成为调研焦点，调研频次占全部调研近三成。\n据财联社记者不完全统计，富国基金朱少醒、大成基金刘旭、易方达基金杨思亮与萧楠、汇添富基金蔡志文以及易方达基金杨宗昌等多位明星基金经理密集走访上",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_adb2f7e988f8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 27,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
        "深度研究"
      ],
      "eventId": null,
      "attentionScore": 27,
      "llmScores": [
        36,
        17
      ],
      "scoredBy": "llm"
    },
    {
      "title": "商务部新闻发言人就二十国集团贸易部长会议及相关情况答记者问",
      "sourceUrl": "https://wallstreetcn.com/livenews/3173923",
      "publishedAt": "2026-10-04T04:04:17.000Z",
      "fetchedAt": "2026-10-04T05:58:43.975Z",
      "timeConfidence": "source",
      "summary": "问：9月30日至10月1日，G20贸易部长会议在美国威斯康星州密尔沃基举行。据了解，会议就反对粮食武器化议题达成联合声明，未就应对产能过剩、消除强迫劳动、调整最惠国待遇原则议题形成成果文件。请问中方如何评价本次会议？中方发挥了怎样的作用？\n\n答：本次G20贸易部长会议，成员围绕主席国美方设置的反对粮食武器化、应对产能过剩、消除强迫劳动、调整最惠国待遇原则等议题交换意见，并就粮食议题达成联合声明，其",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_24d272e42e6a",
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
      "attentionScore": 17,
      "llmScores": [
        18,
        15
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_9fd716aed68c"
    },
    {
      "title": "商务部就G20贸易部长会议及相关情况答记者问",
      "sourceUrl": "https://www.cls.cn/detail/2497646",
      "publishedAt": "2026-10-04T04:03:14.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "【商务部新闻发言人就二十国集团贸易部长会议及相关情况答记者问】财联社10月4日电，商务部新闻发言人就二十国集团贸易部长会议及相关情况答记者问。问：9月30日至10月1日，G20贸易部长会议在美国威斯康星州密尔沃基举行。据了解，会议就反对粮食武器化议题达成联合声明，未就应对产能过剩、消除强迫劳动、调整最惠国待遇原则议题形成成果文件。请问中方如何评价本次会议？中方发挥了怎样的作用？\n\n答：本次G20贸",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2ab3082270c9",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "attentionScore": 26,
      "llmScores": [
        31,
        20
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_9fd716aed68c"
    },
    {
      "title": "国庆假期前三天，海南离岛免税购物金额超3.5亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4010976947212424",
      "publishedAt": "2026-10-04T04:01:34.000Z",
      "fetchedAt": "2026-10-04T06:00:05.797Z",
      "timeConfidence": "source",
      "summary": "据海口海关统计，10月1日至3日，2026年国庆假期前三天，海口海关共监管海南离岛免税购物金额3.58亿元，参与购物人数5.51万人次，购买离岛免税商品27.70万件，比2025年同期分别增长8.85%、12.90%、8.02%。（央视新闻）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b09fb0f364b1",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 31,
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
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 31,
      "llmScores": [
        37,
        24
      ],
      "scoredBy": "llm"
    },
    {
      "title": "游资退潮，新势力霸榜，百强龙虎榜营业部正清晰变局",
      "sourceUrl": "https://www.cls.cn/detail/2497644",
      "publishedAt": "2026-10-04T03:56:39.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（记者 王晨）A股前三季度已收官，营业部龙虎榜这张观察活跃资金流向的窗口，又发生了新的变化。\n据Wind数据统计，前三季度营业部百强活跃席位合计成交30346.77亿元，上榜次数合计47597次；前十席位合计成交17459.65亿元，占百强总成交额的57.53%。与上半年相比，百强席位成交额新增约9126.77亿元，头部席位成交放大速度更快，前十席位占比从55.08%继续抬升。\n",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_db58c59f9e4f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 54,
      "rawScore": 52,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 14,
        "recency": 10,
        "actionability": 8
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
          "score": 18,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 40,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 18,
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
      "eventId": null,
      "attentionScore": 54,
      "llmScores": [
        58,
        50
      ],
      "scoredBy": "llm"
    },
    {
      "title": "黄仁勋：十杯烧酒下肚，就能轻松和男人接吻了",
      "sourceUrl": "https://wallstreetcn.com/charts/41959973",
      "publishedAt": "2026-10-04T03:48:45.000Z",
      "fetchedAt": "2026-10-04T05:58:43.975Z",
      "timeConfidence": "source",
      "summary": "在纽约GALA晚宴上，黄仁勋开玩笑说，十杯烧啤下肚后，他就能毫无障碍地亲一个韩国男人的嘴了，还说他有many粉丝，尤其是在三星供应链部门。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_86f6aa007684",
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
      "title": "港交所行政总裁：港交所要推出人民币计价黄金期货",
      "sourceUrl": "https://www.36kr.com/newsflashes/4010975721590664",
      "publishedAt": "2026-10-04T03:26:11.000Z",
      "fetchedAt": "2026-10-04T06:00:05.797Z",
      "timeConfidence": "source",
      "summary": "香港特区2026年施政报告提出将深化香港的全球离岸人民币业务和资本市场，港交所行政总裁陈翊庭2日表示，国际投资者已重新把目光投向亚洲地区，特别是中国市场，并有意做多元化资产配置，香港需要构建多元化资产生态圈，而并非只做大做强股票市场。港交所会研究推出人民币计价黄金期货。（央视财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f2cde962b4d6",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 21,
        "evidence": 6,
        "recency": 10,
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
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
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
          "score": 67,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "selectedForFeatured": true,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "中信证券：建议投资者积极迎接房地产的新周期，看好开发类公司和龙头经纪企业",
      "sourceUrl": "https://www.36kr.com/newsflashes/4010886463590273",
      "publishedAt": "2026-10-04T02:35:30.000Z",
      "fetchedAt": "2026-10-04T06:00:05.797Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，中信证券发布研报称，最近几个月，一线城市租金环比上涨，且受益于政策措施，越来越多的二手项目实现了供平过租。一线城市的这种情况，十分类似于香港2024年底的情形，是房价见底的强烈信号。政策致力于降低居民的置业负担，相对租房，买房变得越来越划算。建议投资者积极迎接房地产的新周期，看好开发类公司和龙头经纪企业。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_cddf0de5a2fb",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 32,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 6,
        "recency": 10,
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
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注"
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
        "观点",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 32,
      "llmScores": [
        27,
        36
      ],
      "scoredBy": "llm"
    },
    {
      "title": "贝森特“灭火”：美债收益率上升属全球现象，驳斥AI泡沫担忧",
      "sourceUrl": "https://wallstreetcn.com/articles/3782969",
      "publishedAt": "2026-10-04T02:27:37.000Z",
      "fetchedAt": "2026-10-04T05:58:43.975Z",
      "timeConfidence": "source",
      "summary": "美国财政部长贝森特为近期国债收益率攀升进行辩护，并对人工智能泡沫论予以驳斥，同时暗示美国政府未来或将向更多盟友国家提供金融援助。\n本周10年期美债收益率一度触及2002年以来最高水平，尽管如此，贝森特在接受媒体采访时表示，当前利率走势是全球共性现象，无需过度担忧。\n\n贝森特强调这一轮上升并非美国独有，市场没有出现抛售美债、转购德国或日本国债的迹象。\n在经济层面，他认为伊朗战争带来的外部冲击掩盖了美",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0e3ae3d70cb9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 41,
      "rawScore": 52,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 6,
        "recency": 10,
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
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 23,
          "reasons": [
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null,
      "attentionScore": 41,
      "llmScores": [
        45,
        36
      ],
      "scoredBy": "llm"
    },
    {
      "title": "【商圈】执掌南博十余年 徐湖平的两个面孔与三重角色",
      "sourceUrl": "https://database.caixin.com/2026-10-04/102490690.html",
      "publishedAt": "2026-10-04T02:25:09.000Z",
      "fetchedAt": "2026-10-04T05:58:41.638Z",
      "timeConfidence": "source",
      "summary": "2025年12月，“南京博物院馆藏《江南春》图卷现身拍卖市场”事件引发轩然大波后，徐湖平被从家中带走调查；2026年9月，徐湖平因受贿罪被判有期徒刑三年，并处罚金20万元",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e27033d0c4c7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 59,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "passesTierGate": false,
      "confidence": "medium",
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
      "attentionScore": 17,
      "llmScores": [
        13,
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
      "title": "马斯克回应台积电或参与Terafab项目",
      "sourceUrl": "https://www.36kr.com/newsflashes/4010872606035844",
      "publishedAt": "2026-10-04T02:16:52.000Z",
      "fetchedAt": "2026-10-04T06:00:05.797Z",
      "timeConfidence": "source",
      "summary": "有消息称台积电正在探索与SpaceX、特斯拉共同投资发起的Terafab项目展开合作的可能性，并考虑将Terafab作为台积电未来得克萨斯州晶圆厂的重要客户。针对相关消息，马斯克在社交媒体上回应称，仅处于讨论阶段，但“可能会有所进展”。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c01692484868",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 40,
      "rawScore": 40,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 0,
        "recency": 10,
        "actionability": 10
      },
      "evidenceBreakdown": {},
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
      "eventId": "event_07a46ed03a25"
    },
    {
      "title": "美银Hartnett：2000年3月“科网泡沫”峰值前6个月，只有科技和通信板块在涨，和当下“如出一辙”",
      "sourceUrl": "https://wallstreetcn.com/articles/3782974",
      "publishedAt": "2026-10-04T01:57:46.000Z",
      "fetchedAt": "2026-10-04T05:58:43.975Z",
      "timeConfidence": "source",
      "summary": "美银证券首席投资策略师Michael Hartnett发出警示：当前市场结构与2000年科网泡沫破裂前夕高度吻合，同时他建议投资者开始逢低买入债券。\n在最新一期《Flow Show》报告中，Hartnett指出，在2000年3月科网泡沫峰值前的六个月里，科技板块涨幅超过40%，而必需消费品板块下跌30%，除科技和电信以外的所有板块均告下跌。他表示，这一格局与当下市场走势\"如出一辙\"。与此同时，标普",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_27ef392a31b4",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 73,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 69,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 3 项",
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
      "title": "孟加拉国将从“最不发达国家”毕业，投资窗口打开了吗？|问海",
      "sourceUrl": "https://www.yicai.com/news/103384205.html",
      "publishedAt": "2026-10-04T01:56:42.000Z",
      "fetchedAt": "2026-10-04T05:58:57.872Z",
      "timeConfidence": "source",
      "summary": "孟加拉国组建了直属总理办公室的\"新版\"最高投资促进机构。孟加拉国有望于2026年11月从最不发达国家行列“毕业”。随着今年2月孟加拉国新总理塔里克就职，该国结束了几年来的政治动荡，越来越多的国际投资者开始思考南亚第二大经济体的投资前景。以往孟加拉国投资中的繁文缛节，是国际投资者“吐槽”最多的问题。有投资者告诉第一财经记者，企业落地的过程中，他一直在跑各个职能部门收集“图章”，身心俱疲。好在塔里克政",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_aa4e7932ec46",
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
      "title": "连续10天，《人民日报》刊发金轩署名文章",
      "sourceUrl": "https://www.cls.cn/detail/2497626",
      "publishedAt": "2026-10-04T01:56:16.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "10月4日，《人民日报》继续刊发金轩署名文章《加快建设强大国内市场》。\n至此，《人民日报》已连续刊发金轩署名文章10篇。\n9月25日\n北斗为新兴支柱产业打造重要增长极\n金 轩\n当前，世界百年未有之大变局加速演进，新一轮科技革命和产业变革蓬勃兴起，全球科技创新与产业竞争格局深刻调整。我国经济转向高质量发展阶段，新旧动能转换任务艰巨。“十五五”时期，培育壮大新兴产业和未来产业，既是推动经济实现质的有效",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c77980527bfe",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "noiseCaps": [
        "时间性盘点"
      ],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "管涛：浅谈“贸易顺差、资本外流”的经济与政策涵义｜国庆大咖谈",
      "sourceUrl": "https://www.yicai.com/news/103384204.html",
      "publishedAt": "2026-10-04T01:55:39.000Z",
      "fetchedAt": "2026-10-04T05:58:57.872Z",
      "timeConfidence": "source",
      "summary": "中国是结构性的“贸易顺差、资本外流”，故贸易顺差不意味着人民币必然升值，资本流出也不意味着人民币必然贬值。当前中国经济运行延续总体平稳、向新向优发展态势，但国内供强需弱矛盾突出，经济稳中向好的基础还需巩固。\n\n有观点认为，现在中国企业外贸顺差过万亿美元，但货物出去钱没回来，国家外汇储备没有相应增加。这表明市场主体对经济缺乏信心，是导致国内投资和消费需求疲软，物价低位运行的重要原因。有人建议，要么恢",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_88678cee43ed",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "美国据悉将向维斯特拉公司提供42亿美元贷款，以提升核电产能",
      "sourceUrl": "https://www.36kr.com/newsflashes/4010875784089732",
      "publishedAt": "2026-10-04T01:39:30.000Z",
      "fetchedAt": "2026-10-04T06:00:05.797Z",
      "timeConfidence": "source",
      "summary": "知情人士周六表示，美国将向维斯特拉公司提供约42亿美元贷款，以提升其核电发电量。该消息人士称，美国能源部长赖特将于周一在位于俄亥俄州伊利湖畔的维斯特拉核电站宣布这一消息。这笔贷款将用于提高发电量，即对维斯特拉旗下四座核电站中的至少三座进行“功率提升”，此举无需获得美国核管理委员会的新许可。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0dde430efa9f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 39,
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
      "eventId": null,
      "attentionScore": 39,
      "llmScores": [
        39,
        38
      ],
      "scoredBy": "llm"
    },
    {
      "title": "南美洲“最重要选举”今日开启：巴西大选决定“左右路线”，卢拉团队指责美国干预，华尔街押小博索纳罗",
      "sourceUrl": "https://wallstreetcn.com/articles/3782970",
      "publishedAt": "2026-10-04T01:30:18.000Z",
      "fetchedAt": "2026-10-04T05:58:43.975Z",
      "timeConfidence": "source",
      "summary": "巴西1.6亿选民周日走进投票站，在这场被外界视为南美洲当前最重要选举中，现任总统卢拉与右翼挑战者弗拉维奥·博索纳罗（Flávio Bolsonaro）之间的对决，将直接决定这个拉美最大经济体的政治路线走向。\n最新民调显示两人势均力敌。Datafolha周六公布的调查显示，在有效票口径下，卢拉以45%对42%微弱领先；Quaest的数据则更为接近，两人分别为46%与45%，均在误差范围之内。\n市场普",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3405c8e141c4",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "超3亿消费券、2万场活动，“补贴+贴息”激发假日消费活力",
      "sourceUrl": "https://www.36kr.com/newsflashes/4010865555410821",
      "publishedAt": "2026-10-04T01:03:25.000Z",
      "fetchedAt": "2026-10-04T06:00:05.797Z",
      "timeConfidence": "source",
      "summary": "国庆假期，国家消费品以旧换新政策叠加地方配套补贴，国补和地补协同发力，有效激活节日市场消费活力。今年第四批625亿元超长期特别国债支持消费品以旧换新资金赶在国庆假期前落地，点燃“十一”长假消费热情。今年国庆假期，依托1000亿元财政金融协同促内需专项资金，个人消费贷款贴息政策正加速落地，政策红利充分释放，节日市场消费活力持续迸发。据了解，在国庆文化和旅游消费月期间，各地将举办超2万场次文旅活动，发",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c5bba39834ff",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "从百慕大起飞，一架私人飞机失联",
      "sourceUrl": "https://www.cls.cn/detail/2497614",
      "publishedAt": "2026-10-04T00:37:57.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "据央视新闻，一架载有6人的飞机在百慕大飞往波士顿途中失联。\n当地时间10月3日，美国海岸警卫队当天表示，一架载有6人的私人飞机在百慕大飞往波士顿途中失联。\n美国海岸警卫队发言人表示，美国联邦航空管理局当天早些时候通知海岸警卫队，该飞机与地面失去联系。这架飞机为一架用于医疗转运的“湾流”公务机。\n美国海岸警卫队已派出空中和海上搜救力量，在马萨诸塞州南部楠塔基特岛附近海域展开搜寻。据了解，楠塔基特岛是",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c862685ffde3",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 16,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "eventId": null,
      "attentionScore": 16,
      "llmScores": [
        12,
        20
      ],
      "scoredBy": "llm"
    },
    {
      "title": "中东局势升级！胡塞武装称袭击沙特石油设施 原油供应前景又生变？",
      "sourceUrl": "https://www.cls.cn/detail/2497608",
      "publishedAt": "2026-10-04T00:37:35.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（编辑 卞纯）周末，中东局势再次出现升级，胡塞武装称打击了沙特首都的石油设施。在中东石油出口规模恢复至接近伊朗战争之前的水平之际，这为油市供应前景增添了不确定性。\n综合央视新闻等媒体报道，也门胡塞武装当地时间3日(周六）晚发表声明说，为回应沙特方面对萨那及也门其他地区的空袭，胡塞武装当天使用多枚弹道导弹和无人机，对位于沙特首都利雅得的阿美石油公司目标实施打击。\n声明称，此次行动“",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_dbd34b91a7ab",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "title": "下周外盘看点丨美联储最新会议纪要暗藏玄机，欧洲债市下一个引爆点是法国？",
      "sourceUrl": "https://www.yicai.com/news/103384192.html",
      "publishedAt": "2026-10-04T00:24:38.000Z",
      "fetchedAt": "2026-10-04T05:58:57.872Z",
      "timeConfidence": "source",
      "summary": "霍尔木兹海峡局势能否降温。本周国际市场风云变幻，非农爆冷美联储加息预期骤降。市场方面，美股涨跌互现，道指周跌1.26%，纳指周涨0.45%，标普500指数周跌0.27%。欧股全线下挫，英国富时100指数周跌2.18%，德国DAX 30指数周跌0.70%，法国CAC 40指数周跌2.24%。下周看点颇多，市场将重点关注美联储会议纪要。美国就业数据走弱，削弱了本月就再度加息的可能性，投资者借此研判美联",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_89648418ac8c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 83,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
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
      "title": "崔东树：9月美股汽车整车企业市值环比降5% 港股降11% A股降4%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593873",
      "publishedAt": "2026-10-04T00:05:09.000Z",
      "fetchedAt": "2026-10-04T06:01:39.974Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_198de3964b7c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 83,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
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
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "【早报】外交部：中方欢迎普京总统出席APEC深圳峰会；商务部对原产于欧盟的进口对硝基甲苯发起反倾销调查",
      "sourceUrl": "https://www.cls.cn/detail/2497600",
      "publishedAt": "2026-10-03T23:00:00.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "宏观新闻\n1、外交部发言人郭嘉昆昨日答记者问。有记者提问称，据俄罗斯媒体报道，普京总统表示下个月在亚太经合组织（APEC）领导人非正式会议期间与习近平主席的会晤将取得积极成果。郭嘉昆表示，元首外交的战略引领是中俄关系行稳致远的最重要政治保障。中方欢迎普京总统出席今年11月将在深圳举行的APEC领导人非正式会议，愿同俄方一道，共同推动APEC“中国年”取得丰硕成果。\n2、商务部昨日对原产于欧盟的进口",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_03e65e3b6848",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "noiseCaps": [
        "时间性盘点"
      ],
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断"
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
      "title": "雀巢印度一款产品样本被食品监管机构认定为不安全",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3593840",
      "publishedAt": "2026-10-03T21:53:03.000Z",
      "fetchedAt": "2026-10-04T06:01:39.974Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_172e04d98cc2",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 14,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 6,
        "recency": 10,
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null,
      "attentionScore": 14,
      "llmScores": [
        13,
        14
      ],
      "scoredBy": "llm"
    },
    {
      "title": "俄罗斯股市收低；截至收盘MOEX Russia Index基本持平",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593839",
      "publishedAt": "2026-10-03T21:20:15.000Z",
      "fetchedAt": "2026-10-04T06:01:39.974Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_430f85a57c29",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "title": "美国中期选举前瞻：对股市的潜在影响分析",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593837",
      "publishedAt": "2026-10-03T20:33:43.000Z",
      "fetchedAt": "2026-10-04T06:01:39.974Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_09d5f054b844",
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
      "title": "AI投资如何产生异常巨大的乘数效应",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593834",
      "publishedAt": "2026-10-03T20:21:01.000Z",
      "fetchedAt": "2026-10-04T06:01:39.974Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_d8aab6da3ab4",
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
      "title": "环球下周看点：美股进入传统强势季节 美联储纪要登场 财报季开始预热",
      "sourceUrl": "https://www.cls.cn/detail/2497593",
      "publishedAt": "2026-10-03T19:19:30.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（编辑 夏军雄）进入传统表现较强的第四季度后，美股正面临高油价、高美债收益率以及AI资本开支预期等多重考验。\n本周市场内部明显分化，科技股延续强势，英伟达创下历史新高，美光科技强劲财报也推动半导体板块反弹，纳指一度刷新纪录，标普500指数距离8月中旬创下的历史高点仅约1%。\n相比之下，对利率和经济周期更加敏感的板块表现疲弱。持续数周的全球债券抛售推动美国长期国债收益率大幅走高，1",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d911e70dc94e",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 24,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 14,
        "recency": 10,
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
      "confidence": "high",
      "why": [
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 27,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 6 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 36,
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
      "attentionScore": 24,
      "llmScores": [
        25,
        22
      ],
      "scoredBy": "llm"
    },
    {
      "title": "AI数据中心建设加速之际 地方阻力从美国蔓延至欧洲和亚洲",
      "sourceUrl": "https://www.cls.cn/detail/2497590",
      "publishedAt": "2026-10-03T16:51:23.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（编辑 夏军雄）随着人工智能（AI）数据中心对电力、水资源和土地的需求快速增加，美国围绕数据中心建设的争议正在向欧洲和亚洲蔓延。越来越多项目面临当地居民反对、更严格的审批要求乃至暂停建设，这给全球AI基础设施投资增加了新的成本和不确定性。\n据STL Partners研究，公众反对已经影响欧洲约420亿美元的数据中心投资，涉及项目延期和取消，美国受影响的投资规模约为770亿美元。\n",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9e15ced5dc01",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 35,
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
          "score": 18,
          "reasons": [
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 18,
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
      "eventId": null,
      "attentionScore": 35,
      "llmScores": [
        29,
        41
      ],
      "scoredBy": "llm"
    },
    {
      "title": "美司法部长：不会重启对鲍威尔的刑事调查 翻修项目问责仍将继续",
      "sourceUrl": "https://www.cls.cn/detail/2497580",
      "publishedAt": "2026-10-03T16:05:48.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "财联社10月4日讯（编辑 夏军雄）当地时间周五（10月2日），美国司法部长托德·布兰奇表示，不会重新启动针对前美联储主席杰罗姆·鲍威尔的刑事调查。\n此前，美国司法部围绕鲍威尔就美联储总部翻修项目向国会作证的内容及相关项目记录展开刑事调查。\n本周，美联储监察长办公室公布了一份有关美联储总部翻修项目的报告。这项评估于2025年7月应鲍威尔本人要求启动。报告未发现合理依据认为该项目存在需要移交司法部长处",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d1eedc381720",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "eventId": "event_090656555f3a"
    },
    {
      "title": "特朗普威胁韩国",
      "sourceUrl": "https://www.cls.cn/detail/2497585",
      "publishedAt": "2026-10-03T14:59:41.000Z",
      "fetchedAt": "2026-10-04T06:00:05.614Z",
      "timeConfidence": "source",
      "summary": "据新华社，美国总统特朗普10月2日威胁说，如果韩国不同意投资一个阿拉斯加液化天然气项目，美国将向韩国收取更高费用。\n据法新社报道，特朗普9月30日宣布韩国约2000亿美元对美投资计划。该计划包括美国阿拉斯加州的一个液化天然气管道项目。\n据韩联社报道，关于该液化天然气项目，韩国产业通商资源部长官金正官10月1日表示，对美投资项目应以“商业合理性”为前提，若不具备商业可行性，将不会推进。韩国政府表示，",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1140c755994e",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 21,
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
          "score": 18,
          "reasons": [
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 18,
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
      "eventId": null,
      "attentionScore": 21,
      "llmScores": [
        22,
        20
      ],
      "scoredBy": "llm"
    },
    {
      "title": "美国拟向Vistra提供42亿美元贷款，助力扩大核电产能",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593818",
      "publishedAt": "2026-10-03T13:39:07.000Z",
      "fetchedAt": "2026-10-03T16:33:57.626Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_b80893db54c7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "马斯克回应！Terafab与台积电谈上了，此前已牵手英特尔",
      "sourceUrl": "https://www.cls.cn/detail/2497574",
      "publishedAt": "2026-10-03T12:41:25.000Z",
      "fetchedAt": "2026-10-03T13:30:31.113Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月3日讯（编辑 朱凌）马斯克的芯片超级工厂Terafab，又有新消息。\n据最新爆料，台积电正在探索与SpaceX、特斯拉共同投资发起的Terafab项目展开合作的可能性，并考虑将Terafab作为台积电未来得克萨斯州晶圆厂的重要客户。\n针对相关消息，马斯克在社交媒体上回应称，仅处于讨论阶段，但“可能会有所进展”。\n若双方最终达成合作，台积电或将参与Terafab在得州的芯片制造项",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2665dacc4e01",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 43,
      "rawScore": 43,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
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
        "深度研究"
      ],
      "eventId": "event_07a46ed03a25"
    },
    {
      "title": "川渝上市公司前三季度股价图鉴：汽车白酒等待价值重估，半导体新材料成“领头羊”",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593808",
      "publishedAt": "2026-10-03T12:36:00.000Z",
      "fetchedAt": "2026-10-03T13:34:04.081Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_9c2942fbbb98",
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
      "title": "雷诺计划未来五年在法国投资逾100亿欧元用于电动汽车生产",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3593803",
      "publishedAt": "2026-10-03T12:05:59.000Z",
      "fetchedAt": "2026-10-03T13:34:04.081Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_32f737da5f05",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "eventId": null,
      "attentionScore": 13,
      "llmScores": [
        14,
        12
      ],
      "scoredBy": "llm"
    },
    {
      "title": "新股前瞻|广晟大宝山半年净赚9.76亿：一座矿山撑全部利润，资源是壁垒也是软肋",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593802",
      "publishedAt": "2026-10-03T12:05:12.000Z",
      "fetchedAt": "2026-10-03T13:34:04.081Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_c160fc5cb206",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "付鹏：近期欧元、日元与澳元观察【数据图表】",
      "sourceUrl": "https://wallstreetcn.com/premium/articles/3782968?layout=wscn-layout",
      "publishedAt": "2026-10-03T11:18:31.000Z",
      "fetchedAt": "2026-10-03T13:29:34.644Z",
      "timeConfidence": "source",
      "summary": "《付鹏说·第七季》全新升级上线！立即订阅\n\n&nbsp;\n最新数据显示，欧元非商业多头已自高位持续回落至 20 万手附近，而非商业空头（橙线）呈现直线拉升，突破 30 万手大关，超越了 2015 年的历史峰值，欧元汇率在技术上受制于长期收敛通道上轨，难以向上有效突破；\n\n&nbsp;\n同时，投机性空头头寸出现罕见的历史级堆积，反映出市场对美欧经济预期差、欧美央行政策节奏差异达成了极高一致性的做空偏",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8db5735d6754",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
      "rawScore": 53,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
      "eventId": null
    },
    {
      "title": "东航报案",
      "sourceUrl": "https://www.cls.cn/detail/2497551",
      "publishedAt": "2026-10-03T11:14:20.000Z",
      "fetchedAt": "2026-10-03T13:30:31.113Z",
      "timeConfidence": "source",
      "summary": "10月3日下午，中国东方航空发布情况通报：在9月28日MU6741航班客舱事件前期复盘调查基础上，公司已基本完成证据固定、事实核查与法律评估工作。\n公司认为，该航班旅客欧某某相关行为涉嫌扰乱民用航空器内秩序，严重侵害公司员工人格尊严和履职权益。针对上述侵权扰序行为，公司已正式向公安机关报案。\n公司正积极配合有关部门开展调查取证工作，依法维护员工合法权益和公共安全秩序。依据公司旅客承运管理制度，为确",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ab0796a0c4f5",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "港交所的锣又不够敲？内地ETF集中上市，出海为何按下加速键？",
      "sourceUrl": "https://www.cls.cn/detail/2497550",
      "publishedAt": "2026-10-03T10:59:23.000Z",
      "fetchedAt": "2026-10-03T13:30:31.113Z",
      "timeConfidence": "source",
      "summary": "财联社10月3日讯（记者 周晓雅）香港ETF发行市场，正被境内公募基金子公司改写。\n财联社记者统计港交所数据了解到，过去的9月，港交所新上市22只ETF，为年内最高单月，发行商大多是境内公募基金的香港子公司。9月还出现一天8只同日挂牌，同样刷新年内单日纪录。\n月频与日频的新纪录，拉动前三季度港交所新上市ETF数量攀升。年内51只新上市ETF中，超半数由境内公募基金香港子公司发行，这成为当前境内公募",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6620c3fda2a3",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 57,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 68,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项"
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
      "title": "有人想离开，也有人排队等着进：空乘下跪事件背后的职业围城",
      "sourceUrl": "https://www.yicai.com/news/103384104.html",
      "publishedAt": "2026-10-03T10:09:22.000Z",
      "fetchedAt": "2026-10-03T13:29:41.787Z",
      "timeConfidence": "source",
      "summary": "当服务人员处在消费者、平台规则或者企业考核的夹层里时，他们也应当有正常说“不”的权利。杨楠至今记得，自己在航空公司辞职前的一段“痛苦时光”。因为一件无法被证实、来自旅客事后一面之词的投诉，她一边飞行一边接受公司处罚，这给她带来了巨大的心理压力。“这个行业对乘务员太苛刻了。”看到东航乘务员跪在客舱过道上的视频时，她第一反应不是惊讶，而是熟悉。在杨楠看来，一线乘务员日常面对的并不只是旅客，还有身后的考",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_98619b832db1",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 51,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
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
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "前三季度哪些基金业绩最差？追错方向，多只逼近腰斩",
      "sourceUrl": "https://www.cls.cn/detail/2497541",
      "publishedAt": "2026-10-03T10:07:31.000Z",
      "fetchedAt": "2026-10-03T13:30:31.113Z",
      "timeConfidence": "source",
      "summary": "财联社10月3日讯（记者 李迪）三季度已收官，多只主动权益基金在市场震荡中亏损加剧，甚至逼近腰斩。\nChoice数据显示，今年前三季度，闫思倩旗下鹏华制造升级混合A的回报为-49.74%，在主动权益基金中排名倒数第一。该产品二季度追高AI板块，7月大跌36.79%。\n鹏华制造升级混合A并非个例，还有部分绩差基金也因二季度追高AI而接近腰斩。于腾达管理的国泰金鑫股票A、国泰成长优选混合的前三季度亏损",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_33332a6f5423",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 34,
      "rawScore": 75,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 77,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 55,
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
        "深度研究"
      ],
      "eventId": null,
      "attentionScore": 34,
      "llmScores": [
        38,
        30
      ],
      "scoredBy": "llm"
    },
    {
      "title": "AI正在让美债崩溃 即便最后成功也将被征收重税",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782772",
      "publishedAt": "2026-10-03T09:51:38.000Z",
      "fetchedAt": "2026-10-03T13:29:34.644Z",
      "timeConfidence": "source",
      "summary": "9月24日，美国长债全线崩跌。30年期国债收益率升至5.48%，创二十年新高；10年期突破5.2%，创金融危机以来新高。长端收益率过去两个月几乎是直线拉升，财政部长贝森特两次加码回购干预，每次只换来一天的喘息，第二天就被市场打回原形。\n赤字太大、油价太高、美联储重新加息——这些都是真实的背后推力，但都不是这一轮的新变量。真正让这一轮不同以往的，是需求端杀出了一个根本不问价格的对手。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e815ca848dca",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "noiseCaps": [
        "无口径收益宣传"
      ],
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
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
          "score": 40,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "Anthropic研究员：2030年代，普通人或比今天的富豪过得更好",
      "sourceUrl": "https://wallstreetcn.com/charts/41959972",
      "publishedAt": "2026-10-03T09:45:18.000Z",
      "fetchedAt": "2026-10-03T13:29:34.644Z",
      "timeConfidence": "source",
      "summary": "Anthropic强化学习团队的技术负责人Sholto Douglas表示，AI可能把原本需要几百年的技术进步压缩到未来几十年，最终把人类带入“后稀缺社会”。 AI和机器人将大幅提升生产力，让住房、商品等成本逐渐接近能源成本，普通人的生活水平甚至可能超过今天的富豪。如果AI算力投入继续高速增长，到2030年代初，AI带来的生产能力甚至可能相当于再造一个全球GDP。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_00a4a5d91a88",
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
          "score": 19,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 10,
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
      "title": "蓝佛安最新署名文章",
      "sourceUrl": "https://www.cls.cn/detail/2497534",
      "publishedAt": "2026-10-03T08:41:45.000Z",
      "fetchedAt": "2026-10-03T09:53:01.346Z",
      "timeConfidence": "source",
      "summary": "最新一期《求是》杂志刊发财政部党组书记、部长蓝佛安署名文章《精准有效实施更加积极的财政政策》。\n精准有效实施更加积极的财政政策\n蓝佛安\n实施更加积极的财政政策，是以习近平同志为核心的党中央深刻把握我国经济运行规律和国内外环境变化，统筹当前和长远、发展和安全作出的重要部署。今年7月30日召开的中央政治局会议进一步强调，要实施好更加积极的财政政策和适度宽松的货币政策，充分发挥各项存量政策效能，及时谋划",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4dedec211c0e",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "title": "美股四季度“逼空”信号浮现：CTA仓位大撤退，1.3万亿美元回购蓄势待发",
      "sourceUrl": "https://wallstreetcn.com/articles/3782965",
      "publishedAt": "2026-10-03T08:41:40.000Z",
      "fetchedAt": "2026-10-03T09:50:33.595Z",
      "timeConfidence": "source",
      "summary": "美股量化基金刚刚完成一次罕见的仓位大清洗。\nCTA（趋势跟踪量化基金）合计持仓从8月底的极度超配骤降至略偏空头，一个月内摆幅超过3个标准差——近年来几乎没有先例。卖盘释放，潜在买盘空间大幅打开。\n与此同时，美国企业今年已授权创纪录的1.3万亿美元回购，执行窗口将从10月15日起陆续重开。\n仓位清洗、回购弹药就位、中期选举年四季度的强势季节性——逼空条件正在成型。\n仓位已清、弹药待发\n据策略师Rub",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d16169f56c2c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 35,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
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
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "high",
      "why": [
        "专业财经媒体跟进",
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
          "score": 54,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 100,
          "reasons": [
            "命中私募销售运营核心主题 4 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_f101880ef7bc",
      "attentionScore": 35,
      "llmScores": [
        28,
        42
      ],
      "scoredBy": "llm"
    },
    {
      "title": "美国CCC级利差升破1000bp！危险信号已现，信贷警报离股市还有多远？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782730",
      "publishedAt": "2026-10-03T08:34:44.000Z",
      "fetchedAt": "2026-10-03T09:50:33.595Z",
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
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 14,
        "recency": 10,
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
          "score": 36,
          "reasons": [
            "命中关联主题 2 项",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "截至8月末我国5G基站总数超519万个",
      "sourceUrl": "https://www.36kr.com/newsflashes/4009876977979267",
      "publishedAt": "2026-10-03T08:17:47.000Z",
      "fetchedAt": "2026-10-03T09:53:51.664Z",
      "timeConfidence": "source",
      "summary": "工业和信息化部日前发布的数据显示，今年前8个月，我国电信业务总量稳步增长，5G等网络建设和应用不断推进。其中，截至8月末，5G基站总数达519.5万个，占移动基站总数的39.7%。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_1008546be714",
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
      "title": "9月AI债发行突然“踩刹车”，大摩判断：四季度或卷土重来",
      "sourceUrl": "https://wallstreetcn.com/articles/3782964",
      "publishedAt": "2026-10-03T07:59:27.000Z",
      "fetchedAt": "2026-10-03T09:50:33.595Z",
      "timeConfidence": "source",
      "summary": "9月全球AI相关债券发行仅约230亿美元，为今年次低月份。美国投资级市场AI发行直接\"挂零\"。\n摩根士丹利将这一放缓定性为\"暂停而非退潮\"，预计四季度发行将回升，但不会重现上半年的爆发式增长。\n截至9月底，今年全球AI相关债券发行总额已达4660亿美元，是去年全年2160亿美元的两倍以上。\n大摩在最新报告中分析称，9月降温的原因并非基本面恶化或资本短缺——前期发行大幅前置、数据中心建设遭遇监管政治",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d7f717cb2c6d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 46,
      "rawScore": 79,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
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
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "high",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 39,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 74,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 54,
          "reasons": [
            "命中关联主题 3 项",
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
      "attentionScore": 46,
      "llmScores": [
        48,
        43
      ],
      "scoredBy": "llm"
    },
    {
      "title": "A股节后上涨胜率超60%，机构：持股过节或更合算！外围股市上涨，股民盼着开门红",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3593758",
      "publishedAt": "2026-10-03T07:05:55.000Z",
      "fetchedAt": "2026-10-03T09:57:12.532Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_ab2f509e249b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 20,
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
        "营销与活动推广"
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
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "欧洲市场复苏贡献增量 特斯拉第三季度交付超预期",
      "sourceUrl": "https://www.caixin.com/2026-10-03/102490583.html",
      "publishedAt": "2026-10-03T06:16:25.000Z",
      "fetchedAt": "2026-10-03T09:50:33.407Z",
      "timeConfidence": "source",
      "summary": "2026年前三季度，特斯拉销售汽车132.5万辆，全年销量有望恢复增长\n       　　【财新网】2026年第三季度，特斯拉共生产汽车46.4万辆，交付48.7万辆。美国当地时间10月2日，特斯拉（NASDAQ：TSLA）发布上述数据。\n　　特斯拉第三季度交付量同比下跌2%，但跌幅好于市场预期。高盛、摩根士丹利、巴克莱银行，瑞银等23家机构之前预计，特斯拉第三季度交付量为46.2万辆。受此影响，",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c90559c9629e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 47,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 27,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 40,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
        "行业动态"
      ],
      "eventId": null,
      "attentionScore": 47,
      "llmScores": [
        52,
        42
      ],
      "scoredBy": "llm"
    },
    {
      "title": "阿根廷推出“投资换国籍”计划",
      "sourceUrl": "https://www.36kr.com/newsflashes/4009745778512003",
      "publishedAt": "2026-10-03T06:13:11.000Z",
      "fetchedAt": "2026-10-03T09:53:51.664Z",
      "timeConfidence": "source",
      "summary": "阿根廷政府10月2日推出一项“投资换国籍”计划，申请人出资数十万美元就有可能成为这个南美洲国家公民。根据方案，一名申请入籍者需要向阿根廷直接投资至少35万美元，且不可退还；或购买80万美元公共债券。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_1c0262b5bdc4",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 56,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "title": "交付超预期难改盈利压力！摩根大通：特斯拉盈利或从2028年开始加速",
      "sourceUrl": "https://wallstreetcn.com/articles/3782960",
      "publishedAt": "2026-10-03T05:45:59.000Z",
      "fetchedAt": "2026-10-03T09:50:33.595Z",
      "timeConfidence": "source",
      "summary": "特斯拉三季度交付48.65万辆、超出市场共识约5%，但摩根大通在数据公布后维持中性评级和415美元目标价，摩根大通认为，特斯拉交付亮眼难掩近期盈利压力，EPS拐点要等到2028年，届时或开启50%以上的年复合增长。\n投资者在此之前面对的是一段利润率压缩期。摩根大通对特斯拉2026年和2027年的调整后EPS预测分别为1.43美元和1.45美元，大幅低于彭博共识的1.65美元和2.22美元。\n按当前",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_eae78827dee8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 46,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注"
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
      "title": "央视曝光租车公司划车骗赔偿",
      "sourceUrl": "https://www.36kr.com/newsflashes/4009689054040198",
      "publishedAt": "2026-10-03T05:44:28.000Z",
      "fetchedAt": "2026-10-03T09:53:51.664Z",
      "timeConfidence": "source",
      "summary": "近年来，网上频现低价租车广告，一些商家制作精美视频，并挂出“99元租豪车”等超低价位吸引顾客下单。然而，“99元一天”很多都是裸车价，顾客提车时，保险、服务费、异地还车费等需要另外收钱，到店还会强制推销高价保险。当租车价格明显低于市场价，且租车页面存在大量“小字限制”，一定要加以警惕，同时，消费者在比价时，一定要对比全包总价，不要被“大字广告”迷惑。近日，四川成都锦江区人民法院审理了一起案件，四名",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8eacab0485b8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 22,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
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
          "score": 40,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 40,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null,
      "attentionScore": 22,
      "llmScores": [
        18,
        26
      ],
      "scoredBy": "llm"
    },
    {
      "title": "苹果确认：iPhone 18 Pro Max有问题",
      "sourceUrl": "https://www.cls.cn/detail/2497509",
      "publishedAt": "2026-10-03T05:28:38.000Z",
      "fetchedAt": "2026-10-03T09:53:01.346Z",
      "timeConfidence": "source",
      "summary": "据中新经纬援引外媒报道，美版iPhone 18 Pro Max出现断网问题，苹果公司确认，只能通过换机解决。\n北京时间10月3日，彭博社报道称，苹果公司表示，最近升级到该公司iPhone 18 Pro Max的“少量”AT&amp;T公司用户将需要更换设备，因为一个故障导致他们失去了蜂窝网服务。\n据报道，这款售价1299美元的手机两周前上市，是苹果除即将推出的折叠屏手机iPhone Duo之外的最",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_13be37f366a6",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "推动科技型企业孵化器高质量发展，浙江印发五年行动方案",
      "sourceUrl": "https://www.36kr.com/newsflashes/4009682383818624",
      "publishedAt": "2026-10-03T05:16:39.000Z",
      "fetchedAt": "2026-10-03T05:24:40.679Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，浙江省人民政府办公厅印发《浙江省科技型企业孵化器高质量发展行动方案（2026—2030年）》。《行动方案》明确，到2030年，全省孵化器数量突破2000家、孵化场地总面积突破2500万平方米，培育工业和信息化部孵化器200家、省级孵化器500家，引育科技型企业5万家，培育高新技术企业1万家。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b84ce159188d",
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
      "title": "分析｜巴西大选前瞻：拉美右翼浪潮会否席卷拉美第一大经济体？",
      "sourceUrl": "https://international.caixin.com/2026-10-03/102490493.html",
      "publishedAt": "2026-10-03T00:38:43.000Z",
      "fetchedAt": "2026-10-03T05:22:52.988Z",
      "timeConfidence": "source",
      "summary": "今年的巴西大选料将再次反映该国极化分裂的民意，美国的干预最终将如何作用于巴西政治格局也难以预测\n       　　【财新网】当地时间10月4日，拉美第一大经济体巴西将举行四年一度的大选，近1.6亿巴西选民将有权投票选举该国总统、州长以及国家和州级立法机构议员。\n　　该国大选同样呈现左右翼阵营对垒的态势。80岁高龄的工党候选人、现任温和左翼总统卢拉将第七次竞逐总统之职，寻求开启其第四届总统任期。\n　",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_feecc234ca1b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 13,
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
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
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
          "score": 18,
          "reasons": [
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 18,
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
      "eventId": null,
      "attentionScore": 13,
      "llmScores": [
        13,
        12
      ],
      "scoredBy": "llm"
    },
    {
      "title": "武汉全装修住宅可分阶段竣备 毛坯备案能否按揭放款仍待明确",
      "sourceUrl": "https://www.caixin.com/2026-10-03/102490488.html",
      "publishedAt": "2026-10-03T00:05:37.000Z",
      "fetchedAt": "2026-10-03T05:22:52.988Z",
      "timeConfidence": "source",
      "summary": "相较北上广，武汉的库存压力更大，当地细则更强调稳定企业经营和缓冲制度切换\n       　　【财新网】武汉允许全装修商品住房在毛坯、室内装修两个建设阶段分别办理竣工备案。10月1日，该市住房和城市更新局、自然资源和城乡建设局、地方金融管理局联合发布《关于贯彻落实〈关于完善商品住房销售制度的通知〉的实施意见》（下称《实施意见》），提出上述规定。\n　　《实施意见》自发布之日起执行。分阶段竣备可视为工程",
      "sourceName": "财新网",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f5c1b4b56c14",
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
          "score": 46,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 44,
      "llmScores": [
        41,
        46
      ],
      "scoredBy": "llm",
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "官方监管"
      ],
      "eventId": null
    },
    {
      "title": "财新闻｜国庆假期首日全社会跨区域人员流动量超3.29亿人次",
      "sourceUrl": "https://mini.caixin.com/2026-10-03/102490487.html",
      "publishedAt": "2026-10-02T23:28:18.000Z",
      "fetchedAt": "2026-10-03T05:22:52.988Z",
      "timeConfidence": "source",
      "summary": "统一耗材“身份证” 7类医用耗材医保通用名发布；国庆假期首日全社会跨区域人员流动量超3.29亿人次；巴西调查美国涉嫌利用拨款干涉巴选举和司法机构运作\n       \n\n统一耗材“身份证” 7类医用耗材医保通用名发布 \n国家医保局日前发布《神经介入与神经外科植入材料等7类医用耗材分类与代码及医保通用名》，对神经介入与神经外科、结构性心脏病与心脏外科、修补、口腔、眼科、血管栓塞、缝合及凝固材料7大类植",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2d7490849557",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "attentionScore": 40,
      "llmScores": [
        44,
        35
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
      "attentionScore": 18,
      "llmScores": [
        22,
        13
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
      "eventId": null
    }
  ],
  "curationStats": {
    "scenes": {
      "insurance": 68,
      "privateFundSales": 8,
      "marketEducation": 74
    },
    "featured": 24,
    "gate": {
      "passed": 14,
      "total": 150,
      "byTier": {
        "S3": {
          "total": 71,
          "passed": 6
        },
        "S2": {
          "total": 78,
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
      "news_f5c1b4b56c14",
      "news_986ca26f7b13"
    ],
    "products": [],
    "industry": [
      "news_6d244e905300",
      "news_f3a5557fe5ff",
      "news_0590dc476937",
      "news_9afbc3ac06ca",
      "news_6017a479b3ca",
      "news_12894a198cdd",
      "news_c0586ec589d8",
      "news_0ae339c361ec",
      "news_76bef4761615",
      "news_4afebb00e51b"
    ],
    "research": [
      "news_29f1d8f2f3d9",
      "news_d522752b5638",
      "news_e2db44d660e6",
      "news_2b339de4aafc",
      "news_28c9ff6786c8",
      "news_191645d6e1cb",
      "news_e3e94b1c4834",
      "news_58810d93b1be",
      "news_e7c0cc5484a9",
      "news_bb61cda7a982"
    ],
    "insights": [
      "news_e45b38541e3d",
      "news_9bd9c11b4dea",
      "news_b568b2ba8ea5",
      "news_691c9b8fc6f8",
      "news_69bf6fb8d854",
      "news_3b82f54d9418",
      "news_da85d7c59133",
      "news_3bd101f99202",
      "news_1cda9f707d09",
      "news_7acb513d9587"
    ]
  },
  "flashes": [
    {
      "id": "news_e45b38541e3d",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_6d244e905300",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_29f1d8f2f3d9",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_f3a5557fe5ff",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_9bd9c11b4dea",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_0590dc476937",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_b568b2ba8ea5",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_9afbc3ac06ca",
      "dotClass": "flash-dot-blue"
    }
  ],
  "keywordIndex": {
    "保险": [
      "news_8eacab0485b8",
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
    "年金": [
      "news_c285ea85f841"
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
      "news_2d363e33c0cf",
      "news_ab98aa5bc4f7",
      "news_0d91046211fd",
      "news_5ba0a3f60dd8",
      "news_c90559c9629e"
    ],
    "央行": [
      "news_1035aecf181c",
      "news_8db5735d6754"
    ],
    "利率": [
      "news_179bbcdc09c7",
      "news_2679482aa2ad",
      "news_2d363e33c0cf",
      "news_8cbf5ca3fc2f",
      "news_0e3ae3d70cb9",
      "news_d911e70dc94e",
      "news_5ba0a3f60dd8",
      "news_b8359ae20a15"
    ],
    "贷款利率": [
      "news_2679482aa2ad"
    ],
    "降息": [
      "news_1035aecf181c"
    ],
    "加息": [
      "news_c0586ec589d8",
      "news_af155742b624",
      "news_8cbf5ca3fc2f",
      "news_89648418ac8c",
      "news_e815ca848dca"
    ],
    "流动性": [
      "news_1035aecf181c"
    ],
    "拨备": [
      "news_1371736991a2"
    ],
    "房贷": [
      "news_2679482aa2ad"
    ],
    "按揭": [
      "news_2679482aa2ad",
      "news_f5c1b4b56c14"
    ],
    "消费贷": [
      "news_c5bba39834ff"
    ],
    "股票": [
      "news_12894a198cdd",
      "news_197c914f2379",
      "news_0d91046211fd",
      "news_f2cde962b4d6",
      "news_33332a6f5423"
    ],
    "A股": [
      "news_197c914f2379",
      "news_32db98e8f039",
      "news_8cbf5ca3fc2f",
      "news_adb2f7e988f8",
      "news_db58c59f9e4f",
      "news_198de3964b7c",
      "news_ab2f509e249b"
    ],
    "港股": [
      "news_9bd9c11b4dea",
      "news_691c9b8fc6f8",
      "news_e2db44d660e6",
      "news_28c9ff6786c8",
      "news_e7c0cc5484a9",
      "news_bb61cda7a982",
      "news_9a91c69e9266",
      "news_d073bec14996",
      "news_ac23a9433889",
      "news_198de3964b7c"
    ],
    "美股": [
      "news_12894a198cdd",
      "news_e3e94b1c4834",
      "news_e7c0cc5484a9",
      "news_1895a7a38b57",
      "news_89648418ac8c",
      "news_198de3964b7c",
      "news_d911e70dc94e",
      "news_d16169f56c2c"
    ],
    "指数": [
      "news_6d244e905300",
      "news_691c9b8fc6f8",
      "news_12894a198cdd",
      "news_3bd101f99202",
      "news_2f99cd6a1915",
      "news_1cda9f707d09",
      "news_e7c0cc5484a9",
      "news_bb61cda7a982",
      "news_1035aecf181c",
      "news_305c61e31b92",
      "news_03cab9deab9f",
      "news_84634f0efb53",
      "news_89648418ac8c",
      "news_d911e70dc94e"
    ],
    "沪深300": [
      "news_305c61e31b92"
    ],
    "ETF": [
      "news_6620c3fda2a3"
    ],
    "公募基金": [
      "news_6620c3fda2a3"
    ],
    "私募基金": [
      "news_3b82f54d9418"
    ],
    "量化": [
      "news_d16169f56c2c"
    ],
    "债券": [
      "news_12894a198cdd",
      "news_c0586ec589d8",
      "news_2679482aa2ad",
      "news_c1a8f794f556",
      "news_2d363e33c0cf",
      "news_27ef392a31b4",
      "news_d911e70dc94e",
      "news_d7f717cb2c6d",
      "news_1c0262b5bdc4",
      "news_b8359ae20a15"
    ],
    "国债": [
      "news_c0586ec589d8",
      "news_0e3ae3d70cb9",
      "news_c5bba39834ff",
      "news_d911e70dc94e",
      "news_e815ca848dca"
    ],
    "信用债": [
      "news_c0586ec589d8"
    ],
    "公司债": [
      "news_5ba0a3f60dd8"
    ],
    "期货": [
      "news_9afbc3ac06ca",
      "news_c0586ec589d8",
      "news_3b82f54d9418",
      "news_2f99cd6a1915",
      "news_e3e94b1c4834",
      "news_c0f0c768ce55",
      "news_ab98aa5bc4f7",
      "news_8cbf5ca3fc2f",
      "news_f2cde962b4d6"
    ],
    "期权": [
      "news_0d91046211fd"
    ],
    "衍生品": [
      "news_0d91046211fd"
    ],
    "IPO": [
      "news_e2db44d660e6",
      "news_6017a479b3ca",
      "news_40e66590509c",
      "news_ac23a9433889"
    ],
    "上市": [
      "news_0590dc476937",
      "news_40e66590509c",
      "news_364069f7052a",
      "news_5f6c4b9e0821",
      "news_32db98e8f039",
      "news_ac23a9433889",
      "news_adb2f7e988f8",
      "news_9c2942fbbb98",
      "news_6620c3fda2a3",
      "news_13be37f366a6"
    ],
    "增持": [
      "news_6017a479b3ca"
    ],
    "回购": [
      "news_179bbcdc09c7",
      "news_cba5a0d2e6cd",
      "news_9df482b34778",
      "news_ba7f925ed3f6",
      "news_e815ca848dca",
      "news_d16169f56c2c"
    ],
    "券商": [
      "news_d522752b5638",
      "news_c372069cd4ad",
      "news_654e05c4aff9"
    ],
    "投行": [
      "news_197c914f2379",
      "news_654e05c4aff9"
    ],
    "经纪": [
      "news_cddf0de5a2fb",
      "news_5c5f98083245",
      "news_9f3b623176ea"
    ],
    "投资者": [
      "news_c0586ec589d8",
      "news_1895a7a38b57",
      "news_0d91046211fd",
      "news_f2cde962b4d6",
      "news_cddf0de5a2fb",
      "news_27ef392a31b4",
      "news_aa4e7932ec46",
      "news_89648418ac8c",
      "news_5ba0a3f60dd8",
      "news_eae78827dee8"
    ],
    "机构": [
      "news_29f1d8f2f3d9",
      "news_b568b2ba8ea5",
      "news_d522752b5638",
      "news_3b82f54d9418",
      "news_0ae339c361ec",
      "news_364069f7052a",
      "news_2fd1fb8e120f",
      "news_ded24100599a",
      "news_c372069cd4ad",
      "news_2d363e33c0cf",
      "news_adb2f7e988f8",
      "news_aa4e7932ec46",
      "news_172e04d98cc2",
      "news_ab2f509e249b",
      "news_c90559c9629e",
      "news_feecc234ca1b",
      "news_2d7490849557"
    ],
    "南向资金": [
      "news_691c9b8fc6f8"
    ],
    "监管": [
      "news_d522752b5638",
      "news_a742a9175bdc",
      "news_a23a300b06a0",
      "news_a6987b5ed706",
      "news_b09fb0f364b1",
      "news_172e04d98cc2",
      "news_d7f717cb2c6d"
    ],
    "证监会": [
      "news_d522752b5638",
      "news_986ca26f7b13"
    ],
    "港交所": [
      "news_ac23a9433889",
      "news_f2cde962b4d6",
      "news_6620c3fda2a3"
    ],
    "基金业协会": [
      "news_3b82f54d9418"
    ],
    "处罚": [
      "news_e27033d0c4c7",
      "news_98619b832db1"
    ],
    "罚单": [
      "news_d522752b5638"
    ],
    "问责": [
      "news_d1eedc381720"
    ],
    "通报": [
      "news_0702a345eab5",
      "news_4c7246f9af2e",
      "news_ab0796a0c4f5"
    ],
    "条款": [
      "news_90694c744974",
      "news_5c5f98083245"
    ],
    "通知": [
      "news_58810d93b1be",
      "news_c862685ffde3",
      "news_f5c1b4b56c14"
    ],
    "意见": [
      "news_4c7246f9af2e",
      "news_24d272e42e6a",
      "news_f5c1b4b56c14"
    ],
    "规定": [
      "news_f5c1b4b56c14",
      "news_986ca26f7b13"
    ],
    "解读": [
      "news_90694c744974",
      "news_7b45a87acab6",
      "news_5c5f98083245"
    ],
    "牌照": [
      "news_5f6c4b9e0821",
      "news_654e05c4aff9",
      "news_5c5f98083245"
    ],
    "经济": [
      "news_e2db44d660e6",
      "news_3bd101f99202",
      "news_e763dc7bc52b",
      "news_3020b010d504",
      "news_a2e64dd9f185",
      "news_11ade009890e",
      "news_0e3ae3d70cb9",
      "news_aa4e7932ec46",
      "news_c77980527bfe",
      "news_88678cee43ed",
      "news_3405c8e141c4",
      "news_d911e70dc94e",
      "news_8db5735d6754",
      "news_4dedec211c0e",
      "news_feecc234ca1b",
      "news_b88af30fc3f3"
    ],
    "经济运行": [
      "news_88678cee43ed",
      "news_4dedec211c0e"
    ],
    "高质量发展": [
      "news_c77980527bfe",
      "news_b84ce159188d"
    ],
    "GDP": [
      "news_00a4a5d91a88"
    ],
    "PMI": [
      "news_191645d6e1cb",
      "news_bb61cda7a982",
      "news_1035aecf181c"
    ],
    "信贷": [
      "news_5ba0a3f60dd8"
    ],
    "外贸": [
      "news_88678cee43ed"
    ],
    "货币政策": [
      "news_bb61cda7a982",
      "news_af155742b624",
      "news_4dedec211c0e"
    ],
    "财政政策": [
      "news_4dedec211c0e"
    ],
    "汇率": [
      "news_8db5735d6754"
    ],
    "人民币": [
      "news_b568b2ba8ea5",
      "news_499c7f2a2f33",
      "news_2d363e33c0cf",
      "news_a6987b5ed706",
      "news_f2cde962b4d6",
      "news_88678cee43ed"
    ],
    "外汇": [
      "news_b568b2ba8ea5",
      "news_88678cee43ed"
    ],
    "跨境": [
      "news_a4775f924433"
    ],
    "离岸": [
      "news_2d363e33c0cf",
      "news_f2cde962b4d6"
    ],
    "美元": [
      "news_e45b38541e3d",
      "news_b6658ec56fdc",
      "news_e3e94b1c4834",
      "news_179bbcdc09c7",
      "news_3020b010d504",
      "news_cba5a0d2e6cd",
      "news_2679482aa2ad",
      "news_1371736991a2",
      "news_c0f0c768ce55",
      "news_197c914f2379",
      "news_499c7f2a2f33",
      "news_30dd58d48df9",
      "news_8cbf5ca3fc2f",
      "news_88678cee43ed",
      "news_0dde430efa9f",
      "news_9e15ced5dc01",
      "news_1140c755994e",
      "news_b80893db54c7",
      "news_d16169f56c2c",
      "news_d7f717cb2c6d",
      "news_1c0262b5bdc4",
      "news_eae78827dee8",
      "news_13be37f366a6"
    ],
    "欧元": [
      "news_32f737da5f05",
      "news_8db5735d6754"
    ],
    "日元": [
      "news_8cbf5ca3fc2f",
      "news_8db5735d6754"
    ],
    "通胀": [
      "news_c0586ec589d8",
      "news_d104bc3eb06d",
      "news_bb61cda7a982",
      "news_af155742b624"
    ],
    "复苏": [
      "news_c90559c9629e"
    ],
    "房地产": [
      "news_cddf0de5a2fb"
    ],
    "地产": [
      "news_cddf0de5a2fb"
    ],
    "楼市": [
      "news_728fe859e130"
    ],
    "住房": [
      "news_00a4a5d91a88",
      "news_f5c1b4b56c14"
    ],
    "消费": [
      "news_691c9b8fc6f8",
      "news_da85d7c59133",
      "news_2b339de4aafc",
      "news_7acb513d9587",
      "news_b861c054e12d",
      "news_2fd1fb8e120f",
      "news_64cbf928d754",
      "news_ab98aa5bc4f7",
      "news_27ef392a31b4",
      "news_88678cee43ed",
      "news_c5bba39834ff",
      "news_98619b832db1",
      "news_8eacab0485b8"
    ],
    "投资": [
      "news_c0586ec589d8",
      "news_b6658ec56fdc",
      "news_9a91c69e9266",
      "news_3020b010d504",
      "news_1895a7a38b57",
      "news_2fd1fb8e120f",
      "news_c372069cd4ad",
      "news_0d91046211fd",
      "news_f2cde962b4d6",
      "news_cddf0de5a2fb",
      "news_c01692484868",
      "news_27ef392a31b4",
      "news_aa4e7932ec46",
      "news_88678cee43ed",
      "news_89648418ac8c",
      "news_d8aab6da3ab4",
      "news_9e15ced5dc01",
      "news_1140c755994e",
      "news_2665dacc4e01",
      "news_32f737da5f05",
      "news_5ba0a3f60dd8",
      "news_d7f717cb2c6d",
      "news_1c0262b5bdc4",
      "news_eae78827dee8"
    ],
    "出口": [
      "news_e7c0cc5484a9",
      "news_da00dec8ad17",
      "news_c63367770a69",
      "news_a6987b5ed706",
      "news_dbd34b91a7ab"
    ],
    "进口": [
      "news_4afebb00e51b",
      "news_5129c4ebc676",
      "news_03e65e3b6848"
    ],
    "进出口": [
      "news_a6987b5ed706"
    ],
    "贸易": [
      "news_bb61cda7a982",
      "news_06e858972172",
      "news_b861c054e12d",
      "news_24d272e42e6a",
      "news_2ab3082270c9",
      "news_88678cee43ed"
    ],
    "产业链": [
      "news_69bf6fb8d854",
      "news_28c9ff6786c8",
      "news_364069f7052a",
      "news_8cbf5ca3fc2f"
    ],
    "供应链": [
      "news_bb61cda7a982",
      "news_86f6aa007684"
    ],
    "就业": [
      "news_9afbc3ac06ca",
      "news_c0586ec589d8",
      "news_b54b790f48ad",
      "news_bb61cda7a982",
      "news_1035aecf181c",
      "news_af155742b624",
      "news_89648418ac8c"
    ],
    "失业": [
      "news_bb61cda7a982",
      "news_af155742b624"
    ],
    "收入": [
      "news_76bef4761615"
    ],
    "黄金": [
      "news_d104bc3eb06d",
      "news_e3e94b1c4834",
      "news_f2cde962b4d6"
    ],
    "金价": [
      "news_b88af30fc3f3"
    ],
    "原油": [
      "news_e3e94b1c4834",
      "news_e7c0cc5484a9",
      "news_dbd34b91a7ab"
    ],
    "大宗商品": [
      "news_3bd101f99202"
    ],
    "工业": [
      "news_da85d7c59133",
      "news_2b339de4aafc",
      "news_1008546be714",
      "news_b84ce159188d"
    ],
    "利润": [
      "news_c160fc5cb206",
      "news_eae78827dee8"
    ],
    "股市": [
      "news_6d244e905300",
      "news_f3a5557fe5ff",
      "news_12894a198cdd",
      "news_c0586ec589d8",
      "news_b54b790f48ad",
      "news_03cab9deab9f",
      "news_32db98e8f039",
      "news_0d91046211fd",
      "news_430f85a57c29",
      "news_09d5f054b844",
      "news_5ba0a3f60dd8",
      "news_ab2f509e249b"
    ],
    "美联储": [
      "news_bb61cda7a982",
      "news_8cbf5ca3fc2f",
      "news_89648418ac8c",
      "news_d911e70dc94e",
      "news_d1eedc381720",
      "news_e815ca848dca"
    ],
    "财报": [
      "news_40e66590509c",
      "news_197c914f2379",
      "news_d911e70dc94e"
    ],
    "资产配置": [
      "news_f2cde962b4d6"
    ],
    "资管": [
      "news_3b82f54d9418"
    ],
    "CTA": [
      "news_d16169f56c2c"
    ],
    "权益": [
      "news_0e5747bbb9ed",
      "news_ab0796a0c4f5",
      "news_33332a6f5423",
      "news_b88af30fc3f3"
    ],
    "募集": [
      "news_b568b2ba8ea5",
      "news_2fd1fb8e120f"
    ],
    "认购": [
      "news_728fe859e130"
    ]
  },
  "sourceHealth": {
    "generatedAt": "2026-10-05T06:18:08.041Z",
    "status": "healthy",
    "totalSources": 12,
    "successfulSources": 10,
    "usableSources": 10,
    "failedSources": 2,
    "staleSources": 0,
    "fetchLimitReachedSources": 0,
    "coverageRate": 0.8333,
    "freshestPublishedAt": "2026-10-05T05:37:07.000Z",
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
        "addedCount": 1,
        "durationMs": 18888,
        "latestPublishedAt": "2026-10-05T05:05:42.000Z",
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
        "itemCount": 37,
        "rawItemCount": 37,
        "acceptedItemCount": 37,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 12,
        "durationMs": 16088,
        "latestPublishedAt": "2026-10-05T05:28:02.000Z",
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
        "addedCount": 10,
        "durationMs": 16914,
        "latestPublishedAt": "2026-10-05T03:16:06.000Z",
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
        "durationMs": 56533,
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
        "itemCount": 31,
        "rawItemCount": 31,
        "acceptedItemCount": 31,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 10,
        "durationMs": 52615,
        "latestPublishedAt": "2026-10-05T05:28:21.000Z",
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
        "addedCount": 10,
        "durationMs": 1079,
        "latestPublishedAt": "2026-10-05T05:37:07.000Z",
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
        "durationMs": 1509,
        "latestPublishedAt": "2026-09-28T16:00:00.000Z",
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
        "durationMs": 4654,
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
        "addedCount": 5,
        "durationMs": 393,
        "latestPublishedAt": "2026-10-05T05:30:14.000Z",
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
        "addedCount": 8,
        "durationMs": 169,
        "latestPublishedAt": "2026-10-05T00:52:53.000Z",
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
    "eventCount": 29,
    "retentionDays": 90
  },
  "macro": {
    "updatedAt": "2026-10-05T06:18:08.041Z",
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
        "value": "5.28%",
        "note": "较10月1日 5.24% 上升",
        "direction": "up",
        "asOf": "2026-10-02",
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
        "note": "较10月1日 6.7045 持平",
        "direction": "flat",
        "asOf": "2026-10-02",
        "source": "Frankfurter/ECB",
        "mode": "auto"
      },
      {
        "key": "gold",
        "name": "现货黄金",
        "value": "$4,153",
        "note": "较10月4日 $4,142 上升",
        "direction": "up",
        "asOf": "2026-10-05",
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
        "title": "A股节后上涨胜率超60%，机构：持股过节或更合算！外围股市上涨，股民盼着开门红",
        "mainItemId": "news_ab2f509e249b",
        "relatedItemIds": [
          "news_198de3964b7c",
          "news_32db98e8f039"
        ],
        "evidenceItemIds": [
          "news_ab2f509e249b",
          "news_198de3964b7c",
          "news_32db98e8f039"
        ],
        "historicalEvidenceCount": 7,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-05T06:18:08.041Z",
        "status": "developing",
        "summary": "9月A股月报发布，一图速览市场表现。",
        "latestProgress": "机构称A股节后上涨胜率超60%，外围股市上涨，股民盼开门红。"
      },
      {
        "eventId": "event_f101880ef7bc",
        "title": "美股要“通宵”了！12月起迈入23小时交易时代",
        "mainItemId": "news_d16169f56c2c",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_d16169f56c2c"
        ],
        "historicalEvidenceCount": 18,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-05T06:18:08.041Z",
        "status": "developing",
        "summary": "美股12月起迈入23小时交易时代，华尔街将“通宵”。",
        "latestProgress": "23/5交易模式倒计时，全球资金接力或强化长牛之路。"
      },
      {
        "eventId": "event_270c3bff1a30",
        "title": "加息预期骤变！美联储官员鹰派立场软化 又一大行“撕报告”",
        "mainItemId": "news_8cbf5ca3fc2f",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_8cbf5ca3fc2f"
        ],
        "historicalEvidenceCount": 16,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-05T06:18:08.041Z",
        "status": "developing",
        "summary": "非农爆冷致10月加息预期骤降，但美联储立场未改，聚焦9月CPI。",
        "latestProgress": "下周关注美联储纪要定价加息预期，及美伊与也门局势对油价影响。"
      },
      {
        "eventId": "event_c68d651d4ff9",
        "title": "国信证券：9月以来外资流出港股互联网规模靠前",
        "mainItemId": "news_d073bec14996",
        "relatedItemIds": [
          "news_9a91c69e9266",
          "news_9bd9c11b4dea"
        ],
        "evidenceItemIds": [
          "news_d073bec14996",
          "news_9a91c69e9266",
          "news_9bd9c11b4dea"
        ],
        "historicalEvidenceCount": 16,
        "firstSeenAt": "2026-09-30T15:04:45.414Z",
        "lastSeenAt": "2026-10-05T06:18:08.041Z",
        "status": "developing",
        "summary": "国信证券：9月以来外资流出港股互联网规模靠前。",
        "latestProgress": "智谱港股涨超5%。"
      },
      {
        "eventId": "event_2cf716748ce1",
        "title": "全球央行艰难重启加息周期，这次有什么不同|海外市场月报",
        "mainItemId": "news_1035aecf181c",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_1035aecf181c"
        ],
        "historicalEvidenceCount": 7,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-05T06:18:08.041Z",
        "status": "developing",
        "summary": "全球央行艰难重启加息周期，市场关注政策分化与通胀压力。",
        "latestProgress": "中国央行结构性降息，9月PMI重回扩张，债市盘整。"
      },
      {
        "eventId": "event_99b6c1e3a191",
        "title": "华尔街见闻早餐FM-Radio | 2026年10月5日",
        "mainItemId": "news_da00dec8ad17",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_da00dec8ad17"
        ],
        "historicalEvidenceCount": 2,
        "firstSeenAt": "2026-10-03T09:57:49.973Z",
        "lastSeenAt": "2026-10-05T06:18:08.041Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_cba1a5ffd9bc",
        "title": "7.5%房贷利率有多可怕？美国博主算账：贷款50万美元，3年还12.6万，本金只少1.5万",
        "mainItemId": "news_2679482aa2ad",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_2679482aa2ad"
        ],
        "historicalEvidenceCount": 4,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-05T06:18:08.041Z",
        "status": "developing",
        "summary": "7.5%房贷利率下，50万贷款3年还12.6万，本金仅少1.5万",
        "latestProgress": "最新报道（2026-10-04）重申该数据，引发讨论"
      },
      {
        "eventId": "event_9fd716aed68c",
        "title": "商务部新闻发言人就二十国集团贸易部长会议及相关情况答记者问",
        "mainItemId": "news_24d272e42e6a",
        "relatedItemIds": [
          "news_2ab3082270c9"
        ],
        "evidenceItemIds": [
          "news_24d272e42e6a",
          "news_2ab3082270c9"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-04T06:27:31.850Z",
        "lastSeenAt": "2026-10-05T06:18:08.041Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_090656555f3a",
        "title": "美国司法部长：不会重启对鲍威尔的刑事调查",
        "mainItemId": "news_d1eedc381720",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_d1eedc381720"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-04T06:27:31.850Z",
        "lastSeenAt": "2026-10-05T06:18:08.041Z",
        "status": "developing",
        "summary": "美国司法部长明确表示不会重启对鲍威尔的刑事调查。",
        "latestProgress": "调查虽不重启，但翻修项目的问责工作仍将继续。"
      },
      {
        "eventId": "event_07a46ed03a25",
        "title": "马斯克回应！Terafab与台积电谈上了，此前已牵手英特尔",
        "mainItemId": "news_2665dacc4e01",
        "relatedItemIds": [
          "news_c01692484868"
        ],
        "evidenceItemIds": [
          "news_2665dacc4e01",
          "news_c01692484868"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-04T06:27:31.850Z",
        "lastSeenAt": "2026-10-05T06:18:08.041Z",
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
          "text": "[75] 医疗险居然能“返保费”,还能保终身?复星联合医路相伴高端医疗险精英版详细拆解,3大优势1个坑,一次讲清! — 图源 | jimeng 作者：happy，前TOP100事业部总经理、国家认证管理咨询师、保险咨询师。 协助投保&从业咨",
          "evidenceItemIds": [
            "news_9f3b623176ea"
          ]
        },
        {
          "text": "[73] 9月份60张证监罚单创出新高，CIO被认定不适当人选更属罕见 — 财联社10月5日讯（记者 林坚）监管对券商“长牙带刺”的态势延续。随着第三季度刚刚结束，今年以来，监管针对券商的罚单有了",
          "evidenceItemIds": [
            "news_d522752b5638"
          ]
        },
        {
          "text": "[73] 中国央行结构性降息与债市盘整，中国9月PMI重回扩张---W40国内宏观脱水 — 央行PSL降息25bp至1.5%并扩容支持领域，选择结构性降息而非总量宽松，宽信用信号意义大于流动性传导。债市短期受止盈",
          "evidenceItemIds": [
            "news_1035aecf181c"
          ]
        }
      ]
    },
    "eventChain": {
      "summary": "基于标题主题相似度和来源层级识别 3 组关联事件；仅表示内容相关，不代表已确认因果",
      "chains": [
        {
          "title": "智通港股投资日志|10月5日",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_9a91c69e9266",
            "news_9bd9c11b4dea",
            "news_d073bec14996"
          ],
          "nodes": [
            "智通港股投资日志|10月5日",
            "智谱港股涨超5%",
            "国信证券：9月以来外资流出港股互联网规模靠前"
          ]
        },
        {
          "title": "美股四季度“逼空”信号浮现：CTA仓位大撤退，1.3万亿美元回购蓄势待发",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_d16169f56c2c",
            "news_12894a198cdd",
            "news_e3e94b1c4834"
          ],
          "nodes": [
            "美股四季度“逼空”信号浮现：CTA仓位大撤退，1.3万亿美元回购蓄势待发",
            "一半的股票已进入熊市！美股走到“十字路口”，关键看美债波动率",
            "黄金、白银、美股期指、油价、比特币，全线上涨"
          ]
        },
        {
          "title": "崔东树：9月美股汽车整车企业市值环比降5% 港股降11% A股降4%",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_198de3964b7c",
            "news_32db98e8f039",
            "news_ab2f509e249b"
          ],
          "nodes": [
            "崔东树：9月美股汽车整车企业市值环比降5% 港股降11% A股降4%",
            "10月A股解禁规模超3100亿元，5股解禁比例超70%",
            "A股节后上涨胜率超60%，机构：持股过节或更合算！外围股市上涨，股民盼着开门红"
          ]
        }
      ]
    },
    "industryImpact": {
      "quadrants": {
        "insurance": {
          "level": "high",
          "summary": "8 条保险相关资讯",
          "items": [
            {
              "title": "大空头对大空头：OpenAI是市场最大风险",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_c285ea85f841"
              ]
            },
            {
              "title": "央视曝光租车公司划车骗赔偿",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_8eacab0485b8"
              ]
            },
            {
              "title": "前9月18家险企发债600亿补充资本,票面利率最低至“1字头”",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_b8359ae20a15"
              ]
            }
          ]
        },
        "pe": {
          "level": "high",
          "summary": "24 条基金/资管相关资讯",
          "items": [
            {
              "title": "一半的股票已进入熊市！美股走到“十字路口”，关键看美债波动率",
              "impact": "市场表现影响，可用于投资人沟通",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_12894a198cdd"
              ]
            },
            {
              "title": "陶冬：美债，温水煮青蛙式的风险｜国庆大咖谈",
              "impact": "市场表现影响，可用于投资人沟通",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_c0586ec589d8"
              ]
            },
            {
              "title": "截至二季度末资产管理产品总规模突破88万亿元",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_3b82f54d9418"
              ]
            }
          ]
        },
        "banking": {
          "level": "high",
          "summary": "13 条银行/货币政策相关资讯",
          "items": [
            {
              "title": "10年期美债逼近5.3%！贝森特黔驴技穷，Zervos能否找到新解法？",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_179bbcdc09c7"
              ]
            },
            {
              "title": "中国央行结构性降息与债市盘整，中国9月PMI重回扩张---W40国内宏观脱水",
              "impact": "货币政策信号，影响资产定价和配置策略",
              "suggestion": "评估利率变动对固收类产品的影响，及时调整建议",
              "evidenceItemIds": [
                "news_1035aecf181c"
              ]
            },
            {
              "title": "7.5%房贷利率有多可怕？美国博主算账：贷款50万美元，3年还12.6万，本金只少1.5万",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_2679482aa2ad"
              ]
            }
          ]
        },
        "trust": {
          "level": "medium",
          "summary": "2 条信托/财富管理相关资讯",
          "items": [
            {
              "title": "截至二季度末资产管理产品总规模突破88万亿元",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": [
                "news_3b82f54d9418"
              ]
            },
            {
              "title": "港交所行政总裁：港交所要推出人民币计价黄金期货",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": [
                "news_f2cde962b4d6"
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
          "evidence": "今日 76 条行业动态资讯，行业层面信息充分，涉及多家机构/产品",
          "evidenceItemIds": [
            "news_6d244e905300",
            "news_f3a5557fe5ff",
            "news_0590dc476937"
          ],
          "direction": "平稳"
        },
        {
          "topic": "货币政策信号",
          "evidence": "出现 10 次货币政策相关关键词，关注利率/流动性走向",
          "evidenceItemIds": [
            "news_1035aecf181c",
            "news_2d363e33c0cf",
            "news_b8359ae20a15"
          ],
          "direction": "上升"
        },
        {
          "topic": "保险行业关注度",
          "evidence": "出现 8 条保险相关资讯，覆盖监管/市场/产品多维度",
          "evidenceItemIds": [
            "news_5c5f98083245",
            "news_9f3b623176ea",
            "news_90694c744974"
          ],
          "direction": "上升"
        },
        {
          "topic": "市场行情波动",
          "evidence": "出现 65 条市场行情相关资讯，市场关注度提升",
          "evidenceItemIds": [
            "news_5c5f98083245",
            "news_1035aecf181c",
            "news_c285ea85f841"
          ],
          "direction": "上升"
        },
        {
          "topic": "房地产政策动向",
          "evidence": "出现 4 条地产相关资讯，政策边际变化值得关注",
          "evidenceItemIds": [
            "news_728fe859e130",
            "news_f5c1b4b56c14",
            "news_00a4a5d91a88"
          ],
          "direction": "平稳"
        }
      ]
    },
    "insurancePlanner": {
      "summary": "近期保险新闻聚焦定期寿险选购渠道、医疗险创新形态、重疾险退保决策及监管新规影响，客户沟通需侧重长期保障价值和合规提示。",
      "talkingPoints": [
        {
          "topic": "定期寿险投保渠道与保额测算",
          "point": "2026年10月定期寿险选购可参考奶爸保等持牌经纪平台，其服务覆盖保额测算、免责条款解读及理赔协助，适合作为客户初次配置的参考入口。",
          "action": "向客户强调定期寿险保额需覆盖家庭负债与收入替代，主动提供多平台产品对比及免责条款逐条解读，避免单纯推荐单一渠道。",
          "evidenceItemIds": [
            "news_5c5f98083245"
          ]
        },
        {
          "topic": "医疗险返保费与保终身卖点需理性看待",
          "point": "复星联合医路相伴高端医疗险宣称可返保费并保终身，但需重点提示保费成本、赔付规则及‘坑点’，避免客户被营销话术误导。",
          "action": "沟通时拆解产品三大优势与一个核心风险，对比传统医疗险的性价比，协助客户根据预算和医疗需求理性选择。",
          "evidenceItemIds": [
            "news_9f3b623176ea"
          ]
        },
        {
          "topic": "重疾险缴费中途退保的替代方案",
          "point": "已缴10年的20年期重疾险不建议直接退保，可优先考虑减额交清、保单贷款等权益，以最低损失保留核心保障。",
          "action": "为客户梳理保单现有权益，测算减额交清后的保额变化，并评估其经济压力是否可通过调整缴费方式缓解。",
          "evidenceItemIds": [
            "news_b88af30fc3f3"
          ]
        }
      ]
    },
    "peOperations": {
      "summary": "私募运营需关注监管罚单趋严、央行结构性降息带来的债市配置机会，以及科技监管（AI）和地缘政治对资产配置的影响。",
      "talkingPoints": [
        {
          "topic": "券商罚单创新高，合规内控需前置",
          "point": "9月证监罚单60张创新高，CIO被认定不适当人选属罕见案例，私募运营应强化投研、交易、信披等全流程合规自查。",
          "action": "对照近期罚单案例排查内部风控制度漏洞，重点检查投资决策留痕、关联交易披露及从业人员行为规范。",
          "evidenceItemIds": [
            "news_d522752b5638"
          ]
        },
        {
          "topic": "央行结构性降息与债市盘整的应对",
          "point": "央行PSL降息25bp并扩容支持领域，宽信用信号强于流动性传导，债市短期盘整但中期仍有配置价值，私募可关注利率债及高等级信用债。",
          "action": "建议在债市调整中逐步建仓，优先配置中短久期利率债，同时关注PSL支持领域相关的信用债机会。",
          "evidenceItemIds": [
            "news_1035aecf181c"
          ]
        },
        {
          "topic": "AI监管提速，科技板块波动或加大",
          "point": "白宫成立超级智能工作组并计划120天出台AI监管方案，私募投资科技赛道需关注政策风险及算力、模型合规成本上升的影响。",
          "action": "对已投AI项目进行监管敏感性分析，在投后管理中敦促企业预留合规预算，并关注后续监管细则对估值的影响。",
          "evidenceItemIds": [
            "news_a742a9175bdc"
          ]
        }
      ]
    },
    "marketOutlook": {
      "summary": "市场关注债市盘整与信用风险信号、全球资产联动上涨及历史泡沫类比，需警惕政策与地缘事件引发的波动。",
      "outlooks": [
        {
          "topic": "债市短期盘整，中期仍有支撑",
          "content": "央行结构性降息而非总量宽松，宽信用信号压制债市情绪，PMI重回扩张带来止盈压力，但中期流动性合理充裕和资产荒背景下，债市大幅调整风险有限。",
          "evidenceItemIds": [
            "news_1035aecf181c"
          ]
        },
        {
          "topic": "美国CCC级利差走阔，信贷风险警讯",
          "content": "CCC级利差升破1000bp，反映尾部风险定价提升，需警惕垃圾债市场压力向股市传导，建议降低高收益债仓位并关注信用事件。",
          "evidenceItemIds": [
            "news_5ba0a3f60dd8"
          ]
        }
      ]
    }
  }
};
window.KEYWORD_INDEX = {
  "保险": [
    "news_8eacab0485b8",
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
  "年金": [
    "news_c285ea85f841"
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
    "news_2d363e33c0cf",
    "news_ab98aa5bc4f7",
    "news_0d91046211fd",
    "news_5ba0a3f60dd8",
    "news_c90559c9629e"
  ],
  "央行": [
    "news_1035aecf181c",
    "news_8db5735d6754"
  ],
  "利率": [
    "news_179bbcdc09c7",
    "news_2679482aa2ad",
    "news_2d363e33c0cf",
    "news_8cbf5ca3fc2f",
    "news_0e3ae3d70cb9",
    "news_d911e70dc94e",
    "news_5ba0a3f60dd8",
    "news_b8359ae20a15"
  ],
  "贷款利率": [
    "news_2679482aa2ad"
  ],
  "降息": [
    "news_1035aecf181c"
  ],
  "加息": [
    "news_c0586ec589d8",
    "news_af155742b624",
    "news_8cbf5ca3fc2f",
    "news_89648418ac8c",
    "news_e815ca848dca"
  ],
  "流动性": [
    "news_1035aecf181c"
  ],
  "拨备": [
    "news_1371736991a2"
  ],
  "房贷": [
    "news_2679482aa2ad"
  ],
  "按揭": [
    "news_2679482aa2ad",
    "news_f5c1b4b56c14"
  ],
  "消费贷": [
    "news_c5bba39834ff"
  ],
  "股票": [
    "news_12894a198cdd",
    "news_197c914f2379",
    "news_0d91046211fd",
    "news_f2cde962b4d6",
    "news_33332a6f5423"
  ],
  "A股": [
    "news_197c914f2379",
    "news_32db98e8f039",
    "news_8cbf5ca3fc2f",
    "news_adb2f7e988f8",
    "news_db58c59f9e4f",
    "news_198de3964b7c",
    "news_ab2f509e249b"
  ],
  "港股": [
    "news_9bd9c11b4dea",
    "news_691c9b8fc6f8",
    "news_e2db44d660e6",
    "news_28c9ff6786c8",
    "news_e7c0cc5484a9",
    "news_bb61cda7a982",
    "news_9a91c69e9266",
    "news_d073bec14996",
    "news_ac23a9433889",
    "news_198de3964b7c"
  ],
  "美股": [
    "news_12894a198cdd",
    "news_e3e94b1c4834",
    "news_e7c0cc5484a9",
    "news_1895a7a38b57",
    "news_89648418ac8c",
    "news_198de3964b7c",
    "news_d911e70dc94e",
    "news_d16169f56c2c"
  ],
  "指数": [
    "news_6d244e905300",
    "news_691c9b8fc6f8",
    "news_12894a198cdd",
    "news_3bd101f99202",
    "news_2f99cd6a1915",
    "news_1cda9f707d09",
    "news_e7c0cc5484a9",
    "news_bb61cda7a982",
    "news_1035aecf181c",
    "news_305c61e31b92",
    "news_03cab9deab9f",
    "news_84634f0efb53",
    "news_89648418ac8c",
    "news_d911e70dc94e"
  ],
  "沪深300": [
    "news_305c61e31b92"
  ],
  "ETF": [
    "news_6620c3fda2a3"
  ],
  "公募基金": [
    "news_6620c3fda2a3"
  ],
  "私募基金": [
    "news_3b82f54d9418"
  ],
  "量化": [
    "news_d16169f56c2c"
  ],
  "债券": [
    "news_12894a198cdd",
    "news_c0586ec589d8",
    "news_2679482aa2ad",
    "news_c1a8f794f556",
    "news_2d363e33c0cf",
    "news_27ef392a31b4",
    "news_d911e70dc94e",
    "news_d7f717cb2c6d",
    "news_1c0262b5bdc4",
    "news_b8359ae20a15"
  ],
  "国债": [
    "news_c0586ec589d8",
    "news_0e3ae3d70cb9",
    "news_c5bba39834ff",
    "news_d911e70dc94e",
    "news_e815ca848dca"
  ],
  "信用债": [
    "news_c0586ec589d8"
  ],
  "公司债": [
    "news_5ba0a3f60dd8"
  ],
  "期货": [
    "news_9afbc3ac06ca",
    "news_c0586ec589d8",
    "news_3b82f54d9418",
    "news_2f99cd6a1915",
    "news_e3e94b1c4834",
    "news_c0f0c768ce55",
    "news_ab98aa5bc4f7",
    "news_8cbf5ca3fc2f",
    "news_f2cde962b4d6"
  ],
  "期权": [
    "news_0d91046211fd"
  ],
  "衍生品": [
    "news_0d91046211fd"
  ],
  "IPO": [
    "news_e2db44d660e6",
    "news_6017a479b3ca",
    "news_40e66590509c",
    "news_ac23a9433889"
  ],
  "上市": [
    "news_0590dc476937",
    "news_40e66590509c",
    "news_364069f7052a",
    "news_5f6c4b9e0821",
    "news_32db98e8f039",
    "news_ac23a9433889",
    "news_adb2f7e988f8",
    "news_9c2942fbbb98",
    "news_6620c3fda2a3",
    "news_13be37f366a6"
  ],
  "增持": [
    "news_6017a479b3ca"
  ],
  "回购": [
    "news_179bbcdc09c7",
    "news_cba5a0d2e6cd",
    "news_9df482b34778",
    "news_ba7f925ed3f6",
    "news_e815ca848dca",
    "news_d16169f56c2c"
  ],
  "券商": [
    "news_d522752b5638",
    "news_c372069cd4ad",
    "news_654e05c4aff9"
  ],
  "投行": [
    "news_197c914f2379",
    "news_654e05c4aff9"
  ],
  "经纪": [
    "news_cddf0de5a2fb",
    "news_5c5f98083245",
    "news_9f3b623176ea"
  ],
  "投资者": [
    "news_c0586ec589d8",
    "news_1895a7a38b57",
    "news_0d91046211fd",
    "news_f2cde962b4d6",
    "news_cddf0de5a2fb",
    "news_27ef392a31b4",
    "news_aa4e7932ec46",
    "news_89648418ac8c",
    "news_5ba0a3f60dd8",
    "news_eae78827dee8"
  ],
  "机构": [
    "news_29f1d8f2f3d9",
    "news_b568b2ba8ea5",
    "news_d522752b5638",
    "news_3b82f54d9418",
    "news_0ae339c361ec",
    "news_364069f7052a",
    "news_2fd1fb8e120f",
    "news_ded24100599a",
    "news_c372069cd4ad",
    "news_2d363e33c0cf",
    "news_adb2f7e988f8",
    "news_aa4e7932ec46",
    "news_172e04d98cc2",
    "news_ab2f509e249b",
    "news_c90559c9629e",
    "news_feecc234ca1b",
    "news_2d7490849557"
  ],
  "南向资金": [
    "news_691c9b8fc6f8"
  ],
  "监管": [
    "news_d522752b5638",
    "news_a742a9175bdc",
    "news_a23a300b06a0",
    "news_a6987b5ed706",
    "news_b09fb0f364b1",
    "news_172e04d98cc2",
    "news_d7f717cb2c6d"
  ],
  "证监会": [
    "news_d522752b5638",
    "news_986ca26f7b13"
  ],
  "港交所": [
    "news_ac23a9433889",
    "news_f2cde962b4d6",
    "news_6620c3fda2a3"
  ],
  "基金业协会": [
    "news_3b82f54d9418"
  ],
  "处罚": [
    "news_e27033d0c4c7",
    "news_98619b832db1"
  ],
  "罚单": [
    "news_d522752b5638"
  ],
  "问责": [
    "news_d1eedc381720"
  ],
  "通报": [
    "news_0702a345eab5",
    "news_4c7246f9af2e",
    "news_ab0796a0c4f5"
  ],
  "条款": [
    "news_90694c744974",
    "news_5c5f98083245"
  ],
  "通知": [
    "news_58810d93b1be",
    "news_c862685ffde3",
    "news_f5c1b4b56c14"
  ],
  "意见": [
    "news_4c7246f9af2e",
    "news_24d272e42e6a",
    "news_f5c1b4b56c14"
  ],
  "规定": [
    "news_f5c1b4b56c14",
    "news_986ca26f7b13"
  ],
  "解读": [
    "news_90694c744974",
    "news_7b45a87acab6",
    "news_5c5f98083245"
  ],
  "牌照": [
    "news_5f6c4b9e0821",
    "news_654e05c4aff9",
    "news_5c5f98083245"
  ],
  "经济": [
    "news_e2db44d660e6",
    "news_3bd101f99202",
    "news_e763dc7bc52b",
    "news_3020b010d504",
    "news_a2e64dd9f185",
    "news_11ade009890e",
    "news_0e3ae3d70cb9",
    "news_aa4e7932ec46",
    "news_c77980527bfe",
    "news_88678cee43ed",
    "news_3405c8e141c4",
    "news_d911e70dc94e",
    "news_8db5735d6754",
    "news_4dedec211c0e",
    "news_feecc234ca1b",
    "news_b88af30fc3f3"
  ],
  "经济运行": [
    "news_88678cee43ed",
    "news_4dedec211c0e"
  ],
  "高质量发展": [
    "news_c77980527bfe",
    "news_b84ce159188d"
  ],
  "GDP": [
    "news_00a4a5d91a88"
  ],
  "PMI": [
    "news_191645d6e1cb",
    "news_bb61cda7a982",
    "news_1035aecf181c"
  ],
  "信贷": [
    "news_5ba0a3f60dd8"
  ],
  "外贸": [
    "news_88678cee43ed"
  ],
  "货币政策": [
    "news_bb61cda7a982",
    "news_af155742b624",
    "news_4dedec211c0e"
  ],
  "财政政策": [
    "news_4dedec211c0e"
  ],
  "汇率": [
    "news_8db5735d6754"
  ],
  "人民币": [
    "news_b568b2ba8ea5",
    "news_499c7f2a2f33",
    "news_2d363e33c0cf",
    "news_a6987b5ed706",
    "news_f2cde962b4d6",
    "news_88678cee43ed"
  ],
  "外汇": [
    "news_b568b2ba8ea5",
    "news_88678cee43ed"
  ],
  "跨境": [
    "news_a4775f924433"
  ],
  "离岸": [
    "news_2d363e33c0cf",
    "news_f2cde962b4d6"
  ],
  "美元": [
    "news_e45b38541e3d",
    "news_b6658ec56fdc",
    "news_e3e94b1c4834",
    "news_179bbcdc09c7",
    "news_3020b010d504",
    "news_cba5a0d2e6cd",
    "news_2679482aa2ad",
    "news_1371736991a2",
    "news_c0f0c768ce55",
    "news_197c914f2379",
    "news_499c7f2a2f33",
    "news_30dd58d48df9",
    "news_8cbf5ca3fc2f",
    "news_88678cee43ed",
    "news_0dde430efa9f",
    "news_9e15ced5dc01",
    "news_1140c755994e",
    "news_b80893db54c7",
    "news_d16169f56c2c",
    "news_d7f717cb2c6d",
    "news_1c0262b5bdc4",
    "news_eae78827dee8",
    "news_13be37f366a6"
  ],
  "欧元": [
    "news_32f737da5f05",
    "news_8db5735d6754"
  ],
  "日元": [
    "news_8cbf5ca3fc2f",
    "news_8db5735d6754"
  ],
  "通胀": [
    "news_c0586ec589d8",
    "news_d104bc3eb06d",
    "news_bb61cda7a982",
    "news_af155742b624"
  ],
  "复苏": [
    "news_c90559c9629e"
  ],
  "房地产": [
    "news_cddf0de5a2fb"
  ],
  "地产": [
    "news_cddf0de5a2fb"
  ],
  "楼市": [
    "news_728fe859e130"
  ],
  "住房": [
    "news_00a4a5d91a88",
    "news_f5c1b4b56c14"
  ],
  "消费": [
    "news_691c9b8fc6f8",
    "news_da85d7c59133",
    "news_2b339de4aafc",
    "news_7acb513d9587",
    "news_b861c054e12d",
    "news_2fd1fb8e120f",
    "news_64cbf928d754",
    "news_ab98aa5bc4f7",
    "news_27ef392a31b4",
    "news_88678cee43ed",
    "news_c5bba39834ff",
    "news_98619b832db1",
    "news_8eacab0485b8"
  ],
  "投资": [
    "news_c0586ec589d8",
    "news_b6658ec56fdc",
    "news_9a91c69e9266",
    "news_3020b010d504",
    "news_1895a7a38b57",
    "news_2fd1fb8e120f",
    "news_c372069cd4ad",
    "news_0d91046211fd",
    "news_f2cde962b4d6",
    "news_cddf0de5a2fb",
    "news_c01692484868",
    "news_27ef392a31b4",
    "news_aa4e7932ec46",
    "news_88678cee43ed",
    "news_89648418ac8c",
    "news_d8aab6da3ab4",
    "news_9e15ced5dc01",
    "news_1140c755994e",
    "news_2665dacc4e01",
    "news_32f737da5f05",
    "news_5ba0a3f60dd8",
    "news_d7f717cb2c6d",
    "news_1c0262b5bdc4",
    "news_eae78827dee8"
  ],
  "出口": [
    "news_e7c0cc5484a9",
    "news_da00dec8ad17",
    "news_c63367770a69",
    "news_a6987b5ed706",
    "news_dbd34b91a7ab"
  ],
  "进口": [
    "news_4afebb00e51b",
    "news_5129c4ebc676",
    "news_03e65e3b6848"
  ],
  "进出口": [
    "news_a6987b5ed706"
  ],
  "贸易": [
    "news_bb61cda7a982",
    "news_06e858972172",
    "news_b861c054e12d",
    "news_24d272e42e6a",
    "news_2ab3082270c9",
    "news_88678cee43ed"
  ],
  "产业链": [
    "news_69bf6fb8d854",
    "news_28c9ff6786c8",
    "news_364069f7052a",
    "news_8cbf5ca3fc2f"
  ],
  "供应链": [
    "news_bb61cda7a982",
    "news_86f6aa007684"
  ],
  "就业": [
    "news_9afbc3ac06ca",
    "news_c0586ec589d8",
    "news_b54b790f48ad",
    "news_bb61cda7a982",
    "news_1035aecf181c",
    "news_af155742b624",
    "news_89648418ac8c"
  ],
  "失业": [
    "news_bb61cda7a982",
    "news_af155742b624"
  ],
  "收入": [
    "news_76bef4761615"
  ],
  "黄金": [
    "news_d104bc3eb06d",
    "news_e3e94b1c4834",
    "news_f2cde962b4d6"
  ],
  "金价": [
    "news_b88af30fc3f3"
  ],
  "原油": [
    "news_e3e94b1c4834",
    "news_e7c0cc5484a9",
    "news_dbd34b91a7ab"
  ],
  "大宗商品": [
    "news_3bd101f99202"
  ],
  "工业": [
    "news_da85d7c59133",
    "news_2b339de4aafc",
    "news_1008546be714",
    "news_b84ce159188d"
  ],
  "利润": [
    "news_c160fc5cb206",
    "news_eae78827dee8"
  ],
  "股市": [
    "news_6d244e905300",
    "news_f3a5557fe5ff",
    "news_12894a198cdd",
    "news_c0586ec589d8",
    "news_b54b790f48ad",
    "news_03cab9deab9f",
    "news_32db98e8f039",
    "news_0d91046211fd",
    "news_430f85a57c29",
    "news_09d5f054b844",
    "news_5ba0a3f60dd8",
    "news_ab2f509e249b"
  ],
  "美联储": [
    "news_bb61cda7a982",
    "news_8cbf5ca3fc2f",
    "news_89648418ac8c",
    "news_d911e70dc94e",
    "news_d1eedc381720",
    "news_e815ca848dca"
  ],
  "财报": [
    "news_40e66590509c",
    "news_197c914f2379",
    "news_d911e70dc94e"
  ],
  "资产配置": [
    "news_f2cde962b4d6"
  ],
  "资管": [
    "news_3b82f54d9418"
  ],
  "CTA": [
    "news_d16169f56c2c"
  ],
  "权益": [
    "news_0e5747bbb9ed",
    "news_ab0796a0c4f5",
    "news_33332a6f5423",
    "news_b88af30fc3f3"
  ],
  "募集": [
    "news_b568b2ba8ea5",
    "news_2fd1fb8e120f"
  ],
  "认购": [
    "news_728fe859e130"
  ]
};
