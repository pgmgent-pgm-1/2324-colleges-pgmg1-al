/*
Generate a large list of numbers
===================================================================
Course: Programming 1: Essentials
Week: 3
Developed by: Philippe De Pauw - Waterschoot
Last updated: 27/09/2020
*/
const numbers = [];
const amountOfNumbers = 1000;

for (let i = 0; i < amountOfNumbers; i++) {
  numbers.push(Math.round(Math.random()*65536));
}
console.log(`There are ${numbers.length} numbers generated!`);

/*
Find largest number by sorting
*/
numbers.sort(function(a, b){return b-a;});
console.log(`The largest number is ${numbers[0]}`);

/*
Find smallest number by sorting
*/
numbers.sort(function(a, b){return a-b;});
console.log(`The smallest number is ${numbers[0]}`);
