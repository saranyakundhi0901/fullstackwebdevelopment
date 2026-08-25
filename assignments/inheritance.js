// ======================================================
//           TYPES OF INHERITANCE IN JAVASCRIPT
// ======================================================


// ======================================================
// 1. SINGLE INHERITANCE
// ======================================================

// Parent class
class Animal {
    eat() {
        console.log("Animal can eat");
    }
}

// Dog inherits from Animal
// This is SINGLE INHERITANCE
class Dog extends Animal {
    bark() {
        console.log("Dog can bark");
    }
}

console.log("----- 1. Single Inheritance -----");

let dog = new Dog();

dog.eat();      // Parent class method
dog.bark();     // Child class method



// ======================================================
// 2. MULTILEVEL INHERITANCE
// ======================================================

// Grandparent class
class LivingThing {
    breathe() {
        console.log("Living thing can breathe");
    }
}

// Animal2 inherits LivingThing
class Animal2 extends LivingThing {
    walk() {
        console.log("Animal can walk");
    }
}

// Dog2 inherits Animal2
// LivingThing -> Animal2 -> Dog2
// This is MULTILEVEL INHERITANCE
class Dog2 extends Animal2 {
    bark() {
        console.log("Dog can bark");
    }
}

console.log("\n----- 2. Multilevel Inheritance -----");

let dog2 = new Dog2();

dog2.breathe();     // LivingThing method
dog2.walk();        // Animal2 method
dog2.bark();        // Dog2 method



// ======================================================
// 3. HIERARCHICAL INHERITANCE
// ======================================================

// Parent class
class Vehicle {
    start() {
        console.log("Vehicle starts");
    }
}

// Car inherits Vehicle
class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

// Bike also inherits Vehicle
// One parent -> multiple child classes
// This is HIERARCHICAL INHERITANCE
class Bike extends Vehicle {
    ride() {
        console.log("Bike is riding");
    }
}

console.log("\n----- 3. Hierarchical Inheritance -----");

let car = new Car();

car.start();        // Vehicle method
car.drive();        // Car method

let bike = new Bike();

bike.start();       // Vehicle method
bike.ride();        // Bike method



// ======================================================
// 4. MULTIPLE INHERITANCE
// ======================================================

// JavaScript does NOT directly support
// multiple inheritance using multiple "extends".
//
// Example of NOT allowed syntax:
//
// class Child extends Father, Mother {
// }
//
// Instead, JavaScript can achieve this using MIXINS.

// First parent class
class Father {
    fatherProperty() {
        console.log("Property from Father");
    }
}

// Second parent class
class Mother {
    motherProperty() {
        console.log("Property from Mother");
    }
}

// Child class
class Child {
    childProperty() {
        console.log("Property from Child");
    }
}

// Mixin:
// Copy methods from Father into Child
Object.getOwnPropertyNames(Father.prototype).forEach((method) => {

    if (method !== "constructor") {
        Child.prototype[method] = Father.prototype[method];
    }

});

// Copy methods from Mother into Child
Object.getOwnPropertyNames(Mother.prototype).forEach((method) => {

    if (method !== "constructor") {
        Child.prototype[method] = Mother.prototype[method];
    }

});

console.log("\n----- 4. Multiple Inheritance -----");

let child = new Child();

child.fatherProperty();     // Father method
child.motherProperty();     // Mother method
child.childProperty();      // Child method



// ======================================================
// 5. HYBRID INHERITANCE
// ======================================================

// Hybrid inheritance is a combination of
// two or more types of inheritance.
//
// JavaScript does NOT directly support hybrid inheritance.
// We can achieve it using class inheritance + mixins.

// Parent class
class Person {
    introduce() {
        console.log("I am a person");
    }
}

// Student inherits Person
// Person -> Student
class Student extends Person {
    study() {
        console.log("Student is studying");
    }
}

// Another independent class
class Sports {
    play() {
        console.log("Student plays sports");
    }
}

// CollegeStudent inherits Student
// Person -> Student -> CollegeStudent
// This is MULTILEVEL inheritance.
class CollegeStudent extends Student {
    attendCollege() {
        console.log("Student attends college");
    }
}

// Add Sports methods to CollegeStudent using Mixin
Object.getOwnPropertyNames(Sports.prototype).forEach((method) => {

    if (method !== "constructor") {
        CollegeStudent.prototype[method] = Sports.prototype[method];
    }

});

console.log("\n----- 5. Hybrid Inheritance -----");

let student = new CollegeStudent();

student.introduce();        // Person method
student.study();            // Student method
student.attendCollege();   // CollegeStudent method
student.play();             // Sports method using Mixin