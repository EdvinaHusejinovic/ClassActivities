// print the outer HTML of the navigation bar
const navBarOuterHTML = document.querySelector(".nav-bar").outerHTML;
console.log(navBarOuterHTML);
// or
console.log(document.querySelector(".nav-bar").outerHTML);

// print the inner HTML of the navigation bar
const navBarInnerHTML = document.querySelector(".nav-bar").innerHTML;
console.log(navBarInnerHTML);
//or
console.log(document.querySelector(".nav-bar").innerHTML);

// print the text content of the #class-schedule-list element
const classScheduleTextContent = document.querySelector("#class-schedule-list")
  .textContent;
console.log(classScheduleTextContent);
//or
//document.querySelector("#class-schedule-list").textContent = "One";

// select the classList for the first class-week, then add the class "week-1"
//const firstClassWeek = document.querySelector(".class-week:first-child");
//firstClassWeek.classList.add("week-1");
// or
const firstClassWeek = document.querySelector(".class-week");
firstClassWeek.classList.add("week-1");

// select the img element and add a src attribute
const imgElement = document.querySelector("img");
imgElement.src =
  "https://live.staticflickr.com/5216/5520217922_93a02fae7c_b.jpg"; //url of image goes in " "

// change the font color of the h1 element
const h1Element = document.querySelector("h1");
h1Element.style.color = "red";
