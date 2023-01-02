import { test, expect } from '@playwright/test';
import {allure} from 'allure-playwright';


test('find locator', async({page}) => {

    await page.goto('https://www.saucedemo.com/')

    // using any obejct property 
    await page.click('id=user-name') 
    await page.locator('id=user-name').fill('standard_user')
    await page.locator('[id="user-name"]').fill('standard_user')  //same above line

    // using css selector 
    await page.locator('input[type="submit"]').click()

    //using xpath
    await page.locator('//input[@type="submit"]').click()

    //using text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()

 


})