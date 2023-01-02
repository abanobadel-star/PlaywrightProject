import { test, expect } from '@playwright/test';

test('test assertion', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/')

    // assertion 

    // check element present 
    await expect(page.locator('role=heading[name="The Kitchen"]')).toHaveCount(1)
    await page.$('role=heading[name="The Kitchen"]') // this $ return true or false

    if (page.$('role=heading[name="The Kitchen"]')) {
        await page.locator('role=heading[name="The Kitchen"]').click()
    }

    // check element hidden or visible 
    await expect(page.locator('role=heading[name="The Kitchen"]')).toBeVisible()
    //  await expect.soft(page.locator('role=heading[name="The Kitchen"]')).toBeHidden()

    // check element enable or disable
    await expect(page.locator('role=heading[name="The Kitchen"]')).toBeEnabled()
    //  await expect.soft(page.locator('role=heading[name="The Kitchen"]')).toBeDisabled()

    // check element has match text or not 
    await expect(page.locator('role=heading[name="The Kitchen"]')).toHaveText('The Kitchen')
    //  await expect.soft(page.locator('role=heading[name="The Kitchen"]')).not.toHaveText('The Kitchen')

    // check element to have attribute

    await expect(page.locator('role=heading[name="The Kitchen"]')).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    // mean class contains 
    await expect(page.locator('role=heading[name="The Kitchen"]')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('role=heading[name="The Kitchen"]')).toHaveClass('chakra-heading css-dpmy2a')

    //page have url 
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    // url contains
    await expect(page).toHaveURL(/kitchen.applitools.com/)

    // page have title
    // await expect(page).toHaveTitle('The Kitchen')
    // title contains
    // await expect(page).toHaveTitle(/.*kitchen/)

    // visual validation with screenshot
    await expect(page).toHaveScreenshot('landing.png')
    // await expect(page.screenshot({ path: 'screenshot.png' }))
  //  await page.screenshot({ path: 'screenshot.png', fullPage: true });


})