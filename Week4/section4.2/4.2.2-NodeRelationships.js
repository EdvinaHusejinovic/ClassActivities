// select the root node
const rootNode = document.querySelector("body");
console.log(rootNode);

// select the last child of the root node
const rootLastChild = document.querySelector("body").lastElementChild;
console.log(rootLastChild);
//or you can do below since line one has already called body
rootNode.lastElementChild;

// select all the children of the body element
rootLastChild.children;
//or this way
const bodyChildren = document.querySelector("body").children;
console.log(bodyChildren);

// select the next sibling of the h2 node
const nextSibling = document.querySelector("h2").nextElementSibling;
console.log(nextSibling);

// select the parent element of the h1 node
const parentElementOfH1 = document.querySelector("h1").parentElement;
console.log(parentElementOfH1);
