const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected) === false) {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
}

const eqArrays = function (firstArray, secondArray) {
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