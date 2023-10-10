function Clock(x, y, h, hue) {
  this.x = x;
  this.y = y;
  this.h = h;
  this.hue = hue;
  this.space = h / 8;
  this.time;

  this.update = function() {
    this.time = this.getTimeInDigitalFormat(false);
  }

  this.display = function() {
    rectMode(CENTER);
    textFont(font); // Set the font of the text
    textAlign(CENTER, CENTER);
    angleMode(DEGREES);
    colorMode(HSL, 360, 100, 100);

    textSize(this.h - this.space * 2);
    const cw = textWidth(this.time);

    push();
    translate(x, y);
    rotate(new Date().getSeconds()*30);
    fill(color(this.hue, 50, 20));
    rect(0, 0, cw+2*this.space, h);
    console.log(this.hue);
    fill(color(this.hue, 50, 60));
    text(this.time, 0, 0);
    pop();
  }

  this.convertTimepartToDigits = function(t, nDigits) {
    t = String(t);
    while ( t.length < nDigits ) {
      t = '0' + t;
    }
    return t;
  }

  this.getTimeInDigitalFormat = function(showMilliseconds = false) {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliSeconds = now.getMilliseconds();
  
    let timeStr = `${this.convertTimepartToDigits(hours, 2)}:${this.convertTimepartToDigits(minutes, 2)}:${this.convertTimepartToDigits(seconds, 2)}`;
  
    if (showMilliseconds) {
      timeStr += ':' + this.convertTimepartToDigits(milliSeconds, 3);
    } 
  
    return timeStr;
  }
}

let font, clocks = [];
  
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

  frameRate(30);

  for (let i = 0; i < 80; i++ ) {
    clocks.push(new Clock(random(0, width), random(0, height), random(5, 40), random(0, 360)));
  }
}

function draw() {
  
  update();
  display();
}

function update() {
  clocks.forEach((clock) => {
    clock.update();
  });
}

function display() {
  clocks.forEach((clock) => {
    clock.display();
  });
}
```

### Waves

```js
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);  
  
  translate(width/2, height/2);
  rectMode(CENTER);

  noStroke();
  fill(...generateRandomColor());
}

function draw() {
  
  background(0);
  translate(0.5*width, 0.5*height);
  
  let offset = 0, speedX = 20, rectW = 10
  for(let x = 0;x < width; x += speedX) {
      const a = angle + offset
      const h = map(Math.sin(a), -1, 1, 0, height/2)
      rect(x - width / 2, 0, rectW, h);
      if(Math.round(h) < 1) {
        fill(...generateRandomColor());
      }
      offset += 0.04
  }

  angle += 0.05
}

function generateRandomColor() {
  const r = Math.floor(Math.random()*256);
  const g = Math.round(Math.random()*256);
  const b = Math.round(Math.random()*256);
  return [r, g, b];
}