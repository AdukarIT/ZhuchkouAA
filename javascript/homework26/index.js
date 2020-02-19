// 1. Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode.
//  Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из первой части практики.

let arr = 'Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.'

function letterCounter(x) {
  arr=arr.split('')
  let n=0;
  for(i=0; i<arr.length; i++){
    if(arr[i].charCodeAt()==x){
      n++
    }
  }
  console.log(n)
}



// 2. Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1,
//  фиксируя искомый символ. Например:

// let countOfD = letterCounter(100);	// 100 = 'd' в Unicode

// console.log(countOfD(["dad", "rod", "doctor"])); // 4


function returnSymbol(x, callback) {
  console.log(String.fromCharCode(x))
  callback(x)
}

//returnSymbol(1072, letterCounter)

// Для решения задач 3-6 используйте файл uscities.js.

//3. Отфильтруйте массив городов так, чтобы в нём остались только города из штата Калифорния, которые
//  с 2000 по 2013 выросли в населении.
function califUp() {
let californiaGrowth = function (elem){
  let temp = elem.growth_from_2000_to_2013
  temp=parseInt(temp)
  return (elem.state == 'California' && temp > 0)
}
let newArray = data.filter(californiaGrowth);
console.log(newArray);
}

//califUp()


// console.log(data.filter(function(elem){
//   let temp = elem.growth_from_2000_to_2013;
//   temp = parseInt(temp)
//   return (elem.state == 'California' && temp > 0)
// }));



//4. Подсчитайте, сколько миллионов населения живёт во всех городах на широте от 25 до 30 градусов.

function population2530() {
  return data.reduce(function(sum, elem){
    if(elem.latitude >= 25 && elem.latitude <= 30){
      let temp = +elem.population
      sum=sum+temp
    }
    return sum
  }, 0)
}
//console.log(population2530())



//5. Создайте массив только из тех городов, которые начинаются на букву D, при этом отсортируйте элементы 
// этого массива по названию города.

function cityD() {
  return data.filter(function(elem){
    return (elem.city.charCodeAt() == 68)
  })
}
let newArrow = cityD()

function callback(first, second){
  if(first.city>second.city) return 1;
  else if(first.city<second.city) return -1;
  else return 0;
}

let sortNewArrow = newArrow.sort(callback)

//console.log(sortNewArrow)



//6. Преобразуйте представленный массив "Города" в объект "Штаты":

// для каждого штата – отдельное свойство объекта (ключ = название штата);
// значение каждого свойства – массив городов;
// каждый элемент массива – название города, население и место в общем рейтинге (rank).
function newObj(){
  let states = {};
  for(i=0; i<data.length; i++){
    let stateTemp = data[i].state;
    let newCity = data.filter(function(elem){
      delete elem.growth_from_2000_to_2013;
      delete elem.latitude;
      delete elem.longitude;
      if(elem.state==stateTemp){
        return true
      }
    });
    
    states[data[i].state]=newCity.filter(function(elem){
      delete elem.state;
      return true
    })
  }
  return states
}
//console.log(newObj())
