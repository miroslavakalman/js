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
