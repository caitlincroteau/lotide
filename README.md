# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @caitlincroteau/lotide`

**Require it:**

`const _ = require('@caitlincroteau/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: compares two arrays and prints out a message telling us if they match or not.
* `assertEqual()`: compares two values and prints out a message telling us if they match or not.
* `assertObjectsEqual()`: compares two objects and prints out a message telling us if they match or not.
* `countLetters()`: takes in a sentence, as a string, and returns a count of each of the letters in that sentence.
* `countOnly()`: will be given an array and an object. Will return an object containing counts of everything that the input object listed.
* `eqArrays()`: takes in two arrays. Returns true or false based on a perfect match.
* `eqObjects()`: takes in two objects and returns true or false based on a perfect match.
* `findKey()`: takes in an object and a callback. returns the first key for which the callback returns a truthy value. If no key is found, it returns undefined.
* `findKeyByValue()`: takes in an object and a value. Returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `flatten()`: will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array. Only handles one level of nesting.
* `head()`: returns first item in array. An array with only one element should still yield that one element as its head. An empty array should yield undefined as its head
* `letterPositions()`: will return all the indices \(zero-based positions\) in the string where each character is found.
* `map()`: takes an array and a callback function. returns a new array based on the results of the callback function.
* `middle()`: takes in an array and returns the middle-most element\(s\) of the given array. For arrays with one or two elements, there is no middle. Return an empty array. For arrays with odd number of elements, an array containing a single middle element should be returned. For arrays with an even number of elements, an array containing the two elements in the middle should be returned.
* `tail()`: returns the "tail" of an array: everything except for the first item \(head\) - of the provided array. An array with only one element should yield an empty array for its tail. An empty array should yield an empty array for its tail
* `takeUntil()`: takes in an array and a callback. returns a "slice of the array with elements taken from the beginning."
* `without()`: returns a subset of a given array, removing unwanted elements. Should return a new array and not modify the original array.