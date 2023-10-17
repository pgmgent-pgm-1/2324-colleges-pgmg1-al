const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
let foundIndex = beasts.indexOf('bison');
console.log(`The index found of an element with value bison: ${foundIndex}.`);
foundIndex = beasts.indexOf('bison', 2);
console.log(`The index found of an element with value bison: ${foundIndex}.`);
foundIndex = beasts.indexOf('capibara');
console.log(`The index found of an element with value capibara: ${foundIndex}.`);
foundIndex = beasts.lastIndexOf('bison');
console.log(`The index found of an element with value bison: ${foundIndex}.`);
foundIndex = beasts.lastIndexOf('bison', 2);
console.log(`The index found of an element with value bison: ${foundIndex}.`);
const numbers = [5, 12, 8, 130, 44];
foundIndex = numbers.findIndex(function (num) {
  return num > 13;
});
console.log(`The index found of an element with value > 13: ${foundIndex}.`);
let foundElement;
foundElement = numbers.find(function (num) {
  return num > 10;
});
console.log(`The element found with value > 10: ${foundElement}.`);
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const filteredWords = words.filter(function (w) {
  return w.length > 6
});
console.log(`The elements filtered with string length > 6: ${filteredWords}.`);