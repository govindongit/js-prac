let a = [1, 2, 3, 4, 5];

let n1 = a.every(
    function(element){
        return element > 0;
    }
)

let n2 = a.some(
    function(element){
        return element < 0;
    }
)

console.log(n1);
console.log(n2)