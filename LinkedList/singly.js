class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = this.head;
    }

    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const newNode = this.head;
    this.head = newNode.next;
    newNode.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return newNode;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    return temp;
  }

  get(index) {
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        return temp;
      }
      temp = temp.next;
    }
    return null;
  }

  set(index, value) {
    const temp = this.get(index);
    if (temp) {
      temp.head = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    let newNode = new Node(value);

    if (index < 0 || index > this.length) return false;

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === this.length) {
      this.push(value);
      return true;
    }

    const prevNode = this.get(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  reverse() {
    if (!this.head) return undefined;

    let temp = this.head;
    let prev = null;
    let next = temp;
    this.head = this.tail;
    this.tail = temp;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

const myLinkedList = new LinkedList(1);

//Push method adds the newNode at last in LinkedList.
myLinkedList.push(2);

//Pop method delete the node at last in LinkedList.
myLinkedList.pop();

//Unshift method adds the newNode at first in LinkedList.
myLinkedList.unshift(3);

//Shift method delete the node at first in LinkedList.
myLinkedList.shift();

//Getfirst method return the first node in LinkedList.
myLinkedList.getFirst();

//Getlast method return the last node in LinkedList.
myLinkedList.getLast();

//Get method returns the node based on index in LinkedList.
myLinkedList.get(1);

//Set method update the value based on index in LinkedList.
myLinkedList.set(1, 4);

//Insert method adds the newNode based on index in LinkedList.
myLinkedList.insert(2, 5);

//Size method returns the size in LinkedList.
myLinkedList.size();

//Clear method deletes the all nodes in LinkedList.
myLinkedList.clear();

//Reverse method returns the linked lidt in reverse order.
myLinkedList.reverse();
