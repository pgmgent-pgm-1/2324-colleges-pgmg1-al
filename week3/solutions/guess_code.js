/*
 * Dit is de oplossing voor de uitbreiding
 */

const validCharacters = "0123456789";

/**
 * Generate pincode
 */
function generatePinCode(n) {
  let tempStr = "";
  for (let i = 0; i < n; i++) {
    tempStr += validCharacters.charAt(
      Math.floor(Math.random() * validCharacters.length)
    );
  }
  return tempStr;
}

const pin = "0705";

let guessedCode = "";
while (pin !== guessedCode) {
  console.log("Raad eens");
  guessedCode = generatePinCode(4);
  console.log(guessedCode);
  if (guessedCode === pin) {
    console.log("Dat was correct");
  } else {
    console.log("Sorry, dat was fout");
  }
}
