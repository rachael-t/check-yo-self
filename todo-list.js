class ToDoList {
  constructor(uniqueID, title, tasks, urgent) {
    this.id = uniqueID;
    this.title = title;
    this.tasks = tasks;
    this.urgent = urgent || false;
  }

  saveToStorage() {
    var toDoListToSave = this;
    var retrievedToDos = localStorage.getItem(`toDos`);
    if (retrievedToDos) {
      var savedToDos = JSON.parse(retrievedToDos);
      console.log(savedToDos);
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
    var retrievedToDos = localStorage.getItem(`toDos`);
    var parsedToDos = JSON.parse(retrievedToDos);
    for (var i = 0; i < parsedToDos.length; i++) {
      if (parsedToDos[i].id === this.id) {
        parsedToDos.splice(i, 1);
        var stringifiedToDoList = JSON.stringify(parsedToDos);
        localStorage.setItem('toDos', stringifiedToDoList);
      }
    }
  }
  updateToDo() {
    if (this.urgent === true) {
      this.urgent = false;
    } else {
      this.urgent = true;
    }
  }
  updateTask(cleanTaskDataKey) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].taskId === cleanTaskDataKey) {
        this.tasks[i].completeTask();
      }
    }
    console.log(this.tasks);
  }

}
