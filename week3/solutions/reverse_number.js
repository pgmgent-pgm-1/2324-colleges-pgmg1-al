/*
 * Reverse number
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 01/10/2020
 */

/**
 * Reverse Number
 */
function reverse(num) {
  let numStr = num.toString();
  let tempStr = "";
  for (let i = numStr.length - 1; i >= 0; i--) {
    tempStr += numStr.charAt(i);
  }
  return parseInt(tempStr);
}
let num = 12345;
console.log(`The reversed number of ${num} is ${reverse(num)}.`);
num = 987654321;
console.log(`The reversed number of ${num} is ${reverse(num)}.`);
num = 1010101011;
console.log(`The reversed number of ${num} is ${reverse(num)}.`);
s;
