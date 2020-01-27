let taskOne = () => {
let x=+prompt('введите номер квартиры');
if(x>0 && x<=20){
	console.log('вы живёте в 1 подъезде')
}
else if(x>20 && x<=40){
	console.log('вы живёте во 2 подъезде')
}
else if(x>40 && x<=60){
	console.log('вы живёте во 3 подъезде')
}
else if(x>60 && x<=80){
	console.log('вы живёте во 4 подъезде')
}
else if(x>80 && x<=100){
	console.log('вы живёте во 5 подъезде')
}
else{
	console.log('в вашем доме нету квартиры с таким номером')
}}
//taskOne();



let taskTwo = () => {
let x=prompt('введите марку автомобиля');
switch(x){
	case 'BMW':
	console.log(x + ' страна происхождения Германия');
	break;
	case 'Ford':
	console.log(x + ' страна происхождения Сша');
	break;
	case 'Mercedes':
	console.log(x + ' страна происхождения Германия');
	break;
	case 'Audi':
	console.log(x + ' страна происхождения Германия');
	break;
	case 'Volkswagen':
	console.log(x + ' страна происхождения Германия');
	break;
	case 'Mitsubishi':
	console.log(x + ' страна происхождения Япония');
	break;
	case 'Peugeot':
	console.log(x + ' страна происхождения Франция');
	break;
	default:
	console.log(x + ' страна происхождения неизвестна')
}}
//taskTwo();



let taskThree = () => {
let x=prompt('введите год');
if(x%4==0 && x%100!==0 || x%400===0){
	console.log('этот год является високосным')
}
else {
	console.log('этот год не является високосным')
}}
//taskThree();



let taskFour = () => {
let x=prompt('введите число от 1 до 20');
if (x<=20 && x>0){
for (let i = 1; i <= 10; i++) {
	console.log(x + 'x' + i + '=' + x*i)
}}
else{
	console.log('Введено неправильное значение');
}}
//taskFour();



let taskFiveFirst = () => {
let x=0;
for (let i = 1; i < 51; i++) {
	if(i%2){
		x += i
	}}
console.log(x)
}

let taskFiveSecond = () => {
let x=0;
for (let i = 1; i < 51; i++) {
	if(i%2===0)continue;
	x += i	
}
console.log(x)
}
//taskFiveFirst();
//taskFiveSecond();



let taskSix = () => {
let x=1;
let y=1;
console.log(x);
console.log(y);
for (let i=3; i<=15; i++) {
	let z = x + y;
    x = y;
    y = z;
    console.log(y)
}}
//taskSix();



let taskSeven = () => {
let x='#',
 	y=' ';
for (let i=1; i<=8; i++){
	if(i%2)
	console.log(y + x + y +x + y +x + y +x + y)
	else
	console.log(x + y +x + y +x + y +x + y)
}}
//taskSeven();


  












