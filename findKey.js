const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callBack) => {
  const keys = Object.keys(obj);

  for (const key of keys) {
    const currValue = obj[key];
    if (callBack(currValue)) {
      return key;
    }
  }

  return undefined;
};

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result1 = findKey(obj, x => x.stars === 2); // => "noma"
const result2 = findKey(obj, x => x.stars === 1); // => "Blue Hill"
const result3 = findKey(obj, x => x.stars === 7); // => undefined

assertEqual(result1, "noma");
assertEqual(result2, "Blue Hill");
assertEqual(result3, undefined);