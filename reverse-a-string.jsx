function reverseString(str) {
  var n = str.split("");
  console.log(n);
  var b = n.reverse("");
  console.log(b);
  var t = b.join("");
  console.log(t);
  return t;
}

// REVERSES A STRING

// EXAMPLE

reverseString("hello"); // olleh
