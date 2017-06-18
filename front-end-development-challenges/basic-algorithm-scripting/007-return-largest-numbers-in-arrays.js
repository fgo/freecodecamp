/*!
 * Return Largest Numbers in Arrays - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

/* For Loop example
function largestOfFour(arr) {
  var largestNumbersInArrays = [0,0,0,0];

  for(var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumbersInArrays[i]) {
        largestNumbersInArrays[i] = arr[i][j];
      }
    }
  }
  return largestNumbersInArrays;
}
*/

// Map, apply and Math.max example
function largestOfFour(arr) {
  return arr.map(function(subArr) {
    return Math.max.apply(null, subArr);
  });
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
