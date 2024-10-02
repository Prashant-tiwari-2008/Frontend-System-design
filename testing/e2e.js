const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 100,
        args: ["--window-size=1920,1080"]
    });

    const page = await browser.newPage();
    page.goto("https://www.flipkart.com/");
    console.log("webpage loaded");
     page.setViewport({width : 1800, height : 1000})

    const firstSelector = ".YBLJE4";
    await page.waitForSelector(firstSelector);
    await page.click(firstSelector);

    console.log("first selector clicked");
})()

// todo: as assignment

// HomeWork:
// Automate whole user journey
// Run this sript everyday at 08:00 AM - CRON job