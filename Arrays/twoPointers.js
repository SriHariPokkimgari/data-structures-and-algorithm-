//These all problems are solved using two pointers opposite directions.

//Reverse the array of numbers without using reverse method.
function reverseArrTwoPointer(arr) {
  let right = arr.length - 1;
  for (let left = 0; left < right; left++) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    right--;
  }
  return arr;
}

//Reverse the array of strings.
function reverseStr(s) {
  let right = s.length - 1;
  for (let left = 0; left < right; left++) {
    [s[left], s[right]] = [s[right], s[left]];
    right--;
  }
  return s;
}

//Chech the palindrome or not two pointers approach.
function palindrome(s2) {
  let str = s2.toLowerCase().split(/\W+/).join("");
  let right = str.length - 1;
  for (let left = 0; left < right; left++) {
    if (str[left] !== str[right]) {
      return false;
    }
    right--;
  }
  return true;
}

//Two sum two pointers approach.
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left, right];
    } else if (target < sum) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}

//To find maximum area Brute Force approach.
function maxArea(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const area = Math.min(nums[i], nums[j]) * (j - i);

      max = Math.max(max, area);
    }
  }
  return max;
}

//To find maximum area two pointers approach.
function maxAreaTwo(nums) {
  let max = 0,
    right = nums.length - 1,
    left = 0;
  while (left < nums.length) {
    const area = Math.min(nums[left], nums[right]) * (right - left);
    max = Math.max(max, area);
    if (nums[left] > nums[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
}

//Three sum Brute force approach.
function threeSum(nums) {
  let value = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const tiplets = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);

          let isDuplicate = false;
          for (let arr of value) {
            if (
              arr[0] === tiplets[0] &&
              arr[1] === tiplets[1] &&
              arr[2] === tiplets[2]
            ) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) value.push(tiplets);
        }
      }
    }
  }
  return value;
}

//Three sum using two pointers + sorting.
function threeSumTwo(nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

//ThreeSum input and output.
const input = [-1, 0, 1, 2, -1, -1, 2, 2, -3, -4];
console.log(threeSumTwo(input));
console.log(threeSum(input));

//Max area input and output.
const nums = [1, 9, 8, 6, 2, 5, 4, 8, 3, 7, 10];
console.log(maxArea(nums));
console.log(maxAreaTwo(nums));

//TwoSum input and output
const numbers = [1, 2, 3, 6, 8, 11, 35],
  target = 38;
console.log(twoSum(numbers, target));

//Palindrome chech input and output.
const str1 = "A man, a plan, a canal: Panama";
const str2 = "a:b, c? d' e *f $ e @ cba";
console.log(palindrome(str1));
console.log(palindrome(str2));

//Reverse array of string input and output.
const s = ["h", "e", "l", "l", "o"];
console.log(reverseArr(s));

//Reverse array of numbers input and output.
const arr = [5, 9, 2, 10, 3, 1];
console.log(reverseArrTwoPointer(arr));
