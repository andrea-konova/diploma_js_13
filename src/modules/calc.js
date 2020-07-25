const calc = () => {
	const constructor = document.querySelector('.constructor'),
		panel = constructor.querySelectorAll('.panel-collapse'),
		panelDefault = constructor.querySelectorAll('.panel-default'),
		typeSeptic = document.getElementById('myonoffswitch'),
		bilgeSeptic = document.getElementById('myonoffswitch-two'),
		firstDiam = document.getElementById('first_diam'),
		firstNum = document.getElementById('first_num'),
		secondDiam = document.getElementById('second_diam'),
		secondNum = document.getElementById('second_num'),
		second = constructor.querySelectorAll('.hidden'),
		calcResult = document.getElementById('calc-result');

	const countSum = () => {
		let total = 0,
			diam = 0,
			num = 0,
			diam2 = 0,
			num2 = 0,
			bilge = 0,
			price;

		if (typeSeptic.checked) {
			price = 10000;
			second.forEach((item, i) => {
				if (item.classList.contains('hidden')) {
					second[i].classList.add('hidden');
				}
			});
		} else {
			price = 15000;
			second.forEach((item, i) => {
				if (item.classList.contains('hidden')) {
					second[i].classList.remove('hidden');
				}
			});
		}

		const diamValue1 = firstDiam.options[firstDiam.selectedIndex].value,
			numValue1 = firstNum.options[firstNum.selectedIndex].value;

		if (diamValue1 === '2 метра') {
			diam = price * 0.2;
		}
		if (numValue1 === '2 штуки') {
			num = price * 0.3;
		} else if (numValue1 === '3 штуки') {
			num = price * 0.5;
		}

		if (bilgeSeptic.checked) {
			if (typeSeptic.checked) {
				bilge = 1000;
			} else {
				bilge = 2000;
			}

		}

		const diamValue2 = secondDiam.options[secondDiam.selectedIndex].value,
			numValue2 = secondNum.options[secondNum.selectedIndex].value;

		if (diamValue2 === '2 метра') {
			diam2 = price * 0.2;
		}
		if (numValue2 === '2 штуки') {
			num2 = price * 0.3;
		} else if (numValue2 === '3 штуки') {
			num2 = price * 0.5;
		}

		total = price + diam + num + bilge + diam2 + num2;
		calcResult.value = total;
	};

	constructor.addEventListener('change', event => {
		const target = event.target;

		if (target.matches('select') || target.matches('input')) {
			countSum();
		}
	});

	constructor.addEventListener('click', event => {
		let target = event.target;

		if (target.closest('.construct-btn')) {
			panelDefault.forEach((item, i) => {
				if (item.contains(target)) {
					panel[i].classList.remove('in');
					console.log('да');
				} else {  // нужно довести до ума
					panel[i].classList.add('in');
					console.log('нет');
				}
			});
		}

		target = target.closest('.panel-heading');

		if (target) {
			const context = target.nextElementSibling;
			panel.forEach((item, i) => {
				if (item === context) {
					panel[i].classList.add('in');
				} else {
					panel[i].classList.remove('in');
				}
			});
		}
	});
};

export default calc;
