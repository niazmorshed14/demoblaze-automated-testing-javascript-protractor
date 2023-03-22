const { browser, element } = require("protractor");
const { BrowserStack } = require("protractor/built/driverProviders");

let placerOrder = function() {
  this.userplaceorder = function () {
    it ("place order", function(){

      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//button[contains(text(),'Place Order')]")).click();
      browser.sleep(2000);

      let namebox = element(by.xpath("//input[@id='name']"));
      namebox.click();
      namebox.sendKeys("Md. Niaz Morshed");
      browser.sleep(1000);

      let country = element (by.xpath("//input[@id='country']"));
      country.click();
      country.sendKeys("Bangladesh");
      browser.sleep(1000);

      let city = element (by.xpath("//input[@id='city']"));
      city.click();
      city.sendKeys("Dhaka");
      browser.sleep(1000);

      let creditcard = element (by.xpath("//input[@id='card']"));
      creditcard.click();
      creditcard.sendKeys("2145874");
      browser.sleep(1000);

      let month = element (by.xpath("//input[@id='month']"));
      month.click();
      month.sendKeys("March");
      browser.sleep(1000);

      let year = element (by.xpath("//input[@id='year']"));
      year.click();
      year.sendKeys("2023");
      browser.sleep(1000);

      element (by.xpath("//button[contains(text(),'Purchase')]")).click();
      
      browser.manage().timeouts().implicitlyWait(2000);
         //handling alert
      //let alert = browser.switchTo().alert(); //or browser.switchTo().alert().dismiss();
      //alert.dismiss();
      

      browser.sleep(6000);
    });
    
    };

  };



module.exports = new placerOrder ();