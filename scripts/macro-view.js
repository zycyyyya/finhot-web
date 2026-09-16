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

  // Every KPI carries its own observation date. A monthly series such as LPR can
  // legitimately sit on "较7月20日持平" for a whole month while the value itself
  // is already the 8月20日 publication, and without the badge the card reads as
  // if the board were still frozen in July.
  function shortDate(iso) {
    var match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    if (!match) return '';
    var month = String(Number(match[2]));
    var day = String(Number(match[3]));
    return match[1] === String(new Date().getFullYear())
      ? month + '/' + day
      : match[1].substring(2) + '/' + month + '/' + day;
  }

  function render(boardId, macro) {
    var board = document.getElementById(boardId);
    if (!board) return;
    var all = macro && Array.isArray(macro.indicators) ? macro.indicators : [];
    // 看板只展示可每日自动刷新的指标；人工核实项不出现在前端以免误导。
    var indicators = all.filter(function (ind) { return ind && ind.mode === 'auto'; });
    if (indicators.length === 0) {
      board.hidden = true;
      return;
    }

    var refreshedAt = '';
    if (macro.updatedAt) {
      var parsed = new Date(macro.updatedAt);
      refreshedAt = Number.isNaN(parsed.getTime()) ? '' : parsed.toLocaleDateString('zh-CN');
    }

    // The header no longer reports a single "数据截至" date. With a monthly series
    // in the mix that date is simply the newest daily indicator's, and pairing it
    // with an 8/20 LPR badge reads as a contradiction. Each card states its own
    // observation date, so the header only has to say when the board refreshed.
    var metaText = [];
    if (refreshedAt) metaText.push('刷新于 ' + refreshedAt);
    var metaEl = board.querySelector('.macro-board-issue');
    if (metaEl) metaEl.textContent = metaText.join(' · ');

    var html = '';
    indicators.forEach(function (ind) {
      var dirClass = ind.direction === 'up' ? 'macro-dir-up' : (ind.direction === 'down' ? 'macro-dir-down' : '');
      var observed = shortDate(ind.asOf);
      html += '<div class="macro-kpi">';
      html += '  <div class="macro-kpi-name">';
      html += '    <span class="macro-kpi-label">' + escapeHtml(ind.name || '') + '</span>';
      if (observed) {
        html += '    <span class="macro-kpi-asof" title="观测日期 ' + escapeHtml(ind.asOf || '') + '">'
          + escapeHtml(observed) + '</span>';
      }
      html += '  </div>';
      html += '  <div class="macro-kpi-val">' + escapeHtml(ind.value || '') + '</div>';
      html += '  <div class="macro-kpi-note ' + dirClass + '">' + escapeHtml(ind.note || '') + '</div>';
      html += '</div>';
    });

    var gridEl = board.querySelector('.macro-kpi-grid');
    if (gridEl) gridEl.innerHTML = html;
    board.hidden = false;
  }

  window.MacroBoard = { render: render };
})();
