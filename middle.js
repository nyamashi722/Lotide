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

function eqArrays(firstArray, secondArray) {
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

function middle(array) {
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