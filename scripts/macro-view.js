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

  function fullDate(iso) {
    var match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    if (!match) return '';
    return match[1] + '-' + match[2] + '-' + match[3];
  }

  // 显示精度必须跟着数据本身走，不能写死。
  // 之前统一按 2 位小数格式化，汇率 6.6664→6.67、日变动 0.0013→0.00，
  // 于是走势图和表格里每一天都显示「持平」——趋势是真的在跌，但看起来是平的，
  // 这比不显示更误导。取「value 字符串的小数位」与「series 实际小数位」的较大者，
  // 上限 4 位：再多也看不过来，且列宽会对不齐。
  function decimalsOf(indicator, series) {
    var digits = 0;
    var value = String((indicator && indicator.value) || '');
    var match = value.match(/\.(\d+)/);
    if (match) digits = match[1].length;
    (series || []).forEach(function (point) {
      var raw = String(point && point.value);
      var dot = raw.indexOf('.');
      var len = dot >= 0 ? raw.length - dot - 1 : 0;
      if (len > digits && len <= 8) digits = len;
    });
    return Math.min(digits, 4);
  }

  // 数值单位从已格式化的 value 里读，避免再给 data 增加一个 unit 字段。
  // macro.json 的 value 已经带了货币符号或百分号，是唯一权威来源。
  function unitOf(indicator, series) {
    var value = String((indicator && indicator.value) || '');
    var digits = decimalsOf(indicator, series);
    if (value.charAt(0) === '\u00a5') return { prefix: '\u00a5', suffix: '', digits: digits };
    if (value.charAt(0) === '$') return { prefix: '$', suffix: '', digits: digits };
    if (/%$/.test(value)) return { prefix: '', suffix: '%', digits: digits };
    return { prefix: '', suffix: '', digits: digits };
  }

  function formatPoint(value, unit) {
    return unit.prefix + value.toFixed(unit.digits) + unit.suffix;
  }

  // === Sparkline ===
  // Pure inline SVG: the site is served from GitHub Pages with no chart library,
  // and pulling one from a CDN would both bloat the page and break offline.
  //
  // y-domain is padded so the line never touches the frame; a flat series would
  // otherwise divide by zero, hence the explicit min-span guard.
  var CHART_W = 600;
  var CHART_H = 196;
  var PAD_L = 54;
  var PAD_R = 20;
  var PAD_T = 26;
  var PAD_B = 36;

  function buildChart(series, unit, rising) {
    var n = series.length;
    if (n < 2) return '';

    var values = series.map(function (p) { return p.value; });
    var min = Math.min.apply(null, values);
    var max = Math.max.apply(null, values);
    var span = max - min;
    // 全部相等时给一个最小跨度，否则点会重叠在同一条水平线上。
    if (!(span > 0)) span = Math.abs(max) * 0.01 || 1;
    var lo = min - span * 0.18;
    var hi = max + span * 0.18;

    var innerW = CHART_W - PAD_L - PAD_R;
    var innerH = CHART_H - PAD_T - PAD_B;
    var stepX = n > 1 ? innerW / (n - 1) : 0;

    var pts = series.map(function (p, i) {
      return {
        x: PAD_L + stepX * i,
        y: PAD_T + innerH * (1 - (p.value - lo) / (hi - lo)),
        value: p.value,
        date: p.date,
      };
    });

    var stroke = rising ? '#ef4444' : '#22c55e';
    // 不要用 preserveAspectRatio="none"：那会让 x/y 独立缩放，横轴一变窄
    // 图里的文字就跟着压扁（实测 "$118.82" 显示成 "$18.82"）。
    // 默认的等比缩放虽然会留白，但字形始终正确。
    var svg = '<svg class="macro-detail-chart" viewBox="0 0 ' + CHART_W + ' ' + CHART_H + '"'
      + ' role="img" aria-label="最近 ' + n + ' 个交易日走势">';

    // 三条水平参考线（顶、中、底），只做视觉基准，不标刻度。
    [0, 0.5, 1].forEach(function (ratio) {
      var y = PAD_T + innerH * ratio;
      svg += '<line x1="' + PAD_L + '" y1="' + y.toFixed(1) + '" x2="' + (CHART_W - PAD_R)
        + '" y2="' + y.toFixed(1) + '" stroke="#1E293B" stroke-width="1" />';
    });

    var path = pts.map(function (p, i) {
      return (i === 0 ? 'M' : 'L') + p.x.toFixed(1) + ' ' + p.y.toFixed(1);
    }).join(' ');
    svg += '<path d="' + path + '" fill="none" stroke="' + stroke
      + '" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />';

    pts.forEach(function (p) {
      svg += '<circle cx="' + p.x.toFixed(1) + '" cy="' + p.y.toFixed(1)
        + '" r="3.2" fill="' + stroke + '" />';
      // 数值标在点上方，日期标在底部；两点间距 ≥ 88px，7 个点不会重叠。
      svg += '<text x="' + p.x.toFixed(1) + '" y="' + (p.y - 11).toFixed(1)
        + '" text-anchor="middle" font-size="11" font-weight="600" fill="#94A3B8">'
        + escapeHtml(formatPoint(p.value, unit)) + '</text>';
      svg += '<text x="' + p.x.toFixed(1) + '" y="' + (CHART_H - 12)
        + '" text-anchor="middle" font-size="10.5" fill="#64748B">'
        + escapeHtml(p.date.substring(5)) + '</text>';
    });

    svg += '</svg>';
    return svg;
  }

  // === Detail overlay ===
  // 用一张复用的遮罩，而不是每条卡片各挂一个弹层：卡片数量会随指标增长，
  // 而同时只可能打开一个详情。
  var overlay = null;
  var lastFocused = null;

  function ensureOverlay() {
    if (overlay) return overlay;
    var el = document.createElement('div');
    el.className = 'macro-detail-overlay';
    el.setAttribute('hidden', '');
    el.innerHTML = '<div class="macro-detail-panel" role="dialog" aria-modal="true" aria-labelledby="macroDetailTitle">'
      + '<div class="macro-detail-head">'
      + '  <span class="macro-detail-title" id="macroDetailTitle"></span>'
      + '  <button type="button" class="macro-detail-close" aria-label="关闭">&times;</button>'
      + '</div>'
      + '<div class="macro-detail-body"></div>'
      + '</div>';
    document.body.appendChild(el);

    el.addEventListener('click', function (event) {
      // 只有点到遮罩本身（不是面板内部）才关闭，否则点图表也会误关。
      if (event.target === el) closeDetail();
    });
    el.querySelector('.macro-detail-close').addEventListener('click', closeDetail);
    overlay = el;
    return el;
  }

  function closeDetail() {
    if (!overlay) return;
    overlay.setAttribute('hidden', '');
    document.removeEventListener('keydown', onKeydown);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
    lastFocused = null;
  }

  function onKeydown(event) {
    if (event.key === 'Escape') closeDetail();
  }

  function buildTable(series, unit) {
    var rows = series.slice().reverse().map(function (p, index, list) {
      // 环比：与时间上更早的那一点比较（列表已倒序，故取下一个）。
      var prior = list[index + 1];
      var diff = prior ? p.value - prior.value : null;
      var diffText = '\u2014';
      var diffClass = '';
      if (diff !== null) {
        if (Math.abs(diff) < Math.pow(10, -unit.digits) / 2) {
          diffText = '\u6301\u5e73';
        } else {
          diffText = (diff > 0 ? '+' : '') + diff.toFixed(unit.digits);
          diffClass = diff > 0 ? 'macro-detail-up' : 'macro-detail-down';
        }
      }
      return '<tr><td>' + escapeHtml(fullDate(p.date)) + '</td>'
        + '<td class="macro-detail-num">' + escapeHtml(formatPoint(p.value, unit)) + '</td>'
        + '<td class="macro-detail-num ' + diffClass + '">' + escapeHtml(diffText) + '</td></tr>';
    }).join('');
    return '<table class="macro-detail-table">'
      + '<thead><tr><th>\u65e5\u671f</th><th class="macro-detail-num">\u6536\u76d8</th>'
      + '<th class="macro-detail-num">\u73af\u6bd4</th></tr></thead>'
      + '<tbody>' + rows + '</tbody></table>';
  }

  function openDetail(indicator, series) {
    var el = ensureOverlay();
    var unit = unitOf(indicator, series);
    var first = series[0];
    var last = series[series.length - 1];
    var rising = last.value >= first.value;
    var change = last.value - first.value;
    var pct = first.value !== 0 ? (change / first.value) * 100 : 0;

    var titleEl = el.querySelector('.macro-detail-title');
    titleEl.textContent = indicator.name || '';

    var summary = '<div class="macro-detail-summary">'
      + '<span class="macro-detail-value">' + escapeHtml(indicator.value || '') + '</span>'
      + '<span class="macro-detail-change ' + (rising ? 'macro-detail-up' : 'macro-detail-down') + '">'
      + (change >= 0 ? '+' : '') + change.toFixed(unit.digits) + unit.suffix
      + ' (' + (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%)</span>'
      + '<span class="macro-detail-range">\u8fd1 ' + series.length + ' \u4e2a\u4ea4\u6613\u65e5 '
      + escapeHtml(shortDate(first.date)) + ' \u2014 ' + escapeHtml(shortDate(last.date)) + '</span>'
      + '</div>';

    var sourceNote = indicator.source
      ? '<div class="macro-detail-source">\u6570\u636e\u6e90\uff1a' + escapeHtml(indicator.source)
        + '\uff5c\u6700\u65b0\u89c2\u6d4b\uff1a' + escapeHtml(fullDate(indicator.asOf || last.date)) + '</div>'
      : '';

    el.querySelector('.macro-detail-body').innerHTML = summary
      + buildChart(series, unit, rising)
      + buildTable(series, unit)
      + sourceNote;

    el.removeAttribute('hidden');
    document.addEventListener('keydown', onKeydown);
    var closeBtn = el.querySelector('.macro-detail-close');
    if (closeBtn) closeBtn.focus();
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

    // 序列挂在内存里而不是 DOM 属性上：7 个点足够长，塞进 data-* 会让
    // innerHTML 变得难读，而且点击时才需要。
    var seriesByKey = {};

    // 可点开的卡片统一挪到最后：6 项落在 3×2 网格里，
    // 正好上排全是快照、下排全是可看走势的，同类聚在一起比夹在中间好扫。
    // 用两遍 filter 做稳定分区而不是 sort —— 同类内部仍按管线给的顺序。
    // 注意这里改的是 DOM 顺序本身，不用 CSS order：order 会让视觉顺序和
    // Tab 焦点顺序错开，键盘用户按 Tab 会跳着走。
    var snapshotList = [];
    var expandableList = [];
    indicators.forEach(function (ind) {
      var hasSeries = Array.isArray(ind.series) && ind.series.length >= 2;
      (hasSeries ? expandableList : snapshotList).push(ind);
    });
    var ordered = snapshotList.concat(expandableList);

    var html = '';
    ordered.forEach(function (ind) {
      var dirClass = ind.direction === 'up' ? 'macro-dir-up' : (ind.direction === 'down' ? 'macro-dir-down' : '');
      var observed = shortDate(ind.asOf);
      var series = Array.isArray(ind.series) ? ind.series : [];
      var expandable = series.length >= 2;
      if (expandable) seriesByKey[ind.key] = series;

      html += '<div class="macro-kpi' + (expandable ? ' macro-kpi-expandable' : '') + '"'
        + (expandable
          ? ' role="button" tabindex="0" data-key="' + escapeHtml(ind.key) + '"'
            + ' title="点击查看最近 ' + series.length + ' 个交易日的走势"'
          : '')
        + '>';
      html += '  <div class="macro-kpi-name">';
      html += '    <span class="macro-kpi-label">' + escapeHtml(ind.name || '') + '</span>';
      if (observed) {
        html += '    <span class="macro-kpi-asof" title="观测日期 ' + escapeHtml(ind.asOf || '') + '">'
          + escapeHtml(observed) + '</span>';
      }
      html += '  </div>';
      html += '  <div class="macro-kpi-val">' + escapeHtml(ind.value || '') + '</div>';
      // 文案与「走势」提示同处一行，用 flex 分配空间：
      // 早期版本把提示做成绝对定位，窄屏下会压到涨跌文案上（实测 600px 宽重叠）。
      html += '  <div class="macro-kpi-note ' + dirClass + '">';
      html += '    <span class="macro-kpi-note-text">' + escapeHtml(ind.note || '') + '</span>';
      if (expandable) {
        html += '    <span class="macro-kpi-hint" aria-hidden="true">走势</span>';
      }
      html += '  </div>';
      html += '</div>';
    });

    var gridEl = board.querySelector('.macro-kpi-grid');
    if (gridEl) {
      // 事件监听只绑一次，所以序列必须存在元素上而不是闭包里 ——
      // 否则第二次 render 换了指标，监听器还在读上一轮的数据。
      gridEl.__macroSeries = seriesByKey;
      gridEl.__macroIndicators = ordered;
      gridEl.innerHTML = html;
      // 事件挂在网格上做委托，重渲染时不必逐卡解绑。
      if (!gridEl.__macroBound) {
        gridEl.__macroBound = true;
        var openFrom = function (card) {
          var key = card.getAttribute('data-key');
          var map = gridEl.__macroSeries || {};
          var series = map[key];
          if (!series) return;
          var list = gridEl.__macroIndicators || [];
          var indicator = null;
          list.forEach(function (ind) { if (ind.key === key) indicator = ind; });
          if (!indicator) return;
          lastFocused = card;
          openDetail(indicator, series);
        };
        gridEl.addEventListener('click', function (event) {
          var card = event.target && event.target.closest
            ? event.target.closest('.macro-kpi-expandable')
            : null;
          if (card) openFrom(card);
        });
        gridEl.addEventListener('keydown', function (event) {
          if (event.key !== 'Enter' && event.key !== ' ') return;
          var card = event.target && event.target.closest
            ? event.target.closest('.macro-kpi-expandable')
            : null;
          if (!card) return;
          event.preventDefault();
          openFrom(card);
        });
      }
    }
    board.hidden = false;
  }

  window.MacroBoard = { render: render };
})();
