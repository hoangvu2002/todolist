import { tasks } from "./index";
export default function storeDate() {
    localStorage.clear();
    for (task of tasks) {
        const index = task.getIndex();
        localStorage.setItem(index, JSON.stringify(task));
    }
}