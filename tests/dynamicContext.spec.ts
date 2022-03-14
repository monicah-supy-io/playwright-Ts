import { test, expect } from '@playwright/test';


test.describe("Basic Auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_content');
    
  });

  test('Broken image1 not visible', async({page}) => {
    const heading = await page.$('h3')
    await heading?.click();
    await expect(page.locator('#content > div > h3')).toHaveText('Dynamic Content');
    
  });

  test('Should click on the link click here', async({page}) => {
    const clickHere = await page.$('#content > div > p:nth-child(3) > a');
    await clickHere?.click({button: "right" });
    await page.goto('https://the-internet.herokuapp.com/dynamic_content?with_content=static');
    
  });

  test('Should load image1 in a new page', async({page}) => {
    const image1 = await page.$('#content > div:nth-child(1) > div.large-2.columns > img');
    await image1?.click({button: "right" });
    await page.goto('https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-5.jpg');
    const img = await page.$('img');
    await img?.click();
    await expect(page.locator('body > img')).toBeVisible();
    
  });

  test('Should load image2 in a new page', async({page}) => {
    const image2 = await page.$('#content > div:nth-child(4) > div.large-2.columns > img');
    await image2?.click({button: "right" });
    await page.goto('https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-1.jpg');
    const img = await page.$('img');
    await img?.click();
    await expect(page.locator('body > img')).toBeVisible();
    
  });

  test('Should load image3 in a new page', async({page}) => {
    const image3 = await page.$('#content > div:nth-child(7) > div.large-2.columns > img');
    await image3?.click({button: "right" });
    await page.goto('https://the-internet.herokuapp.com/img/avatars/Original-Facebook-Geek-Profile-Avatar-3.jpg');
    const img = await page.$('img');
    await img?.click();
    await expect(page.locator('body > img')).toBeVisible();
    
  });
});