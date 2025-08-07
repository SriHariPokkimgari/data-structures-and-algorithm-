class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    let temp = this.first;
    if (!this.first) {
      return undefined;
    } else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}

const myQueue = new Queue(0);

//Enqueue method adds the item in Queue.
myQueue.enqueue(1);

//Dequeue method remove the item in Queue.
myQueue.dequeue();
