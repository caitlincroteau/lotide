const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


/*

const firstNames = [
  "Dani",
  "Ken",
  "Alisma",
  "Caitlin",
  "Colton",
  "Robyn",
  "Kim",
  "Caitlin",
  "Benji"
];


const result1 = countOnly(firstNames, {"Ken": true, "Lily": true, "Caitlin": true, "Benji": false});

assertEqual(result1["Ken"], 1);
assertEqual(result1["Lily"], undefined);
assertEqual(result1["Caitlin"], 2);
assertEqual(result1["Benji"], undefined);

*/


const firstNames2 = [
  "Lisa",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];


const result2 = countOnly(firstNames2, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result2["Jason"], 1);
assertEqual(result2["Karima"], undefined);
assertEqual(result2["Fang"], 2);
assertEqual(result2["Agouhanna"], undefined);