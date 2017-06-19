/*!
 * Repeat a string repeat a string - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num >= 0) {
    return str.repeat(num);
  }
  return "";
}

repeatStringNumTimes("abc", 3);
