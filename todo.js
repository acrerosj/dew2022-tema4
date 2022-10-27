let tasks = document.querySelector('#tasks');
let task = document.querySelector('#task');
let copy = document.querySelector('#copy');
let filter = document.querySelector('#filter');

function createTask() {
    if (task.value) {
        tasks.innerHTML += "<li>" + task.value + "</li>";
        task.value = "";
        task.focus();
    }
}

function copyList() {
    copy.innerHTML = tasks.innerHTML;
}

function deleteTasks() {
    tasks.innerHTML = "";
}

function searchTasks() {
    let liTasks = document.querySelectorAll('#tasks li'); 
    let newList = "";
    [...liTasks]
        .filter(li => li.textContent.includes(filter.value))
        .forEach(li => newList+= "<li>"+ li.textContent + "</li>");
    copy.innerHTML = newList;
}
