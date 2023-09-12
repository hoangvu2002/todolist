import { format } from 'date-fns';
import { tasks } from './index';
import deleteTask from './deleteTask';
import { displayColor } from './displayTask';
import { loadTasksFromLocalStorage } from './formSubmit';
import getIndex from './getIndex';
import { projectDisplay, projectDivDisplay } from './projectDisplay';
import storeData from './storeData';

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
        const checkList = document.createElement('input');
        const taskProject = document.createElement('span');
        
        //
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDescription);
        taskDiv.appendChild(taskDue);
        taskDiv.appendChild(taskNotes);
        taskDiv.appendChild(deleteButton);
        taskDiv.appendChild(checkList);
        taskDiv.appendChild(taskProject);
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
        taskProject.textContent = task.project ? `Project: ${task.project}` : '';
        taskDisplay.appendChild(taskDiv);
        taskTitle.style.color = displayColor(task);
        const index = getIndex(task, tasks);
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            //deleteTodayTask(index);
            //debug
            tasks.splice(index, 1);
            storeData();
            taskDisplay.removeChild(taskDiv);
            projectDisplay();
            //
            taskDisplay.removeChild(taskDiv);
        })
        checkList.type = 'checkbox';
        if (task.done) {
            checkList.checked = true;
        } else {
            checkList.checked = false;
        }
        checkList.addEventListener('change', () => {
            if (checkList.checked) {
                task.done = true;
                storeData();
            } else {
                task.done = false;
                storeData();
            }
        })
    };
    loadTasksFromLocalStorage(); // debug
    projectDisplay(); //debug
}

function deleteTodayTask(index) {
    tasks.splice(index, 1); // Remove the task at the specified index
    storeData(); // Update local storage
    getToday(); // Update the display
    //loadTasksFromLocalStorage(); // Get the most updated tasks again
    //projectDisplay(); // Update the projects display on the nav bar
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