var SandboxedModule = require('sandboxed-module');

// The order of the function, object and sandboxed-modules matters!!!
var fakeAddCandD = function (extra) {
  console.log('\t%_%_%_%_ \tSandboxed % \tfakeAddCandD % \textra _%_ ', extra);
  var c = 6;
  var d = 7;
  var sum = c+d+extra;
  console.log('\t%_%_%_%_ \tSandboxed % \tfakeAddCandD % \sum _%_ ', sum);
  return sum;
};

var localAddCandD = {
  addCandD: fakeAddCandD
};

// var index2 = SandboxedModule.require('../../routes/index2', {
//   requires: {
//     './add_c_and_d': fakeAddCandD
//   }
// });
var index2 = SandboxedModule.require('../../routes/index2', {
  requires: {
    './add_c_and_d': localAddCandD
  }
});

// The order of the function, object and sandboxed-modules matters!!!
// var sandtest = SandboxedModule.require('../../app', {
//   requires: {
//     './routes/index': require('../../routes/index'),
//     './routes/index2': index2
//   }
// });

// module.exports = sandtest;
module.exports = SandboxedModule.require('../../app', {
  requires: {
    './routes/index': require('../../routes/index'),
    './routes/index2': index2
  }
});

