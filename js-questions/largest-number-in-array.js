// Find the largest number in an array in JavaScript.

// Using the For loop

// function largestNumber(arr){
//     let largest = arr[0];
//     for (let i = 0 ; i < arr.lenght ; i++){
//         if (arr[i] > largest){
//             largest = arr[i];
//         }
//     }
//     return largest;
// }

// console.log(largestNumber([20, 30, 17, 1]));



// Using the spread operator (...) or Math.max

function findLargest(arr2){
    return Math.max(...arr2);
}
console.log(findLargest[99, 5, 3, 100, 23]);