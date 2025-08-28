import './styles.css'

import Project from './Project'
import Task from './Task'

const myProjectList = new Project('My Project')

const addTask = document.querySelector('#add-task')
addTask.addEventListener('click', () => {
    const taskTitle = prompt("Enter task title:")
    const taskDescription = prompt("Enter task description:")
    const taskDueDate = prompt("Enter task due date:")
    const taskPriority = prompt("Enter task priority:")

    const task = new Task(taskTitle, taskDescription, taskDueDate, taskPriority)

    myProjectList.addTask(task)
    console.log(myProjectList)
})