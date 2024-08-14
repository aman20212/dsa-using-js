/* Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
*/

function sameFrequency(num1, num2) {
  let number1 = num1.toString().split("");
  let number2 = num2.toString().split("");
  if (number1.length !== number2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let num of number1) {
    obj1[num] = ++obj1[num] || 1;
  }
  for (let num of number2) {
    obj2[num] = ++obj2[num] || 1;
  }
  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (obj2[key] !== obj1[key]) return false;
  }
  return true;
}

console.log(sameFrequency(34, 12));

/* ----------------------------------------------------------------------------------- */

/* Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)*/

function areThereDuplicates() {
  let i = 0;
  let j = arguments.length - 1;
  while (i < j) {
    if (arguments[i] === arguments[j]) {
      return true;
    }
    i = i + 1;
  }
  return false;
}


/*SOLUTIONS PART 1
sameFrequency Solution
function sameFrequency(num1, num2){
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if(strNum1.length !== strNum2.length) return false;
  
  let countNum1 = {};
  let countNum2 = {};
  
  for(let i = 0; i < strNum1.length; i++){
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
  
  for(let j = 0; j < strNum1.length; j++){
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
  
  for(let key in countNum1){
    if(countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}

areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}

areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
 
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

areThereDuplicates One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
   */

/* 
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false


----> 
function averagePair(arr, avg) {
    let i = 0;
  let j = arr.length - 1;
  while(i < j) {
        if (arr[i] + arr[j]/2 === avg) {
        return true;
    } else if (arr[i] + arr[j]/2 > avg) {
        j = j-1;
    } else {
        i = i+1;
    }
  }
  return false;
}

console.log(averagePair([1,2,3],2.5));

---->

*/

/* 
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)

function isSubsequence(str1, str2) {
    let i = 0;
  let j = 0;
  while(j < str2.length) {
        if (str1[i] === str2[j]) {
        i++;
    }
    if (str1.length === i) {
        return true;
    }
    j++;
  }
  return false;
}

----> Solution using Recursion: but not O(1) space:
function isSubsequence(str1, str2) {
console.log(str1, str2);
 if (str1.length === 0) return true;
 if (str2.length === 0) return false;
 if (str1[0] === str2[0]) {
      return (isSubsequence(str1.slice(1), str2.slice(1)));
 }
 return isSubsequence(str1, str2.slice(1));
}
*/


/*Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
        return null;
  }
  for (let i = 0; i < num; i++) {
        maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i< arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);

  }
  return maxSum
}



console.log(maxSubarraySum([100,200,300,400], 2));

*/

/* Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)

function minSubArrayLen(arr, num) {
  let minLen = Infinity;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum >= num) {
      minLen = Math.min(minLen, end - start + 1);
      sum -= arr[start];
      start++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// Second Solution to this problem
function minSubArrayLen(nums, target) {
  let prevTotal = 0;
  let lowestRunCount = 0;
  for (let i = 0; i < nums.length;  i++){
    prevTotal += nums[i];
    lowestRunCount++;
    if (prevTotal >= target) {
      break;
    }  
}
  // prevTotal = 9
  // lowestRunCount = 3
  if (prevTotal < target) {
      return 0;
    }
  for (let i = 1; i < nums.length; i++) {
    let currentTotal = prevTotal - nums[i-1];
    if (currentTotal >= target) {
      lowestRunCount--;
      prevTotal = currentTotal;
    } 
    else {
      prevTotal = currentTotal + nums[i + lowestRunCount -1];
    }
  }
  return lowestRunCount;
}
*/

/* 
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)

function findLongestSubstring(str) {
    let maxLength = 0; // To store the length of the longest substring
    let start = 0; // Start index of the sliding window
    let indexMap = {}; // Object to store the last seen index of characters

    for (let end = 0; end < str.length; end++) {
        if (indexMap[str[end]] !== undefined) {
            // Move the start index right if the character is already in the window
            start = Math.max(start, indexMap[str[end]] + 1);
        }

        indexMap[str[end]] = end; // Update the last seen index of the character
        maxLength = Math.max(maxLength, end - start + 1); // Update the maximum length
    }

    return maxLength;
}


function findLongestSubstring(str) {
    let maxLength = 0; // To store the length of the longest substring
    let start = 0; // Start index of the sliding window
    let charSet = new Set(); // Set to keep track of distinct characters

    for (let end = 0; end < str.length; end++) {
        while (charSet.has(str[end])) {
            charSet.delete(str[start]); // Remove the character at the start of the window
            start++; // Move the start index to the right
        }
        
        charSet.add(str[end]); // Add the new character to the set
        maxLength = Math.max(maxLength, end - start + 1); // Update the maximum length
    }

    return maxLength;
}

*/