'use strict';

const calculador = (a,b,c,d) => {
	let resultado = 0;
	if (a === true) 
	{
		console.log("Elemento border-box");
		const ancho = b;
		const padding = c;
		const borde = d;
		resultado = `El ancho total de la caja es ${ancho}px`;

	} else {
		console.log("Elemento content-box");
		const ancho = b;
		const padding = c;
		const borde = d;
		resultado = `El ancho total de la caja es ${ancho + padding + borde}px`;
	}

	return resultado;

}

console.log(calculador(true,20,40,10));