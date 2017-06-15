/*!
 * Testing Objects for Properties - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty([checkProp])) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("pet");
