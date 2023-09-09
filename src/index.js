import './style.css';
import {format} from 'date-fns';
import modal from './modal';

const today = new Date("2023-09-09");
console.log(today);
console.log(format(today, 'yyyy-MM-dd'));

//const addTask = document.querySelector('.add');
//const modal = document.querySelector("[data-modal]");
//addTask.onclick = () => {modal.showModal()};
//
//modal.addEventListener("click", e => {
//    const dialogDimensions = modal.getBoundingClientRect()
//    if (
//      e.clientX < dialogDimensions.left ||
//      e.clientX > dialogDimensions.right ||
//      e.clientY < dialogDimensions.top ||
//      e.clientY > dialogDimensions.bottom
//    ) {
//      modal.close()
//    }
//  });
//
modal();
