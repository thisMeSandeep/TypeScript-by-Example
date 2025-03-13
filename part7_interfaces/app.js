// interfaces are used to define the shape of objects including the types of properties and methods
var person1 = {
    name: "Chota bheem",
    age: 12,
    isMarried: false,
    greet: function () {
        return ("hello ".concat(this.name));
    },
};
console.log(person1.greet());
//function accepting an object of type UserData
function getUser(userObj) {
    console.log(userObj);
}
getUser({
    username: "Sandeep",
    email: "snayal",
    password: 1234,
    isAdmin: true,
});
