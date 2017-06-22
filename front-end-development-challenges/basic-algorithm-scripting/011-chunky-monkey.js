/*!
 * Chunky Monkey - Front End Development Certification
 *
 * Authored by Francis Go
 * https://github.com/fgo/freecodecamp
 */

function chunkArrayInGroups(arr, size) {
  // Break it up.

  // For Loop
  // var chunkedArray = [];
  // for (var i = 0; i < arr.length; i+=size) {
    // chunkedArray.push(arr.slice(i,i+size));
  // }
  // return chunkedArray;

  // While Loop
  var i = 0;
  var group = [];

  while (i < arr.length) {
    group.push(arr.slice(i, i+size));
    i += size;
  }

  return group;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
