// /* Simplified effort: works. Uses fakeA but real B */
// var SandboxedModule = require("sandboxed-module");

// console.log('# # # # # start of describe block # # # # # ');
// console.log('$ $ $ $ $ start of it block $ $ $ $ $ ');

// var fakeGetA = function () {
//   var a = 6
//   console.log('%%%%%%%%%%%%%%% in fakeGetA %%%%%%%%%%%%%%% a is', a);
//   return a;
// };
// var fakeGetB = function () {
//   return 7;
// };

// console.log('& & & & & before SandboxedModule.require & & & & & ');
// var add_a_and_b = SandboxedModule.require("./add_a_and_b", {
//   requires: {
//     './get_a': { get_a: fakeGetA }
//   }
// });

// console.log('.r.e.s.u.l.t.o.f.add_a_and_b.addAandB() is', add_a_and_b.addAandB());

/* Original effort :( */
// var expect = require('chai').expect;
var SandboxedModule = require("sandboxed-module");

describe('addAandB() function', function () {
  console.log('# # # # # start of describe block # # # # # ');
  it('returns the sum of 2 values as calculated in the function) ', function (done) {
  console.log('$ $ $ $ $ start of it block $ $ $ $ $ ');
    var fakeGetA = function () {
      var a = 8;
      console.log('\t%_%_%_%_ \tSandboxed % \tget_a % \tfakeGetA _%_ a ===', a);
      return a;
    };
    var fakeGetB = function () {
      var b = 7;
      console.log('\t%_%_%_%_ \tSandboxed % \tget_b % \tfakeGetB _%_ b ===', b);
      return b;
    };

    var localget_a = {
      get_a: fakeGetA
    };
    var localget_b = {
      get_b: fakeGetB
    };
    // var get_b = {
    //   get_b: get_a
    // };
    // var add_a_and_b = SandboxedModule.require("../../routes/add_a_and_b", {
    //   requires: {
    //     get_a: { get_a: fakeGetA },
    //     get_b: { getB: fakeGetB }
    //   }
    // });
    console.log('& & & & & before SandboxedModule.require & & & & & ');
    // var add_a_and_b;

    var add_a_and_b = SandboxedModule.require("./add_a_and_b", {
      requires: {
        './get_a': localget_a,
        './get_b': localget_b
      }
    });

    console.log('.. .. .. .. add_a_and_b() ===', add_a_and_b());
    // console.log('add_a_and_b.addAandB() ===', add_a_and_b.addAandB());
    expect(add_a_and_b()).to.equal(15);
    done();
  });
});
