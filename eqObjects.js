//eqObjects function - takes in two objects and returns true or false based on a perfect match.

const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;