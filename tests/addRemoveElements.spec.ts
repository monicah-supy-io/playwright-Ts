import { test, expect } from '@playwright/test';


test.describe("add remove Elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    const name = await page.title()
    expect(name).toBe('The Internet');
  });

  test('Should Add Elements', async({page}) => {
    const addElement = await page.$('button');
    await addElement?.click();
    await expect(page.locator('button.added-manually')).toBeVisible();

  });

  test('Should Remove Elements', async({page}) => {

    const deleteElement = await page.$('button.added-manually');
    await deleteElement?.click();
    await expect(page.locator('#elements > button:nth-child(1)')).toHaveCount(0);
    

    });
   

  });

  





