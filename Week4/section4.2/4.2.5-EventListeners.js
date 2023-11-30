// add an event listener to the dog picture that listens for a "click" and gives an alert
const dogPicture = document.getElementById("dog-picture");

dogPicture.addEventListener("click", () => {
  alert("The dog picture was clicked!");
});
// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
const classScheduleListItems = document.querySelectorAll(
  "#class-schedule-list li"
);

classScheduleListItems.forEach(listItem => {
  listItem.addEventListener("mouseover", () => {
    listItem.style.backgroundColor = "lightgray";
  });

  // Reset the background color on mouseout (optional)
  listItem.addEventListener("mouseout", () => {
    listItem.style.backgroundColor = "";
  });
});

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
document.addEventListener("keydown", event => {
  console.log("Key pressed:", event.key);
});
