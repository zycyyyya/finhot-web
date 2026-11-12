#!/usr/bin/env bash
# 在 CI 里提交并推送生成的数据文件，遇到竞态时自动重试。
#
# 为什么需要这个：本工作流一轮要跑十几到二十分钟（抓几十个源 + 调 LLM）。
# 只要这期间有人往 main 推过任何东西，结束时裸的 `git push` 必然被拒：
#     ! [rejected]  main -> main (fetch first)
# 整轮取数、API 配额、LLM token 全部作废，而且只有最后一步报红，很容易被
# 误读成"取数失败"。
#
# 重试方式刻意不用 merge / rebase：
#   - merge 需要共同祖先，而 actions/checkout 默认只拉一个 commit（depth=1），
#     浅克隆下会直接报 unrelated histories；
#   - rebase 遇到 data.js 这种整文件重写的产物，冲突处理只会更乱。
# 我们的提交内容是"完整重新生成的数据"，不需要和上一版合并，所以正确做法是
# 把这次提交挪到远端最新之上重新落一次（reset --soft + 重新 add），
# 线性历史、不依赖 clone 深度、冲突也无从发生。
set -euo pipefail

if [ "$#" -lt 2 ]; then
  echo "usage: ci-push.sh <commit-message> <file> [file...]" >&2
  exit 2
fi

MSG="$1"
shift
FILES=("$@")

git config user.name "github-actions[bot]"
git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

if git diff --quiet -- "${FILES[@]}"; then
  echo "No changes in: ${FILES[*]}"
  exit 0
fi

git add "${FILES[@]}"
if git diff --cached --quiet; then
  echo "Nothing staged after add"
  exit 0
fi

git commit -m "$MSG"
echo "committed: $(git log -1 --pretty=%h) $MSG"

MAX_ATTEMPTS=4
for attempt in $(seq 1 "$MAX_ATTEMPTS"); do
  push_out=$(git push origin HEAD:main 2>&1) && push_ok=1 || push_ok=0
  echo "$push_out"

  if [ "$push_ok" = "1" ]; then
    echo "::notice::pushed on attempt ${attempt}/${MAX_ATTEMPTS}"
    exit 0
  fi

  # 只有"远端比我们新"这类竞态才值得重试。权限、网络、hook 拒绝重试也没用，
  # 早失败早暴露，别把真正的配置问题拖成 4 次无意义的重试。
  if ! grep -qiE "rejected|fetch first|non-fast-forward" <<<"$push_out"; then
    echo "::error::push failed for a non-race reason, not retrying"
    exit 1
  fi

  echo "push rejected (attempt ${attempt}/${MAX_ATTEMPTS}), moving commit onto latest main"
  git fetch --depth=1 origin main
  # 必须用 --mixed 而不是 --soft：--soft 只挪 HEAD、index 还停在旧提交的树上，
  # 而旧树里没有"这轮运行期间别人新推的文件"，提交时就等于把它们删掉。
  # 实测会输出 `delete mode 100644 <别人新增的文件>`。
  # --mixed 把 index 重置到远端最新的树、工作区不动，再 add 我们的数据文件，
  # 提交结果就是"远端最新 + 我们的数据改动"，别人的增删原样保留。
  git reset --mixed FETCH_HEAD
  git add "${FILES[@]}"

  # 远端可能已经有人提交了完全相同的内容，那就没有必要再推一次。
  if git diff --cached --quiet; then
    echo "::notice::remote already contains these data files, nothing to push"
    exit 0
  fi

  git commit -m "$MSG"
  sleep $((attempt * 3))
done

echo "::error::push still rejected after ${MAX_ATTEMPTS} attempts"
exit 1
