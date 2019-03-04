/* 
Roman numerals. 
Letters of the alphabet used in ancient Rome to represent numbers: 
I = 1; 
V = 5; 
X = 10; 
L = 50; 
C = 100; 
D = 500;
M = 1000. 
The numbers one through ten are written 
I, II, III, IV, V, VI, VII, VIII, IX, and X.
*/

var arr;
function convertToRoman(num) {
  arr = [];
  work(num)
  var ans = arr.join("");
  return ans;
}

function work(numbr) {
  if ( (numbr/1000) >= 1){
    arr.push("M");
    work(numbr-1000);
  }
  else if ( (numbr/900) >= 1) {
    arr.push("CM");
    work(numbr-900);
  }
  else if ( (numbr/500) >= 1){
    arr.push("D");
    work(numbr-500);
  }
  else if ( (numbr/400) >= 1) {
    arr.push("CD");
    work(numbr-400);
  }
  else if ( (numbr/100) >= 1){
    arr.push("C");
    work(numbr-100);
  }
  else if ( (numbr/90) >= 1) {
    arr.push("XC");
    work(numbr-90);
  }
  else if ( (numbr/50) >= 1){
    arr.push("L");
    work(numbr-50);
  }
  else if ( (numbr/40) >= 1) {
    arr.push("XL");
    work(numbr-40);
  }
  else if ( (numbr/10) >= 1){
    arr.push("X");
    work(numbr-10);
  }
  else if ( (numbr/9) >= 1) {
    arr.push("IX");
    work(numbr-9);
  }
  else if ( (numbr/5) >= 1){
    arr.push("V");
    work(numbr-5);
  }
  else if ( (numbr/4) >= 1) {
    arr.push("IV");
    work(numbr-4);
  }
  else if ( (numbr/1) >= 1){
    arr.push("I");
    work(numbr-1);
  }
}

// CONVERTS NUMBERS INTO THEIR ROMAN NUMERAL COUNTERPARTS

// EXAMPLE

convertToRoman(44);  // XLIV
convertToRoman(1004);  // MIV
convertToRoman(2014);  // MMXIV
