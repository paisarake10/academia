'use strict';
const h3 = document.querySelector('h3');

let nombre = "juan camilo";
let nombreCompa = "Micheliz pacheco";
if (h3.innerHTML === nombre || h3.innerHTML === nombreCompa) 
	{
		h3.innerHTML = `Bienvenid@, ${nombre}/${nombreCompa}`;
	} else {
		h3.innerHTML = "Lo siento pero el usuario que haz introducido \
		no esta registrado!"
	}


