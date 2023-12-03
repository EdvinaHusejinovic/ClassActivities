// create a new unordered list (ul) element
const newUlElement = document.createElement("ul");
// document.querySelector("ul").appendChild(newUlElement);

// remove the paragraph element in the nav-bar
//const navBar = document.querySelector(".nav-bar");
//const paragraphToRemove = navBar.querySelector("p");
//paragraphToRemove.remove();
// or
document.querySelector("nav > p").remove();

// add your new ul element to the nav-bar
document.querySelector("nav").appendChild(newUl);

//navBar.appendChild(newUlElement);

// create two new list item (li) elements, and add some text to them
const newLiElement1 = document.createElement("li");
const newLiElement2 = document.createElement("li");

newLiElement1.textContent = "List Item 1 Text";
newLiElement2.textContent = "List Item 2 Text";

// add the li elements to the ul in the nav-bar
newUlElement.appendChild(newLiElement1);
newUlElement.appendChild(newLiElement2);
