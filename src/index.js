

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';


import togglePopUpCall from './modules/togglePopUpCall';
import togglePopUpDiscount from './modules/togglePopUpDiscount';
import sendForm from './modules/sendForm';

// modal window popupCall
togglePopUpCall();
// modal window popupDiscount
togglePopUpDiscount();
// send-ajax-form
sendForm();
