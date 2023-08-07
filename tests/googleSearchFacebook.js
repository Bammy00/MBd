const { Builder, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');
const FacebookLoginPage = require('./FacebookLoginPage');
const FacebookProfilePage = require('./FacebookProfilePage');
const GoogleSearchPage = require('./GoogleSearchPage');

async function facebookLoginAndPost() {
  // Set Chrome options to run in headless mode (optional)
  const chromeOptions = new chrome.Options();
  // chromeOptions.addArguments('--headless');

  // Initialize the WebDriver
  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(chromeOptions)
    .build();

  try {
    // Navigate to Facebook login page
    const facebookLoginPage = new FacebookLoginPage(driver);
    await driver.get('https://www.facebook.com');

    // Login to Facebook
    const username = 'your user name'; // Replace with your Facebook username
    const password = 'your password'; // Replace with your Facebook password
    await facebookLoginPage.login(username, password);

    // Wait for the login process to complete
    await driver.wait(() => driver.getCurrentUrl().then(url => !url.includes('login')), 10000);

    // Assert that login is successful
    const facebookProfilePage = new FacebookProfilePage(driver);
    assert.ok(await facebookProfilePage.postField.isDisplayed(), 'Login successful!');
    console.log('Login successful!');

    // Make a post "I Kill Bugs!"
    await facebookProfilePage.makePost('I Kill Bugs!');
    await driver.sleep(5000);
    console.log('Posted: "I Kill Bugs!"');

    // Go to Google and search for "best QA Engineering practices"
    const googleSearchPage = new GoogleSearchPage(driver);
    await driver.get('https://www.google.com');
    await googleSearchPage.search('best QA Engineering practices');

    // Wait for search results
    await driver.sleep(5000);
    console.log('Google search completed');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Quit the WebDriver
    await driver.quit();
  }
}

facebookLoginAndPost();
