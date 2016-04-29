// start (failing for factors of 1)
// function factorsOf () {
//   return null;
// }
// module.exports = factorsOf;
//decenerate constant
/*************************************************/
// factors of 1
// function factorsOf () {
//   return [];
// }
// module.exports = factorsOf;
/*************************************************/
// factors of 2
// function factorsOf (n) {
//   var factors = [];
//   if (n>1) {
//     factors.push(2);
//   }
//   return factors;
// }
// module.exports = factorsOf;
/*************************************************/
// factors of 3
// change from constant to a variable. from specific to general.
// New rule that we are beginning to smell. Tests become more specific and code becomes more general.
// function factorsOf (n) {
//   var factors = [];
//   if (n>1) {
//     factors.push(n);
//   }
//   return factors;
// }
// module.exports = factorsOf;
/*************************************************/
// factors of 4 (works for 5 and 6 and 7 as well)
// function factorsOf (n) {
//   var factors = [];
//   if (n>1) {
//     if (n%2 === 0) {
//       factors.push(2);
//       n /= 2;
//     }
//     factors.push(n);
//   }
//   return factors;
// }
// module.exports = factorsOf;
// refactor as other test failing
// function factorsOf (n) {
//   var factors = [];
//   if (n>1) {
//     if (n%2 === 0) {
//       factors.push(2);
//       n /= 2;
//     }
//     if (n > 1) {
//       factors.push(n);
//     }
//   }
//   return factors;
// }
// module.exports = factorsOf;
// Another refactor (2 if statements in row with same predicate, smells of an unwound loop)
// function factorsOf (n) {
//   var factors = [];
//   if (n>1) {
//     if (n%2 === 0) {
//       factors.push(2);
//       n /= 2;
//     }
//   }
//   if (n > 1) {
//     factors.push(n);
//   }
//   return factors;
// }
// module.exports = factorsOf;
/*************************************************/
// factors of 8
// 47:13
// A while is a general form of an if statement.
// An if is a degenerate form of a while loop.
// function factorsOf (n) {
//   var factors = [];
//   if (n>1) {
//     while (n%2 === 0) {
//       factors.push(2);
//       n /= 2;
//     }
//   }
//   if (n > 1) {
//     factors.push(n);
//   }
//   return factors;
// }
// module.exports = factorsOf;
/*************************************************/
// factors of 9
// There is a little engine in here...
// function factorsOf (n) {
//   var factors = [];
//   if (n>1) {
//     while (n%2 === 0) {
//       factors.push(2);
//       n /= 2;
//     }
//     while (n%3 === 0) {
//       factors.push(3);
//       n /= 3;
//     }
//   }
//   if (n > 1) {
//     factors.push(n);
//   }
//   return factors;
// }
// module.exports = factorsOf;
// Need to refactor, broke some rules
// put the loop inside a loop.
// change the 2 to a variable (divisor)
// can change the if to while
// function factorsOf (n) {
//   var factors = [];
//   var divisor = 2; // took initializer outside the loop
//   while (n>1) {
//     // var divisor = 2;
//     while (n%divisor === 0) {
//       factors.push(divisor);
//       n /= divisor;
//     }
//     divisor++; // increment the divisor
//   }
//   if (n > 1) {
//     factors.push(n);
//   }
//   return factors;
// }
// module.exports = factorsOf;
// We can do some cleanup...
// function factorsOf (n) {
//   var factors = [];
//   var divisor = 2; // took initializer outside the loop
//   while (n>1) {
//     // var divisor = 2;
//     while (n%divisor === 0) {
//       factors.push(divisor);
//       n /= divisor;
//     }
//     divisor++; // increment the divisor
//   }
//   // This if is no longer needed as it was terminating condition on an unwount loop
//   // if (n > 1) {
//   //   factors.push(n);
//   // }
//   return factors;
// }
// module.exports = factorsOf;
// We can do some more cleanup...
function factorsOf (n) {
  var factors = [];
  for (var divisor = 2;n>1;divisor++) {
    for (;n%divisor === 0; n /= divisor) {
      factors.push(divisor);
    }
  }
  return factors;
}
module.exports = factorsOf;
// And Uncle Bobs solution (I do not like no curly braces 51:24)
// function factorsOf (n) {
//   var factors = [];
//   for (var divisor = 2;n>1;divisor++)
//     for (;n%divisor === 0; n /= divisor)
//       factors.push(divisor);
//   return factors;
// }
// module.exports = factorsOf;
/*************************************************/
