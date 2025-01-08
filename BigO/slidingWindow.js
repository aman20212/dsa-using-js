/* Write a function called maxSubArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elemnets in the array. 
maxSubArraySum([1,2,5,2,8,1,5,2], 2) ---> 10
maxSubArraySum([1,2,5,2,8,1,5], 4) -----> 17
maxSubArraySum([], 4) ---------> null
*/

function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
// Time Complexity O(n)

/*
Sliding Window - minSubArrayLen
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

function minSubArrayLen(nums, target) {
    let minLength = Infinity; // To keep track of the minimal length
    let currentSum = 0; // To keep track of the current sum of the subarray
    let start = 0; // Start of the sliding window

    // Loop through the array with the 'end' pointer
    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end]; // Add the current number to the sum

        // While the current sum is greater than or equal to the target, try to minimize the window
        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1); // Update the minimal length
            currentSum -= nums[start]; // Subtract the element at the 'start' of the window
            start++; // Move the 'start' pointer to the right to shrink the window
        }
    }

    // If minLength was updated, return it, otherwise return 0 (no valid subarray found)
    return minLength === Infinity ? 0 : minLength;
}

Example:
Let’s consider the input array [1, 2, 3, 4, 5] with a target sum of 7.

1. With while loop (original approach):
The sliding window technique with the while loop will continuously shrink the window as long as the sum is greater than or equal to the target. Here's how the algorithm would behave:

Initial State: currentSum = 0, start = 0, minLength = Infinity

We iterate over the array with the end pointer.

end = 0: Add 1 to currentSum, currentSum = 1.
end = 1: Add 2 to currentSum, currentSum = 3.
end = 2: Add 3 to currentSum, currentSum = 6.
end = 3: Add 4 to currentSum, currentSum = 10.
At this point, currentSum = 10, which is greater than the target 7. Now, we enter the while loop to shrink the window:

Inside the while loop: currentSum = 10, start = 0
We update minLength = 4 (subarray [1, 2, 3, 4]).
Subtract nums[start] = 1 from currentSum, so currentSum = 9, and increment start to 1.
Inside the while loop again: currentSum = 9, start = 1
We update minLength = 3 (subarray [2, 3, 4]).
Subtract nums[start] = 2 from currentSum, so currentSum = 7, and increment start to 2.
Inside the while loop again: currentSum = 7, start = 2
We update minLength = 2 (subarray [3, 4]).

Subtract nums[start] = 3 from currentSum, so currentSum = 4, and increment start to 3.

Now, currentSum = 4, which is less than the target, so we exit the while loop and continue to the next iteration.
The final result is minLength = 2, which corresponds to the smallest subarray [3, 4] whose sum is greater than or equal to 7.*/




// =========================================>

/* 
Sliding Window - findLongestSubstring
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
    let left = 0; // Left pointer for the sliding window
    let maxLength = 0; // To store the length of the longest substring
    let charSet = new Set(); // Set to track unique characters in the current window

    // If the string is empty, return 0 immediately
    if (str.length === 0) {
        return 0;
    }

    // Loop through the string with the `right` pointer
    for (let right = 0; right < str.length; right++) {
        // If the character at `right` is already in the set (duplicate), move the `left` pointer
        while (charSet.has(str[right])) {
            charSet.delete(str[left]); // Remove the character at `left` from the set
            left++; // Shrink the window from the left
        }

        // Add the current character to the set
        charSet.add(str[right]);

        // Update the maximum length of the window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // Return the length of the longest substring
    return maxLength;
}


Solution 2:

function findLongestSubstring(str) {
    let left = 0; // Left pointer of the sliding window
    let maxLength = 0; // To store the length of the longest substring

    // If the string is empty, return 0 immediately
    if (str.length === 0) {
        return 0;
    }

    // Loop through the string with the `right` pointer
    for (let right = 0; right < str.length; right++) {
        // If the character at `right` is already in the window, move the `left` pointer
        while (str.substring(left, right).includes(str[right])) {
            left++; // Shrink the window from the left
        }

        // Update the maximum length of the window
        maxLength = Math.max(maxLength, right - left + 1);
    }

    // Return the length of the longest substring
    return maxLength;
}
*/