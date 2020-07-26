

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

const modalState = {};

import togglePopUp from './modules/togglePopUp';
import sendForm from './modules/sendForm';
import accordion from './modules/accordion';
import addSentence from './modules/addSentence';
import calc from './modules/calc';


togglePopUp();
calc(modalState);
sendForm(modalState);
accordion();
addSentence();

