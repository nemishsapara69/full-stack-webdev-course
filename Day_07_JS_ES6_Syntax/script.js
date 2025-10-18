console.log("--- Day 7: Modern JavaScript (ES6+) Syntax ---");

// -------------------------------------------------
// 1. LET and CONST (Block Scoping)
// 'let' is for variables that can change. 'const' is for constants (best practice).
// -------------------------------------------------
const PI = 3.14159; // Cannot be reassigned later!
let counter = 0;    // Can be updated

// PI = 3.14; // This would cause an ERROR!

console.log(`PI is always: ${PI}`);


// -------------------------------------------------
// 2. ARROW FUNCTIONS (Cleaner way to write functions)
// -------------------------------------------------

// Traditional Function
function multiply(x, y) {
    return x * y;
}

// ES6 Arrow Function (Concise Syntax)
const add = (x, y) => x + y; // Implicit return when no curly braces {} are used

// Arrow Function with one parameter (parentheses are optional)
const square = num => num * num; 

console.log("\n--- Arrow Functions ---");
console.log("Traditional Multiply (3, 5):", multiply(3, 5));
console.log("Arrow Function Add (10, 5):", add(10, 5));
console.log("Arrow Function Square (7):", square(7));


// -------------------------------------------------
// 3. TEMPLATE LITERALS (Easier String Building)
// Use backticks (``) instead of quotes ('')
// -------------------------------------------------
const item = "Laptop";
const price = 1200;

// Old way (messy with concatenation)
const oldMessage = "The " + item + " costs $" + price + ".";

// ES6 Template Literal (cleaner using ${...})
const newMessage = `The ${item} costs $${price}. The price is ${price >= 1000 ? "High" : "Low"}.`;

console.log("\n--- Template Literals ---");
console.log("Old Message:", oldMessage);
console.log("New Message:", newMessage);


// -------------------------------------------------
// *** PRACTICE TASK ***
// Write an ES6 arrow function called 'checkAge' that takes an age (num) 
// and returns the string: "Adult" if age >= 18, otherwise "Minor".
// -------------------------------------------------

// const checkAge = (age) => {
//     // Write your logic here
// };
// console.log("Age Check (19):", checkAge(19));