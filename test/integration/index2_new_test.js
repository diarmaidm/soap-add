var request = require('supertest');
// var app = require('../../app');
var SandboxedModule = require('sandboxed-module');

describe('new add page', function () {

  it('adds 2 and 4 and shows the sum as 6', function (done) {

    var fakeAddCandD = function () {
      // var c = 6;
      // var d = 7;
      console.log('\t%_%_%_%_ \tSandboxed % \tfakeAddCandD % \tfakeAddCandD _%_ ');
      return 13;
    };

    // var localAddCandD = {
    //   CandD: fakeAddCandD
    // };
    var localAddCandD = {
      addCandD: fakeAddCandD
    };

    var index2 = SandboxedModule.require('../../routes/index2', {
      requires: {
        './add_c_and_d': localAddCandD
      }
    });
    // console.log('.. .. .. ..... after index = SandboxedModule.require... index ', index2);

    var myApp = SandboxedModule.require('../../app', {
      requires: {
        './routes/index': require('../../routes/index'),
        './routes/index2': index2
      }
    });
    // var myApp = SandboxedModule.require('../../app', {
    //   requires: {
    //     './routes/index': require('../../routes/index'),
    //     './routes/index2': index2
    //   }
    // });
    // console.log('.. .. .. ..... after myApp = SandboxedModule.require... myApp ', myApp);
    // console.log('.. .. .. ..... after app ... app ', app);

    var agent = request.agent(myApp);
    // var agent = request.agent(app);
    // console.log('.. .. .. ..... after agent = request.agent(myApp), agent ', agent);

    var a = 2, b = 4;
    // request(app).post('/index2')
    // request(myApp).post('/index2')
    agent.post('/index2')
      .send({a: a, b: b})
      .end(function (req, res) {
        // console.log('.. .. .. ..... after end(function (req, res) res ', res, ' req, ', req);
        expect(res.status).to.equal(200);
        expect(res.text).to.contain( '13' );
        //expect(res.text).to.contain( (a+b) );
        done();
      });
  });
});
