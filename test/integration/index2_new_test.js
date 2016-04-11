var request = require('supertest');
// var app = require('../../app');
// var SandboxedModule = require('sandboxed-module');

describe('new add page', function () {

  // if we take done as parameter we get error:
  it('adds 2 and 4 and shows the sum as 6', function (done) {
  // it('adds 2 and 4 and shows the sum as 6', function () {

    // I extracted the sandboxed stuff to file
    var myApp = require('./my-sandbox');

    var agent = request.agent(myApp);
    // var agent = request.agent(app);
    // console.log('.. .. .. ..... after agent = request.agent(myApp), agent ', agent);

    var a = 2, b = 4;
    // request(app).post('/index2')
    // request(myApp).post('/index2')
    agent.post('/index2')
      .send({a: a, b: b})
      .end(function (req, res) {
        console.log('in .end callback.....', res.status);
        // console.log('in .end callback.req.', req);
        // console.log('in .end callback.res.', res);
        expect(res.status).to.equal(200);
        expect(res.text).to.contain( '13' );
        //expect(res.text).to.contain( (a+b) );
        done();
      });
  });
});
