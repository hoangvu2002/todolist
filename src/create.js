import { tasks } from "./index";
export default function createTask(title, desc, due, priority, notes='', project='') {
    return {
        title,
        desc,
        due,
        priority,
        notes,
        done: false,
        project,
        getIndex: () => {
            console.log(tasks);
            const index = tasks.indexOf(this);
            return index;
        }
    }
};