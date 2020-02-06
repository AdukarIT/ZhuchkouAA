/*массивы*/

/* 1 */
function one(){
 let numbers=[];
for(let i=0; i<10; i++){
  numbers[i]=2*1+i*2
}
alert(numbers) 
}
//one()



/* 2 */
function two(){
 let numbersSecond=[];
for(let i=0; i<10; i++){
  numbersSecond[i]=i*5
}
alert(numbersSecond) 
}
//two()



/* 3 */
function three(){
let x=+prompt('введите x');
let y=+prompt('введите y');
let z=+prompt('введите z');
let three=[];
three.push(x,y,z)
let num=three[0];

for(let i=1; i<three.length; i++){
	if(three[i]>num){
  	num=three[i]
  }
}
for(let j=0; j<three.length; j++){
	three[j]=three[j]/num
}
console.log(three)
}

//three()

/* 4 */
function three(){
let three=[100,200,300,400,500,600,700,800,900,1000];
let num=three[0];

for(let i=1; i<three.length; i++){
	if(three[i]>num){
  	num=three[i]
  }
}
for(let i=0; i<three.length; i++){
	three[i]=three[i]/num
}
console.log(three)
let temp;
let j=1;
for(let i=0; i<three.length/2; i++){     
	temp=three[i]                         
	three[i]=three[three.length-j]
	three[three.length-j]=temp
	j++
	}
}
//three()


  	  
/* 5 */ 
function long(){
let list=[];
for(i=1; i<=35; i++ ){
	list.push(i)
}
let newDigits = list.splice(0,10)
for(i=0; i<newDigits.length; i++){
	list.push(newDigits[i])
}
let j=1;
for(i=10; i<(20+10)/2; i++){
	let temp=list[i]
	list[i]=list[20-j]
	list[20-j]=temp
	j++
}
let deg=1;
for(i=20; i<=24; i++){
	list.fill(2**deg, i,i+1)
	deg+=1
}
list.fill(1, 25, 30)
let string = list.splice(30, 5)
list.push(string.join(' '))
console.log(list)
}
//long()   


/* 6 */ 
function removeRepeatElement(){
let randomDigits=[3,2,3,4,5,3,7,8,9,1,2,3]
for(let i=0; i<randomDigits.length; i++){
	let temp=randomDigits[i]
	while(randomDigits.indexOf(temp, i+1)!=-1){
	randomDigits.splice(randomDigits.indexOf(temp, i+1), 1)
 	}
}
console.log(randomDigits)
}
//removeRepeatElement()

/* 7 */
function removeFalse(){
let randomDigits=[0,'',3,4,5,0,7,8,9,0,2,3]
for(let i=0; i<randomDigits.length; i++){
	if(randomDigits[i]){

	}
	else{
		randomDigits.splice(i,1)
	}
	
}
console.log(randomDigits)
}
//removeFalse()
