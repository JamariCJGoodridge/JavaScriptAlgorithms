function palindrome(str) {
  let lower = str.toLowerCase();
  var arr = lower.split("");
  let checker = /\W/;
  var finalArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].match(checker) || arr[i] == "_" || arr[i]==" ") {
       arr.splice(i, 1);
       i -= 1;
    } else { finalArr.push(arr[i]) }; 
  }
  let reversed = arr.reverse();
  let reversedL = reversed.join("");
  let onlyL = finalArr.join("");
  if (reversedL == onlyL) {
    return true
  } else { return false }
}

// PALINDROME CHECKER, WORKS FOR ANY SENTENCE WITH ENGLISH CHARACTERS, BUT DOES NOT WORK WITH SOME SPECIAL CHARACTERS 

//EXAMPLE

palindrone("Level") // RETURNS TRUE
