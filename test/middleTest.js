const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//all tests pass
const array1 = [1, 2, 3];
assertArraysEqual(middle(array1), [2]);
const array2 = [1, 2, 3, 4, 5];
assertArraysEqual(middle(array2), [3]);
const array3 = [1, 2, 3, 4];
assertArraysEqual(middle(array3), [2, 3]);
const array4 = [1, 2, 3, 4, 5, 6];
assertArraysEqual(middle(array4), [3, 4]);
const array5 = [];
assertArraysEqual(middle(array5), []);
const array6 = [1];
assertArraysEqual(middle(array6), []);
const array7 = [1, 2];
assertArraysEqual(middle(array7), []);