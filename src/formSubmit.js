//This is responsible for handling the form submit event, since when I use click event
//the callbacks get called many times.
import create from "./create";
import { tasks } from "./index";
import storeData from "./storeData";

document.addEventListener('DOMContentLoaded', () => {
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
    });
});
