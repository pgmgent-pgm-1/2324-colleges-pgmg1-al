/*
 * Count words in a string
 * ===================================================================
 * Course: Programming 1: Front-End Essentials
 * Week: 3
 * Developed by: Philippe De Pauw - Waterschoot
 * Last updated: 27/09/2020
 */
/**
 * Dracula text chapter one
 */
const longText =
  "3 May. Bistritz.—Left Munich at 8:35 P. M., on 1st May, arriving at Vienna early next morning; should have arrived at 6:46, but train was an hour late. Buda-Pesth seems a wonderful place, from the glimpse which I got of it from the train and the little I could walk through the streets. I feared to go very far from the station, as we had arrived late and would start as near the correct time as possible. The impression I had was that we were leaving the West and entering the East; the most western of splendid bridges over the Danube, which is here of noble width and depth, took us among the traditions of Turkish rule. We left in pretty good time, and came after nightfall to Klausenburgh. Here I stopped for the night at the Hotel Royale. I had for dinner, or rather supper, a chicken done up some way with red pepper, which was very good but thirsty. (Mem., get recipe for Mina.) I asked the waiter, and he said it was called “paprika hendl,” and that, as it was a national dish, I should be able to get it anywhere along the Carpathians. I found my smattering of German very useful here; indeed, I don’t know how I should be able to get on without it. Having had some time at my disposal when in London, I had visited the British Museum, and made search among the books and maps in the library regarding Transylvania; it had struck me that some foreknowledge of the country could hardly fail to have some importance in dealing with a nobleman of that country. ...";

function calculateAmountOfWords(text) {
  // Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results
  text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  // Split on space character in order to generate an array of words
  const words = text.split(" ");
  return words.length;
}

console.log(
  `There are ${calculateAmountOfWords(longText)} words in the Dracula text!`
);

// Find unique words uitbreiding
function calculateAmountOfUniqueWords(text) {
  // Remove all of the punctuation (e.g. ".", ",", "!", "?") to tidy up the results
  text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  // Split on space character in order to generate an array of words
  const words = text.split(" ");

  const uniqueWords = [];
  for (const word of words) {
    if (uniqueWords.indexOf(word) === -1) {
      uniqueWords.push(word);
    }
  }
  return uniqueWords.length;
}

console.log(
  `There are ${calculateAmountOfUniqueWords(
    longText
  )} unique words in the Dracula text!`
);
