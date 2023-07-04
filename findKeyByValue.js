// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  const keys = Object.keys(obj);

  for (const key of keys) {
    const currValue = obj[key]; // obj["sci_fi"] || obj.sci_fi
    if (currValue === value) {
      return key;
    }
  }

  return undefined;
};

/* NOTE
1. I am trying to find key (ex. sci_fi) when putting value (ex. "The Expanse")
2. The function returns one of the keys if it has matching values
3. if not, function returns undefined
*/

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);