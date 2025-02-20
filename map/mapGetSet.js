// Create a Map and use Map.set()
/*Example: In this example, 
an empty Map is created, and then key-value pairs are added using the Map.set() method. 
This approach is useful when you want to dynamically build a Map during runtime.*/

// Create an enpty map and use Map.set() to add key-value pair
const setMap= new Map();

// adding the key-value pair using Map.set()
setMap.set('Name','Govind');
setMap.set('Surname','Nagvanshi');
setMap.set('Designation', 'Software Developer');

console.log(setMap);

// Accessing values in the Map
console.log(setMap.get('Name'));
console.log(setMap.get('Surname'));
console.log(setMap.get('Designation'));
