function TimedNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
  this.getData = function () {
    return this.data;
  };
}

function TimedQueue() {
  this.size = 0;
  this.head = null;
  this.tail = null;

  this.enqueue = function (data) {
    var tmp = new TimedNode(data);
    if (this.head == null) {
      this.head = tmp;
      this.tail = this.head;
    }
    //ein Element
    if (this.head) {
      this.head.prev = tmp;
      this.head.prev.next = tmp;
      this.head = tmp;
    }
    this.size++;
  };

  this.dequeue = function () {
    var result = null;
    if (this.tail == null && this.head == null) {
      return result;
    }
    if (this.head == this.tail) {
      result = this.head;
      this.tail = null;
      this.head = null;
    } else {
      result = this.tail;
      this.tail = result.prev;
      this.tail.next = null;
      result.prev = null;
    }

    this.size--;
    return result;
  };

  this.isEmpty = function () {
    return this.size == 0;
  };

  this.getSize = function () {
    return this.size;
  };
}
