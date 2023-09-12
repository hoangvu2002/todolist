
import { loadTasksFromLocalStorage } from "./formSubmit";
import { tasks } from "./index";
import deleteTask from "./deleteTask";
import { projectDisplay, projectDivDisplay } from "./projectDisplay";
import { displayColor } from "./displayTask";
import getIndex from "./getIndex";
import storeData from "./storeData";


// This will be a bit different from the getToday modules because
// we have to check whether we have projects or not and we have to make
// sure it still works when we add or delete projects

export default function setProjectNames() {
    const projects = document.querySelectorAll('#project-heading ~ div');

    if (projects.length) {
        projects.forEach((projectName) => {
            projectName.addEventListener('click', (event) => {
                const name = event.target.textContent;
                getProject(name);
            })
            //setProjectNames(); This bug makes my whole program crash ??
        })
    }
}

export function getProject(name) {
    loadTasksFromLocalStorage(); //Have to load the tasks array
    const taskDisplay = document.querySelector('.task-display');
    while (taskDisplay.firstChild) {
        taskDisplay.removeChild(taskDisplay.firstChild);
    };
    for (const task of tasks) {
        //This if statement is for checking whether the due date of the task is today
        if (!isProjectName(name, task.project)) {
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

export function isProjectName(name, taskProjectName) {
    if (name===taskProjectName) {
        return true;
    } else {
        return false;
    };
}