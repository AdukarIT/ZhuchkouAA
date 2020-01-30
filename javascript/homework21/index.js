 /*1th task*/
 function comparison(x,y,z){
    if (x>y && x>z){
    alert(x)
    return x
    }
    else if(y>x && y>z){
    alert(y)
    return y
    }
    else if(z>x && z>y){
    alert(z)
    return z
    }
}
//comparison(12,22,33)   




 /*2th task*/
 function sum(d,h,m){
    let sum=d*24*3600+h*3600+m*60;
    alert(sum)
    return sum;
}
//sum(1,1,1) 



 /*3th task*/
function factor(x){
	let i=1;
	let sum=1;
	while(i<=x){
    sum=sum * i
    i+=1
    }
   	alert(sum)
}
//factor(5)



 
let i=1,
	z=1;
function factorRecursion(y){
	if( z > y){
		alert(i);
		return i;
	}
	i*=z
	++z
	return factorRecursion(y);
}
//factorRecursion(11)


 /*4th task*/
let buf,
	s='перевернутое число - ';
function backNum(x){
	if (x<1){
		alert(s)
		return s
	}
	buf=x%10
	x=(x-buf)/10
	s=s + buf
	return backNum(x)
}
//backNum(123456789)


 /*5th task*/
let d,
	x,
	x1,
	x2;
function eq(a,b,c){
	d=b**2-4*a*c
	if (d<0){
		console.log('нет корней')
		return 0;
	}
	else if(d==0){
		x = (-b)/(2*a)
		console.log(x)
		return x
	}
	else if(d>0){
		x1=(-b + Math.sqrt(d))/2*a
		x2=(-b - Math.sqrt(d))/2*a
		console.log(x1 + ' , ' + x2)
		return x1
	}

}
//eq(1,1,-6)











