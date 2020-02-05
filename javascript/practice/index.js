/* 1th task*/
function trigon(a,b,c){
	if(a<=0 || b<=0 || c<=0){
		alert('error')
	}
	else if (c==Math.sqrt(b**2+a**2)){
		alert('true')
		return true
	}
	else	alert('false')
		return false
}
//trigon(10,24,26)


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
		alert (Math.abs(Math.floor((c+1)/2-d)) + ' лишних парт')
		return (Math.abs(Math.floor((c+1)/2-d)) + ' лишних парт')
	}
	alert('все в норме')


}

//amount(24, 10)


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
		if(i%7==0 || i%10==7){
			console.log(i)
		}
	}
}

//seven()





/* 10-11th task*/
function divider(x, y){
	for( ; x<=y ; x++ ){
		console.log('делители для ' + x + ':')
	for(let i=2 ; i <= x ; i++ ){
		if(x%i==0){
			console.log(i)
		}
	}
	}}
//divider(2, 245)

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
	let divider=2;
	let commonDivider=1;
	while(x!=1){
		if(x%divider==0){
			x/=divider          
			if(y%divider==0){
				y/=divider        
				commonDivider*=divider
			}
		}
		else{
			divider++
		}
	}
	console.log(commonDivider)
}
//commonFactor(214255, 3367125)


function euclid(x,y){
	while(x!=0){
		let i=x
		x=y%x
		y=i
	}
	alert(y)
	return y
}
//euclid(214255,3367125)


/* 14th task*/
function commonFactorRec(x,y,divider=2,commonDivider=1){
	if(x!=1){
		if(x%divider==0){
			x/=divider             
			if(y%divider==0){
				return commonFactorRec(x, y/=divider,divider,commonDivider*=divider)
			}
		}
		else {
			return commonFactorRec(x,y,divider=divider+1,commonDivider)
		}
	}
	console.log(commonDivider)
}
//commonFactorRec(214255,3367125)



function euclidRec(x,y){
	if(x==0){
		alert(y)
		return y
	}
	else{
		return euclidRec(y%x,x)
	}
}
//euclidRec(214255,3367125)




/* 15th task*/
function words(){
	let n=+prompt('введите кол-во карандашей')
	if(n%10>=5 && n%10<=9 || n%10==0 || n%100>=5 && n%100<=19){
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
// for(; b<=9; b++){
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

function sum(){
	c=+prompt('введите число')
	let a=0;
	let b=1;
	while(a<10){
		a+=1
		b=1
		while(b<10){
			if(c==a*a+b*b){
				alert('можно, эти числа ' + a +' и ' + b);
				return
			}
			else{
				b++
			}

	}}
	alert('нельзя')
}
//sum()

