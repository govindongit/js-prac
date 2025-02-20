// 7. Promise.finally() Method
// Promise.finally() Method runs a cleanup or final code block regardless of the promise’s result (fulfilled or rejected).


Promise.resolve("Task Completed")
.then((result)=>console.log(result))
.catch((error) => console.error(error))
.finally(()=>console.log("Cleanup Completed!"));