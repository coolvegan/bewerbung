function SingleLineDisplay() {
  //todo, queue einbauen
  this.displayQueue = new TimedQueue();
  this.colorQueue = new TimedQueue();
  this.colorQueue.enqueue('#FF0000');
  this.colorQueue.enqueue('#DE0100');
  this.colorQueue.enqueue('#FF4000');
  const left_padding = 20;
  const recordSep = String.fromCharCode(30);
  this.displayColor = '#FF0000';
  this.width = 600;
  this.pos = createVector(windowWidth / 2 - this.width / 2, 0 + this.height);
  this.showText = '';
  const wortbreite = 60;
  const delaytime = 0.1;
  this.time = millis() / 1000 + delaytime;
  this.bildwiederholung = millis() + 30;

  this.bildwiederholfrequenz = function () {
    if (this.bildwiederholung < millis()) {
      this.setDisplayColor();
      this.bildwiederholung = millis() + 30;
    }
  };

  this.update = function () {
    this.bildwiederholfrequenz();
    if (this.showText.length >= wortbreite) {
      this.showText = '';
    }
    if (millis() / 1000 > this.time) {
      var data = this.displayQueue.dequeue();
      if (data != null) {
        this.addToScreen(data.getData());
      }
      if (this.displayQueue.getSize() > 100) {
        this.time = millis() / 1000 + 0.001;
      } else {
        this.time = millis() / 1000 + delaytime;
      }
    }
  };

  this.addToScreen = function (data) {
    if (data == recordSep) {
      this.showText = '';
    }
    if (this.showText.length > wortbreite - 6 && data == ' ') {
      this.showText = '';
    }
    this.showText += data;
  };

  this.setDisplayColor = function () {
    var color = this.colorQueue.dequeue().getData();
    this.colorQueue.enqueue(color);
    this.displayColor = color;
  };

  this.drawToScreen = function () {
    textFont('coiny', 25);
    textSize(20);
    strokeWeight(1);
    //fill(20, 250, 22, this.transparency);

    fill(this.displayColor);
    this.transparency -= 0.02;
    text(this.showText, this.pos.x + left_padding, this.pos.y + 30 + 12);
    strokeWeight(1);
  };

  this.drawMonitor = function () {
    strokeWeight(1);
    stroke(0);
    fill(0, 0, 0, 200);
    rect(this.pos.x, this.pos.y + 12, this.width + wortbreite * 2.3, 50);
  };

  this.draw = function () {
    this.drawMonitor();
    this.drawToScreen();
  };

  this.setText = function (txt) {
    if (txt != null) {
      this.displayQueue.enqueue(recordSep);
      for (var i = 0; i < txt.length; i++) {
        this.displayQueue.enqueue(txt[i]);
      }
    }
  };
}
