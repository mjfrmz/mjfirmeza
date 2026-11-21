import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const jobs = [
  ['https://nestnookhomes.com/', 'nest-nook-homes.png'],
  ['https://sellwithresolve.com/', 'sell-with-resolve.png'],
  ['https://buywithresolve.com/', 'buy-with-resolve.png'],
  ['https://www.heavenlyhomes.us/', 'heavenly-homes.png'],
];
await mkdir('assets', { recursive: true });
const browser = await chromium.launch({ headless: true });
for (const [url, filename] of jobs) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `assets/${filename}`, fullPage: false });
    console.log(`Saved ${filename}`);
  } catch (err) {
    console.warn(`Could not capture ${url}: ${err.message}`);
  } finally { await page.close(); }
}
await browser.close();
