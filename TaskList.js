export default class TaskList {
    constructor() {
        this.list = new Array;
    }

    addTask(task) {
        task.id = this.list.length;
        this.list.push(task);
    }

    reorderTask() {
        this.list.sort(function (x, y) {
            let a = x.label.toUpperCase(),
                b = y.label.toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
    }

    removeTask(task) {
        this.list.splice(this.list.findIndex(function(i){
            return i.id === task.id;
        }), 1);
    }

}