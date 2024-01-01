let inputEl = document.getElementById("input-el")
const todoApp = document.querySelector("#container")
let addEl = document.getElementById("add-el")
let toDoList = document.getElementById("to-do")
const errorContainer = document.querySelector("#error-container")
const errorClick = document.querySelector("#error-click")


addEl.addEventListener("click", function(){
    if (inputEl.value == ""){
        errorContainer.style.display = "block"
        todoApp.style.display = "none"
    } else {

            let paragraph = document.createElement("p")
            let taskItem = document.createElement("li")
            paragraph.textContent = inputEl.value
            toDoList.appendChild(taskItem)
            taskItem.appendChild(paragraph)
            paragraph.classList.add("paragraph-style")
            inputEl.value = ''
        
        paragraph.addEventListener("click", function(){
            paragraph.style.textDecoration = "line-through"
        })
        paragraph.addEventListener("dblclick", function(){
            toDoList.removeChild(taskItem)
            taskItem.removeChild(paragraph)
        })
    }

})

errorClick.addEventListener("click", ()=>{
    errorContainer.style.display = "none"
    todoApp.style.display = "block"
})