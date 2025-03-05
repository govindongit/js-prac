// Async Arrow Functions
// Arrow functions can be made asynchronous by adding the async keyword before the parameter list.

const fetchData = async () =>{
    const data = await fetch('https://api.example.com/data');
    return data.json();
}