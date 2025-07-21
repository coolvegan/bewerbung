function Scanlines() {
  this.draw = function () {
    //draw line up down
    strokeWeight(0.2);
    stroke(c, 255 % c, 255 % c, 100);
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
  };
}
