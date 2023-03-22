const { browser } = require("protractor");
let loginAccess = require("./testSuites/loginDM.js");
let addCartAccess = require("./testSuites/productAddCart.js");
let deleteAccess = require("./testSuites/deleteCart.js")
let paymentAccess = require("./testSuites/placeOrder.js");


describe ("Demoblaze", function(){
  beforeEach(function(){
    originalTimout = jasmine.DEFAULT_TIMEOUT_INTERVAL; //ensures that the program doesn't get stuck if something goes wrong
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000; //means the program should not take longer than this time

  });
  afterEach(function(){
    //browser.executeScript('windows.sessionStorage.clear();');
    //browser.executeScript('window.localStorage.clear();');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimout;
  });

  it ("setup", function(){
    browser.waitForAngularEnabled(false);

    browser.get("https://www.demoblaze.com/");
    browser.manage().window().maximize();
    browser.sleep(3000);
    expect(browser.getTitle()).toEqual("STORE");
  });

  loginAccess.userlogin();
  addCartAccess.useraddcart();
  deleteAccess.userdeletecart();
  paymentAccess.userplaceorder();

});