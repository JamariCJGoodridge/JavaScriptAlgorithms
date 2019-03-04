function truncateString(str, num) {
  var w = str.split("");
  let newArr = [];
  if (num < w.length) {
    for (var i = 0; i < num; i++) {
      newArr.push(w[i]);
    }
    var final = newArr.join("") + "...";
    return final;
  } else { return str }
}

// CUTS OFF STRING AFTER SPECIFIED CHARACTER LIMIT 

// EXAMPLE
truncateString("A-tisket a-tasket A green and yellow basket", 8); // A-tisket...
truncateString("Cut-off here THIS WON'T BE SEEN", 12); // Cur-off here...
