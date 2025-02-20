// Approach 2. Using Array.from() Method


// Initialize a Set object
// using Set() constructor
let myset = new Set()

// Insert new elements in the
// set using add() method
myset.add(3);
myset.add(2);
myset.add(9);
myset.add(6);

// Print the values stored in set
console.log(myset);

// Create a new array to store set elements
let myarr = [];

myArray = Array.from(myset)
myArray.sort()
console.log(myArray)
myset.clear()
myset = new Set(myArray);
console.log(myset)
