'use strict';

/**
 * 定时任务监控。
 *
 * 关键前提：GitHub 自带的 schedule 是 best-effort 派发，不是精确时钟。
 * 本仓库实测（2026-09 至 2026-10，连续 40+ 次运行）延迟稳定在 5.3–6.7 小时，
 * 且每天 4 个槽位通常只有 2–3 个真正被派发。
 *
 * 因此这里的判定刻意**不对齐计划时刻**：能监控的是「数据管线最近还在动吗」，
 * 而不是「GitHub 有没有准点」。上一版按「计划时刻 + 固定 grace」判定，
 * grace(4h) < 实测延迟(5-7h)，导致每一个被检查的槽位都必然判定为缺失，
 * 连续 11 天产生误报（Issue #34）。
 */

/** 主数据 workflow（update.yml）的计划槽位，UTC。[时, 分] */
const SCHEDULE_SLOTS = {
  '15 0 * * *': [0, 15],
  '17 4 * * *': [4, 17],
  '19 8 * * *': [8, 19],
  '21 12 * * *': [12, 21],
};

/**
 * 单次运行的可容忍延迟（分钟）。
 * 默认 4 小时——低于实测常态延迟会产生纯噪声，故不再沿用旧的 45 分钟。
 */
const DEFAULT_DELAY_THRESHOLD_MINUTES = 240;

/**
 * 数据陈旧阈值（分钟）。默认 10 小时：
 * 计划间隔 4 小时 + 实测延迟约 7 小时，再留一个可被跳过的槽位余量。
 * 超过它才说明管线真的不动了，而不是 GitHub 慢。
 */
const DEFAULT_STALE_MINUTES = 600;

/** 某次运行相对其计划时刻延迟了多少分钟；未知槽位或非法时间返回 null。 */
function expectedDelayMinutes(schedule, createdAt) {
  const planned = SCHEDULE_SLOTS[schedule];
  if (!planned) return null;
  const actual = new Date(createdAt);
  if (Number.isNaN(actual.getTime())) return null;
  const expected = Date.UTC(actual.getUTCFullYear(), actual.getUTCMonth(), actual.getUTCDate(), planned[0], planned[1]);
  return Math.round((actual.getTime() - expected) / 60000);
}

/** 单次运行延迟告警（在数据 workflow 内部使用，阈值内返回 null）。 */
function buildDelayAlert(schedule, createdAt, thresholdMinutes) {
  const delay = expectedDelayMinutes(schedule, createdAt);
  const threshold = Number.isFinite(Number(thresholdMinutes)) ? Number(thresholdMinutes) : DEFAULT_DELAY_THRESHOLD_MINUTES;
  if (!Number.isFinite(delay) || delay <= threshold) return null;
  return {
    code: 'schedule-delayed',
    severity: 'warning',
    title: `定时任务延迟 ${delay} 分钟`,
    detail: `cron ${schedule}，实际创建时间 ${createdAt}，告警阈值 ${threshold} 分钟。`,
  };
}

function toMs(value) {
  if (value === null || value === undefined || value === '') return null;
  const ms = value instanceof Date ? value.getTime() : new Date(value).getTime();
  return Number.isFinite(ms) ? ms : null;
}

/**
 * 取最近一次「已结束且成功」的运行时间，返回 ISO 字符串。
 * 未结束、失败、取消或时间非法的记录一律忽略。
 * @param {Array<{createdAt?:string, runStartedAt?:string, status?:string, conclusion?:string}>} runs
 */
function latestSuccessfulRunAt(runs) {
  let latest = null;
  for (const run of Array.isArray(runs) ? runs : []) {
    if (!run || typeof run !== 'object') continue;
    if (run.status && run.status !== 'completed') continue;
    if (run.conclusion !== 'success') continue;
    const ms = toMs(run.createdAt || run.runStartedAt);
    if (ms === null) continue;
    if (latest === null || ms > latest) latest = ms;
  }
  return latest === null ? null : new Date(latest).toISOString();
}

/**
 * 数据新鲜度判定，与计划时刻解耦。
 * 返回 null 表示数据仍在正常更新；否则返回诊断对象供告警使用。
 * @param {string|null} lastRunAt 最近一次成功采集时间
 * @param {string|Date} now 当前时间
 * @param {number} [staleMinutes] 陈旧阈值
 */
function findStaleData(lastRunAt, now, staleMinutes) {
  const limit = Number.isFinite(Number(staleMinutes)) ? Number(staleMinutes) : DEFAULT_STALE_MINUTES;
  const nowMs = toMs(now);
  if (nowMs === null) return null;
  const lastMs = toMs(lastRunAt);
  if (lastMs === null) {
    return { lastRunAt: null, ageMinutes: null, staleMinutes: limit };
  }
  const ageMinutes = Math.round((nowMs - lastMs) / 60000);
  return ageMinutes > limit
    ? { lastRunAt: new Date(lastMs).toISOString(), ageMinutes, staleMinutes: limit }
    : null;
}

function main() {
  const alert = buildDelayAlert(process.env.FINHOT_SCHEDULE, process.env.FINHOT_RUN_CREATED_AT, process.env.FINHOT_SCHEDULE_DELAY_MINUTES);
  const outputFile = process.env.GITHUB_OUTPUT;
  if (outputFile) {
    const fs = require('fs');
    fs.appendFileSync(outputFile, `delayed=${alert ? 'true' : 'false'}\n`, 'utf8');
    fs.appendFileSync(outputFile, `delay_minutes=${alert ? alert.detail.match(/延迟\s(\d+)/)?.[1] || '' : ''}\n`, 'utf8');
  }
  process.stdout.write(`${JSON.stringify({ alert }, null, 2)}\n`);
}

if (require.main === module) main();

module.exports = {
  SCHEDULE_SLOTS,
  DEFAULT_DELAY_THRESHOLD_MINUTES,
  DEFAULT_STALE_MINUTES,
  buildDelayAlert,
  expectedDelayMinutes,
  findStaleData,
  latestSuccessfulRunAt,
};
