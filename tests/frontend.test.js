'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
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

console.log('frontend tests passed');
