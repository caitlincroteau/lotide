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

//Create a function flatten which will take in an array containing elements
//including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(array) {
  let newArray = [];
  for (const element of array) {
    if (Array.isArray(element)) {
      for (const item of element) {
        newArray.push(item);
      }
    } else {
      newArray.push(element);
    }
  }
  return newArray;
};

const array1 = [1, 2, ["caitlin", "is", "cool"], 120];
assertArraysEqual(flatten(array1), [1, 2, "caitlin", "is", "cool", 120]);
const array2 = [5, ["nighttime"]];
assertArraysEqual(flatten(array2), [5, "nighttime"]);
const array3 = [1, 2, 75];
assertArraysEqual(flatten(array3), [1, 2, 75]);
const array4 = [[]];
assertArraysEqual(flatten(array4), []);
const array5 = [["hello"]];
assertArraysEqual(flatten(array5), ["hello"]);
const array6 = ["all", "is", "well", []];
assertArraysEqual(flatten(array6), ["all", "is", "well"]);
const array7 = ["all", "is", "well"];
assertArraysEqual(flatten(array7), ["all", "is", "well"]);


/*
testing
let array = [1, 2, 1, 4, 7];
console.log(Array.isArray(array));
console.log(typeof array);
*/
