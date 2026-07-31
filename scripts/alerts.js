'use strict';

const fs = require('fs');
const path = require('path');
const { sanitizeError } = require('./health');
const { buildDelayAlert } = require('./schedule-watch');

const REPORT_FILE = path.resolve(__dirname, '..', 'reports', 'source-health.json');
const STATE_FILE = path.resolve(__dirname, '..', 'data', 'alert-state.json');
const ALERTS_FILE = path.resolve(__dirname, '..', 'reports', 'alerts.json');
const DEFAULT_CONSECUTIVE_LIMIT_RUNS = 3;

function loadJson(file, fallback) {
  try {
    const value = JSON.parse(fs.readFileSync(file, 'utf8'));
    return value && typeof value === 'object' ? value : fallback;
  } catch {
    return fallback;
  }
}

function loadAlertState() {
  const state = loadJson(STATE_FILE, { schemaVersion: '1.0', consecutiveFailures: 0, sourceLimitRuns: {}, scheduleRuns: {} });
  return {
    schemaVersion: '1.0',
    updatedAt: state.updatedAt || null,
    consecutiveFailures: Number.isInteger(state.consecutiveFailures) ? state.consecutiveFailures : 0,
    sourceLimitRuns: state.sourceLimitRuns && typeof state.sourceLimitRuns === 'object' ? state.sourceLimitRuns : {},
    scheduleRuns: state.scheduleRuns && typeof state.scheduleRuns === 'object' ? state.scheduleRuns : {},
  };
}

function buildFallbackReport(now) {
  const generatedAt = now || new Date().toISOString();
  return {
    schemaVersion: '1.0',
    generatedAt,
    published: false,
    reportStatus: 'missing',
    trigger: {
      event: process.env.FINHOT_TRIGGER_EVENT || 'unknown',
      schedule: process.env.FINHOT_SCHEDULE || '',
      runId: process.env.FINHOT_RUN_ID || 'unknown',
      runCreatedAt: process.env.FINHOT_RUN_CREATED_AT || generatedAt,
    },
    summary: {
      coverageRate: 0,
      usableSources: 0,
      totalSources: 0,
      freshestPublishedAt: null,
    },
    ai: {
      requestedMode: process.env.FINHOT_ANALYSIS_MODE || 'unknown',
      generatedBy: 'not-run',
      sourceGeneratedBy: 'not-run',
    },
    sources: [],
  };
}

function hoursOld(value, now) {
  const timestamp = value ? new Date(value).getTime() : NaN;
  const nowMs = now ? new Date(now).getTime() : Date.now();
  return Number.isFinite(timestamp) && Number.isFinite(nowMs) ? (nowMs - timestamp) / 3600000 : Infinity;
}

function evaluateAlerts(report, previousState, options) {
  const data = report || {};
  const summary = data.summary || {};
  const ai = data.ai || {};
  const trigger = data.trigger || {};
  const settings = options || {};
  const workflowFailed = settings.workflowFailed === true || data.workflowFailed === true;
  const limitRunsThreshold = Number.isInteger(settings.limitRunsThreshold) ? settings.limitRunsThreshold : DEFAULT_CONSECUTIVE_LIMIT_RUNS;
  const now = data.generatedAt || new Date().toISOString();
  const state = {
    schemaVersion: '1.0',
    updatedAt: now,
    consecutiveFailures: data.published && !workflowFailed
      ? 0
      : Math.max(0, Number(previousState.consecutiveFailures || 0)) + 1,
    sourceLimitRuns: {},
    scheduleRuns: {
      ...(previousState.scheduleRuns && typeof previousState.scheduleRuns === 'object'
        ? previousState.scheduleRuns
        : {}),
    },
  };
  if (trigger.schedule && trigger.runCreatedAt) {
    state.scheduleRuns[trigger.schedule] = trigger.runCreatedAt;
  }
  const alerts = [];
  const sources = Array.isArray(data.sources) ? data.sources : [];

  if (data.reportStatus === 'missing') {
    alerts.push({
      code: 'health-report-missing',
      severity: 'critical',
      title: '本次运行未生成来源健康报告',
      detail: '任务可能在采集前的安装、语法检查或单元测试阶段失败，请直接查看 Actions 日志。',
    });
  } else if (workflowFailed) {
    alerts.push({
      code: 'workflow-step-failed',
      severity: 'critical',
      title: '数据工作流存在失败步骤',
      detail: '来源健康报告已生成，但采集或生成后复验步骤失败，请检查 Actions 日志。',
    });
  }

  for (const source of sources) {
    const sourceId = source.sourceId || source.sourceName || 'unknown';
    const previousRuns = Math.max(0, Number(previousState.sourceLimitRuns && previousState.sourceLimitRuns[sourceId] || 0));
    const currentRuns = source.fetchLimitReached ? previousRuns + 1 : 0;
    state.sourceLimitRuns[sourceId] = currentRuns;
    if (currentRuns >= limitRunsThreshold) {
      alerts.push({
        code: 'source-limit-repeated',
        severity: 'warning',
        title: `${source.sourceName || sourceId} 连续 ${currentRuns} 次触及抓取上限`,
        detail: `当前自适应上限 ${source.fetchLimit || 0} 条，原始有效条目 ${source.acceptedItemCount || 0} 条。`,
      });
    }
  }

  if (state.consecutiveFailures >= 2) {
    alerts.push({ code: 'consecutive-failures', severity: 'critical', title: `数据任务连续失败 ${state.consecutiveFailures} 次`, detail: '发布质量门连续未通过，请检查 Actions 失败诊断。' });
  }
  if (Number(summary.coverageRate || 0) < 0.50) {
    alerts.push({ code: 'low-coverage', severity: 'critical', title: `来源覆盖率降至 ${Math.round(Number(summary.coverageRate || 0) * 100)}%`, detail: `可用来源 ${summary.usableSources || 0}/${summary.totalSources || 0}。` });
  }
  if (hoursOld(summary.freshestPublishedAt, now) > 24) {
    alerts.push({ code: 'stale-data', severity: 'critical', title: '最新资讯已超过 24 小时', detail: `最新发布时间：${summary.freshestPublishedAt || '缺失'}。` });
  }
  const delayAlert = buildDelayAlert(trigger.schedule, trigger.runCreatedAt || data.generatedAt, settings.scheduleDelayMinutes);
  if (delayAlert) alerts.push(delayAlert);
  if (trigger.schedule === '15 0 * * *' && ai.generatedBy !== 'llm') {
    alerts.push({ code: 'primary-llm-fallback', severity: 'warning', title: '08:15 主运行未使用 LLM', detail: `实际分析状态：${ai.generatedBy || 'unknown'}。` });
  }
  if (data.historyWriteError) {
    alerts.push({ code: 'history-write-failed', severity: 'critical', title: '历史证据或事件文件写入失败', detail: sanitizeError(data.historyWriteError, 240) });
  }

  return { alerts, state };
}

function alertIssueTitle(alerts) {
  const critical = alerts.filter(alert => alert.severity === 'critical').length;
  return `[finhot-alert] ${critical > 0 ? '严重' : '警告'}：数据更新异常 ${alerts.length} 项`;
}

function alertIssueBody(alerts, report) {
  const trigger = report && report.trigger ? report.trigger : {};
  const lines = [
    '## finhot 自动监控告警',
    '',
    `- 生成时间：${report && report.generatedAt ? report.generatedAt : 'unknown'}`,
    `- 触发方式：${trigger.event || 'unknown'}${trigger.schedule ? `（cron ${trigger.schedule}）` : ''}`,
    `- Run ID：${trigger.runId || 'unknown'}`,
    '',
    '### 异常项目',
    '',
  ];
  alerts.forEach(alert => lines.push(`- **${alert.title}**：${alert.detail}`));
  lines.push('', '> 该 Issue 由自动监控创建。异常恢复后可手动关闭；相同标签存在未关闭 Issue 时不会重复创建。');
  return `${lines.join('\n')}\n`;
}

function writeOutputs(alerts, report) {
  const outputFile = process.env.GITHUB_OUTPUT;
  if (!outputFile) return;
  fs.appendFileSync(outputFile, `should_alert=${alerts.length > 0 ? 'true' : 'false'}\n`, 'utf8');
  fs.appendFileSync(outputFile, `issue_title=${alertIssueTitle(alerts).replace(/[\r\n]+/g, ' ')}\n`, 'utf8');
  const delimiter = `FINHOT_ALERT_${Date.now()}`;
  fs.appendFileSync(outputFile, `issue_body<<${delimiter}\n${alertIssueBody(alerts, report)}${delimiter}\n`, 'utf8');
}

function main() {
  const report = loadJson(REPORT_FILE, null) || buildFallbackReport();
  const previousState = loadAlertState();
  const result = evaluateAlerts(report, previousState, {
    workflowFailed: process.env.FINHOT_WORKFLOW_FAILED === 'true',
  });
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, `${JSON.stringify(result.state, null, 2)}\n`, 'utf8');
  fs.mkdirSync(path.dirname(ALERTS_FILE), { recursive: true });
  fs.writeFileSync(ALERTS_FILE, `${JSON.stringify({ generatedAt: report.generatedAt, alerts: result.alerts }, null, 2)}\n`, 'utf8');
  writeOutputs(result.alerts, report);
  process.stdout.write(`${JSON.stringify({ alertCount: result.alerts.length, alerts: result.alerts }, null, 2)}\n`);
}

if (require.main === module) main();

module.exports = {
  STATE_FILE,
  alertIssueBody,
  alertIssueTitle,
  buildFallbackReport,
  evaluateAlerts,
  hoursOld,
};
