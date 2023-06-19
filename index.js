const input = document.querySelector('#date');
const result = document.querySelector('.result');
const btn = document.querySelector('#btn');
const dateToday = new Date();

btn.addEventListener('click', remainDays)

function remainDays() {
	let inputUser = input.value;
	if (inputUser!=''){
	let inputData = Date.parse(inputUser);
	let daysPassed = Math.floor((inputData-dateToday)/(1000*60*60*24));
	result.classList.add('correctDate');
	if ((daysPassed>=11 && daysPassed<=14) || (daysPassed%100>=11 && daysPassed%100<=14)){
		result.textContent = `До вашего дня рождения осталось ${daysPassed} дней.`;
		return;
	}
	if (daysPassed%10===0) {
		result.textContent = `До вашего дня рождения осталось ${daysPassed} дней.`;
		return;
	}
	if (daysPassed%10===1) {
		result.textContent = `До вашего дня рождения остался ${daysPassed} день.`;
		return;
	}
	if (daysPassed%10>=2 && daysPassed%10 <= 4) {
		result.textContent = `До вашего дня рождения осталось ${daysPassed} дня.`;
		return;
	}
	if (daysPassed%10>=5 && daysPassed%10 <= 9) {
		result.textContent = `До вашего дня рождения осталось ${daysPassed} дней.`;
		return;
	}
} else {
	result.classList.add('wrongDate');
	result.textContent = 'Введите дату!';	
}
}