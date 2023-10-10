const arcadeCharacter = {
  x: 10,
  y: 10,
  w: 200,
  h: 200,
  gutter: 4,
  nCols: 9,
  nRows: 9,
  update: function () {
   
  },
  display: function () {
    let xPos = this.x;
    let yPos = this.y;
    const bW = (this.w - (this.nCols-1)*this.gutter)/this.nCols;
    const bH = (this.h - (this.nRows-1)*this.gutter)/this.nRows;
    const pattern = generatePattern(this.nRows, this.nCols);

    for (let r = 0; r < this.nRows; r++) {
      for (let c = 0; c < this.nCols; c++) {
        noStroke();
        fill(pattern[r*this.nCols+c] == 0?color(0,0,255):color(0,255,0));
        rect(xPos, yPos, bW, bH);

        xPos += bH + this.gutter;
      }
      xPos = this.x;
      yPos += bW + this.gutter;
    }
  }
}

function generatePattern(nRows, nCols) {
  let pattern = '', tempStr = '';
  for (let r = 0; r < nRows; r++) {
    tempStr = '';
    for (let c = 0; c < ceil(nCols / 2); c++) {
      tempStr += String(floor(random(0, 2)));
    }
    if (nCols % 2 !== 0) {
      const newStr = tempStr.substring(0, tempStr.length - 1);
      tempStr += newStr.split('').reverse().join('');
    } else {
      tempStr += tempStr.split('').reverse().join('');
    }
    pattern += tempStr;
  }
  return pattern;
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  stroke(255);

  frameRate(2);

  arcadeCharacter.w = 200;
  arcadeCharacter.h = 200;
}

function draw() {
  background(0);

  update();
  display();
}

function update() {
  
}

function display() {
  arcadeCharacter.display();
}