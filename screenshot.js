const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log('Navigating to URL...');
  await page.goto('https://tasarim.jrsw.com/studyo/avONmY9G', { waitUntil: 'networkidle2' });
  console.log('Waiting 10 seconds for 3D model to render...');
  await new Promise(resolve => setTimeout(resolve, 10000));
  console.log('Taking screenshot...');
  await page.screenshot({ path: '/Users/keremkaraca/.gemini/antigravity/scratch/troya-run-club/public/product-custom.png' });
  await browser.close();
  console.log('Done.');
})();
