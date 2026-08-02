import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');

test('the foreground artwork is upright while the sheets behind retain perspective', () => {
  const foregroundRule = html.match(/\.rack-card \{([\s\S]*?)\n      \}/)?.[1] ?? '';
  const depthRule = html.match(/\.rack-depth\[data-depth-index="0"\] \{([\s\S]*?)\}/)?.[1] ?? '';

  assert.doesNotMatch(foregroundRule, /rotateY/);
  assert.match(depthRule, /rotateY/);
});

test('the pulled artwork exposes a complete title and a separate position counter', () => {
  assert.match(html, /data-rack-label/);
  assert.match(html, /data-rack-count/);
  assert.match(html, /rackCounter\.textContent/);
});

test('the next position in Illustration 01 is a different work in the same rack', () => {
  const rack = html.match(/'illustration-one': \{([\s\S]*?)\n        \},\n        'illustration-two'/)?.[1] ?? '';

  assert.match(rack, /Confetti Profile/);
  assert.match(rack, /Squid Bonnet Collage/);
  assert.ok(rack.indexOf('Squid Bonnet Collage') > rack.indexOf('Confetti Profile'));
});

test('the sheets behind the foreground display the remaining works in the selected rack', () => {
  assert.match(html, /data-rack-depth/);
  assert.match(html, /function renderDepthStack\(\)/);
  assert.match(html, /renderDepthStack\(\);/);
});

test('artwork navigation physically reorders the deck instead of crossfading content', () => {
  assert.match(html, /function animateStack\(direction\)/);
  assert.match(html, /rack-card-ghost/);
  assert.match(html, /\.animate\(/);
  assert.match(html, /navigateRack\(-1\)/);
  assert.match(html, /navigateRack\(1\)/);
  assert.doesNotMatch(html, /function transitionWork\(\)/);
});

test('changing categories retracts the current deck before revealing the selected one', () => {
  assert.match(html, /async function pullRack\(key\)/);
  assert.match(html, /await retractDeck\(\)/);
  assert.match(html, /revealDeck\(\)/);
});

test('deck extraction uses travel without a diagram-like track or fade', () => {
  const stowedRule = html.match(/\.rack-area\.is-stowed \.rack-card,([\s\S]*?)\n      \}/)?.[1] ?? '';

  assert.doesNotMatch(html, /data-rack-track/);
  assert.doesNotMatch(html, /\.rack-track/);
  assert.match(stowedRule, /translateX\(340px\)/);
  assert.doesNotMatch(stowedRule, /opacity:\s*0/);
});

test('the pulled artwork and vertical rack use the reduced proportions', () => {
  assert.match(html, /width: min\(286px, 23vw\)/);
  assert.match(html, /inset: 52px 12px 58px 14px/);
  assert.match(html, /\.rack-card \{ width: 250px; \}/);
});

test('the featured artwork and rack are bounded by the visible viewport', () => {
  const featuredRule = html.match(/\.featured-hang \{([\s\S]*?)\n      \}/)?.[1] ?? '';
  const rackRule = html.match(/\.rack-area \{([\s\S]*?)\n      \}/)?.[1] ?? '';

  assert.match(featuredRule, /height: min\(860px, calc\(100svh - 116px\)\)/);
  assert.match(rackRule, /height: min\(860px, calc\(100svh - 116px\)\)/);
  assert.doesNotMatch(html, /min-height: 900px/);
});

test('the outgoing artwork clears the new front card before returning behind the stack', () => {
  const motion = html.match(/async function settleBehindStack\(outgoing, movingForward\) \{([\s\S]*?)\n      \}\n\n      function animateStack/)?.[1] ?? '';

  assert.match(motion, /zIndex: '14'/);
  assert.match(motion, /zIndex: '8'/);
  assert.match(motion, /zIndex: '3'/);
  assert.match(motion, /await journey\.finished/);
  assert.doesNotMatch(motion, /opacity:\s*0(?:\s*[,}])/);
});

test('the dealt card uses a shallow tilt and stays opaque until it clears the frame', () => {
  const motion = html.match(/async function settleBehindStack\(outgoing, movingForward\) \{([\s\S]*?)\n      \}\n\n      function animateStack/)?.[1] ?? '';

  assert.match(motion, /outgoing\.style\.transformOrigin = 'center center'/);
  assert.match(motion, /translate: '-220px -14px'/);
  assert.match(motion, /rotateY\(-18deg\)/);
  assert.match(motion, /cubic-bezier\(0\.65, 0, 0\.35, 1\)/);
  assert.match(motion, /opacity: 0\.34/);
  assert.doesNotMatch(motion, /rotateY\(-68deg\)/);
  assert.ok(motion.indexOf("translate: '-220px -14px'") < motion.indexOf("opacity: 0.34"));
});

test('the outgoing path uses one compositor-friendly animation without filter painting', () => {
  const motion = html.match(/async function settleBehindStack\(outgoing, movingForward\) \{([\s\S]*?)\n      \}\n\n      function animateStack/)?.[1] ?? '';

  assert.equal((motion.match(/outgoing\.animate\(/g) ?? []).length, 1);
  assert.doesNotMatch(motion, /filter:/);
  assert.match(motion, /duration: 650/);
  assert.match(motion, /easing: 'linear'/);
});

test('image navigation leaves the stored rack sheets anchored', () => {
  const navigation = html.match(/function animateStack\(direction\) \{([\s\S]*?)\n      \}\n\n      function navigateRack/)?.[1] ?? '';

  assert.doesNotMatch(navigation, /const depthAnimations/);
  assert.doesNotMatch(navigation, /depthCards[\s\S]*?\.animate\(/);
  assert.match(navigation, /const advancingAnimations = \[incomingAnimation\]/);
});
