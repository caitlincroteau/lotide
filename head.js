
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//head function - returns first item in array

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["flower"]), "flower");
assertEqual(head([1200, 1300, 1400]), 1500);
assertEqual(head([1200, 1300, 1400, 1500]), 1400);
assertEqual(head([]), 1500);
assertEqual(head([]), "cauliflower");