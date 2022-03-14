import { test, expect } from '@playwright/test';

test.describe("Basic Auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/geolocation');
    
  });

  test('should display page heading', async({page}) => {
    const heading = await page.$('h3')
    await heading?.click();
    await expect(page.locator('#content > div > h3')).toHaveText('Geolocation');
  
  });

  test('should display latitude and longitude', async({page}) => {
  
    const button = await page.$('#content > div > button');
    await button?.click();
    await expect(page.locator('#lat-value')).toBeTruthy();
    await expect(page.locator('#long-value')).toBeTruthy();
    
  });

  test('should display location on a google map', async({page}) => {
    const googleLink = await page.$('#content > div > button');
    await googleLink?.click();
    await page.goto('https://www.google.com/maps/place/1%C2%B013');
    
  });

});