var getd = require('../../routes/get_d');

describe('get_d() function', function () {
  it('returns the value as set in the function (as if it was got somewhere)) ', function (done) {
    // expect(getd()).to.equal(21);
    expect(getd.get_d()).to.equal(21);
    done();
  });
});