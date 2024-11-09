import { test, expect } from '@playwright/test';

test('Add a TODO item with the text: TODO 1', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');

  const date = new Date();
  let currentDate = date.toLocaleDateString();

  // Find Input area by placeholder shown and fill with Todo 1
  await page.getByPlaceholder('What needs to be done?').fill('TODO 1 - ' + currentDate);
  await page.keyboard.press('Enter');
  
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByLabel('TODO 1 - ' + currentDate)).toBeVisible();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://todomvc.com/examples/react/dist/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });