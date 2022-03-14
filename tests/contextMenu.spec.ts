import { test, expect } from '@playwright/test';


test.describe("Context Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    
  });

  test('right click on content menu', async({page}) => {

    const heading = await page.$('h3')
    await heading?.click();
    await expect(page.locator('#content > div > h3')).toHaveText('Context Menu');
    
  });

  test('right click on content menu and get an alert', async({page}) => {
    const hotspot = await page.$('#hot-spot');
    await hotspot?.click({button: "right" });
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});

    expect(dialog.message()).toContain("You selected a context menu");
    });
    
    
  });
});





