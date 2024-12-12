let circles = [];
let a = 250;
let b = 150;
let phrase = "spins as it iss";
let textIndex = 0;
let sparkleCount = 100;

function setup() {
  createCanvas(600, 400);
  noStroke();
  textSize(24);
  textAlign(LEFT, CENTER);
  textFont("Futura");

  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let diameter = random(40, 80);
    let speed = random(0.02, 0.05);
    
    let colorValue = color(
      random(150, 200),
      random(130, 180),
      random(130, 180),
      random(80, 150)
    );
    circles.push(new Circle(x, y, diameter, speed, colorValue));
  }
}

function draw() {
  background(210, 200, 190, 10);
  drawSparkles();

  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }

  displayText();
}

function drawSparkles() {
  for (let i = 0; i < sparkleCount; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(1, 3);
    let alpha = random(150, 255);
    fill(255, 255, 255, alpha);
    ellipse(x, y, size, size);
  }
}

function displayText() {
  let currentText = phrase.substring(0, textIndex);
  fill(168, 147, 130);
  text(currentText, width / 2, height / 2);

  if (frameCount % 10 === 0 && textIndex < phrase.length) {
    textIndex++;
  }

  if (textIndex === phrase.length) {
    textIndex = 0;
  }
}

class Circle {
  constructor(x, y, diameter, speed, colorValue) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.speed = speed;
    this.colorValue = colorValue;
    this.angle = random(TWO_PI);
  }

  move() {
    this.angle += this.speed;
    this.x = width / 2 + a * cos(this.angle);
    this.y = height / 2 + b * sin(this.angle);
  }

  display() {
    fill(this.colorValue);
    noStroke();
    ellipse(this.x, this.y, this.diameter);
  }
}

function resetCircles() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].x = random(width);
    circles[i].y = random(height);
    circles[i].diameter = random(40, 80);
    circles[i].speed = random(0.02, 0.05);
    circles[i].colorValue = color(
      random(150, 200),
      random(130, 180),
      random(130, 180),
      random(80, 150)
    );
  }
}

