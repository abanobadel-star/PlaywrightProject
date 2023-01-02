const { test, expect } = require('@playwright/test')

test('map', async ({ page }) => {

    await page.goto('http://drupal.docker.localhost:8000/user/login');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('admin');
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('admin');
    await page.getByLabel('Password').press('Enter');
    await expect(page).toHaveURL('http://drupal.docker.localhost:8000/user/1/moderation/dashboard?check_logged_in=1');
    await page.getByRole('link', { name: 'Content' }).click();
    await expect(page).toHaveURL('http://drupal.docker.localhost:8000/admin/content');
    await page.getByRole('link', { name: '+Add content' }).click();
    await expect(page).toHaveURL('http://drupal.docker.localhost:8000/node/add');
    await page.getByRole('link', { name: 'Drag and drop Page' }).click();
    await expect(page).toHaveURL('http://drupal.docker.localhost:8000/node/add/drag_and_drop_page');
    await page.getByRole('textbox', { name: 'Title *' }).click();
    await page.getByRole('textbox', { name: 'Title *' }).fill('test map');
    await page.getByRole('combobox', { name: 'Save as:' }).selectOption('published');
    await page.getByRole('button', { name: 'Save' }).click();
 //   await expect(page).toHaveURL('/.*http://drupal.docker.localhost:8000/test-map/');
    await page.getByText('Choose a templateOr add elements using the +↗ Don\'t forget to save your work').click();
    await page.locator('ul:has-text("LayoutContentDrupal BlocksDrupal ViewsSaved Templates")').getByRole('link', { name: 'Content' }).click();
    await page.locator('#az-elements-tab-2').getByText('Map').click();
    await page.locator('input[name="address"]').click();
    await page.locator('input[name="address"]').fill('25.218133017677626, 29.86766756599753');
    await page.locator('input[name="width"]').click();
    await page.locator('input[name="width"]').fill('75%');
    await page.getByText('Save changes').click();
    await page.waitFor(2000);
    await expect(page).toHaveScreenshot()
})