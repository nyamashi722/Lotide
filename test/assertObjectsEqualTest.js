const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected) === false) {
    console.log(`🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
}

const eqObjects = function (object1, object2) {
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

const eqArrays = function (firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return false;
    }
  }
  return true;
}

console.log(assertObjectsEqual({name: "may", likes: [1,2,3]}, {name: "may", likes: [1,2,3], age: 19}))

let shirt = {
  type: "shirt",
  colour: ["red", "blue"]
};

let shirt2 = {
  type: "shirt",
  colour: ["red", "blue", "yellow"]
};

assertObjectsEqual(shirt, shirt2);