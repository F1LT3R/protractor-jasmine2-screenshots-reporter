(function () {

  'use strict';

  var fs = require('fs');


  function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }


  var ScreenshotsReporter = function FailWhale (defs) {

    return {
      jasmineStarted: function(suiteInfo) {},
      suiteStarted: function(result) {},
      specStarted: function(result) {},

      specDone: function(result) {
        if (result.failedExpectations.length) {

          browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, './tmp/exception.png');
          });

        }
      },

      suiteDone: function(result) {},
      jasmineDone: function() {},
    };
  };

  module.exports =  ScreenshotsReporter;

});
