function findLongestWordLength(str) {
  let words = /\S+/g; //CHECKS FOR NONWHITE SPACE IN GROUPS
  let wordArray = str.match(words); // VARIABLE FOR ARRAY OF WORDS (LETTERS SEPERATED BY SPACES)
  var biggestWord = 0; // HOLDS INTERGER FOR LONGEST WORD
  for (let i = 0; i < wordArray.length; i++) { //CYCLE THROUGH OBTAINED ARRAY
    if (wordArray[i].length > biggestWord) { // IF NEW WORD LONGER THAN RECORD
      biggestWord = wordArray[i].length //OVERWRITE THAT RECORD WITH NEW LENGTH
    }
  }
  return biggestWord
}

// FINDS LONGEST WORD IN A STRING AND RETURNS ITS LENGTH

// EXAMPLE 

findLongestWordLength("The quick brown fox jumped over the lazy dog"); // JUMPED IS LONGEST WORD, RETURNS 6 (LENGTH OF JUMP)
