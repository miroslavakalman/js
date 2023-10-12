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
