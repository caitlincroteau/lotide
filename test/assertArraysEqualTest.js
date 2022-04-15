const assertArraysEqual = require('../assertArraysEqual');

console.log("this code will pass:");
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["hello", "hi"], ["hello", "hi"]);

console.log("---");

console.log("this code will fail:");
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([], [1, 2]);
assertArraysEqual(["Caitlin", "Jean"], ["Seoul"]);
