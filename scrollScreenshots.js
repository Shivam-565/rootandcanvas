const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3001');
  await page.waitForTimeout(2000); // Wait for initial render and hero animation

  // Take first screenshot
  await page.screenshot({ path: 'scroll_1.png' });
  
  // Scroll down by viewport height and wait
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'scroll_2.png' });

  // Scroll again
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'scroll_3.png' });

  // Scroll again
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'scroll_4.png' });

  await browser.close();
})();
