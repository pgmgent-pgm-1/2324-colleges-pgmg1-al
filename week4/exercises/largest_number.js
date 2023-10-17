/*
Largest number
===================================================================
Course: Programming 1: Essentials
Week: 3
Developed by: Philippe De Pauw - Waterschoot
Last updated: 26/09/2020
*/
const numbers = [3134, 5383, 282, 21, 9999, -4545, 66665, 1111];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}
console.log(`The largest number is ${largestNumber}`);

/*
Find largest number by sorting
*/
numbers.sort(function(a, b){return b-a;});
console.log(`The largest number is ${numbers[0]}`);

/* 
Make a function to find the largest number
*/
function findLargestNumber (arrofNumbers) {
  let largestNumber = arrofNumbers[0];
  for (let i = 1; i < arrofNumbers.length; i++) {
    if (arrofNumbers[i] > largestNumber) {
      largestNumber = arrofNumbers[i];
    }
  }
  return largestNumber;  
}
console.log(`The largest number is ${findLargestNumber(numbers)}`);

