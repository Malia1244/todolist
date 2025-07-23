document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const words = document.getElementById("taskInput");

    // Load tasks from localStorage when the page loads
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        const newItem = document.createElement("li");
        newItem.textContent = task;
        taskList.appendChild(newItem);
    });

    // Add a new task and save it to localStorage
    button.addEventListener("click", function () {
        const task = words.value.trim();
        if (task) {
            const newItem = document.createElement("li");
            newItem.textContent = task;
            taskList.appendChild(newItem);

            // Save the task to localStorage
            savedTasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(savedTasks));

            words.value = ""; // Clear the input field
        }
    });
});
