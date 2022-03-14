import { test, expect } from '@playwright/test';


test.describe("Basic Auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');
    
  });

  test('Broken image1 not visible', async({page}) => {
    const image1 = await page.$('asdf.jpg');
    await image1?.click({button: "right" });
    await page.goto('https://the-internet.herokuapp.com/asdf.jpg')
    const heading = await page.$('h1')
    await heading?.click();
    await expect(page.locator('body > h1')).toHaveText('Not Found');
    
  });

  test('Broken image2 not visible', async({page}) => {
    const image2 = await page.$('hjkl.jpg');
    await image2?.click({button: "right" });
    await page.goto('https://the-internet.herokuapp.com/hjkl.jpg')
    const heading = await page.$('h1')
    await heading?.click();
    await expect(page.locator('body > h1')).toHaveText('Not Found');
  
   
    
  });

  test('Broken image3 is visible', async({page}) => {
    const image3 = await page.$('#content > div > img:nth-child(4)');
    await image3?.click({button: "right" });
    await page.goto('https://the-internet.herokuapp.com/img/avatar-blank.jpg')
    const img = await page.$('img');
    await img?.click();
    await expect(page.locator('body > img')).toBeVisible();
    
    
  });
});

