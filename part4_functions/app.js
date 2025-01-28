// function is TS
//By default TypeScript will assume all parameters are required
// a function that except string type arguments and returns string type value
function mergeFullname(first, middle, last) {
    return first + " " + middle + " " + last;
}
var fullname = mergeFullname("Sandeep", "Singh", "Nayal");
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
function calcsum(a, b) {
    var restArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restArgs[_i - 2] = arguments[_i];
    }
    return a + b + restArgs.reduce(function (sum, item) { return sum + item; }, 0);
}
var sumOfNumbers = calcsum(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(sumOfNumbers);
//types with arrow function
var isPalindrome = function (num) {
    var revNum = Number(num.toString().split("").reverse().join(""));
    return revNum === num;
};
var result = isPalindrome(12121);
console.log(result);
