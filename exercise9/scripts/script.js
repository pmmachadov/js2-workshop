let todos = [];

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

const renderTodos = (todos) => {
  const todoList = document.querySelector('#todos');
  todoList.innerHTML = '';

  if (todos.length > 0) {
    todos.forEach((todo) => {
      todoList.appendChild(generateTodoDOM(todo));
    });
  } else {
    const messageEl = document.createElement('p');
    messageEl.classList.add('empty-message');
    messageEl.textContent = 'There are no todos to show';
    todoList.appendChild(messageEl);
  }
}

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

    // Log the todos array
    console.log(todos);
  }
});

// Assuming you have a container with id 'todos' in your HTML
const todosContainer = document.getElementById('todos');

// Render the todos on the screen
renderTodos(todos);

const removeTodo = (todoEl) => {
  const todoIndex = todos.findIndex((todo) => {
    return todo.toLowerCase() === todoEl.textContent.toLowerCase();
  });

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

