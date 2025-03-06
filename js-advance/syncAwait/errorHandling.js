// Error Handling in Async/Await
// JavaScript provides predefined arguments for handling promises: resolve and reject.

// resolve: Used when an asynchronous task is completed successfully.
// reject: Used when an asynchronous task fails, providing the reason for failure..

async function fetchData() {
    try{
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    }catch (error){
        console.error('Error fetching data:', error);
    }
}