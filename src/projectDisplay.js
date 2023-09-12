export function projectDisplay() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    const projectList = [];

    storedTasks.forEach((task) => {
        if (task.project && projectList.includes(task.project)) {
            projectList.push(task.project)
        }
    });
    projectDisplay(projectList);
}

export function projectDivDisplay(projectTasks) {
    if (projectTasks.length === 0 ) return;
    const projectsHeading = document.createElement('h2');
    const navBar = document.querySelector('nav-bar');
    navBar.appendChild(projectsHeading);
    projectsHeading.textContent = 'Projects';
    for (const task of projectTasks) {
        const taskDiv = document.createElement('div');
        navBar.appendChild(taskDiv);
        taskDiv.textContent = task.project;
    }
}