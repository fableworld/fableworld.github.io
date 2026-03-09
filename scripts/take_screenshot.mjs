import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    console.log('Navigating to https://openfable.d71.dev...');
    await page.goto('https://openfable.d71.dev', { waitUntil: 'networkidle0' });

    console.log('Waiting for elements to load...');
    await new Promise(r => setTimeout(r, 3000));

    const targetPath = join(__dirname, '../public/openfable.png');
    await page.screenshot({ path: targetPath });
    console.log(`Saved screenshot to ${targetPath}`);

    await browser.close();
})();
