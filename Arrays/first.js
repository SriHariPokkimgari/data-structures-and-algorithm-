class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  shift() {
    const firstItem = this.data[0];

    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstItem;
  }

  deleteByIndex(index) {
    const deleteIndexItem = this.data[index];

    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return deleteIndexItem;
  }

  unshift(item) {
    if (this.length === 0) {
      this.data[0] = item;
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    delete this.data[this.length - 1];
    this.data[0] = item;
    this.length++;
  }
}

const newArray = new Array();
newArray.push("apple");
newArray.get(0);
newArray.pop();
newArray.push("mango");
newArray.push("graps");
newArray.shift();
newArray.unshift("pappaya");
newArray.deleteByIndex(0);

console.log("1.", newArray);
