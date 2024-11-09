import { test, expect } from '@playwright/test';


// set Today and Tomorrows Date
// https://dev.to/falselight/how-to-get-tomorrows-date-in-javascript-a-beginners-guide-3p7e
let currentDate = new Date();
let tomorrow = new Date(currentDate);
tomorrow.setDate(tomorrow.getDate() + 1);

// Convert to a Formatted string and remove the /
let currentDateFormatted = currentDate.toLocaleDateString();
let tomorrowDateFormatted = tomorrow.toLocaleDateString();
let currentDateFormattedString = currentDateFormatted.split('/');
let TomorrowDateFormattedString = tomorrowDateFormatted.split('/');

// Verify Dates are correct for myself
console.log(currentDateFormattedString);
console.log(TomorrowDateFormattedString);

// ### Depricated: Create a new date object then set currentDate = a date string
// Found on W3S https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocaledatestring
// const date = new Date();
// let currentDate = date.toLocaleDateString();
// Issue with this as the forward slash causes random symbols and must not be valid so I removed it
// let formattedCurrentDate = currentDate.split('/');

test('Add a TODO item with the text “TODO 1 - ” concatenated with the current date.', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');

  // Find Input area by ID and fill with Todo 1 & date
  await page.fill('#todo-input', `TODO 1 - ${currentDateFormattedString}`);

  // Had to be used because there was no submit button
  await page.keyboard.press('Enter');

  // Expects page to have text including below
  // Couldnt make getByLabel to work so used text instead as a verification the object is created
  await expect(page.getByText(`TODO 1 - ${currentDateFormattedString}`)).toBeVisible();

  // Find Input area by ID and fill with Todo 1 & date
  await page.fill('#todo-input', `TODO 2 - ${TomorrowDateFormattedString}`);

  // Had to be used because there was no submit button
  await page.keyboard.press('Enter');

  //https://playwright.dev/docs/locators#locate-by-text
  // Had to use CSS as both todo items were identical including ID. Check the Checkbox
  await page.locator('css=.todo-list > li:nth-child(1) > div:nth-child(1) > input:nth-child(1)').check();

  // Verify its checked
  await expect(page.locator('css=.todo-list > li:nth-child(1) > div:nth-child(1) > input:nth-child(1)')).toBeChecked();

  // Needed to click/hover so the X would show up on the element to be clicked
  await page.getByText(`TODO 2 - ${TomorrowDateFormattedString}`).click();

  // Delete the Second Todo item
  await page.locator('css=.todo-list > li:nth-child(2) > div:nth-child(1) > button:nth-child(3)').click();

  // Check Checkbox by using label
  //https://playwright.dev/docs/input


  // https://playwright.dev/docs/api/class-locatorassertions#locator-assertions-to-be-empty
  await expect(page.getByText(`TODO 2 - ${TomorrowDateFormattedString}`)).toBeHidden();
});

// test('Add a TODO item with the text “TODO 2 - ” concatenated with the next day.', async ({ page }) => {
//   await page.goto('https://todomvc.com/examples/react/dist/');

//   // Expects page to have text including below
//   // Couldnt make getByLabel to work so used text instead as a verification the object is created
//   await expect(page.getByText(`TODO 2 - ${TomorrowDateFormattedString}`)).toBeVisible();
// });