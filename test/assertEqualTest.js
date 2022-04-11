const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp");
//fail
assertEqual(1, 1);
//pass
assertEqual("Caitlin", "Caitlin");
//pass
assertEqual(130, 13);
//fail

/*
output:

Assertion Failed: Lighthouse Labs !== Bootcamp
Assertion Passed: 1 === 1
Assertion Passed: Caitlin === Caitlin
Assertion Failed: 130 !== 13

*/