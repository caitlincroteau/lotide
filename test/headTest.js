const assertEqual = require('../assertEqual');
const head = require('../head');

//passing code
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["flower"]), "flower");

//failing code
assertEqual(head([1200, 1300, 1400]), 1500);
assertEqual(head([1200, 1300, 1400, 1500]), 1400);
assertEqual(head([]), 1500);
assertEqual(head([]), "cauliflower");