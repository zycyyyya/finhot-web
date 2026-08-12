'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const dailyHtml = fs.readFileSync(path.join(root, 'daily.html'), 'utf8');
const fetchScript = fs.readFileSync(path.join(root, 'scripts', 'fetch.js'), 'utf8');
const styles = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');

[
  "{ slug: 'featured', label: '今日精选' }",
  "{ slug: 'insurance', label: '保险' }",
  "{ slug: 'privateFundSales', label: '私募' }",
  "{ slug: 'marketEducation', label: '投教' }",
  "{ slug: 'all', label: '全部' }",
].forEach(fragment => assert.ok(indexHtml.includes(fragment), `missing primary navigation: ${fragment}`));

assert.ok(indexHtml.includes('window.CONTENT_FILTERS'));
assert.ok(indexHtml.includes("return effectivePrimaryScene(item) === filter"));
assert.ok(indexHtml.includes("typeof item.selectedForFeatured === 'boolean'"));
assert.ok(indexHtml.includes('return contentMatches(item, activeContentFilter)'));
assert.ok(!indexHtml.includes('item.category === filter'));
assert.ok(indexHtml.includes('class="content-filter-bar"'));
assert.ok(indexHtml.includes('primary-scene-badge'));

assert.ok(fetchScript.includes('applyBusinessCuration(allItems, 24)'));
assert.ok(fetchScript.includes('window.CONTENT_FILTERS'));
assert.ok(fetchScript.includes("{ slug: 'insurance'"));
assert.ok(fetchScript.includes("{ slug: 'privateFundSales'"));
assert.ok(fetchScript.includes("{ slug: 'marketEducation'"));

assert.ok(styles.includes('.content-filter-bar'));
assert.ok(styles.includes('.primary-scene-insurance'));
assert.ok(styles.includes('.primary-scene-privateFundSales'));
assert.ok(styles.includes('.primary-scene-marketEducation'));
assert.ok(styles.includes('.content-filter-tab:focus-visible'));

// Macro reference board on the daily page
assert.ok(fs.existsSync(path.join(root, 'macro-2026-08.html')), 'missing macro-2026-08.html');
const macroHtml = fs.readFileSync(path.join(root, 'macro-2026-08.html'), 'utf8');
assert.ok(macroHtml.includes('月度宏观政策速览'));
assert.ok(macroHtml.includes('href="daily.html"'));
assert.ok(dailyHtml.includes('class="macro-board"'));
assert.ok(dailyHtml.includes('href="macro-2026-08.html"'));
assert.ok(dailyHtml.indexOf('class="macro-board"') < dailyHtml.indexOf('id="dailySummaryArea"'),
  'macro board must render above the daily summary');
assert.ok(styles.includes('.macro-board'));
assert.ok(styles.includes('.macro-kpi-grid'));
assert.ok(styles.includes('.macro-dir-up'));
assert.ok(styles.includes('.macro-dir-down'));

console.log('frontend tests passed');
