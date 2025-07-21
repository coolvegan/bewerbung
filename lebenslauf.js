function Lebenslauf() {
  if (mobile) {
    this.pos = createVector(1, 2);
  } else {
    this.pos = createVector(10, 30);
  }

  this.img = loadImage('assets/lebenslauf.png');
  this.draw = function () {
    if (mobile) {
      var x = windowWidth;
      var y = windowHeight;
      image(this.img, this.pos.x, this.pos.y, x, y);
    } else {
      image(
        this.img,
        this.pos.x,
        this.pos.y,
        this.width / 3,
        this.height * 0.9,
      );
    }
  };
}
