const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  const result = eqArrays(actual, expected);

  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const alphabet = sentence[i];

    if (results[alphabet]) {
      results[alphabet].push(i);
    } else {
      results[alphabet] = [i];
    }
  }

  return results;
};

const result1 = letterPositions("hello");
const result2 = letterPositions("light house is cool");

assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);

assertArraysEqual(result2["t"], [4]);