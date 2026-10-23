
var tasks = [];

function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();

    if (task.length > 0) {
        tasks.push(task);

        var list = document.getElementById("taskList");
        var item = document.createElement("li");

        item.textContent = task;
        list.appendChild(item);

        input.value = "";
        document.getElementById("message").textContent = "Task added!";
    } else {
        document.getElementById("message").textContent = "Enter a task";
    }
}

function removeTask(index) {
    if (!Number.isInteger(index) || index < 0 || index >= tasks.length) {
        return false;
    }

    tasks.splice(index, 1);

    var list = document.getElementById("taskList");

    if (list && list.children[index]) {
        list.removeChild(list.children[index]);
    }

    return true;
}

function getTaskCount() {
    return tasks.length;
}

function isTaskAvailable(task) {
    return task !== null && task !== undefined && task !== "";
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

function getTask(index) {
    if (!Number.isInteger(index) || index < 0 || index >= tasks.length) {
        return null;
    }

    return tasks[index].toUpperCase();
}

function resetTasks() {
    tasks = [];
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = {
        addTask,
        removeTask,
        getTaskCount,
        isTaskAvailable,
        calculateTotal,
        getTask,
        resetTasks
    };
}
