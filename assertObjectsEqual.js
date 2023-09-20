function assertObjectsEqual(actual, expected) {
  const inspect = require("util").inspect;
  if (Object.keys(actual).length !== Object.keys(expected).length) {
    console.log(`🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    for (let item in actual) {
      if (Array.isArray(actual[item]) && (Array.isArray(expected[item]))) {
        if (eqArrays(actual[item], expected[item]) === true) {
          console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
        } else {
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

function assertArraysEqual(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
        return;
      }
    }
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
}