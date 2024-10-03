"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
console.log('Вы классический зритель')
}

else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман')
}
else {30
  console.log('Произошла ошибка')
}

for (let i = 0; i < 2; i++) {
  let a = prompt("Один из последних просмотренных фильмов?", "");
  let b = prompt("На сколько оцените его?", "");
  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

console.log(personalMovieDB);
