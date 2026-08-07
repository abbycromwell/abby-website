// Generates public/abby-cromwell-resume.pdf from the built /resume page.
// Run `npx astro build` first, then `node scripts/build-resume-pdf.mjs`,
// then rebuild so dist/ picks up the new PDF.
import { chromium } from 'playwright-core';
import { createServer } from 'node:http';
import { createReadStream, statSync, readdirSync } from 'node:fs';
import { extname, join } from 'node:path';
import { homedir } from 'node:os';

const PORT = 4329;
const ROOT_DIR = 'dist';
const OUT_PATH = 'public/abby-cromwell-resume.pdf';

// playwright-core ships no browsers; use the newest cached full Chromium. The
// headless shell renders the same text but drops the background image, so the
// watercolor ground would not survive the export.
function findChromium() {
  const cache = join(homedir(), 'Library/Caches/ms-playwright');
  const versions = readdirSync(cache)
    .filter((d) => /^chromium-\d+$/.test(d))
    .sort((a, b) => Number(a.slice(9)) - Number(b.slice(9)));
  if (!versions.length) throw new Error(`no chromium-* in ${cache}`);
  const dir = join(cache, versions.at(-1));
  const platform = readdirSync(dir).find((d) => d.startsWith('chrome-mac'));
  // the bundle is "Chromium.app" on older builds, "Google Chrome for Testing.app" now
  const bundleDir = join(dir, platform);
  const bundle = readdirSync(bundleDir).find((d) => d.endsWith('.app'));
  if (!bundle) throw new Error(`no .app bundle in ${bundleDir}`);
  return join(bundleDir, bundle, 'Contents/MacOS', bundle.replace(/\.app$/, ''));
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

function startServer(rootDir, port) {
  const server = createServer((req, res) => {
    const url = decodeURIComponent(new URL(req.url, `http://localhost:${port}`).pathname);
    const candidates = [join(rootDir, url), join(rootDir, url, 'index.html'), join(rootDir, `${url}.html`)];
    for (const filePath of candidates) {
      try {
        const st = statSync(filePath);
        if (st.isFile()) {
          res.writeHead(200, { 'content-type': MIME[extname(filePath)] ?? 'application/octet-stream' });
          createReadStream(filePath).pipe(res);
          return;
        }
      } catch {}
    }
    res.writeHead(404).end('not found');
  });
  return new Promise((res) => server.listen(port, '127.0.0.1', () => res(server)));
}

const server = await startServer(ROOT_DIR, PORT);
const browser = await chromium.launch({ executablePath: findChromium() });
const page = await browser.newPage();

await page.goto(`http://localhost:${PORT}/resume/`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

await page.pdf({
  path: OUT_PATH,
  format: 'Letter',
  printBackground: true,
  preferCSSPageSize: true,
  tagged: true,
  // full bleed; the sheet's margin is padding on .resume so the paper colour
  // and the watercolor ground reach the trim edge
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();
server.close();
console.log(`wrote ${OUT_PATH}`);
