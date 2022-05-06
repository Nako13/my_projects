'use strict';

function getCoupeNumber(setnumber) {
	if (typeof (setnumber) !== 'number' || setnumber < 0 || !Number.isInteger(setnumber)) {
		return 'Ошибка.Проверьте правильность веденного номера места!';
	}
	if (setnumber == 0 || setnumber > 36) {
		return 'Таких мест в вагоне не существует!';
	}

	for (let i = 4; i < 36; i += 4) {
		if (setnumber < i) {
			return Math.ceil(i / 4);
		}
	}
}

console.log(getCoupeNumber(10));