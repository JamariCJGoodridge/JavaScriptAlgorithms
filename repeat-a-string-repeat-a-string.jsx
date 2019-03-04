function repeatStringNumTimes(str, num) {
  let complete = "";
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      complete += str;
    }
    return complete;
  } else { return "" }
}

// REPEATS STR BY SPECIFIED NUMBER 
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc
console.log(repeatStringNumTimes("*", 8)); // ********
