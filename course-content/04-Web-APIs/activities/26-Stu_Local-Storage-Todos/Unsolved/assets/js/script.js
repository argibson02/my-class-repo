var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

// TODO: What is the purpose of this function?
// This function renders the todos
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // fist on , sets it to an empty string. Second, gets the length of the todo stirng
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;
  
  // TODO: Describe the functionality of the following `for` loop.
  // This function creates the todo list items/buttons at appeands them to the greater to do list. 
  // using the lenght of the todo array to drive this
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// creates an ojbects based oof stored todos
function init() {
  // TODO: What is the purpose of the following line of code?
    // the JSON converts local storage todo items in to an obejct
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  // if is the stored todos is not empty, we will render the todos.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // sets off the renderTodos function 
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // the JSON stringify makes our todos into and then stores them locally
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
//
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
