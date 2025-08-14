import './styles.css'

import Project from './Project'
import Task from './Task'

const content = document.querySelector('.content')

const sideBar = document.createElement('div')
const sideBarProfile = document.createElement('div')
const sideBarTaskNav = document.createElement('div')
const sideBarProjectnav = document.createElement('div')
const sideBarTeamNav = document.createElement('div')

sideBar.classList.add('.sidebar')
sideBarProfile.classList.add('.sidebar-profile')
sideBarTaskNav.classList.add('.sidebar-tasknav')
sideBarProjectnav.classList.add('.sidebar-projectnav')
sideBarTeamNav.classList.add('.sidebar-teamnv')

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