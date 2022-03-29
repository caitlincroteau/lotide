const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  //console.log(object1Keys);
  //console.log(object2Keys);

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

//&& eqArrays(object1[item], object2[item]) === false

const cd = {c: "1", d: ["2", 3]};
const dc = {d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true);
//true

const cd2 = {c: "1", d: ["2", 3, 4]};
assertEqual(eqObjects(cd, cd2), false);
//false


const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
assertEqual(eqObjects(ab, ba), true);
assertEqual(ab["a"], ba["a"]);
assertEqual(ab["b"], ba["b"]);
//true

const abc = {a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);
//false