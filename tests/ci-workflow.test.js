// 数据工作流的提交推送契约。
//
// 背景：一轮运行要跑十几到二十分钟，期间只要有人往 main 推过东西，结束时
// 裸的 `git push` 必然被拒（! [rejected] ... fetch first），整轮取数、
// API 配额和 LLM token 全部作废，而且只有最后一步报红，容易被误读成取数故障。
// 这里锁住"必须走带重试的脚本"和几个曾经验证过的实现细节。
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const workflow = fs.readFileSync(path.join(root, '.github/workflows/update.yml'), 'utf8');
const scriptPath = path.join(root, 'scripts/ci-push.sh');

assert.ok(fs.existsSync(scriptPath), 'scripts/ci-push.sh 必须存在');
const scriptBuf = fs.readFileSync(scriptPath);
const script = scriptBuf.toString('utf8');

// 工作流里不允许再出现直接调用的 `git push`——推送逻辑全部收在重试脚本里，
// 分散写两遍就会有一处漏掉重试（这次就是两处都漏）。
const barePushLines = workflow
  .split('\n')
  .map((line, i) => ({ line: line.trim(), no: i + 1 }))
  .filter(({ line }) => /^git push\b/.test(line));
assert.deepStrictEqual(
  barePushLines.map(x => `L${x.no}: ${x.line}`),
  [],
  'update.yml 里不能有裸 git push，必须走 scripts/ci-push.sh'
);

assert.ok(
  workflow.includes('bash scripts/ci-push.sh "chore: update finhot data"'),
  '数据提交必须调用 ci-push.sh'
);
assert.ok(
  workflow.includes('bash scripts/ci-push.sh "chore: persist finhot alert state"'),
  '失败态的 alert state 提交也必须调用 ci-push.sh'
);

// 重试必须是"--移动提交"而不是 merge/rebase：
// merge 需要共同祖先，而 actions/checkout 默认 depth=1，浅克隆下直接
// unrelated histories；rebase 遇到 data.js 这种整文件重写的产物更难收拾。
assert.ok(
  /git reset --mixed FETCH_HEAD/.test(script),
  '重试必须用 reset --mixed，让 index 跟随远端最新的树'
);
assert.ok(
  !/git reset --soft/.test(script),
  '不能用 reset --soft：index 会停在旧树，提交时等于删掉别人这期间新推的文件（实测输出 delete mode 100644）'
);
assert.ok(
  !/git (merge|rebase) /.test(script),
  '不要用 merge/rebase 处理竞态，浅克隆下不可靠'
);

// 非竞态失败（权限、仓库不存在、hook 拒绝）重试没有意义，必须早退。
assert.ok(
  /rejected\|fetch first\|non-fast-forward/.test(script),
  '必须区分竞态与非竞态失败，只对竞态重试'
);
assert.ok(
  /non-race reason/.test(script),
  '非竞态失败要有明确的早退分支'
);

// 远端已经包含相同内容时要正常返回，不制造空提交。
assert.ok(
  /remote already contains these data files/.test(script),
  '重试时需要判断远端是否已含相同内容'
);

// CI 是 Linux runner，CRLF 会让 bash 报 `\r: command not found`。
assert.ok(
  !scriptBuf.includes(Buffer.from('\r\n')),
  'ci-push.sh 必须是 LF 换行，否则 CI 上 bash 无法执行'
);

console.log('ci-workflow tests passed');
