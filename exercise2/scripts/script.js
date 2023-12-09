document.addEventListener('DOMContentLoaded', function () {

  let createButton = document.querySelector('.button');

  // Log the element to the console
  console.log(createButton);

  // Change the background color of the button
  createButton.style.backgroundColor = 'red';

});

// I don't see anything in the console. I think it's because the script is running before the DOM is loaded. I added the DOMContentLoaded event listener to the script.js file and now I see the button in the console.