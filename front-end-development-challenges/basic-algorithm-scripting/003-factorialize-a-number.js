/*!
 * Factorialize a Number - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

/* For Loop
 * function factorialize(num) {
 *   if (num === 0 || num === 1) {
 *     return 1;
 *   }
 *
 *   for (var i = num - 1; i >= 1; i--) {
 *     num *= i;
 *   }
 *   return num;
 * }
*/

// Recursion
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
factorialize(5); // 1*2*3*4*5=120
