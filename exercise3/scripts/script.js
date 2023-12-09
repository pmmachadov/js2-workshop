document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded. DOMContentLoaded is a built-in event that is fired when the DOM is ready

  // Find the Create button by its class
  let createButton = document.querySelector(".button");

  // Change the background color to green
  createButton.style.backgroundColor = "green";

  // Attach a click event to the Create button
  createButton.addEventListener("click", createTodo);

  // Function to be invoked when the Create button is clicked
  function createTodo() {
    alert("Todo created!");
  }
});
