import puppeteer from 'puppeteer';
import path from 'path';

const OUTPUT_DIR = '/Users/keremkaraca/.gemini/antigravity/brain/76a247bc-039d-4827-89f5-a817447a5cc6';

const pages = [
  { url: 'http://localhost:3033', file: 'screenshot_home.png' },
  { url: 'http://localhost:3033/hakkimizda', file: 'screenshot_about.png' },
  { url: 'http://localhost:3033/etkinlikler', file: 'screenshot_events.png' },
  { url: 'http://localhost:3033/magaza', file: 'screenshot_shop.png' },
  { url: 'http://localhost:3033/leaderboard', file: 'screenshot_leaderboard.png' },
  { url: 'http://localhost:3033/kayit', file: 'screenshot_register.png' },
];

const results = { success: [], failed: [] };

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

for (const { url, file } of pages) {
  const filePath = path.join(OUTPUT_DIR, file);
  try {
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`✅ Saved: ${filePath}`);
    results.success.push(filePath);
  } catch (err) {
    console.error(`❌ Failed ${url}: ${err.message}`);
    results.failed.push({ url, error: err.message });
  }
}

// Home page scrolled
try {
  console.log('Taking scrolled home screenshot...');
  await page.goto('http://localhost:3033', { waitUntil: 'networkidle0', timeout: 15000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.evaluate(() => window.scrollBy(0, 800));
  await new Promise(r => setTimeout(r, 500));
  const scrolledPath = path.join(OUTPUT_DIR, 'screenshot_home_scrolled.png');
  await page.screenshot({ path: scrolledPath, fullPage: false });
  console.log(`✅ Saved: ${scrolledPath}`);
  results.success.push(scrolledPath);
} catch (err) {
  console.error(`❌ Failed scrolled home: ${err.message}`);
  results.failed.push({ url: 'http://localhost:3033 (scrolled)', error: err.message });
}

await browser.close();

console.log('\n=== RESULTS ===');
console.log('SUCCESS:', results.success.join('\n'));
if (results.failed.length) {
  console.log('FAILED:', JSON.stringify(results.failed, null, 2));
}
