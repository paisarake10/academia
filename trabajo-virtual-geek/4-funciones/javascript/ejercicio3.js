'use strict';

function ticketIva (a)
{
	const precio = a;
	const iva = precio * (21/100);
	const total = precio + iva;
	let result = `Precio sin iva: ${precio}, IVA: ${iva} y Total: ${total}`;
	return result;
}

console.log(ticketIva(10));