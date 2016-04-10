var expect = require('chai').expect;
var geta = require('./get_a');

describe('getA()  function', function () {
  it('returns the value as set in the function (as if it was got somewhere)) ', function (done) {
    expect(geta.get_a()).to.equal(4);
    done();
  });
});
