/*
 * Scrambled Text
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 04/10/2020
 */

/**
 * Scrambled Text
 */
function scrambleText(txt) {
  let scrambled = "";
  let c = "";
  let i = 0;
  while (txt.length > 0) {
    i = Math.floor(Math.random() * txt.length); // 5
    c = txt.charAt(i); // t
    scrambled += c;
    txt = txt.substring(0, i) + txt.substring(i + 1);
  }
  return scrambled;
}

let word = "website";
console.log(`The word "${word}" scrambled is "${scrambleText(word)}"`);
word = "webdevelopment";
console.log(`The word "${word}" scrambled is "${scrambleText(word)}"`);
word = "programming";
console.log(`The word "${word}" scrambled is "${scrambleText(word)}"`);
