/*
 * Nested arrays
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 4
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 27/09/2020
 * ===================================================================
 */

const a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
let tempStr = "";

for (let i = 0; i < a.length; i++) {
  tempStr += "------------------------------------------------------\n";
  tempStr += `row ${i}`;
  tempStr += "\n------------------------------------------------------";
  const nestedArray = a[i];
  for (let j = 0; j < nestedArray.length; j++) {
    tempStr += `\n ${nestedArray[j]}`;
  }
  tempStr += "\n";
}

console.log(tempStr); // Log the value of the temporary string (tempStr) to the console
