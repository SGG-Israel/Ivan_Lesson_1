"use strict"; //Строгий режим

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

 //2 типа решения записи данных в объект movies
// первый - через массив

// const answers = [];

// answers[0] = prompt('Один из последних просмотренных фильмов?', '');
// answers[1] = +prompt('На сколько оцените его по десятибальной шкале?', '');

// personalMovieDB.movies[answers[0]] = answers[1];
// console.log(personalMovieDB);

// второй - через объект
const a = prompt("Один из последних просмотренных фильмов?", ''),
      b = prompt("На сколько оцените его по десятибальной шкале?", ''),
      c = prompt("Один из последних просмотренных фильмов?", ''),
      d = prompt("На сколько оцените его по десятибальной шкале?", '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);




// const obj = {
//   name: "Dani",
//   age: 30,
//   isMarryed: true,
// };

// console.log(obj.age);
// console.log(obj["name"]); //Можно  и так обращаться к объекту, но важно ключ заключать в кавычки ['ключ объекта']

//  alert("Hello");

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt("Вам есть 18?", "18"); //Команда prompt даёт нам диалоговое окно с пользователем где мы можем задать вопрос и получить ответ в виде строки. Но если мы перед prompt поставим знак +, то он будет нам возвращить уже то значение которое было набрано (строка или число), и в зависимости от этого мы можем совершать дальнейшие действия. Например при выводе значения  answer мы можем прибавиить число 5. И получим сумму.
// console.log(answer + 5);

// Теперь попытаем пользователя вопросами :)
// const answers = [];

// answers[0] = prompt('What is you name?', '');
// answers[1] = prompt('What is you surname?', '');
// answers[2] = prompt('How old are you?', '');

// document.write(answers);
// console.log(typeof(answers));

//Понятие интерполяции (использование обратных кавычек для объединения строк)
// пример 1
// const category = 'toys';

// console.log(`https://some.come/${category}/some/4`);

// // пример 2

// const user = 'Djoni';

// alert(`Hello, ${user}`);

// 5. && and || (И и ИЛИ), а также оператор отрицания !
// 5.1.
// const isChecked = true,
//       isClose = true;

// console.log(isChecked && isClose); //Выведет значение true

// 5.2.
// const isChecked = true,
//   isClose = false;

// console.log(isChecked && isClose);//Выведет значение false

// 5.3.
// const isChecked = true,
//   isClose = false;

// console.log(isChecked || isClose);//Выведет значение true

// 5.4.(!)
// const isChecked = true,
//   isClose = false;

// console.log(isChecked && !isClose); //Выведет значение true

// 5.5.
// console.log(2 + 2 * 2 !== '6'); //true По идее должно было бы выдать  false  потому как 6 слева это число и оно не равно 6 справа которое строка, но мы поставили знак отрицания перед == и поэтому значение поменялось на обратное.
