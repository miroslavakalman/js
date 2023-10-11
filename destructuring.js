
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

//304
let options = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color, width, height} = options;

console.log(color);  
console.log(width); 
console.log(height); 

//305
let options = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color: c, width: w, height: h} = options;
console.log(c);  
console.log(w); 
console.log(h); 
//306
let options = {
	width:  400,
	height: 500,
};
let {color = 'black', width, height} = options;

console.log(color);
console.log(width);
console.log(height);

//307
let options = {
	width:  400,
	height: 500,
};
let {color:c = 'black', width:w, height:h} = options;

console.log(c);
console.log(w);
console.log(h);

//309
//1
func( ['John', 'Smit', 'development', 
	'programmer', 2000] );
function func([name, surname, department, position, salary]){
    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
    console.log(salary);
}
//2
func( ['John', 'Smit', 'development', 
	'programmer', 2000] );
function func([name, surname, info]){
    console.log(name);
    console.log(surname);
    console.log(info);
}
//3
func( ['John', 'Smit', 'development'] );
function func([name, surname, department, position = 'джуниор']){
    console.log(name);
    console.log(surname);
    console.log(department);
    console.log(position);
}

*/


