'use strict';

(function renderSourceHealth() {
  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
  }

  function formatBeijing(value) {
    const date = value ? new Date(value) : null;
    if (!date || Number.isNaN(date.getTime())) return '更新时间未知';
    return `更新时间：${new Intl.DateTimeFormat('zh-CN', {
      timeZone: 'Asia/Shanghai',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(date)}`;
  }

  const data = window.FINHOT_DATA || {};
  const health = data.sourceHealth;
  if (!health || typeof health !== 'object') return;

  const statusMap = {
    healthy: { label: '健康', className: 'health-status-healthy' },
    degraded: { label: '降级', className: 'health-status-degraded' },
    unavailable: { label: '不可用', className: 'health-status-unavailable' },
  };
  const status = statusMap[health.status] || { label: '未知', className: 'health-status-unknown' };
  const statusElement = document.getElementById('health-status');
  if (statusElement) {
    statusElement.textContent = status.label;
    statusElement.className = `health-status ${status.className}`;
  }

  const total = Number.isFinite(health.totalSources) ? health.totalSources : 0;
  const usable = Number.isFinite(health.usableSources) ? health.usableSources : 0;
  const failed = Number.isFinite(health.failedSources) ? health.failedSources : 0;
  const stale = Number.isFinite(health.staleSources) ? health.staleSources : 0;
  const coverage = Number.isFinite(health.coverageRate) ? Math.round(health.coverageRate * 100) : 0;
  const problemNames = Array.isArray(health.sources)
    ? health.sources.filter(source => !source.usable).map(source => String(source.sourceName || '')).filter(Boolean).slice(0, 5)
    : [];

  setText('health-updated', formatBeijing(health.generatedAt || data.generatedAt));
  setText('health-coverage', `${coverage}%`);
  setText('health-usable', `${usable}/${total}`);
  setText('health-failed', String(failed));
  setText('health-stale', String(stale));
  setText('health-detail', problemNames.length > 0
    ? `当前需关注来源：${problemNames.join('、')}。页面不展示内部错误详情。`
    : '全部已记录来源均可用；重要事实仍应以原始披露为准。');
})();
