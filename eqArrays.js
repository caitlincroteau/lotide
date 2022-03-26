const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }
  }
return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([], ["1", "2", 3]), false);


/*
assertEqual("Lighthouse Labs", "Bootcamp");
//fail
assertEqual(1, 1);
//pass
assertEqual("Caitlin", "Caitlin");
//pass
assertEqual(130, 13);
//fail


output:

Assertion Failed: Lighthouse Labs !== Bootcamp
Assertion Passed: 1 === 1
Assertion Passed: Caitlin === Caitlin
Assertion Failed: 130 !== 13

eqArrays takes in two arrays
returns true or false, based on a perfect match

*/

