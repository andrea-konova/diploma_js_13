

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';


import togglePopUp from './modules/togglePopUp';
import sendForm from './modules/sendForm';

// modal window popupCall
togglePopUp();
// send-ajax-form
sendForm();
