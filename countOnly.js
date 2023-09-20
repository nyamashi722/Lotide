function assertEqual(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
}

function countOnly(allItems, itemsToCount) {
  const results = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 1
      } else {
        results[item]++
      }
    console.log(results[item])
    }
  }
  return results;
}