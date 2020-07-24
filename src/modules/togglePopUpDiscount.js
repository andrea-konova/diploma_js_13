const togglePopUpDiscount = () => {
	const popupDiscount = document.querySelector('.popup-discount'),
		body = document.querySelector('body');

	body.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.sentence-btn')) {
			popupDiscount.style.display = 'block';
		}
		if (target.matches('.popup-close') || target.matches('.popup-discount')) {
			popupDiscount.style.display = 'none';
		}


	});

};

export default togglePopUpDiscount;
