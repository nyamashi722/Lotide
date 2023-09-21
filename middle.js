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

const middle = function(array) {
  let middleArray = [];
  if (array.length < 3) {
    return middleArray;
  }
  if (array.length % 2 === 0) {
    middleArray.push(array[array.length / 2] - 1);
    middleArray.push(array[(array.length / 2)]);
    return middleArray;
  } else {
    middleArray.push(array[Math.ceil(array.length / 2) - 1]);
    return middleArray;
  }
}