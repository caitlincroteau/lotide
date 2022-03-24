
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//returns new array of all elements but head

const tail = function(array) {
  let tailArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      tailArray.push(array[i]);
    }
  }
  return tailArray;
};

//TESTS

const words = ["yo yo", "lighthouse", "labs"];
console.log(tail(words));
assertEqual(words.length, 3);

const numbers = [1];
console.log(tail(numbers));
assertEqual(numbers.length, 1);

const emptyArray = [];
console.log(tail(emptyArray));
assertEqual(emptyArray.length, 0);