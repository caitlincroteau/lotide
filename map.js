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


//MAP FUNCTION:


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


//TESTS:

console.log("TEST 1");
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);

//PASS
console.log("passing tests:");
assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(["g", "c", "t", "m", "t"], map(words, word => word[0]));

//FAIL
console.log("failing tests:");
assertArraysEqual(results1, ["ground", "control", "to", "major", "tom"]);

console.log("---");

console.log("TEST 2");
const empty = [];
const results2 = map(empty, item => item[0]);

//PASS
console.log("passing tests");
assertArraysEqual(results2, []);

//FAIL
console.log("failing tests");
assertArraysEqual(results2, [1]);

console.log("---");

console.log("TEST 3");
const numbers = [1, 5, -12];
const results3 = map(numbers, item => item[0]);

//PASS
console.log("passing tests");
assertArraysEqual(results3, [undefined, undefined, undefined]);

//FAIL
console.log("failing tests");
assertArraysEqual(results3, [1, 5, -12]);