// Select the required HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");


// Function to update the empty-list message
function updateEmptyMessage() {

    if (taskList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}


// Add a new task when the button is clicked
addTaskBtn.addEventListener("click", function () {

    // Get the task entered by the user
    const taskText = taskInput.value.trim();

    // Prevent adding an empty task
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }


    // Create a new task container
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";


    // Create the task text
    const task = document.createElement("span");
    task.className = "task-text";

    task.textContent = taskText;


    // Create Complete button
    const completeBtn =
        document.createElement("button");

    completeBtn.className = "complete-btn";
    completeBtn.textContent = "Complete";


    // Complete button event
    completeBtn.addEventListener("click", function () {

        // Add/remove completed styling
        task.classList.toggle("completed");

        // Change button text
        if (task.classList.contains("completed")) {
            completeBtn.textContent = "Completed";
        } else {
            completeBtn.textContent = "Complete";
        }
    });


    // Create Delete button
    const deleteBtn =
        document.createElement("button");

    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";


    // Delete button event
    deleteBtn.addEventListener("click", function () {

        // Remove the task from the webpage
        taskItem.remove();

        // Show message if no tasks remain
        updateEmptyMessage();
    });


    // Add all elements to the task container
    taskItem.appendChild(task);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);

    // Add the task to the webpage
    taskList.appendChild(taskItem);


    // Clear the input box
    taskInput.value = "";

    // Update empty message
    updateEmptyMessage();
});


// Display the empty message when the page loads
updateEmptyMessage();