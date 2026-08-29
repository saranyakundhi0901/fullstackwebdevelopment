// 1. SINGLE INHERITANCE
console.log("Single Inheritance");
class Vehicle {
    start() {
        console.log("Vehicle is starting.");
    }
}
class Car extends Vehicle {
    drive() {
        console.log("Car is driving.");
    }
}
let car = new Car();
car.start();
car.drive();

// 2. MULTILEVEL INHERITANCE
console.log("\nMultilevel Inheritance");
class Vehicle2 {
    start() {
        console.log("Vehicle is starting.");
    }
}
class Car2 extends Vehicle2 {
    drive() {
        console.log("Car is driving.");
    }
}
class SportsCar extends Car2 {
    boost() {
        console.log("SportsCar is boosting speed.");
    }
}
let sportsCar = new SportsCar();
sportsCar.start();
sportsCar.drive();
sportsCar.boost();

// 3. HIERARCHICAL INHERITANCE
console.log("\nHierarchical Inheritance");
class Vehicle3 {
    start() {
        console.log("Vehicle is starting.");
    }
}
class Car3 extends Vehicle3 {
    drive() {
        console.log("Car is driving.");
    }
}
class Bike extends Vehicle3 {
    pedal() {
        console.log("Bike is pedaling.");
    }
}
let car3 = new Car3();
let bike = new Bike();
car3.start();
car3.drive();
bike.start();
bike.pedal();

// 4. MULTIPLE INHERITANCE
// Using Mixins
console.log("\nMultiple Inheritance");
const GPSEnabled = {
    locate() {
        console.log("Locating position via GPS.");
    }
};
const Bluetooth = {
    connect() {
        console.log("Connecting via Bluetooth.");
    }
};
class SmartCar {
    honk() {
        console.log("SmartCar is honking.");
    }
}
// Add both GPSEnabled and Bluetooth features
Object.assign(SmartCar.prototype, GPSEnabled, Bluetooth);
let smartCar = new SmartCar();
smartCar.honk();
smartCar.locate();
smartCar.connect();

// 5. HYBRID INHERITANCE
console.log("\nHybrid Inheritance");
class Vehicle4 {
    start() {
        console.log("Vehicle is starting.");
    }
}
class Car4 extends Vehicle4 {
    drive() {
        console.log("Car is driving.");
    }
}
class Bike4 extends Vehicle4 {
    pedal() {
        console.log("Bike is pedaling.");
    }
}
const Turbo = {
    boost() {
        console.log("Turbo boost activated.");
    }
};
Object.assign(Car4.prototype, Turbo);
let car4 = new Car4();
let bike4 = new Bike4();
car4.start();
car4.drive();
car4.boost();
bike4.start();
bike4.pedal();
