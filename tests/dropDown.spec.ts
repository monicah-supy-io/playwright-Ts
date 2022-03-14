import { test, expect } from '@playwright/test';

test.describe('alerts', () => {
  test.beforeEach(async ({ page }) => {
      await page.goto('https://the-internet.herokuapp.com/dropdown');
  });

  test('should select option 1', async ({ page }) => {
      const dropdown = await page.$('select#dropdown');
      await dropdown.selectOption({value: '1'});
      await expect(page.locator('#dropdown > option:nth-child(2)')).toBeTruthy();
  });

  test('should select option 2', async ({ page }) => {
          
    const dropdown = await page.$('select#dropdown');
    await dropdown.selectOption({value: '2'});
    await expect(page.locator('#dropdown > option:nth-child(3)')).toBeTruthy();

  });

  test('should get all options inside selector', async ({ page }) => {
          
    const availableOptions = await page.$$('options');
    for( let i=0; i < availableOptions.length; i++){
      console.log(await availableOptions[i].innerText());
    }

    expect(availableOptions).toBeTruthy();
    

  });

 
    

  });


    



      
 


          
