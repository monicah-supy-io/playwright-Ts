import { test, expect } from '@playwright/test';

test.describe("abtest", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const name = await page.title()
    expect(name).toBe('The Internet');
  });

  test('Should click on the abtest link', async({page}) => {
    const inputElement = await page.$('text=A/B Testing');
    await page.click('//*[@id="content"]/ul/li[1]/a');
    await expect(page.locator('#content > div')).toHaveCount(1);

  });

});





  //await page.locator('text=A/B Test Variation 1').click();
  // Click text=Also known as split testing. This is a way in which businesses are able to simul
  //await page.locator('text=Also known as split testing. This is a way in which businesses are able to simul').click();
