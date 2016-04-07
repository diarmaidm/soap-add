var request = require('supertest');
var app = require('../../app');
var expect = require('chai').expect;
// var assert = require('assert');

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

    var agent = request.agent(app);
    before(function() {
      agent.post('/')
      .send({a: 5, b: 4})
      .end(function (req, res) {
        console.log('0..0000000.....0.... after end ', res.request.cookies);
        // console.log('-----res.status', res.status);
        expect(res.status).to.equal(200);
        // console.log("-----res.headers['set-cookie']", res.headers['set-cookie']);
        // res.headers['set-cookie'].some(function (cookie) {
        //   // console.log('-----cookie...', cookie);
        //   console.log("-----cookie.split('=')[0]...", cookie.split('=')[0]);
        //   console.log("-----encoded [1]...", cookie.split('=')[1]);
        //
        //   if (cookie.split('=')[0] === 'session') {
        //     var decoded = decode(cookie.split('=')[1]);
        //     console.log("-----decoded [1]...", decoded);
        //     console.log("-----decoded.num1...", decoded.num1);
        //
        //   }
        //
        //   //return decoded.num1;
        // });
        // expect(res.text).to.contain('The sum of ' +a+ ' and ' +b+ ' is: ' + (a+b) );
        // done();
      });
    });

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

    it('stores in session', function (done) {
    agent.get('/')
      .end(function (err, res) {
        // console.log('res', res);
        expect(res.status).to.equal(200);
      // .expect(function (res) {
        var session = res.request.cookies.split(';')[0];

        // console.log('.......res.request.cookies.split......', res.request.cookies);
        // console.log('.......res.request.cookies.split......', res.request.cookies.split('=')[0]);
        // console.log('.......res.request.cookies.split......', res.request.cookies.split('=')[1]);
        // var decoded = decode(res.request.cookies.split('=')[1]);
        var decoded = decode(session.split('=')[1]);
        console.log("decoded [1]...", decoded);
        console.log("decoded.num1...", decoded.num1);
        console.log("decoded.num2...", decoded.num2);
        console.log("decoded.num3...", decoded.num3);
        expect(decoded.num1).to.equal('test1');

        done();

        })

    })

function decode(string) {
  var body = new Buffer(string, 'base64').toString('utf8');
  return JSON.parse(body);
}



// function shouldHaveCookie(name) {
//   return function (res) {
//     console.log("res.headers['set-cookie']", res.headers['set-cookie']);

//     var head = res.headers['set-cookie'].some(function (cookie) {
//       console.log('cookie...', cookie);
//       console.log("cookie.split('=')[0]...", cookie.split('=')[0]);
//       console.log("encoded [1]...", cookie.split('=')[1]);

//       var decoded = decode(cookie.split('=')[1]);
//       console.log("decoded [1]...", decoded);
//       console.log("decoded.num1...", decoded.num1);

//       return cookie.split('=')[0] === name
//     });


//     assert.ok(res.headers['set-cookie'].some(function (cookie) {
//       return cookie.split('=')[0] === name
//     }), 'should have cookie "' + name + '"')
//   }
// }    


  });
});

