// Define UI Vars
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.list-group');
const clearBtn = document.querySelector('.clear-task');

// Load All Event Listeners
loadEventListeners();

// Load All Event Listeners
function loadEventListeners() {

    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add Task Event
    form.addEventListener('submit', addTask)

    // Remove Task Event
    taskList.addEventListener('click', removeTask);

    // Clear Task
    clearBtn.addEventListener('click', clearTask);

    // Filter Task
    filter.addEventListener('keyup', filterTask);
}

// Get Task From Ls
function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task) {
        // Create LI Element
        const li = document.createElement('li');
        // Add Class
        li.className = 'list-group-item d-flex align-items-center';
        // Create Text Node & Append To Li
        li.appendChild(document.createTextNode(task));
        // Create I Element
        const i =document.createElement('i');
        // Add Class
        i.className = 'bi bi-x text-danger ms-auto fw-bold fs-5 delete-item';
        // Append I To Li
        li.appendChild(i);
        // Append Li To Ul
        taskList.appendChild(li);
    })
}

// Add Task
function addTask(e) {
    if (taskInput.value === ''){
        alert('برای افرودن نسک , در ابتدا تسک را وارد کنید.')
    } else {
        // Create Li Element
        const li = document.createElement('li');
        // Add Class
        li.className = 'list-group-item d-flex align-items-center';
        // Create Text Node & Append To Li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create I Element
        const i = document.createElement('i');
        // Add Class
        i.className = 'bi bi-x text-danger ms-auto fw-bold fs-5 delete-item';
        // Append I To Li
        li.appendChild(i);
        // Append Li to Ul
        taskList.appendChild(li);
        // Store in LS
        storeTaskInLocalStorage((taskInput.value));
        // Cleare Input
        taskInput.value = '';
        e.preventDefault()
    }
}

// Store Task
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
    if (e.target.classList.contains('delete-item')) {
        if (confirm('آیا از حذف تسک مطمعن هستید؟')){
            e.target.parentElement.remove();
            // Remove From Ls
            RemoveTaskFromLocalStorage(e.target.parentElement);
        }
    }
}

// Remove From Ls
function RemoveTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Task
function clearTask(e) {
    if (e.target.classList.contains('clear-task')){
        if (confirm('آیا از حذف همه تسک ها مطمعن هستید؟')){
            taskList.innerHTML = '';
            // Cleaer From Ls
            ClearTaskFromLocalStorage(); 
        }
    }
}

// Clear Task From Ls
function ClearTaskFromLocalStorage() {
    localStorage.clear();
}

// Filter Task
function filterTask(e){
    const text = e.target.value.toLowerCase();
    // console.log(text);
    document.querySelectorAll('.list-group-item').forEach(function (task){
        // console.log(task);
        const item = task.textContent;
        // console.log(item);
        if (item.toLowerCase().indexOf(text) != -1) {
            task.classList.add("d-flex");
        } else {
            task.classList.remove("d-flex");
            task.style.display = 'none';
        }
    })
}