//variables
var clearAllButton = document.querySelector('.clear-button');
var currentTasks = document.querySelector('.current-tasks');
var itemInput = document.querySelector('#task-item-input');
var makeTaskButton = document.querySelector('.make-task-button');
var masterToDoList = [];
var newItemList = document.querySelector('.newly-added-tasks');
var newTaskItemButton = document.querySelector('.new-task-item-button');
var newToDoList = [];
var taskTitleInput = document.querySelector('#task-title-input');

//event listeners
clearAllButton.addEventListener('click', clearInputFields);
currentTasks.addEventListener('click', editToDoListCard);
makeTaskButton.addEventListener('click', makeTaskList);
newItemList.addEventListener('click', removeNewTaskItem);
newTaskItemButton.addEventListener('click', checkAside);
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
  itemInput.value = '';
  displayNewTaskItems(text, id);
}

function displayNewTaskItems(text, id) {
  for (var i = 0; i < newToDoList.length; i++) {
  }
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
  currentTasks.innerHTML += `
  <div class="todo-list-card" id="${toDoList.id}">
    <h2>${toDoList.title}</h2>
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
  var cardHolder = document.getElementById(`${toDoList.id}`);
  var taskHolder = cardHolder.querySelector('.task-holder');
  for (var i = 0; i < toDoList.tasks.length; i++) {
    taskHolder.innerHTML += `
    <div class="task-item">
      <img class="checkbox-button" id="${toDoList.tasks[i].taskId}" src="assets/checkbox.svg" alt="empty circle">
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
    var cardHolder = document.getElementById(`${toDoCard.id}`);
    var taskHolder = cardHolder.querySelector(".task-holder")
    for (var i = 0; i < toDoCard.tasks.length; i++) {
      if (toDoCard.tasks[i].isCompleted === false) {
        taskHolder.innerHTML += `
        <div class="task-item">
          <img class="checkbox-button" id="${toDoCard.tasks[i].taskId}" src="assets/checkbox.svg" alt="empty circle">
          <p>${toDoCard.tasks[i].taskName}</p>
        </div>`
      } else {
        taskHolder.innerHTML += `
        <div class="task-item">
          <img class="checkbox-button checked" id="${toDoCard.tasks[i].taskId}" src="assets/checkbox-active.svg" alt="empty circle">
          <p>${toDoCard.tasks[i].taskName}</p>
        </div>`

      }
    }
}

function clearInputFields() {
  taskTitleInput.value = '';
  itemInput.value = '';
  document.querySelectorAll('.todo-item').forEach(item => item.parentNode.removeChild(item));
  newToDoList = [];
  clearAllButton.disabled = true;
}

function editToDoListCard(event) {
  if (event.target.className === 'checkbox-button') {
    checkOffTask(event);
  } else if (event.target.classList.contains('delete-button')) {
    deleteToDoCard(event);
//this is for the urgent functionality which has all been commented out:
  // } else if (event.target.className === 'urgent-button') {
  //   toggleUrgency(event);
  }
}

function getLocalStorage() {
  var retrievedToDos = localStorage.getItem(`toDos`);
  var parsedToDos = JSON.parse(retrievedToDos);
  var toDoListObjects = [];
  for (var i = 0; i < parsedToDos.length; i++) {
    var taskObjects = [];
    for (var j = 0; j < parsedToDos[i].tasks.length; j++) {
      var task = new Task (parsedToDos[i].tasks[j].taskName, parsedToDos[i].tasks[j].taskId, parsedToDos[i].tasks[j].isCompleted);
      taskObjects.push(task);
    }
    var toDoList = new ToDoList (parsedToDos[i].id, parsedToDos[i].title, taskObjects);
    toDoListObjects.push(toDoList);
  } masterToDoList = toDoListObjects;
}

function checkOffTask(event) {
  var taskDataKey = event.target.getAttribute('id');
  var cleanTaskDataKey = parseInt(taskDataKey);
  var cardDataKey = event.target.closest(".todo-list-card").getAttribute('id');
  var cleanCardDataKey = parseInt(cardDataKey);
  getLocalStorage();
  for (var i = 0; i < masterToDoList.length; i++) {
    if (masterToDoList[i].id === cleanCardDataKey) {
      masterToDoList[i].deleteFromStorage();
      masterToDoList[i].updateTask(cleanTaskDataKey);
      masterToDoList[i].saveToStorage();
      displayUpdatedTask(masterToDoList[i], cleanTaskDataKey);
    }
    var stringifiedToDoList = JSON.stringify(masterToDoList);
    localStorage.setItem('toDos', stringifiedToDoList);
  }
  getLocalStorage();
}

function displayUpdatedTask(listToUpdate, cleanTaskDataKey) {
  var taskElementToUpdate = document.getElementById(`${cleanTaskDataKey}`);
  console.log('task', taskElementToUpdate);
  var currentStatus = false;
  for (var i = 0; i < listToUpdate.tasks.length; i++) {
    var currentTask = listToUpdate.tasks[i];
    if (currentTask.taskId === cleanTaskDataKey) {
      currentStatus = currentTask.isCompleted;
    }
  }
  if (currentStatus) {
    taskElementToUpdate.src = "assets/checkbox-active.svg"
    taskElementToUpdate.classList.add("checked");
  } else {
    taskElementToUpdate.src = "assets/checkbox.svg"
  }
}

function deleteToDoCard(event) {
    var cardDataKey = event.target.closest(".todo-list-card").getAttribute('id');
    var listHolder = document.getElementById(`${cardDataKey}`)
    var taskHolder = listHolder.querySelector(".task-holder");
    if (taskHolder.children.length === taskHolder.querySelectorAll(".checked").length) {
      removeCardFromStorage(cardDataKey);
      var cardToDelete = document.querySelector(`[id="${cardDataKey}"]`);
      cardToDelete.remove();
    }
}

function removeCardFromStorage(cardDataKey) {
  var cleanCardDataKey = parseInt(cardDataKey);
  var retrievedToDos = localStorage.getItem(`toDos`);
  var parsedToDos = JSON.parse(retrievedToDos);
  for (var i = 0; i < parsedToDos.length; i++) {
    if (parsedToDos[i].id === cleanCardDataKey) {
      var toDoList = new ToDoList (parsedToDos[i].id, parsedToDos[i].title, parsedToDos[i].tasks);
      toDoList.deleteFromStorage();
    }
  }
}


//Below is my attempt to get the urgency button functionality working. I had a very difficult time with this and continually ran into issues with it's behavior. When it began impacting the user's ability to add in new cards if one was selected as "urgent" I decided to leave this out and spend my remaining few hours of the project fixing other bugs.

// function toggleUrgency(event) {
//   var cardDataKey = event.target.closest(".todo-list-card").getAttribute('id');
//   var cleanCardDataKey = parseInt(cardDataKey);
//   getLocalStorage();
//   for (var i = 0; i < masterToDoList.length; i++) {
//     if (masterToDoList[i].id === cleanCardDataKey) {
//       debugger
//       masterToDoList[i].deleteFromStorage(masterToDoList[i]);
//       masterToDoList[i].updateToDo();
//       console.log(masterToDoList[i].urgent);
//       var toggledToDoList = new ToDoList (masterToDoList[i].id, masterToDoList[i].title, masterToDoList[i].tasks, masterToDoList[i].urgent);
//       console.log(toggledToDoList);
//       localStorage.setItem('toDos', JSON.stringify(toggledToDoList));
//       getLocalStorage();
//       console.log(masterToDoList);
//       toggleUrgencyDisplay(toggledToDoList, cleanCardDataKey);
//     }
//   } getLocalStorage();
// }
//
// function toggleUrgencyDisplay(toDoList, cardDataKey) {
//   var toDoCard = document.getElementById(`${cardDataKey}`);
//   var urgentButton = toDoCard.querySelector(".urgent-button");
//   if (toDoList.urgent) {
//     urgentButton.src = "assets/urgent-active.svg"
//   } else {
//     urgentButton.src = "assets/urgent.svg";
//   }
// }
