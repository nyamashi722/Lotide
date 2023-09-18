function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
}

function tail(array) {
  let arrayTail = array.slice(1);
  return arrayTail;
}