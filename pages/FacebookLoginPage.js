const { By, Key, until } = require('selenium-webdriver');

class FacebookLoginPage {
    constructor(driver) {
      this.driver = driver;
      this.usernameField = By.id('email');
      this.passwordField = By.id('pass');
      this.loginButton = By.name('login');
    }
  
    async login(username, password) {
      await this.driver.findElement(this.usernameField).sendKeys(username);
      await this.driver.findElement(this.passwordField).sendKeys(password);
      await this.driver.findElement(this.loginButton).click();
    }
  }
  
  module.exports = FacebookLoginPage;
