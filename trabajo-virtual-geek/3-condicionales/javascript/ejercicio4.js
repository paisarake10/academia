'use strict';
let anhosPerroUno = 15;
let anhosPerroDos = 9;
let anhosPerroTresMas = 5;
const anhosPerro = 3;

if (anhosPerro === 1) 
	{
		console.log(`Tu perro en años/hombre tendria ${anhosPerroUno} años`);
	} else if (anhosPerro === 2){
		console.log(`Tu perro en años/hombre tendria ${anhosPerroUno + anhosPerroDos} años`);
	} else {
		let difAnhos = anhosPerro - 2;
		console.log(`Tu perro en años/hombre tendria ${anhosPerroUno + anhosPerroDos + (anhosPerroTresMas * difAnhos)} años`);
	}