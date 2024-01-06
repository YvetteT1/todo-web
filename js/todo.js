const taskForm = document.getElementById("taskForm");
const taskField = taskForm.querySelector("#taskField");
const addTaskBtn = taskForm.querySelector("#addTaskBtn");
const taskList = document.getElementById("taskList");


function onClickDelete (li) {
    li.remove();
}

function onCheckComplete (li) {
    const completeTask = li.querySelector("span:first-child");
    completeTask.classList.toggle("complete");
}

function toDisplayTask (taskInput) {
    const li = document.createElement("li");
    const spanText = document.createElement("span");
    const spanAction = document.createElement("span");
    const checkBox = document.createElement("input");
    const btnDelete = document.createElement("button");
    
    spanText.innerText = taskInput;
    checkBox.type = "checkbox";
    btnDelete.innerText = "X";

    checkBox.addEventListener("change",() => onCheckComplete(li))
    btnDelete.addEventListener("click",() => onClickDelete(li));

    taskList.appendChild(li);
    li.appendChild(spanText);
    li.appendChild(spanAction);
    spanAction.appendChild(checkBox);
    spanAction.appendChild(btnDelete);
}

function handleTaskSubmit (event) {
    event.preventDefault();
    const taskInput = taskField.value;
    taskField.value = "";
  

    toDisplayTask(taskInput);
}

taskForm.addEventListener("submit",handleTaskSubmit);
