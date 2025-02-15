"use strict";
// function is TS
//By default TypeScript will assume all parameters are required
// a function that except string type arguments and returns string type value
function mergeFullname(first, middle, last) {
    return first + " " + middle + " " + last;
}
const fullname = mergeFullname("Sandeep", "Singh", "Nayal");
console.log(fullname);
//function that returns nothing- void type
function add(a, b) {
    console.log(a + b);
}
add(5, 9);
//Optional Parameters
function addThree(a, b, c) {
    console.log(a + b + (c || 0));
}
addThree(5, 3, 2); //calling function with all three arguments
addThree(5, 4); //calling function with only two arguments
//rest parameters
function calcsum(a, b, ...restArgs) {
    return a + b + restArgs.reduce((sum, item) => sum + item, 0);
}
const sumOfNumbers = calcsum(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(sumOfNumbers);
//types with arrow function
const isPalindrome = (num) => {
    const revNum = Number(num.toString().split("").reverse().join(""));
    return revNum === num;
};
const result = isPalindrome(12121);
console.log(result);
