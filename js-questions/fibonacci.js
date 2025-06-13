// 17. Write a Program to print Fibonacci sequence up to n terms?


// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.



function fibonacci (n){
    let num1 = 0, num2 = 1, nextNum;
    console.log("Febonacci Sequence:")

    for(let i = 1; i<= n; i++){
        console.log(num1)
        nextNum = num1 + num2;
        num1 = num2;
        num2 = nextNum;
    }
}

fibonacci(7);