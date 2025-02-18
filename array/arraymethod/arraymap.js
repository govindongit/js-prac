let a = [4, 9, 16, 25, 36, 49];
let sub = a.map(gonag);

function gonag(){
 return a.map(Math.sqrt);
}

console.log(sub);
