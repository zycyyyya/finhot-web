'use strict';

const assert = require('assert');
const { alertIssueBody, alertIssueTitle, buildFallbackReport, evaluateAlerts, hoursOld } = require('../scripts/alerts');
const {
  DEFAULT_DELAY_THRESHOLD_MINUTES,
  DEFAULT_STALE_MINUTES,
  buildDelayAlert,
  expectedDelayMinutes,
  findStaleData,
  latestSuccessfulRunAt,
} = require('../scripts/schedule-watch');

assert.strictEqual(expectedDelayMinutes('15 0 * * *', '2026-07-31T03:52:46Z'), 218);
assert.strictEqual(expectedDelayMinutes('17 4 * * *', '2026-07-31T04:20:00Z'), 3);
assert.strictEqual(buildDelayAlert('17 4 * * *', '2026-07-31T04:20:00Z', 45), null);
assert.strictEqual(buildDelayAlert('15 0 * * *', '2026-07-31T03:52:46Z', 45).code, 'schedule-delayed');

// 阈值默认值本身就是防回归的一部分：45 分钟对 GitHub 免费调度毫无信号价值，
// 本仓库实测延迟 5.3-6.7 小时，任何低于常态延迟的阈值都只会刷噪声。
assert.strictEqual(DEFAULT_DELAY_THRESHOLD_MINUTES, 240);
assert.strictEqual(DEFAULT_STALE_MINUTES, 600);
// 实测样本：cron 17 4 * * *（04:17 UTC）于 10:55:13Z 启动，延迟 6 小时 38 分。
assert.strictEqual(expectedDelayMinutes('17 4 * * *', '2026-10-01T10:55:13Z'), 398);
assert.strictEqual(buildDelayAlert('17 4 * * *', '2026-10-01T10:55:13Z').code, 'schedule-delayed');
// 线上配置阈值 8 小时：常态延迟不再告警。
assert.strictEqual(buildDelayAlert('17 4 * * *', '2026-10-01T10:55:13Z', 480), null);

// --- 数据新鲜度判定（Issue #34 的修复核心）---
const mixedRuns = [
  { createdAt: '2026-10-01T10:55:13Z', status: 'completed', conclusion: 'failure' },
  { createdAt: '2026-09-30T18:01:02Z', status: 'completed', conclusion: 'success' },
  { createdAt: '2026-09-30T14:58:57Z', status: 'completed', conclusion: 'success' },
  { createdAt: '2026-09-30T10:27:41Z', status: 'in_progress', conclusion: null },
  { createdAt: 'not-a-date', status: 'completed', conclusion: 'success' },
];
assert.strictEqual(latestSuccessfulRunAt(mixedRuns), '2026-09-30T18:01:02.000Z');
assert.strictEqual(latestSuccessfulRunAt([]), null);
assert.strictEqual(latestSuccessfulRunAt(null), null);
assert.strictEqual(latestSuccessfulRunAt([{ createdAt: '2026-10-01T00:00:00Z', status: 'completed', conclusion: 'cancelled' }]), null);
// 兼容 GitHub API 的 run_started_at 字段名。
assert.strictEqual(latestSuccessfulRunAt([{ runStartedAt: '2026-10-01T05:00:00Z', status: 'completed', conclusion: 'success' }]), '2026-10-01T05:00:00.000Z');

// 距上次成功 6 小时 → 新鲜；11 小时 → 陈旧；从未成功 → 陈旧。
assert.strictEqual(findStaleData('2026-10-01T10:00:00Z', '2026-10-01T16:00:00Z'), null);
const staleSample = findStaleData('2026-09-30T23:00:00Z', '2026-10-01T10:00:00Z');
assert.strictEqual(staleSample.ageMinutes, 660);
assert.strictEqual(staleSample.staleMinutes, 600);
assert.strictEqual(findStaleData('2026-09-30T23:00:00Z', '2026-10-01T10:00:00Z', 720), null);
assert.strictEqual(findStaleData(null, '2026-10-01T10:00:00Z').lastRunAt, null);
assert.strictEqual(findStaleData(null, '2026-10-01T10:00:00Z').ageMinutes, null);

// 防回归：这是本仓库实测的典型一天——每个槽位都比计划晚 5-7 小时启动。
// 旧逻辑按「计划时刻 + 4 小时 grace」判定，会把这四个槽位全部判为缺失，
// 于是 Issue #34 连续 11 天每 4 小时追加一条误报。新逻辑只看数据是否还在更新。
const typicalDay = [
  { createdAt: '2026-10-01T06:00:56Z', status: 'completed', conclusion: 'failure' }, // cron 15 0，延迟 5.8h
  { createdAt: '2026-10-01T10:55:13Z', status: 'completed', conclusion: 'success' }, // cron 17 4，延迟 6.6h
  { createdAt: '2026-09-30T18:00:52Z', status: 'completed', conclusion: 'failure' }, // cron 21 12，延迟 5.7h
  { createdAt: '2026-09-30T14:58:45Z', status: 'completed', conclusion: 'success' }, // cron 19 8，延迟 6.7h
];
assert.strictEqual(findStaleData(latestSuccessfulRunAt(typicalDay), '2026-10-01T13:00:00Z'), null);

assert.ok(hoursOld('2026-07-30T00:00:00Z', '2026-07-31T02:00:00Z') > 24);
const fallbackReport = buildFallbackReport('2026-07-31T05:00:00Z');
assert.strictEqual(fallbackReport.reportStatus, 'missing');
assert.ok(evaluateAlerts(fallbackReport, { consecutiveFailures: 0, sourceLimitRuns: {} }).alerts.some(alert => alert.code === 'health-report-missing'));

const baseReport = {
  generatedAt: '2026-07-31T04:30:00Z',
  published: true,
  trigger: { event: 'schedule', schedule: '17 4 * * *', runId: '123', runCreatedAt: '2026-07-31T04:20:00Z' },
  summary: { coverageRate: 0.7, usableSources: 7, totalSources: 10, freshestPublishedAt: '2026-07-31T04:20:00Z' },
  ai: { requestedMode: 'cached', generatedBy: 'cached', sourceGeneratedBy: 'llm' },
  sources: [{ sourceId: 'source_a', sourceName: '来源A', fetchLimitReached: true, fetchLimit: 50, acceptedItemCount: 50 }],
};
let result = evaluateAlerts(baseReport, { consecutiveFailures: 0, sourceLimitRuns: {}, scheduleRuns: {} });
assert.strictEqual(result.alerts.length, 0);
const workflowFailed = evaluateAlerts(baseReport, { consecutiveFailures: 0, sourceLimitRuns: {}, scheduleRuns: {} }, { workflowFailed: true });
assert.strictEqual(workflowFailed.state.consecutiveFailures, 1);
assert.ok(workflowFailed.alerts.some(alert => alert.code === 'workflow-step-failed'));
assert.strictEqual(result.state.sourceLimitRuns.source_a, 1);
result = evaluateAlerts(baseReport, result.state);
assert.strictEqual(result.alerts.length, 0);
result = evaluateAlerts(baseReport, result.state);
assert.ok(result.alerts.some(alert => alert.code === 'source-limit-repeated'));

const failureReport = {
  ...baseReport,
  published: false,
  trigger: { event: 'schedule', schedule: '15 0 * * *', runId: '456', runCreatedAt: '2026-07-31T03:52:46Z' },
  summary: { coverageRate: 0.4, usableSources: 4, totalSources: 10, freshestPublishedAt: '2026-07-29T00:00:00Z' },
  ai: { requestedMode: 'full', generatedBy: 'rules', sourceGeneratedBy: 'rules' },
  historyWriteError: 'token=secret write failed',
};
const failed = evaluateAlerts(failureReport, { consecutiveFailures: 1, sourceLimitRuns: {} }, { scheduleDelayMinutes: 45 });
const codes = new Set(failed.alerts.map(alert => alert.code));
['consecutive-failures', 'low-coverage', 'stale-data', 'schedule-delayed', 'primary-llm-fallback', 'history-write-failed'].forEach(code => assert.ok(codes.has(code)));

// 218 分钟的延迟在默认阈值（4 小时）下不再告警——线上实际配置为 8 小时。
const defaultThresholdRun = evaluateAlerts(failureReport, { consecutiveFailures: 1, sourceLimitRuns: {} });
assert.ok(!defaultThresholdRun.alerts.some(alert => alert.code === 'schedule-delayed'));
assert.strictEqual(failed.alerts.find(alert => alert.code === 'history-write-failed').detail.includes('secret'), false);
assert.match(alertIssueTitle(failed.alerts), /^\[finhot-alert\]/);
assert.ok(alertIssueBody(failed.alerts, failureReport).includes('自动监控告警'));

console.log('alert tests passed');
