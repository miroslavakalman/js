//Деструктуризация массивов в JavaScript
В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 
let [name, surname, department, position, salary] = arr;
console.log(name);
console.log(position);
console.log(salary); 

//следующем коде части массива записываются в соответствующие переменные:

function func() {
	return ['John', 'Smit', 'development', 
		'programmer', 2000]; 
}

let arr = func();

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];
let position   = arr[3];
let salary     = arr[4];
Переделайте этот код через деструктуризацию согласно изученной теории.
function func() {
	return ['John', 'Smit', 'development', 
		'programmer', 2000]; 
}

let [name, surname, department, position, salary] = func();
console.log(salary);

//В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 

let department = arr[2];
let position   = arr[3];

//Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 
let [, , department, position] = arr;
console.log(department);
В следующем коде части массива записываются в соответствующие переменные:

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 

let name    = arr[0];
let surname = arr[1];

let info = arr.slice(2); // все элементы 
	со второго до конца массива 
Переделайте этот код через деструктуризацию согласно изученной теории.

let arr = ['John', 'Smit', 'development', 
	'programmer', 2000]; 
let [, , department, position, salary] = arr;
console.log(salary);

//Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ['John', 'Smit', 'development', 'programmer'];

let name       = arr[0];
let surname    = arr[1];
let department = arr[2];

let position;
if (arr[3] !== undefined) {
	position = arr[3];
} else {
	position = 'trainee';
}
let arr = ['John', 'Smit', 'development', 'programmer'];
let [name, surname, department, position = 'trainee'] = arr;
console.log(position);
*/

//Функции по умолчанию при деструктуризации массива в JavaScript

