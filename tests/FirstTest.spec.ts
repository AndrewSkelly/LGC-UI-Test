import { test, expect } from '@playwright/test';

test('Add a TODO item with the text: TODO 1', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');

  // Create a new date object then set currentDate = a date string
  // Found on W3S https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocaledatestring
  const date = new Date();
  let currentDate = date.toLocaleDateString();
  // Issue with this as the forward slash causes random symbols and must not be valid so I removed it
  let formattedCurrentDate = currentDate.split('/');

  // Find Input area by ID and fill with Todo 1 & date
  await page.fill('#todo-input', `TODO 1 - ${formattedCurrentDate}`);

  // Had to be used because there was no submit button
  await page.keyboard.press('Enter');
  
  // Expects page to have text including below
  // Couldnt make getByLabel to work so used text instead as a verification the object is created
  await expect(page.getByText(`TODO 1 - ${formattedCurrentDate}`)).toBeVisible();
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://todomvc.com/examples/react/dist/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });