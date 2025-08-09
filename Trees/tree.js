class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (temp.value === newNode.value) {
        return undefined;
      }

      if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }

  includes(value) {
    if (!this.root) {
      return false;
    }

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  BreadthFirstSearch() {
    if (!this.root) return [];
    let current = this.root;
    let queue = [];
    let data = [];

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      data.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return data;
  }

  DepthFirstSearchPreOrder(node = this.root, data = []) {
    if (!node) return data;
    data.push(node.value);
    if (node.left) this.DepthFirstSearchPreOrder(node.left, data);
    if (node.right) this.DepthFirstSearchPreOrder(node.right, data);
    return data;
  }

  DepthFirstSearchInOrder(node = this.root, data = []) {
    if (!this.root) return data;
    if (node.left) this.DepthFirstSearchInOrder(node.left, data);
    data.push(node.value);
    if (node.right) this.DepthFirstSearchInOrder(node.right, data);
    return data;
  }

  DepthFirstSearchPostOrder(node = this.root, data = []) {
    if (!node) return data;
    if (node.left) this.DepthFirstSearchPostOrder(node.left, data);
    if (node.right) this.DepthFirstSearchPostOrder(node.right, data);
    data.push(node.value);
    return data;
  }
}

const myTree = new Tree();
console.log(myTree);
myTree.insert(6);
myTree.insert(10);
myTree.insert(3);
myTree.insert(5);
myTree.insert(2);
myTree.insert(1);
myTree.insert(8);
myTree.insert(9);
myTree.insert(14);
myTree.insert(11);
myTree.insert(15);

console.log(myTree.BreadthFirstSearch());
console.log(myTree.DepthFirstSearchPreOrder());
console.log(myTree.DepthFirstSearchInOrder());
console.log(myTree.DepthFirstSearchPostOrder());
