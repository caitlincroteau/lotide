const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns ['lighthouse', 'labs'] for ['howdy', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(['howdy', 'lighthouse', 'labs']), ['lighthouse', 'labs']);
  });

  it("returns [4] for [3, 4]", () => {
    assert.deepEqual(tail([3, 4]), [4]);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
});
