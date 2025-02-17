// union types allow you to define a variable that can hold multiple types
var password; // password can be of string type or number type only
password = "xyz"; //string type
console.log(password);
password = 123; //number type
console.log(password);
function processFile(input) {
    if (typeof input === "string") {
        console.log("Processing file at path:", input);
    }
    else {
        console.log("Processing file:", input.name);
    }
}
processFile("db.txt");
