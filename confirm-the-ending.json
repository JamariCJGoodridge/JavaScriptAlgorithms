/*
    IDEA
PASS string and targeted end phrase
String has X letters, and End phrase has Y characters
End phrase must be Y letters from the end of x
SO X-Y should produce everything but End phrase
This difference D with the End phrase, X
SO D = X -Y
ANOTHER IDEA
Take string as array
reverse string
test if target matches reversed string up to the end
*/

function confirmEnding(str, target) {
  let strLength = str.length; // GETS LENGTH OF STRING
  let strArr = str.split(""); // SPLITS STRING INTO ARRAY
  let revStrArr = strArr.reverse(); // REVERSE STRING ARRAY
  let targetLength = target.length; // GETS LENGTH OF TARGET
  let targetArr = target.split(""); // SPLIT TARGET
  let revTargetArr = targetArr.reverse(); // REVERSE TARGET ARRAY
  console.log(strLength);
  console.log(revStrArr);
  console.log(target);
  console.log(revTargetArr);
  var matchCounter = 0;
  for (let i = 0; i <= targetLength; i++) {
    if (revStrArr[i] == revTargetArr[i]) {
      matchCounter++;
      console.log(matchCounter);
    }
  }
  if (matchCounter == targetLength) {
    return true  
  }
  else {
    return false }
}

// CHECKS WHETHER A STRING HAS THE PROVIDED END VALUE

// EXAMPLES

confirmEnding("Bastian", "n"); // BASTIAN DOES END WITH N, RETURNS TRUE
confirmEnding("Take me to your leader", "ur leader") // DOES END WITH UR LEADER, RETURNS TRUE
confirmEnding("How you doing". "How y") // DOES NOT END WITH HOW Y, RETURNS FALSE
