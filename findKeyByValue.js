//findKeyByValue function - takes in an object and a value. Returns the first key which contains the given value.
//If no key with that given value is found, then it returns undefined.

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (const item of keys) {
    if (object[item] === value) {
      return item;
    }
  }
};

module.exports = findKeyByValue;