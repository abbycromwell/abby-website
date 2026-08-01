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

// playwright-core ships no browsers; use the newest cached headless shell.
function findHeadlessShell() {
  const cache = join(homedir(), 'Library/Caches/ms-playwright');
  const versions = readdirSync(cache)
    .filter((d) => d.startsWith('chromium_headless_shell-'))
    .sort();
  if (!versions.length) throw new Error(`no chromium_headless_shell-* in ${cache}`);
  const dir = join(cache, versions.at(-1));
  const platform = readdirSync(dir).find((d) => d.startsWith('chrome-headless-shell-'));
  return join(dir, platform, 'chrome-headless-shell');
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
const browser = await chromium.launch({ executablePath: findHeadlessShell() });
const page = await browser.newPage();

await page.goto(`http://localhost:${PORT}/resume/`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

await page.pdf({
  path: OUT_PATH,
  format: 'Letter',
  printBackground: true,
  preferCSSPageSize: true,
  tagged: true,
  margin: { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
});

await browser.close();
server.close();
console.log(`wrote ${OUT_PATH}`);
