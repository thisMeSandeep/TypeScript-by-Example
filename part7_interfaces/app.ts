// interfaces are used to define the shape of objects including the types of properties and methods

interface Person {
  name: string;
  age: number;
  isMarried: boolean;
  greet(): string; // function greet of return type string
}

let person1: Person = {
  name: "Chota bheem",
  age: 12,
  isMarried: false,
  greet() {
   return(`hello ${this.name}`);
  },
};

console.log(person1.greet());

//another example
interface UserData {
  username: string;
  email: string;
  password: number;
  isAdmin: boolean;
}

//function accepting an object of type UserData
function getUser(userObj: UserData): void {
  console.log(userObj);
}
getUser({
  username: "Sandeep",
  email: "snayal",
  password: 1234,
  isAdmin: true,
});
