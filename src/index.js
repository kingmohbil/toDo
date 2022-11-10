import { addActive, removeActive } from './toggeling'
import {toDoItem, toDoFunctions, CreateSideBarProject} from './toDoClasses'
import {format, isSameDay, isAfter} from 'date-fns'


const cardsConatiner = document.querySelector('.cards-container')
const overlay = document.getElementById('overlay')
const formContainer = document.querySelector('.form-container')
const form = document.querySelector('form')
const closeBtn = document.getElementById('close-btn')
const addBtn = document.getElementById('add-btn')
const inbox = document.querySelector('#inbox-btn')
const upcoming = document.querySelector('#upcoming-btn')
const today = document.querySelector('#today-btn')
const loc = document.querySelector('.loc')
const projectInput = document.querySelector('#projectName')
const newProject = document.querySelector('#New-Project')
const projectClose = document.querySelector('.close-project-btn')
const projectForm = document.querySelector('.project-form')
const projectBar = document.querySelector('.side-ProjectsContainer')

function printEveryTask(){
  for(let i = 0; i < localStorage.length; i++){
    if(localStorage.key(i) === 'projects')
    continue
    else{
    const test = new toDoFunctions(JSON.parse(localStorage.getItem(localStorage.key(i))))
    test.print(cardsConatiner)
    }
  }
}

function printTodayOnly(){
  for(let i = 0; i < localStorage.length; i++){
    if(isSameDay(new Date(),new Date(JSON.parse(localStorage.getItem(localStorage.key(i))).dueDate)))
      {
        const temp = new toDoFunctions(JSON.parse(localStorage.getItem(localStorage.key(i))))
        temp.print(cardsConatiner)
      }
  }
}

projectForm.onsubmit =()=>{
  if(localStorage.getItem('projects') == null)
    {
      const temp = []
      temp.push(projectForm.projectName.value)
      localStorage.setItem('projects', JSON.stringify(temp))
    }
  else{
    const temp = JSON.parse(localStorage.getItem('projects'))
    temp.push(projectForm.projectName.value)
    localStorage.setItem('projects', JSON.stringify(temp))
  }
}


newProject.addEventListener('click', ()=>{
  addActive(projectForm)
  addActive(projectInput)
  addActive(projectClose)
})
projectClose.addEventListener('click', ()=>{
  removeActive(projectInput)
  removeActive(projectClose)
  removeActive(projectForm)
})
addBtn.addEventListener('click', () => {
  addActive(formContainer)
  addActive(overlay)
})
closeBtn.addEventListener('click', () => {
  removeActive(overlay)
  removeActive(formContainer)
})

form.onsubmit = () => {
    localStorage.setItem(form.titleInput.value,JSON.stringify(toDoItem(form.titleInput.value,
        form.descriptionInput.value, format(new Date(form.dueDateInput.value), "MM/dd/yyyy"), 
        form.checkBoxInput.checked)))
}

addEventListener('load',()=>{
    printEveryTask()
})
inbox.addEventListener('click', () =>{
  addActive(inbox)
  removeActive(today)
  removeActive(upcoming)
  loc.textContent = "Inbox"
  cardsConatiner.innerHTML = ""
  printEveryTask()  

})

today.addEventListener('click', () =>{
  addActive(today)
  removeActive(inbox)
  removeActive(upcoming)
  loc.textContent = "Today"
  cardsConatiner.innerHTML = ""
  printTodayOnly()
})

upcoming.addEventListener('click', () =>{
  loc.textContent = "Upcoming"
  cardsConatiner.innerHTML = ""
  addActive(upcoming)
  removeActive(today)
  removeActive(inbox)
  for(let i = 0; i < localStorage.length; i++){
    if(isAfter(new Date(JSON.parse(localStorage.getItem(localStorage.key(i))).dueDate), new Date()))
      {
        const temp = new toDoFunctions(JSON.parse(localStorage.getItem(localStorage.key(i))))
        temp.print(cardsConatiner)
      }
  }
})
