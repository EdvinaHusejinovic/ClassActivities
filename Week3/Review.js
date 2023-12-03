// 3.1 - 3.4 Review with Michael Webb
// Create a function with 3 parameters. Create a variable Outside of the scope of the
// function, but do not assign it a value. Those parameters should be utilized in a string, and
// the string itself should be assigned to the variable that was created. Return the variable.
// Invoke the function and pass in 3 arguments. Print the variable.

// User provides their name
// on the web page, display their name and the weather. The weather will be temp and condition.

let greeting;

function weatherGreeting(name, temp, condition) {
  greeting = `Hello ${name}, it is currently ${temp} degrees and is ${condition}.`;
  return greeting;
}
console.log("Before Invocation" + greeting);
weatherGreeting("Edvina", 50, "Cloudy");
console.log("After Invocation" + greeting);
