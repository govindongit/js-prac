// 15. Write a Program to find a sum of an array?

function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(sumArray([10, 20, 30, 25, 39]));
