const storageTasks = localStorage.getItem('tasks');
let tasks = JSON.parse(storageTasks);

if (tasks === null) {
    tasks = []
} else {
    tasks.forEach(task => {
        createItem(task)
    });
}

function clearAll(){
    tasks = []
    localStorage.setItem("tasks", JSON.stringify(tasks))
    document.querySelector("tbody").innerHTML = ""
    if (tasks.length === 0) {
        document.getElementById("no-task").classList.remove("hide") 
    }
}

function addTask() {
    const task = {
        "id": idGenerator(),
        "title": document.querySelector("input").value,
        "status": "unchecked",
    }
    tasks.push(task)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    createItem(task)
}

function deleteTask(id) {
    for (let index = 0; index < tasks.length; index++) {
        if (tasks[index].id === id) {
            tasks.splice(index, 1)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            document.getElementById(id).remove()
        }
    }
    if (tasks.length === 0) {
        document.getElementById("no-task").classList.remove("hide") 
    }
}

function createItem(task) {       
    document.getElementById("no-task").classList.add("hide") 
    const tbody = document.querySelector("tbody")
    const tr = document.createElement("tr")
    const taskTd = document.createElement("td")
    const deleteTd = document.createElement("td")

    tr.setAttribute("id", task.id)
    taskTd.innerHTML = task.title
    taskTd.setAttribute("class", task.status)
    taskTd.setAttribute("onclick", `doneTask(${task.id})`)
    deleteTd.innerHTML = "delete"
    deleteTd.setAttribute("class", "delete")
    deleteTd.setAttribute("onclick", `deleteTask(${task.id})`)

    tr.appendChild(taskTd)
    tr.appendChild(deleteTd)
    tbody.appendChild(tr)
}

function idGenerator(){
    if (tasks.length === 0) {
        return 1
    } else {
        let preId = tasks[tasks.length - 1].id 
        return preId += 1
    }
}

function doneTask(id){
    const task = document.getElementById(id).firstChild
    task.classList.toggle("checked")
}

