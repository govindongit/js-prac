/**
 * What is Map?
A Map in JavaScript is a collection of key-value pairs where keys can be any data type. Unlike objects, keys in a Map maintain insertion order. 
It provides methods to set, get, delete, and iterate over elements efficiently, making it useful for data storage and retrieval tasks.
 */

// Map() constructor allows two ways to create a Map in JavaScript.
// Passing an Array to new Map().
// Create a Map and use Map.set().


let myMap = new Map();
let anotherMap = new Map([
    ['name', 'GFG'],
    ['age', 30],
    ['city', 'Mumbai']
])

console.log(anotherMap);