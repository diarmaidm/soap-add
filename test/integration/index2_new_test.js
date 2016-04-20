var request = require('supertest');

describe('new add page', function () {

  it('adds 2 and 4 and shows the sum as 6', function (done) {

    var myApp = require('./my-sandbox');

    var agent = request.agent(myApp);

    var a = 2, b = 4;
    agent.post('/index2')
      .send({a: a, b: b})
      .end(function (req, res) {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain( '13' );
        done();
      });
  });
});
