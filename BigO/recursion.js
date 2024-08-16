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


/* 
someRecursive
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function someRecursive(arr, fn) {
    if (arr.length === 0) {
        return false;
  }
  if (fn(arr[0])) {
        return true;
  }
  return someRecursive(arr.slice(1), fn);
}
*/

/* 
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  let result = [];
  function flattenHelper(arr) {
    for (let el of arr) {
      if (Array.isArray(el)) {
        flattenHelper(el);  // Recursive call for nested arrays
      } else {
        result.push(el);   // Correctly add elements to the result array
      }
    }
  }
  flattenHelper(arr);
  return result;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3



function flatten(arr) {
  let result = [];
  function flattenHelper(arr) {
    for (let el of arr) {
      if (Array.isArray(el)) {
        flattenHelper(el);  // Recursive call for nested arrays
      } else {
        result.push(el);   // Correctly add elements to the result array
      }
    }
  }
  flattenHelper(arr);
  return result;
}
*/


/* 
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return [];
  }

  // Capitalize the first letter and combine it with the rest of the string
  const capitalizedFirst = arr[0][0].toUpperCase() + arr[0].slice(1);
  
  // Recursively call capitalizeFirst for the rest of the array and concatenate
  return [capitalizedFirst].concat(capitalizeFirst(arr.slice(1)));
}


function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  let capArray = [];
  function capitalize(arr) {
        if (arr.length === 0) return;
    capArray.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1));
    capitalize(arr.slice(1));
  }
  capitalize(arr);
  return capArray;
}
*/


/* 
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
    let sum = 0;
  Object.entries(obj).forEach(([key, value]) => {
        if (value && typeof(value) === 'object') {
        sum += nestedEvenSum(value);
    } else if (typeof(value) === 'number' && value % 2 === 0) {
    sum += value;
    }
  })
  return sum;
}


function nestedEvenSum (obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;
  function calculateSum(obj) {
        Object.entries(obj).forEach(([key, value]) => {
        if (value && typeof value === 'object') {
            calculateSum(value);
      } else if (typeof value === 'number' && value % 2 === 0) {
            sum+= value;
      }
    });
  }
  calculateSum(obj);
  return sum;
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
*/

/* 
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
    let newArray = [];
    if (arr.length === 0) {
        return [];
    }
    newArray.push(arr[0].toUpperCase());
    return newArray.concat(capitalizeWords(arr.slice(1)));
}


function capitalizeWords(arr) {
  // Base case: If the array is empty, return an empty array
  if (arr.length === 0) return [];
  
  // Recursively capitalize the words and build the new array
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

*/


/* 
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.

function stringifyNumbers(obj) {
  let newObj = {};  // Create a new object to store the transformed values
  
  Object.entries(obj).forEach(([key, value]) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      // Recursively call stringifyNumbers on nested objects
      newObj[key] = stringifyNumbers(value);
    } else if (typeof value === 'number') {
      // Convert number values to strings
      newObj[key] = value.toString();
    } else {
      // For other types, just copy the value
      newObj[key] = value;
    }
  });

  return newObj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


stringifyNumbers(obj)


{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}

*/

/* 
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
    let newArray = [];
  Object.entries(obj).forEach(([key, value]) => {
        if (value && typeof value === 'object') {
    console.log(collectStrings(value));
        newArray = newArray.concat(collectStrings(value));
    } else if (value && typeof value === 'string') {
        newArray.push(value.toString());
    }
  });
  return newArray;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
*/