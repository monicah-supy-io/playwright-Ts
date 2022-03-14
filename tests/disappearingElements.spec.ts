import { test, expect } from '@playwright/test';

test.describe("Disappearing elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
    
  });

  test('right click on content menu', async({page}) => {

    const heading = await page.$('h3')
    await heading?.click();
    await expect(page.locator('#content > div > h3')).toHaveText('Disappearing Elements');
    
  });


  test('disappearing home element', async({page}) => {
    const home = await page.$('#content > div > ul > li:nth-child(1) > a');
    await home?.click({button: "right" });
    await page.goto('https://the-internet.herokuapp.com/');
    expect(home).toBeTruthy();
    
});

test(' about element', async({page}) => {
  const about = await page.$('#content > div > ul > li:nth-child(2) > a');
  await about?.click({button: "right" });
  await page.goto('https://the-internet.herokuapp.com/about/');
  const heading = await page.$('h1')
  await heading?.click();
  await expect(page.locator('body > h1')).toHaveText('Not Found');
  
});

test('contact us element', async({page}) => {
  const contact = await page.$('#content > div > ul > li:nth-child(3) > a');
  await contact?.click({button: "right" });
  await page.goto('https://the-internet.herokuapp.com/contact-us/');
  const heading = await page.$('h1')
  await heading?.click();
  await expect(page.locator('body > h1')).toHaveText('Not Found');
  
});

test('portfolio element', async({page}) => {
  const portfolio = await page.$('#content > div > ul > li:nth-child(4) > a');
  await portfolio?.click({button: "right" });
  await page.goto('https://the-internet.herokuapp.com/portfolio/');
  const heading = await page.$('h1')
  await heading?.click();
  await expect(page.locator('body > h1')).toHaveText('Not Found');
  
});
test('gallery element', async({page}) => {
  const gallery = await page.$('#content > div > ul > li:nth-child(5) > a');
  await gallery?.click({button: "right" });
  await page.goto('https://the-internet.herokuapp.com/gallery/');
  const heading = await page.$('h1')
  await heading?.click();
  await expect(page.locator('body > h1')).toHaveText('Not Found');
  
});

});


