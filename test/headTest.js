const assertEqual = require('../assertEqual');
const head = require('../head');

console.log("this code will pass:");
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["flower"]), "flower");

console.log("---");

console.log("this code will fail:");
assertEqual(head([1200, 1300, 1400]), 1500);
assertEqual(head([1200, 1300, 1400, 1500]), 1400);
assertEqual(head([]), 1500);
assertEqual(head([]), "cauliflower");