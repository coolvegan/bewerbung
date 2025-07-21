function MultiLineDisplay(linecount = 4, time = 0.1) {
  //todo, queue einbauen
  const wortbreite = 80;
  const delaytime = time;
  this.displayQueue = new TimedQueue();
  this.colorQueue = new TimedQueue();
  this.colorQueue.enqueue('#00CC00');
  this.colorQueue.enqueue('#00CC33');
  this.colorQueue.enqueue('#00CCCC');
  const left_padding = 20;
  const recordSep = String.fromCharCode(30);
  this.displayColor = '#FF0000';
  this.width = 600;
  this.screenText = Array();
  //Anschalten um es in die Mitte zu stellen
  //this.pos = createVector(windowWidth / 2 - this.width / 2, 0 + this.height);
  this.pos = createVector(20, 20);
  this.screenMatrix = new ScreenMatrix(linecount, wortbreite);
  this.screenMatrix.initMatrix();
  this.time = millis() / 1000 + delaytime;
  this.bildwiederholung = millis() + 30;

  this.clearScreen = function () {
    for (var i = 0; i < wortbreite; i++) {
      this.screenText[i] = '';
    }
  };

  this.bildwiederholfrequenz = function () {
    if (this.bildwiederholung < millis()) {
      this.setDisplayColor();
      this.bildwiederholung = millis() + 30;
    }
  };

  this.update = function () {
    this.bildwiederholfrequenz();
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
    this.screenMatrix.append(data);
  };

  this.setDisplayColor = function () {
    var color = this.colorQueue.dequeue().getData();
    this.colorQueue.enqueue(color);
    this.displayColor = color;
  };

  this.drawToScreen = function () {
    this.clearScreen();
    var wordWrap = 0;
    for (var i = 0; i < this.screenMatrix.rows(); i++) {
      for (var j = 0; j < this.screenMatrix.cols(); j++) {
        if (this.screenMatrix.matrix[i][j] != null) {
          if (
            this.screenText[wordWrap].length > wortbreite - 10 &&
            this.screenMatrix.matrix[i][j] == ' '
          ) {
            wordWrap++;
          } else if (
            this.screenMatrix.matrix[i][j] == String.fromCharCode(13)
          ) {
            wordWrap++;
          }
          this.screenText[wordWrap] += this.screenMatrix.elementAt(i, j);
        }
      }
    }

    textFont('coiny', 25);
    textSize(18);
    strokeWeight(1);
    //fill(20, 250, 22, this.transparency);

    fill(this.displayColor);
    this.transparency -= 0.02;

    for (var i = 0; i < this.screenMatrix.rows(); i++) {
      text(
        this.screenText[i],
        this.pos.x + left_padding,
        (this.pos.y + 30) * (1 + i),
      );
    }
    strokeWeight(1);
  };

  this.drawMonitor = function () {
    //Der Code ist Garbage
    /*strokeWeight(1);
    stroke(0);
    fill(0, 0, 0, 10);
    for (var i = 1; i <= this.screenMatrix.rows(); i++) {
      rect(
        this.pos.x,
        this.pos.y + 12 * i,
        this.width + wortbreite * 2.3,
        50 * i,
      );
    }*/
  };

  this.draw = function () {
    //Für Hintergrund dies anschalten
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
