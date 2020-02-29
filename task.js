class Task {
  constructor(name, taskId) {
    this.taskName = name;
    this.taskId = taskId;
    this.isCompleted = false;
  }
  completeTask() {
    this.isCompleted = true;
  }
}
