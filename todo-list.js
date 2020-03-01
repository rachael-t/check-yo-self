class ToDoList {
  constructor(uniqueID, title, tasks) {
    this.id = uniqueID;
    this.title = title;
    this.tasks = tasks;
    this.urgent = false;
  }
  saveToStorage(toDoList) {
    var stringifiedToDoList = JSON.stringify(toDoList)
    localStorage.setItem('toDos', stringifiedToDoList);
  }

  deleteFromStorage() {

  }
  updateToDo() {
    //should update the todo's title and urgency
  }
  updateTask() {
    //should update task's content and if it has been completed
  }
}
