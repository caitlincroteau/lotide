const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns [] for [15, 20]", () => {
    assert.deepEqual(middle([15, 20]), []);
  });

  it("returns [] for [100]", () => {
    assert.deepEqual(middle([100]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

});

