'use strict';

const { isAdByTitle, parseListPage, parseArticlePage } = require('../scripts/huibaoxian');

function assert(cond, msg) {
  if (!cond) throw new Error(msg || 'assertion failed');
}

// === 广告过滤测试 ===
const adCases = [
  ['扫码领取免费保险', true],
  ['限时抢购：爆款年金险', true],
  ['免费领取价值299元保障礼包', true],
  ['福利放送：送体检', true],
  ['点击领取专属方案', true],
  ['文末有惊喜入口', true],
  ['预约咨询，一对一服务', true],
  ['立即购买，锁定收益', true],
  ['爆款推荐：2026必买年金', true],
  ['闭眼入的增额寿', true],
  ['薅羊毛：免费领保险', true],
  ['必买9款分红险', true],
  ['这本工具书告诉你答案', true],
  ['这本不可多得的书值得一读', true],
  ['必读推荐书籍', true],
  ['慧保周报：监管新政解读', false],
  ['人保平安太保创近年最佳', false],
  ['7月银保保费暴跌60%', false],
  ['蔡霆拟出任平安人寿董事长', false],
];

for (const [title, expected] of adCases) {
  const result = isAdByTitle(title);
  assert(result === expected, `isAdByTitle("${title}") should be ${expected}, got ${result}`);
}
console.log('ad filter tests passed');

// === 列表页解析测试 ===
const listHtml = `
<dl>
  <dt><a href="http://www.huibaoxian.com.cn//htm/kb/20260928/6165.html" target="_blank">
    <img src="/uploads/1.jpg" alt="title" width="250" height="165"/></a></dt>
  <dd>
    <h3><span class="dj">行业动态</span><a href="http://www.huibaoxian.com.cn//htm/kb/20260928/6165.html"
      title="慧保周报(2026年第39周)|监管干部被查"><b>慧保周报(2026年第39周)|监管干部被查</b></a></h3>
    <p>友邦、中宏、汇丰人寿出资23.22亿元成立股权投资合伙企业...</p>
    <div class="date">行业动态 / 2026-09-28</div>
  </dd>
</dl>
<dl>
  <dt><a href="http://www.huibaoxian.com.cn//htm/kb/20260928/6163.html" target="_blank">
    <img src="/uploads/2.jpg" alt="title2" width="250" height="165"/></a></dt>
  <dd>
    <h3><span class="dj">行业动态</span><a href="http://www.huibaoxian.com.cn//htm/kb/20260928/6163.html"
      title="扫码领取免费保险"><b>扫码领取免费保险</b></a></h3>
    <p>能力升级的窗口不会一直打开...</p>
    <div class="date">行业动态 / 2026-09-28</div>
  </dd>
</dl>
`;

const listItems = parseListPage(listHtml, 'kb');
assert(listItems.length === 1, `expected 1 item after ad filter, got ${listItems.length}`);
assert(listItems[0].title === '慧保周报(2026年第39周)|监管干部被查', `title mismatch: ${listItems[0].title}`);
assert(listItems[0].link.includes('6165.html'), `link mismatch: ${listItems[0].link}`);
assert(listItems[0].dateStr === '2026-09-28', `date mismatch: ${listItems[0].dateStr}`);
assert(listItems[0].summary.includes('友邦'), `summary mismatch: ${listItems[0].summary}`);
console.log('list parse tests passed');

// === 详情页解析测试 ===
const articleHtml = `
<div class="content">
  <div class="content_home">
    <div class="home_left">
      <div class="hl_content">
        <div class="hl_c_title">
          <h2>慧保周报(2026年第39周)|监管干部被查<i class="tag">行业动态</i></h2>
        </div>
        <div class="hl_c_twid">
          <a class="source fl-l" href="javascript:;" style="color:#a6a6a6">慧保天下</a>
          / 未知 / 2026-09-28 11:31 /
        </div>
        <div class="hl_c_wcid">友邦、中宏、汇丰人寿出资23.22亿元成立股权投资合伙企业</div>
        <div class="hl_body">
          <p><strong>热门资讯</strong><br/>监管新政将于9月30日起实施</p>
          <p>详细内容...</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="content_right"></div>
`;

const parsed = parseArticlePage(articleHtml);
assert(parsed.title === '慧保周报(2026年第39周)|监管干部被查', `article title mismatch: ${parsed.title}`);
assert(parsed.publishedAt === '2026-09-28 11:31', `publishedAt mismatch: ${parsed.publishedAt}`);
assert(parsed.summary.includes('友邦'), `summary mismatch: ${parsed.summary}`);
assert(parsed.content.includes('监管新政'), `content mismatch: ${parsed.content}`);
console.log('article parse tests passed');

// === 相对链接补全测试 ===
const relHtml = `
<dl>
  <dd>
    <h3><span class="dj">政策解读</span><a href="/htm/yc/20260920/6150.html" title="test">test</a></h3>
    <p>summary</p>
  </dd>
</dl>
`;
const relItems = parseListPage(relHtml, 'yc');
assert(relItems[0].link.startsWith('http://www.huibaoxian.com.cn'), `relative link not resolved: ${relItems[0].link}`);
console.log('relative link tests passed');

console.log('huibaoxian tests passed');
