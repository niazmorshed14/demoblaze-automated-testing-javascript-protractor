//allure report code starts
var AllureReporter = require('jasmine-allure-reporter');
var fs = require('fs');

function removeAllureResult(dirPath) {
  try { var files = fs.readdirSync(dirPath); }
  catch (e) { return; }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        removeAllureResult(filePath);
    }
  fs.rmdirSync(dirPath);
};
//allure report code ends



// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 40000
  },
  //remove allure results
onPrepare: function () {

  removeAllureResult('./allure-results');

  jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })


    });

  }

};



/*
this is the code for vide report. this code will start after "removeAllureResult('./allure-results');" and ends before "jasmine.getEnv().addReporter(new AllureReporter());"

// VideoReporter.prototype.jasmineStarted = function() {
    //   var self = this;
    //   if (self.options.singleVideo) {
    //     var videoPath = path.join(self.options.baseDirectory, 'protractor-specs.avi');

    //     self._startScreencast(videoPath);

    //     if (self.options.createSubtitles) {
    //       self._subtitles = [];
    //       self._jasmineStartTime = new Date();
    //     }
    //   }
    // }; 

    // jasmine.getEnv().addReporter(new VideoReporter({
    //       baseDirectory: path.normalize(path.join(__dirname, '../testresults/videos/')),
    //       createSubtitles: true,
    //       singleVideo: true,
    //       ffmpegCmd: path.normalize('./node_modules/ffmpeg-binaries/bin/ffmpeg.exe'),
    //       ffmpegArgs: [
    //           '-f', 'gdigrab',
    //           '-framerate', '24',
    //           '-video_size', 'wsxga',
    //           '-i', 'desktop',
    //           '-q:v','10',
    //       ]
    //     }));



*/