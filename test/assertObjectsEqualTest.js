function assertObjectsEqual(actual, expected) {
  const inspect = require("util").inspect;
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    console.log(`🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    for (let item in actual) {
      if (Array.isArray(actual[item]) && (Array.isArray(expected[item]))) {
        if (eqArrays(actual[item], expected[item]) === true) {
          console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
        } else if (eqArrays(actual[item], expected[item]) === false) {
          console.log(`🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        }
        return;
      } else if (actual[item] !== expected[item]) {
        console.log(`🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        return;
      }
    }
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
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

let shirt = {
  type: "shirt",
  colour: ["red", "blue"]
};

let shirt2 = {
  type: "shirt",
  colour: ["red", "blue", "yellow"]
};

assertObjectsEqual(shirt, shirt2);