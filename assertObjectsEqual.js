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

const assertObjectsEqual =function(actual, expected) {

};