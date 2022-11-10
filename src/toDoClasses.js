export function toDoItem(title, description, dueDate, priority) {
  return {
    title,
    description,
    dueDate,
    priority,
  }
}
export class toDoFunctions {
  card = document.createElement('div')
  cardContentContainer = document.createElement('div')
  cardTitle = document.createElement('div')
  cardDescription = document.createElement('div')
  cardfooter = document.createElement('div')
  dateContainer = document.createElement('div')
  cardTitleContainer = document.createElement('div')
  removeBtn = document.createElement('button')
  clseBtn = document.createElement('button')
  constructor(toDoitem) {
    this.cardTitle.textContent = toDoitem.title
    this.cardDescription.textContent = toDoitem.description
    this.dateContainer.textContent = toDoitem.dueDate
    this.clseBtn.innerHTML = `&times;`
    this.priority = toDoitem.priority
  }
  fillClasses() {
    this.card.classList.add('cards')
    this.cardContentContainer.classList.add('card-content-container')
    this.cardTitle.classList.add('card-title')
    this.cardDescription.classList.add('card-description')
    this.cardfooter.classList.add('card-footer')
    this.dateContainer.classList.add('date-displayer')
    this.removeBtn.classList.add('remove-from-local-storage-btn')
    this.cardTitleContainer.classList.add('card-title-container')
    this.clseBtn.classList.add('remove-from-dom-btn')
  }
  print(parent) {
    this.fillClasses()
    this.card.appendChild(this.cardContentContainer)
    this.cardContentContainer.appendChild(this.cardTitleContainer)
    this.cardTitleContainer.appendChild(this.cardTitle)
    this.cardTitleContainer.appendChild(this.clseBtn)
    this.cardContentContainer.appendChild(this.cardDescription)
    this.cardfooter.appendChild(this.dateContainer)
    this.cardfooter.appendChild(this.removeBtn)
    this.card.appendChild(this.cardfooter)
    if(this.priority)
      this.card.style.borderColor = `#dc2626` 
    parent.appendChild(this.card)
    this.clseBtn.addEventListener('click', ()=>{
      this.card.remove()
    })
    this.removeBtn.addEventListener('click', ()=>{
      this.card.remove()
      localStorage.removeItem(this.cardTitle.textContent)
    })
  }

}


export class CreateSideBarProject {
  newProjectContainer = document.createElement('div')
  sideBarBtn = document.createElement('button')
  closeBtn = document.createElement('button')
  
  constructor(text){
    this.sideBarBtn.textContent = text
    this.closeBtn.innerHTML ='&times;'
    this.sideBarBtn.classList.add('new-project')
    this.closeBtn.classList.add('delete-project')
    this.newProjectContainer.classList.add('new-project-container')
  }

  print(parent){
    this.newProjectContainer.appendChild(this.sideBarBtn)
    this.newProjectContainer.appendChild(this.closeBtn)
    parent.appendChild(this.newProjectContainer)
  }
}