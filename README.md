# Protractor Jasmine 2 Fail Whale

This Jasmine 2 reporter bails (quits the Jasmine process) when encountering a failed assert in a Jasmine spec.

Example:

```
    ▄██████████████▄▐█▄▄▄▄█▌
    ██████▌▄▌▄▐▐▌███▌▀▀██▀▀
    ████▄█▌▄▌▄▐▐▌▀███▄▄█▌
    ▄▄▄▄▄██████████████▀

Failed: No element found using locator: By.cssSelector("#erroorr")
```

I wrote this after discovering that Protractor could no long use `jasmineNodeOpts.realtimeFailure = true` after upgrading to Jasmine 2.


## Install

`npm install protractor-jasmine2-fail-whale --save-dev`


## Usage


```javascript

  // Require the Reporter (in your onPrepare)
  var failWhale = require('protractor-jasmine2-fail-whale');

  // Add the Fail Whale Reporter
  jasmine.getEnv().addReporter(new failWhale({
    
    // Set to true if you would like to see the stack trace
    showStack: false
  }));
```

