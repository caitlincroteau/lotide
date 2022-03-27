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

const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    middleArray.push(Math.ceil(array.length / 2));
  } else {
    middleArray.push(array.length / 2);
    middleArray.push(array.length / 2 + 1);
  }
  return middleArray;
};

const array1 = [1, 2, 3];
assertArraysEqual(middle(array1), [2]);
const array2 = [1, 2, 3, 4, 5];
assertArraysEqual(middle(array2), [3]);
const array3 = [1, 2, 3, 4];
assertArraysEqual(middle(array3), [2, 3]);
const array4 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(array4), [3, 4]);
const array5 = [];
assertArraysEqual(middle(array5), []);
const array6 = [1];
assertArraysEqual(middle(array6), []);
const array7 = [1, 2];
assertArraysEqual(middle(array7), []);