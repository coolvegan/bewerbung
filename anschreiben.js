function Anschreiben() {
  var host = window.location.host;
  var subdomain = host.split('.')[0];
  var gehalt = random(49, 69);
  var offset = 30;
  this.anschreiben = 'Sehr geehrte Damen und Herren,';
  if (subdomain.includes('embex')) {
    this.anschreiben = 'Sehr geehrte Frau Schonert, ';
  }

  var s = [
    'Sehr geehrte Damen und Herren,',
    'Ich bewerbe mich um eine Stelle als',
    ' Softwareentwickler bei ' +
      subdomain +
      ', weil ich glaube, dass meine Fähigkeiten und Erfahrungen mich zu einem idealen Kandidaten für diese Stelle machen. ',
    'Mein Hintergrund in Informatik hat es mir ermöglicht, anspruchsvolle Projekte wie den Bundeseinheitlichen Medikationsplan',
    'in das führende System für Nephrologen zu implementieren.',
    'Meine herausragenden DevOps und Linux Skills halfen einen lokalen ISP',
    'Menschen in ländlichen Regionen, kostengünstig dank Open Source Technologien',
    'mit Internet zu versorgen. Dank meiner großartigen SQL Skills',
    "sorgte ich mit meinen Reports für Qualitätsoptimierungen in diversen MVZ's",
    'und Klinikgruppen. Meine Erfahrung mit verschiedenen Programmiersprachen',
    'wie Delphi, Java, C++ und Ruby ermöglicht es mir, Probleme schnell',
    'zu analysieren und effiziente Lösungen zu entwickeln. ',
    'Ich bin auch sehr erfahren in der Fehlersuche bei komplexen',
    'Softwaresystemen und stelle sicher, dass die höchste Qualität',
    'der Arbeit in einer fristgerechten Weise produziert wird. ',
    'Ich glaube, dass meine Qualifikationen mich zu einem ',
    'idealen Kandidaten für diese Stelle machen und würde',
    'mich freuen, in einem Vorstellungsgespräch zu erörtern',
    'wie meine Fähigkeiten ' + subdomain + ' zugute kommen können.',
  ];

  /*var s = [
    '',
    '',
    subdomain + ' sucht gute Softwareentwickler. Es wäre mir eine Freude',
    'euch unterstützen zu dürfen. Verfügbar wäre ich sofort.',
    'Gehalt ab ' + Math.floor(gehalt) + '.000 Euro im Jahr wäre ganz nett.',
    'Mich fesseln vor allem spannende Aufgaben. Geld ist da leider',
    'ein notwendiges Übel. Ich liebe Softwareentwicklung. ',
    'Sie liegt mir am Herzen.',
    'Ich bin sehr zuverlässig, arbeite sehr analytisch, voller Freude und ',
    'bin sowohl im Team als auch als Einzelkämpfer stets erfolgreich.',
    '',
    'Meine Skills findest du im Sprachmodus mit der Taste s.',
    'Meine Kontaktdaten im selben Modus mit der Taste c.',
    'Den Sprachmodus aktivierst du durch den Druck auf die',
    'linke Maustaste.',
    '',
    'Sie können mit der Taste 1 das Anschreiben ein und Ausschalten.',
    'Sie können mit der Taste 2 den Lebenslauf ein und Ausschalten.',
    'Sie können mit den Tasten 3 und 4 zwischen zwei Tonspuren wählen',
    '',
    'Mit freundlichen Grüßen',
    'Marco Kittel',
  ];*/

  this.getText = function () {
    return s;
  };

  this.pos = createVector(50, windowHeight / 8);
  this.draw = function () {
    textFont('Georgia', 24, 90);
    rectMode(CORNER);
    fill(255);
    if (mobile) {
      rect(25, 25, windowWidth - 50, windowHeight * 0.9); //
      textFont('Georgia', 16, 90);
    } else {
      rect(25, 25, windowWidth / 3, windowHeight * 0.9); //
    }
    fill(0, 0, 0, 255);
    text(this.anschreiben, this.pos.x, this.pos.y);
    for (i = 1; i < s.length; i++) {
      if (mobile) {
        textSize(10);
      } else {
        textSize(18);
      }
      text(s[i], this.pos.x, this.pos.y + i * offset);
    }
  };
}
