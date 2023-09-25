# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nyamashiro722/lotide`

**Require it:**

`const _ = require('@nyamashiro722/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* function head(array): returns the first item in an array

* function tail(array): returns an array with every element except the first element

* function middle(array): returns the middle item of an array. If the array is an even number, returns an array of the middle two items

* function assertArraysEqual(actual, expected): assert whether two arrays are equal

* function assertEqual(actual, expected): assert whether two non-object values are equal

* function assertObjectsEqual(actual, expected): assert whether two objects are equal

* function countLetters(input): counts how many letters there are in a string input

* function countOnly(allItems, itemsToCount): takes in a collection of items and return counts for a specific subset of those items

* function eqArrays(firstArray, secondArray): returns whether the two input arrays are equal or not

* function eqObjects(firstObject, secondObject): returns whether the two input objects are equal or not

* function findKey(object, callback): takes an object and callback and returns the first key for which the callback returns a truthy value

* function findKeyByValue(object, value): searches for a key on an object where its value matches a given value

* function flatten(array): takes an array and "flattens" the array. Can handle an unlimited amount of nested arrays

* function letterPositions(sentence): returns all the indices (zero-based positions) in the string where each character is found

* function map(array, callback): returns a new array where items are a result of calling the callback function on each item of the array

* function takeUntil(array, callback): keeps collecting items from a provided array until the callback provided returns a truthy value.

* function without(source, itemsToRemove): returns a subset of a given array, removing unwanted elements