function IntroText(dsp) {
  this.display = dsp;
  var host = window.location.host;
  var subdomain = host.split('.')[0];
  this.pos = createVector(0, 0);
  const textmap = new Map();
  this.lasttext = '';
  textmap.set(-1, '.....');
  textmap.set(0, 'Hallo ' + subdomain + '  mein Name ist Marco Kittel');
  textmap.set(1, 'Hallo ' + subdomain + '  mein Name ist Marco Kittel');
  textmap.set(2, 'Ich such einen Job');
  textmap.set(3, 'Ich such einen Job');
  textmap.set(4, 'Als Softwareentwickler oder Dev Op');
  textmap.set(5, 'Als Softwareentwickler oder Dev Op');
  textmap.set(6, 'Meine Skills sind ziemlich umfassend');
  textmap.set(7, 'Meine Skills sind ziemlich umfassend');
  textmap.set(8, 'Meine Skills sind ziemlich umfassend');
  textmap.set(9, 'Ich lerne schnell, bin für jede Stelle passend');
  textmap.set(9, 'Ich lerne schnell, bin für jede Stelle passend');
  textmap.set(10, 'Ich lerne schnell, bin für jede Stelle passend');
  textmap.set(11, 'Ich lerne schnell, bin für jede Stelle passend');
  textmap.set(12, 'Bitte stellen Sie mich ein');
  textmap.set(13, 'Bitte stellen Sie mich ein');
  textmap.set(14, 'Ich möchte nicht mehr arbeitslos sein');
  textmap.set(15, 'Ich möchte nicht mehr arbeitslos sein');
  textmap.set(16, 'Ich möchte nicht mehr arbeitslos sein');
  textmap.set(17, 'Ich möchte nicht mehr arbeitslos sein');
  textmap.set(18, 'Mein Lebenslauf sieht ziemlich schlecht aus');
  textmap.set(19, 'Mein Lebenslauf sieht ziemlich schlecht aus');
  textmap.set(20, 'Mein Lebenslauf sieht ziemlich schlecht aus');
  textmap.set(21, 'Glauben Sie mir, ich hab es echt drauf');
  textmap.set(22, 'Glauben Sie mir, ich hab es echt drauf');
  textmap.set(23, 'Glauben Sie mir, ich hab es echt drauf');
  textmap.set(23, 'Glauben Sie mir, ich hab es echt drauf');
  textmap.set(24, 'Hier eine Auflistung');
  textmap.set(25, 'Meiner Skills');
  textmap.set(27, 'HTML, CSS');
  textmap.set(28, 'Javascript');
  textmap.set(29, 'Ganz gut');
  textmap.set(31, 'VueJS');
  textmap.set(32, 'V2');
  textmap.set(33, 'Eigentlich ganz gut');
  textmap.set(34, 'Java');
  textmap.set(36, 'Doch ganz gut');
  textmap.set(37, 'Spring Boot');
  textmap.set(38, 'Ganz gut');
  textmap.set(39, 'Ganz gut');
  textmap.set(40, 'C, C++');
  textmap.set(41, 'gut');
  textmap.set(42, 'gut');
  textmap.set(43, 'Delphi, Pascal');
  textmap.set(44, 'Sehr gut');
  textmap.set(45, 'Sehr gut');
  textmap.set(46, 'Ruby, Sinatra');
  textmap.set(47, 'Rails');
  textmap.set(48, 'Ok');
  textmap.set(49, 'Go');
  textmap.set(50, 'Go, Buffalo');
  textmap.set(51, 'Ok');
  textmap.set(52, 'Visual Basic');
  textmap.set(53, 'Ok');
  textmap.set(54, 'C#');
  textmap.set(55, 'Geht so');
  textmap.set(56, 'Geht so');
  textmap.set(57, 'Typescript');
  textmap.set(58, 'Ja');
  textmap.set(59, 'Ja');
  textmap.set(60, 'Dart');
  textmap.set(61, 'Ja gar nicht mal so schlecht');
  textmap.set(62, 'Flutter');
  textmap.set(63, 'Ganz gut');
  textmap.set(64, 'Schon einige Projekte privat umgesetzt');
  textmap.set(65, 'Schon einige Projekte privat umgesetzt');
  textmap.set(66, 'Python, och ja');
  textmap.set(67, 'Ganz gut');
  textmap.set(68, 'PHP');
  textmap.set(69, 'Ganz ok');
  textmap.set(70, 'Bash, Fish Shell');
  textmap.set(71, 'Sehr gut');
  textmap.set(72, 'Sehr gut');
  textmap.set(73, 'Kotlin, ja');
  textmap.set(74, 'toll');
  textmap.set(75, 'JQuery');
  textmap.set(76, 'Gut');
  textmap.set(77, 'Tickle');
  textmap.set(78, 'TCL');
  textmap.set(79, 'Ok');
  textmap.set(80, 'Bootstrap');
  textmap.set(81, 'Gut');
  textmap.set(82, 'Virtualisierung, Proxmox');
  textmap.set(83, 'Containerisierung');
  textmap.set(84, 'Docker');
  textmap.set(85, 'Sehr... sehr gut');
  textmap.set(86, 'Sehr... sehr gut');
  textmap.set(87, 'Git... Gitlab');
  textmap.set(88, 'Selbst hostend');
  textmap.set(89, 'Super');
  textmap.set(90, 'Super');
  textmap.set(91, 'Kubernetes okay');
  textmap.set(92, 'Terraform okay');
  textmap.set(93, 'Helm okay');
  textmap.set(94, 'Linux, sehr sehr gut');
  textmap.set(95, 'Linux, sehr sehr gut');
  textmap.set(96, 'CMake für C');
  textmap.set(97, 'CMake für C');
  textmap.set(98, 'Gut');
  textmap.set(99, 'Azure');
  textmap.set(100, 'Ok');
  textmap.set(101, 'NodeJS');
  textmap.set(102, 'Ganz ok');
  textmap.set(103, 'Fastreport');
  textmap.set(104, 'Ok');
  textmap.set(105, 'ORM, Hibernate');
  textmap.set(106, 'Doctrine');
  textmap.set(107, 'Also Object Relationship Mapper');
  textmap.set(108, 'Also Object Relationship Mapper');
  textmap.set(109, 'Gut');
  textmap.set(110, 'HL 7');
  textmap.set(111, 'Ok');
  textmap.set(112, 'Microservices');
  textmap.set(113, 'Ja, ganz gut');
  textmap.set(115, 'REST');
  textmap.set(116, 'Super');
  textmap.set(117, 'Super');
  textmap.set(118, 'Soap, naja');
  textmap.set(119, 'SQL, super gut');
  textmap.set(120, 'SQL, super gut');
  textmap.set(121, 'Postgres, MariaDB');
  textmap.set(122, 'Postgres, MariaDB');
  textmap.set(123, 'Ja, kann ich hosten');
  textmap.set(124, 'Kann ich administrieren');
  textmap.set(125, 'Kann ich administrieren');
  textmap.set(126, 'Kann ich installieren');
  textmap.set(127, 'Kann ich installieren');
  textmap.set(128, 'Crystal');
  textmap.set(129, 'Ein Ruby Klon');
  textmap.set(130, 'Okay');
  textmap.set(131, 'C# und Mono , okay');
  textmap.set(132, 'C# und Mono , okay');
  textmap.set(133, 'QT5, naja');
  textmap.set(134, 'GTK, geht');
  textmap.set(135, 'GTK, geht');
  textmap.set(136, 'Go und Fyne');
  textmap.set(137, 'Naja');
  textmap.set(138, 'Vim, Nvim, super');
  textmap.set(139, 'Nginx');
  textmap.set(140, 'Administrierung');
  textmap.set(141, 'Super gut');
  textmap.set(142, 'Eigenen Server administrieren');
  textmap.set(143, 'Super gut');
  textmap.set(144, 'Apache, administrieren, super gut');
  textmap.set(145, 'Apache, administrieren, super gut');
  textmap.set(146, 'JRuby, ok');
  textmap.set(147, 'JRuby, ok');
  textmap.set(148, 'JRuby, ok');
  textmap.set(149, 'Raspberry PI');
  textmap.set(150, 'GPIO Programmierung');
  textmap.set(151, 'Ganz gut.');
  textmap.set(152, 'Arduino, ganz gut');
  textmap.set(153, 'Designpatterns');
  textmap.set(154, 'Ja, ganz gut');
  textmap.set(155, 'Lieblingspattern');
  textmap.set(156, 'ist, das');
  textmap.set(157, 'Strategy Pattern');
  textmap.set(158, 'Clean Code, SOLID');
  textmap.set(159, 'Lieb ich');
  textmap.set(160, 'MongoDB, ganz ok');
  textmap.set(161, 'ReddisDB');
  textmap.set(162, 'ReddisDB');
  textmap.set(163, 'ok');
  textmap.set(164, 'LaTeX');
  textmap.set(165, 'Textsetzung');
  textmap.set(166, 'ja, super');
  textmap.set(167, 'ja, super');
  textmap.set(168, 'Micronaut, Quarkus');
  textmap.set(169, 'Ja');
  textmap.set(170, 'schonmal mit gespielt');
  textmap.set(171, 'schonmal mit gespielt');
  textmap.set(172, 'Maven, ganz ok');
  textmap.set(173, 'Gradle, ganz ok');
  textmap.set(174, 'Android Dev');
  textmap.set(175, 'App Dev Entwicklung');
  textmap.set(176, 'App Dev Entwicklung');
  textmap.set(177, 'Ganz ok');
  textmap.set(178, 'Lua, okay');
  textmap.set(179, 'Rust, naja');
  textmap.set(180, 'IPFS');
  textmap.set(181, 'Web3');
  textmap.set(182, 'Ganz ok');
  textmap.set(183, 'Web3');
  textmap.set(184, 'Generell');
  textmap.set(185, 'Naja');
  textmap.set(186, 'Solidity');
  textmap.set(187, 'Für Blockchains');
  textmap.set(188, 'Für Blockchains');
  textmap.set(189, 'Ganz okay');
  textmap.set(190, 'Bitte kontaktiere mich unter');
  textmap.set(191, '0176/34577186');
  textmap.set(192, '0176/34577186');
  textmap.set(193, '0176/34577186');
  textmap.set(194, '0176/34577186');
  textmap.set(195, 'Oder über job@kittel.dev');
  textmap.set(196, 'Oder über job@kittel.dev');
  textmap.set(197, 'Oder über job@kittel.dev');
  textmap.set(198, 'Oder über job@kittel.dev');
  textmap.set(199, 'Vielen Dank für dein Vertrauen.');
  textmap.set(200, 'Vielen Dank für dein Vertrauen.');
  textmap.set(201, 'Vielen Dank für dein Vertrauen.');

  if (mobile) {
    var MAX_COLOR_SIZE = 10;
    var MIN_COLOR_SIZE = 8;
  } else {
    var MAX_COLOR_SIZE = 34;
    var MIN_COLOR_SIZE = 26;
  }
  var ts_interval = 0.2;
  if (mobile) {
    ts_interval = 0.05;
  }

  textFont('Georgia', 10, 90);

  this.time = millis() / 1000 + 2;
  this.textIndex = -1;
  this.ts = MIN_COLOR_SIZE;
  this.pos.x = windowWidth / 2;
  this.pos.y = windowHeight / 2;
  this.shrinkMode = true;

  this.update = function () {
    textSize(this.ts);
    if (this.time <= millis() / 1000) {
      this.time = millis() / 1000 + 2;
    }
    if (this.shrindMode) {
      this.ts += ts_interval;
    } else {
      this.ts -= ts_interval;
    }
    if (this.ts > MAX_COLOR_SIZE || this.ts < MIN_COLOR_SIZE) {
      this.shrindMode = !this.shrindMode;
    }
  };

  this.getText = function (position) {
    if (textmap.get(position).length > 0) {
      return textmap.get(position);
    }
    return '';
  };

  this.draw = function () {
    if (this.textIndex <= textmap.size) {
      var textSize = 0;
      if (textmap.get(this.textIndex)) {
        textSize = textmap.get(this.textIndex).length;
      }
      var txt = textmap.get(this.textIndex);
      if (txt != this.lasttext) {
        ball = new Ball(random(1, 50), this.pos.x, this.pos.y + 20);
        ball.setText(textmap.get(this.textIndex));
        this.display.setText(textmap.get(this.textIndex));
        rbuf.insert(ball);
        this.lasttext = txt;
      }

      var offset = 0;
      if (textSize < 20) {
        offset += 50;
      } else if (textSize < 16) {
        offset += 200;
      } else if (textSize > 30) {
        offset += 00;
      }

      if (textSize > 0) {
        if (mobile) {
          fill(255, 230, 50, 200);
          //  ellipse(this.pos.x - 100, this.pos.y, 200, 30);
          fill(100, 100, 10, 255);
          /*    text(
            textmap.get(this.textIndex),
            this.pos.x - 200 + offset + 1 * textSize,
            this.pos.y,
          );
          */
        } else {
          fill(255, 230, 50, 200);
          /*    ellipse(
            this.pos.x + 220 - offset,
            this.pos.y + 1,
            500 + textSize * 6 - offset,
            130 + this.ts * 2,
          );
          */
          fill(100, 100, 10, 255);
          //  text(textmap.get(this.textIndex), this.pos.x + offset, this.pos.y);
        }
      }
    }
  };
  this.setTextIndex = function (value) {
    this.textIndex = value;
  };
  this.setPos = function (posVector) {
    if (mobile) {
      this.pos.x = posVector.x + 300;
      this.pos.y = posVector.y + 30;
    } else {
      this.pos.x = posVector.x + 350;
      this.pos.y = posVector.y + 30;
    }
  };
}
