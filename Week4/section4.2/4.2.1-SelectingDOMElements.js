// select all unordered list (ul) elements
const queryUL = document.querySelectorAll("ul"); // exact result
console.log(queryUL);
// can do both query or get for this activity
const byTagUL = document.getElementsByTagName("ul"); // not exact return
console.log(byTagUL);

// select all elements with the class "class-week"
document.querySelectorAll(".class-week");
// or
const classWeek = document.getElementsByClassName("class-week");
console.log(classWeek);

// select all elements with the class "nav-bar"
document.querySelectorAll(".nav-bar");
// or
const navBar = document.getElementsByClassName("nav-bar");
console.log(navBar);

// select the element with the id "dog-picture" and save it to a variable
const dogPicture = document.getElementById("dog-picture");
console.log(dogPicture);
