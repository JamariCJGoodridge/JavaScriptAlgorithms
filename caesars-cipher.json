function rot13(str) { 
  var nonAlphCheck = /\W/; //CHECK FOR NON ALPHABET CHARACTERS
  var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];  
  var input = str.split(""); // SPLIT INPUT INTO ARRAY
  var cipher = []; 
  for (var y = 0; y < input.length; y++) { //ITERATE THROUGH EVERY LETTER OF INPUT
    if (input[y].match(nonAlphCheck)) { // NON LETTER CHARACTERS PUT INTO OUTPUT ARRAY UNCHANGED
      cipher.push(input[y]);
    } 
    else { // LETTER CHARACTERS ARE SHIFTED BY 13 SPACES
      for (var i = 0; i < alphabet.length; i++) { 
        if (input[y] == alphabet[i]) { // FINDS MATCHING LETTER
          if ( (i + 13) >= 26) { // SHIFTS LETTER BY 13 SPACES IN ALPHABET
            cipher.push(alphabet[i-13]);
          }
          else {
            cipher.push(alphabet[i+13]);
          }
        }
      }
    }
  }
var final = cipher.join(""); // JOIN ARRAY TO MAKE STRING
return final;
}

// CAESAR CIPHER IS A CIPHER INVOLVING A TRANSFORMATION OF THE ALPHABET 13 UNITS AWAY FROM ITS NORMAL POSITION

// EXAMPLE

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
