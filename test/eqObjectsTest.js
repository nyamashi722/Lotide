const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴Assertion Failed: ${actual} !== ${expected}`);
  }
}

const eqArrays = function(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    console.log("good")
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let item in object1) {
      if (Array.isArray(object1[item]) && (Array.isArray(object2[item]))) {
        return eqArrays(object1[item], object2[item]);
      } else if (object1[item] !== object2[item]) {
        return false;
      }
    }
    return true;
  }
}

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue", "yellow"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), false);

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
