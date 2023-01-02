const {test, expect} =  require('@playwright/test')
// import {test, expect} from '@playwright/test' // same as above line const {test, expect} =  require('@playwright/test')


test('my first test', async({page}) => {
   await page.goto('https://www.google.com')
   await expect(page).toHaveTitle('Google')

})
