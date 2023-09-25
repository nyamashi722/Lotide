const flatten = function(array) {
  let result = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

module.exports = flatten;