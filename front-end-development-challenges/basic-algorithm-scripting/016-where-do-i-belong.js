/*!
 * Where do I belong - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);

  arr.sort(function(a, b){
    return a - b;
  });

  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
