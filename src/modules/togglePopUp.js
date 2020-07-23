const togglePopUp = () => {
  const popupCall = document.querySelector('.popup-call'),
    body = document.querySelector('body');

  body.addEventListener('click', event => {
    const target = event.target;

    if (target.matches('.call-btn')) {
      popupCall.style.display = 'block';
    }
    if (target.matches('.popup-close') || target.matches('.popup-call')) {
      popupCall.style.display = 'none';
    }


  });

}

export default togglePopUp;