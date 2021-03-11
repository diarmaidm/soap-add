[![Build Status](https://travis-ci.org/diarmaidm/soap-add.svg?branch=master)](https://travis-ci.org/diarmaidm/soap-add)

# Useful links and information.
* [Agile Manifesto](http://agilemanifesto.org/)
* [Printable pdf and hig-res png can be got from here...](http://richd.me/2011/05/agile-manifesto-poster/)
* [Printable pdf direct link](http://richd.me/wp-content/uploads/2011/05/Agile-Manifesto.pdf)
* [The Agile Manifesto - article by Martin Fowler](http://goo.gl/M1shQh)
* [Kanban vs Scrum vs XP – an Agile comparison](https://goo.gl/dTv0N2)
  * Scrum "project management methodology".
  * Kanban - workflow is visualised (TPS Toyota Production System).
  * XP (short for eXtreme Programming) is a framework.

# Our development cycle.
1. Red
1. Green
1. Refactor

We aim to work on **Products** as opposed to __Projects__
<br>Every story should deliver customer value

* Write a test.
* Run the test and watch it fail (Red).
* Write the minimum amount of implementation code to make the test pass (Green).
* Run the test and watch it pass (Green).
* Look for anything that may need refactoring.
  _**This should not introduce new functionality nor should it change the behaviour of existing implementation.**_
* Rerun the tests and ensure nothing has broken.
* Repeat.

<hr>

# Multiple 2 numbers.
## Create the UI test
* Write a UI Test
  * create new test file in ui_tests directory `multiply_2_numbers_test`
  * Add initial test
    ```
    Feature('Multiply 2 numbers');

    Scenario('Multiply 2 numbers and show product', (I) => {
    I.amOnPage('/multiply');
    I.see('Welcome to multiply');
    });
    ```
* _**Run (and Fail) the test**_
* Create the new route/path (app.js)
* _**Rerun the test**_
* create an empty file to handle the route
* _**Rerun the test**_
* Add minimum code
```
  var express = require('express');
  var router = express.Router();
  module.exports = router;
```
* _**Rerun the test**_
* Add minimum code
```
  router.get('/', function(req, res, next) {
    res.end();
  });
```
* _**Rerun the test**_
* ... continue this cycle until the initial UI test passes.
```
  Multiply 2 numbers --
  Multiply 2 numbers and show product
  • I am on page "/multiply"
  • I see "Welcome to multiply"
  ✓ OK in 925ms
```
* Once the test passes restart/continue the cycle again...

<hr>

**Note** I am skipping and/or compressing some steps for briefness in the document.
* Build out our UI test and basic implementation using Red - Green - Refactor.
  ```
  Feature('Multiply 2 numbers');

  Scenario('Multiply 2 numbers and show product', (I) => {
    I.amOnPage('/multiply');
    I.see('Welcome to multiply');
    I.fillField('First Number', '9');
    I.fillField('Second Number', '8');
    I.click('Multiply the numbers');
    I.see('The product of 9 * 8 = 72');
  });
  ```
* There will be several failures to get us to green, Keep doing Red - Green cycle.
  * Fail because there is not a route/path to handle the form.
    ```
    router.post('/', function(req, res, next) {
      res.end();
    });
    ```
  * Fail because we are not rendering the page. Change
    ```
    res.end();
    ```
    to
    ```
    res.render('multiply', { title: 'Welcome to multiply' });
    ```
  * get the two numbers from the form and render the page
    ```
      router.post('/', function(req, res, next) {
        var firstNumber = req.body.firstNumber;
        var secondNumber = req.body.secondNumber;
        res.render('multiply', { title: 'Welcome to multiply', firstNumber: firstNumber, secondNumber: secondNumber });
    });
    ```

* We can (will) add a call to the method that will multiply, (but doesn't yet exist)
    ```
    router.post('/', function(req, res, next) {
      var firstNumber = req.body.firstNumber;
      var secondNumber = req.body.secondNumber;
      var result = multiply(firstNumber, secondNumber); // This is not defined...
      res.render('multiply', { title: 'Welcome to multiply', firstNumber: firstNumber, secondNumber: secondNumber, result: result });
    });
    ```

<hr>

### We are at stage we know we calculate product (UI test will remain failing until lower level tests fail).
* Create unit test file
  * Add the initial test
    * _**Run tests**_
  * Write minimum code to pass test
    * _**Run tests**_
  * Add more to test
    * _**Run tests**_
  * Write minimum code to pass test
    * _**Run tests**_
  * Add more to test
    * _**Run tests**_
  * Write minimum code to pass test
    * _**Run tests**_

Once our multiply is completed and unit tests pass our UI test will (should) automatically pass.

<hr>

**NOTE:**
<br>The further we get into developing a **product** the more robust our tests become.
<br>We have built in regression testing from the start.
<br>CI (Continuous Integration) and CD (Continuous Deployment) means our code is integrated after each commit (checkin).

### Note: To run the ui tests
* `phantomjs --webdriver=4444` or
* `java -jar ./ui_tests/selenium-server-standalone-2.53.0.jar`
* `npm start`
* `codeceptjs run --steps`

<hr>

# Add two number using a soap call
## This application adds two numbers using an external soap service

fork and clone application locally eg.

```git clone https://address.copied.from.github/```

### Install local dependancies

`npm install` to install npm packages

`bower install` to install client side dependancies eg. bootstrap

### Run the tests
`npm test`

### Run the application locally
Start the server with `npm start` and browse http://localhost:3000 in chrome

### Pivotal Cloud Foundry
This application is published to http://soap-add.cfapps.io/

### Heroku
It is also published to https://soap-add.herokuapp.com/

### Travis-ci
https://travis-ci.org/getting_started

## Working Notes:
I installed jshint as a dev dependancy
```npm install jshint --save-dev```

```"pretest": "jshint routes test",```
to package.json to do basic linting when tests are ran

#### Installing codeceptjs
`npm install --save-dev codeceptjs`
`npm install --save-dev webdriverio`
`npm install -g codeceptjs`
`npm install -g webdriverio`
