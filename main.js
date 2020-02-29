// The task is added to the bottom of the checklist in between the Task Title and Task Item inputs
// Each task on the checklist should also be able to be removed by clicking the respective “delete” button.
// It should not add a task to the checklist if the input is empty.
// Tasks on the checklist of the form do not need to persist.

//if the user clicks on .new-task-item-button
//and there is information in #task-title-input
//and there is information in #task-item-input
//then display the #task-item-input value between the two input fields in .newly-added-tasks

var taskTitleInput = document.querySelector('#task-title-input');
var itemInput = document.querySelector('#task-item-input');
var newItemList = document.querySelector('.newly-added-tasks');
var newTaskItemButton = document.querySelector('.new-task-item-button');

newTaskItemButton.addEventListener('click', checkAside);

var toDoList = [];

function checkAside() {
  var text = itemInput.value;
  var title = taskTitleInput.value;
  if (text !== '' && title !== '') {
    newTaskAdded(text);
  }
}

function newTaskAdded(text) {
  var task = new Task (text);
  toDoList.push(task);
  console.log(toDoList);
  itemInput.value = '';
  displayNewTaskItems(text);
}

function displayNewTaskItems(text) {
  for (var i = 0; i < toDoList.length; i++) {
  }
  newItemList.innerHTML += `<p>${text}</p>`;
}
