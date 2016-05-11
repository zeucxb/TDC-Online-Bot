var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var driver = new webdriver.Builder().forBrowser('firefox').build();

driver.manage().window().maximize();

// Coloque emails obvios
for(var i = 1900; i <= 3000; i++) {
	var email = i + '@gmail.com';

	driver.get('http://tdconline.com.br/?bv=5786487618535424');

	driver.findElement(By.name('name')).sendKeys('hack ' + i);
	driver.findElement(By.name('email')).sendKeys(email);
	driver.findElement(By.tagName('button')).click();
}
