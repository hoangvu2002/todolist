import './style.css';
import {format} from 'date-fns';
import modal from './modal';

const today = new Date("2023-09-09");
console.log(today);
console.log(format(today, 'yyyy-MM-dd'));

modal();
