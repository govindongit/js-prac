// 6. Promise.reject() Method
// Promise.reject() Method returns a promise that immediately rejects with a given reason.

Promise.reject("Immediate Failure")
.catch((error)=>console.error(error));