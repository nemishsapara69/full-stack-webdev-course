console.log("--- Day 9: JS Event Handling ---");

// --- 1. Select Elements (Same as Day 8) ---
const titleElement = document.getElementById('main-title');
const paragraphs = document.getElementsByClassName('content-paragraph');
const button = document.getElementById('change-text-btn'); // Selected by ID
const styleBox = document.getElementById('style-box');

// --- 2. DOM Manipulation on Load (Optional, you can reuse Day 8's logic) ---
if (paragraphs.length > 0) {
    paragraphs[0].textContent = "Element selection complete. Now waiting for a click!";
}
styleBox.style.backgroundColor = 'lightgray'; // Reset color from Day 8 experiment


// -------------------------------------------------
// 3. EVENT LISTENER: Making the button interactive
// -------------------------------------------------

// Add an event listener to the button element
button.addEventListener('click', function() {
    
    // --- CODE INSIDE HERE RUNS ONLY WHEN THE BUTTON IS CLICKED ---
    
    // 3a. Change the button text immediately
    button.textContent = "Text Changed!";
    
    // 3b. Change the title text again (to show it's a new action)
    titleElement.textContent = "Event Handler Fired!";
    
    // 3c. Change the style box color to something new (e.g., Red)
    styleBox.style.backgroundColor = '#f44336'; // Red
    styleBox.style.border = '2px dashed darkred';

    console.log("Button was clicked! Event handler executed.");
});


// -------------------------------------------------
// PRACTICE TASK (COMPLETED):
// Add a second event listener to the styleBox element that listens for a 'mouseover' 
// event. When the mouse hovers over the box, change its background color to yellow.
// -------------------------------------------------

styleBox.addEventListener('mouseover', function() {
    // Code to run when the mouse hovers over styleBox
    styleBox.style.backgroundColor = 'yellow'; 
    console.log("Mouseover event detected on styleBox!");
});

// OPTIONAL: You might also want a 'mouseout' to return the color, so the box isn't permanently yellow:
styleBox.addEventListener('mouseout', function() {
    // When the mouse leaves, return it to the color set by the click handler (Red)
    styleBox.style.backgroundColor = '#f44336'; 
});