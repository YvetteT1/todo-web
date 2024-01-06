const taskForm = document.getElementById("taskForm");
const taskField = taskForm.querySelector("#taskField");
const addTaskBtn = taskForm.querySelector("#addTaskBtn");
const taskList = document.getElementById("taskList");
let tasks =[];


function toStoreTask (tasks) {
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function onClickDelete (li,targetTask) {
    li.remove();
    tasks = tasks.filter(task => task.id !== targetTask.id);
    toStoreTask();
}

function onCheckComplete (li) {
    const completeTask = li.querySelector("span:first-child");
    completeTask.classList.toggle("complete");
}

function toDisplayTask (targetTask) {
    const li = document.createElement("li");
    const spanText = document.createElement("span");
    const spanAction = document.createElement("span");
    const checkBox = document.createElement("input");
    const btnDelete = document.createElement("button");
    
    spanText.innerText = targetTask.text;
    checkBox.type = "checkbox";
    btnDelete.innerText = "X";

    checkBox.addEventListener("change",() => onCheckComplete(li))
    btnDelete.addEventListener("click",() => onClickDelete(li,targetTask));

    taskList.appendChild(li);
    li.appendChild(spanText);
    li.appendChild(spanAction);
    spanAction.appendChild(checkBox);
    spanAction.appendChild(btnDelete);
    taskList.scrollTop = taskList.scrollHeight;
}

function handleTaskSubmit (event) {
    event.preventDefault();
    const taskText = taskField.value;
    taskField.value = "";
    const id = crypto.randomUUID();
    const newTask = {
        id,
        text:taskText,
    }
    tasks.push(newTask);
    toDisplayTask(newTask);
    toStoreTask(tasks);
}

const storedTasks = JSON.parse(localStorage.getItem("tasks"));

if(storedTasks !== null) {
    storedTasks.forEach(storedTask => toDisplayTask(storedTask));
    tasks = storedTasks;
}

taskForm.addEventListener("submit",handleTaskSubmit);
