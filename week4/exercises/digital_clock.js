/*
 * Digital Clock
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 27/09/2020
 * ===================================================================
 */

function generateDigitalClockAsString() {
  const date = new Date();
  return `${toAmountOfDigits(date.getHours(), 2)}:${toAmountOfDigits(
    date.getMinutes(),
    2
  )}:${toAmountOfDigits(date.getSeconds(), 2)}`;
}

function generateDigitalClockUTCAsString(utc) {
  const date = new Date();
  date.setHours(date.getHours() + utc + date.getTimezoneOffset() / 60);
  return `${toAmountOfDigits(date.getHours(), 2)}:${toAmountOfDigits(
    date.getMinutes(),
    2
  )}:${toAmountOfDigits(date.getSeconds(), 2)}`;
}

function toAmountOfDigits(number, amount) {
  let str = String(number);
  while (str.length < amount) {
    str = `0${str}`;
  }
  return str;
}

console.log(generateDigitalClockAsString());
console.log(`The time in Ghent is ${generateDigitalClockUTCAsString(2)}`);
console.log(`The time in Ankara is ${generateDigitalClockUTCAsString(3)}`);
