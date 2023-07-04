const without = (array1, array2) => {
  const result = [];
  array1.forEach((elem) => {
    if (!array2.includes(elem)) {
      result.push(elem);
    }
  });

  return result;
};

module.exports = without;