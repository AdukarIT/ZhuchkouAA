/* 1th task*/
function trigon(a,b,c){
	if (c==Math.sqrt(b**2+a**2)){
		alert('true')
		return true
	}
		alert('false')
		return false
}
// trigon(10,24,26)


/* 2th task*/
function repeat(str='',n=2){
	let sum='';
	for(let i=1; i<=n; i++){
	sum+=str
	}
	alert(sum)
	return sum
}
//repeat('String', 5)


/* 3th task*/
function amount(c, d){
	if ((c/2-d)>0){
		alert('не хватает ' + Math.ceil(c/2-d) + ' парт')
		return ('не хватает ' + Math.ceil(c/2-d) + ' парт')
	}
	else if(((c+1)/2-d)<0){
		alert(Math.floor((c+1)/2-d) + ' лишних парт')
		return (Math.floor((c+1)/2-d) + ' лишних парт')
	}
	alert('все в норме')


}

//amount(26, 13)


/* 4th task*/
function grade(x){
	switch (x) {
        case 10:
            return `Brilliant`;
        case 9:
            return `Excellent`;
        case 8:
            return `Almost excellent`;
        case 7:
            return `Very good`;
        case 6:
            return `Good`;
        case 5:
            return `Almost good`;
        case 4:
        case 3:
            return `Satisfactory`;
        case 2:
        case 1:
            return `Unsatisfactory`;
        default:
            return `error`;
        }}

//grade(2)



/* 5th task*/
function zero(){
do{
	x=+prompt('введите число X');

} while(x!=0)
alert('Введен 0, ура!')
}

//zero()


/* 6th task*/
function zeroSecond(){
let sum=0,
	n=0;
do{
	x=+prompt('введите число');
	sum+=x;
	console.log(sum);
	n+=1;

} while(sum<100)
alert('Введено ' + n + ' чисел')
return n;
}

//zeroSecond()


/* 7th task*/
function simple(){
	n=+prompt('введите число')
	for(let i=2; i<=n; i++){
		if(n%i!=0 && i+1!=n){
			continue
		}
		else if(n%i!=0 || n==2){
			alert('число простое')
			return
		}
		else{ alert('число составное')
		return	
		}
		}
		}

//simple()

/* 8th task*/
function season(x){
	if(x==1 || x==2 || x==12){
		alert('Winter')
	}
	else if(3<=x && x<=5){
		alert('Spring')
	}
	else if(6<=x && x<=8){
		alert('Summer')
	}
	else if(9<=x && x<=11){
		alert('Autumn')
	}
	else{
		alert('error')
	}
}

//season(112)


/* 9th task*/

function seven(){
	for(i=99; i>=10; i--){
		if(i%7==0 || (i%10)%7==0 && (i%10!=0)){
			console.log(i)
		}
	}
}

//seven()

/* 10-11th task*/
function divider(x, y){
	for(y; y<=x; y++){
		if(x%y==0){
			console.log(y)
		}
	}
}
//divider(20, 2)

/* 12th task*/
function size(size, unit){
	if(unit=='Gb'){
		alert(size*1024*1024*1024 + ' байт')
	}
	else if(unit=='Mb'){
		alert(size*1024*1024 + ' байт')
	}
	else if(unit=='Kb'){
		alert(size*1024 + ' байт')
	}	
}
// size(1, 'Gb')
// size(1, 'Mb')
// size(1, 'Kb')



/* 13th task*/
function commonFactor(x,y){
	let i;
	if(x>=y){
	i=y;
	}
	else if(x<y){
	i=x;
	}
	for(i ; i>0; i--){
		if(x%i==0 && y%i==0){
			alert(i)
			return i
		}
	}
}

//commonFactor(214255, 3367125)




/* 14th task*/
function first(x,y){
	let i;
	if(x>=y){
	i=y;
	}
	else if(x<y){
	i=x;
	}
second()
function second(){
	if(x%i==0 && y%i==0){
		alert(i)
		return i;
	}

		--i
		return second();
}}

//first(2920,4745)

/* 15th task*/
function words(){
	let n=+prompt('введите кол-во карандашей')
	if(n>=5 && n<=20 || n%10>=5 && n%10<=9 || n%10==0 || n==0){
		alert(n + ' карандашей')
	}
	else if(n%10==1){
		alert(n + ' карандаш')
	}
	else if(n%10>=2 && n%10<=4){
		alert(n + ' карандаша')
	}

}

//words()


/* 16th task*/

// let c=+prompt('введите число')
// 	a=1,
// 	b=1;
// for(b; b<=9; b++){
// 	a=1
// 	sum(c)
// }


// function sum(c){
// 	if(c==a*a+b*b){
// 		alert('можно, эти числа ' + a +' и ' + b)
// 		return b=10
// 	}
// 	else if(a<9){
// 	a=a+1;
// 	return sum(c)
//     }
// }







