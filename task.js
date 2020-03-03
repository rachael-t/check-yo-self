class Task {
  constructor(name, taskId, isCompleted) {
    this.taskName = name;
    this.taskId = taskId;
    this.isCompleted = isCompleted || false;
  }
  completeTask() {
    this.isCompleted = true;
  }
}
