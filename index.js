var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var driver = new webdriver.Builder().forBrowser('firefox').build();

for(var i = 100; i <= 300; i++) {
	var email = i + '@gmail.com';

	driver.manage().window().maximize();

	driver.get('http://tdconline.com.br/?bv=5786487618535424');

	driver.findElement(By.name('name')).sendKeys('hack');
	driver.findElement(By.name('email')).sendKeys(email);
	driver.findElement(By.tagName('button')).click();
}