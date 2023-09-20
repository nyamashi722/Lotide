function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
}

function countLetters(input) {
  let lowerCaseInput = input.replace(/\W/g, "").toLowerCase();
  let result = {};

  for (let char of lowerCaseInput) {
    if (!result[char]) {
      result[char] = 1
    } else {
      result[char]++
    }
  }
  return result
}