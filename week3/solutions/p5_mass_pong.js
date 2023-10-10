function Ball(x, y, r, xSpeed, ySpeed) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.xSpeed = xSpeed;
  this.ySpeed = ySpeed;

  this.update = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if((this.x > (width - this.r)) || (this.x < (0 + this.r))) {
      this.xSpeed *= -1;
    }

    if((this.y > (height - this.r)) || (this.y < (0 + this.r))) {
      this.ySpeed *= -1;
    }
  }

  this.display = function () {
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}

let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(0);
  stroke(255);

  for(let i = 0; i < 600; i++) {
    const ball = new Ball(random(0, width),random(0, width),random(1, 2),random(10, 30),random(10, 30))
    balls.push(ball);
  }
}

function draw() {
  background(0);

  update();
  display();
}

function update() {
  balls.forEach(ball => ball.update());
}

function display() {
  balls.forEach(ball => ball.display());
}