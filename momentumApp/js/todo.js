const toDoForm = document.getElementById("todo-form")
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

const BUTTON_NAME = "button-name"


let toDos = []

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event) {
    const li = event.target.parentElement
    li.remove()
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    saveToDos()
}

function paintTodo(newTodoObj) {
    const li = document.createElement("li")
    li.id = newTodoObj.id
    const span = document.createElement("span")
    span.innerText = newTodoObj.text
    const blank = document.createElement("span")
    blank.innerText = " "
    const button = document.createElement("button")
    button.className = BUTTON_NAME
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo)
    li.appendChild(span)
    li.appendChild(blank)
    li.appendChild(button)
    toDoList.appendChild(li)
}


function handleToDoSubmit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value
    toDoInput.value = ""
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveToDos()
}


toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)


if (savedToDos) {
    // Array(배열)로 만듦
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    // forEach함수를 통해 paintTodo를 
    // parsedTodos배열의 요소마다 실행
    parsedToDos.forEach(paintTodo)
}

