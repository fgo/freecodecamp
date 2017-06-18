/*!
 * Title Case a Sentence - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function titleCase(str) {
  return str.split(' ').map(function(w) {
    return w.charAt(0).toUpperCase() + w.substr(1).toLowerCase();
  }).join(' ');
}

titleCase("I'm a little tea pot");
