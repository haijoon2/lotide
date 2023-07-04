# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @haijoon2/lotide`

**Require it:**

`const _ = require('@haijoon2/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters()`: the function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

* `countOnly()`: this function should take in a collection of items and return counts for a specific subset of those items.

* `findKey()`: function that takes in an object and callback and returns the first key that meets the criteria specified in callback.

* `findKeyByValue(object, string)`: function that takes in an object and a value and returns the first key that corresponds to that value.

* `flatten()`: function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.

* `head()`: the function returns the first element from the array but returns undefined if the array is empty.

* `letterPositions()`: function that takes in a string and returns all indices of letter positions in the string.

* `map()`: function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.

* `middle()`: the function returns an array with either one element if the given array has odd number of elements or two elements if the given array has even number of elments. If the given array has less than 3 elements, it returns an empty array.

* `tail()`: the function returns new array with all the elements from original array except for the first one. If the original array has one or less element, it returned an empty array.

* `takeUntil()`: the function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.

* `without()`: the function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.