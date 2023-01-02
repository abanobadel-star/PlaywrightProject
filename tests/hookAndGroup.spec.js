import { test, expect, chromium, devices } from '@playwright/test';
const iphone = devices['iPhone 11'];
test.describe('run all tests', () => {


   test.beforeEach(async ({ page }) => {
      await page.goto('https://www.saucedemo.com/')
      await page.waitForTimeout(100)
      await page.locator('[data-test="username"]').click();
      await page.locator('[data-test="username"]').fill('standard_user');
      await page.locator('[data-test="password"]').click();
      await page.locator('[data-test="password"]').fill('secret_sauce');
      await page.locator('[data-test="password"]').type('secret_sauce');
      await page.locator('[data-test="login-button"]').click();
   })
   test.afterAll(async ({ page }) => {
      page.close()
   })

   test('logout @smoke', async ({ page }) => {

      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      await page.getByRole('button', { name: 'Open Menu' }).click();
      await page.getByRole('link', { name: 'Logout' }).click();
      await expect(page).toHaveURL('https://www.saucedemo.com/');
      
   })
})  // any test outside this group before and after will not run when trying to run test