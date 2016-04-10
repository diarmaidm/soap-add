var expect = require('chai').expect;
var geta = require('../../routes/get-a');

describe('getA()  function', function () {
  it('returns the value as set in the function (as if it was got somewhere)) ', function (done) {
    expect(geta()).to.equal(4);
    done();
  });
});
