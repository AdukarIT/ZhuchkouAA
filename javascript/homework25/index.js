//1. Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике) и создаёт на его основе новый. 
// Элементы нового массива – объекты вида {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}.
//  initial – значение элемента исходного массива с тем же индексом, sqrt – корень квадратный из этого значения.
//   Если округление sqrt по обычным математическим правилам сходится с его округлением через floor,
//    то floor = true, а ceil = false. Если сходится с округлением через ceil - наоборот.
// 	Например, пусть у исходного массива arr[0] = 19, тогда в новом массиве 
// 	newArr[0] = {initial: 19, sqrt: 4.358898943540674, floor: true, ceil: false}.
// 2. Добавьте в каждый элемент массива из задачи 1 ещё одно свойство: значение sqrt, округлённое до сотых
function array(n, min, max){
	let arr = [];
	  for(i=1; i<=n; i++){
	  arr.push(Math.floor(Math.random()*(max - min + 1)) + min)
	}
	  return arr
  }

function addNewArr(){
  let arr = array(10, 5, 30)
  let newArr = [];
	for(i=0; i<arr.length; i++){
    newArr[i] = {
      initial : arr[i],
      sqrt : (Math.round(Math.sqrt(arr[i])*100))/100,
      floor : Math.floor(Math.sqrt(arr[i]))===Math.round(Math.sqrt(arr[i])),
      ceil : Math.ceil(Math.sqrt(arr[i]))===Math.round(Math.sqrt(arr[i]))
    }
  }
}
//addNewArr()



// 3. Напишите функцию, которая определяет, является ли строка палиндромом.

function isPalindrome(line) {
  line=line.toLowerCase()
	let original=line.split('');
  let flag=1;
  for(i=0; i<original.length; i++){
  if(original[i]==' ' || original[i]==',' || original[i]==':' || original[i]=='.' || original[i]=='-'
  || original[i]==';'){
    original.splice(i,1)
    i--
  }}
	for(i=0; i<original.length; i++){
		if(original[i]!=original.reverse()[i]){
      flag=0;
      return false
		}
	}
	if(flag){
  return true
	}
}

//isPalindrome('Ты, милок, иди яром: у дороги мина, за дорогой огород, а за ним и город у моря; иди, коли мыт')



// 4. Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего. 
// Если таких символов несколько, функция должна возвращать строку из этих символов.

function repeatSymbol(str){
  let obj = {};
  let n = -1;
  let sum = 0;
  let max;
  let finalStr='символ(ы) - ';
  for( let i = 0 ; i < str.length ; i++){
    let temp = str[i]
    if(n>sum){
      sum=n
      max=str[i-1]
      obj[str[i-1]]=sum+1
    }
    else if(n==sum){
      obj[str[i-1]]=n+1
    }
    
    n=-1;
    for( let j = 0 ; j < str.length ; j++ ){
      if(temp==str[j] && j!=i){
        n++
      }
    }}
    let flag;
    for(let key in obj){
      flag=key
      finalStr+=' ' + '\'' + key + '\''
    }
  if(flag==undefined){
    return('всех символов по одному')
  }
  else{
    return(finalStr)
  }
}
//console.log(repeatSymbol('qwertybnmuiopasdfghjklzxcvbnm1234567890-=,.'))



// 5. Напишите функцию, которая получает в аргументы три строки – str, search, replace. 
// Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и 
// возвращает результат.

function replaceStr(str, search, replace){
  for(let i=0;i<str.length;i++){
    if(str.indexOf(search, i)!=-1){
  n=str.indexOf(search, i)
  str=str.split('')
  str.splice(n , search.length, replace )
  str=str.join('')
    }
}
return str
}


//replaceStr('cutwwwcutrscut', 'cut', 'paste')



// 6. Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.

function Upper(str){
  str=str.split('')
  str[0]=str[0].toUpperCase()
  for(i=0; i<str.length; i++){
  if(str[i]==' '){
    str[i+1]=str[i+1].toUpperCase()
  }}
  str=str.join('')
  console.log(str)
}

//Upper('которая замяняет первую букву каждого слова в строке')



// 7. Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки.
//  Например, строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".

function replaceSymbol(str){
  str=str.split('')
  for(let i=0; i<str.length; i++){
    temp = str[i];
    for(let j = 0; j<str.length; j++){
      if(str[i]!=' ' && i!=j && temp==str[j]){
        str[j]='*'
      }
    }
  }
  str=str.join('')
  console.log(str)
}

//replaceSymbol('я учусь программированию')



// 8. Напишите функцию, которая возвращает текущий день недели на русском языке.
function dayOfWeek(userDate){
  let now = new Date();
  let x;
  if(userDate){
    now = userDate
    x=Math.ceil(now.getTime()/86400000%7)
  }
  else{
  x=Math.floor(Date.now()/86400000%7)
  }
  switch(x) {
    case 0:
      return 'четверг'
      break;
    case 1:
      return 'пятница'
      break;
    case 2:
      return 'суббота'
      break;
    case 3:
      return 'воскресенье'
      break; 
    case 4:
      return 'понедельник'
      break; 
    case 5:
      return 'вторник'
      break; 
    case 6:
      return 'среда'
      break; 
  }
}
//dayOfWeek()



// 9. Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и, 
// используя функцию из задачи 8, выдаёт в консоль день недели для этой даты.

function dayOfUserDate(str){
  day=str.slice(0, 2)
  month=str.slice(3, 5)-1
  year=str.slice(6)
  let newDate =new Date(year,month,day);
  dayOfWeek(newDate)
}
//dayOfUserDate('24-01-1994')



// 10. Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ".
//  Напишите функцию, которая выводит в консоль количество дней, оставшихся до его дня рождения.
//   Напишите функцию, которая возвращает дату,
//    в которую пользователь отметит ближайший 1000-дневный юбилей (например, 11000 дней).

function happyBirthday(str){
  let now = new Date();
  let temp;
  day=str.slice(0, 2)
  month=str.slice(3, 5)-1
  year=now.getFullYear()
  let birthday =new Date(year,month,day);
  if(Date.parse(birthday)-Date.now()<0){
    birthday.setFullYear(birthday.getFullYear() + 1)
    temp=(Date.parse(birthday)-Date.now())/(1000*60*60*24)
    console.log('осталось ' + Math.floor(temp) + ' дней до дня рождения')
  }
  else{
    console.log('осталось ' + Math.floor((Date.parse(birthday)-Date.now())/(1000*60*60*24)) + ' дней до дня рождения')
  }

}
//happyBirthday('24-10-1994')

function happy1000Birthday(str){
  day=str.slice(0, 2)
  month=str.slice(3, 5)-1
  year=str.slice(6, 10)
  let birthday = new Date(year, month, day);
  number=Math.floor(Date.parse(birthday)/1000/60/60/24)%1000
  temp=1000-number;
  if(number===0){
    console.log(Date())
  }
  else{
  let next1000Birthday =new Date(Date.now() + temp*24*60*60*1000);
  console.log(next1000Birthday)
  }

}
//happy1000Birthday('24-10-1994')



// 11. Напишите функцию, которая принимает число, проверяет, является ли оно квадратом целого числа. 
// Если это так, функция возвращает квадратный корень исходного числа; в ином случае генерирует 
// ошибку. Используя задачу 2 из практики, создайте массив целых чисел. Вызовите написанную функцию 
// для каждого элемента, отлавливая ошибки и выводя в консоль сообщения и о них, и об успешных
//  результатах. Массив должен быть пройден до конца, несмотря на ошибки!

