export default class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }
}