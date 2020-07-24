const sendForm = () => {
	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

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
		const formData = new FormData(form);
		const body = {};
		formData.forEach((val, key) => {
			body[key] = val;
		});
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

	document.addEventListener('submit', event => {
		event.preventDefault();
		const target = event.target;
		postForm(target);
	});

	document.addEventListener('input', event => {
		const target = event.target;

		if (target.classList.contains('phone-user')) {
			target.value = target.value.replace(/[^+\d]/g, '');
		}

		if (target.matches('.form-email')) {
			target.value = target.value.replace(/[а-яА-Я]/g, '');
		}

		if (target.matches('name_1') || target.matches('#name_2')) {
			target.value = target.value.replace(/[^а-яё\s]/ig, '');
		}

	});

};

export default sendForm;
