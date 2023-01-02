import { test, expect } from '@playwright/test';

test('login to applitools demo', async({page}) => {

    await page.goto('https://demo.applitools.com/')
    await page.locator('id=username').click()
    await page.locator('id=username').fill('test')
    await page.locator('#password').click()
    await page.locator('input[id="password"]').fill('test')
    await page.pause()
    await page.waitForSelector('a:has-text("Sign in")') // wait with default time out
    await page.waitForSelector('a:has-text("Sign in")', {timeout: 4000})
    await page.locator('a:has-text("Sign in")').click()
    await expect(page).toHaveURL('https://demo.applitools.com/app.html')

})

test('login to orange hrm demo', async({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[name="username"]').click()
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('input[type="password"]').click()
    await page.locator('xpath= //input[@type="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})
test('test non commerce', async ({ page }) => {
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
})