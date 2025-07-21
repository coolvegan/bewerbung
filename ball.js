function Ball(m, x, y) {
  this.transparency = random(20, 90);
  this.red = random(40, 230);
  this.green = random(70, 220);
  this.yellow = random(60, 220);
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.rebounce = 99;
  this.word = '';
  this.time = millis() / 1000;
  this.bounceTo = random(1, 100);

  this.applyForce = function (force) {
    //beschleunigung = kraft / masse
    var textmass = 1;
    if (this.word.length > 0) {
      this.mass += this.word.length * 2;
    }
    //var kraft = p5.Vector.div(force, this.mass);
    //var kraft = p5.Vector.div(force, this.mass);
    var kraft = force.copy();
    kraft.div(this.mass);
    this.acceleration.add(kraft);
  };

  this.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  };

  this.setText = function (text) {
    if (text == null) {
      text = '';
    }
    this.word = text;
  };

  this.draw = function () {
    fill(this.red, this.green, this.yellow, 255);
    if (mobile) {
      textFont('Rubik', 30, 90);
    } else {
      textFont('Rubik', 60, 90);
    }
    text(this.word, this.position.x - this.word.length * 4, this.position.y);
    stroke(0);
    strokeWeight(0);
    var scale = 38;
    if (mobile) {
      scale = 20;
    }

    rect(
      this.position.x - this.word.length * 7,
      this.position.y + 2,
      this.word.length * scale,
      (25 * this.word.length) / 50,
      10,
    );
    fill(this.red, this.green, this.yellow, this.transparency);
    /* ellipse(
      this.position.x,
      this.position.y,
      this.mass * 18 + this.word.length * 10,
      this.mass * 18 + this.word.length * 10,
    );
    */
  };

  this.checkEdges = function () {
    if (this.position.y > height) {
      this.velocity.y *= (-1 * this.rebounce + this.word.length / 2) / 100;
      this.position.y = height;
    }
  };
  this.foo = function () {
    if (this.time < millis() / 1000) {
      this.time = millis() / 1000 + 1;
      if (this.position.x < mouseX)
        if (this.bounceTo > 50) {
          this.velocity.x = 5;
        } else {
          this.velocity.x = -5;
        }
    }
  };

  this.bounceRight = function () {
    if (this.time < millis() / 1000) {
      this.time = millis() / 1000 + 0.5;
      var bla = constrain(
        mouseX,
        800 - this.word.length * 15,
        windowWidth + 400,
      );
      if (this.position.x >= bla) {
        if (this.velocity.x < 0) {
          this.velocity.x *= 3.5;
        } else {
          this.velocity.x -= 5;
        }
      }
    }
  };
  this.bounceLeft = function () {
    if (this.position.x < 0) {
      this.velocity.x *= -1 * 0.8;
    }
  };
}
