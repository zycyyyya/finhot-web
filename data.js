// finhot auto-generated data - powered by RSSHub + financial sources + Zhihu OpenAPI
// Generated: 2026-10-19T05:19:14.386Z
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
  "date": "2026-10-19",
  "generatedAt": "2026-10-19T05:19:14.386Z",
  "lead": "今日新增 128 条，共 150 条精选资讯",
  "items": [
    {
      "id": "news_bf7e3f93d69f",
      "title": "重疾医疗首创终身保证续保医保外药械可全覆盖人保寿险推出关爱宝长期医疗保障计划",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261019/6188.html",
      "publishedAt": "2026-10-19T11:53:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "更长的期限，更广的覆盖",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 63,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 60,
          "reasons": [
            "命中保险运营核心主题 2 项"
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
      "selectedForFeatured": true,
      "eventId": null
    },
    {
      "id": "news_739510b46d56",
      "title": "制度层面关上大门保险代理人独立网销时代终结大v出路在哪",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/yc/20261019/6187.html",
      "publishedAt": "2026-10-19T11:23:00.000Z",
      "sourceName": "慧保天下",
      "category": "regulatory",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "以个人名义独立营销这条路径，在制度层面已经被关闭",
      "contentTags": [
        "官方监管"
      ],
      "scoreDetails": {},
      "score": 57,
      "original": {
        "huibaoxianCategory": "政策解读"
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
      "eventId": null
    },
    {
      "title": "财联社10月19日电，日本30年期国债收益率下跌2个基点至3.98%。",
      "sourceUrl": "https://www.cls.cn/detail/2508114",
      "publishedAt": "2026-10-19T04:41:13.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电，日本30年期国债收益率下跌2个基点至3.98%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_7fa155b04c37",
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
      "title": "财联社10月19日电，全球芯片LOF(501225)将于2026年10月19日下午开市起停牌至当日收市，停牌期间赎回业务照常办理。",
      "sourceUrl": "https://www.cls.cn/detail/2508113",
      "publishedAt": "2026-10-19T04:38:52.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电，全球芯片LOF(501225)将于2026年10月19日下午开市起停牌至当日收市，停牌期间赎回业务照常办理。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_7140f43d44c3",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "34年，从罐头厂到“咱家果源”：果汁大王汇源集团交出名字",
      "sourceUrl": "https://www.yicai.com/news/103398611.html",
      "publishedAt": "2026-10-19T04:24:09.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "10月19日上午，汇源集团发布了一份声明，彻底“交出”了自己用了三十四年的名字。声明称，汇源集团及下属企业将不再生产带有“汇源”商标的果汁产品，也不再开展与该商标相关的合作，全面启用“咱家果源”作为替代品牌，同时继续就重整投资人上海文盛资产管理股份有限公司的违约行为维权。汇源集团挥别汇源“做出这个抉择万般心痛。”声明里的这句话相信并非修辞。按照汇源集团的说法，由于文盛资产方面的违约，使得北京汇源事",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_76395e6b62f4",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "消息称大众计划到2030年前冻结薪资",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032296028574342",
      "publishedAt": "2026-10-19T04:23:38.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "据《南德意志报》报道援引其看到的内部文件报道，大众汽车计划对全球60万员工中的大部分人员实施薪资冻结，政策持续至2030年。受通胀影响，放弃加薪可能令相关员工实际收入减少约10%。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_fe6b29340eb1",
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
      "title": "资管周报：香港银行定存利率\"卷\"至21%；公募新规打开投资工具空间，2.52万亿银行理财资金迎新机遇",
      "sourceUrl": "https://www.cls.cn/detail/2508040",
      "publishedAt": "2026-10-19T04:20:03.000Z",
      "fetchedAt": "2026-10-19T04:49:26.362Z",
      "timeConfidence": "source",
      "summary": "热点导读\n2.52万亿银行理财资金迎新机遇，公募新规打开投资工具空间，能力接口能否有效对接？\n红利策略“渗透”至银行理财 最高年化收益率达9.09%，四季度红利行情能兑现多少？\n停售五年存款之后，部分中小银行改变自动转存规则：老存单到期自动降档转三年期\n香港银行定存利率\"卷\"至21%！业内：限时促销绑定换汇获客，高息诱惑下需警惕汇率波动\n资管要闻\n2.52万亿银行理财资金迎新机遇，公募新规打开投资",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4e18ddca912e",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
      "rawScore": 84,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 8,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {
        "quantity": 5,
        "explicitDate": 3
      },
      "noiseCaps": [
        "时间性盘点",
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
            "命中关联主题 2 项",
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
          "score": 91,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
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
      "eventId": null
    },
    {
      "title": "CMG全国中短剧精品共创计划在上海启动",
      "sourceUrl": "https://www.yicai.com/news/103398610.html",
      "publishedAt": "2026-10-19T04:17:59.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "中短剧是数字时代应运而生的新大众文艺，短小而见时代，精炼而有力量，是文化消费的新赛道，更是讲好中国故事、传播中国声音的最新载体。\n\n10月18日，CMG全国中短剧大会在上海浦东举行，一批题材丰富、类型多样的精品中短剧亮相，联动多家平台聚力赋能，让源自生活的好作品持续涌现。大会现场启动了“CMG全国中短剧精品共创计划”。\n\n\n\n上海市委常委、浦东新区区委书记李政在致辞中表示，中短剧是数字时代应运而生",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6cc51213656e",
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
      "title": "10月19日午间涨停分析",
      "sourceUrl": "https://www.cls.cn/detail/2508049",
      "publishedAt": "2026-10-19T04:17:28.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "【10月19日午间涨停分析】财联社10月19日电，今日午盘全市场共28股涨停，连板股总数10只，21股封板未遂，封板率为57%（不含ST股、退市股）。焦点股方面，芯片产业链的东方嘉盛3连板，低空经济概念股吉大正元3连板。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8b7de7db7c9c",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社10月19日电，杰富瑞将道达尔能源公司目标价从88欧元上调至90欧元。",
      "sourceUrl": "https://www.cls.cn/detail/2508103",
      "publishedAt": "2026-10-19T04:15:18.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电，杰富瑞将道达尔能源公司目标价从88欧元上调至90欧元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c309360e9767",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "境外调研违规，5家券商、基金公司被“点名”通报，细节来了",
      "sourceUrl": "https://www.cls.cn/detail/2508098",
      "publishedAt": "2026-10-19T04:14:39.000Z",
      "fetchedAt": "2026-10-19T04:49:26.362Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯（记者 林坚）财联社最新获悉，监管最新集中通报了一批证券基金公司投研人员调研行为违规的检查与处理情况。据记者了解，这次通报正好是数月前行业被爆出有券商研究所带基金经理出境调研时，违规参与娱乐活动的后续。\n通报显示，经查，部分基金公司参加证券公司研究所组织的境外调研活动时，存在由证券公司承担专家咨询、调研门票等费用的情形，反映出相关证券公司、基金公司内部控制有效性存在不足；个别基",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_316842384872",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 66,
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "passesTierGate": true,
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
          "score": 44,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 66,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 66,
      "llmScores": [
        66,
        66
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
      "title": "前三季度深圳集成电路等人工智能相关零部件进出口规模居全国首位",
      "sourceUrl": "https://www.cls.cn/detail/2508099",
      "publishedAt": "2026-10-19T04:09:49.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "【前三季度深圳集成电路等人工智能相关零部件进出口规模居全国首位】财联社10月19日电，广东省人民政府新闻办公室举行2026年前三季度广东进出口情况新闻发布会。深圳海关副关长梁丹虹介绍，深圳外贸高速增长，主要得益于三个方面：一是产业动能升级。人工智能赋能深圳产业发展，外贸持续向“新”向“优”。前三季度，集成电路等人工智能相关零部件进出口规模居全国首位，贡献全市超六成的外贸增量；3D打印机、数字照相机",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0dd99c348dc1",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社10月19日电，投行道明考恩将恩智浦半导体目标价从290美元下调至275美元。",
      "sourceUrl": "https://www.cls.cn/detail/2508092",
      "publishedAt": "2026-10-19T04:09:24.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电，投行道明考恩将恩智浦半导体目标价从290美元下调至275美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_39fe46fe53e2",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_3d62241bc3f8"
    },
    {
      "title": "财联社10月19日电，投行道明考恩将安森美半导体目标价从95美元下调至75美元。",
      "sourceUrl": "https://www.cls.cn/detail/2508093",
      "publishedAt": "2026-10-19T04:09:20.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电，投行道明考恩将安森美半导体目标价从95美元下调至75美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8493536dd517",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_3d62241bc3f8"
    },
    {
      "title": "财联社10月19日电，投行道明考恩将意法半导体目标价从55美元下调至50美元。",
      "sourceUrl": "https://www.cls.cn/detail/2508094",
      "publishedAt": "2026-10-19T04:09:17.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电，投行道明考恩将意法半导体目标价从55美元下调至50美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_fee5ce6a7989",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_3d62241bc3f8"
    },
    {
      "title": "恒丰银行资金运营中心被罚160万元，涉债券资产五级分类不准确等",
      "sourceUrl": "https://www.cls.cn/detail/2508011",
      "publishedAt": "2026-10-19T04:09:17.000Z",
      "fetchedAt": "2026-10-19T04:49:26.362Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯 上海金融监管局近日发布一张罚单，剑指恒丰银行股份有限公司资金运营中心及相关责任人。\n罚单显示，恒丰银行资金运营中心的主要违法违规行为：债券资产五级分类不准确、对同业业务未严格进行授信管理、交易账簿和银行账簿划分不准确、债券投资经营独立性不足、托管产品净值核算不准确。\n针对上述违法违规行为，上海金融监管局对恒丰银行资金运营中心罚款160万元；对时任恒丰银行资金运营中心外币及信用",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f06d589e3790",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 56,
      "rawScore": 90,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
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
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 50,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 54,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 94,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 56,
      "llmScores": [
        54,
        58
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
      "title": "IEA：3月释储承诺将超额兑现 剩余石油将加快投放",
      "sourceUrl": "https://www.cls.cn/detail/2508036",
      "publishedAt": "2026-10-19T04:09:14.000Z",
      "fetchedAt": "2026-10-19T04:49:26.362Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯（编辑 刘靖怡）国际能源署（IEA）表示，其于3月份承诺释放的石油储备量将超过既定的目标，并且随着全球持续为抑制能源价格飙升做出努力，该机构将加快释放剩余储备。\n该机构在近日的一份声明中表示，IEA成员国迄今已释放3.3亿桶石油，剩余的1亿桶（其中包括超过2000万桶柴油）将“根据各国国情适时”释放。\n这意味着总释放量将超过IEA在3月份，即美伊战争爆发之初，所承诺的4亿桶石油",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_90a64c6ac1bf",
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
      "title": "财联社10月19日电，投行道明考恩将微芯科技目标价从90美元下调至75美元。",
      "sourceUrl": "https://www.cls.cn/detail/2508090",
      "publishedAt": "2026-10-19T04:09:13.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电，投行道明考恩将微芯科技目标价从90美元下调至75美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a62540c706c0",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社10月19日电，投行道明考恩将英飞凌科技目标价从72欧元下调至60欧元。",
      "sourceUrl": "https://www.cls.cn/detail/2508088",
      "publishedAt": "2026-10-19T04:09:08.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电，投行道明考恩将英飞凌科技目标价从72欧元下调至60欧元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8e29fdbe16c5",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "【午报】三大指数涨跌不一，银行股逆势走强， 工商银行再创历史新高",
      "sourceUrl": "https://www.cls.cn/detail/2508091",
      "publishedAt": "2026-10-19T04:09:07.000Z",
      "fetchedAt": "2026-10-19T04:49:26.362Z",
      "timeConfidence": "source",
      "summary": "一、【早盘盘面回顾】\n财联社10月19日讯，三大指数涨跌不一，沪指翻红，创业板指探底回升后再度震荡回落。沪深两市半日成交额9707亿，较上个交易日放量81亿。全市场超3800只个股下跌。盘面上，银行板块逆势走强，工商银行再创历史新高；低空经济概念反复活跃，保隆科技、京城股份、万丰奥威、文灿股份2连板；PCB概念盘中回暖，肯特股份、协和电子、沃特股份涨停，四会富仕、澳弘电子盘中触及涨停；数据要素太极",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b0c8044bf0c3",
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
      "title": "财联社10月19日午间新闻精选",
      "sourceUrl": "https://www.cls.cn/detail/2508089",
      "publishedAt": "2026-10-19T04:07:33.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "【财联社10月19日午间新闻精选】\n1、截至午间收盘，上证指数涨0.16%，深证成指跌0.18%，创业板指跌1.07%。\n2、国家统计局公布2026年前三季度国民经济运行情况，初步核算，前三季度国内生产总值1071071亿元，按不变价格计算，同比增长4.6%。\n3、国家统计局数据显示，9月份，规模以上工业增加值同比实际增长5.5%，增速比上月加快0.3个百分点。1—9月份，社会消费品零售总额370",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c07aff0daf8b",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财报前瞻 | Roadster飞起、利润坠地，特斯拉(TSLA.US)“叙事性估值”能否撑住？",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613810",
      "publishedAt": "2026-10-19T04:05:52.000Z",
      "fetchedAt": "2026-10-19T04:51:24.723Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_00e0bfd5ef42",
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
          "score": 56,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
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
      "title": "精品投行Evercore任命两位联席总裁 2027年1月1日起生效",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613808",
      "publishedAt": "2026-10-19T04:05:09.000Z",
      "fetchedAt": "2026-10-19T04:51:24.723Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_0b6acf1f8c6b",
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
      "title": "A股午评 | 沪指涨0.16% 工行创新高 银行军工逆势走强",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613805",
      "publishedAt": "2026-10-19T04:05:08.000Z",
      "fetchedAt": "2026-10-19T04:51:24.723Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_882b652f9cdf",
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
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "澳洲联储加息路径陷入两难！就业市场降温快于预期 通胀压力却仍难消退",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613807",
      "publishedAt": "2026-10-19T04:05:08.000Z",
      "fetchedAt": "2026-10-19T04:51:24.723Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_754ee7ae6db0",
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
      "title": "财联社10月19日电，据报道，英国央行对巴克莱银行展开审查，指控其交易员虚报私募信贷敞口。",
      "sourceUrl": "https://www.cls.cn/detail/2508087",
      "publishedAt": "2026-10-19T04:04:08.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电，据报道，英国央行对巴克莱银行展开审查，指控其交易员虚报私募信贷敞口。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_82a49203aabf",
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
          "score": 39,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
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
      "title": "马来西亚9月出口同比增长54.5%",
      "sourceUrl": "https://www.cls.cn/detail/2508086",
      "publishedAt": "2026-10-19T04:03:34.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "【马来西亚9月出口同比增长54.5%】财联社10月19日电，马来西亚9月出口同比增长54.5%，高于市场预期的44.6%，出口增速创2021年4月以来最快；9月进口同比增长52.7%，高于市场预期的43.2%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_fea60b20cf8a",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "国家发改委向社会公开征求《电力现货市场基本规则（公开征求意见稿）》意见",
      "sourceUrl": "https://www.cls.cn/detail/2508077",
      "publishedAt": "2026-10-19T04:02:37.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "【国家发改委向社会公开征求《电力现货市场基本规则（公开征求意见稿）》意见】财联社10月19日电，为加快推进全国统一电力市场建设，强化电力市场基础制度规则统一，规范电力现货市场运营和管理，国家发展改革委组织对《电力现货市场基本规则（试行）》（发改能源规〔2023〕1217号）进行了修订，形成了《电力现货市场基本规则（公开征求意见稿）》，现向社会公开征求意见。此次公开征求意见的时间为2026年10月1",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5b3c743f0142",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 63,
      "rawScore": 54,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 8,
        "evidence": 15,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "regDocument": 6,
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
          "score": 43,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 30,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 63,
      "llmScores": [
        58,
        67
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "韩国存储双雄股价下跌 致韩国养老金损失1370亿美元",
      "sourceUrl": "https://www.cls.cn/detail/2508076",
      "publishedAt": "2026-10-19T04:02:24.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "【韩国存储双雄股价下跌 致韩国养老金损失1370亿美元】财联社10月19日电，受三星电子和SK海力士等公司股价下跌的影响，韩国主要养老金基金韩国国民年金基金(NPS)蒙受了182万亿韩元的损失，约合1370亿美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2f93f60a31cc",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 29,
      "rawScore": 85,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
      "passesTierGate": false,
      "confidence": "high",
      "why": [
        "快讯线索，需结合原文判断",
        "可转化为客户沟通或投研关注",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 69,
          "reasons": [
            "命中保险运营核心主题 2 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 47,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 29,
      "llmScores": [
        38,
        20
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "APEC财长会议在港举行，李家超与亚投行行长会面",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032273681683076",
      "publishedAt": "2026-10-19T04:00:54.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "香港特区行政长官李家超在社交平台发文称，今天（19日），他在礼宾府与亚洲基础设施投资银行行长邹加怡女士会面，欢迎她率团来港出席2026年亚太经济合作组织财政部长会议。李家超指出，此次是继今年一月后他再次与邹行长见面，香港作为亚投行成员，一直发挥“一国两制”下内联外通的独特优势，协助亚投行推动亚洲基础设施的可持续发展。（大湾区之声）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_4c51d6fb9521",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社10月19日电，派杰投资将黑石集团目标价从130美元下调至125美元；将凯雷集团目标价从54美元下调至48美元；将KKR目标价从128美元下调至121美元。",
      "sourceUrl": "https://www.cls.cn/detail/2508075",
      "publishedAt": "2026-10-19T03:58:38.000Z",
      "fetchedAt": "2026-10-19T04:48:26.590Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电，派杰投资将黑石集团目标价从130美元下调至125美元；将凯雷集团目标价从54美元下调至48美元；将KKR目标价从128美元下调至121美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_3c44ecc773fb",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "沙特“减震器”失效！能源系统重建或需10年，柴油缺口300万桶/日美国炼厂无力填补",
      "sourceUrl": "https://wallstreetcn.com/articles/3783897",
      "publishedAt": "2026-10-19T03:48:52.000Z",
      "fetchedAt": "2026-10-19T04:46:34.311Z",
      "timeConfidence": "source",
      "summary": "沙特在全球石油市场扮演多年的\"减震器\"角色正在终结。知名能源分析师Karl Miller的最新评估显示，海湾能源系统的重建周期由此前的五年大幅延长至2033-2036年，所需资金高达5500亿至2.28万亿美元，而全球柴油与航空燃油的供应缺口以300万桶/日为基线，还可能进一步扩大，美国炼油体系在体量上无法填补。\nMiller认为：沙特已无法继续充当缓冲国。此前霍尔木兹海峡受阻时，利雅得尚能借东西",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4d3d8f3acbe6",
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
      "title": "俄乌升温叠加法国骚乱，欧元下挫0.5%",
      "sourceUrl": "https://wallstreetcn.com/articles/3783898",
      "publishedAt": "2026-10-19T03:48:43.000Z",
      "fetchedAt": "2026-10-19T04:46:34.311Z",
      "timeConfidence": "source",
      "summary": "俄乌局势骤然升温与法国街头暴力同步爆发，令欧元承压走低，市场对欧洲地缘政治风险与财政前景的担忧同步加剧。\n亚洲早盘周一，欧元兑美元一度下跌0.5%，触及1.1183的低点，随后小幅收窄跌幅，截至目前报1.1228。与此同时，法国国债期货早盘一度下跌52个基点。触发此轮抛售的导火索有二：乌克兰总统泽连斯基公开指责特朗普向基辅施压、迫使其向俄罗斯妥协；法国多个城市的抗议活动演变为警民冲突，成为该国数年",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_420e87abed2d",
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
      "title": "半日主力资金加仓电子板块，抛售房地产板块",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032261350429060",
      "publishedAt": "2026-10-19T03:48:21.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "主力资金早间净流入电子、银行、通信等板块，净流出房地产、农林牧渔等板块。具体到个股来看，亨通光电、九阳股份、寒武纪获净流入14.37亿元、9.02亿元、8.81亿元。净流出方面，闽东电力、中际旭创、金健米业遭抛售6.44亿元、6.24亿元、3.55亿元。（第一财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0226a7effdd2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "title": "美股上周素描：机构创纪录地“抛”，散户创纪录地“抄”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783899",
      "publishedAt": "2026-10-19T03:48:13.000Z",
      "fetchedAt": "2026-10-19T04:46:34.311Z",
      "timeConfidence": "source",
      "summary": "半导体板块刚经历年内最惨一周，散户资金却以创纪录规模三倍杠杆抄底，与对冲基金创纪录的净卖出形成罕见对峙。\n高盛Prime最新数据显示全球科技股上周净卖出规模创历史纪录，净敞口降至0百分位；但总敞口仍高达213.9%，处于83百分位。\n与此同时，散户借道杠杆ETF逆势抄底。高盛ETF专家Chris Lucas周日在报告中指出，过去一周近100亿美元资金涌入杠杆ETF，为2006年有数据以来最大单周流",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_725b3854a630",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 61,
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
          "score": 72,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项"
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
      "attentionScore": 61,
      "llmScores": [
        65,
        57
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
      "title": "国家统计局：“人工智能+”行动有力带动了新兴领域的投资和出口",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032259745632905",
      "publishedAt": "2026-10-19T03:46:43.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "10月19日，国家统计局新闻发言人、国民经济综合统计司负责人王冠华在国新办新闻发布会上表示，前三季度“人工智能+”行动有力带动了新兴领域的投资和出口。人工智能的应用拓展带动了产业链上下游持续投资扩产。如前三季度电子电路制造业、集成电路制造业、信息服务业投资分别增长了58.7%、14.2%和20.2%。在“两新”政策支持下，企业加快智能化改造，带动设备购置投资增长9.7%。同时，凭借全链条配套优势，",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f2aeb75443a7",
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
      "title": "前三季度投资累计同比降幅持平于7.2% 9月环比边际改善",
      "sourceUrl": "https://economy.caixin.com/2026-10-19/102494695.html",
      "publishedAt": "2026-10-19T03:46:05.000Z",
      "fetchedAt": "2026-10-19T04:46:33.727Z",
      "timeConfidence": "source",
      "summary": "9月季调后环比增长0.07%，结束此前连续六个月的环比下降；1—9月制造业投资降幅收窄，基建和房地产投资降幅继续扩大\n       　　【财新网】2026年以来持续恶化的固定资产投资在9月出现部分积极变化。从累计数据来看，制造业投资降幅收窄，但由于新型政策性金融工具落地仍有时滞，基建投资继续走弱，此外房地产投资降幅继续扩大。\n　　国家统计局10月19日公布的数据显示，1—9月全国固定资产投资（不含",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0a62b0a94cb4",
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
      "title": "前三季度居民人均可支配收入同比增速加快至5.3% 消费意愿仍待提升",
      "sourceUrl": "https://economy.caixin.com/2026-10-19/102494690.html",
      "publishedAt": "2026-10-19T03:39:19.000Z",
      "fetchedAt": "2026-10-19T04:46:33.727Z",
      "timeConfidence": "source",
      "summary": "居民收入名义和实际增速均低于同期经济增速，且收入中位数增速低于平均数，显示中低收入人群收入仍有待改善；居民消费倾向仅高于疫情较重的2020年和2022年同期\n    \n     \n     前三季度，人均经营净收入增长6.5%，占可支配收入的比重为16.2%，占比较上半年提高0.4个百分点。图：视觉中国\n    \n   \n       　　【财新网】2026年前三季度，在部分行业价格改善的带动下，",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_230b7d50d4c9",
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
      "title": "小摩前瞻北美金属矿业财报：Q4指引与滞后定价成焦点 看好卡朋特科技(CRS.US)",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613781",
      "publishedAt": "2026-10-19T03:35:42.000Z",
      "fetchedAt": "2026-10-19T04:51:24.723Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_d41ffcc32c16",
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
      "title": "A股三大指数午间休盘涨跌不一，工商银行再创新高",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032246149452422",
      "publishedAt": "2026-10-19T03:32:53.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，A股三大指数午间休盘涨跌不一，沪指涨0.16%，深成指跌0.18%，创业板指跌1.07%；石油化工、家电、银行板块领涨，九阳股份涨超6%，新凤鸣涨超3%，工商银行涨超1%再创新高；水产、CRO、教育板块下挫，百洋股份跌停，昭衍新药跌超9%，全通教育跌超3%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c49920e9f2b5",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
          "score": 28,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "3家券商、2家基金公司因在境外调研违规行为被采取监管措施",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032236787880583",
      "publishedAt": "2026-10-19T03:23:22.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "监管最新通报称，部分基金公司参加证券公司研究所组织的境外调研活动时，存在由证券公司承担专家咨询、调研门票等费用的情形，反映出相关证券公司、基金公司内部控制有效性存在不足；个别基金公司从业人员因私出国旅游的往返机票、 酒店等费用由证券公司支付。针对此情况，监管部门已依法从严对存在不配合检查情形的G1证券公司采取监管谈话的监管措施，责令公司对相关负责人从严处分；对H、G2证券公司和F、H基金公司采取出",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_912e35ffb388",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 62,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 0,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 33,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 42,
          "reasons": [
            "命中关联主题 2 项",
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
      "attentionScore": 62,
      "llmScores": [
        62,
        61
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
      "title": "监管要求券商、基金调研费用不得用交易佣金转移支付，不得以分仓派点变相补偿",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032236223681152",
      "publishedAt": "2026-10-19T03:22:47.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "监管最新向券商、基金公司发布通报称，部分券商存在替基金公司承担境外调研费用的违规乱象。针对此情况，监管重申，券商、基金公司应遵守相关要求：一是严守交易费用管理规定，不得使用交易佣金转移支付应由自身支付的专家咨询、调研中介、会议、门票、机票、住宿等费用，不得通过提高佣金分成比例、增加分仓派点、承诺交易量等方式变相补偿；二是加强调研全流程管理，实行“一事一报、一团一档”，确保出行流程真实、合理、可追溯",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_dca9950f844a",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 70,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 0,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {},
      "noiseCaps": [],
      "tierGate": 70,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 33,
          "reasons": [
            "命中关联主题 1 项",
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
          "score": 55,
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
      "eventId": null
    },
    {
      "title": "Roadster秀的是SpaceX的实力！大摩：大部分BOM价值源于SpaceX，技术融合远超预期",
      "sourceUrl": "https://wallstreetcn.com/articles/3783884",
      "publishedAt": "2026-10-19T03:20:03.000Z",
      "fetchedAt": "2026-10-19T04:46:34.311Z",
      "timeConfidence": "source",
      "summary": "特斯拉Roadster的德克萨斯发布秀，让外界看到的不只是一辆飞行汽车，更是SpaceX技术实力的集中展示。\n据追风交易台，摩根士丹利在最新报告中指出，这次发布会深刻揭示了特斯拉与SpaceX之间日益紧密的协同关系，并借此重申对SpaceX的超配评级及300美元目标价，较当前约148.62美元的股价存在逾一倍的上行空间。\n报告中认为，Roadster物料清单（BOM）中的大部分价值来自SpaceX",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2fe8ca21c8ab",
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
      "title": "时隔7年重访！德国汉堡市长点赞上海电动出行，期待直航与双向投资再增长",
      "sourceUrl": "https://www.yicai.com/news/103398507.html",
      "publishedAt": "2026-10-19T03:13:32.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "“我上一次到访上海是在2019年，时隔年后7故地重游，上海给了我许多新的印象。”近日，来沪访问的德国汉堡市市长彼得·辰切尔在新闻发布会上告诉第一财经。汉堡市位于德国北部，拥有德国最大港口、欧洲第三大港，同时也是德国的经济重镇，被誉为“德国通往世界的大门”。公开信息显示，1986年，上海和汉堡结为友好城市，时任汉堡市长的多纳尼与中方签署相关文件。近年来，汉堡市的多位政商界高官多次访问中国。在谈及对上",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_787c326b3095",
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
      "title": "通胀与债务双重考验？IMF敦促日本央行：加速加息！",
      "sourceUrl": "https://www.cls.cn/detail/2508007",
      "publishedAt": "2026-10-19T03:11:46.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯（编辑 刘蕊）近日，国际货币基金组织（IMF）亚太部主任克里希纳·斯里尼瓦桑（Krishna Srinivasan）在接受采访时表态，日本央行推进货币政策正常化的举措方向正确，但是倘若日本通胀上行幅度超出预期，日本央行应当加快加息节奏。\n他还呼吁日本尽快明确财政支出资金来源，推出中期财政框架，安抚市场对日本债务风险的担忧。\n日本央行应加快紧缩\n在采访中，斯里尼瓦桑对日本央行持续",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_67379ab3d587",
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
          "score": 92,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_294387429284"
    },
    {
      "title": "债市公告精选 | 福建福晟旗下公司新增重大判决；陕西延长石油子公司逾期本金16.453亿",
      "sourceUrl": "https://www.cls.cn/detail/2507953",
      "publishedAt": "2026-10-19T03:10:44.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "【受托管理人：福建福晟旗下公司新增重大判决】\n受托管理人中泰证券发布公告称，作为福建福晟集团有限公司（下称“福建福晟”）相关公司债券的受托管理人，披露发行人旗下公司亿城集团上海投资有限公司涉及追偿权纠纷的重大判决。上海市浦东新区人民法院判令被告支付原告海航投资集团股份有限公司款项5000万元及相应利息损失。该事项可能影响发行人偿债能力，受托管理人将按规履行后续职责。\n9月，福建福晟集团及时任董事长",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c5a4c1dbcd6a",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 46,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "最新一轮基金投顾资格答辩本周启动，数十家券商分批进行",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032220165444228",
      "publishedAt": "2026-10-19T03:06:27.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "最新一轮基金投顾资格申报审核流程进入关键节点。自8月底申报窗口关闭后，券商已陆续接到监管进行基金投顾答辩通知，本周起将分批次进行答辩，答辩券商约数十家。按照流程，监管先对申报材料进行审核，随后组织券商答辩，材料完整性、业务准备充分度和合规记录是审核重点。答辩环节中，不仅看制度文本是否齐备，业务模式、系统能力、人员配置、风险控制和客户服务安排都会被关注。截至目前，基金投顾试点机构约60家，其中券商2",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c5dab28d3eda",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 76,
      "rawScore": 76,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 0,
        "recency": 15,
        "actionability": 10
      },
      "evidenceBreakdown": {},
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
          "score": 42,
          "reasons": [
            "命中关联主题 2 项",
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
          "score": 73,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "命中关联主题 3 项",
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
      "title": "白银重新跌破“腰斩线”！市场人士：这是全球经济的不安信号",
      "sourceUrl": "https://www.cls.cn/detail/2507976",
      "publishedAt": "2026-10-19T03:05:21.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯（编辑 潇湘）有一种近来市场关注度相对较低的大宗商品，传统上能够为经济走向提供线索——而其价格在上周已再度跌破了年初创下的历史高点以来的“腰斩线”……\nMoney Metals Exchange总裁兼首席执行官Stefan Gleason表示，近来白银价格的走势或许值得人们多加留意——白银对经济景气的敏感度高于黄金，因此它近期的疲软表现，可能是更广泛宏观经济潜在隐患的先行指标。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_17a50407f000",
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
          "score": 45,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "美股AI泡沫论扰动华尔街：市盈率没2000年高，但危险换了一副模样",
      "sourceUrl": "https://www.cls.cn/detail/2507975",
      "publishedAt": "2026-10-19T03:04:28.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯（编辑 黄君芝）华尔街对人工智能（AI）股票泡沫日益增长的担忧，与一个事实相冲突：许多推动这波上涨的科技公司，其估值相对于预期盈利而言，远低于互联网泡沫时期同类公司的估值。\n事实上，与25年前互联网泡沫时期市盈率飙升至明显过热的水平不同，由于市场预期企业盈利将实现爆发式增长，标普500指数和纳斯达克100指数等基准指数的预期市盈率今年有所下降。\n据报道，标普500指数中市值最大",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6fa9b55b74d7",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 6 项"
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
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "金融数据的三个变化",
      "sourceUrl": "https://opinion.caixin.com/2026-10-19/102494676.html",
      "publishedAt": "2026-10-19T03:03:55.000Z",
      "fetchedAt": "2026-10-19T04:46:33.727Z",
      "timeConfidence": "source",
      "summary": "社融投放出现边际改善迹象；社融对金融市场的依赖度继续上升；“流动性充裕”的政策环境继续强化\n       　　9月末，社会融资投放的年化规模连续两个月稳定在33万亿/年的水平，再结合创新高的出口增速，经济运行将出现企稳迹象，除此之外，还有3个变化值得关注。\n　　图1：社融投放年化规模变化情况\n 社融投放出现边际改善迹象\n　　今年前三季度，社融累计投放27.5万亿，较去年同期少了2.6万亿。但按季度",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4cdbb4ffc110",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "【霍尔木兹周报】霍尔木兹海峡袭船事件频发 胡赛与沙特武装对抗加剧",
      "sourceUrl": "https://database.caixin.com/2026-10-19/102494673.html",
      "publishedAt": "2026-10-19T03:03:11.000Z",
      "fetchedAt": "2026-10-19T04:46:33.727Z",
      "timeConfidence": "source",
      "summary": "霍尔木兹海峡海域袭船、油轮触雷事故集中爆发，多艘商船受损起火，全球能源与粮食供应链风险抬升",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_77a7294af5a2",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "noiseCaps": [
        "时间性盘点"
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
      "title": "三季度GDP增速回升至4.5%，投资止跌企稳",
      "sourceUrl": "https://www.yicai.com/news/103398461.html",
      "publishedAt": "2026-10-19T03:02:25.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "国家统计局10月19日发布的最新数据显示，初步核算，前三季度国内生产总值同比增长4.6%。其中，三季度增长4.5%，比二季度回升0.2个百分点。\n\n国家统计局新闻发言人、副局长毛盛勇19日在国务院新闻办发布会上表示，前三季度，国民经济顶住压力保持平稳运行，呈现动能向新、结构向优的发展态势，生产供给较快增长，对外贸易增势良好，就业物价总体稳定，民生保障有力有效，发展韧性和活力持续彰显。\n\n毛盛勇表示",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6792fa2c5a27",
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
      "title": "国家统计局：前三季度内需对经济增长贡献率超过七成",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032215318450823",
      "publishedAt": "2026-10-19T03:01:31.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "10月19日，国家统计局新闻发言人、副局长毛盛勇在国新办新闻发布会上表示，前三季度经济结构持续优化。前三季度内需拉动起到主导作用，对经济增长的贡献率超过七成。其中，最终消费支出贡献率接近五成。制造业增加值占经济的比重比上年同期又提高了0.6个百分点。生产性服务业加快发展，对制造业转型升级发展支撑作用不断强化。（证券时报）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_eaf98d4763a8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 55,
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
      "passesTierGate": true,
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
      "attentionScore": 55,
      "llmScores": [
        52,
        57
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
      "title": "长鑫科技盘中市值蒸发超1900亿元，A股市值跌落到第三",
      "sourceUrl": "https://www.yicai.com/news/103398505.html",
      "publishedAt": "2026-10-19T03:01:23.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "存储厂商长鑫科技（688825.SH）发布三季度业绩预告后，10月19日早盘盘中股价大跌。\n\n截至上午10点40分，长鑫科技跌6.31%，市值蒸发1927亿元，总市值2.87万亿元，市值回到3万亿元以下，在A股市值排行榜中也从第一名滑落至第三名。\n\n\n\n消息面上，长鑫科技10月16日晚间发布了前三季度业绩预告，预计前三季度营收2650亿元至2700亿元，同比增长726%~741.5%，净利润131",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6aa3876fc959",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
          "score": 51,
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
      "title": "中国2026年第三季度GDP增长4.5%，略超预期",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3613718",
      "publishedAt": "2026-10-19T02:59:37.000Z",
      "fetchedAt": "2026-10-19T04:51:24.770Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_903f491aebc1",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "国家统计局：前三季度全国居民人均可支配收入34230元 同比名义增长5.3%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613723",
      "publishedAt": "2026-10-19T02:58:45.000Z",
      "fetchedAt": "2026-10-19T04:51:24.770Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_9e13d76838b7",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "国家统计局：三季度全国规模以上工业产能利用率为73.1% 环比上升0.1个百分点",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613724",
      "publishedAt": "2026-10-19T02:58:34.000Z",
      "fetchedAt": "2026-10-19T04:51:24.770Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_4724c59d37f3",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "国家统计局：1—9月份全国房地产开发投资53364亿元 同比下降20.6%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613729",
      "publishedAt": "2026-10-19T02:58:22.000Z",
      "fetchedAt": "2026-10-19T04:51:24.770Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_dba7855df70b",
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
        "深度研究"
      ],
      "eventId": "event_c7b8ea00d72e"
    },
    {
      "title": "国家统计局：9月份规模以上工业增加值同比增长5.5%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613731",
      "publishedAt": "2026-10-19T02:58:08.000Z",
      "fetchedAt": "2026-10-19T04:51:24.770Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_455852f4c162",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "国家统计局：1—9月份全国固定资产投资同比下降7.2%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613732",
      "publishedAt": "2026-10-19T02:57:10.000Z",
      "fetchedAt": "2026-10-19T04:51:24.770Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_5e0df519260b",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "中信证券：市场对Coreweave担忧过度，新云厂商短期资金缺口“仍可承接”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783896",
      "publishedAt": "2026-10-19T02:55:35.000Z",
      "fetchedAt": "2026-10-19T04:46:34.311Z",
      "timeConfidence": "source",
      "summary": "美债利率上行叠加CoreWeave CDS一度升破1000个基点，市场对Neocloud债务可持续性的担忧快速升温。\n但中信证券10月19日最新报告《如何看待Neocloud的债务问题》认为，这种恐慌押错了时间表：新云厂商的短期融资缺口仍可被现有渠道承接，真正的压力测试要到2028年才会到来——届时AI需求能否持续转化为租金回款，将决定这一轮高杠杆算力扩张的成色。\n报告给出的测算显示，2027年新",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0be435167ba1",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 71,
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "银河证券章俊：经济长期向好基本面稳固，A股核心定价逻辑未改",
      "sourceUrl": "https://www.yicai.com/news/103398462.html",
      "publishedAt": "2026-10-19T02:54:02.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "周一（10月19日）早盘，三大指数集体低开，沪指低开0.6%，深成指和创业板指分别低开0.5%和0.43%。当天，前三季度经济数据最新出炉。据国家统计局官网披露，初步核算，前三季度国内生产总值约107.11万亿，按不变价格计算，同比增长4.6%。“多项稳增长政策效能持续释放，内需潜力逐步挖掘，我国经济长期向好的基本面稳固。”银河证券首席经济学家章俊对第一财经表示。章俊分析称，国内经济方面，新质生产",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fec41667ba9a",
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
          "score": 73,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
        "行业动态"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "三季度GDP同比增速微升至4.5% 名义增速继续走高",
      "sourceUrl": "https://economy.caixin.com/2026-10-19/102494668.html",
      "publishedAt": "2026-10-19T02:52:16.000Z",
      "fetchedAt": "2026-10-19T04:46:33.727Z",
      "timeConfidence": "source",
      "summary": "增速回升主要受第二产业增速加快影响；国际油价、AI产业链价格上涨，带动三季度名义增速升至2022年二季度以来最高，上下游价格体感继续分化，就业仍总体稳定\n       　　【财新网】2026年三季度，在稳增长政策加码、上年基数较低等因素推动下，当季GDP实际同比增速小幅回升至4.5%，国际油价、人工智能（AI）产业链等价格上涨带动名义增速持续回升。\n　　国家统计局10月19日公布的数据显示，前三季",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_176ca9b05d84",
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
      "title": "国家统计局：前三季度内需逐步改善",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032205987533185",
      "publishedAt": "2026-10-19T02:52:02.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "国家统计局新闻发言人、副局长毛盛勇19日在国新办新闻发布会上表示，前三季度内需逐步改善。从国内消费来看，前三季度消费对经济增长贡献率接近50%，达到了46.7%，拉动经济增长2.1个百分点。进口是国内需求的一个重要组成部分，前三季度每个季度的进口增速都保持在20%以上，既有量的增长，也有价格的上升。从价格来看，前三季度居民消费价格同比上涨0.9%。扣除食品和能源的核心CPI同比上涨1.1%，价格温",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a205f890033b",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "国家统计局：1-9月社会消费品零售总额370001亿元 同比增长1.1%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613728",
      "publishedAt": "2026-10-19T02:49:09.000Z",
      "fetchedAt": "2026-10-19T04:51:24.770Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_63f81967657a",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "2026年前三季度，全国居民人均可支配收入34230元，人均工资性收入19653元",
      "sourceUrl": "https://www.cls.cn/detail/2507970",
      "publishedAt": "2026-10-19T02:44:50.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯，国家统计局公布2026年前三季度居民收入和消费支出情况。\n2026年前三季度居民收入和消费支出情况\n一、居民收入情况\n前三季度，全国居民人均可支配收入34230元，比上年同期名义增长5.3%，扣除价格因素，实际增长4.4%。分城乡看，城镇居民人均可支配收入44945元，增长（以下如无特别说明，均为同比名义增长）4.5%，扣除价格因素，实际增长3.6%；农村居民人均可支配收入1",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_600c62bc8304",
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
      "title": "能源内参｜中国限制或禁止出口AI、生物医药和光伏三领域共40项技术；前三季度全国铁路发送旅客37.1亿人次 创历史新高",
      "sourceUrl": "https://www.caixin.com/2026-10-19/102494663.html",
      "publishedAt": "2026-10-19T02:44:46.000Z",
      "fetchedAt": "2026-10-19T04:46:33.727Z",
      "timeConfidence": "source",
      "summary": "新一轮氢能综合试点正式启动，中央财政“先预拨、后清算”；“十五五”中国煤制油产能有望增加千万吨\n       　　【财新网】\n　　中国限制或禁止出口AI、生物医药和光伏三领域共40项技术\n　　财新网10月16日报道，中国对关键技术加强出口管制。当天，中国商务部、科技部发布2026年第48号公告，就修订《中国禁止出口限制出口技术目录》（下称《目录》）公开征求意见。此次公开征求意见涉及拟增列的人工智能",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7314f06fc8dd",
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
        "regDocument": 6,
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
      "title": "特斯拉“飞车”余温犹在，低空经济概念股再掀涨停潮",
      "sourceUrl": "https://www.yicai.com/news/103398437.html",
      "publishedAt": "2026-10-19T02:42:23.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "10月19日早盘，A股低空经济概念股持续走强，东安动力（600178.SH）、润建股份（002929.SZ）、保隆科技（603197.SH）、万丰奥威（002085.SZ）、京城股份（600860.SH）均涨停。\n\n截至上午10时，东安动力涨10.05%，报11.28元/股；润建股份涨10.00%，报46.40元/股；保隆科技涨10.00%，报32.33元/股；万丰奥威涨9.99%，报10.90元",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_00e12652243c",
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
      "title": "国家统计局：前三季度经济增量达到5.7万亿元，为过去五年同期最大增量",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032195784643205",
      "publishedAt": "2026-10-19T02:41:39.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "10月19日，国家统计局新闻发言人、副局长毛盛勇在国新办新闻发布会上表示，前三季度国内生产总值超过107万亿元，同比增长4.6%。这符合我国全年经济预期增长目标。从增量看，前三季度经济增量达到5.7万亿元，是过去五年同期的最大规模增量。毛盛勇表示，根据一些国际机构预测，4.6%的同比增速在全国主要经济体中仍然保持领先。特别是三季度GDP同比增速比二季度回升0.2个百分点。一些国际机构对主要经济体三",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_609255bf3e01",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "中国1-9月份城镇固定资产投资下降7.2%，信息服务业增长20.2%",
      "sourceUrl": "https://wallstreetcn.com/articles/3783893",
      "publishedAt": "2026-10-19T02:40:20.000Z",
      "fetchedAt": "2026-10-19T04:46:34.311Z",
      "timeConfidence": "source",
      "summary": "1-9月，我国高技术产业投资稳步提升，知识产权产品投资快速增长。\n10月19日，国家统计局发布数据显示，1—9月份，全国固定资产投资（不含农户）334115亿元，同比下降7.2%。其中，知识产权产品投资同比增长9.3%。\n\n分领域看，基础设施投资同比下降4.2%，制造业投资下降2.1%，房地产开发投资下降20.6%。\n高技术产业投资同比增长4.9%，其中信息服务业，航空、航天器及设备制造业，电子及",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_88141ad40f80",
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
      "title": "票房｜《生化危机：爆发夜》热度持续 国内首部AI电影即将上映",
      "sourceUrl": "https://www.caixin.com/2026-10-19/102494653.html",
      "publishedAt": "2026-10-19T02:38:39.000Z",
      "fetchedAt": "2026-10-19T04:46:33.728Z",
      "timeConfidence": "source",
      "summary": "自10月底至12月初，大片供应数量不足，提振票房有难度\n       　　【财新网】国家电影专资办数据显示，第41周（10月12日-10月18日），全国电影票房收入2.9亿元，环比下滑60%，属国庆档后正常回落。国庆档新片仍是市场主力，其中在10月5日上映的《生化危机：爆发夜》以1亿元票房成为周冠军。\n　　国庆档票房前三名《神探之痕迹》《什么意思夫妇》《生化危机：爆发夜》仍保持领先，合计贡献上周整",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d827ea572f81",
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
      "title": "「循查五步审慎入市」之“闭门讲座”藏圈套 “保密协议”断后路",
      "sourceUrl": "https://www.yicai.com/news/103398439.html",
      "publishedAt": "2026-10-19T02:36:34.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "茶室闲谈间，保密协议悄然递来，“内部原始股”“专属名额”诱人入局。您正要落笔签约，投教专员及时点破圈套——骗局早已藏进条条框框之中，虚假承诺瞬间暴露无遗。\n\n警惕保密枷锁，避开股权陷阱。合同细读一分，风险远离一寸。细读合同条文、厘清权责边界、警惕信息封锁，审慎签约防骗局！\n\n点击观看动画，带您识破保密合同背后的投资圈套！\n\n免责声明：以上信息仅用于投资者教育，不构成任何投资建议，投资者不应以该等信",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c8e43f04779e",
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
      "title": "A股早盘低开低走，双创指数均跌超2%，AI硬件、芯片半导体再度调整，白酒、银行逆势拉升",
      "sourceUrl": "https://wallstreetcn.com/articles/3783895",
      "publishedAt": "2026-10-19T02:35:55.000Z",
      "fetchedAt": "2026-10-19T04:46:34.311Z",
      "timeConfidence": "source",
      "summary": "10月19日，A股早盘低开低走，三大股指盘中跌幅有所扩大，创业板、科创50双双跌超2%，AI硬件、半导体等再度集体调整，存储芯片、光模块、电路板等概念股普跌，长鑫科技盘初一度下挫8%，“易中天”纷纷走低。白酒、化工、银行等板块逆势拉升。\n香港股市今天因香港重阳节假期休市。债市方面，国债期货普遍走低。商品方面，国内商品期货多数上涨。核心市场走势：\n\nA股：截至发稿，沪指%，深成指%，创业板指%。\n\n",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7df66d8259e6",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 21,
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
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
      "attentionScore": 21,
      "llmScores": [
        20,
        21
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
      "title": "浦项制铁30亿美元低碳铁矿加工厂项目获澳政府批准",
      "sourceUrl": "https://www.36kr.com/newsflashes/4032184376709511",
      "publishedAt": "2026-10-19T02:30:03.000Z",
      "fetchedAt": "2026-10-19T04:49:27.075Z",
      "timeConfidence": "source",
      "summary": "10月19日，据报道，澳大利亚政府已批准钢铁制造商浦项控股公司（Posco Holdings Inc.）在主要出口枢纽建设一座低排放铁矿加工厂的计划。据西澳大利亚州政府称，该项目位于西澳皮尔巴拉地区的黑德兰港，预计耗资约44亿澳元（约合30亿美元）。该州政府已于今年4月批准该项目。该工厂的年产能计划约为200万吨铁。该工厂的最终投资决定（FID）需等待浦项制铁合作伙伴的批准，该合资项目计划于203",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_693082dee6a2",
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
      "title": "10年期收益率单周骤降17基点！AI交易动荡重燃美债避险属性",
      "sourceUrl": "https://wallstreetcn.com/articles/3783880",
      "publishedAt": "2026-10-19T02:29:50.000Z",
      "fetchedAt": "2026-10-19T04:46:34.311Z",
      "timeConfidence": "source",
      "summary": "上周，随着市场对头部AI企业前景的担忧升温，10年期美债收益率单周下行约17个基点，纳斯达克100指数同期重挫5.5%。而上一次收益率与科技股基准指数在同一周内出现如此幅度的同步下跌，还要追溯到2025年4月的关税风暴时期。\n过去数月，美债在股市承压期间几乎失去了传统的对冲功能。如今，AI交易的动荡令这一局面出现转机。\n\nAI裂缝浮现，债市逻辑生变\n推动本轮债市反弹的核心叙事，来自AI交易本身的松",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e9ebdc59dbd5",
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
          "score": 64,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "title": "中国9月工业产出与零售销售双双超预期",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-3613721",
      "publishedAt": "2026-10-19T02:29:38.000Z",
      "fetchedAt": "2026-10-19T04:51:24.770Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_222e2b46e40b",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "欧盟商会：中国是外企的“全球健身房”，但双边贸易不能走向零和博弈",
      "sourceUrl": "https://international.caixin.com/2026-10-19/102494645.html",
      "publishedAt": "2026-10-19T02:28:11.000Z",
      "fetchedAt": "2026-10-19T04:46:33.728Z",
      "timeConfidence": "source",
      "summary": "《建议书》认为，外资企业如果脱离中国这个“健身房”，就难以维持长久竞争力；但双边贸易如果演变成零和博弈，这种经贸关系在本质上将是极其脆弱且不可持续的\n       　　【财新网】“中国在硬件方面做得非常出色，安装了全球体量巨大的风电、光伏等设备，但我们会员面临的核心挑战，是如何真正获得这些巨大工作成果的准入机会。”\n　　由1600多家在华欧洲企业组成的中国欧盟商会近日发布了《欧盟企业在中国建议书2",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8538de4075b9",
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
      "title": "九部门：加快推进科技兴商 深入实施“人工智能+制造”专项行动",
      "sourceUrl": "https://www.cls.cn/detail/2507957",
      "publishedAt": "2026-10-19T02:26:34.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯，商务部等9部门发布关于加快推进科技兴商的意见。其中提到，深入实施“人工智能+制造”专项行动，加快人工智能技术与产品研发、设计、制造、营销深度融合，丰富智能手机、电脑、家居、穿戴设备、机器人等智能商品供给。鼓励基于安全可靠开源操作系统的智能产品研发和应用。加快历史经典产业转型升级，开发经典名品精品。建设中国消费名品方阵，挖掘自主创新、品质高端的消费名品。大力发展科技农业，推动优",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4c37b0e1af97",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 42,
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
      "attentionScore": 42,
      "llmScores": [
        39,
        45
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
      "title": "潘功胜：IMF应加强对发达经济体财政风险及其溢出效应的监督",
      "sourceUrl": "https://economy.caixin.com/2026-10-19/102494640.html",
      "publishedAt": "2026-10-19T02:21:48.000Z",
      "fetchedAt": "2026-10-19T04:46:33.728Z",
      "timeConfidence": "source",
      "summary": "一些国家国债市场大幅波动、人工智能相关资产估值回调风险加剧了金融脆弱性；并呼吁及时实现有意义的基金份额占比调整，增加新兴市场和发展中国家的代表性\n    \n     \n     2026年10月16日至17日，国际货币基金组织在泰国曼谷召开第54届国际货币与金融委员会（IMFC）会议，中国人民银行行长潘功胜出席会议并发言。图：中国人民银行\n    \n   \n       　　【财新网】2026年国",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_15d19456e667",
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
          "score": 57,
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
      "title": "【华尔街原声】美国2026财年财政赤字扩大12% 接近2万亿美元",
      "sourceUrl": "https://database.caixin.com/2026-10-19/102494637.html",
      "publishedAt": "2026-10-19T02:19:21.000Z",
      "fetchedAt": "2026-10-19T04:46:33.728Z",
      "timeConfidence": "source",
      "summary": "财政支出增速超过收入增速，国债利息支出同比增加1440亿美元",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4cf11af8a015",
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
      "title": "国家统计局：1—9月全国房地产开发投资同比下降20.6%",
      "sourceUrl": "https://www.cls.cn/detail/2507914",
      "publishedAt": "2026-10-19T02:15:56.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯，国家统计局数据显示，1—9月份，全国房地产开发投资53364亿元，同比下降20.6%；其中，住宅投资41125亿元，下降20.5%。1—9月份，房地产开发企业房屋施工面积565221万平方米，同比下降12.8%。其中，住宅施工面积392558万平方米，下降13.2%。房屋新开工面积34031万平方米，下降24.9%。其中，住宅新开工面积24774万平方米，下降25.4%。房屋",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fa5e6f15374b",
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
      "title": "香港证监会主席黄天祐谈国际金融中心建设 核心优势在于“市场质素”",
      "sourceUrl": "https://www.cls.cn/detail/2507931",
      "publishedAt": "2026-10-19T02:15:36.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日电（编辑 胡家荣）在近日举行的香港股票分析师协会二十五周年庆典暨“上市公司年度大奖2026”颁奖礼上，香港证券及期货事务监察委员会(简称“香港证监会”)主席黄天祐博士发表了题为《内化诚信 外显价值：共筑新时代金融枢纽》的主题演讲。他深入剖析了分析师与上市公司如何共同打造资本市场最核心的无形资产——信任。\n黄天祐指出，在资本市场中，分析师绝不仅仅是简单的“传话筒”或信息搬运工，而是",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_587e55a45584",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 26,
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
          "score": 92,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "attentionScore": 26,
      "llmScores": [
        25,
        26
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
      "title": "国家统计局：前三季度经济运行总体平稳 高质量发展取得新成效",
      "sourceUrl": "https://www.yicai.com/news/103398395.html",
      "publishedAt": "2026-10-19T02:15:05.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "前三季度，在以习近平同志为核心的党中央坚强领导下，各地区各部门认真贯彻落实党中央、国务院决策部署，坚持稳中求进工作总基调，加大宏观政策调节力度，着力深化改革开放，因地制宜培育壮大新质生产力，有效化解风险隐患，国民经济顶住压力保持平稳运行，呈现动能向新、结构向优的发展态势，生产供给较快增长，对外贸易增势良好，就业物价总体稳定，民生保障有力有效，发展韧性和活力持续彰显。\n\n初步核算，前三季度国内生产总",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ae79725f3de0",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "【华尔街原声】经合组织秘书长：超低融资成本时代已经结束",
      "sourceUrl": "https://database.caixin.com/2026-10-19/102494635.html",
      "publishedAt": "2026-10-19T02:12:53.000Z",
      "fetchedAt": "2026-10-19T04:46:33.728Z",
      "timeConfidence": "source",
      "summary": "全球财政和通胀压力叠加AI投资需求，推动借贷成本上升；中美应加强政策协调，避免经济失衡引发市场动荡",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_991b2d491988",
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
      "title": "国家统计局：前三季度全国固定资产投资 （不含农户）334115亿元 同比下降7.2%",
      "sourceUrl": "https://www.cls.cn/detail/2507908",
      "publishedAt": "2026-10-19T02:08:33.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯，国家统计局公布2026年前三季度国民经济运行情况，前三季度，全国固定资产投资 （不含农户）334115亿元，同比下降7.2%，与1-8月份持平；扣除房地产开发的固定资产投资下降4.2%。分领域看，基础设施投资同比下降4.2%，制造业投资下降2.1%，房地产开发投资下降20.6%。9 月份，固定资产投资（不含农户）环比增长0.07%。\n2026年1—9月份全国固定资产投资基本情",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c4c53c199810",
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
      "title": "借钱难，还是花钱难",
      "sourceUrl": "https://opinion.caixin.com/2026-10-19/102494625.html",
      "publishedAt": "2026-10-19T02:04:53.000Z",
      "fetchedAt": "2026-10-19T04:46:33.728Z",
      "timeConfidence": "source",
      "summary": "美债利率飙升，以AI企业为代表的融资难度加大；中国国债利率不断下行，以财政存款为表征的花钱进度却趋缓\n       　　近期海内外基本面分化加剧，中美利差已经突破历史。一方面，美债利率飙升，以AI企业为代表的融资难度加大；另一方面，中国债利率不断下行，以财政存款为表征的花钱进度却趋缓。借钱难还是花钱难？最终如何收敛？\n借钱谁更难\n　　随着AI投资的前期高投入高折旧与收入后置等矛盾凸显，短期内新增资",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_714c75d52452",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 21,
        "evidence": 0,
        "recency": 15,
        "actionability": 8
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
      "title": "“油价过百”还没涨完？专业分析师：下一步可能是“超级飙升”！",
      "sourceUrl": "https://www.cls.cn/detail/2507897",
      "publishedAt": "2026-10-19T02:04:50.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯（编辑 黄君芝）WTI原油期货价格目前接近每桶100美元，而布伦特原油交易价格目前徘徊在每桶110美元附近。美国投资银行William Blair能源研究分析师Neal Dingmann认为，下一步可能是“超级飙升”（super spike）。\n\n他在接受最新采访时表示，“我们可能会看到像许多大型石油公司CEO们所说的那种超级飙升。我认为这有可能吗？当然有可能。”\nDingma",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_aefd5fc7bd16",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "国家统计局：今年前三季度GDP同比增长4.6%",
      "sourceUrl": "https://www.cls.cn/detail/2507795",
      "publishedAt": "2026-10-19T02:03:34.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯，国家统计局公布2026年前三季度国民经济运行情况，初步核算，前三季度国内生产总值1071071亿元，按不变价格计算，同比增长4.6%。分季度看，一季度国内生产总值同比增长5.0%，二季度增长4.3%，三季度增长4.5%。从环比看，三季度国内生产总值增长1.2%。\n前三季度经济运行总体平稳高质量发展取得新成效\n前三季度，在以习近平同志为核心的党中央坚强领导下，各地区各部门认真贯",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ff59fc3a6803",
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
      "title": "1—9月份，全国房地产开发投资53364亿元，同比下降20.6%",
      "sourceUrl": "https://wallstreetcn.com/articles/3783892",
      "publishedAt": "2026-10-19T02:01:55.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "1—9月份，新建商品房销售面积56483万平方米，同比下降13.2%；其中住宅销售面积下降13.8%。新建商品房销售额53799亿元，下降13.9%；其中住宅销售额下降13.7%。根据住房城乡建设部数据，1—9月份，二手房交易网签面积61746万平方米，同比增长10.7%。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d020edd6ad15",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 63,
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
      "eventId": "event_c7b8ea00d72e"
    },
    {
      "title": "中国9月规模以上工业增加值同比 5.5%，前值 5.2%",
      "sourceUrl": "https://wallstreetcn.com/articles/3783891",
      "publishedAt": "2026-10-19T02:01:17.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "中国9月规模以上工业增加值同比 5.5%，前值 5.2%。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f5ec8d806ec7",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 43,
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
      "attentionScore": 43,
      "llmScores": [
        46,
        39
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
      "title": "中国9月社会消费品零售总额同比 1.1%，前值 0.4%",
      "sourceUrl": "https://wallstreetcn.com/articles/3783890",
      "publishedAt": "2026-10-19T02:01:03.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "中国9月社会消费品零售总额同比 1.1%，前值 0.4%。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_df6aadeda19e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 63,
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
      "title": "国家统计局：前三季度国内生产总值同比增长4.6%",
      "sourceUrl": "https://wallstreetcn.com/articles/3783889",
      "publishedAt": "2026-10-19T02:00:50.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "10月19日，国家统计局公布2026年前三季度国民经济运行情况，初步核算，前三季度国内生产总值1071071亿元，按不变价格计算，同比增长4.6%。分季度看，一季度国内生产总值同比增长5.0%，二季度增长4.3%，三季度增长4.5%。从环比看，三季度国内生产总值增长1.2%。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b507ced96428",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 70,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "「循查五步 审慎入市」第四步：读合同",
      "sourceUrl": "https://www.yicai.com/news/103398327.html",
      "publishedAt": "2026-10-19T01:57:18.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "保密协议藏圈套，原始股诱实为牢；三查三辨明真伪，审慎签约避坑潮。\n\n\n\n免责声明：以上信息仅用于投资者教育，不构成任何投资建议，投资者不应以该等信息取代其独立判断或仅根据该等信息作出决策。中金财富力求该宣传内容的准确可靠，但对其准确性或完整性不作保证，亦不对使用该信息而引发或可能引发的损失承担任何责任。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_31005a38c26e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 51,
      "rawScore": 51,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
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
      "title": "国家统计局：9月一线城市商品住宅销售价格环比继续上涨",
      "sourceUrl": "https://www.yicai.com/news/103398318.html",
      "publishedAt": "2026-10-19T01:52:24.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "10月19日，国家统计局城市司高级统计师杨彩芳解读2026年9月份商品住宅销售价格变动情况统计数据。\n\n2026年9月份，70个大中城市中，一线城市商品住宅销售价格环比继续上涨，二三线城市环比降幅总体收窄，一二三线城市同比降幅均收窄，环比上涨城市个数比上月增加。\n\n一、一线城市商品住宅销售价格环比继续上涨，二三线城市环比降幅总体收窄\n\n9月份，一线城市新建商品住宅销售价格环比上涨0.1%，涨幅与上",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4ca067116d5f",
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
      "eventId": "event_266d386c017b"
    },
    {
      "title": "AI债务定价飙升 市场看到了什么！？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783878",
      "publishedAt": "2026-10-19T01:47:09.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "10月16日，Anthropic的又一张底牌翻了出来：它为一笔代号“北极星”的600亿美元芯片融资，向黑石开出了10%以上的票息。这笔钱要拿去买约1.5吉瓦的谷歌TPU，成了就是迄今最大的一笔芯片融资。 今年6月，Anthropic刚做过一笔类似的芯片融资，代号“大天空”，当时没有博通担保的那档次级债（还款顺序排在后面、风险更高的一层），利率是8.5%。两笔交易的规模和条款不尽相同，可同样是没担保",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_39039a603816",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 59,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "美联储下周加息概率仅16%？华尔街：不应迷信市场定价 结果仍难料",
      "sourceUrl": "https://www.cls.cn/detail/2507873",
      "publishedAt": "2026-10-19T01:40:23.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯（编辑 潇湘）数周以来，投资者和美联储观察人士一直预计，该央行将在下周的议息会议上维持利率不变。但基于最新数据引发的通胀新担忧表明，美联储官员们在10月份的会议上或许并没有预设结果。\n利率期货市场的最新定价显示，美联储料将在10月维持利率不变——认为加息的概率仅为16%。\n\n但许多经济学家认为，10月27日至28日的美联储会议结果或许要胶着得多。一些人依然认为美联储很有可能会加",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4a3ba5bdafe8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 39,
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
      "attentionScore": 39,
      "llmScores": [
        37,
        41
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
      "title": "A股四大指数集体低开，油气、军工板块表现活跃",
      "sourceUrl": "https://www.yicai.com/news/103398246.html",
      "publishedAt": "2026-10-19T01:32:41.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "10月19日，A股四大指数集体低开，上证指数跌0.6%，深成指跌0.5%，创业板指跌0.43%，科创综指跌0.8%。\n\n\n\n盘面上，光通信、玻纤、覆铜板、疫苗、传媒板块调整。汽车、油气、军工板块活跃。市场逾4200股下跌。\n\n个股方面，长鑫科技低开近5%，公司公告，董事长提议回购10亿至20亿元股份。\n\n\n\n光大证券认为，鉴于海外美联储加息预期扰动仍存，A股市场存量博弈特征不改，短线或仍以窄幅震荡",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2ddd0acae0b2",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 28,
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
      "passesTierGate": false,
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
      "attentionScore": 28,
      "llmScores": [
        25,
        30
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
      "title": "世界银行重议油气融资，钱该先投向哪里",
      "sourceUrl": "https://opinion.caixin.com/2026-10-19/102494613.html",
      "publishedAt": "2026-10-19T01:32:35.000Z",
      "fetchedAt": "2026-10-19T04:46:33.728Z",
      "timeConfidence": "source",
      "summary": "美国要求重新开放油气勘探和开采融资，既涉及能源技术选择，也涉及有限的开发资金如何配置。对于资源丰富却长期缺电的国家，资金投向尤其值得关注\n       　　10月14日，美国财政部长贝森特在提交世界银行发展委员会和国际货币与金融委员会的政策声明中，要求世界银行集团正式取消石油和天然气上游项目融资限制。美方认为，国际开发金融机构应尊重借款国选择能源技术的权利，帮助发展中国家获得稳定、可负担的能源。\n",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_44a2f067c365",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
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
          "score": 26,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "国家统计局：9月一线城市商品住宅销售价格环比继续上涨，二三线城市环比降幅总体收窄",
      "sourceUrl": "https://wallstreetcn.com/articles/3783886",
      "publishedAt": "2026-10-19T01:30:47.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "一二三线城市商品住宅销售价格同比降幅均收窄。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4a3344c8a5ee",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 58,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
      "eventId": "event_266d386c017b"
    },
    {
      "title": "今日开盘：两市双双低开 沪指跌幅0.60%",
      "sourceUrl": "https://finance.caixin.com/2026-10-19/102494610.html",
      "publishedAt": "2026-10-19T01:29:53.000Z",
      "fetchedAt": "2026-10-19T04:46:33.728Z",
      "timeConfidence": "source",
      "summary": "沪指开盘报3694.12点，跌幅0.60%；深成指报11743.22点，跌幅0.50%\n       财新网10月19日电:沪指开盘报3694.12点，跌幅0.60%。\n深成指报11743.22点，跌幅0.50%；创业板指报2760.35点，跌幅0.43%；中小板指报7305.23点，跌幅0.59%。\n盘面上，银行领涨，家用电器、公用事业、交通运输、纺织服饰、汽车等板块涨幅居前，电子领跌，煤炭、传",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2a87fd3fd3fa",
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
      "title": "科技股抛售只是虚惊一场？华尔街仍看好AI交易：AI需求依旧强劲！",
      "sourceUrl": "https://www.cls.cn/detail/2507856",
      "publishedAt": "2026-10-19T01:19:23.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯（编辑 卞纯）上周，随着投资者对AI融资风险的担忧加剧，全球科技股遭受冲击，AI概念股惨遭抛售。尽管如此，华尔街分析师仍看好AI交易，认为这是又一次恐慌性抛售，AI需求仍然强劲。\n上周五，纳指跌超2%。周线来看，纳指累计下跌4.48%，创下AI交易“黑暗6月”以来的最大单周跌幅。\n随着美光、闪迪、AMD、英特尔、Lumentum等明星题材股集体下跌，费城半导体指数上周五连续第八",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_407e3a7939e3",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "韩国首尔综指转涨，此前一度跌超3%；纳斯达克100指数期货涨1%",
      "sourceUrl": "https://wallstreetcn.com/articles/3783885",
      "publishedAt": "2026-10-19T01:18:55.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "韩国首尔综指转涨，此前一度跌超3%；纳斯达克100指数期货涨1%。风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投资目标、财务状况或需要。用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，责任自负。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d22ade38d7d5",
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
      "eventId": null
    },
    {
      "title": "财联社汽车早报【10月19日】",
      "sourceUrl": "https://www.cls.cn/detail/2507869",
      "publishedAt": "2026-10-19T01:18:17.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "乘联分会：9月乘用车均价17.1万元 较同期提升0.58万元\n10月18日，乘联分会负责人崔东树发文称，9月乘用车均价17.1万元，均价较同期提升0.58万元。其中，新能源车均价16.4万元，涨价0.9万元，量跌价升，体现新能源车消费的结构性变化，入门级消费被抑制；豪华车均价33.8万元，较同期升0.8万元。9月合资品牌均价17.0万元，较同期基本持平；自主品牌均价12.7万元，较同期增0.8万元",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c2c251c54777",
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
      "title": "外围扰动或使科技股持续承压，低空经济概念成短期热点",
      "sourceUrl": "https://www.cls.cn/detail/2507863",
      "publishedAt": "2026-10-19T01:17:23.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "导读：①外围AI风险扰动，美股科技走弱；不过A股算力硬件前期回调充分，叠加龙头回购，恐慌集中释放后或存修复预期；②受特斯拉新款 Roadster 催化催化，低空经济成为上周五热点，但属于主题炒作，今日板块承接力度是题材情绪观测窗口。\n上周五市场全天冲高回落，大指数涨跌不一，最终沪指收红，深成指与创业板小幅收跌，当前市场尚未出现明确的止跌企稳信号，整体处于震荡磨底阶段，板块结构性博弈特征凸显。\n外围",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6a451b379ab7",
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
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "汇源集团郑重宣告：将与“汇源”品牌切割，不再生产汇源果汁",
      "sourceUrl": "https://www.cls.cn/detail/2507858",
      "publishedAt": "2026-10-19T01:17:07.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯，北京汇源饮料食品集团有限公司10月19日发布严正声明：\n北京汇源食品饮料有限公司重整过程中，重整投资人上海文盛资产管理股份有限公司未能兑现投资承诺，尚有8.5亿元投资款不予支付。已投入的7.5亿元也未按协议约定投入企业经营，致使重整后的北京汇源2023年至2025年只能依靠重整前留存资金维持运转，该行为已构成《重整投资协议》项下的根本违约。汇源集团已就此启动了相关法律程序。\n",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7574cad9da60",
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
      "title": "如何看待降息预期走强？",
      "sourceUrl": "https://wallstreetcn.com/articles/3783881",
      "publishedAt": "2026-10-19T01:13:52.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "中金研究\n\n10月国庆假期后，利率衍生品市场隐含的降息预期迅速走强，已经来到了央行前几轮降息前的水平。降息预期走强的一个原因是，9月下旬以来国债收益率较快下行并未触发央行流动性收紧。我们认为，相对于普降7天逆回购利率和LPR，央行通过政策利率“换锚”、保持资金利率中枢在较低位置实现降息的可能性大一些。如果是后一种降息方式，国债收益率进一步下行的空间可能受限，而且这种降息大概率不影响存量贷款利率、新",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e779532346ae",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 56,
      "rawScore": 74,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
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
          "score": 37,
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
          "score": 37,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 56,
      "llmScores": [
        59,
        53
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
      "title": "Anthropic凭什么值2万亿美元？经济学家看到泡沫，AI大佬看到机会",
      "sourceUrl": "https://wallstreetcn.com/charts/41960050",
      "publishedAt": "2026-10-19T01:03:38.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "Anthropic的2万亿美元估值，到底是天价泡沫，还是被市场严重低估了？\n\n最近，经济学家David Woo就对这一估值提出了质疑。他指出，2万亿美元已经接近台积电和Meta的市值，但这两家公司每年都能赚取数百亿美元，而且拥有强大的竞争壁垒。\n\n相比之下，Anthropic不仅面临OpenAI、谷歌等巨头的激烈竞争，还需要持续投入巨额资金研发模型。按照David Woo的测算，要支撑这样的估值，",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fc742fb3b62e",
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
      "title": "Anthropic IPO前夕设立千亿公益基金：划出5%股份应对AI社会风险",
      "sourceUrl": "https://www.cls.cn/detail/2507837",
      "publishedAt": "2026-10-19T01:01:06.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯（编辑 刘蕊）美东时间周日，美国AI初创独角兽Anthropic在IPO前夕抛出重磅安排：公司宣布将拿出5%股份成立全新公益基金，后续随着估值增长，基金还可获得更多股权。\n若按外界预期的公司上市后估值1.5万亿-2万亿美元，这部分股份的价值为750-1000亿美元。\n在冲刺上市的前夕，Anthropic试图以此举回应AI带来的社会风险争议。\nIPO前夕设立公益基金\n美东时间周日",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_108636e64ed2",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
          "score": 42,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "attentionScore": 30,
      "llmScores": [
        15,
        44
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
      "title": "AI资金流向图：英伟达拿走6900亿，其余499家瓜分3400亿",
      "sourceUrl": "https://wallstreetcn.com/articles/3783876",
      "publishedAt": "2026-10-19T00:58:50.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "摩根士丹利首次绘制出2027年AI资本支出的完整流向图，揭示出一个高度集中的收益结构：在超大规模云服务商1.58万亿美元的支出中，约三分之二的S&amp;P 500受益金额流向英伟达一家，其余499家成分股合计仅分得约3390亿美元。\n摩根士丹利策略师Nick Lentini、Mike Wilson及逾二十位行业分析师联合发布报告《追踪AI 1.6万亿美元资金流向：绘制资本支出繁荣所创造的收入图谱",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6711d53d9d58",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 54,
      "rawScore": 56,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "attentionScore": 54,
      "llmScores": [
        56,
        52
      ],
      "scoredBy": "llm",
      "primaryScene": "privateFundSales",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "债市早参10月19日| 今日金融监管部门将在金融街论坛发声；前三季度经济运行数据将公布",
      "sourceUrl": "https://www.cls.cn/detail/2507735",
      "publishedAt": "2026-10-19T00:58:32.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "债市要闻\n【金融街论坛年会于10月19日在北京开幕】\n由北京市人民政府与中国人民银行、国家金融监督管理总局、中国证券监督管理委员会、新华通讯社、国家外汇管理局共同主办的2026金融街论坛年会将于10月19日在北京开幕。中国人民银行行长潘功胜、金融监管总局局长丁向群、中国证监会主席吴清将出席2026金融街论坛年会并作主题演讲。\n【国家发改委等三部门：充分发挥中央预算内投资、超长期特别国债、地方政府专",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_de324c9c3f4c",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 79,
      "rawScore": 79,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 47,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 38,
          "reasons": [
            "命中关联主题 1 项",
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
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "银行股的中场战事：嫌贵的人越来越多，真正买单的人却无意离席",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3783756",
      "publishedAt": "2026-10-19T00:57:07.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ba4adb91c5ff",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 47,
      "rawScore": 47,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 21,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "霍华德·马克斯：如果所有人都在谈论泡沫，那么泡沫可能还没破",
      "sourceUrl": "https://wallstreetcn.com/articles/3783879",
      "publishedAt": "2026-10-19T00:53:55.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "当越来越多的亿万富翁和市场人士高呼AI驱动的股市正在形成泡沫，橡树资本联席主席霍华德·马克斯（Howard Marks）却给出了一个反直觉的判断：正因为所有人都在谈论泡沫，泡沫或许还远未到破裂的时刻。\n据彭博社10月18日报道，霍华德·马克斯在接受采访时表示，他目前并不认为市场已经达到真正意义上的泡沫状态。他的核心逻辑在于：泡沫的本质特征之一是投资者对风险的“浑然不觉”（obliviousness",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_df80ab9d536e",
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
      "title": "地产或正迈向“中期逻辑”",
      "sourceUrl": "https://wallstreetcn.com/articles/3783877",
      "publishedAt": "2026-10-19T00:46:39.000Z",
      "fetchedAt": "2026-10-19T04:46:34.312Z",
      "timeConfidence": "source",
      "summary": "摘要 8月底以来，中央连续2次出台全国性地产政策：828新政宣告行业销售制度正式转轨，9月29日启动近年来首次中央贴息居民按揭。我们认为两轮政策殊途同归，指向房地产行业更广义的企稳，全国房价更大范围的企稳条件正逐步具备。 供给端：未来两年供给预计持续收缩 828政策后房企拿地能力减弱，未来两年供给端或将持续收紧。828新政重构房地产商业模式，截至10月11日，北京、上海、广州、武汉、天津、杭州等地",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_04808066f23a",
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
      "title": "T早报｜DeepSeek发布V4.1 Flash新版本；中国限制或禁止出口AI，光伏，生物医药三领域40项技术；特朗普否认白宫限制乌克兰使用星链",
      "sourceUrl": "https://www.caixin.com/2026-10-19/102494598.html",
      "publishedAt": "2026-10-19T00:40:48.000Z",
      "fetchedAt": "2026-10-19T04:46:33.728Z",
      "timeConfidence": "source",
      "summary": "推荐：演员吴越怒斥AI换脸带货 涉事账号被封；Meta删除允许AI抓取新闻数据的条款；韩国财长称2027年半导体持续繁荣\n       　　【财新网】\n　　Meta删除允许AI抓取新闻数据的条款\n　　近日，Meta在更新商业使用条款时新增表述，默认用户允许Meta使用自动化软件抓取与其关联产品、域名、网页上面的更新内容，用以研究包括AI在内的Meta相关产品，该条款将于10月30日生效。该条款更新",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_41dfe47a9405",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "title": "盘前必读丨日韩股市集体低开；AI产业链公司扎堆预喜",
      "sourceUrl": "https://www.yicai.com/news/103398093.html",
      "publishedAt": "2026-10-19T00:07:53.000Z",
      "fetchedAt": "2026-10-19T04:47:36.530Z",
      "timeConfidence": "source",
      "summary": "【财经日历】\n\n国新办就前三季度国民经济运行情况举行新闻发布会\n\n2026金融街论坛年会(北京，10/19-10/22)\n\n国新办就加快推进科技兴商有关情况举行新闻发布会\n\n国家统计局公布70城住宅销售价格月度报告\n\n东兴证券、信达证券A股股票终止上市\n\n2026中国汽车供应链大会(开封，10/19-10/21)\n\n交易提示：港股休市\n\n新股申购：皇冠新材\n\n\n\n►►国务院总理李强10月16日主持",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2668208da5aa",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
          "score": 17,
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
          "score": 35,
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
      "title": "人民日报调查四川多县用硫磺熏笋出售：去年一县查获1900公斤仅罚500元",
      "sourceUrl": "https://www.cls.cn/detail/2507799",
      "publishedAt": "2026-10-18T23:58:10.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "10月12日，四川马边县某竹笋收购商向记者展示使用硫磺熏制过的鲜笋。 游天燚摄\n编辑同志：\n我们是四川乐山马边彝族自治县和泸州古蔺县、叙永县的居民。又到了笋子收获的季节。一些人为了保鲜、卖相好，用硫磺熏鲜竹笋。硫磺熏鲜竹笋既可能对消费者身体健康造成损害，又严重污染空气。我们多次向有关部门反映，都没得到有效处理。\n四川乐山市巫女士、泸州市王先生\n鲜竹笋可以用硫磺熏制吗？根据《食品安全国家标准  食品",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_68c615c7af4c",
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
      "title": "券商晨会精华：市场调整接近尾声",
      "sourceUrl": "https://www.cls.cn/detail/2507792",
      "publishedAt": "2026-10-18T23:56:25.000Z",
      "fetchedAt": "2026-10-19T04:49:26.363Z",
      "timeConfidence": "source",
      "summary": "财联社10月19日讯，上周五，三大指数涨跌不一，沪指收红，创业板指尾盘跌幅有所收窄。尾盘部分宽基ETF再度放量。沪深两市成交额1.56万亿。盘面上，军工、低空经济、碳纤维等板块表现活跃。下跌方面，PCB、CRO等概念走弱。截至收盘，沪指涨0.24%，深成指跌0.12%，创业板指跌0.39%。\n中信证券认为，市场调整接近尾声；东方财富认为，稳住阵脚，反弹可期；中信建投认为，从流动性到通胀。\n中信证券",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bad29e97bb90",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "命中关联主题 2 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "泽连斯基称与美方代表讨论下一步外交行动",
      "sourceUrl": "https://www.cls.cn/detail/2507736",
      "publishedAt": "2026-10-18T15:40:57.000Z",
      "fetchedAt": "2026-10-18T15:59:02.530Z",
      "timeConfidence": "source",
      "summary": "【泽连斯基称与美方代表讨论下一步外交行动】财联社10月18日电，乌克兰总统泽连斯基18日表示，他已与美国总统特使威特科夫和库什纳通话，讨论乌美团队在美国佛罗里达州会晤的成果及下一步外交行动。泽连斯基说，乌方持续向合作伙伴通报袭击情况和防空需求，并强调美国的立场对相关进程至关重要。他表示，乌克兰正在尽一切努力，以确保美国的立场坚定。乌克兰将继续以建设性态度推进外交工作，争取取得切实成果。 (央视新闻",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_48cf0b6e5ee7",
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
      "title": "俄副总理：俄柴油将在签署合同后15-20天进入美市场",
      "sourceUrl": "https://www.cls.cn/detail/2507734",
      "publishedAt": "2026-10-18T15:02:59.000Z",
      "fetchedAt": "2026-10-18T15:59:02.530Z",
      "timeConfidence": "source",
      "summary": "【俄副总理：俄柴油将在签署合同后15-20天进入美市场】财联社10月18日电，分管能源工作的俄罗斯副总理诺瓦克表示，俄罗斯柴油燃料将在合同签署后15至20天内进入美国市场。诺瓦克称，美国能源部已经确定了将作为交易方和买方的公司。目前正在就商业条款进行谈判，实际上就是在谈签署合同的事。合同一签，燃料将在15-20天内送达美国市场。对于更近的国家，时间会更短。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_4429b28e3848",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "AI技术深入生产环境，广西产业换挡提速 | 活力中国调研行",
      "sourceUrl": "https://www.yicai.com/news/103398019.html",
      "publishedAt": "2026-10-18T14:37:35.000Z",
      "fetchedAt": "2026-10-18T15:58:49.137Z",
      "timeConfidence": "source",
      "summary": "广西制造不仅可以造汽车、造机械，还能生产更为精密、附加值更高的产品。在广西的工业重镇柳州，广西柳工机械股份有限公司（下称“柳工”）旗下的挖掘机智慧工厂每12分半钟就有一台挖掘机下线，该工厂单月产量已突破1500台。AI技术给广西产业带来的价值，不只是产量和效益的提升，更在于助力当地产业结构向高端化的转型升级。\n\n在2026年“活力中国调研行”广西主题采访活动中，第一财经记者了解到，从产线装配、炼钢",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5cc93fab761c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 16,
          "reasons": [
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "壹快评｜调离县长之后，“耻辱合影”事件留下三道教育思考题",
      "sourceUrl": "https://www.yicai.com/news/103398015.html",
      "publishedAt": "2026-10-18T14:37:26.000Z",
      "fetchedAt": "2026-10-18T15:58:49.137Z",
      "timeConfidence": "source",
      "summary": "要推动人才观、教师观、教育观更新，办出更好的教育。10月16日，四川凉山州通报雷波县“耻辱合影”事件的处理结果：提议合影的县长被给予党内警告处分、调离岗位，县委分管负责人被诫勉，县教体局局长被政务警告并调离教育系统。次日，雷波县召开干部大会，提名免去郑洪波县长职务，新任县长人选同步到位。事情源于8月26日召开的雷波县秋季教育行政会。会上，一批班级平均分15分以下的初中教师、30分以下的小学教师被“",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2d6d6a214596",
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
      "title": "当前市场给出低估信号，知名券商首席最新研判",
      "sourceUrl": "https://www.cls.cn/detail/2507731",
      "publishedAt": "2026-10-18T14:05:26.000Z",
      "fetchedAt": "2026-10-18T15:59:23.946Z",
      "timeConfidence": "source",
      "summary": "财联社10月18日讯（记者 林坚）随着进入四季度，宏观数据密集披露，市场对经济形势与资本市场走向的讨论再度升温。\n当前经济中哪些重要因素最被低估？政策协同如何传导至经济？人民币走强与出口韧性又释放了哪些信号？财联社近日采访东方证券研究所宏观与战略团队、华创证券首席经济学家张瑜、浙商证券宏观首席分析师林成炜，并梳理了最新研判。\n目前来看，三家券商首席及团队的核心观点在于，经济正从供给端修复走向内需改",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_63bb8aad259d",
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
          "score": 53,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 2 项"
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
      "title": "财联社10月18日电，美国财长贝森特表示，美国能源危机持续，战争结束后通胀将会放缓。",
      "sourceUrl": "https://www.cls.cn/detail/2507729",
      "publishedAt": "2026-10-18T13:49:24.000Z",
      "fetchedAt": "2026-10-18T15:59:02.531Z",
      "timeConfidence": "source",
      "summary": "财联社10月18日电，美国财长贝森特表示，美国能源危机持续，战争结束后通胀将会放缓。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_1fec1fb047a7",
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
      "title": "下周资本市场大事提醒： 金融街论坛明日开幕 潘功胜、丁向群、吴清、朱鹤新将作主题演讲",
      "sourceUrl": "https://www.cls.cn/detail/2507728",
      "publishedAt": "2026-10-18T13:46:09.000Z",
      "fetchedAt": "2026-10-18T15:59:02.531Z",
      "timeConfidence": "source",
      "summary": "【下周资本市场大事提醒： 金融街论坛明日开幕 潘功胜、丁向群、吴清、朱鹤新将作主题演讲】\n1、国家统计局将于10月19日公布三季度GDP、9月工业增加值、固定资产投资、社零等经济数据。同日，国家统计局还将发布70个大中城市商品住宅销售价格指数月度报告。\n2、10月20日，1年、5年期贷款市场报价利率(LPR)将公布。9月1年期LPR为3.0%，5年期以上LPR为3.5%，已连续16个月保持平稳运行",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8c3f83b86fe3",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 32,
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
          "score": 25,
          "reasons": [
            "命中关联主题 1 项"
          ]
        },
        "marketEducation": {
          "score": 91,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_6c27fdb562ef",
      "attentionScore": 32,
      "llmScores": [
        28,
        35
      ],
      "scoredBy": "llm"
    },
    {
      "title": "何立峰会见中投公司国际咨询委员会委员",
      "sourceUrl": "https://wallstreetcn.com/livenews/3180675",
      "publishedAt": "2026-10-18T13:31:07.000Z",
      "fetchedAt": "2026-10-18T15:58:33.818Z",
      "timeConfidence": "source",
      "summary": "中共中央政治局委员、国务院副总理何立峰10月18日晚在钓鱼台国宾馆会见中投公司国际咨询委员会委员。\n\n何立峰表示，当前中国经济总体平稳、向新向优。“十五五”时期，中国将坚定不移扩大高水平对外开放，深化金融体制改革，希望委员们继续为中国改革开放和中投公司发展建言献策，持续发挥桥梁纽带作用，积极支持中国经济发展和中外交流合作。\n\n中投公司国际咨询委员会委员表示，对中国经济前景和金融市场发展充满信心，愿",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f96d02a9a46a",
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
      "title": "潘晓东会见中国美国商会会长何迈可一行",
      "sourceUrl": "https://www.cls.cn/detail/2507724",
      "publishedAt": "2026-10-18T13:18:31.000Z",
      "fetchedAt": "2026-10-18T15:59:02.531Z",
      "timeConfidence": "source",
      "summary": "【潘晓东会见中国美国商会会长何迈可一行】财联社10月18日电，国家市场监督管理总局副局长潘晓东会见中国美国商会（AmCham China）会长何迈可（Michael Hart）及其会员企业一行。双方围绕消费者权益保护、公平竞争审查、广告监管等方面议题进行了交流。潘晓东表示，市场监管总局愿与中国美国商会一道，共同落实好两国元首近期达成的重要共识，为包括美资企业在内的外企在华投资兴业营造良好营商环境。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_d3c3193954f6",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "中信建投：宽基ETF持续净申购有望为后市核心指数的企稳修复提供支持",
      "sourceUrl": "https://www.cls.cn/detail/2507721",
      "publishedAt": "2026-10-18T13:10:50.000Z",
      "fetchedAt": "2026-10-18T15:59:02.531Z",
      "timeConfidence": "source",
      "summary": "【中信建投：宽基ETF持续净申购有望为后市核心指数的企稳修复提供支持】财联社10月18日电，中信建投研报指出，截至10月16日，宽基ETF实现连续10日净流入，区间累计流入金额超过1400亿元。短期看，近10个交易日宽基ETF的大额、快速流入已经发挥出稳定市场情绪，保护市场流动性等积极作用。这一作用能否得以延续并形成中长期支撑，需要将资金流向与价格表现结合起来：若沪深300与双创ETF在市场震荡中",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_3f9fbbeeb0d9",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 69,
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "尾盘再现百亿资金扫货，宽基ETF动向浮现托底信号",
      "sourceUrl": "https://www.yicai.com/news/103398000.html",
      "publishedAt": "2026-10-18T13:03:41.000Z",
      "fetchedAt": "2026-10-18T15:58:49.137Z",
      "timeConfidence": "source",
      "summary": "多重托底力量正同步集结。市场在快速回调后，一些资金信号正在浮现。\n\n10月15日至16日，上证指数在3700点附近反复拉锯，多个重要指数盘中刷新近一年低点。市场震荡下探之际，一股逆势资金借道宽基ETF悄然进场，部分头部宽基ETF尾盘出现百亿级成交，陡然抬升的成交曲线打破盘面沉闷。\n\n数据显示，15日易方达沪深300ETF尾盘半小时成交超173亿元，全天净流入188亿元；资金接力效应在次日上演，资金",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_00ebe2f19b2d",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
        "行情播报"
      ],
      "tierGate": 60,
      "passesTierGate": false,
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
      "eventId": null
    },
    {
      "title": "关税与地缘风云下的外贸新图景：先进制造产业链上下游协同",
      "sourceUrl": "https://www.yicai.com/news/103397998.html",
      "publishedAt": "2026-10-18T13:02:00.000Z",
      "fetchedAt": "2026-10-18T15:58:49.137Z",
      "timeConfidence": "source",
      "summary": "广交会第一期以“先进制造”为主题，展位超2.5万个，1.2万家企业集中展示人工智能（AI）、绿色低碳等前沿成果。杰瑞米是一位欧洲资深采购商，他记得30年前第一次来广交会的情景，那时候他还是头发茂盛的年轻小伙。\n\n站在火爆到竖起限流提示牌的“服务机器人专区”外，他对第一财经记者感叹，今年最大的感受是，作为观测中国制造业的重要窗口，通过广交会可以看到，中国制造业又升级了。\n\n10月15日至19日举办的",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4e4a0e347500",
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
      "title": "中信建投：市场情绪变化是近期债市波动主因",
      "sourceUrl": "https://www.cls.cn/detail/2507718",
      "publishedAt": "2026-10-18T12:53:53.000Z",
      "fetchedAt": "2026-10-18T15:59:02.531Z",
      "timeConfidence": "source",
      "summary": "【中信建投：市场情绪变化是近期债市波动主因】财联社10月18日电，中信建投发布研报指出，近期以长债为代表的债券市场出现了一定幅度的波动，但基本面格局及宏观政策未观察到明显变化，暂未发现推动债市收益率下行的增量结构性因素。因此，判断市场情绪变化是本次波动的主因，权益市场短期走弱带来的避险情绪发酵和资金转移是本轮走强的核心驱动力，央行投放阶段性增加带来的宽松预期则同这一主因形成了少许共振，放大了市场波",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0597eeae7234",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 43,
          "reasons": [
            "命中关联主题 3 项"
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
      "title": "鼎泰高科：董事长提议回购5000万元至1亿元A股股份",
      "sourceUrl": "https://www.cls.cn/detail/2507717",
      "publishedAt": "2026-10-18T12:48:30.000Z",
      "fetchedAt": "2026-10-18T15:59:02.531Z",
      "timeConfidence": "source",
      "summary": "【鼎泰高科：董事长提议回购5000万元至1亿元A股股份】财联社10月18日电，鼎泰高科(301377.SZ)公告称，公司实际控制人之一兼董事长王馨提议公司以集中竞价交易方式回购部分A股股票，回购资金总额不低于5000万元且不超过1亿元，回购股份将用于员工持股计划或股权激励。回购价格不高于董事会审议通过回购决议前30个交易日股票交易均价的150%，资金来源为自有资金或自筹资金。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_7a65363ab7ad",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "158份三季报预告出炉，科技龙头业绩高增换不来股价上涨？",
      "sourceUrl": "https://www.yicai.com/news/103397988.html",
      "publishedAt": "2026-10-18T12:46:34.000Z",
      "fetchedAt": "2026-10-18T15:58:49.137Z",
      "timeConfidence": "source",
      "summary": "158 份三季报预告后的科技股筹码之困，谁在借利好兑现？A股三季报披露正当时，截至10月18日午后，已有158家公司披露2026年三季报业绩预告，其中预增、略增等报喜公司合计119家，占比逾七成，PCB、半导体、光模块、存储等本轮领涨的科技赛道成为预增主力军。沪电股份（002463.SZ）、海光信息（688041.SH）、源杰科技（688498.SH）等龙头前三季度净利润动辄翻倍乃至数倍增长。\n\n",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_34b373b99eb0",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 46,
      "rawScore": 59,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "eventId": null,
      "attentionScore": 46,
      "llmScores": [
        52,
        39
      ],
      "scoredBy": "llm"
    },
    {
      "title": "A股公司再掀护盘行动，单周超30亿回购增持",
      "sourceUrl": "https://www.yicai.com/news/103397985.html",
      "publishedAt": "2026-10-18T12:46:26.000Z",
      "fetchedAt": "2026-10-18T15:58:49.138Z",
      "timeConfidence": "source",
      "summary": "长鑫科技、“易中天”等龙头股密集出手回购。A股市场继续回调、沪指在3800点拉锯之际，上市公司再度掀起回购增持潮。\n\nWind统计显示，上周（10月12日至16日），长鑫科技（688825.SH）、温氏股份（300498.SZ）等十余家A股公司披露了回购预案或相关股东提议，同期，震有科技（688418.SH）等8家公司披露了股东增持公告。规模上，仅统计回购金额居前的公司，当周，十余家公司的累计回购",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_03213b6bd1f8",
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
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "沙特阿拉伯股市上涨；截至收盘沙特阿拉伯TASI指数上涨0.82%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3613535",
      "publishedAt": "2026-10-18T12:45:13.000Z",
      "fetchedAt": "2026-10-18T15:59:33.367Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_d0b3afaf489e",
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
      "title": "从“准入”到“价值创造”：国际资管巨头共议中国金融市场新范式",
      "sourceUrl": "https://www.yicai.com/news/103397984.html",
      "publishedAt": "2026-10-18T12:34:57.000Z",
      "fetchedAt": "2026-10-18T12:39:24.991Z",
      "timeConfidence": "source",
      "summary": "真正的分水岭在于治理、责任和人类判断。高实际利率可能持续更久、数据中心任何一环中断都可能传导至全球业务、到2030年AI数据中心相关投资预计达5万亿美元——在通胀韧性、气候风险与AI资本开支交织下，全球资管业正在重构风险坐标系。\n\n近日，全球财富管理论坛·2026上海苏河湾大会在上海举行。来自友邦、瑞士再保险、资本集团、摩根士丹利投资管理、瑞士百达等机构高管，分别围绕“国际合作与金融业高水平开放”",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5c4b92baee87",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 70,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 58,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "命中关联主题 2 项"
          ]
        },
        "marketEducation": {
          "score": 62,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "俄外长：俄罗斯与海湾国家的贸易额增长45%",
      "sourceUrl": "https://www.cls.cn/detail/2507716",
      "publishedAt": "2026-10-18T12:32:37.000Z",
      "fetchedAt": "2026-10-18T12:40:05.056Z",
      "timeConfidence": "source",
      "summary": "【俄外长：俄罗斯与海湾国家的贸易额增长45%】财联社10月18日电，俄罗斯外交部长谢尔盖·拉夫罗夫称，去年俄罗斯联邦与海湾阿拉伯国家合作委员会（GCC）成员国的贸易总额实现了显著增长，增幅达45%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_fc9bb3e5722c",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "【风口研报·公司】平陆运河通航叠加204亿改扩建，这家路产龙头主要承接集疏运增量车流，当前估值仅0.9倍PB、大股东增持与公司回购并行；周策略：底部区域逐步清...",
      "sourceUrl": "https://www.cls.cn/detail/2507615",
      "publishedAt": "2026-10-18T12:24:49.000Z",
      "fetchedAt": "2026-10-18T12:40:05.056Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_313965ac369f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 54,
      "rawScore": 54,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
        "evidence": 5,
        "recency": 13,
        "actionability": 8
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
          "score": 41,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "业务影响较高"
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
      "title": "一财社论：养老服务要“兜得住”“惠得实”“放得活”",
      "sourceUrl": "https://www.yicai.com/news/103397981.html",
      "publishedAt": "2026-10-18T12:22:50.000Z",
      "fetchedAt": "2026-10-18T12:39:24.991Z",
      "timeConfidence": "source",
      "summary": "重要的是针对不同养老群体的切实需要采取差别化的政策支持措施。日前，国家发改委、民政部、国家卫健委等三部门联合印发了《关于进一步完善价格形成机制 推动普惠养老服务提质扩面的指导意见》（下称《指导意见》）。《指导意见》强调，要坚持分类施策、统筹兼顾，通过清晰界定机构范围、分类完善价格形成机制等措施，促进养老服务事业和产业协同发展。\n\n根据《2025年度国家老龄事业发展公报》，截至2025年末，全国60",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_11602cb4988a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 42,
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "id": "news_f46026db958a",
      "title": "聚焦十五五关键期共话健康险高质量发展",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261016/6186.html",
      "publishedAt": "2026-10-16T22:17:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "第三届四明保险论坛“以人为本，推动健康险高质量发展”主题活动在甬举办",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 52,
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
          "score": 54,
          "reasons": [
            "命中保险运营核心主题 2 项"
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
      "eventId": null,
      "timeConfidence": "source",
      "attentionScore": 16,
      "llmScores": [
        13,
        19
      ],
      "scoredBy": "llm"
    },
    {
      "id": "news_65af160cf49b",
      "title": "新华保险史上最大规模荣耀峰会保险服务投资三端密集新动作赋能代理人升级",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261016/6184.html",
      "publishedAt": "2026-10-16T11:52:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "将公司资源转化为代理人展业工具",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 72,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
        "可转化为客户沟通或投研关注"
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
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "id": "news_15f3658971ef",
      "title": "40余家保险机构齐聚实地探访网红小城内蒙古算电新基建正迎来最适配的长期资金",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/yc/20261016/6183.html",
      "publishedAt": "2026-10-16T11:40:00.000Z",
      "sourceName": "慧保天下",
      "category": "regulatory",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "2026“险资入蒙”暨算电协同产融对接会在呼和浩特举行",
      "contentTags": [
        "官方监管"
      ],
      "scoreDetails": {},
      "score": 52,
      "original": {
        "huibaoxianCategory": "政策解读"
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
      "eventId": null,
      "timeConfidence": "source",
      "attentionScore": 20,
      "llmScores": [
        19,
        20
      ],
      "scoredBy": "llm"
    },
    {
      "id": "news_2de9d420cef2",
      "title": "中国人寿坚守长期主义构筑跨周期核心竞争优势",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261015/6182.html",
      "publishedAt": "2026-10-15T15:22:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "为中国保险行业高质量发展贡献更多国寿力量",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 7,
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
      "timeConfidence": "source",
      "attentionScore": 7,
      "llmScores": [
        10,
        3
      ],
      "scoredBy": "llm"
    },
    {
      "title": "吴清主席会见阿联酋穆巴达拉投资公司首席执行官兼董事总经理哈勒敦",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c106311/c7664121/content.shtml",
      "publishedAt": "2026-10-12T03:08:48.000Z",
      "fetchedAt": "2026-10-12T18:03:53.204Z",
      "timeConfidence": "source",
      "summary": "2026年10月12日，中国证监会主席吴清在京会见了阿联酋主权投资机构穆巴达拉投资公司首席执行官兼董事总经理哈勒敦（Khaldoon Khalifa Al Mubarak）。双方就国际经济金融形势、加强中阿资本市场合作、扩大在华投资等议题交换了意见。1.jpg",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_0c68188ecbdf",
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
      "eventId": "event_0e47dee32e28"
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
      "score": 74,
      "rawScore": 74,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 12,
        "recency": 7,
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
          "score": 46,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 81,
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
      "eventId": null,
      "attentionScore": 76,
      "llmScores": [
        76,
        76
      ],
      "scoredBy": "llm"
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
      "score": 69,
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
      "passesTierGate": false,
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
      "selectedForFeatured": false,
      "contentTags": [
        "观点"
      ],
      "eventId": null,
      "attentionScore": 62,
      "llmScores": [
        60,
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
      "attentionScore": 42,
      "llmScores": [
        30,
        53
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
      "attentionScore": 33,
      "llmScores": [
        32,
        34
      ],
      "scoredBy": "llm"
    }
  ],
  "curationStats": {
    "scenes": {
      "insurance": 71,
      "privateFundSales": 8,
      "marketEducation": 71
    },
    "featured": 24,
    "gate": {
      "passed": 30,
      "total": 150,
      "byTier": {
        "S2": {
          "total": 78,
          "passed": 18
        },
        "S3": {
          "total": 70,
          "passed": 11
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
      "news_739510b46d56",
      "news_15f3658971ef",
      "news_0c68188ecbdf",
      "news_0f3e71a2648c"
    ],
    "products": [],
    "industry": [
      "news_bf7e3f93d69f",
      "news_7fa155b04c37",
      "news_7140f43d44c3",
      "news_76395e6b62f4",
      "news_6cc51213656e",
      "news_8b7de7db7c9c",
      "news_c309360e9767",
      "news_0dd99c348dc1",
      "news_39fe46fe53e2",
      "news_8493536dd517"
    ],
    "research": [
      "news_4e18ddca912e",
      "news_316842384872",
      "news_f06d589e3790",
      "news_90a64c6ac1bf",
      "news_b0c8044bf0c3",
      "news_67379ab3d587",
      "news_c5a4c1dbcd6a",
      "news_17a50407f000",
      "news_6fa9b55b74d7",
      "news_903f491aebc1"
    ],
    "insights": [
      "news_fe6b29340eb1",
      "news_4c51d6fb9521",
      "news_0226a7effdd2",
      "news_f2aeb75443a7",
      "news_c49920e9f2b5",
      "news_912e35ffb388",
      "news_dca9950f844a",
      "news_c5dab28d3eda",
      "news_eaf98d4763a8",
      "news_a205f890033b"
    ]
  },
  "flashes": [
    {
      "id": "news_bf7e3f93d69f",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_739510b46d56",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_7fa155b04c37",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_7140f43d44c3",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_76395e6b62f4",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_fe6b29340eb1",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_4e18ddca912e",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_6cc51213656e",
      "dotClass": "flash-dot-blue"
    }
  ],
  "keywordIndex": {
    "保险": [
      "news_739510b46d56",
      "news_5c4b92baee87",
      "news_f46026db958a",
      "news_65af160cf49b",
      "news_15f3658971ef",
      "news_2de9d420cef2",
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
    "再保险": [
      "news_5c4b92baee87"
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
      "news_2f93f60a31cc",
      "news_11602cb4988a"
    ],
    "养老金": [
      "news_2f93f60a31cc"
    ],
    "年金": [
      "news_2f93f60a31cc"
    ],
    "健康险": [
      "news_f46026db958a"
    ],
    "重疾险": [
      "news_b88af30fc3f3"
    ],
    "寿险": [
      "news_bf7e3f93d69f",
      "news_5c5f98083245"
    ],
    "财险": [
      "news_90694c744974"
    ],
    "医疗险": [
      "news_90694c744974",
      "news_9f3b623176ea"
    ],
    "国寿": [
      "news_2de9d420cef2"
    ],
    "人保": [
      "news_bf7e3f93d69f"
    ],
    "新华保险": [
      "news_65af160cf49b"
    ],
    "友邦": [
      "news_5c4b92baee87"
    ],
    "银行": [
      "news_4e18ddca912e",
      "news_f06d589e3790",
      "news_b0c8044bf0c3",
      "news_882b652f9cdf",
      "news_82a49203aabf",
      "news_4c51d6fb9521",
      "news_0226a7effdd2",
      "news_c49920e9f2b5",
      "news_7df66d8259e6",
      "news_15d19456e667",
      "news_aefd5fc7bd16",
      "news_44a2f067c365",
      "news_2a87fd3fd3fa",
      "news_de324c9c3f4c",
      "news_ba4adb91c5ff"
    ],
    "央行": [
      "news_82a49203aabf",
      "news_67379ab3d587",
      "news_4a3ba5bdafe8",
      "news_e779532346ae",
      "news_0597eeae7234"
    ],
    "利率": [
      "news_4e18ddca912e",
      "news_0be435167ba1",
      "news_714c75d52452",
      "news_39039a603816",
      "news_4a3ba5bdafe8",
      "news_e779532346ae",
      "news_8c3f83b86fe3",
      "news_5c4b92baee87",
      "news_b8359ae20a15"
    ],
    "贷款利率": [
      "news_e779532346ae"
    ],
    "LPR": [
      "news_e779532346ae",
      "news_8c3f83b86fe3"
    ],
    "逆回购": [
      "news_e779532346ae"
    ],
    "降息": [
      "news_e779532346ae"
    ],
    "加息": [
      "news_754ee7ae6db0",
      "news_67379ab3d587",
      "news_4a3ba5bdafe8",
      "news_2ddd0acae0b2"
    ],
    "流动性": [
      "news_4cdbb4ffc110",
      "news_e779532346ae",
      "news_bad29e97bb90",
      "news_3f9fbbeeb0d9"
    ],
    "按揭": [
      "news_04808066f23a"
    ],
    "存款": [
      "news_4e18ddca912e",
      "news_714c75d52452"
    ],
    "理财": [
      "news_4e18ddca912e"
    ],
    "股票": [
      "news_6fa9b55b74d7",
      "news_587e55a45584",
      "news_2668208da5aa",
      "news_7a65363ab7ad"
    ],
    "A股": [
      "news_882b652f9cdf",
      "news_c49920e9f2b5",
      "news_6aa3876fc959",
      "news_fec41667ba9a",
      "news_00e12652243c",
      "news_7df66d8259e6",
      "news_2ddd0acae0b2",
      "news_6a451b379ab7",
      "news_2668208da5aa",
      "news_7a65363ab7ad",
      "news_34b373b99eb0",
      "news_03213b6bd1f8"
    ],
    "港股": [
      "news_7df66d8259e6",
      "news_587e55a45584",
      "news_2668208da5aa"
    ],
    "美股": [
      "news_725b3854a630",
      "news_6fa9b55b74d7",
      "news_6a451b379ab7"
    ],
    "指数": [
      "news_b0c8044bf0c3",
      "news_c07aff0daf8b",
      "news_c49920e9f2b5",
      "news_6fa9b55b74d7",
      "news_fec41667ba9a",
      "news_7df66d8259e6",
      "news_e9ebdc59dbd5",
      "news_2ddd0acae0b2",
      "news_407e3a7939e3",
      "news_d22ade38d7d5",
      "news_6a451b379ab7",
      "news_bad29e97bb90",
      "news_8c3f83b86fe3",
      "news_3f9fbbeeb0d9",
      "news_00ebe2f19b2d",
      "news_d0b3afaf489e"
    ],
    "沪深300": [
      "news_3f9fbbeeb0d9",
      "news_00ebe2f19b2d"
    ],
    "ETF": [
      "news_725b3854a630",
      "news_bad29e97bb90",
      "news_3f9fbbeeb0d9",
      "news_00ebe2f19b2d"
    ],
    "LOF": [
      "news_7140f43d44c3"
    ],
    "公募基金": [
      "news_0f3e71a2648c"
    ],
    "对冲基金": [
      "news_725b3854a630"
    ],
    "债券": [
      "news_f06d589e3790",
      "news_c5a4c1dbcd6a",
      "news_0597eeae7234",
      "news_b8359ae20a15"
    ],
    "国债": [
      "news_7fa155b04c37",
      "news_420e87abed2d",
      "news_7df66d8259e6",
      "news_15d19456e667",
      "news_4cf11af8a015",
      "news_714c75d52452",
      "news_e779532346ae",
      "news_de324c9c3f4c"
    ],
    "公司债": [
      "news_c5a4c1dbcd6a"
    ],
    "期货": [
      "news_420e87abed2d",
      "news_7df66d8259e6",
      "news_587e55a45584",
      "news_aefd5fc7bd16",
      "news_4a3ba5bdafe8",
      "news_d22ade38d7d5"
    ],
    "衍生品": [
      "news_e779532346ae"
    ],
    "IPO": [
      "news_108636e64ed2"
    ],
    "上市": [
      "news_587e55a45584",
      "news_108636e64ed2",
      "news_2668208da5aa",
      "news_03213b6bd1f8"
    ],
    "退市": [
      "news_8b7de7db7c9c"
    ],
    "增持": [
      "news_03213b6bd1f8",
      "news_313965ac369f"
    ],
    "回购": [
      "news_2ddd0acae0b2",
      "news_6a451b379ab7",
      "news_e779532346ae",
      "news_7a65363ab7ad",
      "news_03213b6bd1f8",
      "news_313965ac369f"
    ],
    "券商": [
      "news_316842384872",
      "news_912e35ffb388",
      "news_dca9950f844a",
      "news_c5dab28d3eda",
      "news_bad29e97bb90",
      "news_63bb8aad259d"
    ],
    "投行": [
      "news_39fe46fe53e2",
      "news_8493536dd517",
      "news_fee5ce6a7989",
      "news_a62540c706c0",
      "news_8e29fdbe16c5",
      "news_0b6acf1f8c6b",
      "news_4c51d6fb9521"
    ],
    "经纪": [
      "news_5c5f98083245",
      "news_9f3b623176ea"
    ],
    "投资者": [
      "news_c8e43f04779e",
      "news_31005a38c26e",
      "news_4a3ba5bdafe8",
      "news_407e3a7939e3",
      "news_df80ab9d536e"
    ],
    "散户": [
      "news_725b3854a630"
    ],
    "机构": [
      "news_90a64c6ac1bf",
      "news_725b3854a630",
      "news_c5dab28d3eda",
      "news_609255bf3e01",
      "news_44a2f067c365",
      "news_5c4b92baee87",
      "news_11602cb4988a",
      "news_15f3658971ef",
      "news_0c68188ecbdf"
    ],
    "监管": [
      "news_316842384872",
      "news_f06d589e3790",
      "news_912e35ffb388",
      "news_dca9950f844a",
      "news_c5dab28d3eda",
      "news_de324c9c3f4c",
      "news_d3c3193954f6"
    ],
    "金融监管": [
      "news_f06d589e3790",
      "news_de324c9c3f4c"
    ],
    "证监会": [
      "news_587e55a45584",
      "news_de324c9c3f4c",
      "news_0c68188ecbdf",
      "news_0f3e71a2648c"
    ],
    "金融委": [
      "news_15d19456e667",
      "news_44a2f067c365"
    ],
    "合规": [
      "news_c5dab28d3eda"
    ],
    "罚单": [
      "news_f06d589e3790"
    ],
    "通报": [
      "news_316842384872",
      "news_912e35ffb388",
      "news_dca9950f844a",
      "news_48cf0b6e5ee7",
      "news_2d6d6a214596"
    ],
    "条款": [
      "news_d020edd6ad15",
      "news_f5ec8d806ec7",
      "news_df6aadeda19e",
      "news_b507ced96428",
      "news_39039a603816",
      "news_4a3344c8a5ee",
      "news_d22ade38d7d5",
      "news_41dfe47a9405",
      "news_4429b28e3848",
      "news_90694c744974",
      "news_5c5f98083245"
    ],
    "办法": [
      "news_0f3e71a2648c"
    ],
    "通知": [
      "news_c5dab28d3eda"
    ],
    "指引": [
      "news_d41ffcc32c16"
    ],
    "意见": [
      "news_5b3c743f0142",
      "news_7314f06fc8dd",
      "news_4c37b0e1af97",
      "news_f5ec8d806ec7",
      "news_df6aadeda19e",
      "news_4a3344c8a5ee",
      "news_d22ade38d7d5",
      "news_11602cb4988a",
      "news_0c68188ecbdf",
      "news_0f3e71a2648c"
    ],
    "规定": [
      "news_dca9950f844a"
    ],
    "法规": [
      "news_0f3e71a2648c"
    ],
    "解读": [
      "news_4ca067116d5f",
      "news_90694c744974",
      "news_7b45a87acab6",
      "news_5c5f98083245"
    ],
    "牌照": [
      "news_5c5f98083245"
    ],
    "经济": [
      "news_8b7de7db7c9c",
      "news_b0c8044bf0c3",
      "news_c07aff0daf8b",
      "news_4c51d6fb9521",
      "news_f2aeb75443a7",
      "news_230b7d50d4c9",
      "news_787c326b3095",
      "news_17a50407f000",
      "news_4cdbb4ffc110",
      "news_6792fa2c5a27",
      "news_eaf98d4763a8",
      "news_fec41667ba9a",
      "news_a205f890033b",
      "news_00e12652243c",
      "news_609255bf3e01",
      "news_15d19456e667",
      "news_ae79725f3de0",
      "news_991b2d491988",
      "news_c4c53c199810",
      "news_ff59fc3a6803",
      "news_b507ced96428",
      "news_4a3ba5bdafe8",
      "news_6a451b379ab7",
      "news_fc742fb3b62e",
      "news_de324c9c3f4c",
      "news_2668208da5aa",
      "news_bad29e97bb90",
      "news_63bb8aad259d",
      "news_8c3f83b86fe3",
      "news_f96d02a9a46a",
      "news_0c68188ecbdf",
      "news_b88af30fc3f3"
    ],
    "宏观经济": [
      "news_17a50407f000"
    ],
    "经济运行": [
      "news_c07aff0daf8b",
      "news_4cdbb4ffc110",
      "news_ae79725f3de0",
      "news_c4c53c199810",
      "news_ff59fc3a6803",
      "news_b507ced96428",
      "news_de324c9c3f4c",
      "news_2668208da5aa"
    ],
    "稳增长": [
      "news_fec41667ba9a",
      "news_176ca9b05d84"
    ],
    "高质量发展": [
      "news_ae79725f3de0",
      "news_ff59fc3a6803",
      "news_f46026db958a",
      "news_2de9d420cef2",
      "news_0f3e71a2648c"
    ],
    "GDP": [
      "news_6792fa2c5a27",
      "news_903f491aebc1",
      "news_176ca9b05d84",
      "news_609255bf3e01",
      "news_ff59fc3a6803",
      "news_8c3f83b86fe3"
    ],
    "CPI": [
      "news_a205f890033b"
    ],
    "社融": [
      "news_4cdbb4ffc110"
    ],
    "信贷": [
      "news_82a49203aabf"
    ],
    "外贸": [
      "news_0dd99c348dc1",
      "news_6792fa2c5a27",
      "news_ae79725f3de0",
      "news_4e4a0e347500"
    ],
    "货币政策": [
      "news_67379ab3d587"
    ],
    "跨周期": [
      "news_2de9d420cef2"
    ],
    "汇率": [
      "news_4e18ddca912e"
    ],
    "人民币": [
      "news_63bb8aad259d"
    ],
    "外汇": [
      "news_de324c9c3f4c"
    ],
    "美元": [
      "news_39fe46fe53e2",
      "news_8493536dd517",
      "news_fee5ce6a7989",
      "news_a62540c706c0",
      "news_2f93f60a31cc",
      "news_3c44ecc773fb",
      "news_4d3d8f3acbe6",
      "news_420e87abed2d",
      "news_725b3854a630",
      "news_2fe8ca21c8ab",
      "news_693082dee6a2",
      "news_4cf11af8a015",
      "news_aefd5fc7bd16",
      "news_39039a603816",
      "news_fc742fb3b62e",
      "news_108636e64ed2",
      "news_6711d53d9d58",
      "news_5c4b92baee87"
    ],
    "欧元": [
      "news_c309360e9767",
      "news_8e29fdbe16c5",
      "news_420e87abed2d"
    ],
    "通胀": [
      "news_fe6b29340eb1",
      "news_754ee7ae6db0",
      "news_67379ab3d587",
      "news_991b2d491988",
      "news_4a3ba5bdafe8",
      "news_bad29e97bb90",
      "news_1fec1fb047a7",
      "news_5c4b92baee87"
    ],
    "房地产": [
      "news_0226a7effdd2",
      "news_0a62b0a94cb4",
      "news_dba7855df70b",
      "news_88141ad40f80",
      "news_fa5e6f15374b",
      "news_c4c53c199810",
      "news_d020edd6ad15",
      "news_04808066f23a"
    ],
    "地产": [
      "news_0226a7effdd2",
      "news_0a62b0a94cb4",
      "news_dba7855df70b",
      "news_88141ad40f80",
      "news_fa5e6f15374b",
      "news_c4c53c199810",
      "news_d020edd6ad15",
      "news_04808066f23a",
      "news_5cc93fab761c"
    ],
    "住房": [
      "news_d020edd6ad15"
    ],
    "消费": [
      "news_6cc51213656e",
      "news_c07aff0daf8b",
      "news_230b7d50d4c9",
      "news_eaf98d4763a8",
      "news_a205f890033b",
      "news_63f81967657a",
      "news_600c62bc8304",
      "news_4c37b0e1af97",
      "news_df6aadeda19e",
      "news_c2c251c54777",
      "news_68c615c7af4c",
      "news_d3c3193954f6"
    ],
    "投资": [
      "news_76395e6b62f4",
      "news_4e18ddca912e",
      "news_f06d589e3790",
      "news_4c51d6fb9521",
      "news_3c44ecc773fb",
      "news_f2aeb75443a7",
      "news_0a62b0a94cb4",
      "news_787c326b3095",
      "news_c5a4c1dbcd6a",
      "news_6792fa2c5a27",
      "news_dba7855df70b",
      "news_5e0df519260b",
      "news_88141ad40f80",
      "news_c8e43f04779e",
      "news_693082dee6a2",
      "news_fa5e6f15374b",
      "news_991b2d491988",
      "news_c4c53c199810",
      "news_714c75d52452",
      "news_aefd5fc7bd16",
      "news_d020edd6ad15",
      "news_f5ec8d806ec7",
      "news_df6aadeda19e",
      "news_b507ced96428",
      "news_31005a38c26e",
      "news_4a3ba5bdafe8",
      "news_4a3344c8a5ee",
      "news_407e3a7939e3",
      "news_d22ade38d7d5",
      "news_7574cad9da60",
      "news_de324c9c3f4c",
      "news_df80ab9d536e",
      "news_8c3f83b86fe3",
      "news_d3c3193954f6",
      "news_5c4b92baee87",
      "news_65af160cf49b",
      "news_0c68188ecbdf",
      "news_0f3e71a2648c"
    ],
    "出口": [
      "news_0dd99c348dc1",
      "news_fea60b20cf8a",
      "news_f2aeb75443a7",
      "news_4cdbb4ffc110",
      "news_7314f06fc8dd",
      "news_693082dee6a2",
      "news_41dfe47a9405",
      "news_63bb8aad259d"
    ],
    "进口": [
      "news_fea60b20cf8a",
      "news_a205f890033b"
    ],
    "进出口": [
      "news_0dd99c348dc1"
    ],
    "贸易": [
      "news_6792fa2c5a27",
      "news_8538de4075b9",
      "news_ae79725f3de0",
      "news_fc9bb3e5722c"
    ],
    "产业链": [
      "news_8b7de7db7c9c",
      "news_f2aeb75443a7",
      "news_176ca9b05d84",
      "news_2668208da5aa",
      "news_4e4a0e347500"
    ],
    "供应链": [
      "news_77a7294af5a2",
      "news_2668208da5aa"
    ],
    "就业": [
      "news_754ee7ae6db0",
      "news_6792fa2c5a27",
      "news_176ca9b05d84",
      "news_ae79725f3de0"
    ],
    "收入": [
      "news_fe6b29340eb1",
      "news_230b7d50d4c9",
      "news_9e13d76838b7",
      "news_600c62bc8304",
      "news_d827ea572f81",
      "news_4cf11af8a015",
      "news_714c75d52452",
      "news_6711d53d9d58"
    ],
    "黄金": [
      "news_17a50407f000"
    ],
    "金价": [
      "news_b88af30fc3f3"
    ],
    "原油": [
      "news_aefd5fc7bd16"
    ],
    "大宗商品": [
      "news_17a50407f000"
    ],
    "工业": [
      "news_c07aff0daf8b",
      "news_4724c59d37f3",
      "news_455852f4c162",
      "news_222e2b46e40b",
      "news_f5ec8d806ec7",
      "news_5cc93fab761c",
      "news_8c3f83b86fe3"
    ],
    "利润": [
      "news_00e0bfd5ef42",
      "news_6aa3876fc959",
      "news_34b373b99eb0"
    ],
    "股市": [
      "news_6aa3876fc959",
      "news_7df66d8259e6",
      "news_e9ebdc59dbd5",
      "news_2ddd0acae0b2",
      "news_df80ab9d536e",
      "news_2668208da5aa",
      "news_03213b6bd1f8",
      "news_d0b3afaf489e"
    ],
    "美联储": [
      "news_4a3ba5bdafe8",
      "news_2ddd0acae0b2"
    ],
    "财报": [
      "news_00e0bfd5ef42",
      "news_d41ffcc32c16"
    ],
    "财富管理": [
      "news_5c4b92baee87"
    ],
    "资管": [
      "news_4e18ddca912e",
      "news_5c4b92baee87"
    ],
    "净值": [
      "news_f06d589e3790"
    ],
    "权益": [
      "news_d3c3193954f6",
      "news_0597eeae7234",
      "news_0f3e71a2648c",
      "news_b88af30fc3f3"
    ],
    "年化": [
      "news_4e18ddca912e",
      "news_4cdbb4ffc110"
    ],
    "募集": [
      "news_0f3e71a2648c"
    ],
    "赎回": [
      "news_7140f43d44c3"
    ]
  },
  "sourceHealth": {
    "generatedAt": "2026-10-19T05:19:14.386Z",
    "status": "healthy",
    "totalSources": 12,
    "successfulSources": 11,
    "usableSources": 11,
    "failedSources": 1,
    "staleSources": 0,
    "fetchLimitReachedSources": 1,
    "coverageRate": 0.9167,
    "freshestPublishedAt": "2026-10-19T11:53:00.000Z",
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
        "addedCount": 15,
        "durationMs": 1264,
        "latestPublishedAt": "2026-10-19T04:28:20.000Z",
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
        "addedCount": 22,
        "durationMs": 574,
        "latestPublishedAt": "2026-10-19T04:10:15.000Z",
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
        "addedCount": 17,
        "durationMs": 62211,
        "latestPublishedAt": "2026-10-19T04:41:15.000Z",
        "usedEndpoint": "rsshub-balancer.virworks.moe"
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
        "addedCount": 16,
        "durationMs": 50053,
        "latestPublishedAt": "2026-10-19T04:41:13.000Z",
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
        "itemCount": 31,
        "rawItemCount": 31,
        "acceptedItemCount": 31,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 25,
        "durationMs": 59769,
        "latestPublishedAt": "2026-10-19T04:20:03.000Z",
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
        "addedCount": 12,
        "durationMs": 707,
        "latestPublishedAt": "2026-10-19T04:38:01.000Z",
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
        "durationMs": 51723,
        "latestPublishedAt": "2026-10-15T16:00:00.000Z",
        "usedEndpoint": "rsshub-balancer.virworks.moe"
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
        "durationMs": 65860,
        "latestPublishedAt": "2026-10-12T03:08:48.000Z",
        "usedEndpoint": "rsshub-balancer.virworks.moe"
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
        "durationMs": 60,
        "latestPublishedAt": "2026-10-19T04:28:25.000Z",
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
        "addedCount": 9,
        "durationMs": 45,
        "latestPublishedAt": "2026-10-19T02:59:37.000Z",
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
        "latestPublishedAt": "2026-10-19T11:53:00.000Z",
        "usedEndpoint": null
      }
    ]
  },
  "historyStats": {
    "itemCount": 5000,
    "eventCount": 144,
    "retentionDays": 90
  },
  "macro": {
    "updatedAt": "2026-10-19T05:19:14.386Z",
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
        "value": "5.09%",
        "note": "较10月15日 5.10% 下降",
        "direction": "down",
        "asOf": "2026-10-16",
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
        "value": "6.6862",
        "note": "较10月15日 6.6910 下降",
        "direction": "down",
        "asOf": "2026-10-16",
        "source": "Frankfurter/ECB",
        "mode": "auto"
      },
      {
        "key": "gold",
        "name": "现货黄金",
        "value": "$4,178",
        "note": "较10月18日 $4,166 上升",
        "direction": "up",
        "asOf": "2026-10-19",
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
        "title": "澜起科技(688008.SH)独立董事提议3亿元至5亿元回购公司A股股份",
        "mainItemId": "news_03213b6bd1f8",
        "relatedItemIds": [
          "news_7a65363ab7ad",
          "news_2ddd0acae0b2",
          "news_7df66d8259e6",
          "news_882b652f9cdf"
        ],
        "evidenceItemIds": [
          "news_03213b6bd1f8",
          "news_7a65363ab7ad",
          "news_2ddd0acae0b2",
          "news_7df66d8259e6",
          "news_882b652f9cdf"
        ],
        "historicalEvidenceCount": 45,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-19T05:19:14.386Z",
        "status": "developing",
        "summary": "澜起科技独董提议回购3亿至5亿元A股股份。",
        "latestProgress": "A股再掀护盘行动，单周回购增持超30亿元。"
      },
      {
        "eventId": "event_f101880ef7bc",
        "title": "美股点金丨AI债务恐慌叠加油价双击！科技股动荡何时结束",
        "mainItemId": "news_725b3854a630",
        "relatedItemIds": [
          "news_6fa9b55b74d7"
        ],
        "evidenceItemIds": [
          "news_725b3854a630",
          "news_6fa9b55b74d7"
        ],
        "historicalEvidenceCount": 48,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-19T05:19:14.386Z",
        "status": "developing",
        "summary": "MSCI新规悬顶致微策略暴跌9%，引爆美股与比特币双重下挫。",
        "latestProgress": "AI债务恐慌叠加油价飙升，科技股动荡持续，市场分化加剧。"
      },
      {
        "eventId": "event_2cf716748ce1",
        "title": "越南央行要求贷款机构降息以支持经济增长",
        "mainItemId": "news_82a49203aabf",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_82a49203aabf"
        ],
        "historicalEvidenceCount": 49,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-10-19T05:19:14.386Z",
        "status": "developing",
        "summary": "越南央行要求贷款机构降息以支持经济增长",
        "latestProgress": "根据十月十八日报道，暂无进一步消息"
      },
      {
        "eventId": "event_6ab2a13609c6",
        "title": "沃什曼谷发言“偏鸽”，市场押注美联储10月按兵不动，加息概率跌破15%",
        "mainItemId": "news_4a3ba5bdafe8",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_4a3ba5bdafe8"
        ],
        "historicalEvidenceCount": 31,
        "firstSeenAt": "2026-10-08T06:40:59.994Z",
        "lastSeenAt": "2026-10-19T05:19:14.386Z",
        "status": "developing",
        "summary": "沃什曼谷发言偏鸽，市场押注美联储10月按兵不动，加息概率跌破15%。",
        "latestProgress": "最新报道称，下周加息概率仅16%，华尔街提醒不应迷信市场定价，结果仍难料。"
      },
      {
        "eventId": "event_294387429284",
        "title": "日本央行行长重申通胀超调风险 强调锚定2%目标重要性",
        "mainItemId": "news_67379ab3d587",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_67379ab3d587"
        ],
        "historicalEvidenceCount": 2,
        "firstSeenAt": "2026-10-16T16:49:31.035Z",
        "lastSeenAt": "2026-10-19T05:19:14.386Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_c7b8ea00d72e",
        "title": "1—9月份，全国房地产开发投资53364亿元，同比下降20.6%",
        "mainItemId": "news_d020edd6ad15",
        "relatedItemIds": [
          "news_dba7855df70b"
        ],
        "evidenceItemIds": [
          "news_d020edd6ad15",
          "news_dba7855df70b"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-19T05:19:14.386Z",
        "lastSeenAt": "2026-10-19T05:19:14.386Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_266d386c017b",
        "title": "国家统计局：9月一线城市商品住宅销售价格环比继续上涨",
        "mainItemId": "news_4ca067116d5f",
        "relatedItemIds": [
          "news_4a3344c8a5ee"
        ],
        "evidenceItemIds": [
          "news_4ca067116d5f",
          "news_4a3344c8a5ee"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-19T05:19:14.386Z",
        "lastSeenAt": "2026-10-19T05:19:14.386Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_3d62241bc3f8",
        "title": "财联社10月19日电，投行道明考恩将恩智浦半导体目标价从290美元下调至275美元。",
        "mainItemId": "news_39fe46fe53e2",
        "relatedItemIds": [
          "news_8493536dd517",
          "news_fee5ce6a7989"
        ],
        "evidenceItemIds": [
          "news_39fe46fe53e2",
          "news_8493536dd517",
          "news_fee5ce6a7989"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-10-19T05:19:14.386Z",
        "lastSeenAt": "2026-10-19T05:19:14.386Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_6c27fdb562ef",
        "title": "下周资本市场大事提醒： 金融街论坛明日开幕 潘功胜、丁向群、吴清、朱鹤新将作主题演讲",
        "mainItemId": "news_8c3f83b86fe3",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_8c3f83b86fe3"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-18T16:00:26.999Z",
        "lastSeenAt": "2026-10-18T16:00:26.999Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_0e47dee32e28",
        "title": "吴清主席会见阿联酋穆巴达拉投资公司首席执行官兼董事总经理哈勒敦",
        "mainItemId": "news_0c68188ecbdf",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_0c68188ecbdf"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-10-12T18:04:16.088Z",
        "lastSeenAt": "2026-10-15T09:09:25.906Z",
        "status": "developing",
        "summary": "吴清主席会见阿联酋穆巴达拉投资公司CEO兼董事总经理哈勒敦。",
        "latestProgress": "双方就金融合作等议题进行交流，具体内容待后续披露。"
      }
    ],
    "dailySummary": {
      "highlights": [
        {
          "text": "[79] 债市早参10月19日| 今日金融监管部门将在金融街论坛发声；前三季度经济运行数据将公布 — 债市要闻\n【金融街论坛年会于10月19日在北京开幕】\n由北京市人民政府与中国人民银行、国家金融监督管理总局、中国证券监督",
          "evidenceItemIds": [
            "news_de324c9c3f4c"
          ]
        },
        {
          "text": "[77] 韩国首尔综指转涨，此前一度跌超3%；纳斯达克100指数期货涨1% — 韩国首尔综指转涨，此前一度跌超3%；纳斯达克100指数期货涨1%。风险提示及免责条款",
          "evidenceItemIds": [
            "news_d22ade38d7d5"
          ]
        },
        {
          "text": "[76] 最新一轮基金投顾资格答辩本周启动，数十家券商分批进行 — 最新一轮基金投顾资格申报审核流程进入关键节点。自8月底申报窗口关闭后，券商已陆续接到监管进行基金投顾答辩通知，本周起将分",
          "evidenceItemIds": [
            "news_c5dab28d3eda"
          ]
        },
        {
          "text": "[76] 2026年10月定期寿险在哪里买比较好最靠谱?从保额测算到免责条款解读,奶爸保全流程服务位居第一 — 奶爸保小程序是2026年10月买定期寿险值得优先考虑的投保入口。 奶爸保持有全国性保险经纪牌照，成立9年，200多位顾问",
          "evidenceItemIds": [
            "news_5c5f98083245"
          ]
        }
      ]
    },
    "eventChain": {
      "summary": "基于标题主题相似度和来源层级识别 5 组关联事件；仅表示内容相关，不代表已确认因果",
      "chains": [
        {
          "title": "财联社10月19日电，投行道明考恩将恩智浦半导体目标价从290美元下调至275美元。",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_39fe46fe53e2",
            "news_8493536dd517",
            "news_fee5ce6a7989",
            "news_a62540c706c0"
          ],
          "nodes": [
            "财联社10月19日电，投行道明考恩将恩智浦半导体目标价从290美元下调至275美元。",
            "财联社10月19日电，投行道明考恩将安森美半导体目标价从95美元下调至75美元。",
            "财联社10月19日电，投行道明考恩将意法半导体目标价从55美元下调至50美元。",
            "财联社10月19日电，投行道明考恩将微芯科技目标价从90美元下调至75美元。"
          ]
        },
        {
          "title": "银河证券章俊：经济长期向好基本面稳固，A股核心定价逻辑未改",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_fec41667ba9a",
            "news_882b652f9cdf",
            "news_7df66d8259e6",
            "news_2ddd0acae0b2",
            "news_7a65363ab7ad"
          ],
          "nodes": [
            "银河证券章俊：经济长期向好基本面稳固，A股核心定价逻辑未改",
            "A股午评 | 沪指涨0.16% 工行创新高 银行军工逆势走强",
            "A股早盘低开低走，双创指数均跌超2%，AI硬件、芯片半导体再度调整，白酒、银行逆势拉升",
            "A股四大指数集体低开，油气、军工板块表现活跃",
            "鼎泰高科：董事长提议回购5000万元至1亿元A股股份"
          ]
        },
        {
          "title": "美股上周素描：机构创纪录地“抛”，散户创纪录地“抄”",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_725b3854a630",
            "news_6fa9b55b74d7"
          ],
          "nodes": [
            "美股上周素描：机构创纪录地“抛”，散户创纪录地“抄”",
            "美股AI泡沫论扰动华尔街：市盈率没2000年高，但危险换了一副模样"
          ]
        },
        {
          "title": "1—9月份，全国房地产开发投资53364亿元，同比下降20.6%",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_d020edd6ad15",
            "news_dba7855df70b",
            "news_fa5e6f15374b"
          ],
          "nodes": [
            "1—9月份，全国房地产开发投资53364亿元，同比下降20.6%",
            "国家统计局：1—9月份全国房地产开发投资53364亿元 同比下降20.6%",
            "国家统计局：1—9月全国房地产开发投资同比下降20.6%"
          ]
        },
        {
          "title": "国家统计局：9月一线城市商品住宅销售价格环比继续上涨",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_4ca067116d5f",
            "news_4a3344c8a5ee"
          ],
          "nodes": [
            "国家统计局：9月一线城市商品住宅销售价格环比继续上涨",
            "国家统计局：9月一线城市商品住宅销售价格环比继续上涨，二三线城市环比降幅总体收窄"
          ]
        }
      ]
    },
    "industryImpact": {
      "quadrants": {
        "insurance": {
          "level": "high",
          "summary": "15 条保险相关资讯",
          "items": [
            {
              "title": "重疾医疗首创终身保证续保医保外药械可全覆盖人保寿险推出关爱宝长期医疗保障计划",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_bf7e3f93d69f"
              ]
            },
            {
              "title": "制度层面关上大门保险代理人独立网销时代终结大v出路在哪",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_739510b46d56"
              ]
            },
            {
              "title": "韩国存储双雄股价下跌 致韩国养老金损失1370亿美元",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_2f93f60a31cc"
              ]
            }
          ]
        },
        "pe": {
          "level": "high",
          "summary": "29 条基金/资管相关资讯",
          "items": [
            {
              "title": "资管周报：香港银行定存利率\"卷\"至21%；公募新规打开投资工具空间，2.52万亿银行理财资金迎新",
              "impact": "市场表现影响，可用于投资人沟通",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_4e18ddca912e"
              ]
            },
            {
              "title": "境外调研违规，5家券商、基金公司被“点名”通报，细节来了",
              "impact": "监管合规层面影响，需更新运营流程",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_316842384872"
              ]
            },
            {
              "title": "恒丰银行资金运营中心被罚160万元，涉债券资产五级分类不准确等",
              "impact": "监管合规层面影响，需更新运营流程",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_f06d589e3790"
              ]
            }
          ]
        },
        "banking": {
          "level": "high",
          "summary": "28 条银行/货币政策相关资讯",
          "items": [
            {
              "title": "资管周报：香港银行定存利率\"卷\"至21%；公募新规打开投资工具空间，2.52万亿银行理财资金迎新",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_4e18ddca912e"
              ]
            },
            {
              "title": "恒丰银行资金运营中心被罚160万元，涉债券资产五级分类不准确等",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_f06d589e3790"
              ]
            },
            {
              "title": "【午报】三大指数涨跌不一，银行股逆势走强， 工商银行再创历史新高",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_b0c8044bf0c3"
              ]
            }
          ]
        },
        "trust": {
          "level": "medium",
          "summary": "2 条信托/财富管理相关资讯",
          "items": [
            {
              "title": "资管周报：香港银行定存利率\"卷\"至21%；公募新规打开投资工具空间，2.52万亿银行理财资金迎新",
              "impact": "监管政策调整，需重新评估合规方案",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": [
                "news_4e18ddca912e"
              ]
            },
            {
              "title": "从“准入”到“价值创造”：国际资管巨头共议中国金融市场新范式",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": [
                "news_5c4b92baee87"
              ]
            }
          ]
        }
      }
    },
    "weeklyTrends": {
      "summary": "今日 150 条资讯，覆盖 4 个分类、9 个信源",
      "trends": [
        {
          "topic": "监管政策密集度上升",
          "evidence": "今日 4 条监管类资讯，监管层信号集中释放，关注政策落地节奏",
          "evidenceItemIds": [
            "news_739510b46d56",
            "news_15f3658971ef",
            "news_0c68188ecbdf"
          ],
          "direction": "上升"
        },
        {
          "topic": "行业动态活跃",
          "evidence": "今日 94 条行业动态资讯，行业层面信息充分，涉及多家机构/产品",
          "evidenceItemIds": [
            "news_bf7e3f93d69f",
            "news_7fa155b04c37",
            "news_7140f43d44c3"
          ],
          "direction": "平稳"
        },
        {
          "topic": "货币政策信号",
          "evidence": "出现 15 次货币政策相关关键词，关注利率/流动性走向",
          "evidenceItemIds": [
            "news_0be435167ba1",
            "news_5c4b92baee87",
            "news_3f9fbbeeb0d9"
          ],
          "direction": "上升"
        },
        {
          "topic": "保险行业关注度",
          "evidence": "出现 14 条保险相关资讯，覆盖监管/市场/产品多维度",
          "evidenceItemIds": [
            "news_5c5f98083245",
            "news_11602cb4988a",
            "news_65af160cf49b"
          ],
          "direction": "上升"
        },
        {
          "topic": "市场行情波动",
          "evidence": "出现 63 条市场行情相关资讯，市场关注度提升",
          "evidenceItemIds": [
            "news_d22ade38d7d5",
            "news_5c5f98083245",
            "news_0be435167ba1"
          ],
          "direction": "上升"
        }
      ]
    },
    "insurancePlanner": {
      "summary": "今日 15 条保险相关资讯，以下为规划师客户沟通参考",
      "talkingPoints": [
        {
          "topic": "重疾医疗首创终身保证续保医保外药械可全覆盖人保寿险推出关爱宝长期医疗保障计划",
          "point": "健康险领域变化，适合作为客户保单年检中的风险缺口沟通素材",
          "action": "梳理在售健康险产品矩阵，标记优势产品",
          "evidenceItemIds": [
            "news_bf7e3f93d69f"
          ]
        },
        {
          "topic": "制度层面关上大门保险代理人独立网销时代终结大v出路在哪",
          "point": "保险科技/数字化转型进展，适合与高净值客户探讨行业前沿趋势",
          "action": "整理科技赋能案例，丰富客户沟通深度",
          "evidenceItemIds": [
            "news_739510b46d56"
          ]
        },
        {
          "topic": "韩国存储双雄股价下跌 致韩国养老金损失1370亿美元",
          "point": "养老金/年金市场动态，可用于退休规划客户的需求唤醒沟通",
          "action": "整理目标客户名单，准备年金利益演示",
          "evidenceItemIds": [
            "news_2f93f60a31cc"
          ]
        },
        {
          "topic": "从“准入”到“价值创造”：国际资管巨头共议中国金融市场新范式",
          "point": "利率环境变动直接影响保险产品定价和客户购买决策",
          "action": "测算利率变动对在售产品IRR/保额的影响",
          "evidenceItemIds": [
            "news_5c4b92baee87"
          ]
        }
      ]
    },
    "peOperations": {
      "summary": "今日 29 条基金/资管相关资讯，以下为运营参考",
      "talkingPoints": [
        {
          "topic": "资管周报：香港银行定存利率\"卷\"至21%；公募新规打开投资工具空间，2.52万亿银行理财资金迎新",
          "point": "监管动态影响产品发行和运营流程，需同步更新合规手册",
          "action": "梳理监管要点对现有产品的影响，准备合规简报",
          "evidenceItemIds": [
            "news_4e18ddca912e"
          ]
        },
        {
          "topic": "境外调研违规，5家券商、基金公司被“点名”通报，细节来了",
          "point": "监管动态影响产品发行和运营流程，需同步更新合规手册",
          "action": "梳理监管要点对现有产品的影响，准备合规简报",
          "evidenceItemIds": [
            "news_316842384872"
          ]
        },
        {
          "topic": "恒丰银行资金运营中心被罚160万元，涉债券资产五级分类不准确等",
          "point": "监管动态影响产品发行和运营流程，需同步更新合规手册",
          "action": "梳理监管要点对现有产品的影响，准备合规简报",
          "evidenceItemIds": [
            "news_f06d589e3790"
          ]
        },
        {
          "topic": "财联社10月19日电，据报道，英国央行对巴克莱银行展开审查，指控其交易员虚报私募信贷敞口。",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_82a49203aabf"
          ]
        }
      ]
    },
    "marketOutlook": {
      "summary": "今日 76 条宏观经济/政策相关资讯",
      "outlooks": [
        {
          "topic": "34年，从罐头厂到“咱家果源”：果汁大王汇源集团交出名字",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_76395e6b62f4"
          ]
        },
        {
          "topic": "消息称大众计划到2030年前冻结薪资",
          "content": "通胀数据影响货币政策节奏和实际利率水平，关注对债券久期策略的传导",
          "evidenceItemIds": [
            "news_fe6b29340eb1"
          ]
        },
        {
          "topic": "资管周报：香港银行定存利率\"卷\"至21%；公募新规打开投资工具空间，2.52万亿银行理财资金迎新",
          "content": "汇率波动影响跨境资本流动和出口导向型企业盈利，关注对相关持仓的影响",
          "evidenceItemIds": [
            "news_4e18ddca912e"
          ]
        },
        {
          "topic": "CMG全国中短剧精品共创计划在上海启动",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_6cc51213656e"
          ]
        }
      ]
    }
  }
};
window.KEYWORD_INDEX = {
  "保险": [
    "news_739510b46d56",
    "news_5c4b92baee87",
    "news_f46026db958a",
    "news_65af160cf49b",
    "news_15f3658971ef",
    "news_2de9d420cef2",
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
  "再保险": [
    "news_5c4b92baee87"
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
    "news_2f93f60a31cc",
    "news_11602cb4988a"
  ],
  "养老金": [
    "news_2f93f60a31cc"
  ],
  "年金": [
    "news_2f93f60a31cc"
  ],
  "健康险": [
    "news_f46026db958a"
  ],
  "重疾险": [
    "news_b88af30fc3f3"
  ],
  "寿险": [
    "news_bf7e3f93d69f",
    "news_5c5f98083245"
  ],
  "财险": [
    "news_90694c744974"
  ],
  "医疗险": [
    "news_90694c744974",
    "news_9f3b623176ea"
  ],
  "国寿": [
    "news_2de9d420cef2"
  ],
  "人保": [
    "news_bf7e3f93d69f"
  ],
  "新华保险": [
    "news_65af160cf49b"
  ],
  "友邦": [
    "news_5c4b92baee87"
  ],
  "银行": [
    "news_4e18ddca912e",
    "news_f06d589e3790",
    "news_b0c8044bf0c3",
    "news_882b652f9cdf",
    "news_82a49203aabf",
    "news_4c51d6fb9521",
    "news_0226a7effdd2",
    "news_c49920e9f2b5",
    "news_7df66d8259e6",
    "news_15d19456e667",
    "news_aefd5fc7bd16",
    "news_44a2f067c365",
    "news_2a87fd3fd3fa",
    "news_de324c9c3f4c",
    "news_ba4adb91c5ff"
  ],
  "央行": [
    "news_82a49203aabf",
    "news_67379ab3d587",
    "news_4a3ba5bdafe8",
    "news_e779532346ae",
    "news_0597eeae7234"
  ],
  "利率": [
    "news_4e18ddca912e",
    "news_0be435167ba1",
    "news_714c75d52452",
    "news_39039a603816",
    "news_4a3ba5bdafe8",
    "news_e779532346ae",
    "news_8c3f83b86fe3",
    "news_5c4b92baee87",
    "news_b8359ae20a15"
  ],
  "贷款利率": [
    "news_e779532346ae"
  ],
  "LPR": [
    "news_e779532346ae",
    "news_8c3f83b86fe3"
  ],
  "逆回购": [
    "news_e779532346ae"
  ],
  "降息": [
    "news_e779532346ae"
  ],
  "加息": [
    "news_754ee7ae6db0",
    "news_67379ab3d587",
    "news_4a3ba5bdafe8",
    "news_2ddd0acae0b2"
  ],
  "流动性": [
    "news_4cdbb4ffc110",
    "news_e779532346ae",
    "news_bad29e97bb90",
    "news_3f9fbbeeb0d9"
  ],
  "按揭": [
    "news_04808066f23a"
  ],
  "存款": [
    "news_4e18ddca912e",
    "news_714c75d52452"
  ],
  "理财": [
    "news_4e18ddca912e"
  ],
  "股票": [
    "news_6fa9b55b74d7",
    "news_587e55a45584",
    "news_2668208da5aa",
    "news_7a65363ab7ad"
  ],
  "A股": [
    "news_882b652f9cdf",
    "news_c49920e9f2b5",
    "news_6aa3876fc959",
    "news_fec41667ba9a",
    "news_00e12652243c",
    "news_7df66d8259e6",
    "news_2ddd0acae0b2",
    "news_6a451b379ab7",
    "news_2668208da5aa",
    "news_7a65363ab7ad",
    "news_34b373b99eb0",
    "news_03213b6bd1f8"
  ],
  "港股": [
    "news_7df66d8259e6",
    "news_587e55a45584",
    "news_2668208da5aa"
  ],
  "美股": [
    "news_725b3854a630",
    "news_6fa9b55b74d7",
    "news_6a451b379ab7"
  ],
  "指数": [
    "news_b0c8044bf0c3",
    "news_c07aff0daf8b",
    "news_c49920e9f2b5",
    "news_6fa9b55b74d7",
    "news_fec41667ba9a",
    "news_7df66d8259e6",
    "news_e9ebdc59dbd5",
    "news_2ddd0acae0b2",
    "news_407e3a7939e3",
    "news_d22ade38d7d5",
    "news_6a451b379ab7",
    "news_bad29e97bb90",
    "news_8c3f83b86fe3",
    "news_3f9fbbeeb0d9",
    "news_00ebe2f19b2d",
    "news_d0b3afaf489e"
  ],
  "沪深300": [
    "news_3f9fbbeeb0d9",
    "news_00ebe2f19b2d"
  ],
  "ETF": [
    "news_725b3854a630",
    "news_bad29e97bb90",
    "news_3f9fbbeeb0d9",
    "news_00ebe2f19b2d"
  ],
  "LOF": [
    "news_7140f43d44c3"
  ],
  "公募基金": [
    "news_0f3e71a2648c"
  ],
  "对冲基金": [
    "news_725b3854a630"
  ],
  "债券": [
    "news_f06d589e3790",
    "news_c5a4c1dbcd6a",
    "news_0597eeae7234",
    "news_b8359ae20a15"
  ],
  "国债": [
    "news_7fa155b04c37",
    "news_420e87abed2d",
    "news_7df66d8259e6",
    "news_15d19456e667",
    "news_4cf11af8a015",
    "news_714c75d52452",
    "news_e779532346ae",
    "news_de324c9c3f4c"
  ],
  "公司债": [
    "news_c5a4c1dbcd6a"
  ],
  "期货": [
    "news_420e87abed2d",
    "news_7df66d8259e6",
    "news_587e55a45584",
    "news_aefd5fc7bd16",
    "news_4a3ba5bdafe8",
    "news_d22ade38d7d5"
  ],
  "衍生品": [
    "news_e779532346ae"
  ],
  "IPO": [
    "news_108636e64ed2"
  ],
  "上市": [
    "news_587e55a45584",
    "news_108636e64ed2",
    "news_2668208da5aa",
    "news_03213b6bd1f8"
  ],
  "退市": [
    "news_8b7de7db7c9c"
  ],
  "增持": [
    "news_03213b6bd1f8",
    "news_313965ac369f"
  ],
  "回购": [
    "news_2ddd0acae0b2",
    "news_6a451b379ab7",
    "news_e779532346ae",
    "news_7a65363ab7ad",
    "news_03213b6bd1f8",
    "news_313965ac369f"
  ],
  "券商": [
    "news_316842384872",
    "news_912e35ffb388",
    "news_dca9950f844a",
    "news_c5dab28d3eda",
    "news_bad29e97bb90",
    "news_63bb8aad259d"
  ],
  "投行": [
    "news_39fe46fe53e2",
    "news_8493536dd517",
    "news_fee5ce6a7989",
    "news_a62540c706c0",
    "news_8e29fdbe16c5",
    "news_0b6acf1f8c6b",
    "news_4c51d6fb9521"
  ],
  "经纪": [
    "news_5c5f98083245",
    "news_9f3b623176ea"
  ],
  "投资者": [
    "news_c8e43f04779e",
    "news_31005a38c26e",
    "news_4a3ba5bdafe8",
    "news_407e3a7939e3",
    "news_df80ab9d536e"
  ],
  "散户": [
    "news_725b3854a630"
  ],
  "机构": [
    "news_90a64c6ac1bf",
    "news_725b3854a630",
    "news_c5dab28d3eda",
    "news_609255bf3e01",
    "news_44a2f067c365",
    "news_5c4b92baee87",
    "news_11602cb4988a",
    "news_15f3658971ef",
    "news_0c68188ecbdf"
  ],
  "监管": [
    "news_316842384872",
    "news_f06d589e3790",
    "news_912e35ffb388",
    "news_dca9950f844a",
    "news_c5dab28d3eda",
    "news_de324c9c3f4c",
    "news_d3c3193954f6"
  ],
  "金融监管": [
    "news_f06d589e3790",
    "news_de324c9c3f4c"
  ],
  "证监会": [
    "news_587e55a45584",
    "news_de324c9c3f4c",
    "news_0c68188ecbdf",
    "news_0f3e71a2648c"
  ],
  "金融委": [
    "news_15d19456e667",
    "news_44a2f067c365"
  ],
  "合规": [
    "news_c5dab28d3eda"
  ],
  "罚单": [
    "news_f06d589e3790"
  ],
  "通报": [
    "news_316842384872",
    "news_912e35ffb388",
    "news_dca9950f844a",
    "news_48cf0b6e5ee7",
    "news_2d6d6a214596"
  ],
  "条款": [
    "news_d020edd6ad15",
    "news_f5ec8d806ec7",
    "news_df6aadeda19e",
    "news_b507ced96428",
    "news_39039a603816",
    "news_4a3344c8a5ee",
    "news_d22ade38d7d5",
    "news_41dfe47a9405",
    "news_4429b28e3848",
    "news_90694c744974",
    "news_5c5f98083245"
  ],
  "办法": [
    "news_0f3e71a2648c"
  ],
  "通知": [
    "news_c5dab28d3eda"
  ],
  "指引": [
    "news_d41ffcc32c16"
  ],
  "意见": [
    "news_5b3c743f0142",
    "news_7314f06fc8dd",
    "news_4c37b0e1af97",
    "news_f5ec8d806ec7",
    "news_df6aadeda19e",
    "news_4a3344c8a5ee",
    "news_d22ade38d7d5",
    "news_11602cb4988a",
    "news_0c68188ecbdf",
    "news_0f3e71a2648c"
  ],
  "规定": [
    "news_dca9950f844a"
  ],
  "法规": [
    "news_0f3e71a2648c"
  ],
  "解读": [
    "news_4ca067116d5f",
    "news_90694c744974",
    "news_7b45a87acab6",
    "news_5c5f98083245"
  ],
  "牌照": [
    "news_5c5f98083245"
  ],
  "经济": [
    "news_8b7de7db7c9c",
    "news_b0c8044bf0c3",
    "news_c07aff0daf8b",
    "news_4c51d6fb9521",
    "news_f2aeb75443a7",
    "news_230b7d50d4c9",
    "news_787c326b3095",
    "news_17a50407f000",
    "news_4cdbb4ffc110",
    "news_6792fa2c5a27",
    "news_eaf98d4763a8",
    "news_fec41667ba9a",
    "news_a205f890033b",
    "news_00e12652243c",
    "news_609255bf3e01",
    "news_15d19456e667",
    "news_ae79725f3de0",
    "news_991b2d491988",
    "news_c4c53c199810",
    "news_ff59fc3a6803",
    "news_b507ced96428",
    "news_4a3ba5bdafe8",
    "news_6a451b379ab7",
    "news_fc742fb3b62e",
    "news_de324c9c3f4c",
    "news_2668208da5aa",
    "news_bad29e97bb90",
    "news_63bb8aad259d",
    "news_8c3f83b86fe3",
    "news_f96d02a9a46a",
    "news_0c68188ecbdf",
    "news_b88af30fc3f3"
  ],
  "宏观经济": [
    "news_17a50407f000"
  ],
  "经济运行": [
    "news_c07aff0daf8b",
    "news_4cdbb4ffc110",
    "news_ae79725f3de0",
    "news_c4c53c199810",
    "news_ff59fc3a6803",
    "news_b507ced96428",
    "news_de324c9c3f4c",
    "news_2668208da5aa"
  ],
  "稳增长": [
    "news_fec41667ba9a",
    "news_176ca9b05d84"
  ],
  "高质量发展": [
    "news_ae79725f3de0",
    "news_ff59fc3a6803",
    "news_f46026db958a",
    "news_2de9d420cef2",
    "news_0f3e71a2648c"
  ],
  "GDP": [
    "news_6792fa2c5a27",
    "news_903f491aebc1",
    "news_176ca9b05d84",
    "news_609255bf3e01",
    "news_ff59fc3a6803",
    "news_8c3f83b86fe3"
  ],
  "CPI": [
    "news_a205f890033b"
  ],
  "社融": [
    "news_4cdbb4ffc110"
  ],
  "信贷": [
    "news_82a49203aabf"
  ],
  "外贸": [
    "news_0dd99c348dc1",
    "news_6792fa2c5a27",
    "news_ae79725f3de0",
    "news_4e4a0e347500"
  ],
  "货币政策": [
    "news_67379ab3d587"
  ],
  "跨周期": [
    "news_2de9d420cef2"
  ],
  "汇率": [
    "news_4e18ddca912e"
  ],
  "人民币": [
    "news_63bb8aad259d"
  ],
  "外汇": [
    "news_de324c9c3f4c"
  ],
  "美元": [
    "news_39fe46fe53e2",
    "news_8493536dd517",
    "news_fee5ce6a7989",
    "news_a62540c706c0",
    "news_2f93f60a31cc",
    "news_3c44ecc773fb",
    "news_4d3d8f3acbe6",
    "news_420e87abed2d",
    "news_725b3854a630",
    "news_2fe8ca21c8ab",
    "news_693082dee6a2",
    "news_4cf11af8a015",
    "news_aefd5fc7bd16",
    "news_39039a603816",
    "news_fc742fb3b62e",
    "news_108636e64ed2",
    "news_6711d53d9d58",
    "news_5c4b92baee87"
  ],
  "欧元": [
    "news_c309360e9767",
    "news_8e29fdbe16c5",
    "news_420e87abed2d"
  ],
  "通胀": [
    "news_fe6b29340eb1",
    "news_754ee7ae6db0",
    "news_67379ab3d587",
    "news_991b2d491988",
    "news_4a3ba5bdafe8",
    "news_bad29e97bb90",
    "news_1fec1fb047a7",
    "news_5c4b92baee87"
  ],
  "房地产": [
    "news_0226a7effdd2",
    "news_0a62b0a94cb4",
    "news_dba7855df70b",
    "news_88141ad40f80",
    "news_fa5e6f15374b",
    "news_c4c53c199810",
    "news_d020edd6ad15",
    "news_04808066f23a"
  ],
  "地产": [
    "news_0226a7effdd2",
    "news_0a62b0a94cb4",
    "news_dba7855df70b",
    "news_88141ad40f80",
    "news_fa5e6f15374b",
    "news_c4c53c199810",
    "news_d020edd6ad15",
    "news_04808066f23a",
    "news_5cc93fab761c"
  ],
  "住房": [
    "news_d020edd6ad15"
  ],
  "消费": [
    "news_6cc51213656e",
    "news_c07aff0daf8b",
    "news_230b7d50d4c9",
    "news_eaf98d4763a8",
    "news_a205f890033b",
    "news_63f81967657a",
    "news_600c62bc8304",
    "news_4c37b0e1af97",
    "news_df6aadeda19e",
    "news_c2c251c54777",
    "news_68c615c7af4c",
    "news_d3c3193954f6"
  ],
  "投资": [
    "news_76395e6b62f4",
    "news_4e18ddca912e",
    "news_f06d589e3790",
    "news_4c51d6fb9521",
    "news_3c44ecc773fb",
    "news_f2aeb75443a7",
    "news_0a62b0a94cb4",
    "news_787c326b3095",
    "news_c5a4c1dbcd6a",
    "news_6792fa2c5a27",
    "news_dba7855df70b",
    "news_5e0df519260b",
    "news_88141ad40f80",
    "news_c8e43f04779e",
    "news_693082dee6a2",
    "news_fa5e6f15374b",
    "news_991b2d491988",
    "news_c4c53c199810",
    "news_714c75d52452",
    "news_aefd5fc7bd16",
    "news_d020edd6ad15",
    "news_f5ec8d806ec7",
    "news_df6aadeda19e",
    "news_b507ced96428",
    "news_31005a38c26e",
    "news_4a3ba5bdafe8",
    "news_4a3344c8a5ee",
    "news_407e3a7939e3",
    "news_d22ade38d7d5",
    "news_7574cad9da60",
    "news_de324c9c3f4c",
    "news_df80ab9d536e",
    "news_8c3f83b86fe3",
    "news_d3c3193954f6",
    "news_5c4b92baee87",
    "news_65af160cf49b",
    "news_0c68188ecbdf",
    "news_0f3e71a2648c"
  ],
  "出口": [
    "news_0dd99c348dc1",
    "news_fea60b20cf8a",
    "news_f2aeb75443a7",
    "news_4cdbb4ffc110",
    "news_7314f06fc8dd",
    "news_693082dee6a2",
    "news_41dfe47a9405",
    "news_63bb8aad259d"
  ],
  "进口": [
    "news_fea60b20cf8a",
    "news_a205f890033b"
  ],
  "进出口": [
    "news_0dd99c348dc1"
  ],
  "贸易": [
    "news_6792fa2c5a27",
    "news_8538de4075b9",
    "news_ae79725f3de0",
    "news_fc9bb3e5722c"
  ],
  "产业链": [
    "news_8b7de7db7c9c",
    "news_f2aeb75443a7",
    "news_176ca9b05d84",
    "news_2668208da5aa",
    "news_4e4a0e347500"
  ],
  "供应链": [
    "news_77a7294af5a2",
    "news_2668208da5aa"
  ],
  "就业": [
    "news_754ee7ae6db0",
    "news_6792fa2c5a27",
    "news_176ca9b05d84",
    "news_ae79725f3de0"
  ],
  "收入": [
    "news_fe6b29340eb1",
    "news_230b7d50d4c9",
    "news_9e13d76838b7",
    "news_600c62bc8304",
    "news_d827ea572f81",
    "news_4cf11af8a015",
    "news_714c75d52452",
    "news_6711d53d9d58"
  ],
  "黄金": [
    "news_17a50407f000"
  ],
  "金价": [
    "news_b88af30fc3f3"
  ],
  "原油": [
    "news_aefd5fc7bd16"
  ],
  "大宗商品": [
    "news_17a50407f000"
  ],
  "工业": [
    "news_c07aff0daf8b",
    "news_4724c59d37f3",
    "news_455852f4c162",
    "news_222e2b46e40b",
    "news_f5ec8d806ec7",
    "news_5cc93fab761c",
    "news_8c3f83b86fe3"
  ],
  "利润": [
    "news_00e0bfd5ef42",
    "news_6aa3876fc959",
    "news_34b373b99eb0"
  ],
  "股市": [
    "news_6aa3876fc959",
    "news_7df66d8259e6",
    "news_e9ebdc59dbd5",
    "news_2ddd0acae0b2",
    "news_df80ab9d536e",
    "news_2668208da5aa",
    "news_03213b6bd1f8",
    "news_d0b3afaf489e"
  ],
  "美联储": [
    "news_4a3ba5bdafe8",
    "news_2ddd0acae0b2"
  ],
  "财报": [
    "news_00e0bfd5ef42",
    "news_d41ffcc32c16"
  ],
  "财富管理": [
    "news_5c4b92baee87"
  ],
  "资管": [
    "news_4e18ddca912e",
    "news_5c4b92baee87"
  ],
  "净值": [
    "news_f06d589e3790"
  ],
  "权益": [
    "news_d3c3193954f6",
    "news_0597eeae7234",
    "news_0f3e71a2648c",
    "news_b88af30fc3f3"
  ],
  "年化": [
    "news_4e18ddca912e",
    "news_4cdbb4ffc110"
  ],
  "募集": [
    "news_0f3e71a2648c"
  ],
  "赎回": [
    "news_7140f43d44c3"
  ]
};
