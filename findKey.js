const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
Implement the function findKey which takes in an object and a callback.
It should scan the object and return the first key for which the callback returns a truthy value.
If no key is found, then it should return undefined.
*/


const findKey = function(object, callback) {
  const outerKeys = Object.keys(object);

  for (let outerItem of outerKeys) {
    if (callback(object[outerItem])) {
      return outerItem;
    }
  }
};

//TESTS

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

// => "noma"

const result2 = findKey({
  "Cats": { stars: 1 },
  "Burning": { stars: 4 },
  "spaceJam": { stars: 2 },
  "The Woman in Black": { stars: 3 },
  "TMNT": { stars: 2 },
  "spiceWorld": { stars: 3 }
}, x => x.stars === 3);

// => "The Woman in Black"

const result3 = findKey({}, x => x.stars === 1);

// => undefined

const result4 = findKey({
  "Cats": { stars: 1 },
  "Burning": { stars: 4 },
  "spaceJam": { stars: 2 },
  "The Woman in Black": { stars: 3 },
  "TMNT": { stars: 2 },
  "spiceWorld": { stars: 3 }
}, x => x.stars === 5);

// => undefined

console.log("TEST 1 results :");
assertEqual("noma", result1);
console.log("---");

console.log("TEST 2 results :");
assertEqual("The Woman in Black", result2);
console.log("---");

console.log("TEST 3 results :");
assertEqual(undefined, result3);
console.log("---");

console.log("TEST 4 results :");
assertEqual(undefined, result4);
console.log("---");




