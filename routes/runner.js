var addab = require('./add_a_and_b');

// called this way when method is exported
// module.exports = addAandB;
//console.log(addab());

// called this way when method is exported as part of an object
// module.exports = {addAandB: addAandB};
console.log(addab.addAandB());
