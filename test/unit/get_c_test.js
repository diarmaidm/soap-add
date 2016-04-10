var getc = require('../../routes/get_c');

describe('get_c() function', function () {
  it('returns the value as set in the function (as if it was got somewhere)) ', function (done) {
    // expect(getc()).to.equal(17);
    expect(getc.get_c()).to.equal(17);
    done();
  });
});
