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

module.exports = findKeyByValue;