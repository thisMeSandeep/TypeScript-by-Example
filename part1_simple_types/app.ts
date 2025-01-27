//number type

let age: number; //type annotation (explicitly assigning type)
age = 45;
console.log(typeof age);

//type inference - TS will automatically detect the type
let myage = 21; //TS has automatically infered the type as type number
console.log(`typeof myage is ${typeof myage}`);


//string types
let myname:string="Sandeep Singh Nayal";
console.log(myname);


//boolean type
const isMarried:boolean=false;
console.log(Number(isMarried)) ;


// there are two more types - symbol and bigint