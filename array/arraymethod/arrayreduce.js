let a = [50, 20, 5, 3];
let sub = a.reduce(geeks);

function geeks(tot, num){
return tot - num;
}

console.log(sub);