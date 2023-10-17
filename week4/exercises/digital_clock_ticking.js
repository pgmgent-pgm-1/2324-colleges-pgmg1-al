/*
Digital Clock ticking
===================================================================
Course: Programming 1: Essentials
Week: 3
Developed by: Philippe De Pauw - Waterschoot
Last updated: 04/10/2020
===================================================================
*/
function generateDigitalClockUTCAsString (utc, cityName) {
    const date = new Date();
    date.setHours(date.getHours() + utc + date.getTimezoneOffset()/60);
    return `The time in ${cityName} is ${toAmountOfDigits(date.getHours(), 2)}:${toAmountOfDigits(date.getMinutes(), 2)}:${toAmountOfDigits(date.getSeconds(), 2)}`;
  }
  
  function toAmountOfDigits (number, amount) {
    let str = String(number);
    while (str.length < amount) {
      str = `0${str}`;
    }
    return str;
  }
  
  function ticking () {
    console.log(`${generateDigitalClockUTCAsString(2, 'Ghent')}`);
  }
  setInterval(ticking, 1000);