import { tasks } from "./index";
export default function storeData() {
    //localStorage.clear();
    //for (const task of tasks) {
    //    const index = task.getIndex(tasks);
    //    localStorage.setItem(index, JSON.stringify(task));
    //}

    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(tasks));

    //We will change the storing approach here, which will store the
    //entire array to the local storage
}