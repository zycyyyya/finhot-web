'use strict';

const assert = require('assert');
const { alertIssueBody, alertIssueTitle, buildFallbackReport, evaluateAlerts, hoursOld } = require('../scripts/alerts');
const { buildDelayAlert, expectedDelayMinutes, findMissingSchedule, latestExpectedSlot } = require('../scripts/schedule-watch');

assert.strictEqual(expectedDelayMinutes('15 0 * * *', '2026-07-31T03:52:46Z'), 218);
assert.strictEqual(expectedDelayMinutes('17 4 * * *', '2026-07-31T04:20:00Z'), 3);
assert.strictEqual(buildDelayAlert('17 4 * * *', '2026-07-31T04:20:00Z', 45), null);
assert.strictEqual(buildDelayAlert('15 0 * * *', '2026-07-31T03:52:46Z', 45).code, 'schedule-delayed');
assert.deepStrictEqual(latestExpectedSlot('2026-07-31T05:50:00Z', 90), {
  schedule: '17 4 * * *',
  expectedAt: '2026-07-31T04:17:00.000Z',
});
assert.strictEqual(findMissingSchedule({
  '17 4 * * *': '2026-07-31T04:20:00Z',
}, '2026-07-31T05:50:00Z', 90), null);
assert.strictEqual(findMissingSchedule({
  '15 0 * * *': '2026-07-31T04:20:00Z',
}, '2026-07-31T05:50:00Z', 90).schedule, '17 4 * * *');
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
const failed = evaluateAlerts(failureReport, { consecutiveFailures: 1, sourceLimitRuns: {} });
const codes = new Set(failed.alerts.map(alert => alert.code));
['consecutive-failures', 'low-coverage', 'stale-data', 'schedule-delayed', 'primary-llm-fallback', 'history-write-failed'].forEach(code => assert.ok(codes.has(code)));
assert.strictEqual(failed.alerts.find(alert => alert.code === 'history-write-failed').detail.includes('secret'), false);
assert.match(alertIssueTitle(failed.alerts), /^\[finhot-alert\]/);
assert.ok(alertIssueBody(failed.alerts, failureReport).includes('自动监控告警'));

console.log('alert tests passed');
