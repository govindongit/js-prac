// Approach 3: Using Spread Operator and Sort Method

// Initialize a Set object
// using Set() constructor
let myset = new Set()

// Insert new elements in the
// set using add() method
myset.add(3);
myset.add(2);
myset.add(9);
myset.add(6);

console.log(myset);

const sortedArray = [...myset].sort();
const newset = new Set(sortedArray);
console.log(newset);



