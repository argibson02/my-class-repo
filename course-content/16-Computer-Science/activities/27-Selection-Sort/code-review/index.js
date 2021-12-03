// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;
// creates a random set of numbers for us to sort
var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

// ================================================
// SOLUTION - Selection Sort
// ================================================

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
   
  // [4,2,6,1] 
  // What is the below code doing? 
  // This is allowing us to swap teh first and second index by putting one in a temporary variable.
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp ;
  // items[secondIndex] = items[firstIndex]
}
// Can you use the example array below to walk through the what 'swap' is doing to the input array? 
// first=0, second=1. We will swap values 4 and 2
// swap([4,2,6,1], 0, 1);


// [4,2,6,1] 
// [4,2,6,1] 
// [4,2,6,1] 


function selectionSort(items) {

  var min;

  for (var i = 0; i < items.length; i++) {

    // set index of minimum to this position
    // What is `i` being used to track?
    // We are setting min to our initial index i
    min = i;

    // check the rest of the array to see if anything is smaller
    for (var j = i + 1; j < items.length; j++) {
      // What occurs if a smaller value is discovered?
      // In j is less than min, we will set the value of j to be the new min
      if (items[j] < items[min]) {
        min = j;
      }
    }

    // if the current position isn't the minimum, swap it and the minimum
    // if we have set min to j, we will swap the values of the two indexes 
    if (i !== min) {
      swap(items, i, min);
      // var temp = items[i];
      // items[i] = items[min];
      // items[min] = temp ;
    }
  }

  return items;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(selectionSort(array).join(" "));
