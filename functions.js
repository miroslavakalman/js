//1
function sumArrayElements(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
}
let array = [1, 2, 3, 4, 5];
let result = sumArrayElements(array);
console.log(result); 
//2
function findDivisors(number) {
    let divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
return divisors;
}
let num = 12;
let divisors = findDivisors(num);
console.log(divisors); 
//3
function stringToCharArray(str) {
    return str.split('');
}
let text = "Hello";
let charArray = stringToCharArray(text);
console.log(charArray); 

//4
function reverseString(str) {
    return str.split('').reverse().join('');
}
let text = "Hello";
let reversedText = reverseString(text);
console.log(reversedText); 

//5
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let text = "hello";
let capitalizedText = capitalizeFirstLetter(text);
console.log(capitalizedText); 

//6
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
let text = "hello world";
let capitalizedText = capitalizeWords(text);
console.log(capitalizedText); 

//7
function fillArrayWithNumbers(n) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
return arr;
}
let n = 5;
let numbersArray = fillArrayWithNumbers(n);
console.log(numbersArray);

//8
function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
return sum;
}
let num = 12345;
let digitSum = sumOfDigits(num);
console.log(digitSum); 

//9
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
let year = 2024;
let isLeap = isLeapYear(year);
console.log(isLeap); 

//10
function secondsToDays(seconds) {
	return seconds / (60 * 60 * 24);
}
let seconds = 86400;
let days = secondsToDays(seconds);
console.log(days); 

//11
function getRandomElementFromArray(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
let items = ["apple", "banana", "cherry", "date"];
let randomItem = getRandomElementFromArray(items);
console.log(randomItem); 

//12
function isPrime(number) {
	if (number <= 1) {
		return false;
	}
	if (number <= 3) {
		return true;
	}
	if (number % 2 === 0 || number % 3 === 0) {
		return false;
	}

	let i = 5;
	while (i * i <= number) {
		if (number % i === 0 || number % (i + 2) === 0) {
			return false;
		}
	i += 6;
	}
return true;
}

let num = 17;
let isPrimeNum = isPrime(num);
console.log(isPrimeNum); 