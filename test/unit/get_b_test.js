var expect = require('chai').expect;
var getb = require('../../routes/get-b');

describe('getB() function', function () {
  it('returns the value as set in the function (simulate if it was got externally)) ', function (done) {
    expect(getb()).to.equal(5);
    done();
  });
});
