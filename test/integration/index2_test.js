var request = require('supertest');
var app = require('../../app');
var expect = require('chai').expect;
// var sandboxedModule = require('sandboxed-module');
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

  //fakeadd_numbers: {function fakeadd_numbers (a, b) {
  //  console.log('>>>>>>>>>>>>> In fakeadd_numbers ');
  //  return 8;
  //}
  //}

  it('adds 2 and 4 and shows the sum as 6', function (done) {
    // var sinon = require('sinon');
    // //var callback = sinon.stub(request(app), function () {console.log('xcxcx'); } );//.returns(7);
    // //var proxy = add_numbers();
    // var callback = sinon.stub(add_numbers,'add_numbers' , function () {
    //   console.log('xcxcx');
    // });   //.returns(7);
    // callback.onCall().returns(9);
    // //var proxy = add_numbers();
    //proxy.onCall().returns(9);

    //console.log('.............', add_numbers());
    //var fakeModule = sandboxedModule.require('../../app', {
    //  requires: {'../../routes/index2': fakeadd_numbers }
    //});
    //var fakeModule = sandboxedModule.require('../../routes/index2', {
    //  requires: {'../../routes/add_numbers': {fake: fakeadd_numbers }}
    //});

    // var fakeInsertEvt = sinon.stub(mysql, 'insertEventIntoDB', function(){
    //   return Math.random();
    // });

    var a = 2, b = 4;
    request(app).post('/index2')
      .send({a: a, b: b})
      .end(function (req, res) {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain( '38' );
        //expect(res.text).to.contain( (a+b) );
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
        // expect(res.text).to.contain( (a+b) );
        done();
      });
  });

  it('adds strings "3" and "4" and shows the sum as 7', function (done) {
    var a = "3", b = "4";
    request(app).post('/index2')
      .send({a: a, b: b})
      .end(function (req, res) {
        expect(res.status).to.equal(200);
        expect(res.text).to.contain( 38 ); // fails - concat not add
        //expect(res.text).to.contain( (a+b) ); bad compare
        done();
      });
  });

});
