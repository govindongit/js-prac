let a = ["Govind", "javascript", "mobile", "car"]; // Creating an Array and Initializing with Values    
console.log(a[2]);

// Accessing First Array Elements
let fname =  a[0];
console.log("first name:", fname);

// Accessing Last Array Elements
lst = a[a.length-1];
console.log("last element:", lst);

// Modifying the Array Elements
console.log(a)
a[1]="java";
console.log(a);

// Adding Elements to the Array
// Add Element to the end of Array
a.push("Bike");

// Add Element to the beginning
a.unshift("Web Development");
console.log(a);

// Removing Elements from an Array
console.log("Removing Elements from an Array");
console.log("Original Array:", a);

// Removes and returns the last element
let last= a.pop();
console.log(last);
console.log("After Removing the last: " + a);

// Removes and returns the first element
let firstele = a.shift();
console.log(firstele);
console.log("After Removing the First: " + a);

// Removes 2 elements starting from index 1
a.splice(1,2);
console.log("After Removing 2 elements starting from index 1: " + a);