class Task {
  constructor(name) {
    this.taskName = name;
    this.isCompleted = false;
  }
  completeTask() {
    this.isCompleted = true;
  }
}
