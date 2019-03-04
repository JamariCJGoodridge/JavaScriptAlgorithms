function largestOfFour(arr) {
  var newArr = []; // ARRAY FOR ANS
  for (let i = 0; i < arr.length; i++) { // LOOP THROUGH ARRAYS
    var biggestNum = 0; // STORE BIGGEST NUMBER
    for (let u = 0; u < arr[i].length; u++) { //LOOP THROUGH NUMBERS IN ARRAY
      if (arr[i][u] > biggestNum) { // IF BIGGER THAN BIGGEST
        biggestNum = arr[i][u]; // BECOME BIGGEST
      } 
      else if (arr[i][u] < 0 && biggestNum == 0) { // WHEN DEALING WITH NEGATIVE NUMBERS AND BIGGEST NUM HASN'T CHANGED (ONLY SHOULD DO THIS ONCE OR KEEPS ON DOING IF VALUES EQUAL ZERO)
        biggestNum = arr[i][u];
      }
    }
    newArr.push(biggestNum); // ADDS THE LARGEST NUMBER TO ARRAY
    biggestNum = 0; // RESET FOR NEXT LOOP
  }
  return newArr;
}

// LOOPS THROUGH ARRAYS WITH SUBARRAYS TO FIND THE LARGEST NUMBER IN EACH SUBARRAY

// EXAMPLE

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [5,27,39,1001]
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [27,5,39,1001]
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])); // [9,35,97,1000000]
console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); // [25,48,21,-3]
