const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};


const string1 = "hello";
assertArraysEqual(letterPositions(string1).h, [0]);
assertArraysEqual(letterPositions(string1).e, [1]);
assertArraysEqual(letterPositions(string1).l, [2, 3]);
assertArraysEqual(letterPositions(string1).o, [4]);

/*

inputs a sentence and returns an object of arrays
each key refers to a letter of the sentence
each value is an array listing which indexes the letter is at


input: STRING

output: Object with arrays of indexes

*/