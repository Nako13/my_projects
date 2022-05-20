'use strict';

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних посмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');
			if (a != '' && b != '' && a != null && b != null && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Посмотрено довольно мало фильмов!');
		} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман!');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres() {
		for (let i = 1; i < 2; i++) {
			let genre = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
			if (genre === '' || genre === null) {
				console.log('Вы ввели не коретктные данные или не ввели их вовсе');
				i--;
			} else {
				personalMovieDB.genre = genre.split(',');
				personalMovieDB.genre.sort();
			}

		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`);
		});
	}
};