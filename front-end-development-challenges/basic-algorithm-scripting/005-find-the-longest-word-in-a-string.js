/*!
 * Find the Longest Word in a String - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function findLongestWord(str) {
  var arrayOfStrings = str.split(' ');
  var lengthOfString = 0;
  var longestString;

  for(i=0; i < arrayOfStrings.length; i++) {
    if(arrayOfStrings[i].length > lengthOfString) {
      lengthOfString = arrayOfStrings[i].length;
      longestString = arrayOfStrings[i];
    }
  }
  return longestString.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
