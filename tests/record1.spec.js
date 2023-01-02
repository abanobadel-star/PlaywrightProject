import { test, expect } from '@playwright/test';

test('record test', async ({ page }) => {

  await page.goto('http://drupal.docker.localhost:8000/new-test-3');

  await page.goto('http://drupal.docker.localhost:8000/user/login');

  await page.getByLabel('Username').click();

  await page.getByLabel('Username').fill('admin');

  await page.getByLabel('Password').click();

  await page.getByLabel('Password').fill('admin');

  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page).toHaveURL('http://drupal.docker.localhost:8000/user/1/moderation/dashboard?check_logged_in=1');

  await page.getByRole('link', { name: 'Content' }).click();
  await expect(page).toHaveURL('http://drupal.docker.localhost:8000/admin/content');

  await page.getByRole('link', { name: '+Add content' }).click();
  await expect(page).toHaveURL('http://drupal.docker.localhost:8000/node/add');

  await page.getByRole('link', { name: 'Drag and drop Page' }).click();
  await expect(page).toHaveURL('http://drupal.docker.localhost:8000/node/add/drag_and_drop_page');

  await page.getByRole('textbox', { name: 'Title *' }).click();

  await page.getByRole('textbox', { name: 'Title *' }).fill('test one');

  await page.getByRole('combobox', { name: 'Save as:' }).selectOption('published');

  await page.getByRole('button', { name: 'Save' }).click();
 // await expect(page).toHaveURL('http://drupal.docker.localhost:8000/test-one');

  await page.getByText('Choose a templateOr add elements using the +↗ Don\'t forget to save your work').click();

  await page.locator('div:has-text("LayoutContentDrupal BlocksDrupal ViewsSaved Templates")').nth(3).click();

  await page.locator('ul:has-text("LayoutContentDrupal BlocksDrupal ViewsSaved Templates")').getByRole('link', { name: 'Content' }).click();

  await page.getByText('Local video').click();
});