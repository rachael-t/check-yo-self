class Task {
  constructor(name, taskId, isCompleted) {
    this.taskName = name;
    this.taskId = taskId;
    this.isCompleted = isCompleted || false;
  }
  completeTask() {
    if (this.isCompleted === true) {
      this.isCompleted = false;
    } else {
      this.isCompleted = true;
    }
  }
}
