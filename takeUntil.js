//takeUntil function - takes in an array and a callback. returns a "slice of the array with elements taken from the beginning."

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const takeUntil = function(array, callback) {
  const slicedArray = [];
  for (const item of array) {
    if (callback(item) === true) {
      return slicedArray;
    }
    slicedArray.push(item);
  }
  return slicedArray;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

console.log("PASSING TESTS");
//PASS
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

console.log("---");

console.log("FAILING TESTS");
//FAIL
assertArraysEqual(results1, [1, 2, 5, 7, 2, -1, 2, 4, 5]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);

/*
expected output:

[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/