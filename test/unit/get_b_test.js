// var expect = require('chai').expect;
var getb = require('./get_b');

describe('getB() function', function () {
  it('returns the value as set in the function (simulate if it was got externally)) ', function (done) {
    expect(getb.get_b()).to.equal(5);
    done();
  });
});
