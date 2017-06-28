/*!
 * Caesars Cipher - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function rot13(str) { // LBH QVQ VG!
  return str.split('')
    .map.call(str, function(char) {
      x = char.charCodeAt(0);
      if (x < 65 || x > 90) {
        return String.fromCharCode(x);
      }
      // Shift forward 13 places if charcode is < 78 (78 = N)
      else if (x < 78) {
        return String.fromCharCode(x + 13);
      }
      // Shift backward 13 places
      return String.fromCharCode(x - 13);
    }).join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
