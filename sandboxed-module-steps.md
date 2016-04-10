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


