
let checkEven = new Promise((resolve,reject) => {
    let number = 4;
    if (number %2 === 0) resolve ("The number is even!");
    else reject ("ths number is odd!");
});
checkEven
.then((message) => console.log(message))
.catch((error) => console.log(error));