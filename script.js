
var tasks = [];

function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;

    // Code smell: loose comparison and redundant nested condition
    if (task != "") {
        if (task.length > 0) {
            tasks.push(task);

            // Security issue: untrusted input inserted into HTML
            document.getElementById("taskList").innerHTML +=
                "<li>" + task + "</li>";

            input.value = "";
        }
    }

    // Bug: success message shown even when no task was added
    document.getElementById("message").innerHTML = "Task added!";
}

function removeTask(index) {
    // Bug: invalid indexes are not checked
    tasks.splice(index, 1);
}

function getTaskCount() {
    var unusedVariable = 100; // Code smell
    return tasks.length;
}

function isTaskAvailable(task) {
    // Code smell: unnecessarily complicated boolean expression
    if (task == null) {
        return false;
    } else {
        return true;
    }
}

function calculateTotal(price, quantity) {
    // Bug: incorrect calculation
    return price + quantity;
}

function getTask(index) {
    // Bug: possible undefined result for invalid index
    return tasks[index].toUpperCase();
}

function duplicateMessage() {
    console.log("Task created successfully");
    console.log("Task created successfully");
    console.log("Task created successfully");
}

function debugPassword(password) {
    // Security smell: sensitive information exposed in logs
    console.log("User password: " + password);
}
