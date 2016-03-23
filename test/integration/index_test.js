var request = require('supertest');
var app = require('../../app');
var expect = require('chai').expect;

describe('Home Page to add using soap service', function () {
  it('has a header describing what it does', function (done) {
    request(app).get('/')
      .expect(/This application uses a soap service to add 2 numbers/, done);
  });

  it('handles a GET request', function (done) {
    request(app).get('/')
      .expect(200, done);
  });

  describe('contains a form', function () {
    it('contains fields to allow entry of 2 numbers', function (done) {
      request(app).get('/')
        .expect(/name="a"/)
        .expect(/name="b"/, done);
    });

    it('contains a button to submit the request', function (done) {
      request(app).get('/')
        .expect(/action="\/"/)
        .expect(/type="submit"/)
        .expect(/method="POST"/, done);
    });
 
    it('adds 2 and 4 and shows the sum as 6 when submit clicked', function (done) {
      var a = 2, b = 4;
      request(app).post('/')
        .send({a: a, b: b})
        .end(function (req, res) {
          expect(res.status).to.equal(200);
          expect(res.text).to.contain('The sum of ' +a+ ' and ' +b+ ' is: ' + (a+b) );
          done();
        });
    });

    it('adds 4 and 4 and shows the sum as 8 when submit clicked', function (done) {
      var a = 4, b = 4;
      request(app).post('/')
        .send({a: a, b: b})
        .end(function (req, res) {
          expect(res.status).to.equal(200);
          expect(res.text).to.contain('The sum of ' +a+ ' and ' +b+ ' is: ' + (a+b) );
          done();
        });
    });
  });

});

