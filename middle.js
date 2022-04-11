//takes in an array and returns the middle-most element(s) of the given array.

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