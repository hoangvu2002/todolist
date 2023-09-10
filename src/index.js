import './style.css';
import {format} from 'date-fns';
import modal from './modal';
import create from './create';
import storeData from './storeData';
export const tasks = [];

const title = document.getElementById('title');
const description = document.getElementById('description');
const dueDate = document.getElementById('due-date');
const priority = document.getElementById('priority');
const notes = document.getElementById('notes');

const today = new Date("2023-09-09");
console.log(today);
console.log(format(today, 'yyyy-MM-dd'));

modal();

//const addTask = document.getElementsByClassName('submit')[0];
//addTask.addEventListener('click', (event) => {
//    event.stopPropagation(); // prevent propagation 
//    console.log('submit');
//    const task = create(title.value, description.value, dueDate.value, priority.value, notes.value);
//    tasks.push(task); 
//    storeData();
//});