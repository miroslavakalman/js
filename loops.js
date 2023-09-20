//144
let arr = ['a', 'b', 'c', 'd', 'e'];{
    console.log(elem);
}

//145
//1
let obj = {x: 1, y: 2, z: 3};
for (let key in obj){
    console.log(key);
}
//2
let obj = {x: 1, y: 2, z: 3};
for (let key in obj){
    console.log(obj[key]);
}

//146
let i = 1;
while (i<=100){
    console.log(i);
    i++;
}

//2
let i = 11;
while( i <= 33){
    console.log(i);
    i++;
}

//3
let num = 250;
let iterations = 0;
while (num < 1000){
    num = num * 3;
    iterations++;
}
console.log(num);
console.log(iterations);

//147
//1
for (let i = 1; i <= 100; i++) {
	console.log(i); 
}

//2
for (let i = 11; i <= 33; i++) {
	console.log(i); 
}

//3
for (let i = 0; i <= 100; i += 2) {
	console.log(i); 
}

//4
for (let i = 1; i <= 99; i += 2){
    console.log(i);
}

//5
for (let i = 100; i > 0; i--){
    console.log(i);
}

//148
//1
let arr = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}

//2
let arr = ['a', 'b', 'c', 'd', 'e'];
for  (let i = 1; i < arr.length - 1; i++) {
	console.log(arr[i]);
}

//3
let arr = ['a', 'b', 'c', 'd', 'e'];
for  (let i =  arr.length - 1; i >= 0; i--) {
	console.log(arr[i]);
}

//4
let arr = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i <= arr.length - 1; i++) {
	console.log(arr[i]);
}

//149
let arr = [2, 5, 9, 15, 1, 4];
for (let elem of arr){
    if(elem > 3 && elem < 10){
        console.log(elem);
    }
}

//2
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj) {
	if (obj[key] % 2 != 0) {
		console.log(obj[key]);
	}
}

//150
//1
let res = 0;
for (let i = 2; i <= 100; i += 2) {
	res = res + i;
}
console.log(res); 

//2
let res = 0;
for (let i = 1; i <= 99; i += 2) {
	res = res + i;
}
console.log(res); 

//3
let res = 1;
for (let i = 1; i <= 20; i ++ 1) {
	res = res * i;
}
console.log(res); 

//151
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
	res += elem;
}
console.log(res);

//2
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let elem of arr) {
    if(elem % 2 == 0){
        res += elem;
    }
}
console.log(res);

//3
let arr = [2, 5, 9, 3, 1, 4];
let res = 0;
for (let i = 0; i < arr.length; i++){
    res += arr[i] ** 2;
}
console.log(res);

//4
let arr = [2, 5, 9, 3, 1, 4];
let res = 1;
for (let i = 0; i < arr.length; i++){
    res *= arr[i] ;
}
console.log(res);

//152
let str = '';
for (let i = 0; i < 5; i++) {
	str += '-';
}
console.log(str); 

//2
let str = '';
for (let i = 1; i <= 9; i++) {
	str += i;
}
console.log(str)

//3
let str = '';
for (let i = 9; i >= 1; i--) {
	str += i;
}
console.log(str)

//4
let str = '';
for (let i = 1; i <= 9; i++) {
	str += '-' + i;
}
console.log(str)

//153
for (let i = 1; i <= 1000; i++) {
	const first = parseInt(i.toString()[0]);
    console.log(first);
}

//2
for (let i = 10; i <= 1000; i++) {
    const digits = i.toString();
        if (digits.length >= 2) {
            const firstDigit = parseInt(digits[0]);
            const secondDigit = parseInt(digits[1]);
            const sum = firstDigit + secondDigit;
        console.log(sum);
    }
}

//3
for (let i = 10; i <= 1000; i++) {
    const firstDigit = parseInt(i.toString()[0]);
        if (firstDigit === 1) {
            console.log(i);
            }
}

//4
for (let i = 10; i <= 1000; i++) {
    const digits = i.toString();
    
    if (digits.length >= 2) {
        const firstDigit = parseInt(digits[0]);
        const secondDigit = parseInt(digits[1]);
        const sum = firstDigit + secondDigit;
    
        if (sum === 5) {
            console.log(i);
        }
    }
}

//154
//1
const numbers = [1, 2, 3, 0, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0) {
    break;
    }
    console.log(numbers[i]);
}

//2
const numbers = [1, 2, 3, -4, 5, 6];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        break;
    }
    sum += numbers[i];
}
console.log(sum);

//3
const numbers = [1, 2, 3, 4, 3, 5];
const indexOf3 = numbers.indexOf(3);
console.log(indexOf3);

//4
let sum = 0;
let count = 0;
while (sum <= 100) {
    count++;
    sum += count;
}   
console.log("Для получения суммы больше 100, нужно сложить " + count + " целых чисел, начиная с 1.");

//156
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        document.write(i);
    }
}
//2
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i.toString() + j.toString());
    }
}

//159
//1
let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

console.log(arr);

//2
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push('x');
}
console.log(arr);

//3
const originalArray = [1, -2, 3, -4, 5, 6];
const positiveNumbersArray = [];

for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] > 0) {
        positiveNumbersArray.push(originalArray[i]);
    }
}

console.log(positiveNumbersArray);

//160
//1
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
}

console.log(arr);

//2
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] - 1;
}

console.log(arr);

//3
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 10;
}

console.log(arr);

//161
//1
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const daysOfWeek = {};

for (let i = 0; i < arr1.length; i++) {
    daysOfWeek[arr1[i]] = arr2[i];
}

console.log(daysOfWeek);

//2
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const evenObj = {};

for (const key in obj) {
    if (obj[key] % 2 === 0) {
        evenObj[key] = obj[key];
    }
}

console.log(evenObj);

//3
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const newObj = {};

for (const key in obj) {
    newObj[obj[key]] = key;
}

console.log(newObj);

//162
//1
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
    obj[key] = obj[key] * obj[key];
}

//2
let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
    obj[key] = obj[key] + 1;
}

//163
//1
let arr = ['a', 'b', 'c', 'd', 'e'];
let hasC = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'c') {
        hasC = true;
        break;
    }
}

if (hasC) {
    console.log('+++');
} else {
    console.log('--');
}

//2
let number = 1; 

let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else if (number > 1 && number <= 3) {
    isPrime = true;
} else if (number % 2 === 0 || number % 3 === 0) {
    isPrime = false;
} else {
    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) {
            isPrime = false;
            break;
        }
        i += 6;
    }
}

if (isPrime) {
    console.log(number + ' - простое число');
} else {
    console.log(number + ' - не простое число');
}

//164
let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let i = 0; i < arr.length; i++){
    let firstDigit = parseInt(arr[i].toString()[0]);
    if(firstDigit === 1 || firstDigit === 2){
        sum += arr [i];
    }
}
console.log(sum);

//165
let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
    if (elem[0] === '2') {
        sum += +obj[elem];
    }
}

console.log(sum);

//166
//1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//2
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
//3
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
//4
let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}
//5
let res = 0;

for (let i = 1; i <= 10; i++) {
    res += i;
}

console.log(res);

//6
let res = 1;

for (let i = 1; i <= 10; i++) {
    res *= i;
}

console.log(res);

//7
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += parseInt(elem);
}

console.log(sum); 

//8
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum); 
//9
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum);

//10
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum); 

//11
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum);

//12
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum);

//13
let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
}

console.log(arr);

//14
let arr = [];

for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr);

//15
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
    sum += obj[elem];
}

console.log(sum);

//16
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
    sum = +obj[key];
}

console.log(sum);

//17
let arr = [1, 2, 3, 4, 5];
let res = '---';

for (let elem of arr) {
    if (elem === 3) {
        res = '+++';
        break; // Добавляем break, чтобы прервать цикл после нахождения числа 3
    }
}

console.log(res);

//18
let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr);

//19
let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
    if (elem === 3) {
        res = true;
        break;
    }
}

console.log(res);

//20
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    if (elem % 2 === 0) {
        console.log(elem);
    }
}

//21
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];
for (let elem of arr) {
    if (elem % 2 !== 0) {
        res.push(elem);
    }
}

console.log(res);

//167
//1
for(let i = 1; i <= 100; i++){
    console.log(i);
}

//2
for(let i = 100; i >= 1; i--){
    console.log(i);
}

//3
for(let i = 2; i <= 100; i += 2){
    console.log(i);
}

//4
let arr = [];
for(let i = 0; i < 10; i++){
   arr.push('x');
}
console.log(arr);

//5
let arr = [];
for(let i = 1; i <= 10; i++){
   arr.push(i);
}
console.log(arr);

//6
let arr = [3, 8, 12, 5, 15, 1, 9];
for (let elem of arr) {
    if (elem > 0 && elem < 10) {
    console.log(elem);
    }
}

//7
let arr = [2, 4, 6, 8, 10];
let hasFive = false;

for (let elem of arr) {
    if (elem === 5) {
        hasFive = true;
        break;
    }
}

if (hasFive) {
    console.log("Есть элемент со значением 5");
} else {
    console.log("Нет элемента со значением 5");

//8
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let elem of arr) {
    sum += elem;
}

console.log(sum);
//9
let arr = [1, 2, 3, 4, 5];
let sumOfSquares = 0;

for (let elem of arr) {
    sumOfSquares += elem ** 2;
}

console.log(sumOfSquares);

//10
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let elem of arr) {
    sum += elem;
}

let average = sum / arr.length;
console.log(average);

//12
let arr = [];

for (let i = 10; i >= 1; i--) {
    arr.push(i);
}

console.log(arr);

//13
let arr = [1, -2, 3, -4, 5, -6];
let sumOfPositives = 0;

for (let elem of arr) {
    if (elem > 0) {
        sumOfPositives += elem;
    }
}

console.log(sumOfPositives);

//14
let arr = [10, 20, 30, 50, 235, 3000];

for (let elem of arr) {
    let strElem = elem.toString();
    if (strElem[0] === '1' || strElem[0] === '2' || strElem[0] === '5') {
        console.log(elem);
    }
}
//15
let arr = [1, 2, 3, 4, 5];
let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}

console.log(reversedArr);

//16
let arr = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
        console.log(arr[i]);
    }
}

//17
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    document.write(elem + "");
}

//18
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    document.write("<p>" + elem + "</p>");
}

//19
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < daysOfWeek.length; i++) {
    if (i >= 5) {
        document.write("<strong>" + daysOfWeek[i] + "</strong>");
    } else {
        document.write(daysOfWeek[i] + "");
    }
}

//20
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currentDay = new Date().getDay(); 

for (let i = 0; i < daysOfWeek.length; i++) {
    if (i === currentDay) {
        document.write("<em>" + daysOfWeek[i] + "</em>");
    } else {
        document.write(daysOfWeek[i] + "");
    }
}

//21

let obj = {
employee1: 100,
employee2: 200,
employee3: 300,
employee4: 400,
employee5: 500,
employee6: 600,
employee7: 700,
};

for (let key in obj) {
    obj[key] *= 1.1; 
}
console.log(obj);

//22
let obj = {
employee1: 100,
employee2: 200,
employee3: 300,
employee4: 400,
employee5: 500,
employee6: 600,
employee7: 700,
};

for (let key in obj) {
    if (obj[key] <= 400) {
        obj[key] *= 1.1; 
    }
}

console.log(obj);

//23
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let resultObj = {};

for (let i = 0; i < arr1.length; i++) {
    resultObj[arr1[i]] = arr2[i];
}

console.log(resultObj);

//24

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKeys = 0;
let sumValues = 0;

for (let key in obj) {
    sumKeys += +key;
    sumValues += obj[key];
}

let result = sumKeys / sumValues;
console.log(result);

//25
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let keysArr = [];
let valuesArr = [];

for (let key in obj) {
    keysArr.push(key);
    valuesArr.push(obj[key]);
}

console.log(keysArr);
console.log(valuesArr);

//26
let obj = {
1: 125,
2: 225,
3: 128,
4: 356,
5: 145,
6: 281,
7: 452,
};
let filteredArr = [];

for (let key in obj) {
    if (obj[key].toString().startsWith('1') || obj[key].toString().startsWith('2')) {
        filteredArr.push(obj[key]);
    }
}

console.log(filteredArr);

//27
let arr = ['a', 'b', 'c', 'd', 'e'];
let resultObj = {};

for (let i = 0; i < arr.length; i++) {
    resultObj[i + 1] = arr[i];
}

console.log(resultObj);

//28
let arr = ['a', 'b', 'c', 'd', 'e'];
let resultObj = {};

for (let i = 0; i < arr.length; i++) {
    resultObj[arr[i]] = i + 1;
}

console.log(resultObj);