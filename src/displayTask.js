import { tasks } from "./index";
import getIndex from "./getIndex";
import deleteTask from "./deleteTask";

export default function displayTask() {
    const taskDisplay = document.querySelector('.task-display');
    while (taskDisplay.firstChild) {
        taskDisplay.removeChild(taskDisplay.firstChild);
    }
    for (const task of tasks) {
        const taskDiv = document.createElement('div');
        const taskTitle = document.createElement('p');
        const taskDescription = document.createElement('p');
        const taskDue = document.createElement('p');
        const taskNotes = document.createElement('p');
        const deleteButton = document.createElement('button');
        
        //
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDescription);
        taskDiv.appendChild(taskDue);
        taskDiv.appendChild(taskNotes);
        taskDiv.appendChild(deleteButton);
        taskDiv.classList.add('task-div');
        taskTitle.classList.add('task-title');
        taskDescription.classList.add('task-desc');
        taskDue.classList.add('task-due');
        taskNotes.classList.add('task-notes');
        deleteButton.classList.add('delete-button');
        taskTitle.textContent = task.title ? task.title : 'No title';
        taskDescription.textContent = task.desc ? task.desc : 'No description';
        taskDue.textContent = task.due ? task.due : 'No due date';
        taskNotes.textContent = task.notes ? task.notes : 'No notes';
        taskDisplay.appendChild(taskDiv);
        taskTitle.style.color = displayColor(task);
        const index = getIndex(task, tasks);
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
            taskDisplay.removeChild(taskDiv);
        })
    }
}

export function displayColor(task) {
    //I'm gonna put some logic in here to display color depending on the priority
    //I will revise on my knowledge about solid design principle
    //I will also research how to store object methods using JSON
    switch (task.priority) {
        case 'non-urgent':
            return 'rgb(41, 206, 91)';
            break;
        case 'urgent':
            return 'rgb(228, 224, 21)';
            break;
        case 'important':
            return 'rgb(228, 21, 21)';
            break;
    }
}