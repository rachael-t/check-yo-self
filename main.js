//variables
var taskTitleInput = document.querySelector('#task-title-input');
var itemInput = document.querySelector('#task-item-input');
var newItemList = document.querySelector('.newly-added-tasks');
var newTaskItemButton = document.querySelector('.new-task-item-button');
var newToDoList = [];
var makeTaskButton = document.querySelector('.make-task-button');
var currentTasks = document.querySelector('.current-tasks');
var clearAllButton = document.querySelector('.clear-button');


//event listeners
newTaskItemButton.addEventListener('click', checkAside);
newItemList.addEventListener('click', removeNewTaskItem);
makeTaskButton.addEventListener('click', makeTaskList);
clearAllButton.addEventListener('click', clearInputFields);
window.onload = onPageLoad;

//functions
function checkAside() {
  var text = itemInput.value;
  var id = Date.now();
  var title = taskTitleInput.value;
  if (text !== '' && title !== '') {
    newTaskAdded(text, id);
    clearAllButton.disabled = false;
  }
}

function newTaskAdded(text, id) {
  var task = new Task (text, id);
  newToDoList.push(task);
  console.log(newToDoList);
  itemInput.value = '';
  displayNewTaskItems(text, id);
}

function displayNewTaskItems(text, id) {
  for (var i = 0; i < newToDoList.length; i++) {
  }
  console.log(id);
  newItemList.innerHTML += `
  <li class="todo-item" data-key="${id}">
    <img class="item-delete-button" src="assets/delete.svg" alt="circle with X in the middle">
    <p class="item-listed">${text}</p>
  </li>`
}

//refactor naming between this and the next one
function removeNewTaskItem(event) {
  if (event.target.className === 'item-delete-button') {
    var itemDataKey = event.target.parentElement.getAttribute('data-key');
    deleteToDo(itemDataKey);
  }
}

function deleteToDo(itemDataKey) {
  for (var i = 0; i < newToDoList.length; i++) {
    if (newToDoList[i].taskId == itemDataKey) {
      newToDoList.splice(i, 1);
      break;
    }
  }
  console.log(newToDoList);
  var itemToDelete = document.querySelector(`[data-key="${itemDataKey}"]`);
  itemToDelete.remove();
}

function makeTaskList() {
  var title = taskTitleInput.value;
  if (title != '' && newToDoList != '') {
    var uniqueID = Date.now();
    var toDoList = new ToDoList(uniqueID, title, newToDoList);
    displayNewToDoCard(toDoList);
    clearForm();
  } else makeTaskButton.disabled = true;
}

function clearForm() {
  taskTitleInput.value = '';
  itemInput.value = '';
  document.querySelectorAll('.todo-item').forEach(item => item.parentNode.removeChild(item));
}

function displayNewToDoCard(toDoList) {
  console.log(toDoList);
  currentTasks.innerHTML += `
  <div class="todo-list-card">
    <h2>${toDoList.title}</h2>
    <div class="task-holder" id="${toDoList.id}">
    </div>
    <div class="task-actions">
      <div class="task-urgent">
        <img class="urgent-button" src="assets/urgent.svg" alt="lightening bolt">
        <p class="task-actions-text">Urgent</p>
      </div>
      <div class="task-delete">
        <img class="delete-button" src="assets/delete.svg" alt="circle with X in the middle">
        <p class="task-actions-text">Delete</p>
      </div>
    </div>`
  var taskHolder = document.getElementById(`${toDoList.id}`);
  for (var i = 0; i < toDoList.tasks.length; i++) {
    taskHolder.innerHTML += `
    <div class="task-item">
      <img class="search-button" id="${toDoList.tasks[i].taskId}" src="assets/checkbox.svg" alt="empty circle">
      <p>${toDoList.tasks[i].taskName}</p>
    </div>`
  }
  newToDoList = [];
  toDoList.saveToStorage(toDoList);
}

function onPageLoad() {
  disableClearButton();
  retrieveToDoLists();
}

function disableClearButton() {
  if (taskTitleInput.value === "" && newToDoList.length === 0) {
    console.log('it worked');
    clearAllButton.disabled = true;
  }
}

function retrieveToDoLists() {
  var retrievedToDos = localStorage.getItem(`toDos`);
  var stringifiedSaved = JSON.parse(retrievedToDos);
  toDos = stringifiedSaved;
  displaySavedToDos(toDos);
}

function displaySavedToDos(toDos) {
  currentTasks.innerHTML += `
  <div class="todo-list-card">
    <h2>${toDos.title}</h2>
    <div class="task-holder" id="${toDos.id}">
    </div>
    <div class="task-actions">
      <div class="task-urgent">
        <img class="urgent-button" src="assets/urgent.svg" alt="lightening bolt">
        <p class="task-actions-text">Urgent</p>
      </div>
      <div class="task-delete">
        <img class="delete-button" src="assets/delete.svg" alt="circle with X in the middle">
        <p class="task-actions-text">Delete</p>
      </div>
    </div>`
    var taskHolder = document.getElementById(`${toDos.id}`);
    for (var i = 0; i < toDos.tasks.length; i++) {
      taskHolder.innerHTML += `
      <div class="task-item">
        <img class="search-button" id="${toDos.tasks[i].taskId}" src="assets/checkbox.svg" alt="empty circle">
        <p>${toDos.tasks[i].taskName}</p>
      </div>`
    }
}

function clearInputFields() {
  taskTitleInput.value = '';
  itemInput.value = '';
  document.querySelectorAll('.todo-item').forEach(item => item.parentNode.removeChild(item));
  newToDoList = [];
}
