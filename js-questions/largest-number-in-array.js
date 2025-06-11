// Find the largest number in an array in JavaScript.

// Using the For loop

function largest(arr){
    //Suppose first element is the largest
    let large = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > large){
            // Update the larget if a bigger element is found
            large = arr[i];
        }
    }
    return large;
}
console.log(largest([111, 232, 76, 89]));



// Using the spread operator (...) or Math.max

function findLargest(arr){
    return Math.max(...arr);
}
console.log(findLargest([99, 5, 3, 100, 23]));