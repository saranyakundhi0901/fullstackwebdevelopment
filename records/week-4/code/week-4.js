// JavaScript Functions and Arrays

// Function with parameter
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Alice"));


// Function with multiple parameters
function add(a, b) {
    return a + b;
}

console.log("Sum =", add(10, 30));


// Arrow function
const addition = (a, b) => a + b;

console.log("Arrow Sum =", addition(30, 30));


// Anonymous function
const greets = function (name) {
    return "Hello " + name;
};

console.log(greets("Bob"));


// Callback function
function hello(name, callback) {
    console.log("Hello " + name);
    callback();
}

function bye() {
    console.log("Bye!");
}

hello("John", bye);


// Callback using anonymous function
function greetings(name, callback) {
    console.log("Hello " + name);
    callback();
}

greetings("Lilly", function () {
    console.log("Goodbye!");
});


// Callback using arrow function
function good(name, callback) {
    console.log("Hello " + name);
    callback();
}

good("John", () => {
    console.log("Goodbye!");
});


// setTimeout callback
setTimeout(function () {
    console.log("Hello after 2 seconds");
}, 2000);



// Array Operations


let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:", fruits);
console.log("Type:", typeof fruits);


// Accessing elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);


// Modifying element
fruits[1] = "Watermelon";

console.log("After modifying index 1:", fruits);


// push()
fruits.push("Orange");

console.log("After push():", fruits);


// pop()
fruits.pop();

console.log("After pop():", fruits);


// unshift()
fruits.unshift("Grapes");

console.log("After unshift():", fruits);


// shift()
fruits.shift();

console.log("After shift():", fruits);


// length
console.log("Length of Array:", fruits.length);


