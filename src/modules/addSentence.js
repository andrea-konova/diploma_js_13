const addSentence = () => {
	const addSentenceBtn = document.querySelector('.add-sentence-btn'),
		sentence = document.querySelector('.sentence'),
		card = sentence.querySelectorAll('.col-md-4');

	addSentenceBtn.addEventListener('click', () => {
		addSentenceBtn.style.display = 'none';

		card.forEach((item, i) => {
			if (item.classList.contains('hidden')) {
				card[i].classList.remove('hidden');
			}
		});

	});
};

export default addSentence;
