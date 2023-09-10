// Create a whole function for getting index
// because localStorage can't store object methods

export default function getIndex(task, tasks) {
    const index = Number(tasks.indexOf(task));
    return index;
}