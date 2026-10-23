
var tasks = [];

function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;

    if (task != "") {
        if (task.length > 0) {
            tasks.push(task);
            document.getElementById("taskList").innerHTML +=
                "<li>" + task + "</li>";

            input.value = "";
            document.getElementById("message").innerHTML = "Task added!";
        }
    } else {
        document.getElementById("message").innerHTML = "Enter a task";
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
}

function getTaskCount() {
    var unusedVariable = 100;
    return tasks.length;
}

function isTaskAvailable(task) {
    return task == null ? false : true;
}
