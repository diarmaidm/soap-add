// var expect = require('chai').expect;
var add_numbers = require('../../routes/add_numbers');

describe('model add function', function () {
  it('adds 3 and 4 and returns 7 ', function (done) {
    expect(add_numbers(3,4)).to.equal(7);
    done();
  });

  it('adds 5 and 4 and returns 9 ', function (done) {
    expect(add_numbers(5,4)).to.equal(9);
    done();
  });
});
