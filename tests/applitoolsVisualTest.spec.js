import { test, expect, chromium, devices } from '@playwright/test';
const { ClassicRunner, Eyes, Target, RectangleSize } = require('@applitools/eyes-playwright')

test.describe('check visual test', () => {

    let browser = null;
    let page = null;
    let context = null;
    const eyes = new Eyes(new ClassicRunner());

    test.beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://www.google.com/');
    })
    test.afterAll(async () => {
        await context.close();
        await browser.close();
    })
    test('check visual test' , async({page}) => {
      await eyes.open(page, 'the internet', 'dynamic content', new RectangleSize(800, 600));
      await eyes.check(Target.window.fully())
      await eyes.close()
    })
})