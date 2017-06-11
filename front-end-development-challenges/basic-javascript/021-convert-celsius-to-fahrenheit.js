/*!
 * Convert Celsius to Fahrenheit - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  // The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

  fahrenheit = celsius * 9/5 + 32;

  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);
