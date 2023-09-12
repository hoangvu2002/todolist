//This is responsible for handling the form submit event, since when I use click event
//the callbacks get called many times.
import create from "./create";
import { tasks } from "./index";
import storeData from "./storeData";
import displayTask from "./displayTask";

// Function to load tasks from local storage
export function loadTasksFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if (storedTasks) {
        // If there are tasks in local storage, replace the tasks array with the stored tasks
        tasks.length = 0; // Clear the existing tasks array
        tasks.push(...storedTasks); // Push the stored tasks into the array
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // Load tasks from local storage when the page loads
    loadTasksFromLocalStorage();

    const form = document.getElementById('task-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form data and process it as needed
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const dueDate = document.getElementById('due-date').value;
        const priority = document.getElementById('priority').value;
        const notes = document.getElementById('notes').value;

        // Perform your task creation and storage logic here
        const task = create(title, description, dueDate, priority, notes);
        tasks.push(task); 
        storeData();
        displayTask(); //Display the projects
    });
});

function cleanInput() {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const dueDate = document.getElementById('due-date');
    const priority = document.getElementById('priority');
    const notes = document.getElementById('notes');

    title.value = '';
    description.value = '';
    dueDate.value = '';
    priority.value = 'non-urgent';
    notes.value = '';
}

const submitButton = document.querySelector('.delete-button');
submitButton.addEventListener('click', (event) => {
    event.stopPropagation();
    cleanInput();
})