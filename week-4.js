//array methods

let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:", fruits);
console.log(typeof(fruits));

//acessing elements by indexing
console.log("first fruit:",fruits[0]);
console.log("second fruit:",fruits[1]);

//modifying elements
fruits[1]="Watermelon";
console.log("after modifying at index 1:",fruits);

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




//functions

// Function without parameters
function welcome() {
    console.log("Welcome to JavaScript");
}

// Function with parameters
function add(a, b) {
    console.log("Sum =", a + b);
}

// Function with return value
function square(num) {
    return num * num;
}

// Function Calls
welcome();
add(10, 20);

let result = square(5);
console.log("Square =", result);