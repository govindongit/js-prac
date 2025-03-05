const person ={
    name:"Govind",
    greet(){
        return `Hello Dear, ${this.name}`
    }
};
console.log(person.name);


/**The ‘this keyword’ in JavaScript refers to the object to which it belongs. Its value is determined by how a function is called, making it a dynamic reference. 
 * The ‘this’ keyword is a powerful and fundamental concept used to access properties and methods of an object, allowing for more flexible and reusable code. */