'use strict';

const suma = (a,b) => a + b;

function multip(a, suma) 
{
	return a * suma;
}

console.log(suma(2,2));
console.log(multip(5,suma(2,5)));