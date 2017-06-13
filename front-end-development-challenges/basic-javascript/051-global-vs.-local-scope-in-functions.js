/*!
 * Global vs. Local Scope in Functions - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
