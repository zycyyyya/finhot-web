'use strict';

const SCHEDULE_SLOTS = {
  '15 0 * * *': [0, 15],
  '17 4 * * *': [4, 17],
  '19 8 * * *': [8, 19],
  '21 12 * * *': [12, 21],
};

function expectedDelayMinutes(schedule, createdAt) {
  const planned = SCHEDULE_SLOTS[schedule];
  if (!planned) return null;
  const actual = new Date(createdAt);
  if (Number.isNaN(actual.getTime())) return null;
  const expected = Date.UTC(actual.getUTCFullYear(), actual.getUTCMonth(), actual.getUTCDate(), planned[0], planned[1]);
  return Math.round((actual.getTime() - expected) / 60000);
}

function buildDelayAlert(schedule, createdAt, thresholdMinutes) {
  const delay = expectedDelayMinutes(schedule, createdAt);
  const threshold = Number.isFinite(Number(thresholdMinutes)) ? Number(thresholdMinutes) : 45;
  if (!Number.isFinite(delay) || delay <= threshold) return null;
  return {
    code: 'schedule-delayed',
    severity: 'warning',
    title: `定时任务延迟 ${delay} 分钟`,
    detail: `cron ${schedule}，实际创建时间 ${createdAt}，告警阈值 ${threshold} 分钟。`,
  };
}

function latestExpectedSlot(now, graceMinutes) {
  const actual = new Date(now);
  if (Number.isNaN(actual.getTime())) return null;
  const grace = Number.isFinite(Number(graceMinutes)) ? Number(graceMinutes) : 90;
  const candidates = Object.entries(SCHEDULE_SLOTS).map(([schedule, planned]) => {
    let expectedMs = Date.UTC(
      actual.getUTCFullYear(),
      actual.getUTCMonth(),
      actual.getUTCDate(),
      planned[0],
      planned[1]
    );
    if (expectedMs + grace * 60000 > actual.getTime()) expectedMs -= 86400000;
    return { schedule, expectedAt: new Date(expectedMs).toISOString() };
  });
  candidates.sort((a, b) => new Date(b.expectedAt).getTime() - new Date(a.expectedAt).getTime());
  return candidates[0];
}

function findMissingSchedule(scheduleRuns, now, graceMinutes) {
  const expected = latestExpectedSlot(now, graceMinutes);
  if (!expected) return null;
  const expectedMs = new Date(expected.expectedAt).getTime();
  const grace = Number.isFinite(Number(graceMinutes)) ? Number(graceMinutes) : 90;
  const latestAcceptableMs = expectedMs + grace * 60000;
  const actualValue = scheduleRuns && !Array.isArray(scheduleRuns)
    ? scheduleRuns[expected.schedule]
    : null;
  const actualMs = new Date(actualValue).getTime();
  const found = Number.isFinite(actualMs)
    && actualMs >= expectedMs
    && actualMs <= latestAcceptableMs;
  return found ? null : expected;
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
  buildDelayAlert,
  expectedDelayMinutes,
  findMissingSchedule,
  latestExpectedSlot,
};
