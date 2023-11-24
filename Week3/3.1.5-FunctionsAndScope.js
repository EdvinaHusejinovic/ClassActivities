// wrap the code below in a function called "addNumbersFrom1To100" and return the total
// ! do not use console.log inside your function
function addNumbersFrom1To100() {
  let total = 0;
  for (let i = 1; i <= 100; i++) {
    total += i;
  }
  return total;
}

// invoke the function and console.log its value
console.log(addNumbersFrom1To100());

// try to print the variable "total" outside the function
// The variable "total" is scoped within the function, so attempting to print it outside the function will result in an error.
// Uncommenting the line below will result in an error.
// ? what do you expect ?
// console.log(total);

// examine the code below,
// ? which console.log statement will not print when you invoke the parentAndChildScope function ?
// The console.log("Parent Scope, Child Variable:", childVariable); statement will not
// print when you invoke the parentAndChildScope function
function childScope(param) {
  const childVariable = "I am in the child's scope";
  console.log("Child Scope, Parent Variable:", param);
  console.log("Child Scope, Child Variable:", childVariable);
}

function parentAndChildScope() {
  const parentVariable = "I am in the parent's scope";
  childScope(parentVariable);
  console.log("Parent Scope, Parent Variable:", parentVariable);
  console.log("Parent Scope, Child Variable:", childVariable);
}
// This line will result in an error because "childVariable" is not defined in the scope of parentAndChildScope.
// Uncommenting the line below will result in an error.
// console.log("Parent Scope, Child Variable:", childVariable);

// Invoke the parentAndChildScope function
parentAndChildScope();
