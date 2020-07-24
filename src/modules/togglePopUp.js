const togglePopUp = () => {
	const popupCheck = document.querySelector('.popup-check'),
		popupCall = document.querySelector('.popup-call'),
		popupDiscount = document.querySelector('.popup-discount'),
		body = document.querySelector('body');

	body.addEventListener('click', event => {
		const target = event.target;

		// togglePopUpCall
		if (target.matches('.call-btn')) {
			popupCall.style.display = 'block';
		}
		if (target.matches('.popup-close') || target.matches('.popup-call')) {
			popupCall.style.display = 'none';
		}

		// togglePopUpDiscount
		if (target.matches('.sentence-btn')) {
			popupDiscount.style.display = 'block';
		}
		if (target.matches('.popup-close') || target.matches('.popup-discount')) {
			popupDiscount.style.display = 'none';
		}

		// togglePopUpCheck
		if (target.matches('.check-btn')) {
			popupCheck.style.display = 'block';
		}
		if (target.matches('.popup-close') || target.matches('.popup-check')) {
			popupCheck.style.display = 'none';
		}

	});
};

export default togglePopUp;
