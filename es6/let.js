// The let Keyword
// The let variables are mutable i.e. their values can be changed.
//  key differences like scoping which makes it a better option when compared to var.

let n = 10;
{
    let n = 2; // Block-scoped variable 
    console.log(n);
}
console.log(n);