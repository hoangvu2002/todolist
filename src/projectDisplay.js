import { tasks } from "./index";
export const projectList = [];

export function projectDisplay() {
    //const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    console.log('fire');

    tasks.forEach((task) => {
        if (task.project && !projectList.includes(task.project)) {
            projectList.push(task.project)
        }
    });
    projectDivDisplay(projectList);
    console.log(projectList.length);
}

export function projectDivDisplay(projectTasks) {
    console.log(projectTasks.length);
    if (projectTasks.length === 0 ) return;
    const projectDisplay = document.querySelector('.project-display');
    while (projectDisplay.firstChild) {
        projectDisplay.removeChild(projectDisplay.firstChild);
    };
    const projectsHeading = document.createElement('h2');
    projectDisplay.appendChild(projectsHeading);
    projectsHeading.textContent = 'Projects';
    projectsHeading.id = 'project-heading';
    for (const task of projectTasks) {
        const taskDiv = document.createElement('div');
        projectDisplay.appendChild(taskDiv);
        taskDiv.textContent = task;
    }
}