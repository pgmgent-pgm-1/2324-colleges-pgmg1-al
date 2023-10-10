let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  translate(width / 2, height / 2);
  rectMode(CENTER);

  noStroke();
  fill(...generateRandomColor());
}

function draw() {
  background(0);
  translate(0.5 * width, 0.5 * height);

  let offset = 0,
    speedX = 20,
    rectW = 10;
  for (let x = 0; x < width; x += speedX) {
    const a = angle + offset;
    const h = map(Math.sin(a), -1, 1, 0, height / 2);
    rect(x - width / 2, 0, rectW, h);
    if (Math.round(h) < 1) {
      fill(...generateRandomColor());
    }
    offset += 0.04;
  }

  angle += 0.05;
}

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  return [r, g, b];
}
