const countLetters = function(input) {
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

module.exports = countLetters;