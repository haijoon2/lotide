const eqArrays = require('./eqArrays');

const assertArraysEqual = (actual, expected) => {
  const result = eqArrays(actual, expected);

  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = (array) => {
  const result = [];

  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      elem.forEach((elem2) => {
        result.push(elem2);
      });
    } else {
      result.push(elem);
    }
  });
  return result;
};

const result = flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(result, [1, 2, 3, 4, 5, 6]);