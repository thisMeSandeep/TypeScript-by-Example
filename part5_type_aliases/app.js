//A type alias is a way to define a new name for a type. Instead of repeating complex types multiple times, you can define them once and reuse them.
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
//using Id
var customerId = 101; //customerId is of number type now.
var productId;
productId = 201;
var userId;
userId = 1559;
console.log(productId);
console.log(customerId);
console.log(userId);
var user1 = { id: 1, name: "John Doe" };
var user2 = { id: 2, name: "Jane Doe", email: "jane@example.com" };
var namesOfStudents = ["sandy", "Anuj"];
var marks = [23, 56, 78, 21, 89];
var newUser = {
    name: "Sandeep",
    age: 21,
};
function printUser(_a) {
    var obj = __rest(_a, []);
    console.log("name is ".concat(obj.name, " and age is ").concat(obj.age));
}
printUser(newUser);
