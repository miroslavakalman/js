/*Работа с объектом Date в JavaScript
//311
let date = new Date();

console.log(date.getFullYear()); // год
console.log(date.getMonth());    // месяц
console.log(date.getDate());     // день

//312
//Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.

let date = new Date();
function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

console.log(
    date.getHours() + ':' +
    date.getMinutes() + ':' +
    date.getSeconds() + ' ' +
    addZero(date.getDate()) + '.' +
	addZero(date.getMonth() + 1) + '.' +
	addZero(date.getFullYear())
);

//313
let str = ('2023-10-12');
let res = str.split('-').reverse().join('.');
console.log(res); 

//314
//1
let date = new Date();
console.log(date.getDay());

//2
let date = new Date();
let day = date.getDay();
console.log(day);
if (day != 6 && day != 7){
    console.log("Рабочий день");
    }else{
        console.log("Выходной!");
    }

//3
let date = new Date();
let day = date.getDay();
const ost = 7 - day;
console.log(`До ближайшего воскресенья осталось ${ost} дней`);

//315
let date = new Date();
let currmonth = date.getMonth();
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
console.log(months[currmonth]);

//316
let date = new Date('2008-01-12'); 
let day  = date.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);

//317
let date = new Date(2025, 1, 1, 23, 59, 59);
console.log(date.getTime());

//318
//1
let now  = new Date();
let date = new Date(2015, 11, 4, 23, 59, 59);
let diff = now.getTime() - date.getTime();
console.log(diff / ((1000 * 60 * 60))/24);

//2
let now  = new Date();
let date = new Date(2008, 1, 12, 6, 29, 30);
let diff = now.getTime() - date.getTime();
console.log(diff / (1000 * 60 * 60)/24/365);

//319
let date1  = new Date(2000, 9, 1);
let date2 = new Date(2010, 2, 15);

let diff = date2 - date1; 
console.log(diff);     
console.log(diff / (1000 * 60 * 60)/24);
console.log(diff / (1000 * 60 * 60)/24/12);
console.log(diff / (1000 * 60 * 60)/24/365);

//323
function checkDate(year, month, day) {
  const date = new Date(year, month, day);
  const valid = !isNaN(date.getTime()) && date.getMonth() === month && date.getDate() === day;
  return valid;
}

console.log(checkDate(2025, 0, 31)); 
console.log(checkDate(2025, 0, 32)); 

//324
let now  = new Date(); 
let date = new Date(now.getFullYear(), 11, 31); 
console.log(date.getDay());

//326
//1
let now  = new Date();
let date = new Date(now.getFullYear() + 1, 11, 31);
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let dayofweek = days[date.getDay()];
console.log(dayofweek);

//2
let now  = new Date();
let date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let dayofweek = days[date.getDay()];
console.log(dayofweek);

//3
let now  = new Date();
let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let dayofweek = days[date.getDay()];
console.log(dayofweek);

//332
//1
let now = new Date();
let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let secondsPassed = Math.floor((now - startOfDay) / 1000);
console.log(secondsPassed);

//2

let now = new Date();
let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
let secondsLeft = Math.floor((endOfDay - now) / 1000);
console.log(secondsLeft);

//3

let now = new Date();
let newYear = new Date(now.getFullYear() + 1, 0, 1);
let daysLeft = Math.floor((newYear - now) / (1000 * 60 * 60 * 24));
console.log(daysLeft);

//4

function countFridaysThe13th(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) { 
      count++;
    }
  }
  return count;
}

let currentYear = new Date().getFullYear();
let fridaysThe13thCount = countFridaysThe13th(currentYear);
console.log(fridaysThe13thCount);

//5

const today = new Date();
today.setMonth(today.getMonth() - 3);
const year3MonthsAgo = today.getFullYear();
console.log(year3MonthsAgo);


//6
const today = new Date();
const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
const dayOfWeek = lastDayOfMonth.getDay();
const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
console.log(daysOfWeek[dayOfWeek]);


//7
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const currentYear = new Date().getFullYear();
const isCurrentYearLeap = isLeapYear(currentYear);

console.log(`Текущий год ${currentYear} ${isCurrentYearLeap ? "високосный" : "не високосный"}.`);


//8
function findPreviousLeapYear(currentYear) {
  while (!isLeapYear(currentYear)) {
    currentYear--;
  }
  return currentYear;
}

const currentYear = new Date().getFullYear();
const previousLeapYear = findPreviousLeapYear(currentYear);
console.log(`Предыдущий високосный год относительно текущего: ${previousLeapYear}.`);


//9

function findNextLeapYear(currentYear) {
  while (!isLeapYear(currentYear)) {
    currentYear++;
  }
  return currentYear;
}

const currentYear = new Date().getFullYear();
const nextLeapYear = findNextLeapYear(currentYear);

console.log(`Следующий високосный год после текущего: ${nextLeapYear}.`);

//333
let date1 = '2020-11-31';
let date2 = '2020-12-01';
console.log(date1 > date2); 

//334
let date1 = '09-21';
let date2 = '09-23';
console.log(date1 < date2); 

//335
function getZodiacSign(month, day) {
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "Овен";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "Телец";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "Близнецы";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "Рак";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "Лев";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "Дева";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "Весы";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "Скорпион";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "Стрелец";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "Козерог";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "Водолей";
  } else {
    return "Рыбы";
  }
}

const month = 1; 
const day = 12; 
const zodiacSign = getZodiacSign(month, day);
console.log(`Знак Зодиака: ${zodiacSign}`);

*/
