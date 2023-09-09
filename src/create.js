export default function createTask(title, desc, due, priority, notes='') {
    return {
        title,
        desc,
        due,
        priority,
        notes,
        done: false,
    }
};