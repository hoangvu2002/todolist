import { tasks } from "./index";
import storeData from "./storeData";

// Function to delete a task
export function deleteTask(index) {
    tasks.splice(index, 1); // Remove the task at the specified index
    storeData(); // Update local storage
}
