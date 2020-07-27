const sendForm = () => {
	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
		typeSeptic = document.getElementById('myonoffswitch'),
		bilgeSeptic = document.getElementById('myonoffswitch-two'), // не очень понятное значение приходит в объект
		firstDiam = document.getElementById('first_diam'),
		firstNum = document.getElementById('first_num'),
		secondDiam = document.getElementById('second_diam'),
		secondNum = document.getElementById('second_num'),
		distance = document.getElementById('length'),
		calcResult = document.getElementById('calc-result'),
		users = document.querySelector('input[name="user_quest"]');

	const userQuest = {
		quest: '',
	};

	const dataSept = {
		septicType: false,
		firstWell: {
			diam: '',
			num: '',
		},
		secondWell: {
			diam: '',
			num: '',
		},
		bilge: false,
		distance: 0,
		summa: 0
	};

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 2rem;';
	statusMessage.style.fontWeight = 'bold';
	statusMessage.style.color = '#85be32';

	const hideStatusMessage = () => {
		statusMessage.style.display = 'none';
	};

	const postDate = body => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'aplication/json'
		},
		body: JSON.stringify(body),
		credentials: 'include'
	});

	const postForm = target => {
		const form = target;
		form.appendChild(statusMessage);
		statusMessage.style.display = 'block';
		statusMessage.textContent = loadMessage;
		const body = {};
		if (form.getAttribute('data-calc') === 'end') {
			dataSept.firstWell.diam = firstDiam.value;
			dataSept.firstWell.num = firstNum.value;
			if (typeSeptic.checked) { // пофиксить условие
				dataSept.secondWell.diam = 'no';
				dataSept.secondWell.num = 'no';
				dataSept.septicType = '1';
			} else {
				dataSept.secondWell.diam = secondDiam.value;
				dataSept.secondWell.num = secondNum.value;
				dataSept.septicType = '2';
			}
			if (bilgeSeptic.checked) {
				dataSept.bilge = 'yes';
			} else {
				dataSept.bilge = 'no';
			}
			dataSept.distance = distance.value;
			dataSept.summa = calcResult.value;
			const formData = new FormData(form);
			formData.forEach((val, key) => {
				body[key] = val;
			});
			body.calcDate = dataSept;
			distance.value = '';
		} else if (form.getAttribute('data-calc') === 'consul') {
			userQuest.quest = users.value;
			const formData = new FormData(form);
			formData.forEach((val, key) => {
				body[key] = val;
			});
			body.question = userQuest;
			users.value = '';
		} else {
			const formData = new FormData(form);
			formData.forEach((val, key) => {
				body[key] = val;
			});
		}

		postDate(body)
			.then(request => {
				if (request.status !== 200) {
					throw new Error('status network not 200');
				}
				statusMessage.textContent = successMessage;
				setTimeout(hideStatusMessage, 3000);
			})
			.catch(error => {
				statusMessage.textContent = errorMessage;
				setTimeout(hideStatusMessage, 3000);
				console.error(error);
			});

		const inputs = form.querySelectorAll('input');
		for (let index = 0; index < inputs.length; index++) {
			inputs[index].value = '';
		}
	};

	const elementsForm = [];

	const valid = target => {
		for (const elem of target.elements) {
			if (elem.tagName.toLowerCase() !== 'button' && elem.type !== 'button') {
				elementsForm.push(elem);
			}
		}

		elementsForm.forEach(elem => {
			if (!elem.value) {
				// elem.style.border = '1px solid red';
				return;
			} else {
				// elem.style.border = ''; // почему-то не срабатывает
				postForm(target);
			}
		});
	};

	document.addEventListener('submit', event => {
		event.preventDefault();
		const target = event.target;
		valid(target);
	});

	document.addEventListener('input', event => {
		const target = event.target;

		if (target.classList.contains('phone-user')) {
			target.value = target.value.replace(/[^+\d]/g, '');
		}

		if (target.matches('name_1') || target.matches('#name_2')) {
			target.value = target.value.replace(/[^а-яё\s]/ig, '');
		}

		if (target.classList.contains('mess')) {
			target.value = target.value.replace(/[^,.;!?а-яА-Я -]/s, '');
		}

	});

};

export default sendForm;
