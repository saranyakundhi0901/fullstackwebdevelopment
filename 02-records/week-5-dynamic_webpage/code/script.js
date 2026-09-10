// Getting HTML elements using DOM
let form = document.getElementById("studentForm");

let nameInput = document.getElementById("name");
let rollInput = document.getElementById("roll");
let courseInput = document.getElementById("course");

let studentList = document.getElementById("studentList");
let message = document.getElementById("message");


// Form submit event
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Getting values from input fields
    let name = nameInput.value;
    let roll = rollInput.value;
    let course = courseInput.value;

    // Checking empty fields
    if (name === "" || roll === "" || course === "") {

        message.textContent = "Please fill all fields";

        return;
    }


    // Creating a new table row
    let row = document.createElement("tr");


    // Creating table cells
    let nameCell = document.createElement("td");
    let rollCell = document.createElement("td");
    let courseCell = document.createElement("td");
    let actionCell = document.createElement("td");


    // Adding values to cells
    nameCell.textContent = name;
    rollCell.textContent = roll;
    courseCell.textContent = course;


    // Creating Delete button
    let deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.className = "deleteBtn";


    // Delete button event
    deleteButton.addEventListener("click", function() {

        row.remove();

        message.textContent = "Student deleted successfully";

    });


    // Adding delete button to action cell
    actionCell.appendChild(deleteButton);


    // Adding cells to row
    row.appendChild(nameCell);
    row.appendChild(rollCell);
    row.appendChild(courseCell);
    row.appendChild(actionCell);


    // Adding row to table
    studentList.appendChild(row);


    // Display success message
    message.textContent = "Student added successfully";


    // Clear input fields
    nameInput.value = "";
    rollInput.value = "";
    courseInput.value = "";

});
