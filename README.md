<p align="center">
  <strong>finhot-web</strong><br/>
  <em>金融保险圈精选资讯 —— 保险 · 私募 · 投教</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-2.3.0-blue" alt="version"/>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="license"/>
  <img src="https://img.shields.io/badge/framework-pure_static-lightgrey" alt="static"/>
  <img src="https://img.shields.io/badge/deploy-GitHub_Pages-success" alt="deploy"/>
</p>

---

## 它是什么

finhot-web 是 [finhot](https://github.com/zycyyyya/finhot) 数据引擎的前端展示站点，面向保险运营、二级市场投教和私募销售运营三类从业者。每日自动更新精选资讯，按业务场景组织浏览。

## 页面结构

| 栏目 | 说明 |
|---|---|
| **今日精选** | 24 条场景配额精选（保险 6 / 私募 7 / 投教 11），按各场景适配度排名 |
| **保险** | 保险/险企/寿险/财险/健康险/养老/偿付能力等 |
| **私募** | 私募/量化/对冲/FOF/净值/仓位/策略等 |
| **投教** | A股/港股/美股/指数/ETF/央行/宏观/财报等 |
| **全部** | 全部 150 条资讯，按时间倒序 |
| **AI 日报** | AI 生成每日摘要、事件链、三场景话术和趋势信号 |
| **关于** | 信源声明、合规边界、数据健康状态 |

每条资讯展示：来源、时间、从业价值分（0-100）、唯一主场景徽章、兼容场景提示、入选理由、内容标签。

## 双层筛选

- **一级导航**：今日精选 / 保险 / 私募 / 投教 / 全部
- **二级内容标签**：官方监管 / 产品动态 / 行业动态 / 深度研究 / 快讯 / 观点 / 仅看权威源
- 二级标签与一级栏目组合筛选，当前无匹配结果的标签自动隐藏

## 技术特点

- **纯静态站点**，无需后端，GitHub Pages 直接部署
- **深色主题**，专为资讯浏览优化的金融仪表板风格
- 每张卡片可点击直达原始出处，`rel="noopener noreferrer"`
- XSS 防护：所有用户可见字段 `escapeHtml()`
- URL 安全：仅允许 `http:` / `https:` 协议
- `focus-visible` 键盘无障碍
- 移动端自适应，横向滚动导航

## 自动更新

北京时间每日 08:15 主运行（完整 LLM 分析），12:17、16:19、20:21 错峰保底运行（复用 AI 内容 + 增量采集），数据质量门通过后自动提交并部署。

## 数据质量

- 来源覆盖率 ≥ 90%
- 证据引用悬空 = 0
- 近似标题去重
- 发布时间可信化（无时间不冒充当日）
- AI 内容经结构/枚举/长度/证据 ID 四重校验

## 合规声明

本站仅提供公开信息聚合、分类、评分与 AI 辅助摘要，不构成任何投资建议、资产配置建议、保险产品推荐、收益预测或收益承诺。详见过关于页完整合规声明。

## License

MIT
