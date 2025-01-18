let x = [];
let y = [];

function setup() {
  createCanvas(800, 600);
  noFill();
  for (let i = 0; i < 50; i++) {
    x.push(width / 2);
    y.push(height / 2);
  }
}

function draw() {
  background(20, 20, 40, 25); // 半透明背景，留下残影
  x.shift();
  y.shift();
  x.push(mouseX);
  y.push(mouseY);

  beginShape();
  stroke(100, 150, 255, 150);
  strokeWeight(2);
  for (let i = 0; i < x.length; i++) {
    vertex(x[i], y[i]);
  }
  endShape();
}
