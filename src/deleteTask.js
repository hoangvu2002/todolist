import { tasks } from "./index";
import storeData from "./storeData";
import displayTask from "./displayTask";
import { projectDisplay, projectDivDisplay } from "./projectDisplay";
import { loadTasksFromLocalStorage } from "./formSubmit";
import { projectList } from "./projectDisplay";
import setProjectNames from "./getProject";
import { getProject, isProjectName } from "./getProject";
import { displayColor } from "./displayTask";
import getIndex from "./getIndex";

// Function to delete a task
export default function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task at the specified index
    storeData(); // Update local storage
    displayTask(); // Update the display
    //loadTasksFromLocalStorage(); // Get the most updated tasks again
    //projectDisplay(); // Update the projects display on the nav bar
    setProjectNames();
}
