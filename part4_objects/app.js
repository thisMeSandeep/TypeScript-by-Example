"use strict";
// Assigning types to each property of an object
// Define an object type with specific properties and their types
let user;
// Assign values to the user object according to the defined types
user = {
    userName: "Sandy", // Assigning string type value to userName
    email: "snayal50", // Assigning string type value to email
    password: 123456, // Assigning number type value to password
    isAdmin: true, // Assigning boolean type value to isAdmin
    // isVarified is not assigned, which is fine because it's optional
};
// Accessing properties of the user object
console.log(user["password"]); // Accessing password property using bracket notation
console.log(user.email); // Accessing email property using dot notation
