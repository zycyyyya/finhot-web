// finhot auto-generated data - powered by RSSHub + financial sources + Zhihu OpenAPI
// Generated: 2026-11-24T14:57:48.749Z
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
  "date": "2026-11-24",
  "generatedAt": "2026-11-24T14:57:48.749Z",
  "lead": "今日新增 136 条，共 150 条精选资讯",
  "items": [
    {
      "title": "B站Q3净利润同比增7% 称目前未受短剧影响",
      "sourceUrl": "https://www.cls.cn/detail/2543398",
      "publishedAt": "2026-11-24T14:53:53.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》11月24日讯（记者 李佳怡）11月24日，哔哩哔哩（以下简称“B站”）发布2026年第三季度财报。\n报告期内，B站实现营业收入83.17亿元，同比增长8%；净利润5.04亿元，同比增长7%；经调整净利润8.28亿元，同比增长5%。其中，广告业务收入达到30.9亿元，同比增长20%，成为拉动收入增长的主要动力。与此同时，B站毛利率继续提升，盈利能力进一步改善。\n\n从用户增长到商业化变",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a3849e000ceb",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "用主动ETF的PCF清单测算实际调仓会有误差？背后或有三种可能",
      "sourceUrl": "https://www.cls.cn/detail/2543393",
      "publishedAt": "2026-11-24T14:44:59.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者 周晓雅）通过主动ETF披露的PCF清单反推基金经理调仓策略，是最近几天的市场关注，尤其是部分前十重仓股还出现持股数短时间内由“100到0”的数字显性变化，背后是不是有除了调仓以外的其他原因？\n对此，均衡量化主动ETF天弘基金经理林心龙接受了财联社独家专访，详细解释了两者之间的关系。\nPCF清单存在“天然舍入误差”\n林心龙解释，PCF清单是服务ETF一级市场申赎交收的业务",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_512bb501ae47",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
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
          "score": 19,
          "reasons": [
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 72,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 100,
          "reasons": [
            "命中私募销售运营核心主题 3 项",
            "命中关联主题 2 项",
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
      "title": "斯坦福博士零AI苦研黎曼猜想12年，公开8小时反遭AI挑错！",
      "sourceUrl": "https://wallstreetcn.com/articles/3786594",
      "publishedAt": "2026-11-24T14:44:32.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "Anthropic IPO次日，悬置167年的数学头号难题，在同一天收到了两份证明。\n一份出自人类之手，苦研12年。\n一份出自人类与Claude之手，用时41天。\n这两份证明，在短短两天内迎来了截然不同的结局。\n前者公开约8小时，就被人借助AI挑出问题；后者发布第二天，拿到了Lean与Mathlib社区的联合确认。\n更让人意外的是，人类与Claude联手这次连正经论文都没写。\n交出来的，只有4页人",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8694922df58b",
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
      "title": "黄仁勋回归提振亚洲股市，韩股涨7%，SK海力士涨逾8%，日经一度涨5%",
      "sourceUrl": "https://wallstreetcn.com/articles/3786560",
      "publishedAt": "2026-11-24T14:40:25.000Z",
      "fetchedAt": "2026-11-24T09:48:12.537Z",
      "timeConfidence": "source",
      "summary": "英伟达董事会恢复黄仁勋首席执行官职务，点燃全球科技股行情。亚太市场周二全线大涨，芯片相关个股领涨，MSCI亚太指数创逾三个月来最大单日涨幅，此前该指数已连跌八个交易日、逼近熊市边缘。\n\n周二亚太时段，MSCI亚太股票指数上涨3.7%，有望创下7月31日以来的最大单日涨幅。韩国综合股价指数涨幅超过7%，日本股市在长假后复市，日经225指数涨幅一度扩大至5%。\n美元指数小幅回落0.12%。布伦特原油下",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3285dce56ae8",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
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
      "eventId": null,
      "timeFixed": true
    },
    {
      "title": "德银全球展望：2027年标普500剑指9000点，还有这些隐忧",
      "sourceUrl": "https://www.yicai.com/news/103452744.html",
      "publishedAt": "2026-11-24T14:39:38.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "德银预计2027年全球经济增速将从2026年的3.3%小幅提升至3.5%，整体通胀率则从3.9%缓慢降至3.7%。德意志银行研究部近日发布报告《2027年全球经济展望：高预期，但充满风险》，预计2027年全球经济增速将从2026年的3.3%小幅提升至3.5%，整体通胀率则从3.9%缓慢降至3.7%。\n\n德银团队预测，标普500指数在2027年底攀升至9000点的高位，较当前水平约有25%的上涨空间",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3e6008ac6a13",
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
      "title": "美消费电子零售巨头销售增速创五年新高 计算机、AI眼镜需求助力",
      "sourceUrl": "https://www.cls.cn/detail/2543382",
      "publishedAt": "2026-11-24T14:33:48.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 史正丞）在消费电子产品面临多轮涨价压力之际，美国消费电子零售巨头百思买（Best Buy）交出了一份远超市场预期的季度成绩单，并上调财年业绩指引\n受此带动，百思买周二开盘时涨超2%，今年以来该股已上涨超50%，月初刚创出2022年3月以来的新高。\n\n（百思买周线图，来源：TradingView）\n百思买周二公布的财报显示，截至10月31日的2027财年第三季度，公司营收",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bb7f086d4643",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 73,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "3万多辆中国车，摆上英国二手市场的秤",
      "sourceUrl": "https://wallstreetcn.com/articles/3786618",
      "publishedAt": "2026-11-24T14:32:05.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "作者 | 周智宇\n英国的二手车行里，已有3万多辆中国车挂牌待售。\n英国估值机构Cazana于11月23日披露，10月，其监测的十个中国品牌二手车零售挂牌量环比增长10%，总量超过3万辆。统计覆盖2022年春季及之后上牌的车辆，报告列出的在售车辆中，MG约1.4万辆，比亚迪接近4000辆。\n比亚迪2023年在英国的新车注册量还只有1600辆，到2025年已达5.1万辆。两年前刚进入当地市场的Omod",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4c120d97375a",
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
      "title": "B站三季度盈利8亿元 CEO陈睿称很多B站用户不看短剧",
      "sourceUrl": "https://www.caixin.com/2026-11-24/102508406.html",
      "publishedAt": "2026-11-24T14:28:50.000Z",
      "fetchedAt": "2026-11-24T14:51:53.734Z",
      "timeConfidence": "source",
      "summary": "公司广告收入同比增长20%，陈睿称其内容消费习惯并不是追求轻松刺激的“杀时间”\n       　　【财新网】11月24日，哔哩哔哩（NASDAQ：BILI/09626.HK，下称“B站”）披露三季度业绩，总营收83.2亿元，同比增长8%，维持前两季度增速；净利润5.04亿元，同比增加7%；非通用会计准则（Non-GAAP）下的经调整净利润为8.33亿元，同比增长5.8%。\n　　受业绩带动，11月2",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f54b0b2bab93",
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
      "title": "小米三季度经调整净利润下滑近六成 预计明年存储成本仍承压",
      "sourceUrl": "https://www.caixin.com/2026-11-24/102508402.html",
      "publishedAt": "2026-11-24T14:22:15.000Z",
      "fetchedAt": "2026-11-24T14:51:53.734Z",
      "timeConfidence": "source",
      "summary": "卢伟冰认为DRAM供需紧张局面短期内难以缓解，手机平均售价将继续提升，汽车业务亦将面临成本上涨压力\n       　　【财新网】存储成本持续上涨、汽车业务增长承压、AI投入增加，小米业绩仍未走出下行区间。11月24日晚间，小米集团（01810.HK）发布三季度财报，当季录得营收1072.40亿元，同比下滑5.2%、环比下滑1.5%；经调整净利润为48.84亿元，同比下滑56.8%、环比下滑21.5",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ad018d6097e6",
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
      "title": "韦德布什首次覆盖Anthropic：给予“跑赢大盘”评级 目标价120美元",
      "sourceUrl": "https://www.cls.cn/detail/2543371",
      "publishedAt": "2026-11-24T14:11:08.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 夏军雄）韦德布什证券（Wedbush Securities）认为，尽管人工智能（AI）公司Anthropic上市初期股价波动剧烈，但其股价仍有较大上涨空间。\n这家投资机构首次覆盖Anthropic股票，给予其“跑赢大盘”评级，并将目标价定为120美元，较周一收盘价（87.64美元）有约37%的上涨空间。\n韦德布什分析师伊加尔·阿鲁尼安（Ygal Arounian）周一（",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_434962dc6142",
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
      "title": "蚂蚁发AI数据库平台 传统数据库AI营收超1亿元",
      "sourceUrl": "https://www.caixin.com/2026-11-24/102508396.html",
      "publishedAt": "2026-11-24T14:07:33.000Z",
      "fetchedAt": "2026-11-24T14:51:53.734Z",
      "timeConfidence": "source",
      "summary": "数据库公司OceanBase7月开始首轮外部融资，杨冰告诉财新，对于IPO已经做好准备\n       　　【财新网】“研发团队现在是一分为二、齐头并进的状态。传统数据库产品成熟度更高，我们是国内国外都做的，而且我不觉得国内数据库到了不需要去做的状态，在各方面还需要很多的投入，”11月24日，OceanBase CEO杨冰在蚂蚁OceanBase AI数据大会后接受财新采访时表示，对于未来上市，他称",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ce9f6ee68163",
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
      "title": "上海市委常委会举行扩大会议：坚决拥护党中央对陈吉宁涉嫌严重违纪违法进行审查调查的决定",
      "sourceUrl": "https://www.yicai.com/news/103452815.html",
      "publishedAt": "2026-11-24T14:07:08.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "会议指出，要坚定不移推动全面从严治党向纵深发展。上海市委常委会今晚（11月24日）举行扩大会议，通报陈吉宁涉嫌严重违纪违法，目前正接受中央纪委国家监委审查调查。\n\n与会同志一致表示，坚决拥护党中央决定，坚决把思想和行动统一到党中央决定精神上来。中央纪委国家监委对陈吉宁涉嫌严重违纪违法进行审查调查，充分体现了以习近平同志为核心的党中央持之以恒推进全面从严治党的坚定决心，充分释放了反腐败斗争一步不停歇",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b2edd5da5b45",
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
      "title": "华为AI专利超8000件 2025年专利许可收入8亿美元",
      "sourceUrl": "https://www.caixin.com/2026-11-24/102508391.html",
      "publishedAt": "2026-11-24T14:04:02.000Z",
      "fetchedAt": "2026-11-24T14:51:53.734Z",
      "timeConfidence": "source",
      "summary": "华为AI相关专利占比13%，是无限通讯（占比41%），终端设备（占比16%）之外第三大专利方向\n       　　【财新网】2025年，华为专利许可收入8亿美元。11月24日，华为在2026年创新和知识产权论坛上公布一系列研发投入和专利相关数据。\n　　“华为AI相关专利超过8000件，占比13%，”华为业务规划与重大项目部部长张肖午介绍，在活跃授权专利中，无线通信占比41%，终端设备占比16%：“",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2682e7f66ac5",
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
      "title": "AI信用危机、美国经济硬着陆？美银Hartnett预判2027年两大意外",
      "sourceUrl": "https://wallstreetcn.com/articles/3786617",
      "publishedAt": "2026-11-24T14:01:26.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "2027年全球市场可能迎来哪些意外？美国银行首席投资策略师Michael Hartnett（迈克尔·哈特奈特）建议投资者上半年暂缓加仓风险资产，等待全球加息周期在明年春季结束后，再转向周期性板块。\n在其基准情景中，全球经济有望实现软着陆，周期性板块将成为下半年投资主线。但市场也面临两大尾部风险：AI投资热潮引发信用危机，以及美国经济意外硬着陆。\n具体而言，哈特奈特预计，全球央行到明年6月前仍将累计",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ce333172cc98",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 74,
      "rawScore": 74,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
      "tierGate": 60,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "利息收入接棒佣金，成老虎国际第一大收入，收入结构为何变了？",
      "sourceUrl": "https://www.cls.cn/detail/2543352",
      "publishedAt": "2026-11-24T13:52:21.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者高艳云）11月24日美股盘前，老虎国际发布2026年第三季未经审计财务数据，公司第三季实现营收1.73亿美元，同比微降1.5%，环比降5.3%；季内归母non-GAAP净利润为0.50亿美元，同比降12.28%，环比增16.4%。\n\n利息收入“接棒”佣金成为第一大收入来源，“以利息补佣金”趋势在本季愈发清晰。三季度，老虎利息收入为0.83亿美元，同比增12.9%，该收入已",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b53e64f498e6",
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
      "title": "央行将开展5000亿元逆回购操作 11月MLF续作2000亿元",
      "sourceUrl": "https://www.cls.cn/detail/2543357",
      "publishedAt": "2026-11-24T13:50:09.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者 曹韵仪）今日，央行预告将于11月25日开展8000亿元MLF操作，并开展5000亿元7天期逆回购操作。\n由于11月有10000亿元MLF到期，这意味着当月MLF续作缩量2000亿元，考虑到11月两个期限品种的买断式逆回购操作已缩量3000亿元，当月中期流动性操作工具合计缩量5000亿元，扭转了此前连续四个月续作加量的势头。\n业内人士对财联社记者表示，11月中期流动性操作",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7afe5a443c46",
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
          "score": 51,
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
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_2cf716748ce1"
    },
    {
      "title": "部分固收类理财产品净值已修复，多家银行理财子：市场逐渐平复，跨年行情或仍可期",
      "sourceUrl": "https://www.cls.cn/detail/2543354",
      "publishedAt": "2026-11-24T13:49:37.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者郭子硕）11月以来的一轮债市调整，让理财产品净值成为市场关注的焦点。部分产品净值随债市下探，而近期随着债市企稳，已有产品率先修复。\n从今日盘面看，10年期国债收益率下行0.3bp报1.5820%，超长债下行0.8bp报2.0260%，而1年期国债收益率上行2bp。政策面亦有新动作：央行尾盘公告将于11月25日开展5000亿元7天期逆回购操作，同时有1万亿元MLF到期。\n债",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_af71409cca3b",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 91,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 65,
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "财联社11月24日电，巴西雷亚尔兑美元涨幅扩大至2%。",
      "sourceUrl": "https://www.cls.cn/detail/2543353",
      "publishedAt": "2026-11-24T13:43:30.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日电，巴西雷亚尔兑美元涨幅扩大至2%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_dfa1b34f962a",
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
      "eventId": null
    },
    {
      "title": "合肥酷芯微电子股份有限公司通过港交所上市聆讯",
      "sourceUrl": "https://www.cls.cn/detail/2543351",
      "publishedAt": "2026-11-24T13:42:30.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "【合肥酷芯微电子股份有限公司通过港交所上市聆讯】财联社11月24日电，利弗莫尔证券显示，合肥酷芯微电子股份有限公司更新聆讯后资料集，意味着该公司港交所IPO通过聆讯。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_fe2eba328ebe",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "公募新发规模连续八年破万亿，新发主力换了一轮",
      "sourceUrl": "https://www.cls.cn/detail/2543349",
      "publishedAt": "2026-11-24T13:41:54.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者 陈永辉）随着2026年度收官临近，基金发行进入冲刺阶段。以基金成立日为统计口径，Wind数据显示，截至11月23日，全年新成立基金1605只，发行总规模10479.13亿元。这标志着国内新基金年度发行规模自2019年以来，已连续第八年站稳万亿元关口。\n与往年相比，今年新基金市场最显著的特征是产品结构的深刻变化。主动权益类产品占比继续扩大，合计贡献了超过一半的新发规模。前",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_08dd06f7c9da",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 75,
      "rawScore": 75,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 53,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
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
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "财联社11月24日晚间新闻精选",
      "sourceUrl": "https://www.cls.cn/detail/2543348",
      "publishedAt": "2026-11-24T13:38:47.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "【财联社11月24日晚间新闻精选】\n1、央行：为保持银行体系流动性充裕，2026年11月25日开展8000亿元MLF操作，期限为1年期。\n2、商务部公告2024年第46号（《关于加强相关两用物项对美国出口管制的公告》）第二款暂停实施。\n3、欧盟宣布对混动汽车采取临时保障措施；中国商务部：坚决维护中国相关产业正当权益。\n4、工信部：北京、河北、上海、江苏、浙江、安徽、湖北、广东8个省市获批开展6G试",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_df97cf409b89",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 67,
      "rawScore": 67,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 8,
        "evidence": 20,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "namedSubject": 6,
        "regDocument": 6,
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
          "score": 33,
          "reasons": [
            "命中关联主题 1 项",
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
      "title": "三季度营收利润双增，陈睿：B站没有受到短剧影响",
      "sourceUrl": "https://www.yicai.com/news/103452770.html",
      "publishedAt": "2026-11-24T13:37:30.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "陈睿认为，短内容和B站内容相比是“吃薯片和吃米饭的区别”。11月24日盘后，哔哩哔哩（以下简称“B站”）发布第三季度财报。三季度B站营收83.2亿元，同比增长8%；净利润约5亿元，同比增长7%；经调整净利润为8.3亿元，同比增长5%；毛利率由上年同期的36.7%升至37.3%。晚间美股盘前，B站（BILI.US）一度涨近4%，但随后转跌，截至晚21:00，跌幅为0.73%。海豚投研认为，三季度B站",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a7914f0094bb",
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
      "title": "祖名股份：控股股东及高管拟协议转让不超17%股份",
      "sourceUrl": "https://www.cls.cn/detail/2543346",
      "publishedAt": "2026-11-24T13:37:26.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "【祖名股份：控股股东及高管拟协议转让不超17%股份】财联社11月24日电，祖名股份(003030.SZ)公告称，公司控股股东、实际控制人蔡祖明、王茶英及其一致行动人杭州纤品投资有限公司，公司董事、高级管理人员李国平及高级管理人员赵大勇，计划自公告披露之日起3个交易日后的3个月内，通过协议转让方式合计转让公司股份不高于2121.54万股，占公司总股本的17%。其中，海南优赣投资中心(有限合伙)拟受让",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_9e8e14489755",
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
      "eventId": null
    },
    {
      "title": "小米卢伟冰：汽车“双线布局”没有形成内部客户抢夺，明年要出海欧洲",
      "sourceUrl": "https://wallstreetcn.com/articles/3786602",
      "publishedAt": "2026-11-24T13:36:59.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "在11月24日晚间的业绩会上，小米集团合伙人、集团总裁卢伟冰表示，第三季度国内汽车市场大盘承压，对于小米来说，完成了纯电和增程双线布局，且增程新品上市后反而带来了纯电产品销量的增长，没有形成内部客户抢夺。小米汽车会用创新满足用户需求。他同时透露，明年小米汽车将出海欧洲，或首先在德国落地。\n更新中风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0d0af83a5dc0",
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
      "title": "神雾节能：2024年年报存在虚假记载 11月26日复牌并实施其他风险警示股票简称变更为ST节能",
      "sourceUrl": "https://www.cls.cn/detail/2543343",
      "publishedAt": "2026-11-24T13:35:20.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "【神雾节能：2024年年报存在虚假记载 11月26日复牌并实施其他风险警示股票简称变更为ST节能】财联社11月24日电，神雾节能(000820.SZ)公告称，公司及相关当事人于2026年11月24日收到证监会江西监管局下发的《行政处罚事先告知书》。根据告知书，公司子公司通过虚增承包的光伏电站建设项目施工合同金额、工程量等方式，虚增2024年营收6945.83万元、营业成本5648.94万元、利润总",
      "sourceName": "财联社",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f26a6e7fc907",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 78,
      "rawScore": 78,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
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
        "对展业/配置/合规有直接影响",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 41,
          "reasons": [
            "命中关联主题 1 项",
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
          "score": 41,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "官方监管",
        "快讯"
      ],
      "eventId": "event_4a122eba04e5"
    },
    {
      "title": "布伦特原油期货价格涨超1%",
      "sourceUrl": "https://www.cls.cn/detail/2543341",
      "publishedAt": "2026-11-24T13:31:30.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "【布伦特原油期货价格涨超1%】财联社11月24日电，WTI原油期货价格涨0.84%，报80.844美元/桶；布伦特原油期货价格涨1.02%，报87.561美元/桶。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c964440acf24",
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
      "title": "太古周期高点套现国泰航空股权 年内三次减持套现约百亿港元",
      "sourceUrl": "https://www.cls.cn/detail/2543331",
      "publishedAt": "2026-11-24T13:30:05.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 冯轶） 随着国泰航空(00293.HK)股价创出逾11年新高之际，大股东太古集团(00019.HK)再度出手减持套现。\n11月23日，太古股份有限公司公告拟以每股14.23港元的价格配售约2.53亿股国泰航空股份，较当日收市价折让约8%，涉资约35.75亿港元。\n而值得一提的是，这已是年内太古集团第三次变现国泰航空股权。\n据公告显示，此前太古集团曾于3月及6月分别已约1",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_45acf463530f",
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
      "title": "美股盘前要闻一览：纳斯达克100指数期货跌超2%，美股恐慌指数VIX拉升",
      "sourceUrl": "https://www.cls.cn/detail/2543340",
      "publishedAt": "2026-11-24T13:29:29.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "【美股盘前要闻一览：纳斯达克100指数期货跌超2%，美股恐慌指数VIX拉升】财联社11月24日电，投资者需重点关注的美股市场财经要闻如下：\n1、美股三大股指期货全线下挫，道琼斯指数期货跌0.66%，标普500指数期货跌1.27%，纳斯达克100指数期货跌2.21%。\n2、国际油价小幅上涨，WTI原油期货价格涨0.60%，报80.650美元/桶；布伦特原油期货价格涨0.80%，报87.372美元/桶",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_41857c681530",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "英伟达回落5% 美股反弹成色面临考验 | 今夜看点",
      "sourceUrl": "https://www.cls.cn/detail/2543335",
      "publishedAt": "2026-11-24T13:29:29.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 史正丞）北京时间周二晚间，经历昨天彻夜暴涨的美股市场，即将迎来反弹成色的考验。\n截至发稿，纳斯达克100指数期货（2612合约）跌2.06%，标普500指数期货跌1.17%，道指期货跌0.63%。周一随着科技股猛烈反弹，纳指收涨6.51%，创去年4月以来的最大单日涨幅。\n\n（纳指日线图，来源：TradingView）\n在盘前交易阶段，昨日暴涨超31%的英伟达回落5.49",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0dcdb5c3bc2d",
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
        "深度研究"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "百亿化橘红背后的金融力量",
      "sourceUrl": "https://www.yicai.com/news/103452740.html",
      "publishedAt": "2026-11-24T13:28:26.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "产业跑得快，钱要跟得上。小小润喉糖甜在舌尖，百亿产业链强在账本。如何能让“土特产”持续火下去？广东茂名交出了一份出色的答卷。\n\n11月15日，深圳APEC领导人会议周新闻中心里，广东省委书记黄坤明了解为中外记者准备的媒体包时，看到工作人员取出一盒化橘红清润糖，他脱口而出三个字：“这个好”。这款产自茂名化州的润喉糖再次走进国内外视野。\n\n一颗小小的化橘红润喉糖，是广东特色农产品的亮眼名片。这份出圈的",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f87ee86e2557",
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
      "title": "港股公告精选｜周大福中期营收超440亿港元 金山云三季度收入同比增约四成",
      "sourceUrl": "https://www.cls.cn/detail/2543333",
      "publishedAt": "2026-11-24T13:27:54.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 冯轶）财联社为您带来今日港股重要公告\n1）公司要闻\n阿里健康(00241.HK)：公布截至2026年9月30日止中期业绩，收入182.28亿元，同比增长9.2%；净利润11.12亿元，同比减少12.2%。\n小米集团-W(01810.HK)：三季度收入1072.4亿元，同比减少5.2%；经调整净利润48.84亿元，同比减少56.8%。期内“手机×AIoT”分部收入834亿",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ecc4bd9e4482",
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
        "深度研究"
      ],
      "eventId": "event_c68d651d4ff9"
    },
    {
      "title": "财联社11月24日电，沙特阿拉伯估计2026年预算赤字将达到GDP的4.9%。",
      "sourceUrl": "https://www.cls.cn/detail/2543336",
      "publishedAt": "2026-11-24T13:24:48.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日电，沙特阿拉伯估计2026年预算赤字将达到GDP的4.9%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_06a844ce67cd",
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
          "score": 29,
          "reasons": [
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "全球风险偏好回升，AI进入“算细账”时刻",
      "sourceUrl": "https://www.yicai.com/news/103452743.html",
      "publishedAt": "2026-11-24T13:19:34.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "市场分析人士认为，后市主线仍在AI，但逻辑正从资本开支扩张转向回报、融资与执行能力。在科技板块带动下，全球风险偏好回升。\n\n当地时间11月23日，英伟达恢复黄仁勋首席执行官职务的消息，成为美股科技板块报复性反弹的关键催化，英伟达股价暴涨逾30%，费城半导体指数飙升14%。亚洲AI供应链11月24日也出现大幅反弹。\n\n摩根士丹利基金量化投资部总监余斌对第一财经表示，当前科技板块的高波动已是常态，市场",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8020e388a678",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 82,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
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
      "title": "财联社11月24日电，美国至11月7日当周ADP就业人数周度变动为2.1万人，前值由2.375万人修正为2.3万人。",
      "sourceUrl": "https://www.cls.cn/detail/2543325",
      "publishedAt": "2026-11-24T13:15:52.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日电，美国至11月7日当周ADP就业人数周度变动为2.1万人，前值由2.375万人修正为2.3万人。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2a295fbb7b82",
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
      "title": "Anthropic上市5天即破发，2万亿美元估值昙花一现！",
      "sourceUrl": "https://wallstreetcn.com/articles/3786614",
      "publishedAt": "2026-11-24T13:14:53.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "上市不足一周，Anthropic便跌破IPO发行价。这家备受市场追捧的前沿AI公司迅速遭遇股价回撤，也让投资者重新审视AI企业的高估值能否得到持续支撑。\n周二盘前，Anthropic股价一度跌破83美元的IPO发行价，最新报83.4美元，跌幅约5%。相比11月19日上市首日111.50美元的开盘价，股价已明显回落。作为首家登陆公开市场的前沿AI公司，Anthropic的表现也被视为观察AI行业投资",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_292c542c4694",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "eventId": null
    },
    {
      "title": "财联社11月24日电，奥本海默将迈威尔目标价从425美元下调至325美元。",
      "sourceUrl": "https://www.cls.cn/detail/2543324",
      "publishedAt": "2026-11-24T13:13:39.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日电，奥本海默将迈威尔目标价从425美元下调至325美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_fd3d890fd7a2",
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
      "title": "财联社11月24日电，美股恐慌指数VIX拉升，升至32上方，日内大涨22%。",
      "sourceUrl": "https://www.cls.cn/detail/2543321",
      "publishedAt": "2026-11-24T13:10:38.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日电，美股恐慌指数VIX拉升，升至32上方，日内大涨22%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c22d809ce280",
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "高盛：黄仁勋回归也改变不了AI交易逻辑，真正考验是万亿级资本开支能否赚回钱",
      "sourceUrl": "https://wallstreetcn.com/articles/3786615",
      "publishedAt": "2026-11-24T13:06:38.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "英伟达的高管更迭风波并不会从根本上改变AI投资交易的逻辑走向。在高盛欧洲股票策略师Sharon Bell看来，企业能否从巨额资本开支中赚取足够回报，才是决定AI行情走势的核心变量。\n周一，英伟达股价单日暴涨31%，创下2003年以来最大单日涨幅，导火索是公司董事会宣布黄仁勋重返首席执行官职位。然而Bell在接受彭博电视台采访时表示，这一管理层变动\"不会产生太大影响\"，市场围绕单一公司的剧烈波动，更",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_47575c80ab1a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 52,
      "rawScore": 52,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
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
          "score": 69,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
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
      "eventId": null
    },
    {
      "title": "加拿大帝国商业银行计划在阿布扎比设立资本市场业务据点",
      "sourceUrl": "https://www.cls.cn/detail/2543317",
      "publishedAt": "2026-11-24T13:05:40.000Z",
      "fetchedAt": "2026-11-24T14:54:32.100Z",
      "timeConfidence": "source",
      "summary": "【加拿大帝国商业银行计划在阿布扎比设立资本市场业务据点】财联社11月24日电，加拿大帝国商业银行（CIBC）宣布，计划通过阿布扎比全球市场（ADGM）在中东设立常设资本市场业务据点，相关计划仍需获得必要的监管批准。新办公室获批运营后，将成为CIBC在中东地区的主要业务门户，重点服务海湾合作委员会（GCC）地区的主权财富基金、家族办公室及机构投资者，并拓展企业融资、能源转型、基础设施及资本市场业务。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a5332a3b5380",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 73,
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
          "score": 44,
          "reasons": [
            "命中关联主题 2 项",
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
          "score": 66,
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "单车售价同环比双降、汽车业务三季度承压 增程与出海将成小米未来“支点”",
      "sourceUrl": "https://www.cls.cn/detail/2543285",
      "publishedAt": "2026-11-24T13:03:14.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者徐昊）11月24日，小米集团发布2026年第三季度财报。财报显示，小米集团第三季度总收入为1,072亿元，同比减少5.2%；经调整净利润48.84亿元，同比减少56.8%。\n\n\n细分收入结构中，小米新能源汽车及AI创新业务第三季度实现收入239亿元，同比下滑17.7%，环比下滑4.1%。其中，新能源汽车业务收入227亿元，同比下降19.9%，环比下降5.1%；AI创新业务",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_65fe1c437730",
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
      "title": "“逢高减仓，别追黄仁勋逼空行情”！BTIG警告：纳指历史12次类似反弹后，无一例外全部出现回撤",
      "sourceUrl": "https://wallstreetcn.com/articles/3786613",
      "publishedAt": "2026-11-24T13:02:34.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "纳斯达克100指数周一单日暴涨7%，英伟达股价飙升30%，空头遭遇\"史诗级\"逼空。然而，华尔街一位在此轮抛售中屡屡精准预判的技术策略师发出严厉警告：这轮反弹是减仓的窗口，而非追多的信号。\nBTIG首席技术策略师Jonathan Krinsky回溯纳指自1985年成立以来的全部历史数据，找到12次单日暴跌5%后次日立即反弹5%或以上的先例，结论清晰而令人警醒。\"数据表明，投资者应利用未来一两天的强势",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_aa6746dae469",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 58,
      "rawScore": 58,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
          "score": 68,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 77,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
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
      "title": "险资三季度债券投资余额升至20.73万亿元，9月超长债净买入规模回落",
      "sourceUrl": "https://www.cls.cn/detail/2542911",
      "publishedAt": "2026-11-24T13:01:48.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 李响 实习生 赵睿铭）  三季度，保险资金配置持续向债券倾斜，配置占比突破五成。\n国家金融监管总局披露的数据显示，截至三季度末，保险公司资金运用余额41.64万亿元。按人身险、财产险公司合并口径测算，债券余额升至20.73万亿元，占两类公司资金运用余额的51.54%，较二季度末增加8187.41亿元。\n相较于上半年增配权益不同，三季度险资配置债券比重提高的同时，买入节奏",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8cd6e23fb0d1",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 94,
      "rawScore": 94,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 63,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "命中关联主题 1 项",
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
          "score": 54,
          "reasons": [
            "命中关联主题 3 项",
            "含可核对要素"
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
      "title": "一个月两轮调整信用债高位回落进度不均，高等级二永债修复 6BP，低评级长端城投债仅修复1BP",
      "sourceUrl": "https://www.cls.cn/detail/2543127",
      "publishedAt": "2026-11-24T13:01:27.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 杨斌）赎回压力缓和后，信用债持续修复，但分层特征明显。银行“二永债”与高评级非金信用债先行修复，弱资质主体的风险补偿重估仍在延续。\n机构认为，即使信用风险舆情冲击平息，当前信用下沉也宜谨慎。\n信用债一个月内历经两轮调整与修复\n10月末，个别信用债主体风险事件冲击债市，部分机构预防性赎回引发利率债、信用债同步下跌。信用债受冲击程度大于利率债，流动性最好的二永债回调幅度居前",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_dd0666b14ee1",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 35,
          "reasons": [
            "命中关联主题 2 项"
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
      "title": "胜宏科技披露2026年前三季度利润分配方案，拟10派10元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083762681194887",
      "publishedAt": "2026-11-24T12:58:13.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，胜宏科技公告，公司对2026年前三季度利润进行分配，分配方案如下：以实施2026年前三季度权益分派时股权登记日的总股本扣除公司回购专用证券账户股数为基数，向全体股东按每10股派发现金股利10元（含税）。以截至本公告披露日公司扣除回购专户的总股本初步测算，预计本次现金分红金额约为人民币9.83亿元，约占公司2026年前三季度归母净利润的29.04%。具体分红金额以公司实际分派为准。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_daafb6c261ea",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "AI进化速递 | 脑机接口公司Paradromics与英伟达达成技术合作",
      "sourceUrl": "https://www.yicai.com/news/103452681.html",
      "publishedAt": "2026-11-24T12:53:03.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "蚂蚁OceanBase AI业务收入首次破亿。①小鹏发布图灵世界模型WorldGPT；\n\n②腾讯混元发布并开源第三代翻译模型HyMT3；\n\n③商汤发布并开源SenseNova U1.6；\n\n④全国首个“人工智能产业保险共同体”成立；\n\n⑤豆包个人AI助理产品“小豆”开启邀请制公测；\n\n⑥蚂蚁OceanBase AI业务收入首次破亿；\n\n⑦谷歌拟收购伦敦国王十字区6 Pancras Square办公",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_193b8eed8817",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 71,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 0,
        "recency": 15,
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "热门中概股美股盘前多数下跌，阿里巴巴跌超2%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083756534802823",
      "publishedAt": "2026-11-24T12:51:58.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，热门中概股美股盘前多数下跌，截至发稿，阿里巴巴、京东、拼多多、百度、网易、理想汽车跌超2%，蔚来、微博跌超1%，哔哩哔哩跌0.73%；老虎证券涨超3%，小鹏集团涨超2%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b30482833db4",
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
          "score": 50,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
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
      "title": "美股大型科技股盘前普跌，英伟达跌超4%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083752835639683",
      "publishedAt": "2026-11-24T12:48:12.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，美股大型科技股盘前普跌，截至发稿，SK海力士、英特尔跌超5%，英伟达、Anthropic跌超4%，Meta跌超1%，亚马逊跌0.86%，谷歌跌0.55%，微软跌0.43%，奈飞跌0.31%，特斯拉跌0.29%，苹果跌0.11%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_295c3dc94a83",
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
      "title": "不惜溢价46%！赛诺菲豪掷410亿美元收购美国生物科技公司",
      "sourceUrl": "https://wallstreetcn.com/articles/3786608",
      "publishedAt": "2026-11-24T12:46:02.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "赛诺菲正以三年来制药行业规模最大的一笔并购，押注对冲核心药物专利悬崖的风险。\n这家法国制药巨头周二宣布，以每股175美元现金收购美国生物科技公司Insmed，交易总价约410亿美元，较消息曝光前一个交易日的收盘价溢价约46%。赛诺菲首席执行官Belén Garijo称此次收购是\"加速增长的绝佳机会\"。交易获两家公司董事会批准，预计于明年上半年完成。\n这笔收购直接回应了赛诺菲最迫切的战略压力——其头",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5cdc4a0ae2b8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 80,
      "rawScore": 80,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "confidence": "high",
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
          "score": 20,
          "reasons": [
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 51,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "含可核对要素"
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
      "title": "欧盟推出混动进口“配额总量” 商务部回应",
      "sourceUrl": "https://www.cls.cn/detail/2543273",
      "publishedAt": "2026-11-24T12:45:38.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者 刘阳）随着混动汽车进口量大幅增长，欧盟委员会认为，有必要实施保障措施。11月23日，欧盟委员会官方刊登了第(EU)2026/2614号执行条例，宣布自2026年12月1日起，对进口的新型混合动力汽车（包括HEV、PHEV以及轻混MHEV）实施为期200天（至2027年6月18日）的临时保障措施。\n“中方已注意到相关消息。”11月24日，商务部新闻发言人就此表态，当前，全",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2be1cd85ac01",
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
      "title": "卢伟冰谈“最难第三季度”：小米如何穿越成本周期",
      "sourceUrl": "https://wallstreetcn.com/articles/3786612",
      "publishedAt": "2026-11-24T12:43:32.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "“我感觉是智能手机行业至少是我从业以来最难的一个季度。”\n11月24日，在小米集团2026年第三季度业绩媒体电话会上，小米集团合伙人、总裁卢伟冰在回应华尔街见闻·全天候科技提问时，如此评价刚刚过去的第三季度。\n这一季度，存储等核心零部件价格在高位继续上涨，国内汽车、IoT等市场也面临需求不足及行业竞争加剧的压力。\n尽管外部经营环境复杂，小米仍连续两个季度稳住了千亿营收。\n财报显示，今年第三季度，小",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_870cf23b96e5",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 55,
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
          "score": 67,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "title": "大手笔！350亿PCB概念股拟30亿元投建高端覆铜板项目|盘后公告集锦",
      "sourceUrl": "https://www.cls.cn/detail/2543271",
      "publishedAt": "2026-11-24T12:42:54.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "今日聚焦\n【南亚新材：全资子公司拟28.8亿元投建高端覆铜板生产项目】\n南亚新材(688519.SH)公告称，公司全资子公司江西南亚拟投资建设高端覆铜板生产项目，计划总投资额28.8亿元，拟采取分期规划、分步实施方式。项目选址江西省吉安市井冈山经济技术开发区，拟购置土地约459亩，建设期预计60个月。项目聚焦高端覆铜板赛道，规避通用覆铜板市场同质化竞争且符合AI算力、高速通信、车载电子、新能源等领",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0b60e936e2af",
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
      "title": "沙特阿拉伯预计2027年财政收入为1.202万亿里亚尔",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083742864861825",
      "publishedAt": "2026-11-24T12:38:03.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "沙特阿拉伯预计2027年财政收入为1.202万亿里亚尔。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_971778718221",
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
      "title": "B站三季度广告收入增长20%，用户活跃度提升支撑商业化",
      "sourceUrl": "https://wallstreetcn.com/articles/3786611",
      "publishedAt": "2026-11-24T12:36:10.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "用户在B站停留的时间更长了，广告也继续成为公司收入增长的主要动力。\n11月24日，哔哩哔哩发布2026年第三季度未经审计财报。当季营收83.17亿元，同比增长8%；净利润5.04亿元，同比增长7%；经调整净利润8.28亿元，同比增长5%。毛利率由上年同期的36.7%升至37.3%，盈利能力继续改善。\n广告是这份成绩单中最突出的业务。第三季度，广告收入30.87亿元，同比增长20%，规模已接近增值服",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7fc5c4d07bb9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "title": "A股光模块冲高回落，产业链确定性是否修复仍待验证",
      "sourceUrl": "https://www.yicai.com/news/103452664.html",
      "publishedAt": "2026-11-24T12:35:15.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "人事变动并未带来新的AI基建的技术、需求或产品迭代一次人事变动，正在被全球AI产业链重新定价。黄仁勋回归英伟达的消息，隔夜推动美股科技股走强，11月24日亚太市场接力亢奋，A股光模块板块早盘一度大涨超7%，午后遭遇抛压，收盘显著回落，不少龙头个股收盘股价翻绿。\n\n黄仁勋被视为英伟达技术路线、供应链拓展与超大云客户关系的关键枢纽，其此前离职一度令全球AI数据中心产业链的连续性受到考验。随着黄仁勋的回",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6e8e597a7eae",
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
          "score": 91,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "谷歌计划收购伦敦国王十字区办公楼，进一步扩大英国AI研发中心",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083736984152710",
      "publishedAt": "2026-11-24T12:32:04.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "11月24日，谷歌宣布，公司计划收购位于伦敦国王十字区的6 Pancras Square大楼，以扩大其在伦敦的办公园区。谷歌表示，此次投资将与公司在伦敦的Central Saint Giles办公楼及即将启用的Platform 37项目共同构成重要的AI研发中心，预计相关办公场所将容纳数千名员工，参与Gemini、搜索和YouTube等产品的开发。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_fb32ed60c234",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "title": "AI洗牌外贸十强城市，中西部首个万亿外贸城市要来了",
      "sourceUrl": "https://www.yicai.com/news/103452625.html",
      "publishedAt": "2026-11-24T12:31:20.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "1~10月深圳、苏州、无锡和西安的外贸分别增长40.9%、55.1%、34%和121.8%，这些城市外贸高增速的原因都指向了AI。中国外贸的城市格局今年正在经历一场悄然却又剧烈的变动——深圳、苏州、无锡大幅增长，量增位升；不沿海、不沿边的内陆城市西安，更是一匹黑马，今年实现翻倍增长，全年有望挤进十强，并成为中西部首个破万亿的城市。\n\nAI带动十强变局\n\n2025年，全国进出口总值排名前十的城市依次",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f87319743ca8",
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
      "title": "摩根大通与汇丰首次在伦敦交易数字黄金",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083733150968450",
      "publishedAt": "2026-11-24T12:28:10.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "摩根大通等主要贵金属交易商首次在伦敦交易一种新型数字黄金，初步测试一套可能重塑这个全球最大黄金交易中心基础设施的新系统。世界黄金协会在声明中表示，摩根大通、汇丰和StoneX Group上周首次通过实物金条的部分所有权权益完成交易。新系统仍处于试验阶段，但如果成功推广，可能成为数十年来伦敦黄金市场结构最重要的新增机制之一。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_38dbdac23f08",
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
      "title": "卢伟冰谈内存涨价",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083728197216648",
      "publishedAt": "2026-11-24T12:23:08.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，11月24日，小米集团总裁卢伟冰在财报电话会上表示，短期内存芯片的价格一直处于一个非常高的位置，的确对公司经营利润造成了压力，但并没有影响对未来的坚定投资。“我们会持续加大在AI芯片、机器人等领域（的投资），并且把这些领域的投资逐步落地到我们人车家全生态的业务里面去。”卢伟冰表示，虽然内存成本上涨放缓，但仍处于一个非常高的位置。至于如何消化成本影响，关键是要用产品创新来兑换成本，“不能",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_860df6e38880",
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
      "title": "居民风险偏好回落，2027年保险“开门红”有望超预期",
      "sourceUrl": "https://www.yicai.com/news/103452638.html",
      "publishedAt": "2026-11-24T12:16:48.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "2027年“开门红”主打产品30年含红利后IRR约2.18%—2.68%。\n\n“如果有较为长期的闲散资金，推荐看看保险产品。今年的分红险卖得挺不错，产品第五年就‘回本’了，今天就投保了好几单了。”当第一财经记者走进一家银行机构咨询年底的投资产品时，银行理财经理热情推荐。\n\n迈入第四季度后，保险公司的2027年“开门红”又陆续启动。从市场情况来看，明年险企“开门红”的分红险产品成分更浓，渠道上则普遍",
      "sourceName": "第一财经",
      "category": "products",
      "tags": [
        "产品发布"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_54b45c83a3e0",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 20,
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
      "noiseCaps": [
        "营销与活动推广"
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
          "score": 97,
          "reasons": [
            "命中保险运营核心主题 3 项",
            "命中关联主题 1 项",
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
      "primaryScene": "insurance",
      "selectedForFeatured": false,
      "contentTags": [
        "产品动态"
      ],
      "eventId": null
    },
    {
      "title": "一财社论：构建社保基金刚性监督体系",
      "sourceUrl": "https://www.yicai.com/news/103452637.html",
      "publishedAt": "2026-11-24T12:16:38.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "法规建设上要由分散规范走向系统集成，治理行动上要形成合力，处罚效果上要更加凸显震慑力。11月23日，人力资源和社会保障部发布《社会保险基金监督条例（征求意见稿）》（下称“征求意见稿”），这是从立法、执法、司法、守法各环节加强社会保障工作，形成社会共治局面，守护好人民群众的每一分“养老钱”“保命钱”的重要体现。\n\n截至2026年9月底，全国基本养老保险、失业保险、工伤保险（含职业伤害保障）参保人数分",
      "sourceName": "第一财经",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1fba37927d25",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 89,
      "rawScore": 89,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 73,
          "reasons": [
            "命中保险运营核心主题 2 项",
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
          "score": 51,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
            "业务影响较高"
          ]
        }
      },
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "官方监管"
      ],
      "eventId": null
    },
    {
      "title": "英伟达杠杆产品一夜变脸，多空资金胜负互换",
      "sourceUrl": "https://www.yicai.com/news/103452634.html",
      "publishedAt": "2026-11-24T12:16:25.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "时差、杠杆与情绪：谁在决定英伟达产品的价格？一则人事公告，在全球科技市场上演了一场速度极快的多空胜负互换。\n\n11月23日，黄仁勋复职公告挂网后，英伟达（NVIDIA）股价写下2003年5月以来最大的一根日阳线。冲击波沿着半导体、科技指数向外传导，情绪从美股接力至亚太市场，A股、港股开盘集体跟涨，但高开之后资金分歧快速显现。\n\n跨市场时差之下，挂钩英伟达的杠杆产品表现更为极端。\n\n在公告落地前的一",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8392fbd48d71",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 5 项",
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
      "title": "蚂蚁OceanBase AI业务收入首次破亿，Agent时代的数据库该长什么样？",
      "sourceUrl": "https://www.yicai.com/news/103452584.html",
      "publishedAt": "2026-11-24T12:16:11.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "“当模型越来越先进，Agent Harness越来越成熟，最终瓶颈是如何解决数据层的挑战”。2026年还未结束，蚂蚁OceanBase海扬数据库 CEO杨冰一年的飞行里程已经是2020年公司成立那年的三倍多，这一年他见了几百个客户，聊起AI边界的不断拓广，不断理解现实世界、接管物理世界，他认为“在这样一个环境下，数据的挑战只会越来越大。”今日OceanBase正式发布湖库一体AI数据平台Ocean",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_56f3ebbf4518",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 45,
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
      "title": "广东超200家上市公司使用贷款回购增持股票",
      "sourceUrl": "https://www.yicai.com/news/103452613.html",
      "publishedAt": "2026-11-24T12:15:56.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "广东907家A股上市公司均按期三季度经营业绩。数据显示，广东上市公司合计实现营业收入8.9万亿元，同比增长10.7%；归母净利润6896亿元，同比增长7.1%；研发费用2518亿元，同比增长3.6%。近期，央行优化股票回购增持再贷款政策，将再贷款利率下调0.25个百分点至1%，股票回购增持再贷款由阶段性安排转为长期制度性安排。第一财经从广东省委金融办了解到，初步统计，广东有超200家上市公司、主要",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_17168344bd46",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 78,
      "rawScore": 78,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 21,
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
      "confidence": "medium",
      "why": [
        "专业财经媒体跟进",
        "对展业/配置/合规有直接影响",
        "可转化为客户沟通或投研关注"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 38,
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
      "title": "知乎三季度营收企稳：订阅会员回升、拓展AI布局",
      "sourceUrl": "https://wallstreetcn.com/articles/3786610",
      "publishedAt": "2026-11-24T12:15:00.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "知乎的核心业务在第三季度出现企稳信号，AI领域的投资布局也有了新进展。\n11月24日，知乎发布2026年第三季度业绩。当季营收6.59亿元，与上年同期基本持平；月均订阅会员达到1410万，环比增长约7%。其中，营销服务收入恢复同比增长，付费内容及IP运营收入保持稳定，共同支撑了本季度收入表现。\n付费内容仍是知乎最主要的收入来源。\n第三季度，付费内容及IP运营收入3.94亿元，约占总收入六成；营销服",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_62e8e37d3409",
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
      "title": "阿里健康发布中期业绩：总收入182.28亿元，同比增长9.2%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083717853145478",
      "publishedAt": "2026-11-24T12:12:37.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "11月24日，阿里健康发布中期业绩公告：总收入182.28亿元，同比增长9.2%，公司业务稳健增长，深度用户价值进一步凸显。报告期内，天猫健康平台用户年化ARPU稳定增长，自营店慢病用户年度活跃数与会员ARPU持续增长；平台服务商家数达6.8万余家，在线商品数1.09亿个；自营店SKU同比增长47.5%至超237万个；旗下医学AI“氢离子”业务进展优于预期。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_ee8d0437349b",
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
      "title": "海外研选 | 高盛：股市去杠杆拖累黄金周跌8% 年底修复或偏慢",
      "sourceUrl": "https://www.cls.cn/detail/2543170",
      "publishedAt": "2026-11-24T12:12:14.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 夏军雄）黄金上周下跌8%后，高盛本周一（11月23日）发布研报指出，与人工智能（AI）周期前景不确定性有关的股市大幅回撤，触发追加保证金要求及更广泛的去杠杆行为，成为推动金价走低的重要因素。随后，黄金价格动能减弱，引发商品交易顾问（CTA）策略进一步抛售，放大了跌势。\n\n高盛表示，该行此前一周已警告，股市下跌可能引发去杠杆，给黄金带来短期下行风险，如今这一风险已经兑现。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e5c10523ca27",
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
          "score": 66,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
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
      "title": "复旦微电：拟0.5亿元—1亿元回购公司股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083716990020227",
      "publishedAt": "2026-11-24T12:11:44.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，复旦微电公告，拟0.5亿元—1亿元回购公司股份，用于员工持股及/或股权激励计划，回购价格不超过75元/股（不含本数）。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8d7adca06573",
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
      "title": "从黄仁勋复职到“马斯克溢价”：华尔街如何重新定价AI巨头的“关键人物风险”",
      "sourceUrl": "https://www.yicai.com/news/103452605.html",
      "publishedAt": "2026-11-24T12:05:38.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "“伟大企业家的成功，是让一家企业因自己而伟大；而伟大企业家最终的成功，是让这家企业不再需要自己，也能够继续伟大。”陈永伟说道。从特斯拉的首席执行官马斯克（Elon Musk），到OpenAI的奥尔特曼（Sam Altman），再到英伟达（Nvidia）的黄仁勋，此次英伟达换帅风波再次将科技巨头对于“关键人物”的依赖症相关话题推上热门。\n\n在黄仁勋辞职后11天的时间里，美股剧烈动荡，纳斯达克100指",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4e954990390c",
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
      "title": "AI风险推高美债吸引力！Pimco称一旦危机爆发，收益率将迎来“难以预测”的下行",
      "sourceUrl": "https://wallstreetcn.com/articles/3786607",
      "publishedAt": "2026-11-24T12:03:38.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "AI热潮正在给美国经济和金融市场带来新的不确定性，也让美债的避险价值重新受到重视。全球最大债券基金管理公司之一太平洋投资管理公司（Pimco）认为，AI相关金融风险及其对传统行业商业模式的冲击，可能在未来数年对经济增长形成压力。在这一背景下，美国国债及其他高质量债券的配置吸引力正在上升。\nPimco首席投资官Daniel Ivascyn在接受彭博采访时表示，AI不仅可能引发金融市场波动，还可能通过",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7ece4d0544da",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 65,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 8,
        "evidence": 6,
        "recency": 15,
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
          "score": 16,
          "reasons": [
            "与该场景关联度较弱"
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
          "score": 96,
          "reasons": [
            "命中私募销售运营核心主题 2 项",
            "命中关联主题 4 项"
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
      "title": "联创股份：拟5000万元—1亿元回购公司股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083708999526784",
      "publishedAt": "2026-11-24T12:03:36.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，联创股份公告，拟5000万元—1亿元回购公司股份，用于股权激励或员工持股计划，回购价格不超过6.5元/股。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f5b522f9e248",
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
      "eventId": "event_30a0369f2fb0"
    },
    {
      "title": "黄金何时迎来转机？",
      "sourceUrl": "https://wallstreetcn.com/articles/3786581",
      "publishedAt": "2026-11-24T12:00:21.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "本轮黄金连破关口，有两点异常\n11月18日至20日，金价先后失守每盎司3800、3700、3600美元，周内累计下跌超9%，盘中触及2025年9月以来低位。\n本轮下跌值得关注的是，美债和黄金在同一场股市调整中给出不同反馈，引发市场关注。\n（一）异常1：本轮美股回调，黄金未能提供有效对冲\n10月，科技股率先回调，黄金同期跌幅超过纳指。\n&nbsp;随着市场对人工智能投资回报的担忧升温，纳斯达克综合指",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7414348bbe24",
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "AI能攻坚黎曼猜想，却叠不好一床被子",
      "sourceUrl": "https://www.yicai.com/news/103452545.html",
      "publishedAt": "2026-11-24T11:56:25.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "AI越来越擅长给出答案，但真正决定能否进入产业的是先可靠地做出来。“大家昨晚（北京时间11月23日晚）大概夜不能寐，都在关注美股的起起落落。”11月24日，第六届IDEA（粤港澳大湾区数字经济研究院）大会现场，美国国家工程院外籍院士、IDEA研究院创院理事长沈向洋，从前一晚英伟达消息讲起。比资本市场的喧闹更令他兴奋的，是过去一年AI能力边界发生的变化。在他的描述里，AI正在从写代码、生成视频，一路",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0ba7a8b7cd6a",
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
      "title": "达利欧最新警告：伟大的技术，不等于伟大的投资",
      "sourceUrl": "https://wallstreetcn.com/articles/3786589",
      "publishedAt": "2026-11-24T11:46:43.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "桥水基金创始人瑞·达利欧（Ray Dalio）再度发出警示：人们习惯性地将颠覆性新技术与优质投资机会画等号，而这正是历史上每一次金融泡沫的核心驱动力。\n在最新一期Sourcery播客访谈中，达利欧以20世纪20年代的电气化浪潮为镜，直指当前AI热潮中的潜在风险。他认为，Anthropic和SpaceX的万亿美元级估值所创造的，本质上是账面财富而非可支配现金，二者之间存在根本性区别。一旦持有资产的人",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b816a2e607ae",
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
          "score": 43,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 34,
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
      "eventId": "event_a4f72a95e7b2"
    },
    {
      "title": "汉仪股份：拟2000万元—3500万元回购公司股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083690231327106",
      "publishedAt": "2026-11-24T11:44:31.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，汉仪股份公告，拟2000万元—3500万元回购公司股份，用于股权激励或员工持股计划，回购价格不超过38元/股。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_98797dab7f3a",
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
      "title": "南向资金追踪｜净买入约62亿港元 加仓小米和华虹宏力抛售中海油",
      "sourceUrl": "https://www.cls.cn/detail/2543229",
      "publishedAt": "2026-11-24T11:42:54.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 冯轶）行情数据显示，南向资金今日成交约838.28亿港元，较前一日缩量约117.40亿港元，相当于恒指成交额的39.42%。\n港股今日高开低走，恒指开盘一度涨超1%，收盘跌0.73%。南向资金全天净买入约62.04亿港元。其中，沪港股通净流入约35.05亿港元，而深港股通净流入约26.99亿港元。\n个股方面，交易所数据显示，今日南向资金\n\n大幅净买入：小米集团-W(01",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_db6e54cb3e5c",
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
      "title": "英伟达、a16z投了 具身大脑公司Embo完成巨额早期融资",
      "sourceUrl": "https://www.cls.cn/detail/2543211",
      "publishedAt": "2026-11-24T11:33:34.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》11月24日讯（编辑 宋子乔）当地时间11月23日，具身大脑公司Embo宣布完成1.1亿美元（约合人民币7.33亿元）种子轮融资。本轮由a16z（Andreessen Horowitz）领投，英伟达旗下风投NVentures、Khosla Ventures、DST Global、Striker Venture联合参与。\nEmbo成立于今年4月，总部位于旧金山。这则融资消息是Embo成",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b4c79448fd87",
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
      "title": "实探菜百销售回暖：8万一根的金条两小时卖空，年轻人也接棒攒金",
      "sourceUrl": "https://www.yicai.com/news/103452491.html",
      "publishedAt": "2026-11-24T11:31:32.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "经过一轮大幅回调后，金价还在持续波动。11月24日，北京最低气温逼近零度，位于西城区的菜百首饰总店却人潮汹涌。\n\n四楼的投资金条柜台前，电子屏上的基础金价跟着盘面跳，柜台里放金条的地方却“空盘”了。“100克的金条都没货了，什么时候补不清楚。”销售人员一遍遍重复称。\n\n几天前，这里刚经历了一轮疯狂的“抢购潮”。11月20日，菜百的实时投资基础金价跌至760元/克，投资金条短时间内全线售罄，更有消费",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_23769bd6b141",
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
      "title": "赛诺菲获法国巴黎银行和摩根大通提供350亿美元过桥贷款，用于收购Insmed",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083676927519113",
      "publishedAt": "2026-11-24T11:30:59.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "11月24日，据报道，法国制药企业赛诺菲已获得法国巴黎银行和摩根大通提供的350亿美元过桥贷款，用于收购美国生物技术公司Insmed。这笔贷款由两家银行平均承销，各承担175亿美元。赛诺菲此前宣布以约410亿美元收购Insmed，旨在应对旗下重磅药物Dupixent未来面临的专利到期压力。（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_51848f10bfbd",
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
      "title": "金价“上蹿下跳”，银行提示风险",
      "sourceUrl": "https://www.yicai.com/news/103452503.html",
      "publishedAt": "2026-11-24T11:30:51.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "合理控制仓位，避免短期投机或跟风交易。11 月 11 日以来，国际金价接连跌破 4000 美元、3900 美元、3800 美元、3700 美元、3600 美元五道关口，直至 23 日晚间强势反弹，重新站上 3600 美元 / 盎司。\n\n面对金价大幅波动，近日，上海黄金交易所（下称 “上金所”）及多家银行相继发布风险提示。\n\n11 月 23 日，上金所发布《关于做好近期市场风险控制工作的通知》，提示",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f76c7de72998",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 73,
      "rawScore": 73,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 3,
        "recency": 15,
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
          "score": 35,
          "reasons": [
            "命中关联主题 1 项",
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
          "score": 66,
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
      "eventId": null
    },
    {
      "title": "士兰微SiC产线持续扩量 “追光”方向仍在评估 | 直击业绩会",
      "sourceUrl": "https://www.cls.cn/detail/2543223",
      "publishedAt": "2026-11-24T11:29:57.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者 汪斌）士兰微（600460.SH）的SiC业务正加快向AI电源和汽车市场拓展，但产品放量之下，盈利改善仍面临压力。\n在今天下午举行的第三季度业绩说明会上，公司管理层透露，8英寸SiC产线正向月产能1万片拓展。对于此前提及的“沾光”，董事长陈向东表示，公司正在评估相关技术与自身能力。\n三季报显示，今年前三季度士兰微营收109.38亿元，同比增长12.61%；归母净利润5.",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5bcdd659fda9",
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
          "score": 70,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "平安生命尊严服务：以契约化、体系化回应老龄化的尊严诉求",
      "sourceUrl": "https://www.yicai.com/news/103452559.html",
      "publishedAt": "2026-11-24T11:29:44.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "重症监护室门外，常常上演这样的两难：当事人提前想好自己不愿承受过度抢救，可一旦失去表达能力，选择权就交到了家属手里。亲情之下，不同亲人的判断、顾虑、期待往往难以统一；即便提前写下了预嘱，也缺少一个可信的第三方，在关键时刻核对授权、监督执行。财富、医疗资源、养老床位依旧是养老里的硬稀缺，但走到生命最后一段旅程，还有一种更难解决的稀缺——按照自己想要的方式走完这段路的执行能力。\n\n这一长期被忽略的真实",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c1651551b805",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 71,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
        "evidence": 0,
        "recency": 15,
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "科安达：拟6000万元—1亿元回购股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083673926888067",
      "publishedAt": "2026-11-24T11:27:56.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，科安达公告，公司拟以6000万元—1亿元回购股份，用于维护公司价值及股东权益，回购价格不超过18.49元/股。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2ab774fdd0db",
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
      "title": "\"R2也会亏\"，银行理财市场面临“本金”考验",
      "sourceUrl": "https://wallstreetcn.com/articles/3786606",
      "publishedAt": "2026-11-24T11:25:21.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "虽然早就没有了“保本”的帽子，但当银行理财真的出现跌破面值的情况，客户压力还是源源不断的会透露出来。\n根据一家券商第三方的统计，截至11月20日，全市场银行理财的破净率升至近三年的新高。这个表现甚至超过了2023年资本市场“大调整”时期的表现，让外界颇为惊讶。\n业界普遍认为，这轮银行理财净值下行和股债等大类资产同时向下波动有关，部分R2产品此次亦不免破净。但不可回避的另一个原因是，过去一年里，银行",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_33446de5a4fe",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 75,
      "rawScore": 75,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 21,
        "evidence": 3,
        "recency": 15,
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
          "score": 63,
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
      "eventId": null
    },
    {
      "title": "大烨智能：11月26日复牌并实施其他风险警示，股票简称变更为“ST大烨”",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083670339774855",
      "publishedAt": "2026-11-24T11:24:17.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，大烨智能公告，公司收到证监会江苏监管局《行政处罚事先告知书》，因2021年、2022年年度报告存在虚假记载事项，股票交易将被实施其他风险警示。公司股票于11月25日停牌一天，11月26日复牌并实施其他风险警示，股票简称变更为“ST大烨”，证券代码不变，日涨跌幅限制仍为20%。",
      "sourceName": "36氪",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_35d351f7b478",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 84,
      "rawScore": 84,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
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
      "confidence": "high",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 41,
          "reasons": [
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "marketEducation": {
          "score": 63,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 50,
          "reasons": [
            "命中关联主题 2 项",
            "含可核对要素"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "官方监管",
        "快讯"
      ],
      "eventId": "event_4a122eba04e5"
    },
    {
      "title": "又现卖方王牌团队“集体出走”，近期卖方人事为何变动频频",
      "sourceUrl": "https://wallstreetcn.com/articles/3786604",
      "publishedAt": "2026-11-24T11:21:12.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "又一大型券商研究所遇到投研骨干变动。\n11月24日，证券业协会官网显示，兴业证券从业人员目录下，已不再有首席策略分析师张启尧及其团队多名成员的从业信息。这某种程度上，坐实了有关业界传说张启尧团队整体跳槽的传说。\n此前，张启尧的“尧望后势”公众号自9月25日后已停止更新近两个月。和之前该号几乎每个工作日都要更新的频率大不一样。\n张启尧的离职，应是兴业证券近年在策略方向上又一“领军人才”级别的人才流失",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1715d6c943f5",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 16,
        "evidence": 3,
        "recency": 15,
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
          "score": 28,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 50,
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
      "title": "小米卢伟冰：小米汽车10月份交付量超5万，接下来还将有较大提升",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083664217729416",
      "publishedAt": "2026-11-24T11:18:03.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，11月24日，小米集团总裁卢伟冰在财报电话会上披露，小米汽车10月份交付量超5万，创年内单月新高，接下来还将有较大提升。卢伟冰表示，增程市场依然大有可为，小米澎程的上市也为该赛道带来了新的惊喜，上市首月锁单超7万，稳态期销量保持平稳。同时小米澎程也很大程度拓展丰富了小米汽车的用户构成，在更多圈层实现破圈：澎程用户年龄大于SU7/YU7，截至目前35岁以上用户占比超50%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_9c6298764104",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "构建激励相容的生育支持政策体系",
      "sourceUrl": "https://www.yicai.com/news/103452533.html",
      "publishedAt": "2026-11-24T11:16:50.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "生育支持政策的效果，不仅取决于投入力度，也取决于不同政策能否有效衔接，以及政府、企业和家庭能否形成合理的责任分担机制。生育关系家庭幸福，也关系人口长期发展和经济社会可持续运行。近年来，我国持续完善生育支持政策体系，从生育保险、产假制度到普惠托育服务、育儿补贴，政策支持范围不断扩大。特别是2025年国家育儿补贴制度正式实施，标志着我国在通过财政支持减轻家庭养育负担方面迈出了重要一步。\n\n但也应看到，",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_45d9131156e3",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 57,
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
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "医疗企业出海英国：信任是最难的一关丨问海",
      "sourceUrl": "https://www.yicai.com/news/103452470.html",
      "publishedAt": "2026-11-24T11:16:27.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "以公平为前提逐步合作，不断加深信任，就比较有机会达成深度合作。第三届伦敦生命科学周刚刚落幕。在不同的论坛和会议上，第一财经记者遇到了不少来自中国的企业和机构代表，有代表告诉记者，今年派来参会的人比去年更多。\n\n他们来伦敦，不只是为了卖产品。“我们是带着非常清晰的双向诉求。”塞力医疗业务发展总监温天羽对第一财经记者表示，公司一方面希望吸引海外的投资资本和创新资本，另一方面也希望自己的创新项目更好地走",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_35cbd3d497b8",
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
      "title": "小米CFO林世伟：小米AI相关收入持续增加，今年160亿元AI投入正稳健落地",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083662425156229",
      "publishedAt": "2026-11-24T11:16:14.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，11月24日晚，小米集团CFO林世伟在财报电话会上表示，小米对AI的投入非常坚决，今年将在AI领域投入160亿元，目前正在沿着规划稳健落地，小米MiMo大模型的API调用量和AI相关收入都在持续增加。林世伟介绍称，小米AI业务现在还处于大规模投入期，除了持续投入基座模型的研发，还在加快推动AI落地“人车家全生态”，例如小米18 Fold就搭载了MiMo端侧大模型，澎湃OS 4的“超级小",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_4f6364a9a70b",
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
      "title": "制药行业迎来三年来最大并购 赛诺菲豪掷410亿美元收购Insmed",
      "sourceUrl": "https://www.cls.cn/detail/2543171",
      "publishedAt": "2026-11-24T11:13:23.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 牛占林）当地时间周二，法国制药巨头赛诺菲宣布，将以410亿美元收购美国生物制药公司Insmed。受此消息提振，Insmed股价盘前大涨14%，赛诺菲股价上涨近6%。这笔交易也将成为自2023年以来制药行业规模最大的一笔并购。\n根据交易条款，赛诺菲将以每股175美元的现金收购Insmed，较Insmed上一交易日收盘价溢价17.5%。收购范围不仅包括Insmed旗下两款已",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d03622c576b5",
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
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "Anthropic盘前价格跌破发行价",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083657973049992",
      "publishedAt": "2026-11-24T11:11:42.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，Anthropic美股盘前跌幅扩大至5%，跌破83美元的IPO发行价。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c6814a20263c",
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
      "title": "10月人民币延续升值与跨境资金改善，全球11月PMI分化但整体扩张，国内稳市举措改善资金交易条件---1124宏观脱水",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3786605",
      "publishedAt": "2026-11-24T11:10:36.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "10月美元指数涨势放缓至102.0，人民币对美元继续升值，在岸即期汇率升值0.7%，三大汇率指数连续第二月上涨。跨境资金净流入扩大至769亿美元，直接投资转顺、证券投资逆差收窄为主要贡献。结售汇顺差连续第20个月，但增幅明显收窄。 11月标普PMI显示海外主要经济体基本面状况良好，多数经济体制造业与服务业PMI处于扩张区间。美国与德国景气度较高并出现供给受限特征，法国进一步走弱且技术性衰退风险上升",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_fcf203600bfe",
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
          "score": 77,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 4 项"
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
      "title": "长华集团：不从事人形机器人整机业务",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083654955772290",
      "publishedAt": "2026-11-24T11:08:38.000Z",
      "fetchedAt": "2026-11-24T14:55:26.487Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，长华集团发布股票交易风险提示，公司为汽车零部件上市公司，主要从事汽车金属零部件的研发、生产与销售，核心产品为紧固件、冲焊件，不从事人形机器人整机业务，仅为客户提供执行器专用结构件等相关部件产品，截至目前实现营业收入约8.8万元，上述产品是基于公司主营业务产品应用场景的拓展，占公司总营业收入的比例极小，对净利润无重大影响。关于行星滚柱丝杠产品，目前仍处于研发阶段，尚未获得客户定点，也未实",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_32cbaee11b12",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 46,
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
      "title": "晚间公告丨11月24日这些公告有看头",
      "sourceUrl": "https://www.yicai.com/news/103452500.html",
      "publishedAt": "2026-11-24T11:08:17.000Z",
      "fetchedAt": "2026-11-24T14:53:42.807Z",
      "timeConfidence": "source",
      "summary": "以下是第一财经对一些重要公告的汇总，供投资者参考。【品大事】\n\n柯力传感：机器人力学传感器产品收入极低\n\n柯力传感发布股价异常波动公告，公司主营业务为多物理量传感器、物联网设备及系统解决方案的研发、生产和销售，其中机器人力学传感器产品收入极低，2026年前三季度收入占比不足1%。公司近期投资知行机器人科技（苏州）有限公司金额仅800万元，取得其1.1976%的股权，投资金额及占比很小，该项投资对公",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b2a29e4c0884",
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
      "title": "AI价格红利何时退潮：中国出口高增还能走多远？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3786575",
      "publishedAt": "2026-11-24T11:00:40.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "今年以来，中国出口表现持续超出市场预期，前三季度出口累计同比增长21.3%，净出口拉动GDP增长1.2个百分点，出口继续扮演关键缓冲角色。前十个月累计商品贸易顺差突破1万亿美元。从结构看，本轮出口高增主要受益于AI产业链与能化商品的结构性扩张。前三季度，AI、能化及其他商品分别拉动出口增长12.6、2.1和6.5个百分点。分量价看，AI商品出口价格、数量分别增长29.1%和10.8%，呈现明显量价",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ea0377960bba",
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
      "title": "国产半导体设备有了自己的“质量标尺”",
      "sourceUrl": "https://www.yicai.com/news/103452473.html",
      "publishedAt": "2026-11-24T10:56:49.000Z",
      "fetchedAt": "2026-11-24T14:53:42.808Z",
      "timeConfidence": "source",
      "summary": "40余家企业历时三年研制，填补了行业专属质量管理标准空白。\n11月24日，2026年集成电路行业质量大会暨半导体设备及零部件行业标准推进会在北京亦庄召开。会上，在工业和信息化部的计划安排下，电子标准院组织协调，由北方华创牵头研制的《半导体设备与零部件质量管理体系》行业标准正式发布。这是我国半导体设备与零部件领域首套专属质量管理体系标准，意味着长期沿用通用质量标准的国产装备产业，有了自己的一把“质量",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6a64a855abfc",
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
      "title": "韩国央行后天或再加息！AI暴跌之际，高盛警告：消费撑不住了",
      "sourceUrl": "https://wallstreetcn.com/articles/3786599",
      "publishedAt": "2026-11-24T10:56:19.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "韩国央行预计将于11月26日再次加息，但半导体出口繁荣难掩内需疲软，AI科技股下跌进一步加剧消费压力，本轮加息周期或已接近尾声。\n据路透社对34名经济学家的调查，32人预计韩国央行将于11月26日上调基准利率25个基点至3.25%，仅2人预测维持不变。法国兴业银行经济学家Michelle Lam表示，市场已充分消化加息预期，“如果不加息，反而会令市场意外”。\n她指出，韩国三季度GDP表现强劲，通胀",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3a26a10b4215",
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
          "score": 38,
          "reasons": [
            "命中关联主题 2 项",
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
      "title": "【权益周观察】小微盘股遭遇重挫 A股底部特征逐步显现",
      "sourceUrl": "https://database.caixin.com/2026-11-24/102508349.html",
      "publishedAt": "2026-11-24T10:52:14.000Z",
      "fetchedAt": "2026-11-24T14:51:53.734Z",
      "timeConfidence": "source",
      "summary": "A股主要指数普遍收跌，中小盘及科技成长板块承压，银行、食品饮料等防御性板块相对抗跌。港股同步走弱，市场风险偏好持续收缩",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1e844639d6b4",
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
        "行业动态"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "苹果iPhone Duo开售“满月”，销量低于预期、跌破发行价",
      "sourceUrl": "https://www.yicai.com/news/103452481.html",
      "publishedAt": "2026-11-24T10:47:48.000Z",
      "fetchedAt": "2026-11-24T14:53:42.808Z",
      "timeConfidence": "source",
      "summary": "苹果折叠屏手机新品只火了不到一个月。市场机构下调销售预测，业内认为折叠屏技术还需进一步优化。苹果首款折叠屏手机开售已满一个月，实际销量低于预期，价格面临下行压力，市场机构下调销售预测，业内认为折叠屏技术还需进一步优化。11月24日，广州商家闵强（化名）告诉第一财经记者，在获得当地补贴后，原价15999元的256GB的苹果折叠屏手机iPhone Duo，现在终端零售价为14999元。记者当天在拼多多",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0927bc489a09",
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
      "title": "农发种业：种子行业处于去库存阶段 明年供大于求局面有望改善｜直击业绩会",
      "sourceUrl": "https://www.cls.cn/detail/2543166",
      "publishedAt": "2026-11-24T10:47:23.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者 刘建）国内种子行业竞争激烈，农发种业（600313.SH）今年前三季度增收不增利。在今日举行的三季度业绩说明会上，公司转基因发展、生物育种平台建设、厄尔尼诺影响以及行业现状等成为投资者关注的焦点，“明年种子供大于求局面有望改善。”公司董秘陈才良在会上说。\n财务数据显示，农发种业前三季度实现营业收入54.26亿元，同比增长47.58%；归母净利润4180万元，同比下降32",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a4cef73da396",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "大行融出逼近4万亿关口 存单1.4%定价关口博弈升温",
      "sourceUrl": "https://www.cls.cn/detail/2543104",
      "publishedAt": "2026-11-24T10:42:05.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 李响）近期1年期AAA级同业存单二级收益率持续在1.40%-1.41%区间窄幅震荡，多空双方在1.4%整数关口反复拉锯。随着跨月资金窗口临近，市场关注点逐步从资金中枢下移转向资金摩擦修复。\n业内人士表示，当前大行融出规模已接近4万亿临界点，叠加非银同业存款定价调整预期升温，存单利率存在下破1.4%的潜在可能，但月内大幅波动空间有限，整体仍将维持窄幅震荡格局。\n跨月资金压",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_492c6a227ba0",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "title": "达利欧：伟大的技术，不等于伟大的投资",
      "sourceUrl": "https://wallstreetcn.com/charts/41960230",
      "publishedAt": "2026-11-24T10:37:20.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "达利欧指出，伟大的技术不等于伟大的投资。\n\n人们相信新技术的前景，往往借钱买入相关资产，推高估值，创造账面财富。\n\n但财富不等于现金，当偿债、利率上升等因素迫使投资者卖出变现，泡沫便可能破裂。\n\n即使技术长期成功，也难逃短期崩盘，恐惧还会加剧资金撤退与下跌。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_75dde0513fe5",
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
      "eventId": "event_a4f72a95e7b2"
    },
    {
      "title": "家家悦：省外区域规模效应开始显现 自有品牌占比将继续提升 | 直击业绩会",
      "sourceUrl": "https://www.cls.cn/detail/2543151",
      "publishedAt": "2026-11-24T10:29:04.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者 吴蔚玲）门店存量优化背景下，家家悦（603708.SH）收入承压。在今日召开的业绩会上，公司管理层表示，目前省外区域规模效应已经开始显现，部分门店模型具备了复制的基础，同时预计自有品牌占比将继续提升。\n今年前三季度，家家悦持续推进存量门店优化。财报显示，Q3新开直营门店6家，闭店15家。截至三季度末，公司门店总数1032家，其中直营门店886家，加盟店146家。\n伴随门",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b8fae9e749cb",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 55,
      "rawScore": 55,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
          "score": 20,
          "reasons": [
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
      "title": "深圳召开上市公司座谈会，鼓励开展回购增持",
      "sourceUrl": "https://www.yicai.com/news/103452432.html",
      "publishedAt": "2026-11-24T10:24:08.000Z",
      "fetchedAt": "2026-11-24T14:53:42.808Z",
      "timeConfidence": "source",
      "summary": "工业富联、立讯精密、中兴通讯、中国平安、招商银行、中信证券、国信证券等参会。11月24日上午，深圳市委金融办联合深圳证监局、中国人民银行深圳市分行和深圳金融监管局组织召开辖区上市公司座谈会，引导上市公司用好回购、增持等市场化工具，稳定市场预期、增强投资者信心。\n\n工业富联（601138.SH）、立讯精密(002475.SZ)、中兴通讯(000063 .SZ)、汇川技术(300124 .SZ)等40",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_008b60e1c19c",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 47,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 60,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 54,
          "reasons": [
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
      "id": "news_5283c9dcbee3",
      "title": "第四届住房保险秋季会议成功举办共绘房屋全生命周期管理下的住房保险图景",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/kb/20261124/6270.html",
      "publishedAt": "2026-11-24T10:22:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "共同为构建可持续的房屋安全管理体系建言献策",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 57,
      "original": {
        "huibaoxianCategory": "行业动态"
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
      "title": "AI进入口腔诊所，开始当上医生的“经营助理”",
      "sourceUrl": "https://www.yicai.com/news/103452435.html",
      "publishedAt": "2026-11-24T10:20:31.000Z",
      "fetchedAt": "2026-11-24T14:53:42.808Z",
      "timeConfidence": "source",
      "summary": "截至2025年底，全国工商注册在经营状态的口腔医疗机构突破14万家，相比2024年底净增长约5497家，增长率约4%。2022至2025年间，我国口腔医疗机构总数已实现4年连续增长。\n\n随着家庭健康管理意识的提升，口腔消费正在从“出了问题再处理”向“提前规划、主动预防”转变，一种更主动的健康消费节奏正在形成。\n\n消费需求日益多元，也对口腔机构的服务展示、线上运营和咨询接待提出了更多要求。据行业数据",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8b6c1e9c72e9",
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
      "title": "“核药第一股”赴港上市却遭破发 核药蓝海赛道价值几何？",
      "sourceUrl": "https://www.cls.cn/detail/2543141",
      "publishedAt": "2026-11-24T10:18:06.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（记者 于淼）医药企业赴港上市潮之下，先通医药-B(09941.HK）转道港股，变身18A“核药第一股”。在股东阵容强劲、公开发售超购逾5200倍的背景下，首日却遭破发，收跌23.08%，盘中一度跌超32%。\n此次上市，也使核药这一相对小众的蓝海赛道进一步走入投资者视野。有研报认为，目前核药行业正处于快速增长的关键时刻，在精准医学与RDC技术推动下，核药赛道的商业价值正被重估。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2b9490ebd9c6",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 57,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "id": "news_033c40c4bd46",
      "title": "寿险头雁的十四五与它的下一程",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261124/6269.html",
      "publishedAt": "2026-11-24T10:11:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "让保险的温度落在具体的人身上",
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
          "score": 56,
          "reasons": [
            "命中保险运营核心主题 2 项"
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
      "title": "AI“大到不能倒”了？特朗普亲自营救黄仁勋，被指是“现代水门事件”！",
      "sourceUrl": "https://wallstreetcn.com/articles/3786592",
      "publishedAt": "2026-11-24T10:10:53.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "特朗普政府对英伟达董事会施压、推动黄仁勋复职一事，正从一场市场救援行动演变为潜在的政治危机。\n据Fox Business记者Charles Gasparino援引知情人士消息，促使财政部长贝森特转变立场、力挺黄仁勋复职的核心动因，是对经济衰退的恐惧——AI股票的抛售潮令主要投资者向白宫周边人士传递警告，称美国陷入衰退的概率\"接近100%\"。黄仁勋复职消息公布后，英伟达单日暴涨逾34%，创2000年",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f6a58fc2d7e7",
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
      "title": "商汤开源8B多模态模型U1.6，图像自修正写入单次生成",
      "sourceUrl": "https://wallstreetcn.com/articles/3786598",
      "publishedAt": "2026-11-24T10:10:28.000Z",
      "fetchedAt": "2026-11-24T14:52:42.889Z",
      "timeConfidence": "source",
      "summary": "11月24日，商汤科技（00020.HK）发布并开源多模态模型SenseNova U1.6，参数规模8B，主打原生图像自修正。模型权重开放至GitHub、HuggingFace与ModelScope，官方同步接入ComfyUI。自修正的运作方式是，模型先生成首稿，再对照原始提示检查画面，针对文字模糊、错字乱码、英文拼写错误、编号错乱提出修改意见，结合原提示与首稿输出修正版。商汤测评数据显示，开启自",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_73af321b4a31",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 50,
      "rawScore": 50,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 16,
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
      "title": "私募运用ETF有哪些新需求？财联社与博时基金共办交流会，碰撞答案",
      "sourceUrl": "https://www.cls.cn/detail/2543011",
      "publishedAt": "2026-11-24T10:03:32.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "11月20日，由财联社携手博时基金共同举办的“ETF赋能 策略进阶——ETF配置新思路，私募投资新机遇”私募机构ETF配置与投资策略交流会在上海举行。活动汇聚公募基金经理、私募机构投资负责人及业内专家，围绕宏观市场展望、多资产配置、ETF量化轮动与风险控制，以及公私募合作中的实际需求展开交流。\n随着ETF市场持续扩容，私募机构对这一投资工具的使用也在不断深入。从借助宽基ETF获取市场收益，到通过行",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a8377ca914e5",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 75,
      "rawScore": 75,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "passesTierGate": true,
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
          "score": 85,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 100,
          "reasons": [
            "命中私募销售运营核心主题 4 项",
            "命中关联主题 3 项",
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
      "title": "从暴跌到暴涨！以史为鉴：美股经历“狂欢夜”后 接下来会怎么走？",
      "sourceUrl": "https://www.cls.cn/detail/2543090",
      "publishedAt": "2026-11-24T10:03:15.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "财联社11月24日讯（编辑 刘蕊）从上周到本周一，美股科技股经历了一段惊心动魄的绝地反转：在上周华尔街大举抛售所有AI相关资产后，本周一资金又集中回流抄底。 \n在黄仁勋回归英伟达复职CEO的消息传出后，标普500指数周一开盘跳涨近5%，创下自1993年以来的所有周一行情里的次高：只有2008年10月13日——即金融危机最严峻时期，标普500的周一开盘涨幅比这次更高。\n这波反弹站稳全天。标普500周",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_802c164f0c40",
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
      "eventId": "event_f101880ef7bc"
    },
    {
      "title": "壹快评｜城市何以美好，深圳APEC照出答案",
      "sourceUrl": "https://www.yicai.com/news/103452373.html",
      "publishedAt": "2026-11-24T10:02:03.000Z",
      "fetchedAt": "2026-11-24T14:53:42.808Z",
      "timeConfidence": "source",
      "summary": "要讲好经济繁荣、科技发达、物质富足的“大故事”，也要讲好社会安定、个体丰盈、生态和谐的“小故事”刚刚过去的APEC领导人会议周，让深圳迎来了高光时刻。从APEC各经济体政要、企业家到媒体人士，参会者们对这座城市的现代、高效、文明、宜居留下了深刻印象。不少人在社交媒体上分享那几天的见闻体验，好评点赞不绝于“屏”，“希望我的祖国也能拥有一个深圳”甚至成为海外网友的热门话题。\n\n习近平主席在欢迎晚宴上致",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_cb1affed32d8",
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
      "id": "news_95873c01d6ca",
      "title": "中国太保公开经营思路显示这些新变化银保领涨个险全队伍分层适度增配权益",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261124/6268.html",
      "publishedAt": "2026-11-24T09:54:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "中国太保三季度业绩说明会十问十答",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 61,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 61,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
      "eventId": null
    },
    {
      "title": "龙虎榜丨机构今日买入这22股，卖出粤芯半导体7954万元",
      "sourceUrl": "https://www.yicai.com/news/103452393.html",
      "publishedAt": "2026-11-24T09:48:47.000Z",
      "fetchedAt": "2026-11-24T14:53:42.808Z",
      "timeConfidence": "source",
      "summary": "共34只个股出现了机构的身影。盘后数据显示，11月24日龙虎榜中，共34只个股出现了机构的身影，有22只股票呈现机构净买入，12只股票呈现机构净卖出。\n\n当天机构净买入前三的股票分别是凡拓数创、恒工精密、安培龙，净买入金额分别是1.06亿元、1.03亿元、6025万元。\n\n当天机构净卖出前三的股票分别是粤芯半导体、西陇科学、贝特利，净卖出金额分别是7954万元、5249万元、2815万元。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b21d5a9d163a",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "近代中国商业的发展：从传统中认识中西差异｜带着问题去读书",
      "sourceUrl": "https://mini.caixin.com/2026-11-24/102508337.html",
      "publishedAt": "2026-11-24T09:47:38.000Z",
      "fetchedAt": "2026-11-24T14:51:53.734Z",
      "timeConfidence": "source",
      "summary": "东西方在创新上存在分歧，但各自又都带来一个共同问题：如何利用资源来推动财富和权力？这就需要历史学家找出这些创新所经历的轨迹，并由此更加深刻地理解居住在世界两端的数以亿计的人们千差万别的经验\n       　　【前记：这是香港中文大学荣休教授科大卫在中国商业史研究领域的学术代表作。作者围绕“契约、法律与市场”“企业：传统与现代化”“资本主义萌芽与近代经济变迁”三个主题，观察中国在16—20世纪历史变",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f7a417b1a23f",
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
      "title": "中科曙光：取得不超4.5亿元股票回购专项贷款承诺函",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083568460507777",
      "publishedAt": "2026-11-24T09:40:39.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，中科曙光公告，取得中国建设银行股份有限公司天津市分行出具的《贷款承诺书》，承诺为公司提供最高不超过4.5亿元贷款，专项用于回购公司股票，贷款期限3年。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_d57223f15e25",
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
      "title": "赛恩斯：拟5000万元—1亿元回购公司股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083566126590339",
      "publishedAt": "2026-11-24T09:38:16.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，赛恩斯公告，拟5000万元—1亿元回购公司股份，用于员工持股计划/股权激励，回购价格不超过75.44元/股。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_efb2ac3b2262",
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
      "eventId": "event_30a0369f2fb0"
    },
    {
      "title": "知乎：第三季度营收6.59亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083562804078978",
      "publishedAt": "2026-11-24T09:34:53.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，知乎发布2026年第三季度业绩报告。报告显示，第三季度知乎实现营收6.59亿元，与去年同期基本持平。月均订阅会员1410万，环比增长7%。截至第三季度末，社区累计内容已突破10亿条。第三季度，付费内容及IP运营收入为3.94亿元，占比达到59.8%；营销服务收入为1.98亿元，占比30.0%；包括专家数据解决方案、职业教育、消费品等在内的其他收入为6710万元，占比10.2%。截至第三",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_82e5c09b849a",
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
      "title": "美联储高官面临违反内部规定调查，民主党开始发力了？",
      "sourceUrl": "https://www.yicai.com/news/103452324.html",
      "publishedAt": "2026-11-24T09:31:29.000Z",
      "fetchedAt": "2026-11-24T09:48:22.059Z",
      "timeConfidence": "source",
      "summary": "“民主党掌控的参议院可以阻挠特朗普对联邦公开市场委员会的提名。”\n\n中期选举过后，要求合规的风又吹向了美联储。\n\n据报道，两位知情人士透露，美联储监察长办公室正在审查负责监管事务的美联储副主席鲍曼（Michelle Bowman）是否违反了美联储关于“静默期”的相关规定。\n\n此前，鲍曼曾于6月出席了由美国银行举办的一场私人晚宴，而时间点正是在美联储某次政策会议结束后仅数小时。彼时，鲍曼不仅出席了这",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9f3cd8b9a0a4",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 63,
      "rawScore": 76,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
        "evidence": 6,
        "recency": 15,
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
          "score": 54,
          "reasons": [
            "命中关联主题 3 项",
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
          "score": 54,
          "reasons": [
            "命中关联主题 3 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 63,
      "llmScores": [
        57,
        69
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "拟出售电池回收业务，巴斯夫将重心转向正极材料",
      "sourceUrl": "https://www.yicai.com/news/103452333.html",
      "publishedAt": "2026-11-24T09:31:11.000Z",
      "fetchedAt": "2026-11-24T09:48:22.059Z",
      "timeConfidence": "source",
      "summary": "从提出最高45亿欧元的电池材料投资计划，到如今拟出售电池回收业务，德国化工巨头巴斯夫正重新调整其在电池产业链上的布局。五年前，德国化工巨头巴斯夫曾提出最高45亿欧元的电池材料业务投资计划。如今，随着全球电动汽车及电池市场环境发生变化，巴斯夫进一步调整电池材料业务布局，将该业务的资源聚焦于正极活性材料领域。\n\n\n\n第一财经记者今日从巴斯夫官网获悉，11月20日，巴斯夫与德国电池回收企业cylib签署",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b9b0b54415be",
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
      "title": "赛力斯超级工厂把数智化延伸到整车验证环节｜一周车闻",
      "sourceUrl": "https://www.yicai.com/news/103452342.html",
      "publishedAt": "2026-11-24T09:31:03.000Z",
      "fetchedAt": "2026-11-24T09:48:22.059Z",
      "timeConfidence": "source",
      "summary": "车企正在争夺智能化与全球化的下一阶段竞争主动权。捷途全球旅行+大会启幕\n\n近日，2026捷途全球旅行+大会在捷途汽车开封基地启幕。品牌首款纯电方盒子捷途环游者EV开启全球预售，定位“全球多面新方盒”，预售价9.99万元起。全新旅行者7 C-DM华为乾崑智驾版同期上市，超级焕新价18.49万元起。奇瑞汽车股份有限公司执行副总裁李学用在大会上表示，八年笃行，捷途已收获262万个旅行火种。截至目前，捷途",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_739885b1f92a",
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
      "title": "小米集团：第三季度营收1072亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083554739219078",
      "publishedAt": "2026-11-24T09:26:41.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，小米集团发布2026年第三季度财报，财报显示，小米集团第三季度实现营收1072亿元，其中智能手机业务收入456亿元，IoT与生活消费产品业务收入272亿元，互联网服务业务收入95亿元，新能源汽车及AI等创新业务分部收入239亿元；经调整净利润48.8亿元。第三季度智能手机出货量3070万台，新车交付量100975辆。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_ad8817bd03d7",
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
      "title": "多家物业公司股权被转卖，甩掉“房地产附属”身份能否单飞？",
      "sourceUrl": "https://www.yicai.com/news/103452349.html",
      "publishedAt": "2026-11-24T09:25:34.000Z",
      "fetchedAt": "2026-11-24T09:48:22.060Z",
      "timeConfidence": "source",
      "summary": "关联房企对物企的影响持续减弱。曾由房地产开发分拆上市的物业公司，如今有的迎来新股东，有的股权归属仍将取决于母公司的偿债进程。11月以来，两家上市物企的大股东先后披露化债进展，其中宝龙地产对宝龙商业的持股降至约5.6%；而建业新生活控股股东胡葆森则打算拿出20%的建业新生活股份抵偿部分到期贷款。而此前，恒大物业已被清盘人卖给了太盟，而金科服务则已由博裕资本取得控股权……随着房地产行业的持续调整，关联",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4e8fca1354d5",
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
      "title": "央行：将以固定数量、利率招标、多重价位中标方式开展8000亿元MLF操作",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083553642621317",
      "publishedAt": "2026-11-24T09:25:34.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，据央行网站，为保持银行体系流动性充裕，2026年11月25日，中国人民银行将以固定数量、利率招标、多重价位中标方式开展8000亿元MLF操作，期限为1年期。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a439d01f205f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 65,
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
          "score": 38,
          "reasons": [
            "命中关联主题 2 项",
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
      "title": "6G试点，正式启动",
      "sourceUrl": "https://www.cls.cn/detail/2543059",
      "publishedAt": "2026-11-24T09:24:26.000Z",
      "fetchedAt": "2026-11-24T14:55:25.483Z",
      "timeConfidence": "source",
      "summary": "工业和信息化部今天（24日）在上海正式启动6G创新发展部省协同试点，北京、河北、上海、江苏、浙江、安徽、湖北、广东8个省市获批开展6G试点工作。\n6G部省协同试点的重点任务是：在国家层面体系布局基础上，因地制宜，围绕新型终端、关键芯片器件、仪器仪表、卫星互联网等6G关联产业，面向沉浸式通信、工业制造、低空经济、海洋经济等6G潜在应用场景加强攻关，形成全国6G“一盘棋”发展格局。\n6G技术标准研究进",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_89bbb7aec5cd",
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
      "title": "阿里巴巴回应子公司被列入美实体清单：将通过一切法律途径维护公司权益",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083551374731648",
      "publishedAt": "2026-11-24T09:23:16.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "11月24日，在美国商务部将阿里巴巴旗下新加坡子公司Apex Enterprise Solutions列入实体清单后，阿里巴巴发言人明确回应：“将Apex Enterprise Solutions列入实体清单是错误的。Apex从未转移任何受美国出口管制的先进计算芯片。我们将通过一切法律途径，维护公司的合法权益和声誉。”（界面）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_eea72af10228",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "钛能化学：拟6亿元—12亿元回购公司股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083535213275527",
      "publishedAt": "2026-11-24T09:22:23.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，钛能化学公告，拟6亿元—12亿元回购公司股份，回购价格不超过5.88元/股（含），本次回购股份用于维护公司价值及股东权益。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5ec39e02a5f0",
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
      "title": "印度据悉计划设立第二家天然气交易所，以深化期货交易",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083545187658119",
      "publishedAt": "2026-11-24T09:16:58.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "印度据悉计划设立第二家天然气交易所，以深化期货交易。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_9e6c9b7e680d",
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
      "title": "年内公募打新获配金额超360亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083533535308421",
      "publishedAt": "2026-11-24T09:16:13.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "公募排排网数据显示，截至2026年11月24日，年内共有129家公募机构，参与到67只年内上市新股网下配售，合计获配金额365.11亿元。（证券时报）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_979ad8984d0f",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "工资单之外的社保：没有稳定雇主的劳动者，缴费应该如何分担",
      "sourceUrl": "https://opinion.caixin.com/2026-11-24/102508322.html",
      "publishedAt": "2026-11-24T09:13:41.000Z",
      "fetchedAt": "2026-11-24T09:47:56.226Z",
      "timeConfidence": "source",
      "summary": "真正的自主经营者在固定最低额和2039年起的20年领取门槛下，不宜普遍强制参保。在中国若要扩大强制参保，先需要让缴费随收入变动，并由财政承担退休收入底线的支持\n    \n     \n     现行法已要求有劳动关系的雇主缴费；对平台组织劳动却未建立劳动关系者，现行法却还未给出一个明确的养老缴费份额。图：视觉中国\n    \n   \n       提要\n　　中国养老保险体系的改革（制度机制创新建设），",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7b743542e5bd",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 56,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 61,
          "reasons": [
            "命中保险运营核心主题 2 项",
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
      "attentionScore": 56,
      "llmScores": [
        47,
        65
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
      "title": "华资实业：董事长提议1亿元—2亿元回购公司股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083538251852419",
      "publishedAt": "2026-11-24T09:09:55.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，华资实业公告，董事长张志军提议1亿元—2亿元回购公司股份，用于维护公司价值及股东权益。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_808085b6eb72",
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
      "eventId": "event_aff2dd3f6a27"
    },
    {
      "title": "最高45%！AI服务器签约后还要涨价，算力争夺战正在改写采购规则",
      "sourceUrl": "https://www.yicai.com/news/103452320.html",
      "publishedAt": "2026-11-24T09:09:39.000Z",
      "fetchedAt": "2026-11-24T09:48:22.060Z",
      "timeConfidence": "source",
      "summary": "签约不等于锁价，谁为算力短缺买单？一份价值5.49亿美元的服务器采购合同，签约后还要追加最高7000万美元。即使客户已经额外支付500万美元，希望锁定采购价格，也未能避免这场争议。发生在戴尔与英国量化交易公司XTX Markets之间的纠纷，正在成为全球AI服务器市场价格剧烈波动的一个缩影。随着内存等关键零部件价格大幅上涨，全球AI服务器供应链正在经历新一轮成本冲击。有消息称，包括戴尔、慧与（HP",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7f915be5233b",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 79,
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
      "attentionScore": 79,
      "llmScores": [
        64,
        94
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
      "title": "青岛啤酒要做威士忌了，产能激增与规则缺位问题待解",
      "sourceUrl": "https://www.yicai.com/news/103452304.html",
      "publishedAt": "2026-11-24T09:08:41.000Z",
      "fetchedAt": "2026-11-24T09:48:22.060Z",
      "timeConfidence": "source",
      "summary": "国内威士忌的热度仍在快速增长。威士忌的热度也烧到啤酒赛道。11月24日，青岛啤酒（600600.SH）公布了旗下的烈酒业务平台，并发布了国产威士忌和多款进口烈酒产品，正式布局烈酒赛道。在业内看来，随着啤酒行业竞争加剧和酒饮个性化的新趋势，青岛啤酒希望通过烈酒寻找新的增长空间。\n\n记者注意到，随着威士忌在国内的热度不断上升，越来越多的酒企和资本正转向这一赛道淘金；但在产能快速增长的同时，过剩风险和桶",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_414456d4364d",
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
      "title": "三元生物：拟3000万元—5000万元回购公司股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4083534181362311",
      "publishedAt": "2026-11-24T09:05:46.000Z",
      "fetchedAt": "2026-11-24T09:48:53.334Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，三元生物公告，拟3000万元—5000万元回购公司股份，用于注销并减少公司注册资本，回购价格不超过34.72元/股。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_87938d64ea46",
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
      "eventId": "event_de3f6a2f6fc5"
    },
    {
      "title": "美股异动 | 410亿美元收购Insmed落地 赛诺菲(SNY.US)盘前涨逾8%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3684374",
      "publishedAt": "2026-11-24T06:45:02.000Z",
      "fetchedAt": "2026-11-24T14:57:15.656Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6458bb6fcf9a",
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
      "title": "美股异动 | 上市4天即跌破IPO发行价 Anthropic(ANT.US)盘中跌逾9%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3684371",
      "publishedAt": "2026-11-24T06:45:01.000Z",
      "fetchedAt": "2026-11-24T14:57:15.656Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_71416bc01604",
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
      "title": "美股异动 | 马斯克承认AI研发落后 SpaceX(SPCX.US)跌超1.5%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3684372",
      "publishedAt": "2026-11-24T06:45:01.000Z",
      "fetchedAt": "2026-11-24T14:57:15.656Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_51f874cdc341",
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
      "title": "四环医药(00460)旗下渼颜空间自主研发的颈部注射用透明质酸钠复合溶液获批上市",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3684360",
      "publishedAt": "2026-11-24T06:44:50.000Z",
      "fetchedAt": "2026-11-24T14:57:15.656Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_6d9713b56b9c",
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
      "title": "德国11月商业景气指数回升，略超预期",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3683530",
      "publishedAt": "2026-11-24T01:48:57.000Z",
      "fetchedAt": "2026-11-24T14:57:15.743Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_b5e1461b2b32",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "ICoP SpA SB股价大涨近10%，斩获总额约7,450万欧元新合同",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-93CH-3683428",
      "publishedAt": "2026-11-24T01:06:44.000Z",
      "fetchedAt": "2026-11-24T09:49:06.909Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_46d4a629d23a",
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
      "id": "news_f06aa0bf9643",
      "title": "慧保周报2026年第47周丨车险创新加速智驾车险示范条款过审车型分级制度上马国寿友邦平安等高管apec大会最",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/kb/20261123/6266.html",
      "publishedAt": "2026-11-23T03:55:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "全球最大保险中介并购落地，怡安170亿美元收购美国USI",
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
      "rawScore": 76,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 21,
        "evidence": 11,
        "recency": 10,
        "actionability": 4
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
        "对展业/配置/合规有直接影响"
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
      "timeConfidence": "source"
    },
    {
      "id": "news_dd4af1197096",
      "title": "股市暴跌最佳背锅侠被误读的险资调仓从高波动成长转向红利一级市场耐心资本逻辑正在重塑",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/kb/20261123/6265.html",
      "publishedAt": "2026-11-23T03:32:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "持续优化持仓结构",
      "contentTags": [
        "行业动态"
      ],
      "scoreDetails": {},
      "score": 52,
      "original": {
        "huibaoxianCategory": "行业动态"
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
          "score": 10,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "marketEducation": {
          "score": 54,
          "reasons": [
            "命中二级市场投教核心主题 2 项"
          ]
        },
        "privateFundSales": {
          "score": 28,
          "reasons": [
            "命中关联主题 2 项"
          ]
        }
      },
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "title": "吴清主席会见印度驻华大使魏嘉盟",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c106311/c7672435/content.shtml",
      "publishedAt": "2026-11-23T01:51:21.000Z",
      "fetchedAt": "2026-11-23T14:38:02.847Z",
      "timeConfidence": "source",
      "summary": "2026年11月23日,中国证监会主席吴清在京会见了印度驻华大使魏嘉盟(Vikram Kumar Doraiswami)。双方就全球金融市场形势、中印资本市场改革发展及增进务实合作等议题交换了意见。1.jpg",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_7590e8a3fffa",
      "tier": "S0",
      "sourceTier": "S0",
      "sourceTierLabel": "权威原始源",
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
      "tierGate": 50,
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "权威原始来源",
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
        "官方监管",
        "权威源"
      ],
      "eventId": null
    },
    {
      "id": "news_db87aa674dda",
      "title": "保险红韵润陇原中国人寿以长征精神书写普惠金融新答卷",
      "sourceUrl": "http://www.huibaoxian.com.cn//htm/pc/20261120/6264.html",
      "publishedAt": "2026-11-20T02:40:00.000Z",
      "sourceName": "慧保天下",
      "category": "industry",
      "tier": "S2",
      "evidenceType": "financial_media",
      "summary": "打通红色精神从历史到现实的传承脉络",
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
      "title": "证券监管部门联合公安机关依法处罚编造传播资本市场虚假信息行为 公布4起典型案例",
      "sourceUrl": "http://www.csrc.gov.cn/csrc/c100028/c7671953/content.shtml",
      "publishedAt": "2026-11-19T23:14:34.000Z",
      "fetchedAt": "2026-11-20T12:55:11.434Z",
      "timeConfidence": "source",
      "summary": "今年以来，证券监管部门联合公安机关查办多个编造传播资本市场虚假信息的违法违规行为，依法处罚有关责任人员，有力打击不法分子，推动营造清朗资本市场网络空间。今天，两部门联合公布4起编造传播资本市场虚假信息典型案例。\n案例一、宗某、卢某等编造传播行业税收政策谣言，扰乱市场预期\n一些网民散布关于特定行业税收政策变动的谣言，在网络上扩散，对资本市场有关行业板块造成明显扰动。\n2026年2月，宗某捏造“互联网",
      "sourceName": "证监会",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "official_notice",
      "discoveredVia": "RSSHub",
      "id": "news_9311d639357a",
      "tier": "S0",
      "sourceTier": "S0",
      "sourceTierLabel": "权威原始源",
      "score": 50,
      "rawScore": 68,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 3,
        "recency": 10,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 50,
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "权威原始来源",
        "对展业/配置/合规有直接影响"
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
          "score": 55,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 51,
          "reasons": [
            "命中关联主题 3 项",
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
      "attentionScore": 50,
      "llmScores": [
        68,
        31
      ],
      "scoredBy": "llm"
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
      "score": 71,
      "rawScore": 74,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 6,
        "recency": 7,
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
          "score": 34,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 43,
          "reasons": [
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 65,
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
      "eventId": "event_b326a8886e68",
      "attentionScore": 71,
      "llmScores": [
        74,
        68
      ],
      "scoredBy": "llm"
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
      "score": 45,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
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
        "权威原始来源",
        "对展业/配置/合规有直接影响"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 44,
          "reasons": [
            "命中关联主题 2 项",
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
        "官方监管",
        "权威源"
      ],
      "eventId": null,
      "attentionScore": 45,
      "llmScores": [
        32,
        58
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
    }
  ],
  "curationStats": {
    "scenes": {
      "insurance": 58,
      "privateFundSales": 9,
      "marketEducation": 83
    },
    "featured": 24,
    "gate": {
      "passed": 34,
      "total": 150,
      "byTier": {
        "S3": {
          "total": 69,
          "passed": 8
        },
        "S2": {
          "total": 75,
          "passed": 24
        },
        "S0": {
          "total": 6,
          "passed": 2
        }
      }
    }
  },
  "sections": {
    "regulatory": [
      "news_f26a6e7fc907",
      "news_1fba37927d25",
      "news_35d351f7b478",
      "news_7590e8a3fffa",
      "news_9311d639357a",
      "news_8d6ef6bc050e",
      "news_a0f53987808f",
      "news_77a41d21ba8f",
      "news_7c17994d15e5"
    ],
    "products": [
      "news_54b45c83a3e0"
    ],
    "industry": [
      "news_8694922df58b",
      "news_3285dce56ae8",
      "news_3e6008ac6a13",
      "news_4c120d97375a",
      "news_f54b0b2bab93",
      "news_ad018d6097e6",
      "news_ce9f6ee68163",
      "news_b2edd5da5b45",
      "news_2682e7f66ac5",
      "news_ce333172cc98"
    ],
    "research": [
      "news_a3849e000ceb",
      "news_512bb501ae47",
      "news_bb7f086d4643",
      "news_434962dc6142",
      "news_b53e64f498e6",
      "news_7afe5a443c46",
      "news_af71409cca3b",
      "news_08dd06f7c9da",
      "news_45acf463530f",
      "news_0dcdb5c3bc2d"
    ],
    "insights": [
      "news_daafb6c261ea",
      "news_b30482833db4",
      "news_295c3dc94a83",
      "news_971778718221",
      "news_fb32ed60c234",
      "news_38dbdac23f08",
      "news_860df6e38880",
      "news_ee8d0437349b",
      "news_8d7adca06573",
      "news_f5b522f9e248"
    ]
  },
  "flashes": [
    {
      "id": "news_a3849e000ceb",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_512bb501ae47",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_8694922df58b",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_3285dce56ae8",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_3e6008ac6a13",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_bb7f086d4643",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_4c120d97375a",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_f54b0b2bab93",
      "dotClass": "flash-dot-blue"
    }
  ],
  "keywordIndex": {
    "保险": [
      "news_8cd6e23fb0d1",
      "news_193b8eed8817",
      "news_54b45c83a3e0",
      "news_1fba37927d25",
      "news_45d9131156e3",
      "news_5283c9dcbee3",
      "news_033c40c4bd46",
      "news_7b743542e5bd",
      "news_f06aa0bf9643",
      "news_db87aa674dda"
    ],
    "险企": [
      "news_54b45c83a3e0"
    ],
    "保险公司": [
      "news_8cd6e23fb0d1",
      "news_54b45c83a3e0"
    ],
    "保险产品": [
      "news_54b45c83a3e0"
    ],
    "保险中介": [
      "news_f06aa0bf9643"
    ],
    "养老": [
      "news_1fba37927d25",
      "news_c1651551b805",
      "news_7b743542e5bd"
    ],
    "退休": [
      "news_7b743542e5bd"
    ],
    "寿险": [
      "news_033c40c4bd46"
    ],
    "分红险": [
      "news_54b45c83a3e0"
    ],
    "车险": [
      "news_f06aa0bf9643"
    ],
    "中国平安": [
      "news_008b60e1c19c"
    ],
    "国寿": [
      "news_f06aa0bf9643"
    ],
    "太保": [
      "news_95873c01d6ca"
    ],
    "友邦": [
      "news_f06aa0bf9643"
    ],
    "银行": [
      "news_3e6008ac6a13",
      "news_ce333172cc98",
      "news_af71409cca3b",
      "news_df97cf409b89",
      "news_a5332a3b5380",
      "news_dd0666b14ee1",
      "news_54b45c83a3e0",
      "news_51848f10bfbd",
      "news_f76c7de72998",
      "news_33446de5a4fe",
      "news_3a26a10b4215",
      "news_1e844639d6b4",
      "news_008b60e1c19c",
      "news_d57223f15e25",
      "news_9f3cd8b9a0a4",
      "news_a439d01f205f",
      "news_77a41d21ba8f"
    ],
    "央行": [
      "news_ce333172cc98",
      "news_7afe5a443c46",
      "news_af71409cca3b",
      "news_df97cf409b89",
      "news_17168344bd46",
      "news_3a26a10b4215",
      "news_a439d01f205f"
    ],
    "商业银行": [
      "news_a5332a3b5380"
    ],
    "利率": [
      "news_a3849e000ceb",
      "news_a7914f0094bb",
      "news_dd0666b14ee1",
      "news_7fc5c4d07bb9",
      "news_17168344bd46",
      "news_3a26a10b4215",
      "news_492c6a227ba0",
      "news_75dde0513fe5",
      "news_a439d01f205f"
    ],
    "贷款利率": [
      "news_17168344bd46"
    ],
    "MLF": [
      "news_7afe5a443c46",
      "news_af71409cca3b",
      "news_df97cf409b89",
      "news_a439d01f205f"
    ],
    "逆回购": [
      "news_7afe5a443c46",
      "news_af71409cca3b"
    ],
    "加息": [
      "news_ce333172cc98",
      "news_3a26a10b4215"
    ],
    "流动性": [
      "news_7afe5a443c46",
      "news_df97cf409b89",
      "news_dd0666b14ee1",
      "news_a439d01f205f"
    ],
    "存款": [
      "news_492c6a227ba0"
    ],
    "理财": [
      "news_af71409cca3b",
      "news_54b45c83a3e0",
      "news_33446de5a4fe"
    ],
    "理财产品": [
      "news_af71409cca3b"
    ],
    "破净": [
      "news_33446de5a4fe"
    ],
    "股票": [
      "news_3285dce56ae8",
      "news_434962dc6142",
      "news_f26a6e7fc907",
      "news_47575c80ab1a",
      "news_17168344bd46",
      "news_35d351f7b478",
      "news_32cbaee11b12",
      "news_f6a58fc2d7e7",
      "news_b21d5a9d163a",
      "news_d57223f15e25"
    ],
    "A股": [
      "news_6e8e597a7eae",
      "news_8392fbd48d71",
      "news_17168344bd46",
      "news_1e844639d6b4"
    ],
    "港股": [
      "news_ecc4bd9e4482",
      "news_8392fbd48d71",
      "news_db6e54cb3e5c",
      "news_1e844639d6b4",
      "news_2b9490ebd9c6"
    ],
    "美股": [
      "news_b53e64f498e6",
      "news_a7914f0094bb",
      "news_41857c681530",
      "news_0dcdb5c3bc2d",
      "news_8020e388a678",
      "news_c22d809ce280",
      "news_b30482833db4",
      "news_295c3dc94a83",
      "news_6e8e597a7eae",
      "news_8392fbd48d71",
      "news_4e954990390c",
      "news_7414348bbe24",
      "news_0ba7a8b7cd6a",
      "news_c6814a20263c",
      "news_802c164f0c40",
      "news_6458bb6fcf9a",
      "news_71416bc01604",
      "news_51f874cdc341"
    ],
    "大盘": [
      "news_434962dc6142",
      "news_0d0af83a5dc0"
    ],
    "指数": [
      "news_3285dce56ae8",
      "news_3e6008ac6a13",
      "news_41857c681530",
      "news_0dcdb5c3bc2d",
      "news_8020e388a678",
      "news_c22d809ce280",
      "news_aa6746dae469",
      "news_8392fbd48d71",
      "news_fcf203600bfe",
      "news_1e844639d6b4",
      "news_802c164f0c40",
      "news_b5e1461b2b32"
    ],
    "ETF": [
      "news_512bb501ae47",
      "news_a8377ca914e5"
    ],
    "公募基金": [
      "news_a8377ca914e5",
      "news_8d6ef6bc050e"
    ],
    "量化": [
      "news_512bb501ae47",
      "news_8020e388a678",
      "news_a8377ca914e5",
      "news_7f915be5233b"
    ],
    "债券": [
      "news_8cd6e23fb0d1",
      "news_7ece4d0544da"
    ],
    "国债": [
      "news_af71409cca3b",
      "news_7ece4d0544da"
    ],
    "信用债": [
      "news_dd0666b14ee1"
    ],
    "城投债": [
      "news_dd0666b14ee1"
    ],
    "利率债": [
      "news_dd0666b14ee1"
    ],
    "期货": [
      "news_c964440acf24",
      "news_41857c681530",
      "news_0dcdb5c3bc2d",
      "news_9e6c9b7e680d"
    ],
    "IPO": [
      "news_8694922df58b",
      "news_ce9f6ee68163",
      "news_fe2eba328ebe",
      "news_292c542c4694",
      "news_c6814a20263c",
      "news_71416bc01604"
    ],
    "上市": [
      "news_434962dc6142",
      "news_ce9f6ee68163",
      "news_fe2eba328ebe",
      "news_0d0af83a5dc0",
      "news_292c542c4694",
      "news_17168344bd46",
      "news_9c6298764104",
      "news_32cbaee11b12",
      "news_008b60e1c19c",
      "news_2b9490ebd9c6",
      "news_739885b1f92a",
      "news_4e8fca1354d5",
      "news_979ad8984d0f",
      "news_71416bc01604",
      "news_6d9713b56b9c"
    ],
    "打新": [
      "news_979ad8984d0f"
    ],
    "定增": [
      "news_ee8d0437349b"
    ],
    "减持": [
      "news_45acf463530f"
    ],
    "增持": [
      "news_17168344bd46",
      "news_008b60e1c19c"
    ],
    "回购": [
      "news_7afe5a443c46",
      "news_af71409cca3b",
      "news_daafb6c261ea",
      "news_17168344bd46",
      "news_8d7adca06573",
      "news_f5b522f9e248",
      "news_98797dab7f3a",
      "news_2ab774fdd0db",
      "news_008b60e1c19c",
      "news_d57223f15e25",
      "news_efb2ac3b2262",
      "news_5ec39e02a5f0",
      "news_808085b6eb72",
      "news_87938d64ea46"
    ],
    "券商": [
      "news_33446de5a4fe",
      "news_1715d6c943f5"
    ],
    "自营": [
      "news_ee8d0437349b",
      "news_f6a58fc2d7e7"
    ],
    "投资者": [
      "news_ce333172cc98",
      "news_41857c681530",
      "news_292c542c4694",
      "news_a5332a3b5380",
      "news_aa6746dae469",
      "news_b2a29e4c0884",
      "news_a4cef73da396",
      "news_75dde0513fe5",
      "news_008b60e1c19c",
      "news_2b9490ebd9c6",
      "news_f6a58fc2d7e7"
    ],
    "机构": [
      "news_4c120d97375a",
      "news_434962dc6142",
      "news_a5332a3b5380",
      "news_dd0666b14ee1",
      "news_54b45c83a3e0",
      "news_35cbd3d497b8",
      "news_0927bc489a09",
      "news_8b6c1e9c72e9",
      "news_a8377ca914e5",
      "news_b21d5a9d163a",
      "news_979ad8984d0f",
      "news_77a41d21ba8f"
    ],
    "南向资金": [
      "news_db6e54cb3e5c"
    ],
    "监管": [
      "news_f26a6e7fc907",
      "news_a5332a3b5380",
      "news_8cd6e23fb0d1",
      "news_35d351f7b478",
      "news_008b60e1c19c",
      "news_9f3cd8b9a0a4",
      "news_9311d639357a",
      "news_8d6ef6bc050e",
      "news_77a41d21ba8f"
    ],
    "金融监管": [
      "news_8cd6e23fb0d1",
      "news_008b60e1c19c",
      "news_77a41d21ba8f"
    ],
    "证监会": [
      "news_f26a6e7fc907",
      "news_35d351f7b478",
      "news_7590e8a3fffa",
      "news_9311d639357a",
      "news_8d6ef6bc050e",
      "news_a0f53987808f",
      "news_77a41d21ba8f",
      "news_7c17994d15e5"
    ],
    "港交所": [
      "news_fe2eba328ebe"
    ],
    "合规": [
      "news_9f3cd8b9a0a4"
    ],
    "处罚": [
      "news_f26a6e7fc907",
      "news_1fba37927d25",
      "news_35d351f7b478",
      "news_9311d639357a"
    ],
    "通报": [
      "news_b2edd5da5b45"
    ],
    "条款": [
      "news_0d0af83a5dc0",
      "news_d03622c576b5",
      "news_f06aa0bf9643"
    ],
    "通知": [
      "news_f76c7de72998"
    ],
    "指引": [
      "news_bb7f086d4643"
    ],
    "意见": [
      "news_1fba37927d25",
      "news_73af321b4a31",
      "news_7590e8a3fffa",
      "news_a0f53987808f"
    ],
    "规定": [
      "news_9f3cd8b9a0a4"
    ],
    "条例": [
      "news_2be1cd85ac01",
      "news_1fba37927d25"
    ],
    "法规": [
      "news_1fba37927d25",
      "news_8d6ef6bc050e"
    ],
    "资质": [
      "news_dd0666b14ee1"
    ],
    "经济": [
      "news_3e6008ac6a13",
      "news_ce333172cc98",
      "news_0b60e936e2af",
      "news_7ece4d0544da",
      "news_0ba7a8b7cd6a",
      "news_45d9131156e3",
      "news_fcf203600bfe",
      "news_3a26a10b4215",
      "news_f6a58fc2d7e7",
      "news_cb1affed32d8",
      "news_f7a417b1a23f",
      "news_89bbb7aec5cd"
    ],
    "GDP": [
      "news_06a844ce67cd",
      "news_ea0377960bba",
      "news_3a26a10b4215"
    ],
    "PMI": [
      "news_fcf203600bfe"
    ],
    "外贸": [
      "news_f87319743ca8"
    ],
    "汇率": [
      "news_fcf203600bfe"
    ],
    "人民币": [
      "news_daafb6c261ea",
      "news_b4c79448fd87",
      "news_fcf203600bfe"
    ],
    "跨境": [
      "news_fcf203600bfe"
    ],
    "在岸": [
      "news_fcf203600bfe"
    ],
    "美元": [
      "news_3285dce56ae8",
      "news_434962dc6142",
      "news_2682e7f66ac5",
      "news_b53e64f498e6",
      "news_dfa1b34f962a",
      "news_c964440acf24",
      "news_41857c681530",
      "news_292c542c4694",
      "news_fd3d890fd7a2",
      "news_5cdc4a0ae2b8",
      "news_7414348bbe24",
      "news_b816a2e607ae",
      "news_b4c79448fd87",
      "news_51848f10bfbd",
      "news_f76c7de72998",
      "news_d03622c576b5",
      "news_c6814a20263c",
      "news_fcf203600bfe",
      "news_ea0377960bba",
      "news_7f915be5233b",
      "news_6458bb6fcf9a",
      "news_f06aa0bf9643"
    ],
    "欧元": [
      "news_b9b0b54415be",
      "news_46d4a629d23a"
    ],
    "通胀": [
      "news_3e6008ac6a13",
      "news_3a26a10b4215"
    ],
    "衰退": [
      "news_fcf203600bfe",
      "news_f6a58fc2d7e7"
    ],
    "房地产": [
      "news_4e8fca1354d5"
    ],
    "地产": [
      "news_4e8fca1354d5"
    ],
    "住房": [
      "news_5283c9dcbee3"
    ],
    "消费": [
      "news_bb7f086d4643",
      "news_f54b0b2bab93",
      "news_23769bd6b141",
      "news_3a26a10b4215",
      "news_8b6c1e9c72e9",
      "news_82e5c09b849a",
      "news_ad8817bd03d7"
    ],
    "投资": [
      "news_434962dc6142",
      "news_ce333172cc98",
      "news_9e8e14489755",
      "news_0d0af83a5dc0",
      "news_41857c681530",
      "news_8020e388a678",
      "news_292c542c4694",
      "news_47575c80ab1a",
      "news_a5332a3b5380",
      "news_aa6746dae469",
      "news_8cd6e23fb0d1",
      "news_0b60e936e2af",
      "news_fb32ed60c234",
      "news_860df6e38880",
      "news_54b45c83a3e0",
      "news_62e8e37d3409",
      "news_7ece4d0544da",
      "news_7414348bbe24",
      "news_b816a2e607ae",
      "news_23769bd6b141",
      "news_35cbd3d497b8",
      "news_fcf203600bfe",
      "news_b2a29e4c0884",
      "news_a4cef73da396",
      "news_75dde0513fe5",
      "news_008b60e1c19c",
      "news_2b9490ebd9c6",
      "news_f6a58fc2d7e7",
      "news_a8377ca914e5",
      "news_b9b0b54415be",
      "news_8d6ef6bc050e"
    ],
    "出口": [
      "news_df97cf409b89",
      "news_f87319743ca8",
      "news_ea0377960bba",
      "news_3a26a10b4215",
      "news_eea72af10228"
    ],
    "进口": [
      "news_2be1cd85ac01",
      "news_414456d4364d"
    ],
    "进出口": [
      "news_f87319743ca8"
    ],
    "贸易": [
      "news_ea0377960bba"
    ],
    "产业链": [
      "news_f87ee86e2557",
      "news_6e8e597a7eae",
      "news_ea0377960bba",
      "news_b9b0b54415be"
    ],
    "供应链": [
      "news_8020e388a678",
      "news_6e8e597a7eae",
      "news_7f915be5233b"
    ],
    "就业": [
      "news_2a295fbb7b82"
    ],
    "失业": [
      "news_1fba37927d25"
    ],
    "收入": [
      "news_a3849e000ceb",
      "news_f54b0b2bab93",
      "news_2682e7f66ac5",
      "news_b53e64f498e6",
      "news_ecc4bd9e4482",
      "news_65fe1c437730",
      "news_193b8eed8817",
      "news_971778718221",
      "news_7fc5c4d07bb9",
      "news_56f3ebbf4518",
      "news_17168344bd46",
      "news_62e8e37d3409",
      "news_ee8d0437349b",
      "news_4f6364a9a70b",
      "news_32cbaee11b12",
      "news_b2a29e4c0884",
      "news_a4cef73da396",
      "news_b8fae9e749cb",
      "news_82e5c09b849a",
      "news_ad8817bd03d7",
      "news_7b743542e5bd"
    ],
    "黄金": [
      "news_38dbdac23f08",
      "news_e5c10523ca27",
      "news_7414348bbe24",
      "news_f76c7de72998"
    ],
    "金价": [
      "news_e5c10523ca27",
      "news_7414348bbe24",
      "news_23769bd6b141",
      "news_f76c7de72998"
    ],
    "原油": [
      "news_3285dce56ae8",
      "news_c964440acf24",
      "news_41857c681530"
    ],
    "工业": [
      "news_6a64a855abfc",
      "news_008b60e1c19c",
      "news_89bbb7aec5cd"
    ],
    "利润": [
      "news_a3849e000ceb",
      "news_f54b0b2bab93",
      "news_ad018d6097e6",
      "news_b53e64f498e6",
      "news_a7914f0094bb",
      "news_f26a6e7fc907",
      "news_ecc4bd9e4482",
      "news_65fe1c437730",
      "news_daafb6c261ea",
      "news_7fc5c4d07bb9",
      "news_860df6e38880",
      "news_17168344bd46",
      "news_5bcdd659fda9",
      "news_32cbaee11b12",
      "news_a4cef73da396",
      "news_ad8817bd03d7"
    ],
    "股市": [
      "news_3285dce56ae8",
      "news_41857c681530",
      "news_0dcdb5c3bc2d",
      "news_e5c10523ca27",
      "news_7414348bbe24",
      "news_dd4af1197096"
    ],
    "美联储": [
      "news_9f3cd8b9a0a4"
    ],
    "财报": [
      "news_a3849e000ceb",
      "news_bb7f086d4643",
      "news_ad018d6097e6",
      "news_a7914f0094bb",
      "news_65fe1c437730",
      "news_870cf23b96e5",
      "news_7fc5c4d07bb9",
      "news_860df6e38880",
      "news_9c6298764104",
      "news_4f6364a9a70b",
      "news_b8fae9e749cb",
      "news_ad8817bd03d7"
    ],
    "资产配置": [
      "news_a8377ca914e5"
    ],
    "资管": [
      "news_7ece4d0544da"
    ],
    "净值": [
      "news_af71409cca3b",
      "news_33446de5a4fe"
    ],
    "CTA": [
      "news_e5c10523ca27"
    ],
    "固收": [
      "news_af71409cca3b"
    ],
    "权益": [
      "news_08dd06f7c9da",
      "news_df97cf409b89",
      "news_8cd6e23fb0d1",
      "news_daafb6c261ea",
      "news_38dbdac23f08",
      "news_2ab774fdd0db",
      "news_1e844639d6b4",
      "news_95873c01d6ca",
      "news_eea72af10228",
      "news_5ec39e02a5f0",
      "news_808085b6eb72"
    ],
    "多资产": [
      "news_a8377ca914e5"
    ],
    "年化": [
      "news_ee8d0437349b"
    ],
    "IRR": [
      "news_54b45c83a3e0"
    ],
    "赎回": [
      "news_dd0666b14ee1"
    ]
  },
  "sourceHealth": {
    "generatedAt": "2026-11-24T14:57:48.749Z",
    "status": "healthy",
    "totalSources": 12,
    "successfulSources": 10,
    "usableSources": 10,
    "failedSources": 2,
    "staleSources": 1,
    "fetchLimitReachedSources": 1,
    "coverageRate": 0.8333,
    "freshestPublishedAt": "2026-11-24T14:53:53.000Z",
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
        "addedCount": 6,
        "durationMs": 1277,
        "latestPublishedAt": "2026-11-24T14:39:24.000Z",
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
        "itemCount": 26,
        "rawItemCount": 26,
        "acceptedItemCount": 26,
        "initialFetchLimit": 30,
        "fetchLimit": 30,
        "fetchLimitExpanded": false,
        "fetchLimitReached": false,
        "addedCount": 22,
        "durationMs": 49150,
        "latestPublishedAt": "2026-11-24T14:44:32.000Z",
        "usedEndpoint": "rsshub-balancer.virworks.moe"
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
        "addedCount": 27,
        "durationMs": 59914,
        "latestPublishedAt": "2026-11-24T14:39:38.000Z",
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
        "addedCount": 12,
        "durationMs": 49287,
        "latestPublishedAt": "2026-11-24T13:43:30.000Z",
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
        "itemCount": 46,
        "rawItemCount": 46,
        "acceptedItemCount": 46,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 37,
        "durationMs": 53380,
        "latestPublishedAt": "2026-11-24T14:53:53.000Z",
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
        "addedCount": 18,
        "durationMs": 999,
        "latestPublishedAt": "2026-11-24T13:00:00.000Z",
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
        "durationMs": 53485,
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
        "durationMs": 55573,
        "latestPublishedAt": "2026-11-23T01:51:21.000Z",
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
        "addedCount": 4,
        "durationMs": 107,
        "latestPublishedAt": "2026-11-24T06:52:45.000Z",
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
        "durationMs": 86,
        "latestPublishedAt": "2026-11-24T01:48:57.000Z",
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
        "addedCount": 6,
        "durationMs": 0,
        "latestPublishedAt": "2026-11-24T10:22:00.000Z",
        "usedEndpoint": null
      }
    ]
  },
  "historyStats": {
    "itemCount": 5000,
    "eventCount": 512,
    "retentionDays": 90
  },
  "macro": {
    "updatedAt": "2026-11-24T14:57:48.749Z",
    "indicators": [
      {
        "key": "lpr1y",
        "name": "LPR 1年期",
        "value": "3.00%",
        "note": "较10月20日 3.00% 持平",
        "direction": "flat",
        "asOf": "2026-11-20",
        "source": "中国货币网",
        "mode": "auto",
        "series": []
      },
      {
        "key": "lpr5y",
        "name": "LPR 5年期以上",
        "value": "3.50%",
        "note": "较10月20日 3.50% 持平",
        "direction": "flat",
        "asOf": "2026-11-20",
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
        "value": "4.92%",
        "note": "较11月20日 4.92% 持平",
        "direction": "flat",
        "asOf": "2026-11-23",
        "source": "美国财政部",
        "mode": "auto",
        "series": [
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
          },
          {
            "date": "2026-11-19",
            "value": 5.04
          },
          {
            "date": "2026-11-20",
            "value": 4.92
          },
          {
            "date": "2026-11-23",
            "value": 4.92
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
        "value": "6.6647",
        "note": "较11月20日 6.6777 下降",
        "direction": "down",
        "asOf": "2026-11-23",
        "source": "Frankfurter/ECB",
        "mode": "auto",
        "series": [
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
          },
          {
            "date": "2026-11-20",
            "value": 6.6777
          },
          {
            "date": "2026-11-23",
            "value": 6.6647
          }
        ]
      },
      {
        "key": "gold",
        "name": "现货黄金",
        "value": "$3,621",
        "note": "较11月23日 $3,640 下降",
        "direction": "down",
        "asOf": "2026-11-24",
        "source": "gold-api.com",
        "mode": "auto",
        "series": []
      },
      {
        "key": "cngold",
        "name": "国内金价",
        "value": "¥777.72",
        "note": "较11月23日 ¥781.40 下降",
        "direction": "down",
        "asOf": "2026-11-24",
        "source": "上海黄金交易所 Au99.99",
        "mode": "auto",
        "series": [
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
          },
          {
            "date": "2026-11-20",
            "value": 764.55
          },
          {
            "date": "2026-11-23",
            "value": 781.4
          },
          {
            "date": "2026-11-24",
            "value": 777.72
          }
        ]
      }
    ]
  },
  "aiAnalysis": {
    "schemaVersion": "2.0",
    "generatedBy": "cached",
    "dailyTakeaway": {
      "text": "11月24日央行公告25日开展8000亿元MLF操作，流动性投放延续；10月以来股票型ETF累计净流入、上市公司回购发力，已推动A股放量反弹。同日南方基金出资1亿元自购旗下均衡主动ETF，机构以真金白银承接。海外黄仁勋复职令英伟达单日涨超31%、纳指涨6.5%，AI板块风险偏好回升，与国内ETF资金形成共振。",
      "evidenceItemIds": [
        "news_a439d01f205f"
      ]
    },
    "eventClusters": [
      {
        "eventId": "event_f101880ef7bc",
        "title": "对冲失效，空头止损，杠杆ETF狂扫410亿！复盘老黄回归，美股“惊心动魄”的一天",
        "mainItemId": "news_c22d809ce280",
        "relatedItemIds": [
          "news_0dcdb5c3bc2d",
          "news_802c164f0c40",
          "news_51f874cdc341"
        ],
        "evidenceItemIds": [
          "news_c22d809ce280",
          "news_0dcdb5c3bc2d",
          "news_802c164f0c40",
          "news_51f874cdc341"
        ],
        "historicalEvidenceCount": 46,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-11-24T14:57:48.749Z",
        "status": "developing",
        "summary": "英伟达暴涨31%引爆美股大涨，纳指狂飙6.5%，黄金反弹，多家机构看好后续走势",
        "latestProgress": "最新报道复盘英伟达回归行情，对冲失效、空头止损，杠杆ETF狂扫410亿"
      },
      {
        "eventId": "event_a3c5d0364922",
        "title": "A股光模块冲高回落，产业链确定性是否修复仍待验证",
        "mainItemId": "news_6e8e597a7eae",
        "relatedItemIds": [
          "news_1e844639d6b4"
        ],
        "evidenceItemIds": [
          "news_6e8e597a7eae",
          "news_1e844639d6b4"
        ],
        "historicalEvidenceCount": 48,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-11-24T14:57:48.749Z",
        "status": "developing",
        "summary": "主动ETF助力长钱入市，叠加回购增持稳市组合拳催化A股修复",
        "latestProgress": "11月24日A股四大指数集体高开，英伟达概念等板块领涨，半夏投资已做多A股宽基指数"
      },
      {
        "eventId": "event_c68d651d4ff9",
        "title": "黄仁勋回归亚股弹 港股跟升后倒跌",
        "mainItemId": "news_ecc4bd9e4482",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_ecc4bd9e4482"
        ],
        "historicalEvidenceCount": 49,
        "firstSeenAt": "2026-09-30T15:04:45.414Z",
        "lastSeenAt": "2026-11-24T14:57:48.749Z",
        "status": "developing",
        "summary": "黄仁勋复职引发全球大类资产共振，粤港湾智算在手算力订单逾370亿元，带动港股波动。",
        "latestProgress": "黄仁勋回归带动亚股反弹，港股跟升后倒跌。"
      },
      {
        "eventId": "event_2cf716748ce1",
        "title": "韩国央行后天或再加息！AI暴跌之际，高盛警告：消费撑不住了",
        "mainItemId": "news_3a26a10b4215",
        "relatedItemIds": [
          "news_a439d01f205f",
          "news_7afe5a443c46"
        ],
        "evidenceItemIds": [
          "news_a439d01f205f",
          "news_3a26a10b4215",
          "news_7afe5a443c46"
        ],
        "historicalEvidenceCount": 47,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-11-24T14:57:48.749Z",
        "status": "developing",
        "summary": "高盛时隔11天再度下调黄金目标价至4650美元，同期全球央行9月净购金创新高",
        "latestProgress": "世界黄金协会称9月全球央行公开净购金61吨，创2026年单月最高纪录"
      },
      {
        "eventId": "event_30a0369f2fb0",
        "title": "联创股份：拟5000万元—1亿元回购公司股份",
        "mainItemId": "news_f5b522f9e248",
        "relatedItemIds": [
          "news_efb2ac3b2262"
        ],
        "evidenceItemIds": [
          "news_efb2ac3b2262",
          "news_f5b522f9e248"
        ],
        "historicalEvidenceCount": 2,
        "firstSeenAt": "2026-11-24T09:59:02.309Z",
        "lastSeenAt": "2026-11-24T14:57:48.749Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_de3f6a2f6fc5",
        "title": "三元生物：拟3000万元—5000万元回购公司股份",
        "mainItemId": "news_87938d64ea46",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_87938d64ea46"
        ],
        "historicalEvidenceCount": 2,
        "firstSeenAt": "2026-11-24T09:59:02.309Z",
        "lastSeenAt": "2026-11-24T14:57:48.749Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_a4f72a95e7b2",
        "title": "达利欧最新警告：伟大的技术，不等于伟大的投资",
        "mainItemId": "news_b816a2e607ae",
        "relatedItemIds": [
          "news_75dde0513fe5"
        ],
        "evidenceItemIds": [
          "news_b816a2e607ae",
          "news_75dde0513fe5"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-11-24T14:57:48.749Z",
        "lastSeenAt": "2026-11-24T14:57:48.749Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_4a122eba04e5",
        "title": "大烨智能：11月26日复牌并实施其他风险警示，股票简称变更为“ST大烨”",
        "mainItemId": "news_35d351f7b478",
        "relatedItemIds": [
          "news_f26a6e7fc907"
        ],
        "evidenceItemIds": [
          "news_35d351f7b478",
          "news_f26a6e7fc907"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-11-24T14:57:48.749Z",
        "lastSeenAt": "2026-11-24T14:57:48.749Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_aff2dd3f6a27",
        "title": "华资实业：董事长提议1亿元—2亿元回购公司股份",
        "mainItemId": "news_808085b6eb72",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_808085b6eb72"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-11-24T14:57:48.749Z",
        "lastSeenAt": "2026-11-24T14:57:48.749Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
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
        "lastSeenAt": "2026-11-20T12:56:04.454Z",
        "status": "developing",
        "summary": "中国证监会新闻发言人就市场关切问题答记者问，传递监管政策导向",
        "latestProgress": "2026年11月17日证监会新闻发言人完成记者问询回应工作"
      }
    ],
    "dailySummary": {
      "highlights": [
        {
          "text": "央行公告25日开展8000亿元MLF操作和5000亿元7天期逆回购操作，保持银行体系流动性充裕。",
          "evidenceItemIds": [
            "news_a439d01f205f"
          ]
        }
      ]
    },
    "eventChain": {
      "summary": "当日主线由流动性投放、机构资金承接与海外AI事件共同构成；关联多为并列支撑，不将连续报道强写为因果。",
      "chains": [
        {
          "title": "流动性投放与A股资金面修复",
          "causalLink": "央行公告的流动性投放与ETF、回购共同被原文列为资金面支撑；原文称ETF资金与回购发力，A股演绎放量反弹。",
          "evidenceItemIds": [
            "news_a439d01f205f"
          ],
          "nodes": [
            "央行公告8000亿元MLF与5000亿元逆回购",
            "股票型ETF净流入、上市公司回购",
            "A股放量反弹"
          ]
        },
        {
          "title": "AI算力供需收紧向国产建设端传导",
          "causalLink": "算力短缺和供应链收紧被并列报道，并与国产算力网扩容、超节点机遇窗口共同指向国产建设端重估，原文未给出精确量化因果。",
          "evidenceItemIds": [
            "news_7f915be5233b"
          ],
          "nodes": [
            "AI服务器签约后最高再涨45%",
            "AI芯片供应链收紧",
            "国产算力网扩容与超节点机遇"
          ]
        }
      ]
    },
    "industryImpact": {
      "quadrants": {
        "insurance": {
          "level": "medium",
          "summary": "黄金与大宗商品回撤压制投资收益，惠民保收缩与老龄化照护缺口则分别影响健康险和护理险需求。",
          "items": []
        },
        "pe": {
          "level": "high",
          "summary": "AI算力涨价、国产算力扩容和AI标准治理并行，私募股权在算力基础设施与AI应用端的估值和合规变量上升。",
          "items": [
            {
              "title": "最高45%！AI服务器签约后还要涨价，算力争夺战正在改写采购规则",
              "impact": "服务器合同签约后仍可能追加最高7000万美元，算力采购价格风险上升，被投AI基础设施企业成本与订单质量需重估。",
              "suggestion": "在投资条款中关注算力采购锁价能力与成本转嫁能力。",
              "evidenceItemIds": [
                "news_7f915be5233b"
              ]
            }
          ]
        },
        "banking": {
          "level": "high",
          "summary": "央行大额MLF与逆回购维持流动性充裕，ETF与回购活跃改善资本市场情绪，但LPR不变下净息差压力仍在。",
          "items": [
            {
              "title": "央行：将以固定数量、利率招标、多重价位中标方式开展8000亿元MLF操作",
              "impact": "25日开展8000亿元MLF，保持银行体系流动性充裕，利好负债端稳定与信贷投放。",
              "suggestion": "把握MLF投放节奏，优化负债结构，关注中长期资金成本。",
              "evidenceItemIds": [
                "news_a439d01f205f"
              ]
            }
          ]
        },
        "trust": {
          "level": "low",
          "summary": "信托直接相关资讯有限，主要受黄金与大宗商品回撤、资本市场资金面修复的外溢影响。",
          "items": []
        }
      }
    },
    "weeklyTrends": {
      "summary": "近7天资讯集中在国内流动性与A股资金面修复、AI算力与国产替代、贵金属和大宗商品回撤三条线。",
      "trends": [
        {
          "topic": "国内流动性与A股资金面修复",
          "evidence": "央行公告25日开展8000亿元MLF和5000亿元逆回购，10月以来股票型ETF净流入、回购发力推动A股放量反弹，南方基金自购1亿元主动ETF。",
          "evidenceItemIds": [
            "news_a439d01f205f"
          ],
          "direction": "上升"
        },
        {
          "topic": "AI算力与国产替代景气",
          "evidence": "AI服务器签约后仍可能涨价最高45%，国产算力网扩容加速，AI芯片供应链收紧带来超节点机遇。",
          "evidenceItemIds": [
            "news_7f915be5233b"
          ],
          "direction": "上升"
        }
      ]
    },
    "insurancePlanner": {
      "summary": "养老照护与医疗险供给变化是近期客户沟通重点，市场波动下应强化保障优先和长期规划。",
      "talkingPoints": []
    },
    "peOperations": {
      "summary": "机构自购、AI算力涨价与市场波动是私募产品运营和风控的重点观察项，需关注资金面、估值与流动性管理。",
      "talkingPoints": [
        {
          "topic": "AI算力涨价对科技类产品尽调的影响",
          "point": "AI服务器签约后仍可能涨价，算力争夺改写采购规则，科技赛道估值与成本假设需更审慎。",
          "action": "在投研和产品运营中复核算力产业链成本、订单质量和估值假设，避免单一事件驱动。",
          "evidenceItemIds": [
            "news_7f915be5233b"
          ]
        },
        {
          "topic": "市场波动下的流动性管理与合规沟通",
          "point": "大宗商品抛售、杠杆ETF逼仓及对冲失效显示波动传导快；监管要求券商灵活调整维持担保比例与追保安排，需强化压力测试。",
          "action": "检查产品流动性、杠杆和集中度，准备波动情景应对口径；对网络传闻以证监会正式信息为准。",
          "evidenceItemIds": [
            "news_8d6ef6bc050e"
          ]
        }
      ]
    },
    "marketOutlook": {
      "summary": "流动性投放与ETF资金面偏积极，但AI算力链和贵金属、大宗商品波动加大，市场或呈结构性机会与高波动并存。",
      "outlooks": [
        {
          "topic": "A股资金面：ETF净流入与央行流动性投放",
          "content": "股票型ETF净流入、机构自购及8000亿元MLF、5000亿元逆回购操作，有助稳定资金面；关注资金持续性及市场风险偏好修复节奏。",
          "evidenceItemIds": [
            "news_a439d01f205f"
          ]
        },
        {
          "topic": "AI算力链：产业景气与事件驱动高波动",
          "content": "AI服务器涨价反映算力供需偏紧，黄仁勋复职催化板块，但机械性反弹难解结构性问题，后续关注订单、成本与估值匹配。",
          "evidenceItemIds": [
            "news_7f915be5233b"
          ]
        }
      ]
    },
    "sourceGeneratedBy": "llm"
  }
};
window.KEYWORD_INDEX = {
  "保险": [
    "news_8cd6e23fb0d1",
    "news_193b8eed8817",
    "news_54b45c83a3e0",
    "news_1fba37927d25",
    "news_45d9131156e3",
    "news_5283c9dcbee3",
    "news_033c40c4bd46",
    "news_7b743542e5bd",
    "news_f06aa0bf9643",
    "news_db87aa674dda"
  ],
  "险企": [
    "news_54b45c83a3e0"
  ],
  "保险公司": [
    "news_8cd6e23fb0d1",
    "news_54b45c83a3e0"
  ],
  "保险产品": [
    "news_54b45c83a3e0"
  ],
  "保险中介": [
    "news_f06aa0bf9643"
  ],
  "养老": [
    "news_1fba37927d25",
    "news_c1651551b805",
    "news_7b743542e5bd"
  ],
  "退休": [
    "news_7b743542e5bd"
  ],
  "寿险": [
    "news_033c40c4bd46"
  ],
  "分红险": [
    "news_54b45c83a3e0"
  ],
  "车险": [
    "news_f06aa0bf9643"
  ],
  "中国平安": [
    "news_008b60e1c19c"
  ],
  "国寿": [
    "news_f06aa0bf9643"
  ],
  "太保": [
    "news_95873c01d6ca"
  ],
  "友邦": [
    "news_f06aa0bf9643"
  ],
  "银行": [
    "news_3e6008ac6a13",
    "news_ce333172cc98",
    "news_af71409cca3b",
    "news_df97cf409b89",
    "news_a5332a3b5380",
    "news_dd0666b14ee1",
    "news_54b45c83a3e0",
    "news_51848f10bfbd",
    "news_f76c7de72998",
    "news_33446de5a4fe",
    "news_3a26a10b4215",
    "news_1e844639d6b4",
    "news_008b60e1c19c",
    "news_d57223f15e25",
    "news_9f3cd8b9a0a4",
    "news_a439d01f205f",
    "news_77a41d21ba8f"
  ],
  "央行": [
    "news_ce333172cc98",
    "news_7afe5a443c46",
    "news_af71409cca3b",
    "news_df97cf409b89",
    "news_17168344bd46",
    "news_3a26a10b4215",
    "news_a439d01f205f"
  ],
  "商业银行": [
    "news_a5332a3b5380"
  ],
  "利率": [
    "news_a3849e000ceb",
    "news_a7914f0094bb",
    "news_dd0666b14ee1",
    "news_7fc5c4d07bb9",
    "news_17168344bd46",
    "news_3a26a10b4215",
    "news_492c6a227ba0",
    "news_75dde0513fe5",
    "news_a439d01f205f"
  ],
  "贷款利率": [
    "news_17168344bd46"
  ],
  "MLF": [
    "news_7afe5a443c46",
    "news_af71409cca3b",
    "news_df97cf409b89",
    "news_a439d01f205f"
  ],
  "逆回购": [
    "news_7afe5a443c46",
    "news_af71409cca3b"
  ],
  "加息": [
    "news_ce333172cc98",
    "news_3a26a10b4215"
  ],
  "流动性": [
    "news_7afe5a443c46",
    "news_df97cf409b89",
    "news_dd0666b14ee1",
    "news_a439d01f205f"
  ],
  "存款": [
    "news_492c6a227ba0"
  ],
  "理财": [
    "news_af71409cca3b",
    "news_54b45c83a3e0",
    "news_33446de5a4fe"
  ],
  "理财产品": [
    "news_af71409cca3b"
  ],
  "破净": [
    "news_33446de5a4fe"
  ],
  "股票": [
    "news_3285dce56ae8",
    "news_434962dc6142",
    "news_f26a6e7fc907",
    "news_47575c80ab1a",
    "news_17168344bd46",
    "news_35d351f7b478",
    "news_32cbaee11b12",
    "news_f6a58fc2d7e7",
    "news_b21d5a9d163a",
    "news_d57223f15e25"
  ],
  "A股": [
    "news_6e8e597a7eae",
    "news_8392fbd48d71",
    "news_17168344bd46",
    "news_1e844639d6b4"
  ],
  "港股": [
    "news_ecc4bd9e4482",
    "news_8392fbd48d71",
    "news_db6e54cb3e5c",
    "news_1e844639d6b4",
    "news_2b9490ebd9c6"
  ],
  "美股": [
    "news_b53e64f498e6",
    "news_a7914f0094bb",
    "news_41857c681530",
    "news_0dcdb5c3bc2d",
    "news_8020e388a678",
    "news_c22d809ce280",
    "news_b30482833db4",
    "news_295c3dc94a83",
    "news_6e8e597a7eae",
    "news_8392fbd48d71",
    "news_4e954990390c",
    "news_7414348bbe24",
    "news_0ba7a8b7cd6a",
    "news_c6814a20263c",
    "news_802c164f0c40",
    "news_6458bb6fcf9a",
    "news_71416bc01604",
    "news_51f874cdc341"
  ],
  "大盘": [
    "news_434962dc6142",
    "news_0d0af83a5dc0"
  ],
  "指数": [
    "news_3285dce56ae8",
    "news_3e6008ac6a13",
    "news_41857c681530",
    "news_0dcdb5c3bc2d",
    "news_8020e388a678",
    "news_c22d809ce280",
    "news_aa6746dae469",
    "news_8392fbd48d71",
    "news_fcf203600bfe",
    "news_1e844639d6b4",
    "news_802c164f0c40",
    "news_b5e1461b2b32"
  ],
  "ETF": [
    "news_512bb501ae47",
    "news_a8377ca914e5"
  ],
  "公募基金": [
    "news_a8377ca914e5",
    "news_8d6ef6bc050e"
  ],
  "量化": [
    "news_512bb501ae47",
    "news_8020e388a678",
    "news_a8377ca914e5",
    "news_7f915be5233b"
  ],
  "债券": [
    "news_8cd6e23fb0d1",
    "news_7ece4d0544da"
  ],
  "国债": [
    "news_af71409cca3b",
    "news_7ece4d0544da"
  ],
  "信用债": [
    "news_dd0666b14ee1"
  ],
  "城投债": [
    "news_dd0666b14ee1"
  ],
  "利率债": [
    "news_dd0666b14ee1"
  ],
  "期货": [
    "news_c964440acf24",
    "news_41857c681530",
    "news_0dcdb5c3bc2d",
    "news_9e6c9b7e680d"
  ],
  "IPO": [
    "news_8694922df58b",
    "news_ce9f6ee68163",
    "news_fe2eba328ebe",
    "news_292c542c4694",
    "news_c6814a20263c",
    "news_71416bc01604"
  ],
  "上市": [
    "news_434962dc6142",
    "news_ce9f6ee68163",
    "news_fe2eba328ebe",
    "news_0d0af83a5dc0",
    "news_292c542c4694",
    "news_17168344bd46",
    "news_9c6298764104",
    "news_32cbaee11b12",
    "news_008b60e1c19c",
    "news_2b9490ebd9c6",
    "news_739885b1f92a",
    "news_4e8fca1354d5",
    "news_979ad8984d0f",
    "news_71416bc01604",
    "news_6d9713b56b9c"
  ],
  "打新": [
    "news_979ad8984d0f"
  ],
  "定增": [
    "news_ee8d0437349b"
  ],
  "减持": [
    "news_45acf463530f"
  ],
  "增持": [
    "news_17168344bd46",
    "news_008b60e1c19c"
  ],
  "回购": [
    "news_7afe5a443c46",
    "news_af71409cca3b",
    "news_daafb6c261ea",
    "news_17168344bd46",
    "news_8d7adca06573",
    "news_f5b522f9e248",
    "news_98797dab7f3a",
    "news_2ab774fdd0db",
    "news_008b60e1c19c",
    "news_d57223f15e25",
    "news_efb2ac3b2262",
    "news_5ec39e02a5f0",
    "news_808085b6eb72",
    "news_87938d64ea46"
  ],
  "券商": [
    "news_33446de5a4fe",
    "news_1715d6c943f5"
  ],
  "自营": [
    "news_ee8d0437349b",
    "news_f6a58fc2d7e7"
  ],
  "投资者": [
    "news_ce333172cc98",
    "news_41857c681530",
    "news_292c542c4694",
    "news_a5332a3b5380",
    "news_aa6746dae469",
    "news_b2a29e4c0884",
    "news_a4cef73da396",
    "news_75dde0513fe5",
    "news_008b60e1c19c",
    "news_2b9490ebd9c6",
    "news_f6a58fc2d7e7"
  ],
  "机构": [
    "news_4c120d97375a",
    "news_434962dc6142",
    "news_a5332a3b5380",
    "news_dd0666b14ee1",
    "news_54b45c83a3e0",
    "news_35cbd3d497b8",
    "news_0927bc489a09",
    "news_8b6c1e9c72e9",
    "news_a8377ca914e5",
    "news_b21d5a9d163a",
    "news_979ad8984d0f",
    "news_77a41d21ba8f"
  ],
  "南向资金": [
    "news_db6e54cb3e5c"
  ],
  "监管": [
    "news_f26a6e7fc907",
    "news_a5332a3b5380",
    "news_8cd6e23fb0d1",
    "news_35d351f7b478",
    "news_008b60e1c19c",
    "news_9f3cd8b9a0a4",
    "news_9311d639357a",
    "news_8d6ef6bc050e",
    "news_77a41d21ba8f"
  ],
  "金融监管": [
    "news_8cd6e23fb0d1",
    "news_008b60e1c19c",
    "news_77a41d21ba8f"
  ],
  "证监会": [
    "news_f26a6e7fc907",
    "news_35d351f7b478",
    "news_7590e8a3fffa",
    "news_9311d639357a",
    "news_8d6ef6bc050e",
    "news_a0f53987808f",
    "news_77a41d21ba8f",
    "news_7c17994d15e5"
  ],
  "港交所": [
    "news_fe2eba328ebe"
  ],
  "合规": [
    "news_9f3cd8b9a0a4"
  ],
  "处罚": [
    "news_f26a6e7fc907",
    "news_1fba37927d25",
    "news_35d351f7b478",
    "news_9311d639357a"
  ],
  "通报": [
    "news_b2edd5da5b45"
  ],
  "条款": [
    "news_0d0af83a5dc0",
    "news_d03622c576b5",
    "news_f06aa0bf9643"
  ],
  "通知": [
    "news_f76c7de72998"
  ],
  "指引": [
    "news_bb7f086d4643"
  ],
  "意见": [
    "news_1fba37927d25",
    "news_73af321b4a31",
    "news_7590e8a3fffa",
    "news_a0f53987808f"
  ],
  "规定": [
    "news_9f3cd8b9a0a4"
  ],
  "条例": [
    "news_2be1cd85ac01",
    "news_1fba37927d25"
  ],
  "法规": [
    "news_1fba37927d25",
    "news_8d6ef6bc050e"
  ],
  "资质": [
    "news_dd0666b14ee1"
  ],
  "经济": [
    "news_3e6008ac6a13",
    "news_ce333172cc98",
    "news_0b60e936e2af",
    "news_7ece4d0544da",
    "news_0ba7a8b7cd6a",
    "news_45d9131156e3",
    "news_fcf203600bfe",
    "news_3a26a10b4215",
    "news_f6a58fc2d7e7",
    "news_cb1affed32d8",
    "news_f7a417b1a23f",
    "news_89bbb7aec5cd"
  ],
  "GDP": [
    "news_06a844ce67cd",
    "news_ea0377960bba",
    "news_3a26a10b4215"
  ],
  "PMI": [
    "news_fcf203600bfe"
  ],
  "外贸": [
    "news_f87319743ca8"
  ],
  "汇率": [
    "news_fcf203600bfe"
  ],
  "人民币": [
    "news_daafb6c261ea",
    "news_b4c79448fd87",
    "news_fcf203600bfe"
  ],
  "跨境": [
    "news_fcf203600bfe"
  ],
  "在岸": [
    "news_fcf203600bfe"
  ],
  "美元": [
    "news_3285dce56ae8",
    "news_434962dc6142",
    "news_2682e7f66ac5",
    "news_b53e64f498e6",
    "news_dfa1b34f962a",
    "news_c964440acf24",
    "news_41857c681530",
    "news_292c542c4694",
    "news_fd3d890fd7a2",
    "news_5cdc4a0ae2b8",
    "news_7414348bbe24",
    "news_b816a2e607ae",
    "news_b4c79448fd87",
    "news_51848f10bfbd",
    "news_f76c7de72998",
    "news_d03622c576b5",
    "news_c6814a20263c",
    "news_fcf203600bfe",
    "news_ea0377960bba",
    "news_7f915be5233b",
    "news_6458bb6fcf9a",
    "news_f06aa0bf9643"
  ],
  "欧元": [
    "news_b9b0b54415be",
    "news_46d4a629d23a"
  ],
  "通胀": [
    "news_3e6008ac6a13",
    "news_3a26a10b4215"
  ],
  "衰退": [
    "news_fcf203600bfe",
    "news_f6a58fc2d7e7"
  ],
  "房地产": [
    "news_4e8fca1354d5"
  ],
  "地产": [
    "news_4e8fca1354d5"
  ],
  "住房": [
    "news_5283c9dcbee3"
  ],
  "消费": [
    "news_bb7f086d4643",
    "news_f54b0b2bab93",
    "news_23769bd6b141",
    "news_3a26a10b4215",
    "news_8b6c1e9c72e9",
    "news_82e5c09b849a",
    "news_ad8817bd03d7"
  ],
  "投资": [
    "news_434962dc6142",
    "news_ce333172cc98",
    "news_9e8e14489755",
    "news_0d0af83a5dc0",
    "news_41857c681530",
    "news_8020e388a678",
    "news_292c542c4694",
    "news_47575c80ab1a",
    "news_a5332a3b5380",
    "news_aa6746dae469",
    "news_8cd6e23fb0d1",
    "news_0b60e936e2af",
    "news_fb32ed60c234",
    "news_860df6e38880",
    "news_54b45c83a3e0",
    "news_62e8e37d3409",
    "news_7ece4d0544da",
    "news_7414348bbe24",
    "news_b816a2e607ae",
    "news_23769bd6b141",
    "news_35cbd3d497b8",
    "news_fcf203600bfe",
    "news_b2a29e4c0884",
    "news_a4cef73da396",
    "news_75dde0513fe5",
    "news_008b60e1c19c",
    "news_2b9490ebd9c6",
    "news_f6a58fc2d7e7",
    "news_a8377ca914e5",
    "news_b9b0b54415be",
    "news_8d6ef6bc050e"
  ],
  "出口": [
    "news_df97cf409b89",
    "news_f87319743ca8",
    "news_ea0377960bba",
    "news_3a26a10b4215",
    "news_eea72af10228"
  ],
  "进口": [
    "news_2be1cd85ac01",
    "news_414456d4364d"
  ],
  "进出口": [
    "news_f87319743ca8"
  ],
  "贸易": [
    "news_ea0377960bba"
  ],
  "产业链": [
    "news_f87ee86e2557",
    "news_6e8e597a7eae",
    "news_ea0377960bba",
    "news_b9b0b54415be"
  ],
  "供应链": [
    "news_8020e388a678",
    "news_6e8e597a7eae",
    "news_7f915be5233b"
  ],
  "就业": [
    "news_2a295fbb7b82"
  ],
  "失业": [
    "news_1fba37927d25"
  ],
  "收入": [
    "news_a3849e000ceb",
    "news_f54b0b2bab93",
    "news_2682e7f66ac5",
    "news_b53e64f498e6",
    "news_ecc4bd9e4482",
    "news_65fe1c437730",
    "news_193b8eed8817",
    "news_971778718221",
    "news_7fc5c4d07bb9",
    "news_56f3ebbf4518",
    "news_17168344bd46",
    "news_62e8e37d3409",
    "news_ee8d0437349b",
    "news_4f6364a9a70b",
    "news_32cbaee11b12",
    "news_b2a29e4c0884",
    "news_a4cef73da396",
    "news_b8fae9e749cb",
    "news_82e5c09b849a",
    "news_ad8817bd03d7",
    "news_7b743542e5bd"
  ],
  "黄金": [
    "news_38dbdac23f08",
    "news_e5c10523ca27",
    "news_7414348bbe24",
    "news_f76c7de72998"
  ],
  "金价": [
    "news_e5c10523ca27",
    "news_7414348bbe24",
    "news_23769bd6b141",
    "news_f76c7de72998"
  ],
  "原油": [
    "news_3285dce56ae8",
    "news_c964440acf24",
    "news_41857c681530"
  ],
  "工业": [
    "news_6a64a855abfc",
    "news_008b60e1c19c",
    "news_89bbb7aec5cd"
  ],
  "利润": [
    "news_a3849e000ceb",
    "news_f54b0b2bab93",
    "news_ad018d6097e6",
    "news_b53e64f498e6",
    "news_a7914f0094bb",
    "news_f26a6e7fc907",
    "news_ecc4bd9e4482",
    "news_65fe1c437730",
    "news_daafb6c261ea",
    "news_7fc5c4d07bb9",
    "news_860df6e38880",
    "news_17168344bd46",
    "news_5bcdd659fda9",
    "news_32cbaee11b12",
    "news_a4cef73da396",
    "news_ad8817bd03d7"
  ],
  "股市": [
    "news_3285dce56ae8",
    "news_41857c681530",
    "news_0dcdb5c3bc2d",
    "news_e5c10523ca27",
    "news_7414348bbe24",
    "news_dd4af1197096"
  ],
  "美联储": [
    "news_9f3cd8b9a0a4"
  ],
  "财报": [
    "news_a3849e000ceb",
    "news_bb7f086d4643",
    "news_ad018d6097e6",
    "news_a7914f0094bb",
    "news_65fe1c437730",
    "news_870cf23b96e5",
    "news_7fc5c4d07bb9",
    "news_860df6e38880",
    "news_9c6298764104",
    "news_4f6364a9a70b",
    "news_b8fae9e749cb",
    "news_ad8817bd03d7"
  ],
  "资产配置": [
    "news_a8377ca914e5"
  ],
  "资管": [
    "news_7ece4d0544da"
  ],
  "净值": [
    "news_af71409cca3b",
    "news_33446de5a4fe"
  ],
  "CTA": [
    "news_e5c10523ca27"
  ],
  "固收": [
    "news_af71409cca3b"
  ],
  "权益": [
    "news_08dd06f7c9da",
    "news_df97cf409b89",
    "news_8cd6e23fb0d1",
    "news_daafb6c261ea",
    "news_38dbdac23f08",
    "news_2ab774fdd0db",
    "news_1e844639d6b4",
    "news_95873c01d6ca",
    "news_eea72af10228",
    "news_5ec39e02a5f0",
    "news_808085b6eb72"
  ],
  "多资产": [
    "news_a8377ca914e5"
  ],
  "年化": [
    "news_ee8d0437349b"
  ],
  "IRR": [
    "news_54b45c83a3e0"
  ],
  "赎回": [
    "news_dd0666b14ee1"
  ]
};
