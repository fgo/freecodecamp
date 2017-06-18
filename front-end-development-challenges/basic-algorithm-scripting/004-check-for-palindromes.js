/*!
 * Check for Palindromes - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function palindrome(str) {
  sanitize_str = str.replace(/[\W_]+/g, '').toLowerCase();
  reverse_str = sanitize_str.split('').reverse().join('');
  if (sanitize_str  === reverse_str) {
    return true;
  }
  return false;
}

palindrome("eye");
