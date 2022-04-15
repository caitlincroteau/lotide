const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames1 = [
  "Lisa",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const firstNames2 = [
  "Dani",
  "Ken",
  "Alisma",
  "Caitlin",
  "Colton",
  "Robyn",
  "Kim",
  "Caitlin",
  "Benji"
];

const result1 = countOnly(firstNames1, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
const result2 = countOnly(firstNames2, {"Ken": true, "Lily": true, "Caitlin": true, "Benji": false});

describe("#countOnly", () => {
  it("returns 1 for result1['Jason']", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("returns undefined for result1['Karima']", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("returns 2 for result1['Fang']", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("returns undefined for result1['Agouhanna']", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

  it("returns 1 for result2['Ken']", () => {
    assert.strictEqual(result2["Ken"], 1);
  });

  it("returns undefined for result2['Lily']", () => {
    assert.strictEqual(result2["Lily"], undefined);
  });

  it("returns 2 for result2['Caitlin']", () => {
    assert.strictEqual(result2["Caitlin"], 2);
  });

  it("returns undefined for result2['Benji']", () => {
    assert.strictEqual(result2["Benji"], undefined);
  });

});

