/*!
 * Seek and Destroy - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function destroyer(arr) {
  var args = [].slice.call(arguments);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
