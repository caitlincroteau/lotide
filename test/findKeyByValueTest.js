const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const bestSongByBand = {
  theWarOnDrugs: "Red Eyes",
  bigBang: "Fantastic Baby",
  comTruise:  "Propagation"
};

describe("#findKeyByValue", () => {
  it("returns 'drama' for (bestTVShowsByGenre,'The Wire')", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns 'undefined' for (bestTVShowsByGenre,'That '70s Show')", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("returns 'bigBang' for (bestSongByBand, 'Fantastic Baby'))", () => {
    assert.deepEqual(findKeyByValue(bestSongByBand, "Fantastic Baby"), "bigBang");
  });

  it("returns 'theWarOnDrugs' for (bestSongByBand, 'Red Eyes'),", () => {
    assert.deepEqual(findKeyByValue(bestSongByBand, "Red Eyes"), "theWarOnDrugs");
  });

  it("returns 'undefined' for (bestSongByBand, 'If You')", () => {
    assert.deepEqual(findKeyByValue(bestSongByBand, "If You"), undefined);
  });

});