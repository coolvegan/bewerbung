var b;
var y = 0;
var x = 0;
var c = 0;
var pause = false;
var last = true;
var mobile = false;
var help = false;
var rbuf = new RingBuffer(6);
var textblasen = rbuf.getData();
var showLebenslauf = false;
var showAnschreiben = true;
var earth;
var display;
var multiscreen;

function preload() {
  //preloading background
  var host = window.location.host;
  var subdomain = host.split('.')[0];
  song2 = loadSound('assets/bewerbung2.ogg');
  song3 = loadSound('assets/bewerbung.ogg');
  var x = random(0, 99);
  if (x <= 90) {
    song = song2;
  } else {
    song = song3;
  }
}

function setup() {
  var timedQueue = new TimedQueue();
  earth = new Earth();
  if (windowHeight / windowWidth > 1) {
    mobile = true;
  }
  createCanvas(windowWidth, windowHeight);

  mar = new Marco();
  scanlines = new Scanlines();
  //deactivated
  a = new Anschreiben();
  multiscreen = new MultiLineDisplay(100, 0.001);
  var ansch = a.getText();

  for (var i = 0; i < ansch.length; i++) {
    multiscreen.setText(ansch[i]);
  }

  l = new Lebenslauf();
  mar.setXoff(0.2);
  display = new SingleLineDisplay();
  sprache = new IntroText(display);
  sprache.setTextIndex(-1);
}
function touchStarted() {}

function deviceTurned() {
  location.reload();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
  showAnschreiben = !showAnschreiben;
  showLebenslauf = !showLebenslauf;
  if (!song.isPlaying()) {
    userStartAudio();
    last = !last;
    song.play();
    pause = false;
  }
  var s = new ScreenMatrix();
  s.initMatrix();
  for (var i = 0; i < 80; i++) {
    s.append(random(0, 100));
  }
}

function keyPressed() {
  if (keyCode === 67 || keyCode === 99) {
    song.jump(190);
  } else if (keyCode === 83 || keyCode === 115) {
    song.jump(24);
  } else if (keyCode === 65 || keyCode === 97) {
    song.jump(0);
  } else if (keyCode === 50) {
    showLebenslauf = !showLebenslauf;
    showAnschreiben = false;
  } else if (keyCode === 49) {
    showAnschreiben = !showAnschreiben;
    showLebenslauf = false;
  } else if (keyCode === 51) {
    var tmp = song.currentTime();
    song.stop();
    song = song2;
    song.play();
    song.jump(tmp);
  } else if (keyCode === 52) {
    var tmp = song.currentTime();
    song.stop();
    song = song3;
    song.play();
    song.jump(tmp);
  }
}

function draw() {
  background(255);

  if (showAnschreiben) {
    //a.draw();
    multiscreen.update();
    multiscreen.draw();
  }
  if (showLebenslauf) {
    l.draw();
    display.update();
    display.draw();
  }

  sprache.setPos(mar.getPos());
  if (!song.isPlaying()) {
    sprache.setTextIndex(-1);
    if (!help) {
      help = true;
      //Todo Texte ins Json Templatisieren
      /*display.setText(
        'Drücken Sie die Maustaste zum Start. Drücken Sie [1] für Anschreiben. [2] für Lebenslauf. [3] Für Tonspur 1. [4] Für Tonspur 2.',
      );
      */
    }
  } else {
    sprache.update();
    mar.update();
    mar.draw();
    sprache.setTextIndex(Math.floor(song.currentTime()));
    sprache.draw();
  }
  earth.draw();

  textblasen = rbuf.getData();
  for (var i = 0; i < textblasen.length; i++) {
    if (textblasen[i] != null) {
      if (mobile) {
        var gravity = createVector(3, 0.2 * textblasen[i].mass);
      } else {
        var gravity = createVector(random(5, 30), 0.2 * textblasen[i].mass);
      }
      earth.setPos(mouseX, mouseY);
      f = earth.anziehung(textblasen[i]);
      textblasen[i].applyForce(gravity);
      textblasen[i].update();
      textblasen[i].draw();
      textblasen[i].checkEdges();
      if (!mobile && song.currentTime() > 20) {
        textblasen[i].bounceRight();
      }
      textblasen[i].bounceLeft();
      var bla = constrain(mouseX, 800, windowWidth + 400);
      rect(bla, 10, windowWidth, windowHeight);
      fill(0, 0, 0, 0);
    }
  }

  scanlines.draw();
}
