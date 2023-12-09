let todos = [];

const createTodo = (text) => {
  todos.push(text);
  renderTodos(todos);
}

document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault();
  const text = e.target.elements.text.value.trim();

  if (text.length > 0) {
    createTodo(text);

    // Clear the value of the input "Something to do"
    e.target.elements.text.value = '';

    renderTodos(todos);

    // Log the todos array
    console.log(todos);
  }
});

const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('label');
  const containerEl = document.createElement('div');
  const todoText = document.createElement('span');

  // Setup the todo text
  todoText.textContent = todo;
  containerEl.appendChild(todoText);

  // Setup container
  todoEl.classList.add('list-item');
  containerEl.classList.add('list-item__container');
  todoEl.appendChild(containerEl);

  return todoEl;
}

// Assuming you have a container with id 'todos' in your HTML
const todosContainer = document.getElementById('todos');

const renderTodos = (todos) => {
  const todoList = document.querySelector('#todos');
  todoList.innerHTML = '';

  if (todos.length === 0) {
    const messageEl = document.createElement('p');
    messageEl.classList.add('empty-message');
    messageEl.textContent = 'There are no todos to show';
    todoList.appendChild(messageEl);
  } else {
    todos.forEach((todo) => {
      todoList.appendChild(generateTodoDOM(todo));
    });
  }
}

// Render the todos on the screen
renderTodos(todos);
