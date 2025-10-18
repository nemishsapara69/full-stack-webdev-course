// -------------------------------------------------
// 1. VARIABLES: Storing Data
// Use 'const' for values that won't change, 'let' for values that might change.
// -------------------------------------------------
const courseName = "Full Stack WebDev 40-Day";
let currentDay = 5; // This value will change as you progress

console.log("--- Day 5: JS Fundamentals ---");
console.log("Course:", courseName);
console.log("We are on Day:", currentDay);

// You can reassign 'let' variables
currentDay = currentDay + 1; 
console.log("Tomorrow will be Day:", currentDay);


// -------------------------------------------------
// 2. DATA TYPES: What kind of data is it?
// -------------------------------------------------
const userName = "Learner";              // String (text)
const isLearning = true;                 // Boolean (true or false)
const hoursSpent = 3.5;                  // Number (integers or decimals)
const todayTopic = null;                 // Null (intentionally empty value)

console.log("\n--- Data Types ---");
console.log("User Name Type:", typeof userName);
console.log("Is Learning Type:", typeof isLearning);


// -------------------------------------------------
// 3. OPERATORS: Doing Math and Comparisons
// -------------------------------------------------
const a = 10;
const b = 3;

const sum = a + b;           // Arithmetic: Addition
const isGreater = a > b;     // Comparison: Greater than (results in true/false)
const isEqual = a == "10";   // Comparison: Loose Equality (10 == "10" is true)

console.log("\n--- Operators ---");
console.log("10 + 3 =", sum);
console.log("Is 10 greater than 3?", isGreater);
console.log("Is 10 equal to '10' (loose)?", isEqual);

// *** PRACTICE TASK FOR YOURSELF ***
// Uncomment the lines below and see the results in your console!
// let c = 5;
// c = c * 2; 
// console.log("Variable 'c' after multiplication:", c);