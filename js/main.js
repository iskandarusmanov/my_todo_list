let tasksRow = document.querySelector(".tasks__row");

let addBtn = document.querySelector("#add__btn");

let tasks = []

let saveIndex = null

    
let taskInput = document.getElementById("task__input")

function addTodo() {

    if (taskInput.value == "") {
        alert("Not filled")
        return
    }

    let tasksObj = {
        task: taskInput.value,
    }

    if (saveIndex !== null) {
        tasks[saveIndex] = tasksObj
    }else {
        tasks.push(tasksObj)
    }
    saveIndex = null

    addBtn.innerText = "ADD TODO"

    taskInput.value = ""

    createTasks()
    
}


addBtn.addEventListener("click", () => {
    addTodo()
});

function createTasks() {

    let tasksContent = ""

    tasks.forEach((el, index) =>{
        tasksContent += `
        <div class="task__list"> 
            <p>${el.task}</p>
            <div class="btn__icons">
                <button id="edit__btn" onclick="editTask(${index})"><i class="fa-solid fa-pen-to-square"></i></button>
                 <button id="delete__btn"  onclick="deleteTask(${index})"><i class="fa-solid fa-trash-arrow-up"></i></button>
             </div>
        </div>`;
    })

    tasksRow.innerHTML = tasksContent
}

    const deleteTask = (index) => {
        tasks.splice(index, 1)
        createTasks()
    }

    const editTask = (index) => {
        saveIndex = index
        addBtn.innerText = "Save"
       taskInput.value = tasks[index].task
       createTasks()
    }
     






  // let editChange =  document.querySelector("#edit__changes")
    // let editCard = document.querySelector(".edit__card")
    
    // <div class="edit__card none">
    //     <input type="text" id="edit__changes">
    //     <button onclick="saveChanges(${index})" id="save__changes">Save</button>
    // </div> 