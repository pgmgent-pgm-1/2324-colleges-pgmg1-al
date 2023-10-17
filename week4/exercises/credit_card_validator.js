/*
 * Credit Card Validator
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 27/09/2020
 * ===================================================================
 * In this project you'll write a script that validates whether or not a credit card number is valid.
 *
 * Here are the rules for a valid number:
 *
 * - Number must be 16 digits, all of them must be numbers.
 * - You must have at least two different digits represented (all of the digits cannot be the same).
 * - The final digit must be even.
 * - The sum of all the digits must be greater than 16.
 */
let creditCardNumber = 9999777788880000;
console.log(
  `The credit card number ${creditCardNumber} is ${
    verifyCreditCardNumber(creditCardNumber) ? "valid" : "invalid"
  }.`
);
creditCardNumber = 6666666666661666;
console.log(
  `The credit card number ${creditCardNumber} is ${
    verifyCreditCardNumber(creditCardNumber) ? "valid" : "invalid"
  }.`
);
creditCardNumber = "a92332119c011112";
console.log(
  `The credit card number ${creditCardNumber} is ${
    verifyCreditCardNumber(creditCardNumber) ? "valid" : "invalid"
  }.`
);
creditCardNumber = 4444444444444444;
console.log(
  `The credit card number ${creditCardNumber} is ${
    verifyCreditCardNumber(creditCardNumber) ? "valid" : "invalid"
  }.`
);
creditCardNumber = 1111111111111110;
console.log(
  `The credit card number ${creditCardNumber} is ${
    verifyCreditCardNumber(creditCardNumber) ? "valid" : "invalid"
  }.`
);
creditCardNumber = 6666666666666661;
console.log(
  `The credit card number ${creditCardNumber} is ${
    verifyCreditCardNumber(creditCardNumber) ? "valid" : "invalid"
  }.`
);

function verifyCreditCardNumber(number) {
  const creditCardNumberAsString = number.toString();
  if (creditCardNumberAsString.length !== 16) {
    return false;
  }

  if (isNaN(parseInt(creditCardNumberAsString))) {
    return false;
  }

  if (parseInt(creditCardNumberAsString[creditCardNumberAsString.length - 1]) % 2 !== 0) {
    return false;
  }
  const uniqueChars = [];
  let sumOfChars = 0;
  const chars = creditCardNumberAsString.split("");
  chars.forEach(function (c) {
    if (uniqueChars.indexOf(c) === -1) {
      uniqueChars.push(c);
    }
    sumOfChars += parseInt(c);
  });
  if (uniqueChars < 2 || sumOfChars <= 16) {
    return false;
  }
  return true;
}
