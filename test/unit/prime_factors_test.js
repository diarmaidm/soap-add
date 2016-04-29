// Recreation of uncle bobs https://vimeo.com/97516288
// Space to 4:30
// Kata starts 33:15
// Kata thought and expectations start 34:35
// Kata code starts 35:40


/*
Prime factors kata
TDD exercise
Compute the prime factors of a given integer

List of prime numbers
Sieve of Eratosthenes (https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)

divide the candidate by the factors

36:00 Start with bug design but don't believe them.

hypothesis loop 39:45

<blockquote>
Once you start to get good at TDD, you begin to learn the nuances of the discipline such as the fact that tests and code grow in very opposite directions. As the tests get more specific, the code gets more generic. You also begin to learn that in the red/green/refactor cycle there are just a few standard gestures that move a test from red to green. In this talk, Uncle Bob will discuss those gestures, called transformations, and will present the idea that they when applied in a particular order and priority they can have a profound effect on the resulting code. This one is at the bleeding edge of TDD research; and will leave you with something to ponder.
</blockquote>

*/
var factorsOf = require('../../model/factors_of');

describe('Prime Factors Test', function () {
  describe('factors', function () {
    it('factors of a number', function () {
      expect(factorsOf(1)).to.be.eql([]);
      expect(factorsOf(2)).to.be.eql([2]);
      expect(factorsOf(3)).to.be.eql([3]);
      expect(factorsOf(4)).to.be.eql([2,2]);
      expect(factorsOf(5)).to.be.eql([5]);
      expect(factorsOf(6)).to.be.eql([2,3]);
      expect(factorsOf(7)).to.be.eql([7]);
      expect(factorsOf(8)).to.be.eql([2,2,2]);
      expect(factorsOf(9)).to.be.eql([3,3]);
      expect(factorsOf(10)).to.be.eql([2,5]);
      expect(factorsOf(11)).to.be.eql([11]);
      expect(factorsOf(2*2*3*3*5*7*11*11*13)).to.be.eql([2,2,3,3,5,7,11,11,13]);
      expect(factorsOf(12)).to.be.eql([2,2,3]);
      expect(factorsOf(11*5*7*19)).to.be.eql([5,7,11,19]);
    });
    // it('factors of 2', function () {
    //   expect(factorsOf(2)).to.be.eql([2]);
    // });
    // it('factors of 3', function () {
    //   expect(factorsOf(3)).to.be.eql([3]);
    // });
    // it('factors of 4', function () {
    //   expect(factorsOf(4)).to.be.eql([2,2]);
    // });
    // it('factors of 5', function () {
    //   expect(factorsOf(5)).to.be.eql([5]);
    // });
    // it('factors of 6', function () {
    //   expect(factorsOf(6)).to.be.eql([2, 3]);
    // });
    // it('factors of 7', function () {
    //   expect(factorsOf(7)).to.be.eql([7]);
    // });
    // it('factors of 8', function () {
    //   expect(factorsOf(8)).to.be.eql([2,2,2]);
    // });
    // it('factors of 9', function () {
    //   expect(factorsOf(9)).to.be.eql([3,3]);
    // });
    // xit('factors of 3', function () {
    //   expect(factorsOf(3)).to.be.eql([3]);
    // });
  });
});
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
/*************************************************/
