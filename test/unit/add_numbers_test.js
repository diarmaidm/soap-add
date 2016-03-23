var soap = require('soap');
var addNumbers = require('../../routes/add_numbers');
var expect = require('chai').expect;

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
    it('takes 2 parameters and returns result', function (done) {
      var a= 6, b=7;
      var url = 'http://free-web-services.com/add.wsdl';

      // if using xml we dont need options to ignore namespaces
      // var args = "<tns:addRequest><a>" + a + "</a><b>" + b + "</b></tns:addRequest>";


      // if we want to use JSON object need to override workspaces
      var args = {
          a: a,
          b: b
      };
      var options = {
          ignoredNamespaces: {
          namespaces: ['targetNamespace', 'typedNamespace'],
          override: true
        }
      };
        //['tns', 'targetNamespace', 'typedNamespace']
      //var options = {
      //  ignoredNamespaces: true
      //};

      //soap.createClient(url, function(err, client) {
      soap.createClient(url, options, function(err, client) {
        console.log('---err1 is: ', JSON.stringify(err));
        console.log('---client is: ', JSON.stringify(client));
        client.add(args, function(err, result) {
          console.log('---err2 is: ', JSON.stringify(err));
          console.log('------ err:', err);
          console.log('------ result', result);
          console.log('*-*-*-*-*-* client.lastRequest: ', client.lastRequest);
          //console.log(client.lastResponse);
          expect(err).to.be.null;
          expect(result.sum).to.equal(13);
          done();
        });
      });
    })
  });

});
