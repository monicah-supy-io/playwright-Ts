import { test, expect } from '@playwright/test';


test.describe("add remove Elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/broken_images');
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');
  });

  test("click buttons and check url match", async ({ page }) => {
  const button = await page.$('a.button.alert');
  await button?.click();

  //assert link
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom');


  });


});

  



