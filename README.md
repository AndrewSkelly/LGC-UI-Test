## UI Testing Challenge - Andrew Skelly
### My Explanation is seen in my comments in the test file for further understanding!

### How to Set up yourself
git clone this repository then run the below command to install dependencies
```
npm install
```

Setup Allure Reporting by installing Node JS & Java Version 8
```ruby
npm install -g allure-commandline
```

Add Java directory to System envieroment variable (JAVA_HOME)
Under PATH in system env variables add %JAVA_HOME%\bin so it is linked!!!
Restart your IDE I had to so everything took effect.

#### My setup
```ruby
npm init -y
```

Install Playwright following docs - https://playwright.dev/docs/intro
Accepted defaults for all selections during setup
```ruby
npm init playwright@latest
```

#### Deleted example tests boilerplate!

To run all tests the command is shown below for headed & headless mode
```ruby
npx playwright test
npx playwright test --ui  
```

https://playwright.dev/docs/api/class-locator#locator-fill
explains using fill to input into this textbox

Here Allure explains to intergrate with playwright
https://allurereport.org/docs/playwright/

Install the Adaptor
```ruby
npm install --save-dev @playwright/test allure-playwright
```

Add this line to the playwright config
```js
reporter: [["line"], ["allure-playwright"]],
```

Run either for testing or UI form of testing
```ruby
npx playwright test
npx playwright test --ui  
```

It has now generated a allure-results folder and to analyse I ran

NOTE: I had Issues using Powershell in VS Code but using CMD seemed to be fine if you have the same issues
allure serve allure-results

