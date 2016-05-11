var webdriver = require('selenium-webdriver');
var By = webdriver.By;

var driver = new webdriver.Builder().forBrowser('firefox').build();

driver.manage().window().maximize();

function bot(email) {
	driver.get('http://tdconline.com.br/?bv=5786487618535424');

	driver.findElement(By.name('name')).sendKeys('hack ' + i);
	driver.findElement(By.name('email')).sendKeys(email);
	driver.findElement(By.tagName('button')).click();
}

var email;

for(var i = 0; i <= 100; i++) {
	email = 'a' + i + '@hotmail.com';

	bot(email);

	email = 'a' + i + '@gmail.com';

	bot(email);

	email = 'a' + i + 'yahoo.com';

	bot(email);
}
