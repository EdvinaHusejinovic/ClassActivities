// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
function myFunction(param1, param2) {
  console.log(param1, param2);
  return param1 + param2;
}

// invoke the function and pass in two numbers
myFunction(1, 2);
//console.log(myFunction(1, 2)); // will print the value

// invoke the function and pass in more than two numbers
myFunction(3, 4, 5, 6);
//console.log(myFunction(3, 4, 5, 6)); // will print the value

// invoke the function and pass in only one number
myFunction(6);
//console.log(myFunction(6)); // will print the value

// change the function to set default values for the parameters
function functionWithTwoDefaultParams(param1 = "a", param2 = "e") {
  console.log(param1, param2);
  return param1 + param2;
}

// again, invoke the function and pass in only one number
functionWithTwoDefaultParams(2);
console.log("Without arguments:" + functionWithTwoDefaultParams());
console.log("With arguments:" + functionWithTwoDefaultParams(1, 2));

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParam(param1, param2, ...myRestParam) {
  console.log(param1, param2);
  console.log(myRestParam);
  return param1 + param2;
}

// again, invoke the function and pass in more than two numbers
functionWithRestParam(1, 2, 3, 4, 5);
// create a variable let value = functionWithRestParam(1, 2, 3, 4, 5); console.log(value);
