// 1. Promise.all() Method
// Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 Completed"),
    Promise.reject("Task 3 is failed!")
])
.then ((resut)=>console.log(result)) 
.catch((error)=>console.error(error));