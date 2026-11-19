// finhot auto-generated data - powered by RSSHub + financial sources + Zhihu OpenAPI
// Generated: 2026-11-19T17:29:31.620Z
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
  "date": "2026-11-20",
  "generatedAt": "2026-11-19T17:29:31.620Z",
  "lead": "今日新增 99 条，共 150 条精选资讯",
  "items": [
    {
      "title": "财联社11月20日电，标普500指数下跌近1%，触及盘中低点。",
      "sourceUrl": "https://www.cls.cn/detail/2539481",
      "publishedAt": "2026-11-19T16:55:43.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，标普500指数下跌近1%，触及盘中低点。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f506fe74033b",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "Anthropic开盘价为111.50美元，首日股价上涨34%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076915914527624",
      "publishedAt": "2026-11-19T16:53:19.000Z",
      "fetchedAt": "2026-11-19T17:27:55.399Z",
      "timeConfidence": "source",
      "summary": "Anthropic开盘价为111.50美元，IPO发行价为83美元，首日股价上涨34%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_baab259c34f6",
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
      "title": "Anthropic上市首日开盘涨34% 市值达到1.5万亿美元",
      "sourceUrl": "https://www.cls.cn/detail/2539480",
      "publishedAt": "2026-11-19T16:50:11.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "【Anthropic上市首日开盘涨34% 市值达到1.5万亿美元】财联社11月20日电，人工智能公司Anthropic（ANT）今日正式登陆纳斯达克，发行价为83美元/股，开盘报111.5美元，较发行价上涨34%。按开盘价计算，公司市值约为1.5万亿美元。本次IPO发行9.8亿股，发行总额约813.4亿美元，其中公司发行9.5635亿股，老股东出售2364.86万股。\n\n此外，Anthropic还",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_01334952dfb0",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "Anthropic首日开盘市值预计达2万亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076908143612804",
      "publishedAt": "2026-11-19T16:45:25.000Z",
      "fetchedAt": "2026-11-19T17:27:55.399Z",
      "timeConfidence": "source",
      "summary": "Anthropic首日开盘市值预计达2万亿美元。(财联社)",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a06342bbad4f",
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
      "eventId": "event_36735390d58b"
    },
    {
      "title": "财联社11月20日电，Anthropic首日开盘市值预计达2万亿美元。",
      "sourceUrl": "https://www.cls.cn/detail/2539478",
      "publishedAt": "2026-11-19T16:39:41.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，Anthropic首日开盘市值预计达2万亿美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_156e42e4fef1",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_36735390d58b"
    },
    {
      "title": "欧洲三大股指集体收跌 德国DAX指数跌近1%",
      "sourceUrl": "https://www.cls.cn/detail/2539477",
      "publishedAt": "2026-11-19T16:37:17.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "【欧洲三大股指集体收跌 德国DAX指数跌近1%】财联社11月20日电，英国富时100指数收跌0.87%，德国DAX指数下跌0.92%，法国CAC40指数下跌0.76%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c559654fe8a8",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_bc5e0b0b1b67"
    },
    {
      "title": "普京：感谢中方和习主席组织今天的俄中美元首会晤",
      "sourceUrl": "https://wallstreetcn.com/articles/3786308",
      "publishedAt": "2026-11-19T16:25:30.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "11月19日下午，国家主席习近平在深圳同俄罗斯总统普京、美国总统特朗普举行中俄美元首会晤。\n普京说：“我要感谢中方和习主席组织今天的俄中美元首会晤。我坚信，俄罗斯、中国和美国以及我们三国人民，如果能够在相互尊重、平等和遵守利益平衡的基础上开展建设性、伙伴式合作，便能为加强世界安全与稳定作出重要贡献。”\n本文来源：央视新闻，原文标题：《普京：感谢中方和习主席组织今天的俄中美元首会晤》。风险提示及免责",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8e400e43156b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
      "title": "特朗普：今天我们创造了历史",
      "sourceUrl": "https://wallstreetcn.com/articles/3786310",
      "publishedAt": "2026-11-19T16:25:11.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "11月19日下午，国家主席习近平在深圳同俄罗斯总统普京、美国总统特朗普举行中俄美元首会晤。\n特朗普说：“我要祝贺习主席成功举办此次APEC会议。非常成功，巨大的成功。我也很高兴，此次访问期间有机会出席历史上首次美中俄三方会晤。从这个角度来说，今天我们创造了历史。我们三国负有特殊重要的责任，保持开放、相互尊重和富有成果的对话。这不仅关乎本国人民，也关乎全世界。”\n本文来源：央视新闻，原文标题：《特朗",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ec1737937564",
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
      "title": "财联社11月20日电，谷歌母公司Alphabet将通过加拿大债券发行筹集至少35亿美元。",
      "sourceUrl": "https://www.cls.cn/detail/2539476",
      "publishedAt": "2026-11-19T16:18:35.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，谷歌母公司Alphabet将通过加拿大债券发行筹集至少35亿美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_12ea62ec743e",
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
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "Anthropic预计开盘报105美元 较IPO发行价上涨近27%",
      "sourceUrl": "https://www.cls.cn/detail/2539474",
      "publishedAt": "2026-11-19T16:09:07.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "【Anthropic预计开盘报105美元 较IPO发行价上涨近27%】财联社11月19日电，据知情人士消息，人工智能公司Anthropic股票预计将在未来一小时内开始交易，当前指示性开盘价为105美元/股，较83美元/股的IPO发行价上涨近27%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e64a5639f0e8",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社11月20日电，Anthropic股票在纳斯达克上市首日开盘价预计为每股106美元，而IPO发行价为每股83美元。",
      "sourceUrl": "https://www.cls.cn/detail/2539473",
      "publishedAt": "2026-11-19T16:04:02.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，Anthropic股票在纳斯达克上市首日开盘价预计为每股106美元，而IPO发行价为每股83美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_639bc2d7a0c9",
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
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社11月20日电，COMEX铝期货跌超3%，现报2764.25美元/公吨。",
      "sourceUrl": "https://www.cls.cn/detail/2539464",
      "publishedAt": "2026-11-19T16:00:32.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，COMEX铝期货跌超3%，现报2764.25美元/公吨。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a27ac8371166",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 55,
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社11月19日电，麦当劳聘请前麦肯锡合伙人，以推动美国销售复苏。",
      "sourceUrl": "https://www.cls.cn/detail/2539462",
      "publishedAt": "2026-11-19T16:00:12.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，麦当劳聘请前麦肯锡合伙人，以推动美国销售复苏。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_ff8ddfb51772",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "王毅：这是一次和平峰会，中俄美元首会晤为新时期大国协调互动构建了新范式",
      "sourceUrl": "https://wallstreetcn.com/articles/3786307",
      "publishedAt": "2026-11-19T15:56:22.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "王毅送别美俄元首后举行记者会\n11月19日，中共中央政治局委员、外交部长王毅举行中外记者会。王毅表示，我刚刚在机场相继送别了特朗普总统和普京总统，所以让大家在这久等了，各位辛苦了。这几天大家积极地报道这次APEC会议，我也代表主办方向各位记者表示我们衷心的感谢。\n王毅：会议达成深圳展望，这是APEC中国年最重要的成果\n\n11月19日，中共中央政治局委员、外交部长王毅举行中外记者会。王毅表示，当今国",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_73eec653183a",
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
      "title": "SpaceX经济学：一艘星舰=4亿美元收入，回本周期不到20周，远快于AI云！",
      "sourceUrl": "https://wallstreetcn.com/articles/3786306",
      "publishedAt": "2026-11-19T15:56:18.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "SpaceX的星舰正在重塑卫星互联网的商业模式：通过大幅提升卫星部署效率、压低单位发射成本，将火箭运载能力转化为Starlink更快的收入增长和资本回报。\n摩根士丹利最新报告指出，单次星舰满载发射可为Starlink带来约4亿美元年化收入，收入回收期约13周，EBIT回收期约19周，盈利效率甚至超过新兴云计算（neocloud）业务。\n这一测算基于每枚星舰搭载50颗Starlink V3卫星、每颗",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c829a4d67ca1",
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
      "title": "财联社11月19日电，美联储副主席杰斐逊表示，对改变通胀目标不感兴趣。",
      "sourceUrl": "https://www.cls.cn/detail/2539459",
      "publishedAt": "2026-11-19T15:52:08.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，美联储副主席杰斐逊表示，对改变通胀目标不感兴趣。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5ebfa695b7b5",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社11月19日电，费城半导体指数回吐此前一度高达近5%的涨幅，现已转跌。",
      "sourceUrl": "https://www.cls.cn/detail/2539452",
      "publishedAt": "2026-11-19T15:40:31.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，费城半导体指数回吐此前一度高达近5%的涨幅，现已转跌。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_bc29242eaf5e",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "纳指转跌 迅速回吐此前2%的涨幅 市场静待Anthropic上市",
      "sourceUrl": "https://www.cls.cn/detail/2539450",
      "publishedAt": "2026-11-19T15:37:13.000Z",
      "fetchedAt": "2026-11-19T17:27:25.449Z",
      "timeConfidence": "source",
      "summary": "【纳指转跌 迅速回吐此前2%的涨幅 市场静待Anthropic上市】财联社11月19日电，纳斯达克指数由涨转跌，迅速回吐此前约2%的涨幅。道琼斯指数向下跌破50000点，最新报49706.13点，日内下跌1%。市场正密切关注人工智能公司Anthropic即将开启的上市交易。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_02d7dcdaa2a7",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "美联储副主席杰斐逊：目前AI热潮正推高通胀，未来生产率提升或推动物价下降",
      "sourceUrl": "https://wallstreetcn.com/articles/3786305",
      "publishedAt": "2026-11-19T15:32:24.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "美联储副主席菲利普·杰斐逊（Philip Jefferson）周四表示，快速推进的人工智能（AI）基础设施建设正通过拉动需求对美国通胀施加上行压力，而有助于缓解价格压力的潜在生产率提升则要到“未来”才会出现。\n杰斐逊在向巴西央行一场会议提交的预先准备好的演讲稿中表示，AI热潮可能同时影响需求和供给、但冲击发生时间点不同。\n杰斐逊说：“在需求端，对该技术的乐观情绪一直在推高企业在数据中心、先进计算设",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5205715e17d0",
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
      "title": "拼多多电话会：千亿扶持计划仍在投入期，持续加码商家扶持与供应链建设",
      "sourceUrl": "https://wallstreetcn.com/articles/3786302",
      "publishedAt": "2026-11-19T15:32:08.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "拼多多正将供应链建设推向更核心的战略位置。在国内，公司从农业产区、农村物流向制造业产业带延伸，试图通过基础设施投入和商家扶持，推动商品品质升级与产业带品牌化；在海外，面对贸易规则变化，公司则将本地仓储、物流及履约网络建设作为下一阶段业务发展的重点，帮助中小商家降低跨境经营成本。\n这一战略背后，是拼多多对电商竞争逻辑的重新布局。随着国内平台竞争持续加剧，单纯依靠价格和营销已难以形成长期优势，而海外市",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f6d9e17ba45e",
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
      "title": "日产高管谈速成车：新势力曾快速迭代，标准趋严后形成更好认知",
      "sourceUrl": "https://www.yicai.com/news/103447210.html",
      "publishedAt": "2026-11-19T15:05:31.000Z",
      "fetchedAt": "2026-11-19T17:27:19.004Z",
      "timeConfidence": "source",
      "summary": "现在各种标准的限制也在陆续出台。“绝对不能做速成车，品质是我们的底线。”近日，东风日产销售总经理辛宇在接受包括第一财经采访时谈起速成车。他称：“在汽车行业这么多年，我也非常理解，尤其很多新势力此前快速迭代产品，其实这没有谁对谁错。现在各种标准的限制也在陆续出台，这么几轮的交互后，大家都会形成一个更好的认知。我认为这个过程，也是整个中国汽车工业发展一个必须的过程，所以我认为这也很正常。”\n\n他举例说",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_afb747c9ff58",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
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
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "Anthropic上市首日开盘价预计较IPO发行价高20%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076797734458503",
      "publishedAt": "2026-11-19T14:53:06.000Z",
      "fetchedAt": "2026-11-19T17:27:55.399Z",
      "timeConfidence": "source",
      "summary": "Anthropic在纳斯达克上市首日开盘价预计为99.60美元，发行价为每股83美元，开盘价预计较IPO发行价高20%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2f6bbad80e47",
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
      "title": "Anthropic创纪录IPO提振市场，美股期货涨幅扩大，纳指100期货涨2%",
      "sourceUrl": "https://wallstreetcn.com/articles/3786267",
      "publishedAt": "2026-11-19T14:52:32.000Z",
      "fetchedAt": "2026-11-19T07:17:12.469Z",
      "timeConfidence": "source",
      "summary": "Anthropic创纪录IPO主导市场情绪，美股期货受提振回升。与此同时，美元走强、铜价大跌后部分修复、油价维稳。\n11月19日，美股期货涨幅扩大，纳斯达克100指数期货涨2%，标普500指数期货涨1.1%，道指期货涨0.7%。\n悉尼Minotaur Capital的投资组合经理兼联合创始人阿米娜·罗森伯格（Armina Rosenberg）表示：“短期来看，此次IPO是衡量投资者对人工智能兴趣的",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4ce19cc4d790",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 49,
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
      "attentionScore": 49,
      "llmScores": [
        63,
        35
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_f101880ef7bc",
      "timeFixed": true
    },
    {
      "title": "亚太经合组织互联互通蓝图",
      "sourceUrl": "https://wallstreetcn.com/livenews/3202655",
      "publishedAt": "2026-11-19T14:50:50.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "据新华社，我们强调，互联互通促进本地区商品、服务、资金和人员流动，有助于密切经济联系、推动长期经济增长；我们以《2040年亚太经合组织布特拉加亚愿景》为指引，朝着建设开放、活力、强韧、和平的亚太共同体迈进，实现亚太人民和子孙后代的共同繁荣。\n\n我们肯定《亚太经合组织互联互通蓝图（2015－2025）》十年来为推进互联互通合作发挥的作用。新兴趋势和不断演变的需求正在重塑本地区互联互通格局。我们鼓励各",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3f3db40a05b5",
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
      "title": "阿里财报会释放对国产芯片信心，阿里云2030年目标保持不变",
      "sourceUrl": "https://www.yicai.com/news/103447201.html",
      "publishedAt": "2026-11-19T14:39:56.000Z",
      "fetchedAt": "2026-11-19T17:27:19.004Z",
      "timeConfidence": "source",
      "summary": "在2027年之后，阿里巴巴绝大部分新增的AI芯片供给都会以平头哥为主。“国产算力进度超出我们的预期”，11月19日晚，阿里财报发布后的电话会上，阿里巴巴集团CEO吴泳铭释放出对国产算力的信心，他表示，随着平头哥产能爬坡，国产算力在阿里整体算力中的比例将会持续提升，将成为阿里自身云收入增长的主要引擎。\n\n吴泳铭提到，在阿里巴巴2030年的长期目标规划中，阿里巴巴的AI基础设施一直都是基于平头哥的国产",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6c587ef78f71",
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
      "title": "首批主动ETF偏爱银行股，六大行等18只个股被重仓",
      "sourceUrl": "https://www.yicai.com/news/103447200.html",
      "publishedAt": "2026-11-19T14:11:59.000Z",
      "fetchedAt": "2026-11-19T17:27:19.004Z",
      "timeConfidence": "source",
      "summary": "谁的仓位最重？首批18只主动ETF将于11月23日集中上市，持仓情况备受关注。尽管当前仍处于建仓期，但日前披露的前十大重仓股已反映出底仓配置思路。\n\n整体来看，上述产品“红利打底+算力增强”的配置特征明显。在高分散、求稳健的主流投资策略下，银行是最受偏爱的板块之一，在前十大重仓股中的仓位占比总体超过20%。其中，国有六大行均在列，股份行中招商银行、中信银行、兴业银行被青睐，另有江苏银行、青岛银行、",
      "sourceName": "第一财经",
      "category": "products",
      "tags": [
        "产品发布"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d8a3d49f401d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 81,
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
      "passesTierGate": true,
      "confidence": "high",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
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
          "score": 87,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "产品动态"
      ],
      "eventId": null
    },
    {
      "title": "对冲基金大幅低配科技股，高盛嗅到逼空机会：Anthropic上市日或成转折点",
      "sourceUrl": "https://wallstreetcn.com/articles/3786303",
      "publishedAt": "2026-11-19T13:52:34.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "对冲基金对科技股的极端低配，正在为市场反弹埋下伏笔，而Anthropic创纪录IPO的落地，可能成为触发资金回流、推动空头回补的关键催化剂。\n高盛交易台主管Rich Privorotsky在周四晨报中指出，对冲基金科技股净敞口较基准指数低配约11个百分点，接近五年来最低水平。与此同时，市场庄家的伽马敞口极度偏空，而波动率趋于稳定，这些因素都可能为反弹创造条件。纳斯达克期货周四早盘上涨近2%。\n这一",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0860b6c3e123",
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
          "score": 94,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 81,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
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
      "title": "集邦咨询：部分CSP下修订单抵销北美拉货，2027年NAND Flash供需将反转走跌",
      "sourceUrl": "https://wallstreetcn.com/livenews/3202619",
      "publishedAt": "2026-11-19T13:51:30.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "根据TrendForce集邦咨询最新存储器产业研究，2027年全球NAND Flash产业将迎来供需反转；在整体供给量将高速成长的情况下，因部分云端服务供应商（CSP）大幅下修Enterprise SSD订单，而且来自消费性电子产品的需求可能进一步放缓，市场供过于求情势将加剧，TrendForce集邦咨询预估，2027年第一季起整体NAND Flash合约价格将转向下跌趋势，跌幅可能逐季扩大。\nT",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_79c15472dd31",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 53,
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "三季度营收利润双降，网易回应短剧争夺用户注意力",
      "sourceUrl": "https://www.yicai.com/news/103447183.html",
      "publishedAt": "2026-11-19T13:49:38.000Z",
      "fetchedAt": "2026-11-19T17:27:19.004Z",
      "timeConfidence": "source",
      "summary": "网易游戏遭遇新品“空窗期”。短剧的爆发让游戏大厂也感受到了争夺用户时间的压力。\n\n11月19日晚，在网易2026年第三季度业绩电话会上，管理层被问及短剧对游戏行业的影响。网易创始人兼CEO丁磊坦言，短剧今年呈现爆炸式发展，对用户注意力的吸引力巨大，短期内确实会对游戏产生影响。\n\n在这一表态背后，网易今日交出了一份不及市场预期的成绩单。三季度网易净收入279亿元，同比下降1.8%；归属于公司股东的净",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4d654fbbd36d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
          "score": 35,
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
      "title": "沃尔玛Q3营收、净利双双超预期，上调全年业绩指引，高收入消费者成新增长引擎 | 财报见闻",
      "sourceUrl": "https://wallstreetcn.com/articles/3786304",
      "publishedAt": "2026-11-19T13:49:12.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "沃尔玛第三季度营收和盈利双双超出预期，并上调全年业绩指引，显示这家全球最大零售商凭借价格优势和电商扩张持续吸引各收入阶层消费者。\n沃尔玛第三季度营收1,888.4亿美元，同比增长5.2%，高于市场预估的1,871.7亿美元；调整后每股收益0.65美元，亦超出预估的0.64美元；经营现金流达294亿美元。公司同步上调全年调整后每股收益预期至2.84美元至2.89美元，高于此前指引的2.80美元至2.",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_21f96dce5fd9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 92,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "一财社论：国企专业化整合，要以创新能力强的企业为主体",
      "sourceUrl": "https://www.yicai.com/news/103447167.html",
      "publishedAt": "2026-11-19T13:39:16.000Z",
      "fetchedAt": "2026-11-19T17:27:19.004Z",
      "timeConfidence": "source",
      "summary": "一刀切、大吃小、救助式，是对过去整合过程中教训的总结，也是今后要避免的。11月18日，国务院国资委举办进一步深化国资国企改革专题研讨班。国资委相关负责人表示，新一轮改革要聚焦产业链短板和创新资源分散、同质化竞争等三个重点问题，推进专业化整合，整合要以创新能力强的企业为主体开展。\n\n过去多年，积极推进专业化整合一直是国有企业深化改革的重要内容，取得了显著成果，也暴露出一些需要改进的方面，持续深化这方",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_02f0b000d1ef",
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
      "title": "APEC“深圳展望”出炉：携手搭建亚太共同体“四梁八柱”",
      "sourceUrl": "https://www.yicai.com/news/103447166.html",
      "publishedAt": "2026-11-19T13:37:50.000Z",
      "fetchedAt": "2026-11-19T17:27:19.004Z",
      "timeConfidence": "source",
      "summary": "推动建设和衷共济、开放融通、开拓创新、包容发展的亚太共同体。据新华社报道，11月19日上午，国家主席习近平在深圳国际交流中心主持亚太经合组织第三十三次领导人非正式会议，并发表题为《建设亚太共同体，续写“亚太奇迹”新篇章》的重要讲话。\n\n习近平指出，30多年前，亚太经合组织应运而生，开启了建设亚太共同体的壮阔历程。30多年来，亚太地区面貌日新月异，创造了经济快速发展的“亚太奇迹”。面对新的机遇和挑战",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9b5995e15eb7",
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
      "title": "携程加码入境游，这些跨境游细分赛道最具潜力",
      "sourceUrl": "https://www.yicai.com/news/103447155.html",
      "publishedAt": "2026-11-19T13:33:34.000Z",
      "fetchedAt": "2026-11-19T17:27:19.004Z",
      "timeConfidence": "source",
      "summary": "出境游与入境游为全球旅游市场注入活力。跨境游成为拉动全球旅游消费市场的关键点。在11月19日举行的2026 Trip.com携程集团全球合作伙伴峰会（下称“峰会”）上，携程集团联合创始人、董事局主席梁建章表示，旅行行业拥有“乘数效应、基础设施效应和消费升级”三层经济效应，估测未来5年将有2亿国际游客到中国旅游，因此携程拟加码投入百亿级资金用于相关推广。部分旅游业者表示，随着免签、交通与支付便利程度",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b46793ef881f",
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
      "title": "美股多头迎来新麻烦：通胀、加息与盈利增长放缓同时来袭",
      "sourceUrl": "https://wallstreetcn.com/articles/3786300",
      "publishedAt": "2026-11-19T13:25:01.000Z",
      "fetchedAt": "2026-11-19T17:27:04.436Z",
      "timeConfidence": "source",
      "summary": "美股多头正面临日益棘手的局面：美联储政策立场可能进一步转鹰，而企业盈利增长动能却在减弱。货币政策收紧与盈利预期下修的双重压力，正在动摇部分机构投资者对美股的信心。\n研究机构TS Lombard已将美股配置比例下调350个基点，同时将现金仓位提高10.3个百分点至14%，并将资金转向欧洲和印度市场。其12个月组合贝塔值也从1.07降至0.92，显示整体风险敞口明显收缩。\nTS Lombard担忧的并",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2dbd844286f5",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 64,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
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
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "把上海国际航运中心建设不断向纵深推进！陈吉宁调研中远海运集团",
      "sourceUrl": "https://www.yicai.com/news/103447137.html",
      "publishedAt": "2026-11-19T13:24:01.000Z",
      "fetchedAt": "2026-11-19T17:27:19.004Z",
      "timeConfidence": "source",
      "summary": "统筹好发展和安全，共同补齐高端航运服务短板，推动航运数智化绿色化转型。上海市委书记陈吉宁今天下午在调研中国远洋海运集团有限公司时指出，要深入学习贯彻党的二十届五中全会和习近平总书记考察上海重要讲话精神，更好担当国家战略使命，统筹好发展和安全，共同补齐高端航运服务短板，推动航运数智化绿色化转型，把上海国际航运中心建设不断向纵深推进，为上海“五个中心”建设和高质量发展作出更大贡献。\n\n陈吉宁来到中远海",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_60613f896796",
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
      "title": "海外网友许愿“也能有一个深圳”，“深圳大故事”究竟讲了什么",
      "sourceUrl": "https://www.yicai.com/news/103446993.html",
      "publishedAt": "2026-11-19T13:03:37.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "解码数字里的“深圳大故事”APEC（亚太经济合作组织）会议周系列活动的举办，让深圳成了刷屏海外社交媒体的“大网红”，“希望我的祖国也能有一个深圳”甚至成了海外网友的流行语。\n\n据新华社报道，11月18日晚，国家主席习近平和夫人彭丽媛在深圳国际交流中心举行宴会，欢迎出席APEC第三十三次领导人非正式会议的来宾。\n\n习近平在致祝酒辞时谈到：“我曾讲过，看千年的中国去西安，看五百年的中国去北京，看一百年",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a4dc0d648fab",
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
      "title": "AI进化速递 | 千问已在平头哥上训练下一代模型",
      "sourceUrl": "https://www.yicai.com/news/103447108.html",
      "publishedAt": "2026-11-19T12:58:57.000Z",
      "fetchedAt": "2026-11-19T17:27:19.004Z",
      "timeConfidence": "source",
      "summary": "AI进化速递 | 千问已在平头哥上训练下一代模型①第二批可信数据空间创新发展试点启动；②我国自主研发酶设计基座大模型“按需定制”工业酶；③吴泳铭：千问已在平头哥上训练下一代模型；④豆包工作日活突破800万，企业客户ARR突破20亿元；⑤马斯克：预计未来12-18个月Optimus机器人能做家务劳动；⑥SpaceX正在开发AI模型Grok 4.8。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2342ecb5fc1f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 50,
      "rawScore": 50,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 5,
        "recency": 15,
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
      "title": "热门中概股美股盘前多数上涨，知乎涨超10%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076684460200840",
      "publishedAt": "2026-11-19T12:57:53.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，热门中概股美股盘前多数上涨，截至发稿，知乎涨超10%，拼多多、爱奇艺涨超6%，京东、蔚来涨超1%，哔哩哔哩涨0.69%，小鹏集团涨0.21%；网易跌超6%，阿里巴巴跌超1%，理想汽车跌0.61%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a5f070f8c32b",
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
      "title": "尼泊尔国会议员塔帕：对高山问题没能进入COP31主议程感到失望",
      "sourceUrl": "https://international.caixin.com/2026-11-19/102506798.html",
      "publishedAt": "2026-11-19T12:56:03.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "塔帕认为，最强有力的机制之一，是在国际上建立一个专门针对高山的部门或机构，将所有焦点纯粹集中在高山议题上\n       　　【财新网】正在土耳其安塔利亚举行的2026年联合国气候变化大会（COP31）上，喜马拉雅山区国家尼泊尔与不丹试图推动将高山地区气候变化问题纳入大会正式议程，但这一提案最终未获通过。\n　　尼泊尔现任国会议员苏尼尔·巴哈杜尔·塔帕（Sunil Bahadur Thapa）在COP",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_639cc784cb59",
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
      "title": "超过10万名英国散户投资者争相认购Anthropic IPO股票",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076679384732809",
      "publishedAt": "2026-11-19T12:52:43.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "约11万名英国散户投资者参与了人工智能巨头Anthropic规模创纪录的810亿美元首次公开募股（IPO），合计获配价值3亿美元的股票。在美国市场周四开盘后，该公司将在纳斯达克证券交易所正式上市。此次英国散户发行由金融科技平台RetailBook协调组织，认购需求远超可供分配的股票数量。英国最大的自主投资平台Hargreaves Lansdown的客户最终仅获得了其申请认购股份的约三分之一。（新浪",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_40822f7fe5e5",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 70,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 19,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 72,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "selectedForFeatured": true,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "美股大型科技股盘前普涨，英特尔涨超4%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076678200644482",
      "publishedAt": "2026-11-19T12:51:30.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，美股大型科技股盘前普涨，截至发稿，英特尔涨超4%，谷歌涨超3%，特斯拉、亚马逊涨超2%，英伟达、微软、Meta涨超1%，苹果涨0.46%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_d1ebb26467ec",
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
      "title": "东阳光：宜昌药业股份上调增持金额区间至4亿-8亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076675447280517",
      "publishedAt": "2026-11-19T12:48:42.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，东阳光公告，近日，公司收到控股股东之一致行动人宜昌药业股份通知，宜昌药业股份拟对其增持金额区间进行调整。原计划增持金额为不低于3亿元人民币（含）、不高于6亿元人民币（含），调整为增持金额不低于4亿元人民币（含）、不高于8亿元人民币（含）。调整后，控股股东及其一致行动人合计增持金额调整为不低于7亿元人民币（含），不高于14亿元人民币（含）。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0869469815d8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 61,
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "title": "宁德时代：11月19日回购85.05万股A股股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076674230473601",
      "publishedAt": "2026-11-19T12:47:28.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，宁德时代公告，公司于2026年11月19日通过深圳证券交易所回购A股股份850473股，回购价格区间为每股233.39元-237元，回购总金额为1.9998亿元，所回购股份拟用于注销。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_17f16481b4d1",
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
        "观点",
        "快讯"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "Anthropic七位联合创始人掌握多数投票权",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076665115480966",
      "publishedAt": "2026-11-19T12:38:12.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "Anthropic在招股书中表示，公司认为七位联合创始人 “具备独特资质，能够守护企业使命”。这几位联合创始人是创始人有限责任公司（Founder LLC）的唯一成员。这家新设实体持有公司流通股份50.1% 的投票权。申报文件显示，该股权架构让创始人 “在可预见的未来，能够决定提交股东大会表决的全部事项的投票结果”。申报文件披露，结合个人持股以及在 Founder LLC 中的权益，七位联合创始人",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2c3fbfac1e03",
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
      "title": "双良节能：子公司签订2.27亿元日常经营合同",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076658236544130",
      "publishedAt": "2026-11-19T12:31:12.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，双良节能公告，公司全资子公司江苏双良冷却系统有限公司与中国电力工程有限公司签订了《阿尔及利亚特贝萨联合循环电厂项目直接空冷系统采购合同》，买方为阿尔及利亚特贝萨联合循环电站项目的总承包人，合同标的包括直接空气冷却系统设备及其附属设备、专用工具、技术服务等，合同金额为人民币22690万元，占公司2025年度经审计营业收入比重为3.00%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a8756ffa606f",
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
      "title": "东南亚增长分化与资产定价切换，欧盟科技政策转向主权安全产业化，中国化债收尾但财政扩张待恢复---1119宏观脱水",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3786296",
      "publishedAt": "2026-11-19T12:30:24.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "三季度区域增长明显分层，新加坡与印度尼西亚超预期，马来西亚高位回落仍领先，泰国不及预期。资产定价核心变量正从AI出口红利切换为政策信用与外部融资条件。\n欧盟科技政策正从规则优先转向主权安全产业化，地缘安全、供应链依赖与技术代际差距叠加推动政策转向。欧盟将规则与补贴、公共采购、本土需求及基础设施结合，形成对内简化、对外安全化的双轨结构，但产业闭环尚未完成。\n本轮化债推进较快，特殊再融资债发行规模已超",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8bdad9b80888",
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
      "title": "沃尔玛第三财季营收1888.35亿美元，同比增长5.2%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076655338132358",
      "publishedAt": "2026-11-19T12:28:15.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "沃尔玛11月19日公布2027财年第三财季业绩。截至10月31日的三个月，公司实现营收1888.35亿美元，同比增长5.2%；经营利润77.7亿美元，同比增长16%；归属于沃尔玛的净利润为49.45亿美元，同比下降19.5%。调整后每股收益为0.65美元，高于上年同期的0.62美元。沃尔玛将2027财年净销售额增幅预期上调至4.9%至5.2%（固定汇率），调整后经营利润增幅预期上调至8%至8.6%",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_613798b85d0c",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 68,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 21,
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
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 35,
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "地天板、天地板轮番上演，九阳股份暴涨逾2倍后多空极致拉锯",
      "sourceUrl": "https://www.yicai.com/news/103447056.html",
      "publishedAt": "2026-11-19T12:24:56.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "连续3个交易日，该公司股价在涨停与跌停之间拉锯。11月19日，九阳股份（002242.SZ）盘中再度上演“地天板”。在这之前的两天，该公司股价也先后走出“地天板”“天地板”行情，连续3个交易日盘中多空博弈激烈。\n\n该公司因股价暴涨而受到市场关注，自9月28日以来至11月19日，股价累计涨幅达到232.37%，成为9月以来A股市场涨幅最大的个股。资产注入和业务重组预期、与华为存在战略合作关系、机器人",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0ebbccb231bf",
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
          "score": 86,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "Anthropic IPO募资规模超越SpaceX，看多看空者并存",
      "sourceUrl": "https://www.yicai.com/news/103447053.html",
      "publishedAt": "2026-11-19T12:24:07.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "83美元发行价是市场给Anthropic出的第一道估值考题。北京时间11月19日，Anthropic将在纳斯达克挂牌上市，股票代码为“ANT”。\n\n此前一天，Anthropic将IPO发行价定为83美元/股，高于此前70至78美元发行区间的上限，并将发行规模扩大至9.8亿股，公开发行募资约813亿美元。\n\n加上同期约260亿美元的私募配售，此次IPO及同期私募配售合计融资约1073亿美元。\n\n其中",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_97b7edea9e17",
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
          "score": 86,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 51,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
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
      "title": "8地入选6G创新发展试点，主攻哪些赛道",
      "sourceUrl": "https://www.yicai.com/news/103447049.html",
      "publishedAt": "2026-11-19T12:18:28.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "中长期来看，6G作为新一代智能化信息基础设施，有望与人工智能、算力网络、低空经济等领域协同发展，拓展跨产业应用空间。我国第六代移动通信（6G）正加速从实验室构想走向产业落地。\n\n工业和信息化部近日复函同意北京市、河北省、上海市、江苏省、浙江省、安徽省、湖北省、广东省8个省（市）开展6G创新发展部省协同试点工作，进一步凝聚优势资源，形成部省协同创新合力，统筹推进6G技术创新、产业发展和应用培育。\n\n",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0c0c0dd998fd",
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
      "title": "专访｜世界粮食计划署气候与韧性司司长：响应越早，救灾总成本越低",
      "sourceUrl": "https://science.caixin.com/2026-11-19/102506793.html",
      "publishedAt": "2026-11-19T12:18:20.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "研究和实例已证实，如果进行预见性行动，每投入1美元，平均可节省3.5至7美元的灾害损失和灾后响应成本\n    \n     \n     联合国世界粮食计划署（WFP）全球气候与韧性司司长乔拉顿。图：WFP提供\n    \n   \n       　　【财新网】“早期气象预警技术发展到今天，我们再也没有不作为的借口了。”在土耳其安塔利亚气候大会（COP 31）期间，联合国世界粮食计划署（WFP）全球气候与",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0c618500b8b3",
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
      "title": "吴泳铭：阿里巴巴2031财年（2030自然年）云外部收入1000亿美元、利润率超过20%的目标不变",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076644027290761",
      "publishedAt": "2026-11-19T12:16:45.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，11月19日，在阿里巴巴2027财年第二季度财报分析师电话会上，集团CEO吴泳铭表示，综合各因素影响，阿里巴巴2031财年（2030自然年）云外部收入1000亿美元、利润率超过20%的目标不变。本季度，阿里云外部经常性收入同比增长67%，经调整EBITA同比增长121%，EBITA利润率提升至14.5%。AI相关产品季度收入179.18亿元人民币，在阿里云外部经常性收入中的占比达到49",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e3490f17cfe6",
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
          "score": 20,
          "reasons": [
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
      "title": "吴泳铭：平头哥三代GPU加速推进，正成为阿里全栈AI的支撑底座",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076643044430981",
      "publishedAt": "2026-11-19T12:15:45.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，11月19日，在阿里巴巴2027财年第二季度财报分析师电话会上，集团CEO吴泳铭表示，平头哥三代GPU产品路线图正在加速推进，基于自研国产算力的基础设施，正在成为阿里全栈AI技术的支撑底座，将逐步承载集团内外部在模型训练、模型推理和Agentic任务上的工作负载，并成为推动AI营收增长的基础。吴泳铭表示，今年真武M890全面上线，2027年V900、2028年J900的生产供应链全面推",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e382822e6cbf",
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
          "score": 19,
          "reasons": [
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
      "title": "今年新增专项债发行规模再次突破4万亿|财税益侃",
      "sourceUrl": "https://www.yicai.com/news/103447035.html",
      "publishedAt": "2026-11-19T12:15:08.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "近三年新增专项债发行规模均维持在4万亿元以上。为了扩大有效投资、化解地方债务风险，地方政府通过发行新增专项债券筹资的规模继续处于高位。\n\n根据企业预警通数据，截至今年11月18日，地方政府发行新增专项债券突破4万亿元（约4.1万亿元）。根据中央与地方预算报告，今年新增专项债券发行限额为4.4万亿元，这意味着今年新增专项债发行进度约93%，新增专项债发行近尾声。\n\n专项债券已经是地方政府稳投资、扩内",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e615d5050e6c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "阿里巴巴电话会：正使用自研芯片训练下一代新模型，AI产品年化收入已超过100亿美元",
      "sourceUrl": "https://wallstreetcn.com/articles/3786299",
      "publishedAt": "2026-11-19T12:10:49.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "在周四晚间召开的电话会上，阿里巴巴首席执行官表示，公司正使用自研芯片训练下一代新模型，AI相关产品的年化收入已超过100亿美元。\n电话会文字实录：\n\n本季度，阿里巴巴集团收入增长加速，盈利能力持续提升。集团总收入在 AI、云与算力服务板块同比增长 10%，其中外部收入增速加快至 64%。与此同时，外部客户经常性收入的同比增长率提升至 67%。经调整 EBITDA 利润率升至 14.5%。AI 相关",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5a3ce260afe1",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 42,
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
      "title": "程一笑：将把AI短剧作为丰富平台内容生态的重要方向",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076636904182914",
      "publishedAt": "2026-11-19T12:09:30.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，11月19日，在快手2026年第三季度业绩电话会上，快手科技创始人兼首席执行官程一笑表示，公司将把AI短剧作为丰富平台内容生态的重要方向，并围绕优质供给、差异化内容和消费体验进一步推进短剧业务。 快手平台的短剧供给和营销需求也在同步增长。截至2026年9月，平台日均活跃短剧数量较2026年1月增长超过350%。受益于AI短剧和真人短剧等内容供给持续丰富，以及用户短剧消费需求提升，第三季",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_3102bcc0bdd1",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
      "title": "快手业绩电话会：公司可利用资金达人民币1272亿元，前三季度股东回报超58亿港元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076636311327622",
      "publishedAt": "2026-11-19T12:08:54.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，11月19日，在快手2026年第三季度业绩电话会上，快手CFO金秉表示，公司将持续把提升股东回报作为重要资本配置方向，并在今年剩余时间继续执行160亿港元的三年期股份回购计划。股东回报方面，第三季度，快手累计回购金额约14.1亿港元；今年前三季度，快手完成包括分红和回购在内的股东回报累计超过58亿港元。截至2026年9月30日，快手现金及现金等价物、定期存款、金融资产和受限制现金等可利",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_66ddd265761d",
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
          "score": 35,
          "reasons": [
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
      "eventId": null
    },
    {
      "title": "Kling 4.0上线后可灵AI流水实现提升，用户规模与ARPPU同步增长",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076635958137992",
      "publishedAt": "2026-11-19T12:08:32.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，11月19日，在快手2026年第三季度业绩电话会上，快手科技创始人兼首席执行官程一笑表示，Kling 4.0上线后，可灵流水实现提升，当前收入增长由B端企业客户API调用和P端专业创作者付费订阅双轮驱动，用户规模与ARPPU均保持增长。Kling 4.0于10月15日全面上线，并于10月28日面向全球企业客户和开发者开放API。目前，该模型已进入影视、短剧及漫剧制作、广告营销、创意设计",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_593c9f407b9d",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 61,
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
      "title": "AI服务器储备订单达5300亿元，联想第一大业务要换了？",
      "sourceUrl": "https://www.yicai.com/news/103447026.html",
      "publishedAt": "2026-11-19T12:07:53.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "联想不只是PC公司。长期以来，PC业务一直是联想最鲜明的标签。但随着AI基础设施的爆发性增长，联想集团的收入和利润结构已经发生显著变化。11月19日，联想集团（00992.HK）公布2026/27财年第二季度业绩，营收首次突破2000亿人民币，同比增长48%；经调整归母净利润为91亿人民币，同比增长166%，经调整净利润率升至4.5%。本季度最突出的变化来自AI基础设施业务。第二财季联想集团AI相",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a36e51e55484",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 60,
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
      "title": "英国10月柴油价格创历史新高",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076633173365896",
      "publishedAt": "2026-11-19T12:05:42.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "英国国家统计局18日公布的数据显示，英国10月柴油平均价格升至每升199.5便士（1英镑约合8.77元人民币），达1996年1月有统计记录以来最高水平，推动英国通胀率升至一年来新高。数据显示，10月英国柴油平均价格较上月每升上涨7便士，汽油平均价格每升上涨5.2便士至174.7便士，为2022年8月以来最高水平。当月，英国机动车燃油价格同比上涨33.2%，为2022年7月以来最大同比涨幅。（新华社",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e91e138bbf49",
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
      "title": "多股拉响“面值退”警报：有公司紧急回购，多只ST股面临“双压”",
      "sourceUrl": "https://www.yicai.com/news/103447011.html",
      "publishedAt": "2026-11-19T12:05:02.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "有公司紧急召开董事会会议审议回购预案。市场连续回调，股价持续下挫，一些A股公司拉响了退市警报，回购、增持随之启动。\n\n11月18日晚间，金科股份（000656.SZ）抛出回购预案，拟回购金额1.5亿元至3亿元。数天前的16日，该股报收于0.97元，随后两个交易日也均收于1元下方。回购披露后，该股11月19日高开高走，最终收于1.02元，涨幅9.68%。\n\n也在近期跌破破1元“红线”的山鹰国际（60",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_45b53d30f8e9",
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
      "title": "纳斯达克：Anthropic IPO 将于美国东部时间上午9:50（北京时间22:50）开始报价。",
      "sourceUrl": "https://wallstreetcn.com/livenews/3202573",
      "publishedAt": "2026-11-19T12:02:53.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "纳斯达克：Anthropic IPO 将于美国东部时间上午9:50（北京时间22:50）开始报价。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_61911c4fb0ba",
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
      "title": "沃尔玛第三季度营收1,888.4亿美元，预估1,871.7亿美元。 沃尔玛第三季度调整后每股收益0.65美元，预估0.64美元。 沃尔玛预计全年调整后每股收益2.84美元至2.89美...",
      "sourceUrl": "https://wallstreetcn.com/livenews/3202572",
      "publishedAt": "2026-11-19T12:00:56.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "沃尔玛第三季度营收1,888.4亿美元，预估1,871.7亿美元。\n\n沃尔玛第三季度调整后每股收益0.65美元，预估0.64美元。\n\n沃尔玛预计全年调整后每股收益2.84美元至2.89美元，此前预计2.80美元至2.87美元，市场预估2.89美元。\n\n沃尔玛美股盘前跌超2%。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9b2f6138332e",
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
      "title": "美股存储板块盘前走强，SK海力士涨超6%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076625791538056",
      "publishedAt": "2026-11-19T11:58:12.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，美股存储板块盘前走强，SK海力士、美光科技、西部数据、希捷科技美股盘前均涨超6%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_cdeded10482d",
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
      "title": "科技投资大佬Brad Gerstner：Anthropic凭什么\"10倍认购\"与AI时代的\"模型至上主义\"",
      "sourceUrl": "https://wallstreetcn.com/articles/3786298",
      "publishedAt": "2026-11-19T11:52:55.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "在半导体股票大跌、数据中心政策前景不明、英伟达CEO疑云未散的市场环境下，Anthropic的IPO依然获得10倍超额认购——这一现象背后，折射出AI时代最核心的投资逻辑之争。\nAltimeter Capital创始人Brad Gerstner在TomorrowX 峰会上详解了Anthropic IPO获追捧的三大驱动力：史上最大的潜在市场、大幅压缩的算力成本，以及一个反常识的事实——Anthro",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4d80336ea2ff",
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
      "title": "阿里最新财报：云外部收入增长64%，下一代超节点产品计划明年一季度推出",
      "sourceUrl": "https://www.yicai.com/news/103446997.html",
      "publishedAt": "2026-11-19T11:41:38.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "阿里云AI相关产品收入连续第十三个季度实现三位数同比增长。11月19日，阿里巴巴集团（BABA.NYSE/09988.HK）发布截至2026年9月30日的2027财年第二季度财报，财报显示，本季度阿里巴巴营收2715.19亿元，同比增长10%；经营利润为291.16亿元，同比增长443%，经调整EBITA同比增长260%至326.36亿元。\n\n报告期内，阿里经营活动产生的现金流量净额为156.9亿",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6416e1d8d2db",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 44,
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "全国虚拟电厂调节能力突破2000万千瓦，民企投资占比近半",
      "sourceUrl": "https://www.yicai.com/news/103446985.html",
      "publishedAt": "2026-11-19T11:38:00.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "虚拟电厂已在新能源消纳、电力保供等应用场景显现出关键调节作用。全国虚拟电厂最大调节能力突破2000万千瓦，提前一年完成既定目标。\n\n11月19日，国家能源局发布《中国虚拟电厂发展报告（2026）》（下称《报告》）。截至2026年6月底，全国已建成并投运虚拟电厂592个，同比增长78.9%；最大调节能力2042.8万千瓦，同比增长62.7%，提前完成2027年全国虚拟电厂调节能力达到2000万千瓦以",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_78a6acd956c9",
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
      "title": "追加4亿雷亚尔，奇瑞捷途加快巴西本地化",
      "sourceUrl": "https://wallstreetcn.com/articles/3786295",
      "publishedAt": "2026-11-19T11:37:47.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "进入巴西市场不到一年，捷途开始为当地生产做准备。\n当地时间11月18日，捷途宣布追加投资4亿雷亚尔，计划2027年在巴西生产T1、T2，并扩充产品线和经销商网络。加上此前公布的4亿雷亚尔，捷途在巴西的计划投资总额增至8亿雷亚尔。厂址拟于2027年一季度公布。\n这笔投入对应着捷途下一阶段的经营任务。随着产品和销售网络扩展，捷途需要同步完善当地的供货、配件供应和售后服务能力。\n品牌今年上半年进入巴西，",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8123e364444f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "摩根大通预计美联储将加息三次",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076604427490179",
      "publishedAt": "2026-11-19T11:36:28.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "摩根大通预计美联储将加息三次，分别在12月、1月和3月，使联邦基金利率达到4.5%-4.75%。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_6244fd3cb0e4",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 28,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 41,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": "event_9e320dba578d"
    },
    {
      "title": "财联社11月19日电，美国能源部长赖特表示，美国考虑加大对欧洲的柴油和石油出口。",
      "sourceUrl": "https://www.cls.cn/detail/2539258",
      "publishedAt": "2026-11-19T11:35:20.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，美国能源部长赖特表示，美国考虑加大对欧洲的柴油和石油出口。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e1ee132c0fde",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社11月19日电，摩根大通预计美联储将加息三次，分别在12月、1月和3月，使联邦基金利率达到4.5%-4.75%。",
      "sourceUrl": "https://www.cls.cn/detail/2539257",
      "publishedAt": "2026-11-19T11:34:59.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，摩根大通预计美联储将加息三次，分别在12月、1月和3月，使联邦基金利率达到4.5%-4.75%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_080efdf0b020",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 29,
          "reasons": [
            "命中关联主题 1 项",
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
          "score": 42,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态",
        "快讯"
      ],
      "eventId": "event_9e320dba578d"
    },
    {
      "title": "赣锋锂业：拟以2亿元—4亿元回购公司股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076590659900293",
      "publishedAt": "2026-11-19T11:34:33.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，赣锋锂业公告，拟使用自有资金和/或自筹资金以集中竞价方式回购公司部分人民币普通股A股股份，回购资金总额不低于人民币2亿元（含），不超过人民币4亿元（含），回购价格上限为57.47元/股。本次回购股份用于维护公司价值及股东权益，将在公司披露股份回购实施结果暨股份变动公告12个月后采用集中竞价交易方式全部出售。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_63861ade3669",
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
      "title": "图集｜中俄美三国元首首次举行面对面会晤 习近平主持",
      "sourceUrl": "https://photos.caixin.com/2026-11-19/102506772.html",
      "publishedAt": "2026-11-19T11:34:23.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "2026年11月19日下午，国家主席习近平在深圳同俄罗斯总统普京、美国总统特朗普举行中俄美元首会晤。图：新华社\n    \n   \n       　　【财新网】新华社消息，2026年11月19日下午，国家主席习近平在深圳同俄罗斯总统普京、美国总统特朗普举行中俄美元首会晤。\n　　据外交部发布的消息，俄美领导人感谢中方主办此次历史性会晤。三国元首就当前国际形势深入交换了意见，致力于维护战略稳定和国际安全",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_389a38e6da24",
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
      "title": "杭州国资加码具身大脑，原力无限三个月内再获第四轮融资",
      "sourceUrl": "https://wallstreetcn.com/articles/3786294",
      "publishedAt": "2026-11-19T11:34:00.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "原力无限三个月内连获四轮融资，浙江省、市两级国资接续入局，持续加码具身大脑研发与产业化。\n11月19日，原力无限科技控股（浙江）有限公司（简称“原力无限”）宣布完成数千万元Pre-B轮融资，由杭州市属国有资本投资运营平台杭州资本独家投资。公司表示，本轮资金将主要用于具身大脑AtomBrain研发、真实场景验证及产业化落地。\n这是原力无限三个月内的第四轮融资。\n今年8月，公司宣布完成A轮及A+轮融资",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c72b53da2a69",
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
      "title": "财联社11月19日电，Melius Research首次覆盖Anthropic并给予\"买入\"评级，目标价155美元。",
      "sourceUrl": "https://www.cls.cn/detail/2539255",
      "publishedAt": "2026-11-19T11:33:34.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，Melius Research首次覆盖Anthropic并给予\"买入\"评级，目标价155美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_cdf99cdd1e5c",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 46,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 3,
        "recency": 15,
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "爱回收经营利润增五成，自营业务撑起增长",
      "sourceUrl": "https://wallstreetcn.com/articles/3786293",
      "publishedAt": "2026-11-19T11:32:47.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "万物新生（爱回收）的收入增长，正在转化为更快的利润增长。\n11月19日，公司发布2026年三季报，营收64.53亿元，同比增长25.3%，超出此前指引区间高端。经调整经营利润同比增长50.7%至2.11亿元，利润率从2.7%升至3.3%。按美国通用会计准则计算，经营利润为1.91亿元，同比增长57.9%，净利润为1.40亿元，同比增长53.6%。\n这份财报的主要变化，是自营销售继续扩张，履约和销售",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2b3d405898ac",
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
      "title": "拼多多：三季度营收1083亿元，同比持平",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076600652895113",
      "publishedAt": "2026-11-19T11:32:37.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，拼多多发布第三季度财报，单季营收1083亿元，同比保持平稳；利润295亿元，同比基本持平。本季度，拼多多“千亿扶持”持续加码对“全产业链”的投入。受益于“千亿扶持”的生态效应，整个产业链的产品能力、研发能力、生产能力、组织能力以及品牌能力得到了系统性的提升，也为消费侧提供了更优质的新供给，供需两侧质效升级更加明显。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_3e63042ce4c6",
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
          "score": 20,
          "reasons": [
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
      "title": "财联社11月19日电，Coherent批准最高20亿美元的股票回购计划。",
      "sourceUrl": "https://www.cls.cn/detail/2539254",
      "publishedAt": "2026-11-19T11:32:06.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，Coherent批准最高20亿美元的股票回购计划。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_29f37cab12cc",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "拼多多Q3营收1083亿元，调整后每ADS收益21.04元｜财报见闻",
      "sourceUrl": "https://wallstreetcn.com/articles/3786292",
      "publishedAt": "2026-11-19T11:30:25.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "拼多多第三季度营收1,083亿元人民币，预估1,152.1亿元人民币。\n第三季度调整后每ADS收益 21.04元人民币，预估18.54元人民币。\n拼多多美股盘前拉升，现涨近2%，此前一度跌近3%。\n\n\n更新中风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e9a0acb8dca1",
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
          "score": 95,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 38,
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
      "title": "我国自主研发酶设计基座大模型“按需定制”工业酶",
      "sourceUrl": "https://www.cls.cn/detail/2539253",
      "publishedAt": "2026-11-19T11:28:57.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "【我国自主研发酶设计基座大模型“按需定制”工业酶】财联社11月19日电，我国自主研发的合成生物领域人工智能基础大模型——“天华开物”酶设计大模型19日在天津大学发布。该大模型与天津大学合成生物自动化设备结合，形成工业酶闭环迭代优化系统，一周内可以给出酶设计方案，让三个月内完成菌种定制化构建和目标产品制备工艺开发成为可能。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_36aa96a4736b",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "京蓝科技：公司靶材产线尚未量产，亦未产生相关营业收入及利润",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076584895468678",
      "publishedAt": "2026-11-19T11:28:25.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，京蓝科技公告，公司靶材产线尚未量产，亦未产生相关营业收入及利润，后续还需通过工艺优化、良率爬坡方可实现量产，任一环节故障均会拖慢量产节奏，未来能否达成设计产能及目标良率均存在较大不确定性。目前ITO靶材行业竞争格局已趋于成熟，市场中存在多家具备成熟生产技术、稳定客户渠道及规模化产能的国内外生产商。靶材业务下游客户对产品纯度、致密度等核心指标要求严苛，建立了严格的供应商准入及产品验证体系",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_7be34182a541",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 51,
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
      "eventId": "event_daf1beb78032"
    },
    {
      "title": "“北美大豆包”谷歌，终于杀回AI牌桌中央",
      "sourceUrl": "https://wallstreetcn.com/articles/3786291",
      "publishedAt": "2026-11-19T11:28:02.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "谷歌，这次是真的回来了。\n11 月 18 日，Google DeepMind 点亮了Gemini 4 Neon的霓虹灯牌。\n这是 Gemini 4 系列在短短 7 周内甩出的第 4 款元素模型。如果看一眼官方放出的基准跑分长表和社区实测反馈，你会发现它精准卡在了一个极其舒服的「甜点」位上，既有接近、甚至局部反超旗舰的硬核智商，又把单任务成本砍到了竞争对手的一半左右。\n在 Reddit 技术社区里，",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_762f516505a6",
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
      "title": "世界黄金协会：9月全球央行公开净购金量达61吨 创2026年迄今单月最高纪录",
      "sourceUrl": "https://www.cls.cn/detail/2539251",
      "publishedAt": "2026-11-19T11:27:37.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "【世界黄金协会：9月全球央行公开净购金量达61吨 创2026年迄今单月最高纪录】财联社11月19日电，世界黄金协会数据显示，9月全球央行继续增持黄金，公开净购金量达61吨，创2026年迄今单月最高纪录。波兰和中国为购金主力，其他净买家包括乌兹别克斯坦、哈萨克斯坦、约旦、捷克和玻利维亚。今年1至9月，全球央行公开净购黄金228吨，较去年同期下降7%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_aa1851f89d8e",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 59,
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_2cf716748ce1"
    },
    {
      "title": "携程CEO孙洁：中国入境游快速增长 但整体规模、对经济贡献力度仍有提升空间",
      "sourceUrl": "https://www.caixin.com/2026-11-19/102506762.html",
      "publishedAt": "2026-11-19T11:21:25.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "对于旅行社、酒店、景区等而言，海外游客有机会补充部分目的地的国内淡季\n       　　【财新网】“2023年到2025年，中国入境外国游客数量增长了155%；同期，中国入境外国游客人次占全球国际游客人次的比重从约1%提高到约2.3%”，11月19日，携程集团CEO孙洁在于澳大利亚悉尼举行的2026携程集团全球合作伙伴峰会上表示。\n　　2025年以来，中国持续优化签证政策，免签入境国家名单不断扩容",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_34730b4d522b",
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
      "title": "赣锋锂业：拟2亿元至4亿元回购公司A股股份",
      "sourceUrl": "https://www.cls.cn/detail/2539242",
      "publishedAt": "2026-11-19T11:19:03.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "【赣锋锂业：拟2亿元至4亿元回购公司A股股份】财联社11月19日电，赣锋锂业(002460.SZ)公告称，公司拟使用自有资金和/或自筹资金以集中竞价方式回购公司A股股份，回购资金总额不低于2亿元且不超过4亿元，回购价格上限为57.47元/股。本次回购股份用于维护公司价值及股东权益。回购期限为董事会审议通过之日起3个月内。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_1b20b8c53ad7",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "风险不再 “单一可控”：中国企业出海如何系上保险安全带",
      "sourceUrl": "https://www.yicai.com/news/103446969.html",
      "publishedAt": "2026-11-19T11:18:13.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "保险正从单一的事后补偿工具，转向全周期战略工具。伴随中国企业出海步伐不断加快，它们所面对的风险也日益复杂。这一背景下，保险正从单一的事后补偿工具，转向全周期战略工具。\n\n复旦安联金融保险研究中心近日发布的《中国企业出海风险识别与管理研究报告》（以下简称“报告”）认为，中国企业出海的风险形态已从“单一可控”走向“多维复合”，因此风险管理需要内外兼修、精准分层。其中，政策性保险与商业保险的组合是出海风",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a3a6437c4870",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 55,
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 33,
          "reasons": [
            "命中保险运营核心主题 1 项"
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
      "title": "傲拓科技：科创板IPO发行价确定为18.18元/股",
      "sourceUrl": "https://www.36kr.com/newsflashes/4076577121981319",
      "publishedAt": "2026-11-19T11:15:58.000Z",
      "fetchedAt": "2026-11-19T13:04:47.580Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，傲拓科技公告，公司首次公开发行股票并在科创板上市申请已获证监会同意注册，本次发行股份数量为3775.8334万股，全部为公开发行新股，经协商确定发行价格为18.18元/股，对应2025年扣非后摊薄市盈率为24.03倍，低于行业及可比公司平均市盈率。网上、网下申购日均为2026年11月23日，申购时无需缴付申购资金。本次发行预计募集资金总额6.86亿元，净额约6.09亿元，高于募投项目拟",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_63c1717fec77",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 46,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社11月19日电，欧盟委员会发言人表示，欧盟/印度尼西亚将于本周六正式签署此前达成的贸易协定。",
      "sourceUrl": "https://www.cls.cn/detail/2539240",
      "publishedAt": "2026-11-19T11:15:53.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，欧盟委员会发言人表示，欧盟/印度尼西亚将于本周六正式签署此前达成的贸易协定。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_39f092fc9947",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "中俄美元首发表和平宣言 重申核战争打不赢也打不得",
      "sourceUrl": "https://international.caixin.com/2026-11-19/102506759.html",
      "publishedAt": "2026-11-19T11:15:03.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "俄美领导人感谢中方主办此次历史性会晤。三国元首就当前国际形势深入交换了意见，致力于维护战略稳定和国际安全\n       　　【财新网】11月19日，据新华社消息，中国国家主席习近平、俄罗斯总统普京、美国总统特朗普于2026年11月19日在深圳举行会晤，发表中俄美元首和平宣言，全文如下：\n中俄美元首和平宣言\n　　中国国家主席习近平、俄罗斯总统普京、美国总统特朗普于2026年11月19日在深圳举行会晤",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5db22ceb154c",
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
      "title": "财联社11月19日电，摩根大通将戴尔目标价从635美元下调至515美元。",
      "sourceUrl": "https://www.cls.cn/detail/2539239",
      "publishedAt": "2026-11-19T11:14:51.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，摩根大通将戴尔目标价从635美元下调至515美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0aa9e7d9aa50",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "2连板京蓝科技：靶材产线尚未量产 亦未产生相关营业收入及利润",
      "sourceUrl": "https://www.cls.cn/detail/2539237",
      "publishedAt": "2026-11-19T11:12:05.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "【2连板京蓝科技：靶材产线尚未量产 亦未产生相关营业收入及利润】财联社11月19日电，京蓝科技(000711.SZ)发布异动公告，公司靶材产线尚未量产，亦未产生相关营业收入及利润，后续还需通过工艺优化、良率爬坡方可实现量产，任一环节故障均会拖慢量产节奏，未来能否达成设计产能及目标良率均存在较大不确定性。目前ITO靶材行业竞争格局已趋于成熟，市场中存在多家具备成熟生产技术、稳定客户渠道及规模化产能的",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5d04e106d7e1",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 46,
      "rawScore": 46,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_daf1beb78032"
    },
    {
      "title": "财联社11月19日电，贝莱德健康科学公司将回购最多5%的流通股。",
      "sourceUrl": "https://www.cls.cn/detail/2539235",
      "publishedAt": "2026-11-19T11:08:35.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，贝莱德健康科学公司将回购最多5%的流通股。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0f20b7915228",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "股价下跌近70%，“葛卫东”一股没卖",
      "sourceUrl": "https://wallstreetcn.com/articles/3786286",
      "publishedAt": "2026-11-19T11:08:04.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "知名投资人葛卫东，面对股价暴跌，展现了出惊人的“钝感力”。\n中材科技最新公告显示，今年三季度以来，公司股价下跌近70%，葛卫东妻子王萍一股没卖，还在三季度逆势加仓。葛卫东则在10月豪掷7亿元参与该公司增发，当前浮亏40%以上。\n葛卫东家族坚守\n在剧烈的震荡调整中，葛卫东家族坚守中材科技。\n中材科技最新公告显示，截至11月13日，葛卫东妻子王萍位列第三大流通股股东，持有股数为802.2万股，同三季度",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_58722b611079",
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
      "title": "财联社11月19日电，纳指ETF华泰柏瑞(513110)将于2026年11月20日开市起至当日10:30停牌。",
      "sourceUrl": "https://www.cls.cn/detail/2539231",
      "publishedAt": "2026-11-19T11:06:08.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，纳指ETF华泰柏瑞(513110)将于2026年11月20日开市起至当日10:30停牌。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_961f0b3050d8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 22,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态",
        "快讯"
      ],
      "eventId": "event_07f6c9818b7b"
    },
    {
      "title": "财联社11月19日电，全球芯片LOF(501225)将于2026年11月20日开市起至当日10:30停牌。",
      "sourceUrl": "https://www.cls.cn/detail/2539228",
      "publishedAt": "2026-11-19T11:06:06.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，全球芯片LOF(501225)将于2026年11月20日开市起至当日10:30停牌。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5699034a96d7",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_07f6c9818b7b"
    },
    {
      "title": "财联社11月19日电，美国50ETF易方达(513850)将于2026年11月20日开市起至当日10:30停牌。",
      "sourceUrl": "https://www.cls.cn/detail/2539232",
      "publishedAt": "2026-11-19T11:06:02.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，美国50ETF易方达(513850)将于2026年11月20日开市起至当日10:30停牌。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_4a68e67164b5",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_07f6c9818b7b"
    },
    {
      "title": "财联社11月19日电，纳斯达克ETF华夏(513300)将于2026年11月20日开市起至当日10:30停牌。",
      "sourceUrl": "https://www.cls.cn/detail/2539226",
      "publishedAt": "2026-11-19T11:06:00.000Z",
      "fetchedAt": "2026-11-19T13:04:30.300Z",
      "timeConfidence": "source",
      "summary": "财联社11月19日电，纳斯达克ETF华夏(513300)将于2026年11月20日开市起至当日10:30停牌。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b1be82f9225c",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_07f6c9818b7b"
    },
    {
      "title": "邹澜：中国征信业的发展与变革",
      "sourceUrl": "https://opinion.caixin.com/2026-11-19/102506746.html",
      "publishedAt": "2026-11-19T10:54:30.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "在金融强国建设、数字中国建设、社会信用建设加速推进的时代背景下，征信的功能定位、治理边界、运行逻辑也在随之调整\n       　　信用是市场经济的基础，征信体系是社会信用体系的重要组成部分，征信系统也是重要的金融基础设施。当前，在金融强国建设、数字中国建设、社会信用建设加速推进的时代背景下，征信的功能定位、治理边界、运行逻辑也在随之调整，为本届财新峰会“以发展应变局”这一宏大主题提供了可供观察思考",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9ee2733da048",
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
      "title": "晚间公告丨11月19日这些公告有看头",
      "sourceUrl": "https://www.yicai.com/news/103446928.html",
      "publishedAt": "2026-11-19T10:53:56.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "以下是第一财经对一些重要公告的汇总，供投资者参考。【品大事】\n\n3连板盛剑科技：电子化学品材料业务不包括光刻胶产品\n\n盛剑科技公告称，公司股票于2026年11月17日、18日连续两个交易日收盘价格涨幅偏离值累计达20%，属于股票交易异常波动情形。公司电子化学品材料业务不包括光刻胶产品，主要产品剥离液属于光刻胶配套的清洗试剂。2025年度电子化学品材料业务实现收入4,949.44万元，占主营业务收入",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_dfc8ce57b4fa",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "弥合“AI鸿沟”，APEC共筑开放创新与治理新底座",
      "sourceUrl": "https://www.yicai.com/news/103446900.html",
      "publishedAt": "2026-11-19T10:49:48.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "构建高效的AI生态系统需要资本、基础设施与人才三层支撑。11月19日上午，亚太经合组织（APEC）第三十三次领导人非正式会议在深圳国际交流中心举行。\n\n中方强调，数字经济和人工智能是创新增长的引擎。要加强数字基础设施建设，完善区域数据治理和协同合作，实现高效、便捷、安全的跨境数据流动。打造开放创新生态，促进人工智能广泛应用，推动产业转型升级、向新发展。\n\n在底层算力与大模型技术快速迭代的当下，亚洲",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1b263040dcc6",
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
      "title": "中俄美元首和平宣言",
      "sourceUrl": "https://wallstreetcn.com/articles/3786290",
      "publishedAt": "2026-11-19T10:47:59.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "一、中国、俄罗斯、美国作为联合国安理会常任理事国，致力于推动联合国改革，使之更有效应对全球性挑战，并履行其维护国际和平与安全的基本使命。\n\n二、三国计划增加精炼石油产品的生产和供应，以造福世界各国。三国重申能源稳定流动的重要性。\n\n三、三国元首认可国家同意原则和尊重国家官员享有豁免至关重要，一致认为国际刑事法院以及其他类似机构不得滥用管辖权。\n\n四、三国元首重申核战争打不赢也打不得。三国将就减少核",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c556f26c4eb2",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 57,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 6,
        "recency": 13,
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
      "title": "欧央行新行长角逐加速！三个职位一盘棋，如何看欧元区共同债务也很重要",
      "sourceUrl": "https://www.yicai.com/news/103446874.html",
      "publishedAt": "2026-11-19T10:47:37.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "“这或许也是高负债成员国支持德科斯、北欧国家力挺诺特的又一原因。”欧央行行长职位的角逐已锁定两位候选人，但整体棋局又不仅仅如此。\n\n欧央行行长拉加德将于2027年2月7日离任，当前来自西班牙的德科斯（Pablo Hernandez de Cos）和来自荷兰的诺特（Klaas Knot）正在竞争新行长的位置。不过虽然时间紧迫，但欧盟领导人要就欧央行行长、欧央行执行委员会成员以及欧央行首席经济学家三个",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_174fe8c0b0e7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 54,
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
      "eventId": "event_ef1a79a1b1f6"
    },
    {
      "title": "无涯智远获五源红杉数亿元投资，RSI赛道融资与验证仍有落差",
      "sourceUrl": "https://wallstreetcn.com/articles/3786289",
      "publishedAt": "2026-11-19T10:27:23.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "11月19日，北京无涯智远科技有限公司（以下简称“无涯智远”）宣布完成数亿元天使轮和天使加轮融资，投资方包括五源资本、红杉中国、联想之星、中关村科学城基金及戈壁创投，心流资本担任财务顾问。本轮资金主要用于自研RSI模型的技术攻关与产品落地。无涯智远成立于2026年6月，首席科学家为北大人工智能研究院助理教授张牧涵。公司聚焦实时RSI，技术路径是参数持续学习，用预先训练的超网络生成基座模型的参数更新",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3369511630be",
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
          "score": 27,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 40,
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
      "title": "长鑫科技拟将回购金额上调至最高50亿元",
      "sourceUrl": "https://wallstreetcn.com/articles/3786288",
      "publishedAt": "2026-11-19T10:25:15.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "长鑫科技公告，公司于2026年10月30日召开第二届董事会第八次会议审议通过回购方案，2026年11月3日收到董事长朱一明提议将回购金额增加至不低于人民币25亿元（含），不超过人民币50亿元（含）。\n2026年11月19日，公司召开第二届董事会第九次会议审议通过调整回购方案。回购价格不超过人民币63.78元/股（含），回购股份用途为股权激励/员工持股计划、注销并减少注册资本及为维护公司价值及股东权",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9b61038d93e0",
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
      "title": "柯力传感连投五家具身智能公司，机器人传感器放量",
      "sourceUrl": "https://wallstreetcn.com/articles/3786287",
      "publishedAt": "2026-11-19T10:24:00.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "11月19日，宁波柯力传感科技股份有限公司（柯力传感，603662.SH）宣布完成对知行机器人科技（苏州）有限公司（以下简称“知行机器人”）的战略投资。8月27日起，柯力传感先后战略投资优理奇机器人、卓誉科技、深朴智能、鹿明机器人与知行机器人五家公司，覆盖人形机器人整机、电机与关节模组、具身大模型、产业级整机与灵巧手。柯力传感披露，公司已累计战略投资超15家机器人企业。优理奇机器人、深朴智能、鹿明",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_43f264104e63",
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
      "title": "阿里巴巴第二财季营收2715亿元，调整后净利润199亿元，盘前股价涨4%｜财报见闻",
      "sourceUrl": "https://wallstreetcn.com/articles/3786285",
      "publishedAt": "2026-11-19T10:02:37.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "阿里巴巴第二季度业绩如下：营收2,715.2亿元人民币，预估2,705.3亿元人民币（彭博综合预期）。\n其他收入277.1亿元人民币，预估688.2亿元人民币。调整后每ADS收益8.10元人民币，预估10.75元人民币。\n调整后息税折旧及摊销前利润460.6亿元人民币，预估399亿元人民币。调整后净利润199.1亿元人民币，预估266.1亿元人民币。\n财报后，阿里巴巴美股盘前涨近4%。\n更新中\n\n",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fcb1d57bf15e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "noiseCaps": [
        "行情播报"
      ],
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "暗盘狂飙超20%！Anthropic史诗级千亿美元IPO今夜登场",
      "sourceUrl": "https://www.yicai.com/news/103446846.html",
      "publishedAt": "2026-11-19T10:02:22.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "全球最大规模IPO今晚登场。在全球科技遭遇剧烈震荡、市场急切寻求新锚点的关键时刻，人工智能初创巨头Anthropic即将登陆资本市场。\n\n当地时间11月18日，Anthropic正式将其首次公开募股（IPO）定价为每股83美元，超出此前70至78美元的指导区间。在完全稀释基础上，该定价对应公司估值约为1.5万亿美元。公司股票将于周四在纳斯达克挂牌交易，证券代码“ANT”。\n\n据报道，本次发行规模经",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9a7aef9ef92f",
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
          "score": 19,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 94,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "Anthropic上市前触发自身安全警报：AI进展速度超预期",
      "sourceUrl": "https://wallstreetcn.com/articles/3786273",
      "publishedAt": "2026-11-19T10:00:49.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "Anthropic即将登陆华尔街之际，却在上市文件中披露了一项安全警报：公司AI研发进展速度已达到自身设定的安全阈值，必须启动额外安全控制措施。\n11月19日，据英国《金融时报》报道，Anthropic在更新后的IPO申报文件中承认，其技术进展速度已触发2023年制定的“负责任扩展政策”（Responsible Scaling Policy）中的额外安全机制。这一披露恰逢公司将IPO发行价定为每股",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f038997487dd",
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
      "title": "习近平主持中俄美元首会晤 就大国如何为世界和平托底提出四点看法",
      "sourceUrl": "https://international.caixin.com/2026-11-19/102506735.html",
      "publishedAt": "2026-11-19T09:53:36.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "中俄美三国国情不同，谁也改变不了谁，这是历史形成的，也是各自人民的自主选择。正确的态度是彼此尊重、求同存异、共同发展\n    \n     \n     11月19日下午，国家主席习近平在深圳同俄罗斯总统普京、美国总统特朗普举行中俄美元首会晤。图：新华社\n    \n   \n       　　【财新网】11月19日下午，国家主席习近平在深圳同俄罗斯总统普京、美国总统特朗普举行中俄美元首会晤。据新华社客户",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7cd9e056621f",
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
      "title": "龙虎榜丨机构今日买入这18股，卖出燧原科技5.1亿元",
      "sourceUrl": "https://www.yicai.com/news/103446842.html",
      "publishedAt": "2026-11-19T09:52:19.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "共46只个股出现了机构的身影。盘后数据显示，11月19日龙虎榜中，共46只个股出现了机构的身影，有18只股票呈现机构净买入，28只股票呈现机构净卖出。\n\n当天机构净买入前三的股票分别是粤芯半导体、光洋股份、果麦文化，净买入金额分别是8973万元、6993万元、4926万元。\n\n当天机构净卖出前三的股票分别是燧原科技、冰山冷热、科森科技，净卖出金额分别是5.1亿元、1.64亿元、1.26亿元。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f2bf8906c830",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "title": "“爱乐之都”这一夜，回望音乐剧的二十年",
      "sourceUrl": "https://www.yicai.com/news/103446839.html",
      "publishedAt": "2026-11-19T09:50:11.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "二十余年间，音乐剧在中国从小众艺术逐渐走入大众文娱消费的视野。上海这座城市，见证了它的诸多里程碑时刻。11月12日，上海音乐厅亮起璀璨灯光，音乐剧人踏上红毯，迎来属于他们的年度高光时刻。\n\n当晚，由上海广播电视台、上海演艺集团、黄浦文旅集团主办，演艺大世界呈现的“爱乐之都·2026音乐剧荣誉之夜”在此举办。这场盛典既是对近两年上海音乐剧市场的回顾，也是对深耕行业多年的从业者的致敬。\n\n公开数据显示",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6a6d8809179e",
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
      "title": "中韩自贸协定升级谈判实质性完成 中方承诺给予韩国电影、游戏最惠国待遇",
      "sourceUrl": "https://international.caixin.com/2026-11-19/102506658.html",
      "publishedAt": "2026-11-19T09:48:36.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "习近平表示，中方愿同韩方持续促进两国人员往来，循序渐进开展健康有益的文化交流\n       　　【财新网】11月18日，中韩双方在深圳确认，中韩自由贸易协定（FTA）第二阶段谈判已实质性完成。\n　　自2018年3月举行首轮正式谈判以来，双方历时约8年8个月，共举行17轮正式谈判，就跨境服务贸易、投资和金融服务等领域的市场准入达成协议。升级协定仍待正式签署，双方尚未公布签署和生效日期。\n　　当天上午",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b26f179d6104",
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
      "title": "网易Q3营收同比下降1.8%，毛利率升至68.3%，游戏业务盈利能力改善｜财报见闻",
      "sourceUrl": "https://wallstreetcn.com/articles/3786281",
      "publishedAt": "2026-11-19T09:40:30.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "网易第三季度业绩呈现出收入小幅回落、盈利能力改善的特点。尽管游戏业务受到产品周期波动影响，整体收入略有承压，但公司通过优化成本结构、控制经营费用，推动毛利率进一步提升，利润端展现出较强韧性。\n周四公布的财报显示，网易第三季度实现净收入279亿元，同比下降1.8%；毛利润190亿元，同比增长4.8%，毛利率由去年同期的约64.1%提升至68.3%。归属于公司股东的净利润为84亿元，非GAAP净利润为",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b3496a595f06",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 34,
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
          "score": 34,
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
      "title": "5G+工业互联网：工业智能体试点跑通，规模化落地仍存卡点",
      "sourceUrl": "https://www.yicai.com/news/103446806.html",
      "publishedAt": "2026-11-19T09:33:21.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "工业数智转型仍需跨过规模落地关。工业数字化正从万物互联迈向万物智联。\n\n11月19日，2026中国5G+工业互联网大会在武汉开幕。大会集中展示了我国算网融合、工业智能体、具身智能等前沿方向的实践成果。\n\n当前，工业智能体开始走进车间，已经在部分离散制造、水务、染织等行业跑通试点，但尚未实现大规模普及，具身智能同样面临从演示场景走向真实工业产线的成本、数据与良率难题。\n\n算力节点加速启航\n\n通信基础",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2786e4cf5700",
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
      "title": "黄仁勋交棒之后，美联储年末议息之前，和付鹏等三位嘉宾聊聊2027",
      "sourceUrl": "https://wallstreetcn.com/articles/3786282",
      "publishedAt": "2026-11-19T09:23:01.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "辞任英伟达CEO几天后，黄仁勋在社交媒体上表示，如果董事会认为他的回归符合股东、员工、公司利益，他将“很荣幸回应这些呼声”。北京时间11月18日，英伟达董事长却在财报电话会上明确表示，董事会无意让他复职。\n英伟达已经启动新任CEO的遴选，内部和外部人选都在考虑范围内。市场担心的并不只是最终由谁接任，而是谁能延续黄仁勋对技术趋势的判断，继续推动AI产业扩张。\n黄仁勋离开之后，英伟达的扩张节奏会不会改",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6c30a281f4ec",
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
      "title": "兰州银行成功发放全省首笔“Token贷”",
      "sourceUrl": "https://www.yicai.com/news/103446819.html",
      "publishedAt": "2026-11-19T09:14:04.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "近日，在中国人民银行庆阳市分行统筹指导支持下，兰州银行庆阳分行为庆阳智影未来传媒有限公司成功发放50万元贷款，标志着全省首笔AI算力Token科创贷款正式落地。该笔业务突破传统信贷评审模式，依托企业真实算力采购消耗场景及科创经营数据授信，是金融依托算力Token场景、支持AI科创产业发展的新探索。\n\n作为初创企业，该公司AI漫剧制作、数字内容生产、文旅IP开发等主营业务均高度依赖算力Token采购",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0d09c6994735",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "腾讯选择做AI公司",
      "sourceUrl": "https://www.yicai.com/news/103446814.html",
      "publishedAt": "2026-11-19T09:10:05.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "11月18日腾讯发布的2026年第三季度财报，可能是腾讯有史以来AI“含量”最高的一份财报。不仅披露了WorkBuddy日活等关键产品数据，还显示腾讯在真金白银加大对AI基础设施和AI产品研发的投入，勾勒出腾讯从一家平台企业向AI科技企业转向的轨迹。\n\n“我们在模型及应用层面取得了一系列的重要进展，加速了腾讯面向AI新时代的演进。”腾讯董事会主席兼首席执行官马化腾说。\n\n不仅加大AI投入，腾讯还同",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e75b4cc51783",
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
          "score": 40,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "美股异动 | Anthropic(ANT.US)登陆美股市场 开盘股价暴涨超33%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3677599",
      "publishedAt": "2026-11-19T09:09:41.000Z",
      "fetchedAt": "2026-11-19T17:29:10.615Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_e737ac98ff2f",
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
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "英国股市收低；截至收盘Investing.com 英国 100下跌0.85%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3677597",
      "publishedAt": "2026-11-19T09:09:16.000Z",
      "fetchedAt": "2026-11-19T17:29:10.615Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_e3d8d457574c",
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
      "title": "西班牙股市收低；截至收盘西班牙IBEX35指数下跌0.97%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3677595",
      "publishedAt": "2026-11-19T09:08:49.000Z",
      "fetchedAt": "2026-11-19T17:29:10.615Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_3aa3d45c2448",
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
      "title": "葡萄牙股市收低；截至收盘PSI下跌0.94%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3677594",
      "publishedAt": "2026-11-19T09:08:23.000Z",
      "fetchedAt": "2026-11-19T17:29:10.615Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6c265938d7ff",
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
      "title": "荷兰股市收低；截至收盘荷兰AEX指数下跌0.62%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3677593",
      "publishedAt": "2026-11-19T09:07:55.000Z",
      "fetchedAt": "2026-11-19T17:29:10.615Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6f1217271161",
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
      "title": "意大利股市收低；截至收盘Investing.com 意大利 40下跌0.47%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3677588",
      "publishedAt": "2026-11-19T09:07:28.000Z",
      "fetchedAt": "2026-11-19T17:29:10.615Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_a56f7789dae7",
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
      "title": "德国股市收低；截至收盘DAX 30下跌0.92%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3677585",
      "publishedAt": "2026-11-19T09:06:43.000Z",
      "fetchedAt": "2026-11-19T17:29:10.615Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_97b042d90ea8",
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
      "title": "法国股市收低；截至收盘法国CAC40指数下跌0.81%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3677582",
      "publishedAt": "2026-11-19T09:05:50.000Z",
      "fetchedAt": "2026-11-19T17:29:10.615Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_c74e62ac7cc3",
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
      "title": "习近平就大国如何正确相处提出4点看法",
      "sourceUrl": "https://wallstreetcn.com/articles/3786278",
      "publishedAt": "2026-11-19T09:05:37.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "11月19日下午，国家主席习近平在深圳同俄罗斯总统普京、美国总统特朗普举行中俄美元首会晤。习近平就大国如何正确相处、共同为世界和平托底提出4点看法：\n第一，坚持相互尊重。相互尊重是大国交往的基本准则。中俄美三国国情不同，谁也改变不了谁，这是历史形成的，也是各自人民的自主选择。正确的态度是彼此尊重、求同存异、共同发展。要尊重彼此主权和领土完整，尊重各自选择的社会制度和发展道路，尊重彼此核心利益和重大",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_05ac291f4a74",
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
      "title": "比利时股市收低；截至收盘比利时BEL20指数下跌1.13%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3677580",
      "publishedAt": "2026-11-19T09:05:14.000Z",
      "fetchedAt": "2026-11-19T17:29:10.615Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6e00fbf931b7",
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
      "title": "快手Q3总收入316亿元，日活跃用户达4.17亿",
      "sourceUrl": "https://www.yicai.com/news/103446805.html",
      "publishedAt": "2026-11-19T09:05:05.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "11月19日，快手科技发布2026年第三季度业绩。11月19日，快手科技发布2026年第三季度业绩。财报显示，三季度快手总收入达到316亿元，经调整净利润为7.9亿元，经调整EBITDA达39亿元。用户方面，三季度快手应用平均日活跃用户达到4.17亿，平均月活跃用户达到8.19亿，创历史新高。\n\n本季度，快手持续深化AI战略。可灵AI发布新一代视频生成模型Kling 4.0，模型能力和专业创作能力",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_37d9fcda650a",
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
      "title": "美国芯片出口新规的“第一个受害者”：日本“AI云”下调近90%收入指引",
      "sourceUrl": "https://wallstreetcn.com/articles/3786277",
      "publishedAt": "2026-11-19T09:04:07.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "日本数据中心运营商Datasection成为美国最新芯片出口管控措施的直接冲击对象。\nDatasection周一将截至2027年3月财年的营收预期，从1622亿日元大幅下调至173亿日元，降幅约89%，并预计当年净亏损15亿日元。公司将此次大幅下调归因于一笔重要AI基础设施订单的取消。\n消息公布后，该公司股价周四跌至681日元，单日跌幅达18%，连续第九个交易日下跌，11月以来累计跌幅已达约65%",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4fc636098d15",
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
      "eventId": null
    },
    {
      "title": "Anthropic的IPO盛宴，谁是最后的买单者？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3785708",
      "publishedAt": "2026-11-19T08:46:38.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "Anthropic的IPO，可能正在成为今年AI产业最有意思的一次“压力测试”。300页招股书披露之后，市场没有因为公司近9000亿美元的算力及基础设施承诺、巨额资本开支或者模型竞争带来的价格压力而退缩。恰恰相反，路演需求异常火爆，订单据报道一度接近发行量的7倍，市场甚至开始讨论将发行价推高至最初70—78美元区间之上。这说明一件重要的事情：资本市场已经相信，前沿AI可以成为一门非常赚钱的生意。A",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_245e86f0ce09",
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
      "title": "快手科技第三季度调整后净利润7.90亿元人民币，预估7.088亿元人民币",
      "sourceUrl": "https://wallstreetcn.com/articles/3786276",
      "publishedAt": "2026-11-19T08:36:49.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "快手科技第三季度调整后净利润7.90亿元人民币，预估7.088亿元人民币。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8905ff5d2a37",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "逼近90美元/桶！中东供应重返市场：原油已开始交易过剩？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3786258",
      "publishedAt": "2026-11-19T08:36:17.000Z",
      "fetchedAt": "2026-11-19T13:04:17.481Z",
      "timeConfidence": "source",
      "summary": "自10月底以来，国际油价持续回落。11月18日，WTI原油日内跌幅一度达4%，目前报83.05美元/桶；布油短暂冲高后回落，逼近92美元/桶。中东冲突尚未完全结束，袭击事件仍时有发生，但油价并未扭转震荡下行态势，表明市场对供应中断的定价已明显钝化，油价呈现出利多出尽即下跌的疲态。这一钝化的根源在于，地缘冲突对全球原油实际供应的冲击正在减弱。海湾出口恢复、管道绕行和船对船转运等适应措施削弱了中断影响",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_51b607633166",
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
      "title": "周天勇：弄清经济还能中高速增长的历史和道理",
      "sourceUrl": "https://opinion.caixin.com/2026-11-19/102506618.html",
      "publishedAt": "2026-11-19T08:24:25.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "如果关键领域的体制改革落实到位，发展方面的重大举措力度较大，中国经济中高速增长仍是可以实现的\n       　　现代主流经济学方法计算国民经济产出和增长的局限在于，其分析对象是完全的市场经济国家，并不考虑体制变化对产出和增长的影响。而中国经济体制的特征：经济制度方面，坚持社会主义与市场经济结合；体制改革方式方面，不是瞬时转轨，而是特长周期的渐进转轨，整个过程分为计划国有向市场民营释放、二元体制并存",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c94e87b80478",
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
      "title": "DeepSeek千亿融资落地？31家出资方浮出水面",
      "sourceUrl": "https://www.yicai.com/news/103446689.html",
      "publishedAt": "2026-11-19T08:23:08.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "梁文锋仍掌握控制权。\n\n市场关注已久的DeepSeek第二轮融资近日有了新的工商登记线索。这是一份横跨互联网、通信、消费电子和制造业的出资名单，也让外界得以窥见，围绕一家大模型公司产业资本是如何集结的。\n\n据企查查App，DeepSeek的工商主体杭州深度求索人工智能基础技术研究有限公司近日完成注册资本及投资人变更，注册资本由约1645万元增至1991.87万元，增幅约21.1%，新增股东杭州程砚",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_07e7331e35a1",
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
      "title": "特朗普解雇美联储理事案再起波澜 库克拒绝出席白宫听证会",
      "sourceUrl": "https://international.caixin.com/2026-11-19/102506594.html",
      "publishedAt": "2026-11-19T08:13:55.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "中期选举后民主党横扫国会两院，由于参议院只需简单多数即可确认总统提名，即便美联储理事会出现职位空缺，民主党掌控的参议院也可以否掉特朗普的提名人选\n       　　【财新网】美联储理事丽莎·库克通过律师拒绝12月出席特朗普政府委员会的听证会，该听证会正在考虑是否应该解雇她。库克称这一程序不公平，而且注定会得出预先设定的结果。\n　　据多家美国媒体报道，这封日期为11月16日的信件，是在库克代理律师洛",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1a301f93934e",
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
      "eventId": null,
      "timeFixed": true
    },
    {
      "title": "连板股追踪丨A股今日共28只个股涨停 算力概念多股连板",
      "sourceUrl": "https://www.yicai.com/news/103446730.html",
      "publishedAt": "2026-11-19T08:06:44.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "算力概念股真视通、全筑股份3连板，华升股份2连板。一图速览今日连板股&gt;&gt;11月19日，Wind数据显示，A股市场共计28只个股涨停。其中算力概念股真视通、全筑股份3连板，华升股份2连板；光刻胶板块盛剑科技3连板。一图速览今日连板股&gt;&gt;",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fa3af940b1ac",
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
      "title": "迪拜商会：中国成为迪拜汽车进口第一大来源地",
      "sourceUrl": "https://www.caixin.com/2026-11-19/102506585.html",
      "publishedAt": "2026-11-19T07:42:49.000Z",
      "fetchedAt": "2026-11-19T13:04:16.918Z",
      "timeConfidence": "source",
      "summary": "中国汽车海外竞争不再局限于价格，产品配置、品质和售后服务成为重要竞争因素\n       　　【财新网】中国汽车在中东市场的影响力提升。迪拜商会主席兼首席执行官H.E. Mohammad Ali Rashed Lootah近日在接受财新等媒体采访时表示，2025年，中国已成为迪拜最大的汽车进口来源地，进口数量和金额均居首位；电动汽车领域优势尤为明显，同期中国品牌汽车约占迪拜电动汽车进口量的85%。\n",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_34624479543a",
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
          "score": 37,
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
      "title": "收盘｜沪指跌0.28% 家用电器板块全天强势",
      "sourceUrl": "https://www.yicai.com/news/103446630.html",
      "publishedAt": "2026-11-19T07:41:00.000Z",
      "fetchedAt": "2026-11-19T13:04:23.456Z",
      "timeConfidence": "source",
      "summary": "沪深两市成交额1.31万亿，较上一个交易日缩量646亿。11月19日，四大股指集体收跌，沪指跌0.28%，深成指跌0.71%，创业板指跌0.79%，科创综指跌0.33%。\n\n\n\n盘面上，银行、券商、半导体、白酒板块尾盘发力，AI短剧、汽车、物理AI、地产板块调整。\n\n具体来看，家用电器板块全天强势，九阳股份、海立股份等多股涨停。\n\n\n\n传媒娱乐板块跌幅明显，慈文传媒、横店影视等多股跌停。\n\n\n\n沪",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cf296f3527d6",
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
      "id": "news_054d2e45cc98",
      "title": "重估养老风险人保寿险尊启长红的破局解法",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261119/6262.html",
      "publishedAt": "2026-11-19T06:24:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "完成从“单纯的资金给付方”向“养老综合解决方案服务商”的进化",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 28,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 75,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 6,
        "recency": 13,
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
          "score": 64,
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
      "attentionScore": 28,
      "llmScores": [
        40,
        16
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "id": "news_7d3349bbe971",
      "title": "普惠金融成就案例揭晓中国人寿四项实践入选",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261119/6261.html",
      "publishedAt": "2026-11-19T06:14:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "保险经济“减震器”和社会“稳定器”功能充分彰显",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 15,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "tierGate": 60,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
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
      "attentionScore": 15,
      "llmScores": [
        17,
        12
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "id": "news_53f8f47954f8",
      "title": "5000万用户与9年经营长跑微医保如何用普惠重塑互联网健康险生态",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261119/6260.html",
      "publishedAt": "2026-11-19T06:07:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "从一款产品长成一个系列，从一个用户到一个家庭",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 12,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 74,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 41,
          "reasons": [
            "命中保险运营核心主题 1 项",
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
      "attentionScore": 12,
      "llmScores": [
        9,
        15
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "id": "news_9f6c3ba76b56",
      "title": "三十年5517亿一支保险队伍的时代答卷",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261118/6259.html",
      "publishedAt": "2026-11-18T07:23:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "这大概就是三十年里，那些数字试图讲述的故事",
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
          "score": 35,
          "reasons": [
            "命中保险运营核心主题 1 项"
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
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "id": "news_d63e7207eecf",
      "title": "人保寿险发挥保险功能守护人民美好生活",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261118/6258.html",
      "publishedAt": "2026-11-18T07:02:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "金融为民，深耕不辍",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 5,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 58,
          "reasons": [
            "命中保险运营核心主题 2 项"
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
      "attentionScore": 5,
      "llmScores": [
        4,
        5
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "id": "news_20ba85923d04",
      "title": "监管重磅人事刘昇时隔两年回归执掌人身险司刘宏健升任机构恢复与处置司司长",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/cj/20261118/6257.html",
      "publishedAt": "2026-11-18T05:59:00.000Z",
      "sourceName": "慧保天下",
      "category": "insights",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "人身险司司长一职空缺一年多终落定！",
      "contentTags": [
        "观点"
      ],
      "scoreDetails": {},
      "score": 77,
      "original": {
        "huibaoxianCategory": "人物"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 0,
        "recency": 10,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响"
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
      "attentionScore": 77,
      "llmScores": [
        86,
        68
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "title": "中国证监会新闻发言人答记者问",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c100028/c7671451/content.shtml",
      "publishedAt": "2026-11-17T20:09:47.000Z",
      "fetchedAt": "2026-11-18T17:22:48.784Z",
      "timeConfidence": "source",
      "summary": "问：近日，发现互联网上传播“监管要求基金公司上报全部产品AI敞口”相关信息，请问这一情况是否属实？\n答：该信息不属实。公募基金投资运作依照《证券投资基金法》等法律法规和基金合同约定进行，投资标的、投资比例由基金管理人按照基金合同和内部投资决策程序自主确定。中国证监会依法履行监管职责，未向基金管理人提出相关数据报送要求。",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_8d6ef6bc050e",
      "tier": "S0",
      "sourceTier": "S0",
      "sourceTierLabel": "权威原始源",
      "score": 80,
      "rawScore": 80,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 6,
        "recency": 13,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 50,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "权威原始来源",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
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
          "score": 45,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 67,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 2 项",
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
      "eventId": "event_b326a8886e68"
    },
    {
      "title": "中国证监会陈华平副主席与国际证监会组织秘书长举行会谈",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c100028/c7671332/content.shtml",
      "publishedAt": "2026-11-17T00:11:11.000Z",
      "fetchedAt": "2026-11-17T13:26:14.651Z",
      "timeConfidence": "source",
      "summary": "2026年11月10日，中国证监会副主席陈华平在参加国际证监会组织（IOSCO）理事会会议期间，会见了IOSCO秘书长罗德里戈·布埃纳文图拉（Rodrigo Buenaventura），双方就深化合作、强化全球金融治理体系等议题交换意见，并签署了中国证监会向IOSCO秘书处派驻借调人员的相关协议。",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_a0f53987808f",
      "tier": "S0",
      "sourceTier": "S0",
      "sourceTierLabel": "权威原始源",
      "score": 51,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
      "tierGate": 50,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "权威原始来源"
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
        "官方监管",
        "权威源"
      ],
      "eventId": null
    },
    {
      "title": "中国证监会在沪召开国际顾问委员会第23次会议",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c100028/c7671195/content.shtml",
      "publishedAt": "2026-11-16T03:56:06.000Z",
      "fetchedAt": "2026-11-16T12:46:26.476Z",
      "timeConfidence": "source",
      "summary": "2026年11月13日，中国证监会国际顾问委员会（简称“顾委会”）第23次会议在上海召开。顾委会主席霍华德·戴维斯先生、副主席史美伦女士等14名顾委会委员，以及中国证监会主席吴清、副主席刘浩凌等出席了本次会议。来自中国人民银行、国家金融监管总局、上海市政府等单位代表，和中国证监会机关相关司局、派出机构、会管单位主要负责同志参加了会议。\n本次会议主题为“面向2030的中国资本市场——构建包容生态、增",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_77a41d21ba8f",
      "tier": "S0",
      "sourceTier": "S0",
      "sourceTierLabel": "权威原始源",
      "score": 41,
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
      "tierGate": 50,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "权威原始来源",
        "对展业/配置/合规有直接影响"
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
          "score": 49,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 45,
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
        "权威源"
      ],
      "eventId": null,
      "attentionScore": 41,
      "llmScores": [
        56,
        25
      ],
      "scoredBy": "llm"
    },
    {
      "title": "吴清主席在首届中国资本市场学术年会开幕式上的致辞",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c106311/c7670983/content.shtml",
      "publishedAt": "2026-11-13T19:28:24.000Z",
      "fetchedAt": "2026-11-15T15:44:35.223Z",
      "timeConfidence": "source",
      "summary": "尊敬的小川副主席，忠明市长，贺青副市长，\n尊敬的戴维斯主席，萨金特教授、李扬教授、姜纬教授，各位专家，\n女士们、先生们、朋友们：\n大家上午好！首先我代表中国证监会和中国资本市场学会热烈欢迎各位海内外嘉宾莅临首届中国资本市场学术年会！衷心感谢大家长期以来对中国资本市场的关心和支持！\n11月的上海，秋色斑斓、梧桐铺金。对资本市场人来说，“梧桐”“11月”有着特别意义。两百多年前（1792年）的梧桐树协",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_7c17994d15e5",
      "tier": "S0",
      "sourceTier": "S0",
      "sourceTierLabel": "权威原始源",
      "score": 45,
      "rawScore": 45,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 6,
        "recency": 7,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
      },
      "noiseCaps": [],
      "tierGate": 50,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "权威原始来源"
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
        "官方监管",
        "权威源"
      ],
      "eventId": "event_d0c306eb334b"
    },
    {
      "title": "国家统计局2026年常规统计督察第9统计督察组向中国证监会反馈统计督察意见",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c100028/c7670809/content.shtml",
      "publishedAt": "2026-11-13T01:23:50.000Z",
      "fetchedAt": "2026-11-13T16:33:31.423Z",
      "timeConfidence": "source",
      "summary": "经党中央和国务院批准，国家统计局于11月11日向中国证监会反馈了2026年常规统计督察意见。国家统计局党组成员、副局长毛盛勇通报常规统计督察意见，中国证监会党委委员、副主席刘浩凌作表态发言，督察组有关负责同志，中国证监会相关司局负责同志参加反馈。\n督察认为，党的十八大以来，中国证监会坚持以习近平新时代中国特色社会主义思想为指导，推进资本市场统计制度机制建设，提升资本市场统计工作水平，为推动资本市场",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_bba32dee9b76",
      "tier": "S0",
      "sourceTier": "S0",
      "sourceTierLabel": "权威原始源",
      "score": 48,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 9,
        "recency": 7,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 50,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "权威原始来源"
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
        "官方监管",
        "权威源"
      ],
      "eventId": null
    },
    {
      "title": "中国证监会有关部门负责人答记者问",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c100028/c7670135/content.shtml",
      "publishedAt": "2026-11-10T17:47:05.000Z",
      "fetchedAt": "2026-11-11T11:53:42.912Z",
      "timeConfidence": "source",
      "summary": "一、近日，北京金融法院发布公告，就东方通证券虚假陈述责任纠纷案件适用特别代表人诉讼程序审理。作为证券监管机构，如何看待这次诉讼？\n答：东方通的欺诈发行、虚假陈述等证券违法行为，严重扰乱证券市场秩序，损害广大投资者合法权益，中国证监会已依法进行了行政处罚。前期，北京金融法院依法受理投资者提起的证券虚假陈述普通代表人诉讼并发布诉讼权利登记公告，支持广大投资者依法追偿民事损失。中证中小投资者服务中心接受",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_626adfe70753",
      "tier": "S0",
      "sourceTier": "S0",
      "sourceTierLabel": "权威原始源",
      "score": 62,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 6,
        "recency": 7,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6
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
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 56,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 52,
          "reasons": [
            "命中关联主题 3 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "官方监管",
        "权威源"
      ],
      "eventId": null,
      "attentionScore": 62,
      "llmScores": [
        62,
        62
      ],
      "scoredBy": "llm"
    }
  ],
  "curationStats": {
    "scenes": {
      "insurance": 67,
      "privateFundSales": 4,
      "marketEducation": 79
    },
    "featured": 24,
    "gate": {
      "passed": 20,
      "total": 150,
      "byTier": {
        "S3": {
          "total": 50,
          "passed": 1
        },
        "S2": {
          "total": 94,
          "passed": 16
        },
        "S0": {
          "total": 6,
          "passed": 3
        }
      }
    }
  },
  "sections": {
    "regulatory": [
      "news_8d6ef6bc050e",
      "news_a0f53987808f",
      "news_77a41d21ba8f",
      "news_7c17994d15e5",
      "news_bba32dee9b76",
      "news_626adfe70753"
    ],
    "products": [
      "news_d8a3d49f401d"
    ],
    "industry": [
      "news_f506fe74033b",
      "news_01334952dfb0",
      "news_156e42e4fef1",
      "news_c559654fe8a8",
      "news_8e400e43156b",
      "news_ec1737937564",
      "news_12ea62ec743e",
      "news_e64a5639f0e8",
      "news_639bc2d7a0c9",
      "news_a27ac8371166"
    ],
    "research": [],
    "insights": [
      "news_baab259c34f6",
      "news_a06342bbad4f",
      "news_2f6bbad80e47",
      "news_a5f070f8c32b",
      "news_40822f7fe5e5",
      "news_d1ebb26467ec",
      "news_0869469815d8",
      "news_17f16481b4d1",
      "news_2c3fbfac1e03",
      "news_a8756ffa606f"
    ]
  },
  "flashes": [
    {
      "id": "news_f506fe74033b",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_baab259c34f6",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_01334952dfb0",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_a06342bbad4f",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_156e42e4fef1",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_c559654fe8a8",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_8e400e43156b",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_ec1737937564",
      "dotClass": "flash-dot-blue"
    }
  ],
  "keywordIndex": {
    "保险": [
      "news_a3a6437c4870",
      "news_7d3349bbe971",
      "news_9f6c3ba76b56",
      "news_d63e7207eecf"
    ],
    "养老": [
      "news_054d2e45cc98"
    ],
    "健康险": [
      "news_53f8f47954f8"
    ],
    "寿险": [
      "news_054d2e45cc98",
      "news_d63e7207eecf"
    ],
    "人保": [
      "news_054d2e45cc98",
      "news_d63e7207eecf"
    ],
    "银行": [
      "news_d8a3d49f401d",
      "news_0d09c6994735",
      "news_cf296f3527d6",
      "news_77a41d21ba8f"
    ],
    "央行": [
      "news_5205715e17d0",
      "news_aa1851f89d8e",
      "news_174fe8c0b0e7"
    ],
    "利率": [
      "news_6244fd3cb0e4",
      "news_080efdf0b020",
      "news_b3496a595f06"
    ],
    "加息": [
      "news_2dbd844286f5",
      "news_6244fd3cb0e4",
      "news_080efdf0b020"
    ],
    "存款": [
      "news_66ddd265761d"
    ],
    "股票": [
      "news_e64a5639f0e8",
      "news_639bc2d7a0c9",
      "news_40822f7fe5e5",
      "news_97b7edea9e17",
      "news_4d80336ea2ff",
      "news_29f37cab12cc",
      "news_63c1717fec77",
      "news_dfc8ce57b4fa",
      "news_9a7aef9ef92f",
      "news_f2bf8906c830"
    ],
    "A股": [
      "news_17f16481b4d1",
      "news_0ebbccb231bf",
      "news_45b53d30f8e9",
      "news_63861ade3669",
      "news_1b20b8c53ad7",
      "news_fa3af940b1ac"
    ],
    "美股": [
      "news_4ce19cc4d790",
      "news_2dbd844286f5",
      "news_a5f070f8c32b",
      "news_d1ebb26467ec",
      "news_9b2f6138332e",
      "news_cdeded10482d",
      "news_e9a0acb8dca1",
      "news_fcb1d57bf15e",
      "news_e737ac98ff2f"
    ],
    "指数": [
      "news_f506fe74033b",
      "news_c559654fe8a8",
      "news_bc29242eaf5e",
      "news_02d7dcdaa2a7",
      "news_4ce19cc4d790",
      "news_0860b6c3e123",
      "news_3aa3d45c2448",
      "news_6f1217271161",
      "news_c74e62ac7cc3",
      "news_6e00fbf931b7"
    ],
    "ETF": [
      "news_d8a3d49f401d",
      "news_961f0b3050d8",
      "news_4a68e67164b5",
      "news_b1be82f9225c"
    ],
    "LOF": [
      "news_5699034a96d7"
    ],
    "公募基金": [
      "news_8d6ef6bc050e"
    ],
    "对冲基金": [
      "news_0860b6c3e123"
    ],
    "债券": [
      "news_12ea62ec743e",
      "news_e615d5050e6c"
    ],
    "地方债": [
      "news_e615d5050e6c"
    ],
    "期货": [
      "news_a27ac8371166",
      "news_4ce19cc4d790",
      "news_0860b6c3e123"
    ],
    "IPO": [
      "news_baab259c34f6",
      "news_01334952dfb0",
      "news_e64a5639f0e8",
      "news_639bc2d7a0c9",
      "news_2f6bbad80e47",
      "news_4ce19cc4d790",
      "news_0860b6c3e123",
      "news_40822f7fe5e5",
      "news_97b7edea9e17",
      "news_61911c4fb0ba",
      "news_4d80336ea2ff",
      "news_63c1717fec77",
      "news_9a7aef9ef92f",
      "news_f038997487dd",
      "news_245e86f0ce09"
    ],
    "上市": [
      "news_01334952dfb0",
      "news_639bc2d7a0c9",
      "news_02d7dcdaa2a7",
      "news_2f6bbad80e47",
      "news_d8a3d49f401d",
      "news_0860b6c3e123",
      "news_40822f7fe5e5",
      "news_97b7edea9e17",
      "news_63c1717fec77",
      "news_f038997487dd"
    ],
    "退市": [
      "news_45b53d30f8e9"
    ],
    "增持": [
      "news_0869469815d8",
      "news_45b53d30f8e9",
      "news_aa1851f89d8e"
    ],
    "回购": [
      "news_17f16481b4d1",
      "news_66ddd265761d",
      "news_45b53d30f8e9",
      "news_63861ade3669",
      "news_29f37cab12cc",
      "news_1b20b8c53ad7",
      "news_0f20b7915228",
      "news_9b61038d93e0"
    ],
    "券商": [
      "news_cf296f3527d6"
    ],
    "自营": [
      "news_2b3d405898ac"
    ],
    "投资者": [
      "news_4ce19cc4d790",
      "news_2dbd844286f5",
      "news_40822f7fe5e5",
      "news_dfc8ce57b4fa",
      "news_626adfe70753"
    ],
    "散户": [
      "news_40822f7fe5e5"
    ],
    "机构": [
      "news_2dbd844286f5",
      "news_639cc784cb59",
      "news_c556f26c4eb2",
      "news_f2bf8906c830",
      "news_20ba85923d04",
      "news_77a41d21ba8f",
      "news_626adfe70753"
    ],
    "监管": [
      "news_20ba85923d04",
      "news_8d6ef6bc050e",
      "news_77a41d21ba8f",
      "news_626adfe70753"
    ],
    "金融监管": [
      "news_77a41d21ba8f"
    ],
    "证监会": [
      "news_63c1717fec77",
      "news_8d6ef6bc050e",
      "news_a0f53987808f",
      "news_77a41d21ba8f",
      "news_7c17994d15e5",
      "news_bba32dee9b76",
      "news_626adfe70753"
    ],
    "处罚": [
      "news_626adfe70753"
    ],
    "通报": [
      "news_bba32dee9b76"
    ],
    "条款": [
      "news_e9a0acb8dca1",
      "news_8905ff5d2a37"
    ],
    "通知": [
      "news_0869469815d8"
    ],
    "指引": [
      "news_3f3db40a05b5",
      "news_21f96dce5fd9",
      "news_2b3d405898ac",
      "news_4fc636098d15"
    ],
    "意见": [
      "news_389a38e6da24",
      "news_e9a0acb8dca1",
      "news_5db22ceb154c",
      "news_8905ff5d2a37",
      "news_a0f53987808f",
      "news_bba32dee9b76"
    ],
    "法规": [
      "news_8d6ef6bc050e"
    ],
    "资质": [
      "news_2c3fbfac1e03"
    ],
    "经济": [
      "news_c829a4d67ca1",
      "news_3f3db40a05b5",
      "news_9b5995e15eb7",
      "news_b46793ef881f",
      "news_a4dc0d648fab",
      "news_0c0c0dd998fd",
      "news_34730b4d522b",
      "news_9ee2733da048",
      "news_1b263040dcc6",
      "news_174fe8c0b0e7",
      "news_c94e87b80478",
      "news_7d3349bbe971"
    ],
    "高质量发展": [
      "news_60613f896796"
    ],
    "PMI": [
      "news_762f516505a6"
    ],
    "信贷": [
      "news_0d09c6994735"
    ],
    "货币政策": [
      "news_2dbd844286f5"
    ],
    "汇率": [
      "news_613798b85d0c"
    ],
    "人民币": [
      "news_0869469815d8",
      "news_a8756ffa606f",
      "news_e3490f17cfe6",
      "news_66ddd265761d",
      "news_a36e51e55484",
      "news_e91e138bbf49",
      "news_63861ade3669",
      "news_e9a0acb8dca1",
      "news_9b61038d93e0",
      "news_fcb1d57bf15e",
      "news_8905ff5d2a37"
    ],
    "跨境": [
      "news_f6d9e17ba45e",
      "news_b46793ef881f",
      "news_1b263040dcc6",
      "news_b26f179d6104"
    ],
    "美元": [
      "news_baab259c34f6",
      "news_01334952dfb0",
      "news_a06342bbad4f",
      "news_156e42e4fef1",
      "news_8e400e43156b",
      "news_ec1737937564",
      "news_12ea62ec743e",
      "news_e64a5639f0e8",
      "news_639bc2d7a0c9",
      "news_a27ac8371166",
      "news_73eec653183a",
      "news_c829a4d67ca1",
      "news_2f6bbad80e47",
      "news_4ce19cc4d790",
      "news_21f96dce5fd9",
      "news_40822f7fe5e5",
      "news_613798b85d0c",
      "news_97b7edea9e17",
      "news_0c618500b8b3",
      "news_e3490f17cfe6",
      "news_5a3ce260afe1",
      "news_9b2f6138332e",
      "news_389a38e6da24",
      "news_cdf99cdd1e5c",
      "news_29f37cab12cc",
      "news_5db22ceb154c",
      "news_0aa9e7d9aa50",
      "news_c556f26c4eb2",
      "news_9a7aef9ef92f",
      "news_7cd9e056621f",
      "news_05ac291f4a74",
      "news_245e86f0ce09",
      "news_51b607633166"
    ],
    "欧元": [
      "news_174fe8c0b0e7"
    ],
    "日元": [
      "news_4fc636098d15"
    ],
    "通胀": [
      "news_5ebfa695b7b5",
      "news_5205715e17d0",
      "news_2dbd844286f5",
      "news_e91e138bbf49"
    ],
    "复苏": [
      "news_ff8ddfb51772"
    ],
    "地产": [
      "news_cf296f3527d6"
    ],
    "消费": [
      "news_79c15472dd31",
      "news_21f96dce5fd9",
      "news_b46793ef881f",
      "news_3102bcc0bdd1",
      "news_3e63042ce4c6",
      "news_6a6d8809179e",
      "news_07e7331e35a1"
    ],
    "投资": [
      "news_4ce19cc4d790",
      "news_d8a3d49f401d",
      "news_2dbd844286f5",
      "news_40822f7fe5e5",
      "news_e615d5050e6c",
      "news_4d80336ea2ff",
      "news_78a6acd956c9",
      "news_8123e364444f",
      "news_c72b53da2a69",
      "news_e9a0acb8dca1",
      "news_58722b611079",
      "news_dfc8ce57b4fa",
      "news_3369511630be",
      "news_43f264104e63",
      "news_b26f179d6104",
      "news_8905ff5d2a37",
      "news_07e7331e35a1",
      "news_8d6ef6bc050e",
      "news_626adfe70753"
    ],
    "出口": [
      "news_8bdad9b80888",
      "news_e1ee132c0fde",
      "news_4fc636098d15",
      "news_51b607633166"
    ],
    "进口": [
      "news_34624479543a"
    ],
    "贸易": [
      "news_f6d9e17ba45e",
      "news_39f092fc9947",
      "news_b26f179d6104"
    ],
    "产业链": [
      "news_02f0b000d1ef",
      "news_3e63042ce4c6"
    ],
    "供应链": [
      "news_f6d9e17ba45e",
      "news_8bdad9b80888",
      "news_e382822e6cbf"
    ],
    "收入": [
      "news_c829a4d67ca1",
      "news_6c587ef78f71",
      "news_4d654fbbd36d",
      "news_21f96dce5fd9",
      "news_a8756ffa606f",
      "news_e3490f17cfe6",
      "news_5a3ce260afe1",
      "news_593c9f407b9d",
      "news_a36e51e55484",
      "news_6416e1d8d2db",
      "news_2b3d405898ac",
      "news_7be34182a541",
      "news_5d04e106d7e1",
      "news_dfc8ce57b4fa",
      "news_fcb1d57bf15e",
      "news_b3496a595f06",
      "news_37d9fcda650a",
      "news_4fc636098d15"
    ],
    "黄金": [
      "news_aa1851f89d8e"
    ],
    "原油": [
      "news_51b607633166"
    ],
    "工业": [
      "news_afb747c9ff58",
      "news_2342ecb5fc1f",
      "news_0c0c0dd998fd",
      "news_36aa96a4736b",
      "news_2786e4cf5700"
    ],
    "利润": [
      "news_4d654fbbd36d",
      "news_613798b85d0c",
      "news_e3490f17cfe6",
      "news_5a3ce260afe1",
      "news_a36e51e55484",
      "news_6416e1d8d2db",
      "news_2b3d405898ac",
      "news_3e63042ce4c6",
      "news_7be34182a541",
      "news_5d04e106d7e1",
      "news_fcb1d57bf15e",
      "news_b3496a595f06",
      "news_37d9fcda650a",
      "news_8905ff5d2a37"
    ],
    "股市": [
      "news_0ebbccb231bf",
      "news_e737ac98ff2f",
      "news_e3d8d457574c",
      "news_3aa3d45c2448",
      "news_6c265938d7ff",
      "news_6f1217271161",
      "news_a56f7789dae7",
      "news_97b042d90ea8",
      "news_c74e62ac7cc3",
      "news_6e00fbf931b7",
      "news_fa3af940b1ac"
    ],
    "美联储": [
      "news_5ebfa695b7b5",
      "news_5205715e17d0",
      "news_2dbd844286f5",
      "news_6244fd3cb0e4",
      "news_080efdf0b020",
      "news_6c30a281f4ec",
      "news_1a301f93934e"
    ],
    "财报": [
      "news_6c587ef78f71",
      "news_21f96dce5fd9",
      "news_e3490f17cfe6",
      "news_e382822e6cbf",
      "news_6416e1d8d2db",
      "news_2b3d405898ac",
      "news_3e63042ce4c6",
      "news_e9a0acb8dca1",
      "news_fcb1d57bf15e",
      "news_b3496a595f06",
      "news_6c30a281f4ec",
      "news_e75b4cc51783",
      "news_37d9fcda650a"
    ],
    "欧央行": [
      "news_174fe8c0b0e7"
    ],
    "权益": [
      "news_2c3fbfac1e03",
      "news_63861ade3669",
      "news_1b20b8c53ad7",
      "news_626adfe70753"
    ],
    "年化": [
      "news_c829a4d67ca1",
      "news_5a3ce260afe1"
    ],
    "募集": [
      "news_63c1717fec77"
    ],
    "认购": [
      "news_40822f7fe5e5",
      "news_4d80336ea2ff"
    ]
  },
  "sourceHealth": {
    "generatedAt": "2026-11-19T17:29:31.620Z",
    "status": "healthy",
    "totalSources": 12,
    "successfulSources": 10,
    "usableSources": 10,
    "failedSources": 2,
    "staleSources": 1,
    "fetchLimitReachedSources": 1,
    "coverageRate": 0.8333,
    "freshestPublishedAt": "2026-11-19T16:57:37.000Z",
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
        "itemCount": 19,
        "rawItemCount": 19,
        "acceptedItemCount": 19,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 0,
        "durationMs": 1491,
        "latestPublishedAt": "2026-11-19T15:08:20.000Z",
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
        "itemCount": 29,
        "rawItemCount": 29,
        "acceptedItemCount": 29,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 11,
        "durationMs": 806,
        "latestPublishedAt": "2026-11-19T16:25:30.000Z",
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
        "addedCount": 9,
        "durationMs": 14557,
        "latestPublishedAt": "2026-11-19T15:05:31.000Z",
        "usedEndpoint": "rsshub.rssforever.com"
      },
      {
        "sourceId": "source_dae28d24f5",
        "sourceName": "财联社",
        "tier": "S3",
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
        "addedCount": 12,
        "durationMs": 6440,
        "latestPublishedAt": "2026-11-19T16:57:37.000Z",
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
        "itemCount": 47,
        "rawItemCount": 47,
        "acceptedItemCount": 47,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 38,
        "durationMs": 29697,
        "latestPublishedAt": "2026-11-18T16:09:53.000Z",
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
        "addedCount": 3,
        "durationMs": 242,
        "latestPublishedAt": "2026-11-19T16:53:19.000Z",
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
        "durationMs": 27727,
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
        "addedCount": 2,
        "durationMs": 47305,
        "latestPublishedAt": "2026-11-17T20:09:47.000Z",
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
        "addedCount": 9,
        "durationMs": 181,
        "latestPublishedAt": "2026-11-19T09:09:41.000Z",
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
        "durationMs": 65,
        "latestPublishedAt": "2026-11-18T23:45:42.000Z",
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
        "addedCount": 7,
        "durationMs": 0,
        "latestPublishedAt": "2026-11-19T12:39:00.000Z",
        "usedEndpoint": null
      }
    ]
  },
  "historyStats": {
    "itemCount": 5000,
    "eventCount": 477,
    "retentionDays": 90
  },
  "macro": {
    "updatedAt": "2026-11-19T17:29:31.620Z",
    "indicators": [
      {
        "key": "lpr1y",
        "name": "LPR 1年期",
        "value": "3.00%",
        "note": "较9月20日 3.00% 持平",
        "direction": "flat",
        "asOf": "2026-10-20",
        "source": "中国货币网",
        "mode": "auto",
        "series": []
      },
      {
        "key": "lpr5y",
        "name": "LPR 5年期以上",
        "value": "3.50%",
        "note": "较9月20日 3.50% 持平",
        "direction": "flat",
        "asOf": "2026-10-20",
        "source": "中国货币网",
        "mode": "auto",
        "series": []
      },
      {
        "key": "cn10y",
        "name": "10年期国债",
        "value": "1.71%",
        "note": "周内下破 1.70%",
        "direction": "down",
        "asOf": "2026-08-11",
        "source": "中国货币网",
        "mode": "manual",
        "series": []
      },
      {
        "key": "deposit3y",
        "name": "五大行3年定存",
        "value": "1.25%",
        "note": "挂牌利率下行",
        "direction": "down",
        "asOf": "2026-08-11",
        "source": "五大行官网",
        "mode": "manual",
        "series": []
      },
      {
        "key": "us10y",
        "name": "美债 10年期",
        "value": "5.07%",
        "note": "较11月17日 5.10% 下降",
        "direction": "down",
        "asOf": "2026-11-18",
        "source": "美国财政部",
        "mode": "auto",
        "series": [
          {
            "date": "2026-11-09",
            "value": 4.88
          },
          {
            "date": "2026-11-10",
            "value": 4.98
          },
          {
            "date": "2026-11-12",
            "value": 5.1
          },
          {
            "date": "2026-11-13",
            "value": 5.15
          },
          {
            "date": "2026-11-16",
            "value": 5.12
          },
          {
            "date": "2026-11-17",
            "value": 5.1
          },
          {
            "date": "2026-11-18",
            "value": 5.07
          }
        ]
      },
      {
        "key": "fedRate",
        "name": "联邦基金利率",
        "value": "3.50-3.75%",
        "note": "9:3 投票现分歧",
        "direction": "flat",
        "asOf": "2026-08-11",
        "source": "美联储",
        "mode": "manual",
        "series": []
      },
      {
        "key": "usdcny",
        "name": "美元兑人民币",
        "value": "6.6667",
        "note": "较11月18日 6.6672 下降",
        "direction": "down",
        "asOf": "2026-11-19",
        "source": "Frankfurter/ECB",
        "mode": "auto",
        "series": [
          {
            "date": "2026-11-11",
            "value": 6.6707
          },
          {
            "date": "2026-11-12",
            "value": 6.6683
          },
          {
            "date": "2026-11-13",
            "value": 6.6719
          },
          {
            "date": "2026-11-16",
            "value": 6.6665
          },
          {
            "date": "2026-11-17",
            "value": 6.6661
          },
          {
            "date": "2026-11-18",
            "value": 6.6672
          },
          {
            "date": "2026-11-19",
            "value": 6.6667
          }
        ]
      },
      {
        "key": "gold",
        "name": "现货黄金",
        "value": "$3,689",
        "note": "较11月18日 $3,731 下降",
        "direction": "down",
        "asOf": "2026-11-19",
        "source": "gold-api.com",
        "mode": "auto",
        "series": []
      },
      {
        "key": "cngold",
        "name": "国内金价",
        "value": "¥801.93",
        "note": "较11月18日 ¥810.79 下降",
        "direction": "down",
        "asOf": "2026-11-19",
        "source": "上海黄金交易所 Au99.99",
        "mode": "auto",
        "series": [
          {
            "date": "2026-11-11",
            "value": 872.98
          },
          {
            "date": "2026-11-12",
            "value": 851.33
          },
          {
            "date": "2026-11-13",
            "value": 837.55
          },
          {
            "date": "2026-11-16",
            "value": 829.49
          },
          {
            "date": "2026-11-17",
            "value": 832.5
          },
          {
            "date": "2026-11-18",
            "value": 810.79
          },
          {
            "date": "2026-11-19",
            "value": 801.93
          }
        ]
      }
    ]
  },
  "aiAnalysis": {
    "schemaVersion": "2.0",
    "generatedBy": "cached",
    "dailyTakeaway": null,
    "eventClusters": [
      {
        "eventId": "event_f101880ef7bc",
        "title": "美股多头迎来新麻烦：通胀、加息与盈利增长放缓同时来袭",
        "mainItemId": "news_2dbd844286f5",
        "relatedItemIds": [
          "news_4ce19cc4d790",
          "news_e737ac98ff2f"
        ],
        "evidenceItemIds": [
          "news_4ce19cc4d790",
          "news_2dbd844286f5",
          "news_e737ac98ff2f"
        ],
        "historicalEvidenceCount": 47,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-11-19T17:29:31.620Z",
        "status": "developing",
        "summary": "Anthropic创纪录IPO提振市场，机构看好科技股，美股期货涨幅扩大",
        "latestProgress": "Anthropic创纪录IPO提振市场，美股期货涨幅扩大，纳指100期货涨2%"
      },
      {
        "eventId": "event_a3c5d0364922",
        "title": "A股公告精选 | 燧原科技(688801.SH)三日跌幅偏离值累计超30% 无限售流通股仅占总股本4.16%",
        "mainItemId": "news_1b20b8c53ad7",
        "relatedItemIds": [
          "news_17f16481b4d1"
        ],
        "evidenceItemIds": [
          "news_1b20b8c53ad7",
          "news_17f16481b4d1"
        ],
        "historicalEvidenceCount": 48,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-11-19T17:29:31.620Z",
        "status": "developing",
        "summary": "A股低价股增至107只，5家公司股价跌破1元拉响面值退市警报",
        "latestProgress": "11月18日A股三大股指早盘集体转跌，AI硬件局部回暖，京东大跌8%"
      },
      {
        "eventId": "event_9e320dba578d",
        "title": "10月美联储FOMC会议纪要：为10月未加息“找一堆理由”，又强烈指引12月“至少加息25基点”",
        "mainItemId": "news_080efdf0b020",
        "relatedItemIds": [
          "news_6244fd3cb0e4"
        ],
        "evidenceItemIds": [
          "news_080efdf0b020",
          "news_6244fd3cb0e4"
        ],
        "historicalEvidenceCount": 48,
        "firstSeenAt": "2026-11-06T07:06:11.933Z",
        "lastSeenAt": "2026-11-19T17:29:31.620Z",
        "status": "developing",
        "summary": "美联储会议纪要释放明确加息信号，多名官员支持后续加息，12月或加息超25基点",
        "latestProgress": "10月美联储FOMC纪要强烈指引12月至少加息25基点，为10月未加息说明理由"
      },
      {
        "eventId": "event_b326a8886e68",
        "title": "中国证监会新闻发言人答记者问",
        "mainItemId": "news_8d6ef6bc050e",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_8d6ef6bc050e"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-11-18T17:23:39.282Z",
        "lastSeenAt": "2026-11-19T17:29:31.620Z",
        "status": "developing",
        "summary": "中国证监会新闻发言人就市场关切问题回应媒体记者提问",
        "latestProgress": "2026年11月17日证监会新闻发言人出席记者会回应相关问题"
      },
      {
        "eventId": "event_ef1a79a1b1f6",
        "title": "欧央行新行长角逐加速！三个职位一盘棋，如何看欧元区共同债务也很重要",
        "mainItemId": "news_174fe8c0b0e7",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_174fe8c0b0e7"
        ],
        "historicalEvidenceCount": 2,
        "firstSeenAt": "2026-11-18T17:23:39.282Z",
        "lastSeenAt": "2026-11-19T17:29:31.620Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_2cf716748ce1",
        "title": "只剩央行一个买家！时隔11天，高盛再度下调黄金目标价至4650美元",
        "mainItemId": "news_aa1851f89d8e",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_aa1851f89d8e"
        ],
        "historicalEvidenceCount": 49,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-11-19T17:29:31.620Z",
        "status": "developing",
        "summary": "11月18日印尼央行预测2026年GDP增速4.9%-5.7%，同时称将采取措施维持印尼盾稳定。",
        "latestProgress": "印尼央行称将优化运用所有货币工具，维持印尼盾稳定。"
      },
      {
        "eventId": "event_daf1beb78032",
        "title": "京蓝科技：公司靶材产线尚未量产，亦未产生相关营业收入及利润",
        "mainItemId": "news_7be34182a541",
        "relatedItemIds": [
          "news_5d04e106d7e1"
        ],
        "evidenceItemIds": [
          "news_7be34182a541",
          "news_5d04e106d7e1"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-11-19T13:07:11.033Z",
        "lastSeenAt": "2026-11-19T17:29:31.620Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_07f6c9818b7b",
        "title": "财联社11月19日电，美国50ETF易方达(513850)将于2026年11月20日开市起至当日10:30停牌。",
        "mainItemId": "news_4a68e67164b5",
        "relatedItemIds": [
          "news_961f0b3050d8",
          "news_5699034a96d7",
          "news_b1be82f9225c"
        ],
        "evidenceItemIds": [
          "news_4a68e67164b5",
          "news_961f0b3050d8",
          "news_5699034a96d7",
          "news_b1be82f9225c"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-11-19T13:07:11.033Z",
        "lastSeenAt": "2026-11-19T17:29:31.620Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_36735390d58b",
        "title": "财联社11月20日电，Anthropic首日开盘市值预计达2万亿美元。",
        "mainItemId": "news_156e42e4fef1",
        "relatedItemIds": [
          "news_a06342bbad4f"
        ],
        "evidenceItemIds": [
          "news_156e42e4fef1",
          "news_a06342bbad4f"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-11-19T17:29:31.620Z",
        "lastSeenAt": "2026-11-19T17:29:31.620Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_bc5e0b0b1b67",
        "title": "欧洲三大股指集体收跌 德国DAX指数跌近1%",
        "mainItemId": "news_c559654fe8a8",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_c559654fe8a8"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-11-19T17:29:31.620Z",
        "lastSeenAt": "2026-11-19T17:29:31.620Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      }
    ],
    "dailySummary": {
      "highlights": [
        {
          "text": "[87] 美联储纪要重磅信号！未来将有更多加息 — 人工智能被视为通胀和潜在金融不稳定的推手。北京时间周四凌晨，美联储公布了10月政策会议纪要。纪要显示，联邦公开市场委员会",
          "evidenceItemIds": []
        },
        {
          "text": "[84] 美联储会议纪要：两名官员称12月加息超25个基点是有保障的，几乎所有与会者认为继续行动可能适宜 — 美联储会议纪要：两名官员称12月加息超25个基点是有保障的，几乎所有与会者认为继续行动可能适宜。风险提示及免责条款",
          "evidenceItemIds": []
        },
        {
          "text": "[80] 中国证监会新闻发言人答记者问 — 问：近日，发现互联网上传播“监管要求基金公司上报全部产品AI敞口”相关信息，请问这一情况是否属实？\n答：该信息不属实。公",
          "evidenceItemIds": [
            "news_8d6ef6bc050e"
          ]
        },
        {
          "text": "[79] 壹快评｜虚拟人“代言”美瞳，AI营销岂能以假乱真 — 虚拟人并非不能接广告，而是不能越界扮演真人“体验者”。晃动着睫毛的“女主”这样告诉“真人”：“戴了一天（美瞳）很舒服”“",
          "evidenceItemIds": []
        }
      ]
    },
    "eventChain": {
      "summary": "基于标题主题相似度和来源层级识别 5 组关联事件；仅表示内容相关，不代表已确认因果",
      "chains": [
        {
          "title": "Anthropic创纪录IPO提振市场，美股期货涨幅扩大，纳指100期货涨2%",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_4ce19cc4d790"
          ],
          "nodes": [
            "Anthropic创纪录IPO提振市场，美股期货涨幅扩大，纳指100期货涨2%",
            "财联社11月19日电，瑞士隆奥资产（Lombard Odier Co-Investment）称其“几乎满仓”美股，尤其看"
          ]
        },
        {
          "title": "A股双创指数均跌超1%，AI算力调整，电力股逆势活跃，恒科指跌超2%，腾讯、阿里双双大跌超5%",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [],
          "nodes": [
            "A股双创指数均跌超1%，AI算力调整，电力股逆势活跃，恒科指跌超2%，腾讯、阿里双双大跌超5%",
            "A股三大指数集体收跌，全市场超4800股飘绿",
            "A股四大指数集体低开，燃气、电信板块逆势活跃"
          ]
        },
        {
          "title": "美联储纪要重磅信号！未来将有更多加息",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [],
          "nodes": [
            "美联储纪要重磅信号！未来将有更多加息",
            "10月美联储FOMC会议纪要：为10月未加息“找一堆理由”，又强烈指引12月“至少加息25基点”",
            "美联储会议纪要：一些官员称12月加息超过25个基点或是合理的",
            "美联储会议纪要：两名官员称12月加息超25个基点是有保障的，几乎所有与会者认为继续行动可能适宜",
            "财联社11月19日电，美联储理事巴尔表示，通胀“过高”，正给许多家庭带来压力，称若经济表现符合预期，支持进一步加息。"
          ]
        },
        {
          "title": "港股异动 | 能源及能量环球(01142)涨超7% 拟收购中哈国际产业新城51%股权 或拓展哈萨克地域业务版图",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [],
          "nodes": [
            "港股异动 | 能源及能量环球(01142)涨超7% 拟收购中哈国际产业新城51%股权 或拓展哈萨克地域业务版图",
            "港股异动 | 登临科技-P(09917)今日高开低走 午后跌幅扩大逾12%创上市新低"
          ]
        },
        {
          "title": "报道：Anthropic正考虑扩大IPO规模，散户的认购需求接近1000亿美元",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [],
          "nodes": [
            "报道：Anthropic正考虑扩大IPO规模，散户的认购需求接近1000亿美元",
            "Anthropic正考虑扩大IPO规模，散户的认购需求接近1000亿美元。（CNBC）"
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
              "title": "重估养老风险人保寿险尊启长红的破局解法",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_054d2e45cc98"
              ]
            },
            {
              "title": "普惠金融成就案例揭晓中国人寿四项实践入选",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_7d3349bbe971"
              ]
            },
            {
              "title": "5000万用户与9年经营长跑微医保如何用普惠重塑互联网健康险生态",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_53f8f47954f8"
              ]
            }
          ]
        },
        "pe": {
          "level": "high",
          "summary": "17 条基金/资管相关资讯",
          "items": [
            {
              "title": "仓位拉开差距、净值分化，18只主动ETF迎主动能力大考",
              "impact": "市场表现影响，可用于投资人沟通",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": []
            },
            {
              "title": "上海社保科创股权投资基金登记成立，出资额200亿",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": []
            },
            {
              "title": "Anthropic灰市交易显示股价开盘预计上涨约20%",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": []
            }
          ]
        },
        "banking": {
          "level": "high",
          "summary": "11 条银行/货币政策相关资讯",
          "items": [
            {
              "title": "强美元撕裂全球流动性：风险资产何时迎来转机？",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": []
            },
            {
              "title": "加息恐惧引爆金属市场“无差别抛售”！德银警告：金、铜空头仍有加仓空间",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": []
            },
            {
              "title": "美国亚利桑那州对OpenAI等展开刑事调查，因失控智能体入侵银行系统",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": []
            }
          ]
        },
        "trust": {
          "level": "medium",
          "summary": "2 条信托/财富管理相关资讯",
          "items": [
            {
              "title": "上海社保科创股权投资基金登记成立，出资额200亿",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": []
            },
            {
              "title": "不系之舟：2027年全球大类资产展望",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": []
            }
          ]
        }
      }
    },
    "weeklyTrends": {
      "summary": "今日 150 条资讯，覆盖 5 个分类、8 个信源",
      "trends": [
        {
          "topic": "监管政策密集度上升",
          "evidence": "今日 6 条监管类资讯，监管层信号集中释放，关注政策落地节奏",
          "evidenceItemIds": [
            "news_8d6ef6bc050e",
            "news_a0f53987808f",
            "news_77a41d21ba8f"
          ],
          "direction": "上升"
        },
        {
          "topic": "行业动态活跃",
          "evidence": "今日 116 条行业动态资讯，行业层面信息充分，涉及多家机构/产品",
          "evidenceItemIds": [
            "news_4ce19cc4d790"
          ],
          "direction": "平稳"
        },
        {
          "topic": "货币政策信号",
          "evidence": "出现 8 次货币政策相关关键词，关注利率/流动性走向",
          "evidenceItemIds": [],
          "direction": "上升"
        },
        {
          "topic": "保险行业关注度",
          "evidence": "出现 6 条保险相关资讯，覆盖监管/市场/产品多维度",
          "evidenceItemIds": [
            "news_9f6c3ba76b56",
            "news_d63e7207eecf"
          ],
          "direction": "上升"
        },
        {
          "topic": "市场行情波动",
          "evidence": "出现 65 条市场行情相关资讯，市场关注度提升",
          "evidenceItemIds": [],
          "direction": "上升"
        }
      ]
    },
    "insurancePlanner": {
      "summary": "今日 6 条保险相关资讯，以下为规划师客户沟通参考",
      "talkingPoints": [
        {
          "topic": "重估养老风险人保寿险尊启长红的破局解法",
          "point": "养老金/年金市场动态，可用于退休规划客户的需求唤醒沟通",
          "action": "整理目标客户名单，准备年金利益演示",
          "evidenceItemIds": [
            "news_054d2e45cc98"
          ]
        },
        {
          "topic": "普惠金融成就案例揭晓中国人寿四项实践入选",
          "point": "保险科技/数字化转型进展，适合与高净值客户探讨行业前沿趋势",
          "action": "整理科技赋能案例，丰富客户沟通深度",
          "evidenceItemIds": [
            "news_7d3349bbe971"
          ]
        },
        {
          "topic": "5000万用户与9年经营长跑微医保如何用普惠重塑互联网健康险生态",
          "point": "健康险领域变化，适合作为客户保单年检中的风险缺口沟通素材",
          "action": "梳理在售健康险产品矩阵，标记优势产品",
          "evidenceItemIds": [
            "news_53f8f47954f8"
          ]
        },
        {
          "topic": "吉林：发展智能网联汽车 支持迭代高阶自动驾驶技术",
          "point": "养老金/年金市场动态，可用于退休规划客户的需求唤醒沟通",
          "action": "整理目标客户名单，准备年金利益演示",
          "evidenceItemIds": []
        }
      ]
    },
    "peOperations": {
      "summary": "今日 18 条基金/资管相关资讯，以下为运营参考",
      "talkingPoints": [
        {
          "topic": "仓位拉开差距、净值分化，18只主动ETF迎主动能力大考",
          "point": "市场波动时期，需主动沟通投资策略和风控措施",
          "action": "准备投资者沟通话术，强调风控纪律和长期视角",
          "evidenceItemIds": []
        },
        {
          "topic": "上海社保科创股权投资基金登记成立，出资额200亿",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": []
        },
        {
          "topic": "Anthropic灰市交易显示股价开盘预计上涨约20%",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": []
        },
        {
          "topic": "三友医疗：公司孵化的8i Robotics手术机器人已在六家医院完成科研和临床装机",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": []
        }
      ]
    },
    "marketOutlook": {
      "summary": "今日 51 条宏观经济/政策相关资讯",
      "outlooks": [
        {
          "topic": "机构：2027年第一季起整体NAND Flash合约价格将转向下跌趋势",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": []
        },
        {
          "topic": "共话APEC｜BMI首席经济学家谢哈布：本轮加息周期较短，亚洲经济韧性有支撑",
          "content": "宏观经济数据反映基本面修复节奏，是判断大类资产配置方向的底层参考",
          "evidenceItemIds": []
        },
        {
          "topic": "强美元撕裂全球流动性：风险资产何时迎来转机？",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": []
        },
        {
          "topic": "Anthropic创纪录IPO提振市场，美股期货涨幅扩大，纳指100期货涨2%",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_4ce19cc4d790"
          ]
        }
      ]
    },
    "sourceGeneratedBy": "rules"
  }
};
window.KEYWORD_INDEX = {
  "保险": [
    "news_a3a6437c4870",
    "news_7d3349bbe971",
    "news_9f6c3ba76b56",
    "news_d63e7207eecf"
  ],
  "养老": [
    "news_054d2e45cc98"
  ],
  "健康险": [
    "news_53f8f47954f8"
  ],
  "寿险": [
    "news_054d2e45cc98",
    "news_d63e7207eecf"
  ],
  "人保": [
    "news_054d2e45cc98",
    "news_d63e7207eecf"
  ],
  "银行": [
    "news_d8a3d49f401d",
    "news_0d09c6994735",
    "news_cf296f3527d6",
    "news_77a41d21ba8f"
  ],
  "央行": [
    "news_5205715e17d0",
    "news_aa1851f89d8e",
    "news_174fe8c0b0e7"
  ],
  "利率": [
    "news_6244fd3cb0e4",
    "news_080efdf0b020",
    "news_b3496a595f06"
  ],
  "加息": [
    "news_2dbd844286f5",
    "news_6244fd3cb0e4",
    "news_080efdf0b020"
  ],
  "存款": [
    "news_66ddd265761d"
  ],
  "股票": [
    "news_e64a5639f0e8",
    "news_639bc2d7a0c9",
    "news_40822f7fe5e5",
    "news_97b7edea9e17",
    "news_4d80336ea2ff",
    "news_29f37cab12cc",
    "news_63c1717fec77",
    "news_dfc8ce57b4fa",
    "news_9a7aef9ef92f",
    "news_f2bf8906c830"
  ],
  "A股": [
    "news_17f16481b4d1",
    "news_0ebbccb231bf",
    "news_45b53d30f8e9",
    "news_63861ade3669",
    "news_1b20b8c53ad7",
    "news_fa3af940b1ac"
  ],
  "美股": [
    "news_4ce19cc4d790",
    "news_2dbd844286f5",
    "news_a5f070f8c32b",
    "news_d1ebb26467ec",
    "news_9b2f6138332e",
    "news_cdeded10482d",
    "news_e9a0acb8dca1",
    "news_fcb1d57bf15e",
    "news_e737ac98ff2f"
  ],
  "指数": [
    "news_f506fe74033b",
    "news_c559654fe8a8",
    "news_bc29242eaf5e",
    "news_02d7dcdaa2a7",
    "news_4ce19cc4d790",
    "news_0860b6c3e123",
    "news_3aa3d45c2448",
    "news_6f1217271161",
    "news_c74e62ac7cc3",
    "news_6e00fbf931b7"
  ],
  "ETF": [
    "news_d8a3d49f401d",
    "news_961f0b3050d8",
    "news_4a68e67164b5",
    "news_b1be82f9225c"
  ],
  "LOF": [
    "news_5699034a96d7"
  ],
  "公募基金": [
    "news_8d6ef6bc050e"
  ],
  "对冲基金": [
    "news_0860b6c3e123"
  ],
  "债券": [
    "news_12ea62ec743e",
    "news_e615d5050e6c"
  ],
  "地方债": [
    "news_e615d5050e6c"
  ],
  "期货": [
    "news_a27ac8371166",
    "news_4ce19cc4d790",
    "news_0860b6c3e123"
  ],
  "IPO": [
    "news_baab259c34f6",
    "news_01334952dfb0",
    "news_e64a5639f0e8",
    "news_639bc2d7a0c9",
    "news_2f6bbad80e47",
    "news_4ce19cc4d790",
    "news_0860b6c3e123",
    "news_40822f7fe5e5",
    "news_97b7edea9e17",
    "news_61911c4fb0ba",
    "news_4d80336ea2ff",
    "news_63c1717fec77",
    "news_9a7aef9ef92f",
    "news_f038997487dd",
    "news_245e86f0ce09"
  ],
  "上市": [
    "news_01334952dfb0",
    "news_639bc2d7a0c9",
    "news_02d7dcdaa2a7",
    "news_2f6bbad80e47",
    "news_d8a3d49f401d",
    "news_0860b6c3e123",
    "news_40822f7fe5e5",
    "news_97b7edea9e17",
    "news_63c1717fec77",
    "news_f038997487dd"
  ],
  "退市": [
    "news_45b53d30f8e9"
  ],
  "增持": [
    "news_0869469815d8",
    "news_45b53d30f8e9",
    "news_aa1851f89d8e"
  ],
  "回购": [
    "news_17f16481b4d1",
    "news_66ddd265761d",
    "news_45b53d30f8e9",
    "news_63861ade3669",
    "news_29f37cab12cc",
    "news_1b20b8c53ad7",
    "news_0f20b7915228",
    "news_9b61038d93e0"
  ],
  "券商": [
    "news_cf296f3527d6"
  ],
  "自营": [
    "news_2b3d405898ac"
  ],
  "投资者": [
    "news_4ce19cc4d790",
    "news_2dbd844286f5",
    "news_40822f7fe5e5",
    "news_dfc8ce57b4fa",
    "news_626adfe70753"
  ],
  "散户": [
    "news_40822f7fe5e5"
  ],
  "机构": [
    "news_2dbd844286f5",
    "news_639cc784cb59",
    "news_c556f26c4eb2",
    "news_f2bf8906c830",
    "news_20ba85923d04",
    "news_77a41d21ba8f",
    "news_626adfe70753"
  ],
  "监管": [
    "news_20ba85923d04",
    "news_8d6ef6bc050e",
    "news_77a41d21ba8f",
    "news_626adfe70753"
  ],
  "金融监管": [
    "news_77a41d21ba8f"
  ],
  "证监会": [
    "news_63c1717fec77",
    "news_8d6ef6bc050e",
    "news_a0f53987808f",
    "news_77a41d21ba8f",
    "news_7c17994d15e5",
    "news_bba32dee9b76",
    "news_626adfe70753"
  ],
  "处罚": [
    "news_626adfe70753"
  ],
  "通报": [
    "news_bba32dee9b76"
  ],
  "条款": [
    "news_e9a0acb8dca1",
    "news_8905ff5d2a37"
  ],
  "通知": [
    "news_0869469815d8"
  ],
  "指引": [
    "news_3f3db40a05b5",
    "news_21f96dce5fd9",
    "news_2b3d405898ac",
    "news_4fc636098d15"
  ],
  "意见": [
    "news_389a38e6da24",
    "news_e9a0acb8dca1",
    "news_5db22ceb154c",
    "news_8905ff5d2a37",
    "news_a0f53987808f",
    "news_bba32dee9b76"
  ],
  "法规": [
    "news_8d6ef6bc050e"
  ],
  "资质": [
    "news_2c3fbfac1e03"
  ],
  "经济": [
    "news_c829a4d67ca1",
    "news_3f3db40a05b5",
    "news_9b5995e15eb7",
    "news_b46793ef881f",
    "news_a4dc0d648fab",
    "news_0c0c0dd998fd",
    "news_34730b4d522b",
    "news_9ee2733da048",
    "news_1b263040dcc6",
    "news_174fe8c0b0e7",
    "news_c94e87b80478",
    "news_7d3349bbe971"
  ],
  "高质量发展": [
    "news_60613f896796"
  ],
  "PMI": [
    "news_762f516505a6"
  ],
  "信贷": [
    "news_0d09c6994735"
  ],
  "货币政策": [
    "news_2dbd844286f5"
  ],
  "汇率": [
    "news_613798b85d0c"
  ],
  "人民币": [
    "news_0869469815d8",
    "news_a8756ffa606f",
    "news_e3490f17cfe6",
    "news_66ddd265761d",
    "news_a36e51e55484",
    "news_e91e138bbf49",
    "news_63861ade3669",
    "news_e9a0acb8dca1",
    "news_9b61038d93e0",
    "news_fcb1d57bf15e",
    "news_8905ff5d2a37"
  ],
  "跨境": [
    "news_f6d9e17ba45e",
    "news_b46793ef881f",
    "news_1b263040dcc6",
    "news_b26f179d6104"
  ],
  "美元": [
    "news_baab259c34f6",
    "news_01334952dfb0",
    "news_a06342bbad4f",
    "news_156e42e4fef1",
    "news_8e400e43156b",
    "news_ec1737937564",
    "news_12ea62ec743e",
    "news_e64a5639f0e8",
    "news_639bc2d7a0c9",
    "news_a27ac8371166",
    "news_73eec653183a",
    "news_c829a4d67ca1",
    "news_2f6bbad80e47",
    "news_4ce19cc4d790",
    "news_21f96dce5fd9",
    "news_40822f7fe5e5",
    "news_613798b85d0c",
    "news_97b7edea9e17",
    "news_0c618500b8b3",
    "news_e3490f17cfe6",
    "news_5a3ce260afe1",
    "news_9b2f6138332e",
    "news_389a38e6da24",
    "news_cdf99cdd1e5c",
    "news_29f37cab12cc",
    "news_5db22ceb154c",
    "news_0aa9e7d9aa50",
    "news_c556f26c4eb2",
    "news_9a7aef9ef92f",
    "news_7cd9e056621f",
    "news_05ac291f4a74",
    "news_245e86f0ce09",
    "news_51b607633166"
  ],
  "欧元": [
    "news_174fe8c0b0e7"
  ],
  "日元": [
    "news_4fc636098d15"
  ],
  "通胀": [
    "news_5ebfa695b7b5",
    "news_5205715e17d0",
    "news_2dbd844286f5",
    "news_e91e138bbf49"
  ],
  "复苏": [
    "news_ff8ddfb51772"
  ],
  "地产": [
    "news_cf296f3527d6"
  ],
  "消费": [
    "news_79c15472dd31",
    "news_21f96dce5fd9",
    "news_b46793ef881f",
    "news_3102bcc0bdd1",
    "news_3e63042ce4c6",
    "news_6a6d8809179e",
    "news_07e7331e35a1"
  ],
  "投资": [
    "news_4ce19cc4d790",
    "news_d8a3d49f401d",
    "news_2dbd844286f5",
    "news_40822f7fe5e5",
    "news_e615d5050e6c",
    "news_4d80336ea2ff",
    "news_78a6acd956c9",
    "news_8123e364444f",
    "news_c72b53da2a69",
    "news_e9a0acb8dca1",
    "news_58722b611079",
    "news_dfc8ce57b4fa",
    "news_3369511630be",
    "news_43f264104e63",
    "news_b26f179d6104",
    "news_8905ff5d2a37",
    "news_07e7331e35a1",
    "news_8d6ef6bc050e",
    "news_626adfe70753"
  ],
  "出口": [
    "news_8bdad9b80888",
    "news_e1ee132c0fde",
    "news_4fc636098d15",
    "news_51b607633166"
  ],
  "进口": [
    "news_34624479543a"
  ],
  "贸易": [
    "news_f6d9e17ba45e",
    "news_39f092fc9947",
    "news_b26f179d6104"
  ],
  "产业链": [
    "news_02f0b000d1ef",
    "news_3e63042ce4c6"
  ],
  "供应链": [
    "news_f6d9e17ba45e",
    "news_8bdad9b80888",
    "news_e382822e6cbf"
  ],
  "收入": [
    "news_c829a4d67ca1",
    "news_6c587ef78f71",
    "news_4d654fbbd36d",
    "news_21f96dce5fd9",
    "news_a8756ffa606f",
    "news_e3490f17cfe6",
    "news_5a3ce260afe1",
    "news_593c9f407b9d",
    "news_a36e51e55484",
    "news_6416e1d8d2db",
    "news_2b3d405898ac",
    "news_7be34182a541",
    "news_5d04e106d7e1",
    "news_dfc8ce57b4fa",
    "news_fcb1d57bf15e",
    "news_b3496a595f06",
    "news_37d9fcda650a",
    "news_4fc636098d15"
  ],
  "黄金": [
    "news_aa1851f89d8e"
  ],
  "原油": [
    "news_51b607633166"
  ],
  "工业": [
    "news_afb747c9ff58",
    "news_2342ecb5fc1f",
    "news_0c0c0dd998fd",
    "news_36aa96a4736b",
    "news_2786e4cf5700"
  ],
  "利润": [
    "news_4d654fbbd36d",
    "news_613798b85d0c",
    "news_e3490f17cfe6",
    "news_5a3ce260afe1",
    "news_a36e51e55484",
    "news_6416e1d8d2db",
    "news_2b3d405898ac",
    "news_3e63042ce4c6",
    "news_7be34182a541",
    "news_5d04e106d7e1",
    "news_fcb1d57bf15e",
    "news_b3496a595f06",
    "news_37d9fcda650a",
    "news_8905ff5d2a37"
  ],
  "股市": [
    "news_0ebbccb231bf",
    "news_e737ac98ff2f",
    "news_e3d8d457574c",
    "news_3aa3d45c2448",
    "news_6c265938d7ff",
    "news_6f1217271161",
    "news_a56f7789dae7",
    "news_97b042d90ea8",
    "news_c74e62ac7cc3",
    "news_6e00fbf931b7",
    "news_fa3af940b1ac"
  ],
  "美联储": [
    "news_5ebfa695b7b5",
    "news_5205715e17d0",
    "news_2dbd844286f5",
    "news_6244fd3cb0e4",
    "news_080efdf0b020",
    "news_6c30a281f4ec",
    "news_1a301f93934e"
  ],
  "财报": [
    "news_6c587ef78f71",
    "news_21f96dce5fd9",
    "news_e3490f17cfe6",
    "news_e382822e6cbf",
    "news_6416e1d8d2db",
    "news_2b3d405898ac",
    "news_3e63042ce4c6",
    "news_e9a0acb8dca1",
    "news_fcb1d57bf15e",
    "news_b3496a595f06",
    "news_6c30a281f4ec",
    "news_e75b4cc51783",
    "news_37d9fcda650a"
  ],
  "欧央行": [
    "news_174fe8c0b0e7"
  ],
  "权益": [
    "news_2c3fbfac1e03",
    "news_63861ade3669",
    "news_1b20b8c53ad7",
    "news_626adfe70753"
  ],
  "年化": [
    "news_c829a4d67ca1",
    "news_5a3ce260afe1"
  ],
  "募集": [
    "news_63c1717fec77"
  ],
  "认购": [
    "news_40822f7fe5e5",
    "news_4d80336ea2ff"
  ]
};
