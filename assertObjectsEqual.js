const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1); // [ ...all the keys from obj1]
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key1 of keys1) {
    const value1 = obj1[key1];
    const value2 = obj2[key1];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      const result = eqArrays(value1, value2);

      if (result === false) {
        return false;
      }
    } else if (typeof value1 === 'object' && typeof value2 === 'object') {
      const result = eqObjects(value1, value2);

      if (result === false) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      } // else is not necessary because there's no logic required
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  const result = eqObjects(actual, expected);

  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
