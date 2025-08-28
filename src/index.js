import './styles.css'

import Project from './Project'
import Task from './Task'

const addTask = document.querySelector('#add-task')
addTask.addEventListener('click', () => {
    alert('clicked!')
})

// const myProject = new Project()
// myProject.addTask(new Task("title", "test", 1, "high"))
// console.log(myProject);


// const a = new Project('a')
// a.addTask("test")
// console.log(a)
// a.addTask("b")
// console.log(a)
// a.removeTask(0)
// console.log(a)