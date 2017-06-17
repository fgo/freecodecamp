/*!
 * Condense arrays with .reduce - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.
singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
