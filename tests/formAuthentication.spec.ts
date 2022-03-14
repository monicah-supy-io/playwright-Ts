import { test, expect } from '@playwright/test';


test.describe("form Authentication", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
  });

  test('should enter username and password', async({page}) => {
    //enter username
    const userName = await page.$('input#username');
    await userName?.click();
    await page.locator('#username').fill('tomsmith');
    // enter password
    const password = await page.$('input#password');
    await password?.click();
    await page.locator('#password').fill('SuperSecretPassword!');

    // click login button
    const buttonLogin = await page.$('button.radius');
    await buttonLogin?.click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
  
  });

  test('should open success window and display flash message', async({page}) => {
    //flass message
    const flashMessage = await page.$('div#flash.flash.success');
    await flashMessage?.click();
    await expect(page.locator('#flash')).toBeTruthy();

    
  });

  test('should login', async({page}) => {
    //flass message
    const logout = await page.$('a.button.secondary.radius');
    await logout?.click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

   
   
    
  });
});
  
  