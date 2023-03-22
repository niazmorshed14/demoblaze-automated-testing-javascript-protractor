const { browser, element, ExpectedConditions } = require("protractor");

let login = function() {
  
  this.userlogin = function(){
    it ("sucessfull login", function(){
      element (by.xpath("//a[@id='login2']")).click();
      browser.sleep(1500);
      let userbox = element (by.xpath("//input[@id='loginusername']"));
      userbox.click();
      userbox.sendKeys("niaz@94");
      browser.sleep(1500);

      let passbox = element (by.xpath("//input[@id='loginpassword']"));
      passbox.click();
      passbox.sendKeys("123456");
      browser.sleep(1500);

      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//button[contains(text(),'Log in')]")).click();
      browser.sleep(4000);

      let veriflogin = element (by.xpath("//a[@id='nameofuser']"));
      expect (veriflogin.getText()).toEqual("Welcome niaz@94");
    
    });

  };

};

module.exports = new login();