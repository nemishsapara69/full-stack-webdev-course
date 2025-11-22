console.log("--- Day 8: DOM Manipulation ---");

// -------------------------------------------------
// 1. SELECTING ELEMENTS (Finding things on the page)
// -------------------------------------------------

// Select by ID (Returns the single element)
const titleElement = document.getElementById('main-title');

// Select by Class (Returns a list/NodeList of elements)
const paragraphs = document.getElementsByClassName('content-paragraph');
// Note: paragraphs is a collection, so you access the first one with [0]

// Select by CSS Selector (Most flexible, can use IDs or Classes)
const button = document.querySelector('#change-text-btn');
const styleBox = document.querySelector('#style-box');


// -------------------------------------------------
// 2. MANIPULATING CONTENT (Changing what the user sees)
// -------------------------------------------------

// Change the text of the title element
titleElement.textContent = "DOM Manipulation **Complete**!"; 
// Use .textContent to change the text content

// Change the text of the first paragraph
if (paragraphs.length > 0) {
    paragraphs[0].textContent = "This text was changed successfully using getElementsByClassName!";
}

console.log("Text content updated in HTML.");


// -------------------------------------------------
// 3. MANIPULATING STYLES (Changing the appearance)
// -------------------------------------------------

// Change the background color of the style box
styleBox.style.backgroundColor = 'lightblue';
styleBox.style.border = '2px dashed navy';

console.log("Style properties updated on the box.");


// -------------------------------------------------
// PRACTICE TASK: CONNECTING TO THE BUTTON
// We will set this up fully tomorrow, but try this:
// The button element is stored in the 'button' variable.
// Try adding a line here to change the button's text content when the script runs:
// button.textContent = "Text Changed on Load";
// -------------------------------------------------