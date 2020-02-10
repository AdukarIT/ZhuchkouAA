
let Minsk = {
  name : 'Minsk',
  population : 12345678,
  getinfo : info
  }
let Grodno = {
  name : 'Grodno',
  population : 2345678,
  getinfo : info
}
let Vitebsk = {
  name : 'Vitebsk',
  population : 3345678,
  getinfo : info
}
let Mogilev = {
  name : 'Mogilev',
  population : 1345674,
  getinfo : info
}
let Gomel = {
  name : 'Gomel',
  population : 1244674,
  getinfo : info
}
let Brest = {
  name : 'Brest',
  population : 1345674,
  getinfo : info
}

let array = [Minsk,Grodno,Gomel,Mogilev,Brest,Vitebsk];

/*4. Напишите функцию, которая принимает массив из задачи 3 в качестве параметра и выводит 
в консоль информацию о каждом городе.*/


function infoOfSity(obj){
	for(i=0; i<obj.length; i++){
		console.log('Население города ' + obj[i].name + ' составляет: ' + obj[i].population + ' человек')
	}
}
//infoOfSity(array)

/*5. Создайте в объектах с городами из задачи 3 метод getInfo, который возвращает строку с информацией
 о городе (например, в таком формате: "Город Добруш, население – 18760 человек").
*/

function info(){
  console.log('Город ' + this.name + ', население - ' + this.population + ' человек')
  }
//Minsk.getinfo()


/*6. Создайте объект с информацией о себе (имя, фамилия, любимое занятие). Добавьте в него метод,
 который выводит эту информацию в консоль в удобочитаемом формате.*/

let myInfo = {
	name: 'Artsiom ',
	lastname: 'Zhuchkou ',
	hobby: 'learn javascript',
	print: log
}
function log(){
	for(let prop in this){
		if(prop!='print')
		console.log(prop + ' : ' + this[prop])
	}
}
//myInfo.print()