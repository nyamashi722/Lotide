const eqArrays = require("./eqArrays")

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === false) {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  }
}

module.exports = assertArraysEqual;