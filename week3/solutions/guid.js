/*
 * Generate unique passwords = Globally Unique identifiers
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 01/10/2020
 */
const validCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVXYZ0123456789_$#&!abcdefghijklmnopqrstuvwxyz";

/**
 * Generate GUID
 */
function generateGUID(n) {
  let tempStr = "";
  for (let i = 0; i < n; i++) {
    tempStr += validCharacters.charAt(
      Math.floor(Math.random() * validCharacters.length)
    );
  }
  return tempStr;
}
console.log(`The generated password with n = 8 is '${generateGUID(8)}'.`);
console.log(`The generated password with n = 11 is '${generateGUID(11)}'.`);
console.log(`The generated password with n = 13 is '${generateGUID(13)}'.`);
