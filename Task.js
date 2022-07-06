export default class Task {
  constructor(label, isDone = false, id = null) {
    this.label = label;
    this.done  = isDone;
    this.id    = id;
  }

  markAsDone() {
    this.done = true;
  }

  rename(name) {
    this.label = name;
  }

  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }

  compare(taskToCompare) {
    const label1 = this.label.toUpperCase();
    const label2 = taskToCompare.label.toUpperCase();
    return label1 == label2 ? 0 : (label1 > label2 ? 1 : -1);
  }
}