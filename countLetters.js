//countLetters function - takes in a sentence, as a string, and returns a count of each of the letters in that sentence.

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const letters = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (letters[letter]) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }
    }
  }
  return letters;
};

//TESTS:

const string1 = "cait is so cool";
const string2 = "little lily";
const string3 = "ogopogo";

const result1 = countLetters(string1);
//{c: 2, a: 1, i: 2, t: 1, s: 2, o: 3, l: 1}
assertEqual(result1["c"], 2);
assertEqual(result1["a"], 1);
assertEqual(result1["o"], 3);
assertEqual(result1["p"], undefined);

const result2 = countLetters(string2);
//{ l: 4, i: 2, t: 2, e: 1, y: 1 }
assertEqual(result2["l"], 4);
assertEqual(result2["t"], 2);
assertEqual(result2["y"], 1);
assertEqual(result2["m"], undefined);

const result3 = countLetters(string3);
//{ o: 4, g: 2, p: 1 }
assertEqual(result3["o"], 4);
assertEqual(result3["y"], undefined);
