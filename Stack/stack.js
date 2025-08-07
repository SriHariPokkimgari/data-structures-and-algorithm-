class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    const temp = this.first;
    if (!this.first) {
      return undefined;
    } else {
      this.first = temp.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  min() {
    if (!this.first) {
      return undefined;
    }
    let current = this.first;
    let minValue = current.value;

    while (current.next) {
      current = current.next;
      if (current.value < minValue) {
        minValue = current.value;
      }
    }
    return minValue;
  }

  max() {
    if (!this.first) return undefined;

    let current = this.first;
    let maxValue = current.value;

    while (current.next) {
      current = current.next;
      if (current.value > maxValue) {
        maxValue = current.value;
      }
    }
    return maxValue;
  }
}

const myStack = new Stack(1);

//Push method adds the element at the top in stack.
myStack.push();

//Pop method delete the element at the top in stack.
myStack.pop();

//Min method returns the mininum value.
myStack.min();

//Max method returns the maximum value.
myStack.max();

//Reverse the string using stack.
const demo = (str) => {
  let stack = [];

  for (let char of str) {
    stack.push(char);
  }

  let reversedStr = "";

  while (stack.length > 0) {
    reversedStr += stack.pop();
  }
  return reversedStr;
};

console.log(demo("hello world"));
