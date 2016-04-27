var request = require('supertest');
var app = require('../../app');

describe('The multiply page', function () {
  describe('allows entry of 2 numbers and displays the product', function () {
    it('for 2 and 4 it shows product as 8', function (done) {
      var a = 2, b = 4;
      request(app).post('/multiply')
        .send({firstNumber: a, secondNumber: b})
        .end(function (req, res) {
          expect(res.status).to.equal(200);
          expect(res.text).to.contain( '8' );
          done();
        });
    });
    it('for 4 and 4 it shows product as 8', function (done) {
      var a = 4, b = 4;
      request(app).post('/multiply')
        .send({firstNumber: a, secondNumber: b})
        .end(function (req, res) {
          expect(res.status).to.equal(200);
          expect(res.text).to.contain( '16' );
          done();
        });
    });
  });
});
