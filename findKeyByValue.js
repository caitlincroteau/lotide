const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


/*
input object and value
scan object and find first key that contains given value
if no key with that value, return undefined
*/

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (const item of keys) {
    if (object[item] === value) {
      return item;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
//console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"))



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);



const bestSongByBand = {
  theWarOnDrugs: "Red Eyes",
  bigBang: "Fantastic Baby",
  comTruise:  "Propagation"
};

assertEqual(findKeyByValue(bestSongByBand, "Fantastic Baby"), "bigBang");
assertEqual(findKeyByValue(bestSongByBand, "Red Eyes"), "theWarOnDrugs");
assertEqual(findKeyByValue(bestSongByBand, "If You"), undefined);