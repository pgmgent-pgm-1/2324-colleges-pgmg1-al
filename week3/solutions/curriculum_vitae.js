/*
 * My Personal Curriculum Vitae (Revisited and better)
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 29/09/2020
 */

/*
 * Construct a variable cv with value a literal object
 * The literal object contains key / value pairs, the key is the access to the value. The key is a variable with a certain value.
 */
const cv = {
  firstName: "Philippe",
  surName: "De Pauw - Waterschoot",
  sex: "Male",
  age: 36,
  unicodeAvatar: "\u{1F344}",
  married: false,
  quote: "I'm a future talent in front-end development",
  langDutchLevel: "*********",
  langEnglishLevel: "*******",
  langFrenchLevel: "*****",
};

/*
 * Loop through the properties via the for...in loop
 * for each property prop in the list of properties we will log the property and its value
 */
for (let prop in cv) {
  if (cv.hasOwnProperty(prop)) {
    console.log(`The property ${prop} has the value ${cv[prop]}`);
  }
}
