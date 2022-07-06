export default class TaskList {
    constructor() {
        this.list = new Array;
    }

    addTask(task) {
        this.list.push(task);
    }

    reOrder() {
        this.list.sort(function (x, y) {
            let a = x.label.toUpperCase(),
                b = y.label.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
    }
}