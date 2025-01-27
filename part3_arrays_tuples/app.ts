// arrays

//array of string
let fruits: string[] = ["Mango"];
fruits.push("Banana");
fruits.push("Grapes");
console.log(fruits);
let firstFruit: string | undefined = fruits.shift();
console.log(firstFruit);

//array of  number
let num: number[] = [12, 45, 34, 78, 23, 67];
let stringNum: string[] = num.map((item: number, index: number): string => {
  return item.toString();
});

console.log(stringNum);

//another method to declare arrays
let names: Array<string> = ["Sandeep", "Anuj"];
console.log(names);

// tuples -A tuple is a typed array with a pre-defined length and types for each index . Order matters

// important - fix length and types for each index , order

let tUser: [string, number, boolean];
tUser = ["Sandy", 21, true];
console.log(tUser);

tUser.push(" hey why i am able to push new element into the fixed tuple??"); // no error !! the reason-Tuples are array under the hood and Tuples only have strongly defined types for the initial values:
tUser.shift();
console.log(tUser);

// use 'readonly' to prevent this behaviour

const readonlyTUser: readonly [string, number, boolean] = ["Sandy", 21, true];
console.log(readonlyTUser);
// readonlyTUser.push("Apple")  // this will show an error , as we have defined our tuple as readonly
