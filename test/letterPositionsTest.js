function assertArraysEqual(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    console.log(`🔴Assertion Failed: ${firstArray} !== ${secondArray}`);
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      if (firstArray[i] !== secondArray[i]) {
        console.log(`🔴Assertion Failed: ${firstArray} !== ${secondArray}`);
        return;
      }
    }
    console.log(`✅Assertion Passed: ${firstArray} === ${secondArray}`);
  }
}

function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
}

function letterPositions(sentence) {
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

assertArraysEqual(letterPositions("hello world").l, [2, 3, 9]);