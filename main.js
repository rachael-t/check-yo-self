//variables
var taskTitleInput = document.querySelector('#task-title-input');
var itemInput = document.querySelector('#task-item-input');
var newItemList = document.querySelector('.newly-added-tasks');
var newTaskItemButton = document.querySelector('.new-task-item-button');
var newToDoList = [];

//event listeners
newTaskItemButton.addEventListener('click', checkAside);
newItemList.addEventListener('click', removeNewTaskItem);

//functions
function checkAside() {
  var text = itemInput.value;
  var id = Date.now();
  var title = taskTitleInput.value;
  if (text !== '' && title !== '') {
    newTaskAdded(text, id);
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

// event on make to do newTaskItemButton
//var uniqueID = Date.now()
//var todolist = instantiate todolist class with passing uniqueID and taskTitleInput
//displayNewToDoCard(todolist)
//then that handles the display
