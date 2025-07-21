function Bunny() {
  this.setXoff = function (xoff) {
    this.xoff = xoff;
  };
  this.setImagePath = function (img) {
    this.img = loadImage('assets/' + img);
  };
  this.img = loadImage('assets/marco.png');
  this.xoff = 0;
  this.yoff = 0;
  if (mobile) {
    this.width = 150;
    this.height = 200;
  } else {
    this.width = 300;
    this.height = 350;
  }
  this.pos = createVector(0, 0);
  this.update = function () {
    if (mobile) {
      this.pos.x = noise(this.xoff) * windowWidth - this.width / 2;
      this.pos.y = noise(this.yoff) * height - this.height / 2;
      this.xoff += 0.01;
      this.yoff += 0.01;
    } else {
      this.pos.x = noise(this.xoff) * width - this.width / 2;
      this.pos.y = noise(this.yoff) * height - this.height / 2;
      this.xoff += 0.01;
      this.yoff += 0.01;
    }
  };

  this.getPos = function () {
    return this.pos;
  };

  this.draw = function () {
    image(this.img, this.pos.x, this.pos.y, this.width, this.height);
    fill(200, 250, 00);
  };
}
