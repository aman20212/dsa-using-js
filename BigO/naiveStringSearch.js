/**
 * Counts the number of times a smaller string occurs in a longer string.
 * @param {string} longStr - The longer string in which to search for occurrences.
 * @param {string} shortStr - The shorter string to count occurrences of.
 * @return {number} The number of times the shorter string occurs in the longer string.
 */
function countOccurrences(longStr, shortStr) {
    if (shortStr.length === 0) return 0; // Avoid empty substring edge case
    let count = 0;
    let pos = 0;

    while ((pos = longStr.indexOf(shortStr, pos)) !== -1) {
        count++;
        pos += shortStr.length; // Move past the last found occurrence
    }

    return count;
}

// Example usage:
const longString = "ababcabcababc";
const shortString = "abc";
const occurrences = countOccurrences(longString, shortString);
console.log(occurrences); // Output: 4


/* 
Explanation
Initial Checks:

If the shortStr is empty, return 0 since an empty string is considered to be found everywhere in any string, but practically this would not be meaningful for counting occurrences.
Initialize Counters:

count is used to keep track of how many times shortStr is found.
pos is the starting position for searching within longStr.
Search Loop:

longStr.indexOf(shortStr, pos) searches for shortStr starting from the current position pos. If found, it returns the index of the first occurrence; otherwise, it returns -1.
If an occurrence is found (pos is not -1), increment count and update pos to be after the end of the current occurrence to ensure overlapping occurrences are not counted multiple times.
The loop continues until no more occurrences are found (indexOf returns -1).
Return the Count:

The function returns the total count of occurrences of shortStr in longStr.
Example Usage
In the example provided:

longString = "ababcabcababc"
shortString = "abc"
The substring "abc" appears 4 times in the longer string.
*/



/* 
function countOccurrences(longStr, shortStr) {
  if (shortStr.length === 0 || longStr.length === 0) return 0;

  let count = 0;
  let longStrLength = longStr.length;
  let shortStrLength = shortStr.length;

  for (let i = 0; i <= longStrLength - shortStrLength; i++) {
    if (longStr.slice(i, i + shortStrLength) === shortStr) {
      count++;
    }
  }

  return count;
}

Let's use this function to count the number of times the substring "abc" occurs in the longer string "ababcabcababc".

Input
longStr = "ababcabcababc"
shortStr = "abc"
Step-by-Step Execution
Initial Setup:

longStrLength = 13 (length of "ababcabcababc")
shortStrLength = 3 (length of "abc")
Loop through longStr:

We loop from i = 0 to i = 10 (longStrLength - shortStrLength = 13 - 3 = 10).
Iteration 1:

i = 0
Extract substring: longStr.slice(0, 3) → "aba"
Compare: "aba" !== "abc"
No match.
Iteration 2:

i = 1
Extract substring: longStr.slice(1, 4) → "bab"
Compare: "bab" !== "abc"
No match.
Iteration 3:

i = 2
Extract substring: longStr.slice(2, 5) → "abc"
Compare: "abc" === "abc"
Match found, increment count to 1.
Iteration 4:

i = 3
Extract substring: longStr.slice(3, 6) → "bca"
Compare: "bca" !== "abc"
No match.
Iteration 5:

i = 4
Extract substring: longStr.slice(4, 7) → "cab"
Compare: "cab" !== "abc"
No match.
Iteration 6:

i = 5
Extract substring: longStr.slice(5, 8) → "abc"
Compare: "abc" === "abc"
Match found, increment count to 2.
Iteration 7:

i = 6
Extract substring: longStr.slice(6, 9) → "bca"
Compare: "bca" !== "abc"
No match.
Iteration 8:

i = 7
Extract substring: longStr.slice(7, 10) → "cab"
Compare: "cab" !== "abc"
No match.
Iteration 9:

i = 8
Extract substring: longStr.slice(8, 11) → "abc"
Compare: "abc" === "abc"
Match found, increment count to 3.
Iteration 10:

i = 9
Extract substring: longStr.slice(9, 12) → "bca"
Compare: "bca" !== "abc"
No match.
Iteration 11:

i = 10
Extract substring: longStr.slice(10, 13) → "cab"
Compare: "cab" !== "abc"
No match.
Final Count:

Total matches found: 3.
Output
The function returns 3, indicating that the substring "abc" occurs 3 times in the string "ababcabcababc".

Summary
The function works by iterating through each possible starting position in longStr where shortStr could fit.
For each position, it extracts a substring of the same length as shortStr and compares it.
It increments the count each time a match is found and continues until all possible positions are checked.
This method manually searches for occurrences of the substring without using built-in functions like indexOf.

*/

/*

 Counts the number of times a smaller string occurs in a longer string using a naive approach.
 @param {string} longStr - The longer string in which to search for occurrences.
 @param {string} shortStr - The shorter string to count occurrences of.
 @return {number} The number of times the shorter string occurs in the longer string.
function countOccurrences(longStr, shortStr) {
    let count = 0;
    let longStrLength = longStr.length;
    let shortStrLength = shortStr.length;

    // Loop over each possible starting position
    for (let i = 0; i <= longStrLength - shortStrLength; i++) {
        let match = true;

        // Loop over each character of the shortStr
        for (let j = 0; j < shortStrLength; j++) {
            if (longStr[i + j] !== shortStr[j]) {
                match = false;
                break; // Exit the inner loop if characters do not match
            }
        }

        // If match is still true, increment the count
        if (match) {
            count++;
        }
    }

    return count;
}

// Example usage:
const longString = "ababcabcababc";
const shortString = "abc";
const occurrences = countOccurrences(longString, shortString);
console.log(occurrences); // Output: 4


Explanation
Initialization:

count is used to keep track of how many times shortStr is found in longStr.
longStrLength and shortStrLength store the lengths of longStr and shortStr, respectively.
Outer Loop:

This loop iterates through each possible starting position i in longStr where shortStr can fit. It ranges from 0 to longStrLength - shortStrLength.
Inner Loop:

For each starting position i, the inner loop checks each character in the substring of longStr that starts at i and has the same length as shortStr.
If any character in this substring does not match the corresponding character in shortStr, set match to false and break out of the inner loop.
Match Check:

If after the inner loop match is still true, it means the substring from longStr starting at position i matches shortStr. Therefore, increment count.
Return Count:

After all possible starting positions have been checked, return the total count of occurrences.
Example Walkthrough
Given:

longStr = "ababcabcababc"
shortStr = "abc"
Steps:

i = 0: Check substring "aba" (positions 0 to 2). No match.
i = 1: Check substring "bab" (positions 1 to 3). No match.
i = 2: Check substring "abc" (positions 2 to 4). Match found. count = 1.
i = 3: Check substring "bca" (positions 3 to 5). No match.
i = 4: Check substring "cab" (positions 4 to 6). No match.
i = 5: Check substring "abc" (positions 5 to 7). Match found. count = 2.
i = 6: Check substring "bca" (positions 6 to 8). No match.
i = 7: Check substring "cab" (positions 7 to 9). No match.
i = 8: Check substring "abc" (positions 8 to 10). Match found. count = 3.
i = 9: Check substring "bca" (positions 9 to 11). No match.
i = 10: Check substring "cab" (positions 10 to 12). No match.
Final count: 3 (total matches of "abc" in "ababcabcababc").

This code follows the pseudocode you provided and uses basic string operations to count occurrences of a substring.
  
*/