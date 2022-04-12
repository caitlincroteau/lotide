//returns the "tail" of an array: everything except for the first item (head) of the provided array.
//An array with only one element should yield an empty array for its tail
//An empty array should yield an empty array for its tail

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
