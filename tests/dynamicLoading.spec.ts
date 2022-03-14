import { test, expect } from '@playwright/test';

test.describe("Basic Auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading');
    
  });

  test('Heading should be visible', async({page}) => {
    const heading = await page.$('h3')
    await heading?.click();
    await expect(page.locator('#content > div > h3')).toHaveText('Dynamically Loaded Page Elements');
    
  });

  test('Elements on page that is hidden', async({page}) => {
    // click on the example link
    const example1 = await page.$('#content > div > a:nth-child(5)');
    await example1?.click();
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    //confirm heading title
    const heading3 = await page.$('h3');
    await heading3?.click();
    await expect(page.locator('#content > div > h3')).toHaveText('Dynamically Loaded Page Elements');

    //confirm second heading
    const heading4 = await page.$('h4');
    await heading4?.click();
    await expect(page.locator('#content > div > h4')).toHaveText('Example 1: Element on page that is hidden');

    //makes third heading visible
    const start = await page.$('#start > button');
    await start?.click();
    await expect(page.locator('#finish > h4')).toBeVisible();
    
  });

  test('Elements renderd after the fact', async({page}) => {
    // click on the example 1 link
    const example2 = await page.$('#content > div > a:nth-child(8)');
    await example2?.click();
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
    

    //confirm heading title
    const heading3 = await page.$('h3');
    await heading3?.click();
    await expect(page.locator('#content > div > h3')).toHaveText('Dynamically Loaded Page Elements');

    //confirm second heading
    const heading4 = await page.$('h4');
    await heading4?.click();
    await expect(page.locator('#content > div > h4')).toHaveText('Example 2: Element rendered after the fact');

    //make third heading to have title
    const start = await page.$('#start > button');
    await start?.click();
    await expect(page.locator('#finish > h4')).toHaveText('Hello World!');
    
  });


});




