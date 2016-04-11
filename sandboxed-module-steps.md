### Note:
** Should have done addCandD first and drove out get_c and get_d from that **

### Steps to do add c and d

#### Steps to get value for c
* Create test file `soap-add/test/unit/get_c_test.js`
```
var getc = require('../../routes/get_c');
describe('getC()  function', function () {
  it('returns the value as set in the function (as if it was got somewhere)) ', function (done) {
    expect(getc()).to.equal(18);
    done();
  });
});
```
* Run the test (fails)
* Create empty `soap-add/routes/get_c.js`
* Rerun the test (fails)
* Add minimum code to get to next step
```
function get_c() {
}
module.exports = get_c;
```
* Rerun the test (fails)
* Add minimum code to pass the test
```
function get_c() {
    return 18;
}
```
* Rerun the test - **it passes**
* Refactor
```
function get_c() {
    var c = 18; // Lets pretend we get this value from somewhere
    return c;
}
```
* Rerun the test - **it passes**

#### Steps to get value for d
Repeat as for c:
* Create test file `soap-add/test/unit/get_d_test.js`
* Run the test (fails)
* Create empty `soap-add/routes/get_d.js`
* Rerun the test (fails)
* Add minimum code to get to next step
* Rerun the test (fails)
* Add minimum code to pass the test
* Rerun the test - **it passes**
* Refactor
```
function get_d() {
  var d = 21; // Lets pretend we get this value from somewhere
  return d;
}
module.exports = get_d;
```
* Rerun the test - **it passes**

#### Add c and d but do not call the get_c or get_d functions
* Create test
```
describe('addCandD() function', function () {
  it('returns the sum of 2 values as calculated in the function) ', function (done) {
    expect(addCandD()).to.equal(9);
    done();
  });
});
```
* Run the test (fails)
* Add a requires to test file
```
var addCandD = require('../../routes/add_c_and_d');
describe('addCandD() function', function () {
    it('returns the sum of 2 values as calculated in the function) ', function (done) {
      expect(addCandD()).to.equal(9);
      done();
    });
});
```
* Create the implementation module with minimum
* Create empty `soap-add/routes/get_d.js`
* Rerun the test (fails)
* Add minimum code to get to next step
* Rerun the test (fails)
* Add minimum code to pass the test
* Rerun the test - **it passes**
* Refactor
```
function addCandD () {
    var sum = 9;
    return sum;
}
module.exports = addCandD;
```
#### We want to drive out addCandD implementation without the test calling the real get_c or get_d
We know we want addCandD to call get_c and get_d and return the results. However we dont want our tests to call those methods.
* `npm install sandbox-module --save-dev`
*
*

## NOTE:
** When using the sandboxed-module order appears to be important! **


#### Played with enhancing script section of package.json
```
"scripts": {
    "prestart": "node ./test/unit/get_a.js",
    "start": "nodemon ./bin/www",
    "pretest": "npm run lint",
    "test": "node node_modules/.bin/mocha",
    "posttest": "echo 'the test has been run!'",
    "lint": "jshint routes/ test/ ",
    "anotherway": "jshint *.js **/*.js **/**/*.js"
  },
  ```
#### To use nodemon and run the app using node
* change package.json `"start": "node ./bin/www",` to `"start": "nodemon ./bin/www",`
* start the application on server using `PORT=3000 node ./bin/www`



Various references:
https://github.com/search?utf8=%E2%9C%93&q=sandboxed-module+app&type=Code&ref=searchresults

https://github.com/totem/configurator/tree/df6938fed08052f5f80989d95d1c3236aa940c40/sandbox

https://github.com/totem/configurator/blob/df6938fed08052f5f80989d95d1c3236aa940c40/app.js

https://github.com/zappan/node-marionette-boilerplate/blob/2349d04c285bca424714ce434c2c76510c06e1ca/server/test/app.spec.js

code coverage metrics
http://www.vapidspace.com/coding/2014/10/29/code-coverage-metrics-with-mocha-and-istanbul/

blanket
http://techblog.net-a-porter.com/2014/03/measuring-test-coverage-of-dependency-injected-node-js-modules-via-blanket-js/

https://travis-ci.org/felixge/node-sandboxed-module/builds/65164771