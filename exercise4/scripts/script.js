document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded

  // Access the form with id #new-todo
  const newTodoForm = document.querySelector("#new-todo");

  // Add a submit event to the form
  newTodoForm.addEventListener("submit", function (e) {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Trim the value of the input named "text"
    const text = e.target.elements.text.value.trim();

    // Log the trimmed text to the console
    console.log(text);
  });
});
