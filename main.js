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
currentTasks.addEventListener('click', editToDoCard);
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

//this is removing it visually from the DOM
function removeNewTaskItem(event) {
  if (event.target.className === 'item-delete-button') {
    var itemDataKey = event.target.parentElement.getAttribute('data-key');
  } deleteToDo(itemDataKey);
  var itemToDelete = document.querySelector(`[data-key="${itemDataKey}"]`);
  itemToDelete.remove();
}
//this is what removes it from the array
function deleteToDo(itemDataKey) {
  var cleanDataKey = parseInt(itemDataKey)
  for (var i = 0; i < newToDoList.length; i++) {
    if (newToDoList[i].taskId === cleanDataKey) {
      newToDoList.splice(i, 1);
      break;
    }
  }
}

function makeTaskList() {
  var title = taskTitleInput.value;
  if (title != '' && newToDoList != '') {
    var uniqueID = Date.now();
    var toDoList = new ToDoList(uniqueID, title, newToDoList);
    toDoList.saveToStorage();
    displayNewToDoCard(toDoList);
    clearForm();
  } else makeTaskButton.disabled = true;
}

function clearForm() {
  newToDoList = [];
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
}

function onPageLoad() {
  disableClearButton();
  retrieveToDoLists();
}

function disableClearButton() {
  if (taskTitleInput.value === "" && newToDoList.length === 0) {
    clearAllButton.disabled = true;
  }
}

function retrieveToDoLists() {
  var retrievedToDos = localStorage.getItem(`toDos`);
  if (!retrievedToDos) {
    return;
  }
  var toDos = JSON.parse(retrievedToDos);
  for (var i = 0; i < toDos.length; i++) {
    displayToDoCard(toDos[i]);
  }
}

function displayToDoCard(toDoCard) {
  currentTasks.innerHTML += `
  <div class="todo-list-card" id="${toDoCard.id}">
    <h2>${toDoCard.title}</h2>
    <div class="task-holder">
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
    var taskHolder = document.getElementById(`${toDoCard.id}`);
    for (var i = 0; i < toDoCard.tasks.length; i++) {
      taskHolder.innerHTML += `
      <div class="task-item">
        <img class="search-button" id="${toDoCard.tasks[i].taskId}" src="assets/checkbox.svg" alt="empty circle">
        <p>${toDoCard.tasks[i].taskName}</p>
      </div>`
    }
}

function clearInputFields() {
  taskTitleInput.value = '';
  itemInput.value = '';
  document.querySelectorAll('.todo-item').forEach(item => item.parentNode.removeChild(item));
  newToDoList = [];
  clearAllButton.disabled = true;
}

function editToDoCard(event) {
  deleteToDoCard(event);
}

function deleteToDoCard(event) {
  // var element = event.target
  if (event.target.className === 'delete-button') {
    var cardDataKey = event.target.closest(".todo-list-card").getAttribute('id');
    removeCardFromStorage(cardDataKey);
    var cardToDelete = document.querySelector(`[id="${cardDataKey}"]`);
    console.log('what we want to delete', cardToDelete)
    cardToDelete.remove();
  }
}


function removeCardFromStorage(cardDataKey) {
  var cleanCardDataKey = parseInt(cardDataKey);
  console.log('the parsed key', cleanCardDataKey);
  var retrievedToDos = localStorage.getItem(`toDos`);
  var parsedToDos = JSON.parse(retrievedToDos);

  for (var i = 0; i < parsedToDos.length; i++) {
    if (parsedToDos[i].taskId === cleanCardDataKey) {
      parsedToDos.splice(i, 1);
      console.log("hey", parsedToDos);
      break;
    }
  }
}
