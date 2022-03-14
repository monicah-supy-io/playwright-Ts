import { test, expect } from '@playwright/test';




test.describe("Checkboxes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    
  });

  test('click checkbox2 ', async({page}) => {
    const checkbox = await page.$$('#checkboxes > input[type=checkbox]:nth-child(1)');
    await checkbox[1]?.check();
    await checkbox[0]?.uncheck();
    await expect(page.locator('#checkboxes > input[type=checkbox]:nth-child(3)')).toBeChecked();
    
  });

  test('click checkbox1 ', async({page}) => {
    const checkbox = await page.$$('#checkboxes > input[type=checkbox]:nth-child(1)');
    await checkbox[0]?.check();
    await expect(page.locator('#checkboxes > input[type=checkbox]:nth-child(1)')).toBeChecked();
  
  });

  test('check checkboxes 1 and 2 ', async({page}) => {
    const checkbox = await page.$$('#checkboxes > input[type=checkbox]:nth-child(1)');
    await checkbox[0]?.check();
    await checkbox[1]?.check();
    await expect(page.locator('#checkboxes > input[type=checkbox]:nth-child(1)')).toBeChecked();
    await expect(page.locator('#checkboxes > input[type=checkbox]:nth-child(3)')).toBeChecked();
  
  });
  test('uncheck checkboxes 1 and 2 ', async({page}) => {
    const checkbox = await page.$$('#checkboxes > input[type=checkbox]:nth-child(1)');
    await checkbox[0]?.uncheck();
    await checkbox[1]?.uncheck();
    await expect(page.locator('#checkboxes > input[type=checkbox]:nth-child(1)')).toBeTruthy();
    await expect(page.locator('#checkboxes > input[type=checkbox]:nth-child(3)')).toBeTruthy();
  
  });

  test('Should check all checkboxes present ', async({page}) => {
    const els = await page.$$("#checkboxes");
    const promises = els.map(e => e.click());
    await Promise.all(promises)
    expect(els).toBeTruthy();
    
  });
  
  

  
  });

 

    
  
  





