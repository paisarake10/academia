"use strict";
// nombres variables
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
// elementos html
const inceptionClass = document.querySelector(".inception");
const butterflyClass = document.querySelector(".butterflyeffect");
const eternalClass = document.querySelector(".eternalsunshine");
const blueClass = document.querySelector(".bluevelvet");
const splitClass = document.querySelector(".split");
const boton = document.querySelector("button");
// funciones
function anhadirNombre()
{
	inceptionClass.innerHTML = inception;
	butterflyClass.innerHTML = theButterFlyEffect;
	eternalClass.innerHTML = eternalSunshineOfTheSM;
	blueClass.innerHTML = blueVelvet;
	splitClass.innerHTML = split;
}

boton.addEventListener('click', anhadirNombre);

function anhadirConsola(event)
{
	const itemSelected = event.currentTarget;
	itemSelected.classList.toggle(console.log(itemSelected.innerHTML));
	// itemSelected.addEventListener('click', () => console.log(itemSelected.innerHTML));
}

inceptionClass.addEventListener('click', anhadirConsola);
butterflyClass.addEventListener('click', anhadirConsola);
eternalClass.addEventListener('click', anhadirConsola);
blueClass.addEventListener('click', anhadirConsola);
splitClass.addEventListener('click', anhadirConsola);




