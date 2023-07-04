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

module.exports = flatten;