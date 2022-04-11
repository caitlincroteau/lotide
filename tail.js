//returns the "tail" of an array: everything except for the first item (head) of the provided array.

const tail = function(array) {
  let tailArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      tailArray.push(array[i]);
    }
  }
  return tailArray;
};

module.exports = tail;
