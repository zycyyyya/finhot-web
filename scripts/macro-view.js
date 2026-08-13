// finhot-web Macro Reference Board renderer
// Mounts the macro KPI board into any page that includes a matching skeleton:
//   <section class="macro-board" id="macroBoard" hidden>
//     ... <span class="macro-board-issue"></span> ... <div class="macro-kpi-grid"></div> ...
//   </section>
// Usage: <script>MacroBoard.render('macroBoard', window.FINHOT_DATA && window.FINHOT_DATA.macro);</script>
'use strict';

(function () {
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function render(boardId, macro) {
    var board = document.getElementById(boardId);
    if (!board) return;
    var indicators = macro && Array.isArray(macro.indicators) ? macro.indicators : [];
    if (indicators.length === 0) return;

    var latestAsOf = indicators.reduce(function (max, ind) {
      return ind && ind.asOf && ind.asOf > max ? ind.asOf : max;
    }, '');

    var refreshedAt = '';
    if (macro.updatedAt) {
      var parsed = new Date(macro.updatedAt);
      refreshedAt = Number.isNaN(parsed.getTime()) ? '' : parsed.toLocaleDateString('zh-CN');
    }

    var metaText = [];
    if (latestAsOf) metaText.push('数据截至 ' + latestAsOf);
    if (refreshedAt) metaText.push('刷新于 ' + refreshedAt);
    var metaEl = board.querySelector('.macro-board-issue');
    if (metaEl) metaEl.textContent = metaText.join(' · ');

    var isStale = latestAsOf
      ? (Date.now() - new Date(latestAsOf + 'T00:00:00Z').getTime()) > 45 * 86400000
      : false;

    var html = '';
    indicators.forEach(function (ind) {
      var dirClass = ind.direction === 'up' ? 'macro-dir-up' : (ind.direction === 'down' ? 'macro-dir-down' : '');
      html += '<div class="macro-kpi">';
      html += '  <div class="macro-kpi-name">' + escapeHtml(ind.name || '') + '</div>';
      html += '  <div class="macro-kpi-val">' + escapeHtml(ind.value || '') + '</div>';
      html += '  <div class="macro-kpi-note ' + dirClass + '">' + escapeHtml(ind.note || '') + '</div>';
      html += '  <div class="macro-kpi-src">' + escapeHtml(ind.mode === 'auto' ? '自动' : '人工核实')
        + ' · ' + escapeHtml(ind.source || '') + (ind.asOf ? ' · ' + escapeHtml(ind.asOf) : '') + '</div>';
      html += '</div>';
    });

    if (isStale) {
      html += '<div class="macro-kpi macro-kpi-stale"><div class="macro-kpi-name">更新提醒</div>'
        + '<div class="macro-kpi-val">待核实</div>'
        + '<div class="macro-kpi-note macro-dir-up">人工核实项已超过 45 天未复核</div></div>';
    }

    var gridEl = board.querySelector('.macro-kpi-grid');
    if (gridEl) gridEl.innerHTML = html;
    board.hidden = false;
  }

  window.MacroBoard = { render: render };
})();
