

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';


// import togglePopUpCall from './modules/togglePopUpCall';
// import togglePopUpDiscount from './modules/togglePopUpDiscount';
import togglePopUp from './modules/togglePopUp';
import sendForm from './modules/sendForm';
import accordion from './modules/accordion';

// modal window popupCall
// togglePopUpCall();
// modal window popupDiscount
// togglePopUpDiscount();
// modal window popupCheck
togglePopUp();
// send-ajax-form
sendForm();
// accordion
accordion();
