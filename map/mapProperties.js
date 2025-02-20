// Properties of JavaScript Map
/*
set(key, val) : Adds or updates an element with a specified key and value.
get(key) : Returns the value associated with the specified key.
has(key) : Returns a boolean indicating whether an element with the specified key exists.
delete(key) : Removes the element with the specified key.
clear(): Removes all elements from the Map.
size: Returns the number of key-value pairs in the Map.
*/

// Create a new Map
const myMap = new Map();

// 1. set(key, value)
myMap.set('name', 'GFG');
myMap.set('age', 25);
myMap.set(1, 'One'); 

console.log(myMap);


// 2. get(key)
console.log(myMap.get('name')); 
console.log(myMap.get('age')); 
console.log(myMap.get(1)); 
console.log(myMap.get('invalidKey')); 

// 3. has(key)
console.log(myMap.has('name'));
console.log(myMap.has('address')); 
console.log(myMap.has(1)); 

// 4. delete(key)
myMap.delete('age');
console.log(myMap.has('age')); 
console.log(myMap);

// 5. clear()
myMap.clear();
console.log(myMap); // Output: Map {}

console.log(myMap.size); 

myMap.set('a', 1);
myMap.set('b', 2);
console.log(myMap.size); 
console.log(myMap);
