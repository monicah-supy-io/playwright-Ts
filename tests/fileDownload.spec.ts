import { test, expect } from '@playwright/test';

test.describe("File downloads", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/download');
    
  });

  test('confirm page heading', async({page}) => {
    //confirm heading title
    const heading3 = await page.$('h3');
    await heading3?.click();
    await expect(page.locator('#content > div > h3')).toHaveText('File Downloader');
    
  });

  test('Download files', async({page}) => {
    //confirm page download
    const [ download ] = await Promise.all([
      // Start waiting for the download
      page.waitForEvent('download'),
      // Perform the action that initiates download
      page.click('#content > div > a:nth-child(2)')
    ]);
    // Wait for the download process to complete
    const path = await download.path();
    await download?.path();
    expect(path).toBeTruthy();
    
    
    
  });
});




