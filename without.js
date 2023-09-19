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


function without(source, itemsToRemove) {
  let newArray = source.filter((element) => !itemsToRemove.includes(element)); 
  return newArray
}