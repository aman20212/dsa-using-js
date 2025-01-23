/* 
Pivot Implementation:

// First Version
function pivot(arr, start=0, end=arr.length+1){
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for(var i = start + 1; i < arr.length; i++){
    if(pivot > arr[i]){
      swapIdx++;
      swap(arr,swapIdx,i);
    }
  }
  swap(arr,start,swapIdx);
  return swapIdx;
}

// Version with ES2015 Syntax
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

pivot([4,8,2,1,5,7,6,3])




*/


function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right) //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23])




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1


// Implementation 3

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;  // Base case: an array with 0 or 1 elements is already sorted
  }

  const pivot = arr[arr.length - 1];  // We use the last element as the pivot
  const left = [];
  const right = [];
  const middle = [];

  // Partition the array into three parts:
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);  // Values less than the pivot
    } else if (arr[i] > pivot) {
      right.push(arr[i]); // Values greater than the pivot
    } else {
      middle.push(arr[i]); // Equal values (optional)
    }
  }

  return [...quickSort(left), ...middle, pivot, ...quickSort(right)]; // Recursively sort the left and right parts
}

// Example usage:
const arr = [4, 6, 9, 1, 2, 5, 3];
console.log("Sorted Array: ", quickSort(arr));


Why middle and pivot come before right:
The pivot is the element that is used to divide the array into two parts: the elements less than the pivot(left) and the elements greater than the pivot(right).

  middle(which contains values equal to the pivot) is placed right after the sorted left part and before the pivot.This ensures that all occurrences of the pivot are grouped together.

The pivot comes after the middle elements because the pivot element itself has already been selected as the dividing point between the two partitions(left and right).So, after the sorted left portion and any equal elements, we place the pivot in its correct sorted position.

  quickSort(right) is the last part because the right partition contains values greater than the pivot.These values will naturally come after the pivot in the final sorted array.

Example for Clarity:
Let’s say we are sorting this array: [3, 6, 8, 10, 1, 2, 1].

Initial Pivot: Let’s take 1 as the pivot(last element in this case).
Left Partition: All elements less than 1 →[](empty).
Middle Partition: All elements equal to 1 →[1, 1].
Right Partition: All elements greater than 1 →[3, 6, 8, 10, 2].
Recursively applying QuickSort:

quickSort(left) on[] returns[](base case).
  quickSort(right) on[3, 6, 8, 10, 2] continues the process.
After sorting the left and right partitions, we combine them as:

[] + [1, 1] + [pivot] + quickSort(right)
This maintains the correct relative order and places the pivot between the sorted left and right partitions.




