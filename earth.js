function Earth() {
  this.pos = createVector(windowWidth, windowHeight);
  this.mass = 8;
  this.anziehung = 100;
  this.G = 4;

  this.anziehung = function (p) {
    // Die Richtung zur Kraft berechnen
    var anziehungskraft = p5.Vector.sub(this.pos, p.pos);
    //Vektor mit Kehrwert multiplizieren um die Entfernung zu erhalten
    //zwischen p und this zu erhalten
    var distance = anziehungskraft.mag();
    distance = constrain(distance, 4, 25);
    anziehungskraft.normalize();
    //Kraft = Anziehungskonstante G * Masse1 und Masse2 geteilt durch das
    //Quadrat der Entfernung
    var strength = (this.G * this.mass * p.mass) / (distance * distance);
    anziehungskraft.mult(strength);
    return anziehungskraft;
  };
  this.draw = function () {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  };

  this.setPos = function (x, y) {
    this.pos.x = x;
    this.pos.y = y;
  };
}
