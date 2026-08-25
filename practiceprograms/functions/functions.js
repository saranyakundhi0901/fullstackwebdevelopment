/**
 * JavaScript Core Concepts Demonstration
 * Topics: Functions, Arrow Functions, Anonymous Functions, Callback Functions, Promises
 * Each topic compares WITHOUT vs WITH the concept, so the difference is clear.
 */

console.log("========================================");
console.log("TOPIC 1: FUNCTIONS");
console.log("A function lets us write logic once and reuse it many times.");
console.log("========================================");

// WITHOUT function -> logic is written directly, cannot be reused
console.log("[Without Function] Direct result:", 5 + 3);

// WITH function -> same logic reused with different inputs
function add(a, b) {
    return a + b;
}
console.log("[With Function] add(5, 3) =", add(5, 3));
console.log("[With Function] add(10, 20) =", add(10, 20));


console.log("\n========================================");
console.log("TOPIC 2: ARROW FUNCTIONS");
console.log("Arrow functions are a shorter way to write normal functions.");
console.log("========================================");

// WITHOUT arrow function -> normal function syntax (longer)
function multiplyNormal(a, b) {
    return a * b;
}
console.log("[Normal Function] multiplyNormal(4, 5) =", multiplyNormal(4, 5));

// WITH arrow function -> shorter syntax, no "function" or "return" keyword needed
const multiplyArrow = (a, b) => a * b;
console.log("[Arrow Function] multiplyArrow(4, 5) =", multiplyArrow(4, 5));
// Both give the SAME output 20 -> only the way of writing changed


console.log("\n========================================");
console.log("TOPIC 3: ANONYMOUS FUNCTIONS");
console.log("A function with no name, usually stored in a variable or passed directly.");
console.log("========================================");

// WITHOUT anonymous function -> needs a separate named function every time
function greetNamed() {
    console.log("[Named Function] Hello, my name is greetNamed");
}
greetNamed();

// WITH anonymous function -> no name, just stored in a variable
const greetAnonymous = function () {
    console.log("[Anonymous Function] Hello, I have no function name");
};
greetAnonymous();


console.log("\n========================================");
console.log("TOPIC 4: CALLBACK FUNCTIONS");
console.log("A function passed as an argument, which runs AFTER another function finishes.");
console.log("========================================");

// WITHOUT callback -> function does its task, we cannot add extra action after it
function processData(data) {
    console.log("[Without Callback] Processing:", data);
}
processData("Student Marks");

// WITH callback -> we pass a function that runs only after processing is done
function processDataWithCallback(data, callback) {
    console.log("[With Callback] Processing:", data);
    callback(data); // runs after the above line, not before
}

processDataWithCallback("Student Marks", function (result) {
    console.log("[With Callback -> Anonymous] Ran after processing:", result);
});

processDataWithCallback("Attendance Data", (result) => {
    console.log("[With Callback -> Arrow] Ran after processing:", result);
});


console.log("\n========================================");
console.log("TOPIC 5: PROMISES");
console.log("A Promise represents a future result of an async task: success or failure.");
console.log("========================================");

// WITHOUT promise -> only callback used, gets messy for multiple async steps (callback hell)
function fetchDataCallback(callback) {
    setTimeout(() => {
        callback("[Without Promise] Data fetched using plain callback (after 1 sec)");
    }, 1000);
}
fetchDataCallback((result) => {
    console.log(result);
});

// WITH promise -> success handled in .then(), failure handled in .catch()
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // change to false to see the .catch() output instead

            if (success) {
                resolve("[With Promise] Data fetched SUCCESSFULLY (after 1.5 sec)");
            } else {
                reject("[With Promise] ERROR occurred while fetching data");
            }
        }, 1500);
    });
}

fetchDataPromise()
    .then((result) => console.log(result))   // runs only if resolve() was called
    .catch((error) => console.log(error));   // runs only if reject() was called

// Note: setTimeout/Promise outputs appear LAST because they are asynchronous
// (they wait for their timer, while the rest of the code runs immediately)
