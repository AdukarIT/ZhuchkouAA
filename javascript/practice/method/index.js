// 2. Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента: длину нужного массива, минимальное 
// и максимальное значения элементов.

function array(n, min, max){
  let arr = [];
	for(i=1; i<=n; i++){
    arr.push(Math.floor(Math.random()*(max - min + 1)) + min)
  }
    console.log(arr)
}

//array(20, 5, 50)



// 3. Напишите функцию, которая проверяет, начинается ли строка на https:// и заканчивается ли она на .html. 
// Если оба условия выполнены, функция возвращает true, в ином случае – false.

function link(str){
  if(str.indexOf('https://', 0)==0 && str.indexOf('.html')==((str.length)-5)){
    return true
  }
  return false
}

//link('https://www.tut.by/news.html')



// 5. Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы одним и тем же символом 
// (например, 'A' == 'a').

function symbol(str, symb){
  str=str.toLowerCase()
  let i=0;
  let n=0;
  do{
  if(str[i]==symb){
    n++
    i++
  }
  else{
    i++
  }
  } while (i!=str.length-1);
  console.log(n)
}
//symbol('https://wWw.tut.by/news.html','w')



// 6. Напишите функцию, которая выводит в консоль текущие дату, месяц и год в формате «24 января 2019».

function time(){
  let now = new Date();
  let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 
  'ноября', 'декабря',]
  console.log(now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear())
}
//time()



// 7.Напишите функцию, которая выводит в консоль количество секунд, прошедших с начала текущего дня.

function sec(){
  let now = new Date();
  let startDay= new Date(now.getFullYear(), now.getMonth(), now.getDate());
  console.log('прошло ' + Math.round((Date.now() - startDay.getTime())/1000) + ' секунд')
}

//sec()



// 8. Напишите функцию, которая принимает от пользователя строку. Если эта строка не содержит буквы «ф», 
// сгенерируйте собственную ошибку. Вызовите функцию так, чтобы при возникновении «поймать» ошибку в try/catch.

function parser(str){
  if(str.indexOf('ф')==-1){
    throw new Error('Ошибка! Строка не содержит буквы ф')
  }
}


function catchErr(){
  try {
    parser('ункция')
  }
  catch (Error) {
    console.log('Исключение возникло!')
  }
  finally {
    console.log('Эта строка выполняется всегда')
  }
}

//catchErr()
