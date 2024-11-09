# LGC-UI-Test
UI Testing Challenge

Set up a base project
npm init -y

Install Playwright following docs - https://playwright.dev/docs/intro
Accepted defaults for all selections during setup
npm init playwright@latest

Deleted example tests boilerplate.

To run all tests the command is shown below
npx playwright test

https://playwright.dev/docs/api/class-locator#locator-fill

explains using fill to input into this textbox


View tests Graphically
npx playwright test --ui

Using Date
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tolocaledatestring

Setup Allure Reporting
install Node JS & Java Version 8

npm install -g allure-commandline

Add Java directory to System envieroment variable (JAVA_HOME)
Under PATH in system env variables add %JAVA_HOME%\bin so it is linked!!!
Restart your IDE I had to so everything took effect.

Here Allure explains to intergrate with playwright
https://allurereport.org/docs/playwright/

Install the Adaptor
npm install --save-dev @playwright/test allure-playwright

Add this line to the playwright config
reporter: [["line"], ["allure-playwright"]],

Run either for testing or UI form of testing
npx playwright test
npx playwright test --ui  

It has now generated a allure-results folder and to analyse I ran
allure serve allure-results
