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
  //console.log(letters);
  return letters;
}


const string1 = "cait is so cool";
const string2 = "little lily";
const string3 = "ogopogo"


assertEqual(countLetters(string1), {c: 2, a: 1, i: 2, t: 1, s: 2, o: 3, l: 1});
assertEqual(countLetters(string2), {l: 4, i: 2, t: 2, e: 1, y: 1});
assertEqual(countLetters(string3), {o: 4, g: 2, p: 1});


//console.log(countLetters(string1));