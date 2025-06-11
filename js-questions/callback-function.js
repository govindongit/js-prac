// 5. Write a Program to use a callback function?


function greet (name, callback){
    callback(`Hello, ${name}!`);
}
greet('Govind', message => console.log(message));



/*
💡 Use Case: User Registration System

In a web application, when a user registers, we want to:

Save their data (simulate database operation).
Then send them a welcome email.
Sending the email is done after saving, using a callback function.
*/
