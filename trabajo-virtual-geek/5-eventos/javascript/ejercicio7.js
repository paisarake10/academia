'use strict';
// elementos html
const ul = document.querySelector(".listado");
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const boton = document.querySelector("button");

const inceptionClass = document.querySelector(".inception");
const butterflyClass = document.querySelector(".butterflyeffect");
const eternalClass = document.querySelector(".eternalsunshine");
const blueClass = document.querySelector(".bluevelvet");
const splitClass = document.querySelector(".split");
// funciones

function anhadirNombres()
{
	inceptionClass.innerHTML = inception;
	butterflyClass.innerHTML = theButterFlyEffect;
	eternalClass.innerHTML = eternalSunshineOfTheSM;
	blueClass.innerHTML = blueVelvet;
	splitClass.innerHTML = split;
}

boton.addEventListener('click', anhadirNombres);

function anhadirEventos(event)
{
	// const ul = event.currentTarget; todo el UL con sus LI
	const itemSelected = event.target;
	console.log(itemSelected.innerHTML);	
}

ul.addEventListener("click", anhadirEventos);

