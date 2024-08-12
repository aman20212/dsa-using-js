/*Implement a function called countUniqueValues which accepts a sorted array and counts the uique values in the array.There can be negative numbers in the array, but it will always be sorted 

Time Complexity - O(n)
Space Complexity - O(n)*/
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let count = 1;
    let i = 0;

    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            count++;
            i = j; // Move i to the new unique value
        }
    }

    return count;
}

/*=================Solution2============================== */
function countUniqueValues(arr) {
    if (arr.length == 0) {
        return 0;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j];
        }
        return i + 1;
    }
}