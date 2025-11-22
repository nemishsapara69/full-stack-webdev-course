console.log("--- Day 10: Project 1 - To-Do List ---");

// 1. Select necessary elements (DOM Selection - Day 8)
const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// 2. Event Listener for Adding a Task (Event Handling - Day 9)
addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim(); // Get text and remove extra spaces

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return; // Stop the function if the input is empty
    }

    // --- Create New List Item (The new task element) ---
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    // --- Create the Span for the text ---
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // --- Create the Delete Button ---
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    // --- Attach the Delete Button's Event Listener ---
    deleteButton.addEventListener('click', function() {
        // The 'remove()' method deletes the parent element (the <li>)
        listItem.remove(); 
    });

    // --- Add functionality to the task item itself (toggle completion) ---
    listItem.addEventListener('click', function(event) {
        // Stop the click from bubbling up to the main listItem click if we clicked the delete button
        if (event.target === deleteButton) {
            return; 
        }
        // Toggle the 'completed' class defined in CSS
        listItem.classList.toggle('completed');
    });
    
    // --- Assemble the new list item ---
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    
    // --- Add the assembled item to the main UL ---
    taskList.appendChild(listItem);

    // --- Clean up for the next task ---
    taskInput.value = ''; // Clear the input field
    taskInput.focus();    // Put the cursor back in the input field
}

// END OF DAY 10 WORK