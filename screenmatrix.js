function ScreenMatrix(rowcount = 2, colcount = 40) {
  const NEWLINE_ASCII_CODE = 10;
  this.pos = createVector(0, 0);
  this.rowcount = rowcount;
  this.colcount = colcount;
  this.newline = false;
  this.matrix = Array(rowcount, colcount);

  this.rows = function () {
    return this.rowcount;
  };
  this.cols = function () {
    return this.colcount;
  };

  this.clearMatrix = function () {
    for (var i = 0; i < rowcount; i++) {
      this.matrix[i] = new Array();
      for (var j = 0; j < colcount; j++) {
        this.matrix[i][j] = null;
      }
    }
  };

  this.elementAt = function (row, col) {
    return this.matrix[row][col];
  };

  this.initMatrix = function () {
    for (var i = 0; i < rowcount; i++) {
      this.matrix[i] = new Array();
      for (var j = 0; j < colcount; j++) {
        this.matrix[i][j] = null;
      }
    }
  };

  this.setCursorPosition = function (x, y) {
    if (x < rowcount && y < colcount) {
      this.pos.x = x;
      this.pos.y = y;
    }
  };

  this.resetCursor = function () {
    this.pos.x = 0;
    this.pos.y = 0;
  };

  this.isNewlinePosition = function () {
    if (
      this.matrix[(this.pos.x, this.pos.y)] ==
      String.fromCharCode(NEWLINE_ASCII_CODE)
    ) {
      return true;
    }
    return false;
  };
  this.jumpToNextLineBeginning = function () {
    if (this.pos.x < this.rowcount && this.pos.y < this.colcount) {
      this.pos.x++;
      this.pos.y = 0;
    } else {
      //Wenn wir in der letzten Zeile sind, gehen wir erstmal in einen undefinierten Zustand
      //Schauen beim Testen, was wir wirklich benötigen
      if (this.pos.y == this.colcount) {
        this.pos.y == -1;
      }
    }
  };

  this.nextCol = function () {
    this.pos.y++;
    if (this.pos.y > this.colcount - 1) {
      this.nextRow();
      this.pos.y = 0;
    }
  };

  this.nextRow = function () {
    this.pos.x++;
    if (this.pos.x > this.rowcount - 1) {
      this.pos.x = 0;
    }
  };

  this.append = function (data) {
    if (this.pos.y > this.colcount) {
      this.pos.y = 0;
      this.pos.x++;
    }

    if (this.pos.x < this.rowcount && this.pos.y < this.colcount) {
      this.matrix[this.pos.x][this.pos.y] = data;
      this.nextCol();
    }

    if (this.pos.x == rowcount - 1 && this.pos.y == colcount - 1) {
      this.clearMatrix();
    }
  };
}
