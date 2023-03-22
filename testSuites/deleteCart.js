const { browser } = require("protractor");

let deleteCart = function() {
  this.userdeletecart = function () {

    

      it ("delete items", function(){
        browser.manage().timeouts().implicitlyWait(8000);
        element (by.xpath("//tbody/tr[1]/td[4]/a[1]")).click();
        browser.sleep(4000);

        browser.manage().timeouts().implicitlyWait(10000);
         //handling alert
        //let alert = browser.switchTo().alert();
        //alert.dismiss();
      
      });
    
  };
};

module.exports = new deleteCart();