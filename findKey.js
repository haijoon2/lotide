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

module.exports = findKey;