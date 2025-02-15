//A type alias is a way to define a new name for a type. Instead of repeating complex types multiple times, you can define them once and reuse them.

// syntax- type AliasName=type;

type Id = number; // Id(first letter capital) is alias given to the type number

//using Id

let customerId: Id = 101; //customerId is of number type now.

let productId: Id;
productId = 201;

let userId: Id;
userId = 1559;

console.log(productId);
console.log(customerId);
console.log(userId);

//type alias with objects
type User = {
  id: number;
  name: string;
  email?: string; // Optional property
};

const user1: User = { id: 1, name: "John Doe" };
const user2: User = { id: 2, name: "Jane Doe", email: "jane@example.com" };

//type alias with Arrays

type StringArray = string[];
const namesOfStudents: StringArray = ["sandy", "Anuj"];

type NumberArray = Array<number>; //same as number[]
const marks: NumberArray = [23, 56, 78, 21, 89];

//passing object to  a function
type Users = {
  name: string;
  age: number;
};

const newUser: Users = {
  name: "Sandeep",
  age: 21,
};

function printUser({...obj}:Users): void {
    console.log(`name is ${obj.name} and age is ${obj.age}`)
}

printUser(newUser);
