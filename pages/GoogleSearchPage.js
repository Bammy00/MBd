const { By, Key } = require('selenium-webdriver');

class GoogleSearchPage {
  constructor(driver) {
    this.driver = driver;
    this.searchBox = By.name('q');
  }

  async search(query) {
    await this.driver.findElement(this.searchBox).sendKeys(query, Key.RETURN);
  }
}

module.exports = GoogleSearchPage;
