// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let strVar = "Hello, world";
let numVar = 34;
let boolVar = true;
let undefVar;
let nullVar = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof strVar);
console.log(typeof numVar);
console.log(typeof boolVar);
console.log(typeof undefVar);
console.log(typeof nullVar);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let templateVar = `"This is a ${strVar} and it has a value of "${numVar}".`;
// reassign the value of the variable that references "null"
nullVar = "I am learning Coding";
// print the value and its type
console.log(nullVar);
console.log(typeof nullVar);
// print a variable that causes a ReferenceError
//console.log(undefinedVar); // Uncommenting this line would cause a ReferenceError
// alter the previous line to no longer cause a ReferenceError
var undefinedVar = "I am defined now.";
console.log(undefinedVar);
