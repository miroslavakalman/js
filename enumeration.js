//Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
/*let arr = [1, 2, 3, 4, 5];

let res = arr.map(function(elem) {
	return Math.sqrt(elem);
});

console.log(res);
//Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
let arr = [1, 2, 3, 4, 5];

let res = arr.map(function(elem) {
	return elem + '!';
});

console.log(res);
//Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядк???????????
let arr = ['123', '456', '789'];
arr = arr.map((str) => str.split('').reverse().map(Number));
console.log(arr);
/*Дан следующий массив:

let arr = ['123', '456', '789'];
Используя метод map преобразуйте этот массив в следующий:

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
let arr = ['123', '456', '789'];

for (let i = 0; i < arr.length; i++) {
arr[i] = arr[i].split('').map(Number);
}

console.log(arr);

//Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
let arr = [1, 2, 3, 4, 5];

let result = arr.map(function(elem, index) {
	return elem * index;
});

console.log(result);*/

//Метод forEach для перебора массива в JavaScript
/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem) {
    square = elem * elem
	sum += square
});
console.log(sum);*/

/*Метод filter для фильтрации массива в JavaScript
//Дан массив с числами. Оставьте в нем только положительные числа.
let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let res = arr.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});
//Дан массив с числами. Оставьте в нем только отрицательные числа/
let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let res = arr.filter(function(elem) {
	if (elem <0){
		return true;
	} else {
		return false;
	}
});

console.log(res);


//Дан массив с числами. Оставьте в нем только числа, которые больше нуля, но меньше 10
let arr = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let res = arr.filter(function(elem) {
	if (elem > 0 && elem < 10){
		return true;
	} else {
		return false;
	}
});

console.log(res); 
//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr = ["NoWETet", "5ertQ", "jsPmIMFi"];

let filteredArr = arr.filter((str) => str.length > 5);

console.log(filteredArr); 
//Дан массив с числами. Оставьте в нем только те числа, произведение которых на их порядковый номер меньше 30.
let arr = [1, 2, 3, 5, 46, 34];

let filteredArr = arr.filter((num, index) => num * index < 30);

console.log(filteredArr);
//Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только обычные элементы
let arr = [1, 2, [3, 4], 5, [6, 7]];
let flatArr = arr.flat();
console.log(flatArr);

//Метод every для проверки массива в JavaScript

let arr = [1, 2, 3, 4, 5];

let check = arr.every(function(elem) {
	if (elem > 0) {
		return true;
	} else {
		return false;
	}
});

console.log(check);

//Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
let arr = [1, 2, 3, 4, 5];
let filteredArr = arr.every((num, index) => num * index < 30);
console.log(filteredArr); 

//Метод some для проверки массива в JavaScript

//Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
let arr = [2, 4, 6, 8];

let result = arr.some(function(elem) {
	return elem > 0;
});

console.log(result);

//Дан массив с числами. Проверьте то, что хотя бы для одного элемента произведение его значения на порядковый номер больше 30.

let arr = [2, 4, 6, 8];

let filteredArr = arr.some((num, index) => num * index < 30);
console.log(filteredArr); 

//Оператор spread в JavaScript
function func(num1, num2, num3, num4, num5) {
	return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...[1, 2, 3, 4, 5]));

//Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.
let arr = [1, 2, 3, 4, 5]
let max = Math.min(...arr);
console.log(min);

//Оператор rest 
//Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.
function avgArithm(...args){
    if(args.length === 0){
        return 0;
    }
    const sum = args.reduce((total, num) => total + num, 0);
    return sum / args.length;
}
console.log(avgArithm(5, 10, 20));*/

