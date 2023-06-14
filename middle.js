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

module.exports = middle;