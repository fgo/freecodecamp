/*!
 * Falsy Bouncer - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  // Conditional logic
  // return arr.filter(function(item) {
    // if(item) {
      // return item;
    // }
  // });

  // Filter using Boolean object, initial value is optional.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
