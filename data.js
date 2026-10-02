// finhot auto-generated data - powered by RSSHub + financial sources + Zhihu OpenAPI
// Generated: 2026-10-02T10:30:07.237Z
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
  "date": "2026-10-02",
  "generatedAt": "2026-10-02T10:30:07.237Z",
  "lead": "今日新增 61 条，共 150 条精选资讯",
  "items": [
    {
      "title": "KION集团三季度发布利润警告，股价下挫",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3592958",
      "publishedAt": "2026-10-02T10:17:54.000Z",
      "fetchedAt": "2026-10-02T10:29:41.328Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_1e0fbf8e69f8",
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
      "title": "克罗地亚9月通胀率达4.6%，符合市场预期",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3592957",
      "publishedAt": "2026-10-02T10:17:48.000Z",
      "fetchedAt": "2026-10-02T10:29:41.371Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_dd1bd9609c82",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "霍尔木兹海峡油轮运输回升，但柴油成本居高不下，原油价格仍承压",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3592952",
      "publishedAt": "2026-10-02T10:15:44.000Z",
      "fetchedAt": "2026-10-02T10:29:41.328Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_677ea319c794",
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
      "title": "韩国监管机构在多起数据泄露事件后紧急约谈各大银行",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3592951",
      "publishedAt": "2026-10-02T10:15:33.000Z",
      "fetchedAt": "2026-10-02T10:29:41.328Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_4830b6299c47",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 70,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
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
          "score": 46,
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
      "title": "嘉能可上调交易利润展望，2026年盈利预计超50亿美元",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3592949",
      "publishedAt": "2026-10-02T10:12:07.000Z",
      "fetchedAt": "2026-10-02T10:29:41.328Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_b6d0fcac7032",
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
      "title": "柏瑞银行：沃达丰有望受益于现金流改善与德国市场整合",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3592937",
      "publishedAt": "2026-10-02T10:06:39.000Z",
      "fetchedAt": "2026-10-02T10:29:41.328Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_f927cbc88275",
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
      "title": "药师帮(09885)10月2日斥资28.99万港元回购8.48万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3592930",
      "publishedAt": "2026-10-02T10:05:13.000Z",
      "fetchedAt": "2026-10-02T10:29:41.328Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_da1497a3535c",
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
      "title": "贝壳-W(02423)10月1日斥资350万美元回购62.93万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3592931",
      "publishedAt": "2026-10-02T10:05:13.000Z",
      "fetchedAt": "2026-10-02T10:29:41.328Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_f58725bff205",
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
      "title": "中国波顿(03318)10月2日斥资25.56万港元回购7.8万股",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3592932",
      "publishedAt": "2026-10-02T10:05:13.000Z",
      "fetchedAt": "2026-10-02T10:29:41.328Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_044317efab6e",
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
      "title": "中国医药BD再下一城！艾博生物与诺华达成78亿美元mRNA授权协议",
      "sourceUrl": "https://wallstreetcn.com/articles/3782931",
      "publishedAt": "2026-10-02T10:03:40.000Z",
      "fetchedAt": "2026-10-02T10:28:43.728Z",
      "timeConfidence": "source",
      "summary": "中国mRNA生物技术公司艾博生物（Abogen Biosciences）与瑞士制药巨头诺华（Novartis）达成一项总价值高达78亿美元的授权合作协议，为全球总交易额最高的一笔之一，亦成为近期跨国药企押注中国创新药管线的又一重磅案例。\n根据协议，诺华将预付5.75亿美元，获得艾博生物旗下实验性药物ABO2203的独家授权，并拥有对艾博生物RNA技术平台其他潜在项目的选择权。若后续开发顺利推进并获",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4043a2d4c835",
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
      "title": "9月新增就业料降至9万：今夜非农真正的“炸点”，或在8月数据是否大幅下修",
      "sourceUrl": "https://wallstreetcn.com/articles/3782927",
      "publishedAt": "2026-10-02T09:54:15.000Z",
      "fetchedAt": "2026-10-02T10:28:43.728Z",
      "timeConfidence": "source",
      "summary": "美国9月非农就业报告将于周五（10月2日）公布，这是10月28日美联储议息会议前最后一份就业数据，市场对其影响力的定价却降至近期低点——而历史经验表明，市场最不在意的时候，往往是数据最能搅动市场的时候。\n华尔街中位数预期为新增就业9万人，较8月的16.2万大幅回落。市场高度关注8月数据是否会被大幅下修，因异常的季节性调整此前显著夸大了整体就业表现，这使得9月的数据面临极大的基数效应不确定性。\n与此",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6c146bfaf76e",
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
      "title": "博通联手黑石筹资600亿美元，为Anthropic等AI公司铺路算力",
      "sourceUrl": "https://wallstreetcn.com/articles/3782929",
      "publishedAt": "2026-10-02T09:53:08.000Z",
      "fetchedAt": "2026-10-02T10:28:43.728Z",
      "timeConfidence": "source",
      "summary": "博通正牵头筹组一笔规模达600亿美元的债务融资，旨在为Anthropic等人工智能企业购买芯片及建设数据中心提供资金支持，规模跻身AI芯片领域最大债务融资交易之列。\n10月2日，据彭博援引知情人士透露，博通正与华尔街银行推进这笔融资，其中420亿美元拟发行A类优先有担保债券，由银行组织银团向投资者分销；另外180亿美元为B类次级债务，由黑石集团主导。\n这笔融资已酝酿数周，目前尚未正式对外宣布。交易",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6ab1abce685b",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "普京：很快所有人都将开中国车",
      "sourceUrl": "https://wallstreetcn.com/articles/3782930",
      "publishedAt": "2026-10-02T09:52:34.000Z",
      "fetchedAt": "2026-10-02T10:28:43.728Z",
      "timeConfidence": "source",
      "summary": "据俄罗斯《消息报》和今日俄罗斯（RT）报道，当地时间10月1日，在瓦尔代国际辩论俱乐部年会上，俄罗斯总统普京表示，因为欧洲汽车市场正陷入深度衰退，很快所有车主都可能换开中国汽车。\n“欧洲的汽车工业在哪里？企业正在关闭。我们很快都将开上中国汽车。这是好是坏我不知道，但（它们）便宜且质量好。”普京说。\n普京还驳斥了西方国家对中国汽车“产能过剩”的指责，并重申市场的基本原则，即最终结果永远由消费需求决定",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4d533087caa8",
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
      "eventId": "event_66a333af8fce"
    },
    {
      "title": "美联储内部监察报告：翻修工程管理失当，但鲍威尔无违法行为",
      "sourceUrl": "https://wallstreetcn.com/articles/3782928",
      "publishedAt": "2026-10-02T09:40:16.000Z",
      "fetchedAt": "2026-10-02T10:28:43.728Z",
      "timeConfidence": "source",
      "summary": "美联储独立监察机构裁定，总部翻新工程存在重大管理缺陷，但未发现任何行政不当行为，也没有理由将任何人移交刑事追诉。这一结论从法律层面为美联储前主席鲍威尔扫清了障碍，但围绕这一事件的政治角力远未平息。\n据《华尔街日报》近日报道，美联储监察长办公室周三发布的这份长达120页的报告，是特朗普政府针对鲍威尔采取潜在法律行动所面临的最后一道正式障碍。报告显示，翻新工程造价已从2020年估算的13亿美元膨胀至约",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1d69be3f072d",
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
      "eventId": null
    },
    {
      "title": "嘉能可：澳大利亚证券交易所二次上市将于10月14日正式开始交易",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008513230212996",
      "publishedAt": "2026-10-02T09:29:33.000Z",
      "fetchedAt": "2026-10-02T10:29:22.376Z",
      "timeConfidence": "source",
      "summary": "嘉能可宣布，其澳大利亚证券交易所二次上市将于2026年10月14日正式开始交易。公司同时更新了长期营销业务指引：长期营销调整后EBIT指引中点为35亿美元，区间为28亿至42亿美元。嘉能可预计2026年全年营销调整后EBIT将超过50亿美元。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_395488b90408",
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
        "regDocument": 6,
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
          "score": 29,
          "reasons": [
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
      "eventId": null
    },
    {
      "title": "东芝拟将AI数据中心HDD产能翻倍，目标把容量份额提升至30%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008466778279810",
      "publishedAt": "2026-10-02T09:11:16.000Z",
      "fetchedAt": "2026-10-02T10:29:22.376Z",
      "timeConfidence": "source",
      "summary": "东芝计划到2027财年将面向人工智能数据中心的硬盘驱动器产能提高一倍，以应对AI基础设施建设带来的高容量存储需求增长。据报道，公司将投资约600亿日元，约合3.8亿美元，扩建位于菲律宾的HDD生产设施。这将是东芝约五年来首次进行大规模硬盘相关投资。东芝目前与Western Digital和Seagate并列为全球三大HDD厂商之一。公司希望借此次扩产，提高其按存储容量计算的全球市场份额，中期目标是",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_72932b845fa3",
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
      "title": "港股收盘 | 科技指数周内续创新低 深演智能累计涨幅超60%",
      "sourceUrl": "https://www.cls.cn/detail/2497272",
      "publishedAt": "2026-10-02T09:00:04.000Z",
      "fetchedAt": "2026-10-02T10:29:21.686Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 胡家荣）受假期影响，本周港股仅有四个交易日，主要指数呈现震荡回调走势。\n截至周五收盘，恒生指数全周累计下跌2.19%，报收23972.29点；科技指数累计下跌3.57%，报收4157.94点；国企指数累计下跌1.66%，报收8030.54点。\n资金高低切换特征显著 个股周度表现分化\n本周港股呈现明显的“高低切换”与“事件驱动”特征，资金节前避险调仓，从前期估值过高、透支预",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9efc31ad2c41",
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
        "深度研究"
      ],
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "柴油危机撞上中期选举！美国施压欧洲盟友释放储备“救急”",
      "sourceUrl": "https://www.cls.cn/detail/2497270",
      "publishedAt": "2026-10-02T08:54:28.000Z",
      "fetchedAt": "2026-10-02T10:29:21.686Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 周子意）特朗普政府正敦促欧洲国家紧急释放部分柴油储备，给出的理由是美国的农民、卡车司机和企业不应独自承担全球供应中断带来的负担。\n报道称，特朗普政府尤其希望法国与德国动用本国柴油储备，以抑制因美国对伊朗战争而飙升的油价。\n在此呼吁发出之际，美国总统唐纳德·特朗普仍在权衡是否实施柴油出口禁令，以此作为遏制高能源价格的举措之一。\n选举在即 压力倍增\n据美国汽车协会（AAA）数",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e24b46192afa",
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
      "title": "法国提议\"欧洲释放5000万桶柴油\"，油价应声跳水，欧股集体上涨",
      "sourceUrl": "https://wallstreetcn.com/articles/3782926",
      "publishedAt": "2026-10-02T08:48:18.000Z",
      "fetchedAt": "2026-10-02T10:28:43.728Z",
      "timeConfidence": "source",
      "summary": "法国提出大规模战略储备释放计划，国际油价随即大幅下挫，市场风险偏好明显回升。\n据悉，法国已提出一项计划，建议从欧洲释放5000万桶柴油，并在国际能源署（IEA）成员国范围内释放5000万桶原油。消息传出后，国际原油价格应声跳水——WTI原油跌破90美元/桶关口，报89.96美元/桶，日内跌幅达3.0%；布伦特原油同步跌破100美元/桶，报99.95美元/桶。\n\n与此同时，风险资产普遍走强。欧洲斯托",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d5ea0945f22a",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "阿斯顿 · 马丁首款纯电动汽车推迟至2033年后，V8/V12发动机保留至2035年",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008368621785219",
      "publishedAt": "2026-10-02T08:37:26.000Z",
      "fetchedAt": "2026-10-02T10:29:22.376Z",
      "timeConfidence": "source",
      "summary": "报道称阿斯顿 · 马丁（Aston Martin）计划延后其首款纯电动汽车上市时间，推迟到2033—2035年，并制定路线图确保V8与V12发动机车型至少供应至2035年。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_88ded9b30942",
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
      "title": "恒指收跌2.6%，恒生科技指数跌2.26%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008458364440453",
      "publishedAt": "2026-10-02T08:14:42.000Z",
      "fetchedAt": "2026-10-02T10:29:22.376Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，恒指收跌2.6%，恒生科技指数跌2.26%；银行、医药生物板块领跌，百济神州跌超5%，工商银行跌超3%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_d663596ede3c",
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
      "title": "亚马逊探索“表外”融资：拟将80亿美元英伟达芯片剥离至SPV再租回",
      "sourceUrl": "https://www.cls.cn/detail/2497249",
      "publishedAt": "2026-10-02T08:00:52.000Z",
      "fetchedAt": "2026-10-02T10:29:21.686Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 周子意）据知情人士透露，亚马逊正寻求通过一个新载体，向外部投资者转让价值80亿美元的英伟达高端芯片。\n这家云服务巨头近几周一直在与投资者接洽，以评估市场对该交易的兴趣。根据该交易方案，亚马逊将把部署在美国各地数据中心数千枚Grace Blackwell芯片剥离至一个特殊目的载体（SPV）中，该载体旨在优化亚马逊的资产负债表。\n随后，亚马逊将从该SPV租回这些高端AI芯片，",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_990933b9df6c",
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
      "title": "北京朝阳纳税服务中心及多个税务所发文，推动离岸信托个税新政落地",
      "sourceUrl": "https://www.yicai.com/news/103383883.html",
      "publishedAt": "2026-10-02T07:49:07.000Z",
      "fetchedAt": "2026-10-02T10:28:48.747Z",
      "timeConfidence": "source",
      "summary": "“把离岸信托个人所得税管理作为高净值自然人税收治理重要抓手”。离岸信托个人所得税新政已落地两个月有余。国庆长假前，国家税务总局北京市朝阳区税务局多个税务所发文详解推动新政落地的相关举措。\n\n9月29日，国家税务总局北京市朝阳区税务局发布的文章《纳税服务中心全面做好离岸信托咨询保障工作》显示，为扎实推进该局离岸信托个税征管方案落地执行，纳税服务中心压实工作责任，细化工作举措，统筹做好组织保障、业务培",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f1474a3409d8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 56,
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
      "eventId": null
    },
    {
      "title": "韩国检察厅正式退出历史舞台",
      "sourceUrl": "https://www.cls.cn/detail/2497247",
      "publishedAt": "2026-10-02T07:45:36.000Z",
      "fetchedAt": "2026-10-02T10:29:21.686Z",
      "timeConfidence": "source",
      "summary": "△公诉厅（左） 重大犯罪调查厅（右）\n韩国检察制度10月2日迎来重大改革。公诉厅和重大犯罪调查厅当天正式成立，运行了78年的检察厅正式关闭，检察机关长期同时拥有侦查权和起诉权的制度成为历史。\n根据修订后的《刑事诉讼法》、《公诉厅法》和《重大犯罪调查厅法》，公诉厅主要负责提起公诉、维持公诉，重大犯罪调查厅负责7类重大犯罪侦查。大多数刑事案件由警方侦查，公诉厅不再拥有侦查权。虽然“检察厅”这一机构名称",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0e1909930562",
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
      "title": "Muse发布仅三周，但消费级Agent趋势已无比明确",
      "sourceUrl": "https://wallstreetcn.com/charts/41959970",
      "publishedAt": "2026-10-02T07:41:28.000Z",
      "fetchedAt": "2026-10-02T10:28:43.728Z",
      "timeConfidence": "source",
      "summary": "美国知名科技分析师Ben Thompson认为，以Muse为代表的消费级AI Agent品类已是真实且不可逆的趋势——它将成为”聚合器中的聚合器”，以一个拟人化角色中介用户的一切线上行为，赢得这一赛道的玩家将收获天文数字级的回报，这正是尽管Muse上线仅三周、仍存在诸多不足，却已足够令人亢奋的根本原因。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f41800831fdf",
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
      "title": "超1200亿元，公募“红包”派发进行时",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008344329293697",
      "publishedAt": "2026-10-02T07:40:45.000Z",
      "fetchedAt": "2026-10-02T10:29:22.376Z",
      "timeConfidence": "source",
      "summary": "公募基金年内分红超1200亿元，债券型基金贡献逾六成，多只宽基ETF分红金额居前。与此同时，权益基金分红次数同比增加近八成，31家公募机构旗下产品分红金额超过10亿元。业内人士表示，在市场波动背景下，基金分红可以兑现部分收益，既有助于提升产品吸引力，也能在一定程度上帮助投资者锁定收益、缓解持仓压力。（上证报）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_d67c04fa04a2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 72,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "passesTierGate": true,
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 78,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 4 项",
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
      "title": "今年上半年外商股权性质直接投资同比增长55%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008327676874887",
      "publishedAt": "2026-10-02T07:22:48.000Z",
      "fetchedAt": "2026-10-02T10:29:22.376Z",
      "timeConfidence": "source",
      "summary": "国家外汇管理局发布的《2026年上半年中国国际收支报告》显示，2026年上半年，外商股权性质直接投资为638亿美元，同比增长55%。报告显示，外商股权性质直接投资中，反映长期投资意愿的资本金净增加431亿美元；外资企业在境内的收益再投资同比增长31%，表明外资企业将经营所得更多用于在华投资兴业。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b40444575a73",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "title": "Muse加速智能体商业化叙事 AI决策概念股深演智能三日累涨60%",
      "sourceUrl": "https://www.cls.cn/detail/2497225",
      "publishedAt": "2026-10-02T07:12:34.000Z",
      "fetchedAt": "2026-10-02T10:29:21.686Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 冯轶）今日港股AI应用概念整体回调，但深演智能(02723.HK)一度逆势拉涨超20%。\n截至发稿，深演智能日内仍涨逾18%，近三个交易日已累涨超过6成。近期以Mues为代表的AI智能体再度刮起一股热潮，也让决策式AI及以GEO为核心的AI营销模式再度成为资金的短期焦点。\n\n德银近日发布报告称，预计Muse长期变现重点或从订阅转向交易佣金、支付和广告，乐观情景下2030年",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_43d1b55ab2ae",
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
      "title": "恒生科技指数连跌一年，累计跌幅近四成｜市场观察",
      "sourceUrl": "https://www.yicai.com/news/103383874.html",
      "publishedAt": "2026-10-02T07:08:27.000Z",
      "fetchedAt": "2026-10-02T10:28:48.747Z",
      "timeConfidence": "source",
      "summary": "内地假期使得港股缺乏南向资金支撑。受到欧美等国债券收益率高位徘徊，部分中资券商客户被限制买入等因素影响，10月2日港股继续下跌，恒生指数、恒生科技指数盘中跌幅均一度超过3%。恒生科技指数连跌一年，并创出4111点新低，一年以来累计跌幅逼近40%。在第一财经记者采访的业内人士看来，海外利率上升叠加中资券商限制客户买入，市场形成“破位”走势，都让港股短期内仍然有调整压力；不过，中资券商限制买入让资金被",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4ab2a4fea672",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 29,
          "reasons": [
            "命中关联主题 1 项",
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
      "eventId": null
    },
    {
      "title": "三菱重工将投资约1000亿日元用于造船项目",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008323764637568",
      "publishedAt": "2026-10-02T07:00:48.000Z",
      "fetchedAt": "2026-10-02T10:29:22.376Z",
      "timeConfidence": "source",
      "summary": "三菱重工将投资约1000亿日元用于造船项目。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_4532478386f4",
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
      "title": "普京：很快所有人都得开中国车",
      "sourceUrl": "https://www.cls.cn/detail/2497224",
      "publishedAt": "2026-10-02T06:49:43.000Z",
      "fetchedAt": "2026-10-02T10:29:21.686Z",
      "timeConfidence": "source",
      "summary": "据中国新闻社，10月1日，俄罗斯总统普京在“瓦尔代”国际辩论俱乐部全体会议上表示，由于欧洲汽车市场正陷入深度衰退，很快所有车主都可能换开中国汽车。\n普京表示：“欧洲的汽车工业在哪里？企业正在关闭。我们很快都将开上中国汽车。这是好是坏我不知道，但便宜且质量好。”\n普京驳斥了西方国家关于中国汽车“产能过剩”的指责，并提醒市场的基本原则——最终结果永远由消费者需求决定。他强调，如今不仅欧洲汽车工业处于深",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_65c19fbc55f2",
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
      "eventId": "event_66a333af8fce"
    },
    {
      "title": "核心通胀2.8%粘性未消、出口1209亿美元创纪录，韩国央行11月加息预期升温",
      "sourceUrl": "https://wallstreetcn.com/articles/3782923",
      "publishedAt": "2026-10-02T06:35:18.000Z",
      "fetchedAt": "2026-10-02T10:28:43.728Z",
      "timeConfidence": "source",
      "summary": "韩国9月整体通胀如期回落，但剔除食品与能源后的核心通胀仍显粘性，叠加半导体驱动的出口单月创下历史新高，强化了市场对韩国央行11月恢复加息的预期。\n周五（10月2日），韩国数据与统计部公布的数据显示，9月消费者价格指数（CPI）同比上涨2.9%，较8月的3.1%回落，符合经济学家2.9%的中值预期；核心通胀录得2.8%，较8月的3.4%明显下降，但仍运行在2%区间的中高位，表明潜在价格压力并未随能源",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_570b6a39a4b5",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "tierGate": 60,
      "passesTierGate": true,
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
          "score": 95,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_2cf716748ce1"
    },
    {
      "title": "瑞士宝盛集团宣布6亿瑞郎股票回购计划",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008307544084355",
      "publishedAt": "2026-10-02T06:32:20.000Z",
      "fetchedAt": "2026-10-02T10:29:22.376Z",
      "timeConfidence": "source",
      "summary": "瑞士宝盛集团宣布了一项价值至多6亿瑞士法郎（7.23亿美元）的股票回购计划，此前集团瑞士监管机构刚刚宣布结束对该公司长达数年的调查。贷款方还提出了修订后的资本分配政策。该公司在一份声明中表示，“在获得监管部门批准并考虑到集团雄厚的资本实力后，宝盛集团董事会已批准此次股票回购计划。 ”（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c93072cce96c",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 69,
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "博通据悉筹措600亿美元，为Anthropic芯片项目提供资金",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008270806782084",
      "publishedAt": "2026-10-02T06:08:57.000Z",
      "fetchedAt": "2026-10-02T10:29:22.376Z",
      "timeConfidence": "source",
      "summary": "据报道，知情人士透露，博通的华尔街银团正开始筹集600亿美元的新一轮AI芯片融资，为Anthropic芯片项目提供资金。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0287b9cea67b",
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
      "title": "截至8月底我国境内公募基金规模达39.63万亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008236452908933",
      "publishedAt": "2026-10-02T05:39:58.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "中国基金业协会最新发布的数据显示，截至2026年8月底，我国境内公募基金资产净值合计39.63万亿元。截至2026年8月底，我国境内公募基金管理机构共165家，其中基金管理公司150家，取得公募资格的资产管理机构15家。（新华社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_446bdef6bf26",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 48,
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
          "score": 29,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 64,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 48,
      "llmScores": [
        49,
        47
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
      "title": "对标伦纽黄金市场 港交所正积极筹备人民币黄金期货",
      "sourceUrl": "https://www.cls.cn/detail/2497215",
      "publishedAt": "2026-10-02T05:39:54.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 胡家荣）伴随全球资本对中国及亚洲市场关注度全面回升，香港正迎来新一轮资本市场深层次改革与要素市场扩容潮。港交所行政总裁陈翊庭明确表示，全球投资者正重新聚焦亚洲及中国资产，港交所将优化上市制度与激活市场流动性作为核心切入点。\n\n推进黄金与大宗商品业务：因应投资者对资产多元化的需求，香港正加快发展固定收益、货币及大宗商品FICC。近期重推的美元计价黄金期货反应热烈，目前正积极",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_652115a5db82",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 48,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "title": "全球最大独立AI原生影视Utopai Studios视频生成模型跻身文生权威榜单全球第二",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008300875141256",
      "publishedAt": "2026-10-02T05:34:30.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "近日，全球最大的独立AI原生影视公司Utopai Studios的定制视频生成模型Utopai X在独立评测机构Artificial Analysis的全球文生视频排行榜中跻身第二，全美第一。据公开报道，这也是该榜单采用盲评机制以来，首次由影视公司定制的模型取得如此佳绩。榜单排名完全基于盲评输出质量，由观众在不知晓模型品牌的前提下对同一提示词生成的视频进行偏好评价（数据截至2026年9月30日）。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_1e9820df21ce",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "从拒绝到加码：马斯克如何将SpaceX的AI算力变成每月数十亿美元的“云生意”",
      "sourceUrl": "https://wallstreetcn.com/articles/3782913",
      "publishedAt": "2026-10-02T05:33:41.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "对外出租算力，正为SpaceXAI带来每月数十亿美元规模的收入预期。这项马斯克一度拒绝的业务，如今却成了AI企业争相锁定的稀缺资源。\n据The Information近日援引知情人士报道，SpaceXAI今夏已与微软就算力租赁展开磋商；与此同时，一笔每月11亿美元的算力租赁合同将于12月启动。路透社还报道称，Anthropic此前已承诺在SpaceXAI算力上支出近450亿美元，随后又披露了额外近",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b8cc0bce9b90",
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
      "title": "雷曼危机以来未见的跌幅！美国市政债9月遭重创",
      "sourceUrl": "https://wallstreetcn.com/articles/3782912",
      "publishedAt": "2026-10-02T05:33:27.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "美国市政债券市场9月遭遇近二十年来最严重的单月跌幅。通胀担忧持续存在，加息风险仍未消退，固定收益市场承压，市政债券收益率快速攀升，投资者损失明显。\n彭博市政债券指数9月下跌约4.4%，创2008年9月雷曼兄弟破产以来最差单月表现。与此同时，市政债券收益率升至至少2011年以来最高水平，长久期债券价格受到明显冲击。\n持续的美伊冲突加剧了市场对通胀的担忧，而美联储进一步加息的风险仍是压制债市的重要因素",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_38c6d855f58a",
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
      "eventId": null
    },
    {
      "title": "6.5美元/加仑历史新高！美国柴油禁运是否进入倒计时？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782635",
      "publishedAt": "2026-10-02T05:32:48.000Z",
      "fetchedAt": "2026-10-02T10:28:43.728Z",
      "timeConfidence": "source",
      "summary": "美国柴油市场正经历前所未有的供需冲击。9月以来，美国零售柴油价格持续攀升，近期一度升至6.53美元/加仑以上，创历史新高，年内涨幅高达83%。同期纽商所取暖油期货价格最高达到5.26美元/加仑，折合约220美元/桶，美国馏分油裂解价差升至约105美元/桶，为过去15年中位水平的4倍。与此同时，霍尔木兹海峡航运中断导致中东约150万桶/日炼油产能无法有效利用，柴油出口同比减少约50万桶/日；而乌袭俄",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4280bd432f83",
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
      "title": "美联储本月加不加息？美国9月非农今晚揭晓 全球市场严阵以待",
      "sourceUrl": "https://www.cls.cn/detail/2497213",
      "publishedAt": "2026-10-02T05:11:10.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 卞纯）北京时间周五晚20:30，美国劳工统计局将公布9月非农就业报告。届时，围绕美国劳动力市场现状的诸多疑问将得到解答。这份报告也将成为投资者判断美联储是否可能连续第二次加息的重要依据。\n根据市场共识预测，华尔街预计美国9月非农就业人数增加8.4万人，失业率预计维持在4.1%。\n虽然新增就业人数料将较2025年前的趋势有所放缓，但美联储官员更加关注的失业率预计仍将处于表明",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4ba829ea46a0",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 29,
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
          "score": 29,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 29,
      "llmScores": [
        24,
        33
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_270c3bff1a30"
    },
    {
      "title": "耐克挥刀组织架构，大中华区独立时代将成历史",
      "sourceUrl": "https://wallstreetcn.com/articles/3782919",
      "publishedAt": "2026-10-02T05:10:29.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "从2028财年起，耐克的组织架构图上，将不再有单独的大中华区。\n10月1日，耐克披露截至8月底的2027财年第一季度业绩。期内公司实现收入112.13亿美元，同比下降4%，剔除汇率影响下降5%；净利润7.12亿美元，同比下降2%，毛利率同比提升0.6个百分点至42.8%。\n这一季度，耐克大中华区收入11.8亿美元，同比下降22%，剔除汇率影响下降26%；其中批发收入下降28%，Nike Direc",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_53988d5190a5",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 72,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 21,
        "evidence": 8,
        "recency": 15,
        "actionability": 8
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
          "score": 35,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 57,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "title": "亚马逊计划向投资者出售价值80亿美元的英伟达芯片",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008228795994245",
      "publishedAt": "2026-10-02T05:00:13.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "10月2日消息，据报道，知情人士透露，亚马逊正寻求向投资者出售价值80亿美元的英伟达芯片。该公司近几周已与投资者展开洽谈，评估市场对该交易的意向。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_dd4a849f8c02",
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
      "title": "OpenAI已向100多个机通报AI智能体未经授权活动事件",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008125319335814",
      "publishedAt": "2026-10-02T04:20:56.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "OpenAI周四在一篇博客文章中表示，该公司已向100多个机构通报了涉及其AI智能体未经授权活动的事件。此举正值AI 实验室因“失控”AI 智能体的活动而面临日益严格的审查之际。在Hugging Face遭遇意外入侵事件后，这家由萨姆·奥特曼领导的公司正对其AI模型的活动进行全面审查。OpenAI正在筛查约50PB的数据，以全面掌握“失控智能体”（rogue agent）活动的具体范围。（新浪财经",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_3849e09d6d33",
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
      "title": "财新闻｜偷税等处罚细则有了全国统一标准，11月1日起施行",
      "sourceUrl": "https://mini.caixin.com/2026-10-02/102490344.html",
      "publishedAt": "2026-10-02T04:15:40.000Z",
      "fetchedAt": "2026-10-02T05:43:47.290Z",
      "timeConfidence": "source",
      "summary": "突发：沙特发动空袭；厄特宣布与埃塞断绝外交关系；迪拜航空驾驶舱冲突事件受伤机长和副驾返回阿联酋\n       突发：沙特发动空袭\n也门胡塞武装称，当地时间10月1日晚，沙特对也门首都萨那以及萨达省、塔伊兹省、阿姆朗省等胡塞武装控制区进行了空袭。总台报道员表示，萨那市内至少听到两声巨大的爆炸声从总统府方向传来。这也是9月3日也门局势升级以来，沙特首次空袭萨那。\n沙特阿拉伯主导的多国联军发言人图尔基·",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bd2aa3b66859",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "eventId": "event_1d2e538fe09b"
    },
    {
      "title": "恒指午间休盘跌2.64%，恒生科技指数跌2.45%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008209813573766",
      "publishedAt": "2026-10-02T04:01:52.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，恒指午间休盘跌2.64%，恒生科技指数跌2.45%；医药生物、零售、非银金融板块领跌，君实生物跌超7%，国泰海通跌超5%，京东健康跌超4%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8d5450859c7f",
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
      "title": "玉渊谭天：中美11月人工智能对话谈什么",
      "sourceUrl": "https://wallstreetcn.com/articles/3782918",
      "publishedAt": "2026-10-02T03:57:20.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "最近，谭主和中美人工智能领域的相关人士聊了聊，包括OpenAI前工程师、美国加利福尼亚州参议员、中美二轨对话的核心参与人等，还有不少穿梭在中美之间的第三方机构。谭主发现，中美推动合作的可能性，相比数月前已经更为乐观。政策窗口已经打开，双方都有意愿，关键是怎么去做。谭主与美国加利福尼亚州参议员杰瑞·麦克内尼交流时，对方就提到，美国联邦层面推进合作可能较慢，但加州可以先行先试，建立互信与制度框架，再逐",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f8d5a057fbc0",
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
      "title": "国庆假期第二日机票价格“跳水”",
      "sourceUrl": "https://www.yicai.com/news/103383845.html",
      "publishedAt": "2026-10-02T03:53:29.000Z",
      "fetchedAt": "2026-10-02T05:44:03.281Z",
      "timeConfidence": "source",
      "summary": "多条热门航线最低价只需300多元。节中机票价格“跳水”又来了。北京飞昆明的经济舱票价10月1日还接近2000元，10月2日已经跌到了800多元，300多元就可从北京飞哈尔滨、从上海飞西安。去哪儿平台数据显示，从平台机票均价看，10月2日机票价格开始显著走低，比1日便宜20%；3、4日机票价格继续下跌，到达节中低谷。5日开始返程，价格一路走高，10月7日是价格最高点。记者在去哪儿平台看到，以北京-昆",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_68bb1283bd8e",
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
      "title": "黄金“投降”了吗？",
      "sourceUrl": "https://wallstreetcn.com/articles/3782915",
      "publishedAt": "2026-10-02T03:43:46.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "德意志银行警告：黄金正处于多年来最悲观的持仓水平，但价格却未能创出新低，反转信号正在积聚。\n据追风交易台消息，德意志银行在9月30日发布的最新大宗商品研报中称，黄金市场当前呈现出\"被忽视、超卖且低配\"的三重特征，持仓面的极端悲观程度已接近绝对意义上的\"投降\"时刻。研报指出，商品交易顾问（CTA）在过去一个月内已卖出其最大仓位规模的52%，创下历史第3百分位的月度流出量，但金价却始终未能打出新低——",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f6a743a3adfe",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 65,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 16,
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
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "她要回来了！带领法国走完第五共和国最后的余晖",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782906",
      "publishedAt": "2026-10-02T03:42:04.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "10月1日，法国政府向议会递交了2027年预算草案：540亿欧元紧缩，砍养老金，砍医保，冻工资，加税。 结果市场当天就把法德10年期利差拉到130个基点，单日跳升13个基点，创下2012年欧债危机以来之最。法国国债OAT的收益率盘中触及4.96%，创2002年以来新高。 而就在两天前，一件更刺眼的事情已经发生：法国的借债成本超过了意大利。10年期OAT 4.81%，意大利4.61%。法国评级比意大",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b89edd6d57d3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "noiseCaps": [
        "无口径收益宣传"
      ],
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
          "score": 46,
          "reasons": [
            "命中保险运营核心主题 1 项",
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "耐克公布第一季度财报，中国市场重塑持续深化",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008181006290825",
      "publishedAt": "2026-10-02T03:32:33.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "耐克发布2027财年第一季度财报。财报显示，本季度全球营收112亿美元。其中，自营业务营收为41亿美元，在报告基础上下降8%；经销商业务营收为68亿美元，在报告基础上下降1%。耐克集团库存资产为78亿美元，较去年同期减少3%；耐克大中华区营收11.80亿美元。在中国市场，耐克持续深化以消费者和运动员为中心的转型，推进产品创新、市场生态重塑和本土化建设。新的“亚太和大中华区”架构将能够进一步加强区域",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_efdccc93b562",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "中东局势骤紧拖累航空股 美兰空港和中国东方航空均跌超6%",
      "sourceUrl": "https://www.cls.cn/detail/2497194",
      "publishedAt": "2026-10-02T03:31:14.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日电（编辑 胡家荣）受中东地缘局势急剧升温及国际油价大幅走高拖累，港股航空股早盘遭遇重挫。\n截至发稿，美兰空港(00357.HK)跌6.89%，中国东方航空(00670.HK)跌6.08%，中国国航(00735.HK)跌5.19%。\n消息方面，美伊外交磋商陷入僵局，地缘政治冲突显现扩大化迹象。特朗普公开表示，可能在11月中期选举后加大对伊朗的军事打击力度，并重申强硬施压立场，同时拒绝",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4c32db440280",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 27,
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
      "attentionScore": 27,
      "llmScores": [
        25,
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
      "title": "韩国财长称必要时将考虑进一步减少国债发行",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008066998374537",
      "publishedAt": "2026-10-02T03:30:37.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "韩国财政部长官李炯日周五表示，如有必要，韩国将考虑进一步减少国债发行，并承诺继续密切关注市场动态。李炯日发表上述言论之际，韩国已决定在10月份将国债发行规模削减5万亿韩元（约合36.4亿美元），同时政府也承诺在必要时采取包括紧急回购债券在内的稳定措施。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_fc245616629d",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 62,
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
          "score": 36,
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
      "title": "谷歌机器人战略：软件优先，复制安卓打法布局具身智能",
      "sourceUrl": "https://wallstreetcn.com/articles/3782916",
      "publishedAt": "2026-10-02T03:28:43.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "谷歌正以一套不同于特斯拉等公司的思路切入机器人赛道：不急于打造旗舰硬件，而是优先发展机器人背后的模型和软件能力，并借助合作伙伴扩大应用范围。\n据The Information近日报道，谷歌DeepMind首席执行官Koray Kavukcuoglu上周首次较为详细地公开谈及机器人战略。他表示，谷歌的核心优势在于模型，而非机器人底盘本身。与此同时，谷歌推出Gemini Robotics——针对物理控",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_064fcef6ecae",
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
      "title": "美国按揭贷款利率创4年来最大幅度周涨幅，加剧中选前美国人“可负担”压力",
      "sourceUrl": "https://wallstreetcn.com/articles/3782914",
      "publishedAt": "2026-10-02T03:27:11.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "美国按揭贷款利率本周急剧攀升，创下四年来最大单周涨幅，债券市场抛售浪潮正以最直接的方式冲击普通美国家庭的购房梦，并在关键中期选举前夕将住房可负担性问题推至政治风口浪尖。\n据房地美（Freddie Mac）周四（10月1日）公布的数据，截至10月1日，30年期固定按揭贷款平均利率升至7.28%，较前一周跳涨25个基点，为2022年10月以来最大单周涨幅，并将美国按揭利率推至2023年底以来的最高水平",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_dd5c5f982f92",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "noiseCaps": [
        "无口径收益宣传"
      ],
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_cba1a5ffd9bc"
    },
    {
      "title": "华泰证券：AI链放量推动韩国出口继续攀升",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008065653297026",
      "publishedAt": "2026-10-02T03:04:14.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，华泰证券研报指出，AI链高景气和季末出货共同推动韩国9月出口同比攀至83.5%，较8月的68.7%提高14.8个百分点；日均出口同比增长104.7%。其中，狭义AI链（半导体和计算机）贡献了约九成的出口增长，非AI链出口也较8月有所修复。出口强势推动韩国三季度贸易顺差达1153亿美元、对名义GDP增长的贡献约19.6个百分点。展望四季度，全球制造业动能偏强叠加AI链需求仍有望支撑韩国出",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_1e7aca1314e3",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 47,
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
          "score": 28,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 47,
      "llmScores": [
        50,
        43
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
      "title": "全球央行艰难重启加息周期，这次有什么不同|海外市场月报",
      "sourceUrl": "https://www.yicai.com/news/103383837.html",
      "publishedAt": "2026-10-02T02:33:27.000Z",
      "fetchedAt": "2026-10-02T05:44:03.281Z",
      "timeConfidence": "source",
      "summary": "许多机构实际上在减少美元资产配置的同时，增加对新兴市场资产的配置。2026年9月，美联储、欧洲央行、日本央行均加息，市场预计英国央行很快也将加息。上一轮三大央行在相近窗口内先后启动加息周期需追溯至2004～2006年，与美联储同月加息则是欧央行成立以来首次。\n\n本轮多家全球主要经济体央行同步加息，直接原因包括地缘冲突扰动能源与大宗商品供给、全球供应链重构及贸易壁垒抬升，持续推升通胀，叠加全球劳动力",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7cce498ba7b6",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 69,
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
      "passesTierGate": true,
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
          "score": 69,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "attentionScore": 69,
      "llmScores": [
        73,
        65
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": "event_2cf716748ce1"
    },
    {
      "title": "内外利好双重共振港股光通信股 海光芯正和剑桥科技均超3%",
      "sourceUrl": "https://www.cls.cn/detail/2497182",
      "publishedAt": "2026-10-02T02:30:28.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 胡家荣）受到海外算力硬件板块强势联动以及国内重磅信贷政策利好的双重共振，部分港股光通信股早盘走强。\n截至发稿，海光芯正(06166.HK)涨4.48%，剑桥科技(06166.HK)涨3.79%%，中际创旭(03308.HK)涨3.39%。\n\n消息方面，隔夜美股光学与光通信标的多数走强：Coherent大涨10.9%，AAOI涨8.12%，Credo(CRDO)涨7.9%，",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_27762e3b0ee9",
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
      "title": "程实：全球变局中的中国机遇 | 国庆大咖谈",
      "sourceUrl": "https://www.yicai.com/news/103383834.html",
      "publishedAt": "2026-10-02T02:29:31.000Z",
      "fetchedAt": "2026-10-02T05:44:03.281Z",
      "timeConfidence": "source",
      "summary": "2026年，AI逐渐从资本市场叙事转化为真实的资本形成。“千磨万击还坚劲，任尔东西南北风。”回望今年，全球经济于风浪中孕育新机。地缘博弈持续演进，通胀预期几经反复，主要经济体货币政策相继转向，公共债务攀升与长期利率上行交织叠加，全球经济仿佛又一次站在了秩序重构的十字路口。\n\n然而，变局之中亦有转机。人工智能突出重围，在多重约束中展现出强劲的发展势头，逐步成长为支撑全球资本开支与经济增长的关键变量。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cee2420b7785",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 25,
      "rawScore": 49,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 0,
        "recency": 13,
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
          "score": 20,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 77,
          "reasons": [
            "命中二级市场投教核心主题 3 项"
          ]
        },
        "privateFundSales": {
          "score": 20,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "attentionScore": 25,
      "llmScores": [
        26,
        23
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
      "title": "季报不及预期，收入未见起色！耐克宣布新一轮裁员，今年股价\"史上最惨\"接近腰斩｜财报见闻",
      "sourceUrl": "https://wallstreetcn.com/articles/3782905",
      "publishedAt": "2026-10-02T02:28:18.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "耐克的复苏之路比任何人预期的都要漫长。季报不及预期、全年营收指引大幅低于市场预测、新一轮裁员计划随之而来——这家全球最大运动品牌正面临多重压力的叠加冲击，而华尔街的耐心正在加速耗尽。\n当地时间周四（10月1日），耐克公布2027财年第一季度财报，当季营收同比下降4%至112亿美元，低于市场预期；净利润下降2%至7.12亿美元。\n更令投资者担忧的是前景：耐克预计2027财年全年营收将同比下降\"高个位",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c34bcd17bc00",
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
      "title": "10年期美债逼近5.3%！贝森特黔驴技穷，Zervos能否找到新解法？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782715",
      "publishedAt": "2026-10-02T02:09:13.000Z",
      "fetchedAt": "2026-10-02T10:28:43.728Z",
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
      "title": "英伟达参投的Firmus计划澳洲IPO，目标估值300亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008004616753287",
      "publishedAt": "2026-10-02T02:09:07.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "交易条款显示，数据中心运营商Firmus Grid计划于本月在澳大利亚进行首次公开发行（IPO），目标估值437亿澳元（折合303亿美元）。条款文件显示，该公司IPO发行价定为每股11澳元，拟至少募资50亿美元。簿记建档将于10月6日启动，10月9日结束，加速发行情况除外。公司在8月获得简街资本、黑石集团、英伟达等投资者合计20亿美元的投资承诺，并在4月完成由Coatue管理公司领投的5.05亿美",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_bd204a0a99e7",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "年内离职上百人，券商分析师格局又见新态",
      "sourceUrl": "https://www.cls.cn/detail/2497176",
      "publishedAt": "2026-10-02T02:05:44.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（记者 林坚）作为观察券商研究业务变化最鲜活的视角之一，三季度卖方分析师的人员流动又有了新动向。\n综合记者调研采访，并结合中证协官网及东方财富Choice统计数据，截至三季度末，全行业注册分析师人数约5891人，较2025年末的约6029人净减少约138人，降幅约2.29%；年中人数一度降至5828人的低点，三季度已回补约63人。\n\n\n整体来看，受佣金下降及行业周期等综合因素影响",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d66d49c1803b",
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
      "title": "“史上最大IPO”有新消息！Anthropic被曝冲刺感恩节前上市 估值剑指2万亿美元",
      "sourceUrl": "https://www.cls.cn/detail/2497177",
      "publishedAt": "2026-10-02T02:01:02.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 卞纯）据媒体援引知情人士报道，美国人工智能领军企业、Claude聊天机器人开发商Anthropic正寻求最快于11月中旬上市，此前该公司曾推迟IPO计划。\n知情人士称，Anthropic最早可能在11月9日当周正式启动IPO推介，从而有望在11月26日感恩节前开始交易。\n知情人士称，Anthropic定于10月14日在旧金山总部与潜在投资者会面，为IPO做准备。\n知情人士",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bf096691773e",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "attentionScore": 23,
      "llmScores": [
        26,
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
      "title": "9月财新中国新经济指数降至34.1 主要受科技投入下降影响",
      "sourceUrl": "https://economy.caixin.com/2026-10-02/102490301.html",
      "publishedAt": "2026-10-02T02:00:00.000Z",
      "fetchedAt": "2026-10-02T05:43:47.291Z",
      "timeConfidence": "source",
      "summary": "新一代信息技术与信息服务产业对总指数贡献最大，但较上月回落\n    \n     \n     新经济共覆盖10大门类，2026年9月，新一代信息技术与信息服务产业为总指数贡献了12.6个百分点，贡献最大。图：视觉中国\n    \n   \n       　　【财新网】2026年9月，受三大投入指数均下降、尤其是科技投入下降的影响，财新中国新经济指数（NEI）从上月的历史最高值35回落至34.1。\n　　财",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0376f94d0e90",
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
      "title": "“表面平静”的美股：指数距离新高“一步之遥”，但几乎所有版块都遭重创",
      "sourceUrl": "https://wallstreetcn.com/articles/3782909",
      "publishedAt": "2026-10-02T01:52:37.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "美股正上演一场罕见的\"双面市场\"：标普500指数距历史高点不足2%，但水面之下，几乎所有对利率敏感的板块均已遭受重创。10年期美债收益率攀升至5.34%，创2002年以来新高，正在悄然瓦解那些未能搭上人工智能叙事的股票。\n这种表面平静极具迷惑性。 过去一个月，标普500成分股中位数股票下跌5%，指数本身却纹丝不动——唯一的支撑来自半导体板块过去一个月约6%的涨幅。与此同时，等权重标普500 ETF",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_da8b0e170808",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
            "命中二级市场投教核心主题 6 项"
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
      "title": "美债跌到位了吗？高盛交易台主管：长债“仍然完全无人问津”",
      "sourceUrl": "https://wallstreetcn.com/articles/3782910",
      "publishedAt": "2026-10-02T01:52:37.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "美国国债市场正面临多重压力叠加。长期限国债收益率持续攀升，买盘迟迟未能形成，债券与股票之间的背离也愈发引人关注。\n高盛交易台负责人Rich Privorotsky直言，长期限美债“仍然完全无人问津”。尽管最新PCE数据低于预期，略微降低了10月加息的可能性，但这对长期限国债收益率走势几乎没有实质影响——短期利率的加息预期已基本消化，当前真正的压力仍集中在收益率曲线的远端。\n与此同时，长期限国债的波",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7e5bbb9616ba",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 61,
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 6,
        "recency": 13,
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
          "score": 24,
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
      "title": "美国财政部回购60亿美元较长期国债，规模达到上限",
      "sourceUrl": "https://www.36kr.com/newsflashes/4007990509047939",
      "publishedAt": "2026-10-02T01:50:45.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "美国财政部在10月1日进行了价值60亿美元的10至20年期美国国债流动性回购操作。10至20年期买回操作共收到463.9亿美元投标。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_bd3d25b5a053",
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
          "score": 28,
          "reasons": [
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "能源内参｜福建电力现货市场转入正式运行；大众汽车集团与中国企业合资 建设欧洲磷酸铁锂电池产能",
      "sourceUrl": "https://www.caixin.com/2026-10-02/102490298.html",
      "publishedAt": "2026-10-02T01:42:02.000Z",
      "fetchedAt": "2026-10-02T05:43:47.291Z",
      "timeConfidence": "source",
      "summary": "美国大幅放宽燃油经济性标准 特斯拉在本土面临不利局面；川西锂矿找矿再获突破 加达锂矿新增碳酸锂当量约104.68万吨\n       　　【财新网】\n　　大众汽车集团与中国企业合资 建设欧洲磷酸铁锂电池产能\n　　财新网9月30日消息，大众汽车集团旗下电池公司PowerCo和中国电池公司国轩高科签署投资协议，在西班牙瓦伦西亚、斯洛伐克苏拉尼、摩洛哥肯尼特拉组建三家合资公司，投资建设磷酸铁锂电池和正极材",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6457cf7c0c88",
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
      "eventId": "event_27bb6f7ea828"
    },
    {
      "title": "美联储理事鲍曼：今年没有必要再进行利率调整",
      "sourceUrl": "https://www.36kr.com/newsflashes/4007989236191366",
      "publishedAt": "2026-10-02T01:34:30.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "美联储理事鲍曼表示，今年没有必要再进行利率调整。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5595e0c553cd",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 55,
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 6,
        "recency": 13,
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
        "可转化为客户沟通或投研关注",
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
      "eventId": "event_7a6d2af4562f"
    },
    {
      "title": "恒指开盘跌2.09%，恒生科技指数跌1.81%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008055460450177",
      "publishedAt": "2026-10-02T01:24:51.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，恒指开盘跌2.09%，恒生科技指数跌1.81%；小米集团、腾讯控股、阿里巴巴跌超2%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2094a08663d0",
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
      "eventId": "event_cc8a7d958c0d"
    },
    {
      "title": "恒指低开2.09%，恒生科技指数跌1.81%",
      "sourceUrl": "https://wallstreetcn.com/articles/3782911",
      "publishedAt": "2026-10-02T01:24:44.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "京东健康跌近7%，百度集团跌超3%，小鹏集团、京东集团跌近3%。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e2cce1544fa4",
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
      "eventId": "event_cc8a7d958c0d"
    },
    {
      "title": "微软宣布推出MAI-Transcribe-2-Streaming",
      "sourceUrl": "https://www.36kr.com/newsflashes/4007988414468228",
      "publishedAt": "2026-10-02T01:21:41.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "当地时间10月1日，微软宣布推出MAI-Transcribe-2-Streaming，并同时发布两款全新语音模型：MAI-Voice-2.1和MAI-Voice-2.1-Flash。其中，MAI-Transcribe-2-Streaming在年底前以每音频小时0.54美元的首发优惠价提供；MAI-Voice-2.1定价为每 100 万字符22美元，MAI-Voice-2.1-Flash定价为每10",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f857f8ac7a73",
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
      "title": "欧洲市场“陷入恐慌”：美债风暴传染，欧债遭遇“黑色星期四”",
      "sourceUrl": "https://wallstreetcn.com/articles/3782907",
      "publishedAt": "2026-10-02T01:20:22.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "全球债市抛售正在从美债向欧洲扩散，欧洲国债收益率急升、利差快速走阔，市场对新一轮债务风险的担忧明显升温。\n周四欧洲债市遭遇剧烈抛售，法国10年期国债收益率一度升至4.96%，创2002年以来新高，法德利差扩大至1.4个百分点，意大利、希腊国债收益率也同步上行；英国30年期国债收益率则首次突破6%。与此同时，美国10年期国债收益率盘中一度升至5.34%，创近24年来最高，随后回落至5.24%。\nCo",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d3fa4e865007",
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
      "title": "中报复盘与展望：药店连锁复苏已显，中药业绩静待改善",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3781069",
      "publishedAt": "2026-10-02T01:19:36.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "连锁药店在经历近两年「闭店潮」后迎来复苏拐点——六家上市连锁上半年营收合计约 550 亿元，头部三家（大参林、益丰药房、老百姓）营收净利双增，利润增速显著跑赢营收增速，行业出清与费用管控开始兑现为盈利弹性；而中药板块整体仍处调整期，68 家上市公司营收同比下滑 4.84%、净利下滑 11.11%，但内部「冰火两重天」——中药材降价带来的成本红利与基药目录扩容的政策红利，正在向拥有独家品种与上游资源",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9b3974a9de15",
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
      "title": "李白的诗与大唐的GDP｜经济哲思",
      "sourceUrl": "https://mini.caixin.com/2026-10-02/102490296.html",
      "publishedAt": "2026-10-02T01:18:34.000Z",
      "fetchedAt": "2026-10-02T05:43:47.291Z",
      "timeConfidence": "source",
      "summary": "如果大唐的百姓都像李白这样洒脱不羁，大唐会不会创造出更多的国内生产总值\n       第036则  天生我材必有用，千金散尽还复来\n　　人生得意须尽欢，莫使金樽空对月。\n　　天生我材必有用，千金散尽还复来。\n　　烹羊宰牛且为乐，会须一饮三百杯。\n　　——唐·李白《将进酒》\n　　经济学思考：\n　　我常常想，如果大唐的百姓都像李白这样洒脱不羁，大唐会不会创造出更多的国内生产总值（GDP）呢？\n　　什么",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_37befdbb29b7",
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
      "title": "Anthropic据悉计划在感恩节假期前进行大规模IPO",
      "sourceUrl": "https://www.36kr.com/newsflashes/4007987944034179",
      "publishedAt": "2026-10-02T01:10:10.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "当地时间10月1日，据报道，知情人士透露，Anthropic正寻求最快于11月中旬上市，此前该公司曾推迟IPO计划。Anthropic最早可能在11月9日当周正式启动IPO推介，从而有望在11月26日感恩节前开始交易，目前仍预计最迟于今年年底完成上市，但具体时间仍可能调整。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b42d4d735903",
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
      "eventId": "event_e156b3678093"
    },
    {
      "title": "问界汽车：华为与赛力斯达成新五年合作",
      "sourceUrl": "https://www.36kr.com/newsflashes/4008032226463617",
      "publishedAt": "2026-10-02T01:01:13.000Z",
      "fetchedAt": "2026-10-02T05:44:34.309Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，问界汽车宣布，9月30日，鸿蒙智行问界业务升级战略合作签约仪式在深圳举行。华为常务董事、产品投资评审委员会主任、终端BG董事长余承东，赛力斯集团董事长（创始人）张兴海等出席签约仪式。华为与赛力斯表示，面向新五年，双方将持续锚定问界高端智能汽车品牌核心定位，联合组建问界业务专属团队，进一步升级问界业务。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_bde1d599dd9f",
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
        "观点",
        "快讯"
      ],
      "eventId": "event_6313ef98896b"
    },
    {
      "title": "王喆：9月中国新经济指数环比下降0.9个百分点",
      "sourceUrl": "https://opinion.caixin.com/2026-10-02/102490276.html",
      "publishedAt": "2026-10-02T00:56:21.000Z",
      "fetchedAt": "2026-10-02T05:43:47.291Z",
      "timeConfidence": "source",
      "summary": "2026年9月，财新中国新经济指数（NEI）录得34.1，新经济入职工资“溢价”降至2.5%\n       　　2026年9月，财新中国新经济指数（NEI）录得34.1，即新经济投入占整个经济投入的比重为34.1%，按可比口径计算，本月NEI比上月下降0.9个百分点。2021年至今，新经济指数呈波动上升趋势。\n　　NEI包括劳动力、资本和科技三项一级指标，它们在NEI中的权重分别是40%、35%和",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_50053a76d41a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 34,
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
      "attentionScore": 34,
      "llmScores": [
        39,
        28
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
      "title": "港股早报｜特朗普警告或加大力度打击伊朗 隔夜美股光通信及存储概念走强",
      "sourceUrl": "https://www.cls.cn/detail/2497158",
      "publishedAt": "2026-10-02T00:54:55.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "热点聚焦\n1、财政部部长蓝佛安10月1日在求是网发表文章《精准有效实施更加积极的财政政策》。文章指出，今年是“十五五”开局之年，做好接下来几个月工作对完成全年目标任务、实现良好开局至关重要。财政部门要研究制定针对性强的增量政策，推动更加积极的财政政策发力提效，为完成全年经济社会发展目标任务提供坚强保障。\n2、内地投资者通过非法途径，跨境参与香港资本市场交易的窗口，已经越关越紧。目前已有多家在港中资",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_39072252c69f",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "局势升级！特朗普称中期选举后或加大对伊轰炸 美军大举增兵中东",
      "sourceUrl": "https://www.cls.cn/detail/2497157",
      "publishedAt": "2026-10-02T00:41:02.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 卞纯）随着美伊对话再次陷入僵局，美国总统特朗普最新表示，在11月中期选举之后，有可能会加大对伊朗的军事打击力度。与此同时，有消息称，美国正向中东派遣第三个航空母舰打击群。\n受中东局势升级影响，周四国际油价大幅上涨。WTI原油期货11月合约涨2.71%，结算价为每桶92.87 美元；布伦特原油期货12月合约涨4.37%，结算价每桶102.31美元。\n综合央视新闻等媒体报道，",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4d1e6b6f74a3",
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
      "title": "美债收益率涨速过快，随时反转？这对纳指或许不是好消息",
      "sourceUrl": "https://wallstreetcn.com/charts/41959969",
      "publishedAt": "2026-10-02T00:25:06.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "华尔街分析机构BTIG 的 Jonathan Krinsky 指出“美债收益率已接近战术性上涨空间的极限”：\n\n过去几个月，我们一直认为美债阻力最小路径是收益率走高，但短短7个交易日内，30年美债收益率就从5.25%升至5.69%，债券每日情绪指数（DSI）也达到了10%。（图1）\n\n风险在于美债收益率可能迅速回落。\n\n如果收益率确实下降，那么纳指（QQQ ）与小盘股指数（ IWM） 的比率以及所",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_606c54f5b5db",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "title": "分析｜78年历史大检察厅落幕：韩国检察权改革走向何处？",
      "sourceUrl": "https://international.caixin.com/2026-10-02/102490274.html",
      "publishedAt": "2026-10-02T00:20:22.000Z",
      "fetchedAt": "2026-10-02T05:43:47.291Z",
      "timeConfidence": "source",
      "summary": "这次改革并非只是更换机构名称。大检察厅、高等检察厅、地方检察厅及其支厅不再以原有组织形式存在，原检察机关的案件、人员和档案按照职能分别移交\n       　　【财新网】10月2日，韩国正式废除成立于1948年的检察厅体系，包括大检察厅、高等检察厅、地方检察厅及其支厅在内的原有机构被撤销。新设立的公诉厅和重大犯罪调查厅于同日启动运行，分别承接原检察机关的公诉和重大犯罪侦查职能。\n　　根据修订后的韩国",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_babb42be2867",
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
      "title": "谷歌面临逾32亿美元广告技术垄断索赔，出版商获准推进陪审团审判",
      "sourceUrl": "https://wallstreetcn.com/articles/3782901",
      "publishedAt": "2026-10-02T00:10:22.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "谷歌在广告技术垄断诉讼中面临新的重大法律压力。纽约联邦法院裁定，多家大型出版商可就谷歌垄断广告技术市场造成的损害寻求逾32亿美元赔偿。\n据彭博报道，曼哈顿联邦地区法官P. Kevin Castel于周三晚间发布裁决意见，允许针对谷歌AdX广告交易平台相关行为的陪审团审判程序向前推进。\n其中，约5000家出版商组成的集体诉讼方可寻求约17亿美元赔偿；《今日美国》母公司USA Today Co.与英国",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6f05a2a26423",
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
      "title": "东京通胀9月加速，日本央行进一步加息预期升温",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3592393",
      "publishedAt": "2026-10-02T00:08:43.000Z",
      "fetchedAt": "2026-10-02T05:44:53.173Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_c9dff436648f",
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
      "eventId": "event_63d6c1a77164"
    },
    {
      "title": "旅行AI访问量增超3倍！多城串游、原生旅游、长线出境同步升温",
      "sourceUrl": "https://www.cls.cn/detail/2497143",
      "publishedAt": "2026-10-01T23:55:58.000Z",
      "fetchedAt": "2026-10-02T10:29:21.686Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月2日讯（记者 徐赐豪）“请3休13”的拼假模式叠加中秋、国庆仅隔3天的“双节连玩”，今年国庆假期首日出游需求集中释放。去哪儿、同程旅行、飞猪等在线旅游平台数据显示，当日国内机票、酒店、门票预订量同比普遍增长，出行与消费热度高于往年。\n国内游热度由头部城市带动。\n飞猪数据显示，北京、上海、成都、杭州、广州、重庆、南京、武汉、深圳、西安是假期首日国内热门出游城市。\n同程旅行数据显示",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a7d3dd5d4136",
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
      "title": "芭比娃娃制造商美泰暴涨19%！获Authentic收购意向，报价或超每股20美元",
      "sourceUrl": "https://wallstreetcn.com/articles/3782902",
      "publishedAt": "2026-10-01T23:32:36.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "芭比娃娃制造商美泰公司正面临股价持续下挫和管理层换届的双重压力，品牌授权巨头Authentic Brands Group的潜在收购兴趣为其带来了一线转机。\n据华尔街日报援引知情人士透露，Authentic Brands Group已私下与美泰接触，讨论收购报价，出价可能超过每股20美元，对应整体估值约60亿美元或更高。\n此次收购传闻出现的时机颇为微妙。周三美泰公司刚刚任命康泰纳仕首席执行官Roge",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3358f4ace817",
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
      "title": "韩国9月CPI通胀率小幅回落",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3592366",
      "publishedAt": "2026-10-01T23:28:45.000Z",
      "fetchedAt": "2026-10-02T05:44:53.173Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_e47b644f5b2c",
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
      "title": "美股10月开局小幅收涨，存储、光通信走强，原油、黄金齐涨",
      "sourceUrl": "https://www.yicai.com/news/103383775.html",
      "publishedAt": "2026-10-01T23:13:44.000Z",
      "fetchedAt": "2026-10-02T05:44:03.281Z",
      "timeConfidence": "source",
      "summary": "美国供应管理协会公布，9月制造业采购经理人指数为54.5，略低于8月的54.6，连续第九个月处于扩张区间。当地时间周四（10月1日），美股三大指数震荡收涨，迎来四季度首个交易日。截至收盘，道指上涨20.51点，涨幅0.04%，报50926.56点；纳指上涨10.54点，涨幅0.04%，报26871.60点；标普500指数上涨14.91点，涨幅0.19%，报7666.45点，结束三连跌。\n\n\n\n【市",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_46dc867fab44",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 31,
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
      "attentionScore": 31,
      "llmScores": [
        33,
        29
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
      "title": "华尔街见闻早餐FM-Radio | 2026年10月2日",
      "sourceUrl": "https://wallstreetcn.com/articles/3782904",
      "publishedAt": "2026-10-01T23:09:10.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "华见早安之声\n请各位听众升级为见闻最新版APP，以便成功收听以下音频。\n\n市场概述\n周四，美股10月惊险开门红，三大美股指走V，美国ISM&nbsp;PMI指数发布后曾齐跌，美联储二把手、副主席杰斐逊讲话放鸽，助长反弹。\n绩优埃森哲收涨近16%；业绩展望强劲且与OpenAI和亚马逊达成协议的新思科技涨13%；美光财报后先跌后涨、收涨3%，总营收和中国市场业绩逊色的耐克盘后一度跌近7%。\n美国ISM",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_69ddf9be3394",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "抢在感恩节IPO：5180亿美元惊天账单，2万亿的Anthropic为何敢把未来先花掉？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782712",
      "publishedAt": "2026-10-01T23:08:59.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "Anthropic招股书披露，公司未来云计算、算力与基础设施义务约5180亿美元；与此同时，其年化收入已从2025年底约90亿美元跃升至2026年7月的650亿美元以上。巨额长约背后，Anthropic押注三件事：AI降本之后能够激发更大的使用需求，并从现实经济中获取足够收入；算力继续构成前沿模型公司的核心壁垒；资本市场愿意把未来AI现金流提前折现成今天的数据中心。合约义务只是起点，商业回报、电力",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_27c0411e0859",
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
      "title": "【早报】美股光通信、存储芯片股，全线爆发；原油、黄金齐涨",
      "sourceUrl": "https://www.cls.cn/detail/2497140",
      "publishedAt": "2026-10-01T23:00:00.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "宏观新闻\n1、财政部部长蓝佛安10月1日在求是网发表文章《精准有效实施更加积极的财政政策》。文章指出，今年是“十五五”开局之年，做好接下来几个月工作对完成全年目标任务、实现良好开局至关重要。财政部门要研究制定针对性强的增量政策，推动更加积极的财政政策发力提效，为完成全年经济社会发展目标任务提供坚强保障。\n2、据商务部网站，中华人民共和国国际贸易谈判代表兼商务部副部长李成钢28日与加拿大国际贸易副部",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_dd55b3e5dd61",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "特朗普称中期选举后可能加大力度打击伊朗 | 环球市场",
      "sourceUrl": "https://www.cls.cn/detail/2497136",
      "publishedAt": "2026-10-01T22:33:33.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "隔夜股市\n\n美股三大指数均小幅收涨，标普500指数涨0.19%，纳指涨0.04%，道指涨0.04%。光通信、存储芯片股大涨，Coherent涨超10%，Ciena、Lumentum涨超7%，SK海力士涨超5%。\n欧洲主要股指集体收跌，德国DAX指数跌1.03%。\n商品市场\n\n国际原油期货结算价大幅收涨。WTI原油期货11月合约涨2.71%，布伦特原油期货12月合约涨4.37%。COMEX黄金期货涨",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ce58686b8470",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "美股收盘：光通信、存储概念双双走强 三大指数集体微涨",
      "sourceUrl": "https://www.cls.cn/detail/2497130",
      "publishedAt": "2026-10-01T21:55:18.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 赵昊）周四（10月1日），受美国国债收益率回落影响，美股三大指数集体微涨。\n截至收盘，道琼斯指数涨0.04%，报50926.56点；标普500指数涨0.19%，报7666.45点；纳斯达克综合指数涨0.04%，报26871.60点。\n\n日内早些时候，“全球资产定价之锚”美国10年期国债收益率一度升至5.342%，刷新2002年4月以来新高，30年期美债收益率也升至24年来",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7c7d85230866",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
        "无口径收益宣传"
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
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "10月2日会员早报：美联储对继续加息打退堂鼓 10年期美债收益率创2002年以来新高",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782900",
      "publishedAt": "2026-10-01T21:24:25.000Z",
      "fetchedAt": "2026-10-02T05:43:47.875Z",
      "timeConfidence": "source",
      "summary": "1、【美联储对继续加息打退堂鼓】美联储副主席菲利普·杰斐逊（Philip Jefferson）10月1日表示，在美联储上月自2023年以来首次加息之后，他与同僚需要“更多时间”才能判断政策的下一步——这一偏向观望的表态，为市场对10月连续加息的预期降了温。2、【10年期美债收益率创2002年以来新高】周四（10月1日），一场持续数月的全球债券抛售再度加剧。作为全球借贷成本与资产定价之“锚”的10年",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6c88d0458ccf",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "美联储副主席：通胀风险仍存 但下一步行动无需仓促",
      "sourceUrl": "https://www.cls.cn/detail/2497100",
      "publishedAt": "2026-10-01T19:41:21.000Z",
      "fetchedAt": "2026-10-02T05:44:34.090Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 赵昊）美联储副主席菲利普·杰斐逊（Philip Jefferson）最新表示，决策者可能需要更多时间，才能判断是否有必要进一步加息。\n杰斐逊警告称，通胀水平已经在过高位置持续太久，仍存在通胀居高不下的风险。\n但他同时表示，自己与同僚正面临一系列经济冲击，需要仔细评估不断公布的数据，才能决定下一步行动。\n杰斐逊在讲稿中表示：“展望未来，我认为，任何未来的政策调整都应建立在对",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_232ba5632b14",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 47,
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
      "attentionScore": 47,
      "llmScores": [
        41,
        53
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "Enerflex股票今日为何大涨？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3592116",
      "publishedAt": "2026-10-01T18:08:03.000Z",
      "fetchedAt": "2026-10-01T18:30:44.148Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_50c9de7a8810",
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
      "title": "Anthropic计划最快11月中旬公开上市",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3592111",
      "publishedAt": "2026-10-01T17:59:39.000Z",
      "fetchedAt": "2026-10-01T18:30:44.148Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_43b5fe789f14",
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
      "title": "Anthropic上市文件披露：博通将提供最高420亿美元融资",
      "sourceUrl": "https://www.cls.cn/detail/2497083",
      "publishedAt": "2026-10-01T17:54:32.000Z",
      "fetchedAt": "2026-10-01T18:29:29.537Z",
      "timeConfidence": "source",
      "summary": "财联社10月2日讯（编辑 赵昊）Anthropic的IPO招股书披露了其与多家大型科技公司的广泛合作关系，其中有一家格外引人注目——芯片制造商博通。\n博通与Anthropic的合作涵盖算力供应、设备租赁和融资等多个领域，使这家半导体公司在Anthropic大规模扩建基础设施的过程中扮演核心角色。\n这一点也使博通区别于Anthropic的其他主要合作伙伴和投资者，例如亚马逊主要为Anthropic的",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fae822503c4e",
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
      "eventId": "event_297c6602dc99"
    },
    {
      "title": "Anthropic计划在感恩节前启动大规模IPO",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-432SI-3592101",
      "publishedAt": "2026-10-01T17:40:02.000Z",
      "fetchedAt": "2026-10-01T18:30:44.148Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_309d6031626a",
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
      "eventId": "event_e156b3678093"
    },
    {
      "title": "美联储副主席杰斐逊：可能需要更多时间决定下一步行动",
      "sourceUrl": "https://wallstreetcn.com/articles/3782895",
      "publishedAt": "2026-10-01T17:33:16.000Z",
      "fetchedAt": "2026-10-01T18:28:05.646Z",
      "timeConfidence": "source",
      "summary": "美联储副主席菲利普·杰斐逊表示，政策制定者可能需要更多时间才能判断是否需要进一步加息以抑制通胀。杰斐逊警告称，通胀高企时间过长，并认为通胀可能持续处于高位，在决定下一步行动前需要仔细评估未来的数据。杰斐逊表示，任何未来的政策调整都应通过仔细审视数据趋势、不断变化的前景以及风险平衡来确定。\n近日，美联储三把手威廉姆斯预计今年还将加息一次，但不急。风险提示及免责条款\n          \n      ",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fe7f5b7a409c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 43,
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
      "attentionScore": 43,
      "llmScores": [
        40,
        45
      ],
      "scoredBy": "llm"
    },
    {
      "title": "报道：Anthropic瞄准感恩节前完成大规模IPO",
      "sourceUrl": "https://wallstreetcn.com/articles/3782894",
      "publishedAt": "2026-10-01T17:29:07.000Z",
      "fetchedAt": "2026-10-01T18:28:05.646Z",
      "timeConfidence": "source",
      "summary": "Anthropic PBC 正寻求最早于11月中旬上市，IPO正式路演可能从11月9日当周启动。尽管内部仍在讨论、时间表可能调整，公司仍预计不晚于年底前完成上市。潜在投资者认为Anthropic的合理估值区间在1.8万亿至2万亿美元，公司预期募资规模将匹敌或超过SpaceX的IPO纪录。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_faeae778fd24",
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
          "score": 69,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "eventId": "event_e156b3678093"
    },
    {
      "title": "AI“砸饭碗”担忧暂缓！埃森哲845亿订单创纪录、指引超预期，股价盘中暴涨超20%｜财报见闻",
      "sourceUrl": "https://wallstreetcn.com/articles/3782893",
      "publishedAt": "2026-10-01T17:22:00.000Z",
      "fetchedAt": "2026-10-01T18:28:05.646Z",
      "timeConfidence": "source",
      "summary": "在交出超预期的季度业绩、创纪录订单以及高于市场预期的全年营收指引后，全球咨询与IT服务巨头埃森哲股价暴涨。\n美东时间10月1日周四，埃森哲（ACN）股价跳空高开近18%，盘中涨幅曾超过20%、达到24%，势将收创公司上市以来最大单日涨幅。埃森哲大涨不仅带动IBM、Wipro、Infosys、Cognizant等IT咨询和服务业公司股价走高，也成为近期市场重新审视“AI是否会削弱传统咨询需求”的一个",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_87746c35e143",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "noiseCaps": [
        "行情播报"
      ],
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
          "score": 69,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "title": "美国9月企业裁员人数创四年同期新低，但招聘意愿降至十五年同期低谷",
      "sourceUrl": "https://wallstreetcn.com/articles/3782892",
      "publishedAt": "2026-10-01T16:11:26.000Z",
      "fetchedAt": "2026-10-01T18:28:05.646Z",
      "timeConfidence": "source",
      "summary": "美国劳动力市场呈现出一幅矛盾图景：裁员活动持续降温，但企业扩张招聘的意愿同样低迷，折射出商界在多重不确定性下的普遍观望情绪。\n根据职业介绍公司Challenger, Gray &amp; Christmas Inc.美东时间10月1日周四发布的报告，美国企业9月宣布裁员人数同比下降近20%至4.3281万人，为2022年以来历年9月最低水平。同日美国劳工统计局公布的数据显示，美国上周首次申请失业救",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cdd26ed9837e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "noiseCaps": [
        "招聘与例行人事"
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
      "title": "存储芯片短缺持续，三星Galaxy S26系列手机涨价高达200美元",
      "sourceUrl": "https://wallstreetcn.com/articles/3782891",
      "publishedAt": "2026-10-01T16:11:12.000Z",
      "fetchedAt": "2026-10-01T18:28:05.646Z",
      "timeConfidence": "source",
      "summary": "三星电子跟随苹果和谷歌步伐，将旗舰手机价格提高100至200美元，进一步将内存成本压力转嫁至消费者。\n三星电子上调了Galaxy S26系列大部分机型的美国售价，涨幅为100至200美元。此次调价在苹果和谷歌相继提高旗舰手机售价后不久落地，是消费科技品牌在存储芯片持续短缺背景下集体将成本压力向下游转移的最新案例。\n此次涨价覆盖Galaxy S26、S26+和S26 Ultra三款主力机型，各配置均",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_11499b83f94c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 19,
      "rawScore": 49,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
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
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
          ]
        }
      },
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null,
      "attentionScore": 19,
      "llmScores": [
        20,
        18
      ],
      "scoredBy": "llm"
    },
    {
      "title": "摩洛哥股市收低；截至收盘摩洛哥MASI自由流通指数下跌0.50%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3591989",
      "publishedAt": "2026-10-01T15:10:14.000Z",
      "fetchedAt": "2026-10-01T15:32:50.520Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_c26d643da9fd",
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
      "title": "看上海大歌剧院“中国扇”，国庆假日首度向公众开放",
      "sourceUrl": "https://www.yicai.com/news/103383747.html",
      "publishedAt": "2026-10-01T15:08:14.000Z",
      "fetchedAt": "2026-10-01T15:31:31.844Z",
      "timeConfidence": "source",
      "summary": "国庆黄金周，上海大歌剧院向公众开放预约参观，邀请市民游客提前领略这一新兴艺术殿堂的建筑美学与剧场风采。10月17日，历时六年建造的上海大歌剧院将正式启幕。10月1日早晨，上海大歌剧院的“中国扇”在黄浦江畔徐徐展开，迎来第一波客人。\n\n市民游客沿双螺旋楼梯拾级而上，抵达近40米高的建筑屋顶。这里视野开阔：浦江流水、世博公园的绿意、陆家嘴城市天际线、西岸滨江的景致次第铺展，尽收眼底。而阶梯上驻足流连的",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_aff5c69575c8",
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
      "title": "Nebius(NBIS.US)收购以色列初创公司Inferize加码AI推理业务 交易金额最高或达1.5亿美元",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3591980",
      "publishedAt": "2026-10-01T15:06:36.000Z",
      "fetchedAt": "2026-10-01T15:32:50.520Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_1ca398b245c9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 18,
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
      "eventId": null,
      "attentionScore": 18,
      "llmScores": [
        20,
        15
      ],
      "scoredBy": "llm"
    },
    {
      "title": "富国银行看好英国石油公司，同时下调埃克森美孚评级",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3591987",
      "publishedAt": "2026-10-01T15:05:44.000Z",
      "fetchedAt": "2026-10-01T15:32:50.520Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_d543c12c38b3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 55,
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
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
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "美国制造业连续九个月扩张！9月ISM PMI微降至54.5 新订单增长但成本压力再度升温",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3591975",
      "publishedAt": "2026-10-01T15:05:10.000Z",
      "fetchedAt": "2026-10-01T15:32:50.520Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_aa62b0817e12",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "道明银行股价今日为何下滑？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3591973",
      "publishedAt": "2026-10-01T15:04:29.000Z",
      "fetchedAt": "2026-10-01T15:32:50.520Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_70bc1737b70b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 12,
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
      "eventId": "event_ee80a8259ecc",
      "attentionScore": 12,
      "llmScores": [
        10,
        13
      ],
      "scoredBy": "llm"
    },
    {
      "title": "日本三家地区性银行拟启动合并谈判",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3591968",
      "publishedAt": "2026-10-01T14:55:54.000Z",
      "fetchedAt": "2026-10-01T15:32:50.520Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_1133154e89cc",
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
          "score": 24,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "挪威股市收低；截至收盘挪威OSE总回报指数下跌0.95%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3591964",
      "publishedAt": "2026-10-01T14:55:42.000Z",
      "fetchedAt": "2026-10-01T15:32:50.520Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_96503b581cf1",
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
      "title": "以色列股市上涨；截至收盘特拉维夫TA35指数上涨0.34%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3591962",
      "publishedAt": "2026-10-01T14:55:13.000Z",
      "fetchedAt": "2026-10-01T15:32:50.520Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_60cdec3e1436",
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
      "title": "希腊股市收低；截至收盘Athens General Composite下跌2.50%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3591957",
      "publishedAt": "2026-10-01T14:50:13.000Z",
      "fetchedAt": "2026-10-01T15:32:50.520Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_02859fb9ebed",
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
      "title": "直击药明康德股东会：打完业绩翻身仗，还剩哪些“未知数”？",
      "sourceUrl": "https://www.cls.cn/detail/2497043",
      "publishedAt": "2026-10-01T14:40:43.000Z",
      "fetchedAt": "2026-10-01T15:32:40.501Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》10月1日讯（记者 徐红）9月29日下午，上海外高桥喜来登酒店，尽管国庆长假临近，但资本市场并未因此平静，药明康德（603259.SH；02359.HK）2026年第一次临时股东会在这里如期举行。\n今年以来，伴随业绩的显著回暖，加上股价强劲的表现，令这家CXO巨头再次站上风口，也让本场股东会的热度骤升。\n当天审议的四项议案涵盖员工持股计划及章程修订等内容，但到场投资人关心的显然不止于",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7cc86ca3d0a2",
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
      "title": "中国超长债走强机构买盘扩张，美元区间震荡人民币震荡偏强，港股回调后估值优势凸显---1001宏观脱水",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3782888",
      "publishedAt": "2026-10-01T14:18:32.000Z",
      "fetchedAt": "2026-10-01T15:31:16.682Z",
      "timeConfidence": "source",
      "summary": "过去一周超长端延续走强，基金继续加码，券商转为净买入，保险配置盘发力承接，银行体系尤其是中小行延续止盈减持。30年国债、地方债与信用债收益率均下行，非银买盘明显扩张。 9月美元指数先抑后扬，月内上涨1.8%至101.24，预计10月延续震荡。9月人民币兑美元小幅走强至6.71，预计10月延续相对强势，预测区间6.6至6.75。 9月港股在内外部流动性同步趋紧下持续回调，南向资金净流入扩大而外资流出",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_43da5cba1923",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 49,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 3 项"
          ]
        },
        "privateFundSales": {
          "score": 49,
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
      "eventId": "event_c68d651d4ff9",
      "attentionScore": 30,
      "llmScores": [
        26,
        33
      ],
      "scoredBy": "llm"
    },
    {
      "title": "美国9月ISM制造业指数54.5 ，预期55，前值54.6。标普500指数转跌，美国30年期国债价格领跌",
      "sourceUrl": "https://wallstreetcn.com/articles/3782890",
      "publishedAt": "2026-10-01T14:08:14.000Z",
      "fetchedAt": "2026-10-01T15:31:16.682Z",
      "timeConfidence": "source",
      "summary": "美国9月ISM制造业指数54.5 ，预期55，前值54.6。标普500指数转跌，美国30年期国债价格领跌。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_314e53898544",
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
          "score": 68,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "title": "埃森哲美股盘初大涨22%，创纪录最大单日涨幅，公司此前发布乐观年度销售预测。",
      "sourceUrl": "https://wallstreetcn.com/livenews/3173374",
      "publishedAt": "2026-10-01T13:35:31.000Z",
      "fetchedAt": "2026-10-01T15:31:16.682Z",
      "timeConfidence": "source",
      "summary": "埃森哲美股盘初大涨22%，创纪录最大单日涨幅，公司此前发布乐观年度销售预测。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_69c4b193d651",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 22,
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
      "attentionScore": 22,
      "llmScores": [
        16,
        27
      ],
      "scoredBy": "llm"
    },
    {
      "title": "十年煤控步入深水区，“十五五”煤炭消费如何平稳达峰",
      "sourceUrl": "https://www.yicai.com/news/103383721.html",
      "publishedAt": "2026-10-01T13:19:36.000Z",
      "fetchedAt": "2026-10-01T15:31:31.844Z",
      "timeConfidence": "source",
      "summary": "煤控不能简单“一刀切”，要走结构优化、渐进替代、区域协同的路径。步入“十五五”，煤炭消费即将迎来达峰窗口，区域协同、煤电角色转型等多重挑战随之显现，如何走好下一段煤控之路，成为“双碳”目标下的待解难题。\n\n过去十余年，我国走出一条立足资源禀赋、不简单“去煤化”的煤控之路。在2012-2013年取暖季全国性重污染天气频发背景下，国务院于2012年印发《重点区域大气污染防治“十二五”规划》，在重点区域",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2556061d3799",
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
      "title": "AI进化速递丨LG电子将投资1500亿韩元用于AI数据中心冷却业务",
      "sourceUrl": "https://www.yicai.com/news/103383727.html",
      "publishedAt": "2026-10-01T12:56:39.000Z",
      "fetchedAt": "2026-10-01T15:31:31.844Z",
      "timeConfidence": "source",
      "summary": "AI进化速递丨LG电子将投资1500亿韩元用于AI数据中心冷却业务①美光科技CEO：除了数据中心 下一个巨大的增量市场将是物理AI；②LG电子将投资1500亿韩元用于AI数据中心冷却业务；③IBM推出IBM Bob自托管部署方案，帮助企业推进AI主权与治理；④谷歌已开始推出旗舰人工智能模型Gemini 4 Argon。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_38717f0e31ea",
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
          "score": 45,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 1 项"
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
      "title": "美债收益率直冲24年高位 新交易月伊始美股期指上涨 | 今夜看点",
      "sourceUrl": "https://www.cls.cn/detail/2497008",
      "publishedAt": "2026-10-01T12:34:23.000Z",
      "fetchedAt": "2026-10-01T15:32:40.501Z",
      "timeConfidence": "source",
      "summary": "财联社10月1日讯（编辑 黄君芝）周四，美国国债收益率飙升，华尔街准备迎接新交易月的开始，美股期指集体上涨。欧洲股市普跌。\n\n\n（来源：英为财情）\nWTI原油期货涨幅扩大至2%，报92.261美元/桶。布伦特原油期货向上触及100美元/桶，最新报100.118美元/桶，日内上涨2.13%。\n随着油价上涨，美国国债收益率再次攀升并创下记录。美国10年期国债收益率一度上升4个基点至5.33%，创200",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6cf82ff5abc0",
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
        "深度研究"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "美光财报炸裂，股价却“无动于衷”！华尔街仍看好，最高目标价喊到1625美元",
      "sourceUrl": "https://wallstreetcn.com/articles/3782889",
      "publishedAt": "2026-10-01T12:34:02.000Z",
      "fetchedAt": "2026-10-01T15:31:16.682Z",
      "timeConfidence": "source",
      "summary": "美光科技最新公布的季度财报全面超越华尔街预期，但由于前期涨幅巨大，其股价在盘前交易中反应平淡。尽管如此，华尔街投行依然普遍看好该芯片制造商在人工智能浪潮下的长期盈利能力。\n财报数据显示，美光科技第四财季营收达到542.3亿美元，达到去年同期的近四倍，调整后每股收益为33.42美元，双双击败市场共识。同时，公司对第一财季给出了约615亿美元营收和38.15美元每股收益的强劲指引。\n尽管业绩与指引均表",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7e9968943c6c",
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
          "score": 89,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "特朗普：中期选举后或升级对伊打击，美联储不断加息“非常糟糕”",
      "sourceUrl": "https://wallstreetcn.com/articles/3782887",
      "publishedAt": "2026-10-01T12:10:39.000Z",
      "fetchedAt": "2026-10-01T15:31:16.682Z",
      "timeConfidence": "source",
      "summary": "美国总统特朗普表示，在11月中期选举后，美国可能会升级针对伊朗的军事打击。同时，他对美联储持续加息的政策路径表达了不满。\n特朗普在周四发表媒体采访中透露了上述信息。在这场已进入第八个月的冲突中，美国政府正努力寻找退出方案。特朗普拒绝了伊朗近期提出的一项旨在换取美国让步的提议，并指出选后加大轰炸力度是“可能的”。\n在货币政策方面，特朗普明确指出美联储不断加息“非常糟糕”。尽管他为美联储主席沃什进行了",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bf3759c7790b",
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
      "eventId": "event_270c3bff1a30"
    },
    {
      "title": "“新债王”Gundlach：美股“表面繁荣内部腐烂”，就像一棵即将折断的“空心树”",
      "sourceUrl": "https://wallstreetcn.com/articles/3782885",
      "publishedAt": "2026-10-01T12:10:22.000Z",
      "fetchedAt": "2026-10-01T15:31:16.682Z",
      "timeConfidence": "source",
      "summary": "\"债券之王\"Jeffrey Gundlach对美国股市发出严厉警告，称其表面平静之下正在悄然腐化，犹如一棵外观完好却已中空的大树，随时可能轰然折断。\n周四，Gundlach在接受Rosenberg Research创始人David Rosenberg采访时表示，尽管标普500指数仍徘徊于历史高位附近，但市场内部已出现严重分化——大量个股悄然陷入调整，市场广度持续恶化。他同时对私募市场的隐性风险、美",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c6779e66f330",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 47,
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
            "命中二级市场投教核心主题 4 项"
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
        "行业动态"
      ],
      "eventId": "event_f101880ef7bc",
      "attentionScore": 47,
      "llmScores": [
        56,
        37
      ],
      "scoredBy": "llm"
    },
    {
      "title": "壹快评｜破解“买长乘短”，铁路部门除了劝导还可做什么",
      "sourceUrl": "https://www.yicai.com/news/103383691.html",
      "publishedAt": "2026-10-01T11:56:41.000Z",
      "fetchedAt": "2026-10-01T15:31:31.844Z",
      "timeConfidence": "source",
      "summary": "铁路要利用技术条件的跃迁，通过提升调度、服务能力来释放运能每逢节假日，火车“抢票难”总会成为热点话题，“买长乘短”也会成为口口相传的买票“小窍门”。所谓“买长乘短”，指的是因为短途票通常比长途票更难买，乘客只好多花钱买下长途票，但提前在真实目的地车站下车、损失未乘区间票款的变通办法。\n\n日前，据“大风新闻”报道，记者尝试购买10月1日西安北至郑州东的G1896次车票，但各种席位均已售罄。第三方平台",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3d81c428c5ba",
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
      "title": "全球债市风暴中，韩国减少国债发行，日本表示将适当控制年度国债总发行量",
      "sourceUrl": "https://wallstreetcn.com/articles/3782886",
      "publishedAt": "2026-10-01T11:47:59.000Z",
      "fetchedAt": "2026-10-01T15:31:16.682Z",
      "timeConfidence": "source",
      "summary": "全球债市抛售潮持续蔓延之际，亚洲两大经济体相继出手，试图通过压缩国债供给稳定本国债券市场。\n韩国财政部10月1日宣布，当月国债发行量较原计划削减5万亿韩元，降至12万亿韩元，并明确表示“如有需要将考虑进一步削减国债发行”。与此同时，日本首相高市早苗表示，将综合考虑初期预算和补充预算，“适当控制年度国债总发行量”。\n两国表态均指向同一方向：在全球收益率接连刷新历史高位的压力下，主动收缩供给以缓解市场",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4f811757746c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 72,
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
          "score": 63,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "eventId": null,
      "attentionScore": 72,
      "llmScores": [
        68,
        76
      ],
      "scoredBy": "llm"
    },
    {
      "title": "欧元区9月制造业PMI创52个月新高，需求回暖引发通胀压力重现",
      "sourceUrl": "https://wallstreetcn.com/articles/3782883",
      "publishedAt": "2026-10-01T11:37:36.000Z",
      "fetchedAt": "2026-10-01T15:31:16.682Z",
      "timeConfidence": "source",
      "summary": "欧元区制造业复苏势头持续强化，但随之而来的价格压力正令市场对欧洲央行货币政策路径的判断趋于复杂。\n周四，标普全球公布的欧元区9月制造业采购经理人指数（PMI）升至52.9，为2022年5月以来最高水平，连续第三个月上行，并高于此前初值52.7。\n\n新订单增速创2022年3月以来最快，出口订单连续两个月扩张，标志着外需出现逾四年半以来首次持续性回升。与此同时，投入成本与出厂价格通胀均自5月以来首次加",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_740427f0a590",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
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
      "title": "国庆假期首日文旅消费券热度增4倍，中国游客入住全球超2000个城市的酒店",
      "sourceUrl": "https://www.yicai.com/news/103383702.html",
      "publishedAt": "2026-10-01T11:29:30.000Z",
      "fetchedAt": "2026-10-01T11:39:18.864Z",
      "timeConfidence": "source",
      "summary": "国庆假期首日出游需求集中释放，国内景区门票、境外游及自然风光类体验订单量显著增长，多城串游、反向旅游及智能出行等新模式成为推动文旅消费的新动力。“请3休13”的长假旅游消费拉动还在持续，国庆假期首日，出游需求集中释放。\n\n携程、同程、途牛、飞猪和去哪儿等OTA平台数据显示，10月1日出行的国内景区景点门票张数同比去年增长近30%，境外接送、境外当地玩乐订单量分别同比去年增长43%、37%。拼假错峰",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f91414384b1c",
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
      "title": "重大变化！新规生效，券商线上展业逻辑重塑",
      "sourceUrl": "https://wallstreetcn.com/articles/3782879",
      "publishedAt": "2026-10-01T11:18:11.000Z",
      "fetchedAt": "2026-10-01T11:38:10.142Z",
      "timeConfidence": "source",
      "summary": "9月30日，《金融产品网络营销管理办法》（下文简称《办法》）正式实施，这一规则对业界将会带来巨大影响。\n券商中国记者采访获悉，证券公司已经在制度、渠道与一线展业等环节进行了相关的调整，整改工作已经就绪。就与第三方渠道合作的问题，多家券商表示，已按规定进行了合规梳理与评估，暂时没有因新规暂停合作的项目。\n制度、渠道与一线展业同步调整\n券商中国记者了解到，近几个月，各券商合规管理部门紧锣密鼓地对《办法",
      "sourceName": "华尔街见闻",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ff2d58a56514",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 76,
      "rawScore": 79,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 21,
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
          "score": 43,
          "reasons": [
            "命中关联主题 2 项",
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
      "attentionScore": 76,
      "llmScores": [
        68,
        83
      ],
      "scoredBy": "llm"
    },
    {
      "title": "日本央行纪要显示部分决策者认为有必要加快加息步伐，政府罕见发声施压日元走低",
      "sourceUrl": "https://wallstreetcn.com/articles/3782881",
      "publishedAt": "2026-10-01T11:15:28.000Z",
      "fetchedAt": "2026-10-01T11:38:10.142Z",
      "timeConfidence": "source",
      "summary": "日本央行9月会议纪要显示，政策委员会内部对加息节奏存在明显分歧，鹰派呼吁尽快将利率推向目标水平，而政府代表则罕见发声，敦促央行审慎行事。\n据周四公布的会议纪要，多位委员明确表态需要在9月加息基础上继续收紧货币政策，其中一位委员表示，若出现价格上行偏离迹象，央行\"将需要加快加息步伐\"；另一位委员则称，\"相对较快地\"将政策利率推近目标水平，有助于为应对经济意外留出空间。\n但与此同时，内阁府代表在会议上",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1804264a0fff",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 55,
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
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
      "eventId": "event_63d6c1a77164"
    },
    {
      "title": "美国总统特朗普：不断提高利率“非常糟糕”。 关于利率的问题并不责怪凯文（凯文沃什）。 将很快填充战略石油储备。 好数据”反而导致利率上升。 一定程度的通货...",
      "sourceUrl": "https://wallstreetcn.com/livenews/3173349",
      "publishedAt": "2026-10-01T11:11:09.000Z",
      "fetchedAt": "2026-10-01T11:38:10.142Z",
      "timeConfidence": "source",
      "summary": "美国总统特朗普：不断提高利率“非常糟糕”。\n\n关于利率的问题并不责怪凯文（凯文沃什）。\n\n将很快填充战略石油储备。\n\n好数据”反而导致利率上升。\n\n一定程度的通货膨胀有助于偿还债务。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bec32e135b03",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 35,
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
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
      "eventId": "event_cba1a5ffd9bc",
      "attentionScore": 35,
      "llmScores": [
        47,
        22
      ],
      "scoredBy": "llm"
    },
    {
      "title": "华为与赛力斯达成新五年合作",
      "sourceUrl": "https://wallstreetcn.com/livenews/3173342",
      "publishedAt": "2026-10-01T10:40:06.000Z",
      "fetchedAt": "2026-10-01T11:38:10.142Z",
      "timeConfidence": "source",
      "summary": "10月1日，鸿蒙智行发文：9月30日，鸿蒙智行问界业务升级战略合作签约仪式在深圳举行。华为常务董事、产品投资评审委员会主任、终端BG董事长余承东，赛力斯集团董事长（创始人）张兴海等出席签约仪式。\n问界用户已经突破120万，正迈向品牌成长新阶段。华为与赛力斯表示，面向新五年，双方将持续锚定问界高端智能汽车品牌核心定位，联合组建问界业务专属团队，进一步升级问界业务，以专属专营更好地服务问界用户，持续推",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_60d5aca8d5f8",
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
      "eventId": "event_6313ef98896b"
    },
    {
      "title": "华尔街机构警告：美联储犯下“原罪”，十年期美债收益率或将迈向8%",
      "sourceUrl": "https://wallstreetcn.com/articles/3782880",
      "publishedAt": "2026-10-01T10:37:49.000Z",
      "fetchedAt": "2026-10-01T11:38:10.142Z",
      "timeConfidence": "source",
      "summary": "全球债市风暴愈演愈烈之际，TS Lombard首席美国经济学家Steven Blitz发出警告，美联储重蹈历史覆辙，在通胀尚未被彻底压制之前便过早放松货币政策，这一\"原罪\"将推动十年期美债收益率在未来数年内最终触及8%。\n十年期美债收益率周三已升至5.30%，创2002年以来新高，华尔街多数机构正在讨论6%是否是下一个关口。但Blitz在其最新报告《原罪重演》中认为，这种判断\"格局太小\"——5.7",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_78e6337a9d30",
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
      "title": "比亚迪9月新能源汽车销量46.36万辆 同比增长16.99%",
      "sourceUrl": "https://wallstreetcn.com/livenews/3173337",
      "publishedAt": "2026-10-01T10:20:19.000Z",
      "fetchedAt": "2026-10-01T11:38:10.142Z",
      "timeConfidence": "source",
      "summary": "比亚迪公告显示，公司9月新能源汽车销量46.36万辆，上年同期为39.63万辆；今年1-9月累计销量313.16万辆，同比下降3.94%。其中，9月纯电动车销量27.31万辆，同比增长33.21%；插电式混合动力汽车销量18.36万辆，同比下降2.36%。9月新能源汽车出口18.07万辆。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ab0860977ec3",
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
      "title": "据报道，博通已同意向Anthropic提供最高420亿美元的贷款，用于为基础设施支出提供融资",
      "sourceUrl": "https://wallstreetcn.com/articles/3782882",
      "publishedAt": "2026-10-01T10:20:02.000Z",
      "fetchedAt": "2026-10-01T11:38:10.142Z",
      "timeConfidence": "source",
      "summary": "据报道，博通已同意向Anthropic提供最高420亿美元的贷款，用于为基础设施支出提供融资。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4228eb1aed3c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 58,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
        "evidence": 5,
        "recency": 10,
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
      "eventId": "event_297c6602dc99"
    },
    {
      "title": "2026年诺贝尔奖各奖项将在10月5日至12日陆续揭晓",
      "sourceUrl": "https://wallstreetcn.com/livenews/3173331",
      "publishedAt": "2026-10-01T09:51:36.000Z",
      "fetchedAt": "2026-10-01T11:38:10.142Z",
      "timeConfidence": "source",
      "summary": "据诺贝尔奖官网消息，2026年诺贝尔奖各奖项将在10月5日至12日陆续揭晓。10月5日至8日将先后公布生理学或医学奖、物理学奖、化学奖，以及文学奖。其中，诺贝尔和平奖作为年度关注度极高的奖项，定于10月9日揭晓。诺贝尔经济学奖则于10月12日公布。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5fcbaddecc79",
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
      "title": "大空头“剑指”Anthropic和OpenAI：市场应狠狠下跌，阻止它们上市！",
      "sourceUrl": "https://www.cls.cn/detail/2496950",
      "publishedAt": "2026-10-01T09:43:31.000Z",
      "fetchedAt": "2026-10-01T11:41:26.146Z",
      "timeConfidence": "source",
      "summary": "财联社10月1日讯（编辑 黄君芝）众所周知，知名做空投资人、素有“大空头”之称的迈克尔·伯里（Michael Burry）是人工智能（AI）领域最著名的怀疑论者之一。他周三再次将矛头对准AI热潮，并警告称Anthropic和OpenAI成功上市可能会使市场面临巨额资本损失。\n伯里在社交媒体平台X上写道，“为了人类的利益，市场应当大幅下跌，阻止OpenAI和Anthropic的首次公开募股（IPO）",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fdd6640a772b",
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
      "title": "晓数点｜一图速览9月A股月报",
      "sourceUrl": "https://www.yicai.com/news/103383687.html",
      "publishedAt": "2026-10-01T09:42:57.000Z",
      "fetchedAt": "2026-10-01T11:39:18.864Z",
      "timeConfidence": "source",
      "summary": "四大指数8月均累计下跌，近岸蛋白问鼎9月最牛股，源杰科技成新“股王”，主力抛售浪潮信息&gt;&gt;",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f3c7a8eb5d37",
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
      "eventId": "event_a3c5d0364922"
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
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
        "从业者实操视角，需自行判断",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 69,
          "reasons": [
            "命中保险运营核心主题 2 项",
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
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "观点"
      ],
      "eventId": null
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
      "score": 75,
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
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "从业者实操视角，需自行判断",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 86,
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
          "score": 29,
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
      "eventId": null
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
      "score": 72,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 0,
        "recency": 13,
        "actionability": 8
      },
      "evidenceBreakdown": {},
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
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点"
      ],
      "eventId": null
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
      "score": 72,
      "rawScore": 72,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "从业者实操视角，需自行判断",
        "可转化为客户沟通或投研关注",
        "时效性高"
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
      "eventId": null
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
      "score": 18,
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
          "score": 91,
          "reasons": [
            "命中保险运营核心主题 3 项",
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
      "score": 78,
      "rawScore": 78,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 6,
        "recency": 13,
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
          "score": 90,
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
      "eventId": null
    },
    {
      "id": "news_99d4956f6bba",
      "title": "中国人寿推出国寿康医保易享互联网专属医疗保险",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20260928/6166.html",
      "publishedAt": "2026-09-28T04:44:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "用心守护人民群众美好生活",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 55,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 8,
        "evidence": 6,
        "recency": 7,
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
      "id": "news_2bf8fe17f7f9",
      "title": "慧保周报2026年第39周又一监管干部被查全行业备战930重磅新规实施剑指金融产品网销乱象",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/kb/20260928/6165.html",
      "publishedAt": "2026-09-28T04:31:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "友邦、中宏、汇丰人寿出资23.22亿元成立股权投资合伙企业",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 30,
      "original": {
        "huibaoxianCategory": "行业动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 11,
        "recency": 7,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "quantity": 5
      },
      "noiseCaps": [
        "时间性盘点"
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
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "id": "news_df02cbb50620",
      "title": "福建国资斥资10亿增持董事长转任总经理海峡保险成立十年格局重塑",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20260928/6164.html",
      "publishedAt": "2026-09-28T04:21:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "海峡保险10亿元增资获批，注册资本增至25亿元",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 43,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 5,
        "recency": 7,
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
        "对展业/配置/合规有直接影响"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 43,
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
          "score": 20,
          "reasons": [
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "eventId": null,
      "timeConfidence": "source",
      "attentionScore": 43,
      "llmScores": [
        43,
        42
      ],
      "scoredBy": "llm"
    },
    {
      "id": "news_e31f54c649b4",
      "title": "平安人寿迎新任董事长85后蔡霆三年完成四级跳执掌6万亿寿险巨头",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20260928/6162.html",
      "publishedAt": "2026-09-28T03:58:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "平安人寿董事长、总经理两职位均已完成更替",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 60,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 60,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 8,
        "evidence": 11,
        "recency": 7,
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
      "eventId": null,
      "timeConfidence": "source"
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
      "score": 48,
      "rawScore": 48,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 0,
        "recency": 10,
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
          "score": 19,
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
      "insurance": 56,
      "privateFundSales": 6,
      "marketEducation": 88
    },
    "featured": 24,
    "gate": {
      "passed": 23,
      "total": 150,
      "byTier": {
        "S2": {
          "total": 96,
          "passed": 18
        },
        "S3": {
          "total": 53,
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
      "news_ff2d58a56514",
      "news_986ca26f7b13"
    ],
    "products": [],
    "industry": [
      "news_1e0fbf8e69f8",
      "news_677ea319c794",
      "news_4830b6299c47",
      "news_b6d0fcac7032",
      "news_f927cbc88275",
      "news_da1497a3535c",
      "news_f58725bff205",
      "news_044317efab6e",
      "news_4043a2d4c835",
      "news_6c146bfaf76e"
    ],
    "research": [
      "news_dd1bd9609c82",
      "news_9efc31ad2c41",
      "news_e24b46192afa",
      "news_990933b9df6c",
      "news_0e1909930562",
      "news_43d1b55ab2ae",
      "news_65c19fbc55f2",
      "news_652115a5db82",
      "news_4ba829ea46a0",
      "news_4c32db440280"
    ],
    "insights": [
      "news_395488b90408",
      "news_72932b845fa3",
      "news_88ded9b30942",
      "news_d663596ede3c",
      "news_d67c04fa04a2",
      "news_b40444575a73",
      "news_4532478386f4",
      "news_c93072cce96c",
      "news_0287b9cea67b",
      "news_446bdef6bf26"
    ]
  },
  "flashes": [
    {
      "id": "news_1e0fbf8e69f8",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_dd1bd9609c82",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_677ea319c794",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_4830b6299c47",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_b6d0fcac7032",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_f927cbc88275",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_da1497a3535c",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_f58725bff205",
      "dotClass": "flash-dot-blue"
    }
  ],
  "keywordIndex": {
    "保险": [
      "news_43da5cba1923",
      "news_b8359ae20a15",
      "news_90694c744974",
      "news_7b45a87acab6",
      "news_5c5f98083245",
      "news_9f3b623176ea",
      "news_99d4956f6bba",
      "news_df02cbb50620"
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
      "news_b89edd6d57d3"
    ],
    "养老金": [
      "news_b89edd6d57d3"
    ],
    "重疾险": [
      "news_b88af30fc3f3"
    ],
    "寿险": [
      "news_5c5f98083245",
      "news_e31f54c649b4"
    ],
    "财险": [
      "news_90694c744974"
    ],
    "医疗险": [
      "news_90694c744974",
      "news_9f3b623176ea"
    ],
    "国寿": [
      "news_99d4956f6bba"
    ],
    "友邦": [
      "news_2bf8fe17f7f9"
    ],
    "银行": [
      "news_4830b6299c47",
      "news_f927cbc88275",
      "news_6ab1abce685b",
      "news_d663596ede3c",
      "news_f6a743a3adfe",
      "news_d543c12c38b3",
      "news_70bc1737b70b",
      "news_1133154e89cc",
      "news_43da5cba1923"
    ],
    "央行": [
      "news_570b6a39a4b5",
      "news_7cce498ba7b6",
      "news_c9dff436648f",
      "news_740427f0a590",
      "news_1804264a0fff"
    ],
    "利率": [
      "news_4ab2a4fea672",
      "news_53988d5190a5",
      "news_dd5c5f982f92",
      "news_cee2420b7785",
      "news_179bbcdc09c7",
      "news_da8b0e170808",
      "news_7e5bbb9616ba",
      "news_5595e0c553cd",
      "news_1804264a0fff",
      "news_bec32e135b03",
      "news_b8359ae20a15"
    ],
    "贷款利率": [
      "news_dd5c5f982f92"
    ],
    "加息": [
      "news_570b6a39a4b5",
      "news_38c6d855f58a",
      "news_4ba829ea46a0",
      "news_7cce498ba7b6",
      "news_7e5bbb9616ba",
      "news_c9dff436648f",
      "news_6c88d0458ccf",
      "news_232ba5632b14",
      "news_fe7f5b7a409c",
      "news_bf3759c7790b",
      "news_1804264a0fff"
    ],
    "流动性": [
      "news_652115a5db82",
      "news_bd3d25b5a053",
      "news_43da5cba1923"
    ],
    "按揭": [
      "news_dd5c5f982f92"
    ],
    "股票": [
      "news_c93072cce96c",
      "news_da8b0e170808",
      "news_7e5bbb9616ba",
      "news_50c9de7a8810"
    ],
    "A股": [
      "news_f3c7a8eb5d37"
    ],
    "港股": [
      "news_9efc31ad2c41",
      "news_43d1b55ab2ae",
      "news_4ab2a4fea672",
      "news_4c32db440280",
      "news_27762e3b0ee9",
      "news_39072252c69f",
      "news_43da5cba1923"
    ],
    "美股": [
      "news_27762e3b0ee9",
      "news_da8b0e170808",
      "news_39072252c69f",
      "news_46dc867fab44",
      "news_69ddf9be3394",
      "news_dd55b3e5dd61",
      "news_ce58686b8470",
      "news_7c7d85230866",
      "news_69c4b193d651",
      "news_6cf82ff5abc0",
      "news_c6779e66f330"
    ],
    "指数": [
      "news_9efc31ad2c41",
      "news_d663596ede3c",
      "news_4ab2a4fea672",
      "news_570b6a39a4b5",
      "news_38c6d855f58a",
      "news_8d5450859c7f",
      "news_0376f94d0e90",
      "news_da8b0e170808",
      "news_2094a08663d0",
      "news_e2cce1544fa4",
      "news_50053a76d41a",
      "news_606c54f5b5db",
      "news_46dc867fab44",
      "news_69ddf9be3394",
      "news_ce58686b8470",
      "news_7c7d85230866",
      "news_c26d643da9fd",
      "news_96503b581cf1",
      "news_60cdec3e1436",
      "news_43da5cba1923",
      "news_314e53898544",
      "news_c6779e66f330",
      "news_740427f0a590",
      "news_f3c7a8eb5d37"
    ],
    "ETF": [
      "news_d67c04fa04a2",
      "news_da8b0e170808"
    ],
    "公募基金": [
      "news_d67c04fa04a2",
      "news_446bdef6bf26"
    ],
    "债券": [
      "news_6ab1abce685b",
      "news_d67c04fa04a2",
      "news_4ab2a4fea672",
      "news_38c6d855f58a",
      "news_fc245616629d",
      "news_dd5c5f982f92",
      "news_7e5bbb9616ba",
      "news_606c54f5b5db",
      "news_6c88d0458ccf",
      "news_c6779e66f330",
      "news_4f811757746c",
      "news_b8359ae20a15"
    ],
    "国债": [
      "news_4ab2a4fea672",
      "news_b89edd6d57d3",
      "news_fc245616629d",
      "news_7e5bbb9616ba",
      "news_bd3d25b5a053",
      "news_d3fa4e865007",
      "news_7c7d85230866",
      "news_43da5cba1923",
      "news_314e53898544",
      "news_6cf82ff5abc0",
      "news_4f811757746c"
    ],
    "信用债": [
      "news_43da5cba1923"
    ],
    "地方债": [
      "news_43da5cba1923"
    ],
    "期货": [
      "news_652115a5db82",
      "news_4280bd432f83",
      "news_4d1e6b6f74a3",
      "news_ce58686b8470",
      "news_6cf82ff5abc0"
    ],
    "IPO": [
      "news_bd204a0a99e7",
      "news_bf096691773e",
      "news_b42d4d735903",
      "news_27c0411e0859",
      "news_fae822503c4e",
      "news_309d6031626a",
      "news_faeae778fd24",
      "news_fdd6640a772b"
    ],
    "上市": [
      "news_395488b90408",
      "news_88ded9b30942",
      "news_652115a5db82",
      "news_bf096691773e",
      "news_9b3974a9de15",
      "news_b42d4d735903",
      "news_43b5fe789f14",
      "news_fae822503c4e",
      "news_faeae778fd24",
      "news_87746c35e143",
      "news_fdd6640a772b"
    ],
    "减持": [
      "news_43da5cba1923"
    ],
    "增持": [
      "news_df02cbb50620"
    ],
    "回购": [
      "news_da1497a3535c",
      "news_f58725bff205",
      "news_044317efab6e",
      "news_c93072cce96c",
      "news_fc245616629d",
      "news_179bbcdc09c7",
      "news_bd3d25b5a053"
    ],
    "券商": [
      "news_4ab2a4fea672",
      "news_d66d49c1803b",
      "news_43da5cba1923",
      "news_ff2d58a56514"
    ],
    "投行": [
      "news_7e9968943c6c"
    ],
    "自营": [
      "news_efdccc93b562"
    ],
    "经纪": [
      "news_5c5f98083245",
      "news_9f3b623176ea"
    ],
    "投资者": [
      "news_6ab1abce685b",
      "news_990933b9df6c",
      "news_d67c04fa04a2",
      "news_652115a5db82",
      "news_38c6d855f58a",
      "news_4ba829ea46a0",
      "news_dd4a849f8c02",
      "news_c34bcd17bc00",
      "news_bd204a0a99e7",
      "news_bf096691773e",
      "news_39072252c69f",
      "news_fae822503c4e",
      "news_faeae778fd24"
    ],
    "机构": [
      "news_4830b6299c47",
      "news_1d69be3f072d",
      "news_0e1909930562",
      "news_d67c04fa04a2",
      "news_c93072cce96c",
      "news_446bdef6bf26",
      "news_1e9820df21ce",
      "news_3849e09d6d33",
      "news_f8d5a057fbc0",
      "news_7cce498ba7b6",
      "news_606c54f5b5db",
      "news_babb42be2867",
      "news_43da5cba1923",
      "news_78e6337a9d30"
    ],
    "南向资金": [
      "news_4ab2a4fea672",
      "news_43da5cba1923"
    ],
    "监管": [
      "news_4830b6299c47",
      "news_c93072cce96c",
      "news_2bf8fe17f7f9"
    ],
    "证监会": [
      "news_986ca26f7b13"
    ],
    "港交所": [
      "news_652115a5db82"
    ],
    "基金业协会": [
      "news_446bdef6bf26"
    ],
    "合规": [
      "news_ff2d58a56514"
    ],
    "处罚": [
      "news_bd2aa3b66859"
    ],
    "整改": [
      "news_ff2d58a56514"
    ],
    "约谈": [
      "news_4830b6299c47"
    ],
    "通报": [
      "news_3849e09d6d33"
    ],
    "条款": [
      "news_bd204a0a99e7",
      "news_e2cce1544fa4",
      "news_fe7f5b7a409c",
      "news_faeae778fd24",
      "news_314e53898544",
      "news_4228eb1aed3c",
      "news_90694c744974",
      "news_5c5f98083245"
    ],
    "办法": [
      "news_3d81c428c5ba",
      "news_ff2d58a56514"
    ],
    "指引": [
      "news_395488b90408",
      "news_c34bcd17bc00",
      "news_87746c35e143",
      "news_7e9968943c6c"
    ],
    "意见": [
      "news_e2cce1544fa4",
      "news_6f05a2a26423",
      "news_314e53898544",
      "news_4228eb1aed3c"
    ],
    "规定": [
      "news_ff2d58a56514",
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
      "news_570b6a39a4b5",
      "news_68bb1283bd8e",
      "news_7cce498ba7b6",
      "news_cee2420b7785",
      "news_0376f94d0e90",
      "news_6457cf7c0c88",
      "news_37befdbb29b7",
      "news_50053a76d41a",
      "news_39072252c69f",
      "news_27c0411e0859",
      "news_dd55b3e5dd61",
      "news_232ba5632b14",
      "news_4f811757746c",
      "news_1804264a0fff",
      "news_78e6337a9d30",
      "news_5fcbaddecc79",
      "news_b88af30fc3f3"
    ],
    "GDP": [
      "news_1e7aca1314e3",
      "news_37befdbb29b7"
    ],
    "CPI": [
      "news_570b6a39a4b5",
      "news_e47b644f5b2c"
    ],
    "PMI": [
      "news_064fcef6ecae",
      "news_69ddf9be3394",
      "news_aa62b0817e12",
      "news_740427f0a590"
    ],
    "信贷": [
      "news_27762e3b0ee9"
    ],
    "货币政策": [
      "news_cee2420b7785",
      "news_bf3759c7790b",
      "news_740427f0a590",
      "news_1804264a0fff",
      "news_78e6337a9d30"
    ],
    "财政政策": [
      "news_39072252c69f",
      "news_dd55b3e5dd61"
    ],
    "汇率": [
      "news_53988d5190a5"
    ],
    "人民币": [
      "news_652115a5db82",
      "news_43da5cba1923"
    ],
    "外汇": [
      "news_b40444575a73"
    ],
    "跨境": [
      "news_39072252c69f"
    ],
    "离岸": [
      "news_f1474a3409d8"
    ],
    "美元": [
      "news_b6d0fcac7032",
      "news_f58725bff205",
      "news_4043a2d4c835",
      "news_6ab1abce685b",
      "news_1d69be3f072d",
      "news_395488b90408",
      "news_72932b845fa3",
      "news_d5ea0945f22a",
      "news_990933b9df6c",
      "news_b40444575a73",
      "news_570b6a39a4b5",
      "news_c93072cce96c",
      "news_0287b9cea67b",
      "news_652115a5db82",
      "news_b8cc0bce9b90",
      "news_4280bd432f83",
      "news_53988d5190a5",
      "news_dd4a849f8c02",
      "news_efdccc93b562",
      "news_fc245616629d",
      "news_1e7aca1314e3",
      "news_7cce498ba7b6",
      "news_c34bcd17bc00",
      "news_179bbcdc09c7",
      "news_bd204a0a99e7",
      "news_bf096691773e",
      "news_bd3d25b5a053",
      "news_f857f8ac7a73",
      "news_4d1e6b6f74a3",
      "news_6f05a2a26423",
      "news_3358f4ace817",
      "news_27c0411e0859",
      "news_fae822503c4e",
      "news_faeae778fd24",
      "news_11499b83f94c",
      "news_1ca398b245c9",
      "news_43da5cba1923",
      "news_6cf82ff5abc0",
      "news_7e9968943c6c",
      "news_4228eb1aed3c"
    ],
    "欧元": [
      "news_b89edd6d57d3",
      "news_740427f0a590"
    ],
    "日元": [
      "news_72932b845fa3",
      "news_4532478386f4",
      "news_1804264a0fff"
    ],
    "通胀": [
      "news_dd1bd9609c82",
      "news_570b6a39a4b5",
      "news_38c6d855f58a",
      "news_7cce498ba7b6",
      "news_cee2420b7785",
      "news_c9dff436648f",
      "news_e47b644f5b2c",
      "news_232ba5632b14",
      "news_fe7f5b7a409c",
      "news_740427f0a590",
      "news_78e6337a9d30"
    ],
    "衰退": [
      "news_4d533087caa8",
      "news_65c19fbc55f2"
    ],
    "复苏": [
      "news_c34bcd17bc00",
      "news_9b3974a9de15",
      "news_740427f0a590"
    ],
    "住房": [
      "news_dd5c5f982f92"
    ],
    "消费": [
      "news_4d533087caa8",
      "news_f41800831fdf",
      "news_65c19fbc55f2",
      "news_570b6a39a4b5",
      "news_efdccc93b562",
      "news_a7d3dd5d4136",
      "news_11499b83f94c",
      "news_2556061d3799",
      "news_f91414384b1c"
    ],
    "投资": [
      "news_6ab1abce685b",
      "news_72932b845fa3",
      "news_990933b9df6c",
      "news_d67c04fa04a2",
      "news_b40444575a73",
      "news_4532478386f4",
      "news_652115a5db82",
      "news_38c6d855f58a",
      "news_4ba829ea46a0",
      "news_dd4a849f8c02",
      "news_c34bcd17bc00",
      "news_bd204a0a99e7",
      "news_bf096691773e",
      "news_6457cf7c0c88",
      "news_e2cce1544fa4",
      "news_bde1d599dd9f",
      "news_39072252c69f",
      "news_fae822503c4e",
      "news_faeae778fd24",
      "news_7cc86ca3d0a2",
      "news_314e53898544",
      "news_38717f0e31ea",
      "news_60d5aca8d5f8",
      "news_4228eb1aed3c",
      "news_fdd6640a772b",
      "news_2bf8fe17f7f9"
    ],
    "出口": [
      "news_e24b46192afa",
      "news_570b6a39a4b5",
      "news_4280bd432f83",
      "news_1e7aca1314e3",
      "news_740427f0a590",
      "news_ab0860977ec3"
    ],
    "贸易": [
      "news_1e7aca1314e3",
      "news_7cce498ba7b6",
      "news_dd55b3e5dd61"
    ],
    "供应链": [
      "news_7cce498ba7b6"
    ],
    "就业": [
      "news_6c146bfaf76e",
      "news_4ba829ea46a0"
    ],
    "失业": [
      "news_4ba829ea46a0",
      "news_cdd26ed9837e"
    ],
    "收入": [
      "news_b8cc0bce9b90",
      "news_53988d5190a5",
      "news_c34bcd17bc00",
      "news_27c0411e0859"
    ],
    "黄金": [
      "news_652115a5db82",
      "news_f6a743a3adfe",
      "news_46dc867fab44",
      "news_dd55b3e5dd61",
      "news_ce58686b8470",
      "news_aff5c69575c8"
    ],
    "金价": [
      "news_f6a743a3adfe",
      "news_b88af30fc3f3"
    ],
    "原油": [
      "news_677ea319c794",
      "news_d5ea0945f22a",
      "news_4d1e6b6f74a3",
      "news_46dc867fab44",
      "news_dd55b3e5dd61",
      "news_ce58686b8470",
      "news_6cf82ff5abc0"
    ],
    "大宗商品": [
      "news_652115a5db82",
      "news_f6a743a3adfe",
      "news_7cce498ba7b6"
    ],
    "工业": [
      "news_4d533087caa8",
      "news_65c19fbc55f2"
    ],
    "利润": [
      "news_1e0fbf8e69f8",
      "news_b6d0fcac7032",
      "news_53988d5190a5",
      "news_c34bcd17bc00",
      "news_9b3974a9de15"
    ],
    "股市": [
      "news_ce58686b8470",
      "news_c26d643da9fd",
      "news_96503b581cf1",
      "news_60cdec3e1436",
      "news_02859fb9ebed",
      "news_6cf82ff5abc0",
      "news_c6779e66f330"
    ],
    "美联储": [
      "news_6c146bfaf76e",
      "news_1d69be3f072d",
      "news_38c6d855f58a",
      "news_4ba829ea46a0",
      "news_7cce498ba7b6",
      "news_5595e0c553cd",
      "news_69ddf9be3394",
      "news_6c88d0458ccf",
      "news_232ba5632b14",
      "news_fe7f5b7a409c",
      "news_bf3759c7790b",
      "news_78e6337a9d30"
    ],
    "财报": [
      "news_efdccc93b562",
      "news_c34bcd17bc00",
      "news_69ddf9be3394",
      "news_87746c35e143",
      "news_7e9968943c6c"
    ],
    "欧央行": [
      "news_7cce498ba7b6"
    ],
    "信托": [
      "news_f1474a3409d8"
    ],
    "资产配置": [
      "news_7cce498ba7b6"
    ],
    "净值": [
      "news_f1474a3409d8",
      "news_446bdef6bf26"
    ],
    "CTA": [
      "news_f6a743a3adfe"
    ],
    "权益": [
      "news_d67c04fa04a2",
      "news_b88af30fc3f3"
    ],
    "年化": [
      "news_27c0411e0859"
    ]
  },
  "sourceHealth": {
    "generatedAt": "2026-10-02T10:30:07.237Z",
    "status": "healthy",
    "totalSources": 12,
    "successfulSources": 11,
    "usableSources": 10,
    "failedSources": 1,
    "staleSources": 0,
    "fetchLimitReachedSources": 1,
    "coverageRate": 0.8333,
    "freshestPublishedAt": "2026-10-02T10:23:39.000Z",
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
        "addedCount": 1,
        "durationMs": 783,
        "latestPublishedAt": "2026-10-02T08:23:09.000Z",
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
        "itemCount": 30,
        "rawItemCount": 30,
        "acceptedItemCount": 30,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 10,
        "durationMs": 1463,
        "latestPublishedAt": "2026-10-02T10:05:46.000Z",
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
        "addedCount": 19,
        "durationMs": 5016,
        "latestPublishedAt": "2026-10-02T07:49:07.000Z",
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
        "durationMs": 7728,
        "latestPublishedAt": "2026-10-02T10:23:39.000Z",
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
        "itemCount": 41,
        "rawItemCount": 41,
        "acceptedItemCount": 41,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 11,
        "durationMs": 25209,
        "latestPublishedAt": "2026-10-02T10:19:56.000Z",
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
        "addedCount": 9,
        "durationMs": 688,
        "latestPublishedAt": "2026-10-02T09:50:45.000Z",
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
        "durationMs": 4763,
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
        "durationMs": 14043,
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
        "addedCount": 8,
        "durationMs": 142,
        "latestPublishedAt": "2026-10-02T10:18:52.000Z",
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
        "addedCount": 3,
        "durationMs": 42,
        "latestPublishedAt": "2026-10-02T10:17:48.000Z",
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
    "eventCount": 22,
    "retentionDays": 90
  },
  "macro": {
    "updatedAt": "2026-10-02T10:30:07.237Z",
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
        "note": "较9月30日 5.29% 下降",
        "direction": "down",
        "asOf": "2026-10-01",
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
        "value": "6.7045",
        "note": "较9月30日 6.7045 持平",
        "direction": "flat",
        "asOf": "2026-10-01",
        "source": "Frankfurter/ECB",
        "mode": "auto"
      },
      {
        "key": "gold",
        "name": "现货黄金",
        "value": "$4,174",
        "note": "较10月1日 $4,174 持平",
        "direction": "flat",
        "asOf": "2026-10-02",
        "source": "gold-api.com",
        "mode": "auto"
      }
    ]
  },
  "aiAnalysis": {
    "schemaVersion": "2.0",
    "generatedBy": "cached",
    "eventClusters": [
      {
        "eventId": "event_a3c5d0364922",
        "title": "晓数点｜一图速览9月A股月报",
        "mainItemId": "news_f3c7a8eb5d37",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_f3c7a8eb5d37"
        ],
        "historicalEvidenceCount": 6,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-02T10:30:07.237Z",
        "status": "developing",
        "summary": "9月A股月报发布，金融营销新规落地或引互联网平台估值重估。",
        "latestProgress": "一图速览9月A股月报正式发布。"
      },
      {
        "eventId": "event_f101880ef7bc",
        "title": "美股股指期货涨幅收窄，布伦特原油突破100美元",
        "mainItemId": "news_69c4b193d651",
        "relatedItemIds": [
          "news_c6779e66f330",
          "news_6cf82ff5abc0",
          "news_46dc867fab44",
          "news_da8b0e170808"
        ],
        "evidenceItemIds": [
          "news_69c4b193d651",
          "news_c6779e66f330",
          "news_6cf82ff5abc0",
          "news_46dc867fab44",
          "news_da8b0e170808"
        ],
        "historicalEvidenceCount": 10,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-02T10:30:07.237Z",
        "status": "developing",
        "summary": "美股期指涨幅收窄，布伦特原油破百，通胀担忧缓解但市场隐忧犹存。",
        "latestProgress": "“表面平静”的美股：指数距新高一步之遥，但几乎所有板块遭重创。"
      },
      {
        "eventId": "event_270c3bff1a30",
        "title": "8月PCE假降温背后：方法修订会否动摇美联储加息路径？",
        "mainItemId": "news_bf3759c7790b",
        "relatedItemIds": [
          "news_4ba829ea46a0"
        ],
        "evidenceItemIds": [
          "news_bf3759c7790b",
          "news_4ba829ea46a0"
        ],
        "historicalEvidenceCount": 8,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-02T10:30:07.237Z",
        "status": "developing",
        "summary": "8月PCE假降温引关注，方法修订或影响美联储加息路径判断。",
        "latestProgress": "美联储本月加不加息待定，今晚9月非农数据揭晓，全球市场严阵以待。"
      },
      {
        "eventId": "event_cba1a5ffd9bc",
        "title": "美国按揭贷款利率创4年来最大幅度周涨幅，加剧中选前美国人“可负担”压力",
        "mainItemId": "news_dd5c5f982f92",
        "relatedItemIds": [
          "news_bec32e135b03"
        ],
        "evidenceItemIds": [
          "news_bec32e135b03",
          "news_dd5c5f982f92"
        ],
        "historicalEvidenceCount": 2,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-02T10:30:07.237Z",
        "status": "developing",
        "summary": "特朗普称高利率糟糕，不怪沃什，将尽快填充战略石油储备。",
        "latestProgress": "美国按揭贷款利率创4年最大周涨幅，加剧中期选举前压力。"
      },
      {
        "eventId": "event_c68d651d4ff9",
        "title": "中国超长债走强机构买盘扩张，美元区间震荡人民币震荡偏强，港股回调后估值优势凸显---1001宏观脱水",
        "mainItemId": "news_43da5cba1923",
        "relatedItemIds": [
          "news_27762e3b0ee9",
          "news_9efc31ad2c41"
        ],
        "evidenceItemIds": [
          "news_43da5cba1923",
          "news_27762e3b0ee9",
          "news_9efc31ad2c41"
        ],
        "historicalEvidenceCount": 7,
        "firstSeenAt": "2026-09-30T15:04:45.414Z",
        "lastSeenAt": "2026-10-02T10:30:07.237Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_7a6d2af4562f",
        "title": "连平：美联储货币政策紧缩效应几何 | 国庆大咖谈",
        "mainItemId": "news_5595e0c553cd",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_5595e0c553cd"
        ],
        "historicalEvidenceCount": 4,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-02T10:30:07.237Z",
        "status": "developing",
        "summary": "美国房贷利率创三年新高，房价下侧黏性加剧美联储政策考验。",
        "latestProgress": "美联储理事鲍曼表示，今年没有必要再进行利率调整。"
      },
      {
        "eventId": "event_ee80a8259ecc",
        "title": "道明银行股价今日为何下滑？",
        "mainItemId": "news_70bc1737b70b",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_70bc1737b70b"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-01T15:34:21.037Z",
        "lastSeenAt": "2026-10-02T10:30:07.237Z",
        "status": "developing",
        "summary": "道明银行今日股价下滑，原因待查。",
        "latestProgress": "截至报道日，股价下跌，具体原因未明。"
      },
      {
        "eventId": "event_e156b3678093",
        "title": "报道：Anthropic瞄准感恩节前完成大规模IPO",
        "mainItemId": "news_faeae778fd24",
        "relatedItemIds": [
          "news_309d6031626a",
          "news_b42d4d735903"
        ],
        "evidenceItemIds": [
          "news_faeae778fd24",
          "news_309d6031626a",
          "news_b42d4d735903"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-01T18:31:25.653Z",
        "lastSeenAt": "2026-10-02T10:30:07.237Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_2cf716748ce1",
        "title": "全球央行艰难重启加息周期，这次有什么不同|海外市场月报",
        "mainItemId": "news_7cce498ba7b6",
        "relatedItemIds": [
          "news_570b6a39a4b5"
        ],
        "evidenceItemIds": [
          "news_7cce498ba7b6",
          "news_570b6a39a4b5"
        ],
        "historicalEvidenceCount": 5,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-02T10:30:07.237Z",
        "status": "developing",
        "summary": "全球央行艰难重启加息周期，本次背景与以往不同。",
        "latestProgress": "10月2日海外市场月报分析加息周期重启的新特点。"
      },
      {
        "eventId": "event_1d2e538fe09b",
        "title": "财新闻｜偷税等处罚细则有了全国统一标准，11月1日起施行",
        "mainItemId": "news_bd2aa3b66859",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_bd2aa3b66859"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-02T06:11:58.933Z",
        "lastSeenAt": "2026-10-02T10:30:07.237Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      }
    ],
    "dailySummary": {
      "highlights": [
        {
          "text": "保险营销新规落地，行业销售逻辑面临重塑，消费者投保决策需更审慎。",
          "evidenceItemIds": [
            "news_ff2d58a56514",
            "news_7b45a87acab6"
          ]
        },
        {
          "text": "全球债市风暴蔓延，美债收益率攀升，韩国、日本等亚洲经济体压缩国债供给以稳定市场。",
          "evidenceItemIds": [
            "news_4f811757746c",
            "news_fc245616629d",
            "news_7e5bbb9616ba"
          ]
        }
      ]
    },
    "eventChain": {
      "summary": "近期金融与保险行业出现两条主要事件链：一是金融产品网络营销新规实施带动销售合规化调整；二是全球债市抛售压力下多国及金融机构作出反应。",
      "chains": [
        {
          "title": "金融产品网络营销新规冲击展业模式",
          "causalLink": "新规实施直接推动券商和保险机构调整线上展业逻辑，同时引发行业从业者对销售节奏的提示。",
          "evidenceItemIds": [
            "news_ff2d58a56514",
            "news_7b45a87acab6"
          ],
          "nodes": [
            "《金融产品网络营销管理办法》正式实施",
            "券商及保险销售渠道面临合规重塑",
            "消费者被建议避免在节骨眼上冲动投保"
          ]
        },
        {
          "title": "全球债市抛售潮与亚洲供给调整",
          "causalLink": "债市收益率快速上行引发投资者损失，韩国与日本率先通过压缩供给来稳定市场情绪，韩国财长后续表态强化这一路径。",
          "evidenceItemIds": [
            "news_7e5bbb9616ba",
            "news_38c6d855f58a",
            "news_4f811757746c",
            "news_fc245616629d"
          ],
          "nodes": [
            "美债长端收益率持续攀升、长债无人问津",
            "美国市政债遭遇近二十年最严重单月跌幅",
            "韩国削减10月国债发行量，日本表示将控制年度国债总发行量",
            "韩国财长称必要时将考虑进一步减少国债发行"
          ]
        }
      ]
    },
    "industryImpact": {
      "quadrants": {
        "insurance": {
          "level": "high",
          "summary": "保险业受营销新规落地、产品创新和资本补充等多重因素影响，行业格局与销售模式正经历调整。",
          "items": [
            {
              "title": "金融产品网络营销新规实施",
              "impact": "证券及保险线上展业逻辑被重塑，短期可能抑制营销力度，但长期推动合规经营。",
              "suggestion": "保险公司应加快合规改造，消费者可理性看待促销信息，不盲目跟风投保。",
              "evidenceItemIds": [
                "news_ff2d58a56514",
                "news_7b45a87acab6"
              ]
            },
            {
              "title": "中高端医疗险产品功能创新",
              "impact": "返保费、超适应症用药、既往症豁免等创新条款提升产品吸引力，加剧医疗险竞争。",
              "suggestion": "关注产品条款细节及可持续性，结合自身需求选择适合的保障方案。",
              "evidenceItemIds": [
                "news_9f3b623176ea",
                "news_90694c744974"
              ]
            },
            {
              "title": "险企前9月发债600亿补充资本",
              "impact": "中小险企资本补充需求旺盛，票面利率走低显示融资环境改善。",
              "suggestion": "投资者可关注险企资本实力与偿付能力变化，作为选择保单的参考维度之一。",
              "evidenceItemIds": [
                "news_b8359ae20a15"
              ]
            }
          ]
        },
        "pe": {
          "level": "medium",
          "summary": "一级市场出现大型科技公司IPO和巨额融资安排，私募股权及资本市场活动趋于活跃。",
          "items": [
            {
              "title": "Anthropic拟感恩节前完成大规模IPO",
              "impact": "AI头部公司上市有望带动科技股估值重塑，为私募股权退出提供重要机会。",
              "suggestion": "关注上市时间表及市场情绪，谨慎评估相关概念股估值风险。",
              "evidenceItemIds": [
                "news_faeae778fd24"
              ]
            },
            {
              "title": "博通拟向Anthropic提供最高420亿美元贷款",
              "impact": "大型科技基础设施融资规模巨大，显示AI算力投入持续加码，可能影响相关产业资本配置。",
              "suggestion": "留意科技公司债务杠杆上升，评估产业链上下游长期回报。",
              "evidenceItemIds": [
                "news_4228eb1aed3c"
              ]
            }
          ]
        },
        "banking": {
          "level": "medium",
          "summary": "房贷贴息政策落地与全球加息周期并行，银行资产端收益与负债成本均面临变化。",
          "items": [
            {
              "title": "全球央行重启加息周期",
              "impact": "海外利率高位运行制约国内货币政策宽松空间，银行跨境资金流动与汇率风险上升。",
              "suggestion": "加强外汇风险管理，动态调整资产负债结构以应对利率波动。",
              "evidenceItemIds": [
                "news_7cce498ba7b6"
              ]
            }
          ]
        },
        "trust": {
          "level": "low",
          "summary": "信托行业受金融营销新规和债市波动影响，线上业务和固收类产品配置需关注合规与风险。",
          "items": [
            {
              "title": "金融产品网络营销新规对信托线上展业的影响",
              "impact": "信托公司线上推介金融产品需遵守更严格的行为规范，短期或限制获客渠道。",
              "suggestion": "信托机构应全面审查线上营销流程，确保合规后再展开推广。",
              "evidenceItemIds": [
                "news_ff2d58a56514"
              ]
            },
            {
              "title": "债市风暴冲击固收类资产",
              "impact": "美债和全球债市剧烈波动，可能导致信托固收类产品底层资产估值承压。",
              "suggestion": "投资者需仔细辨别产品底层资产，信托公司应加强流动性压力测试。",
              "evidenceItemIds": [
                "news_38c6d855f58a",
                "news_7e5bbb9616ba"
              ]
            }
          ]
        }
      }
    },
    "weeklyTrends": {
      "summary": "近7天保险监管与产品创新、债市动荡与政策应对、AI资本热潮等主题构成主要趋势，整体呈现监管趋严、市场波动加大、科技融资升温的格局。",
      "trends": [
        {
          "topic": "保险监管与销售合规化",
          "evidence": "金融产品网络营销新规9月30日实施，从业者提示避免被催着买保险，行业正走向更规范化阶段。",
          "evidenceItemIds": [
            "news_ff2d58a56514",
            "news_7b45a87acab6"
          ],
          "direction": "上升"
        }
      ]
    },
    "insurancePlanner": {
      "summary": "今日 11 条保险相关资讯，以下为规划师客户沟通参考",
      "talkingPoints": [
        {
          "topic": "她要回来了！带领法国走完第五共和国最后的余晖",
          "point": "养老金/年金市场动态，可用于退休规划客户的需求唤醒沟通",
          "action": "整理目标客户名单，准备年金利益演示",
          "evidenceItemIds": [
            "news_b89edd6d57d3"
          ]
        },
        {
          "topic": "中国超长债走强机构买盘扩张，美元区间震荡人民币震荡偏强，港股回调后估值优势凸显---1001宏观",
          "point": "保险科技/数字化转型进展，适合与高净值客户探讨行业前沿趋势",
          "action": "整理科技赋能案例，丰富客户沟通深度",
          "evidenceItemIds": [
            "news_43da5cba1923"
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
        }
      ]
    },
    "peOperations": {
      "summary": "今日 24 条基金/资管相关资讯，以下为运营参考",
      "talkingPoints": [
        {
          "topic": "截至8月底我国境内公募基金规模达39.63万亿元",
          "point": "基金/产品业绩数据，是投资人沟通和维护的重要参考",
          "action": "整理同类产品对比，准备业绩归因分析",
          "evidenceItemIds": [
            "news_446bdef6bf26"
          ]
        },
        {
          "topic": "雷曼危机以来未见的跌幅！美国市政债9月遭重创",
          "point": "市场波动时期，需主动沟通投资策略和风控措施",
          "action": "准备投资者沟通话术，强调风控纪律和长期视角",
          "evidenceItemIds": [
            "news_38c6d855f58a"
          ]
        },
        {
          "topic": "黄金“投降”了吗？",
          "point": "市场波动时期，需主动沟通投资策略和风控措施",
          "action": "准备投资者沟通话术，强调风控纪律和长期视角",
          "evidenceItemIds": [
            "news_f6a743a3adfe"
          ]
        },
        {
          "topic": "韩国财长称必要时将考虑进一步减少国债发行",
          "point": "市场波动时期，需主动沟通投资策略和风控措施",
          "action": "准备投资者沟通话术，强调风控纪律和长期视角",
          "evidenceItemIds": [
            "news_fc245616629d"
          ]
        }
      ]
    },
    "marketOutlook": {
      "summary": "今日 68 条宏观经济/政策相关资讯",
      "outlooks": [
        {
          "topic": "对标伦纽黄金市场 港交所正积极筹备人民币黄金期货",
          "content": "汇率波动影响跨境资本流动和出口导向型企业盈利，关注对相关持仓的影响",
          "evidenceItemIds": [
            "news_652115a5db82"
          ]
        },
        {
          "topic": "雷曼危机以来未见的跌幅！美国市政债9月遭重创",
          "content": "通胀数据影响货币政策节奏和实际利率水平，关注对债券久期策略的传导",
          "evidenceItemIds": [
            "news_38c6d855f58a"
          ]
        },
        {
          "topic": "美联储本月加不加息？美国9月非农今晚揭晓 全球市场严阵以待",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_4ba829ea46a0"
          ]
        },
        {
          "topic": "耐克挥刀组织架构，大中华区独立时代将成历史",
          "content": "汇率波动影响跨境资本流动和出口导向型企业盈利，关注对相关持仓的影响",
          "evidenceItemIds": [
            "news_53988d5190a5"
          ]
        }
      ]
    },
    "sourceGeneratedBy": "llm"
  }
};
window.KEYWORD_INDEX = {
  "保险": [
    "news_43da5cba1923",
    "news_b8359ae20a15",
    "news_90694c744974",
    "news_7b45a87acab6",
    "news_5c5f98083245",
    "news_9f3b623176ea",
    "news_99d4956f6bba",
    "news_df02cbb50620"
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
    "news_b89edd6d57d3"
  ],
  "养老金": [
    "news_b89edd6d57d3"
  ],
  "重疾险": [
    "news_b88af30fc3f3"
  ],
  "寿险": [
    "news_5c5f98083245",
    "news_e31f54c649b4"
  ],
  "财险": [
    "news_90694c744974"
  ],
  "医疗险": [
    "news_90694c744974",
    "news_9f3b623176ea"
  ],
  "国寿": [
    "news_99d4956f6bba"
  ],
  "友邦": [
    "news_2bf8fe17f7f9"
  ],
  "银行": [
    "news_4830b6299c47",
    "news_f927cbc88275",
    "news_6ab1abce685b",
    "news_d663596ede3c",
    "news_f6a743a3adfe",
    "news_d543c12c38b3",
    "news_70bc1737b70b",
    "news_1133154e89cc",
    "news_43da5cba1923"
  ],
  "央行": [
    "news_570b6a39a4b5",
    "news_7cce498ba7b6",
    "news_c9dff436648f",
    "news_740427f0a590",
    "news_1804264a0fff"
  ],
  "利率": [
    "news_4ab2a4fea672",
    "news_53988d5190a5",
    "news_dd5c5f982f92",
    "news_cee2420b7785",
    "news_179bbcdc09c7",
    "news_da8b0e170808",
    "news_7e5bbb9616ba",
    "news_5595e0c553cd",
    "news_1804264a0fff",
    "news_bec32e135b03",
    "news_b8359ae20a15"
  ],
  "贷款利率": [
    "news_dd5c5f982f92"
  ],
  "加息": [
    "news_570b6a39a4b5",
    "news_38c6d855f58a",
    "news_4ba829ea46a0",
    "news_7cce498ba7b6",
    "news_7e5bbb9616ba",
    "news_c9dff436648f",
    "news_6c88d0458ccf",
    "news_232ba5632b14",
    "news_fe7f5b7a409c",
    "news_bf3759c7790b",
    "news_1804264a0fff"
  ],
  "流动性": [
    "news_652115a5db82",
    "news_bd3d25b5a053",
    "news_43da5cba1923"
  ],
  "按揭": [
    "news_dd5c5f982f92"
  ],
  "股票": [
    "news_c93072cce96c",
    "news_da8b0e170808",
    "news_7e5bbb9616ba",
    "news_50c9de7a8810"
  ],
  "A股": [
    "news_f3c7a8eb5d37"
  ],
  "港股": [
    "news_9efc31ad2c41",
    "news_43d1b55ab2ae",
    "news_4ab2a4fea672",
    "news_4c32db440280",
    "news_27762e3b0ee9",
    "news_39072252c69f",
    "news_43da5cba1923"
  ],
  "美股": [
    "news_27762e3b0ee9",
    "news_da8b0e170808",
    "news_39072252c69f",
    "news_46dc867fab44",
    "news_69ddf9be3394",
    "news_dd55b3e5dd61",
    "news_ce58686b8470",
    "news_7c7d85230866",
    "news_69c4b193d651",
    "news_6cf82ff5abc0",
    "news_c6779e66f330"
  ],
  "指数": [
    "news_9efc31ad2c41",
    "news_d663596ede3c",
    "news_4ab2a4fea672",
    "news_570b6a39a4b5",
    "news_38c6d855f58a",
    "news_8d5450859c7f",
    "news_0376f94d0e90",
    "news_da8b0e170808",
    "news_2094a08663d0",
    "news_e2cce1544fa4",
    "news_50053a76d41a",
    "news_606c54f5b5db",
    "news_46dc867fab44",
    "news_69ddf9be3394",
    "news_ce58686b8470",
    "news_7c7d85230866",
    "news_c26d643da9fd",
    "news_96503b581cf1",
    "news_60cdec3e1436",
    "news_43da5cba1923",
    "news_314e53898544",
    "news_c6779e66f330",
    "news_740427f0a590",
    "news_f3c7a8eb5d37"
  ],
  "ETF": [
    "news_d67c04fa04a2",
    "news_da8b0e170808"
  ],
  "公募基金": [
    "news_d67c04fa04a2",
    "news_446bdef6bf26"
  ],
  "债券": [
    "news_6ab1abce685b",
    "news_d67c04fa04a2",
    "news_4ab2a4fea672",
    "news_38c6d855f58a",
    "news_fc245616629d",
    "news_dd5c5f982f92",
    "news_7e5bbb9616ba",
    "news_606c54f5b5db",
    "news_6c88d0458ccf",
    "news_c6779e66f330",
    "news_4f811757746c",
    "news_b8359ae20a15"
  ],
  "国债": [
    "news_4ab2a4fea672",
    "news_b89edd6d57d3",
    "news_fc245616629d",
    "news_7e5bbb9616ba",
    "news_bd3d25b5a053",
    "news_d3fa4e865007",
    "news_7c7d85230866",
    "news_43da5cba1923",
    "news_314e53898544",
    "news_6cf82ff5abc0",
    "news_4f811757746c"
  ],
  "信用债": [
    "news_43da5cba1923"
  ],
  "地方债": [
    "news_43da5cba1923"
  ],
  "期货": [
    "news_652115a5db82",
    "news_4280bd432f83",
    "news_4d1e6b6f74a3",
    "news_ce58686b8470",
    "news_6cf82ff5abc0"
  ],
  "IPO": [
    "news_bd204a0a99e7",
    "news_bf096691773e",
    "news_b42d4d735903",
    "news_27c0411e0859",
    "news_fae822503c4e",
    "news_309d6031626a",
    "news_faeae778fd24",
    "news_fdd6640a772b"
  ],
  "上市": [
    "news_395488b90408",
    "news_88ded9b30942",
    "news_652115a5db82",
    "news_bf096691773e",
    "news_9b3974a9de15",
    "news_b42d4d735903",
    "news_43b5fe789f14",
    "news_fae822503c4e",
    "news_faeae778fd24",
    "news_87746c35e143",
    "news_fdd6640a772b"
  ],
  "减持": [
    "news_43da5cba1923"
  ],
  "增持": [
    "news_df02cbb50620"
  ],
  "回购": [
    "news_da1497a3535c",
    "news_f58725bff205",
    "news_044317efab6e",
    "news_c93072cce96c",
    "news_fc245616629d",
    "news_179bbcdc09c7",
    "news_bd3d25b5a053"
  ],
  "券商": [
    "news_4ab2a4fea672",
    "news_d66d49c1803b",
    "news_43da5cba1923",
    "news_ff2d58a56514"
  ],
  "投行": [
    "news_7e9968943c6c"
  ],
  "自营": [
    "news_efdccc93b562"
  ],
  "经纪": [
    "news_5c5f98083245",
    "news_9f3b623176ea"
  ],
  "投资者": [
    "news_6ab1abce685b",
    "news_990933b9df6c",
    "news_d67c04fa04a2",
    "news_652115a5db82",
    "news_38c6d855f58a",
    "news_4ba829ea46a0",
    "news_dd4a849f8c02",
    "news_c34bcd17bc00",
    "news_bd204a0a99e7",
    "news_bf096691773e",
    "news_39072252c69f",
    "news_fae822503c4e",
    "news_faeae778fd24"
  ],
  "机构": [
    "news_4830b6299c47",
    "news_1d69be3f072d",
    "news_0e1909930562",
    "news_d67c04fa04a2",
    "news_c93072cce96c",
    "news_446bdef6bf26",
    "news_1e9820df21ce",
    "news_3849e09d6d33",
    "news_f8d5a057fbc0",
    "news_7cce498ba7b6",
    "news_606c54f5b5db",
    "news_babb42be2867",
    "news_43da5cba1923",
    "news_78e6337a9d30"
  ],
  "南向资金": [
    "news_4ab2a4fea672",
    "news_43da5cba1923"
  ],
  "监管": [
    "news_4830b6299c47",
    "news_c93072cce96c",
    "news_2bf8fe17f7f9"
  ],
  "证监会": [
    "news_986ca26f7b13"
  ],
  "港交所": [
    "news_652115a5db82"
  ],
  "基金业协会": [
    "news_446bdef6bf26"
  ],
  "合规": [
    "news_ff2d58a56514"
  ],
  "处罚": [
    "news_bd2aa3b66859"
  ],
  "整改": [
    "news_ff2d58a56514"
  ],
  "约谈": [
    "news_4830b6299c47"
  ],
  "通报": [
    "news_3849e09d6d33"
  ],
  "条款": [
    "news_bd204a0a99e7",
    "news_e2cce1544fa4",
    "news_fe7f5b7a409c",
    "news_faeae778fd24",
    "news_314e53898544",
    "news_4228eb1aed3c",
    "news_90694c744974",
    "news_5c5f98083245"
  ],
  "办法": [
    "news_3d81c428c5ba",
    "news_ff2d58a56514"
  ],
  "指引": [
    "news_395488b90408",
    "news_c34bcd17bc00",
    "news_87746c35e143",
    "news_7e9968943c6c"
  ],
  "意见": [
    "news_e2cce1544fa4",
    "news_6f05a2a26423",
    "news_314e53898544",
    "news_4228eb1aed3c"
  ],
  "规定": [
    "news_ff2d58a56514",
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
    "news_570b6a39a4b5",
    "news_68bb1283bd8e",
    "news_7cce498ba7b6",
    "news_cee2420b7785",
    "news_0376f94d0e90",
    "news_6457cf7c0c88",
    "news_37befdbb29b7",
    "news_50053a76d41a",
    "news_39072252c69f",
    "news_27c0411e0859",
    "news_dd55b3e5dd61",
    "news_232ba5632b14",
    "news_4f811757746c",
    "news_1804264a0fff",
    "news_78e6337a9d30",
    "news_5fcbaddecc79",
    "news_b88af30fc3f3"
  ],
  "GDP": [
    "news_1e7aca1314e3",
    "news_37befdbb29b7"
  ],
  "CPI": [
    "news_570b6a39a4b5",
    "news_e47b644f5b2c"
  ],
  "PMI": [
    "news_064fcef6ecae",
    "news_69ddf9be3394",
    "news_aa62b0817e12",
    "news_740427f0a590"
  ],
  "信贷": [
    "news_27762e3b0ee9"
  ],
  "货币政策": [
    "news_cee2420b7785",
    "news_bf3759c7790b",
    "news_740427f0a590",
    "news_1804264a0fff",
    "news_78e6337a9d30"
  ],
  "财政政策": [
    "news_39072252c69f",
    "news_dd55b3e5dd61"
  ],
  "汇率": [
    "news_53988d5190a5"
  ],
  "人民币": [
    "news_652115a5db82",
    "news_43da5cba1923"
  ],
  "外汇": [
    "news_b40444575a73"
  ],
  "跨境": [
    "news_39072252c69f"
  ],
  "离岸": [
    "news_f1474a3409d8"
  ],
  "美元": [
    "news_b6d0fcac7032",
    "news_f58725bff205",
    "news_4043a2d4c835",
    "news_6ab1abce685b",
    "news_1d69be3f072d",
    "news_395488b90408",
    "news_72932b845fa3",
    "news_d5ea0945f22a",
    "news_990933b9df6c",
    "news_b40444575a73",
    "news_570b6a39a4b5",
    "news_c93072cce96c",
    "news_0287b9cea67b",
    "news_652115a5db82",
    "news_b8cc0bce9b90",
    "news_4280bd432f83",
    "news_53988d5190a5",
    "news_dd4a849f8c02",
    "news_efdccc93b562",
    "news_fc245616629d",
    "news_1e7aca1314e3",
    "news_7cce498ba7b6",
    "news_c34bcd17bc00",
    "news_179bbcdc09c7",
    "news_bd204a0a99e7",
    "news_bf096691773e",
    "news_bd3d25b5a053",
    "news_f857f8ac7a73",
    "news_4d1e6b6f74a3",
    "news_6f05a2a26423",
    "news_3358f4ace817",
    "news_27c0411e0859",
    "news_fae822503c4e",
    "news_faeae778fd24",
    "news_11499b83f94c",
    "news_1ca398b245c9",
    "news_43da5cba1923",
    "news_6cf82ff5abc0",
    "news_7e9968943c6c",
    "news_4228eb1aed3c"
  ],
  "欧元": [
    "news_b89edd6d57d3",
    "news_740427f0a590"
  ],
  "日元": [
    "news_72932b845fa3",
    "news_4532478386f4",
    "news_1804264a0fff"
  ],
  "通胀": [
    "news_dd1bd9609c82",
    "news_570b6a39a4b5",
    "news_38c6d855f58a",
    "news_7cce498ba7b6",
    "news_cee2420b7785",
    "news_c9dff436648f",
    "news_e47b644f5b2c",
    "news_232ba5632b14",
    "news_fe7f5b7a409c",
    "news_740427f0a590",
    "news_78e6337a9d30"
  ],
  "衰退": [
    "news_4d533087caa8",
    "news_65c19fbc55f2"
  ],
  "复苏": [
    "news_c34bcd17bc00",
    "news_9b3974a9de15",
    "news_740427f0a590"
  ],
  "住房": [
    "news_dd5c5f982f92"
  ],
  "消费": [
    "news_4d533087caa8",
    "news_f41800831fdf",
    "news_65c19fbc55f2",
    "news_570b6a39a4b5",
    "news_efdccc93b562",
    "news_a7d3dd5d4136",
    "news_11499b83f94c",
    "news_2556061d3799",
    "news_f91414384b1c"
  ],
  "投资": [
    "news_6ab1abce685b",
    "news_72932b845fa3",
    "news_990933b9df6c",
    "news_d67c04fa04a2",
    "news_b40444575a73",
    "news_4532478386f4",
    "news_652115a5db82",
    "news_38c6d855f58a",
    "news_4ba829ea46a0",
    "news_dd4a849f8c02",
    "news_c34bcd17bc00",
    "news_bd204a0a99e7",
    "news_bf096691773e",
    "news_6457cf7c0c88",
    "news_e2cce1544fa4",
    "news_bde1d599dd9f",
    "news_39072252c69f",
    "news_fae822503c4e",
    "news_faeae778fd24",
    "news_7cc86ca3d0a2",
    "news_314e53898544",
    "news_38717f0e31ea",
    "news_60d5aca8d5f8",
    "news_4228eb1aed3c",
    "news_fdd6640a772b",
    "news_2bf8fe17f7f9"
  ],
  "出口": [
    "news_e24b46192afa",
    "news_570b6a39a4b5",
    "news_4280bd432f83",
    "news_1e7aca1314e3",
    "news_740427f0a590",
    "news_ab0860977ec3"
  ],
  "贸易": [
    "news_1e7aca1314e3",
    "news_7cce498ba7b6",
    "news_dd55b3e5dd61"
  ],
  "供应链": [
    "news_7cce498ba7b6"
  ],
  "就业": [
    "news_6c146bfaf76e",
    "news_4ba829ea46a0"
  ],
  "失业": [
    "news_4ba829ea46a0",
    "news_cdd26ed9837e"
  ],
  "收入": [
    "news_b8cc0bce9b90",
    "news_53988d5190a5",
    "news_c34bcd17bc00",
    "news_27c0411e0859"
  ],
  "黄金": [
    "news_652115a5db82",
    "news_f6a743a3adfe",
    "news_46dc867fab44",
    "news_dd55b3e5dd61",
    "news_ce58686b8470",
    "news_aff5c69575c8"
  ],
  "金价": [
    "news_f6a743a3adfe",
    "news_b88af30fc3f3"
  ],
  "原油": [
    "news_677ea319c794",
    "news_d5ea0945f22a",
    "news_4d1e6b6f74a3",
    "news_46dc867fab44",
    "news_dd55b3e5dd61",
    "news_ce58686b8470",
    "news_6cf82ff5abc0"
  ],
  "大宗商品": [
    "news_652115a5db82",
    "news_f6a743a3adfe",
    "news_7cce498ba7b6"
  ],
  "工业": [
    "news_4d533087caa8",
    "news_65c19fbc55f2"
  ],
  "利润": [
    "news_1e0fbf8e69f8",
    "news_b6d0fcac7032",
    "news_53988d5190a5",
    "news_c34bcd17bc00",
    "news_9b3974a9de15"
  ],
  "股市": [
    "news_ce58686b8470",
    "news_c26d643da9fd",
    "news_96503b581cf1",
    "news_60cdec3e1436",
    "news_02859fb9ebed",
    "news_6cf82ff5abc0",
    "news_c6779e66f330"
  ],
  "美联储": [
    "news_6c146bfaf76e",
    "news_1d69be3f072d",
    "news_38c6d855f58a",
    "news_4ba829ea46a0",
    "news_7cce498ba7b6",
    "news_5595e0c553cd",
    "news_69ddf9be3394",
    "news_6c88d0458ccf",
    "news_232ba5632b14",
    "news_fe7f5b7a409c",
    "news_bf3759c7790b",
    "news_78e6337a9d30"
  ],
  "财报": [
    "news_efdccc93b562",
    "news_c34bcd17bc00",
    "news_69ddf9be3394",
    "news_87746c35e143",
    "news_7e9968943c6c"
  ],
  "欧央行": [
    "news_7cce498ba7b6"
  ],
  "信托": [
    "news_f1474a3409d8"
  ],
  "资产配置": [
    "news_7cce498ba7b6"
  ],
  "净值": [
    "news_f1474a3409d8",
    "news_446bdef6bf26"
  ],
  "CTA": [
    "news_f6a743a3adfe"
  ],
  "权益": [
    "news_d67c04fa04a2",
    "news_b88af30fc3f3"
  ],
  "年化": [
    "news_27c0411e0859"
  ]
};
