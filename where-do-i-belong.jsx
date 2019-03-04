function getIndexToIns(arr, num) {
 arr.sort(sortNumber);
 arr.join(",");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length
}

function sortNumber(a,b) {
  return a - b;
}

// SORTS ARRAY FROM LEAST TO GREATEST, THEN FINDS INDEX NUMBER TO PUT NEW VALUE TO REMAIN FROM LEAST TO GREATEST

console.log(getIndexToIns([80, 9, 2, 42, 40, 60], 50)); // 4
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([40, 60], 50)); // 1
