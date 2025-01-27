//number type
var age; //type annotation (explicitly assigning type)
age = 45;
console.log(typeof age);
//type inference - TS will automatically detect the type
var myage = 21; //TS has automatically infered the type as type number
console.log("typeof myage is ".concat(typeof myage));
//string types
var myname = "Sandeep Singh Nayal";
console.log(myname);
//boolean type
var isMarried = false;
console.log(Number(isMarried));
// there are two more types - symbol and bigint
