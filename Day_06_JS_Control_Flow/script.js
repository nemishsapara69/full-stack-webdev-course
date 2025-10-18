console.log("--- Day 6: JS Control Flow ---");

// -------------------------------------------------
// 1. CONDITIONALS: Making Decisions
// -------------------------------------------------

const userRole = "admin"; // Try changing this to "guest" or "user"
let accessLevel = "";

if (userRole === "admin") {
    accessLevel = "Full access granted.";
} else if (userRole === "user") {
    accessLevel = "Limited access.";
} else {
    accessLevel = "Access denied. Please log in.";
}

console.log(`User Role: ${userRole} -> ${accessLevel}`);


// --- Switch Statement Example ---
const dayNumber = 5; // 1=Mon, 5=Fri, 6=Sat, 7=Sun
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
    case 7: // Both Saturday and Sunday are handled here
        dayName = "Weekend!";
        break;
    default:
        dayName = "Weekday";
}

console.log(`Day ${dayNumber} is: ${dayName}`);


// -------------------------------------------------
// 2. LOOPS: Repeating Actions
// -------------------------------------------------

// --- For Loop: Ideal when you know how many times to loop ---
console.log("\n--- For Loop (Counting to 5) ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Loop Count: ${i}`);
}


// --- While Loop: Ideal when you loop until a condition becomes false ---
console.log("\n--- While Loop (Countdown) ---");
let countdown = 3;
while (countdown > 0) {
    console.log(`T-Minus: ${countdown}`);
    countdown--; // Important: Must change the condition inside the loop!
}
console.log("LIFT OFF!");


/* *** PRACTICE TASK ***
   Use a 'for' loop to print out the multiples of 3 from 3 up to 30.
*/