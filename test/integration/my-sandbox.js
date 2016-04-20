var SandboxedModule = require('sandboxed-module');

// The order of the function, object and sandboxed-modules
// only matters if using function expressions not named functions
var localAddCandD = {
  addCandD: fakeAddCandD
};

var index2 = SandboxedModule.require('../../routes/index2', {
  requires: {
    './add_c_and_d': localAddCandD
  }
});

function fakeAddCandD (extra) {
  // console.log('\t%_%_%_%_ \tSandboxed % \tfakeAddCandD % \textra _%_ ', extra);
  var c = 6;
  var d = 7;
  var sum = c+d+extra;
  // console.log('\t%_%_%_%_ \tSandboxed % \tfakeAddCandD % \sum _%_ ', sum);
  return sum;
}

var sandtest = SandboxedModule.require('../../app', {
  requires: {
    './routes/index': require('../../routes/index'),
    './routes/index2': index2
  }
});

module.exports = sandtest;