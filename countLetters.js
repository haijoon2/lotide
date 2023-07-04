// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const results = {};

  for (const letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const result1 = countLetters("hello");
const result2 = countLetters("LHL");

console.log(result1);
console.log(result2);

assertEqual(result1["h"], 1);
assertEqual(result1["l"], 2);
assertEqual(result1["z"], undefined);

assertEqual(result2["L"], 2);
assertEqual(result2["H"], 1);
assertEqual(result2["A"], undefined);