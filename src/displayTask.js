import { tasks } from "./index";

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
        
        //
        taskDiv.appendChild(taskTitle);
        taskDiv.appendChild(taskDescription);
        taskDiv.appendChild(taskDue);
        taskTitle.textContent = task.title;
        taskDescription.textContent = task.desc;
        taskDue.textContent = task.due;
        taskDisplay.appendChild(taskDiv);
        taskTitle.style.color = displayColor(task);
    }
}

function displayColor(task) {
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