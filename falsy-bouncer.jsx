function bouncer(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != false && arr[i] == arr[i] && arr[i] != 0 && arr[i] != null && arr[i] != undefined) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// RETURNS ONLY TRUE VALUES

//EXAMPLE

bouncer([7, "ate", "", false, 9]) // RETURNS [7, "ate", 9]
bouncer([false, null, 0, NaN, undefined, ""]); // RETURNS []
