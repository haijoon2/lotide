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

const assertArraysEqual = (actual, expected) => {
  const result = eqArrays(actual, expected);

  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = (array) => {
  if (array.length < 3) {
    return [];
  } else {
    if (array.length % 2 === 0) {
      const midIndex = array.length / 2;

      const mid1 = array[midIndex - 1];
      const mid2 = array[midIndex];

      return [mid1, mid2];
    } else {
      const midIndex = Math.trunc(array.length / 2);

      const mid = array[midIndex];

      return [mid];
    }
  }
};

//TEST CODE
assertArraysEqual(middle([5,6,7]), 5);
assertArraysEqual(middle(["Hello", "Lighthouse", "Labs"]), "Lighthouse");