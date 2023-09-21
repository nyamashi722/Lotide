const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
}

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}

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