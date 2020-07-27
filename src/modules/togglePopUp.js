const togglePopUp = () => {
	const popupCheck = document.querySelector('.popup-check'),
		popupCall = document.querySelector('.popup-call'),
		popupDiscount = document.querySelector('.popup-discount'),
		popupConsultation = document.querySelector('.popup-consultation'),
		body = document.querySelector('body'),
		users = document.querySelector('input[name="user_quest"]');

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

		// togglePopUpConsultation
		if (target.matches('.consultation-btn')) {
			if (users.value) {
				popupConsultation.style.display = 'block';
			} else {
				return;
			}
		}
		if (target.matches('.popup-close') || target.matches('.popup-consultation')) {
			popupConsultation.style.display = 'none';
		}

	});
};

export default togglePopUp;
