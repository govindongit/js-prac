// Passing an Array to new Map()

// Create a Map by passing an Array of key-value pairs to the Map constructor
const arrayMap = new Map([
    ['key1','value1'],
    ['key2','value2'],
    ['key3','value3']
]);
// Accessing values in the Map
 console.log(arrayMap.get('key1'));
 console.log(arrayMap.get('key2'));
 console.log(arrayMap.get('key3'));
