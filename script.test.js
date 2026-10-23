
const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("./script.js", "utf8");

const context = {
    console,
    document: {
        getElementById: () => ({
            value: "",
            innerHTML: ""
        })
    }
};

vm.createContext(context);
vm.runInContext(source, context);

describe("Task application tests", () => {
    test("returns zero when there are no tasks", () => {
        expect(context.getTaskCount()).toBe(0);
    });

    test("returns false when task is null", () => {
        expect(context.isTaskAvailable(null)).toBe(false);
    });

    test("returns true when task is provided", () => {
        expect(context.isTaskAvailable("Learn SonarQube")).toBe(true);
    });

    test("adds a task when input is provided", () => {
        context.document.getElementById = (id) => {
            if (id === "taskInput") {
                return { value: "Test task" };
            }
            return { innerHTML: "", value: "" };
        };

        context.addTask();

        expect(context.getTaskCount()).toBe(1);
    });
});
