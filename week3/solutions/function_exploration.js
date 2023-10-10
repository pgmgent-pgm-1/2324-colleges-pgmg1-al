/*
 * Function exploration
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 29/09/2020
 * ===================================================================
 */

/**
 * Function declaration
 * Definition of the function checkAge with one parameter age
 * When the age is bigger than 18 the function returns true value
 * When the age is less than or equal to 18 a confirm dialog will popup (press ok returns true, press cancel returns false)
 */
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return "Did your parents allow you?";
  }
}

// Call the function checkAge
let ageVerified = checkAge(18);
console.log(ageVerified); // Output: Did your parents allow you?
ageVerified = checkAge(28);
console.log(ageVerified); // Output: true

// When we remove the else statement and put the value 16 in the function call, the variable ageVerified contains the value undefined

/**
 * Function declaration
 * Same as above but it uses a ternary operator (short version of if...else)
 */
function checkAgeVersion2(age) {
  return age > 18 ? true : "Did your parents allow you?";
}

// Call the function checkAgeVersion2
let ageVerifiedVersion2 = checkAgeVersion2(36);
console.log(ageVerifiedVersion2); // Output: true

/**
 * Function declaration
 * Returns the minimum value of two values
 */
function min(a, b) {
  return Math.min(a, b);
}

// Call the function min, store the result in the variable minValue
let minValue = min(-2, 5);
console.log(minValue); // Output: -2
minValue = min(99, -43);
console.log(minValue); // Output: -43

/**
 * Function declaration
 * Returns the power n on the value x
 */
function pow(x, n) {
  return x ** n;
}

// Call the function pow, store the result in the variable powerValue
let powerValue = pow(2, 2);
console.log(powerValue); // Output: 4
powerValue = pow(8, 3);
console.log(powerValue); // Output: 512
powerValue = pow(16, 2);
console.log(powerValue); // Output: 256
