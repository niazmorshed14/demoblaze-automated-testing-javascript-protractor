const { browser, element } = require("protractor")

let addCart = function() {

  this.useraddcart = function () {

    it ("adding products", function(){

      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//a[contains(text(),'Laptops')]")).click(); //click on laptops
      browser.sleep(1000);

      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//a[contains(text(),'MacBook Pro')]")).click(); //click on macbook pro
      browser.sleep("1000");

      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//a[contains(text(),'Add to cart')]")).click(); //add to cart
      browser.sleep(1000);

      browser.manage().timeouts().implicitlyWait(10000);
         //handling alert
      let alert = browser.switchTo().alert();
      alert.dismiss();


      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//body/nav[1]/div[1]/div[1]/ul[1]/li[1]/a[1]")).click(); //go back to homepage
      browser.sleep(1000);

      browser.manage().timeouts().implicitlyWait(3000);
      let navbutton = element (by.xpath("//body/nav[@id='narvbarx']/div[@id='contcar']/div[@id='carouselExampleIndicators']/a[2]/span[1]")); //clicking on slider 3 times

      navbutton.click();
      //browser.sleep(1000);
      navbutton.click();
      //browser.sleep(1000);
      navbutton.click();
      browser.sleep(1000);

      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//button[@id='next2']")).click(); //going next page
      browser.sleep(2000);


      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//a[contains(text(),'Apple monitor 24')]")).click(); //selecting another product
      browser.sleep(1500);
      
      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//a[contains(text(),'Add to cart')]")).click(); //adding to cart
      browser.sleep(1000);

      browser.manage().timeouts().implicitlyWait(10000);
         //handling alert
      alert = browser.switchTo().alert();
      alert.dismiss();

      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//body/nav[1]/div[1]/div[1]/ul[1]/li[1]/a[1]")).click(); //go back to homepage
      browser.sleep(1500);

      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//a[contains(text(),'Phones')]")).click(); //selecting another catagory
      browser.sleep(1000);

      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//a[contains(text(),'Iphone 6 32gb')]")).click(); //selecting another product
      browser.sleep(1500);

      browser.manage().timeouts().implicitlyWait(3000);
      element (by.xpath("//a[contains(text(),'Add to cart')]")).click(); //adding to cart
      browser.sleep(1000);

      browser.manage().timeouts().implicitlyWait(10000);
         //handling alert
      alert = browser.switchTo().alert();
      alert.dismiss();

      browser.manage().timeouts().implicitlyWait(8000);
      element (by.xpath("//a[@id='cartur']")).click(); //view the cart to see the proruct list
      browser.sleep(3000);
      
      //scrolling the page
      browser.manage().timeouts().implicitlyWait(8000);
      browser.executeScript("window.scrollTo(0,8000);").then (function(){
      browser.sleep(2000);

      });

      //now we have 3 products on the cart

    });

  };


};

module.exports = new addCart ();