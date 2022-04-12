//takes in an array and returns the middle-most element(s) of the given array.
//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    middleArray.push(Math.ceil(array.length / 2));
  } else {
    middleArray.push(array.length / 2);
    middleArray.push(array.length / 2 + 1);
  }
  return middleArray;
};

module.exports = middle;