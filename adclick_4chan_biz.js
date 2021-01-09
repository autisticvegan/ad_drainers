const puppeteer = require('puppeteer');
const url = 'https://boards.4channel.org/biz/'
async function run () {

    while(true) {
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForTimeout(2000);
        //await page.screenshot({path: 'screenshot.png'});
        await page.click('body > div.adg-rects.desktop > div.ad-bgls.adp-90.bidglass-unit-23 > iframe');
        await page.waitForTimeout(2000);
        browser.close();
    }
}
run();


