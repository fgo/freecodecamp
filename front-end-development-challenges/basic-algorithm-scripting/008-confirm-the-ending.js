/*!
 * Confirm the Ending - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(-target.length) === target) {
    return true;
  }
  return false;
}

confirmEnding("Bastian", "n");
