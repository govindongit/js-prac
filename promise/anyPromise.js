// 4. Promise.any() Method
// Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.

Promise.any([
    Promise.reject ("Task 1 failed"),
    Promise.reject ("Task 2 completed"),
    Promise.reject ("Task 3 Completed"),
])

.then((result) => console.log(result))
.catch((error) => console.error(error));