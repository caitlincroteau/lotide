//without function - takes in a source array and a itemsToRemove array.
//returns a subset of a source array, removing unwanted elements. 
//Should return a new array and not modify the original array.

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

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (const element of source) {
    if (itemsToRemove.includes(element) !== true) {
      newArray.push(element);
    }
  }
  return newArray;
};

//TESTS:

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["A", "Long", "Adventure"], ["A", "Adventure"]), ["Long"]);
assertArraysEqual(without(["Time", "Travel", 2050], []), ["Time", "Travel", 2050]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
// no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

