// When we call a function as a method of the object this keyword refers to the calling object

const person = {
    name: "ram",
    age:22,
    greet:function(){
        return `Hello ${this.name}, you are ${this.age} years old`
    }
}

console.log(person.greet());