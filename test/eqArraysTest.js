const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const result1 = eqArrays([1, 2, 3], [1, 2, 3]); // => true
const result2 = eqArrays([1, 2, 3], [3, 2, 1]); // => false
const result3 = eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
const result4 = eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(result1, true);
assertEqual(result2, false);
assertEqual(result3, true);
assertEqual(result4, false);