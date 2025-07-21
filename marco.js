//
function Marco() {
  this.time = millis() / 1000 + 2;
  this.imageIndex = 0;
  this.setXoff = function (xoff) {
    this.xoff = xoff;
  };
  this.myimgObj = new Array();
  this.myimg = new Array(
    'assets/mar6.png',
    'assets/mar9.png',
    'assets/mar10.png',
    'assets/mar4.png',
  );
  for (let index = 0; index < this.myimg.length; index++) {
    this.myimgObj[index] = loadImage(this.myimg[index]);
  }
  this.xoff = 0;
  this.yoff = 0;
  if (mobile) {
    this.width = 250;
    this.height = 300;
  } else {
    this.width = 400;
    this.height = 800;
  }
  this.pos = createVector(0, 0);
  this.update = function () {
    if (this.time <= millis() / 1000) {
      this.imageIndex++;
      this.time = millis() / 1000 + 2;
    }
    if (mobile) {
      this.pos.x = noise(this.xoff) * windowWidth - this.width / 2;
      this.pos.y = noise(this.yoff) * height - this.height / 2;
      this.xoff += 0.002;
      this.yoff += 0.002;
    } else {
      this.pos.x = noise(this.xoff) * width - this.width / 2;
      this.pos.y = noise(this.yoff) * height - this.height / 2;
      this.xoff += 0.003;
      this.yoff += 0.003;
    }
  };

  this.getPos = function () {
    return this.pos;
  };

  this.draw = function () {
    image(
      this.myimgObj[this.imageIndex % this.myimgObj.length],
      this.pos.x,
      this.pos.y,
    );
    fill(200, 250, 00);
  };
}
