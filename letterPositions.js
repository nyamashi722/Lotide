const letterPositions = function(sentence) {
  const results = {};
  const sentenceArray = sentence.split("");

  for (let i = 0; i < sentenceArray.length; i++) {
    if (sentenceArray[i] === " ") {
      continue;
    }

    if (!results[sentenceArray[i]]) {
      results[sentenceArray[i]] = [i];
    } else {
      results[sentenceArray[i]].push(i);
    }
  }

  return results;
}

module.exports = letterPositions;