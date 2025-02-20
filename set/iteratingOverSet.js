// Approach 1: By iterating over the se


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

// Creating a new array to store the element
let myarr = [];

for (let element of myset){
    myarr.push(element);
}
console.log(myarr);

// Sort the array (default it will sort
// elements in ascending order)
myarr.sort();
console.log(myarr);

// Clear the entire set using clear() method
myset.clear();
console.log(myset);


for (let element of myarr){
     // Array elements pushed into the set
    myset.add(element);
}

console.log(myset);



