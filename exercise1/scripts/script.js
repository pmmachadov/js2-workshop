alert("hello!");

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault();
    const text = e.target.elements.text.value.trim();
    console.log(e);
    alert(text);
})

// This JavaScript code snippet is designed to interact with a web page.It begins by displaying an alert box with the message "hello!" when the script is loaded.

// The next part of the code is an event listener attached to an HTML element with the id 'new-todo'.This event listener is set to trigger when the 'submit' event is fired, which typically happens when a form is submitted.

// The event listener is an arrow function that takes an event object 'e' as a parameter. Inside this function, e.preventDefault(); is called to prevent the default action of the event.In the case of a form submission, the default action is to send a request to the server and reload the page.By preventing this, the page stays on the client side, allowing for a smoother user experience.

//     Next, the value of the form input field named 'text' is retrieved and trimmed of any leading or trailing white spaces.This value is stored in the constant 'text'.

//         Finally, an alert box is displayed with the value of 'text'.This is likely a placeholder for further code that will do something more useful with the input, such as adding a new to -do item to a list.