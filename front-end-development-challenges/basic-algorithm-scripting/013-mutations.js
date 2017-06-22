/*!
 * Mutations - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function mutation(arr) {
  firstElement = arr[0].toLowerCase();
  secondElement = arr[1].toLowerCase();

  for (i=0; i < secondElement.length; i++) {
    if (firstElement.indexOf(secondElement[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
