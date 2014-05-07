var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).
build();

driver.get('file:///E:/workspace/GitHub/guess-film/index.html');
driver.findElement(webdriver.By.id('navGamePage')).click();