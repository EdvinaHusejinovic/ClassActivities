let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = 0;
y = [];
z = null;

// print x, y, and z
console.log(x);
console.log(y);
console.log(z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// Won't work because const variables cannot be reassigned.

// using BRACKET NOTATION, assign a value to b
b[0] = "someValue";

// using DOT NOTATION, assign a PROPERTY to c
c.newProperty = "someProperty";

// using DOT NOTATION, assign a METHOD to c
c.newMethod = function() {
  console.log("This is a method");
};

// using BRACKET NOTATION, call the method in c
c["newMethod"]();

// print a, b, and c
console.log(a);
console.log(b);
console.log(c);
