import { tasks } from "./index";
export default function storeData() {
    localStorage.clear();
    for (const task of tasks) {
        const index = task.getIndex();
        localStorage.setItem(index, JSON.stringify(task));
    }
}