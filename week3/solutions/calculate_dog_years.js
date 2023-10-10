/*
 * Human to dog years
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 27/09/2020
 * ===================================================================
 */

/**
 * Define a function convertHumanYearsToDogYears with one parameter humanYears
 * the parameter humanYears will be used to covert humanYears to dogYears
 */
function convertHumanYearsToDogYears(humanYears) {
  const dogYears = humanYears * 7;
  return dogYears;
}

console.log(`Your dog is ${convertHumanYearsToDogYears(7)} years old`);
console.log(`Your dog is ${convertHumanYearsToDogYears(10)} years old`);
