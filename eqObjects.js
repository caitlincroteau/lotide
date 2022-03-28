const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
input: 2 objects
returns true or false based on their match
*/

const eqObjects = function(object1, object2) {

};

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
eqObjects(ab, ba);
//true

const abc = {a: "1", b: "2", c: "3"};
eqObjects(ab, abc);
//false