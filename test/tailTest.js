const assertEqual = require('../assertEqual');
const tail = require('../tail');

//test to ensure tail creates and returns a new array and does not alter the original array.
const words = ["yo yo", "lighthouse", "labs"];
console.log("original array:", words);
console.log("new array:", tail(words));
assertEqual(words.length, 3);
//true

const numbers = [1];
console.log("original array:", numbers);
console.log("new array:", tail(numbers));
assertEqual(numbers.length, 1);
//true

const emptyArray = [];
console.log("original array:", emptyArray);
console.log("new array:", tail(emptyArray));
assertEqual(emptyArray.length, 0);
//true