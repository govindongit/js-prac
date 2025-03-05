// the behavior of the this keyword varies depending on how the function is invoked.


function greet(){
    console.log('hello, my name is '+ this.name);
}

const person = {
    name:'Govind',
    sayHello: greet
};

const anotherPerson = {
    name: 'Jatin'
}

greet();
person.sayHello();
greet.call(anotherPerson);
