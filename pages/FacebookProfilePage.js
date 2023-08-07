const { By } = require('selenium-webdriver');

class FacebookProfilePage {
  constructor(driver) {
    this.driver = driver;
    this.postField = By.css('[aria-label="Create a post"]');
  }

  async makePost(message) {
    await this.driver.findElement(this.postField).sendKeys(message, Key.ENTER);
  }
}

module.exports = FacebookProfilePage;
