/*
 * Fahrenheit to Celsius
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 27/09/2020
 * ===================================================================
 */

/**
 * Define a function convertFahrenheitToCelsius with one parameter fahrenheit
 * the parameter fahrenheit will be used to covert fahrenheit to celsius
 */
function convertFahrenheitToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  return celsius;
}

/*
 * Define a function showMessage with no parameters
 * the functions will log the conversion as a string
 */
function showMessage() {
  let message = `Temperature of ${fahrenheit}°F equals to ${celsius.toFixed(
    1
  )}°C!`;
  console.log(message);
}

let fahrenheit = 71; // Value 71 as fahrenheit
let celsius = convertFahrenheitToCelsius(fahrenheit); // Call the function convertFahrenheitToCelsius with argument fahrenheit in order to convert it to Celsius
showMessage(); // Show the message to the console
fahrenheit = 56; // Value 56 as fahrenheit
celsius = convertFahrenheitToCelsius(fahrenheit); // Call the function convertFahrenheitToCelsius with argument fahrenheit in order to convert it to Celsius
showMessage(); // Show the message to the console
