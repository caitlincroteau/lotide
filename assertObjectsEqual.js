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

/*
input: 2 objects
returns true or false based on their match
*/

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

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};





const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
const cd2 = {c: "1", d: ["2", 3, 4]};
assertObjectsEqual(cd, dc);
//pass
assertObjectsEqual(cd, cd2);
//fail

const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};
assertObjectsEqual(ab, ba);
//pass
assertObjectsEqual(ab, abc);
//fail

const empty = {};
const empty2 = {};
assertObjectsEqual(empty, empty2);
//pass