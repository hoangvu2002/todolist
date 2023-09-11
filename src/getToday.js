import { format } from 'date-fns';
import { tasks } from './index';
import deleteTask from './deleteTask';
import { displayColor } from './displayTask';
import { loadTasksFromLocalStorage } from './formSubmit';
import getIndex from './getIndex';

export default function getToday() {
    loadTasksFromLocalStorage(); //Have to load the tasks array
    const taskDisplay = document.querySelector('.task-display');
    while (taskDisplay.firstChild) {
        taskDisplay.removeChild(taskDisplay.firstChild);
    };
    for (const task of tasks) {
        //This if statement is for checking whether the due date of the task is today
        if (!isToday(task.due)) {
            console.log("continue");
            continue;
        }
        
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
        taskTitle.textContent = task.title;
        taskDescription.textContent = task.desc;
        taskDue.textContent = task.due;
        taskNotes.textContent = task.notes;
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

export function isToday(dueDate) {
    const today = new Date();
    const formattedDate = format(today, 'yyyy-MM-dd');
    if (dueDate===formattedDate) {
        return true;
    } else {
        return false;
    }
}

//Attach the click event listener for the today div
const todayDiv = document.querySelector('.today');
todayDiv.addEventListener('click', () => {
    getToday();
})