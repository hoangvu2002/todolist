import { tasks } from "./index";
import storeData from "./storeData";
import displayTask from "./displayTask";

// Function to delete a task
export default function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task at the specified index
    storeData(); // Update local storage
    displayTask(); // Update the display
}
