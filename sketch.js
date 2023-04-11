//bunny instance
var b;
//x and y for drawing a line
var y = 0;
var x = 0;
//color iterator
var c = 0;
function preload() {
  //preloading background
  song = loadSound('assets/sound_low.mp3');
  bg = loadImage('assets/background.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //initialize bunny
  b = new Bunny();
  b.setXoff(1);
  d = new Bunny();
  d.setXoff(2);
  d.setImagePath('hase2.png');
  t = new IntroText();
  song.stop();
}

function mousePressed() {
  if (!song.isPaused()) {
    song.pause();
  } else {
    song.play();
  }
}

function draw() {
  //draw background
  background(bg);
  //update and draw bunny
  b.update();
  b.draw();
  d.draw();
  d.update();
  t.update();
  t.draw();

  //draw line up down
  stroke(c, 255 % c, 255 % c, 80);
  for (let index = 0; index < 1920; index += 1) {
    line(0, y + index, width, y + index);
  }
  //draw line from left to right
  for (let index = 0; index < 1080; index += 1) {
    line(x + index, 0, x + index, height);
  }
  y++;
  x++;
  c++;
  //reset all
  if (y > height) {
    y = -1920;
  }
  if (x > width) {
    x = -1080;
  }
  if (c > 255) {
    c = 0;
  }
  if (!song.isPlaying() && !song.isPaused()) {
    song.play();
  }
}
function keyPressed() {
  outputVolume(0.5, 1, 0);
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function IntroText() {
  this.s = [
    'Willkommen',
    'bei Marco Kittel',
    'Von Beruf',
    'bin ich',
    'Softwareentwickler',
  ];
  textFont('Georgia', 10, 90);
  this.time = millis() / 1000 + 2;
  this.textIndex = 0;
  this.ts = 40;
  this.x = windowWidth / 2;
  this.shrinkMode = true;
  this.update = function () {
    if (this.time <= millis() / 1000) {
      this.time = millis() / 1000 + 2;
      this.textIndex++;
      this.textIndex = this.textIndex % this.s.length;
    }
    this.x = noise(this.x) * windowWidth * 0.01 + windowWidth / 2 - 200;
    textSize(this.ts);
    if (this.shrindMode) {
      this.ts += 0.2;
    } else {
      this.ts -= 0.2;
    }
    if (this.ts > 54 || this.ts < 40) {
      this.shrindMode = !this.shrindMode;
    }
  };
  this.draw = function () {
    fill(200, 250, 00);
    text(this.s[this.textIndex], mouseX + 10, mouseY + 10);
  };
}

function Bunny() {
  this.setXoff = function (xoff) {
    this.xoff = xoff;
  };
  this.setImagePath = function (img) {
    this.img = loadImage('assets/' + img);
  };
  this.img = loadImage('assets/hase.png');
  this.xoff = 0;
  this.yoff = 0;
  this.width = 480;
  this.height = 490;
  this.pos = createVector(0, 0);
  this.update = function () {
    this.pos.x = noise(this.xoff) * width - this.width / 2;
    this.pos.y = noise(this.yoff) * height - this.height / 2;
    this.xoff += 0.01;
    this.yoff += 0.01;
  };

  this.draw = function () {
    image(this.img, this.pos.x, this.pos.y, this.width, this.height);
  };
}
