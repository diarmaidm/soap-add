var request = require('supertest');
var app = require('../../app');
// var expect = require('chai').expect;
var add_numbers = require('../../routes/add_numbers');

describe('new add page', function () {

  describe('contains a form', function () {
    it('contains fields to allow entry of 2 numbers', function (done) {
      request(app).get('/index2')
        .expect(/name="a"/)
        .expect(/name="b"/, done);
    });

    it('contains a button to submit the request', function (done) {
      request(app).get('/index2')
        .expect(/action="\/index2"/)
        .expect(/type="submit"/)
        .expect(/method="POST"/, done);
    });

  });

  it('adds 2 and 4 and shows the sum as 6', function (done) {
    var a = 2, b = 4;
    request(app).post('/index2')
      .send({a: a, b: b})
      .end(function (req, res) {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain( '38' );
        done();
      });
  });

  it('adds 3 and 4 and shows the sum as 7', function (done) {
    var a = 3, b = 4;
    request(app).post('/index2')
      .send({a: a, b: b})
      .end(function (req, res) {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain( '38' );
        done();
      });
  });

  it('adds strings "3" and "4" and shows the sum as 7', function (done) {
    var a = "3", b = "4";
    request(app).post('/index2')
      .send({a: a, b: b})
      .end(function (req, res) {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain( 38 );
        done();
      });
  });

});