var multiply = require('./multiply');

describe('multiply function', function () {
  it('multiply 3 and 4 and returns 12 ', function (abc) {
    expect(multiply(3,4)).to.equal(12);
    abc();
  });
  
  it('multiply 4 and 4 and returns 16 ', function (done) {
    expect(multiply(4,4)).to.equal(16);
    done();
  });

  it('multiply 0 and 4 and returns message', function (done) {
    expect(multiply(0,4)).to.equal('cant use 0');
    done();
  });

  it('multiply 4 and 0 and returns message', function (done) {
    expect(multiply(4,0)).to.equal('cant use 0');
    done();
  });

});