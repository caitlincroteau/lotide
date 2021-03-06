//assertObjectsEqual function - compares two objects and prints out a message telling us if they match or not.

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

const eqObjects = function(object1, object2) {

  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  } else {
    for (let item of object1Keys) {
      if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        let result = eqArrays(object1[item], object2[item]);
        if (!result) {
          return false;
        }
      } else if (object1[item] !== object2[item]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TESTS:

const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
const cd2 = {c: "1", d: ["2", 3, 4]};
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};
const empty = {};
const empty2 = {};

console.log("Passing Tests:");
assertObjectsEqual(cd, dc);
//pass
assertObjectsEqual(ab, ba);
//pass
assertObjectsEqual(empty, empty2);
//pass

console.log("---");

console.log("Failing Tests:");
assertObjectsEqual(cd, cd2);
//fail
assertObjectsEqual(ab, abc);
//fail
