function searchLongestWord(text, character) {
  const words = text.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(searchLongestWord("Full Stack JavaScript Development"));
