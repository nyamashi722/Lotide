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