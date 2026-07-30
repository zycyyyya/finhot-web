'use strict';

const fs = require('fs');
const path = require('path');
const { sanitizeError } = require('./health');

const reportFile = path.resolve(__dirname, '..', 'reports', 'source-health.json');

function percent(value) {
  return `${(Number(value || 0) * 100).toFixed(0)}%`;
}

function buildMarkdown(report) {
  const summary = report && report.summary ? report.summary : {};
  const ai = report && report.ai ? report.ai : {};
  const lines = [
    '## finhot 数据更新诊断',
    '',
    `- 发布结果：${report && report.published ? '已通过质量门并生成数据' : '未发布，已保留上一版数据'}`,
    `- 来源状态：${summary.status || 'unknown'}`,
    `- 来源覆盖率：${percent(summary.coverageRate)}（可用 ${summary.usableSources || 0}/${summary.totalSources || 0}）`,
    `- 失败来源：${summary.failedSources || 0}；陈旧来源：${summary.staleSources || 0}`,
    `- 候选资讯：${report && report.itemCounts ? report.itemCounts.candidate : 0} 条；新增：${report && report.itemCounts ? report.itemCounts.new : 0} 条`,
    `- AI Key：${ai.keyConfigured ? '已注入' : '未注入'}；实际生成：${ai.generatedBy || '未执行'}`,
  ];
  const errors = report && Array.isArray(report.gateErrors) ? report.gateErrors : [];
  if (errors.length > 0) {
    lines.push('', '### 发布门未通过', '');
    for (const error of errors.slice(0, 10)) lines.push(`- ${sanitizeError(error, 240)}`);
  }
  return `${lines.join('\n')}\n`;
}

try {
  const report = JSON.parse(fs.readFileSync(reportFile, 'utf8'));
  process.stdout.write(buildMarkdown(report));
} catch {
  process.stdout.write('## finhot 数据更新诊断\n\n- 本次运行未生成来源健康报告，请查看失败步骤日志。\n');
}

module.exports = { buildMarkdown };
