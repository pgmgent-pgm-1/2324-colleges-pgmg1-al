let font;
  
/**
 * Preload the assets
 * - Load font via the loadFont() function. The argument is a relative path to the true type font file. In this case one level up in the directory structure relative to this JavaScript file.
 */
function preload() {
  font = loadFont('../fonts/RobotoMono-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // canvas bevat de volledige breedte en hoogte van de viewport
  background(0); // achtergrondkleur van de canvas is zwart
  fill(255);

  rectMode(CENTER);
  textFont(font); // Set the font of the text
  textAlign(CENTER, CENTER); // Align the text in the center of it's containing box
  textSize(88); // Set the text size
  angleMode(DEGREES);

  frameRate(30);
}

function draw() {
  update();
}

function update() {
  const time = getTimeInDigitalFormat(false);
  const space = 64;
  const cw = textWidth(time);
  push();
  translate(width/2, height/2);
  rotate(new Date().getSeconds()*6);
  fill(255);
  rect(0, 0, cw+2*space, height/2);
  fill(0);
  text(time, 0, 0);
  pop();
}

/**
 * convertTimepartToDigits() function declaration
 * return the time part with the specified amount of digits
 * parameter t: the time part
 * parameter nDigits: the amount of resulting digits
 */
function convertTimepartToDigits(t, nDigits) {
  t = String(t);
  while ( t.length < nDigits ) {
    t = '0' + t;
  }
  return t;
}

/**
 * getTimeInDigitalFormat() function declaration
 * return the time in digital format
 */
function getTimeInDigitalFormat(showMilliseconds = false) {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const milliSeconds = now.getMilliseconds();

  let timeStr = `${convertTimepartToDigits(hours, 2)}:${convertTimepartToDigits(minutes, 2)}:${convertTimepartToDigits(seconds, 2)}`;

  if (showMilliseconds) {
    timeStr += ':' + convertTimepartToDigits(milliSeconds, 3);
  } 

  return timeStr;
}