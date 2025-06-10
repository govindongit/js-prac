// Write a Program to check whether a string is a palindrome string.

function isPalindrome(str){

    const reversed = str.split("").reverse("").join("");

    return str === reversed;  
}
 console.log(isPalindrome("Govind"));
