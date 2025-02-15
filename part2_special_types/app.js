"use strict";
// special types - do not refer to any specific type of data
// any type  -any is a type that disables type checking and effectively allows all types to be used.Try to avoid using it or use it only when you are not sure what type of data is going to be stored in a variable
let data;
data = 21;
console.log(data);
data = "Assigning string type !";
console.log(data);
// unknown type - requires type checking before performing operations, use it instead of 'any'
let unknownData;
unknownData = 21;
console.log(unknownData);
unknownData = "Assigning string type!";
console.log(unknownData);
// Type checking before performing operations
if (typeof unknownData === "string") {
    console.log(unknownData.toUpperCase());
}
else {
    console.log("unknownData is not a string");
}
//type undefined and null - similar to javascript
let gender;
console.log(typeof gender);
let salary = null;
// salary = 5000;   this is a error in TS , can't assign number type to null
console.log(salary);
//better way to use null type
let mySalary = null; //initially null
mySalary = 100000; //assigning number 
console.log(mySalary);
mySalary = null; // assigning null again
console.log(mySalary);
