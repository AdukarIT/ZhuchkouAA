/*1. Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет, есть ли в
 этом объекте свойство с именем, равным этой строке.*/

 let string = {
 	name: 'arnold',
 	birth: 1990
 }
function first(obj,str){
	for(let prop in obj){
		if(prop==str){
			console.log('такое свойство есть : ' + prop)
		}
	}

}
//first(string, 'birth')


/*2. Создайте объект для хранения своего любимого кулинарного рецепта. Он должен содержать название, 
ингредиенты и их необходимое количество (в виде вложенного объекта), а также количество порций (больше 1).
 Напишите функцию, которая получает "рецепт", подсчитывает, сколько каждого ингредиента нужно на одну порцию,
  и выводит информацию об этом в консоль.*/
let recipe = {
	n:2,
	pizza: {
	cheese: '200',
	flour: '300',
	tomato: '400',
	}}

function cook(obj){
	for(let prop in obj){
		if(prop=='n'){
			number=obj[prop]
		}
		// console.log(obj[prop])
		for(let prop2 in obj[prop]){
			console.log(prop2 + ' put ' + (obj[prop][prop2])/number + 'gram')
		}
	}
}
//cook(recipe)

/*3. Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём
 цилиндра (используя this).*/

let cylinder = {
	r: 10,
	h: 33,
	getVolume: volume
}
function volume(){
	console.log(this.r*this.r*(Math.PI)*this.h)
}

//cylinder.getVolume()


/*4. Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде объекта 
(не менее трёх полей; например, имя, создатель и источник). Добавьте этому объекту свойство canFly.
 Добавьте два метода: sayHello, который выводит в консоль приветствие и представление вашего пингвина,
  и fly, который в зависимости от значения свойства canFly (true или false) определяет, может ли пингвин 
  летать, и сообщает об этом в консоль.*/

  let penguin = {
  	name: 'Private',
  	creator: 'dreamworks',
  	link: 'wikipedia',
  	canFly: false,
  	sayHello: hello ,
  	fly: fly
  }
function hello(){
	console.log('hello! my name is ' + this.name)
}
function fly(){
	if(this.canFly){
		console.log('i can fly!')
	}
	else
	console.log('i can not fly:(')
}

// penguin.sayHello()
// penguin.fly()