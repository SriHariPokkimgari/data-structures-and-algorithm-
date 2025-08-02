// Reverse the String.
const User = (str) => str.split("").reverse().join("");

console.log(User("Ronaldo"));

function Palindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  if (reverseStr.toUpperCase() === str.toUpperCase()) {
    console.log(`${str} and ${reverseStr} Yes it's a palindrome`);
  } else {
    console.log(`${str} and ${reverseStr} No it's not a palindrome`);
  }
}

Palindrome("chiihc");
Palindrome("web developer");

function Integer(nums) {
  const char = nums.toString().split("").reverse().join("");
  const reverseNumber = parseInt(char);
  return reverseNumber;
}

console.log(Integer(1234));

const capitilize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

capitilize("hii i'm hari");

//FIZZBUZZ
const FizzBuzz = (nums) => {
  for (let i = 1; i <= nums; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
FizzBuzz(15);

//Max Profit [7, 1, 5, 3, 6, 2 ];
const maxProfit = (prices) => {
  let minPrice = prices[0];

  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
  }
  return maxProfit;
};

const prices = [7, 1, 5, 3, 6, 2];
const profit = maxProfit(prices);
console.log("Maximum profit: ", profit);

//Array Chunks
const Arraychunks = (arr, size) => {
  let chunked = [];
  let index = 0;

  while (index < arr.length) {
    const chunk = arr.slice(index, size + index);
    chunked.push(chunk);
    index += size;
  }
  return chunked;
};

const result = Arraychunks([1, 2, 3, 4, 5, 6, 8, 9], 5);
console.log(result);

//Two sums
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

const nums1 = twoSum([2, 3, 4, 6, 7], 5);

console.log(nums1);
