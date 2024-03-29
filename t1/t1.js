// array for todo list
let todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const addTodoButton = document.querySelector('.add-btn');
const todoForm = document.querySelector('form');

// open dialog
addTodoButton.addEventListener('click', () => {
  dialog.open = true;
});

// add todo from form data
todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const inputField = todoForm.querySelector('input');
  const taskName = inputField.value;
  const id = todoList[todoList.length - 1].id + 1;
  const newTodoObject = {
    id: id,
    task: taskName,
    completed: false,
  };
  todoList.push(newTodoObject);
  console.log(todoList);
  createTodoElement(newTodoObject);
});

// create starter todos
for (const todo of todoList) {
  createTodoElement(todo);
}

function createTodoElement(todo) {
  // Manage todos (check, uncheck, delete)
  const li = document.createElement('li');

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `todo-${todo.id}`;
  input.checked = todo.completed;
  input.addEventListener('change', event => {
    todo.completed = event.target.checked;
    console.log(todoList);
  });

  const label = document.createElement('label');
  label.textContent = todo.task;
  label.htmlFor = `todo-${todo.id}`;

  const button = document.createElement('button');
  button.className = 'delete-button';
  button.innerHTML = 'X';
  button.addEventListener('click', event => {
    const listElement = event.target.parentNode;
    //const todoIndex = todoList.findIndex(object => object.id === todo.id);
    todoList = todoList.filter(object => object.id !== todo.id);
    console.log(todoList);
    listElement.remove();
    /*if (todoIndex !== -1) {
      //todoList.splice(todoIndex, 1);
    }*/
  });
  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(button);
  ul.appendChild(li);
}
