// finhot auto-generated data - powered by RSSHub + financial sources + Zhihu OpenAPI
// Generated: 2026-11-20T12:56:04.454Z
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
  "generatedAt": "2026-11-20T12:56:04.454Z",
  "lead": "今日新增 145 条，共 150 条精选资讯",
  "items": [
    {
      "title": "Anthropic IPO募集资金总额约为935亿美元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078090882601862",
      "publishedAt": "2026-11-20T12:48:34.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "Anthropic报告称IPO已结束，承销商全额行使超额配售权，公司IPO募集资金总额约为935亿美元。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c1742b277e82",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "low",
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
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "Anthropic报告称，其IPO总募集毛收入约为935亿美元",
      "sourceUrl": "https://wallstreetcn.com/livenews/3203388",
      "publishedAt": "2026-11-20T12:47:03.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "Anthropic报告称IPO已结束，承销商全额行使超额配售权，其IPO总募集毛收入约为935亿美元，包括配售在内的IPO总募集毛收入约为1,195亿美元。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6d5b8a9c1ee1",
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "库什纳旗下Affinity投资的英国银行拿到美国银行业牌照",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078059062121347",
      "publishedAt": "2026-11-20T12:46:54.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "英国商业银行OakNorth已获得美国完整银行牌照，该机构将借此扩大在美国的放贷业务。英国商业银行OakNorth拿到了美国完整银行牌照。该银行股东包含贾里德・库什纳旗下的Affinity Partners投资公司以及软银愿景基金。牌照获批后，它将进一步扩张美国放贷业务。OakNorth表示，通过收购密歇根州小型银行社区联合银行，它成为首家获此完整牌照的外资数字银行。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_f4368fc3e4c8",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "家电龙头的APEC时刻：从卖产品到输出能力",
      "sourceUrl": "https://www.yicai.com/news/103448629.html",
      "publishedAt": "2026-11-20T12:46:09.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "中国家电龙头企业正从终端产品组装者，转变为核心零部件提供者、终端产品创新引领者和高新技术产业参与者。中国家电企业的出海业务正在从整机销售向零部件供应和本地化制造延伸。\n\n本周在深圳举行的APEC 2026峰会上，TCL、海信、格力等家电企业负责人谈及亚太市场布局。除了销售电视、空调等终端产品，中国企业也在当地建设生产基地、拓展零部件供应，并参与智慧城市、储能等项目。\n\n据中国机电产品进出口商会向第",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0eb21adb212a",
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
      "title": "多家PCB概念股涨停，上市公司回应",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078082302481282",
      "publishedAt": "2026-11-20T12:39:50.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "PCB概念掀涨停潮，超声电子、澳弘电子、中京电子、光华科技、满坤科技强势涨停。消息面上，11月18日，全球电子协会发布一份面向全行业的供应链警报：PCB缺货正在从局部环节蔓延到成品板交付，汽车、工业、医疗、国防、通信等领域的客户都在面对更长的交期和更难拿到货的局面。对此，多家PCB产业上市公司回应，下游需求整体上比较景气，供应是否出现短缺要看产品结构，与AI服务器领域相关的高端PCB产品目前需求仍",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2a8ebe4b3cd3",
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
      "title": "开源扩容还是强标出清？光伏周期底部，行业龙头提出破局路线",
      "sourceUrl": "https://www.yicai.com/news/103448652.html",
      "publishedAt": "2026-11-20T12:37:18.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "光伏行业正处在周期底部，三季报呈现“整体承压、龙头分化”特征。面对供需失衡，龙头企业分化出不同的破局思路。“新能源是一条长坡厚雪的赛道，行业当下正处在周期承压、全产业链供需格局紧张的阶段，但长期电气化增长空间清晰。”隆基绿能（601012.SH）董事长钟宝申日前在年终演讲上给出这样的判断。从长期基本面来看，光伏行业龙头们的共识高度统一。钟宝申援引IEA与国家能源局数据称，当前全球平均电气化水平仅2",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_193cd3c2fb1d",
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
      "title": "丁磊直言短剧冲击游戏 网易已上线“网易天马”布局互动影游",
      "sourceUrl": "https://www.cls.cn/detail/2540483",
      "publishedAt": "2026-11-20T12:36:53.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》11月20日讯（记者 王耐）“短剧今年呈现爆炸式发展，对用户注意力的吸引力巨大，短期内确实会对游戏产生影响。”网易创始人兼CEO丁磊在三季度业绩电话会上，这样谈及短剧对游戏行业的冲击。\n这一表态背后，网易业务正面临增长压力，尤其是游戏。\n网易今年的三季报显示，三季度网易净收入279亿元，同比下降1.8%；归属于公司股东的净利润84亿元，同比下降约2.5%。作为网易最重要的收入来源，游",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_01be16941020",
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
      "title": "八年前布局今日兑现 SK海力士拟全资持有铠侠第一大股东平台",
      "sourceUrl": "https://www.cls.cn/detail/2540485",
      "publishedAt": "2026-11-20T12:33:38.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（编辑 史正丞）当地时间周五（11月20日），SK海力士在一份监管公告中披露，将行使其持有的特殊目的公司BCPE Pangea Cayman2（简称SPC2）可转换债券的转股权，并收购该平台剩余股份。\n交易完成后，SK海力士将全资持有SPC2，进而间接持有日本存储芯片制造商铠侠约14.1%的股份，成为其最大间接股东。\n\n（来源：韩国金融监督院电子信息披露系统）\n根据公告，SK海",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5cd2982a9aac",
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
          "score": 54,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "建设银行发布贵金属业务市场风险提示",
      "sourceUrl": "https://www.cls.cn/detail/2540487",
      "publishedAt": "2026-11-20T12:33:01.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "【建设银行发布贵金属业务市场风险提示】财联社11月20日电，中国建设银行股份有限公司发布公告称，近期国内外贵金属价格波动加剧，市场风险提升。请在投资贵金属业务时，提高贵金属业务的风险防范意识，基于自身财务状况和风险承受能力理性、稳健投资，合理控制仓位，避免盲目跟风操作。同时，请及时关注持仓情况和保证金余额变化情况，防范贵金属市场风险。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_237bb10cbe55",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 75,
      "rawScore": 75,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
        "行业动态",
        "快讯"
      ],
      "eventId": "event_ce5285e4f9c0"
    },
    {
      "title": "Coinbase计划于2027年上半年推出自有预测市场合约",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078019778548608",
      "publishedAt": "2026-11-20T12:31:54.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "据一位知情人士称，加密货币交易平台Coinbase Global计划于2027年上半年推出自有事件合约，面向美国个人和机构投资者提供交易服务。此举将降低这家加密货币平台对预测市场Kalshi的合作依赖。目前，Coinbase用户已可以通过双方合作的服务，对选举结果、比特币能否达到某一特定价格等事件进行交易。推出自有合约后，Coinbase将能够自主选择提供交易的事件，并在用户交易时保留更多收入。据",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5d40d47ae085",
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
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "魅视科技：签订算力服务项目备忘录及采购框架协议",
      "sourceUrl": "https://www.cls.cn/detail/2540486",
      "publishedAt": "2026-11-20T12:30:48.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "【魅视科技：签订算力服务项目备忘录及采购框架协议】财联社11月20日电，魅视科技(001229.SZ)公告称，公司与Y公司签署《框架协议》，拟每月向Y公司采购专属AI算力资源、系列模型授权及配套技术服务，服务周期为36个月，采购总价不高于7.34亿元（含税）。公司与Z公司签署《备忘录》，Z公司为央企控股上市公司分支机构，资信良好，履约风险总体可控。公司根据Z公司需求提供综合算力服务，服务范围包含资",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_39c8a8508dd0",
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
      "title": "美国接受中企340万颗芯片出口申请 仅批87.9万大量未出货",
      "sourceUrl": "https://www.caixin.com/2026-11-20/102507299.html",
      "publishedAt": "2026-11-20T12:30:26.000Z",
      "fetchedAt": "2026-11-20T12:52:39.400Z",
      "timeConfidence": "source",
      "summary": "许多申请获批但未出货，例如阿里巴巴7.5万颗、腾讯及其子公司15万颗、百度4.3万颗、比亚迪4000颗\n       　　【财新网】黄仁勋事件后，美国国会披露对华出口管制记录。当地时间11月19日，美国众议院外交事务委员会主席布莱恩·马斯特（Brian Mast）依据美国《出口管制改革法》赋予的权力，公开披露了英伟达(NASDAQ: NVDA)和AMD(NASDAQ: AMD)向中国出口先进芯片的",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_47bc21e49008",
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
      "title": "图灵量子先进封测中心在长沙启用",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078011561055108",
      "publishedAt": "2026-11-20T12:27:45.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，2026世界计算大会期间，图灵量子先进封测中心启用仪式在长沙国际会议中心举行。该中心位于长沙宁乡经济技术开发区。按照规划，图灵量子先进封测中心将于2027年实现一期基地全面投产，逐步形成稳定的光子芯片先进封测与核心光电组件制造能力。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_bddbe4af0653",
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
      "title": "一日27家，A股回购公告密集来袭，16家公司拟回购不低于1亿元",
      "sourceUrl": "https://www.cls.cn/detail/2540477",
      "publishedAt": "2026-11-20T12:27:44.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯，今日晚间，A股回购公告再度密集来袭，通威股份、摩尔线程、华勤技术等公司计划大手笔回购股份，据不完全统计，今日公告计划回购股份的上市公司多达27家，其中有16家公司计划回购金额不低于1亿元。\n27家公司披露回购计划\n通威股份：拟10亿元至20亿元回购股份用于员工持股或股权激励\n通威股份(600438.SH)公告称，公司拟以自有资金或自筹资金通过集中竞价交易方式回购股份，回购金额",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_752aba286fab",
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
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "财联社11月20日电，比特币跌至61,225美元，创4.5个月新低。",
      "sourceUrl": "https://www.cls.cn/detail/2540481",
      "publishedAt": "2026-11-20T12:26:03.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，比特币跌至61,225美元，创4.5个月新低。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_9a43821df6a0",
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
      "title": "财联社11月20日电，法兴银行预计标普500指数将在2028年底前达到8800点。",
      "sourceUrl": "https://www.cls.cn/detail/2540480",
      "publishedAt": "2026-11-20T12:24:18.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，法兴银行预计标普500指数将在2028年底前达到8800点。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b885bb83b075",
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
      "eventId": "event_ec42523135ca"
    },
    {
      "title": "汉莎航空旗下主力航司将裁员1000人",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078057540326531",
      "publishedAt": "2026-11-20T12:24:11.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "德国汉莎集团计划，在旗下主力汉莎航空的法兰克福、慕尼黑两大枢纽裁撤1000个全职岗位。燃油价格持续上涨，令旗下核心航司的复苏之路雪上加霜，德国汉莎航空集团因此计划对旗舰子公司裁员1000人。道琼斯通讯社看到的内部信件显示，汉莎航空已向员工通报一系列深化业务重组的举措，其中包括在法兰克福、慕尼黑枢纽合计裁撤 1000 个全职岗位。（新浪财经）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_a4f3213f6a06",
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
      "title": "Anthropic美股盘前跌超10%",
      "sourceUrl": "https://www.cls.cn/detail/2540479",
      "publishedAt": "2026-11-20T12:23:45.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "【Anthropic美股盘前跌超10%】财联社11月20日电，Anthropic盘前跌幅扩大至10%，报87.5美元/股，较IPO发行价83美元仅高出约5.4%。该股周四上市首日开盘报111.5美元，盘中一度冲高至115美元，收报97.17美元，较发行价上涨17.1%。按最新盘前报价计算，股价较首日开盘价已回落约21.5%，上市首日的涨幅基本回吐。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_cdd86f29c366",
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
      "title": "法兴银行预计标普500指数2027年底将收于8500点",
      "sourceUrl": "https://www.cls.cn/detail/2540478",
      "publishedAt": "2026-11-20T12:21:53.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "【法兴银行预计标普500指数2027年底将收于8500点】财联社11月20日电，法兴银行预计标普500指数2027年底将收于8500点，预计英国富时100指数到2027年底将升至12000点；预计斯托克600指数到2027年底将升至720点。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b3ff5c57ab83",
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
      "eventId": "event_ec42523135ca"
    },
    {
      "title": "厄尔尼诺在美国多地引发异常天气",
      "sourceUrl": "https://www.cls.cn/detail/2540476",
      "publishedAt": "2026-11-20T12:20:45.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "【厄尔尼诺在美国多地引发异常天气】财联社11月20日电，据美国媒体报道，受厄尔尼诺现象影响，美国加利福尼亚州旧金山湾区近日出现水龙卷。而佛罗里达州大西洋海岸地区出现强降雨，引发洪水。美国国家气象局气候预测中心11月19日发布的报告称，强厄尔尼诺现象仍在持续，预计将延续至2027年1月至3月，成为影响今冬至明年春季美国气温和降水的主要因素。该机构表示，今年12月至明年2月，美国北部大部分地区气温可能",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_1d42f6014b7d",
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
      "title": "士兰微：拟变更16亿元募资投向收购士兰集科股权并增资扩产",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078007231485062",
      "publishedAt": "2026-11-20T12:18:20.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，士兰微公告，公司拟将“年产36万片12英寸芯片生产线项目”全部募集资金16亿元变更用途，用于收购厦门半导体所持士兰集科20.344%股权(拟使用募集资金11亿元)及对士兰集科增资用于其“新增年产20.4万片IGBT功率器件芯片及模拟电路芯片扩产项目”建设(拟使用募集资金5亿元)。本次收购完成后，公司将合计持有士兰集科47.791%股权，成为其第一大股东并纳入合并报表范围。本次交易构成关",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_58dc1dd5b984",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 57,
      "rawScore": 57,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 21,
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
          "score": 46,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
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
      "title": "苏州7宗涉宅用地29亿元成交",
      "sourceUrl": "https://www.cls.cn/detail/2540474",
      "publishedAt": "2026-11-20T12:17:21.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "【苏州7宗涉宅用地29亿元成交】财联社11月20日电，苏州11月20日有7宗涉宅用地出让，最终1宗溢价、6宗底价成交，总成交金额29亿元。其中，溢价地块位于相城区元和街道古元路北、顾恺之街西，用地性质为商住混合用地，最终由太仓万盛房地产开发有限公司以2.79亿元竞得，成交楼面价9491元/㎡，溢价率0.72%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2f4a8b0ff7c8",
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
      "title": "耗资2000万元！1550亿PCB龙头今日首次回购公司股份|盘后公告集锦",
      "sourceUrl": "https://www.cls.cn/detail/2540469",
      "publishedAt": "2026-11-20T12:16:39.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "今日聚焦\n【沪电股份：今日首次回购公司股份24.89万股耗资2000万元 成交价79.92元/股-80.85元/股】\n沪电股份(002463.SZ)公告称，公司于2026年11月20日通过股份回购专用证券账户以集中竞价交易方式首次回购公司股份24.89万股，占公司总股本的0.01%，最高成交价为80.85元/股，最低成交价为79.92元/股，成交总金额为1999.93万元(不含交易费用)。本次回购",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2c60a765505b",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 50,
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
      "noiseCaps": [
        "主题性汇总"
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
      "title": "南向资金追踪｜本周净买入约165亿港元 大举扫货腾讯流出阿里巴巴",
      "sourceUrl": "https://www.cls.cn/detail/2540450",
      "publishedAt": "2026-11-20T12:16:28.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（编辑 冯轶）行情数据显示，南向资金本周累计净买入164.99亿港元，相较上周流入的118.68亿港元，资金面进一步回暖。\n盘面上，本周港股跌势加重，恒指累跌5.19%。近4个交易日，伴随大市走弱，南向资金流入势头反而强化。\n个股方面，交易所数据显示，近一周资金\n\n大幅净买入：腾讯控股(00700.HK)77.46亿港元；中芯国际(00981.HK)24.89亿港元；华虹宏力(",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2affeb6b0194",
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
      "title": "财联社11月20日电，Erasca股价美股盘前跌幅扩大至20%。",
      "sourceUrl": "https://www.cls.cn/detail/2540473",
      "publishedAt": "2026-11-20T12:15:49.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，Erasca股价美股盘前跌幅扩大至20%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_50778a3f970b",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "文远知行Q3营收同比增88%，AI基础设施收入近翻倍，Robotaxi单季收入首次突破1亿元｜财报见闻",
      "sourceUrl": "https://wallstreetcn.com/articles/3786382",
      "publishedAt": "2026-11-20T12:15:13.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "自动驾驶业务商业化进程加快，文远知行第三季度营收超出市场预期，亏损也好于预期。\n11月20日，文远知行公布的2026年第三季度实现营收人民币3.215亿元，同比增长88%，高于彭博综合预期的2.688亿元；净亏损3.1亿元，低于市场预期的3.997亿元。海外市场成为收入增长的重要动力，单季收入达1.469亿元，同比增长171.5%，占总营收的45.7%。与此同时，公司毛利率升至43.0%，较去年同",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e48d6a68891d",
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
      "title": "中国物流与采购联合会：医药供应链数字化由单点迈向全链条协同",
      "sourceUrl": "https://www.cls.cn/detail/2540472",
      "publishedAt": "2026-11-20T12:12:18.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "【中国物流与采购联合会：医药供应链数字化由单点迈向全链条协同】财联社11月20日电，据中国物流与采购联合会医药与医疗供应链分会消息，近年来我国创新医疗器械发展势头迅猛、成果丰硕。截至2026年10月，全国累计获批创新医疗器械452个，其中，2026年新增61个。植入式脑机接口、蛇形臂手术机器人等首创产品相继进入临床。当前行业政策体系不断完善，产业底盘持续夯实，创新成果不断涌现，供应链数字化从单点升",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_6c0f1eb8c698",
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "AI智能体终端再添玩家：华为新品牌星芒首秀 推出首款鸿蒙AI手机",
      "sourceUrl": "https://www.cls.cn/detail/2540459",
      "publishedAt": "2026-11-20T12:12:11.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》11月20日讯（记者 黄心怡）今日，华为终端新品牌星芒首次亮相，并发布首款手机OSTA O1 Pro。该机型搭载旗舰韬芯片麒麟9030S，定位为首款为AI而生的鸿蒙手机。\n华为终端BG董事长余承东表示，过去的互联网时代，华为推出了电商品牌，如今是AI时代，于是华为推出了星芒，希望把星芒做成AI时代消费者喜欢的先锋科技品牌。星芒O1Pro售价5699元-8999元，先锋限时价格5499",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_3edeef1bf200",
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
      "title": "财联社11月20日电，标普500指数期货和纳斯达克100指数期货延续跌势，触及日内低点。",
      "sourceUrl": "https://www.cls.cn/detail/2540470",
      "publishedAt": "2026-11-20T12:10:45.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，标普500指数期货和纳斯达克100指数期货延续跌势，触及日内低点。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0005940a71eb",
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
      "title": "摩尔线程：实控人提议回购5亿至10亿元股份",
      "sourceUrl": "https://www.cls.cn/detail/2540471",
      "publishedAt": "2026-11-20T12:10:37.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "【摩尔线程：实控人提议回购5亿至10亿元股份】财联社11月20日电，摩尔线程(688795.SH)公告称，公司收到实际控制人、董事长、总经理张建中提议回购公司股份的函，拟使用自有资金和/或自筹资金，通过集中竞价交易方式回购部分A股股份，回购资金总额不低于5亿元且不超过10亿元，回购股份拟用于员工持股计划或股权激励。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_8da1b98dd4d7",
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
      "eventId": null
    },
    {
      "title": "国瓷材料：拟约6亿元投建年产5000吨高端MLCC用电子陶瓷材料产业化项目",
      "sourceUrl": "https://www.cls.cn/detail/2540468",
      "publishedAt": "2026-11-20T12:08:55.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "【国瓷材料：拟约6亿元投建年产5000吨高端MLCC用电子陶瓷材料产业化项目】财联社11月20日电，国瓷材料(300285.SZ)公告称，公司拟在东营经济技术开发区投资建设年产5000吨高端MLCC用电子陶瓷材料产业化项目，投资总额约6亿元，资金来源为自有及自筹资金。项目建成后将形成年产5000吨高端MLCC用电子陶瓷材料的生产能力，有利于缓解高端MLCC粉体产能瓶颈，提升订单交付保障能力和规模化",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_ea8035542039",
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
      "title": "阳光电源：累计回购530.11万股耗资5亿元 成交价70.42元/股-114.99元/股",
      "sourceUrl": "https://www.cls.cn/detail/2540467",
      "publishedAt": "2026-11-20T12:07:08.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "【阳光电源：累计回购530.11万股耗资5亿元 成交价70.42元/股-114.99元/股】财联社11月20日电，阳光电源(300274.SZ)公告称，截至2026年11月20日，公司通过集中竞价方式累计回购股份530.11万股，占总股本0.2557%，成交最高价114.99元/股，最低价70.42元/股，支付资金总额5亿元。本次回购符合公司回购方案及相关法规要求。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_09788aadf588",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 64,
      "rawScore": 64,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "感恩节后市场迎反弹？美银：大概率短期，大级别行情需满足这三大条件",
      "sourceUrl": "https://wallstreetcn.com/articles/3786381",
      "publishedAt": "2026-11-20T12:05:46.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "美国银行首席投资策略师Michael Hartnett在最新一期《The Flow Show》中给出判断：感恩节后美股大概率迎来一波技术性反弹，但这只是短期喘息。要演变成大级别行情，市场必须同时看到三个条件，即十年期美债收益率跌破4.5%、WTI原油跌破70美元/桶、美元在疲软的就业与通胀数据后确认见顶。\n触发这轮反弹预期的直接原因，是市场广度已恶化到极端水平。美银全球广度规则显示，截至11月18",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b94b792dc78f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
      "rawScore": 66,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 16,
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
          "score": 33,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 90,
          "reasons": [
            "命中二级市场投教核心主题 3 项",
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "财联社11月20日电，Anthropic盘前跌幅扩大至8%，报89美元/股。",
      "sourceUrl": "https://www.cls.cn/detail/2540466",
      "publishedAt": "2026-11-20T12:05:17.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，Anthropic盘前跌幅扩大至8%，报89美元/股。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_6508d94545c5",
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
      "title": "财联社11月20日电，金融服务机构Stonex将网易目标价从158美元下调至140美元。",
      "sourceUrl": "https://www.cls.cn/detail/2540465",
      "publishedAt": "2026-11-20T12:04:05.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，金融服务机构Stonex将网易目标价从158美元下调至140美元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_970d6b79306a",
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
      "title": "意大利能源公司埃尼拟收购美国317兆瓦太阳能项目",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078006550467457",
      "publishedAt": "2026-11-20T12:02:39.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "意大利能源集团埃尼宣布，已签署协议，拟收购美国南卡罗来纳州太阳能电站组合100%的股权，总装机容量为317兆瓦。交易预计于2027年第一季度完成，尚需满足相关先决条件。Enel预计，项目建成投运后，每年将为集团贡献约3000万美元EBITDA，并使集团净金融负债增加约2.55亿美元。交易完成后，Enel在北美的可再生能源装机容量将达到约13.5吉瓦。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c3affe1a40b7",
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
      "title": "财联社11月20日电，SpaceX美股盘前跌幅扩大至5%。",
      "sourceUrl": "https://www.cls.cn/detail/2540463",
      "publishedAt": "2026-11-20T12:02:28.000Z",
      "fetchedAt": "2026-11-20T12:52:53.509Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，SpaceX美股盘前跌幅扩大至5%。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2ab15d717d96",
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
      "title": "海外研选 | 阿波罗测算AI投资回报：2028年底或需2万亿美元年收入",
      "sourceUrl": "https://www.cls.cn/detail/2540417",
      "publishedAt": "2026-11-20T12:01:33.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（编辑 夏军雄）随着人工智能（AI）基础设施投资规模不断扩大，市场正面临一个关键问题：AI产业需要创造多少收入，才能支撑巨额资本开支？\n阿波罗全球管理公司（Apollo Global Management）11月18日发布报告指出，根据已公布的投资计划，2026年至2028年，AI基础设施累计资本开支可能达到约3.5万亿美元。要支撑这一建设规模，到2028年底，AI产业所需的年",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_35ca15c60c48",
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
      "title": "ST天圣：撤销其他风险警示，11月24日起证券简称变更为“天圣制药”",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078044464976771",
      "publishedAt": "2026-11-20T12:01:21.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，ST天圣公告，公司撤销其他风险警示的申请已获深交所审核同意。公司股票将于11月23日停牌一天，11月24日复牌并撤销其他风险警示，证券简称由“ST天圣”变更为“天圣制药”，股票代码不变，日涨跌幅限制仍为10%。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_bd053cc30104",
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
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "拓荆科技：董事长提议回购2亿元至3亿元股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078043835192201",
      "publishedAt": "2026-11-20T12:00:42.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，拓荆科技公告，公司董事长吕光泉提议公司以集中竞价交易方式回购部分A股股份，回购资金总额不低于2亿元且不超过3亿元，回购股份拟用于员工持股计划或股权激励，回购期限为董事会审议通过方案之日起12个月内。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_7b9e0f7226de",
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
      "title": "深交所：本周共对80起证券异常交易行为采取了自律监管措施",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078040672900232",
      "publishedAt": "2026-11-20T11:57:29.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，深交所公告，2026年11月13日至11月19日，本所发出监管函3份，涉及信息披露及规范运作违规；发出监管问询函件29份。2026年11月16日至11月20日，本所共对80起证券异常交易行为采取了自律监管措施，涉及盘中拉抬打压、虚假申报等异常交易情形。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_c489e0495fb1",
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
          "score": 38,
          "reasons": [
            "命中关联主题 1 项",
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
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "欢瑞世纪：2022年年报存在虚假记载，股票被实施其他风险警示11月24日起简称变更为ST欢瑞",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078039568487298",
      "publishedAt": "2026-11-20T11:56:22.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，欢瑞世纪公告，公司收到证监会重庆监管局下发的《行政处罚事先告知书》，公司2022年年度报告存在虚假记载，虚增利润总额1548.15万元，占当期利润总额40.11%，虚增净利润1288.01万元，占当期净利润168.20%。重庆证监局拟对公司给予警告并处以400万元罚款，对时任董事长赵枳程、时任财务总监曾剑南给予警告并分别处以200万元罚款。公司股票于11月23日停牌一天，11月24日起",
      "sourceName": "36氪",
      "category": "regulatory",
      "tags": [
        "监管政策"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e9bea38179b5",
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
      "eventId": null
    },
    {
      "title": "兴森科技：拟4亿元至5亿元回购公司股份",
      "sourceUrl": "https://www.36kr.com/newsflashes/4077980306560134",
      "publishedAt": "2026-11-20T11:54:56.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，兴森科技公告，公司拟使用自筹资金或其他合法资金，通过集中竞价交易方式回购股份，回购资金总额不低于4亿元且不超过5亿元，回购价格不超过42元/股。回购股份将用于后续股权激励或员工持股计划，回购期限为董事会审议通过之日起12个月内。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_5d3d2ef2da36",
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
      "title": "大疆率先涨价，影石或跟进 存储成本压力传导至云台相机｜一线",
      "sourceUrl": "https://www.cls.cn/detail/2540447",
      "publishedAt": "2026-11-20T11:53:14.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "《科创板日报》11月20日讯（记者 李佳怡）一台云台相机，正在变得更贵。\n11月18日，大疆部分云台相机产品正式上调建议零售价，最高涨幅达到560元。《科创板日报》记者走访发现，调价公告发布后，部分消费者赶在涨价前购买，正式调价后，门店购买热度有所回落。另一边，影石线下门店销售人员也向记者透露，云台相机产品“Luna”系列预计将在12月15日涨价约300元。\n从大疆正式调价到影石释放涨价信号，存储",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d6306c360858",
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
      "title": "抢跑 OpenAI 敲出史上最大 IPO，Anthropic 却惹怒了半个硅谷",
      "sourceUrl": "https://wallstreetcn.com/articles/3786380",
      "publishedAt": "2026-11-20T11:53:04.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "11 月 19 日，成立仅仅 5 年的 AI 巨头 Anthropic 正式上市。\n一举打破 SpaceX 此前创下的纪录，成为人类商业史上规模最大的一次 IPO。\n\n更夸张的是，开盘后它的市值更是一度冲破&nbsp;2 万亿美元大关，收盘市值约1.77万亿美元。\n\n魔幻的是，就在敲钟的同一天，近百位全球顶尖的 AI 研究者与创业者联名发布了一封火药味十足的公开信《The MisAnthropic",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5021968a241e",
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
      "title": "享界V8上市并获跨城高速路测 余承东纠正L3“开车睡觉”表述",
      "sourceUrl": "https://www.cls.cn/detail/2540439",
      "publishedAt": "2026-11-20T11:50:45.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（记者 张屹鹏）时隔近二个月，余承东在2026广州车展前回到了自己熟悉的位置上。\n“享界汽车已完成覆盖轿车、旅行车、SUV、MPV全矩阵。”11月20日，华为常务董事、产品投资评审委员会主任、终端BG董事长余承东在“鸿蒙智行享界V8及星芒品牌发布会”上，重新作为品牌及产品主讲人宣布，享界V8上市并开启交付。\n至此，享界成为继智界之后，“五界”中第二个实现全品类覆盖的品牌。同时，",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_834d20d01348",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "文远知行：第三季度收入同比增长88%，Robotaxi收入首次突破亿元",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078029560910980",
      "publishedAt": "2026-11-20T11:46:11.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，文远知行公布2026年第三季度未经审计业绩，期内实现收入3.215亿元人民币，同比增长88%，环比增长38.8%；毛利1.381亿元，同比增长约145%，毛利率升至43%，同比提升10.1个百分点。其中，海外业务收入1.469亿元，同比增长171.5%，占总收入的45.7%；Robotaxi业务收入首次突破1亿元，同比增长204%，其中海外收入占比超过90%。第三季度公司净亏损3.10",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_1095a097ddb1",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "title": "欧洲短债延续涨势，市场下调欧洲央行加息押注",
      "sourceUrl": "https://www.36kr.com/newsflashes/4078028568794240",
      "publishedAt": "2026-11-20T11:45:10.000Z",
      "fetchedAt": "2026-11-20T12:53:12.895Z",
      "timeConfidence": "source",
      "summary": "受避险需求推动，欧洲较短期限债券周五延续涨势，货币市场同时下调了对欧洲央行加息的押注。掉期市场目前隐含到2027年12月前加息两次，为11月10日以来首次。德国国债上涨，两年期收益率下跌8个基点至3.08%。交易员也削减了对英国央行加息的押注，目前市场计入到2027年底累计加息84个基点。英国两年期国债收益率下跌6个基点至4.89%。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_0930c31f05ae",
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
        "观点",
        "快讯"
      ],
      "eventId": "event_afd95bcad936"
    },
    {
      "title": "五新智能：兴中科技并表构筑基建全场景，海外推进本土化布局 | 公司调研",
      "sourceUrl": "https://www.cls.cn/detail/2540441",
      "publishedAt": "2026-11-20T11:44:11.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（记者 黄路）由北京证券交易所投资者教育基地与广发基金联合主办的“投资者零距离走进北证50成分股系列活动”近日走进五新智能（920174.BJ），财联社记者跟随50余名投资机构代表及个人投资者，实地调研了公司在桥梁、隧道、地下矿山、能源基建、港口码头、工业建筑等领域的装备研发成果，以及数字化、智能化技术在企业经营和装备制造当中的落地实践。\n活动期间，公司高管重点介绍了企业的当前",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5852444f85d9",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 32,
          "reasons": [
            "命中关联主题 2 项"
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
      "selectedForFeatured": false,
      "contentTags": [
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "全球债市再度承压！油价冲击退潮，通胀“顽疾”却难以清除",
      "sourceUrl": "https://wallstreetcn.com/articles/3786379",
      "publishedAt": "2026-11-20T11:43:04.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "全球债市正与油价走势脱钩，通胀黏性与央行鹰派立场重新成为左右国债收益率的关键因素。\n11月20日，据英国《金融时报》报道，尽管国际原油价格近期大幅回落，美国、英国等主要经济体的国债收益率却依然居高不下。曾主导今年全球债券市场的油价与国债收益率高度联动关系正在瓦解，市场焦点已从能源价格冲击转向各大央行如何应对持续的通胀压力。\n美国方面，美联储9月以来重启加息，市场预计下月将再次加息。上周，美国国债遭",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bd5385632694",
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
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "美股跌破关键支撑、VIX逼近30，市场在下跌中等待一场反弹？",
      "sourceUrl": "https://wallstreetcn.com/articles/3786378",
      "publishedAt": "2026-11-20T11:41:58.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "美股技术面全面告急，但恐慌情绪与实际抛售之间的裂口，正在制造一个微妙的市场博弈时刻。\n标普500指数（SPX）跌破200日均线及自5月以来维持的关键交易区间，7200点成为短期多空分水岭。与此同时，VIX恐慌指数逼近30，与指数仅下跌1.4%的幅度明显不成比例，暗示市场正在为更深层的风险定价。\n\n野村证券的McElligott认为，随着本周重大风险事件落地，市场已具备触发机械性反弹的条件——波动率",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0453d6a44ca5",
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
          "score": 100,
          "reasons": [
            "命中二级市场投教核心主题 4 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 46,
          "reasons": [
            "命中关联主题 3 项"
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
      "title": "工行、建行、招行、宁波银行发布贵金属业务风险提示",
      "sourceUrl": "https://www.cls.cn/detail/2540426",
      "publishedAt": "2026-11-20T11:29:43.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（记者郭子硕）金价大跌之际，四家银行同日“喊话”。\n今日，工商银行、建设银行、招商银行、宁波银行相继发布贵金属业务市场风险提示，提醒投资者理性投资、避免盲目跟风。一日之内四家银行集中提示，年内较为少见。\n截至发稿，现货黄金日内一度跌超3%，报3514.36美元/盎司附近，创2025年9月以来14个月新低；多家银行的活期金、积存金报价单日下跌超过3%。\n金价创新低，四家银行同日示",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bed1ca991d57",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 80,
      "rawScore": 80,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
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
          "score": 38,
          "reasons": [
            "命中关联主题 1 项",
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
      "title": "李强同澳大利亚总理阿尔巴尼斯举行第十一轮中澳总理年度会晤",
      "sourceUrl": "https://wallstreetcn.com/livenews/3203351",
      "publishedAt": "2026-11-20T11:28:50.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "11月20日下午，国务院总理李强在北京钓鱼台国宾馆同澳大利亚总理阿尔巴尼斯举行第十一轮中澳总理年度会晤。\n李强指出，中澳在产业、市场、技术等方面各有优势、互补性强，两国深化合作有内生需求，能够相互赋能。中方愿同澳方推动双边贸易扩大规模、优化结构，打造绿色低碳、新能源汽车、人工智能等新兴领域合作亮点，进一步提升贸易投资自由化便利化水平，争取更多实际成果。双方要办好明年的“中澳旅游年”，深化文化、青年",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_44559887507f",
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
      "title": "从“多放几天假”到“淡季造峰器”，秋假激活亲子出游消费窗口",
      "sourceUrl": "https://www.yicai.com/news/103448545.html",
      "publishedAt": "2026-11-20T11:25:17.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "业内认为客流增长是秋假政策红利释放、家庭文旅消费趋势转变，叠加景区持续推进供给侧创新共同作用的结果。秋假正从“多放几天假”变成文旅消费的“淡季造峰器”。随着多地开启秋假，近期迎来出游高峰。第一财经记者了解到，随着多地进入今年秋假高峰期，铁路部门在多地增开了列车班次。例如11月17日至23日，上铁集团增开去往北京、南昌、福州、深圳等多个方向旅客列车17对。秋假同样带来了亮眼的消费数据。南京智慧旅游大",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e58dae051bc5",
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
      "title": "高盛：AI债务扭曲评级逻辑，AA反而不如BBB评级“安全”",
      "sourceUrl": "https://wallstreetcn.com/articles/3786377",
      "publishedAt": "2026-11-20T11:21:52.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "AI融资潮正在改变投资级债券市场的传统风险定价逻辑。过去被视为较为安全的高评级债券，如今却因大型科技企业集中举债而面临更大的供应压力，投资者可能需要向下移动评级，才能获得更好的风险回报。\n高盛最新发布的《2027年全球信用展望》预测，2027年美元投资级债券超额回报将降至-0.5%，远低于金融危机以来+2.0%的历史中位数。\n高盛首席信用策略师Amanda Lynam及其团队预计，2027年美元投",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0ac59f4cbac9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 70,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 64,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 60,
          "reasons": [
            "命中私募销售运营核心主题 1 项",
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
      "title": "逆赎回潮而行，债基也获基金公司自购，一产品连续两日合计申购500万",
      "sourceUrl": "https://www.cls.cn/detail/2540359",
      "publishedAt": "2026-11-20T11:17:55.000Z",
      "fetchedAt": "2026-11-20T12:53:12.676Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（编辑 杨斌）面对净值的明显回撤，债券基金遇到大额赎回而密集发布净值精度调整公告。而在本轮债市赎回潮中，也有债基逆势获得了基金公司的自购。\n金信基金今日公告，基于对中国资本市场长期健康稳定发展和公司主动投资管理能力的信心，本着与广大投资者风险共担、利益共享的原则，公司于2026年11月19日已运用固有资金300万元申购旗下“金信民兴债券型证券投资基金”。11月20日，公司固有资",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_54dcabc86304",
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
          "score": 84,
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
      "title": "AI比人贵了…OpenAI：内部Agent开销已达研究员薪酬两倍",
      "sourceUrl": "https://wallstreetcn.com/articles/3786376",
      "publishedAt": "2026-11-20T11:10:39.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "OpenAI的研究员，现在用AI已经用到什么程度了？\n人均每天调用的Agent，按API标价折算，居然能值2400美元？！\n用得最猛的那10%研究员，单日使用量甚至能达到2.3万美元（约16万人民币）。\n嘶……这帮研究员用起AI来，是真一点都不心疼Token啊。\nOpenAI公开了最新内部Agent研究报告《Research acceleration: The jagged frontier》，把",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0f48e0320d4e",
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
      "title": "欧洲债券发行首破2万亿欧元！AI巨头融资成重要推手",
      "sourceUrl": "https://wallstreetcn.com/articles/3786373",
      "publishedAt": "2026-11-20T10:55:33.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "欧洲债券市场正迎来一轮由AI资本开支与政府财政扩张共同驱动的融资热潮，企业和主权发行人双双加大借贷力度，推动市场发行规模刷新历史纪录。\n11月20日，据彭博报道，彭博汇编数据显示，欧洲公开辛迪加债券发行规模于上周四首次突破2万亿欧元。企业债方面，Alphabet、Amazon和Meta均跻身欧洲货币非金融类债券发行人前四名，三家公司合计贡献了企业借贷规模较2025年增加的490亿欧元中的375亿欧",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_60cf93707b46",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "多只ETF新品上报 未来新指数产品将不断扩容",
      "sourceUrl": "https://wallstreetcn.com/livenews/3203309",
      "publishedAt": "2026-11-20T10:54:58.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "11月20日，多家基金管理人上报科创创业半导体ETF、沪深港算力ETF、中证航运ETF产品。此前，华夏、易方达、博时等基金公司也已上报中证A500成长ETF产品。随着指数化投资生态持续优化，未来新指数产品将不断扩容，有望推出更多聚焦新质生产力及符合国家重大战略方向的ETF产品。（证券时报）",
      "sourceName": "华尔街见闻",
      "category": "products",
      "tags": [
        "产品发布"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a5ac394466f4",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 70,
      "rawScore": 70,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "passesTierGate": true,
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
          "score": 81,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
            "命中关联主题 2 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 59,
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
        "产品动态"
      ],
      "eventId": null
    },
    {
      "title": "多只ETF新品上报，指数化投资工具持续丰富",
      "sourceUrl": "https://www.yicai.com/news/103448486.html",
      "publishedAt": "2026-11-20T10:49:57.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "四只产品系全市场首批跟踪对应指数的ETF，分别聚焦半导体硬科技、跨市场算力基础设施、海洋航运以及A股大中盘成长板块。11月20日，据证监会官网显示，多家基金管理人上报科创创业半导体ETF、沪深港算力ETF、中证航运ETF三条新指数产品。近期，ETF市场产品布局持续丰富，华夏、易方达、博时等管理人于一周前上报中证A500成长ETF。四只产品系全市场首批跟踪对应指数的ETF，分别聚焦半导体硬科技、跨市",
      "sourceName": "第一财经",
      "category": "products",
      "tags": [
        "产品发布"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d0d0394aa91f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 76,
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
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "privateFundSales": {
          "score": 62,
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
        "产品动态"
      ],
      "eventId": null
    },
    {
      "title": "觅蜂发布超20万小时真机数据质量研究，实验量化三类后训练数据缺陷",
      "sourceUrl": "https://wallstreetcn.com/articles/3786375",
      "publishedAt": "2026-11-20T10:49:12.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "11月20日，上海觅蜂具身智能科技有限公司（以下简称“觅蜂科技”）官方发布一项真机数据质量研究。团队称，该研究基于20.7万小时真机采集记录、2万余条任务记录，用微调后的π0.5模型做真机验证。\nπ0.5是Physical Intelligence开发的通用机器人基座模型，觅蜂团队用自采示教数据微调后，在真实机器人上评估。\n团队将机器人本体适配、遥操作系统和模仿学习数据质量三个已有研究方向，放进同",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5bff61db44f3",
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
          "score": 17,
          "reasons": [
            "与该场景关联度较弱"
          ]
        },
        "privateFundSales": {
          "score": 39,
          "reasons": [
            "命中私募销售运营核心主题 1 项"
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
      "title": "【CCI快报】中国大宗商品指数周跌4.99% 白银领跌16.25%",
      "sourceUrl": "https://database.caixin.com/2026-11-20/102507190.html",
      "publishedAt": "2026-11-20T10:48:25.000Z",
      "fetchedAt": "2026-11-20T12:52:39.400Z",
      "timeConfidence": "source",
      "summary": "鹰派预期升温与流动性收紧共振，金融属性承压，银价大幅下挫",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0cdc41683356",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "晚间公告丨11月20日这些公告有看头",
      "sourceUrl": "https://www.yicai.com/news/103448449.html",
      "publishedAt": "2026-11-20T10:35:21.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "以下是第一财经对一些重要公告的汇总，供投资者参考。【品大事】\n\n艾艾精工：要约收购期满 股票于11月23日停牌\n\n艾艾精工公告，上海誉升向除收购人之外的其他所有股东发出部分要约，预定收购股份数量为1308.04万股，占总股本10.01%，要约收购价格为27.54元/股，要约收购期限为2026年10月21日至11月20日。截至11月20日，要约收购期限届满，因需进一步确认要约收购结果，公司股票于11",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_0c5cd9b84a87",
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
      "title": "黄仁勋离职后，英伟达面临新的威胁：失去最优秀的工程师",
      "sourceUrl": "https://wallstreetcn.com/articles/3786357",
      "publishedAt": "2026-11-20T10:31:00.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "英伟达正在为失去黄仁勋付出代价。自董事会上周宣布解除这位创始人CEO的职务以来，公司市值已蒸发约5000亿美元。相比股价下跌，一个更深层、也更难以量化的风险正在浮现：核心工程师团队能否留在公司。\n据报道，Melius Research首席科技分析师Ben Reitzes在英伟达本周财报电话会前指出，临时管理层最需要回答的问题是如何留住工程师。他表示，产品路线图才是长期投资者最应关注的核心，关键在于",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a6944bc30dd2",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
          "score": 42,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": true,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "SpaceX完成320亿美元AI芯片债券发行，收益率最高超过8%",
      "sourceUrl": "https://wallstreetcn.com/articles/3786362",
      "publishedAt": "2026-11-20T10:30:38.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "SpaceX正通过资本市场为AI基础设施扩张筹集巨额资金。公司完成320亿美元债券发行，为大规模采购英伟达最新一代AI芯片提供资金。\n据彭博援引知情人士，此次债券于周四分三档完成定价，由高盛集团和Apollo Global Management主导承销。其中，规模最大的A3级票据约252亿美元，定价收益率高达8.259%，显著高于同期美国投资级债券5.95%的平均收益率。\n此次融资通过特殊目的载体",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_61c461f70827",
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
      "title": "恒生科技指数纳入立讯精密、宁德时代、胜宏科技等20只个股",
      "sourceUrl": "https://wallstreetcn.com/livenews/3203274",
      "publishedAt": "2026-11-20T10:23:03.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "恒生指数公司发布季检结果：恒生科技指数纳入立讯精密、宁德时代、胜宏科技等20只个股，成份股数目将由30只增加至50只。\n\n恒生指数成份股没有变动，成份股数目维持95只。\n\n恒生中国企业指数纳入MiniMax、智谱，剔除中国邮政储蓄银行、申洲国际集团。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_88250335fda8",
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
      "title": "给Gemini道歉，请自觉排队",
      "sourceUrl": "https://wallstreetcn.com/articles/3786371",
      "publishedAt": "2026-11-20T10:21:57.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "今天，知名半导体和 AI 研究机构 SemiAnalysis 在 X 上发了一张写给 Google DeepMind 主席 Demis Hassabis 的《向 Google 道歉专用表》。\n\n理由一栏勾了包括「我只看了 X 上大家的消息」、「我那在 Anthropic 工作的室友，说服我相信 Gemini 已经完了」和「我没有阅读模型卡」等原因。最有意思的是最后一行：「Demis，关于 Gemi",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7ddc543327c3",
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
          "score": 21,
          "reasons": [
            "命中关联主题 1 项"
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
      "title": "中新签署启动自贸协定4.0版升级谈判的谅解备忘录，沪新合作也谱新篇章",
      "sourceUrl": "https://www.yicai.com/news/103448424.html",
      "publishedAt": "2026-11-20T10:21:35.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "明年新加坡将接任东盟轮值主席国。 中国和新加坡各层面的交往格外频繁。\n\n据商务部消息，11月20日，商务部部长王文涛与新加坡副总理兼能源、贸易及工业部长颜金勇签署《关于启动中国—新加坡自由贸易协定4.0版升级谈判的谅解备忘录》。\n\n在地方层面，上海市—新加坡全面合作理事会第七次会议（下称“会议”）11月19日在上海召开，签署一系列合作备忘录。\n\n沪新理事会上海方联合主席、上海市市长朱忠明在致辞中表",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_56d35946076a",
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
      "title": "昔日破产船厂复苏，造船业接连“全球爆单”",
      "sourceUrl": "https://www.yicai.com/news/103448416.html",
      "publishedAt": "2026-11-20T10:17:32.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "从第四季度的新增订单来看，全球新船订单正继续向中国集中。中国造船业的订单热潮仍在持续。近期，中国船舶、恒力重工等国内造船企业接连获得大额订单，全球航运巨头也在持续向中国船厂订购新船。部分大型船厂的订单交付时间已排至2030年甚至更晚。订单增长还带动了造船企业业绩大幅提升，一些曾经破产停工的船厂，也在行业景气周期中迎来重新投产的机会。工业和信息化部最新数据显示，2026年前三季度，我国新接船舶订单量",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_445f7eb4cba7",
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
      "title": "龙虎榜丨机构今日买入这15股，抛售洪都航空2.24亿元",
      "sourceUrl": "https://www.yicai.com/news/103448425.html",
      "publishedAt": "2026-11-20T10:15:46.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "共31只个股出现了机构的身影。盘后数据显示，11月20日龙虎榜中，共31只个股出现了机构的身影，15只股票呈现机构净买入，16只股票呈现机构净卖出。\n\n当天机构净买入前三的股票分别是凡拓数创、深南电路、中嘉博创，净买入金额分别是8722万元、6910万元、6816万元。\n\n当天机构净卖出前三的股票分别是洪都航空、粤芯半导、襄阳轴承，净流出金额分别是2.24亿元、2.01亿元、1.2亿元。",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_23af74e6ee63",
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
      "title": "北交所推出创新型中小企业发展公司债券",
      "sourceUrl": "https://wallstreetcn.com/livenews/3203254",
      "publishedAt": "2026-11-20T10:13:12.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "本次北交所推出创新中小债，充分听取各方意见建议，全面总结前期市场实践，在严格遵循当前债券市场法规制度基础上，聚焦创新型中小企业债券融资难点堵点，探索提出一揽子支持引导举措。有关制度安排主要包括三个方面：一是提供主体类和用途类两种融资模式，明确发行主体范围。主体类支持符合条件的创新型中小企业直接发债，包括北交所上市公司、具备国家级创新称号的全国股转系统挂牌公司和其他公司等。同时，考虑到部分中小企业直",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f01fbfd19744",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 76,
      "rawScore": 76,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
      "title": "AMD遭做空股价跌近8% 美众议院披露其对华芯片出口数据",
      "sourceUrl": "https://www.caixin.com/2026-11-20/102507179.html",
      "publishedAt": "2026-11-20T10:11:51.000Z",
      "fetchedAt": "2026-11-20T12:52:39.400Z",
      "timeConfidence": "source",
      "summary": "美国收紧先进AI芯片出口管制，AMD此前获批对华出口的30万颗芯片仍未发货\n       　　【财新网】美国芯片制造商超威半导体（AMD）遭做空机构Hunterbrook狙击。当地时间11月19日，Hunterbrook Capital宣布做空AMD，指控其与受到美国出口限制的中国企业存在业务联系。同日，美国众议院外交事务委员会公开美国商务部工业与安全局（BIS）的对华AI芯片出口许可记录，涉及A",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ddee3682aad4",
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
      "title": "全球造船高景气延续，中国船舶“规模效应+协同增效”带动经营业绩同比提升",
      "sourceUrl": "https://www.cls.cn/detail/2540304",
      "publishedAt": "2026-11-20T10:05:14.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "中国船舶（600150.SH）近期召开2026年第三季度业绩说明会。公告披露，重组整合一年来，公司经营业绩同比提升。1—9月公司实现营业收入1311.18亿元，完成序时进度的79.47%；交付民品船舶145艘，按艘数计完成序时进度的86.31%，交船数量及毛利均同比增加。\n这一业绩表现，离不开本轮全球造船高景气周期的支撑。当前，全球造船业仍处于高景气上行周期，新造船市场表现强劲，新造船价格高位运行",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1ba1f82ae1ce",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "广汽领程借道丰田通商，争取海外商用车订单",
      "sourceUrl": "https://wallstreetcn.com/articles/3786372",
      "publishedAt": "2026-11-20T10:02:31.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "广汽领程正在为新能源商用车寻找海外客户，也寻找能够承接车辆长期运营的合作伙伴。\n11月19日，广汽领程与丰田通商签署全球车型开发合作协议，拟基于成熟整车平台，针对海外市场法规和运输需求联合开发新能源商用车。合作将从样车验证、小批量投放起步，逐步向万台级交付推进。目前，万台级仍是后续目标，不能视为已经获得的订单。\n此次合作延续了双方此前的接触。2025年10月，两家公司签署战略合作协议，此后推进目标",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_525446750b6e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 65,
      "rawScore": 65,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "title": "财政部：加强离岸信托个税征管等因素带动，10月个税同比增长89.6%",
      "sourceUrl": "https://wallstreetcn.com/articles/3786370",
      "publishedAt": "2026-11-20T10:01:36.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "据证券时报，11月20日，财政部公布的2026年1—10月财政收支运行情况显示，1—10月，全国税收收入16.26万亿元，增长6%。记者从财政部了解到，前10个月个人所得税增长22.9%，其中10月份增长89.6%，主要是加强离岸信托个人所得税征管等因素带动。\n以下是2026年1-10月财政收支情况：\n一、全国一般公共预算收支情况\n　　（一）一般公共预算收入情况。&nbsp;\n　　1-10月，全国",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8173209b430a",
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
          "score": 51,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "千台MPV发运，岚图争夺右舵高端市场",
      "sourceUrl": "https://wallstreetcn.com/articles/3786369",
      "publishedAt": "2026-11-20T10:01:14.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "岚图的海外扩张，正在向高端MPV市场推进。\n11月20日，千台岚图梦想家9右舵版在武汉集中发运。岚图方面称，该车型已获得10亿级海外订单，计划当晚在泰国上市，并于12月中旬登陆中国香港。从国内上市到右舵版批量出口，这款旗舰MPV用了约两个月。\n岚图汽车科技股份有限公司总经理蒋焘向华尔街见闻等表示，公司海外战略包括深耕欧洲、布局中东和进军右舵市场，此次发运意味着右舵市场布局进入实际落地阶段。泰国是此",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1e9b21a2bd1e",
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
      "title": "前三季度净利润同比增长超两倍 敦煌种业：预计明年玉米种子供给过剩有所缓和｜直击业绩会",
      "sourceUrl": "https://www.cls.cn/detail/2540311",
      "publishedAt": "2026-11-20T10:00:15.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（记者 刘建）受益于自有核心优势品种销量攀升、毛利增加，敦煌种业（600354.SH）今年前三季度营收与净利润双增长。在今日举行的业绩说明会上，公司董秘张玉财表示，预计明年玉米种子行业供给过剩的压力会有所缓和，但行业整体供大于求的形势难以快速根本性改善。\n近年来，玉米种子行业供给过剩，已成为制约国内种企业绩的重要因素之一。在2024至2025年度，全国玉米种子供需比高达175%",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e05e086e330d",
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
      "title": "AI投资担忧升温 软银暴跌14.48% 创2024年8月以来最大单日跌幅",
      "sourceUrl": "https://www.cls.cn/detail/2540258",
      "publishedAt": "2026-11-20T09:58:59.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（实习编辑 许元嘉/编辑 齐灵）亚洲科技股周五（11月20日）普遍下跌，日本软银集团（SoftBank Group）股价收跌14.48%，报3025日元，创下自2024年8月以来的最大单日跌幅。\n作为OpenAI的重要投资者，软银累计向这家ChatGPT开发商投资了646亿美元，同时持有芯片设计公司Arm的股权。由于软银在AI产业布局广泛，该公司股价对行业市场情绪变化较为敏感。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6f978336f344",
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
      "title": "杭叉集团：主业基本面具备韧性，智能物流业务产业化步伐加快 | 直击业绩会",
      "sourceUrl": "https://www.cls.cn/detail/2540302",
      "publishedAt": "2026-11-20T09:53:22.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（记者 陈夏筱） “从AI DAY到CeMAT，短短三个多月，杭叉的具身智能战略完成了‘大模型发布-全系列产品落地-场景化展示’的闭环推进，智能物流业务的产业化节奏正在加快。”杭叉集团（603298.SH）董事长赵礼敏在今日举行的2026年第三季度业绩说明会上表示，在行业竞争加剧、短期盈利承压的背景下，公司营收保持稳健增长，现金流质量显著改善，累计净利润仍然实现正增长。\n财务数",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_543fca8a547f",
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
      "title": "近30股今日逆势年内新高！半数总市值超5000亿元，这7只万亿巨无霸在列",
      "sourceUrl": "https://www.cls.cn/detail/2540288",
      "publishedAt": "2026-11-20T09:52:16.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（编辑 梓隆），今日（11月20日）A股市场跌多涨少，但仍有部分个股逆势走强。截至收盘，全天共有27只个股盘中股价创年内新高，其中，北纬科技涨超8%，国投电力、工商银行、中信银行、建设银行等涨幅均超3%。\n\n注：今日股价创年内新高的个股（截至11月20日收盘）\n大盘权重占比较高，三成为万亿巨无霸\n从行业层面来看，今日创年内新高的27只个股中，银行股独占10只，比例达37%，公用",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_dee3927488e8",
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
      "title": "SpaceX“轨道梦”遭婉拒 贷款人担忧芯片去了太空就再也收不回来！",
      "sourceUrl": "https://www.cls.cn/detail/2540279",
      "publishedAt": "2026-11-20T09:45:28.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（编辑 马兰）马斯克的轨道数据中心梦想迎来新的现实挑战。据悉，SpaceX在债务融资时遭到贷款方的新限制，他们要求该公司将作为贷款抵押品的高端人工智能芯片需留在地球，而不发射到太空。\n综合多家媒体报道指出，SpaceX在最新一笔430亿美元的债务融资中遇到了这一问题，贷款方希望增加限制性条款，将芯片留在地面数据中心中。\n知情人士透露，贷款方的核心担忧在于能否处置抵押品。如果英伟",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b2b4854ef271",
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
      "title": "APEC共议创新，国产智能硬件展身手",
      "sourceUrl": "https://www.yicai.com/news/103448378.html",
      "publishedAt": "2026-11-20T09:44:49.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "11月18日至19日，亚太经合组织第三十三次领导人非正式会议在深圳举办，这是中国时隔12年再次担任APEC东道主。经济总量约占全球60%的21个成员经济体代表齐聚。\n\n今年的APEC期间，中国科技创新吸引了来自全球的关注。“前海激浪·湾区会客厅”科技展集中展出了仿生机器人、无人机、无人驾驶汽车等科技产品。会场和新闻中心的硬科技产品也吸引了全球目光，联想会议用机、云台相机等轻便、智能的硬件替代了沉重",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ac7ed5bd27e4",
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
      "title": "马斯克隔空示好，得州新州长回应：不反对数据中心，愿意与他合作",
      "sourceUrl": "https://wallstreetcn.com/articles/3786367",
      "publishedAt": "2026-11-20T09:41:10.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "美国科技巨头与政治力量之间的关系，正在中期选举后面临重新调整。\n得州当选州长 Gina Hinojosa 对数据中心投资持审慎态度，但表示愿意与马斯克合作。她主张，在州议会通过保护居民利益的相关立法之前，暂停发放新的数据中心许可。这一立场可能给 SpaceX 在得州 Starbase 计划投资约240亿美元的数据中心及配套燃气电厂项目带来审批压力。\nHinojosa 周四接受 Fox News 采",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_6a9d65e182ae",
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
      "title": "逼近20万亿元！详解前10月全国财政数据",
      "sourceUrl": "https://www.yicai.com/news/103448373.html",
      "publishedAt": "2026-11-20T09:40:48.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "今年前10个月，全国税收收入162622亿元，同比增长6%中国财政收支运行总体平稳，其中税收收入表现依然亮眼。11月20日，财政部公布前10个月全国财政收支数据。从收入端来看，今年前10个月全国一般公共预算收入195671亿元，同比增长4.9%。这一增速较前三季度（5.1%）略微下滑，不过仍高于年初官方全年预期增速（2.2%）。而全国一般公共预算收入实现超预期增长，核心在于税收收入增长好于预期。税",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a875f24372d1",
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
      "title": "【焦点复盘】沪指尾盘回升终结日线6连阴，全市场超300股跌逾9%，芯片产业链全天低迷",
      "sourceUrl": "https://www.cls.cn/detail/2540250",
      "publishedAt": "2026-11-20T09:37:59.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯，今日28股涨停，7股炸板，封板率80%。真视通、盛剑科技4连板，中京电子2连板，好当家7天4板，金新农6天3板。指数全天表现分化，上证50尾盘放量拉升翻红，深成指、创业板指均跌超3%收于全天最低点。尾盘多只宽基ETF爆量，上证50ETF华夏（510050）、沪深300ETF嘉实（159919）均成交超234亿元，创历史天量。沪深两市成交额1.42万亿，较上一个交易日放量117",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4c761072d832",
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
      "noiseCaps": [
        "行情播报"
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "多地鼓励2.5天休假模式 放秋假多地景区长满了娃",
      "sourceUrl": "https://www.yicai.com/news/103448363.html",
      "publishedAt": "2026-11-20T09:33:15.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "我国的假期安排不断优化，错峰出行越来越多。休假安排历来广受关注。近日，广西文化和旅游厅发布关于公开征求《关于深入实施“广西人游广西”行动进一步激活文旅消费的若干措施》意见的公告，鼓励有条件的单位探索试行每月一周2.5天弹性休假制度，为职工每月一次微度假出行创造条件。各地教育部门可结合本地气候和民俗节庆，指导中小学校结合教学实际，在春秋两季各安排2—4天“春秋假”，并与研学实践衔接，鼓励家长利用年休",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4dd42411fa0e",
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
      "title": "A股连续7日超4000只个股下跌 宽基ETF尾盘放量",
      "sourceUrl": "https://finance.caixin.com/2026-11-20/102507159.html",
      "publishedAt": "2026-11-20T09:26:49.000Z",
      "fetchedAt": "2026-11-20T12:52:39.400Z",
      "timeConfidence": "source",
      "summary": "华泰证券辟谣“看空”谣言，融资余额连续五日下降，创近一年内新低\n       　　【财新网】11月20日下午，华泰证券针对当日网络流传的有关华泰证券研究所所长、固收首席张继强发布看空A股等观点的截图发布辟谣声明称，经核实，该内容并非我司研究所相关人员发表，属于不实信息。\n　　华泰证券表示公司所有证券研究观点，均严格按照监管要求履行内部审核流程后对外发布。请广大投资者理性甄别网络信息，不要采信、转发",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_579b24f2956e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
          "score": 38,
          "reasons": [
            "命中关联主题 1 项",
            "业务影响较高"
          ]
        },
        "marketEducation": {
          "score": 82,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "工商银行云南省分行被罚100万元，涉违反金融统计相关规定",
      "sourceUrl": "https://www.cls.cn/detail/2540241",
      "publishedAt": "2026-11-20T09:25:52.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯 中国人民银行云南省分行今日发布行政处罚决定信息公示表（云银罚决字〔2026〕9号），剑指中国工商银行股份有限公司云南省分行。\n罚单显示，工商银行云南省分行的主要违法违规行为：违反金融统计相关规定。\n针对上述违法违规行为，中国人民银行云南省分行对工商银行云南省分行罚款100万元。",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7b393e3668d6",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 84,
      "rawScore": 84,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
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
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 45,
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
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_98366ccd33d5"
    },
    {
      "title": "因违反金融统计相关规定等，建设银行江西省分行被罚503.48万元",
      "sourceUrl": "https://www.cls.cn/detail/2540233",
      "publishedAt": "2026-11-20T09:24:29.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯 中国人民银行江西省分行今日发布行政处罚信息公示表（赣银罚决字〔2026〕10-13号），剑指中国建设银行股份有限公司江西省分行及相关责任人。\n罚单显示，建设银行江西省分行的主要违法违规行为：1.违反金融统计相关规定；2.违反支付结算业务管理规定；3.违反金融科技管理规定；4.违反反假货币业务管理规定；5.占压财政存款或者资金。\n针对上述违法违规行为，中国人民银行江西省分行对建",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_443c6b322619",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 84,
      "rawScore": 84,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 20,
        "impact": 25,
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
      "passesTierGate": true,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "对展业/配置/合规有直接影响",
        "含机构、文号或可核对数据"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 45,
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
      "selectedForFeatured": true,
      "contentTags": [
        "深度研究"
      ],
      "eventId": "event_ce5285e4f9c0"
    },
    {
      "title": "债市收盘| 政金债走强，10年国开债收益率下行近1BP",
      "sourceUrl": "https://www.cls.cn/detail/2540227",
      "publishedAt": "2026-11-20T09:24:24.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（编辑 杨斌）今日，国债与政金债走势分化。国债收益率多数上行，政金债表现较好，10年国开债收益率下行近1BP。\n国债期货收盘全线下跌，30年期主力合约跌0.08%报118.150元，10年期主力合约跌0.05%报110.075元，5年期主力合约跌0.04%报106.780元，2年期主力合约跌0.02%报102.640元。\n银行间主要利率债收益率多数下行，截至下午16:30分，1",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_c334fdb2e897",
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
      "title": "天下没有免费的加息",
      "sourceUrl": "https://wallstreetcn.com/articles/3786366",
      "publishedAt": "2026-11-20T09:23:05.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "在联储主席前瞻指引缺位的环境下，“非联储主席们”见缝插针，尽显鹰派。这背后亦是政治，中选之后，特朗普的政治筹码明显缩水，公开唱反调的代价随之下降。对票委们而言，此时放鹰既是对通胀的表态，也是借机与白宫的降息施压做切割。\n鹰王当属这一周来发言不断的沃勒，其呼吁12月考虑加息50bp，或至少给出清晰的连续25bp加息指引，造成了新的紧缩压力：全球资产几乎对美元普跌，商品尤其走出了某种衰退交易的状态。\n",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a67c34bd66ea",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
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
      "title": "Anthropic首秀“高开低走”，港美AI股承压，OpenAI面临新定价",
      "sourceUrl": "https://www.yicai.com/news/103448314.html",
      "publishedAt": "2026-11-20T09:10:57.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "Anthropic上市首日股价虽然收涨，但实际走势并不及预期。Anthropic（ANT.O）上市首日的股价过山车表现，成为近期全球AI资产重新定价的一个重要市场观察窗口。\n\n11月19日，Anthropic登陆纳斯达克，发行价83美元，开盘价111.50美元，较发行价上涨34%，盘中最高触及115.10美元，对应完全摊薄市值一度突破2万亿美元。\n\n但此后股价持续回落，最终收于97.17美元，较发",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ee6bd4c78a04",
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
      "title": "港股收盘 | 科技指数创逾两年新低 网易业绩不及预期重挫近18%",
      "sourceUrl": "https://www.cls.cn/detail/2540031",
      "publishedAt": "2026-11-20T09:07:09.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（编辑 胡家荣）本周港股三大指数集体承压走弱。截至周五收盘，恒生指数全周累计下跌5.19%，报收22410.80点；恒生科技指数累计下跌7.92%，报收3511.14点；国企指数累计下跌4.83%，报收7554.37点。\n从全周运行轨迹来看，恒生指数自周初的23753点震荡回落至22410点附近；恒生科技指数同步自周初的3800点关口下探至3500点附近，值得注意的是，该指数创",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bf0baf839408",
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
          "score": 73,
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
      "title": "市场监督管理总局：对百度收购欢聚集团部分业务违法实施经营者集中案作出行政处罚决定",
      "sourceUrl": "https://wallstreetcn.com/livenews/3203136",
      "publishedAt": "2026-11-20T09:07:00.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "国家市场监督管理总局对百度（香港）有限公司收购欢聚集团部分业务违法实施经营者集中案作出行政处罚决定。本机关认为，百度香港负有依法申报经营者集中的法律义务，申报后未经批准实施集中，违反修改前的《反垄断法》第二十五条规定，构成违法实施经营者集中。依据修改前的《反垄断法》第二十七条规定，评估认为本项集中不具有排除、限制竞争的效果。根据修改前的《反垄断法》第四十八条、第四十九条的规定，决定对百度香港处以5",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_bfbc3edc0ac1",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 62,
      "rawScore": 62,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
        "impact": 25,
        "evidence": 6,
        "recency": 15,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "regDocument": 6
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
      "title": "海外研选日报1120 | 法盛调查：机构长期看好AI 但七成担忧回报不及预期",
      "sourceUrl": "https://www.cls.cn/detail/2540183",
      "publishedAt": "2026-11-20T09:06:26.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "编者按：财联社每天整理各大投行针对全球宏观、公司和产业、商品等各个纬度的最新研究观点，为投资者投资决策提供全方位的支持。\n市场\n法盛调查：机构看好AI长期增长，七成担心生产率红利不及预期\n法盛投资管理（Natixis Investment Managers）的2027年机构投资者展望调查显示，67%的受访者认为人工智能（AI）有望在未来20年推动市场增长，70%担心AI带来的生产率提升无法完全兑现",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_8a740c65b909",
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
          "score": 46,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
          ]
        },
        "privateFundSales": {
          "score": 46,
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
      "title": "【数据看盘】上证50ETF、沪深300ETF成交均超230亿刷新历史天量，多路资金联手抢筹PCB人气股",
      "sourceUrl": "https://www.cls.cn/detail/2540195",
      "publishedAt": "2026-11-20T09:05:34.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "沪深股通今日合计成交2384.7亿。板块主力资金方面，美容护理板块主力资金净流入居首。ETF成交方面，上证50ETF华夏（510050）、沪深300ETF嘉实（159919）今日现天量成交，全天成交额分别为243、234亿元创最高纪录，环比上一交易日分别增长850%、143%。龙虎榜方面，PCB概念股超声电子强势涨停，获一家机构买入4327万，同时深股通买入1.49亿，开源证券西安西大街营业部买入",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_b644bbb9a95d",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
          "score": 37,
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
      "title": "黄仁勋交棒之后，美联储年末议息之前，和付鹏等三位嘉宾聊聊2027",
      "sourceUrl": "https://wallstreetcn.com/articles/3786282",
      "publishedAt": "2026-11-20T09:02:26.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
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
      "title": "黄金3500美元/盎司！流动性危机了么？",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3786364",
      "publishedAt": "2026-11-20T09:00:36.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "黄金市场继续单边重挫。三天内伦敦金现接连跌破3800美元/盎司、3600美元/盎司等重要整数心理关口，盘中最低下探至3515美元/盎司，直逼3500美元大关。自今年1月下旬金价触及近5600美元/盎司的历史峰值以来，黄金累计回撤已超35%，价格跌回2025年9月以来低位区间。从盘面上看，加息预期升温、实际利率回升、美元走强、风险资产下跌与CTA系统化空头等因素共同施压黄金。贵金属CTA持仓均处于最",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a145ee55fc9f",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 77,
      "rawScore": 77,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
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
          "score": 75,
          "reasons": [
            "命中二级市场投教核心主题 2 项",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "从GDP到资产负债表，经济的主要矛盾变了",
      "sourceUrl": "https://opinion.caixin.com/2026-11-20/102507050.html",
      "publishedAt": "2026-11-20T08:52:29.000Z",
      "fetchedAt": "2026-11-20T12:52:39.400Z",
      "timeConfidence": "source",
      "summary": "中国经济的主要矛盾，已经从增量那一端的GDP，移到存量那一端的资产负债表\n       　　40多年来，讲中国经济绕不开GDP。看增速判断景气，看增量衡量进步，“今年比去年多多少”几乎成了评价国运的标尺。\n　　可当一个经济体走完从贫困到小康的跨越，楼群、高铁、机场和厂房这类存量资本堆到百万亿量级，居民手里的钱、房子和股票也成了信心的主要依托，一个事实就摆到了眼前：中国经济的主要矛盾，已经从增量那一",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_ae2bc5b79304",
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
          "score": 43,
          "reasons": [
            "命中二级市场投教核心主题 1 项",
            "命中关联主题 1 项"
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
      "title": "两部门联合公布4起编造传播资本市场虚假信息典型案例",
      "sourceUrl": "https://www.cls.cn/detail/2540166",
      "publishedAt": "2026-11-20T08:51:13.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯，据证监会网站，今年以来，证券监管部门联合公安机关查办多个编造传播资本市场虚假信息的违法违规行为，依法处罚有关责任人员，有力打击不法分子，推动营造清朗资本市场网络空间。今天，两部门联合公布4起编造传播资本市场虚假信息典型案例。\n案例一、宗某、卢某等编造传播行业税收政策谣言，扰乱市场预期\n一些网民散布关于特定行业税收政策变动的谣言，在网络上扩散，对资本市场有关行业板块造成明显扰动",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_a5936e898309",
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
          "score": 38,
          "reasons": [
            "命中关联主题 1 项",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "阿里受芯片管制下调短期云业务增速预期 即时零售明显减亏",
      "sourceUrl": "https://www.caixin.com/2026-11-20/102507046.html",
      "publishedAt": "2026-11-20T08:48:14.000Z",
      "fetchedAt": "2026-11-20T12:52:39.400Z",
      "timeConfidence": "source",
      "summary": "阿里或将下调2032年全球数据中心容量超20GW的目标，预计2027年后新增AI算力主要依靠平头哥，将大幅投资扩产\n       　　【财新网】“最新的计算设备出口管制措施将会影响明年的各项产品和服务，供应链方面也存在不确定性。不过，阿里在发展本土计算能力方面的进展已超出最初预期，”11月19日晚间，阿里巴巴集团CEO吴泳铭在财报会上分析称，2027年阿里的经营计划和目标可能会受到一定影响，目前正",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_67a2a7374bb4",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "华为新品牌、首款鸿蒙AI手机来了！搭载麒麟9030S，售价5699元起",
      "sourceUrl": "https://wallstreetcn.com/articles/3786363",
      "publishedAt": "2026-11-20T08:47:30.000Z",
      "fetchedAt": "2026-11-20T12:52:41.392Z",
      "timeConfidence": "source",
      "summary": "据界面新闻，11月20日下午，华为子品牌OSTA星芒首款新品——OSTA O1 Pro正式发布，售价5699元起。新机定位鸿蒙AI手机，首发搭载HarmonyOS 7 AI先锋版，采用阔直板形态，此外还搭载麒麟9030S芯片，配置7000mAh电池。\n\n更新中风险提示及免责条款\n          \n            市场有风险，投资需谨慎。本文不构成个人投资建议，也未考虑到个别用户特殊的投",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e0e6de777660",
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
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "1.64万亿元！前10月个税收入超去年全年",
      "sourceUrl": "https://www.yicai.com/news/103448282.html",
      "publishedAt": "2026-11-20T08:45:20.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "1~10月个税收入为16428亿元，同比增长22.9%。今年中国个人所得税（个税）收入规模将创历史新高。11月20日，财政部公布2026年1月—10月财政收支情况。其中1~10月个税收入为16428亿元，同比增长22.9%。这一增速超过同期全国税收收入增速（6%）近17个百分点。由于个税收入快速增长，今年前10个月个税收入规模已经超过了去年全年水平（16187亿元）。根据财政部数据，今年10月份个",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e44809b5bcc0",
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
      "title": "头部券商齐发声：政策加码创造企稳条件，看好大盘蓝筹、“出海”、AI等",
      "sourceUrl": "https://www.yicai.com/news/103448281.html",
      "publishedAt": "2026-11-20T08:44:31.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "“未来的市场机会或体现在大盘蓝筹与国产科技上。”外围市场波动之际，A股延续调整态势。11月20日，日韩股市大幅低开，韩国KOSPI指数、日经225指数均收跌超5%。A股方面，当天，沪指报收3533.79点，跌幅1.23%，深成指和创业板指均收跌超3%。沪深两市成交额1.42万亿，较上一个交易日放量1171亿。市场调整将持续到何时？当前整体估值如何，科技股后市表现如何？第一财经记者采访了多位券商首席",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f9821b295855",
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
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态"
      ],
      "eventId": null
    },
    {
      "title": "连板股追踪丨A股今日共30只个股涨停 真视通收获4连板",
      "sourceUrl": "https://www.yicai.com/news/103448246.html",
      "publishedAt": "2026-11-20T08:20:05.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "一图速览今日连板股&gt;&gt;11月20日，Wind数据显示，A股市场共计30只个股涨停。其中算力概念股真视通收获4连板、中京电子2连板。一图速览今日连板股&gt;&gt;",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_2eeacf6dff05",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
      "title": "WWF气候与能源全球负责人：气候谈判正在成为经济议题",
      "sourceUrl": "https://www.caixin.com/2026-11-20/102507042.html",
      "publishedAt": "2026-11-20T08:07:54.000Z",
      "fetchedAt": "2026-11-20T12:52:39.400Z",
      "timeConfidence": "source",
      "summary": "气候议题与国家竞争力密切相关，如果各国能意识到这一点，就能更快地行动、实现气候目标\n       　　【财新网】“气候谈判过去主要是一个政治进程，但如今正在成为一个全面的经济进程。”\n　　在第31届联合国气候大会（COP31）现场，世界自然基金会（WWF）气候与能源议题全球负责人曼努埃尔·普尔加·维达尔（Manuel Pulgar-Vidal）对财新表示。“我们必须认识到，《巴黎协定》不应仅仅被视",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_e966081dee4b",
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
          "score": 34,
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
      "title": "新浪新闻·2026探索大会在京举行 虚实交融共探智能时代共生新图景",
      "sourceUrl": "https://www.yicai.com/news/103448175.html",
      "publishedAt": "2026-11-20T07:51:45.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "大会同期，2026新浪新闻“探索之心35”评选结果揭晓，致敬AI浪潮中的先锋实践者。11月19日，由微博与新浪新闻联合主办的“新浪新闻·2026探索大会”在北京举办。本次大会以“智越虚实 万物共生”为主题，汇聚产业领袖、学术专家、跨界嘉宾、人工智能领域前沿探索者，围绕智能经济新周期、智能体规模落地、具身智能产业化等议题展开深度研讨，为AI时代的产业跃迁与普惠发展提供前瞻思考。大会同期，2026新浪",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_beb30277c1ee",
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
      "title": "Anthropic上市大涨17%能否“站稳脚跟”？华尔街警示：短期不要追高！",
      "sourceUrl": "https://www.cls.cn/detail/2540052",
      "publishedAt": "2026-11-20T07:45:33.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（编辑 黄君芝）Anthropic周四的重磅IPO，给经历了数周疲软的市场带来了急需的提振，但华尔街分析师警告称，该公司股价未来几周仍可能持续波动。\n\nAnthropic周四收涨17.07%报97.17美元，市值为1.271万亿美元，在全球上市公司中排第12名，介于特斯拉和伯克希尔之间。此次发行通过出售9.8亿股股票筹集了813亿美元，超过SpaceX今年6月的上市规模，成为有",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_5b099370fb4a",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "随申GO在长三角文博会预发布，将于12月21日正式上线",
      "sourceUrl": "https://www.yicai.com/news/103448134.html",
      "publishedAt": "2026-11-20T07:32:20.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "“随申GO”以票根为“流量入口”，将文博、赛事、演艺、节展等场景与城市商圈打通，打造“城市级智能化消费基础设施”。11月19日，第七届长三角国际文化产业博览会在国家会展中心（上海）开幕。本届文博会以“促进文商旅体展融合发展、激发文化消费新活力”为主题，成为集中展示跨业态联动创新实践的重要平台。开幕式上，上海文商旅体展融合票根联动官方服务平台“随申GO”首次面向公众预发布，并宣布将于12月21日正式",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_d86f561fe326",
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
      "title": "2027年大宗通胀：商品轮动，物价传导",
      "sourceUrl": "https://opinion.caixin.com/2026-11-20/102507033.html",
      "publishedAt": "2026-11-20T07:27:24.000Z",
      "fetchedAt": "2026-11-20T12:52:39.400Z",
      "timeConfidence": "source",
      "summary": "不论美伊战局如何演绎，只要一个方向明确——油价中枢难以回到过往，那么2027年全球将迎来供给性通胀传导\n       　　2022年全球旧秩序松动，通胀再评估，大宗框架再修订。这是我们理解过去5年，同时也是未来通胀和大宗的底层逻辑。\n　　不论美伊战局如何演绎，只要一个方向明确——油价中枢难以回到过往，那么2027年全球将迎来供给性通胀传导。\n　　供给型通胀传导有四条路径——能源冲击、食品涨价、成本",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_1b9f77ce69ae",
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
      "title": "多家头部公募发声：外部扰动逐步消化，A股有望迎估值修复窗口",
      "sourceUrl": "https://www.yicai.com/news/103448125.html",
      "publishedAt": "2026-11-20T07:27:07.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "“短期的波动并未改变市场的内在韧性。”外围市场大幅波动之际，A股延续调整。11月20日，日韩股市大幅低开，韩国KOSPI指数开盘跌超4%，最终收跌5.21%；日经225指数开盘下跌1.5%，最终收跌5.06%。A股方面，20日，沪指报收3533.79点，跌幅1.23%，深成指和创业板指均收跌超3%。沪深两市成交额1.42万亿，较上一个交易日放量1171亿。第一财经采访的多位公募基金人士表示，从估值",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_72c2ccd7938a",
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
            "命中二级市场投教核心主题 5 项",
            "命中关联主题 1 项",
            "含可核对要素"
          ]
        },
        "privateFundSales": {
          "score": 60,
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
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "收盘丨创业板指跌3.54% 半导体产业链调整",
      "sourceUrl": "https://www.yicai.com/news/103448103.html",
      "publishedAt": "2026-11-20T07:21:02.000Z",
      "fetchedAt": "2026-11-20T12:52:47.735Z",
      "timeConfidence": "source",
      "summary": "沪深两市成交额1.42万亿，较上一个交易日放量1171亿。11月20日，沪指跌1.22%，深成指跌3.09%，创业板指跌3.54%，科创综指跌5.23%。\n\n\n\n盘面上，上证50指数尾盘快速回升，AI漫剧概念走高，PCB概念活跃，半导体产业链调整。\n\n具体来看，银行股逆势走强，建设银行、工商银行、农业银行等股价均创历史新高。\n\n\n\n光刻机概念股跌幅居前，联合化学20%跌停，久日新材跌超16%，波长",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_9d534e6cc822",
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
      "title": "A股三大指数集体收跌，全市场超5200股飘绿",
      "sourceUrl": "https://www.36kr.com/newsflashes/4077750273545093",
      "publishedAt": "2026-11-20T07:02:05.000Z",
      "fetchedAt": "2026-11-20T07:08:08.665Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，A股三大指数集体收跌，沪指跌1.22%，深成指跌3.09%，创业板指跌3.54%；电脑硬件、互联网、工业机械板块领跌，汇成真空跌超14%，品高股份跌超13%，江波龙跌近7%；石油天然气、保险、银行板块涨幅居前，中国石油涨超4%，工商银行涨超3%，中国平安涨超1%；全市场超5200股飘绿。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_dd781b0609ae",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 39,
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
      "tierGate": 70,
      "passesTierGate": false,
      "confidence": "medium",
      "why": [
        "快讯线索，需结合原文判断",
        "时效性高"
      ],
      "scenarioScores": {
        "insurance": {
          "score": 50,
          "reasons": [
            "命中保险运营核心主题 1 项",
            "命中关联主题 1 项"
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
      "attentionScore": 39,
      "llmScores": [
        35,
        43
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "观点",
        "快讯"
      ],
      "eventId": "event_a3c5d0364922"
    },
    {
      "title": "习近平会见马来西亚总理安瓦尔",
      "sourceUrl": "https://www.36kr.com/newsflashes/4077746626679682",
      "publishedAt": "2026-11-20T06:58:22.000Z",
      "fetchedAt": "2026-11-20T07:08:08.665Z",
      "timeConfidence": "source",
      "summary": "11月20日中午，国家主席习近平在深圳会见来华出席亚太经合组织领导人非正式会议的马来西亚总理安瓦尔。习近平强调，双方要深化高水平战略协作，保持高层战略沟通，相互支持彼此维护国家主权、安全、发展利益；要加强发展战略对接，挖掘新兴合作潜力，高质量建设和运营好重点项目，做大做优农产品贸易；扩大旅游、教育等合作，进一步密切民间和地方交流；要协同推进全球治理改革，加强在亚太经合组织等多边框架内协调和配合，携",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_4eae06959cb2",
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
      "title": "上证50ETF尾盘爆量拉升，成交突破215亿创成交额历史天量",
      "sourceUrl": "https://www.36kr.com/newsflashes/4077746158752640",
      "publishedAt": "2026-11-20T06:57:53.000Z",
      "fetchedAt": "2026-11-20T07:08:08.665Z",
      "timeConfidence": "source",
      "summary": "尾盘上证50ETF华夏爆量拉升一度涨1%，早盘一度跌超2%，现成交额突破215亿，较昨日全天增超7倍，刷新此前在2026年1月28日创下的214.5亿元的历史天量。（财联社）",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e3501344379f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 30,
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
      "title": "习近平会见泰国总理阿努廷",
      "sourceUrl": "https://www.36kr.com/newsflashes/4077744552678279",
      "publishedAt": "2026-11-20T06:56:15.000Z",
      "fetchedAt": "2026-11-20T07:08:08.665Z",
      "timeConfidence": "source",
      "summary": "11月20日上午，国家主席习近平在深圳会见来华出席亚太经合组织领导人非正式会议的泰国总理阿努廷。习近平强调，中泰两国要密切政府、政党、立法机构等交往，维护共同战略利益。中泰经贸合作的本质是互利共赢、共同发展，双方要加强战略对接，用好经贸、科技、数字经济等合作机制，做大做强农业、互联互通等传统合作，培育壮大人工智能、新能源汽车、航空航天、防灾减灾救灾、水资源治理等合作新增长点，共同打造地区科技创新和",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_3c1448b8852c",
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
      "title": "“虾滑”冒充小鼠肿瘤？湘雅通报学术不端处分",
      "sourceUrl": "https://www.caixin.com/2026-11-20/102507011.html",
      "publishedAt": "2026-11-20T06:50:03.000Z",
      "fetchedAt": "2026-11-20T07:06:12.775Z",
      "timeConfidence": "source",
      "summary": "2024年8月，中南大学湘雅医学院披露，当年共获批国自然基金287项，中标经费12720.5万元，其中，湘雅医院位列第一，湘雅二医院紧居其后\n       　　【财新网】引发热议的“虾滑论文”作者被处分。11月19日，中南大学发布情况通报，称确实存在学术不端行为。\n　　涉事论文名为《ROS-GPX4轴介导的铁死亡抑制驱动微塑料诱导的鼻咽癌恶性进展》（Ferroptosis inhibition v",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_212d05851da0",
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
      "title": "商务部：1-10月我国农产品网上零售额增长12%",
      "sourceUrl": "https://www.36kr.com/newsflashes/4077731211170691",
      "publishedAt": "2026-11-20T06:42:41.000Z",
      "fetchedAt": "2026-11-20T07:08:08.665Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，商务部电子商务司负责人介绍2026年1-10月我国电子商务发展情况表示，数字产品增长加速，据商务大数据监测，10月份智能穿戴和笔记本电脑网上零售额分别增长42.5%和32.4%。即时零售激发线下商品消费潜力，重点监测平台1-10月即时零售交易额增速超过两位数。电商不断提升服务消费便利性，据商务大数据监测，1-10月在线旅游、在线餐饮和在线生活服务零售额分别增长24.3%、12%和11.",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_456932eea269",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
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
      "title": "谷歌将绕过博通直接采购HBM 降成本需求或将压制内存厂商利润",
      "sourceUrl": "https://www.cls.cn/detail/2539786",
      "publishedAt": "2026-11-20T06:40:49.000Z",
      "fetchedAt": "2026-11-20T12:53:12.677Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日讯（编辑 马兰）据报道，谷歌正在转向直接采购用于其TPU的高带宽内存HBM，这可能标志着科技公司在采购模式上的转变，并影响到内存行业现有的供应格局。\n谷歌此前一直采用博通的捆绑式服务，将设计、封装和HBM采购均委托给博通。但谷歌现在将部分设计分摊给联发科，并希望直接采购HBM来扩展其供应链。\n据市场研究公司Counterpoint Research称，在与联发科的合作中，谷歌负责",
      "sourceName": "财联社",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_4036d94cd7bc",
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
        "深度研究"
      ],
      "eventId": null
    },
    {
      "title": "新云的末日？ 黄仁勋离开之后，算力地主们会崩塌吗",
      "sourceUrl": "https://wallstreetcn.com/member/articles/3786006",
      "publishedAt": "2026-11-20T06:39:09.000Z",
      "fetchedAt": "2026-11-20T07:06:13.235Z",
      "timeConfidence": "source",
      "summary": "11 月 10 日盘后 CoreWeave 发布三季度财报，11 日股价暴涨 24.71% 至 60.77 美元，成交量 1.65 亿股、换手率 36%，是该股上市以来最放量的一天。12 日，黄仁勋辞职叠加 Nebius 财报，CoreWeave 跌 6.86%；13 日再跌 6.13%，收于 53.13 美元，比财报前的 48.73 美元只高出 9%黄仁勋离职，新云板块两日蒸发 12%–25%。",
      "sourceName": "华尔街见闻",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_21b95780347d",
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
      "title": "郭婷婷副部长在香港出席美元主权债券发行活动",
      "sourceUrl": "https://www.36kr.com/newsflashes/4077720022209669",
      "publishedAt": "2026-11-20T06:31:18.000Z",
      "fetchedAt": "2026-11-20T07:08:08.665Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，据财政部消息，11月19日，中华人民共和国财政部代表中央政府在香港特别行政区成功发行了20亿美元主权债券。11月20日上午，财政部在香港金融管理局举行仪式，郭婷婷副部长出席活动并致辞。她表示，本次美元主权债券在香港顺利发行，彰显了中国坚定不移推进高水平对外开放的决心，为更多国际投资者带来了分享中国高质量发展红利的机遇，有利于支持香港金融基础设施建设，巩固和提升香港国际金融中心地位。香港",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_6002bd164c40",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 66,
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
      "passesTierGate": true,
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
      "attentionScore": 66,
      "llmScores": [
        78,
        53
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
      "title": "华泰证券辟谣：网传市场言论非公司研究所相关人员发表",
      "sourceUrl": "https://www.36kr.com/newsflashes/4077719321859200",
      "publishedAt": "2026-11-20T06:30:35.000Z",
      "fetchedAt": "2026-11-20T07:08:08.665Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，华泰证券1发布声明：我司关注到近期部分网络、境外平台传播的相关市场言论。经核实，该内容并非我司研究所相关人员发表，属于不实信息。我司所有证券研究观点，均严格按照监管要求履行内部审核流程后对外发布。请广大投资者理性甄别网络信息，不要采信、转发该不实内容。对于编造、传播不实信息的行为，我司支持当事人依法维护自身合法权益。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_e36fb9494870",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 55,
      "rawScore": 74,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 58,
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
      "attentionScore": 55,
      "llmScores": [
        44,
        66
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
      "title": "从金融法草案看金融资产管理公司功能定位",
      "sourceUrl": "https://opinion.caixin.com/2026-11-20/102507005.html",
      "publishedAt": "2026-11-20T06:25:38.000Z",
      "fetchedAt": "2026-11-20T07:06:12.775Z",
      "timeConfidence": "source",
      "summary": "AMC要在金融法、金融稳定法构建的风险防范化解体系中找准功能定位、发挥作用\n       　　近期，金融法草案提请全国人大常委会二次审议并向公众征求意见。金融法草案二次审议稿（以下简称“金融法二审稿”）吸收金融稳定法草案二次审议稿（以下简称“金融稳定法二审稿”）相关内容，加强金融监管，完善金融风险防范化解处置机制。金融资产管理公司（AMC）是中国金融体系中专门从事风险化解的金融机构。国家“十五五”",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_f51954bcf53e",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 73,
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
      "attentionScore": 73,
      "llmScores": [
        64,
        81
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
      "title": "工商银行发布贵金属市场波动风险提示",
      "sourceUrl": "https://www.cls.cn/detail/2539955",
      "publishedAt": "2026-11-20T06:23:58.000Z",
      "fetchedAt": "2026-11-20T07:07:18.095Z",
      "timeConfidence": "source",
      "summary": "【工商银行发布贵金属市场波动风险提示】财联社11月20日电，工商银行发布《关于贵金属市场波动风险的提示》称，近期影响市场不稳定的因素较多，贵金属价格波动显著加剧。建议投资者密切关注市场变化，提升风险防控意识，坚持适度均衡的原则，从中长期视角理性进行投资配置，守护资产安全。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_4602ae88277f",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 48,
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
          "score": 52,
          "reasons": [
            "命中关联主题 3 项",
            "业务影响较高"
          ]
        }
      },
      "attentionScore": 48,
      "llmScores": [
        38,
        57
      ],
      "scoredBy": "llm",
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态",
        "快讯"
      ],
      "eventId": "event_98366ccd33d5"
    },
    {
      "title": "恒工精密在邯郸成立职业技能培训学校公司，注册资本500万",
      "sourceUrl": "https://www.36kr.com/newsflashes/4077711274382471",
      "publishedAt": "2026-11-20T06:22:24.000Z",
      "fetchedAt": "2026-11-20T07:08:08.665Z",
      "timeConfidence": "source",
      "summary": "36氪获悉，天眼查App显示，近日，河北恒工职业技能培训学校有限公司成立，法定代表人为刘文超，注册资本500万元人民币，经营范围包括教育咨询服务、信息技术咨询服务、工业工程设计服务等。股东信息显示，该公司由河北恒工精密装备股份有限公司全资持股。",
      "sourceName": "36氪",
      "category": "insights",
      "tags": [
        "观点"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_7cacc5d8c56c",
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
      "title": "财联社11月20日电，汇丰将阿迪达斯目标价从175欧元上调至195欧元。",
      "sourceUrl": "https://www.cls.cn/detail/2539951",
      "publishedAt": "2026-11-20T06:19:53.000Z",
      "fetchedAt": "2026-11-20T07:07:18.095Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，汇丰将阿迪达斯目标价从175欧元上调至195欧元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_cb1976d860a2",
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
      "title": "拓荆科技：公司先进存储、先进逻辑薄膜沉积设备等高端产品交付规模持续扩大",
      "sourceUrl": "https://www.cls.cn/detail/2539925",
      "publishedAt": "2026-11-20T06:17:30.000Z",
      "fetchedAt": "2026-11-20T07:07:18.095Z",
      "timeConfidence": "source",
      "summary": "【拓荆科技：公司先进存储、先进逻辑薄膜沉积设备等高端产品交付规模持续扩大】财联社11月20日电，拓荆科技表示，公司坚定看好中国科技产业发展，将坚定信心、坚持自主创新，持续深耕半导体薄膜沉积与三维集成核心装备领域，加快攻坚先进制程关键装备，助力我国集成电路产业链补齐关键装备短板。公司近期发行股份及支付现金购买无锡尚积股权项目已获上交所审核通过，该并购交易适用简易审核程序，极大提高了交易审核效率。通过",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_b65ce0e7f4e9",
      "tier": "S3",
      "sourceTier": "S3",
      "sourceTierLabel": "快讯/观点线索",
      "score": 65,
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
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "财联社11月20日电，截至目前，南向资金净买入额达40亿港元。",
      "sourceUrl": "https://www.cls.cn/detail/2539941",
      "publishedAt": "2026-11-20T06:07:28.000Z",
      "fetchedAt": "2026-11-20T07:07:18.095Z",
      "timeConfidence": "source",
      "summary": "财联社11月20日电，截至目前，南向资金净买入额达40亿港元。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_650110869c87",
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
      "eventId": "event_d1da54a5c439"
    },
    {
      "title": "主要政策利率切换为隔夜后，LPR为什么没有降？",
      "sourceUrl": "https://www.yicai.com/news/103447922.html",
      "publishedAt": "2026-11-20T06:07:16.000Z",
      "fetchedAt": "2026-11-20T07:06:28.613Z",
      "timeConfidence": "source",
      "summary": "三重约束下的“按兵不动”。主要政策利率切换为隔夜逆回购利率之后，贷款市场报价利率（LPR）迎来首次报价。市场普遍关注，在银行加点未变的情况下，这一新的利率基准，会不会带动LPR利率有所降低。\n\n11月20日，中国人民银行授权全国银行间同业拆借中心公布新版LPR报价：1年期品种报3.0%，上月为3.0%；5年期以上品种报3.5%，上月为3.5%。两个期限品种的LPR报价连续第18个月保持不变。\n\n“",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_7cf51d0e62cb",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 86,
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
      "attentionScore": 86,
      "llmScores": [
        87,
        85
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
      "title": "英伟达交出超预期业绩，最新数据：沪深仅36家公司较多参与其供应链",
      "sourceUrl": "https://www.yicai.com/news/103447916.html",
      "publishedAt": "2026-11-20T06:01:27.000Z",
      "fetchedAt": "2026-11-20T07:06:28.613Z",
      "timeConfidence": "source",
      "summary": "“部分公司涉及英伟达的业务占比没有市场想象的高，多数公司占比仅为个位数。”英伟达的超预期业绩出炉，引发全球资本市场高度关注。\n\n11月18日凌晨，英伟达公布第三季度财报，公司当期实现营收1158.4亿美元，同比增长103%，环比增长20%，单季首次突破千亿美元，净利润653亿美元，同比增长105%，环比增长9%。\n\n在市场看来，英伟达的三季报业绩全面超预期，营收、净利润分别超市场预期约6.2%、8",
      "sourceName": "第一财经",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_94b9ae202eda",
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
      "title": "海光信息：公司供应链体系稳定 CPU与DCU产品市场需求持续放量",
      "sourceUrl": "https://www.cls.cn/detail/2539933",
      "publishedAt": "2026-11-20T05:59:04.000Z",
      "fetchedAt": "2026-11-20T07:07:18.095Z",
      "timeConfidence": "source",
      "summary": "【海光信息：公司供应链体系稳定 CPU与DCU产品市场需求持续放量】财联社11月20日电，海光信息11月20日表示，当前公司供应链体系稳定，公司CPU与DCU产品的市场需求持续放量。目前，公司新一代CPU与DCU产品研发按既定路线稳步推进。",
      "sourceName": "财联社",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "news_flash",
      "discoveredVia": "RSSHub",
      "id": "news_2b8fc70ae5de",
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
      "primaryScene": "marketEducation",
      "selectedForFeatured": false,
      "contentTags": [
        "行业动态",
        "快讯"
      ],
      "eventId": null
    },
    {
      "title": "连任未满一月 金融街证券董事长祝艳辉被留置",
      "sourceUrl": "https://finance.caixin.com/2026-11-20/102506997.html",
      "publishedAt": "2026-11-20T05:55:49.000Z",
      "fetchedAt": "2026-11-20T07:06:12.775Z",
      "timeConfidence": "source",
      "summary": "祝艳辉目前还任金融街集团党委副书记、副董事长、总经理，兼任北京华融综合投资有限公司董事长、总经理\n    \n     \n     资料图：祝艳辉。\n    \n   \n       　　【财新网】11月20日，金融街证券（原恒泰证券，1476.HK）在港交所公告，根据北京市西城区监察委员会的通知，公司董事长祝艳辉目前正接受调查并被实施留置措施。公司未收到任何委员会需要协助调查或提供任何数据的要求，集",
      "sourceName": "财新网",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "RSSHub",
      "id": "news_899bc1c187c8",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 78,
      "rawScore": 77,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
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
          "score": 37,
          "reasons": [
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
      "attentionScore": 78,
      "llmScores": [
        77,
        79
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
      "title": "华尔街各大银行纷纷发布2027年标普500目标位，牛市前景明朗",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3679255",
      "publishedAt": "2026-11-20T04:36:11.000Z",
      "fetchedAt": "2026-11-20T12:55:11.595Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_a99f90ab0ff8",
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
      "eventId": "event_ec42523135ca"
    },
    {
      "title": "威廉·布莱尔首次覆盖Anthropic股票，给予跑赢大市评级，称其为\"划时代的公司\"",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3679262",
      "publishedAt": "2026-11-20T04:33:04.000Z",
      "fetchedAt": "2026-11-20T12:55:11.595Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_988ad1ffdd73",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 41,
      "rawScore": 41,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 12,
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
      "title": "+82%、+66%、+65%：Nvidia业绩亮眼，Anthropic上市，华尔街迎来折价买入良机",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3679258",
      "publishedAt": "2026-11-20T04:31:18.000Z",
      "fetchedAt": "2026-11-20T12:55:11.595Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_1cbd70259ac6",
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
      "title": "广告收入增37%、电商近盈亏平衡，小摩：沃尔玛(WMT.US)“第二利润引擎“才刚点火，维持“超配”评级",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3679248",
      "publishedAt": "2026-11-20T04:31:04.000Z",
      "fetchedAt": "2026-11-20T12:55:11.595Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_849c73aea4e9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 46,
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
      "title": "美股前瞻 | 三大股指期货涨跌不一 恐慌指数升破30创近八个月新高 Anthropic盘前跌超7%",
      "sourceUrl": "https://cn.investing.com/news/stock-market-news/article-3679247",
      "publishedAt": "2026-11-20T04:31:03.000Z",
      "fetchedAt": "2026-11-20T12:55:11.595Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "industry",
      "tags": [
        "行业动态"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_f123fba761c9",
      "tier": "S2",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "score": 30,
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
        "行业动态"
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
      "passesTierGate": true,
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
      "primaryScene": "insurance",
      "selectedForFeatured": true,
      "eventId": null,
      "timeConfidence": "source"
    },
    {
      "title": "欧洲央行拉加德：将扩大货币互换协议覆盖范围",
      "sourceUrl": "https://cn.investing.com/news/economic-indicators/article-93CH-3678863",
      "publishedAt": "2026-11-20T02:19:34.000Z",
      "fetchedAt": "2026-11-20T12:55:11.664Z",
      "timeConfidence": "source",
      "summary": "",
      "sourceName": "英为财情",
      "category": "research",
      "tags": [
        "研究报告"
      ],
      "evidenceType": "financial_media",
      "discoveredVia": "Investing.com",
      "id": "news_add32f1d16d6",
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
      "eventId": "event_afd95bcad936"
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
      "score": 71,
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 3,
        "recency": 13,
        "actionability": 4
      },
      "evidenceBreakdown": {
        "explicitDate": 3
      },
      "noiseCaps": [],
      "tierGate": 50,
      "passesTierGate": true,
      "confidence": "low",
      "why": [
        "权威原始来源",
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
      "score": 17,
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
      "passesTierGate": false,
      "confidence": "low",
      "why": [
        "专业财经媒体跟进",
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
      "attentionScore": 17,
      "llmScores": [
        16,
        18
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
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
          "score": 36,
          "reasons": [
            "命中保险运营核心主题 1 项"
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
      "attentionScore": 15,
      "llmScores": [
        17,
        12
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
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
      "score": 14,
      "original": {
        "huibaoxianCategory": "公司动态"
      },
      "discoveredVia": "慧保天下官网",
      "sourceTier": "S2",
      "sourceTierLabel": "专业财经媒体",
      "rawScore": 71,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 30,
        "impact": 16,
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
        "可转化为客户沟通或投研关注"
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
      "attentionScore": 14,
      "llmScores": [
        20,
        8
      ],
      "scoredBy": "llm",
      "primaryScene": "insurance",
      "selectedForFeatured": false,
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
      "selectedForFeatured": false,
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
      "score": 79,
      "rawScore": 77,
      "scoreLabel": "从业价值",
      "scoreBreakdown": {
        "relevance": 26,
        "impact": 25,
        "evidence": 6,
        "recency": 10,
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
      "primaryScene": "privateFundSales",
      "selectedForFeatured": true,
      "contentTags": [
        "官方监管",
        "权威源"
      ],
      "eventId": "event_b326a8886e68",
      "attentionScore": 79,
      "llmScores": [
        77,
        81
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
      "score": 45,
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
    }
  ],
  "curationStats": {
    "scenes": {
      "insurance": 57,
      "privateFundSales": 11,
      "marketEducation": 82
    },
    "featured": 24,
    "gate": {
      "passed": 36,
      "total": 150,
      "byTier": {
        "S3": {
          "total": 73,
          "passed": 10
        },
        "S2": {
          "total": 71,
          "passed": 23
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
      "news_e9bea38179b5",
      "news_9311d639357a",
      "news_8d6ef6bc050e",
      "news_a0f53987808f",
      "news_77a41d21ba8f",
      "news_7c17994d15e5",
      "news_bba32dee9b76"
    ],
    "products": [
      "news_a5ac394466f4",
      "news_d0d0394aa91f"
    ],
    "industry": [
      "news_6d5b8a9c1ee1",
      "news_0eb21adb212a",
      "news_193cd3c2fb1d",
      "news_237bb10cbe55",
      "news_39c8a8508dd0",
      "news_47bc21e49008",
      "news_9a43821df6a0",
      "news_b885bb83b075",
      "news_cdd86f29c366",
      "news_b3ff5c57ab83"
    ],
    "research": [
      "news_01be16941020",
      "news_5cd2982a9aac",
      "news_752aba286fab",
      "news_2c60a765505b",
      "news_2affeb6b0194",
      "news_3edeef1bf200",
      "news_35ca15c60c48",
      "news_d6306c360858",
      "news_834d20d01348",
      "news_5852444f85d9"
    ],
    "insights": [
      "news_c1742b277e82",
      "news_f4368fc3e4c8",
      "news_2a8ebe4b3cd3",
      "news_5d40d47ae085",
      "news_bddbe4af0653",
      "news_a4f3213f6a06",
      "news_58dc1dd5b984",
      "news_c3affe1a40b7",
      "news_bd053cc30104",
      "news_7b9e0f7226de"
    ]
  },
  "flashes": [
    {
      "id": "news_c1742b277e82",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_6d5b8a9c1ee1",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_f4368fc3e4c8",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_0eb21adb212a",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_2a8ebe4b3cd3",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_193cd3c2fb1d",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_01be16941020",
      "dotClass": "flash-dot-blue"
    },
    {
      "id": "news_5cd2982a9aac",
      "dotClass": "flash-dot-green"
    }
  ],
  "keywordIndex": {
    "保险": [
      "news_dd781b0609ae",
      "news_db87aa674dda",
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
    "中国平安": [
      "news_dd781b0609ae"
    ],
    "人保": [
      "news_054d2e45cc98",
      "news_d63e7207eecf"
    ],
    "银行": [
      "news_f4368fc3e4c8",
      "news_237bb10cbe55",
      "news_b885bb83b075",
      "news_b3ff5c57ab83",
      "news_b94b792dc78f",
      "news_bed1ca991d57",
      "news_88250335fda8",
      "news_dee3927488e8",
      "news_7b393e3668d6",
      "news_443c6b322619",
      "news_c334fdb2e897",
      "news_9d534e6cc822",
      "news_dd781b0609ae",
      "news_4602ae88277f",
      "news_7cf51d0e62cb",
      "news_a99f90ab0ff8",
      "news_77a41d21ba8f"
    ],
    "央行": [
      "news_0930c31f05ae",
      "news_bd5385632694",
      "news_add32f1d16d6"
    ],
    "商业银行": [
      "news_f4368fc3e4c8"
    ],
    "利率": [
      "news_e48d6a68891d",
      "news_1095a097ddb1",
      "news_c334fdb2e897",
      "news_a145ee55fc9f",
      "news_7cf51d0e62cb"
    ],
    "LPR": [
      "news_7cf51d0e62cb"
    ],
    "逆回购": [
      "news_7cf51d0e62cb"
    ],
    "降息": [
      "news_a67c34bd66ea"
    ],
    "加息": [
      "news_0930c31f05ae",
      "news_bd5385632694",
      "news_a67c34bd66ea",
      "news_a145ee55fc9f"
    ],
    "流动性": [
      "news_0cdc41683356",
      "news_a145ee55fc9f"
    ],
    "存款": [
      "news_443c6b322619"
    ],
    "股票": [
      "news_bd053cc30104",
      "news_e9bea38179b5",
      "news_0c5cd9b84a87",
      "news_23af74e6ee63",
      "news_ae2bc5b79304",
      "news_5b099370fb4a",
      "news_988ad1ffdd73"
    ],
    "A股": [
      "news_752aba286fab",
      "news_50778a3f970b",
      "news_8da1b98dd4d7",
      "news_7b9e0f7226de",
      "news_d0d0394aa91f",
      "news_dee3927488e8",
      "news_579b24f2956e",
      "news_f9821b295855",
      "news_2eeacf6dff05",
      "news_72c2ccd7938a",
      "news_dd781b0609ae"
    ],
    "港股": [
      "news_2affeb6b0194",
      "news_bf0baf839408"
    ],
    "美股": [
      "news_cdd86f29c366",
      "news_50778a3f970b",
      "news_b94b792dc78f",
      "news_2ab15d717d96",
      "news_0453d6a44ca5",
      "news_f123fba761c9"
    ],
    "大盘": [
      "news_dee3927488e8",
      "news_f9821b295855"
    ],
    "指数": [
      "news_b885bb83b075",
      "news_b3ff5c57ab83",
      "news_0005940a71eb",
      "news_0453d6a44ca5",
      "news_a5ac394466f4",
      "news_d0d0394aa91f",
      "news_0cdc41683356",
      "news_88250335fda8",
      "news_4c761072d832",
      "news_bf0baf839408",
      "news_f9821b295855",
      "news_72c2ccd7938a",
      "news_9d534e6cc822",
      "news_dd781b0609ae",
      "news_f123fba761c9"
    ],
    "沪深300": [
      "news_4c761072d832",
      "news_b644bbb9a95d"
    ],
    "ETF": [
      "news_a5ac394466f4",
      "news_d0d0394aa91f",
      "news_4c761072d832",
      "news_579b24f2956e",
      "news_b644bbb9a95d",
      "news_e3501344379f"
    ],
    "公募基金": [
      "news_72c2ccd7938a",
      "news_8d6ef6bc050e"
    ],
    "量化": [
      "news_5bff61db44f3",
      "news_a6944bc30dd2"
    ],
    "债券": [
      "news_5cd2982a9aac",
      "news_0930c31f05ae",
      "news_bd5385632694",
      "news_0ac59f4cbac9",
      "news_54dcabc86304",
      "news_60cf93707b46",
      "news_61c461f70827",
      "news_f01fbfd19744",
      "news_6002bd164c40"
    ],
    "国债": [
      "news_0930c31f05ae",
      "news_bd5385632694",
      "news_c334fdb2e897"
    ],
    "公司债": [
      "news_f01fbfd19744"
    ],
    "利率债": [
      "news_c334fdb2e897"
    ],
    "期货": [
      "news_0005940a71eb",
      "news_c334fdb2e897",
      "news_f123fba761c9"
    ],
    "IPO": [
      "news_c1742b277e82",
      "news_6d5b8a9c1ee1",
      "news_cdd86f29c366",
      "news_5021968a241e",
      "news_5b099370fb4a"
    ],
    "上市": [
      "news_2a8ebe4b3cd3",
      "news_39c8a8508dd0",
      "news_752aba286fab",
      "news_cdd86f29c366",
      "news_5021968a241e",
      "news_834d20d01348",
      "news_f01fbfd19744",
      "news_1e9b21a2bd1e",
      "news_ee6bd4c78a04",
      "news_5b099370fb4a",
      "news_21b95780347d",
      "news_1cbd70259ac6"
    ],
    "回购": [
      "news_752aba286fab",
      "news_2c60a765505b",
      "news_8da1b98dd4d7",
      "news_09788aadf588",
      "news_7b9e0f7226de",
      "news_5d3d2ef2da36",
      "news_7cf51d0e62cb"
    ],
    "券商": [
      "news_f9821b295855"
    ],
    "投行": [
      "news_8a740c65b909"
    ],
    "投资者": [
      "news_5d40d47ae085",
      "news_5852444f85d9",
      "news_bed1ca991d57",
      "news_0ac59f4cbac9",
      "news_54dcabc86304",
      "news_0c5cd9b84a87",
      "news_a6944bc30dd2",
      "news_6f978336f344",
      "news_579b24f2956e",
      "news_8a740c65b909",
      "news_6002bd164c40",
      "news_e36fb9494870",
      "news_4602ae88277f"
    ],
    "机构": [
      "news_f4368fc3e4c8",
      "news_5d40d47ae085",
      "news_39c8a8508dd0",
      "news_1d42f6014b7d",
      "news_970d6b79306a",
      "news_5852444f85d9",
      "news_7ddc543327c3",
      "news_23af74e6ee63",
      "news_ddee3682aad4",
      "news_8a740c65b909",
      "news_b644bbb9a95d",
      "news_3c1448b8852c",
      "news_f51954bcf53e",
      "news_77a41d21ba8f"
    ],
    "南向资金": [
      "news_2affeb6b0194",
      "news_650110869c87"
    ],
    "监管": [
      "news_5cd2982a9aac",
      "news_c489e0495fb1",
      "news_e9bea38179b5",
      "news_579b24f2956e",
      "news_a5936e898309",
      "news_e36fb9494870",
      "news_f51954bcf53e",
      "news_9311d639357a",
      "news_8d6ef6bc050e",
      "news_77a41d21ba8f"
    ],
    "金融监管": [
      "news_f51954bcf53e",
      "news_77a41d21ba8f"
    ],
    "证监会": [
      "news_e9bea38179b5",
      "news_d0d0394aa91f",
      "news_a5936e898309",
      "news_9311d639357a",
      "news_8d6ef6bc050e",
      "news_a0f53987808f",
      "news_77a41d21ba8f",
      "news_7c17994d15e5",
      "news_bba32dee9b76"
    ],
    "深交所": [
      "news_bd053cc30104",
      "news_c489e0495fb1"
    ],
    "上交所": [
      "news_b65ce0e7f4e9"
    ],
    "北交所": [
      "news_f01fbfd19744"
    ],
    "港交所": [
      "news_899bc1c187c8"
    ],
    "处罚": [
      "news_e9bea38179b5",
      "news_7b393e3668d6",
      "news_443c6b322619",
      "news_bfbc3edc0ac1",
      "news_a5936e898309",
      "news_9311d639357a"
    ],
    "罚单": [
      "news_7b393e3668d6",
      "news_443c6b322619"
    ],
    "通报": [
      "news_a4f3213f6a06",
      "news_212d05851da0",
      "news_bba32dee9b76"
    ],
    "条款": [
      "news_b2b4854ef271",
      "news_e0e6de777660"
    ],
    "通知": [
      "news_899bc1c187c8"
    ],
    "指引": [
      "news_a67c34bd66ea"
    ],
    "意见": [
      "news_f01fbfd19744",
      "news_4dd42411fa0e",
      "news_f51954bcf53e",
      "news_a0f53987808f",
      "news_bba32dee9b76"
    ],
    "规定": [
      "news_7b393e3668d6",
      "news_443c6b322619",
      "news_bfbc3edc0ac1"
    ],
    "法规": [
      "news_09788aadf588",
      "news_f01fbfd19744",
      "news_525446750b6e",
      "news_8d6ef6bc050e"
    ],
    "牌照": [
      "news_f4368fc3e4c8"
    ],
    "经济": [
      "news_bddbe4af0653",
      "news_ea8035542039",
      "news_bd5385632694",
      "news_ac7ed5bd27e4",
      "news_ae2bc5b79304",
      "news_e966081dee4b",
      "news_beb30277c1ee",
      "news_3c1448b8852c",
      "news_7d3349bbe971"
    ],
    "高质量发展": [
      "news_6002bd164c40"
    ],
    "GDP": [
      "news_ae2bc5b79304"
    ],
    "PMI": [
      "news_7ddc543327c3"
    ],
    "人民币": [
      "news_e48d6a68891d",
      "news_1095a097ddb1",
      "news_0f48e0320d4e",
      "news_7cacc5d8c56c"
    ],
    "离岸": [
      "news_8173209b430a"
    ],
    "美元": [
      "news_c1742b277e82",
      "news_6d5b8a9c1ee1",
      "news_9a43821df6a0",
      "news_cdd86f29c366",
      "news_b94b792dc78f",
      "news_6508d94545c5",
      "news_970d6b79306a",
      "news_c3affe1a40b7",
      "news_35ca15c60c48",
      "news_5021968a241e",
      "news_bed1ca991d57",
      "news_0ac59f4cbac9",
      "news_0f48e0320d4e",
      "news_a6944bc30dd2",
      "news_61c461f70827",
      "news_6f978336f344",
      "news_b2b4854ef271",
      "news_6a9d65e182ae",
      "news_a67c34bd66ea",
      "news_ee6bd4c78a04",
      "news_a145ee55fc9f",
      "news_5b099370fb4a",
      "news_21b95780347d",
      "news_6002bd164c40",
      "news_94b9ae202eda"
    ],
    "欧元": [
      "news_60cf93707b46",
      "news_cb1976d860a2"
    ],
    "日元": [
      "news_6f978336f344"
    ],
    "通胀": [
      "news_b94b792dc78f",
      "news_bd5385632694",
      "news_a67c34bd66ea",
      "news_1b9f77ce69ae"
    ],
    "衰退": [
      "news_a67c34bd66ea"
    ],
    "复苏": [
      "news_a4f3213f6a06",
      "news_445f7eb4cba7"
    ],
    "房地产": [
      "news_2f4a8b0ff7c8"
    ],
    "地产": [
      "news_2f4a8b0ff7c8"
    ],
    "消费": [
      "news_3edeef1bf200",
      "news_d6306c360858",
      "news_e58dae051bc5",
      "news_4dd42411fa0e",
      "news_d86f561fe326",
      "news_456932eea269"
    ],
    "投资": [
      "news_f4368fc3e4c8",
      "news_237bb10cbe55",
      "news_5d40d47ae085",
      "news_ea8035542039",
      "news_b94b792dc78f",
      "news_35ca15c60c48",
      "news_834d20d01348",
      "news_5852444f85d9",
      "news_bed1ca991d57",
      "news_44559887507f",
      "news_0ac59f4cbac9",
      "news_54dcabc86304",
      "news_a5ac394466f4",
      "news_d0d0394aa91f",
      "news_0c5cd9b84a87",
      "news_a6944bc30dd2",
      "news_61c461f70827",
      "news_6f978336f344",
      "news_6a9d65e182ae",
      "news_579b24f2956e",
      "news_8a740c65b909",
      "news_67a2a7374bb4",
      "news_e0e6de777660",
      "news_6002bd164c40",
      "news_e36fb9494870",
      "news_4602ae88277f",
      "news_899bc1c187c8",
      "news_8d6ef6bc050e"
    ],
    "出口": [
      "news_0eb21adb212a",
      "news_47bc21e49008",
      "news_ddee3682aad4",
      "news_1e9b21a2bd1e",
      "news_67a2a7374bb4"
    ],
    "进出口": [
      "news_0eb21adb212a"
    ],
    "贸易": [
      "news_44559887507f",
      "news_56d35946076a",
      "news_4eae06959cb2"
    ],
    "产业链": [
      "news_193cd3c2fb1d",
      "news_4c761072d832",
      "news_9d534e6cc822",
      "news_b65ce0e7f4e9"
    ],
    "供应链": [
      "news_2a8ebe4b3cd3",
      "news_6c0f1eb8c698",
      "news_67a2a7374bb4",
      "news_4036d94cd7bc",
      "news_94b9ae202eda",
      "news_2b8fc70ae5de"
    ],
    "就业": [
      "news_b94b792dc78f"
    ],
    "收入": [
      "news_6d5b8a9c1ee1",
      "news_01be16941020",
      "news_5d40d47ae085",
      "news_e48d6a68891d",
      "news_35ca15c60c48",
      "news_1095a097ddb1",
      "news_1ba1f82ae1ce",
      "news_8173209b430a",
      "news_a875f24372d1",
      "news_e44809b5bcc0",
      "news_849c73aea4e9"
    ],
    "黄金": [
      "news_bed1ca991d57",
      "news_a145ee55fc9f"
    ],
    "金价": [
      "news_bed1ca991d57",
      "news_a145ee55fc9f"
    ],
    "原油": [
      "news_b94b792dc78f",
      "news_bd5385632694"
    ],
    "大宗商品": [
      "news_0cdc41683356"
    ],
    "工业": [
      "news_2a8ebe4b3cd3",
      "news_5852444f85d9",
      "news_56d35946076a",
      "news_445f7eb4cba7",
      "news_ddee3682aad4",
      "news_dd781b0609ae",
      "news_7cacc5d8c56c"
    ],
    "利润": [
      "news_01be16941020",
      "news_e9bea38179b5",
      "news_e05e086e330d",
      "news_543fca8a547f",
      "news_4036d94cd7bc",
      "news_94b9ae202eda",
      "news_849c73aea4e9"
    ],
    "股市": [
      "news_dee3927488e8",
      "news_f9821b295855",
      "news_2eeacf6dff05",
      "news_72c2ccd7938a"
    ],
    "美联储": [
      "news_bd5385632694",
      "news_6c30a281f4ec"
    ],
    "财报": [
      "news_e48d6a68891d",
      "news_a6944bc30dd2",
      "news_6c30a281f4ec",
      "news_67a2a7374bb4",
      "news_21b95780347d",
      "news_94b9ae202eda"
    ],
    "信托": [
      "news_8173209b430a"
    ],
    "资管": [
      "news_54dcabc86304",
      "news_8a740c65b909"
    ],
    "净值": [
      "news_54dcabc86304"
    ],
    "CTA": [
      "news_a145ee55fc9f"
    ],
    "固收": [
      "news_579b24f2956e"
    ],
    "权益": [
      "news_e36fb9494870"
    ],
    "募集": [
      "news_c1742b277e82",
      "news_6d5b8a9c1ee1",
      "news_58dc1dd5b984"
    ],
    "赎回": [
      "news_54dcabc86304"
    ]
  },
  "sourceHealth": {
    "generatedAt": "2026-11-20T12:56:04.454Z",
    "status": "healthy",
    "totalSources": 12,
    "successfulSources": 10,
    "usableSources": 10,
    "failedSources": 2,
    "staleSources": 1,
    "fetchLimitReachedSources": 2,
    "coverageRate": 0.8333,
    "freshestPublishedAt": "2026-11-20T12:48:34.000Z",
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
        "addedCount": 8,
        "durationMs": 1802,
        "latestPublishedAt": "2026-11-20T12:42:52.000Z",
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
        "itemCount": 32,
        "rawItemCount": 32,
        "acceptedItemCount": 32,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": false,
        "addedCount": 26,
        "durationMs": 1985,
        "latestPublishedAt": "2026-11-20T12:47:03.000Z",
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
        "durationMs": 6334,
        "latestPublishedAt": "2026-11-20T12:46:09.000Z",
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
        "addedCount": 17,
        "durationMs": 5767,
        "latestPublishedAt": "2026-11-20T12:34:11.000Z",
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
        "itemCount": 50,
        "rawItemCount": 50,
        "acceptedItemCount": 50,
        "initialFetchLimit": 30,
        "fetchLimit": 50,
        "fetchLimitExpanded": true,
        "fetchLimitReached": true,
        "addedCount": 42,
        "durationMs": 19164,
        "latestPublishedAt": "2026-11-20T12:36:53.000Z",
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
        "durationMs": 210,
        "latestPublishedAt": "2026-11-20T12:48:34.000Z",
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
        "durationMs": 42832,
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
        "addedCount": 1,
        "durationMs": 75704,
        "latestPublishedAt": "2026-11-19T23:14:34.000Z",
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
        "durationMs": 160,
        "latestPublishedAt": "2026-11-20T04:36:11.000Z",
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
        "durationMs": 67,
        "latestPublishedAt": "2026-11-20T02:19:34.000Z",
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
        "latestPublishedAt": "2026-11-20T02:40:00.000Z",
        "usedEndpoint": null
      }
    ]
  },
  "historyStats": {
    "itemCount": 5000,
    "eventCount": 485,
    "retentionDays": 90
  },
  "macro": {
    "updatedAt": "2026-11-20T12:56:04.454Z",
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
        "value": "5.04%",
        "note": "较11月18日 5.07% 下降",
        "direction": "down",
        "asOf": "2026-11-19",
        "source": "美国财政部",
        "mode": "auto",
        "series": [
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
          },
          {
            "date": "2026-11-19",
            "value": 5.04
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
        "value": "$3,575",
        "note": "较11月19日 $3,666 下降",
        "direction": "down",
        "asOf": "2026-11-20",
        "source": "gold-api.com",
        "mode": "auto",
        "series": []
      },
      {
        "key": "cngold",
        "name": "国内金价",
        "value": "¥764.55",
        "note": "较11月19日 ¥801.93 下降",
        "direction": "down",
        "asOf": "2026-11-20",
        "source": "上海黄金交易所 Au99.99",
        "mode": "auto",
        "series": [
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
          },
          {
            "date": "2026-11-20",
            "value": 764.55
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
        "title": "美股跌破关键支撑、VIX逼近30，市场在下跌中等待一场反弹？",
        "mainItemId": "news_0453d6a44ca5",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_0453d6a44ca5"
        ],
        "historicalEvidenceCount": 49,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-11-20T12:56:04.454Z",
        "status": "developing",
        "summary": "Anthropic创纪录IPO一度提振美股期货，随后市场跳水，多空分歧显著。",
        "latestProgress": "Anthropic开盘大涨后美股跳水，专家分析VIX倒挂等效应放大跌势。"
      },
      {
        "eventId": "event_a3c5d0364922",
        "title": "多家头部公募发声：外部扰动逐步消化，A股有望迎估值修复窗口",
        "mainItemId": "news_72c2ccd7938a",
        "relatedItemIds": [
          "news_dd781b0609ae",
          "news_752aba286fab"
        ],
        "evidenceItemIds": [
          "news_dd781b0609ae",
          "news_72c2ccd7938a",
          "news_752aba286fab"
        ],
        "historicalEvidenceCount": 47,
        "firstSeenAt": "2026-09-30T13:30:13.189Z",
        "lastSeenAt": "2026-11-20T12:56:04.454Z",
        "status": "developing",
        "summary": "宁德时代11月19日回购85.05万股A股股份",
        "latestProgress": "11月20日A股三大指数集体收跌，超5200股飘绿"
      },
      {
        "eventId": "event_c68d651d4ff9",
        "title": "港股异动｜腾讯控股(00700)续跌超2% 年内股价已累跌超四成 AI投入加码令利润增速承压",
        "mainItemId": "news_bf0baf839408",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_bf0baf839408"
        ],
        "historicalEvidenceCount": 49,
        "firstSeenAt": "2026-09-30T15:04:45.414Z",
        "lastSeenAt": "2026-11-20T12:56:04.454Z",
        "status": "developing",
        "summary": "腾讯控股续跌超2%，年内累跌超四成，AI投入加码令利润增速承压。",
        "latestProgress": "11月20日港股脑动极光逆势涨超30%。"
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
      },
      {
        "eventId": "event_d1da54a5c439",
        "title": "财联社11月20日电，截至目前，南向资金净买入额达40亿港元。",
        "mainItemId": "news_650110869c87",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_650110869c87"
        ],
        "historicalEvidenceCount": 1,
        "firstSeenAt": "2026-11-20T07:18:44.054Z",
        "lastSeenAt": "2026-11-20T12:56:04.454Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_afd95bcad936",
        "title": "欧洲央行拉加德：将扩大货币互换协议覆盖范围",
        "mainItemId": "news_add32f1d16d6",
        "relatedItemIds": [
          "news_0930c31f05ae"
        ],
        "evidenceItemIds": [
          "news_add32f1d16d6",
          "news_0930c31f05ae"
        ],
        "historicalEvidenceCount": 3,
        "firstSeenAt": "2026-11-18T13:08:32.597Z",
        "lastSeenAt": "2026-11-20T12:56:04.454Z",
        "status": "developing",
        "summary": "欧洲央行或于25日讨论将银行最低准备金要求从1%提高至2%",
        "latestProgress": "欧元区展现韧性，AI、财政、地缘政治风险影响前景"
      },
      {
        "eventId": "event_ce5285e4f9c0",
        "title": "因违反金融统计相关规定等，建设银行江西省分行被罚503.48万元",
        "mainItemId": "news_443c6b322619",
        "relatedItemIds": [
          "news_237bb10cbe55"
        ],
        "evidenceItemIds": [
          "news_443c6b322619",
          "news_237bb10cbe55"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-11-20T12:56:04.454Z",
        "lastSeenAt": "2026-11-20T12:56:04.454Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_ec42523135ca",
        "title": "华尔街各大银行纷纷发布2027年标普500目标位，牛市前景明朗",
        "mainItemId": "news_a99f90ab0ff8",
        "relatedItemIds": [
          "news_b885bb83b075",
          "news_b3ff5c57ab83"
        ],
        "evidenceItemIds": [
          "news_a99f90ab0ff8",
          "news_b885bb83b075",
          "news_b3ff5c57ab83"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-11-20T12:56:04.454Z",
        "lastSeenAt": "2026-11-20T12:56:04.454Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_98366ccd33d5",
        "title": "工商银行云南省分行被罚100万元，涉违反金融统计相关规定",
        "mainItemId": "news_7b393e3668d6",
        "relatedItemIds": [
          "news_4602ae88277f"
        ],
        "evidenceItemIds": [
          "news_7b393e3668d6",
          "news_4602ae88277f"
        ],
        "historicalEvidenceCount": 0,
        "firstSeenAt": "2026-11-20T12:56:04.454Z",
        "lastSeenAt": "2026-11-20T12:56:04.454Z",
        "status": "developing",
        "summary": "",
        "latestProgress": ""
      },
      {
        "eventId": "event_d0c306eb334b",
        "title": "吴清主席在首届中国资本市场学术年会开幕式上的致辞",
        "mainItemId": "news_7c17994d15e5",
        "relatedItemIds": [],
        "evidenceItemIds": [
          "news_7c17994d15e5"
        ],
        "historicalEvidenceCount": 2,
        "firstSeenAt": "2026-11-14T06:23:15.009Z",
        "lastSeenAt": "2026-11-17T13:27:08.503Z",
        "status": "developing",
        "summary": "吴清在首届中国资本市场学术年会开幕式致辞，为中国资本市场高质量发展指明路径",
        "latestProgress": "2026年11月13日，吴清主席于首届中国资本市场学术年会开幕式发表致辞，释放资本市场改革利好"
      }
    ],
    "dailySummary": {
      "highlights": [
        {
          "text": "[86] 主要政策利率切换为隔夜后，LPR为什么没有降？ — 三重约束下的“按兵不动”。主要政策利率切换为隔夜逆回购利率之后，贷款市场报价利率（LPR）迎来首次报价。市场普遍关注，在",
          "evidenceItemIds": [
            "news_7cf51d0e62cb"
          ]
        },
        {
          "text": "[79] 中国证监会新闻发言人答记者问 — 问：近日，发现互联网上传播“监管要求基金公司上报全部产品AI敞口”相关信息，请问这一情况是否属实？\n答：该信息不属实。公",
          "evidenceItemIds": [
            "news_8d6ef6bc050e"
          ]
        },
        {
          "text": "[78] 连任未满一月 金融街证券董事长祝艳辉被留置 — 祝艳辉目前还任金融街集团党委副书记、副董事长、总经理，兼任北京华融综合投资有限公司董事长、总经理",
          "evidenceItemIds": [
            "news_899bc1c187c8"
          ]
        },
        {
          "text": "[73] 从金融法草案看金融资产管理公司功能定位 — AMC要在金融法、金融稳定法构建的风险防范化解体系中找准功能定位、发挥作用\n       　　近期，金融法草案提请全国人",
          "evidenceItemIds": [
            "news_f51954bcf53e"
          ]
        }
      ]
    },
    "eventChain": {
      "summary": "基于标题主题相似度和来源层级识别 6 组关联事件；仅表示内容相关，不代表已确认因果",
      "chains": [
        {
          "title": "A股四大指数集体低开，光通信、黄金等板块明显调整",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_dd781b0609ae"
          ],
          "nodes": [
            "A股四大指数集体低开，光通信、黄金等板块明显调整",
            "A股三大指数集体收跌，全市场超5200股飘绿"
          ]
        },
        {
          "title": "财联社11月20日电，截至目前，南向资金净买入额达40亿港元。",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [
            "news_650110869c87"
          ],
          "nodes": [
            "财联社11月20日电，截至目前，南向资金净买入额达40亿港元。",
            "财联社11月20日电，截至目前，南向资金净买入额达30亿港元。"
          ]
        },
        {
          "title": "港股异动｜腾讯控股(00700)续跌超2% 年内股价已累跌超四成 AI投入加码令利润增速承压",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [],
          "nodes": [
            "港股异动｜腾讯控股(00700)续跌超2% 年内股价已累跌超四成 AI投入加码令利润增速承压",
            "港股脑动极光逆势涨超30%",
            "港股异动 | 电力设备股跌幅扩大 软银砍单引发AI电源需求担忧 机构指订单高增或有所放缓",
            "港股异动 | 机器人概念股延续跌势 四季度起人形机器人融资遇冷 行业即将迎来首轮大幅出清"
          ]
        },
        {
          "title": "新加坡数据中心运营商DAYONE暂停美国IPO计划",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [],
          "nodes": [
            "新加坡数据中心运营商DAYONE暂停美国IPO计划",
            "新加坡数据中心运营商DAYONE据悉暂停美国IPO计划"
          ]
        },
        {
          "title": "Anthropic开盘大涨，一切看似完美！随后风云突变，美股跳水，发生了什么？",
          "causalLink": "多条原文围绕同一主题形成交叉印证；具体因果关系需以原始披露和后续事实为准",
          "evidenceItemIds": [],
          "nodes": [
            "Anthropic开盘大涨，一切看似完美！随后风云突变，美股跳水，发生了什么？",
            "付鹏：VIX倒挂叠加负Gamma效应，如何放大美股共振下杀？【付鹏说图表】",
            "史上最大IPO之后，美股崩了：Anthropic收涨17%，道指大跌1100点，纳指重挫2.3%",
            "Anthropic敲钟，美股跳水：AI狂欢要结束了吗？"
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
              "title": "A股三大指数集体收跌，全市场超5200股飘绿",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_dd781b0609ae"
              ]
            },
            {
              "title": "从持续积累到退休保障，养老金融需更关注真实需求",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": []
            },
            {
              "title": "保险红韵润陇原中国人寿以长征精神书写普惠金融新答卷",
              "impact": "行业动态，适合客户沟通素材",
              "suggestion": "持续跟踪，视客户情况选择性沟通",
              "evidenceItemIds": [
                "news_db87aa674dda"
              ]
            }
          ]
        },
        "pe": {
          "level": "high",
          "summary": "19 条基金/资管相关资讯",
          "items": [
            {
              "title": "上证50ETF尾盘爆量拉升，成交突破215亿创成交额历史天量",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_e3501344379f"
              ]
            },
            {
              "title": "“虾滑”冒充小鼠肿瘤？湘雅通报学术不端处分",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_212d05851da0"
              ]
            },
            {
              "title": "郭婷婷副部长在香港出席美元主权债券发行活动",
              "impact": "行业生态变化，关注中长期趋势",
              "suggestion": "简要了解，视情况纳入周报",
              "evidenceItemIds": [
                "news_6002bd164c40"
              ]
            }
          ]
        },
        "banking": {
          "level": "high",
          "summary": "18 条银行/货币政策相关资讯",
          "items": [
            {
              "title": "A股三大指数集体收跌，全市场超5200股飘绿",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_dd781b0609ae"
              ]
            },
            {
              "title": "工商银行发布贵金属市场波动风险提示",
              "impact": "银行经营动态，关注对信用风险的传导",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_4602ae88277f"
              ]
            },
            {
              "title": "主要政策利率切换为隔夜后，LPR为什么没有降？",
              "impact": "货币政策信号，影响资产定价和配置策略",
              "suggestion": "持续跟踪，关注对行业整体信用环境的边际影响",
              "evidenceItemIds": [
                "news_7cf51d0e62cb"
              ]
            }
          ]
        },
        "trust": {
          "level": "high",
          "summary": "3 条信托/财富管理相关资讯",
          "items": [
            {
              "title": "从持续积累到退休保障，养老金融需更关注真实需求",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": []
            },
            {
              "title": "重庆信托董事长翁振杰失联",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": []
            },
            {
              "title": "上海资产管理协会与新加坡投资管理协会联合举办“资本市场互联互通”对话会",
              "impact": "行业发展动态，关注业务机会",
              "suggestion": "视相关内容与自身业务关联度决定优先级",
              "evidenceItemIds": []
            }
          ]
        }
      }
    },
    "weeklyTrends": {
      "summary": "今日 150 条资讯，覆盖 4 个分类、8 个信源",
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
          "evidence": "今日 118 条行业动态资讯，行业层面信息充分，涉及多家机构/产品",
          "evidenceItemIds": [
            "news_212d05851da0",
            "news_21b95780347d",
            "news_f51954bcf53e"
          ],
          "direction": "平稳"
        },
        {
          "topic": "货币政策信号",
          "evidence": "出现 9 次货币政策相关关键词，关注利率/流动性走向",
          "evidenceItemIds": [
            "news_7cf51d0e62cb"
          ],
          "direction": "上升"
        },
        {
          "topic": "保险行业关注度",
          "evidence": "出现 8 条保险相关资讯，覆盖监管/市场/产品多维度",
          "evidenceItemIds": [
            "news_db87aa674dda",
            "news_7d3349bbe971",
            "news_d63e7207eecf"
          ],
          "direction": "上升"
        },
        {
          "topic": "市场行情波动",
          "evidence": "出现 56 条市场行情相关资讯，市场关注度提升",
          "evidenceItemIds": [
            "news_7cf51d0e62cb"
          ],
          "direction": "上升"
        }
      ]
    },
    "insurancePlanner": {
      "summary": "今日 8 条保险相关资讯，以下为规划师客户沟通参考",
      "talkingPoints": [
        {
          "topic": "A股三大指数集体收跌，全市场超5200股飘绿",
          "point": "保险行业经营数据发布，可作为与客户沟通时增强行业信心的素材",
          "action": "摘取关键数据，制作简洁的行业趋势卡片",
          "evidenceItemIds": [
            "news_dd781b0609ae"
          ]
        },
        {
          "topic": "从持续积累到退休保障，养老金融需更关注真实需求",
          "point": "养老金/年金市场动态，可用于退休规划客户的需求唤醒沟通",
          "action": "整理目标客户名单，准备年金利益演示",
          "evidenceItemIds": []
        },
        {
          "topic": "保险红韵润陇原中国人寿以长征精神书写普惠金融新答卷",
          "point": "保险科技/数字化转型进展，适合与高净值客户探讨行业前沿趋势",
          "action": "整理科技赋能案例，丰富客户沟通深度",
          "evidenceItemIds": [
            "news_db87aa674dda"
          ]
        },
        {
          "topic": "重估养老风险人保寿险尊启长红的破局解法",
          "point": "养老金/年金市场动态，可用于退休规划客户的需求唤醒沟通",
          "action": "整理目标客户名单，准备年金利益演示",
          "evidenceItemIds": [
            "news_054d2e45cc98"
          ]
        }
      ]
    },
    "peOperations": {
      "summary": "今日 20 条基金/资管相关资讯，以下为运营参考",
      "talkingPoints": [
        {
          "topic": "上证50ETF尾盘爆量拉升，成交突破215亿创成交额历史天量",
          "point": "投资策略/工具创新，可作为投教内容和客户沟通差异化素材",
          "action": "研究新策略逻辑，评估与现有产品线的互补性",
          "evidenceItemIds": [
            "news_e3501344379f"
          ]
        },
        {
          "topic": "“虾滑”冒充小鼠肿瘤？湘雅通报学术不端处分",
          "point": "基金发行和资金流向反映市场情绪，影响渠道策略",
          "action": "关注资金流向变化，调整渠道推广节奏和重点",
          "evidenceItemIds": [
            "news_212d05851da0"
          ]
        },
        {
          "topic": "郭婷婷副部长在香港出席美元主权债券发行活动",
          "point": "债券市场变化影响固收类产品表现，需评估组合风险暴露",
          "action": "更新固收策略展望，调整投资建议中的资产配置比例",
          "evidenceItemIds": [
            "news_6002bd164c40"
          ]
        },
        {
          "topic": "华泰证券辟谣：网传市场言论非公司研究所相关人员发表",
          "point": "监管动态影响产品发行和运营流程，需同步更新合规手册",
          "action": "梳理监管要点对现有产品的影响，准备合规简报",
          "evidenceItemIds": [
            "news_e36fb9494870"
          ]
        }
      ]
    },
    "marketOutlook": {
      "summary": "今日 64 条宏观经济/政策相关资讯",
      "outlooks": [
        {
          "topic": "商务部：1-10月我国农产品网上零售额增长12%",
          "content": "宏观经济数据反映基本面修复节奏，是判断大类资产配置方向的底层参考",
          "evidenceItemIds": [
            "news_456932eea269"
          ]
        },
        {
          "topic": "郭婷婷副部长在香港出席美元主权债券发行活动",
          "content": "财政政策发力影响基建投资和信用扩张节奏，关注配套政策的落地效果",
          "evidenceItemIds": [
            "news_6002bd164c40"
          ]
        },
        {
          "topic": "华泰证券辟谣：网传市场言论非公司研究所相关人员发表",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_e36fb9494870"
          ]
        },
        {
          "topic": "工商银行发布贵金属市场波动风险提示",
          "content": "该动态反映当前政策/市场走向，建议结合自身持仓和策略评估影响",
          "evidenceItemIds": [
            "news_4602ae88277f"
          ]
        }
      ]
    },
    "sourceGeneratedBy": "rules"
  }
};
window.KEYWORD_INDEX = {
  "保险": [
    "news_dd781b0609ae",
    "news_db87aa674dda",
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
  "中国平安": [
    "news_dd781b0609ae"
  ],
  "人保": [
    "news_054d2e45cc98",
    "news_d63e7207eecf"
  ],
  "银行": [
    "news_f4368fc3e4c8",
    "news_237bb10cbe55",
    "news_b885bb83b075",
    "news_b3ff5c57ab83",
    "news_b94b792dc78f",
    "news_bed1ca991d57",
    "news_88250335fda8",
    "news_dee3927488e8",
    "news_7b393e3668d6",
    "news_443c6b322619",
    "news_c334fdb2e897",
    "news_9d534e6cc822",
    "news_dd781b0609ae",
    "news_4602ae88277f",
    "news_7cf51d0e62cb",
    "news_a99f90ab0ff8",
    "news_77a41d21ba8f"
  ],
  "央行": [
    "news_0930c31f05ae",
    "news_bd5385632694",
    "news_add32f1d16d6"
  ],
  "商业银行": [
    "news_f4368fc3e4c8"
  ],
  "利率": [
    "news_e48d6a68891d",
    "news_1095a097ddb1",
    "news_c334fdb2e897",
    "news_a145ee55fc9f",
    "news_7cf51d0e62cb"
  ],
  "LPR": [
    "news_7cf51d0e62cb"
  ],
  "逆回购": [
    "news_7cf51d0e62cb"
  ],
  "降息": [
    "news_a67c34bd66ea"
  ],
  "加息": [
    "news_0930c31f05ae",
    "news_bd5385632694",
    "news_a67c34bd66ea",
    "news_a145ee55fc9f"
  ],
  "流动性": [
    "news_0cdc41683356",
    "news_a145ee55fc9f"
  ],
  "存款": [
    "news_443c6b322619"
  ],
  "股票": [
    "news_bd053cc30104",
    "news_e9bea38179b5",
    "news_0c5cd9b84a87",
    "news_23af74e6ee63",
    "news_ae2bc5b79304",
    "news_5b099370fb4a",
    "news_988ad1ffdd73"
  ],
  "A股": [
    "news_752aba286fab",
    "news_50778a3f970b",
    "news_8da1b98dd4d7",
    "news_7b9e0f7226de",
    "news_d0d0394aa91f",
    "news_dee3927488e8",
    "news_579b24f2956e",
    "news_f9821b295855",
    "news_2eeacf6dff05",
    "news_72c2ccd7938a",
    "news_dd781b0609ae"
  ],
  "港股": [
    "news_2affeb6b0194",
    "news_bf0baf839408"
  ],
  "美股": [
    "news_cdd86f29c366",
    "news_50778a3f970b",
    "news_b94b792dc78f",
    "news_2ab15d717d96",
    "news_0453d6a44ca5",
    "news_f123fba761c9"
  ],
  "大盘": [
    "news_dee3927488e8",
    "news_f9821b295855"
  ],
  "指数": [
    "news_b885bb83b075",
    "news_b3ff5c57ab83",
    "news_0005940a71eb",
    "news_0453d6a44ca5",
    "news_a5ac394466f4",
    "news_d0d0394aa91f",
    "news_0cdc41683356",
    "news_88250335fda8",
    "news_4c761072d832",
    "news_bf0baf839408",
    "news_f9821b295855",
    "news_72c2ccd7938a",
    "news_9d534e6cc822",
    "news_dd781b0609ae",
    "news_f123fba761c9"
  ],
  "沪深300": [
    "news_4c761072d832",
    "news_b644bbb9a95d"
  ],
  "ETF": [
    "news_a5ac394466f4",
    "news_d0d0394aa91f",
    "news_4c761072d832",
    "news_579b24f2956e",
    "news_b644bbb9a95d",
    "news_e3501344379f"
  ],
  "公募基金": [
    "news_72c2ccd7938a",
    "news_8d6ef6bc050e"
  ],
  "量化": [
    "news_5bff61db44f3",
    "news_a6944bc30dd2"
  ],
  "债券": [
    "news_5cd2982a9aac",
    "news_0930c31f05ae",
    "news_bd5385632694",
    "news_0ac59f4cbac9",
    "news_54dcabc86304",
    "news_60cf93707b46",
    "news_61c461f70827",
    "news_f01fbfd19744",
    "news_6002bd164c40"
  ],
  "国债": [
    "news_0930c31f05ae",
    "news_bd5385632694",
    "news_c334fdb2e897"
  ],
  "公司债": [
    "news_f01fbfd19744"
  ],
  "利率债": [
    "news_c334fdb2e897"
  ],
  "期货": [
    "news_0005940a71eb",
    "news_c334fdb2e897",
    "news_f123fba761c9"
  ],
  "IPO": [
    "news_c1742b277e82",
    "news_6d5b8a9c1ee1",
    "news_cdd86f29c366",
    "news_5021968a241e",
    "news_5b099370fb4a"
  ],
  "上市": [
    "news_2a8ebe4b3cd3",
    "news_39c8a8508dd0",
    "news_752aba286fab",
    "news_cdd86f29c366",
    "news_5021968a241e",
    "news_834d20d01348",
    "news_f01fbfd19744",
    "news_1e9b21a2bd1e",
    "news_ee6bd4c78a04",
    "news_5b099370fb4a",
    "news_21b95780347d",
    "news_1cbd70259ac6"
  ],
  "回购": [
    "news_752aba286fab",
    "news_2c60a765505b",
    "news_8da1b98dd4d7",
    "news_09788aadf588",
    "news_7b9e0f7226de",
    "news_5d3d2ef2da36",
    "news_7cf51d0e62cb"
  ],
  "券商": [
    "news_f9821b295855"
  ],
  "投行": [
    "news_8a740c65b909"
  ],
  "投资者": [
    "news_5d40d47ae085",
    "news_5852444f85d9",
    "news_bed1ca991d57",
    "news_0ac59f4cbac9",
    "news_54dcabc86304",
    "news_0c5cd9b84a87",
    "news_a6944bc30dd2",
    "news_6f978336f344",
    "news_579b24f2956e",
    "news_8a740c65b909",
    "news_6002bd164c40",
    "news_e36fb9494870",
    "news_4602ae88277f"
  ],
  "机构": [
    "news_f4368fc3e4c8",
    "news_5d40d47ae085",
    "news_39c8a8508dd0",
    "news_1d42f6014b7d",
    "news_970d6b79306a",
    "news_5852444f85d9",
    "news_7ddc543327c3",
    "news_23af74e6ee63",
    "news_ddee3682aad4",
    "news_8a740c65b909",
    "news_b644bbb9a95d",
    "news_3c1448b8852c",
    "news_f51954bcf53e",
    "news_77a41d21ba8f"
  ],
  "南向资金": [
    "news_2affeb6b0194",
    "news_650110869c87"
  ],
  "监管": [
    "news_5cd2982a9aac",
    "news_c489e0495fb1",
    "news_e9bea38179b5",
    "news_579b24f2956e",
    "news_a5936e898309",
    "news_e36fb9494870",
    "news_f51954bcf53e",
    "news_9311d639357a",
    "news_8d6ef6bc050e",
    "news_77a41d21ba8f"
  ],
  "金融监管": [
    "news_f51954bcf53e",
    "news_77a41d21ba8f"
  ],
  "证监会": [
    "news_e9bea38179b5",
    "news_d0d0394aa91f",
    "news_a5936e898309",
    "news_9311d639357a",
    "news_8d6ef6bc050e",
    "news_a0f53987808f",
    "news_77a41d21ba8f",
    "news_7c17994d15e5",
    "news_bba32dee9b76"
  ],
  "深交所": [
    "news_bd053cc30104",
    "news_c489e0495fb1"
  ],
  "上交所": [
    "news_b65ce0e7f4e9"
  ],
  "北交所": [
    "news_f01fbfd19744"
  ],
  "港交所": [
    "news_899bc1c187c8"
  ],
  "处罚": [
    "news_e9bea38179b5",
    "news_7b393e3668d6",
    "news_443c6b322619",
    "news_bfbc3edc0ac1",
    "news_a5936e898309",
    "news_9311d639357a"
  ],
  "罚单": [
    "news_7b393e3668d6",
    "news_443c6b322619"
  ],
  "通报": [
    "news_a4f3213f6a06",
    "news_212d05851da0",
    "news_bba32dee9b76"
  ],
  "条款": [
    "news_b2b4854ef271",
    "news_e0e6de777660"
  ],
  "通知": [
    "news_899bc1c187c8"
  ],
  "指引": [
    "news_a67c34bd66ea"
  ],
  "意见": [
    "news_f01fbfd19744",
    "news_4dd42411fa0e",
    "news_f51954bcf53e",
    "news_a0f53987808f",
    "news_bba32dee9b76"
  ],
  "规定": [
    "news_7b393e3668d6",
    "news_443c6b322619",
    "news_bfbc3edc0ac1"
  ],
  "法规": [
    "news_09788aadf588",
    "news_f01fbfd19744",
    "news_525446750b6e",
    "news_8d6ef6bc050e"
  ],
  "牌照": [
    "news_f4368fc3e4c8"
  ],
  "经济": [
    "news_bddbe4af0653",
    "news_ea8035542039",
    "news_bd5385632694",
    "news_ac7ed5bd27e4",
    "news_ae2bc5b79304",
    "news_e966081dee4b",
    "news_beb30277c1ee",
    "news_3c1448b8852c",
    "news_7d3349bbe971"
  ],
  "高质量发展": [
    "news_6002bd164c40"
  ],
  "GDP": [
    "news_ae2bc5b79304"
  ],
  "PMI": [
    "news_7ddc543327c3"
  ],
  "人民币": [
    "news_e48d6a68891d",
    "news_1095a097ddb1",
    "news_0f48e0320d4e",
    "news_7cacc5d8c56c"
  ],
  "离岸": [
    "news_8173209b430a"
  ],
  "美元": [
    "news_c1742b277e82",
    "news_6d5b8a9c1ee1",
    "news_9a43821df6a0",
    "news_cdd86f29c366",
    "news_b94b792dc78f",
    "news_6508d94545c5",
    "news_970d6b79306a",
    "news_c3affe1a40b7",
    "news_35ca15c60c48",
    "news_5021968a241e",
    "news_bed1ca991d57",
    "news_0ac59f4cbac9",
    "news_0f48e0320d4e",
    "news_a6944bc30dd2",
    "news_61c461f70827",
    "news_6f978336f344",
    "news_b2b4854ef271",
    "news_6a9d65e182ae",
    "news_a67c34bd66ea",
    "news_ee6bd4c78a04",
    "news_a145ee55fc9f",
    "news_5b099370fb4a",
    "news_21b95780347d",
    "news_6002bd164c40",
    "news_94b9ae202eda"
  ],
  "欧元": [
    "news_60cf93707b46",
    "news_cb1976d860a2"
  ],
  "日元": [
    "news_6f978336f344"
  ],
  "通胀": [
    "news_b94b792dc78f",
    "news_bd5385632694",
    "news_a67c34bd66ea",
    "news_1b9f77ce69ae"
  ],
  "衰退": [
    "news_a67c34bd66ea"
  ],
  "复苏": [
    "news_a4f3213f6a06",
    "news_445f7eb4cba7"
  ],
  "房地产": [
    "news_2f4a8b0ff7c8"
  ],
  "地产": [
    "news_2f4a8b0ff7c8"
  ],
  "消费": [
    "news_3edeef1bf200",
    "news_d6306c360858",
    "news_e58dae051bc5",
    "news_4dd42411fa0e",
    "news_d86f561fe326",
    "news_456932eea269"
  ],
  "投资": [
    "news_f4368fc3e4c8",
    "news_237bb10cbe55",
    "news_5d40d47ae085",
    "news_ea8035542039",
    "news_b94b792dc78f",
    "news_35ca15c60c48",
    "news_834d20d01348",
    "news_5852444f85d9",
    "news_bed1ca991d57",
    "news_44559887507f",
    "news_0ac59f4cbac9",
    "news_54dcabc86304",
    "news_a5ac394466f4",
    "news_d0d0394aa91f",
    "news_0c5cd9b84a87",
    "news_a6944bc30dd2",
    "news_61c461f70827",
    "news_6f978336f344",
    "news_6a9d65e182ae",
    "news_579b24f2956e",
    "news_8a740c65b909",
    "news_67a2a7374bb4",
    "news_e0e6de777660",
    "news_6002bd164c40",
    "news_e36fb9494870",
    "news_4602ae88277f",
    "news_899bc1c187c8",
    "news_8d6ef6bc050e"
  ],
  "出口": [
    "news_0eb21adb212a",
    "news_47bc21e49008",
    "news_ddee3682aad4",
    "news_1e9b21a2bd1e",
    "news_67a2a7374bb4"
  ],
  "进出口": [
    "news_0eb21adb212a"
  ],
  "贸易": [
    "news_44559887507f",
    "news_56d35946076a",
    "news_4eae06959cb2"
  ],
  "产业链": [
    "news_193cd3c2fb1d",
    "news_4c761072d832",
    "news_9d534e6cc822",
    "news_b65ce0e7f4e9"
  ],
  "供应链": [
    "news_2a8ebe4b3cd3",
    "news_6c0f1eb8c698",
    "news_67a2a7374bb4",
    "news_4036d94cd7bc",
    "news_94b9ae202eda",
    "news_2b8fc70ae5de"
  ],
  "就业": [
    "news_b94b792dc78f"
  ],
  "收入": [
    "news_6d5b8a9c1ee1",
    "news_01be16941020",
    "news_5d40d47ae085",
    "news_e48d6a68891d",
    "news_35ca15c60c48",
    "news_1095a097ddb1",
    "news_1ba1f82ae1ce",
    "news_8173209b430a",
    "news_a875f24372d1",
    "news_e44809b5bcc0",
    "news_849c73aea4e9"
  ],
  "黄金": [
    "news_bed1ca991d57",
    "news_a145ee55fc9f"
  ],
  "金价": [
    "news_bed1ca991d57",
    "news_a145ee55fc9f"
  ],
  "原油": [
    "news_b94b792dc78f",
    "news_bd5385632694"
  ],
  "大宗商品": [
    "news_0cdc41683356"
  ],
  "工业": [
    "news_2a8ebe4b3cd3",
    "news_5852444f85d9",
    "news_56d35946076a",
    "news_445f7eb4cba7",
    "news_ddee3682aad4",
    "news_dd781b0609ae",
    "news_7cacc5d8c56c"
  ],
  "利润": [
    "news_01be16941020",
    "news_e9bea38179b5",
    "news_e05e086e330d",
    "news_543fca8a547f",
    "news_4036d94cd7bc",
    "news_94b9ae202eda",
    "news_849c73aea4e9"
  ],
  "股市": [
    "news_dee3927488e8",
    "news_f9821b295855",
    "news_2eeacf6dff05",
    "news_72c2ccd7938a"
  ],
  "美联储": [
    "news_bd5385632694",
    "news_6c30a281f4ec"
  ],
  "财报": [
    "news_e48d6a68891d",
    "news_a6944bc30dd2",
    "news_6c30a281f4ec",
    "news_67a2a7374bb4",
    "news_21b95780347d",
    "news_94b9ae202eda"
  ],
  "信托": [
    "news_8173209b430a"
  ],
  "资管": [
    "news_54dcabc86304",
    "news_8a740c65b909"
  ],
  "净值": [
    "news_54dcabc86304"
  ],
  "CTA": [
    "news_a145ee55fc9f"
  ],
  "固收": [
    "news_579b24f2956e"
  ],
  "权益": [
    "news_e36fb9494870"
  ],
  "募集": [
    "news_c1742b277e82",
    "news_6d5b8a9c1ee1",
    "news_58dc1dd5b984"
  ],
  "赎回": [
    "news_54dcabc86304"
  ]
};
