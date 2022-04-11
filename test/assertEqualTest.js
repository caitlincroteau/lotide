const assertEqual = require('../assertEqual');

console.log("this code will pass:");
assertEqual(1, 1);
assertEqual("Caitlin", "Caitlin");

console.log("---");

console.log("this code will fail:");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(130, 13);
