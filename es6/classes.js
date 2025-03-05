// 8. Classes
// ES6 introduced classes in JavaScript. 
// Classes in javascript can be used to create new Objects with the help of a constructor, each class can only have one constructor inside it.

class Animal{
    speak(){
        console.log("The animal makes a sound");
    }
}

const dog = new Animal();
const cat= new Animal();

dog.speak();
cat.speak();