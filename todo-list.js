class ToDoList {
  constructor(uniqueID, title, tasks) {
    this.id = uniqueID;
    this.title = title;
    this.tasks = tasks;
    this.urgent = false;
  }
  saveToStorage() {
    console.log('hello', this);
    var toDoListToSave = this;
    var retrievedToDos = localStorage.getItem(`toDos`);
    if (retrievedToDos) {
      var savedToDos = JSON.parse(retrievedToDos);
      savedToDos.push(toDoListToSave);
      localStorage.setItem('toDos', JSON.stringify(savedToDos));
    } else {
      var toDos = [];
      toDos.push(toDoListToSave);
      var stringifiedToDoList = JSON.stringify(toDos);
      localStorage.setItem('toDos', stringifiedToDoList);
    }
  }

  deleteFromStorage() {
    console.log('hello world');
  }
  updateToDo() {
    //should update the todo's title and urgency
  }
  updateTask() {
    //should update task's content and if it has been completed
  }
}
