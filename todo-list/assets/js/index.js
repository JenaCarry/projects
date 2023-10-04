const todoList = document.querySelector(".todo-list");
const form = document.querySelector("form");
const createTodo = document.querySelector("#create-todo");

const getAllTodos = () => JSON.parse(localStorage.getItem("todos")) ?? [];

const setAllTodos = (todos) =>
  localStorage.setItem("todos", JSON.stringify(todos));

const clearAllTodos = () => {
  todoList.innerHTML = "";
};

const updateDisplay = () => {
  clearAllTodos();
  const todos = getAllTodos();
  todos.map((todo, index) => createTodoItem(todo, index));
};

const completedTodo = (index) => {
  const todos = getAllTodos();
  todos[index].isCompleted = !todos[index].isCompleted;
  setAllTodos(todos);
  updateDisplay();
};

const deletedTodo = (index) => {
  const todos = getAllTodos();
  todos.splice(index, 1);
  setAllTodos(todos);
  updateDisplay();
};

const createTodoItem = (todo, index) => {
  const liElement = document.createElement("li");
  liElement.classList = `todo-item ${todo.isCompleted ? "completed" : ""}`;
  liElement.innerHTML = `
  <div class="todo-check">
    <ion-icon name="checkmark-outline"></ion-icon>
  </div>
  <h2>${todo.text}</h2>
  <button class="xmark">X</button>`;
  todoList.appendChild(liElement);
  liElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("xmark")) {
      deletedTodo(index);
    } else {
      completedTodo(index);
    }
  });
};

const createNewTodo = (e) => {
  if (e.key === "Enter") {
    if (createTodo.value !== "") {
      const todos = getAllTodos();
      todos.push({ text: createTodo.value, isCompleted: false });
      setAllTodos(todos);
      updateDisplay();
      createTodo.value = "";
    }
  }
};

form.addEventListener("submit", (e) => e.preventDefault());
createTodo.addEventListener("keypress", createNewTodo);

updateDisplay();
