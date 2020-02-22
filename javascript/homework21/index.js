 /*1th task*/
 function comparison(x, y, z) {
    if (x >= y && x >= z){
    alert(x)
    return x
    }
    else if (y >= x && y >= z){
    alert(y)
    return y
    }
    else if (z >= x && z >= y){
    alert(z)
    return z
    }
}
//comparison(33,11,33)   




 /*2th task*/
 function Sum(d, h, m) {
    let sum = d * 24 * 3600 + h * 3600 + m * 60;
    alert(sum)
    return Sum;
}
//sum(1,1,1) 



 /*3th task*/
function factor(x) {
	let i = 1;
	let sum = 1;
	while (i <= x) {
    sum = sum * i
    i += 1
    }
   	alert(sum)
}
//factor(5)



 
let i = 1,
	z = 1;
function factorRecursion(y) {
	if ( z > y){
		alert(i);
		return i;
	}
	i *= z
	++z
	return factorRecursion(y);
}
//factorRecursion(11)


 /*4th task*/

function number(x) {
	if (x === 0){
		return 0
	}
	let buf = x;
	let i = -1;
	for ( ; buf != 0 ; i++) {
		buf = (buf - buf % 10) / 10
	}
	return (x % 10) * 10**i + number((x - x % 10) /10)
}											

// console.log(number(123456789000111))



 /*5th task*/

function eq(a, b, c) {
	let d,
	x,
	x1,
	x2;
	d = b**2 - 4 * a * c;
	if (d < 0) {
		console.log('нет корней')
		return 0;
	}
	else if (d == 0) {
		x = (-b) / (2 * a)
		console.log(x)
		return x
	}
	else if (d > 0) {
		x1 = (-b + Math.sqrt(d)) /2 * a
		x2 = (-b - Math.sqrt(d)) /2 * a
		console.log(x1 + ' , ' + x2)
		return x1
	}

}
//eq(1,1,-6)











