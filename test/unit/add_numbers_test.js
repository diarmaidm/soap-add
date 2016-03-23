var expect = require('chai').expect;
var addNumbers = require('../../routes/add_numbers');
var soap = require('soap');

describe('model add function', function () {

  it('adds 3 and 4 and returns 7 ', function (done) {
    expect(addNumbers(3,4)).to.equal(7);
    done();
  });

  it('adds 5 and 4 and returns 9 ', function (done) {
    expect(addNumbers(5,4)).to.equal(9);
    done();
  });

  describe('calls soap to add numbers', function () {
    it('takes 2 parameters and ', function (done) {
      var a= 6, b=7;
      var url = 'http://free-web-services.com/add.wsdl';
      var args = "<tns:addRequest><a>" + a + "</a><b>" + b + "</b></tns:addRequest>";
      soap.createClient(url, function(err, client) {
        client.add(args, function(err, result) {
          expect(result.sum).to.equal(13);
          done();
        });
      });
    })
  });

});
