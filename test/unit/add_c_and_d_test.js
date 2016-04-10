// var addCandD = require('../../routes/add_c_and_d');

// describe('addCandD() function', function () {
//   it('returns the sum of 2 values as calculated in the function) ', function (done) {
//     expect(addCandD()).to.equal(9);
//     done();
//   });
// });


var SandboxedModule = require("sandboxed-module");

describe('addCandD() function', function () {
  it('returns the sum of 2 values as calculated in the function) ', function (done) {

    var fakeGetC = function () {
      var c = 9;
      console.log('\t%_%_%_%_ \tSandboxed % \tget_c % \tfakeGetC _%_ c ===', c);
      return c;
    };
    var fakeGetD = function () {
      var d = 6;
      console.log('\t%_%_%_%_ \tSandboxed % \tget_d % \tfakeGetD _%_ d ===', d);
      return d;
    };

    var localget_c = {
      get_c: fakeGetC
    };
    var localget_d = {
      get_d: fakeGetD
    };

    var addCandD = SandboxedModule.require("../../routes/add_c_and_d", {
      requires: {
        './get_c': localget_c,
        './get_d': localget_d
      }
    });
// // The following does not work. The paths appear to be relative to the sandboxed require
//     var addCandD = SandboxedModule.require("../../routes/add_c_and_d", {
//       requires: {
//         '../../routes/get_c': localget_c,
//         '../../routes/get_d': localget_d
//       }
//     });

    expect(addCandD.addCandD()).to.equal(15);
// had to change after returning an object
//    expect(addCandD()).to.equal(15);
    done();
  });
});
