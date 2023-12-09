let todos = []

const createTodo = (text) => {
  todos.push(text)
}

document.querySelector('#new-todo').addEventListener('submit', (e) => {
  e.preventDefault()
  const text = e.target.elements.text.value.trim()

  if (text.length > 0) {
    createTodo(text)

    // Clear the value of the input "Something to do"
    e.target.elements.text.value = ''

    // Log the todos array
    console.log(todos)
  }
})
