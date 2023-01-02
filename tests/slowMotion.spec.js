import { test, expect, chromium } from '@playwright/test';

test('try', async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 500
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size : {height: 800 , width: 800}
        }
    });
    const page = await context.newPage();
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('Control+a')
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/admin/');
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page).toHaveURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');

    await context.close();
})