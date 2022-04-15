//letterPositions function - will return all the indices (zero-based positions) in the string where each character is found.
//inputs a sentence and returns an object of arrays
//each key refers to a letter of the sentence
//each value is an array listing which indexes the letter is at

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


module.exports = letterPositions;