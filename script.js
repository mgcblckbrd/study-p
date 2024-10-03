"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");

const obj = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt("Один из последних просмотренных фильмов?", "");
let b = prompt("На сколько оцените его?", "");
let c = prompt("Один из последних просмотренных фильмов?", "");
let d = prompt("На сколько оцените его?", "");

obj.movies[a] = b
obj.movies[c] = d

console.log(obj);
