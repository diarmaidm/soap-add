var request = require('supertest');
var app = require('../../app');
var expect = require('chai').expect;

describe('add page', function () {
  it('adds 2 and 4 and shows the sum as 6 when submit clicked', function (done) {
    var a = 2, b = 4;
    request(app).post('/index2')
      .send({a: a, b: b})
      .end(function (req, res) {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain( '6' );
        //expect(res.text).to.contain( (a+b) );
        done();
      });
  });
});
