/*!
 * Truncate a string - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num <= 3) {
    return str.slice(0, num) + "...";
  } else if (num < str.length) {
    return str.slice(0, num-3) + "...";
  } else if (num >= str.length) {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
