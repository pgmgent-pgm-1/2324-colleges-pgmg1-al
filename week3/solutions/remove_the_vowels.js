const vowels = "aeiou";

// optie 1
function removeTheVowelsOptionOne(text) {
  let newText = "";
  for (let i = 0; i < text.length; i++) {
    if (vowels.indexOf(text[i].toLowerCase()) === -1) {
      newText += text[i];
    }
  }
  return newText;
}

// optie 2
function removeTheVowelsOptionTwo(text) {
  let newText = "";
  const chars = text.split("");
  for (const char of chars) {
    if (vowels.indexOf(char.toLowerCase()) === -1) {
      newText += char;
    }
  }
  return newText;
}

console.log(removeTheVowelsOptionOne("JavaScript"));
console.log(removeTheVowelsOptionTwo("JavaScript"));
