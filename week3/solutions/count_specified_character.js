function countSpecifiedCharacter(text, character) {
  const characters = text.split(""); // alle characters in een array
  let count = 0;
  for (const char of characters) {
    if (char.toLowerCase() === character.toLowerCase()) {
      count++;
    }
  }
  return count;
}

const sentence = "JavaScript is amazing";
console.log(countSpecifiedCharacter(sentence, "a"));
console.log(countSpecifiedCharacter(sentence, "v"));
console.log(countSpecifiedCharacter(sentence, "x"));
