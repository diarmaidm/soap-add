var SandboxedModule = require("sandboxed-module");

describe('addAandB() function', function () {
  it('returns the sum of 2 values as calculated in the function) ', function (done) {
    var fakeGetA = function () {
      var a = 8;
      // console.log('\t%_%_%_%_ \tSandboxed % \tget_a % \tfakeGetA _%_ a ===', a);
      return a;
    };
    var fakeGetB = function () {
      var b = 7;
      // console.log('\t%_%_%_%_ \tSandboxed % \tget_b % \tfakeGetB _%_ b ===', b);
      return b;
    };

    var localget_a = {
      get_a: fakeGetA
    };
    var localget_b = {
      get_b: fakeGetB
    };

    var add_a_and_b = SandboxedModule.require("./add_a_and_b", {
      requires: {
        './get_a': localget_a,
        './get_b': localget_b
      }
    });

    expect(add_a_and_b()).to.equal(15);
    done();
  });
});
