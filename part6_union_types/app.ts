// union types allow you to define a variable that can hold multiple types

let password:string | number ; // password can be of string type or number type only

password="xyz";  //string type
console.log(password);
password=123; //number type
console.log(password); 

// password=true; gives an error 


type FileInput = string | File;  

function processFile(input: FileInput): void {
  if (typeof input === "string") {
    console.log("Processing file at path:", input);
  } else {
    console.log("Processing file:", input.name);
  }
}

processFile("db.txt")