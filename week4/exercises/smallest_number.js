/*
 * Smallest number
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 4
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 26/09/2020
 */
const numbers = [3134, 5383, 282, 21, 9999, -4545, 66665, 1111];
let smallestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < smallestNumber) {
    smallestNumber = numbers[i];
  }
}
console.log(`The smallest number is ${smallestNumber}`);

/**
 * Find smallest number by sorting
 */
numbers.sort(function(a, b) {
  return a - b;
});
console.log(`The smallest number is ${numbers[0]}`);

/**
 * Make a function to find the smallest number
 */
function findSmallestNumber(arrofNumbers) {
  let smallestNumber = arrofNumbers[0];
  for (let i = 1; i < arrofNumbers.length; i++) {
    if (arrofNumbers[i] < smallestNumber) {
      smallestNumber = arrofNumbers[i];
    }
  }
  return smallestNumber;
}
console.log(`The smallest number is ${findSmallestNumber(numbers)}`);
