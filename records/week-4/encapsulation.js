// Class
class Student {

    // Private fields
    #name;
    #marks;

    // Constructor
    constructor(name, marks) {
        this.#name = name;
        this.#marks = marks;
    }

    // Public method to display data
    display() {
        console.log("Student Name:", this.#name);
        console.log("Student Marks:", this.#marks);
    }
}

// Creating Object
let s1 = new Student("Saranya", 95);

// Calling Method
s1.display();