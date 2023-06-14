const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

// const result1 = middle([1]); // => []
// const result2 = middle([1, 2]); // => []
// const result3 = middle([1, 2, 3]); // => [2]
// const result4 = middle([1, 2, 3, 4, 5]); // => [3]
// const result5 = middle([1, 2, 3, 4]); // => [2, 3]
// const result6 = middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

// assertArraysEqual(result1, []);
// assertArraysEqual(result2, []);
// assertArraysEqual(result3, [2]);
// assertArraysEqual(result4, [3]);
// assertArraysEqual(result5, [2, 3]);
// assertArraysEqual(result6, [3, 4]);