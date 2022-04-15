// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

//countOnly function - takes in a collection of items and returns counts for a specific subset of those items.

/*

input: Array, Object

use object T/F info to count appropriate infor in the array and return those counts
in a new object

output:
object that contains counts of everythig the input OBJECT listed.

*/

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


module.exports = countOnly;