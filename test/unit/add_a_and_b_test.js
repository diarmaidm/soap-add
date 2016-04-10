var expect = require('chai').expect;
var addAandB = require('../../routes/add-a-and-b');

describe('addAandB() function', function () {
  it('returns the sum of 2 values as calculated in the function) ', function (done) {
    expect(addAandB()).to.equal(9);
    done();
  });
});
