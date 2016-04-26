Feature('Multiply 2 numbers');

Scenario('Multiply 2 numbers and show product', (I) => {
  I.amOnPage('/multiply');
  I.see('Welcome to multiply');
  I.fillField('First Number', '9');
  I.fillField('Second Number', '8');
  I.click('Multiply the numbers');
  I.see('The product of 9 * 8 = 72');
});
