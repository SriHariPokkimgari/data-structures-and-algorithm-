class HashTable {
  constructor(size = 5) {
    this.hashMap = new Array(size);
  }

  hash(key) {
    let hashValue = 0;
    let Prime_Number = 31;
    for (let i = 0; i < this.hashMap.length; i++) {
      const charCode = key.charCodeAt(0) - 96;
      hashValue = (hashValue * Prime_Number + charCode) % this.hashMap.length;
    }
    return hashValue;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.hashMap[index]) this.hashMap[index] = [];
    this.hashMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this.hash(key);

    if (this.hashMap[index]) {
      for (let i = 0; i < this.hashMap[index].length; i++) {
        if (this.hashMap[index][i][0] === key) {
          return this.hashMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    let keys = [];
    for (let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i]) {
        for (let j = 0; j < this.hashMap[i].length; j++) {
          keys.push(this.hashMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  getAllValues() {
    let values = [];
    for (let i = 0; i < this.hashMap.length; i++) {
      if (this.hashMap[i]) {
        for (let j = 0; j < this.hashMap[i].length; j++) {
          values.push(this.hashMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

const myHash = new HashTable();
console.log(myHash);

myHash.set("hari", "630-1089-468");
myHash.set("sri", "778-0584-599");
console.log(myHash.set("loki", "818-4816-416"));

console.log("get", myHash.get("hari"));

console.log("getAllKeys", myHash.getAllKeys("hari"));

console.log("getAllValues", myHash.getAllValues("hari"));

const wordCounter = (sentence) => {
  const sentenceMap = {};
  const words = sentence.toLowerCase().split(/\s+/);
  for (const word of words) {
    if (word in sentenceMap) {
      sentenceMap[word]++;
    } else {
      sentenceMap[word] = 1;
    }
  }

  return sentenceMap;
};

const text = "Hello hello hell hell hello";
console.log(wordCounter(text));

//Two sum using hash table
const TwoSum = (nums, target) => {
  const twoSumMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in twoSumMap) {
      return [twoSumMap[after], i];
    }
    twoSumMap[nums[i]] = i;
    console.log(twoSumMap);
  }
  return [];
};

const nums = [10, 2, 14, 8];
console.log(TwoSum(nums, 18));
