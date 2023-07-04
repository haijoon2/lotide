const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const alphabet = sentence[i];

    if (results[alphabet]) {
      results[alphabet].push(i);
    } else {
      results[alphabet] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;