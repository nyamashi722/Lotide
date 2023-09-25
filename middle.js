const middle = function(array) {
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

module.exports = middle;