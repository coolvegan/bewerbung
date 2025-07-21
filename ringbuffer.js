function RingBuffer(count) {
  this.elementCount = count;
  this.data = [];
  this.iterator = 0;
  for (var i = 0; i < this.elementCount; i++) {
    this.data.push(null);
  }
  this.insert = function (obj) {
    this.data[this.iterator] = obj;
    this.iterator++;
    if (this.iterator == this.elementCount) {
      this.iterator = 0;
    }
  };
  this.getData = function () {
    return this.data;
  };
}

function Node(data) {
  this.next = null;
  this.prev = null;
  this.element = data;
}

function List() {
  this.head = null;
  this.tail = null;

  this.add = function (data) {
    node = new Node(data);
    if (this.head == null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  };

  this.remove = function (node) {
    if (node == this.head && node != this.tail) {
      this.head = null;
      this.tail = null;
    } else if (node == this.tail) {
      tmp = this.tail;
      this.tail = tmp.prev;
      this.tail.next = null;
      tmp.prev = null;
    } else {
      tmp = node.prev;
      node.next.prev = tmp;
      tmp.next = node.next;
      node.prev = null;
    }
  };
}
