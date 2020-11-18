'use strict';
const edad = document.querySelector('span').innerHTML;
const horaDia = 24;
const anho = 365;
const horaAnho = horaDia * anho;
const horaEdad = horaAnho * parseInt(edad);

console.log("Una persona con una edad de " + edad + " ha vivido "+ horaEdad 
	+ " horas.")