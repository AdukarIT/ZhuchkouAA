/* 1. Используя встроенную функцию Math.random(), напишите собственную функцию getRandomArray(len), 
которая возвращает массив случайных чисел длиной len. */

function getRandomArray(len) {
	let randomDegits = [];

	for (let i = 1; i <= len; i++) {
		randomDegits.push( Math.floor( Math.random() * 10 ) )
	}

	return randomDegits
}

//getRandomArray(15)

let randomDigits = getRandomArray(10);


// 2. Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.

function average() {
	let sum = 0;

	for (i = 0; i < randomDigits.length; i++) {
		sum = sum + randomDigits[i];
	}

	let averageNumber = sum / randomDigits.length;

	for (i = 0; i < randomDigits.length; i++) {
		if (randomDigits[i] > averageNumber) {
			console.log(randomDigits[i])
		}
	}
}
//average()



// 3. Найдите два наименьших элемента массива. 

function twoMinDigits() {
	let min1;
	let min2;

	if (randomDigits[0] < randomDigits[1]) {
		min1 = randomDigits[0]
		min2 = randomDigits[1]
	} else {
		min1 = randomDigits[1]
		min2 = randomDigits[0]
	}

	for ( let i = 2; i < randomDigits.length; i++) {
		if (min1 > randomDigits[i]) {
			min2 = min1;
			min1 = randomDigits[i];
		} else {
			if (min2 > randomDigits[i]) {
				min2 = randomDigits[i];
			}
		}
	}

	return (min1 + ' ' + min2)
}

console.log( twoMinDigits() )





// 4. Удалите из массива все элементы, меньше 3. Сдвиньте все оставшиеся элементы вперёд,
//  а на освободившиеся места вставьте нули.
function removeDigits() {
	let num = 0;
	
	for (i = 0; i < randomDigits.length; i++) {
		if (randomDigits[i] < 3) {
			randomDigits.splice(i, 1)
			i -= 1
			num += 1
		}
	}
	for (i = 0; i < num; i++ ) {
		randomDigits.unshift(0)
	}
}

//removeDigits()




// 5. Попарно сложите элементы двух массивов равной длины: первый массива 1 с последним массива 2, 
// второй массива 1 с предпоследним массива 2 и так далее. Верните массив с результатами сложения.

function addition() {
	let firstArr = getRandomArray(10);
	let secondArr = getRandomArray(10);
	let arr=[]

	for (let i = 0; i < firstArr.length; i++) {
		arr[i] = firstArr[i] + secondArr[secondArr.length - i - 1]
	}
	return arr
}

//addition()




// 6. Отсортируйте массив методом пузырька. О самом алгоритме можно почитать на википедии. А ещё можно 
// посмотреть, как его танцуют в Венгрии.


function bubble() {
	let temp;
	let q = 1;

	rec()

	function rec() {
	while (q == 1) {
		q = 0;
	for (let i = 1; i < randomDigits.length; i++){
		if (randomDigits[i - 1] > randomDigits[i]) {
			temp = randomDigits[i];
			randomDigits[i] = randomDigits[i-1];
			randomDigits[i - 1] = temp;
			q = 1;
		}
	}
}
	}
	return randomDigits
}
//bubble()

// 7. (*) Проверьте, есть ли в массиве два числа, сумма которых очень близка к 10 (9.99 < sum < 10.01). 
// Если такая пара (или такие пары) есть, выведите их в консоль.

function sumTwoNumbers() {
	for (let i = 0; i < randomDigits.length; i++) {
		let temp = i;
	for (let j = 0; j < randomDigits.length; j++) {
		if (temp != j) {
			if ((randomDigits[j] + randomDigits[temp]) > 9.99 && (randomDigits[j] + randomDigits[temp]) < 10.01) {
				console.log(randomDigits[j], randomDigits[temp])
			}
		}
	}}
}

//sumTwoNumbers()



// 8. (*) Создайте массив той же длины, что исходный. На месте самого большого числа исходного массива
//  в новом вставьте число 1, на месте второго по величине – 2 и так далее.
function twoArray() {
	let random = getRandomArray(10);
	let randomSecond = getRandomArray(10);
	let temp2 = Infinity;
	let serial = 1;

	for (let j = 0; j < random.length; j++) {
		let temp = -1;
	for (let i = 0; i < random.length; i++) {
		if (temp < random[i] && random[i] < temp2 ) {
			temp = random[i]
			}
		}
	for (let k = 0; k < random.length; k++) {
				if (temp == random[k]) {
					randomSecond[k] = serial;
				}	
		}
	temp2 = temp;
	serial = serial + 1;
	}
	console.log(random)
	console.log(randomSecond)
}


//twoArray()





// 9. (*) Сделайте сдвиг массива вправо на X позиций (X передайте в функцию в качестве аргумента). 
// Элементы, которые после сдвига "уходят" за пределы его длины, 
// переместите на освободившиеся первые Х позиций.




