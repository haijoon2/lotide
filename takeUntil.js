const takeUntil = (array, callback) => {
  const result = [];

  for (const elem of array) {
    if (!callback(elem)) {
      result.push(elem);
    } else {
      break;
    }
  }

  return result;
};

module.exports = takeUntil;