/*

Our map function will take in two arguments:

An array to map
A callback function

The map function will return a new array based on the results of the callback function.


*/
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


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(["g", "c", "t", "m", "t"], map(words, word => word[0]));

const empty = [];
const results2 = map(empty, item => item[0]);
console.log(results2);

assertArraysEqual(results2, []);

const numbers = [1, 5, -12];
const results3 = map(numbers, item => item[0]);
console.log(results3);

assertArraysEqual(results3, [undefined, undefined, undefined]);