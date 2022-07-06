export default class Collection {
    constructor() {
        this.collection = [];
    }

    add(item) {
        const nextId = this.collection.length;
        item.setId(nextId);
        this.collection.push(item);
    }

    sort() {
        this.collection.sort((a,b) => a.compare(b));
    }

    remove(item) {
        const indexToRemove = this.findIndex(item);
        this.collection.splice(indexToRemove, 1);
    }

    findIndex(item) {
        this.collection.findIndex((i) => i.getId() === item.getId());
    }

}