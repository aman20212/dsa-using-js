/* 
power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exp) {
    if (exp === 0) {
        return 1;
  }
  return base * power(base, exp - 1)
}
*/


/* 
factorial
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num) {
    if (num === 0) {
        return 1;
  }
  return num * factorial(num - 1);
}
*/

/* 
productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
  }
  return arr[0] * productOfArray(arr.slice(1))
}
*/

/* 
recursiveRange
Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(num) {
    if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

*/

/* 
fib
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function recursiveRange(num) {
    if (num === 0) return 0;
    return num + recursiveRange(num - 1);
}
*/

/* 
reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
    if(str.length === 0) {
        return '';
  }
  console.log(str.slice(1), str[0]);
  return reverse(str.slice(1))+str[0];
}


function reverse(str) {
  // Define the recursive function
  function aman(str) {
    // Base case: if the string is empty, return an empty string
    if (str.length === 0) return '';
    // Recursive case: reverse the substring and append the first character
    return aman(str.slice(1)) + str[0];
  }
  
  // Call the recursive function and return the result
  return aman(str);
}
*/


/* 
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
    // Base case: if the string is empty or has one character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    
    // Recursive case: compare first and last characters
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Remove the first and last characters and check the remaining substring
    return isPalindrome(str.slice(1, -1));
  
}


function isPalindrome(str) {
  let reversed = '';

  function aman(s) {
    // Base case: if the string is empty, return
    if (s.length === 0) return;

    // Append the last character of `s` to `reversed`
    reversed = reversed.concat(s[s.length - 1]);

    // Recursive case: reverse the substring without the last character
    aman(s.slice(0, -1));
  }

  // Call the recursive function to build the reversed string
  aman(str);

  // Compare the original string to the reversed string
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}
*/