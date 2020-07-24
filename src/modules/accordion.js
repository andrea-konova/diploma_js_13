const accordion = () => {
	const questions = document.querySelector('.questions'),
		tabContent = document.querySelectorAll('.tab-content');

	questions.addEventListener('click', event => {
		event.preventDefault();
		let target = event.target;
		target = target.closest('.panel-heading');

		if (target) {
			const context = target.nextElementSibling;
			tabContent.forEach((item, i) => {
				if (item === context) {
					tabContent[i].classList.add('in');
				} else {
					tabContent[i].classList.remove('in');
				}
			});
		}

	});
};

export default accordion;
