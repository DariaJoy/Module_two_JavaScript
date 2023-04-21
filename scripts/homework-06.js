const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const validNumber = (userNumber) => {
	if (userNumber === null) {
		alert(`До свидания! Спасибо за игру`) 
		return;
	} else if (isNaN(userNumber)) {
		alert(`Введите цифиренное значение!`);
	} else if (userNumber === '') {
		alert(`Введите что-нибудь`);
	} else {
		return true;
	}
};

const runGame = () => {
		
	const MIN_VAL = 1;
	const MAX_VAL = 10;
    const MAX_TRY_COUNT = 3;
	let userTryCount = MAX_TRY_COUNT;
    
	const needNumber = getRandomNumber(MIN_VAL, MAX_VAL);
	console.log(needNumber)

	const loop = () => {
		if (userTryCount === 0) {
			const runAnotherGame = confirm(`У вас закончились попытки, хотите сыграть ещеё?`);
			if (runAnotherGame === true) {
				runGame();
			} else {
				alert(`До свидания! Спасибо за игру!`)
				return;
			}	
		}
		const userNumber = prompt(`Введите число от 1 до 10 за ${MAX_TRY_COUNT} попытки`);		
		if (validNumber(userNumber)) {
			const answer = Number.parseInt(userNumber)
			if (answer > needNumber) {
				userTryCount--
				alert(`Ваше число больше загаданного. Попыток осталось: ${userTryCount}`)
				loop()
			} else if (answer < needNumber){
				userTryCount--
				alert(`Ваше число меньше загаданного. Попыток осталось: ${userTryCount}`)
				loop()
			} else if (answer === needNumber) {
				const runAnotherGame = confirm(`Поздравляем, Вы угадали! Число использованных попыток: ${MAX_TRY_COUNT - userTryCount + 1}. Хотите сыграть еще?`)
				if (runAnotherGame === true) {
					runGame()
				} else {
					alert(`До свидания! Спасибо за игру!`)
					return;
				}
			} 		
		} else return; 			
	};
	loop();
};