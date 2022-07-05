export default class Task {
  constructor(label, isDone = false) {
    this.label = label;
    this.done = isDone;
  }

  markAsDone() {
    this.done = true;
  }

  rename(name) {
    this.label = name;
  }
}