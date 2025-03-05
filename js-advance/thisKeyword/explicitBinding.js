// Explicit Binding
// When we explicitly bind this keyword using the call(), bind(), or apply() method then this keyword default reference is changed to the object called using the above-specified methods.


function ageVerify(){
    if (this.age > 18){
        console.log("Yes, you can drive!")
    }else{
        console.log("Sorry, you can't drive.")
    }
}

const per1 = {age:21};
const per2 = {age:16};

ageVerify.call(per1);
ageVerify.call(per2);
