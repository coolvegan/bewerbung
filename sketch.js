var xoff = 0;
function setup() {
  createCanvas(640, 400);
}

function draw() {
  background(51);
  var x = noise(xoff) * width;
  xoff += 0.05;
  fill(255);
  ellipse(x, 180, 48, 48);
}
