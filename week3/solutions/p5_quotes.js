/*
Quotes
===================================================================
Course: Web Programming 1: Front-End (Basics)
Week: 3
Developed by: Philippe De Pauw - Waterschoot
Last updated: 08/10/2019
*/

/*
 * Variables
 * 
 * - font (store the loaded font)
 * - quotes (an array of sentences)
 * - currentQuoteIndex (a number with a value point to the current loaded quote)
*/
let font, quotes = [
  'I\'m not a great programmer; I\'m just a good programmer with great habits.',
  'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.',
  'Truth can only be found in one place: the code.',
  'Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
], currentQuoteIndex = 0;

/*
 * Preload the assets
 * 
 * - Load font via the loadFont() function. The argument is a relative path to the true type font file. In this case one level up in the directory structure relative to this JavaScript file.
*/
function preload() {
  font = loadFont('../fonts/RobotoMono-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL, 360, 100, 100);
  background(0)
  noStroke();

  rectMode(CENTER);
  textFont(font); // Set the font of the text
  textAlign(CENTER, CENTER); // Align the text in the center of it's containing box
  textSize(28); // Set the text size

  // Call the function drawQuote() with the current selected quote as argument
  // In this case the first quote will be selected from the array because currentQuoteIndex equals 0
  drawQuote(quotes[currentQuoteIndex]);
}

/*
 * When pressing the mouse the mousePressed() function will be executed
 * Check if the currentQuoteIndex + 1 is lower than the length of the quotes array
 * If so then increment the value of the variable currentQuoteIndex
 * If not then set the value of the variable currentQuoteIndex to zero
 * Draw the text quote by calling the function drawQuote()
*/
function mousePressed() {
  if (currentQuoteIndex + 1 < quotes.length) {
    currentQuoteIndex++;
  } else {
    currentQuoteIndex = 0;
  }
  drawQuote(quotes[currentQuoteIndex]);
}

function drawQuote(quote) {
  background(0); // Redraw the screen   
  
  rect(width/2, height/2, width/1.5, height/2);
  text(quote, width/2, height/2, width/1.5-64, height/2-64); // Draw the text so it will visually be on the rendered rectangle
}