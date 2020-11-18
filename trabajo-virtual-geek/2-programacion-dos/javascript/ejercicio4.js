'use strict';
const chupito = 2
const cuenta = 128 - chupito;
const personas = 9;
const valPer = cuenta / personas;
const anaCta = valPer + chupito;

console.log("Cada persona debe pagar: " + valPer + ", a diferencia de Ana que "+
	"tiene que pagar "+anaCta) 