
// Creating a Student class

class Student {

    // Constructor initializes the properties of a student
    constructor(name, rollNumber, department, cgpa) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.cgpa = cgpa;
    }
}


// Selecting the required HTML elements using their IDs
const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const departmentInput = document.getElementById("department");
const cgpaInput = document.getElementById("cgpa");

const createButton = document.getElementById("createBtn");
const profileContainer = document.getElementById("profileContainer");


// Adding a click event to the Create Profile button
createButton.addEventListener("click", function () {

    
    const name = nameInput.value.trim();
    const rollNumber = rollInput.value.trim();
    const department = departmentInput.value.trim();
    const cgpa = cgpaInput.value.trim();


    // Check whether all fields are filled
    if (name === "" || rollNumber === "" ||
        department === "" || cgpa === "") {

        alert("Please enter all student details.");
        return;
    }


   
    const student = new Student(
        name,
        rollNumber,
        department,
        cgpa
    );


     
    profileContainer.innerHTML = "";


    
    const profileCard = document.createElement("div");
    profileCard.className = "profile-card";


    // Creating the profile heading section
    const profileHeader = document.createElement("div");
    profileHeader.className = "profile-header";

    const icon = document.createElement("div");
    icon.className = "icon";
    icon.textContent = "🎓";

    const heading = document.createElement("h2");
    heading.textContent = "Student Profile";


    // Adding heading elements to the profile header
    profileHeader.appendChild(icon);
    profileHeader.appendChild(heading);


    // Creating the student details section
    const profileDetails = document.createElement("div");
    profileDetails.className = "profile-details";


    
    function createDetail(labelText, valueText, extraClass = "") {

        const detail = document.createElement("div");
        detail.className = "detail";

        const label = document.createElement("span");
        label.className = "label";
        label.textContent = labelText;

        const value = document.createElement("span");
        value.className = "value " + extraClass;
        value.textContent = valueText;

        detail.appendChild(label);
        detail.appendChild(value);

        return detail;
    }


    
    profileDetails.appendChild(
        createDetail("Name", student.name)
    );

    profileDetails.appendChild(
        createDetail("Roll No", student.rollNumber)
    );

    profileDetails.appendChild(
        createDetail("Department", student.department)
    );

    profileDetails.appendChild(
        createDetail("CGPA", student.cgpa, "cgpa")
    );


    
    profileCard.appendChild(profileHeader);
    profileCard.appendChild(profileDetails);

    profileContainer.appendChild(profileCard);

});
