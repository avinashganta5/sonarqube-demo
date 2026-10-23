
const {
    addTask,
    removeTask,
    getTaskCount,
    isTaskAvailable,
    calculateTotal,
    getTask,
    resetTasks
} = require("./script");

describe("Task application", () => {
    beforeEach(() => {
        resetTasks();

        document.body.innerHTML = `
            <input id="taskInput" />
            <ul id="taskList"></ul>
            <p id="message"></p>
        `;
    });

    test("starts with zero tasks", () => {
        expect(getTaskCount()).toBe(0);
    });

    test("adds a task", () => {
        document.getElementById("taskInput").value = "Learn SonarQube";

        addTask();

        expect(getTaskCount()).toBe(1);
        expect(document.querySelector("#taskList li").textContent)
            .toBe("Learn SonarQube");
        expect(document.getElementById("message").textContent)
            .toBe("Task added!");
    });

    test("rejects empty task input", () => {
        document.getElementById("taskInput").value = "  ";

        addTask();

        expect(getTaskCount()).toBe(0);
        expect(document.getElementById("message").textContent)
            .toBe("Enter a task");
    });

    test("removes a valid task", () => {
        document.getElementById("taskInput").value = "Task one";
        addTask();

        expect(removeTask(0)).toBe(true);
        expect(getTaskCount()).toBe(0);
    });

    test("rejects invalid task indexes", () => {
        expect(removeTask(-1)).toBe(false);
        expect(removeTask(0)).toBe(false);
    });

    test("checks task availability", () => {
        expect(isTaskAvailable("Task")).toBe(true);
        expect(isTaskAvailable("")).toBe(false);
        expect(isTaskAvailable(null)).toBe(false);
        expect(isTaskAvailable(undefined)).toBe(false);
    });

    test("calculates total price", () => {
        expect(calculateTotal(10, 3)).toBe(30);
    });

    test("returns an uppercase task", () => {
        document.getElementById("taskInput").value = "hello";
        addTask();

        expect(getTask(0)).toBe("HELLO");
    });

    test("returns null for an invalid task index", () => {
        expect(getTask(-1)).toBeNull();
        expect(getTask(0)).toBeNull();
    });
});
