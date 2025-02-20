// 2. Promise.allSettled() Method
// Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.

Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 Rejected"),
    Promise.resolve("Task 3 completed")
])
.then((results)=>console.log(results));