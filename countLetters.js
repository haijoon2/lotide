const countLetters = function(str) {
  const results = {};

  for (const letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;