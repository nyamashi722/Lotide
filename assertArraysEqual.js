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