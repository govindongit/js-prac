
// 1. Undefined to NaN:
const result = undefined + 10;
console.log(result); // NaN



// 2. Null to 0:
const sum = null + 10;
console.log(sum); //10



// 3. Boolean to Number:
const addition1 = true + 10; //true=1
const addition2 = false + 10; //false=0

console.log(addition1);
console.log(addition2);



// 4. String to Number
const str1 = '42';
const str2 = 'hello';

const numFromString1 = Number(str1);
const numFromString2 = Number(str2);

console.log(numFromString1);
console.log(numFromString2);



// 5. BigInts and Symbols
const symbolValue = Symbol('mySymbol');

const numFromSymbol = Number(symbolValue); // TypeError
console.log(numFromSymbol);
