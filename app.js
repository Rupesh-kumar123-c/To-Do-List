// Get elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return; // Don't add empty tasks

    // Create new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${taskText}
        <button class="done">Done</button>
        <button class="delete">Delete</button>
    `;
    
    // Add event listeners for Done and Delete buttons
    listItem.querySelector('.done').addEventListener('click', () => toggleDone(listItem));
    listItem.querySelector('.delete').addEventListener('click', () => deleteTask(listItem));

    // Append list item to the list
    taskList.appendChild(listItem);

    // Clear input field
    taskInput.value = '';
}

// Toggle task as done or not
function toggleDone(task) {
    task.classList.toggle('done');
}

// Delete task
function deleteTask(task) {
    task.remove();
}

// Event listener for add task button
addTaskButton.addEventListener('click', addTask);

// Allow pressing Enter to add task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
