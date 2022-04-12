//head function - returns first item in array
//An array with only one element should still yield that one element as its head
//An empty array should yield undefined as its head

const head = function(array) {
  return array[0];
};

module.exports = head;