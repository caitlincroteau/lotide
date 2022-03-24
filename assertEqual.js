const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed:", actual,  "===",  expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: ", actual, "!==", expected);
  }
};

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

*/